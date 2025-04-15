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
        decoder = new RawOpusDecoder(e['data'], Module);
        break;

      default:
      // Ignore any unknown commands and continue recieving commands
    }
  });
};

var RawOpusDecoder = function (config, Module) {

  if (!Module) {
    throw new Error('Module with exports required to initialize a decoder instance');
  }

  this.mainReady = mainReady; // Expose for unit testing
  this.config = Object.assign({
    bufferLength: 4096, // Define size of outgoing buffer
    decoderSampleRate: 48000, // Desired decoder sample rate.
    outputBufferSampleRate: 48000, // Desired output sample rate. Audio will be resampled
    resampleQuality: 3, // Value between 0 and 10 inclusive. 10 being highest quality.
    numberOfChannels: 1,
  }, config);

  this._opus_decoder_create = Module._opus_decoder_create;
  this._opus_decoder_destroy = Module._opus_decoder_destroy;
  this._speex_resampler_process_interleaved_float = Module._speex_resampler_process_interleaved_float;
  this._speex_resampler_init = Module._speex_resampler_init;
  this._speex_resampler_destroy = Module._speex_resampler_destroy;
  this._opus_decode_float = Module._opus_decode_float;
  this._free = Module._free;
  this._malloc = Module._malloc;
  this.HEAPU8 = Module.HEAPU8;
  this.HEAP32 = Module.HEAP32;
  this.HEAPF32 = Module.HEAPF32;

  this.outputBuffers = [];
  this.init();
};


RawOpusDecoder.prototype.decode = function (typedArray) {
  var dataLength = typedArray.length * typedArray.BYTES_PER_ELEMENT;
  if (dataLength === 0) {
    return;
  }

  var dataOffset = 0;


  var packetLength = Math.min(dataLength - dataOffset, this.decoderBufferMaxLength);
  this.decoderBuffer.set(typedArray.subarray(dataOffset, dataOffset += packetLength), this.decoderBufferIndex);
  this.decoderBufferIndex += packetLength;

  // Decode raw opus packet
  var outputSampleLength = this._opus_decode_float(this.decoder, this.decoderBufferPointer, typedArray.length, this.decoderOutputPointer, this.decoderOutputMaxLength, 0);
  var output;

  output = this.HEAPF32.subarray(this.decoderOutputPointer >> 2, (this.decoderOutputPointer >> 2) + outputSampleLength * this.config.numberOfChannels);

  this.sendToOutputBuffers(output);

  this.decoderBufferIndex = 0;




};

RawOpusDecoder.prototype.getPageBoundaries = function (dataView) {
  var pageBoundaries = [];

  for (var i = 0; i < dataView.byteLength - 4; i++) {
    if (dataView.getUint32(i, true) == 1399285583) {
      pageBoundaries.push(i);
    }
  }

  return pageBoundaries;
};

RawOpusDecoder.prototype.init = function () {
  this.resetOutputBuffers();
  this.initCodec();
  this.initResampler();
};

RawOpusDecoder.prototype.initCodec = function () {

  if (this.decoder) {
    this._opus_decoder_destroy(this.decoder);
    this._free(this.decoderBufferPointer);
    this._free(this.decoderOutputLengthPointer);
    this._free(this.decoderOutputPointer);
  }

  var errReference = this._malloc(4);
  this.decoder = this._opus_decoder_create(this.config.decoderSampleRate, this.config.numberOfChannels, errReference);
  var errorCode = new Uint32Array(this.HEAPU8.buffer, errReference, 1)[0];
  console.log("Decoder create error:", errorCode);
  this._free(errReference);

  this.decoderBufferMaxLength = 4000;
  this.decoderBufferPointer = this._malloc(this.decoderBufferMaxLength);
  this.decoderBuffer = this.HEAPU8.subarray(this.decoderBufferPointer, this.decoderBufferPointer + this.decoderBufferMaxLength);
  //this.decoderBufferIndex = 0;

  this.decoderOutputLengthPointer = this._malloc(4);
  this.decoderOutputMaxLength = this.config.decoderSampleRate * this.config.numberOfChannels * 120 / 1000; // Max 120ms frame size
  this.decoderOutputPointer = this._malloc(this.decoderOutputMaxLength * 4); // 4 bytes per sample
  this.decoderOutput = this.HEAPU8.subarray(this.decoderOutputMaxLength * 4, this.decoderOutputMaxLength * 4 + this.decoderOutputMaxLength * 4);
};

RawOpusDecoder.prototype.initResampler = function () {

  if (this.resampler) {
    this._speex_resampler_destroy(this.resampler);
    this._free(this.resampleOutputLengthPointer);
    this._free(this.resampleOutputBufferPointer);
  }

  var errLocation = this._malloc(4);
  this.resampler = this._speex_resampler_init(this.config.numberOfChannels, this.config.decoderSampleRate, this.config.outputBufferSampleRate, this.config.resampleQuality, errLocation);
  this._free(errLocation);

  this.resampleOutputLengthPointer = this._malloc(4);
  this.resampleOutputMaxLength = Math.ceil(this.decoderOutputMaxLength * this.config.outputBufferSampleRate / this.config.decoderSampleRate);
  this.resampleOutputBufferPointer = this._malloc(this.resampleOutputMaxLength * 4); // 4 bytes per sample
};

RawOpusDecoder.prototype.resetOutputBuffers = function () {
  this.outputBuffers = [];
  this.outputBufferArrayBuffers = [];
  this.outputBufferIndex = 0;

  for (var i = 0; i < this.config.numberOfChannels; i++) {
    this.outputBuffers.push(new Float32Array(this.config.bufferLength));
    this.outputBufferArrayBuffers.push(this.outputBuffers[i].buffer);
  }
};

RawOpusDecoder.prototype.sendLastBuffer = function () {
  this.sendToOutputBuffers(new Float32Array((this.config.bufferLength - this.outputBufferIndex) * this.config.numberOfChannels));
  global['postMessage'](null);
};

RawOpusDecoder.prototype.sendToOutputBuffers = function (mergedBuffers) {
  var dataIndex = 0;
  var mergedBufferLength = mergedBuffers.length / this.config.numberOfChannels;

  while (dataIndex < mergedBufferLength) {
    var amountToCopy = Math.min(mergedBufferLength - dataIndex, this.config.bufferLength - this.outputBufferIndex);

    if (this.config.numberOfChannels === 1) {
      this.outputBuffers[0].set(mergedBuffers.subarray(dataIndex, dataIndex + amountToCopy), this.outputBufferIndex);
    }

    // Deinterleave
    else {
      for (var i = 0; i < amountToCopy; i++) {
        this.outputBuffers.forEach(function (buffer, channelIndex) {
          buffer[this.outputBufferIndex + i] = mergedBuffers[(dataIndex + i) * this.config.numberOfChannels + channelIndex];
        }, this);
      }
    }

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
Module['RawOpusDecoder'] = RawOpusDecoder;
Module['onRuntimeInitialized'] = mainReadyResolve;

module.exports = Module;