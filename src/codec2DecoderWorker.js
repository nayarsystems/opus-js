"use strict";

var decoder;
var mainReadyResolve;
var mainReady = new Promise(function (resolve) { mainReadyResolve = resolve; });

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

global['onmessage'] = function (e) {
    mainReady.then(function () {
        switch (e['data']['command']) {

            case 'decode':
                if (decoder) {
                    decoder.decode(e['data']['pages']);
                }
                break;

            case 'done':
                if (decoder) {
                    decoder.sendLastBuffer();
                    global['close']();
                }
                break;

            case 'init':
                decoder = new Codec2Decoder(e['data'], Module);
                break;

            default:
            // Ignore any unknown commands and continue recieving commands
        }
    });
};

var Codec2Decoder = function (config, Module) {

    if (!Module) {
        throw new Error('Module with exports required to initialize a decoder instance');
    }

    this.mainReady = mainReady; // Expose for unit testing

    this.config = Object.assign({
        bufferLength: 4096, // Define size of outgoing buffer

        mode: 0, // 0 = Mode3200, 1 = Mode2400, 2 = Mode1600, 3 = Mode1400, 4 = Mode1300, 5 = Mode1200, 6 = Mode700, 7 = Mode700B, 8 = Mode700C
        encoderFrameSize: 20, // Specified in ms.
        bytesPerFrame: 8,

        encoderSampleRate: 8000, // Desired encoding sample rate. Audio will be resampled
        originalSampleRate: 48000,
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
    this.HEAP16 = Module.HEAP16;
    this.HEAPF32 = Module.HEAPF32;

    this.outputBuffers = [];
    this.init();
};


Codec2Decoder.prototype.decode = function (typedArray) {
    var dataLength = typedArray.length * typedArray.BYTES_PER_ELEMENT;
    if (dataLength === 0) {
        return;
    }

    var dataOffset = 0;


    var packetLength = Math.min(dataLength - dataOffset, this.decoderBufferMaxLength);
    this.decoderBuffer.set(typedArray.subarray(dataOffset, dataOffset += packetLength), this.decoderBufferIndex);
    this.decoderBufferIndex += packetLength;

    // Decode raw opus packet
    //var outputSampleLength = this._opus_decode_float(this.decoder, this.decoderBufferPointer, typedArray.length, this.decoderOutputPointer, this.decoderOutputMaxLength, 0);
    this._codec2_decode(this.encoder, this.decoderOutputBufferPointer_u16, this.decoderBufferPointer);

    // convert decoderOutputBuffer_u16 to Float32Array
    console.log("vik0t0r output int16", this.decoderOutputBuffer_u16);

    for (let i = 0; i < this.decoderBufferLength; i++) {
        var uint16_sample = this.decoderOutputBuffer_u16[i];
        this.decoderOutput[i] = (uint16_sample / 32767.5) - 1.0;
    }

    console.log("vik0t0r output", this.decoderOutput);
    this.sendToOutputBuffers(this.decoderOutput);

    this.decoderBufferIndex = 0;




};

Codec2Decoder.prototype.init = function () {
    this.resetOutputBuffers();
    this.initCodec();
    this.initResampler();
};

Codec2Decoder.prototype.initCodec = function () {

    if (this.decoder) {
        this._codec2_destroy(this.decoder);
        this._free(this.decoderBufferPointer);
        this._free(this.decoderOutputLengthPointer);
        this._free(this.decoderOutputPointer);
    }


    var errReference = this._malloc(4);
    this.encoder = this._codec2_create(this.config.mode, errReference);
    var errorCode = new Uint32Array(this.HEAPU8.buffer, errReference, 1)[0];
    console.log("Decoder create error:", errorCode, this.encoder);
    this._free(errReference);

    this.decoderBufferLength = this._codec2_samples_per_frame(this.encoder);
    this.bytesPerFrame = this._codec2_bytes_per_frame(this.encoder);

    this.decoderBufferMaxLength = 4000;
    this.decoderBufferPointer = this._malloc(this.decoderBufferMaxLength);
    this.decoderBuffer = this.HEAPU8.subarray(this.decoderBufferPointer, this.decoderBufferPointer + this.decoderBufferMaxLength);
    //this.decoderBufferIndex = 0;

    this.decoderOutputPointer = this._malloc(this.decoderBufferLength * 4); // 4 bytes per sample
    this.decoderOutput = this.HEAPF32.subarray(this.decoderOutputPointer, this.decoderOutputPointer + this.decoderBufferLength);

    // uint16 array 
    this.decoderOutputBufferPointer_u16 = this._malloc(this.decoderBufferLength * 2); // 2 bytes per sample
    this.decoderOutputBuffer_u16 = this.HEAP16.subarray(this.decoderOutputBufferPointer_u16 >> 1, (this.decoderOutputBufferPointer_u16 >> 1) + this.decoderBufferLength);
};

Codec2Decoder.prototype.initResampler = function () {

    if (this.resampler) {
        this._speex_resampler_destroy(this.resampler);
        this._free(this.resampleOutputLengthPointer);
        this._free(this.resampleOutputBufferPointer);
    }

    var errLocation = this._malloc(4);
    this.resampler = this._speex_resampler_init(1, this.config.decoderSampleRate, this.config.outputBufferSampleRate, this.config.resampleQuality, errLocation);
    this._free(errLocation);

    this.resampleOutputLengthPointer = this._malloc(4);
    this.resampleOutputMaxLength = Math.ceil(this.decoderOutputMaxLength * this.config.outputBufferSampleRate / this.config.decoderSampleRate);
    this.resampleOutputBufferPointer = this._malloc(this.resampleOutputMaxLength * 4); // 4 bytes per sample
};

Codec2Decoder.prototype.resetOutputBuffers = function () {
    this.outputBuffers = [];
    this.outputBufferArrayBuffers = [];
    this.outputBufferIndex = 0;


    this.outputBuffers.push(new Float32Array(this.config.bufferLength));
    this.outputBufferArrayBuffers.push(this.outputBuffers[0].buffer);

};

Codec2Decoder.prototype.sendLastBuffer = function () {
    this.sendToOutputBuffers(new Float32Array((this.config.bufferLength - this.outputBufferIndex)));
    global['postMessage'](null);
};

Codec2Decoder.prototype.sendToOutputBuffers = function (mergedBuffers) {
    var dataIndex = 0;
    var mergedBufferLength = mergedBuffers.length;

    while (dataIndex < mergedBufferLength) {
        var amountToCopy = Math.min(mergedBufferLength - dataIndex, this.config.bufferLength - this.outputBufferIndex);

        // here we used to deinterleave but codec2 has only one channel
        this.outputBuffers[0].set(mergedBuffers.subarray(dataIndex, dataIndex + amountToCopy), this.outputBufferIndex);



        dataIndex += amountToCopy;
        this.outputBufferIndex += amountToCopy;

        if (this.outputBufferIndex == this.config.bufferLength) {
            global['postMessage'](this.outputBuffers, this.outputBufferArrayBuffers);
            this.resetOutputBuffers();
        }
    }
};


if (!Module) {
    Module = {};
}

Module['mainReady'] = mainReady;
Module['Codec2Decoder'] = Codec2Decoder;
Module['onRuntimeInitialized'] = mainReadyResolve;

module.exports = Module;