

// The Module object: Our interface to the outside world. We import
// and export values on it. There are various ways Module can be used:
// 1. Not defined. We create it here
// 2. A function parameter, function(Module) { ..generated code.. }
// 3. pre-run appended it, var Module = {}; ..generated code..
// 4. External script tag defines var Module.
// We need to check if Module already exists (e.g. case 3 above).
// Substitution will be replaced with actual code on later stage of the build,
// this way Closure Compiler will not mangle it (e.g. case 4. above).
// Note that if you want to run closure, and also to use Module
// after the generated code, you will need to define   var Module = {};
// before the code. Then that object will be used in the code, and you
// can continue to use Module afterwards as well.
var Module = typeof Module !== 'undefined' ? Module : {};

// --pre-jses are emitted after the Module integration code, so that they can
// refer to Module (if they choose; they can also define Module)
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["DecoderWorker"] = factory();
	else
		root["DecoderWorker"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/decoderWorker.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var g;\n\n// This works in non-strict mode\ng = (function() {\n\treturn this;\n})();\n\ntry {\n\t// This works if eval is allowed (see CSP)\n\tg = g || new Function(\"return this\")();\n} catch (e) {\n\t// This works if the window reference is available\n\tif (typeof window === \"object\") g = window;\n}\n\n// g can still be undefined, but nothing to do about it...\n// We return undefined, instead of nothing here, so it's\n// easier to handle this case. if(!global) { ...}\n\nmodule.exports = g;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvd2VicGFjay9idWlsZGluL2dsb2JhbC5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovL0RlY29kZXJXb3JrZXIvKHdlYnBhY2spL2J1aWxkaW4vZ2xvYmFsLmpzP2NkMDAiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIGc7XG5cbi8vIFRoaXMgd29ya3MgaW4gbm9uLXN0cmljdCBtb2RlXG5nID0gKGZ1bmN0aW9uKCkge1xuXHRyZXR1cm4gdGhpcztcbn0pKCk7XG5cbnRyeSB7XG5cdC8vIFRoaXMgd29ya3MgaWYgZXZhbCBpcyBhbGxvd2VkIChzZWUgQ1NQKVxuXHRnID0gZyB8fCBuZXcgRnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpO1xufSBjYXRjaCAoZSkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIHRoZSB3aW5kb3cgcmVmZXJlbmNlIGlzIGF2YWlsYWJsZVxuXHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gXCJvYmplY3RcIikgZyA9IHdpbmRvdztcbn1cblxuLy8gZyBjYW4gc3RpbGwgYmUgdW5kZWZpbmVkLCBidXQgbm90aGluZyB0byBkbyBhYm91dCBpdC4uLlxuLy8gV2UgcmV0dXJuIHVuZGVmaW5lZCwgaW5zdGVhZCBvZiBub3RoaW5nIGhlcmUsIHNvIGl0J3Ncbi8vIGVhc2llciB0byBoYW5kbGUgdGhpcyBjYXNlLiBpZighZ2xvYmFsKSB7IC4uLn1cblxubW9kdWxlLmV4cG9ydHMgPSBnO1xuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/webpack/buildin/global.js\n");

/***/ }),

/***/ "./src/decoderWorker.js":
/*!******************************!*\
  !*** ./src/decoderWorker.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(global) {\n\nvar decoder;\nvar mainReadyResolve;\nvar mainReady = new Promise(function (resolve) {\n  mainReadyResolve = resolve;\n});\nvar decoder, cached;\n\nfunction cacheEvent(evtData) {\n  if (!cached) cached = [];\n  cached.push(evtData);\n}\n\nfunction applyCachedEvents() {\n  if (cached) {\n    for (var i = 0, size = cached.length; i < size; ++i) {\n      global['onmessage']({\n        data: cached[i]\n      });\n    }\n\n    cached = undefined;\n  }\n}\n\nfunction checkReady(decoder, evtData) {\n  if (!decoder.isReady) {\n    cacheEvent(evtData);\n    decoder['onready'] = applyCachedEvents;\n    return false;\n  }\n\n  return true;\n}\n\nglobal['onmessage'] = function (e) {\n  switch (e['data']['command']) {\n    case 'decode':\n      if (checkReady(decoder, e['data'])) {\n        decoder.decode(e['data']['pages'], decoder.sendToOutputBuffers);\n      }\n\n      break;\n\n    case 'done':\n      if (checkReady(decoder, e['data'])) {\n        decoder.sendLastBuffer();\n        global['close']();\n      }\n\n      break;\n\n    case 'init':\n      if (typeof e['data']['bufferLength'] === 'undefined') {\n        e['data']['bufferLength'] = 4096; // Define size of outgoing buffer\n      }\n\n      decoder = new OggOpusDecoder(e['data'], Module);\n      break;\n\n    default: // Ignore any unknown commands and continue recieving commands\n\n  }\n};\n\nvar OggOpusDecoder = function OggOpusDecoder(config, Module) {\n  if (!Module) {\n    throw new Error('Module with exports required to initialize a decoder instance');\n  } // this.mainReady = mainReady; // Expose for unit testingthis.isReady = Module.isReady;\n\n\n  this.isReady = Module.isReady;\n\n  if (!this.isReady) {\n    Module.onready = function () {\n      this.isReady = true;\n      this.onready && this.onready();\n    };\n  }\n\n  this.config = Object.assign({\n    // bufferLength: 4096, // Define size of outgoing buffer\n    decoderSampleRate: 48000,\n    // Desired decoder sample rate.\n    outputBufferSampleRate: 48000,\n    // Desired output sample rate. Audio will be resampled\n    resampleQuality: 3 // Value between 0 and 10 inclusive. 10 being highest quality.\n\n  }, config); // encode \"raw\" opus stream?\n  // -> either config.rawOpus = true/false,\n  //    or config.mimeType = 'audio/opus'\n  //   (instead of 'audio/ogg; codecs=opus')\n\n  this.rawOpus = typeof this.config.rawOpus === 'boolean' ? this.config.rawOpus : /^audio\\/opus\\b/i.test(this.config.mimeType);\n  this._opus_decoder_create = Module._opus_decoder_create;\n  this._opus_decoder_destroy = Module._opus_decoder_destroy;\n  this._opus_decoder_ctl = Module._opus_decoder_ctl;\n  this._speex_resampler_process_interleaved_float = Module._speex_resampler_process_interleaved_float;\n  this._speex_resampler_init = Module._speex_resampler_init;\n  this._speex_resampler_destroy = Module._speex_resampler_destroy;\n  this._opus_decode_float = Module._opus_decode_float;\n  this._free = Module._free;\n  this._malloc = Module._malloc;\n  this.HEAPU8 = Module.HEAPU8;\n  this.HEAP32 = Module.HEAP32;\n  this.HEAPF32 = Module.HEAPF32; // this.outputBuffers = [];\n\n  this.decodedBuffers = [];\n  this.completed = false;\n\n  if (this.config.onInit) {\n    this.oninit = this.config.onInit;\n  }\n\n  if (this.config.onComplete) {\n    this.oncomplete = this.config.onComplete;\n  }\n\n  if (this.config.numberOfChannels > 0) {\n    this.numberOfChannels = this.config.numberOfChannels;\n    this.init();\n  }\n};\n\nOggOpusDecoder.prototype.decode = function (typedArray, onDecoded, userData) {\n  onDecoded = onDecoded || this.handleDecoded;\n  var dataView = new DataView(typedArray.buffer);\n  this.getPageBoundaries(dataView).map(function (pageStart) {\n    var headerType = dataView.getUint8(pageStart + 5, true);\n    var pageIndex = dataView.getUint32(pageStart + 18, true); // Beginning of stream\n\n    if (headerType & 2) {\n      this.numberOfChannels = dataView.getUint8(pageStart + 37, true);\n      this.init();\n    } // Decode page\n\n\n    if (pageIndex > 1) {\n      var segmentTableLength = dataView.getUint8(pageStart + 26, true);\n      var segmentTableIndex = pageStart + 27 + segmentTableLength;\n\n      for (var i = 0; i < segmentTableLength; i++) {\n        var packetLength = dataView.getUint8(pageStart + 27 + i, true);\n        this.decoderBuffer.set(typedArray.subarray(segmentTableIndex, segmentTableIndex += packetLength), this.decoderBufferIndex);\n        this.decoderBufferIndex += packetLength;\n\n        if (packetLength < 255) {\n          var outputSampleLength = this._opus_decode_float(this.decoder, this.decoderBufferPointer, this.decoderBufferIndex, this.decoderOutputPointer, this.decoderOutputMaxLength, 0);\n\n          var resampledLength = Math.ceil(outputSampleLength * this.config.outputBufferSampleRate / this.config.decoderSampleRate);\n          this.HEAP32[this.decoderOutputLengthPointer >> 2] = outputSampleLength;\n          this.HEAP32[this.resampleOutputLengthPointer >> 2] = resampledLength;\n\n          this._speex_resampler_process_interleaved_float(this.resampler, this.decoderOutputPointer, this.decoderOutputLengthPointer, this.resampleOutputBufferPointer, this.resampleOutputLengthPointer);\n\n          onDecoded.call(this, this.HEAPF32.subarray(this.resampleOutputBufferPointer >> 2, (this.resampleOutputBufferPointer >> 2) + resampledLength * this.numberOfChannels), userData);\n          this.decoderBufferIndex = 0;\n        }\n      } // End of stream\n\n\n      if (headerType & 4) {\n        this.completed = true;\n\n        if (this.oncomplete) {\n          this.oncomplete(userData);\n        }\n      }\n    }\n  }, this);\n};\n\nOggOpusDecoder.prototype.decodeRaw = function (typedArray, onDecoded, userData) {\n  onDecoded = onDecoded || this.handleDecoded;\n  var dataLength = typedArray.length * typedArray.BYTES_PER_ELEMENT;\n\n  if (dataLength === 0) {\n    return;\n  }\n\n  var dataOffset = 0;\n\n  if (typeof this.numberOfChannels === 'undefined') {\n    // this.numberOfChannels = typedArray[0] & 0x04 ? 2 : 1;\n    var headerLength = this.decodeHeader(typedArray, this.config.readTags);\n    this.init();\n\n    if (headerLength > 0) {\n      if (headerLength >= dataLength) {\n        return;\n      }\n\n      dataOffset += headerLength;\n    }\n  }\n\n  while (dataOffset < dataLength) {\n    var packetLength = Math.min(dataLength - dataOffset, this.decoderBufferMaxLength);\n    this.decoderBuffer.set(typedArray.subarray(dataOffset, dataOffset += packetLength), this.decoderBufferIndex);\n    this.decoderBufferIndex += packetLength; // Decode raw opus packet\n\n    var outputSampleLength = this._opus_decode_float(this.decoder, this.decoderBufferPointer, typedArray.length, this.decoderOutputPointer, this.decoderOutputMaxLength, 0);\n\n    var output;\n\n    if (this.resampler) {\n      var resampledLength = Math.ceil(outputSampleLength * this.config.outputBufferSampleRate / this.config.decoderSampleRate);\n      this.HEAP32[this.decoderOutputLengthPointer >> 2] = outputSampleLength;\n      this.HEAP32[this.resampleOutputLengthPointer >> 2] = resampledLength;\n\n      this._speex_resampler_process_interleaved_float(this.resampler, this.decoderOutputPointer, this.decoderOutputLengthPointer, this.resampleOutputBufferPointer, this.resampleOutputLengthPointer);\n\n      output = this.HEAPF32.subarray(this.resampleOutputBufferPointer >> 2, (this.resampleOutputBufferPointer >> 2) + resampledLength * this.numberOfChannels);\n    } else {\n      output = this.HEAPF32.subarray(this.decoderOutputPointer >> 2, (this.decoderOutputPointer >> 2) + outputSampleLength * this.numberOfChannels);\n    }\n\n    onDecoded.call(this, output, userData);\n    this.decoderBufferIndex = 0;\n  }\n\n  if (this.oncomplete) {\n    this.oncomplete(userData);\n  }\n\n  return;\n};\n\nOggOpusDecoder.prototype.handleDecoded = function (typedArray) {\n  this.decodedBuffers.push(typedArray);\n};\n\nOggOpusDecoder.prototype.decodeHeader = function (typedArray, readTags) {\n  var invalid = false;\n  var segmentDataView = new DataView(typedArray.buffer);\n  invalid = invalid || segmentDataView.getUint32(0, true) !== 1937076303; // Magic Signature 'Opus'\n\n  invalid = invalid || segmentDataView.getUint32(4, true) !== 1684104520; // Magic Signature 'Head'\n\n  invalid = invalid || segmentDataView.getUint8(8) !== 1; // Version\n\n  if (invalid) {\n    return false;\n  }\n\n  this.numberOfChannels = segmentDataView.getUint8(9); // Channel count\n\n  invalid = invalid || !isFinite(this.numberOfChannels) || this.numberOfChannels < 0 || this.numberOfChannels > 2;\n\n  if (invalid) {\n    this.numberOfChannels = undefined;\n    return false;\n  }\n\n  var sampleRate = segmentDataView.getUint32(12, true); // sample rate\n\n  invalid = invalid || !isFinite(sampleRate) || sampleRate < 0 || !this.config;\n\n  if (invalid) {\n    return false;\n  }\n\n  this.config.decoderSampleRate = sampleRate;\n  var headerSize = 19;\n  var channelMapping = segmentDataView.getUint8(18); // channel map 0 = mono or stereo\n\n  if (channelMapping > 0) {\n    var channelCount = segmentDataView.getUint8(19); // channel count (only encoded, if channel map != 0)\n\n    headerSize += 2 + channelCount * 8; // additional header length, when channel mapping family is != 0\n  }\n\n  var size = typedArray.length * typedArray.BYTES_PER_ELEMENT;\n\n  if (size > headerSize) {\n    var tagsSize;\n\n    while (tagsSize = this.decodeTags(typedArray, headerSize, readTags)) {\n      headerSize += tagsSize;\n\n      if (headerSize >= size) {\n        break;\n      }\n    }\n  }\n\n  return headerSize;\n};\n\nOggOpusDecoder.prototype.decodeTags = function (typedArray, offset, readTags) {\n  offset = offset || 0;\n  var invalid = false;\n  var tag = readTags ? {\n    vendor: null,\n    userComments: []\n  } : null;\n  var segmentDataView = new DataView(typedArray.buffer, offset);\n  invalid = invalid || segmentDataView.getUint32(0, true) !== 1937076303; // Magic Signature 'Opus'\n\n  invalid = invalid || segmentDataView.getUint32(4, true) !== 1936154964; // Magic Signature 'Tags'\n\n  if (invalid) {\n    return false;\n  }\n\n  var vendorLength = segmentDataView.getUint32(8, true); // vendor string length\n\n  if (tag) {\n    tag.vendor = new Uint8Array(segmentDataView, 12, vendorLength);\n  }\n\n  var userCommentsListLength = segmentDataView.getUint32(12 + vendorLength, true); // size of user comments list\n\n  var size = 16 + vendorLength;\n\n  if (userCommentsListLength > 0) {\n    var length;\n\n    for (var i = 0; i < userCommentsListLength; ++i) {\n      length = segmentDataView.getUint32(size, true); // length of user comment string <i>\n\n      if (tag) {\n        tag.userComments.push(new Uint8Array(segmentDataView, size + 4, length));\n      }\n\n      size += 4 + length;\n    }\n  } // NOTE in difference to Vorbis Comments, no final 'framing bit' for OpusTags\n\n\n  if (tag) {\n    if (!this.tags) {\n      this.tags = [tag];\n    } else {\n      this.tags.push(tag);\n    }\n  }\n\n  return size;\n};\n\nOggOpusDecoder.prototype.getPageBoundaries = function (dataView) {\n  var pageBoundaries = [];\n\n  for (var i = 0; i < dataView.byteLength - 32; i++) {\n    if (dataView.getUint32(i, true) == 1399285583) {\n      pageBoundaries.push(i);\n    }\n  }\n\n  return pageBoundaries;\n};\n\nOggOpusDecoder.prototype.getPitch = function () {\n  return this.getOpusControl(4033);\n};\n\nOggOpusDecoder.prototype.getOpusControl = function (control) {\n  var location = this._malloc(4);\n\n  this._opus_decoder_ctl(this.decoder, control, location);\n\n  var value = this.HEAP32[location >> 2];\n\n  this._free(location);\n\n  return value;\n};\n\nOggOpusDecoder.prototype.init = function () {\n  this.initCodec();\n  this.initResampler();\n\n  if (this.oninit) {\n    this.oninit();\n  }\n};\n\nOggOpusDecoder.prototype.initCodec = function () {\n  this.destroyDecoder();\n\n  var errReference = this._malloc(4);\n\n  this.decoder = this._opus_decoder_create(this.config.decoderSampleRate, this.numberOfChannels, errReference);\n\n  this._free(errReference);\n\n  this.decoderBufferMaxLength = 4000;\n  this.decoderBufferPointer = this._malloc(this.decoderBufferMaxLength);\n  this.decoderBuffer = this.HEAPU8.subarray(this.decoderBufferPointer, this.decoderBufferPointer + this.decoderBufferMaxLength);\n  this.decoderBufferIndex = 0;\n  this.decoderOutputLengthPointer = this._malloc(4);\n  this.decoderOutputMaxLength = this.config.decoderSampleRate * this.numberOfChannels * 120 / 1000; // Max 120ms frame size\n\n  this.decoderOutputPointer = this._malloc(this.decoderOutputMaxLength * 4); // 4 bytes per sample\n};\n\nOggOpusDecoder.prototype.initResampler = function () {\n  this.destroyResampler();\n\n  if (this.config.decoderSampleRate === this.config.outputBufferSampleRate) {\n    this.resampler = null;\n    return;\n  }\n\n  var errLocation = this._malloc(4);\n\n  this.resampler = this._speex_resampler_init(this.numberOfChannels, this.config.decoderSampleRate, this.config.outputBufferSampleRate, this.config.resampleQuality, errLocation);\n\n  this._free(errLocation);\n\n  this.resampleOutputLengthPointer = this._malloc(4);\n  this.resampleOutputMaxLength = Math.ceil(this.decoderOutputMaxLength * this.config.outputBufferSampleRate / this.config.decoderSampleRate);\n  this.resampleOutputBufferPointer = this._malloc(this.resampleOutputMaxLength * 4); // 4 bytes per sample\n};\n\nOggOpusDecoder.prototype.destroyDecoder = function () {\n  if (this.decoder) {\n    this._opus_decoder_destroy(this.decoder);\n\n    this._free(this.decoderBufferPointer);\n\n    this._free(this.decoderOutputLengthPointer);\n\n    this._free(this.decoderOutputPointer);\n  }\n};\n\nOggOpusDecoder.prototype.destroyResampler = function () {\n  if (this.resampler) {\n    this._speex_resampler_destroy(this.resampler);\n\n    this._free(this.resampleOutputLengthPointer);\n\n    this._free(this.resampleOutputBufferPointer);\n  }\n};\n\nOggOpusDecoder.prototype.destroy = function () {\n  this.destroyDecoder();\n  this.decoderBuffer = null;\n  this.destroyResampler();\n  this.decodedBuffers = null;\n}; // extend OggOpusDecoder for automatically sending decoded data via postMessage\n\n\nOggOpusDecoder.prototype.oninit = function () {\n  this.resetOutputBuffers();\n};\n\nOggOpusDecoder.prototype.oncomplete = function () {\n  this.sendLastBuffer();\n};\n\nOggOpusDecoder.prototype.resetOutputBuffers = function () {\n  this.outputBuffers = [];\n  this.outputBufferArrayBuffers = [];\n  this.outputBufferIndex = 0;\n\n  for (var i = 0; i < this.numberOfChannels; i++) {\n    this.outputBuffers.push(new Float32Array(this.config.bufferLength));\n    this.outputBufferArrayBuffers.push(this.outputBuffers[i].buffer);\n  }\n};\n\nOggOpusDecoder.prototype.sendToOutputBuffers = function (mergedBuffers) {\n  var dataIndex = 0;\n  var mergedBufferLength = mergedBuffers.length / this.numberOfChannels;\n\n  while (dataIndex < mergedBufferLength) {\n    var amountToCopy = Math.min(mergedBufferLength - dataIndex, this.config.bufferLength - this.outputBufferIndex);\n\n    if (this.numberOfChannels === 1) {\n      this.outputBuffers[0].set(mergedBuffers.subarray(dataIndex, dataIndex + amountToCopy), this.outputBufferIndex);\n    } // Deinterleave\n    else {\n        for (var i = 0; i < amountToCopy; i++) {\n          this.outputBuffers.forEach(function (buffer, channelIndex) {\n            buffer[this.outputBufferIndex + i] = mergedBuffers[(dataIndex + i) * this.numberOfChannels + channelIndex];\n          }, this);\n        }\n      }\n\n    dataIndex += amountToCopy;\n    this.outputBufferIndex += amountToCopy;\n\n    if (this.outputBufferIndex == this.config.bufferLength) {\n      global['postMessage'](this.outputBuffers, this.outputBufferArrayBuffers);\n      this.resetOutputBuffers();\n    }\n  }\n};\n\nOggOpusDecoder.prototype.sendLastBuffer = function () {\n  this.sendToOutputBuffers(new Float32Array((this.config.bufferLength - this.outputBufferIndex) * this.numberOfChannels));\n  global['postMessage'](null);\n};\n\nif (!Module) {\n  Module = {};\n}\n\nModule['mainReady'] = mainReady;\nModule['OggOpusDecoder'] = OggOpusDecoder;\nModule['onRuntimeInitialized'] = mainReadyResolve;\nmodule.exports = Module;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/global.js */ \"./node_modules/webpack/buildin/global.js\")))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZGVjb2Rlcldvcmtlci5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovL0RlY29kZXJXb3JrZXIvLi9zcmMvZGVjb2Rlcldvcmtlci5qcz8wYzQ1Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG52YXIgZGVjb2RlcjtcbnZhciBtYWluUmVhZHlSZXNvbHZlO1xudmFyIG1haW5SZWFkeSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUpeyBtYWluUmVhZHlSZXNvbHZlID0gcmVzb2x2ZTsgfSk7XG5cblxudmFyIGRlY29kZXIsIGNhY2hlZDtcblxuZnVuY3Rpb24gY2FjaGVFdmVudCggZXZ0RGF0YSApe1xuICBpZighY2FjaGVkKSBjYWNoZWQgPSBbXTtcbiAgY2FjaGVkLnB1c2goZXZ0RGF0YSk7XG59XG5cbmZ1bmN0aW9uIGFwcGx5Q2FjaGVkRXZlbnRzKCl7XG4gIGlmKGNhY2hlZCl7XG4gICAgZm9yKHZhciBpPTAsc2l6ZT1jYWNoZWQubGVuZ3RoOyBpIDwgc2l6ZTsgKytpKXtcbiAgICAgIGdsb2JhbFsnb25tZXNzYWdlJ10oIHtkYXRhOiBjYWNoZWRbaV19ICk7XG4gICAgfVxuICAgIGNhY2hlZCA9IHVuZGVmaW5lZDtcbiAgfVxufVxuXG5mdW5jdGlvbiBjaGVja1JlYWR5KCBkZWNvZGVyLCBldnREYXRhICl7XG4gIGlmKCFkZWNvZGVyLmlzUmVhZHkpe1xuICAgIGNhY2hlRXZlbnQoZXZ0RGF0YSk7XG4gICAgZGVjb2Rlclsnb25yZWFkeSddID0gYXBwbHlDYWNoZWRFdmVudHM7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHJldHVybiB0cnVlO1xufVxuXG5nbG9iYWxbJ29ubWVzc2FnZSddID0gZnVuY3Rpb24oIGUgKXtcbiAgc3dpdGNoKCBlWydkYXRhJ11bJ2NvbW1hbmQnXSApe1xuXG4gICAgY2FzZSAnZGVjb2RlJzpcbiAgICAgIGlmICggY2hlY2tSZWFkeSggZGVjb2RlciwgZVsnZGF0YSddKSApe1xuICAgICAgICBkZWNvZGVyLmRlY29kZSggZVsnZGF0YSddWydwYWdlcyddLCBkZWNvZGVyLnNlbmRUb091dHB1dEJ1ZmZlcnMgKTtcbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSAnZG9uZSc6XG4gICAgICBpZiAoIGNoZWNrUmVhZHkoIGRlY29kZXIsIGVbJ2RhdGEnXSkgKSB7XG4gICAgICAgIGRlY29kZXIuc2VuZExhc3RCdWZmZXIoKTtcbiAgICAgICAgZ2xvYmFsWydjbG9zZSddKCk7XG4gICAgICB9XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgJ2luaXQnOlxuICAgICAgaWYgKCB0eXBlb2YgZVsnZGF0YSddWydidWZmZXJMZW5ndGgnXSA9PT0gJ3VuZGVmaW5lZCcgKSB7XG4gICAgICAgIGVbJ2RhdGEnXVsnYnVmZmVyTGVuZ3RoJ10gPSA0MDk2OyAvLyBEZWZpbmUgc2l6ZSBvZiBvdXRnb2luZyBidWZmZXJcbiAgICAgIH1cbiAgICAgIGRlY29kZXIgPSBuZXcgT2dnT3B1c0RlY29kZXIoIGVbJ2RhdGEnXSwgTW9kdWxlICk7XG4gICAgICBicmVhaztcblxuICAgIGRlZmF1bHQ6XG4gICAgICAvLyBJZ25vcmUgYW55IHVua25vd24gY29tbWFuZHMgYW5kIGNvbnRpbnVlIHJlY2lldmluZyBjb21tYW5kc1xuICB9XG59O1xuXG5cblxuXG52YXIgT2dnT3B1c0RlY29kZXIgPSBmdW5jdGlvbiggY29uZmlnLCBNb2R1bGUgKXtcblxuICBpZiAoICFNb2R1bGUgKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdNb2R1bGUgd2l0aCBleHBvcnRzIHJlcXVpcmVkIHRvIGluaXRpYWxpemUgYSBkZWNvZGVyIGluc3RhbmNlJyk7XG4gIH1cblxuICAvLyB0aGlzLm1haW5SZWFkeSA9IG1haW5SZWFkeTsgLy8gRXhwb3NlIGZvciB1bml0IHRlc3Rpbmd0aGlzLmlzUmVhZHkgPSBNb2R1bGUuaXNSZWFkeTtcbiAgdGhpcy5pc1JlYWR5ID0gTW9kdWxlLmlzUmVhZHk7XG4gIGlmKCF0aGlzLmlzUmVhZHkpe1xuICAgIE1vZHVsZS5vbnJlYWR5ID0gZnVuY3Rpb24oKXtcbiAgICAgIHRoaXMuaXNSZWFkeSA9IHRydWU7XG4gICAgICB0aGlzLm9ucmVhZHkgJiYgdGhpcy5vbnJlYWR5KCk7XG4gICAgfVxuICB9XG5cbiAgdGhpcy5jb25maWcgPSBPYmplY3QuYXNzaWduKHtcbiAgICAvLyBidWZmZXJMZW5ndGg6IDQwOTYsIC8vIERlZmluZSBzaXplIG9mIG91dGdvaW5nIGJ1ZmZlclxuICAgIGRlY29kZXJTYW1wbGVSYXRlOiA0ODAwMCwgLy8gRGVzaXJlZCBkZWNvZGVyIHNhbXBsZSByYXRlLlxuICAgIG91dHB1dEJ1ZmZlclNhbXBsZVJhdGU6IDQ4MDAwLCAvLyBEZXNpcmVkIG91dHB1dCBzYW1wbGUgcmF0ZS4gQXVkaW8gd2lsbCBiZSByZXNhbXBsZWRcbiAgICByZXNhbXBsZVF1YWxpdHk6IDMsIC8vIFZhbHVlIGJldHdlZW4gMCBhbmQgMTAgaW5jbHVzaXZlLiAxMCBiZWluZyBoaWdoZXN0IHF1YWxpdHkuXG4gIH0sIGNvbmZpZyApO1xuXG4gIC8vIGVuY29kZSBcInJhd1wiIG9wdXMgc3RyZWFtP1xuICAvLyAtPiBlaXRoZXIgY29uZmlnLnJhd09wdXMgPSB0cnVlL2ZhbHNlLFxuICAvLyAgICBvciBjb25maWcubWltZVR5cGUgPSAnYXVkaW8vb3B1cydcbiAgLy8gICAoaW5zdGVhZCBvZiAnYXVkaW8vb2dnOyBjb2RlY3M9b3B1cycpXG4gIHRoaXMucmF3T3B1cyA9IHR5cGVvZiB0aGlzLmNvbmZpZy5yYXdPcHVzID09PSAnYm9vbGVhbic/XG4gICAgICAgICAgICAgICAgICB0aGlzLmNvbmZpZy5yYXdPcHVzIDpcbiAgICAgICAgICAgICAgICAgIC9eYXVkaW9cXC9vcHVzXFxiL2kudGVzdCh0aGlzLmNvbmZpZy5taW1lVHlwZSk7XG5cbiAgdGhpcy5fb3B1c19kZWNvZGVyX2NyZWF0ZSA9IE1vZHVsZS5fb3B1c19kZWNvZGVyX2NyZWF0ZTtcbiAgdGhpcy5fb3B1c19kZWNvZGVyX2Rlc3Ryb3kgPSBNb2R1bGUuX29wdXNfZGVjb2Rlcl9kZXN0cm95O1xuICB0aGlzLl9vcHVzX2RlY29kZXJfY3RsID0gTW9kdWxlLl9vcHVzX2RlY29kZXJfY3RsO1xuICB0aGlzLl9zcGVleF9yZXNhbXBsZXJfcHJvY2Vzc19pbnRlcmxlYXZlZF9mbG9hdCA9IE1vZHVsZS5fc3BlZXhfcmVzYW1wbGVyX3Byb2Nlc3NfaW50ZXJsZWF2ZWRfZmxvYXQ7XG4gIHRoaXMuX3NwZWV4X3Jlc2FtcGxlcl9pbml0ID0gTW9kdWxlLl9zcGVleF9yZXNhbXBsZXJfaW5pdDtcbiAgdGhpcy5fc3BlZXhfcmVzYW1wbGVyX2Rlc3Ryb3kgPSBNb2R1bGUuX3NwZWV4X3Jlc2FtcGxlcl9kZXN0cm95O1xuICB0aGlzLl9vcHVzX2RlY29kZV9mbG9hdCA9IE1vZHVsZS5fb3B1c19kZWNvZGVfZmxvYXQ7XG4gIHRoaXMuX2ZyZWUgPSBNb2R1bGUuX2ZyZWU7XG4gIHRoaXMuX21hbGxvYyA9IE1vZHVsZS5fbWFsbG9jO1xuICB0aGlzLkhFQVBVOCA9IE1vZHVsZS5IRUFQVTg7XG4gIHRoaXMuSEVBUDMyID0gTW9kdWxlLkhFQVAzMjtcbiAgdGhpcy5IRUFQRjMyID0gTW9kdWxlLkhFQVBGMzI7XG5cbiAgLy8gdGhpcy5vdXRwdXRCdWZmZXJzID0gW107XG4gIHRoaXMuZGVjb2RlZEJ1ZmZlcnMgPSBbXTtcbiAgdGhpcy5jb21wbGV0ZWQgPSBmYWxzZTtcblxuICBpZih0aGlzLmNvbmZpZy5vbkluaXQpe1xuICAgIHRoaXMub25pbml0ID0gdGhpcy5jb25maWcub25Jbml0O1xuICB9XG5cbiAgaWYodGhpcy5jb25maWcub25Db21wbGV0ZSl7XG4gICAgdGhpcy5vbmNvbXBsZXRlID0gdGhpcy5jb25maWcub25Db21wbGV0ZTtcbiAgfVxuXG4gIGlmKHRoaXMuY29uZmlnLm51bWJlck9mQ2hhbm5lbHMgPiAwKXtcbiAgICB0aGlzLm51bWJlck9mQ2hhbm5lbHMgPSB0aGlzLmNvbmZpZy5udW1iZXJPZkNoYW5uZWxzO1xuICAgIHRoaXMuaW5pdCgpO1xuICB9XG59O1xuXG5cbk9nZ09wdXNEZWNvZGVyLnByb3RvdHlwZS5kZWNvZGUgPSBmdW5jdGlvbiggdHlwZWRBcnJheSwgb25EZWNvZGVkLCB1c2VyRGF0YSApIHtcbiAgb25EZWNvZGVkID0gb25EZWNvZGVkIHx8IHRoaXMuaGFuZGxlRGVjb2RlZDtcbiAgdmFyIGRhdGFWaWV3ID0gbmV3IERhdGFWaWV3KCB0eXBlZEFycmF5LmJ1ZmZlciApO1xuICB0aGlzLmdldFBhZ2VCb3VuZGFyaWVzKCBkYXRhVmlldyApLm1hcCggZnVuY3Rpb24oIHBhZ2VTdGFydCApIHtcbiAgICB2YXIgaGVhZGVyVHlwZSA9IGRhdGFWaWV3LmdldFVpbnQ4KCBwYWdlU3RhcnQgKyA1LCB0cnVlICk7XG4gICAgdmFyIHBhZ2VJbmRleCA9IGRhdGFWaWV3LmdldFVpbnQzMiggcGFnZVN0YXJ0ICsgMTgsIHRydWUgKTtcblxuICAgIC8vIEJlZ2lubmluZyBvZiBzdHJlYW1cbiAgICBpZiAoIGhlYWRlclR5cGUgJiAyICkge1xuICAgICAgdGhpcy5udW1iZXJPZkNoYW5uZWxzID0gZGF0YVZpZXcuZ2V0VWludDgoIHBhZ2VTdGFydCArIDM3LCB0cnVlICk7XG4gICAgICB0aGlzLmluaXQoKTtcbiAgICB9XG5cbiAgICAvLyBEZWNvZGUgcGFnZVxuICAgIGlmICggcGFnZUluZGV4ID4gMSApIHtcbiAgICAgIHZhciBzZWdtZW50VGFibGVMZW5ndGggPSBkYXRhVmlldy5nZXRVaW50OCggcGFnZVN0YXJ0ICsgMjYsIHRydWUgKTtcbiAgICAgIHZhciBzZWdtZW50VGFibGVJbmRleCA9IHBhZ2VTdGFydCArIDI3ICsgc2VnbWVudFRhYmxlTGVuZ3RoO1xuXG4gICAgICBmb3IgKCB2YXIgaSA9IDA7IGkgPCBzZWdtZW50VGFibGVMZW5ndGg7IGkrKyApIHtcbiAgICAgICAgdmFyIHBhY2tldExlbmd0aCA9IGRhdGFWaWV3LmdldFVpbnQ4KCBwYWdlU3RhcnQgKyAyNyArIGksIHRydWUgKTtcbiAgICAgICAgdGhpcy5kZWNvZGVyQnVmZmVyLnNldCggdHlwZWRBcnJheS5zdWJhcnJheSggc2VnbWVudFRhYmxlSW5kZXgsIHNlZ21lbnRUYWJsZUluZGV4ICs9IHBhY2tldExlbmd0aCApLCB0aGlzLmRlY29kZXJCdWZmZXJJbmRleCApO1xuICAgICAgICB0aGlzLmRlY29kZXJCdWZmZXJJbmRleCArPSBwYWNrZXRMZW5ndGg7XG5cbiAgICAgICAgaWYgKCBwYWNrZXRMZW5ndGggPCAyNTUgKSB7XG4gICAgICAgICAgdmFyIG91dHB1dFNhbXBsZUxlbmd0aCA9IHRoaXMuX29wdXNfZGVjb2RlX2Zsb2F0KCB0aGlzLmRlY29kZXIsIHRoaXMuZGVjb2RlckJ1ZmZlclBvaW50ZXIsIHRoaXMuZGVjb2RlckJ1ZmZlckluZGV4LCB0aGlzLmRlY29kZXJPdXRwdXRQb2ludGVyLCB0aGlzLmRlY29kZXJPdXRwdXRNYXhMZW5ndGgsIDApO1xuICAgICAgICAgIHZhciByZXNhbXBsZWRMZW5ndGggPSBNYXRoLmNlaWwoIG91dHB1dFNhbXBsZUxlbmd0aCAqIHRoaXMuY29uZmlnLm91dHB1dEJ1ZmZlclNhbXBsZVJhdGUgLyB0aGlzLmNvbmZpZy5kZWNvZGVyU2FtcGxlUmF0ZSApO1xuICAgICAgICAgIHRoaXMuSEVBUDMyWyB0aGlzLmRlY29kZXJPdXRwdXRMZW5ndGhQb2ludGVyID4+IDIgXSA9IG91dHB1dFNhbXBsZUxlbmd0aDtcbiAgICAgICAgICB0aGlzLkhFQVAzMlsgdGhpcy5yZXNhbXBsZU91dHB1dExlbmd0aFBvaW50ZXIgPj4gMiBdID0gcmVzYW1wbGVkTGVuZ3RoO1xuICAgICAgICAgIHRoaXMuX3NwZWV4X3Jlc2FtcGxlcl9wcm9jZXNzX2ludGVybGVhdmVkX2Zsb2F0KCB0aGlzLnJlc2FtcGxlciwgdGhpcy5kZWNvZGVyT3V0cHV0UG9pbnRlciwgdGhpcy5kZWNvZGVyT3V0cHV0TGVuZ3RoUG9pbnRlciwgdGhpcy5yZXNhbXBsZU91dHB1dEJ1ZmZlclBvaW50ZXIsIHRoaXMucmVzYW1wbGVPdXRwdXRMZW5ndGhQb2ludGVyICk7XG4gICAgICAgICAgb25EZWNvZGVkLmNhbGwodGhpcywgdGhpcy5IRUFQRjMyLnN1YmFycmF5KCB0aGlzLnJlc2FtcGxlT3V0cHV0QnVmZmVyUG9pbnRlciA+PiAyLCAodGhpcy5yZXNhbXBsZU91dHB1dEJ1ZmZlclBvaW50ZXIgPj4gMikgKyByZXNhbXBsZWRMZW5ndGggKiB0aGlzLm51bWJlck9mQ2hhbm5lbHMgKSwgdXNlckRhdGEgKTtcbiAgICAgICAgICB0aGlzLmRlY29kZXJCdWZmZXJJbmRleCA9IDA7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gRW5kIG9mIHN0cmVhbVxuICAgICAgaWYgKCBoZWFkZXJUeXBlICYgNCApIHtcbiAgICAgICAgdGhpcy5jb21wbGV0ZWQgPSB0cnVlO1xuICAgICAgICBpZih0aGlzLm9uY29tcGxldGUpe1xuICAgICAgICAgIHRoaXMub25jb21wbGV0ZSggdXNlckRhdGEgKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSwgdGhpcyApO1xufTtcblxuT2dnT3B1c0RlY29kZXIucHJvdG90eXBlLmRlY29kZVJhdyA9IGZ1bmN0aW9uKCB0eXBlZEFycmF5LCBvbkRlY29kZWQsIHVzZXJEYXRhICkge1xuXG4gIG9uRGVjb2RlZCA9IG9uRGVjb2RlZCB8fCB0aGlzLmhhbmRsZURlY29kZWQ7XG4gIHZhciBkYXRhTGVuZ3RoID0gdHlwZWRBcnJheS5sZW5ndGggKiB0eXBlZEFycmF5LkJZVEVTX1BFUl9FTEVNRU5UO1xuICBpZihkYXRhTGVuZ3RoID09PSAwKXtcbiAgICByZXR1cm47XG4gIH1cblxuICB2YXIgZGF0YU9mZnNldD0wO1xuICBpZiAoIHR5cGVvZiB0aGlzLm51bWJlck9mQ2hhbm5lbHMgPT09ICd1bmRlZmluZWQnICkge1xuXG4gICAgLy8gdGhpcy5udW1iZXJPZkNoYW5uZWxzID0gdHlwZWRBcnJheVswXSAmIDB4MDQgPyAyIDogMTtcblxuICAgIHZhciBoZWFkZXJMZW5ndGggPSB0aGlzLmRlY29kZUhlYWRlciggdHlwZWRBcnJheSwgdGhpcy5jb25maWcucmVhZFRhZ3MgKTtcbiAgICB0aGlzLmluaXQoKTtcblxuICAgIGlmICggaGVhZGVyTGVuZ3RoID4gMCApIHtcbiAgICAgIGlmICggaGVhZGVyTGVuZ3RoID49IGRhdGFMZW5ndGggKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGRhdGFPZmZzZXQgKz0gaGVhZGVyTGVuZ3RoO1xuICAgIH1cbiAgfVxuXG4gIHdoaWxlICggZGF0YU9mZnNldCA8IGRhdGFMZW5ndGggKSB7XG4gICAgdmFyIHBhY2tldExlbmd0aCA9IE1hdGgubWluKCBkYXRhTGVuZ3RoIC0gZGF0YU9mZnNldCwgdGhpcy5kZWNvZGVyQnVmZmVyTWF4TGVuZ3RoICk7XG4gICAgdGhpcy5kZWNvZGVyQnVmZmVyLnNldCggdHlwZWRBcnJheS5zdWJhcnJheSggZGF0YU9mZnNldCwgZGF0YU9mZnNldCArPSBwYWNrZXRMZW5ndGggKSwgdGhpcy5kZWNvZGVyQnVmZmVySW5kZXggKTtcbiAgICB0aGlzLmRlY29kZXJCdWZmZXJJbmRleCArPSBwYWNrZXRMZW5ndGg7XG5cbiAgICAvLyBEZWNvZGUgcmF3IG9wdXMgcGFja2V0XG4gICAgdmFyIG91dHB1dFNhbXBsZUxlbmd0aCA9IHRoaXMuX29wdXNfZGVjb2RlX2Zsb2F0KCB0aGlzLmRlY29kZXIsIHRoaXMuZGVjb2RlckJ1ZmZlclBvaW50ZXIsIHR5cGVkQXJyYXkubGVuZ3RoLCB0aGlzLmRlY29kZXJPdXRwdXRQb2ludGVyLCB0aGlzLmRlY29kZXJPdXRwdXRNYXhMZW5ndGgsIDApO1xuICAgIHZhciBvdXRwdXQ7XG4gICAgaWYgKCB0aGlzLnJlc2FtcGxlciApIHtcbiAgICAgIHZhciByZXNhbXBsZWRMZW5ndGggPSBNYXRoLmNlaWwoIG91dHB1dFNhbXBsZUxlbmd0aCAqIHRoaXMuY29uZmlnLm91dHB1dEJ1ZmZlclNhbXBsZVJhdGUgLyB0aGlzLmNvbmZpZy5kZWNvZGVyU2FtcGxlUmF0ZSApO1xuICAgICAgdGhpcy5IRUFQMzJbIHRoaXMuZGVjb2Rlck91dHB1dExlbmd0aFBvaW50ZXIgPj4gMiBdID0gb3V0cHV0U2FtcGxlTGVuZ3RoO1xuICAgICAgdGhpcy5IRUFQMzJbIHRoaXMucmVzYW1wbGVPdXRwdXRMZW5ndGhQb2ludGVyID4+IDIgXSA9IHJlc2FtcGxlZExlbmd0aDtcbiAgICAgIHRoaXMuX3NwZWV4X3Jlc2FtcGxlcl9wcm9jZXNzX2ludGVybGVhdmVkX2Zsb2F0KCB0aGlzLnJlc2FtcGxlciwgdGhpcy5kZWNvZGVyT3V0cHV0UG9pbnRlciwgdGhpcy5kZWNvZGVyT3V0cHV0TGVuZ3RoUG9pbnRlciwgdGhpcy5yZXNhbXBsZU91dHB1dEJ1ZmZlclBvaW50ZXIsIHRoaXMucmVzYW1wbGVPdXRwdXRMZW5ndGhQb2ludGVyICk7XG4gICAgICBvdXRwdXQgPSB0aGlzLkhFQVBGMzIuc3ViYXJyYXkoIHRoaXMucmVzYW1wbGVPdXRwdXRCdWZmZXJQb2ludGVyID4+IDIsICh0aGlzLnJlc2FtcGxlT3V0cHV0QnVmZmVyUG9pbnRlciA+PiAyKSArIHJlc2FtcGxlZExlbmd0aCAqIHRoaXMubnVtYmVyT2ZDaGFubmVscyApO1xuICAgIH0gZWxzZSB7XG4gICAgICBvdXRwdXQgPSB0aGlzLkhFQVBGMzIuc3ViYXJyYXkoIHRoaXMuZGVjb2Rlck91dHB1dFBvaW50ZXIgPj4gMiwgKHRoaXMuZGVjb2Rlck91dHB1dFBvaW50ZXIgPj4gMikgKyBvdXRwdXRTYW1wbGVMZW5ndGggKiB0aGlzLm51bWJlck9mQ2hhbm5lbHMgKTtcbiAgICB9XG4gICAgb25EZWNvZGVkLmNhbGwodGhpcywgb3V0cHV0LCB1c2VyRGF0YSApO1xuICAgIHRoaXMuZGVjb2RlckJ1ZmZlckluZGV4ID0gMDtcbiAgfVxuXG4gIGlmKHRoaXMub25jb21wbGV0ZSl7XG4gICAgdGhpcy5vbmNvbXBsZXRlKCB1c2VyRGF0YSApO1xuICB9XG5cbiAgcmV0dXJuO1xufVxuXG5PZ2dPcHVzRGVjb2Rlci5wcm90b3R5cGUuaGFuZGxlRGVjb2RlZCA9IGZ1bmN0aW9uKCB0eXBlZEFycmF5ICkge1xuICB0aGlzLmRlY29kZWRCdWZmZXJzLnB1c2goIHR5cGVkQXJyYXkgKTtcbn07XG5cbk9nZ09wdXNEZWNvZGVyLnByb3RvdHlwZS5kZWNvZGVIZWFkZXIgPSBmdW5jdGlvbiggdHlwZWRBcnJheSwgcmVhZFRhZ3MgKSB7XG5cbiAgdmFyIGludmFsaWQgPSBmYWxzZTtcbiAgdmFyIHNlZ21lbnREYXRhVmlldyA9IG5ldyBEYXRhVmlldyggdHlwZWRBcnJheS5idWZmZXIgKTtcbiAgaW52YWxpZCA9IGludmFsaWQgfHwgKHNlZ21lbnREYXRhVmlldy5nZXRVaW50MzIoIDAsIHRydWUgKSAhPT0gMTkzNzA3NjMwMyk7IC8vIE1hZ2ljIFNpZ25hdHVyZSAnT3B1cydcbiAgaW52YWxpZCA9IGludmFsaWQgfHwgKHNlZ21lbnREYXRhVmlldy5nZXRVaW50MzIoIDQsIHRydWUgKSAhPT0gMTY4NDEwNDUyMCk7IC8vIE1hZ2ljIFNpZ25hdHVyZSAnSGVhZCdcbiAgaW52YWxpZCA9IGludmFsaWQgfHwgKHNlZ21lbnREYXRhVmlldy5nZXRVaW50OCggIDggKSAhPT0gMSk7IC8vIFZlcnNpb25cblxuICBpZihpbnZhbGlkKXtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgdGhpcy5udW1iZXJPZkNoYW5uZWxzID0gc2VnbWVudERhdGFWaWV3LmdldFVpbnQ4KCA5ICk7IC8vIENoYW5uZWwgY291bnRcbiAgaW52YWxpZCA9IGludmFsaWQgfHwgKCFpc0Zpbml0ZSh0aGlzLm51bWJlck9mQ2hhbm5lbHMpIHx8IHRoaXMubnVtYmVyT2ZDaGFubmVscyA8IDAgfHwgdGhpcy5udW1iZXJPZkNoYW5uZWxzID4gMik7XG5cbiAgaWYoaW52YWxpZCl7XG4gICAgdGhpcy5udW1iZXJPZkNoYW5uZWxzID0gdW5kZWZpbmVkO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICB2YXIgc2FtcGxlUmF0ZSA9IHNlZ21lbnREYXRhVmlldy5nZXRVaW50MzIoIDEyLCB0cnVlICk7IC8vIHNhbXBsZSByYXRlXG4gIGludmFsaWQgPSBpbnZhbGlkIHx8ICghaXNGaW5pdGUoc2FtcGxlUmF0ZSkgfHwgc2FtcGxlUmF0ZSA8IDAgfHwgIXRoaXMuY29uZmlnKTtcblxuICBpZihpbnZhbGlkKXtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgdGhpcy5jb25maWcuZGVjb2RlclNhbXBsZVJhdGUgPSBzYW1wbGVSYXRlO1xuXG4gIHZhciBoZWFkZXJTaXplID0gMTk7XG4gIHZhciBjaGFubmVsTWFwcGluZyA9IHNlZ21lbnREYXRhVmlldy5nZXRVaW50OCggMTggKTsgLy8gY2hhbm5lbCBtYXAgMCA9IG1vbm8gb3Igc3RlcmVvXG4gIGlmKGNoYW5uZWxNYXBwaW5nID4gMCl7XG4gICAgdmFyIGNoYW5uZWxDb3VudCA9IHNlZ21lbnREYXRhVmlldy5nZXRVaW50OCggMTkgKTsgLy8gY2hhbm5lbCBjb3VudCAob25seSBlbmNvZGVkLCBpZiBjaGFubmVsIG1hcCAhPSAwKVxuICAgIGhlYWRlclNpemUgKz0gMiArICggY2hhbm5lbENvdW50ICogOCApOyAvLyBhZGRpdGlvbmFsIGhlYWRlciBsZW5ndGgsIHdoZW4gY2hhbm5lbCBtYXBwaW5nIGZhbWlseSBpcyAhPSAwXG4gIH1cblxuICB2YXIgc2l6ZSA9IHR5cGVkQXJyYXkubGVuZ3RoICogdHlwZWRBcnJheS5CWVRFU19QRVJfRUxFTUVOVDtcbiAgaWYoc2l6ZSA+IGhlYWRlclNpemUpe1xuICAgIHZhciB0YWdzU2l6ZTtcbiAgICB3aGlsZSh0YWdzU2l6ZSA9IHRoaXMuZGVjb2RlVGFncyh0eXBlZEFycmF5LCBoZWFkZXJTaXplLCByZWFkVGFncykpe1xuICAgICAgaGVhZGVyU2l6ZSArPSB0YWdzU2l6ZTtcbiAgICAgIGlmKGhlYWRlclNpemUgPj0gc2l6ZSl7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBoZWFkZXJTaXplO1xufVxuXG5PZ2dPcHVzRGVjb2Rlci5wcm90b3R5cGUuZGVjb2RlVGFncyA9IGZ1bmN0aW9uKCB0eXBlZEFycmF5LCBvZmZzZXQsIHJlYWRUYWdzICkge1xuXG4gIG9mZnNldCA9IG9mZnNldCB8fCAwO1xuICB2YXIgaW52YWxpZCA9IGZhbHNlO1xuICB2YXIgdGFnID0gcmVhZFRhZ3M/IHt2ZW5kb3I6IG51bGwsIHVzZXJDb21tZW50czogW119IDogbnVsbDtcbiAgdmFyIHNlZ21lbnREYXRhVmlldyA9IG5ldyBEYXRhVmlldyggdHlwZWRBcnJheS5idWZmZXIsIG9mZnNldCApO1xuICBpbnZhbGlkID0gaW52YWxpZCB8fCAoc2VnbWVudERhdGFWaWV3LmdldFVpbnQzMiggMCwgdHJ1ZSApICE9PSAxOTM3MDc2MzAzKTsgLy8gTWFnaWMgU2lnbmF0dXJlICdPcHVzJ1xuICBpbnZhbGlkID0gaW52YWxpZCB8fCAoc2VnbWVudERhdGFWaWV3LmdldFVpbnQzMiggNCwgdHJ1ZSApICE9PSAxOTM2MTU0OTY0KTsgLy8gTWFnaWMgU2lnbmF0dXJlICdUYWdzJ1xuXG4gIGlmKGludmFsaWQpe1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICB2YXIgdmVuZG9yTGVuZ3RoID0gc2VnbWVudERhdGFWaWV3LmdldFVpbnQzMiggOCwgdHJ1ZSApOyAvLyB2ZW5kb3Igc3RyaW5nIGxlbmd0aFxuICBpZih0YWcpe1xuICAgIHRhZy52ZW5kb3IgPSBuZXcgVWludDhBcnJheShzZWdtZW50RGF0YVZpZXcsIDEyLCB2ZW5kb3JMZW5ndGgpO1xuICB9XG4gIHZhciB1c2VyQ29tbWVudHNMaXN0TGVuZ3RoID0gc2VnbWVudERhdGFWaWV3LmdldFVpbnQzMiggMTIgKyB2ZW5kb3JMZW5ndGgsIHRydWUgKTsgLy8gc2l6ZSBvZiB1c2VyIGNvbW1lbnRzIGxpc3RcbiAgdmFyIHNpemUgPSAxNiArIHZlbmRvckxlbmd0aDtcbiAgaWYodXNlckNvbW1lbnRzTGlzdExlbmd0aCA+IDApe1xuICAgIHZhciBsZW5ndGg7XG4gICAgZm9yKHZhciBpPTA7IGkgPCB1c2VyQ29tbWVudHNMaXN0TGVuZ3RoOyArK2kpe1xuICAgICAgbGVuZ3RoID0gc2VnbWVudERhdGFWaWV3LmdldFVpbnQzMiggc2l6ZSwgdHJ1ZSApOyAvLyBsZW5ndGggb2YgdXNlciBjb21tZW50IHN0cmluZyA8aT5cbiAgICAgIGlmKHRhZyl7XG4gICAgICAgIHRhZy51c2VyQ29tbWVudHMucHVzaChuZXcgVWludDhBcnJheShzZWdtZW50RGF0YVZpZXcsIHNpemUgKyA0LCBsZW5ndGgpKTtcbiAgICAgIH1cbiAgICAgIHNpemUgKz0gNCArIGxlbmd0aDtcbiAgICB9XG4gIH1cbiAgLy8gTk9URSBpbiBkaWZmZXJlbmNlIHRvIFZvcmJpcyBDb21tZW50cywgbm8gZmluYWwgJ2ZyYW1pbmcgYml0JyBmb3IgT3B1c1RhZ3NcblxuICBpZih0YWcpe1xuICAgIGlmKCF0aGlzLnRhZ3Mpe1xuICAgICAgdGhpcy50YWdzID0gWyB0YWcgXTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy50YWdzLnB1c2godGFnKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHNpemU7XG59XG5cbk9nZ09wdXNEZWNvZGVyLnByb3RvdHlwZS5nZXRQYWdlQm91bmRhcmllcyA9IGZ1bmN0aW9uKCBkYXRhVmlldyApe1xuICB2YXIgcGFnZUJvdW5kYXJpZXMgPSBbXTtcblxuICBmb3IgKCB2YXIgaSA9IDA7IGkgPCBkYXRhVmlldy5ieXRlTGVuZ3RoIC0gMzI7IGkrKyApIHtcbiAgICBpZiAoIGRhdGFWaWV3LmdldFVpbnQzMiggaSwgdHJ1ZSApID09IDEzOTkyODU1ODMgKSB7XG4gICAgICBwYWdlQm91bmRhcmllcy5wdXNoKCBpICk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHBhZ2VCb3VuZGFyaWVzO1xufTtcblxuT2dnT3B1c0RlY29kZXIucHJvdG90eXBlLmdldFBpdGNoID0gZnVuY3Rpb24oKXtcbiAgcmV0dXJuIHRoaXMuZ2V0T3B1c0NvbnRyb2woIDQwMzMgKTtcbn07XG5cbk9nZ09wdXNEZWNvZGVyLnByb3RvdHlwZS5nZXRPcHVzQ29udHJvbCA9IGZ1bmN0aW9uKCBjb250cm9sICl7XG4gIHZhciBsb2NhdGlvbiA9IHRoaXMuX21hbGxvYyggNCApO1xuICB0aGlzLl9vcHVzX2RlY29kZXJfY3RsKCB0aGlzLmRlY29kZXIsIGNvbnRyb2wsIGxvY2F0aW9uICk7XG4gIHZhciB2YWx1ZSA9IHRoaXMuSEVBUDMyWyBsb2NhdGlvbiA+PiAyIF07XG4gIHRoaXMuX2ZyZWUoIGxvY2F0aW9uICk7XG4gIHJldHVybiB2YWx1ZTtcbn07XG5cbk9nZ09wdXNEZWNvZGVyLnByb3RvdHlwZS5pbml0ID0gZnVuY3Rpb24oKXtcbiAgdGhpcy5pbml0Q29kZWMoKTtcbiAgdGhpcy5pbml0UmVzYW1wbGVyKCk7XG4gIGlmKHRoaXMub25pbml0KXtcbiAgICB0aGlzLm9uaW5pdCgpO1xuICB9XG59O1xuXG5PZ2dPcHVzRGVjb2Rlci5wcm90b3R5cGUuaW5pdENvZGVjID0gZnVuY3Rpb24oKSB7XG5cbiAgdGhpcy5kZXN0cm95RGVjb2RlcigpO1xuXG4gIHZhciBlcnJSZWZlcmVuY2UgPSB0aGlzLl9tYWxsb2MoIDQgKTtcbiAgdGhpcy5kZWNvZGVyID0gdGhpcy5fb3B1c19kZWNvZGVyX2NyZWF0ZSggdGhpcy5jb25maWcuZGVjb2RlclNhbXBsZVJhdGUsIHRoaXMubnVtYmVyT2ZDaGFubmVscywgZXJyUmVmZXJlbmNlICk7XG4gIHRoaXMuX2ZyZWUoIGVyclJlZmVyZW5jZSApO1xuXG4gIHRoaXMuZGVjb2RlckJ1ZmZlck1heExlbmd0aCA9IDQwMDA7XG4gIHRoaXMuZGVjb2RlckJ1ZmZlclBvaW50ZXIgPSB0aGlzLl9tYWxsb2MoIHRoaXMuZGVjb2RlckJ1ZmZlck1heExlbmd0aCApO1xuICB0aGlzLmRlY29kZXJCdWZmZXIgPSB0aGlzLkhFQVBVOC5zdWJhcnJheSggdGhpcy5kZWNvZGVyQnVmZmVyUG9pbnRlciwgdGhpcy5kZWNvZGVyQnVmZmVyUG9pbnRlciArIHRoaXMuZGVjb2RlckJ1ZmZlck1heExlbmd0aCApO1xuICB0aGlzLmRlY29kZXJCdWZmZXJJbmRleCA9IDA7XG5cbiAgdGhpcy5kZWNvZGVyT3V0cHV0TGVuZ3RoUG9pbnRlciA9IHRoaXMuX21hbGxvYyggNCApO1xuICB0aGlzLmRlY29kZXJPdXRwdXRNYXhMZW5ndGggPSB0aGlzLmNvbmZpZy5kZWNvZGVyU2FtcGxlUmF0ZSAqIHRoaXMubnVtYmVyT2ZDaGFubmVscyAqIDEyMCAvIDEwMDA7IC8vIE1heCAxMjBtcyBmcmFtZSBzaXplXG4gIHRoaXMuZGVjb2Rlck91dHB1dFBvaW50ZXIgPSB0aGlzLl9tYWxsb2MoIHRoaXMuZGVjb2Rlck91dHB1dE1heExlbmd0aCAqIDQgKTsgLy8gNCBieXRlcyBwZXIgc2FtcGxlXG59O1xuXG5PZ2dPcHVzRGVjb2Rlci5wcm90b3R5cGUuaW5pdFJlc2FtcGxlciA9IGZ1bmN0aW9uKCkge1xuXG4gIHRoaXMuZGVzdHJveVJlc2FtcGxlcigpO1xuXG4gIGlmICggdGhpcy5jb25maWcuZGVjb2RlclNhbXBsZVJhdGUgPT09IHRoaXMuY29uZmlnLm91dHB1dEJ1ZmZlclNhbXBsZVJhdGUgKSB7XG4gICAgdGhpcy5yZXNhbXBsZXIgPSBudWxsO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHZhciBlcnJMb2NhdGlvbiA9IHRoaXMuX21hbGxvYyggNCApO1xuICB0aGlzLnJlc2FtcGxlciA9IHRoaXMuX3NwZWV4X3Jlc2FtcGxlcl9pbml0KCB0aGlzLm51bWJlck9mQ2hhbm5lbHMsIHRoaXMuY29uZmlnLmRlY29kZXJTYW1wbGVSYXRlLCB0aGlzLmNvbmZpZy5vdXRwdXRCdWZmZXJTYW1wbGVSYXRlLCB0aGlzLmNvbmZpZy5yZXNhbXBsZVF1YWxpdHksIGVyckxvY2F0aW9uICk7XG4gIHRoaXMuX2ZyZWUoIGVyckxvY2F0aW9uICk7XG5cbiAgdGhpcy5yZXNhbXBsZU91dHB1dExlbmd0aFBvaW50ZXIgPSB0aGlzLl9tYWxsb2MoIDQgKTtcbiAgdGhpcy5yZXNhbXBsZU91dHB1dE1heExlbmd0aCA9IE1hdGguY2VpbCggdGhpcy5kZWNvZGVyT3V0cHV0TWF4TGVuZ3RoICogdGhpcy5jb25maWcub3V0cHV0QnVmZmVyU2FtcGxlUmF0ZSAvIHRoaXMuY29uZmlnLmRlY29kZXJTYW1wbGVSYXRlICk7XG4gIHRoaXMucmVzYW1wbGVPdXRwdXRCdWZmZXJQb2ludGVyID0gdGhpcy5fbWFsbG9jKCB0aGlzLnJlc2FtcGxlT3V0cHV0TWF4TGVuZ3RoICogNCApOyAvLyA0IGJ5dGVzIHBlciBzYW1wbGVcbn07XG5cbk9nZ09wdXNEZWNvZGVyLnByb3RvdHlwZS5kZXN0cm95RGVjb2RlciA9IGZ1bmN0aW9uKCkge1xuICBpZiAoIHRoaXMuZGVjb2RlciApIHtcbiAgICB0aGlzLl9vcHVzX2RlY29kZXJfZGVzdHJveSggdGhpcy5kZWNvZGVyICk7XG4gICAgdGhpcy5fZnJlZSggdGhpcy5kZWNvZGVyQnVmZmVyUG9pbnRlciApO1xuICAgIHRoaXMuX2ZyZWUoIHRoaXMuZGVjb2Rlck91dHB1dExlbmd0aFBvaW50ZXIgKTtcbiAgICB0aGlzLl9mcmVlKCB0aGlzLmRlY29kZXJPdXRwdXRQb2ludGVyICk7XG4gIH1cbn07XG5cbk9nZ09wdXNEZWNvZGVyLnByb3RvdHlwZS5kZXN0cm95UmVzYW1wbGVyID0gZnVuY3Rpb24oKSB7XG4gIGlmICggdGhpcy5yZXNhbXBsZXIgKSB7XG4gICAgdGhpcy5fc3BlZXhfcmVzYW1wbGVyX2Rlc3Ryb3koIHRoaXMucmVzYW1wbGVyICk7XG4gICAgdGhpcy5fZnJlZSggdGhpcy5yZXNhbXBsZU91dHB1dExlbmd0aFBvaW50ZXIgKTtcbiAgICB0aGlzLl9mcmVlKCB0aGlzLnJlc2FtcGxlT3V0cHV0QnVmZmVyUG9pbnRlciApO1xuICB9XG59O1xuXG5PZ2dPcHVzRGVjb2Rlci5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uKCkge1xuICB0aGlzLmRlc3Ryb3lEZWNvZGVyKCk7XG4gIHRoaXMuZGVjb2RlckJ1ZmZlciA9IG51bGw7XG4gIHRoaXMuZGVzdHJveVJlc2FtcGxlcigpO1xuICB0aGlzLmRlY29kZWRCdWZmZXJzID0gbnVsbDtcbn07XG5cbi8vIGV4dGVuZCBPZ2dPcHVzRGVjb2RlciBmb3IgYXV0b21hdGljYWxseSBzZW5kaW5nIGRlY29kZWQgZGF0YSB2aWEgcG9zdE1lc3NhZ2VcblxuT2dnT3B1c0RlY29kZXIucHJvdG90eXBlLm9uaW5pdCA9IGZ1bmN0aW9uKCl7XG4gIHRoaXMucmVzZXRPdXRwdXRCdWZmZXJzKCk7XG59O1xuXG5PZ2dPcHVzRGVjb2Rlci5wcm90b3R5cGUub25jb21wbGV0ZSA9IGZ1bmN0aW9uKCl7XG4gIHRoaXMuc2VuZExhc3RCdWZmZXIoKTtcbn07XG5cbk9nZ09wdXNEZWNvZGVyLnByb3RvdHlwZS5yZXNldE91dHB1dEJ1ZmZlcnMgPSBmdW5jdGlvbigpe1xuICB0aGlzLm91dHB1dEJ1ZmZlcnMgPSBbXTtcbiAgdGhpcy5vdXRwdXRCdWZmZXJBcnJheUJ1ZmZlcnMgPSBbXTtcbiAgdGhpcy5vdXRwdXRCdWZmZXJJbmRleCA9IDA7XG5cbiAgZm9yICggdmFyIGkgPSAwOyBpIDwgdGhpcy5udW1iZXJPZkNoYW5uZWxzOyBpKysgKSB7XG4gICAgdGhpcy5vdXRwdXRCdWZmZXJzLnB1c2goIG5ldyBGbG9hdDMyQXJyYXkoIHRoaXMuY29uZmlnLmJ1ZmZlckxlbmd0aCApICk7XG4gICAgdGhpcy5vdXRwdXRCdWZmZXJBcnJheUJ1ZmZlcnMucHVzaCggdGhpcy5vdXRwdXRCdWZmZXJzW2ldLmJ1ZmZlciApO1xuICB9XG59O1xuXG5PZ2dPcHVzRGVjb2Rlci5wcm90b3R5cGUuc2VuZFRvT3V0cHV0QnVmZmVycyA9IGZ1bmN0aW9uKCBtZXJnZWRCdWZmZXJzICl7XG4gIHZhciBkYXRhSW5kZXggPSAwO1xuICB2YXIgbWVyZ2VkQnVmZmVyTGVuZ3RoID0gbWVyZ2VkQnVmZmVycy5sZW5ndGggLyB0aGlzLm51bWJlck9mQ2hhbm5lbHM7XG5cbiAgd2hpbGUgKCBkYXRhSW5kZXggPCBtZXJnZWRCdWZmZXJMZW5ndGggKSB7XG4gICAgdmFyIGFtb3VudFRvQ29weSA9IE1hdGgubWluKCBtZXJnZWRCdWZmZXJMZW5ndGggLSBkYXRhSW5kZXgsIHRoaXMuY29uZmlnLmJ1ZmZlckxlbmd0aCAtIHRoaXMub3V0cHV0QnVmZmVySW5kZXggKTtcblxuICAgIGlmICh0aGlzLm51bWJlck9mQ2hhbm5lbHMgPT09IDEpIHtcbiAgICAgIHRoaXMub3V0cHV0QnVmZmVyc1swXS5zZXQoIG1lcmdlZEJ1ZmZlcnMuc3ViYXJyYXkoIGRhdGFJbmRleCwgZGF0YUluZGV4ICsgYW1vdW50VG9Db3B5ICksIHRoaXMub3V0cHV0QnVmZmVySW5kZXggKTtcbiAgICB9XG5cbiAgICAvLyBEZWludGVybGVhdmVcbiAgICBlbHNlIHtcbiAgICAgIGZvciAoIHZhciBpID0gMDsgaSA8IGFtb3VudFRvQ29weTsgaSsrICkge1xuICAgICAgICB0aGlzLm91dHB1dEJ1ZmZlcnMuZm9yRWFjaCggZnVuY3Rpb24oIGJ1ZmZlciwgY2hhbm5lbEluZGV4ICkge1xuICAgICAgICAgIGJ1ZmZlclsgdGhpcy5vdXRwdXRCdWZmZXJJbmRleCArIGkgXSA9IG1lcmdlZEJ1ZmZlcnNbICggZGF0YUluZGV4ICsgaSApICogdGhpcy5udW1iZXJPZkNoYW5uZWxzICsgY2hhbm5lbEluZGV4IF07XG4gICAgICAgIH0sIHRoaXMpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGRhdGFJbmRleCArPSBhbW91bnRUb0NvcHk7XG4gICAgdGhpcy5vdXRwdXRCdWZmZXJJbmRleCArPSBhbW91bnRUb0NvcHk7XG5cbiAgICBpZiAoIHRoaXMub3V0cHV0QnVmZmVySW5kZXggPT0gdGhpcy5jb25maWcuYnVmZmVyTGVuZ3RoICkge1xuICAgICAgZ2xvYmFsWydwb3N0TWVzc2FnZSddKCB0aGlzLm91dHB1dEJ1ZmZlcnMsIHRoaXMub3V0cHV0QnVmZmVyQXJyYXlCdWZmZXJzICk7XG4gICAgICB0aGlzLnJlc2V0T3V0cHV0QnVmZmVycygpO1xuICAgIH1cbiAgfVxufTtcblxuT2dnT3B1c0RlY29kZXIucHJvdG90eXBlLnNlbmRMYXN0QnVmZmVyID0gZnVuY3Rpb24oKXtcbiAgdGhpcy5zZW5kVG9PdXRwdXRCdWZmZXJzKCBuZXcgRmxvYXQzMkFycmF5KCAoIHRoaXMuY29uZmlnLmJ1ZmZlckxlbmd0aCAtIHRoaXMub3V0cHV0QnVmZmVySW5kZXggKSAqIHRoaXMubnVtYmVyT2ZDaGFubmVscyApICk7XG4gIGdsb2JhbFsncG9zdE1lc3NhZ2UnXShudWxsKTtcbn07XG5cbmlmICghTW9kdWxlKSB7XG4gIE1vZHVsZSA9IHt9O1xufVxuXG5Nb2R1bGVbJ21haW5SZWFkeSddID0gbWFpblJlYWR5O1xuTW9kdWxlWydPZ2dPcHVzRGVjb2RlciddID0gT2dnT3B1c0RlY29kZXI7XG5Nb2R1bGVbJ29uUnVudGltZUluaXRpYWxpemVkJ10gPSBtYWluUmVhZHlSZXNvbHZlO1xuXG5tb2R1bGUuZXhwb3J0cyA9IE1vZHVsZTtcbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBdkJBO0FBeUJBO0FBQ0E7QUFJQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBTEE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/decoderWorker.js\n");

/***/ })

/******/ });
});

// Sometimes an existing Module object exists with properties
// meant to overwrite the default module functionality. Here
// we collect those properties and reapply _after_ we configure
// the current environment's defaults to avoid having to be so
// defensive during initialization.
var moduleOverrides = {};
var key;
for (key in Module) {
  if (Module.hasOwnProperty(key)) {
    moduleOverrides[key] = Module[key];
  }
}

var arguments_ = [];
var thisProgram = './this.program';
var quit_ = function(status, toThrow) {
  throw toThrow;
};

// Determine the runtime environment we are in. You can customize this by
// setting the ENVIRONMENT setting at compile time (see settings.js).

// Attempt to auto-detect the environment
var ENVIRONMENT_IS_WEB = typeof window === 'object';
var ENVIRONMENT_IS_WORKER = typeof importScripts === 'function';
// N.b. Electron.js environment is simultaneously a NODE-environment, but
// also a web environment.
var ENVIRONMENT_IS_NODE = typeof process === 'object' && typeof process.versions === 'object' && typeof process.versions.node === 'string';
var ENVIRONMENT_IS_SHELL = !ENVIRONMENT_IS_WEB && !ENVIRONMENT_IS_NODE && !ENVIRONMENT_IS_WORKER;

// `/` should be present at the end if `scriptDirectory` is not empty
var scriptDirectory = '';
function locateFile(path) {
  if (Module['locateFile']) {
    return Module['locateFile'](path, scriptDirectory);
  }
  return scriptDirectory + path;
}

// Hooks that are implemented differently in different runtime environments.
var read_,
    readAsync,
    readBinary,
    setWindowTitle;

// Normally we don't log exceptions but instead let them bubble out the top
// level where the embedding environment (e.g. the browser) can handle
// them.
// However under v8 and node we sometimes exit the process direcly in which case
// its up to use us to log the exception before exiting.
// If we fix https://github.com/emscripten-core/emscripten/issues/15080
// this may no longer be needed under node.
function logExceptionOnExit(e) {
  if (e instanceof ExitStatus) return;
  var toLog = e;
  err('exiting due to exception: ' + toLog);
}

var nodeFS;
var nodePath;

if (ENVIRONMENT_IS_NODE) {
  if (ENVIRONMENT_IS_WORKER) {
    scriptDirectory = require('path').dirname(scriptDirectory) + '/';
  } else {
    scriptDirectory = __dirname + '/';
  }

// include: node_shell_read.js


read_ = function shell_read(filename, binary) {
  if (!nodeFS) nodeFS = require('fs');
  if (!nodePath) nodePath = require('path');
  filename = nodePath['normalize'](filename);
  return nodeFS['readFileSync'](filename, binary ? null : 'utf8');
};

readBinary = function readBinary(filename) {
  var ret = read_(filename, true);
  if (!ret.buffer) {
    ret = new Uint8Array(ret);
  }
  assert(ret.buffer);
  return ret;
};

readAsync = function readAsync(filename, onload, onerror) {
  if (!nodeFS) nodeFS = require('fs');
  if (!nodePath) nodePath = require('path');
  filename = nodePath['normalize'](filename);
  nodeFS['readFile'](filename, function(err, data) {
    if (err) onerror(err);
    else onload(data.buffer);
  });
};

// end include: node_shell_read.js
  if (process['argv'].length > 1) {
    thisProgram = process['argv'][1].replace(/\\/g, '/');
  }

  arguments_ = process['argv'].slice(2);

  if (typeof module !== 'undefined') {
    module['exports'] = Module;
  }

  process['on']('uncaughtException', function(ex) {
    // suppress ExitStatus exceptions from showing an error
    if (!(ex instanceof ExitStatus)) {
      throw ex;
    }
  });

  // Without this older versions of node (< v15) will log unhandled rejections
  // but return 0, which is not normally the desired behaviour.  This is
  // not be needed with node v15 and about because it is now the default
  // behaviour:
  // See https://nodejs.org/api/cli.html#cli_unhandled_rejections_mode
  process['on']('unhandledRejection', function(reason) { throw reason; });

  quit_ = function(status, toThrow) {
    if (keepRuntimeAlive()) {
      process['exitCode'] = status;
      throw toThrow;
    }
    logExceptionOnExit(toThrow);
    process['exit'](status);
  };

  Module['inspect'] = function () { return '[Emscripten Module object]'; };

} else

// Note that this includes Node.js workers when relevant (pthreads is enabled).
// Node.js workers are detected as a combination of ENVIRONMENT_IS_WORKER and
// ENVIRONMENT_IS_NODE.
if (ENVIRONMENT_IS_WEB || ENVIRONMENT_IS_WORKER) {
  if (ENVIRONMENT_IS_WORKER) { // Check worker, not web, since window could be polyfilled
    scriptDirectory = self.location.href;
  } else if (typeof document !== 'undefined' && document.currentScript) { // web
    scriptDirectory = document.currentScript.src;
  }
  // blob urls look like blob:http://site.com/etc/etc and we cannot infer anything from them.
  // otherwise, slice off the final part of the url to find the script directory.
  // if scriptDirectory does not contain a slash, lastIndexOf will return -1,
  // and scriptDirectory will correctly be replaced with an empty string.
  // If scriptDirectory contains a query (starting with ?) or a fragment (starting with #),
  // they are removed because they could contain a slash.
  if (scriptDirectory.indexOf('blob:') !== 0) {
    scriptDirectory = scriptDirectory.substr(0, scriptDirectory.replace(/[?#].*/, "").lastIndexOf('/')+1);
  } else {
    scriptDirectory = '';
  }

  // Differentiate the Web Worker from the Node Worker case, as reading must
  // be done differently.
  {

// include: web_or_worker_shell_read.js


  read_ = function(url) {
      var xhr = new XMLHttpRequest();
      xhr.open('GET', url, false);
      xhr.send(null);
      return xhr.responseText;
  };

  if (ENVIRONMENT_IS_WORKER) {
    readBinary = function(url) {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', url, false);
        xhr.responseType = 'arraybuffer';
        xhr.send(null);
        return new Uint8Array(/** @type{!ArrayBuffer} */(xhr.response));
    };
  }

  readAsync = function(url, onload, onerror) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'arraybuffer';
    xhr.onload = function() {
      if (xhr.status == 200 || (xhr.status == 0 && xhr.response)) { // file URLs can return 0
        onload(xhr.response);
        return;
      }
      onerror();
    };
    xhr.onerror = onerror;
    xhr.send(null);
  };

// end include: web_or_worker_shell_read.js
  }

  setWindowTitle = function(title) { document.title = title };
} else
{
}

// Set up the out() and err() hooks, which are how we can print to stdout or
// stderr, respectively.
var out = Module['print'] || console.log.bind(console);
var err = Module['printErr'] || console.warn.bind(console);

// Merge back in the overrides
for (key in moduleOverrides) {
  if (moduleOverrides.hasOwnProperty(key)) {
    Module[key] = moduleOverrides[key];
  }
}
// Free the object hierarchy contained in the overrides, this lets the GC
// reclaim data used e.g. in memoryInitializerRequest, which is a large typed array.
moduleOverrides = null;

// Emit code to handle expected values on the Module object. This applies Module.x
// to the proper local x. This has two benefits: first, we only emit it if it is
// expected to arrive, and second, by using a local everywhere else that can be
// minified.

if (Module['arguments']) arguments_ = Module['arguments'];

if (Module['thisProgram']) thisProgram = Module['thisProgram'];

if (Module['quit']) quit_ = Module['quit'];

// perform assertions in shell.js after we set up out() and err(), as otherwise if an assertion fails it cannot print the message




var STACK_ALIGN = 16;

function getNativeTypeSize(type) {
  switch (type) {
    case 'i1': case 'i8': return 1;
    case 'i16': return 2;
    case 'i32': return 4;
    case 'i64': return 8;
    case 'float': return 4;
    case 'double': return 8;
    default: {
      if (type[type.length-1] === '*') {
        return 4; // A pointer
      } else if (type[0] === 'i') {
        var bits = Number(type.substr(1));
        assert(bits % 8 === 0, 'getNativeTypeSize invalid bits ' + bits + ', type ' + type);
        return bits / 8;
      } else {
        return 0;
      }
    }
  }
}

function warnOnce(text) {
  if (!warnOnce.shown) warnOnce.shown = {};
  if (!warnOnce.shown[text]) {
    warnOnce.shown[text] = 1;
    err(text);
  }
}

// include: runtime_functions.js


// Wraps a JS function as a wasm function with a given signature.
function convertJsFunctionToWasm(func, sig) {

  // If the type reflection proposal is available, use the new
  // "WebAssembly.Function" constructor.
  // Otherwise, construct a minimal wasm module importing the JS function and
  // re-exporting it.
  if (typeof WebAssembly.Function === "function") {
    var typeNames = {
      'i': 'i32',
      'j': 'i64',
      'f': 'f32',
      'd': 'f64'
    };
    var type = {
      parameters: [],
      results: sig[0] == 'v' ? [] : [typeNames[sig[0]]]
    };
    for (var i = 1; i < sig.length; ++i) {
      type.parameters.push(typeNames[sig[i]]);
    }
    return new WebAssembly.Function(type, func);
  }

  // The module is static, with the exception of the type section, which is
  // generated based on the signature passed in.
  var typeSection = [
    0x01, // id: section,
    0x00, // length: 0 (placeholder)
    0x01, // count: 1
    0x60, // form: func
  ];
  var sigRet = sig.slice(0, 1);
  var sigParam = sig.slice(1);
  var typeCodes = {
    'i': 0x7f, // i32
    'j': 0x7e, // i64
    'f': 0x7d, // f32
    'd': 0x7c, // f64
  };

  // Parameters, length + signatures
  typeSection.push(sigParam.length);
  for (var i = 0; i < sigParam.length; ++i) {
    typeSection.push(typeCodes[sigParam[i]]);
  }

  // Return values, length + signatures
  // With no multi-return in MVP, either 0 (void) or 1 (anything else)
  if (sigRet == 'v') {
    typeSection.push(0x00);
  } else {
    typeSection = typeSection.concat([0x01, typeCodes[sigRet]]);
  }

  // Write the overall length of the type section back into the section header
  // (excepting the 2 bytes for the section id and length)
  typeSection[1] = typeSection.length - 2;

  // Rest of the module is static
  var bytes = new Uint8Array([
    0x00, 0x61, 0x73, 0x6d, // magic ("\0asm")
    0x01, 0x00, 0x00, 0x00, // version: 1
  ].concat(typeSection, [
    0x02, 0x07, // import section
      // (import "e" "f" (func 0 (type 0)))
      0x01, 0x01, 0x65, 0x01, 0x66, 0x00, 0x00,
    0x07, 0x05, // export section
      // (export "f" (func 0 (type 0)))
      0x01, 0x01, 0x66, 0x00, 0x00,
  ]));

   // We can compile this wasm module synchronously because it is very small.
  // This accepts an import (at "e.f"), that it reroutes to an export (at "f")
  var module = new WebAssembly.Module(bytes);
  var instance = new WebAssembly.Instance(module, {
    'e': {
      'f': func
    }
  });
  var wrappedFunc = instance.exports['f'];
  return wrappedFunc;
}

var freeTableIndexes = [];

// Weak map of functions in the table to their indexes, created on first use.
var functionsInTableMap;

function getEmptyTableSlot() {
  // Reuse a free index if there is one, otherwise grow.
  if (freeTableIndexes.length) {
    return freeTableIndexes.pop();
  }
  // Grow the table
  try {
    wasmTable.grow(1);
  } catch (err) {
    if (!(err instanceof RangeError)) {
      throw err;
    }
    throw 'Unable to grow wasm table. Set ALLOW_TABLE_GROWTH.';
  }
  return wasmTable.length - 1;
}

// Add a wasm function to the table.
function addFunctionWasm(func, sig) {
  // Check if the function is already in the table, to ensure each function
  // gets a unique index. First, create the map if this is the first use.
  if (!functionsInTableMap) {
    functionsInTableMap = new WeakMap();
    for (var i = 0; i < wasmTable.length; i++) {
      var item = wasmTable.get(i);
      // Ignore null values.
      if (item) {
        functionsInTableMap.set(item, i);
      }
    }
  }
  if (functionsInTableMap.has(func)) {
    return functionsInTableMap.get(func);
  }

  // It's not in the table, add it now.

  var ret = getEmptyTableSlot();

  // Set the new value.
  try {
    // Attempting to call this with JS function will cause of table.set() to fail
    wasmTable.set(ret, func);
  } catch (err) {
    if (!(err instanceof TypeError)) {
      throw err;
    }
    var wrapped = convertJsFunctionToWasm(func, sig);
    wasmTable.set(ret, wrapped);
  }

  functionsInTableMap.set(func, ret);

  return ret;
}

function removeFunction(index) {
  functionsInTableMap.delete(wasmTable.get(index));
  freeTableIndexes.push(index);
}

// 'sig' parameter is required for the llvm backend but only when func is not
// already a WebAssembly function.
function addFunction(func, sig) {

  return addFunctionWasm(func, sig);
}

// end include: runtime_functions.js
// include: runtime_debug.js


// end include: runtime_debug.js
var tempRet0 = 0;

var setTempRet0 = function(value) {
  tempRet0 = value;
};

var getTempRet0 = function() {
  return tempRet0;
};



// === Preamble library stuff ===

// Documentation for the public APIs defined in this file must be updated in:
//    site/source/docs/api_reference/preamble.js.rst
// A prebuilt local version of the documentation is available at:
//    site/build/text/docs/api_reference/preamble.js.txt
// You can also build docs locally as HTML or other formats in site/
// An online HTML version (which may be of a different version of Emscripten)
//    is up at http://kripken.github.io/emscripten-site/docs/api_reference/preamble.js.html

var wasmBinary;
if (Module['wasmBinary']) wasmBinary = Module['wasmBinary'];
var noExitRuntime = Module['noExitRuntime'] || true;

if (typeof WebAssembly !== 'object') {
  abort('no native wasm support detected');
}

// include: runtime_safe_heap.js


// In MINIMAL_RUNTIME, setValue() and getValue() are only available when building with safe heap enabled, for heap safety checking.
// In traditional runtime, setValue() and getValue() are always available (although their use is highly discouraged due to perf penalties)

/** @param {number} ptr
    @param {number} value
    @param {string} type
    @param {number|boolean=} noSafe */
function setValue(ptr, value, type, noSafe) {
  type = type || 'i8';
  if (type.charAt(type.length-1) === '*') type = 'i32'; // pointers are 32-bit
    switch (type) {
      case 'i1': HEAP8[((ptr)>>0)] = value; break;
      case 'i8': HEAP8[((ptr)>>0)] = value; break;
      case 'i16': HEAP16[((ptr)>>1)] = value; break;
      case 'i32': HEAP32[((ptr)>>2)] = value; break;
      case 'i64': (tempI64 = [value>>>0,(tempDouble=value,(+(Math.abs(tempDouble))) >= 1.0 ? (tempDouble > 0.0 ? ((Math.min((+(Math.floor((tempDouble)/4294967296.0))), 4294967295.0))|0)>>>0 : (~~((+(Math.ceil((tempDouble - +(((~~(tempDouble)))>>>0))/4294967296.0)))))>>>0) : 0)],HEAP32[((ptr)>>2)] = tempI64[0],HEAP32[(((ptr)+(4))>>2)] = tempI64[1]); break;
      case 'float': HEAPF32[((ptr)>>2)] = value; break;
      case 'double': HEAPF64[((ptr)>>3)] = value; break;
      default: abort('invalid type for setValue: ' + type);
    }
}

/** @param {number} ptr
    @param {string} type
    @param {number|boolean=} noSafe */
function getValue(ptr, type, noSafe) {
  type = type || 'i8';
  if (type.charAt(type.length-1) === '*') type = 'i32'; // pointers are 32-bit
    switch (type) {
      case 'i1': return HEAP8[((ptr)>>0)];
      case 'i8': return HEAP8[((ptr)>>0)];
      case 'i16': return HEAP16[((ptr)>>1)];
      case 'i32': return HEAP32[((ptr)>>2)];
      case 'i64': return HEAP32[((ptr)>>2)];
      case 'float': return HEAPF32[((ptr)>>2)];
      case 'double': return HEAPF64[((ptr)>>3)];
      default: abort('invalid type for getValue: ' + type);
    }
  return null;
}

// end include: runtime_safe_heap.js
// Wasm globals

var wasmMemory;

//========================================
// Runtime essentials
//========================================

// whether we are quitting the application. no code should run after this.
// set in exit() and abort()
var ABORT = false;

// set by exit() and abort().  Passed to 'onExit' handler.
// NOTE: This is also used as the process return code code in shell environments
// but only when noExitRuntime is false.
var EXITSTATUS;

/** @type {function(*, string=)} */
function assert(condition, text) {
  if (!condition) {
    abort('Assertion failed: ' + text);
  }
}

// Returns the C function with a specified identifier (for C++, you need to do manual name mangling)
function getCFunc(ident) {
  var func = Module['_' + ident]; // closure exported function
  assert(func, 'Cannot call unknown function ' + ident + ', make sure it is exported');
  return func;
}

// C calling interface.
/** @param {string|null=} returnType
    @param {Array=} argTypes
    @param {Arguments|Array=} args
    @param {Object=} opts */
function ccall(ident, returnType, argTypes, args, opts) {
  // For fast lookup of conversion functions
  var toC = {
    'string': function(str) {
      var ret = 0;
      if (str !== null && str !== undefined && str !== 0) { // null string
        // at most 4 bytes per UTF-8 code point, +1 for the trailing '\0'
        var len = (str.length << 2) + 1;
        ret = stackAlloc(len);
        stringToUTF8(str, ret, len);
      }
      return ret;
    },
    'array': function(arr) {
      var ret = stackAlloc(arr.length);
      writeArrayToMemory(arr, ret);
      return ret;
    }
  };

  function convertReturnValue(ret) {
    if (returnType === 'string') return UTF8ToString(ret);
    if (returnType === 'boolean') return Boolean(ret);
    return ret;
  }

  var func = getCFunc(ident);
  var cArgs = [];
  var stack = 0;
  if (args) {
    for (var i = 0; i < args.length; i++) {
      var converter = toC[argTypes[i]];
      if (converter) {
        if (stack === 0) stack = stackSave();
        cArgs[i] = converter(args[i]);
      } else {
        cArgs[i] = args[i];
      }
    }
  }
  var ret = func.apply(null, cArgs);
  function onDone(ret) {
    if (stack !== 0) stackRestore(stack);
    return convertReturnValue(ret);
  }

  ret = onDone(ret);
  return ret;
}

/** @param {string=} returnType
    @param {Array=} argTypes
    @param {Object=} opts */
function cwrap(ident, returnType, argTypes, opts) {
  argTypes = argTypes || [];
  // When the function takes numbers and returns a number, we can just return
  // the original function
  var numericArgs = argTypes.every(function(type){ return type === 'number'});
  var numericRet = returnType !== 'string';
  if (numericRet && numericArgs && !opts) {
    return getCFunc(ident);
  }
  return function() {
    return ccall(ident, returnType, argTypes, arguments, opts);
  }
}

var ALLOC_NORMAL = 0; // Tries to use _malloc()
var ALLOC_STACK = 1; // Lives for the duration of the current function call

// allocate(): This is for internal use. You can use it yourself as well, but the interface
//             is a little tricky (see docs right below). The reason is that it is optimized
//             for multiple syntaxes to save space in generated code. So you should
//             normally not use allocate(), and instead allocate memory using _malloc(),
//             initialize it with setValue(), and so forth.
// @slab: An array of data.
// @allocator: How to allocate memory, see ALLOC_*
/** @type {function((Uint8Array|Array<number>), number)} */
function allocate(slab, allocator) {
  var ret;

  if (allocator == ALLOC_STACK) {
    ret = stackAlloc(slab.length);
  } else {
    ret = _malloc(slab.length);
  }

  if (slab.subarray || slab.slice) {
    HEAPU8.set(/** @type {!Uint8Array} */(slab), ret);
  } else {
    HEAPU8.set(new Uint8Array(slab), ret);
  }
  return ret;
}

// include: runtime_strings.js


// runtime_strings.js: Strings related runtime functions that are part of both MINIMAL_RUNTIME and regular runtime.

// Given a pointer 'ptr' to a null-terminated UTF8-encoded string in the given array that contains uint8 values, returns
// a copy of that string as a Javascript String object.

var UTF8Decoder = typeof TextDecoder !== 'undefined' ? new TextDecoder('utf8') : undefined;

/**
 * @param {number} idx
 * @param {number=} maxBytesToRead
 * @return {string}
 */
function UTF8ArrayToString(heap, idx, maxBytesToRead) {
  var endIdx = idx + maxBytesToRead;
  var endPtr = idx;
  // TextDecoder needs to know the byte length in advance, it doesn't stop on null terminator by itself.
  // Also, use the length info to avoid running tiny strings through TextDecoder, since .subarray() allocates garbage.
  // (As a tiny code save trick, compare endPtr against endIdx using a negation, so that undefined means Infinity)
  while (heap[endPtr] && !(endPtr >= endIdx)) ++endPtr;

  if (endPtr - idx > 16 && heap.subarray && UTF8Decoder) {
    return UTF8Decoder.decode(heap.subarray(idx, endPtr));
  } else {
    var str = '';
    // If building with TextDecoder, we have already computed the string length above, so test loop end condition against that
    while (idx < endPtr) {
      // For UTF8 byte structure, see:
      // http://en.wikipedia.org/wiki/UTF-8#Description
      // https://www.ietf.org/rfc/rfc2279.txt
      // https://tools.ietf.org/html/rfc3629
      var u0 = heap[idx++];
      if (!(u0 & 0x80)) { str += String.fromCharCode(u0); continue; }
      var u1 = heap[idx++] & 63;
      if ((u0 & 0xE0) == 0xC0) { str += String.fromCharCode(((u0 & 31) << 6) | u1); continue; }
      var u2 = heap[idx++] & 63;
      if ((u0 & 0xF0) == 0xE0) {
        u0 = ((u0 & 15) << 12) | (u1 << 6) | u2;
      } else {
        u0 = ((u0 & 7) << 18) | (u1 << 12) | (u2 << 6) | (heap[idx++] & 63);
      }

      if (u0 < 0x10000) {
        str += String.fromCharCode(u0);
      } else {
        var ch = u0 - 0x10000;
        str += String.fromCharCode(0xD800 | (ch >> 10), 0xDC00 | (ch & 0x3FF));
      }
    }
  }
  return str;
}

// Given a pointer 'ptr' to a null-terminated UTF8-encoded string in the emscripten HEAP, returns a
// copy of that string as a Javascript String object.
// maxBytesToRead: an optional length that specifies the maximum number of bytes to read. You can omit
//                 this parameter to scan the string until the first \0 byte. If maxBytesToRead is
//                 passed, and the string at [ptr, ptr+maxBytesToReadr[ contains a null byte in the
//                 middle, then the string will cut short at that byte index (i.e. maxBytesToRead will
//                 not produce a string of exact length [ptr, ptr+maxBytesToRead[)
//                 N.B. mixing frequent uses of UTF8ToString() with and without maxBytesToRead may
//                 throw JS JIT optimizations off, so it is worth to consider consistently using one
//                 style or the other.
/**
 * @param {number} ptr
 * @param {number=} maxBytesToRead
 * @return {string}
 */
function UTF8ToString(ptr, maxBytesToRead) {
  return ptr ? UTF8ArrayToString(HEAPU8, ptr, maxBytesToRead) : '';
}

// Copies the given Javascript String object 'str' to the given byte array at address 'outIdx',
// encoded in UTF8 form and null-terminated. The copy will require at most str.length*4+1 bytes of space in the HEAP.
// Use the function lengthBytesUTF8 to compute the exact number of bytes (excluding null terminator) that this function will write.
// Parameters:
//   str: the Javascript string to copy.
//   heap: the array to copy to. Each index in this array is assumed to be one 8-byte element.
//   outIdx: The starting offset in the array to begin the copying.
//   maxBytesToWrite: The maximum number of bytes this function can write to the array.
//                    This count should include the null terminator,
//                    i.e. if maxBytesToWrite=1, only the null terminator will be written and nothing else.
//                    maxBytesToWrite=0 does not write any bytes to the output, not even the null terminator.
// Returns the number of bytes written, EXCLUDING the null terminator.

function stringToUTF8Array(str, heap, outIdx, maxBytesToWrite) {
  if (!(maxBytesToWrite > 0)) // Parameter maxBytesToWrite is not optional. Negative values, 0, null, undefined and false each don't write out any bytes.
    return 0;

  var startIdx = outIdx;
  var endIdx = outIdx + maxBytesToWrite - 1; // -1 for string null terminator.
  for (var i = 0; i < str.length; ++i) {
    // Gotcha: charCodeAt returns a 16-bit word that is a UTF-16 encoded code unit, not a Unicode code point of the character! So decode UTF16->UTF32->UTF8.
    // See http://unicode.org/faq/utf_bom.html#utf16-3
    // For UTF8 byte structure, see http://en.wikipedia.org/wiki/UTF-8#Description and https://www.ietf.org/rfc/rfc2279.txt and https://tools.ietf.org/html/rfc3629
    var u = str.charCodeAt(i); // possibly a lead surrogate
    if (u >= 0xD800 && u <= 0xDFFF) {
      var u1 = str.charCodeAt(++i);
      u = 0x10000 + ((u & 0x3FF) << 10) | (u1 & 0x3FF);
    }
    if (u <= 0x7F) {
      if (outIdx >= endIdx) break;
      heap[outIdx++] = u;
    } else if (u <= 0x7FF) {
      if (outIdx + 1 >= endIdx) break;
      heap[outIdx++] = 0xC0 | (u >> 6);
      heap[outIdx++] = 0x80 | (u & 63);
    } else if (u <= 0xFFFF) {
      if (outIdx + 2 >= endIdx) break;
      heap[outIdx++] = 0xE0 | (u >> 12);
      heap[outIdx++] = 0x80 | ((u >> 6) & 63);
      heap[outIdx++] = 0x80 | (u & 63);
    } else {
      if (outIdx + 3 >= endIdx) break;
      heap[outIdx++] = 0xF0 | (u >> 18);
      heap[outIdx++] = 0x80 | ((u >> 12) & 63);
      heap[outIdx++] = 0x80 | ((u >> 6) & 63);
      heap[outIdx++] = 0x80 | (u & 63);
    }
  }
  // Null-terminate the pointer to the buffer.
  heap[outIdx] = 0;
  return outIdx - startIdx;
}

// Copies the given Javascript String object 'str' to the emscripten HEAP at address 'outPtr',
// null-terminated and encoded in UTF8 form. The copy will require at most str.length*4+1 bytes of space in the HEAP.
// Use the function lengthBytesUTF8 to compute the exact number of bytes (excluding null terminator) that this function will write.
// Returns the number of bytes written, EXCLUDING the null terminator.

function stringToUTF8(str, outPtr, maxBytesToWrite) {
  return stringToUTF8Array(str, HEAPU8,outPtr, maxBytesToWrite);
}

// Returns the number of bytes the given Javascript string takes if encoded as a UTF8 byte array, EXCLUDING the null terminator byte.
function lengthBytesUTF8(str) {
  var len = 0;
  for (var i = 0; i < str.length; ++i) {
    // Gotcha: charCodeAt returns a 16-bit word that is a UTF-16 encoded code unit, not a Unicode code point of the character! So decode UTF16->UTF32->UTF8.
    // See http://unicode.org/faq/utf_bom.html#utf16-3
    var u = str.charCodeAt(i); // possibly a lead surrogate
    if (u >= 0xD800 && u <= 0xDFFF) u = 0x10000 + ((u & 0x3FF) << 10) | (str.charCodeAt(++i) & 0x3FF);
    if (u <= 0x7F) ++len;
    else if (u <= 0x7FF) len += 2;
    else if (u <= 0xFFFF) len += 3;
    else len += 4;
  }
  return len;
}

// end include: runtime_strings.js
// include: runtime_strings_extra.js


// runtime_strings_extra.js: Strings related runtime functions that are available only in regular runtime.

// Given a pointer 'ptr' to a null-terminated ASCII-encoded string in the emscripten HEAP, returns
// a copy of that string as a Javascript String object.

function AsciiToString(ptr) {
  var str = '';
  while (1) {
    var ch = HEAPU8[((ptr++)>>0)];
    if (!ch) return str;
    str += String.fromCharCode(ch);
  }
}

// Copies the given Javascript String object 'str' to the emscripten HEAP at address 'outPtr',
// null-terminated and encoded in ASCII form. The copy will require at most str.length+1 bytes of space in the HEAP.

function stringToAscii(str, outPtr) {
  return writeAsciiToMemory(str, outPtr, false);
}

// Given a pointer 'ptr' to a null-terminated UTF16LE-encoded string in the emscripten HEAP, returns
// a copy of that string as a Javascript String object.

var UTF16Decoder = typeof TextDecoder !== 'undefined' ? new TextDecoder('utf-16le') : undefined;

function UTF16ToString(ptr, maxBytesToRead) {
  var endPtr = ptr;
  // TextDecoder needs to know the byte length in advance, it doesn't stop on null terminator by itself.
  // Also, use the length info to avoid running tiny strings through TextDecoder, since .subarray() allocates garbage.
  var idx = endPtr >> 1;
  var maxIdx = idx + maxBytesToRead / 2;
  // If maxBytesToRead is not passed explicitly, it will be undefined, and this
  // will always evaluate to true. This saves on code size.
  while (!(idx >= maxIdx) && HEAPU16[idx]) ++idx;
  endPtr = idx << 1;

  if (endPtr - ptr > 32 && UTF16Decoder) {
    return UTF16Decoder.decode(HEAPU8.subarray(ptr, endPtr));
  } else {
    var str = '';

    // If maxBytesToRead is not passed explicitly, it will be undefined, and the for-loop's condition
    // will always evaluate to true. The loop is then terminated on the first null char.
    for (var i = 0; !(i >= maxBytesToRead / 2); ++i) {
      var codeUnit = HEAP16[(((ptr)+(i*2))>>1)];
      if (codeUnit == 0) break;
      // fromCharCode constructs a character from a UTF-16 code unit, so we can pass the UTF16 string right through.
      str += String.fromCharCode(codeUnit);
    }

    return str;
  }
}

// Copies the given Javascript String object 'str' to the emscripten HEAP at address 'outPtr',
// null-terminated and encoded in UTF16 form. The copy will require at most str.length*4+2 bytes of space in the HEAP.
// Use the function lengthBytesUTF16() to compute the exact number of bytes (excluding null terminator) that this function will write.
// Parameters:
//   str: the Javascript string to copy.
//   outPtr: Byte address in Emscripten HEAP where to write the string to.
//   maxBytesToWrite: The maximum number of bytes this function can write to the array. This count should include the null
//                    terminator, i.e. if maxBytesToWrite=2, only the null terminator will be written and nothing else.
//                    maxBytesToWrite<2 does not write any bytes to the output, not even the null terminator.
// Returns the number of bytes written, EXCLUDING the null terminator.

function stringToUTF16(str, outPtr, maxBytesToWrite) {
  // Backwards compatibility: if max bytes is not specified, assume unsafe unbounded write is allowed.
  if (maxBytesToWrite === undefined) {
    maxBytesToWrite = 0x7FFFFFFF;
  }
  if (maxBytesToWrite < 2) return 0;
  maxBytesToWrite -= 2; // Null terminator.
  var startPtr = outPtr;
  var numCharsToWrite = (maxBytesToWrite < str.length*2) ? (maxBytesToWrite / 2) : str.length;
  for (var i = 0; i < numCharsToWrite; ++i) {
    // charCodeAt returns a UTF-16 encoded code unit, so it can be directly written to the HEAP.
    var codeUnit = str.charCodeAt(i); // possibly a lead surrogate
    HEAP16[((outPtr)>>1)] = codeUnit;
    outPtr += 2;
  }
  // Null-terminate the pointer to the HEAP.
  HEAP16[((outPtr)>>1)] = 0;
  return outPtr - startPtr;
}

// Returns the number of bytes the given Javascript string takes if encoded as a UTF16 byte array, EXCLUDING the null terminator byte.

function lengthBytesUTF16(str) {
  return str.length*2;
}

function UTF32ToString(ptr, maxBytesToRead) {
  var i = 0;

  var str = '';
  // If maxBytesToRead is not passed explicitly, it will be undefined, and this
  // will always evaluate to true. This saves on code size.
  while (!(i >= maxBytesToRead / 4)) {
    var utf32 = HEAP32[(((ptr)+(i*4))>>2)];
    if (utf32 == 0) break;
    ++i;
    // Gotcha: fromCharCode constructs a character from a UTF-16 encoded code (pair), not from a Unicode code point! So encode the code point to UTF-16 for constructing.
    // See http://unicode.org/faq/utf_bom.html#utf16-3
    if (utf32 >= 0x10000) {
      var ch = utf32 - 0x10000;
      str += String.fromCharCode(0xD800 | (ch >> 10), 0xDC00 | (ch & 0x3FF));
    } else {
      str += String.fromCharCode(utf32);
    }
  }
  return str;
}

// Copies the given Javascript String object 'str' to the emscripten HEAP at address 'outPtr',
// null-terminated and encoded in UTF32 form. The copy will require at most str.length*4+4 bytes of space in the HEAP.
// Use the function lengthBytesUTF32() to compute the exact number of bytes (excluding null terminator) that this function will write.
// Parameters:
//   str: the Javascript string to copy.
//   outPtr: Byte address in Emscripten HEAP where to write the string to.
//   maxBytesToWrite: The maximum number of bytes this function can write to the array. This count should include the null
//                    terminator, i.e. if maxBytesToWrite=4, only the null terminator will be written and nothing else.
//                    maxBytesToWrite<4 does not write any bytes to the output, not even the null terminator.
// Returns the number of bytes written, EXCLUDING the null terminator.

function stringToUTF32(str, outPtr, maxBytesToWrite) {
  // Backwards compatibility: if max bytes is not specified, assume unsafe unbounded write is allowed.
  if (maxBytesToWrite === undefined) {
    maxBytesToWrite = 0x7FFFFFFF;
  }
  if (maxBytesToWrite < 4) return 0;
  var startPtr = outPtr;
  var endPtr = startPtr + maxBytesToWrite - 4;
  for (var i = 0; i < str.length; ++i) {
    // Gotcha: charCodeAt returns a 16-bit word that is a UTF-16 encoded code unit, not a Unicode code point of the character! We must decode the string to UTF-32 to the heap.
    // See http://unicode.org/faq/utf_bom.html#utf16-3
    var codeUnit = str.charCodeAt(i); // possibly a lead surrogate
    if (codeUnit >= 0xD800 && codeUnit <= 0xDFFF) {
      var trailSurrogate = str.charCodeAt(++i);
      codeUnit = 0x10000 + ((codeUnit & 0x3FF) << 10) | (trailSurrogate & 0x3FF);
    }
    HEAP32[((outPtr)>>2)] = codeUnit;
    outPtr += 4;
    if (outPtr + 4 > endPtr) break;
  }
  // Null-terminate the pointer to the HEAP.
  HEAP32[((outPtr)>>2)] = 0;
  return outPtr - startPtr;
}

// Returns the number of bytes the given Javascript string takes if encoded as a UTF16 byte array, EXCLUDING the null terminator byte.

function lengthBytesUTF32(str) {
  var len = 0;
  for (var i = 0; i < str.length; ++i) {
    // Gotcha: charCodeAt returns a 16-bit word that is a UTF-16 encoded code unit, not a Unicode code point of the character! We must decode the string to UTF-32 to the heap.
    // See http://unicode.org/faq/utf_bom.html#utf16-3
    var codeUnit = str.charCodeAt(i);
    if (codeUnit >= 0xD800 && codeUnit <= 0xDFFF) ++i; // possibly a lead surrogate, so skip over the tail surrogate.
    len += 4;
  }

  return len;
}

// Allocate heap space for a JS string, and write it there.
// It is the responsibility of the caller to free() that memory.
function allocateUTF8(str) {
  var size = lengthBytesUTF8(str) + 1;
  var ret = _malloc(size);
  if (ret) stringToUTF8Array(str, HEAP8, ret, size);
  return ret;
}

// Allocate stack space for a JS string, and write it there.
function allocateUTF8OnStack(str) {
  var size = lengthBytesUTF8(str) + 1;
  var ret = stackAlloc(size);
  stringToUTF8Array(str, HEAP8, ret, size);
  return ret;
}

// Deprecated: This function should not be called because it is unsafe and does not provide
// a maximum length limit of how many bytes it is allowed to write. Prefer calling the
// function stringToUTF8Array() instead, which takes in a maximum length that can be used
// to be secure from out of bounds writes.
/** @deprecated
    @param {boolean=} dontAddNull */
function writeStringToMemory(string, buffer, dontAddNull) {
  warnOnce('writeStringToMemory is deprecated and should not be called! Use stringToUTF8() instead!');

  var /** @type {number} */ lastChar, /** @type {number} */ end;
  if (dontAddNull) {
    // stringToUTF8Array always appends null. If we don't want to do that, remember the
    // character that existed at the location where the null will be placed, and restore
    // that after the write (below).
    end = buffer + lengthBytesUTF8(string);
    lastChar = HEAP8[end];
  }
  stringToUTF8(string, buffer, Infinity);
  if (dontAddNull) HEAP8[end] = lastChar; // Restore the value under the null character.
}

function writeArrayToMemory(array, buffer) {
  HEAP8.set(array, buffer);
}

/** @param {boolean=} dontAddNull */
function writeAsciiToMemory(str, buffer, dontAddNull) {
  for (var i = 0; i < str.length; ++i) {
    HEAP8[((buffer++)>>0)] = str.charCodeAt(i);
  }
  // Null-terminate the pointer to the HEAP.
  if (!dontAddNull) HEAP8[((buffer)>>0)] = 0;
}

// end include: runtime_strings_extra.js
// Memory management

function alignUp(x, multiple) {
  if (x % multiple > 0) {
    x += multiple - (x % multiple);
  }
  return x;
}

var HEAP,
/** @type {ArrayBuffer} */
  buffer,
/** @type {Int8Array} */
  HEAP8,
/** @type {Uint8Array} */
  HEAPU8,
/** @type {Int16Array} */
  HEAP16,
/** @type {Uint16Array} */
  HEAPU16,
/** @type {Int32Array} */
  HEAP32,
/** @type {Uint32Array} */
  HEAPU32,
/** @type {Float32Array} */
  HEAPF32,
/** @type {Float64Array} */
  HEAPF64;

function updateGlobalBufferAndViews(buf) {
  buffer = buf;
  Module['HEAP8'] = HEAP8 = new Int8Array(buf);
  Module['HEAP16'] = HEAP16 = new Int16Array(buf);
  Module['HEAP32'] = HEAP32 = new Int32Array(buf);
  Module['HEAPU8'] = HEAPU8 = new Uint8Array(buf);
  Module['HEAPU16'] = HEAPU16 = new Uint16Array(buf);
  Module['HEAPU32'] = HEAPU32 = new Uint32Array(buf);
  Module['HEAPF32'] = HEAPF32 = new Float32Array(buf);
  Module['HEAPF64'] = HEAPF64 = new Float64Array(buf);
}

var TOTAL_STACK = 5242880;

var INITIAL_MEMORY = Module['INITIAL_MEMORY'] || 16777216;

// include: runtime_init_table.js
// In regular non-RELOCATABLE mode the table is exported
// from the wasm module and this will be assigned once
// the exports are available.
var wasmTable;

// end include: runtime_init_table.js
// include: runtime_stack_check.js


// end include: runtime_stack_check.js
// include: runtime_assertions.js


// end include: runtime_assertions.js
var __ATPRERUN__  = []; // functions called before the runtime is initialized
var __ATINIT__    = []; // functions called during startup
var __ATEXIT__    = []; // functions called during shutdown
var __ATPOSTRUN__ = []; // functions called after the main() is called

var runtimeInitialized = false;
var runtimeExited = false;
var runtimeKeepaliveCounter = 0;

function keepRuntimeAlive() {
  return noExitRuntime || runtimeKeepaliveCounter > 0;
}

function preRun() {

  if (Module['preRun']) {
    if (typeof Module['preRun'] == 'function') Module['preRun'] = [Module['preRun']];
    while (Module['preRun'].length) {
      addOnPreRun(Module['preRun'].shift());
    }
  }

  callRuntimeCallbacks(__ATPRERUN__);
}

function initRuntime() {
  runtimeInitialized = true;

  
  callRuntimeCallbacks(__ATINIT__);
}

function exitRuntime() {
  runtimeExited = true;
}

function postRun() {

  if (Module['postRun']) {
    if (typeof Module['postRun'] == 'function') Module['postRun'] = [Module['postRun']];
    while (Module['postRun'].length) {
      addOnPostRun(Module['postRun'].shift());
    }
  }

  callRuntimeCallbacks(__ATPOSTRUN__);
}

function addOnPreRun(cb) {
  __ATPRERUN__.unshift(cb);
}

function addOnInit(cb) {
  __ATINIT__.unshift(cb);
}

function addOnExit(cb) {
}

function addOnPostRun(cb) {
  __ATPOSTRUN__.unshift(cb);
}

// include: runtime_math.js


// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/imul

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/fround

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/clz32

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/trunc

// end include: runtime_math.js
// A counter of dependencies for calling run(). If we need to
// do asynchronous work before running, increment this and
// decrement it. Incrementing must happen in a place like
// Module.preRun (used by emcc to add file preloading).
// Note that you can add dependencies in preRun, even though
// it happens right before run - run will be postponed until
// the dependencies are met.
var runDependencies = 0;
var runDependencyWatcher = null;
var dependenciesFulfilled = null; // overridden to take different actions when all run dependencies are fulfilled

function getUniqueRunDependency(id) {
  return id;
}

function addRunDependency(id) {
  runDependencies++;

  if (Module['monitorRunDependencies']) {
    Module['monitorRunDependencies'](runDependencies);
  }

}

function removeRunDependency(id) {
  runDependencies--;

  if (Module['monitorRunDependencies']) {
    Module['monitorRunDependencies'](runDependencies);
  }

  if (runDependencies == 0) {
    if (runDependencyWatcher !== null) {
      clearInterval(runDependencyWatcher);
      runDependencyWatcher = null;
    }
    if (dependenciesFulfilled) {
      var callback = dependenciesFulfilled;
      dependenciesFulfilled = null;
      callback(); // can add another dependenciesFulfilled
    }
  }
}

Module["preloadedImages"] = {}; // maps url to image data
Module["preloadedAudios"] = {}; // maps url to audio data

/** @param {string|number=} what */
function abort(what) {
  {
    if (Module['onAbort']) {
      Module['onAbort'](what);
    }
  }

  what = 'Aborted(' + what + ')';
  // TODO(sbc): Should we remove printing and leave it up to whoever
  // catches the exception?
  err(what);

  ABORT = true;
  EXITSTATUS = 1;

  what += '. Build with -s ASSERTIONS=1 for more info.';

  // Use a wasm runtime error, because a JS error might be seen as a foreign
  // exception, which means we'd run destructors on it. We need the error to
  // simply make the program stop.
  var e = new WebAssembly.RuntimeError(what);

  // Throw the error whether or not MODULARIZE is set because abort is used
  // in code paths apart from instantiation where an exception is expected
  // to be thrown when abort is called.
  throw e;
}

// {{MEM_INITIALIZER}}

// include: memoryprofiler.js


// end include: memoryprofiler.js
// include: URIUtils.js


// Prefix of data URIs emitted by SINGLE_FILE and related options.
var dataURIPrefix = 'data:application/octet-stream;base64,';

// Indicates whether filename is a base64 data URI.
function isDataURI(filename) {
  // Prefix of data URIs emitted by SINGLE_FILE and related options.
  return filename.startsWith(dataURIPrefix);
}

// Indicates whether filename is delivered via file protocol (as opposed to http/https)
function isFileURI(filename) {
  return filename.startsWith('file://');
}

// end include: URIUtils.js
var wasmBinaryFile;
  wasmBinaryFile = 'decoderWorker.wasm';
  if (!isDataURI(wasmBinaryFile)) {
    wasmBinaryFile = locateFile(wasmBinaryFile);
  }

function getBinary(file) {
  try {
    if (file == wasmBinaryFile && wasmBinary) {
      return new Uint8Array(wasmBinary);
    }
    if (readBinary) {
      return readBinary(file);
    } else {
      throw "both async and sync fetching of the wasm failed";
    }
  }
  catch (err) {
    abort(err);
  }
}

function getBinaryPromise() {
  // If we don't have the binary yet, try to to load it asynchronously.
  // Fetch has some additional restrictions over XHR, like it can't be used on a file:// url.
  // See https://github.com/github/fetch/pull/92#issuecomment-140665932
  // Cordova or Electron apps are typically loaded from a file:// url.
  // So use fetch if it is available and the url is not a file, otherwise fall back to XHR.
  if (!wasmBinary && (ENVIRONMENT_IS_WEB || ENVIRONMENT_IS_WORKER)) {
    if (typeof fetch === 'function'
      && !isFileURI(wasmBinaryFile)
    ) {
      return fetch(wasmBinaryFile, { credentials: 'same-origin' }).then(function(response) {
        if (!response['ok']) {
          throw "failed to load wasm binary file at '" + wasmBinaryFile + "'";
        }
        return response['arrayBuffer']();
      }).catch(function () {
          return getBinary(wasmBinaryFile);
      });
    }
    else {
      if (readAsync) {
        // fetch is not available or url is file => try XHR (readAsync uses XHR internally)
        return new Promise(function(resolve, reject) {
          readAsync(wasmBinaryFile, function(response) { resolve(new Uint8Array(/** @type{!ArrayBuffer} */(response))) }, reject)
        });
      }
    }
  }

  // Otherwise, getBinary should be able to get it synchronously
  return Promise.resolve().then(function() { return getBinary(wasmBinaryFile); });
}

// Create the wasm instance.
// Receives the wasm imports, returns the exports.
function createWasm() {
  // prepare imports
  var info = {
    'env': asmLibraryArg,
    'wasi_snapshot_preview1': asmLibraryArg,
  };
  // Load the wasm module and create an instance of using native support in the JS engine.
  // handle a generated wasm instance, receiving its exports and
  // performing other necessary setup
  /** @param {WebAssembly.Module=} module*/
  function receiveInstance(instance, module) {
    var exports = instance.exports;

    Module['asm'] = exports;

    wasmMemory = Module['asm']['memory'];
    updateGlobalBufferAndViews(wasmMemory.buffer);

    wasmTable = Module['asm']['__indirect_function_table'];

    addOnInit(Module['asm']['__wasm_call_ctors']);

    removeRunDependency('wasm-instantiate');
  }
  // we can't run yet (except in a pthread, where we have a custom sync instantiator)
  addRunDependency('wasm-instantiate');

  // Prefer streaming instantiation if available.
  function receiveInstantiationResult(result) {
    // 'result' is a ResultObject object which has both the module and instance.
    // receiveInstance() will swap in the exports (to Module.asm) so they can be called
    // TODO: Due to Closure regression https://github.com/google/closure-compiler/issues/3193, the above line no longer optimizes out down to the following line.
    // When the regression is fixed, can restore the above USE_PTHREADS-enabled path.
    receiveInstance(result['instance']);
  }

  function instantiateArrayBuffer(receiver) {
    return getBinaryPromise().then(function(binary) {
      return WebAssembly.instantiate(binary, info);
    }).then(function (instance) {
      return instance;
    }).then(receiver, function(reason) {
      err('failed to asynchronously prepare wasm: ' + reason);

      abort(reason);
    });
  }

  function instantiateAsync() {
    if (!wasmBinary &&
        typeof WebAssembly.instantiateStreaming === 'function' &&
        !isDataURI(wasmBinaryFile) &&
        // Don't use streaming for file:// delivered objects in a webview, fetch them synchronously.
        !isFileURI(wasmBinaryFile) &&
        typeof fetch === 'function') {
      return fetch(wasmBinaryFile, { credentials: 'same-origin' }).then(function (response) {
        var result = WebAssembly.instantiateStreaming(response, info);

        return result.then(
          receiveInstantiationResult,
          function(reason) {
            // We expect the most common failure cause to be a bad MIME type for the binary,
            // in which case falling back to ArrayBuffer instantiation should work.
            err('wasm streaming compile failed: ' + reason);
            err('falling back to ArrayBuffer instantiation');
            return instantiateArrayBuffer(receiveInstantiationResult);
          });
      });
    } else {
      return instantiateArrayBuffer(receiveInstantiationResult);
    }
  }

  // User shell pages can write their own Module.instantiateWasm = function(imports, successCallback) callback
  // to manually instantiate the Wasm module themselves. This allows pages to run the instantiation parallel
  // to any other async startup actions they are performing.
  if (Module['instantiateWasm']) {
    try {
      var exports = Module['instantiateWasm'](info, receiveInstance);
      return exports;
    } catch(e) {
      err('Module.instantiateWasm callback failed with error: ' + e);
      return false;
    }
  }

  instantiateAsync();
  return {}; // no exports yet; we'll fill them in later
}

// Globals used by JS i64 conversions (see makeSetValue)
var tempDouble;
var tempI64;

// === Body ===

var ASM_CONSTS = {
  
};






  function callRuntimeCallbacks(callbacks) {
      while (callbacks.length > 0) {
        var callback = callbacks.shift();
        if (typeof callback == 'function') {
          callback(Module); // Pass the module as the first argument.
          continue;
        }
        var func = callback.func;
        if (typeof func === 'number') {
          if (callback.arg === undefined) {
            wasmTable.get(func)();
          } else {
            wasmTable.get(func)(callback.arg);
          }
        } else {
          func(callback.arg === undefined ? null : callback.arg);
        }
      }
    }

  function demangle(func) {
      return func;
    }

  function demangleAll(text) {
      var regex =
        /\b_Z[\w\d_]+/g;
      return text.replace(regex,
        function(x) {
          var y = demangle(x);
          return x === y ? x : (y + ' [' + x + ']');
        });
    }

  function handleException(e) {
      // Certain exception types we do not treat as errors since they are used for
      // internal control flow.
      // 1. ExitStatus, which is thrown by exit()
      // 2. "unwind", which is thrown by emscripten_unwind_to_js_event_loop() and others
      //    that wish to return to JS event loop.
      if (e instanceof ExitStatus || e == 'unwind') {
        return EXITSTATUS;
      }
      quit_(1, e);
    }

  function jsStackTrace() {
      var error = new Error();
      if (!error.stack) {
        // IE10+ special cases: It does have callstack info, but it is only populated if an Error object is thrown,
        // so try that as a special-case.
        try {
          throw new Error();
        } catch(e) {
          error = e;
        }
        if (!error.stack) {
          return '(no stack trace available)';
        }
      }
      return error.stack.toString();
    }

  function stackTrace() {
      var js = jsStackTrace();
      if (Module['extraStackTrace']) js += '\n' + Module['extraStackTrace']();
      return demangleAll(js);
    }

  function _abort() {
      abort('');
    }

  function _emscripten_memcpy_big(dest, src, num) {
      HEAPU8.copyWithin(dest, src, src + num);
    }

  function abortOnCannotGrowMemory(requestedSize) {
      abort('OOM');
    }
  function _emscripten_resize_heap(requestedSize) {
      var oldSize = HEAPU8.length;
      requestedSize = requestedSize >>> 0;
      abortOnCannotGrowMemory(requestedSize);
    }

  var SYSCALLS = {mappings:{},buffers:[null,[],[]],printChar:function(stream, curr) {
        var buffer = SYSCALLS.buffers[stream];
        if (curr === 0 || curr === 10) {
          (stream === 1 ? out : err)(UTF8ArrayToString(buffer, 0));
          buffer.length = 0;
        } else {
          buffer.push(curr);
        }
      },varargs:undefined,get:function() {
        SYSCALLS.varargs += 4;
        var ret = HEAP32[(((SYSCALLS.varargs)-(4))>>2)];
        return ret;
      },getStr:function(ptr) {
        var ret = UTF8ToString(ptr);
        return ret;
      },get64:function(low, high) {
        return low;
      }};
  function _fd_close(fd) {
      return 0;
    }

  function _fd_seek(fd, offset_low, offset_high, whence, newOffset) {
  }

  function flush_NO_FILESYSTEM() {
      // flush anything remaining in the buffers during shutdown
      if (typeof _fflush !== 'undefined') _fflush(0);
      var buffers = SYSCALLS.buffers;
      if (buffers[1].length) SYSCALLS.printChar(1, 10);
      if (buffers[2].length) SYSCALLS.printChar(2, 10);
    }
  function _fd_write(fd, iov, iovcnt, pnum) {
      // hack to support printf in SYSCALLS_REQUIRE_FILESYSTEM=0
      var num = 0;
      for (var i = 0; i < iovcnt; i++) {
        var ptr = HEAP32[(((iov)+(i*8))>>2)];
        var len = HEAP32[(((iov)+(i*8 + 4))>>2)];
        for (var j = 0; j < len; j++) {
          SYSCALLS.printChar(fd, HEAPU8[ptr+j]);
        }
        num += len;
      }
      HEAP32[((pnum)>>2)] = num
      return 0;
    }

  function _setTempRet0(val) {
      setTempRet0(val);
    }
var ASSERTIONS = false;



/** @type {function(string, boolean=, number=)} */
function intArrayFromString(stringy, dontAddNull, length) {
  var len = length > 0 ? length : lengthBytesUTF8(stringy)+1;
  var u8array = new Array(len);
  var numBytesWritten = stringToUTF8Array(stringy, u8array, 0, u8array.length);
  if (dontAddNull) u8array.length = numBytesWritten;
  return u8array;
}

function intArrayToString(array) {
  var ret = [];
  for (var i = 0; i < array.length; i++) {
    var chr = array[i];
    if (chr > 0xFF) {
      if (ASSERTIONS) {
        assert(false, 'Character code ' + chr + ' (' + String.fromCharCode(chr) + ')  at offset ' + i + ' not in 0x00-0xFF.');
      }
      chr &= 0xFF;
    }
    ret.push(String.fromCharCode(chr));
  }
  return ret.join('');
}


var asmLibraryArg = {
  "abort": _abort,
  "emscripten_memcpy_big": _emscripten_memcpy_big,
  "emscripten_resize_heap": _emscripten_resize_heap,
  "fd_close": _fd_close,
  "fd_seek": _fd_seek,
  "fd_write": _fd_write,
  "setTempRet0": _setTempRet0
};
var asm = createWasm();
/** @type {function(...*):?} */
var ___wasm_call_ctors = Module["___wasm_call_ctors"] = function() {
  return (___wasm_call_ctors = Module["___wasm_call_ctors"] = Module["asm"]["__wasm_call_ctors"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _opus_decoder_create = Module["_opus_decoder_create"] = function() {
  return (_opus_decoder_create = Module["_opus_decoder_create"] = Module["asm"]["opus_decoder_create"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _opus_decode_float = Module["_opus_decode_float"] = function() {
  return (_opus_decode_float = Module["_opus_decode_float"] = Module["asm"]["opus_decode_float"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _opus_decoder_destroy = Module["_opus_decoder_destroy"] = function() {
  return (_opus_decoder_destroy = Module["_opus_decoder_destroy"] = Module["asm"]["opus_decoder_destroy"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _speex_resampler_init = Module["_speex_resampler_init"] = function() {
  return (_speex_resampler_init = Module["_speex_resampler_init"] = Module["asm"]["speex_resampler_init"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _speex_resampler_destroy = Module["_speex_resampler_destroy"] = function() {
  return (_speex_resampler_destroy = Module["_speex_resampler_destroy"] = Module["asm"]["speex_resampler_destroy"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _speex_resampler_process_interleaved_float = Module["_speex_resampler_process_interleaved_float"] = function() {
  return (_speex_resampler_process_interleaved_float = Module["_speex_resampler_process_interleaved_float"] = Module["asm"]["speex_resampler_process_interleaved_float"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var ___errno_location = Module["___errno_location"] = function() {
  return (___errno_location = Module["___errno_location"] = Module["asm"]["__errno_location"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var stackSave = Module["stackSave"] = function() {
  return (stackSave = Module["stackSave"] = Module["asm"]["stackSave"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var stackRestore = Module["stackRestore"] = function() {
  return (stackRestore = Module["stackRestore"] = Module["asm"]["stackRestore"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var stackAlloc = Module["stackAlloc"] = function() {
  return (stackAlloc = Module["stackAlloc"] = Module["asm"]["stackAlloc"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _malloc = Module["_malloc"] = function() {
  return (_malloc = Module["_malloc"] = Module["asm"]["malloc"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _free = Module["_free"] = function() {
  return (_free = Module["_free"] = Module["asm"]["free"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var dynCall_jiji = Module["dynCall_jiji"] = function() {
  return (dynCall_jiji = Module["dynCall_jiji"] = Module["asm"]["dynCall_jiji"]).apply(null, arguments);
};





// === Auto-generated postamble setup entry stuff ===



var calledRun;

/**
 * @constructor
 * @this {ExitStatus}
 */
function ExitStatus(status) {
  this.name = "ExitStatus";
  this.message = "Program terminated with exit(" + status + ")";
  this.status = status;
}

var calledMain = false;

dependenciesFulfilled = function runCaller() {
  // If run has never been called, and we should call run (INVOKE_RUN is true, and Module.noInitialRun is not false)
  if (!calledRun) run();
  if (!calledRun) dependenciesFulfilled = runCaller; // try this again later, after new deps are fulfilled
};

/** @type {function(Array=)} */
function run(args) {
  args = args || arguments_;

  if (runDependencies > 0) {
    return;
  }

  preRun();

  // a preRun added a dependency, run will be called later
  if (runDependencies > 0) {
    return;
  }

  function doRun() {
    // run may have just been called through dependencies being fulfilled just in this very frame,
    // or while the async setStatus time below was happening
    if (calledRun) return;
    calledRun = true;
    Module['calledRun'] = true;

    if (ABORT) return;

    initRuntime();

    if (Module['onRuntimeInitialized']) Module['onRuntimeInitialized']();

    postRun();
  }

  if (Module['setStatus']) {
    Module['setStatus']('Running...');
    setTimeout(function() {
      setTimeout(function() {
        Module['setStatus']('');
      }, 1);
      doRun();
    }, 1);
  } else
  {
    doRun();
  }
}
Module['run'] = run;

/** @param {boolean|number=} implicit */
function exit(status, implicit) {
  EXITSTATUS = status;

  if (keepRuntimeAlive()) {
  } else {
    exitRuntime();
  }

  procExit(status);
}

function procExit(code) {
  EXITSTATUS = code;
  if (!keepRuntimeAlive()) {
    if (Module['onExit']) Module['onExit'](code);
    ABORT = true;
  }
  quit_(code, new ExitStatus(code));
}

if (Module['preInit']) {
  if (typeof Module['preInit'] == 'function') Module['preInit'] = [Module['preInit']];
  while (Module['preInit'].length > 0) {
    Module['preInit'].pop()();
  }
}

run();





