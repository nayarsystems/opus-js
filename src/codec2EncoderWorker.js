"use strict";

function atob(input) {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
    let str = input.replace(/=+$/, '');
    let output = '';

    if (str.length % 4 === 1) {
        throw new Error("'atob' failed: The string to be decoded is not correctly encoded.");
    }

    for (let bc = 0, bs = 0, buffer, i = 0; buffer = str.charAt(i++); ~buffer &&
        (bs = bc % 4 ? bs * 64 + buffer : buffer,
            bc++ % 4) ? output += String.fromCharCode(255 & bs >> (-2 * bc & 6)) : 0
    ) {
        buffer = chars.indexOf(buffer);
    }

    return output;
}
var Codec2Encoder = function (config, Module) {

    if (!Module) {
        throw new Error('Module with exports required to initialize an encoder instance');
    }

    this.config = Object.assign({
        mode: 1, // 1 = Mode3200
        encoderFrameSize: 20, // Specified in ms.
        bytesPerFrame: 8,

        encoderSampleRate: 8000, // Desired encoding sample rate. Audio will be resampled
        originalSampleRate: 44100,
        resampleQuality: 3, // Value between 0 and 10 inclusive. 10 being highest quality.
    }, config);


    this._codec2_create = Module._codec2_create;
    this._codec2_destroy = Module._codec2_destroy;
    this._codec2_encode = Module._codec2_encode;
    this._codec2_decode = Module._codec2_decode;
    this._codec2_samples_per_frame = Module._codec2_samples_per_frame;
    this._codec2_bits_per_frame = Module._codec2_bits_per_frame;
    this._codec2_bytes_per_frame = Module._codec2_bytes_per_frame;

    this._speex_resampler_process_interleaved_float = Module._speex_resampler_process_interleaved_float;
    this._speex_resampler_init = Module._speex_resampler_init;
    this._speex_resampler_destroy = Module._speex_resampler_destroy;

    this._free = Module._free;
    this._malloc = Module._malloc;

    this.HEAPU8 = Module.HEAPU8;
    this.HEAP32 = Module.HEAP32;
    this.HEAPU16 = Module.HEAPU16;
    this.HEAPF32 = Module.HEAPF32;

    this.isReady = Module.isReady;
    if (!this.isReady) {
        Module.onready = function () {
            this.isReady = true;
            this.onready && this.onready();
        }
    }

    this.samplePosition = 0;

    this.initCodec();
    this.initResampler();

    if (this.config.numberOfChannels === 1) {
        this.interleave = function (buffers) { return buffers[0]; };
    }
};

Codec2Encoder.prototype.encode = function (buffers) {

    var exportPages = []
    console.log("vik0t0r: buffers", buffers)

    // Determine bufferLength dynamically
    if (!this.bufferLength) {
        this.bufferLength = buffers[0].length;
        this.interleavedBuffers = new Float32Array(this.bufferLength * this.config.numberOfChannels);
    }

    var samples = this.interleave(buffers);
    var sampleIndex = 0;
    var bufferLength = this.resampler ? this.resampleBufferLength : this.encoderBufferLength;
    var buffer = this.resampler ? this.resampleBuffer : this.encoderBuffer;

    while (sampleIndex < samples.length) {

        var lengthToCopy = Math.min(bufferLength - this.sampleBufferIndex, samples.length - sampleIndex);
        buffer.set(samples.subarray(sampleIndex, sampleIndex + lengthToCopy), this.sampleBufferIndex);
        sampleIndex += lengthToCopy;
        this.sampleBufferIndex += lengthToCopy;

        if (this.sampleBufferIndex === bufferLength) {

            if (this.resampler) {
                this._speex_resampler_process_interleaved_float(this.resampler, this.resampleBufferPointer, this.resampleSamplesPerChannelPointer, this.encoderBufferPointer, this.encoderSamplesPerChannelPointer);
            }
            var packetLength = this._opus_encode_float(this.encoder, this.encoderBufferPointer, this.encoderSamplesPerChannel, this.encoderOutputPointer, this.encoderOutputMaxLength);

            var exportPage = { message: 'page', page: new Uint8Array(this.encoderOutputBuffer.subarray(0, packetLength)), samplePosition: this.samplePosition }

            this.samplePosition += this.encoderSamplesPerChannel;

            exportPages.push(exportPage);

            this.sampleBufferIndex = 0;
        }
    }

    return exportPages;
};

Codec2Encoder.prototype.destroy = function () {
    if (this.encoder) {
        this._free(this.encoderSamplesPerChannelPointer);
        delete this.encoderSamplesPerChannelPointer;
        this._free(this.encoderBufferPointer);
        delete this.encoderBufferPointer;
        this._free(this.encoderOutputPointer);
        delete this.encoderOutputPointer;
        this._opus_encoder_destroy(this.encoder);
        delete this.encoder;
        if (this.resampler) {
            this._free(this.resampleSamplesPerChannelPointer);
            delete this.resampleSamplesPerChannelPointer;
            this._free(this.resampleBufferPointer);
            delete this.resampleBufferPointer;
            this._speex_resampler_destroy(this.resampler);
            delete this.resampler;
        }
    }
};

Codec2Encoder.prototype.initCodec = function () {
    var errLocation = this._malloc(4);
    this.encoder = this._codec2_create(this.config.mode, errLocation);

    this.encoderSamplesPerChannel = this._codec2_samples_per_frame(this.encoder);
    this._free(errLocation);

    this.encoderSamplesPerChannelPointer = this._malloc(4);
    this.HEAP32[this.encoderSamplesPerChannelPointer >> 2] = this.encoderSamplesPerChannel;

    this.sampleBufferIndex = 0;
    this.encoderBufferLength = this.encoderSamplesPerChannel;
    this.encoderBufferPointer = this._malloc(this.encoderBufferLength * 4); // 4 bytes per sample
    this.encoderBuffer = this.HEAPF32.subarray(this.encoderBufferPointer >> 2, (this.encoderBufferPointer >> 2) + this.encoderBufferLength);

    this.encoderOutputMaxLength = 1024; // extremely high
    this.encoderOutputPointer = this._malloc(this.encoderOutputMaxLength);
    this.encoderOutputBuffer = this.HEAPF32.subarray(this.encoderOutputPointer, this.encoderOutputPointer + this.encoderOutputMaxLength);
};

Codec2Encoder.prototype.initResampler = function () {
    if (this.config.originalSampleRate === this.config.encoderSampleRate) {
        this.resampler = null;
        return;
    }

    var errLocation = this._malloc(4);
    this.resampler = this._speex_resampler_init(this.config.numberOfChannels, this.config.originalSampleRate, this.config.encoderSampleRate, this.config.resampleQuality, errLocation);
    this._free(errLocation);

    this.resampleSamplesPerChannel = this.config.originalSampleRate * this.config.encoderFrameSize / 1000;
    this.resampleSamplesPerChannelPointer = this._malloc(4);
    this.HEAP32[this.resampleSamplesPerChannelPointer >> 2] = this.resampleSamplesPerChannel;

    this.resampleBufferLength = this.resampleSamplesPerChannel * this.config.numberOfChannels;
    this.resampleBufferPointer = this._malloc(this.resampleBufferLength * 4); // 4 bytes per sample
    this.resampleBuffer = this.HEAPU16.subarray(this.resampleBufferPointer >> 2, (this.resampleBufferPointer >> 2) + this.resampleBufferLength);
};

Codec2Encoder.prototype.interleave = function (buffers) {
    for (var i = 0; i < this.bufferLength; i++) {
        for (var channel = 0; channel < this.config.numberOfChannels; channel++) {
            this.interleavedBuffers[i * this.config.numberOfChannels + channel] = buffers[channel][i];
        }
    }

    return this.interleavedBuffers;
};

// Run in AudioWorkletGlobal scope
if (typeof registerProcessor === 'function') {

    class EncoderWorklet extends AudioWorkletProcessor {

        constructor() {
            super();
            this.continueProcess = true;
            this.port.onmessage = ({ data }) => {
                if (this.encoder) {
                    switch (data['command']) {

                        case 'getHeaderPages':
                            console.error("codec2Encoder: getHeaderPages not implemented")
                            break;

                        case 'done':
                            //this.encoder.encodeFinalFrame().forEach(pageData => this.postPage(pageData));
                            this.encoder.destroy();
                            delete this.encoder;
                            this.port.postMessage({ message: 'done' });
                            break;

                        case 'flush':
                            console.error("codec2Encoder: flush not implemented")

                            break;

                        default:
                        // Ignore any unknown commands and continue recieving commands
                    }
                }

                switch (data['command']) {

                    case 'close':
                        this.continueProcess = false;
                        break;

                    case 'init':
                        this.encoder = new Codec2Encoder(data, Module);
                        this.port.postMessage({ message: 'ready' });
                        break;

                    default:
                    // Ignore any unknown commands and continue recieving commands
                }
            }
        }

        process(inputs) {
            if (this.encoder && inputs[0] && inputs[0].length && inputs[0][0] && inputs[0][0].length) {
                var pages = this.encoder.encode(inputs[0])
                //console.debug("Worklet proces:", pages)
                pages.forEach(pageData => this.postPage(pageData));
            }
            return this.continueProcess;
        }

        postPage(pageData) {
            if (pageData) {
                this.port.postMessage(pageData, [pageData.page.buffer]);
            }
        }
    }

    registerProcessor('encoder-worklet', EncoderWorklet);
}

// run in scriptProcessor worker scope
else {
    var encoder;
    var postPageGlobal = (pageData) => {
        if (pageData) {
            postMessage(pageData, [pageData.page.buffer]);
        }
    }

    onmessage = ({ data }) => {
        if (encoder) {
            switch (data['command']) {

                case 'encode':
                    encoder.encode(data['buffers']).forEach(pageData => postPageGlobal(pageData));
                    break;

                case 'getHeaderPages':
                    console.error("codec2Encoder: getHeaderPages not implemented")
                    break;

                case 'done':
                    //encoder.encodeFinalFrame().forEach(pageData => postPageGlobal(pageData));
                    encoder.destroy();
                    encoder = null;
                    postMessage({ message: 'done' });
                    break;

                case 'flush':
                    console.error("codec2Encoder: flush not implemented")

                    break;

                default:
                // Ignore any unknown commands and continue recieving commands
            }
        }

        switch (data['command']) {

            case 'close':
                close();
                break;

            case 'init':
                encoder = new Codec2Encoder(data, Module);
                postMessage({ message: 'ready' });
                break;

            default:
            // Ignore any unknown commands and continue recieving commands
        }
    };
}



// Exports for unit testing.
var module = module || {};
module.exports = {
    Module: Module,
    Codec2Encoder: Codec2Encoder
};