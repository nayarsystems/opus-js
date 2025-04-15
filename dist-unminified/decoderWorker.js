// include: shell.js
// The Module object: Our interface to the outside world. We import
// and export values on it. There are various ways Module can be used:
// 1. Not defined. We create it here
// 2. A function parameter, function(moduleArg) => Promise<Module>
// 3. pre-run appended it, var Module = {}; ..generated code..
// 4. External script tag defines var Module.
// We need to check if Module already exists (e.g. case 3 above).
// Substitution will be replaced with actual code on later stage of the build,
// this way Closure Compiler will not mangle it (e.g. case 4. above).
// Note that if you want to run closure, and also to use Module
// after the generated code, you will need to define   var Module = {};
// before the code. Then that object will be used in the code, and you
// can continue to use Module afterwards as well.
var Module = typeof Module != 'undefined' ? Module : {};

// Determine the runtime environment we are in. You can customize this by
// setting the ENVIRONMENT setting at compile time (see settings.js).

// Attempt to auto-detect the environment
var ENVIRONMENT_IS_WEB = typeof window == 'object';
var ENVIRONMENT_IS_WORKER = typeof WorkerGlobalScope != 'undefined';
// N.b. Electron.js environment is simultaneously a NODE-environment, but
// also a web environment.
var ENVIRONMENT_IS_NODE = typeof process == 'object' && typeof process.versions == 'object' && typeof process.versions.node == 'string' && process.type != 'renderer';
var ENVIRONMENT_IS_SHELL = !ENVIRONMENT_IS_WEB && !ENVIRONMENT_IS_NODE && !ENVIRONMENT_IS_WORKER;

if (ENVIRONMENT_IS_NODE) {
  // `require()` is no-op in an ESM module, use `createRequire()` to construct
  // the require()` function.  This is only necessary for multi-environment
  // builds, `-sENVIRONMENT=node` emits a static import declaration instead.
  // TODO: Swap all `require()`'s with `import()`'s?

}

// --pre-jses are emitted after the Module integration code, so that they can
// refer to Module (if they choose; they can also define Module)
// include: /home/victor/code/idefix-js/examples/browser-calls/opus-js/dist-unminified/decoderWorker.js
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
eval("/* WEBPACK VAR INJECTION */(function(global) {\n\nvar decoder;\nvar mainReadyResolve;\nvar mainReady = new Promise(function (resolve) {\n  mainReadyResolve = resolve;\n});\n\nfunction atob(input) {\n  var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';\n  var str = input.replace(/=+$/, '');\n  var output = '';\n\n  if (str.length % 4 === 1) {\n    throw new Error(\"'atob' failed: The string to be decoded is not correctly encoded.\");\n  }\n\n  for (var bc = 0, bs = 0, buffer, i = 0; buffer = str.charAt(i++); ~buffer && (bs = bc % 4 ? bs * 64 + buffer : buffer, bc++ % 4) ? output += String.fromCharCode(255 & bs >> (-2 * bc & 6)) : 0) {\n    buffer = chars.indexOf(buffer);\n  }\n\n  return output;\n}\n\nglobal['onmessage'] = function (e) {\n  mainReady.then(function () {\n    switch (e['data']['command']) {\n      case 'decode':\n        if (decoder) {\n          decoder.decode(e['data']['pages']);\n        }\n\n        break;\n\n      case 'done':\n        if (decoder) {\n          decoder.sendLastBuffer();\n          global['close']();\n        }\n\n        break;\n\n      case 'init':\n        decoder = new OggOpusDecoder(e['data'], Module);\n        break;\n\n      default: // Ignore any unknown commands and continue recieving commands\n\n    }\n  });\n};\n\nvar OggOpusDecoder = function OggOpusDecoder(config, Module) {\n  if (!Module) {\n    throw new Error('Module with exports required to initialize a decoder instance');\n  }\n\n  this.mainReady = mainReady; // Expose for unit testing\n\n  this.config = Object.assign({\n    bufferLength: 4096,\n    // Define size of outgoing buffer\n    decoderSampleRate: 48000,\n    // Desired decoder sample rate.\n    outputBufferSampleRate: 48000,\n    // Desired output sample rate. Audio will be resampled\n    resampleQuality: 3 // Value between 0 and 10 inclusive. 10 being highest quality.\n\n  }, config);\n  this._opus_decoder_create = Module._opus_decoder_create;\n  this._opus_decoder_destroy = Module._opus_decoder_destroy;\n  this._speex_resampler_process_interleaved_float = Module._speex_resampler_process_interleaved_float;\n  this._speex_resampler_init = Module._speex_resampler_init;\n  this._speex_resampler_destroy = Module._speex_resampler_destroy;\n  this._opus_decode_float = Module._opus_decode_float;\n  this._free = Module._free;\n  this._malloc = Module._malloc;\n  this.HEAPU8 = Module.HEAPU8;\n  this.HEAP32 = Module.HEAP32;\n  this.HEAPF32 = Module.HEAPF32;\n  this.outputBuffers = [];\n};\n\nOggOpusDecoder.prototype.decode = function (typedArray) {\n  var dataView = new DataView(typedArray.buffer);\n  this.getPageBoundaries(dataView).map(function (pageStart) {\n    var headerType = dataView.getUint8(pageStart + 5, true);\n    var pageIndex = dataView.getUint32(pageStart + 18, true); // Beginning of stream\n\n    if (headerType & 2) {\n      this.numberOfChannels = dataView.getUint8(pageStart + 37, true);\n      this.init();\n    } // Decode page\n\n\n    if (pageIndex > 1) {\n      var segmentTableLength = dataView.getUint8(pageStart + 26, true);\n      var segmentTableIndex = pageStart + 27 + segmentTableLength;\n\n      for (var i = 0; i < segmentTableLength; i++) {\n        var packetLength = dataView.getUint8(pageStart + 27 + i, true);\n        this.decoderBuffer.set(typedArray.subarray(segmentTableIndex, segmentTableIndex += packetLength), this.decoderBufferIndex);\n        this.decoderBufferIndex += packetLength;\n\n        if (packetLength < 255) {\n          var outputSampleLength = this._opus_decode_float(this.decoder, this.decoderBufferPointer, this.decoderBufferIndex, this.decoderOutputPointer, this.decoderOutputMaxLength, 0);\n\n          var resampledLength = Math.ceil(outputSampleLength * this.config.outputBufferSampleRate / this.config.decoderSampleRate);\n          this.HEAP32[this.decoderOutputLengthPointer >> 2] = outputSampleLength;\n          this.HEAP32[this.resampleOutputLengthPointer >> 2] = resampledLength;\n\n          this._speex_resampler_process_interleaved_float(this.resampler, this.decoderOutputPointer, this.decoderOutputLengthPointer, this.resampleOutputBufferPointer, this.resampleOutputLengthPointer);\n\n          this.sendToOutputBuffers(this.HEAPF32.subarray(this.resampleOutputBufferPointer >> 2, (this.resampleOutputBufferPointer >> 2) + resampledLength * this.numberOfChannels));\n          this.decoderBufferIndex = 0;\n        }\n      } // End of stream\n\n\n      if (headerType & 4) {\n        this.sendLastBuffer();\n      }\n    }\n  }, this);\n};\n\nOggOpusDecoder.prototype.getPageBoundaries = function (dataView) {\n  var pageBoundaries = [];\n\n  for (var i = 0; i < dataView.byteLength - 4; i++) {\n    if (dataView.getUint32(i, true) == 1399285583) {\n      pageBoundaries.push(i);\n    }\n  }\n\n  return pageBoundaries;\n};\n\nOggOpusDecoder.prototype.init = function () {\n  this.resetOutputBuffers();\n  this.initCodec();\n  this.initResampler();\n};\n\nOggOpusDecoder.prototype.initCodec = function () {\n  if (this.decoder) {\n    this._opus_decoder_destroy(this.decoder);\n\n    this._free(this.decoderBufferPointer);\n\n    this._free(this.decoderOutputLengthPointer);\n\n    this._free(this.decoderOutputPointer);\n  }\n\n  var errReference = this._malloc(4);\n\n  this.decoder = this._opus_decoder_create(this.config.decoderSampleRate, this.numberOfChannels, errReference);\n\n  this._free(errReference);\n\n  this.decoderBufferMaxLength = 4000;\n  this.decoderBufferPointer = this._malloc(this.decoderBufferMaxLength);\n  this.decoderBuffer = this.HEAPU8.subarray(this.decoderBufferPointer, this.decoderBufferPointer + this.decoderBufferMaxLength);\n  this.decoderBufferIndex = 0;\n  this.decoderOutputLengthPointer = this._malloc(4);\n  this.decoderOutputMaxLength = this.config.decoderSampleRate * this.numberOfChannels * 120 / 1000; // Max 120ms frame size\n\n  this.decoderOutputPointer = this._malloc(this.decoderOutputMaxLength * 4); // 4 bytes per sample\n};\n\nOggOpusDecoder.prototype.initResampler = function () {\n  if (this.resampler) {\n    this._speex_resampler_destroy(this.resampler);\n\n    this._free(this.resampleOutputLengthPointer);\n\n    this._free(this.resampleOutputBufferPointer);\n  }\n\n  var errLocation = this._malloc(4);\n\n  this.resampler = this._speex_resampler_init(this.numberOfChannels, this.config.decoderSampleRate, this.config.outputBufferSampleRate, this.config.resampleQuality, errLocation);\n\n  this._free(errLocation);\n\n  this.resampleOutputLengthPointer = this._malloc(4);\n  this.resampleOutputMaxLength = Math.ceil(this.decoderOutputMaxLength * this.config.outputBufferSampleRate / this.config.decoderSampleRate);\n  this.resampleOutputBufferPointer = this._malloc(this.resampleOutputMaxLength * 4); // 4 bytes per sample\n};\n\nOggOpusDecoder.prototype.resetOutputBuffers = function () {\n  this.outputBuffers = [];\n  this.outputBufferArrayBuffers = [];\n  this.outputBufferIndex = 0;\n\n  for (var i = 0; i < this.numberOfChannels; i++) {\n    this.outputBuffers.push(new Float32Array(this.config.bufferLength));\n    this.outputBufferArrayBuffers.push(this.outputBuffers[i].buffer);\n  }\n};\n\nOggOpusDecoder.prototype.sendLastBuffer = function () {\n  this.sendToOutputBuffers(new Float32Array((this.config.bufferLength - this.outputBufferIndex) * this.numberOfChannels));\n  global['postMessage'](null);\n};\n\nOggOpusDecoder.prototype.sendToOutputBuffers = function (mergedBuffers) {\n  var dataIndex = 0;\n  var mergedBufferLength = mergedBuffers.length / this.numberOfChannels;\n\n  while (dataIndex < mergedBufferLength) {\n    var amountToCopy = Math.min(mergedBufferLength - dataIndex, this.config.bufferLength - this.outputBufferIndex);\n\n    if (this.numberOfChannels === 1) {\n      this.outputBuffers[0].set(mergedBuffers.subarray(dataIndex, dataIndex + amountToCopy), this.outputBufferIndex);\n    } // Deinterleave\n    else {\n      for (var i = 0; i < amountToCopy; i++) {\n        this.outputBuffers.forEach(function (buffer, channelIndex) {\n          buffer[this.outputBufferIndex + i] = mergedBuffers[(dataIndex + i) * this.numberOfChannels + channelIndex];\n        }, this);\n      }\n    }\n\n    dataIndex += amountToCopy;\n    this.outputBufferIndex += amountToCopy;\n\n    if (this.outputBufferIndex == this.config.bufferLength) {\n      global['postMessage'](this.outputBuffers, this.outputBufferArrayBuffers);\n      this.resetOutputBuffers();\n    }\n  }\n};\n\nif (!Module) {\n  Module = {};\n}\n\nModule['mainReady'] = mainReady;\nModule['OggOpusDecoder'] = OggOpusDecoder;\nModule['onRuntimeInitialized'] = mainReadyResolve;\nmodule.exports = Module;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/global.js */ \"./node_modules/webpack/buildin/global.js\")))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZGVjb2Rlcldvcmtlci5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovL0RlY29kZXJXb3JrZXIvLi9zcmMvZGVjb2Rlcldvcmtlci5qcz8wYzQ1Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG52YXIgZGVjb2RlcjtcbnZhciBtYWluUmVhZHlSZXNvbHZlO1xudmFyIG1haW5SZWFkeSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlKSB7IG1haW5SZWFkeVJlc29sdmUgPSByZXNvbHZlOyB9KTtcblxuZnVuY3Rpb24gYXRvYihpbnB1dCkge1xuICBjb25zdCBjaGFycyA9ICdBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWmFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6MDEyMzQ1Njc4OSsvPSc7XG4gIGxldCBzdHIgPSBpbnB1dC5yZXBsYWNlKC89KyQvLCAnJyk7XG4gIGxldCBvdXRwdXQgPSAnJztcblxuICBpZiAoc3RyLmxlbmd0aCAlIDQgPT09IDEpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCInYXRvYicgZmFpbGVkOiBUaGUgc3RyaW5nIHRvIGJlIGRlY29kZWQgaXMgbm90IGNvcnJlY3RseSBlbmNvZGVkLlwiKTtcbiAgfVxuXG4gIGZvciAobGV0IGJjID0gMCwgYnMgPSAwLCBidWZmZXIsIGkgPSAwOyBidWZmZXIgPSBzdHIuY2hhckF0KGkrKyk7IH5idWZmZXIgJiZcbiAgICAoYnMgPSBiYyAlIDQgPyBicyAqIDY0ICsgYnVmZmVyIDogYnVmZmVyLFxuICAgICAgYmMrKyAlIDQpID8gb3V0cHV0ICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoMjU1ICYgYnMgPj4gKC0yICogYmMgJiA2KSkgOiAwXG4gICkge1xuICAgIGJ1ZmZlciA9IGNoYXJzLmluZGV4T2YoYnVmZmVyKTtcbiAgfVxuXG4gIHJldHVybiBvdXRwdXQ7XG59XG5cbmdsb2JhbFsnb25tZXNzYWdlJ10gPSBmdW5jdGlvbiAoZSkge1xuICBtYWluUmVhZHkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgc3dpdGNoIChlWydkYXRhJ11bJ2NvbW1hbmQnXSkge1xuXG4gICAgICBjYXNlICdkZWNvZGUnOlxuICAgICAgICBpZiAoZGVjb2Rlcikge1xuICAgICAgICAgIGRlY29kZXIuZGVjb2RlKGVbJ2RhdGEnXVsncGFnZXMnXSk7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgJ2RvbmUnOlxuICAgICAgICBpZiAoZGVjb2Rlcikge1xuICAgICAgICAgIGRlY29kZXIuc2VuZExhc3RCdWZmZXIoKTtcbiAgICAgICAgICBnbG9iYWxbJ2Nsb3NlJ10oKTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSAnaW5pdCc6XG4gICAgICAgIGRlY29kZXIgPSBuZXcgT2dnT3B1c0RlY29kZXIoZVsnZGF0YSddLCBNb2R1bGUpO1xuICAgICAgICBicmVhaztcblxuICAgICAgZGVmYXVsdDpcbiAgICAgIC8vIElnbm9yZSBhbnkgdW5rbm93biBjb21tYW5kcyBhbmQgY29udGludWUgcmVjaWV2aW5nIGNvbW1hbmRzXG4gICAgfVxuICB9KTtcbn07XG5cbnZhciBPZ2dPcHVzRGVjb2RlciA9IGZ1bmN0aW9uIChjb25maWcsIE1vZHVsZSkge1xuXG4gIGlmICghTW9kdWxlKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdNb2R1bGUgd2l0aCBleHBvcnRzIHJlcXVpcmVkIHRvIGluaXRpYWxpemUgYSBkZWNvZGVyIGluc3RhbmNlJyk7XG4gIH1cblxuICB0aGlzLm1haW5SZWFkeSA9IG1haW5SZWFkeTsgLy8gRXhwb3NlIGZvciB1bml0IHRlc3RpbmdcbiAgdGhpcy5jb25maWcgPSBPYmplY3QuYXNzaWduKHtcbiAgICBidWZmZXJMZW5ndGg6IDQwOTYsIC8vIERlZmluZSBzaXplIG9mIG91dGdvaW5nIGJ1ZmZlclxuICAgIGRlY29kZXJTYW1wbGVSYXRlOiA0ODAwMCwgLy8gRGVzaXJlZCBkZWNvZGVyIHNhbXBsZSByYXRlLlxuICAgIG91dHB1dEJ1ZmZlclNhbXBsZVJhdGU6IDQ4MDAwLCAvLyBEZXNpcmVkIG91dHB1dCBzYW1wbGUgcmF0ZS4gQXVkaW8gd2lsbCBiZSByZXNhbXBsZWRcbiAgICByZXNhbXBsZVF1YWxpdHk6IDMsIC8vIFZhbHVlIGJldHdlZW4gMCBhbmQgMTAgaW5jbHVzaXZlLiAxMCBiZWluZyBoaWdoZXN0IHF1YWxpdHkuXG4gIH0sIGNvbmZpZyk7XG5cbiAgdGhpcy5fb3B1c19kZWNvZGVyX2NyZWF0ZSA9IE1vZHVsZS5fb3B1c19kZWNvZGVyX2NyZWF0ZTtcbiAgdGhpcy5fb3B1c19kZWNvZGVyX2Rlc3Ryb3kgPSBNb2R1bGUuX29wdXNfZGVjb2Rlcl9kZXN0cm95O1xuICB0aGlzLl9zcGVleF9yZXNhbXBsZXJfcHJvY2Vzc19pbnRlcmxlYXZlZF9mbG9hdCA9IE1vZHVsZS5fc3BlZXhfcmVzYW1wbGVyX3Byb2Nlc3NfaW50ZXJsZWF2ZWRfZmxvYXQ7XG4gIHRoaXMuX3NwZWV4X3Jlc2FtcGxlcl9pbml0ID0gTW9kdWxlLl9zcGVleF9yZXNhbXBsZXJfaW5pdDtcbiAgdGhpcy5fc3BlZXhfcmVzYW1wbGVyX2Rlc3Ryb3kgPSBNb2R1bGUuX3NwZWV4X3Jlc2FtcGxlcl9kZXN0cm95O1xuICB0aGlzLl9vcHVzX2RlY29kZV9mbG9hdCA9IE1vZHVsZS5fb3B1c19kZWNvZGVfZmxvYXQ7XG4gIHRoaXMuX2ZyZWUgPSBNb2R1bGUuX2ZyZWU7XG4gIHRoaXMuX21hbGxvYyA9IE1vZHVsZS5fbWFsbG9jO1xuICB0aGlzLkhFQVBVOCA9IE1vZHVsZS5IRUFQVTg7XG4gIHRoaXMuSEVBUDMyID0gTW9kdWxlLkhFQVAzMjtcbiAgdGhpcy5IRUFQRjMyID0gTW9kdWxlLkhFQVBGMzI7XG5cbiAgdGhpcy5vdXRwdXRCdWZmZXJzID0gW107XG59O1xuXG5cbk9nZ09wdXNEZWNvZGVyLnByb3RvdHlwZS5kZWNvZGUgPSBmdW5jdGlvbiAodHlwZWRBcnJheSkge1xuICB2YXIgZGF0YVZpZXcgPSBuZXcgRGF0YVZpZXcodHlwZWRBcnJheS5idWZmZXIpO1xuICB0aGlzLmdldFBhZ2VCb3VuZGFyaWVzKGRhdGFWaWV3KS5tYXAoZnVuY3Rpb24gKHBhZ2VTdGFydCkge1xuICAgIHZhciBoZWFkZXJUeXBlID0gZGF0YVZpZXcuZ2V0VWludDgocGFnZVN0YXJ0ICsgNSwgdHJ1ZSk7XG4gICAgdmFyIHBhZ2VJbmRleCA9IGRhdGFWaWV3LmdldFVpbnQzMihwYWdlU3RhcnQgKyAxOCwgdHJ1ZSk7XG5cbiAgICAvLyBCZWdpbm5pbmcgb2Ygc3RyZWFtXG4gICAgaWYgKGhlYWRlclR5cGUgJiAyKSB7XG4gICAgICB0aGlzLm51bWJlck9mQ2hhbm5lbHMgPSBkYXRhVmlldy5nZXRVaW50OChwYWdlU3RhcnQgKyAzNywgdHJ1ZSk7XG4gICAgICB0aGlzLmluaXQoKTtcbiAgICB9XG5cbiAgICAvLyBEZWNvZGUgcGFnZVxuICAgIGlmIChwYWdlSW5kZXggPiAxKSB7XG4gICAgICB2YXIgc2VnbWVudFRhYmxlTGVuZ3RoID0gZGF0YVZpZXcuZ2V0VWludDgocGFnZVN0YXJ0ICsgMjYsIHRydWUpO1xuICAgICAgdmFyIHNlZ21lbnRUYWJsZUluZGV4ID0gcGFnZVN0YXJ0ICsgMjcgKyBzZWdtZW50VGFibGVMZW5ndGg7XG5cbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc2VnbWVudFRhYmxlTGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIHBhY2tldExlbmd0aCA9IGRhdGFWaWV3LmdldFVpbnQ4KHBhZ2VTdGFydCArIDI3ICsgaSwgdHJ1ZSk7XG4gICAgICAgIHRoaXMuZGVjb2RlckJ1ZmZlci5zZXQodHlwZWRBcnJheS5zdWJhcnJheShzZWdtZW50VGFibGVJbmRleCwgc2VnbWVudFRhYmxlSW5kZXggKz0gcGFja2V0TGVuZ3RoKSwgdGhpcy5kZWNvZGVyQnVmZmVySW5kZXgpO1xuICAgICAgICB0aGlzLmRlY29kZXJCdWZmZXJJbmRleCArPSBwYWNrZXRMZW5ndGg7XG5cbiAgICAgICAgaWYgKHBhY2tldExlbmd0aCA8IDI1NSkge1xuICAgICAgICAgIHZhciBvdXRwdXRTYW1wbGVMZW5ndGggPSB0aGlzLl9vcHVzX2RlY29kZV9mbG9hdCh0aGlzLmRlY29kZXIsIHRoaXMuZGVjb2RlckJ1ZmZlclBvaW50ZXIsIHRoaXMuZGVjb2RlckJ1ZmZlckluZGV4LCB0aGlzLmRlY29kZXJPdXRwdXRQb2ludGVyLCB0aGlzLmRlY29kZXJPdXRwdXRNYXhMZW5ndGgsIDApO1xuICAgICAgICAgIHZhciByZXNhbXBsZWRMZW5ndGggPSBNYXRoLmNlaWwob3V0cHV0U2FtcGxlTGVuZ3RoICogdGhpcy5jb25maWcub3V0cHV0QnVmZmVyU2FtcGxlUmF0ZSAvIHRoaXMuY29uZmlnLmRlY29kZXJTYW1wbGVSYXRlKTtcbiAgICAgICAgICB0aGlzLkhFQVAzMlt0aGlzLmRlY29kZXJPdXRwdXRMZW5ndGhQb2ludGVyID4+IDJdID0gb3V0cHV0U2FtcGxlTGVuZ3RoO1xuICAgICAgICAgIHRoaXMuSEVBUDMyW3RoaXMucmVzYW1wbGVPdXRwdXRMZW5ndGhQb2ludGVyID4+IDJdID0gcmVzYW1wbGVkTGVuZ3RoO1xuICAgICAgICAgIHRoaXMuX3NwZWV4X3Jlc2FtcGxlcl9wcm9jZXNzX2ludGVybGVhdmVkX2Zsb2F0KHRoaXMucmVzYW1wbGVyLCB0aGlzLmRlY29kZXJPdXRwdXRQb2ludGVyLCB0aGlzLmRlY29kZXJPdXRwdXRMZW5ndGhQb2ludGVyLCB0aGlzLnJlc2FtcGxlT3V0cHV0QnVmZmVyUG9pbnRlciwgdGhpcy5yZXNhbXBsZU91dHB1dExlbmd0aFBvaW50ZXIpO1xuICAgICAgICAgIHRoaXMuc2VuZFRvT3V0cHV0QnVmZmVycyh0aGlzLkhFQVBGMzIuc3ViYXJyYXkodGhpcy5yZXNhbXBsZU91dHB1dEJ1ZmZlclBvaW50ZXIgPj4gMiwgKHRoaXMucmVzYW1wbGVPdXRwdXRCdWZmZXJQb2ludGVyID4+IDIpICsgcmVzYW1wbGVkTGVuZ3RoICogdGhpcy5udW1iZXJPZkNoYW5uZWxzKSk7XG4gICAgICAgICAgdGhpcy5kZWNvZGVyQnVmZmVySW5kZXggPSAwO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIEVuZCBvZiBzdHJlYW1cbiAgICAgIGlmIChoZWFkZXJUeXBlICYgNCkge1xuICAgICAgICB0aGlzLnNlbmRMYXN0QnVmZmVyKCk7XG4gICAgICB9XG4gICAgfVxuICB9LCB0aGlzKTtcbn07XG5cbk9nZ09wdXNEZWNvZGVyLnByb3RvdHlwZS5nZXRQYWdlQm91bmRhcmllcyA9IGZ1bmN0aW9uIChkYXRhVmlldykge1xuICB2YXIgcGFnZUJvdW5kYXJpZXMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGRhdGFWaWV3LmJ5dGVMZW5ndGggLSA0OyBpKyspIHtcbiAgICBpZiAoZGF0YVZpZXcuZ2V0VWludDMyKGksIHRydWUpID09IDEzOTkyODU1ODMpIHtcbiAgICAgIHBhZ2VCb3VuZGFyaWVzLnB1c2goaSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHBhZ2VCb3VuZGFyaWVzO1xufTtcblxuT2dnT3B1c0RlY29kZXIucHJvdG90eXBlLmluaXQgPSBmdW5jdGlvbiAoKSB7XG4gIHRoaXMucmVzZXRPdXRwdXRCdWZmZXJzKCk7XG4gIHRoaXMuaW5pdENvZGVjKCk7XG4gIHRoaXMuaW5pdFJlc2FtcGxlcigpO1xufTtcblxuT2dnT3B1c0RlY29kZXIucHJvdG90eXBlLmluaXRDb2RlYyA9IGZ1bmN0aW9uICgpIHtcblxuICBpZiAodGhpcy5kZWNvZGVyKSB7XG4gICAgdGhpcy5fb3B1c19kZWNvZGVyX2Rlc3Ryb3kodGhpcy5kZWNvZGVyKTtcbiAgICB0aGlzLl9mcmVlKHRoaXMuZGVjb2RlckJ1ZmZlclBvaW50ZXIpO1xuICAgIHRoaXMuX2ZyZWUodGhpcy5kZWNvZGVyT3V0cHV0TGVuZ3RoUG9pbnRlcik7XG4gICAgdGhpcy5fZnJlZSh0aGlzLmRlY29kZXJPdXRwdXRQb2ludGVyKTtcbiAgfVxuXG4gIHZhciBlcnJSZWZlcmVuY2UgPSB0aGlzLl9tYWxsb2MoNCk7XG4gIHRoaXMuZGVjb2RlciA9IHRoaXMuX29wdXNfZGVjb2Rlcl9jcmVhdGUodGhpcy5jb25maWcuZGVjb2RlclNhbXBsZVJhdGUsIHRoaXMubnVtYmVyT2ZDaGFubmVscywgZXJyUmVmZXJlbmNlKTtcbiAgdGhpcy5fZnJlZShlcnJSZWZlcmVuY2UpO1xuXG4gIHRoaXMuZGVjb2RlckJ1ZmZlck1heExlbmd0aCA9IDQwMDA7XG4gIHRoaXMuZGVjb2RlckJ1ZmZlclBvaW50ZXIgPSB0aGlzLl9tYWxsb2ModGhpcy5kZWNvZGVyQnVmZmVyTWF4TGVuZ3RoKTtcbiAgdGhpcy5kZWNvZGVyQnVmZmVyID0gdGhpcy5IRUFQVTguc3ViYXJyYXkodGhpcy5kZWNvZGVyQnVmZmVyUG9pbnRlciwgdGhpcy5kZWNvZGVyQnVmZmVyUG9pbnRlciArIHRoaXMuZGVjb2RlckJ1ZmZlck1heExlbmd0aCk7XG4gIHRoaXMuZGVjb2RlckJ1ZmZlckluZGV4ID0gMDtcblxuICB0aGlzLmRlY29kZXJPdXRwdXRMZW5ndGhQb2ludGVyID0gdGhpcy5fbWFsbG9jKDQpO1xuICB0aGlzLmRlY29kZXJPdXRwdXRNYXhMZW5ndGggPSB0aGlzLmNvbmZpZy5kZWNvZGVyU2FtcGxlUmF0ZSAqIHRoaXMubnVtYmVyT2ZDaGFubmVscyAqIDEyMCAvIDEwMDA7IC8vIE1heCAxMjBtcyBmcmFtZSBzaXplXG4gIHRoaXMuZGVjb2Rlck91dHB1dFBvaW50ZXIgPSB0aGlzLl9tYWxsb2ModGhpcy5kZWNvZGVyT3V0cHV0TWF4TGVuZ3RoICogNCk7IC8vIDQgYnl0ZXMgcGVyIHNhbXBsZVxufTtcblxuT2dnT3B1c0RlY29kZXIucHJvdG90eXBlLmluaXRSZXNhbXBsZXIgPSBmdW5jdGlvbiAoKSB7XG5cbiAgaWYgKHRoaXMucmVzYW1wbGVyKSB7XG4gICAgdGhpcy5fc3BlZXhfcmVzYW1wbGVyX2Rlc3Ryb3kodGhpcy5yZXNhbXBsZXIpO1xuICAgIHRoaXMuX2ZyZWUodGhpcy5yZXNhbXBsZU91dHB1dExlbmd0aFBvaW50ZXIpO1xuICAgIHRoaXMuX2ZyZWUodGhpcy5yZXNhbXBsZU91dHB1dEJ1ZmZlclBvaW50ZXIpO1xuICB9XG5cbiAgdmFyIGVyckxvY2F0aW9uID0gdGhpcy5fbWFsbG9jKDQpO1xuICB0aGlzLnJlc2FtcGxlciA9IHRoaXMuX3NwZWV4X3Jlc2FtcGxlcl9pbml0KHRoaXMubnVtYmVyT2ZDaGFubmVscywgdGhpcy5jb25maWcuZGVjb2RlclNhbXBsZVJhdGUsIHRoaXMuY29uZmlnLm91dHB1dEJ1ZmZlclNhbXBsZVJhdGUsIHRoaXMuY29uZmlnLnJlc2FtcGxlUXVhbGl0eSwgZXJyTG9jYXRpb24pO1xuICB0aGlzLl9mcmVlKGVyckxvY2F0aW9uKTtcblxuICB0aGlzLnJlc2FtcGxlT3V0cHV0TGVuZ3RoUG9pbnRlciA9IHRoaXMuX21hbGxvYyg0KTtcbiAgdGhpcy5yZXNhbXBsZU91dHB1dE1heExlbmd0aCA9IE1hdGguY2VpbCh0aGlzLmRlY29kZXJPdXRwdXRNYXhMZW5ndGggKiB0aGlzLmNvbmZpZy5vdXRwdXRCdWZmZXJTYW1wbGVSYXRlIC8gdGhpcy5jb25maWcuZGVjb2RlclNhbXBsZVJhdGUpO1xuICB0aGlzLnJlc2FtcGxlT3V0cHV0QnVmZmVyUG9pbnRlciA9IHRoaXMuX21hbGxvYyh0aGlzLnJlc2FtcGxlT3V0cHV0TWF4TGVuZ3RoICogNCk7IC8vIDQgYnl0ZXMgcGVyIHNhbXBsZVxufTtcblxuT2dnT3B1c0RlY29kZXIucHJvdG90eXBlLnJlc2V0T3V0cHV0QnVmZmVycyA9IGZ1bmN0aW9uICgpIHtcbiAgdGhpcy5vdXRwdXRCdWZmZXJzID0gW107XG4gIHRoaXMub3V0cHV0QnVmZmVyQXJyYXlCdWZmZXJzID0gW107XG4gIHRoaXMub3V0cHV0QnVmZmVySW5kZXggPSAwO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5udW1iZXJPZkNoYW5uZWxzOyBpKyspIHtcbiAgICB0aGlzLm91dHB1dEJ1ZmZlcnMucHVzaChuZXcgRmxvYXQzMkFycmF5KHRoaXMuY29uZmlnLmJ1ZmZlckxlbmd0aCkpO1xuICAgIHRoaXMub3V0cHV0QnVmZmVyQXJyYXlCdWZmZXJzLnB1c2godGhpcy5vdXRwdXRCdWZmZXJzW2ldLmJ1ZmZlcik7XG4gIH1cbn07XG5cbk9nZ09wdXNEZWNvZGVyLnByb3RvdHlwZS5zZW5kTGFzdEJ1ZmZlciA9IGZ1bmN0aW9uICgpIHtcbiAgdGhpcy5zZW5kVG9PdXRwdXRCdWZmZXJzKG5ldyBGbG9hdDMyQXJyYXkoKHRoaXMuY29uZmlnLmJ1ZmZlckxlbmd0aCAtIHRoaXMub3V0cHV0QnVmZmVySW5kZXgpICogdGhpcy5udW1iZXJPZkNoYW5uZWxzKSk7XG4gIGdsb2JhbFsncG9zdE1lc3NhZ2UnXShudWxsKTtcbn07XG5cbk9nZ09wdXNEZWNvZGVyLnByb3RvdHlwZS5zZW5kVG9PdXRwdXRCdWZmZXJzID0gZnVuY3Rpb24gKG1lcmdlZEJ1ZmZlcnMpIHtcbiAgdmFyIGRhdGFJbmRleCA9IDA7XG4gIHZhciBtZXJnZWRCdWZmZXJMZW5ndGggPSBtZXJnZWRCdWZmZXJzLmxlbmd0aCAvIHRoaXMubnVtYmVyT2ZDaGFubmVscztcblxuICB3aGlsZSAoZGF0YUluZGV4IDwgbWVyZ2VkQnVmZmVyTGVuZ3RoKSB7XG4gICAgdmFyIGFtb3VudFRvQ29weSA9IE1hdGgubWluKG1lcmdlZEJ1ZmZlckxlbmd0aCAtIGRhdGFJbmRleCwgdGhpcy5jb25maWcuYnVmZmVyTGVuZ3RoIC0gdGhpcy5vdXRwdXRCdWZmZXJJbmRleCk7XG5cbiAgICBpZiAodGhpcy5udW1iZXJPZkNoYW5uZWxzID09PSAxKSB7XG4gICAgICB0aGlzLm91dHB1dEJ1ZmZlcnNbMF0uc2V0KG1lcmdlZEJ1ZmZlcnMuc3ViYXJyYXkoZGF0YUluZGV4LCBkYXRhSW5kZXggKyBhbW91bnRUb0NvcHkpLCB0aGlzLm91dHB1dEJ1ZmZlckluZGV4KTtcbiAgICB9XG5cbiAgICAvLyBEZWludGVybGVhdmVcbiAgICBlbHNlIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYW1vdW50VG9Db3B5OyBpKyspIHtcbiAgICAgICAgdGhpcy5vdXRwdXRCdWZmZXJzLmZvckVhY2goZnVuY3Rpb24gKGJ1ZmZlciwgY2hhbm5lbEluZGV4KSB7XG4gICAgICAgICAgYnVmZmVyW3RoaXMub3V0cHV0QnVmZmVySW5kZXggKyBpXSA9IG1lcmdlZEJ1ZmZlcnNbKGRhdGFJbmRleCArIGkpICogdGhpcy5udW1iZXJPZkNoYW5uZWxzICsgY2hhbm5lbEluZGV4XTtcbiAgICAgICAgfSwgdGhpcyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZGF0YUluZGV4ICs9IGFtb3VudFRvQ29weTtcbiAgICB0aGlzLm91dHB1dEJ1ZmZlckluZGV4ICs9IGFtb3VudFRvQ29weTtcblxuICAgIGlmICh0aGlzLm91dHB1dEJ1ZmZlckluZGV4ID09IHRoaXMuY29uZmlnLmJ1ZmZlckxlbmd0aCkge1xuICAgICAgZ2xvYmFsWydwb3N0TWVzc2FnZSddKHRoaXMub3V0cHV0QnVmZmVycywgdGhpcy5vdXRwdXRCdWZmZXJBcnJheUJ1ZmZlcnMpO1xuICAgICAgdGhpcy5yZXNldE91dHB1dEJ1ZmZlcnMoKTtcbiAgICB9XG4gIH1cbn07XG5cblxuaWYgKCFNb2R1bGUpIHtcbiAgTW9kdWxlID0ge307XG59XG5cbk1vZHVsZVsnbWFpblJlYWR5J10gPSBtYWluUmVhZHk7XG5Nb2R1bGVbJ09nZ09wdXNEZWNvZGVyJ10gPSBPZ2dPcHVzRGVjb2Rlcjtcbk1vZHVsZVsnb25SdW50aW1lSW5pdGlhbGl6ZWQnXSA9IG1haW5SZWFkeVJlc29sdmU7XG5cbm1vZHVsZS5leHBvcnRzID0gTW9kdWxlOyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBcEJBO0FBc0JBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBTEE7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/decoderWorker.js\n");

/***/ })

/******/ });
});// end include: /home/victor/code/idefix-js/examples/browser-calls/opus-js/dist-unminified/decoderWorker.js


// Sometimes an existing Module object exists with properties
// meant to overwrite the default module functionality. Here
// we collect those properties and reapply _after_ we configure
// the current environment's defaults to avoid having to be so
// defensive during initialization.
var moduleOverrides = Object.assign({}, Module);

var arguments_ = [];
var thisProgram = './this.program';
var quit_ = (status, toThrow) => {
  throw toThrow;
};

// `/` should be present at the end if `scriptDirectory` is not empty
var scriptDirectory = '';
function locateFile(path) {
  if (Module['locateFile']) {
    return Module['locateFile'](path, scriptDirectory);
  }
  return scriptDirectory + path;
}

// Hooks that are implemented differently in different runtime environments.
var readAsync, readBinary;

if (ENVIRONMENT_IS_NODE) {

  // These modules will usually be used on Node.js. Load them eagerly to avoid
  // the complexity of lazy-loading.
  var fs = require('fs');
  var nodePath = require('path');

  scriptDirectory = __dirname + '/';

// include: node_shell_read.js
readBinary = (filename) => {
  // We need to re-wrap `file://` strings to URLs. Normalizing isn't
  // necessary in that case, the path should already be absolute.
  filename = isFileURI(filename) ? new URL(filename) : nodePath.normalize(filename);
  var ret = fs.readFileSync(filename);
  return ret;
};

readAsync = (filename, binary = true) => {
  // See the comment in the `readBinary` function.
  filename = isFileURI(filename) ? new URL(filename) : nodePath.normalize(filename);
  return new Promise((resolve, reject) => {
    fs.readFile(filename, binary ? undefined : 'utf8', (err, data) => {
      if (err) reject(err);
      else resolve(binary ? data.buffer : data);
    });
  });
};
// end include: node_shell_read.js
  if (!Module['thisProgram'] && process.argv.length > 1) {
    thisProgram = process.argv[1].replace(/\\/g, '/');
  }

  arguments_ = process.argv.slice(2);

  if (typeof module != 'undefined') {
    module['exports'] = Module;
  }

  quit_ = (status, toThrow) => {
    process.exitCode = status;
    throw toThrow;
  };

} else

// Note that this includes Node.js workers when relevant (pthreads is enabled).
// Node.js workers are detected as a combination of ENVIRONMENT_IS_WORKER and
// ENVIRONMENT_IS_NODE.
if (ENVIRONMENT_IS_WEB || ENVIRONMENT_IS_WORKER) {
  if (ENVIRONMENT_IS_WORKER) { // Check worker, not web, since window could be polyfilled
    scriptDirectory = self.location.href;
  } else if (typeof document != 'undefined' && document.currentScript) { // web
    scriptDirectory = document.currentScript.src;
  }
  // blob urls look like blob:http://site.com/etc/etc and we cannot infer anything from them.
  // otherwise, slice off the final part of the url to find the script directory.
  // if scriptDirectory does not contain a slash, lastIndexOf will return -1,
  // and scriptDirectory will correctly be replaced with an empty string.
  // If scriptDirectory contains a query (starting with ?) or a fragment (starting with #),
  // they are removed because they could contain a slash.
  if (scriptDirectory.startsWith('blob:')) {
    scriptDirectory = '';
  } else {
    scriptDirectory = scriptDirectory.substr(0, scriptDirectory.replace(/[?#].*/, '').lastIndexOf('/')+1);
  }

  {
// include: web_or_worker_shell_read.js
if (ENVIRONMENT_IS_WORKER) {
    readBinary = (url) => {
      var xhr = new XMLHttpRequest();
      xhr.open('GET', url, false);
      xhr.responseType = 'arraybuffer';
      xhr.send(null);
      return new Uint8Array(/** @type{!ArrayBuffer} */(xhr.response));
    };
  }

  readAsync = (url) => {
    // Fetch has some additional restrictions over XHR, like it can't be used on a file:// url.
    // See https://github.com/github/fetch/pull/92#issuecomment-140665932
    // Cordova or Electron apps are typically loaded from a file:// url.
    // So use XHR on webview if URL is a file URL.
    if (isFileURI(url)) {
      return new Promise((resolve, reject) => {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', url, true);
        xhr.responseType = 'arraybuffer';
        xhr.onload = () => {
          if (xhr.status == 200 || (xhr.status == 0 && xhr.response)) { // file URLs can return 0
            resolve(xhr.response);
            return;
          }
          reject(xhr.status);
        };
        xhr.onerror = reject;
        xhr.send(null);
      });
    }
    return fetch(url, { credentials: 'same-origin' })
      .then((response) => {
        if (response.ok) {
          return response.arrayBuffer();
        }
        return Promise.reject(new Error(response.status + ' : ' + response.url));
      })
  };
// end include: web_or_worker_shell_read.js
  }
} else
{
}

var out = Module['print'] || console.log.bind(console);
var err = Module['printErr'] || console.error.bind(console);

// Merge back in the overrides
Object.assign(Module, moduleOverrides);
// Free the object hierarchy contained in the overrides, this lets the GC
// reclaim data used.
moduleOverrides = null;

// Emit code to handle expected values on the Module object. This applies Module.x
// to the proper local x. This has two benefits: first, we only emit it if it is
// expected to arrive, and second, by using a local everywhere else that can be
// minified.

if (Module['arguments']) arguments_ = Module['arguments'];

if (Module['thisProgram']) thisProgram = Module['thisProgram'];

// perform assertions in shell.js after we set up out() and err(), as otherwise if an assertion fails it cannot print the message
// end include: shell.js

// include: preamble.js
// === Preamble library stuff ===

// Documentation for the public APIs defined in this file must be updated in:
//    site/source/docs/api_reference/preamble.js.rst
// A prebuilt local version of the documentation is available at:
//    site/build/text/docs/api_reference/preamble.js.txt
// You can also build docs locally as HTML or other formats in site/
// An online HTML version (which may be of a different version of Emscripten)
//    is up at http://kripken.github.io/emscripten-site/docs/api_reference/preamble.js.html

var wasmBinary = Module['wasmBinary'];

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

// In STRICT mode, we only define assert() when ASSERTIONS is set.  i.e. we
// don't define it at all in release modes.  This matches the behaviour of
// MINIMAL_RUNTIME.
// TODO(sbc): Make this the default even without STRICT enabled.
/** @type {function(*, string=)} */
function assert(condition, text) {
  if (!condition) {
    // This build was created without ASSERTIONS defined.  `assert()` should not
    // ever be called in this configuration but in case there are callers in
    // the wild leave this simple abort() implementation here for now.
    abort(text);
  }
}

// Memory management

var HEAP,
/** @type {!Int8Array} */
  HEAP8,
/** @type {!Uint8Array} */
  HEAPU8,
/** @type {!Int16Array} */
  HEAP16,
/** @type {!Uint16Array} */
  HEAPU16,
/** @type {!Int32Array} */
  HEAP32,
/** @type {!Uint32Array} */
  HEAPU32,
/** @type {!Float32Array} */
  HEAPF32,
/** @type {!Float64Array} */
  HEAPF64;

// include: runtime_shared.js
function updateMemoryViews() {
  var b = wasmMemory.buffer;
  Module['HEAP8'] = HEAP8 = new Int8Array(b);
  Module['HEAP16'] = HEAP16 = new Int16Array(b);
  Module['HEAPU8'] = HEAPU8 = new Uint8Array(b);
  Module['HEAPU16'] = HEAPU16 = new Uint16Array(b);
  Module['HEAP32'] = HEAP32 = new Int32Array(b);
  Module['HEAPU32'] = HEAPU32 = new Uint32Array(b);
  Module['HEAPF32'] = HEAPF32 = new Float32Array(b);
  Module['HEAPF64'] = HEAPF64 = new Float64Array(b);
}

// end include: runtime_shared.js
// include: runtime_stack_check.js
// end include: runtime_stack_check.js
var __ATPRERUN__  = []; // functions called before the runtime is initialized
var __ATINIT__    = []; // functions called during startup
var __ATEXIT__    = []; // functions called during shutdown
var __ATPOSTRUN__ = []; // functions called after the main() is called

var runtimeInitialized = false;

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

  Module['monitorRunDependencies']?.(runDependencies);

}

function removeRunDependency(id) {
  runDependencies--;

  Module['monitorRunDependencies']?.(runDependencies);

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

/** @param {string|number=} what */
function abort(what) {
  Module['onAbort']?.(what);

  what = 'Aborted(' + what + ')';
  // TODO(sbc): Should we remove printing and leave it up to whoever
  // catches the exception?
  err(what);

  ABORT = true;

  what += '. Build with -sASSERTIONS for more info.';

  // Use a wasm runtime error, because a JS error might be seen as a foreign
  // exception, which means we'd run destructors on it. We need the error to
  // simply make the program stop.
  // FIXME This approach does not work in Wasm EH because it currently does not assume
  // all RuntimeErrors are from traps; it decides whether a RuntimeError is from
  // a trap or not based on a hidden field within the object. So at the moment
  // we don't have a way of throwing a wasm trap from JS. TODO Make a JS API that
  // allows this in the wasm spec.

  // Suppress closure compiler warning here. Closure compiler's builtin extern
  // definition for WebAssembly.RuntimeError claims it takes no arguments even
  // though it can.
  // TODO(https://github.com/google/closure-compiler/pull/3913): Remove if/when upstream closure gets fixed.
  /** @suppress {checkTypes} */
  var e = new WebAssembly.RuntimeError(what);

  // Throw the error whether or not MODULARIZE is set because abort is used
  // in code paths apart from instantiation where an exception is expected
  // to be thrown when abort is called.
  throw e;
}

// include: memoryprofiler.js
// end include: memoryprofiler.js
// include: URIUtils.js
// Prefix of data URIs emitted by SINGLE_FILE and related options.
var dataURIPrefix = 'data:application/octet-stream;base64,';

/**
 * Indicates whether filename is a base64 data URI.
 * @noinline
 */
var isDataURI = (filename) => filename.startsWith(dataURIPrefix);

/**
 * Indicates whether filename is delivered via file protocol (as opposed to http/https)
 * @noinline
 */
var isFileURI = (filename) => filename.startsWith('file://');
// end include: URIUtils.js
// include: runtime_exceptions.js
// end include: runtime_exceptions.js
function findWasmBinary() {
    var f = 'decoderWorker.wasm';
    if (!isDataURI(f)) {
      return locateFile(f);
    }
    return f;
}

var wasmBinaryFile;

function getBinarySync(file) {
  if (file == wasmBinaryFile && wasmBinary) {
    return new Uint8Array(wasmBinary);
  }
  if (readBinary) {
    return readBinary(file);
  }
  throw 'both async and sync fetching of the wasm failed';
}

function getBinaryPromise(binaryFile) {
  // If we don't have the binary yet, load it asynchronously using readAsync.
  if (!wasmBinary
      ) {
    // Fetch the binary using readAsync
    return readAsync(binaryFile).then(
      (response) => new Uint8Array(/** @type{!ArrayBuffer} */(response)),
      // Fall back to getBinarySync if readAsync fails
      () => getBinarySync(binaryFile)
    );
  }

  // Otherwise, getBinarySync should be able to get it synchronously
  return Promise.resolve().then(() => getBinarySync(binaryFile));
}

function instantiateArrayBuffer(binaryFile, imports, receiver) {
  return getBinaryPromise(binaryFile).then((binary) => {
    return WebAssembly.instantiate(binary, imports);
  }).then(receiver, (reason) => {
    err(`failed to asynchronously prepare wasm: ${reason}`);

    abort(reason);
  });
}

function instantiateAsync(binary, binaryFile, imports, callback) {
  if (!binary &&
      typeof WebAssembly.instantiateStreaming == 'function' &&
      !isDataURI(binaryFile) &&
      // Don't use streaming for file:// delivered objects in a webview, fetch them synchronously.
      !isFileURI(binaryFile) &&
      // Avoid instantiateStreaming() on Node.js environment for now, as while
      // Node.js v18.1.0 implements it, it does not have a full fetch()
      // implementation yet.
      //
      // Reference:
      //   https://github.com/emscripten-core/emscripten/pull/16917
      !ENVIRONMENT_IS_NODE &&
      typeof fetch == 'function') {
    return fetch(binaryFile, { credentials: 'same-origin' }).then((response) => {
      // Suppress closure warning here since the upstream definition for
      // instantiateStreaming only allows Promise<Repsponse> rather than
      // an actual Response.
      // TODO(https://github.com/google/closure-compiler/pull/3913): Remove if/when upstream closure is fixed.
      /** @suppress {checkTypes} */
      var result = WebAssembly.instantiateStreaming(response, imports);

      return result.then(
        callback,
        function(reason) {
          // We expect the most common failure cause to be a bad MIME type for the binary,
          // in which case falling back to ArrayBuffer instantiation should work.
          err(`wasm streaming compile failed: ${reason}`);
          err('falling back to ArrayBuffer instantiation');
          return instantiateArrayBuffer(binaryFile, imports, callback);
        });
    });
  }
  return instantiateArrayBuffer(binaryFile, imports, callback);
}

function getWasmImports() {
  // prepare imports
  return {
    'env': wasmImports,
    'wasi_snapshot_preview1': wasmImports,
  }
}

// Create the wasm instance.
// Receives the wasm imports, returns the exports.
function createWasm() {
  // Load the wasm module and create an instance of using native support in the JS engine.
  // handle a generated wasm instance, receiving its exports and
  // performing other necessary setup
  /** @param {WebAssembly.Module=} module*/
  function receiveInstance(instance, module) {
    wasmExports = instance.exports;

    

    wasmMemory = wasmExports['memory'];
    
    updateMemoryViews();

    addOnInit(wasmExports['__wasm_call_ctors']);

    removeRunDependency('wasm-instantiate');
    return wasmExports;
  }
  // wait for the pthread pool (if any)
  addRunDependency('wasm-instantiate');

  // Prefer streaming instantiation if available.
  function receiveInstantiationResult(result) {
    // 'result' is a ResultObject object which has both the module and instance.
    // receiveInstance() will swap in the exports (to Module.asm) so they can be called
    // TODO: Due to Closure regression https://github.com/google/closure-compiler/issues/3193, the above line no longer optimizes out down to the following line.
    // When the regression is fixed, can restore the above PTHREADS-enabled path.
    receiveInstance(result['instance']);
  }

  var info = getWasmImports();

  // User shell pages can write their own Module.instantiateWasm = function(imports, successCallback) callback
  // to manually instantiate the Wasm module themselves. This allows pages to
  // run the instantiation parallel to any other async startup actions they are
  // performing.
  // Also pthreads and wasm workers initialize the wasm instance through this
  // path.
  if (Module['instantiateWasm']) {
    try {
      return Module['instantiateWasm'](info, receiveInstance);
    } catch(e) {
      err(`Module.instantiateWasm callback failed with error: ${e}`);
        return false;
    }
  }

  wasmBinaryFile ??= findWasmBinary();

  instantiateAsync(wasmBinary, wasmBinaryFile, info, receiveInstantiationResult);
  return {}; // no exports yet; we'll fill them in later
}

// Globals used by JS i64 conversions (see makeSetValue)
var tempDouble;
var tempI64;

// include: runtime_debug.js
// end include: runtime_debug.js
// === Body ===
// end include: preamble.js


  class ExitStatus {
      name = 'ExitStatus';
      constructor(status) {
        this.message = `Program terminated with exit(${status})`;
        this.status = status;
      }
    }

  var callRuntimeCallbacks = (callbacks) => {
      while (callbacks.length > 0) {
        // Pass the module as the first argument.
        callbacks.shift()(Module);
      }
    };

  
    /**
     * @param {number} ptr
     * @param {string} type
     */
  function getValue(ptr, type = 'i8') {
    if (type.endsWith('*')) type = '*';
    switch (type) {
      case 'i1': return HEAP8[ptr];
      case 'i8': return HEAP8[ptr];
      case 'i16': return HEAP16[((ptr)>>1)];
      case 'i32': return HEAP32[((ptr)>>2)];
      case 'i64': abort('to do getValue(i64) use WASM_BIGINT');
      case 'float': return HEAPF32[((ptr)>>2)];
      case 'double': return HEAPF64[((ptr)>>3)];
      case '*': return HEAPU32[((ptr)>>2)];
      default: abort(`invalid type for getValue: ${type}`);
    }
  }

  var noExitRuntime = Module['noExitRuntime'] || true;

  
    /**
     * @param {number} ptr
     * @param {number} value
     * @param {string} type
     */
  function setValue(ptr, value, type = 'i8') {
    if (type.endsWith('*')) type = '*';
    switch (type) {
      case 'i1': HEAP8[ptr] = value; break;
      case 'i8': HEAP8[ptr] = value; break;
      case 'i16': HEAP16[((ptr)>>1)] = value; break;
      case 'i32': HEAP32[((ptr)>>2)] = value; break;
      case 'i64': abort('to do setValue(i64) use WASM_BIGINT');
      case 'float': HEAPF32[((ptr)>>2)] = value; break;
      case 'double': HEAPF64[((ptr)>>3)] = value; break;
      case '*': HEAPU32[((ptr)>>2)] = value; break;
      default: abort(`invalid type for setValue: ${type}`);
    }
  }

  var stackRestore = (val) => __emscripten_stack_restore(val);

  var stackSave = () => _emscripten_stack_get_current();

  var __abort_js = () =>
      abort('');

  var __emscripten_memcpy_js = (dest, src, num) => HEAPU8.copyWithin(dest, src, src + num);

  var getHeapMax = () =>
      HEAPU8.length;
  
  var alignMemory = (size, alignment) => {
      return Math.ceil(size / alignment) * alignment;
    };
  
  var abortOnCannotGrowMemory = (requestedSize) => {
      abort('OOM');
    };
  var _emscripten_resize_heap = (requestedSize) => {
      var oldSize = HEAPU8.length;
      // With CAN_ADDRESS_2GB or MEMORY64, pointers are already unsigned.
      requestedSize >>>= 0;
      abortOnCannotGrowMemory(requestedSize);
    };

  var _fd_close = (fd) => {
      return 52;
    };

  var convertI32PairToI53Checked = (lo, hi) => {
      return ((hi + 0x200000) >>> 0 < 0x400001 - !!lo) ? (lo >>> 0) + hi * 4294967296 : NaN;
    };
  function _fd_seek(fd,offset_low, offset_high,whence,newOffset) {
    var offset = convertI32PairToI53Checked(offset_low, offset_high);
  
    
      return 70;
    ;
  }

  var printCharBuffers = [null,[],[]];
  
  var UTF8Decoder = typeof TextDecoder != 'undefined' ? new TextDecoder() : undefined;
  
    /**
     * Given a pointer 'idx' to a null-terminated UTF8-encoded string in the given
     * array that contains uint8 values, returns a copy of that string as a
     * Javascript String object.
     * heapOrArray is either a regular array, or a JavaScript typed array view.
     * @param {number=} idx
     * @param {number=} maxBytesToRead
     * @return {string}
     */
  var UTF8ArrayToString = (heapOrArray, idx = 0, maxBytesToRead = NaN) => {
      var endIdx = idx + maxBytesToRead;
      var endPtr = idx;
      // TextDecoder needs to know the byte length in advance, it doesn't stop on
      // null terminator by itself.  Also, use the length info to avoid running tiny
      // strings through TextDecoder, since .subarray() allocates garbage.
      // (As a tiny code save trick, compare endPtr against endIdx using a negation,
      // so that undefined/NaN means Infinity)
      while (heapOrArray[endPtr] && !(endPtr >= endIdx)) ++endPtr;
  
      if (endPtr - idx > 16 && heapOrArray.buffer && UTF8Decoder) {
        return UTF8Decoder.decode(heapOrArray.subarray(idx, endPtr));
      }
      var str = '';
      // If building with TextDecoder, we have already computed the string length
      // above, so test loop end condition against that
      while (idx < endPtr) {
        // For UTF8 byte structure, see:
        // http://en.wikipedia.org/wiki/UTF-8#Description
        // https://www.ietf.org/rfc/rfc2279.txt
        // https://tools.ietf.org/html/rfc3629
        var u0 = heapOrArray[idx++];
        if (!(u0 & 0x80)) { str += String.fromCharCode(u0); continue; }
        var u1 = heapOrArray[idx++] & 63;
        if ((u0 & 0xE0) == 0xC0) { str += String.fromCharCode(((u0 & 31) << 6) | u1); continue; }
        var u2 = heapOrArray[idx++] & 63;
        if ((u0 & 0xF0) == 0xE0) {
          u0 = ((u0 & 15) << 12) | (u1 << 6) | u2;
        } else {
          u0 = ((u0 & 7) << 18) | (u1 << 12) | (u2 << 6) | (heapOrArray[idx++] & 63);
        }
  
        if (u0 < 0x10000) {
          str += String.fromCharCode(u0);
        } else {
          var ch = u0 - 0x10000;
          str += String.fromCharCode(0xD800 | (ch >> 10), 0xDC00 | (ch & 0x3FF));
        }
      }
      return str;
    };
  var printChar = (stream, curr) => {
      var buffer = printCharBuffers[stream];
      if (curr === 0 || curr === 10) {
        (stream === 1 ? out : err)(UTF8ArrayToString(buffer));
        buffer.length = 0;
      } else {
        buffer.push(curr);
      }
    };
  
  var flush_NO_FILESYSTEM = () => {
      // flush anything remaining in the buffers during shutdown
      if (printCharBuffers[1].length) printChar(1, 10);
      if (printCharBuffers[2].length) printChar(2, 10);
    };
  
  
  
    /**
     * Given a pointer 'ptr' to a null-terminated UTF8-encoded string in the
     * emscripten HEAP, returns a copy of that string as a Javascript String object.
     *
     * @param {number} ptr
     * @param {number=} maxBytesToRead - An optional length that specifies the
     *   maximum number of bytes to read. You can omit this parameter to scan the
     *   string until the first 0 byte. If maxBytesToRead is passed, and the string
     *   at [ptr, ptr+maxBytesToReadr[ contains a null byte in the middle, then the
     *   string will cut short at that byte index (i.e. maxBytesToRead will not
     *   produce a string of exact length [ptr, ptr+maxBytesToRead[) N.B. mixing
     *   frequent uses of UTF8ToString() with and without maxBytesToRead may throw
     *   JS JIT optimizations off, so it is worth to consider consistently using one
     * @return {string}
     */
  var UTF8ToString = (ptr, maxBytesToRead) => {
      return ptr ? UTF8ArrayToString(HEAPU8, ptr, maxBytesToRead) : '';
    };
  var SYSCALLS = {
  varargs:undefined,
  getStr(ptr) {
        var ret = UTF8ToString(ptr);
        return ret;
      },
  };
  var _fd_write = (fd, iov, iovcnt, pnum) => {
      // hack to support printf in SYSCALLS_REQUIRE_FILESYSTEM=0
      var num = 0;
      for (var i = 0; i < iovcnt; i++) {
        var ptr = HEAPU32[((iov)>>2)];
        var len = HEAPU32[(((iov)+(4))>>2)];
        iov += 8;
        for (var j = 0; j < len; j++) {
          printChar(fd, HEAPU8[ptr+j]);
        }
        num += len;
      }
      HEAPU32[((pnum)>>2)] = num;
      return 0;
    };
var wasmImports = {
  /** @export */
  _abort_js: __abort_js,
  /** @export */
  _emscripten_memcpy_js: __emscripten_memcpy_js,
  /** @export */
  emscripten_resize_heap: _emscripten_resize_heap,
  /** @export */
  fd_close: _fd_close,
  /** @export */
  fd_seek: _fd_seek,
  /** @export */
  fd_write: _fd_write
};
var wasmExports = createWasm();
var ___wasm_call_ctors = () => (___wasm_call_ctors = wasmExports['__wasm_call_ctors'])();
var _opus_decoder_create = Module['_opus_decoder_create'] = (a0, a1, a2) => (_opus_decoder_create = Module['_opus_decoder_create'] = wasmExports['opus_decoder_create'])(a0, a1, a2);
var _opus_decode_float = Module['_opus_decode_float'] = (a0, a1, a2, a3, a4, a5) => (_opus_decode_float = Module['_opus_decode_float'] = wasmExports['opus_decode_float'])(a0, a1, a2, a3, a4, a5);
var _opus_decoder_destroy = Module['_opus_decoder_destroy'] = (a0) => (_opus_decoder_destroy = Module['_opus_decoder_destroy'] = wasmExports['opus_decoder_destroy'])(a0);
var _speex_resampler_init = Module['_speex_resampler_init'] = (a0, a1, a2, a3, a4) => (_speex_resampler_init = Module['_speex_resampler_init'] = wasmExports['speex_resampler_init'])(a0, a1, a2, a3, a4);
var _speex_resampler_destroy = Module['_speex_resampler_destroy'] = (a0) => (_speex_resampler_destroy = Module['_speex_resampler_destroy'] = wasmExports['speex_resampler_destroy'])(a0);
var _speex_resampler_process_interleaved_float = Module['_speex_resampler_process_interleaved_float'] = (a0, a1, a2, a3, a4) => (_speex_resampler_process_interleaved_float = Module['_speex_resampler_process_interleaved_float'] = wasmExports['speex_resampler_process_interleaved_float'])(a0, a1, a2, a3, a4);
var _malloc = Module['_malloc'] = (a0) => (_malloc = Module['_malloc'] = wasmExports['malloc'])(a0);
var _free = Module['_free'] = (a0) => (_free = Module['_free'] = wasmExports['free'])(a0);
var __emscripten_stack_restore = (a0) => (__emscripten_stack_restore = wasmExports['_emscripten_stack_restore'])(a0);
var __emscripten_stack_alloc = (a0) => (__emscripten_stack_alloc = wasmExports['_emscripten_stack_alloc'])(a0);
var _emscripten_stack_get_current = () => (_emscripten_stack_get_current = wasmExports['emscripten_stack_get_current'])();
var dynCall_jiji = Module['dynCall_jiji'] = (a0, a1, a2, a3, a4) => (dynCall_jiji = Module['dynCall_jiji'] = wasmExports['dynCall_jiji'])(a0, a1, a2, a3, a4);


// include: postamble.js
// === Auto-generated postamble setup entry stuff ===




var calledRun;

dependenciesFulfilled = function runCaller() {
  // If run has never been called, and we should call run (INVOKE_RUN is true, and Module.noInitialRun is not false)
  if (!calledRun) run();
  if (!calledRun) dependenciesFulfilled = runCaller; // try this again later, after new deps are fulfilled
};

function run() {

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

    Module['onRuntimeInitialized']?.();

    postRun();
  }

  if (Module['setStatus']) {
    Module['setStatus']('Running...');
    setTimeout(() => {
      setTimeout(() => Module['setStatus'](''), 1);
      doRun();
    }, 1);
  } else
  {
    doRun();
  }
}

if (Module['preInit']) {
  if (typeof Module['preInit'] == 'function') Module['preInit'] = [Module['preInit']];
  while (Module['preInit'].length > 0) {
    Module['preInit'].pop()();
  }
}

run();

// end include: postamble.js

