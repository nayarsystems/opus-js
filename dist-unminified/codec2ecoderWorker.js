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
// include: /home/victor/code/idefix-js/examples/browser-calls/opus-js/dist-unminified/codec2ecoderWorker.js
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/codec2DecoderWorker.js");
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

/***/ "./src/codec2DecoderWorker.js":
/*!************************************!*\
  !*** ./src/codec2DecoderWorker.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(global) {\n\nvar decoder;\nvar mainReadyResolve;\nvar mainReady = new Promise(function (resolve) {\n  mainReadyResolve = resolve;\n});\n\nfunction atob(input) {\n  var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';\n  var str = input.replace(/=+$/, '');\n  var output = '';\n\n  if (str.length % 4 === 1) {\n    throw new Error(\"'atob' failed: The string to be decoded is not correctly encoded.\");\n  }\n\n  for (var bc = 0, bs = 0, buffer, i = 0; buffer = str.charAt(i++); ~buffer && (bs = bc % 4 ? bs * 64 + buffer : buffer, bc++ % 4) ? output += String.fromCharCode(255 & bs >> (-2 * bc & 6)) : 0) {\n    buffer = chars.indexOf(buffer);\n  }\n\n  return output;\n}\n\nglobal['onmessage'] = function (e) {\n  mainReady.then(function () {\n    switch (e['data']['command']) {\n      case 'decode':\n        if (decoder) {\n          decoder.decode(e['data']['pages']);\n        }\n\n        break;\n\n      case 'done':\n        if (decoder) {\n          decoder.sendLastBuffer();\n          global['close']();\n        }\n\n        break;\n\n      case 'init':\n        decoder = new Codec2Decoder(e['data'], Module);\n        break;\n\n      default: // Ignore any unknown commands and continue recieving commands\n\n    }\n  });\n};\n\nvar Codec2Decoder = function Codec2Decoder(config, Module) {\n  if (!Module) {\n    throw new Error('Module with exports required to initialize a decoder instance');\n  }\n\n  this.mainReady = mainReady; // Expose for unit testing\n\n  this.config = Object.assign({\n    bufferLength: 4096,\n    // Define size of outgoing buffer\n    mode: 0,\n    // 0 = Mode3200, 1 = Mode2400, 2 = Mode1600, 3 = Mode1400, 4 = Mode1300, 5 = Mode1200, 6 = Mode700, 7 = Mode700B, 8 = Mode700C\n    decoderSampleRate: 8000,\n    // Desired encoding sample rate. Audio will be resampled\n    outputBufferSampleRate: 48000,\n    resampleQuality: 3 // Value between 0 and 10 inclusive. 10 being highest quality.\n\n  }, config);\n  this._codec2_create = Module._codec2_create;\n  this._codec2_destroy = Module._codec2_destroy;\n  this._codec2_encode = Module._codec2_encode;\n  this._codec2_decode = Module._codec2_decode;\n  this._codec2_samples_per_frame = Module._codec2_samples_per_frame;\n  this._codec2_bits_per_frame = Module._codec2_bits_per_frame;\n  this._codec2_bytes_per_frame = Module._codec2_bytes_per_frame;\n  this._speex_resampler_process_interleaved_float = Module._speex_resampler_process_interleaved_float;\n  this._speex_resampler_init = Module._speex_resampler_init;\n  this._speex_resampler_destroy = Module._speex_resampler_destroy;\n  this._free = Module._free;\n  this._malloc = Module._malloc;\n  this.HEAPU8 = Module.HEAPU8;\n  this.HEAP32 = Module.HEAP32;\n  this.HEAP16 = Module.HEAP16;\n  this.HEAPF32 = Module.HEAPF32;\n  this.outputBuffers = [];\n  this.init();\n};\n\nCodec2Decoder.prototype.decode = function (typedArray) {\n  var dataLength = typedArray.length * typedArray.BYTES_PER_ELEMENT;\n\n  if (dataLength === 0) {\n    return;\n  }\n\n  var dataOffset = 0;\n  var packetLength = Math.min(dataLength - dataOffset, this.decoderBufferMaxLength);\n  this.decoderBuffer.set(typedArray.subarray(dataOffset, dataOffset += packetLength), this.decoderBufferIndex);\n  this.decoderBufferIndex += packetLength; // Decode raw opus packet\n  //var outputSampleLength = this._opus_decode_float(this.decoder, this.decoderBufferPointer, typedArray.length, this.decoderOutputPointer, this.decoderOutputMaxLength, 0);\n\n  this._codec2_decode(this.encoder, this.decoderOutputBufferPointer_u16, this.decoderBufferPointer); // convert decoderOutputBuffer_u16 to Float32Array\n\n\n  for (var i = 0; i < this.decoderBufferLength; i++) {\n    var uint16_sample = this.decoderOutputBuffer_u16[i];\n    this.decoderOutput[i] = uint16_sample / 32768.0;\n  }\n\n  this.sendToOutputBuffers(this.decoderOutput);\n  this.decoderBufferIndex = 0;\n};\n\nCodec2Decoder.prototype.init = function () {\n  this.resetOutputBuffers();\n  this.initCodec();\n  this.initResampler();\n};\n\nCodec2Decoder.prototype.initCodec = function () {\n  if (this.decoder) {\n    this._codec2_destroy(this.decoder);\n\n    this._free(this.decoderBufferPointer);\n\n    this._free(this.decoderOutputPointer);\n\n    this._free(this.decoderOutputBufferPointer_u16);\n  }\n\n  var errReference = this._malloc(4);\n\n  this.encoder = this._codec2_create(this.config.mode, errReference);\n  var errorCode = new Uint32Array(this.HEAPU8.buffer, errReference, 1)[0];\n  console.log(\"Decoder create error:\", errorCode, this.encoder);\n\n  this._free(errReference);\n\n  this.decoderBufferLength = this._codec2_samples_per_frame(this.encoder);\n  this.bytesPerFrame = this._codec2_bytes_per_frame(this.encoder);\n  this.decoderBufferMaxLength = 4000;\n  this.decoderBufferPointer = this._malloc(this.decoderBufferMaxLength);\n  this.decoderBuffer = this.HEAPU8.subarray(this.decoderBufferPointer, this.decoderBufferPointer + this.decoderBufferMaxLength); //this.decoderBufferIndex = 0;\n\n  this.decoderOutputPointer = this._malloc(this.decoderBufferLength * 4); // 4 bytes per sample\n\n  this.decoderOutput = this.HEAPF32.subarray(this.decoderOutputPointer, this.decoderOutputPointer + this.decoderBufferLength); // uint16 array \n\n  this.decoderOutputBufferPointer_u16 = this._malloc(this.decoderBufferLength * 2); // 2 bytes per sample\n\n  this.decoderOutputBuffer_u16 = this.HEAP16.subarray(this.decoderOutputBufferPointer_u16 >> 1, (this.decoderOutputBufferPointer_u16 >> 1) + this.decoderBufferLength);\n};\n\nCodec2Decoder.prototype.initResampler = function () {\n  if (this.resampler) {\n    this._speex_resampler_destroy(this.resampler);\n\n    this._free(this.resampleOutputLengthPointer);\n\n    this._free(this.resampleOutputBufferPointer);\n  }\n\n  var errLocation = this._malloc(4);\n\n  this.resampler = this._speex_resampler_init(1, this.config.decoderSampleRate, this.config.outputBufferSampleRate, this.config.resampleQuality, errLocation);\n\n  this._free(errLocation);\n\n  this.resampleOutputLengthPointer = this._malloc(4);\n  this.resampleOutputMaxLength = Math.ceil(this.decoderOutputMaxLength * this.config.outputBufferSampleRate / this.config.decoderSampleRate);\n  this.resampleOutputBufferPointer = this._malloc(this.resampleOutputMaxLength * 4); // 4 bytes per sample\n};\n\nCodec2Decoder.prototype.resetOutputBuffers = function () {\n  this.outputBuffers = [];\n  this.outputBufferArrayBuffers = [];\n  this.outputBufferIndex = 0;\n  this.outputBuffers.push(new Float32Array(this.config.bufferLength));\n  this.outputBufferArrayBuffers.push(this.outputBuffers[0].buffer);\n};\n\nCodec2Decoder.prototype.sendLastBuffer = function () {\n  this.sendToOutputBuffers(new Float32Array(this.config.bufferLength - this.outputBufferIndex));\n  global['postMessage'](null);\n};\n\nCodec2Decoder.prototype.sendToOutputBuffers = function (mergedBuffers) {\n  var dataIndex = 0;\n  var mergedBufferLength = mergedBuffers.length;\n\n  while (dataIndex < mergedBufferLength) {\n    var amountToCopy = Math.min(mergedBufferLength - dataIndex, this.config.bufferLength - this.outputBufferIndex); // here we used to deinterleave but codec2 has only one channel\n\n    this.outputBuffers[0].set(mergedBuffers.subarray(dataIndex, dataIndex + amountToCopy), this.outputBufferIndex);\n    dataIndex += amountToCopy;\n    this.outputBufferIndex += amountToCopy;\n\n    if (this.outputBufferIndex == this.config.bufferLength) {\n      global['postMessage'](this.outputBuffers, this.outputBufferArrayBuffers);\n      this.resetOutputBuffers();\n    }\n  }\n};\n\nif (!Module) {\n  Module = {};\n}\n\nModule['mainReady'] = mainReady;\nModule['Codec2Decoder'] = Codec2Decoder;\nModule['onRuntimeInitialized'] = mainReadyResolve;\nmodule.exports = Module;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/global.js */ \"./node_modules/webpack/buildin/global.js\")))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29kZWMyRGVjb2Rlcldvcmtlci5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovL0RlY29kZXJXb3JrZXIvLi9zcmMvY29kZWMyRGVjb2Rlcldvcmtlci5qcz8wYThmIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG52YXIgZGVjb2RlcjtcbnZhciBtYWluUmVhZHlSZXNvbHZlO1xudmFyIG1haW5SZWFkeSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlKSB7IG1haW5SZWFkeVJlc29sdmUgPSByZXNvbHZlOyB9KTtcblxuZnVuY3Rpb24gYXRvYihpbnB1dCkge1xuICAgIGNvbnN0IGNoYXJzID0gJ0FCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXowMTIzNDU2Nzg5Ky89JztcbiAgICBsZXQgc3RyID0gaW5wdXQucmVwbGFjZSgvPSskLywgJycpO1xuICAgIGxldCBvdXRwdXQgPSAnJztcblxuICAgIGlmIChzdHIubGVuZ3RoICUgNCA9PT0gMSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCInYXRvYicgZmFpbGVkOiBUaGUgc3RyaW5nIHRvIGJlIGRlY29kZWQgaXMgbm90IGNvcnJlY3RseSBlbmNvZGVkLlwiKTtcbiAgICB9XG5cbiAgICBmb3IgKGxldCBiYyA9IDAsIGJzID0gMCwgYnVmZmVyLCBpID0gMDsgYnVmZmVyID0gc3RyLmNoYXJBdChpKyspOyB+YnVmZmVyICYmXG4gICAgICAgIChicyA9IGJjICUgNCA/IGJzICogNjQgKyBidWZmZXIgOiBidWZmZXIsXG4gICAgICAgICAgICBiYysrICUgNCkgPyBvdXRwdXQgKz0gU3RyaW5nLmZyb21DaGFyQ29kZSgyNTUgJiBicyA+PiAoLTIgKiBiYyAmIDYpKSA6IDBcbiAgICApIHtcbiAgICAgICAgYnVmZmVyID0gY2hhcnMuaW5kZXhPZihidWZmZXIpO1xuICAgIH1cblxuICAgIHJldHVybiBvdXRwdXQ7XG59XG5cbmdsb2JhbFsnb25tZXNzYWdlJ10gPSBmdW5jdGlvbiAoZSkge1xuICAgIG1haW5SZWFkeS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgc3dpdGNoIChlWydkYXRhJ11bJ2NvbW1hbmQnXSkge1xuXG4gICAgICAgICAgICBjYXNlICdkZWNvZGUnOlxuICAgICAgICAgICAgICAgIGlmIChkZWNvZGVyKSB7XG4gICAgICAgICAgICAgICAgICAgIGRlY29kZXIuZGVjb2RlKGVbJ2RhdGEnXVsncGFnZXMnXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlICdkb25lJzpcbiAgICAgICAgICAgICAgICBpZiAoZGVjb2Rlcikge1xuICAgICAgICAgICAgICAgICAgICBkZWNvZGVyLnNlbmRMYXN0QnVmZmVyKCk7XG4gICAgICAgICAgICAgICAgICAgIGdsb2JhbFsnY2xvc2UnXSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSAnaW5pdCc6XG4gICAgICAgICAgICAgICAgZGVjb2RlciA9IG5ldyBDb2RlYzJEZWNvZGVyKGVbJ2RhdGEnXSwgTW9kdWxlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIC8vIElnbm9yZSBhbnkgdW5rbm93biBjb21tYW5kcyBhbmQgY29udGludWUgcmVjaWV2aW5nIGNvbW1hbmRzXG4gICAgICAgIH1cbiAgICB9KTtcbn07XG5cbnZhciBDb2RlYzJEZWNvZGVyID0gZnVuY3Rpb24gKGNvbmZpZywgTW9kdWxlKSB7XG5cbiAgICBpZiAoIU1vZHVsZSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ01vZHVsZSB3aXRoIGV4cG9ydHMgcmVxdWlyZWQgdG8gaW5pdGlhbGl6ZSBhIGRlY29kZXIgaW5zdGFuY2UnKTtcbiAgICB9XG5cbiAgICB0aGlzLm1haW5SZWFkeSA9IG1haW5SZWFkeTsgLy8gRXhwb3NlIGZvciB1bml0IHRlc3RpbmdcblxuICAgIHRoaXMuY29uZmlnID0gT2JqZWN0LmFzc2lnbih7XG4gICAgICAgIGJ1ZmZlckxlbmd0aDogNDA5NiwgLy8gRGVmaW5lIHNpemUgb2Ygb3V0Z29pbmcgYnVmZmVyXG5cbiAgICAgICAgbW9kZTogMCwgLy8gMCA9IE1vZGUzMjAwLCAxID0gTW9kZTI0MDAsIDIgPSBNb2RlMTYwMCwgMyA9IE1vZGUxNDAwLCA0ID0gTW9kZTEzMDAsIDUgPSBNb2RlMTIwMCwgNiA9IE1vZGU3MDAsIDcgPSBNb2RlNzAwQiwgOCA9IE1vZGU3MDBDXG5cbiAgICAgICAgZGVjb2RlclNhbXBsZVJhdGU6IDgwMDAsIC8vIERlc2lyZWQgZW5jb2Rpbmcgc2FtcGxlIHJhdGUuIEF1ZGlvIHdpbGwgYmUgcmVzYW1wbGVkXG4gICAgICAgIG91dHB1dEJ1ZmZlclNhbXBsZVJhdGU6IDQ4MDAwLFxuICAgICAgICByZXNhbXBsZVF1YWxpdHk6IDMsIC8vIFZhbHVlIGJldHdlZW4gMCBhbmQgMTAgaW5jbHVzaXZlLiAxMCBiZWluZyBoaWdoZXN0IHF1YWxpdHkuXG4gICAgfSwgY29uZmlnKTtcblxuXG4gICAgdGhpcy5fY29kZWMyX2NyZWF0ZSA9IE1vZHVsZS5fY29kZWMyX2NyZWF0ZTtcbiAgICB0aGlzLl9jb2RlYzJfZGVzdHJveSA9IE1vZHVsZS5fY29kZWMyX2Rlc3Ryb3k7XG4gICAgdGhpcy5fY29kZWMyX2VuY29kZSA9IE1vZHVsZS5fY29kZWMyX2VuY29kZTtcbiAgICB0aGlzLl9jb2RlYzJfZGVjb2RlID0gTW9kdWxlLl9jb2RlYzJfZGVjb2RlO1xuICAgIHRoaXMuX2NvZGVjMl9zYW1wbGVzX3Blcl9mcmFtZSA9IE1vZHVsZS5fY29kZWMyX3NhbXBsZXNfcGVyX2ZyYW1lO1xuICAgIHRoaXMuX2NvZGVjMl9iaXRzX3Blcl9mcmFtZSA9IE1vZHVsZS5fY29kZWMyX2JpdHNfcGVyX2ZyYW1lO1xuICAgIHRoaXMuX2NvZGVjMl9ieXRlc19wZXJfZnJhbWUgPSBNb2R1bGUuX2NvZGVjMl9ieXRlc19wZXJfZnJhbWU7XG5cblxuICAgIHRoaXMuX3NwZWV4X3Jlc2FtcGxlcl9wcm9jZXNzX2ludGVybGVhdmVkX2Zsb2F0ID0gTW9kdWxlLl9zcGVleF9yZXNhbXBsZXJfcHJvY2Vzc19pbnRlcmxlYXZlZF9mbG9hdDtcbiAgICB0aGlzLl9zcGVleF9yZXNhbXBsZXJfaW5pdCA9IE1vZHVsZS5fc3BlZXhfcmVzYW1wbGVyX2luaXQ7XG4gICAgdGhpcy5fc3BlZXhfcmVzYW1wbGVyX2Rlc3Ryb3kgPSBNb2R1bGUuX3NwZWV4X3Jlc2FtcGxlcl9kZXN0cm95O1xuICAgIHRoaXMuX2ZyZWUgPSBNb2R1bGUuX2ZyZWU7XG4gICAgdGhpcy5fbWFsbG9jID0gTW9kdWxlLl9tYWxsb2M7XG5cbiAgICB0aGlzLkhFQVBVOCA9IE1vZHVsZS5IRUFQVTg7XG4gICAgdGhpcy5IRUFQMzIgPSBNb2R1bGUuSEVBUDMyO1xuICAgIHRoaXMuSEVBUDE2ID0gTW9kdWxlLkhFQVAxNjtcbiAgICB0aGlzLkhFQVBGMzIgPSBNb2R1bGUuSEVBUEYzMjtcblxuICAgIHRoaXMub3V0cHV0QnVmZmVycyA9IFtdO1xuICAgIHRoaXMuaW5pdCgpO1xufTtcblxuXG5Db2RlYzJEZWNvZGVyLnByb3RvdHlwZS5kZWNvZGUgPSBmdW5jdGlvbiAodHlwZWRBcnJheSkge1xuICAgIHZhciBkYXRhTGVuZ3RoID0gdHlwZWRBcnJheS5sZW5ndGggKiB0eXBlZEFycmF5LkJZVEVTX1BFUl9FTEVNRU5UO1xuICAgIGlmIChkYXRhTGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgZGF0YU9mZnNldCA9IDA7XG5cblxuICAgIHZhciBwYWNrZXRMZW5ndGggPSBNYXRoLm1pbihkYXRhTGVuZ3RoIC0gZGF0YU9mZnNldCwgdGhpcy5kZWNvZGVyQnVmZmVyTWF4TGVuZ3RoKTtcbiAgICB0aGlzLmRlY29kZXJCdWZmZXIuc2V0KHR5cGVkQXJyYXkuc3ViYXJyYXkoZGF0YU9mZnNldCwgZGF0YU9mZnNldCArPSBwYWNrZXRMZW5ndGgpLCB0aGlzLmRlY29kZXJCdWZmZXJJbmRleCk7XG4gICAgdGhpcy5kZWNvZGVyQnVmZmVySW5kZXggKz0gcGFja2V0TGVuZ3RoO1xuXG4gICAgLy8gRGVjb2RlIHJhdyBvcHVzIHBhY2tldFxuICAgIC8vdmFyIG91dHB1dFNhbXBsZUxlbmd0aCA9IHRoaXMuX29wdXNfZGVjb2RlX2Zsb2F0KHRoaXMuZGVjb2RlciwgdGhpcy5kZWNvZGVyQnVmZmVyUG9pbnRlciwgdHlwZWRBcnJheS5sZW5ndGgsIHRoaXMuZGVjb2Rlck91dHB1dFBvaW50ZXIsIHRoaXMuZGVjb2Rlck91dHB1dE1heExlbmd0aCwgMCk7XG4gICAgdGhpcy5fY29kZWMyX2RlY29kZSh0aGlzLmVuY29kZXIsIHRoaXMuZGVjb2Rlck91dHB1dEJ1ZmZlclBvaW50ZXJfdTE2LCB0aGlzLmRlY29kZXJCdWZmZXJQb2ludGVyKTtcblxuICAgIC8vIGNvbnZlcnQgZGVjb2Rlck91dHB1dEJ1ZmZlcl91MTYgdG8gRmxvYXQzMkFycmF5XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuZGVjb2RlckJ1ZmZlckxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciB1aW50MTZfc2FtcGxlID0gdGhpcy5kZWNvZGVyT3V0cHV0QnVmZmVyX3UxNltpXTtcbiAgICAgICAgdGhpcy5kZWNvZGVyT3V0cHV0W2ldID0gKHVpbnQxNl9zYW1wbGUgLyAzMjc2OC4wKTtcbiAgICB9XG5cbiAgICB0aGlzLnNlbmRUb091dHB1dEJ1ZmZlcnModGhpcy5kZWNvZGVyT3V0cHV0KTtcblxuICAgIHRoaXMuZGVjb2RlckJ1ZmZlckluZGV4ID0gMDtcblxuXG5cblxufTtcblxuQ29kZWMyRGVjb2Rlci5wcm90b3R5cGUuaW5pdCA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLnJlc2V0T3V0cHV0QnVmZmVycygpO1xuICAgIHRoaXMuaW5pdENvZGVjKCk7XG4gICAgdGhpcy5pbml0UmVzYW1wbGVyKCk7XG59O1xuXG5Db2RlYzJEZWNvZGVyLnByb3RvdHlwZS5pbml0Q29kZWMgPSBmdW5jdGlvbiAoKSB7XG5cbiAgICBpZiAodGhpcy5kZWNvZGVyKSB7XG4gICAgICAgIHRoaXMuX2NvZGVjMl9kZXN0cm95KHRoaXMuZGVjb2Rlcik7XG4gICAgICAgIHRoaXMuX2ZyZWUodGhpcy5kZWNvZGVyQnVmZmVyUG9pbnRlcik7XG4gICAgICAgIHRoaXMuX2ZyZWUodGhpcy5kZWNvZGVyT3V0cHV0UG9pbnRlcik7XG4gICAgICAgIHRoaXMuX2ZyZWUodGhpcy5kZWNvZGVyT3V0cHV0QnVmZmVyUG9pbnRlcl91MTYpO1xuICAgIH1cblxuXG4gICAgdmFyIGVyclJlZmVyZW5jZSA9IHRoaXMuX21hbGxvYyg0KTtcbiAgICB0aGlzLmVuY29kZXIgPSB0aGlzLl9jb2RlYzJfY3JlYXRlKHRoaXMuY29uZmlnLm1vZGUsIGVyclJlZmVyZW5jZSk7XG4gICAgdmFyIGVycm9yQ29kZSA9IG5ldyBVaW50MzJBcnJheSh0aGlzLkhFQVBVOC5idWZmZXIsIGVyclJlZmVyZW5jZSwgMSlbMF07XG4gICAgY29uc29sZS5sb2coXCJEZWNvZGVyIGNyZWF0ZSBlcnJvcjpcIiwgZXJyb3JDb2RlLCB0aGlzLmVuY29kZXIpO1xuICAgIHRoaXMuX2ZyZWUoZXJyUmVmZXJlbmNlKTtcblxuICAgIHRoaXMuZGVjb2RlckJ1ZmZlckxlbmd0aCA9IHRoaXMuX2NvZGVjMl9zYW1wbGVzX3Blcl9mcmFtZSh0aGlzLmVuY29kZXIpO1xuICAgIHRoaXMuYnl0ZXNQZXJGcmFtZSA9IHRoaXMuX2NvZGVjMl9ieXRlc19wZXJfZnJhbWUodGhpcy5lbmNvZGVyKTtcblxuICAgIHRoaXMuZGVjb2RlckJ1ZmZlck1heExlbmd0aCA9IDQwMDA7XG4gICAgdGhpcy5kZWNvZGVyQnVmZmVyUG9pbnRlciA9IHRoaXMuX21hbGxvYyh0aGlzLmRlY29kZXJCdWZmZXJNYXhMZW5ndGgpO1xuICAgIHRoaXMuZGVjb2RlckJ1ZmZlciA9IHRoaXMuSEVBUFU4LnN1YmFycmF5KHRoaXMuZGVjb2RlckJ1ZmZlclBvaW50ZXIsIHRoaXMuZGVjb2RlckJ1ZmZlclBvaW50ZXIgKyB0aGlzLmRlY29kZXJCdWZmZXJNYXhMZW5ndGgpO1xuICAgIC8vdGhpcy5kZWNvZGVyQnVmZmVySW5kZXggPSAwO1xuXG4gICAgdGhpcy5kZWNvZGVyT3V0cHV0UG9pbnRlciA9IHRoaXMuX21hbGxvYyh0aGlzLmRlY29kZXJCdWZmZXJMZW5ndGggKiA0KTsgLy8gNCBieXRlcyBwZXIgc2FtcGxlXG4gICAgdGhpcy5kZWNvZGVyT3V0cHV0ID0gdGhpcy5IRUFQRjMyLnN1YmFycmF5KHRoaXMuZGVjb2Rlck91dHB1dFBvaW50ZXIsIHRoaXMuZGVjb2Rlck91dHB1dFBvaW50ZXIgKyB0aGlzLmRlY29kZXJCdWZmZXJMZW5ndGgpO1xuXG4gICAgLy8gdWludDE2IGFycmF5IFxuICAgIHRoaXMuZGVjb2Rlck91dHB1dEJ1ZmZlclBvaW50ZXJfdTE2ID0gdGhpcy5fbWFsbG9jKHRoaXMuZGVjb2RlckJ1ZmZlckxlbmd0aCAqIDIpOyAvLyAyIGJ5dGVzIHBlciBzYW1wbGVcbiAgICB0aGlzLmRlY29kZXJPdXRwdXRCdWZmZXJfdTE2ID0gdGhpcy5IRUFQMTYuc3ViYXJyYXkodGhpcy5kZWNvZGVyT3V0cHV0QnVmZmVyUG9pbnRlcl91MTYgPj4gMSwgKHRoaXMuZGVjb2Rlck91dHB1dEJ1ZmZlclBvaW50ZXJfdTE2ID4+IDEpICsgdGhpcy5kZWNvZGVyQnVmZmVyTGVuZ3RoKTtcbn07XG5cbkNvZGVjMkRlY29kZXIucHJvdG90eXBlLmluaXRSZXNhbXBsZXIgPSBmdW5jdGlvbiAoKSB7XG5cbiAgICBpZiAodGhpcy5yZXNhbXBsZXIpIHtcbiAgICAgICAgdGhpcy5fc3BlZXhfcmVzYW1wbGVyX2Rlc3Ryb3kodGhpcy5yZXNhbXBsZXIpO1xuICAgICAgICB0aGlzLl9mcmVlKHRoaXMucmVzYW1wbGVPdXRwdXRMZW5ndGhQb2ludGVyKTtcbiAgICAgICAgdGhpcy5fZnJlZSh0aGlzLnJlc2FtcGxlT3V0cHV0QnVmZmVyUG9pbnRlcik7XG4gICAgfVxuXG4gICAgdmFyIGVyckxvY2F0aW9uID0gdGhpcy5fbWFsbG9jKDQpO1xuICAgIHRoaXMucmVzYW1wbGVyID0gdGhpcy5fc3BlZXhfcmVzYW1wbGVyX2luaXQoMSwgdGhpcy5jb25maWcuZGVjb2RlclNhbXBsZVJhdGUsIHRoaXMuY29uZmlnLm91dHB1dEJ1ZmZlclNhbXBsZVJhdGUsIHRoaXMuY29uZmlnLnJlc2FtcGxlUXVhbGl0eSwgZXJyTG9jYXRpb24pO1xuICAgIHRoaXMuX2ZyZWUoZXJyTG9jYXRpb24pO1xuXG4gICAgdGhpcy5yZXNhbXBsZU91dHB1dExlbmd0aFBvaW50ZXIgPSB0aGlzLl9tYWxsb2MoNCk7XG4gICAgdGhpcy5yZXNhbXBsZU91dHB1dE1heExlbmd0aCA9IE1hdGguY2VpbCh0aGlzLmRlY29kZXJPdXRwdXRNYXhMZW5ndGggKiB0aGlzLmNvbmZpZy5vdXRwdXRCdWZmZXJTYW1wbGVSYXRlIC8gdGhpcy5jb25maWcuZGVjb2RlclNhbXBsZVJhdGUpO1xuICAgIHRoaXMucmVzYW1wbGVPdXRwdXRCdWZmZXJQb2ludGVyID0gdGhpcy5fbWFsbG9jKHRoaXMucmVzYW1wbGVPdXRwdXRNYXhMZW5ndGggKiA0KTsgLy8gNCBieXRlcyBwZXIgc2FtcGxlXG59O1xuXG5Db2RlYzJEZWNvZGVyLnByb3RvdHlwZS5yZXNldE91dHB1dEJ1ZmZlcnMgPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5vdXRwdXRCdWZmZXJzID0gW107XG4gICAgdGhpcy5vdXRwdXRCdWZmZXJBcnJheUJ1ZmZlcnMgPSBbXTtcbiAgICB0aGlzLm91dHB1dEJ1ZmZlckluZGV4ID0gMDtcblxuXG4gICAgdGhpcy5vdXRwdXRCdWZmZXJzLnB1c2gobmV3IEZsb2F0MzJBcnJheSh0aGlzLmNvbmZpZy5idWZmZXJMZW5ndGgpKTtcbiAgICB0aGlzLm91dHB1dEJ1ZmZlckFycmF5QnVmZmVycy5wdXNoKHRoaXMub3V0cHV0QnVmZmVyc1swXS5idWZmZXIpO1xuXG59O1xuXG5Db2RlYzJEZWNvZGVyLnByb3RvdHlwZS5zZW5kTGFzdEJ1ZmZlciA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLnNlbmRUb091dHB1dEJ1ZmZlcnMobmV3IEZsb2F0MzJBcnJheSgodGhpcy5jb25maWcuYnVmZmVyTGVuZ3RoIC0gdGhpcy5vdXRwdXRCdWZmZXJJbmRleCkpKTtcbiAgICBnbG9iYWxbJ3Bvc3RNZXNzYWdlJ10obnVsbCk7XG59O1xuXG5Db2RlYzJEZWNvZGVyLnByb3RvdHlwZS5zZW5kVG9PdXRwdXRCdWZmZXJzID0gZnVuY3Rpb24gKG1lcmdlZEJ1ZmZlcnMpIHtcbiAgICB2YXIgZGF0YUluZGV4ID0gMDtcbiAgICB2YXIgbWVyZ2VkQnVmZmVyTGVuZ3RoID0gbWVyZ2VkQnVmZmVycy5sZW5ndGg7XG5cbiAgICB3aGlsZSAoZGF0YUluZGV4IDwgbWVyZ2VkQnVmZmVyTGVuZ3RoKSB7XG4gICAgICAgIHZhciBhbW91bnRUb0NvcHkgPSBNYXRoLm1pbihtZXJnZWRCdWZmZXJMZW5ndGggLSBkYXRhSW5kZXgsIHRoaXMuY29uZmlnLmJ1ZmZlckxlbmd0aCAtIHRoaXMub3V0cHV0QnVmZmVySW5kZXgpO1xuXG4gICAgICAgIC8vIGhlcmUgd2UgdXNlZCB0byBkZWludGVybGVhdmUgYnV0IGNvZGVjMiBoYXMgb25seSBvbmUgY2hhbm5lbFxuICAgICAgICB0aGlzLm91dHB1dEJ1ZmZlcnNbMF0uc2V0KG1lcmdlZEJ1ZmZlcnMuc3ViYXJyYXkoZGF0YUluZGV4LCBkYXRhSW5kZXggKyBhbW91bnRUb0NvcHkpLCB0aGlzLm91dHB1dEJ1ZmZlckluZGV4KTtcblxuXG5cbiAgICAgICAgZGF0YUluZGV4ICs9IGFtb3VudFRvQ29weTtcbiAgICAgICAgdGhpcy5vdXRwdXRCdWZmZXJJbmRleCArPSBhbW91bnRUb0NvcHk7XG5cbiAgICAgICAgaWYgKHRoaXMub3V0cHV0QnVmZmVySW5kZXggPT0gdGhpcy5jb25maWcuYnVmZmVyTGVuZ3RoKSB7XG4gICAgICAgICAgICBnbG9iYWxbJ3Bvc3RNZXNzYWdlJ10odGhpcy5vdXRwdXRCdWZmZXJzLCB0aGlzLm91dHB1dEJ1ZmZlckFycmF5QnVmZmVycyk7XG4gICAgICAgICAgICB0aGlzLnJlc2V0T3V0cHV0QnVmZmVycygpO1xuICAgICAgICB9XG4gICAgfVxufTtcblxuXG5pZiAoIU1vZHVsZSkge1xuICAgIE1vZHVsZSA9IHt9O1xufVxuXG5Nb2R1bGVbJ21haW5SZWFkeSddID0gbWFpblJlYWR5O1xuTW9kdWxlWydDb2RlYzJEZWNvZGVyJ10gPSBDb2RlYzJEZWNvZGVyO1xuTW9kdWxlWydvblJ1bnRpbWVJbml0aWFsaXplZCddID0gbWFpblJlYWR5UmVzb2x2ZTtcblxubW9kdWxlLmV4cG9ydHMgPSBNb2R1bGU7Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFwQkE7QUFzQkE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUFBO0FBRUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQVJBO0FBV0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/codec2DecoderWorker.js\n");

/***/ })

/******/ });
});// end include: /home/victor/code/idefix-js/examples/browser-calls/opus-js/dist-unminified/codec2ecoderWorker.js


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
    var f = 'codec2ecoderWorker.wasm';
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
  var ___assert_fail = (condition, filename, line, func) =>
      abort(`Assertion failed: ${UTF8ToString(condition)}, at: ` + [filename ? UTF8ToString(filename) : 'unknown filename', line, func ? UTF8ToString(func) : 'unknown function']);

  var SYSCALLS = {
  varargs:undefined,
  getStr(ptr) {
        var ret = UTF8ToString(ptr);
        return ret;
      },
  };
  function ___syscall_fcntl64(fd, cmd, varargs) {
  SYSCALLS.varargs = varargs;
  
      return 0;
    }

  function ___syscall_ioctl(fd, op, varargs) {
  SYSCALLS.varargs = varargs;
  
      return 0;
    }

  var syscallGetVarargI = () => {
      // the `+` prepended here is necessary to convince the JSCompiler that varargs is indeed a number.
      var ret = HEAP32[((+SYSCALLS.varargs)>>2)];
      SYSCALLS.varargs += 4;
      return ret;
    };
  
  function ___syscall_openat(dirfd, path, flags, varargs) {
  SYSCALLS.varargs = varargs;
  
  }

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

  var _fd_read = (fd, iov, iovcnt, pnum) => {
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
  __assert_fail: ___assert_fail,
  /** @export */
  __syscall_fcntl64: ___syscall_fcntl64,
  /** @export */
  __syscall_ioctl: ___syscall_ioctl,
  /** @export */
  __syscall_openat: ___syscall_openat,
  /** @export */
  _emscripten_memcpy_js: __emscripten_memcpy_js,
  /** @export */
  emscripten_resize_heap: _emscripten_resize_heap,
  /** @export */
  fd_close: _fd_close,
  /** @export */
  fd_read: _fd_read,
  /** @export */
  fd_seek: _fd_seek,
  /** @export */
  fd_write: _fd_write
};
var wasmExports = createWasm();
var ___wasm_call_ctors = () => (___wasm_call_ctors = wasmExports['__wasm_call_ctors'])();
var _codec2_create = Module['_codec2_create'] = (a0) => (_codec2_create = Module['_codec2_create'] = wasmExports['codec2_create'])(a0);
var _codec2_destroy = Module['_codec2_destroy'] = (a0) => (_codec2_destroy = Module['_codec2_destroy'] = wasmExports['codec2_destroy'])(a0);
var _codec2_bits_per_frame = Module['_codec2_bits_per_frame'] = (a0) => (_codec2_bits_per_frame = Module['_codec2_bits_per_frame'] = wasmExports['codec2_bits_per_frame'])(a0);
var _codec2_bytes_per_frame = Module['_codec2_bytes_per_frame'] = (a0) => (_codec2_bytes_per_frame = Module['_codec2_bytes_per_frame'] = wasmExports['codec2_bytes_per_frame'])(a0);
var _codec2_samples_per_frame = Module['_codec2_samples_per_frame'] = (a0) => (_codec2_samples_per_frame = Module['_codec2_samples_per_frame'] = wasmExports['codec2_samples_per_frame'])(a0);
var _codec2_encode = Module['_codec2_encode'] = (a0, a1, a2) => (_codec2_encode = Module['_codec2_encode'] = wasmExports['codec2_encode'])(a0, a1, a2);
var _codec2_decode = Module['_codec2_decode'] = (a0, a1, a2) => (_codec2_decode = Module['_codec2_decode'] = wasmExports['codec2_decode'])(a0, a1, a2);
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

