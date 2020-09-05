/**
 * Copyright (c) BlocksHub - All Rights Reserved
 * Unauthorized copying of this file, via any medium, is strictly prohibited.
 * You are not allowed to copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software.
 * This software includes various open-source libraries which have licenses provided where relevant and required.
 * View our full terms of service here: https://blockshub.net/terms
 */


(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["ceabbcbdffbefecfdceddfd"] = factory();
	else
		root["ceabbcbdffbefecfdceddfd"] = factory();
})(window, function() {
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
/******/ 	return __webpack_require__(__webpack_require__.s = 10);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

;(function (root, factory) {
	if (true) {
		// CommonJS
		module.exports = exports = factory();
	}
	else {}
}(this, function () {

	/**
	 * CryptoJS core components.
	 */
	var CryptoJS = CryptoJS || (function (Math, undefined) {
	    /*
	     * Local polyfil of Object.create
	     */
	    var create = Object.create || (function () {
	        function F() {};

	        return function (obj) {
	            var subtype;

	            F.prototype = obj;

	            subtype = new F();

	            F.prototype = null;

	            return subtype;
	        };
	    }())

	    /**
	     * CryptoJS namespace.
	     */
	    var C = {};

	    /**
	     * Library namespace.
	     */
	    var C_lib = C.lib = {};

	    /**
	     * Base object for prototypal inheritance.
	     */
	    var Base = C_lib.Base = (function () {


	        return {
	            /**
	             * Creates a new object that inherits from this object.
	             *
	             * @param {Object} overrides Properties to copy into the new object.
	             *
	             * @return {Object} The new object.
	             *
	             * @static
	             *
	             * @example
	             *
	             *     var MyType = CryptoJS.lib.Base.extend({
	             *         field: 'value',
	             *
	             *         method: function () {
	             *         }
	             *     });
	             */
	            extend: function (overrides) {
	                // Spawn
	                var subtype = create(this);

	                // Augment
	                if (overrides) {
	                    subtype.mixIn(overrides);
	                }

	                // Create default initializer
	                if (!subtype.hasOwnProperty('init') || this.init === subtype.init) {
	                    subtype.init = function () {
	                        subtype.$super.init.apply(this, arguments);
	                    };
	                }

	                // Initializer's prototype is the subtype object
	                subtype.init.prototype = subtype;

	                // Reference supertype
	                subtype.$super = this;

	                return subtype;
	            },

	            /**
	             * Extends this object and runs the init method.
	             * Arguments to create() will be passed to init().
	             *
	             * @return {Object} The new object.
	             *
	             * @static
	             *
	             * @example
	             *
	             *     var instance = MyType.create();
	             */
	            create: function () {
	                var instance = this.extend();
	                instance.init.apply(instance, arguments);

	                return instance;
	            },

	            /**
	             * Initializes a newly created object.
	             * Override this method to add some logic when your objects are created.
	             *
	             * @example
	             *
	             *     var MyType = CryptoJS.lib.Base.extend({
	             *         init: function () {
	             *             // ...
	             *         }
	             *     });
	             */
	            init: function () {
	            },

	            /**
	             * Copies properties into this object.
	             *
	             * @param {Object} properties The properties to mix in.
	             *
	             * @example
	             *
	             *     MyType.mixIn({
	             *         field: 'value'
	             *     });
	             */
	            mixIn: function (properties) {
	                for (var propertyName in properties) {
	                    if (properties.hasOwnProperty(propertyName)) {
	                        this[propertyName] = properties[propertyName];
	                    }
	                }

	                // IE won't copy toString using the loop above
	                if (properties.hasOwnProperty('toString')) {
	                    this.toString = properties.toString;
	                }
	            },

	            /**
	             * Creates a copy of this object.
	             *
	             * @return {Object} The clone.
	             *
	             * @example
	             *
	             *     var clone = instance.clone();
	             */
	            clone: function () {
	                return this.init.prototype.extend(this);
	            }
	        };
	    }());

	    /**
	     * An array of 32-bit words.
	     *
	     * @property {Array} words The array of 32-bit words.
	     * @property {number} sigBytes The number of significant bytes in this word array.
	     */
	    var WordArray = C_lib.WordArray = Base.extend({
	        /**
	         * Initializes a newly created word array.
	         *
	         * @param {Array} words (Optional) An array of 32-bit words.
	         * @param {number} sigBytes (Optional) The number of significant bytes in the words.
	         *
	         * @example
	         *
	         *     var wordArray = CryptoJS.lib.WordArray.create();
	         *     var wordArray = CryptoJS.lib.WordArray.create([0x00010203, 0x04050607]);
	         *     var wordArray = CryptoJS.lib.WordArray.create([0x00010203, 0x04050607], 6);
	         */
	        init: function (words, sigBytes) {
	            words = this.words = words || [];

	            if (sigBytes != undefined) {
	                this.sigBytes = sigBytes;
	            } else {
	                this.sigBytes = words.length * 4;
	            }
	        },

	        /**
	         * Converts this word array to a string.
	         *
	         * @param {Encoder} encoder (Optional) The encoding strategy to use. Default: CryptoJS.enc.Hex
	         *
	         * @return {string} The stringified word array.
	         *
	         * @example
	         *
	         *     var string = wordArray + '';
	         *     var string = wordArray.toString();
	         *     var string = wordArray.toString(CryptoJS.enc.Utf8);
	         */
	        toString: function (encoder) {
	            return (encoder || Hex).stringify(this);
	        },

	        /**
	         * Concatenates a word array to this word array.
	         *
	         * @param {WordArray} wordArray The word array to append.
	         *
	         * @return {WordArray} This word array.
	         *
	         * @example
	         *
	         *     wordArray1.concat(wordArray2);
	         */
	        concat: function (wordArray) {
	            // Shortcuts
	            var thisWords = this.words;
	            var thatWords = wordArray.words;
	            var thisSigBytes = this.sigBytes;
	            var thatSigBytes = wordArray.sigBytes;

	            // Clamp excess bits
	            this.clamp();

	            // Concat
	            if (thisSigBytes % 4) {
	                // Copy one byte at a time
	                for (var i = 0; i < thatSigBytes; i++) {
	                    var thatByte = (thatWords[i >>> 2] >>> (24 - (i % 4) * 8)) & 0xff;
	                    thisWords[(thisSigBytes + i) >>> 2] |= thatByte << (24 - ((thisSigBytes + i) % 4) * 8);
	                }
	            } else {
	                // Copy one word at a time
	                for (var i = 0; i < thatSigBytes; i += 4) {
	                    thisWords[(thisSigBytes + i) >>> 2] = thatWords[i >>> 2];
	                }
	            }
	            this.sigBytes += thatSigBytes;

	            // Chainable
	            return this;
	        },

	        /**
	         * Removes insignificant bits.
	         *
	         * @example
	         *
	         *     wordArray.clamp();
	         */
	        clamp: function () {
	            // Shortcuts
	            var words = this.words;
	            var sigBytes = this.sigBytes;

	            // Clamp
	            words[sigBytes >>> 2] &= 0xffffffff << (32 - (sigBytes % 4) * 8);
	            words.length = Math.ceil(sigBytes / 4);
	        },

	        /**
	         * Creates a copy of this word array.
	         *
	         * @return {WordArray} The clone.
	         *
	         * @example
	         *
	         *     var clone = wordArray.clone();
	         */
	        clone: function () {
	            var clone = Base.clone.call(this);
	            clone.words = this.words.slice(0);

	            return clone;
	        },

	        /**
	         * Creates a word array filled with random bytes.
	         *
	         * @param {number} nBytes The number of random bytes to generate.
	         *
	         * @return {WordArray} The random word array.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var wordArray = CryptoJS.lib.WordArray.random(16);
	         */
	        random: function (nBytes) {
	            var words = [];

	            var r = (function (m_w) {
	                var m_w = m_w;
	                var m_z = 0x3ade68b1;
	                var mask = 0xffffffff;

	                return function () {
	                    m_z = (0x9069 * (m_z & 0xFFFF) + (m_z >> 0x10)) & mask;
	                    m_w = (0x4650 * (m_w & 0xFFFF) + (m_w >> 0x10)) & mask;
	                    var result = ((m_z << 0x10) + m_w) & mask;
	                    result /= 0x100000000;
	                    result += 0.5;
	                    return result * (Math.random() > .5 ? 1 : -1);
	                }
	            });

	            for (var i = 0, rcache; i < nBytes; i += 4) {
	                var _r = r((rcache || Math.random()) * 0x100000000);

	                rcache = _r() * 0x3ade67b7;
	                words.push((_r() * 0x100000000) | 0);
	            }

	            return new WordArray.init(words, nBytes);
	        }
	    });

	    /**
	     * Encoder namespace.
	     */
	    var C_enc = C.enc = {};

	    /**
	     * Hex encoding strategy.
	     */
	    var Hex = C_enc.Hex = {
	        /**
	         * Converts a word array to a hex string.
	         *
	         * @param {WordArray} wordArray The word array.
	         *
	         * @return {string} The hex string.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var hexString = CryptoJS.enc.Hex.stringify(wordArray);
	         */
	        stringify: function (wordArray) {
	            // Shortcuts
	            var words = wordArray.words;
	            var sigBytes = wordArray.sigBytes;

	            // Convert
	            var hexChars = [];
	            for (var i = 0; i < sigBytes; i++) {
	                var bite = (words[i >>> 2] >>> (24 - (i % 4) * 8)) & 0xff;
	                hexChars.push((bite >>> 4).toString(16));
	                hexChars.push((bite & 0x0f).toString(16));
	            }

	            return hexChars.join('');
	        },

	        /**
	         * Converts a hex string to a word array.
	         *
	         * @param {string} hexStr The hex string.
	         *
	         * @return {WordArray} The word array.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var wordArray = CryptoJS.enc.Hex.parse(hexString);
	         */
	        parse: function (hexStr) {
	            // Shortcut
	            var hexStrLength = hexStr.length;

	            // Convert
	            var words = [];
	            for (var i = 0; i < hexStrLength; i += 2) {
	                words[i >>> 3] |= parseInt(hexStr.substr(i, 2), 16) << (24 - (i % 8) * 4);
	            }

	            return new WordArray.init(words, hexStrLength / 2);
	        }
	    };

	    /**
	     * Latin1 encoding strategy.
	     */
	    var Latin1 = C_enc.Latin1 = {
	        /**
	         * Converts a word array to a Latin1 string.
	         *
	         * @param {WordArray} wordArray The word array.
	         *
	         * @return {string} The Latin1 string.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var latin1String = CryptoJS.enc.Latin1.stringify(wordArray);
	         */
	        stringify: function (wordArray) {
	            // Shortcuts
	            var words = wordArray.words;
	            var sigBytes = wordArray.sigBytes;

	            // Convert
	            var latin1Chars = [];
	            for (var i = 0; i < sigBytes; i++) {
	                var bite = (words[i >>> 2] >>> (24 - (i % 4) * 8)) & 0xff;
	                latin1Chars.push(String.fromCharCode(bite));
	            }

	            return latin1Chars.join('');
	        },

	        /**
	         * Converts a Latin1 string to a word array.
	         *
	         * @param {string} latin1Str The Latin1 string.
	         *
	         * @return {WordArray} The word array.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var wordArray = CryptoJS.enc.Latin1.parse(latin1String);
	         */
	        parse: function (latin1Str) {
	            // Shortcut
	            var latin1StrLength = latin1Str.length;

	            // Convert
	            var words = [];
	            for (var i = 0; i < latin1StrLength; i++) {
	                words[i >>> 2] |= (latin1Str.charCodeAt(i) & 0xff) << (24 - (i % 4) * 8);
	            }

	            return new WordArray.init(words, latin1StrLength);
	        }
	    };

	    /**
	     * UTF-8 encoding strategy.
	     */
	    var Utf8 = C_enc.Utf8 = {
	        /**
	         * Converts a word array to a UTF-8 string.
	         *
	         * @param {WordArray} wordArray The word array.
	         *
	         * @return {string} The UTF-8 string.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var utf8String = CryptoJS.enc.Utf8.stringify(wordArray);
	         */
	        stringify: function (wordArray) {
	            try {
	                return decodeURIComponent(escape(Latin1.stringify(wordArray)));
	            } catch (e) {
	                throw new Error('Malformed UTF-8 data');
	            }
	        },

	        /**
	         * Converts a UTF-8 string to a word array.
	         *
	         * @param {string} utf8Str The UTF-8 string.
	         *
	         * @return {WordArray} The word array.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var wordArray = CryptoJS.enc.Utf8.parse(utf8String);
	         */
	        parse: function (utf8Str) {
	            return Latin1.parse(unescape(encodeURIComponent(utf8Str)));
	        }
	    };

	    /**
	     * Abstract buffered block algorithm template.
	     *
	     * The property blockSize must be implemented in a concrete subtype.
	     *
	     * @property {number} _minBufferSize The number of blocks that should be kept unprocessed in the buffer. Default: 0
	     */
	    var BufferedBlockAlgorithm = C_lib.BufferedBlockAlgorithm = Base.extend({
	        /**
	         * Resets this block algorithm's data buffer to its initial state.
	         *
	         * @example
	         *
	         *     bufferedBlockAlgorithm.reset();
	         */
	        reset: function () {
	            // Initial values
	            this._data = new WordArray.init();
	            this._nDataBytes = 0;
	        },

	        /**
	         * Adds new data to this block algorithm's buffer.
	         *
	         * @param {WordArray|string} data The data to append. Strings are converted to a WordArray using UTF-8.
	         *
	         * @example
	         *
	         *     bufferedBlockAlgorithm._append('data');
	         *     bufferedBlockAlgorithm._append(wordArray);
	         */
	        _append: function (data) {
	            // Convert string to WordArray, else assume WordArray already
	            if (typeof data == 'string') {
	                data = Utf8.parse(data);
	            }

	            // Append
	            this._data.concat(data);
	            this._nDataBytes += data.sigBytes;
	        },

	        /**
	         * Processes available data blocks.
	         *
	         * This method invokes _doProcessBlock(offset), which must be implemented by a concrete subtype.
	         *
	         * @param {boolean} doFlush Whether all blocks and partial blocks should be processed.
	         *
	         * @return {WordArray} The processed data.
	         *
	         * @example
	         *
	         *     var processedData = bufferedBlockAlgorithm._process();
	         *     var processedData = bufferedBlockAlgorithm._process(!!'flush');
	         */
	        _process: function (doFlush) {
	            // Shortcuts
	            var data = this._data;
	            var dataWords = data.words;
	            var dataSigBytes = data.sigBytes;
	            var blockSize = this.blockSize;
	            var blockSizeBytes = blockSize * 4;

	            // Count blocks ready
	            var nBlocksReady = dataSigBytes / blockSizeBytes;
	            if (doFlush) {
	                // Round up to include partial blocks
	                nBlocksReady = Math.ceil(nBlocksReady);
	            } else {
	                // Round down to include only full blocks,
	                // less the number of blocks that must remain in the buffer
	                nBlocksReady = Math.max((nBlocksReady | 0) - this._minBufferSize, 0);
	            }

	            // Count words ready
	            var nWordsReady = nBlocksReady * blockSize;

	            // Count bytes ready
	            var nBytesReady = Math.min(nWordsReady * 4, dataSigBytes);

	            // Process blocks
	            if (nWordsReady) {
	                for (var offset = 0; offset < nWordsReady; offset += blockSize) {
	                    // Perform concrete-algorithm logic
	                    this._doProcessBlock(dataWords, offset);
	                }

	                // Remove processed words
	                var processedWords = dataWords.splice(0, nWordsReady);
	                data.sigBytes -= nBytesReady;
	            }

	            // Return processed words
	            return new WordArray.init(processedWords, nBytesReady);
	        },

	        /**
	         * Creates a copy of this object.
	         *
	         * @return {Object} The clone.
	         *
	         * @example
	         *
	         *     var clone = bufferedBlockAlgorithm.clone();
	         */
	        clone: function () {
	            var clone = Base.clone.call(this);
	            clone._data = this._data.clone();

	            return clone;
	        },

	        _minBufferSize: 0
	    });

	    /**
	     * Abstract hasher template.
	     *
	     * @property {number} blockSize The number of 32-bit words this hasher operates on. Default: 16 (512 bits)
	     */
	    var Hasher = C_lib.Hasher = BufferedBlockAlgorithm.extend({
	        /**
	         * Configuration options.
	         */
	        cfg: Base.extend(),

	        /**
	         * Initializes a newly created hasher.
	         *
	         * @param {Object} cfg (Optional) The configuration options to use for this hash computation.
	         *
	         * @example
	         *
	         *     var hasher = CryptoJS.algo.SHA256.create();
	         */
	        init: function (cfg) {
	            // Apply config defaults
	            this.cfg = this.cfg.extend(cfg);

	            // Set initial values
	            this.reset();
	        },

	        /**
	         * Resets this hasher to its initial state.
	         *
	         * @example
	         *
	         *     hasher.reset();
	         */
	        reset: function () {
	            // Reset data buffer
	            BufferedBlockAlgorithm.reset.call(this);

	            // Perform concrete-hasher logic
	            this._doReset();
	        },

	        /**
	         * Updates this hasher with a message.
	         *
	         * @param {WordArray|string} messageUpdate The message to append.
	         *
	         * @return {Hasher} This hasher.
	         *
	         * @example
	         *
	         *     hasher.update('message');
	         *     hasher.update(wordArray);
	         */
	        update: function (messageUpdate) {
	            // Append
	            this._append(messageUpdate);

	            // Update the hash
	            this._process();

	            // Chainable
	            return this;
	        },

	        /**
	         * Finalizes the hash computation.
	         * Note that the finalize operation is effectively a destructive, read-once operation.
	         *
	         * @param {WordArray|string} messageUpdate (Optional) A final message update.
	         *
	         * @return {WordArray} The hash.
	         *
	         * @example
	         *
	         *     var hash = hasher.finalize();
	         *     var hash = hasher.finalize('message');
	         *     var hash = hasher.finalize(wordArray);
	         */
	        finalize: function (messageUpdate) {
	            // Final message update
	            if (messageUpdate) {
	                this._append(messageUpdate);
	            }

	            // Perform concrete-hasher logic
	            var hash = this._doFinalize();

	            return hash;
	        },

	        blockSize: 512/32,

	        /**
	         * Creates a shortcut function to a hasher's object interface.
	         *
	         * @param {Hasher} hasher The hasher to create a helper for.
	         *
	         * @return {Function} The shortcut function.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var SHA256 = CryptoJS.lib.Hasher._createHelper(CryptoJS.algo.SHA256);
	         */
	        _createHelper: function (hasher) {
	            return function (message, cfg) {
	                return new hasher.init(cfg).finalize(message);
	            };
	        },

	        /**
	         * Creates a shortcut function to the HMAC's object interface.
	         *
	         * @param {Hasher} hasher The hasher to use in this HMAC helper.
	         *
	         * @return {Function} The shortcut function.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var HmacSHA256 = CryptoJS.lib.Hasher._createHmacHelper(CryptoJS.algo.SHA256);
	         */
	        _createHmacHelper: function (hasher) {
	            return function (message, key) {
	                return new C_algo.HMAC.init(hasher, key).finalize(message);
	            };
	        }
	    });

	    /**
	     * Algorithm namespace.
	     */
	    var C_algo = C.algo = {};

	    return C;
	}(Math));


	return CryptoJS;

}));

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

;(function (root, factory, undef) {
	if (true) {
		// CommonJS
		module.exports = exports = factory(__webpack_require__(0), __webpack_require__(2));
	}
	else {}
}(this, function (CryptoJS) {

	/**
	 * Cipher core components.
	 */
	CryptoJS.lib.Cipher || (function (undefined) {
	    // Shortcuts
	    var C = CryptoJS;
	    var C_lib = C.lib;
	    var Base = C_lib.Base;
	    var WordArray = C_lib.WordArray;
	    var BufferedBlockAlgorithm = C_lib.BufferedBlockAlgorithm;
	    var C_enc = C.enc;
	    var Utf8 = C_enc.Utf8;
	    var Base64 = C_enc.Base64;
	    var C_algo = C.algo;
	    var EvpKDF = C_algo.EvpKDF;

	    /**
	     * Abstract base cipher template.
	     *
	     * @property {number} keySize This cipher's key size. Default: 4 (128 bits)
	     * @property {number} ivSize This cipher's IV size. Default: 4 (128 bits)
	     * @property {number} _ENC_XFORM_MODE A constant representing encryption mode.
	     * @property {number} _DEC_XFORM_MODE A constant representing decryption mode.
	     */
	    var Cipher = C_lib.Cipher = BufferedBlockAlgorithm.extend({
	        /**
	         * Configuration options.
	         *
	         * @property {WordArray} iv The IV to use for this operation.
	         */
	        cfg: Base.extend(),

	        /**
	         * Creates this cipher in encryption mode.
	         *
	         * @param {WordArray} key The key.
	         * @param {Object} cfg (Optional) The configuration options to use for this operation.
	         *
	         * @return {Cipher} A cipher instance.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var cipher = CryptoJS.algo.AES.createEncryptor(keyWordArray, { iv: ivWordArray });
	         */
	        createEncryptor: function (key, cfg) {
	            return this.create(this._ENC_XFORM_MODE, key, cfg);
	        },

	        /**
	         * Creates this cipher in decryption mode.
	         *
	         * @param {WordArray} key The key.
	         * @param {Object} cfg (Optional) The configuration options to use for this operation.
	         *
	         * @return {Cipher} A cipher instance.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var cipher = CryptoJS.algo.AES.createDecryptor(keyWordArray, { iv: ivWordArray });
	         */
	        createDecryptor: function (key, cfg) {
	            return this.create(this._DEC_XFORM_MODE, key, cfg);
	        },

	        /**
	         * Initializes a newly created cipher.
	         *
	         * @param {number} xformMode Either the encryption or decryption transormation mode constant.
	         * @param {WordArray} key The key.
	         * @param {Object} cfg (Optional) The configuration options to use for this operation.
	         *
	         * @example
	         *
	         *     var cipher = CryptoJS.algo.AES.create(CryptoJS.algo.AES._ENC_XFORM_MODE, keyWordArray, { iv: ivWordArray });
	         */
	        init: function (xformMode, key, cfg) {
	            // Apply config defaults
	            this.cfg = this.cfg.extend(cfg);

	            // Store transform mode and key
	            this._xformMode = xformMode;
	            this._key = key;

	            // Set initial values
	            this.reset();
	        },

	        /**
	         * Resets this cipher to its initial state.
	         *
	         * @example
	         *
	         *     cipher.reset();
	         */
	        reset: function () {
	            // Reset data buffer
	            BufferedBlockAlgorithm.reset.call(this);

	            // Perform concrete-cipher logic
	            this._doReset();
	        },

	        /**
	         * Adds data to be encrypted or decrypted.
	         *
	         * @param {WordArray|string} dataUpdate The data to encrypt or decrypt.
	         *
	         * @return {WordArray} The data after processing.
	         *
	         * @example
	         *
	         *     var encrypted = cipher.process('data');
	         *     var encrypted = cipher.process(wordArray);
	         */
	        process: function (dataUpdate) {
	            // Append
	            this._append(dataUpdate);

	            // Process available blocks
	            return this._process();
	        },

	        /**
	         * Finalizes the encryption or decryption process.
	         * Note that the finalize operation is effectively a destructive, read-once operation.
	         *
	         * @param {WordArray|string} dataUpdate The final data to encrypt or decrypt.
	         *
	         * @return {WordArray} The data after final processing.
	         *
	         * @example
	         *
	         *     var encrypted = cipher.finalize();
	         *     var encrypted = cipher.finalize('data');
	         *     var encrypted = cipher.finalize(wordArray);
	         */
	        finalize: function (dataUpdate) {
	            // Final data update
	            if (dataUpdate) {
	                this._append(dataUpdate);
	            }

	            // Perform concrete-cipher logic
	            var finalProcessedData = this._doFinalize();

	            return finalProcessedData;
	        },

	        keySize: 128/32,

	        ivSize: 128/32,

	        _ENC_XFORM_MODE: 1,

	        _DEC_XFORM_MODE: 2,

	        /**
	         * Creates shortcut functions to a cipher's object interface.
	         *
	         * @param {Cipher} cipher The cipher to create a helper for.
	         *
	         * @return {Object} An object with encrypt and decrypt shortcut functions.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var AES = CryptoJS.lib.Cipher._createHelper(CryptoJS.algo.AES);
	         */
	        _createHelper: (function () {
	            function selectCipherStrategy(key) {
	                if (typeof key == 'string') {
	                    return PasswordBasedCipher;
	                } else {
	                    return SerializableCipher;
	                }
	            }

	            return function (cipher) {
	                return {
	                    encrypt: function (message, key, cfg) {
	                        return selectCipherStrategy(key).encrypt(cipher, message, key, cfg);
	                    },

	                    decrypt: function (ciphertext, key, cfg) {
	                        return selectCipherStrategy(key).decrypt(cipher, ciphertext, key, cfg);
	                    }
	                };
	            };
	        }())
	    });

	    /**
	     * Abstract base stream cipher template.
	     *
	     * @property {number} blockSize The number of 32-bit words this cipher operates on. Default: 1 (32 bits)
	     */
	    var StreamCipher = C_lib.StreamCipher = Cipher.extend({
	        _doFinalize: function () {
	            // Process partial blocks
	            var finalProcessedBlocks = this._process(!!'flush');

	            return finalProcessedBlocks;
	        },

	        blockSize: 1
	    });

	    /**
	     * Mode namespace.
	     */
	    var C_mode = C.mode = {};

	    /**
	     * Abstract base block cipher mode template.
	     */
	    var BlockCipherMode = C_lib.BlockCipherMode = Base.extend({
	        /**
	         * Creates this mode for encryption.
	         *
	         * @param {Cipher} cipher A block cipher instance.
	         * @param {Array} iv The IV words.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var mode = CryptoJS.mode.CBC.createEncryptor(cipher, iv.words);
	         */
	        createEncryptor: function (cipher, iv) {
	            return this.Encryptor.create(cipher, iv);
	        },

	        /**
	         * Creates this mode for decryption.
	         *
	         * @param {Cipher} cipher A block cipher instance.
	         * @param {Array} iv The IV words.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var mode = CryptoJS.mode.CBC.createDecryptor(cipher, iv.words);
	         */
	        createDecryptor: function (cipher, iv) {
	            return this.Decryptor.create(cipher, iv);
	        },

	        /**
	         * Initializes a newly created mode.
	         *
	         * @param {Cipher} cipher A block cipher instance.
	         * @param {Array} iv The IV words.
	         *
	         * @example
	         *
	         *     var mode = CryptoJS.mode.CBC.Encryptor.create(cipher, iv.words);
	         */
	        init: function (cipher, iv) {
	            this._cipher = cipher;
	            this._iv = iv;
	        }
	    });

	    /**
	     * Cipher Block Chaining mode.
	     */
	    var CBC = C_mode.CBC = (function () {
	        /**
	         * Abstract base CBC mode.
	         */
	        var CBC = BlockCipherMode.extend();

	        /**
	         * CBC encryptor.
	         */
	        CBC.Encryptor = CBC.extend({
	            /**
	             * Processes the data block at offset.
	             *
	             * @param {Array} words The data words to operate on.
	             * @param {number} offset The offset where the block starts.
	             *
	             * @example
	             *
	             *     mode.processBlock(data.words, offset);
	             */
	            processBlock: function (words, offset) {
	                // Shortcuts
	                var cipher = this._cipher;
	                var blockSize = cipher.blockSize;

	                // XOR and encrypt
	                xorBlock.call(this, words, offset, blockSize);
	                cipher.encryptBlock(words, offset);

	                // Remember this block to use with next block
	                this._prevBlock = words.slice(offset, offset + blockSize);
	            }
	        });

	        /**
	         * CBC decryptor.
	         */
	        CBC.Decryptor = CBC.extend({
	            /**
	             * Processes the data block at offset.
	             *
	             * @param {Array} words The data words to operate on.
	             * @param {number} offset The offset where the block starts.
	             *
	             * @example
	             *
	             *     mode.processBlock(data.words, offset);
	             */
	            processBlock: function (words, offset) {
	                // Shortcuts
	                var cipher = this._cipher;
	                var blockSize = cipher.blockSize;

	                // Remember this block to use with next block
	                var thisBlock = words.slice(offset, offset + blockSize);

	                // Decrypt and XOR
	                cipher.decryptBlock(words, offset);
	                xorBlock.call(this, words, offset, blockSize);

	                // This block becomes the previous block
	                this._prevBlock = thisBlock;
	            }
	        });

	        function xorBlock(words, offset, blockSize) {
	            // Shortcut
	            var iv = this._iv;

	            // Choose mixing block
	            if (iv) {
	                var block = iv;

	                // Remove IV for subsequent blocks
	                this._iv = undefined;
	            } else {
	                var block = this._prevBlock;
	            }

	            // XOR blocks
	            for (var i = 0; i < blockSize; i++) {
	                words[offset + i] ^= block[i];
	            }
	        }

	        return CBC;
	    }());

	    /**
	     * Padding namespace.
	     */
	    var C_pad = C.pad = {};

	    /**
	     * PKCS #5/7 padding strategy.
	     */
	    var Pkcs7 = C_pad.Pkcs7 = {
	        /**
	         * Pads data using the algorithm defined in PKCS #5/7.
	         *
	         * @param {WordArray} data The data to pad.
	         * @param {number} blockSize The multiple that the data should be padded to.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     CryptoJS.pad.Pkcs7.pad(wordArray, 4);
	         */
	        pad: function (data, blockSize) {
	            // Shortcut
	            var blockSizeBytes = blockSize * 4;

	            // Count padding bytes
	            var nPaddingBytes = blockSizeBytes - data.sigBytes % blockSizeBytes;

	            // Create padding word
	            var paddingWord = (nPaddingBytes << 24) | (nPaddingBytes << 16) | (nPaddingBytes << 8) | nPaddingBytes;

	            // Create padding
	            var paddingWords = [];
	            for (var i = 0; i < nPaddingBytes; i += 4) {
	                paddingWords.push(paddingWord);
	            }
	            var padding = WordArray.create(paddingWords, nPaddingBytes);

	            // Add padding
	            data.concat(padding);
	        },

	        /**
	         * Unpads data that had been padded using the algorithm defined in PKCS #5/7.
	         *
	         * @param {WordArray} data The data to unpad.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     CryptoJS.pad.Pkcs7.unpad(wordArray);
	         */
	        unpad: function (data) {
	            // Get number of padding bytes from last byte
	            var nPaddingBytes = data.words[(data.sigBytes - 1) >>> 2] & 0xff;

	            // Remove padding
	            data.sigBytes -= nPaddingBytes;
	        }
	    };

	    /**
	     * Abstract base block cipher template.
	     *
	     * @property {number} blockSize The number of 32-bit words this cipher operates on. Default: 4 (128 bits)
	     */
	    var BlockCipher = C_lib.BlockCipher = Cipher.extend({
	        /**
	         * Configuration options.
	         *
	         * @property {Mode} mode The block mode to use. Default: CBC
	         * @property {Padding} padding The padding strategy to use. Default: Pkcs7
	         */
	        cfg: Cipher.cfg.extend({
	            mode: CBC,
	            padding: Pkcs7
	        }),

	        reset: function () {
	            // Reset cipher
	            Cipher.reset.call(this);

	            // Shortcuts
	            var cfg = this.cfg;
	            var iv = cfg.iv;
	            var mode = cfg.mode;

	            // Reset block mode
	            if (this._xformMode == this._ENC_XFORM_MODE) {
	                var modeCreator = mode.createEncryptor;
	            } else /* if (this._xformMode == this._DEC_XFORM_MODE) */ {
	                var modeCreator = mode.createDecryptor;
	                // Keep at least one block in the buffer for unpadding
	                this._minBufferSize = 1;
	            }

	            if (this._mode && this._mode.__creator == modeCreator) {
	                this._mode.init(this, iv && iv.words);
	            } else {
	                this._mode = modeCreator.call(mode, this, iv && iv.words);
	                this._mode.__creator = modeCreator;
	            }
	        },

	        _doProcessBlock: function (words, offset) {
	            this._mode.processBlock(words, offset);
	        },

	        _doFinalize: function () {
	            // Shortcut
	            var padding = this.cfg.padding;

	            // Finalize
	            if (this._xformMode == this._ENC_XFORM_MODE) {
	                // Pad data
	                padding.pad(this._data, this.blockSize);

	                // Process final blocks
	                var finalProcessedBlocks = this._process(!!'flush');
	            } else /* if (this._xformMode == this._DEC_XFORM_MODE) */ {
	                // Process final blocks
	                var finalProcessedBlocks = this._process(!!'flush');

	                // Unpad data
	                padding.unpad(finalProcessedBlocks);
	            }

	            return finalProcessedBlocks;
	        },

	        blockSize: 128/32
	    });

	    /**
	     * A collection of cipher parameters.
	     *
	     * @property {WordArray} ciphertext The raw ciphertext.
	     * @property {WordArray} key The key to this ciphertext.
	     * @property {WordArray} iv The IV used in the ciphering operation.
	     * @property {WordArray} salt The salt used with a key derivation function.
	     * @property {Cipher} algorithm The cipher algorithm.
	     * @property {Mode} mode The block mode used in the ciphering operation.
	     * @property {Padding} padding The padding scheme used in the ciphering operation.
	     * @property {number} blockSize The block size of the cipher.
	     * @property {Format} formatter The default formatting strategy to convert this cipher params object to a string.
	     */
	    var CipherParams = C_lib.CipherParams = Base.extend({
	        /**
	         * Initializes a newly created cipher params object.
	         *
	         * @param {Object} cipherParams An object with any of the possible cipher parameters.
	         *
	         * @example
	         *
	         *     var cipherParams = CryptoJS.lib.CipherParams.create({
	         *         ciphertext: ciphertextWordArray,
	         *         key: keyWordArray,
	         *         iv: ivWordArray,
	         *         salt: saltWordArray,
	         *         algorithm: CryptoJS.algo.AES,
	         *         mode: CryptoJS.mode.CBC,
	         *         padding: CryptoJS.pad.PKCS7,
	         *         blockSize: 4,
	         *         formatter: CryptoJS.format.OpenSSL
	         *     });
	         */
	        init: function (cipherParams) {
	            this.mixIn(cipherParams);
	        },

	        /**
	         * Converts this cipher params object to a string.
	         *
	         * @param {Format} formatter (Optional) The formatting strategy to use.
	         *
	         * @return {string} The stringified cipher params.
	         *
	         * @throws Error If neither the formatter nor the default formatter is set.
	         *
	         * @example
	         *
	         *     var string = cipherParams + '';
	         *     var string = cipherParams.toString();
	         *     var string = cipherParams.toString(CryptoJS.format.OpenSSL);
	         */
	        toString: function (formatter) {
	            return (formatter || this.formatter).stringify(this);
	        }
	    });

	    /**
	     * Format namespace.
	     */
	    var C_format = C.format = {};

	    /**
	     * OpenSSL formatting strategy.
	     */
	    var OpenSSLFormatter = C_format.OpenSSL = {
	        /**
	         * Converts a cipher params object to an OpenSSL-compatible string.
	         *
	         * @param {CipherParams} cipherParams The cipher params object.
	         *
	         * @return {string} The OpenSSL-compatible string.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var openSSLString = CryptoJS.format.OpenSSL.stringify(cipherParams);
	         */
	        stringify: function (cipherParams) {
	            // Shortcuts
	            var ciphertext = cipherParams.ciphertext;
	            var salt = cipherParams.salt;

	            // Format
	            if (salt) {
	                var wordArray = WordArray.create([0x53616c74, 0x65645f5f]).concat(salt).concat(ciphertext);
	            } else {
	                var wordArray = ciphertext;
	            }

	            return wordArray.toString(Base64);
	        },

	        /**
	         * Converts an OpenSSL-compatible string to a cipher params object.
	         *
	         * @param {string} openSSLStr The OpenSSL-compatible string.
	         *
	         * @return {CipherParams} The cipher params object.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var cipherParams = CryptoJS.format.OpenSSL.parse(openSSLString);
	         */
	        parse: function (openSSLStr) {
	            // Parse base64
	            var ciphertext = Base64.parse(openSSLStr);

	            // Shortcut
	            var ciphertextWords = ciphertext.words;

	            // Test for salt
	            if (ciphertextWords[0] == 0x53616c74 && ciphertextWords[1] == 0x65645f5f) {
	                // Extract salt
	                var salt = WordArray.create(ciphertextWords.slice(2, 4));

	                // Remove salt from ciphertext
	                ciphertextWords.splice(0, 4);
	                ciphertext.sigBytes -= 16;
	            }

	            return CipherParams.create({ ciphertext: ciphertext, salt: salt });
	        }
	    };

	    /**
	     * A cipher wrapper that returns ciphertext as a serializable cipher params object.
	     */
	    var SerializableCipher = C_lib.SerializableCipher = Base.extend({
	        /**
	         * Configuration options.
	         *
	         * @property {Formatter} format The formatting strategy to convert cipher param objects to and from a string. Default: OpenSSL
	         */
	        cfg: Base.extend({
	            format: OpenSSLFormatter
	        }),

	        /**
	         * Encrypts a message.
	         *
	         * @param {Cipher} cipher The cipher algorithm to use.
	         * @param {WordArray|string} message The message to encrypt.
	         * @param {WordArray} key The key.
	         * @param {Object} cfg (Optional) The configuration options to use for this operation.
	         *
	         * @return {CipherParams} A cipher params object.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var ciphertextParams = CryptoJS.lib.SerializableCipher.encrypt(CryptoJS.algo.AES, message, key);
	         *     var ciphertextParams = CryptoJS.lib.SerializableCipher.encrypt(CryptoJS.algo.AES, message, key, { iv: iv });
	         *     var ciphertextParams = CryptoJS.lib.SerializableCipher.encrypt(CryptoJS.algo.AES, message, key, { iv: iv, format: CryptoJS.format.OpenSSL });
	         */
	        encrypt: function (cipher, message, key, cfg) {
	            // Apply config defaults
	            cfg = this.cfg.extend(cfg);

	            // Encrypt
	            var encryptor = cipher.createEncryptor(key, cfg);
	            var ciphertext = encryptor.finalize(message);

	            // Shortcut
	            var cipherCfg = encryptor.cfg;

	            // Create and return serializable cipher params
	            return CipherParams.create({
	                ciphertext: ciphertext,
	                key: key,
	                iv: cipherCfg.iv,
	                algorithm: cipher,
	                mode: cipherCfg.mode,
	                padding: cipherCfg.padding,
	                blockSize: cipher.blockSize,
	                formatter: cfg.format
	            });
	        },

	        /**
	         * Decrypts serialized ciphertext.
	         *
	         * @param {Cipher} cipher The cipher algorithm to use.
	         * @param {CipherParams|string} ciphertext The ciphertext to decrypt.
	         * @param {WordArray} key The key.
	         * @param {Object} cfg (Optional) The configuration options to use for this operation.
	         *
	         * @return {WordArray} The plaintext.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var plaintext = CryptoJS.lib.SerializableCipher.decrypt(CryptoJS.algo.AES, formattedCiphertext, key, { iv: iv, format: CryptoJS.format.OpenSSL });
	         *     var plaintext = CryptoJS.lib.SerializableCipher.decrypt(CryptoJS.algo.AES, ciphertextParams, key, { iv: iv, format: CryptoJS.format.OpenSSL });
	         */
	        decrypt: function (cipher, ciphertext, key, cfg) {
	            // Apply config defaults
	            cfg = this.cfg.extend(cfg);

	            // Convert string to CipherParams
	            ciphertext = this._parse(ciphertext, cfg.format);

	            // Decrypt
	            var plaintext = cipher.createDecryptor(key, cfg).finalize(ciphertext.ciphertext);

	            return plaintext;
	        },

	        /**
	         * Converts serialized ciphertext to CipherParams,
	         * else assumed CipherParams already and returns ciphertext unchanged.
	         *
	         * @param {CipherParams|string} ciphertext The ciphertext.
	         * @param {Formatter} format The formatting strategy to use to parse serialized ciphertext.
	         *
	         * @return {CipherParams} The unserialized ciphertext.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var ciphertextParams = CryptoJS.lib.SerializableCipher._parse(ciphertextStringOrParams, format);
	         */
	        _parse: function (ciphertext, format) {
	            if (typeof ciphertext == 'string') {
	                return format.parse(ciphertext, this);
	            } else {
	                return ciphertext;
	            }
	        }
	    });

	    /**
	     * Key derivation function namespace.
	     */
	    var C_kdf = C.kdf = {};

	    /**
	     * OpenSSL key derivation function.
	     */
	    var OpenSSLKdf = C_kdf.OpenSSL = {
	        /**
	         * Derives a key and IV from a password.
	         *
	         * @param {string} password The password to derive from.
	         * @param {number} keySize The size in words of the key to generate.
	         * @param {number} ivSize The size in words of the IV to generate.
	         * @param {WordArray|string} salt (Optional) A 64-bit salt to use. If omitted, a salt will be generated randomly.
	         *
	         * @return {CipherParams} A cipher params object with the key, IV, and salt.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var derivedParams = CryptoJS.kdf.OpenSSL.execute('Password', 256/32, 128/32);
	         *     var derivedParams = CryptoJS.kdf.OpenSSL.execute('Password', 256/32, 128/32, 'saltsalt');
	         */
	        execute: function (password, keySize, ivSize, salt) {
	            // Generate random salt
	            if (!salt) {
	                salt = WordArray.random(64/8);
	            }

	            // Derive key and IV
	            var key = EvpKDF.create({ keySize: keySize + ivSize }).compute(password, salt);

	            // Separate key and IV
	            var iv = WordArray.create(key.words.slice(keySize), ivSize * 4);
	            key.sigBytes = keySize * 4;

	            // Return params
	            return CipherParams.create({ key: key, iv: iv, salt: salt });
	        }
	    };

	    /**
	     * A serializable cipher wrapper that derives the key from a password,
	     * and returns ciphertext as a serializable cipher params object.
	     */
	    var PasswordBasedCipher = C_lib.PasswordBasedCipher = SerializableCipher.extend({
	        /**
	         * Configuration options.
	         *
	         * @property {KDF} kdf The key derivation function to use to generate a key and IV from a password. Default: OpenSSL
	         */
	        cfg: SerializableCipher.cfg.extend({
	            kdf: OpenSSLKdf
	        }),

	        /**
	         * Encrypts a message using a password.
	         *
	         * @param {Cipher} cipher The cipher algorithm to use.
	         * @param {WordArray|string} message The message to encrypt.
	         * @param {string} password The password.
	         * @param {Object} cfg (Optional) The configuration options to use for this operation.
	         *
	         * @return {CipherParams} A cipher params object.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var ciphertextParams = CryptoJS.lib.PasswordBasedCipher.encrypt(CryptoJS.algo.AES, message, 'password');
	         *     var ciphertextParams = CryptoJS.lib.PasswordBasedCipher.encrypt(CryptoJS.algo.AES, message, 'password', { format: CryptoJS.format.OpenSSL });
	         */
	        encrypt: function (cipher, message, password, cfg) {
	            // Apply config defaults
	            cfg = this.cfg.extend(cfg);

	            // Derive key and other params
	            var derivedParams = cfg.kdf.execute(password, cipher.keySize, cipher.ivSize);

	            // Add IV to config
	            cfg.iv = derivedParams.iv;

	            // Encrypt
	            var ciphertext = SerializableCipher.encrypt.call(this, cipher, message, derivedParams.key, cfg);

	            // Mix in derived params
	            ciphertext.mixIn(derivedParams);

	            return ciphertext;
	        },

	        /**
	         * Decrypts serialized ciphertext using a password.
	         *
	         * @param {Cipher} cipher The cipher algorithm to use.
	         * @param {CipherParams|string} ciphertext The ciphertext to decrypt.
	         * @param {string} password The password.
	         * @param {Object} cfg (Optional) The configuration options to use for this operation.
	         *
	         * @return {WordArray} The plaintext.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var plaintext = CryptoJS.lib.PasswordBasedCipher.decrypt(CryptoJS.algo.AES, formattedCiphertext, 'password', { format: CryptoJS.format.OpenSSL });
	         *     var plaintext = CryptoJS.lib.PasswordBasedCipher.decrypt(CryptoJS.algo.AES, ciphertextParams, 'password', { format: CryptoJS.format.OpenSSL });
	         */
	        decrypt: function (cipher, ciphertext, password, cfg) {
	            // Apply config defaults
	            cfg = this.cfg.extend(cfg);

	            // Convert string to CipherParams
	            ciphertext = this._parse(ciphertext, cfg.format);

	            // Derive key and other params
	            var derivedParams = cfg.kdf.execute(password, cipher.keySize, cipher.ivSize, ciphertext.salt);

	            // Add IV to config
	            cfg.iv = derivedParams.iv;

	            // Decrypt
	            var plaintext = SerializableCipher.decrypt.call(this, cipher, ciphertext, derivedParams.key, cfg);

	            return plaintext;
	        }
	    });
	}());


}));

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

;(function (root, factory, undef) {
	if (true) {
		// CommonJS
		module.exports = exports = factory(__webpack_require__(0), __webpack_require__(6), __webpack_require__(7));
	}
	else {}
}(this, function (CryptoJS) {

	(function () {
	    // Shortcuts
	    var C = CryptoJS;
	    var C_lib = C.lib;
	    var Base = C_lib.Base;
	    var WordArray = C_lib.WordArray;
	    var C_algo = C.algo;
	    var MD5 = C_algo.MD5;

	    /**
	     * This key derivation function is meant to conform with EVP_BytesToKey.
	     * www.openssl.org/docs/crypto/EVP_BytesToKey.html
	     */
	    var EvpKDF = C_algo.EvpKDF = Base.extend({
	        /**
	         * Configuration options.
	         *
	         * @property {number} keySize The key size in words to generate. Default: 4 (128 bits)
	         * @property {Hasher} hasher The hash algorithm to use. Default: MD5
	         * @property {number} iterations The number of iterations to perform. Default: 1
	         */
	        cfg: Base.extend({
	            keySize: 128/32,
	            hasher: MD5,
	            iterations: 1
	        }),

	        /**
	         * Initializes a newly created key derivation function.
	         *
	         * @param {Object} cfg (Optional) The configuration options to use for the derivation.
	         *
	         * @example
	         *
	         *     var kdf = CryptoJS.algo.EvpKDF.create();
	         *     var kdf = CryptoJS.algo.EvpKDF.create({ keySize: 8 });
	         *     var kdf = CryptoJS.algo.EvpKDF.create({ keySize: 8, iterations: 1000 });
	         */
	        init: function (cfg) {
	            this.cfg = this.cfg.extend(cfg);
	        },

	        /**
	         * Derives a key from a password.
	         *
	         * @param {WordArray|string} password The password.
	         * @param {WordArray|string} salt A salt.
	         *
	         * @return {WordArray} The derived key.
	         *
	         * @example
	         *
	         *     var key = kdf.compute(password, salt);
	         */
	        compute: function (password, salt) {
	            // Shortcut
	            var cfg = this.cfg;

	            // Init hasher
	            var hasher = cfg.hasher.create();

	            // Initial values
	            var derivedKey = WordArray.create();

	            // Shortcuts
	            var derivedKeyWords = derivedKey.words;
	            var keySize = cfg.keySize;
	            var iterations = cfg.iterations;

	            // Generate key
	            while (derivedKeyWords.length < keySize) {
	                if (block) {
	                    hasher.update(block);
	                }
	                var block = hasher.update(password).finalize(salt);
	                hasher.reset();

	                // Iterations
	                for (var i = 1; i < iterations; i++) {
	                    block = hasher.finalize(block);
	                    hasher.reset();
	                }

	                derivedKey.concat(block);
	            }
	            derivedKey.sigBytes = keySize * 4;

	            return derivedKey;
	        }
	    });

	    /**
	     * Derives a key from a password.
	     *
	     * @param {WordArray|string} password The password.
	     * @param {WordArray|string} salt A salt.
	     * @param {Object} cfg (Optional) The configuration options to use for this computation.
	     *
	     * @return {WordArray} The derived key.
	     *
	     * @static
	     *
	     * @example
	     *
	     *     var key = CryptoJS.EvpKDF(password, salt);
	     *     var key = CryptoJS.EvpKDF(password, salt, { keySize: 8 });
	     *     var key = CryptoJS.EvpKDF(password, salt, { keySize: 8, iterations: 1000 });
	     */
	    C.EvpKDF = function (password, salt, cfg) {
	        return EvpKDF.create(cfg).compute(password, salt);
	    };
	}());


	return CryptoJS.EvpKDF;

}));

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

;(function (root, factory) {
	if (true) {
		// CommonJS
		module.exports = exports = factory(__webpack_require__(0));
	}
	else {}
}(this, function (CryptoJS) {

	(function () {
	    // Shortcuts
	    var C = CryptoJS;
	    var C_lib = C.lib;
	    var WordArray = C_lib.WordArray;
	    var C_enc = C.enc;

	    /**
	     * Base64 encoding strategy.
	     */
	    var Base64 = C_enc.Base64 = {
	        /**
	         * Converts a word array to a Base64 string.
	         *
	         * @param {WordArray} wordArray The word array.
	         *
	         * @return {string} The Base64 string.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var base64String = CryptoJS.enc.Base64.stringify(wordArray);
	         */
	        stringify: function (wordArray) {
	            // Shortcuts
	            var words = wordArray.words;
	            var sigBytes = wordArray.sigBytes;
	            var map = this._map;

	            // Clamp excess bits
	            wordArray.clamp();

	            // Convert
	            var base64Chars = [];
	            for (var i = 0; i < sigBytes; i += 3) {
	                var byte1 = (words[i >>> 2]       >>> (24 - (i % 4) * 8))       & 0xff;
	                var byte2 = (words[(i + 1) >>> 2] >>> (24 - ((i + 1) % 4) * 8)) & 0xff;
	                var byte3 = (words[(i + 2) >>> 2] >>> (24 - ((i + 2) % 4) * 8)) & 0xff;

	                var triplet = (byte1 << 16) | (byte2 << 8) | byte3;

	                for (var j = 0; (j < 4) && (i + j * 0.75 < sigBytes); j++) {
	                    base64Chars.push(map.charAt((triplet >>> (6 * (3 - j))) & 0x3f));
	                }
	            }

	            // Add padding
	            var paddingChar = map.charAt(64);
	            if (paddingChar) {
	                while (base64Chars.length % 4) {
	                    base64Chars.push(paddingChar);
	                }
	            }

	            return base64Chars.join('');
	        },

	        /**
	         * Converts a Base64 string to a word array.
	         *
	         * @param {string} base64Str The Base64 string.
	         *
	         * @return {WordArray} The word array.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var wordArray = CryptoJS.enc.Base64.parse(base64String);
	         */
	        parse: function (base64Str) {
	            // Shortcuts
	            var base64StrLength = base64Str.length;
	            var map = this._map;
	            var reverseMap = this._reverseMap;

	            if (!reverseMap) {
	                    reverseMap = this._reverseMap = [];
	                    for (var j = 0; j < map.length; j++) {
	                        reverseMap[map.charCodeAt(j)] = j;
	                    }
	            }

	            // Ignore padding
	            var paddingChar = map.charAt(64);
	            if (paddingChar) {
	                var paddingIndex = base64Str.indexOf(paddingChar);
	                if (paddingIndex !== -1) {
	                    base64StrLength = paddingIndex;
	                }
	            }

	            // Convert
	            return parseLoop(base64Str, base64StrLength, reverseMap);

	        },

	        _map: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/='
	    };

	    function parseLoop(base64Str, base64StrLength, reverseMap) {
	      var words = [];
	      var nBytes = 0;
	      for (var i = 0; i < base64StrLength; i++) {
	          if (i % 4) {
	              var bits1 = reverseMap[base64Str.charCodeAt(i - 1)] << ((i % 4) * 2);
	              var bits2 = reverseMap[base64Str.charCodeAt(i)] >>> (6 - (i % 4) * 2);
	              words[nBytes >>> 2] |= (bits1 | bits2) << (24 - (nBytes % 4) * 8);
	              nBytes++;
	          }
	      }
	      return WordArray.create(words, nBytes);
	    }
	}());


	return CryptoJS.enc.Base64;

}));

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

;(function (root, factory) {
	if (true) {
		// CommonJS
		module.exports = exports = factory(__webpack_require__(0));
	}
	else {}
}(this, function (CryptoJS) {

	(function (Math) {
	    // Shortcuts
	    var C = CryptoJS;
	    var C_lib = C.lib;
	    var WordArray = C_lib.WordArray;
	    var Hasher = C_lib.Hasher;
	    var C_algo = C.algo;

	    // Constants table
	    var T = [];

	    // Compute constants
	    (function () {
	        for (var i = 0; i < 64; i++) {
	            T[i] = (Math.abs(Math.sin(i + 1)) * 0x100000000) | 0;
	        }
	    }());

	    /**
	     * MD5 hash algorithm.
	     */
	    var MD5 = C_algo.MD5 = Hasher.extend({
	        _doReset: function () {
	            this._hash = new WordArray.init([
	                0x67452301, 0xefcdab89,
	                0x98badcfe, 0x10325476
	            ]);
	        },

	        _doProcessBlock: function (M, offset) {
	            // Swap endian
	            for (var i = 0; i < 16; i++) {
	                // Shortcuts
	                var offset_i = offset + i;
	                var M_offset_i = M[offset_i];

	                M[offset_i] = (
	                    (((M_offset_i << 8)  | (M_offset_i >>> 24)) & 0x00ff00ff) |
	                    (((M_offset_i << 24) | (M_offset_i >>> 8))  & 0xff00ff00)
	                );
	            }

	            // Shortcuts
	            var H = this._hash.words;

	            var M_offset_0  = M[offset + 0];
	            var M_offset_1  = M[offset + 1];
	            var M_offset_2  = M[offset + 2];
	            var M_offset_3  = M[offset + 3];
	            var M_offset_4  = M[offset + 4];
	            var M_offset_5  = M[offset + 5];
	            var M_offset_6  = M[offset + 6];
	            var M_offset_7  = M[offset + 7];
	            var M_offset_8  = M[offset + 8];
	            var M_offset_9  = M[offset + 9];
	            var M_offset_10 = M[offset + 10];
	            var M_offset_11 = M[offset + 11];
	            var M_offset_12 = M[offset + 12];
	            var M_offset_13 = M[offset + 13];
	            var M_offset_14 = M[offset + 14];
	            var M_offset_15 = M[offset + 15];

	            // Working varialbes
	            var a = H[0];
	            var b = H[1];
	            var c = H[2];
	            var d = H[3];

	            // Computation
	            a = FF(a, b, c, d, M_offset_0,  7,  T[0]);
	            d = FF(d, a, b, c, M_offset_1,  12, T[1]);
	            c = FF(c, d, a, b, M_offset_2,  17, T[2]);
	            b = FF(b, c, d, a, M_offset_3,  22, T[3]);
	            a = FF(a, b, c, d, M_offset_4,  7,  T[4]);
	            d = FF(d, a, b, c, M_offset_5,  12, T[5]);
	            c = FF(c, d, a, b, M_offset_6,  17, T[6]);
	            b = FF(b, c, d, a, M_offset_7,  22, T[7]);
	            a = FF(a, b, c, d, M_offset_8,  7,  T[8]);
	            d = FF(d, a, b, c, M_offset_9,  12, T[9]);
	            c = FF(c, d, a, b, M_offset_10, 17, T[10]);
	            b = FF(b, c, d, a, M_offset_11, 22, T[11]);
	            a = FF(a, b, c, d, M_offset_12, 7,  T[12]);
	            d = FF(d, a, b, c, M_offset_13, 12, T[13]);
	            c = FF(c, d, a, b, M_offset_14, 17, T[14]);
	            b = FF(b, c, d, a, M_offset_15, 22, T[15]);

	            a = GG(a, b, c, d, M_offset_1,  5,  T[16]);
	            d = GG(d, a, b, c, M_offset_6,  9,  T[17]);
	            c = GG(c, d, a, b, M_offset_11, 14, T[18]);
	            b = GG(b, c, d, a, M_offset_0,  20, T[19]);
	            a = GG(a, b, c, d, M_offset_5,  5,  T[20]);
	            d = GG(d, a, b, c, M_offset_10, 9,  T[21]);
	            c = GG(c, d, a, b, M_offset_15, 14, T[22]);
	            b = GG(b, c, d, a, M_offset_4,  20, T[23]);
	            a = GG(a, b, c, d, M_offset_9,  5,  T[24]);
	            d = GG(d, a, b, c, M_offset_14, 9,  T[25]);
	            c = GG(c, d, a, b, M_offset_3,  14, T[26]);
	            b = GG(b, c, d, a, M_offset_8,  20, T[27]);
	            a = GG(a, b, c, d, M_offset_13, 5,  T[28]);
	            d = GG(d, a, b, c, M_offset_2,  9,  T[29]);
	            c = GG(c, d, a, b, M_offset_7,  14, T[30]);
	            b = GG(b, c, d, a, M_offset_12, 20, T[31]);

	            a = HH(a, b, c, d, M_offset_5,  4,  T[32]);
	            d = HH(d, a, b, c, M_offset_8,  11, T[33]);
	            c = HH(c, d, a, b, M_offset_11, 16, T[34]);
	            b = HH(b, c, d, a, M_offset_14, 23, T[35]);
	            a = HH(a, b, c, d, M_offset_1,  4,  T[36]);
	            d = HH(d, a, b, c, M_offset_4,  11, T[37]);
	            c = HH(c, d, a, b, M_offset_7,  16, T[38]);
	            b = HH(b, c, d, a, M_offset_10, 23, T[39]);
	            a = HH(a, b, c, d, M_offset_13, 4,  T[40]);
	            d = HH(d, a, b, c, M_offset_0,  11, T[41]);
	            c = HH(c, d, a, b, M_offset_3,  16, T[42]);
	            b = HH(b, c, d, a, M_offset_6,  23, T[43]);
	            a = HH(a, b, c, d, M_offset_9,  4,  T[44]);
	            d = HH(d, a, b, c, M_offset_12, 11, T[45]);
	            c = HH(c, d, a, b, M_offset_15, 16, T[46]);
	            b = HH(b, c, d, a, M_offset_2,  23, T[47]);

	            a = II(a, b, c, d, M_offset_0,  6,  T[48]);
	            d = II(d, a, b, c, M_offset_7,  10, T[49]);
	            c = II(c, d, a, b, M_offset_14, 15, T[50]);
	            b = II(b, c, d, a, M_offset_5,  21, T[51]);
	            a = II(a, b, c, d, M_offset_12, 6,  T[52]);
	            d = II(d, a, b, c, M_offset_3,  10, T[53]);
	            c = II(c, d, a, b, M_offset_10, 15, T[54]);
	            b = II(b, c, d, a, M_offset_1,  21, T[55]);
	            a = II(a, b, c, d, M_offset_8,  6,  T[56]);
	            d = II(d, a, b, c, M_offset_15, 10, T[57]);
	            c = II(c, d, a, b, M_offset_6,  15, T[58]);
	            b = II(b, c, d, a, M_offset_13, 21, T[59]);
	            a = II(a, b, c, d, M_offset_4,  6,  T[60]);
	            d = II(d, a, b, c, M_offset_11, 10, T[61]);
	            c = II(c, d, a, b, M_offset_2,  15, T[62]);
	            b = II(b, c, d, a, M_offset_9,  21, T[63]);

	            // Intermediate hash value
	            H[0] = (H[0] + a) | 0;
	            H[1] = (H[1] + b) | 0;
	            H[2] = (H[2] + c) | 0;
	            H[3] = (H[3] + d) | 0;
	        },

	        _doFinalize: function () {
	            // Shortcuts
	            var data = this._data;
	            var dataWords = data.words;

	            var nBitsTotal = this._nDataBytes * 8;
	            var nBitsLeft = data.sigBytes * 8;

	            // Add padding
	            dataWords[nBitsLeft >>> 5] |= 0x80 << (24 - nBitsLeft % 32);

	            var nBitsTotalH = Math.floor(nBitsTotal / 0x100000000);
	            var nBitsTotalL = nBitsTotal;
	            dataWords[(((nBitsLeft + 64) >>> 9) << 4) + 15] = (
	                (((nBitsTotalH << 8)  | (nBitsTotalH >>> 24)) & 0x00ff00ff) |
	                (((nBitsTotalH << 24) | (nBitsTotalH >>> 8))  & 0xff00ff00)
	            );
	            dataWords[(((nBitsLeft + 64) >>> 9) << 4) + 14] = (
	                (((nBitsTotalL << 8)  | (nBitsTotalL >>> 24)) & 0x00ff00ff) |
	                (((nBitsTotalL << 24) | (nBitsTotalL >>> 8))  & 0xff00ff00)
	            );

	            data.sigBytes = (dataWords.length + 1) * 4;

	            // Hash final blocks
	            this._process();

	            // Shortcuts
	            var hash = this._hash;
	            var H = hash.words;

	            // Swap endian
	            for (var i = 0; i < 4; i++) {
	                // Shortcut
	                var H_i = H[i];

	                H[i] = (((H_i << 8)  | (H_i >>> 24)) & 0x00ff00ff) |
	                       (((H_i << 24) | (H_i >>> 8))  & 0xff00ff00);
	            }

	            // Return final computed hash
	            return hash;
	        },

	        clone: function () {
	            var clone = Hasher.clone.call(this);
	            clone._hash = this._hash.clone();

	            return clone;
	        }
	    });

	    function FF(a, b, c, d, x, s, t) {
	        var n = a + ((b & c) | (~b & d)) + x + t;
	        return ((n << s) | (n >>> (32 - s))) + b;
	    }

	    function GG(a, b, c, d, x, s, t) {
	        var n = a + ((b & d) | (c & ~d)) + x + t;
	        return ((n << s) | (n >>> (32 - s))) + b;
	    }

	    function HH(a, b, c, d, x, s, t) {
	        var n = a + (b ^ c ^ d) + x + t;
	        return ((n << s) | (n >>> (32 - s))) + b;
	    }

	    function II(a, b, c, d, x, s, t) {
	        var n = a + (c ^ (b | ~d)) + x + t;
	        return ((n << s) | (n >>> (32 - s))) + b;
	    }

	    /**
	     * Shortcut function to the hasher's object interface.
	     *
	     * @param {WordArray|string} message The message to hash.
	     *
	     * @return {WordArray} The hash.
	     *
	     * @static
	     *
	     * @example
	     *
	     *     var hash = CryptoJS.MD5('message');
	     *     var hash = CryptoJS.MD5(wordArray);
	     */
	    C.MD5 = Hasher._createHelper(MD5);

	    /**
	     * Shortcut function to the HMAC's object interface.
	     *
	     * @param {WordArray|string} message The message to hash.
	     * @param {WordArray|string} key The secret key.
	     *
	     * @return {WordArray} The HMAC.
	     *
	     * @static
	     *
	     * @example
	     *
	     *     var hmac = CryptoJS.HmacMD5(message, key);
	     */
	    C.HmacMD5 = Hasher._createHmacHelper(MD5);
	}(Math));


	return CryptoJS.MD5;

}));

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

;(function (root, factory) {
	if (true) {
		// CommonJS
		module.exports = exports = factory(__webpack_require__(0));
	}
	else {}
}(this, function (CryptoJS) {

	(function (undefined) {
	    // Shortcuts
	    var C = CryptoJS;
	    var C_lib = C.lib;
	    var Base = C_lib.Base;
	    var X32WordArray = C_lib.WordArray;

	    /**
	     * x64 namespace.
	     */
	    var C_x64 = C.x64 = {};

	    /**
	     * A 64-bit word.
	     */
	    var X64Word = C_x64.Word = Base.extend({
	        /**
	         * Initializes a newly created 64-bit word.
	         *
	         * @param {number} high The high 32 bits.
	         * @param {number} low The low 32 bits.
	         *
	         * @example
	         *
	         *     var x64Word = CryptoJS.x64.Word.create(0x00010203, 0x04050607);
	         */
	        init: function (high, low) {
	            this.high = high;
	            this.low = low;
	        }

	        /**
	         * Bitwise NOTs this word.
	         *
	         * @return {X64Word} A new x64-Word object after negating.
	         *
	         * @example
	         *
	         *     var negated = x64Word.not();
	         */
	        // not: function () {
	            // var high = ~this.high;
	            // var low = ~this.low;

	            // return X64Word.create(high, low);
	        // },

	        /**
	         * Bitwise ANDs this word with the passed word.
	         *
	         * @param {X64Word} word The x64-Word to AND with this word.
	         *
	         * @return {X64Word} A new x64-Word object after ANDing.
	         *
	         * @example
	         *
	         *     var anded = x64Word.and(anotherX64Word);
	         */
	        // and: function (word) {
	            // var high = this.high & word.high;
	            // var low = this.low & word.low;

	            // return X64Word.create(high, low);
	        // },

	        /**
	         * Bitwise ORs this word with the passed word.
	         *
	         * @param {X64Word} word The x64-Word to OR with this word.
	         *
	         * @return {X64Word} A new x64-Word object after ORing.
	         *
	         * @example
	         *
	         *     var ored = x64Word.or(anotherX64Word);
	         */
	        // or: function (word) {
	            // var high = this.high | word.high;
	            // var low = this.low | word.low;

	            // return X64Word.create(high, low);
	        // },

	        /**
	         * Bitwise XORs this word with the passed word.
	         *
	         * @param {X64Word} word The x64-Word to XOR with this word.
	         *
	         * @return {X64Word} A new x64-Word object after XORing.
	         *
	         * @example
	         *
	         *     var xored = x64Word.xor(anotherX64Word);
	         */
	        // xor: function (word) {
	            // var high = this.high ^ word.high;
	            // var low = this.low ^ word.low;

	            // return X64Word.create(high, low);
	        // },

	        /**
	         * Shifts this word n bits to the left.
	         *
	         * @param {number} n The number of bits to shift.
	         *
	         * @return {X64Word} A new x64-Word object after shifting.
	         *
	         * @example
	         *
	         *     var shifted = x64Word.shiftL(25);
	         */
	        // shiftL: function (n) {
	            // if (n < 32) {
	                // var high = (this.high << n) | (this.low >>> (32 - n));
	                // var low = this.low << n;
	            // } else {
	                // var high = this.low << (n - 32);
	                // var low = 0;
	            // }

	            // return X64Word.create(high, low);
	        // },

	        /**
	         * Shifts this word n bits to the right.
	         *
	         * @param {number} n The number of bits to shift.
	         *
	         * @return {X64Word} A new x64-Word object after shifting.
	         *
	         * @example
	         *
	         *     var shifted = x64Word.shiftR(7);
	         */
	        // shiftR: function (n) {
	            // if (n < 32) {
	                // var low = (this.low >>> n) | (this.high << (32 - n));
	                // var high = this.high >>> n;
	            // } else {
	                // var low = this.high >>> (n - 32);
	                // var high = 0;
	            // }

	            // return X64Word.create(high, low);
	        // },

	        /**
	         * Rotates this word n bits to the left.
	         *
	         * @param {number} n The number of bits to rotate.
	         *
	         * @return {X64Word} A new x64-Word object after rotating.
	         *
	         * @example
	         *
	         *     var rotated = x64Word.rotL(25);
	         */
	        // rotL: function (n) {
	            // return this.shiftL(n).or(this.shiftR(64 - n));
	        // },

	        /**
	         * Rotates this word n bits to the right.
	         *
	         * @param {number} n The number of bits to rotate.
	         *
	         * @return {X64Word} A new x64-Word object after rotating.
	         *
	         * @example
	         *
	         *     var rotated = x64Word.rotR(7);
	         */
	        // rotR: function (n) {
	            // return this.shiftR(n).or(this.shiftL(64 - n));
	        // },

	        /**
	         * Adds this word with the passed word.
	         *
	         * @param {X64Word} word The x64-Word to add with this word.
	         *
	         * @return {X64Word} A new x64-Word object after adding.
	         *
	         * @example
	         *
	         *     var added = x64Word.add(anotherX64Word);
	         */
	        // add: function (word) {
	            // var low = (this.low + word.low) | 0;
	            // var carry = (low >>> 0) < (this.low >>> 0) ? 1 : 0;
	            // var high = (this.high + word.high + carry) | 0;

	            // return X64Word.create(high, low);
	        // }
	    });

	    /**
	     * An array of 64-bit words.
	     *
	     * @property {Array} words The array of CryptoJS.x64.Word objects.
	     * @property {number} sigBytes The number of significant bytes in this word array.
	     */
	    var X64WordArray = C_x64.WordArray = Base.extend({
	        /**
	         * Initializes a newly created word array.
	         *
	         * @param {Array} words (Optional) An array of CryptoJS.x64.Word objects.
	         * @param {number} sigBytes (Optional) The number of significant bytes in the words.
	         *
	         * @example
	         *
	         *     var wordArray = CryptoJS.x64.WordArray.create();
	         *
	         *     var wordArray = CryptoJS.x64.WordArray.create([
	         *         CryptoJS.x64.Word.create(0x00010203, 0x04050607),
	         *         CryptoJS.x64.Word.create(0x18191a1b, 0x1c1d1e1f)
	         *     ]);
	         *
	         *     var wordArray = CryptoJS.x64.WordArray.create([
	         *         CryptoJS.x64.Word.create(0x00010203, 0x04050607),
	         *         CryptoJS.x64.Word.create(0x18191a1b, 0x1c1d1e1f)
	         *     ], 10);
	         */
	        init: function (words, sigBytes) {
	            words = this.words = words || [];

	            if (sigBytes != undefined) {
	                this.sigBytes = sigBytes;
	            } else {
	                this.sigBytes = words.length * 8;
	            }
	        },

	        /**
	         * Converts this 64-bit word array to a 32-bit word array.
	         *
	         * @return {CryptoJS.lib.WordArray} This word array's data as a 32-bit word array.
	         *
	         * @example
	         *
	         *     var x32WordArray = x64WordArray.toX32();
	         */
	        toX32: function () {
	            // Shortcuts
	            var x64Words = this.words;
	            var x64WordsLength = x64Words.length;

	            // Convert
	            var x32Words = [];
	            for (var i = 0; i < x64WordsLength; i++) {
	                var x64Word = x64Words[i];
	                x32Words.push(x64Word.high);
	                x32Words.push(x64Word.low);
	            }

	            return X32WordArray.create(x32Words, this.sigBytes);
	        },

	        /**
	         * Creates a copy of this word array.
	         *
	         * @return {X64WordArray} The clone.
	         *
	         * @example
	         *
	         *     var clone = x64WordArray.clone();
	         */
	        clone: function () {
	            var clone = Base.clone.call(this);

	            // Clone "words" array
	            var words = clone.words = this.words.slice(0);

	            // Clone each X64Word object
	            var wordsLength = words.length;
	            for (var i = 0; i < wordsLength; i++) {
	                words[i] = words[i].clone();
	            }

	            return clone;
	        }
	    });
	}());


	return CryptoJS;

}));

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

;(function (root, factory) {
	if (true) {
		// CommonJS
		module.exports = exports = factory(__webpack_require__(0));
	}
	else {}
}(this, function (CryptoJS) {

	(function () {
	    // Shortcuts
	    var C = CryptoJS;
	    var C_lib = C.lib;
	    var WordArray = C_lib.WordArray;
	    var Hasher = C_lib.Hasher;
	    var C_algo = C.algo;

	    // Reusable object
	    var W = [];

	    /**
	     * SHA-1 hash algorithm.
	     */
	    var SHA1 = C_algo.SHA1 = Hasher.extend({
	        _doReset: function () {
	            this._hash = new WordArray.init([
	                0x67452301, 0xefcdab89,
	                0x98badcfe, 0x10325476,
	                0xc3d2e1f0
	            ]);
	        },

	        _doProcessBlock: function (M, offset) {
	            // Shortcut
	            var H = this._hash.words;

	            // Working variables
	            var a = H[0];
	            var b = H[1];
	            var c = H[2];
	            var d = H[3];
	            var e = H[4];

	            // Computation
	            for (var i = 0; i < 80; i++) {
	                if (i < 16) {
	                    W[i] = M[offset + i] | 0;
	                } else {
	                    var n = W[i - 3] ^ W[i - 8] ^ W[i - 14] ^ W[i - 16];
	                    W[i] = (n << 1) | (n >>> 31);
	                }

	                var t = ((a << 5) | (a >>> 27)) + e + W[i];
	                if (i < 20) {
	                    t += ((b & c) | (~b & d)) + 0x5a827999;
	                } else if (i < 40) {
	                    t += (b ^ c ^ d) + 0x6ed9eba1;
	                } else if (i < 60) {
	                    t += ((b & c) | (b & d) | (c & d)) - 0x70e44324;
	                } else /* if (i < 80) */ {
	                    t += (b ^ c ^ d) - 0x359d3e2a;
	                }

	                e = d;
	                d = c;
	                c = (b << 30) | (b >>> 2);
	                b = a;
	                a = t;
	            }

	            // Intermediate hash value
	            H[0] = (H[0] + a) | 0;
	            H[1] = (H[1] + b) | 0;
	            H[2] = (H[2] + c) | 0;
	            H[3] = (H[3] + d) | 0;
	            H[4] = (H[4] + e) | 0;
	        },

	        _doFinalize: function () {
	            // Shortcuts
	            var data = this._data;
	            var dataWords = data.words;

	            var nBitsTotal = this._nDataBytes * 8;
	            var nBitsLeft = data.sigBytes * 8;

	            // Add padding
	            dataWords[nBitsLeft >>> 5] |= 0x80 << (24 - nBitsLeft % 32);
	            dataWords[(((nBitsLeft + 64) >>> 9) << 4) + 14] = Math.floor(nBitsTotal / 0x100000000);
	            dataWords[(((nBitsLeft + 64) >>> 9) << 4) + 15] = nBitsTotal;
	            data.sigBytes = dataWords.length * 4;

	            // Hash final blocks
	            this._process();

	            // Return final computed hash
	            return this._hash;
	        },

	        clone: function () {
	            var clone = Hasher.clone.call(this);
	            clone._hash = this._hash.clone();

	            return clone;
	        }
	    });

	    /**
	     * Shortcut function to the hasher's object interface.
	     *
	     * @param {WordArray|string} message The message to hash.
	     *
	     * @return {WordArray} The hash.
	     *
	     * @static
	     *
	     * @example
	     *
	     *     var hash = CryptoJS.SHA1('message');
	     *     var hash = CryptoJS.SHA1(wordArray);
	     */
	    C.SHA1 = Hasher._createHelper(SHA1);

	    /**
	     * Shortcut function to the HMAC's object interface.
	     *
	     * @param {WordArray|string} message The message to hash.
	     * @param {WordArray|string} key The secret key.
	     *
	     * @return {WordArray} The HMAC.
	     *
	     * @static
	     *
	     * @example
	     *
	     *     var hmac = CryptoJS.HmacSHA1(message, key);
	     */
	    C.HmacSHA1 = Hasher._createHmacHelper(SHA1);
	}());


	return CryptoJS.SHA1;

}));

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

;(function (root, factory) {
	if (true) {
		// CommonJS
		module.exports = exports = factory(__webpack_require__(0));
	}
	else {}
}(this, function (CryptoJS) {

	(function () {
	    // Shortcuts
	    var C = CryptoJS;
	    var C_lib = C.lib;
	    var Base = C_lib.Base;
	    var C_enc = C.enc;
	    var Utf8 = C_enc.Utf8;
	    var C_algo = C.algo;

	    /**
	     * HMAC algorithm.
	     */
	    var HMAC = C_algo.HMAC = Base.extend({
	        /**
	         * Initializes a newly created HMAC.
	         *
	         * @param {Hasher} hasher The hash algorithm to use.
	         * @param {WordArray|string} key The secret key.
	         *
	         * @example
	         *
	         *     var hmacHasher = CryptoJS.algo.HMAC.create(CryptoJS.algo.SHA256, key);
	         */
	        init: function (hasher, key) {
	            // Init hasher
	            hasher = this._hasher = new hasher.init();

	            // Convert string to WordArray, else assume WordArray already
	            if (typeof key == 'string') {
	                key = Utf8.parse(key);
	            }

	            // Shortcuts
	            var hasherBlockSize = hasher.blockSize;
	            var hasherBlockSizeBytes = hasherBlockSize * 4;

	            // Allow arbitrary length keys
	            if (key.sigBytes > hasherBlockSizeBytes) {
	                key = hasher.finalize(key);
	            }

	            // Clamp excess bits
	            key.clamp();

	            // Clone key for inner and outer pads
	            var oKey = this._oKey = key.clone();
	            var iKey = this._iKey = key.clone();

	            // Shortcuts
	            var oKeyWords = oKey.words;
	            var iKeyWords = iKey.words;

	            // XOR keys with pad constants
	            for (var i = 0; i < hasherBlockSize; i++) {
	                oKeyWords[i] ^= 0x5c5c5c5c;
	                iKeyWords[i] ^= 0x36363636;
	            }
	            oKey.sigBytes = iKey.sigBytes = hasherBlockSizeBytes;

	            // Set initial values
	            this.reset();
	        },

	        /**
	         * Resets this HMAC to its initial state.
	         *
	         * @example
	         *
	         *     hmacHasher.reset();
	         */
	        reset: function () {
	            // Shortcut
	            var hasher = this._hasher;

	            // Reset
	            hasher.reset();
	            hasher.update(this._iKey);
	        },

	        /**
	         * Updates this HMAC with a message.
	         *
	         * @param {WordArray|string} messageUpdate The message to append.
	         *
	         * @return {HMAC} This HMAC instance.
	         *
	         * @example
	         *
	         *     hmacHasher.update('message');
	         *     hmacHasher.update(wordArray);
	         */
	        update: function (messageUpdate) {
	            this._hasher.update(messageUpdate);

	            // Chainable
	            return this;
	        },

	        /**
	         * Finalizes the HMAC computation.
	         * Note that the finalize operation is effectively a destructive, read-once operation.
	         *
	         * @param {WordArray|string} messageUpdate (Optional) A final message update.
	         *
	         * @return {WordArray} The HMAC.
	         *
	         * @example
	         *
	         *     var hmac = hmacHasher.finalize();
	         *     var hmac = hmacHasher.finalize('message');
	         *     var hmac = hmacHasher.finalize(wordArray);
	         */
	        finalize: function (messageUpdate) {
	            // Shortcut
	            var hasher = this._hasher;

	            // Compute HMAC
	            var innerHash = hasher.finalize(messageUpdate);
	            hasher.reset();
	            var hmac = hasher.finalize(this._oKey.clone().concat(innerHash));

	            return hmac;
	        }
	    });
	}());


}));

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

;(function (root, factory) {
	if (true) {
		// CommonJS
		module.exports = exports = factory(__webpack_require__(0));
	}
	else {}
}(this, function (CryptoJS) {

	(function (Math) {
	    // Shortcuts
	    var C = CryptoJS;
	    var C_lib = C.lib;
	    var WordArray = C_lib.WordArray;
	    var Hasher = C_lib.Hasher;
	    var C_algo = C.algo;

	    // Initialization and round constants tables
	    var H = [];
	    var K = [];

	    // Compute constants
	    (function () {
	        function isPrime(n) {
	            var sqrtN = Math.sqrt(n);
	            for (var factor = 2; factor <= sqrtN; factor++) {
	                if (!(n % factor)) {
	                    return false;
	                }
	            }

	            return true;
	        }

	        function getFractionalBits(n) {
	            return ((n - (n | 0)) * 0x100000000) | 0;
	        }

	        var n = 2;
	        var nPrime = 0;
	        while (nPrime < 64) {
	            if (isPrime(n)) {
	                if (nPrime < 8) {
	                    H[nPrime] = getFractionalBits(Math.pow(n, 1 / 2));
	                }
	                K[nPrime] = getFractionalBits(Math.pow(n, 1 / 3));

	                nPrime++;
	            }

	            n++;
	        }
	    }());

	    // Reusable object
	    var W = [];

	    /**
	     * SHA-256 hash algorithm.
	     */
	    var SHA256 = C_algo.SHA256 = Hasher.extend({
	        _doReset: function () {
	            this._hash = new WordArray.init(H.slice(0));
	        },

	        _doProcessBlock: function (M, offset) {
	            // Shortcut
	            var H = this._hash.words;

	            // Working variables
	            var a = H[0];
	            var b = H[1];
	            var c = H[2];
	            var d = H[3];
	            var e = H[4];
	            var f = H[5];
	            var g = H[6];
	            var h = H[7];

	            // Computation
	            for (var i = 0; i < 64; i++) {
	                if (i < 16) {
	                    W[i] = M[offset + i] | 0;
	                } else {
	                    var gamma0x = W[i - 15];
	                    var gamma0  = ((gamma0x << 25) | (gamma0x >>> 7))  ^
	                                  ((gamma0x << 14) | (gamma0x >>> 18)) ^
	                                   (gamma0x >>> 3);

	                    var gamma1x = W[i - 2];
	                    var gamma1  = ((gamma1x << 15) | (gamma1x >>> 17)) ^
	                                  ((gamma1x << 13) | (gamma1x >>> 19)) ^
	                                   (gamma1x >>> 10);

	                    W[i] = gamma0 + W[i - 7] + gamma1 + W[i - 16];
	                }

	                var ch  = (e & f) ^ (~e & g);
	                var maj = (a & b) ^ (a & c) ^ (b & c);

	                var sigma0 = ((a << 30) | (a >>> 2)) ^ ((a << 19) | (a >>> 13)) ^ ((a << 10) | (a >>> 22));
	                var sigma1 = ((e << 26) | (e >>> 6)) ^ ((e << 21) | (e >>> 11)) ^ ((e << 7)  | (e >>> 25));

	                var t1 = h + sigma1 + ch + K[i] + W[i];
	                var t2 = sigma0 + maj;

	                h = g;
	                g = f;
	                f = e;
	                e = (d + t1) | 0;
	                d = c;
	                c = b;
	                b = a;
	                a = (t1 + t2) | 0;
	            }

	            // Intermediate hash value
	            H[0] = (H[0] + a) | 0;
	            H[1] = (H[1] + b) | 0;
	            H[2] = (H[2] + c) | 0;
	            H[3] = (H[3] + d) | 0;
	            H[4] = (H[4] + e) | 0;
	            H[5] = (H[5] + f) | 0;
	            H[6] = (H[6] + g) | 0;
	            H[7] = (H[7] + h) | 0;
	        },

	        _doFinalize: function () {
	            // Shortcuts
	            var data = this._data;
	            var dataWords = data.words;

	            var nBitsTotal = this._nDataBytes * 8;
	            var nBitsLeft = data.sigBytes * 8;

	            // Add padding
	            dataWords[nBitsLeft >>> 5] |= 0x80 << (24 - nBitsLeft % 32);
	            dataWords[(((nBitsLeft + 64) >>> 9) << 4) + 14] = Math.floor(nBitsTotal / 0x100000000);
	            dataWords[(((nBitsLeft + 64) >>> 9) << 4) + 15] = nBitsTotal;
	            data.sigBytes = dataWords.length * 4;

	            // Hash final blocks
	            this._process();

	            // Return final computed hash
	            return this._hash;
	        },

	        clone: function () {
	            var clone = Hasher.clone.call(this);
	            clone._hash = this._hash.clone();

	            return clone;
	        }
	    });

	    /**
	     * Shortcut function to the hasher's object interface.
	     *
	     * @param {WordArray|string} message The message to hash.
	     *
	     * @return {WordArray} The hash.
	     *
	     * @static
	     *
	     * @example
	     *
	     *     var hash = CryptoJS.SHA256('message');
	     *     var hash = CryptoJS.SHA256(wordArray);
	     */
	    C.SHA256 = Hasher._createHelper(SHA256);

	    /**
	     * Shortcut function to the HMAC's object interface.
	     *
	     * @param {WordArray|string} message The message to hash.
	     * @param {WordArray|string} key The secret key.
	     *
	     * @return {WordArray} The HMAC.
	     *
	     * @static
	     *
	     * @example
	     *
	     *     var hmac = CryptoJS.HmacSHA256(message, key);
	     */
	    C.HmacSHA256 = Hasher._createHmacHelper(SHA256);
	}(Math));


	return CryptoJS.SHA256;

}));

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

;(function (root, factory, undef) {
	if (true) {
		// CommonJS
		module.exports = exports = factory(__webpack_require__(0), __webpack_require__(5));
	}
	else {}
}(this, function (CryptoJS) {

	(function () {
	    // Shortcuts
	    var C = CryptoJS;
	    var C_lib = C.lib;
	    var Hasher = C_lib.Hasher;
	    var C_x64 = C.x64;
	    var X64Word = C_x64.Word;
	    var X64WordArray = C_x64.WordArray;
	    var C_algo = C.algo;

	    function X64Word_create() {
	        return X64Word.create.apply(X64Word, arguments);
	    }

	    // Constants
	    var K = [
	        X64Word_create(0x428a2f98, 0xd728ae22), X64Word_create(0x71374491, 0x23ef65cd),
	        X64Word_create(0xb5c0fbcf, 0xec4d3b2f), X64Word_create(0xe9b5dba5, 0x8189dbbc),
	        X64Word_create(0x3956c25b, 0xf348b538), X64Word_create(0x59f111f1, 0xb605d019),
	        X64Word_create(0x923f82a4, 0xaf194f9b), X64Word_create(0xab1c5ed5, 0xda6d8118),
	        X64Word_create(0xd807aa98, 0xa3030242), X64Word_create(0x12835b01, 0x45706fbe),
	        X64Word_create(0x243185be, 0x4ee4b28c), X64Word_create(0x550c7dc3, 0xd5ffb4e2),
	        X64Word_create(0x72be5d74, 0xf27b896f), X64Word_create(0x80deb1fe, 0x3b1696b1),
	        X64Word_create(0x9bdc06a7, 0x25c71235), X64Word_create(0xc19bf174, 0xcf692694),
	        X64Word_create(0xe49b69c1, 0x9ef14ad2), X64Word_create(0xefbe4786, 0x384f25e3),
	        X64Word_create(0x0fc19dc6, 0x8b8cd5b5), X64Word_create(0x240ca1cc, 0x77ac9c65),
	        X64Word_create(0x2de92c6f, 0x592b0275), X64Word_create(0x4a7484aa, 0x6ea6e483),
	        X64Word_create(0x5cb0a9dc, 0xbd41fbd4), X64Word_create(0x76f988da, 0x831153b5),
	        X64Word_create(0x983e5152, 0xee66dfab), X64Word_create(0xa831c66d, 0x2db43210),
	        X64Word_create(0xb00327c8, 0x98fb213f), X64Word_create(0xbf597fc7, 0xbeef0ee4),
	        X64Word_create(0xc6e00bf3, 0x3da88fc2), X64Word_create(0xd5a79147, 0x930aa725),
	        X64Word_create(0x06ca6351, 0xe003826f), X64Word_create(0x14292967, 0x0a0e6e70),
	        X64Word_create(0x27b70a85, 0x46d22ffc), X64Word_create(0x2e1b2138, 0x5c26c926),
	        X64Word_create(0x4d2c6dfc, 0x5ac42aed), X64Word_create(0x53380d13, 0x9d95b3df),
	        X64Word_create(0x650a7354, 0x8baf63de), X64Word_create(0x766a0abb, 0x3c77b2a8),
	        X64Word_create(0x81c2c92e, 0x47edaee6), X64Word_create(0x92722c85, 0x1482353b),
	        X64Word_create(0xa2bfe8a1, 0x4cf10364), X64Word_create(0xa81a664b, 0xbc423001),
	        X64Word_create(0xc24b8b70, 0xd0f89791), X64Word_create(0xc76c51a3, 0x0654be30),
	        X64Word_create(0xd192e819, 0xd6ef5218), X64Word_create(0xd6990624, 0x5565a910),
	        X64Word_create(0xf40e3585, 0x5771202a), X64Word_create(0x106aa070, 0x32bbd1b8),
	        X64Word_create(0x19a4c116, 0xb8d2d0c8), X64Word_create(0x1e376c08, 0x5141ab53),
	        X64Word_create(0x2748774c, 0xdf8eeb99), X64Word_create(0x34b0bcb5, 0xe19b48a8),
	        X64Word_create(0x391c0cb3, 0xc5c95a63), X64Word_create(0x4ed8aa4a, 0xe3418acb),
	        X64Word_create(0x5b9cca4f, 0x7763e373), X64Word_create(0x682e6ff3, 0xd6b2b8a3),
	        X64Word_create(0x748f82ee, 0x5defb2fc), X64Word_create(0x78a5636f, 0x43172f60),
	        X64Word_create(0x84c87814, 0xa1f0ab72), X64Word_create(0x8cc70208, 0x1a6439ec),
	        X64Word_create(0x90befffa, 0x23631e28), X64Word_create(0xa4506ceb, 0xde82bde9),
	        X64Word_create(0xbef9a3f7, 0xb2c67915), X64Word_create(0xc67178f2, 0xe372532b),
	        X64Word_create(0xca273ece, 0xea26619c), X64Word_create(0xd186b8c7, 0x21c0c207),
	        X64Word_create(0xeada7dd6, 0xcde0eb1e), X64Word_create(0xf57d4f7f, 0xee6ed178),
	        X64Word_create(0x06f067aa, 0x72176fba), X64Word_create(0x0a637dc5, 0xa2c898a6),
	        X64Word_create(0x113f9804, 0xbef90dae), X64Word_create(0x1b710b35, 0x131c471b),
	        X64Word_create(0x28db77f5, 0x23047d84), X64Word_create(0x32caab7b, 0x40c72493),
	        X64Word_create(0x3c9ebe0a, 0x15c9bebc), X64Word_create(0x431d67c4, 0x9c100d4c),
	        X64Word_create(0x4cc5d4be, 0xcb3e42b6), X64Word_create(0x597f299c, 0xfc657e2a),
	        X64Word_create(0x5fcb6fab, 0x3ad6faec), X64Word_create(0x6c44198c, 0x4a475817)
	    ];

	    // Reusable objects
	    var W = [];
	    (function () {
	        for (var i = 0; i < 80; i++) {
	            W[i] = X64Word_create();
	        }
	    }());

	    /**
	     * SHA-512 hash algorithm.
	     */
	    var SHA512 = C_algo.SHA512 = Hasher.extend({
	        _doReset: function () {
	            this._hash = new X64WordArray.init([
	                new X64Word.init(0x6a09e667, 0xf3bcc908), new X64Word.init(0xbb67ae85, 0x84caa73b),
	                new X64Word.init(0x3c6ef372, 0xfe94f82b), new X64Word.init(0xa54ff53a, 0x5f1d36f1),
	                new X64Word.init(0x510e527f, 0xade682d1), new X64Word.init(0x9b05688c, 0x2b3e6c1f),
	                new X64Word.init(0x1f83d9ab, 0xfb41bd6b), new X64Word.init(0x5be0cd19, 0x137e2179)
	            ]);
	        },

	        _doProcessBlock: function (M, offset) {
	            // Shortcuts
	            var H = this._hash.words;

	            var H0 = H[0];
	            var H1 = H[1];
	            var H2 = H[2];
	            var H3 = H[3];
	            var H4 = H[4];
	            var H5 = H[5];
	            var H6 = H[6];
	            var H7 = H[7];

	            var H0h = H0.high;
	            var H0l = H0.low;
	            var H1h = H1.high;
	            var H1l = H1.low;
	            var H2h = H2.high;
	            var H2l = H2.low;
	            var H3h = H3.high;
	            var H3l = H3.low;
	            var H4h = H4.high;
	            var H4l = H4.low;
	            var H5h = H5.high;
	            var H5l = H5.low;
	            var H6h = H6.high;
	            var H6l = H6.low;
	            var H7h = H7.high;
	            var H7l = H7.low;

	            // Working variables
	            var ah = H0h;
	            var al = H0l;
	            var bh = H1h;
	            var bl = H1l;
	            var ch = H2h;
	            var cl = H2l;
	            var dh = H3h;
	            var dl = H3l;
	            var eh = H4h;
	            var el = H4l;
	            var fh = H5h;
	            var fl = H5l;
	            var gh = H6h;
	            var gl = H6l;
	            var hh = H7h;
	            var hl = H7l;

	            // Rounds
	            for (var i = 0; i < 80; i++) {
	                // Shortcut
	                var Wi = W[i];

	                // Extend message
	                if (i < 16) {
	                    var Wih = Wi.high = M[offset + i * 2]     | 0;
	                    var Wil = Wi.low  = M[offset + i * 2 + 1] | 0;
	                } else {
	                    // Gamma0
	                    var gamma0x  = W[i - 15];
	                    var gamma0xh = gamma0x.high;
	                    var gamma0xl = gamma0x.low;
	                    var gamma0h  = ((gamma0xh >>> 1) | (gamma0xl << 31)) ^ ((gamma0xh >>> 8) | (gamma0xl << 24)) ^ (gamma0xh >>> 7);
	                    var gamma0l  = ((gamma0xl >>> 1) | (gamma0xh << 31)) ^ ((gamma0xl >>> 8) | (gamma0xh << 24)) ^ ((gamma0xl >>> 7) | (gamma0xh << 25));

	                    // Gamma1
	                    var gamma1x  = W[i - 2];
	                    var gamma1xh = gamma1x.high;
	                    var gamma1xl = gamma1x.low;
	                    var gamma1h  = ((gamma1xh >>> 19) | (gamma1xl << 13)) ^ ((gamma1xh << 3) | (gamma1xl >>> 29)) ^ (gamma1xh >>> 6);
	                    var gamma1l  = ((gamma1xl >>> 19) | (gamma1xh << 13)) ^ ((gamma1xl << 3) | (gamma1xh >>> 29)) ^ ((gamma1xl >>> 6) | (gamma1xh << 26));

	                    // W[i] = gamma0 + W[i - 7] + gamma1 + W[i - 16]
	                    var Wi7  = W[i - 7];
	                    var Wi7h = Wi7.high;
	                    var Wi7l = Wi7.low;

	                    var Wi16  = W[i - 16];
	                    var Wi16h = Wi16.high;
	                    var Wi16l = Wi16.low;

	                    var Wil = gamma0l + Wi7l;
	                    var Wih = gamma0h + Wi7h + ((Wil >>> 0) < (gamma0l >>> 0) ? 1 : 0);
	                    var Wil = Wil + gamma1l;
	                    var Wih = Wih + gamma1h + ((Wil >>> 0) < (gamma1l >>> 0) ? 1 : 0);
	                    var Wil = Wil + Wi16l;
	                    var Wih = Wih + Wi16h + ((Wil >>> 0) < (Wi16l >>> 0) ? 1 : 0);

	                    Wi.high = Wih;
	                    Wi.low  = Wil;
	                }

	                var chh  = (eh & fh) ^ (~eh & gh);
	                var chl  = (el & fl) ^ (~el & gl);
	                var majh = (ah & bh) ^ (ah & ch) ^ (bh & ch);
	                var majl = (al & bl) ^ (al & cl) ^ (bl & cl);

	                var sigma0h = ((ah >>> 28) | (al << 4))  ^ ((ah << 30)  | (al >>> 2)) ^ ((ah << 25) | (al >>> 7));
	                var sigma0l = ((al >>> 28) | (ah << 4))  ^ ((al << 30)  | (ah >>> 2)) ^ ((al << 25) | (ah >>> 7));
	                var sigma1h = ((eh >>> 14) | (el << 18)) ^ ((eh >>> 18) | (el << 14)) ^ ((eh << 23) | (el >>> 9));
	                var sigma1l = ((el >>> 14) | (eh << 18)) ^ ((el >>> 18) | (eh << 14)) ^ ((el << 23) | (eh >>> 9));

	                // t1 = h + sigma1 + ch + K[i] + W[i]
	                var Ki  = K[i];
	                var Kih = Ki.high;
	                var Kil = Ki.low;

	                var t1l = hl + sigma1l;
	                var t1h = hh + sigma1h + ((t1l >>> 0) < (hl >>> 0) ? 1 : 0);
	                var t1l = t1l + chl;
	                var t1h = t1h + chh + ((t1l >>> 0) < (chl >>> 0) ? 1 : 0);
	                var t1l = t1l + Kil;
	                var t1h = t1h + Kih + ((t1l >>> 0) < (Kil >>> 0) ? 1 : 0);
	                var t1l = t1l + Wil;
	                var t1h = t1h + Wih + ((t1l >>> 0) < (Wil >>> 0) ? 1 : 0);

	                // t2 = sigma0 + maj
	                var t2l = sigma0l + majl;
	                var t2h = sigma0h + majh + ((t2l >>> 0) < (sigma0l >>> 0) ? 1 : 0);

	                // Update working variables
	                hh = gh;
	                hl = gl;
	                gh = fh;
	                gl = fl;
	                fh = eh;
	                fl = el;
	                el = (dl + t1l) | 0;
	                eh = (dh + t1h + ((el >>> 0) < (dl >>> 0) ? 1 : 0)) | 0;
	                dh = ch;
	                dl = cl;
	                ch = bh;
	                cl = bl;
	                bh = ah;
	                bl = al;
	                al = (t1l + t2l) | 0;
	                ah = (t1h + t2h + ((al >>> 0) < (t1l >>> 0) ? 1 : 0)) | 0;
	            }

	            // Intermediate hash value
	            H0l = H0.low  = (H0l + al);
	            H0.high = (H0h + ah + ((H0l >>> 0) < (al >>> 0) ? 1 : 0));
	            H1l = H1.low  = (H1l + bl);
	            H1.high = (H1h + bh + ((H1l >>> 0) < (bl >>> 0) ? 1 : 0));
	            H2l = H2.low  = (H2l + cl);
	            H2.high = (H2h + ch + ((H2l >>> 0) < (cl >>> 0) ? 1 : 0));
	            H3l = H3.low  = (H3l + dl);
	            H3.high = (H3h + dh + ((H3l >>> 0) < (dl >>> 0) ? 1 : 0));
	            H4l = H4.low  = (H4l + el);
	            H4.high = (H4h + eh + ((H4l >>> 0) < (el >>> 0) ? 1 : 0));
	            H5l = H5.low  = (H5l + fl);
	            H5.high = (H5h + fh + ((H5l >>> 0) < (fl >>> 0) ? 1 : 0));
	            H6l = H6.low  = (H6l + gl);
	            H6.high = (H6h + gh + ((H6l >>> 0) < (gl >>> 0) ? 1 : 0));
	            H7l = H7.low  = (H7l + hl);
	            H7.high = (H7h + hh + ((H7l >>> 0) < (hl >>> 0) ? 1 : 0));
	        },

	        _doFinalize: function () {
	            // Shortcuts
	            var data = this._data;
	            var dataWords = data.words;

	            var nBitsTotal = this._nDataBytes * 8;
	            var nBitsLeft = data.sigBytes * 8;

	            // Add padding
	            dataWords[nBitsLeft >>> 5] |= 0x80 << (24 - nBitsLeft % 32);
	            dataWords[(((nBitsLeft + 128) >>> 10) << 5) + 30] = Math.floor(nBitsTotal / 0x100000000);
	            dataWords[(((nBitsLeft + 128) >>> 10) << 5) + 31] = nBitsTotal;
	            data.sigBytes = dataWords.length * 4;

	            // Hash final blocks
	            this._process();

	            // Convert hash to 32-bit word array before returning
	            var hash = this._hash.toX32();

	            // Return final computed hash
	            return hash;
	        },

	        clone: function () {
	            var clone = Hasher.clone.call(this);
	            clone._hash = this._hash.clone();

	            return clone;
	        },

	        blockSize: 1024/32
	    });

	    /**
	     * Shortcut function to the hasher's object interface.
	     *
	     * @param {WordArray|string} message The message to hash.
	     *
	     * @return {WordArray} The hash.
	     *
	     * @static
	     *
	     * @example
	     *
	     *     var hash = CryptoJS.SHA512('message');
	     *     var hash = CryptoJS.SHA512(wordArray);
	     */
	    C.SHA512 = Hasher._createHelper(SHA512);

	    /**
	     * Shortcut function to the HMAC's object interface.
	     *
	     * @param {WordArray|string} message The message to hash.
	     * @param {WordArray|string} key The secret key.
	     *
	     * @return {WordArray} The HMAC.
	     *
	     * @static
	     *
	     * @example
	     *
	     *     var hmac = CryptoJS.HmacSHA512(message, key);
	     */
	    C.HmacSHA512 = Hasher._createHmacHelper(SHA512);
	}());


	return CryptoJS.SHA512;

}));

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ceabbcbdffbefecfdceddfd = void 0;
/**
 * ceabbcbdffbefecfdceddfdJS
 *
 * Simplified AES cryptography for safer and easier encryption and decryption processes
 * of any JavaScript objects.
 **/
var crypto_js_1 = __webpack_require__(11);
/**
 * ceabbcbdffbefecfdceddfd
 *
 * @class
 */
var ceabbcbdffbefecfdceddfd = /** @class */ (function () {
    /**
     * Represent a ceabbcbdffbefecfdceddfd instance
     *
     * @constructor
     * @param	{string}	secret		The secret key for cryptographic process.
     */
    function ceabbcbdffbefecfdceddfd(secret) {
        if (secret === void 0) {
            throw new Error("ceabbcbdffbefecfdceddfd object MUST BE initialised with a SECRET KEY.");
        }
        this._dataBuffer = "";
        this._encoder = crypto_js_1.enc.Utf8;
        this._secret = crypto_js_1.SHA3(typeof secret === "string" ? secret : secret.toString());
        this._keySize = 256;
        this._iterations = 100;
    }
    ceabbcbdffbefecfdceddfd.sanitiseData = function (data) {
        if (data === void 0 || data === null) {
            throw new Error("There is no data provided. Process halted.");
        }
        var sanitised = typeof data === "object"
            ? JSON.stringify(data)
            : typeof data === "string" || typeof data === "number" || typeof data === "boolean"
                ? data.toString()
                : null;
        if (null === sanitised) {
            throw new Error("Invalid data type. Only object, string, number and boolean data types are allowed.");
        }
        return sanitised;
    };
    ceabbcbdffbefecfdceddfd.transform = function (src) {
        if (src.toLowerCase() === "true" || src.toLowerCase() === "false") {
            return src.toLowerCase() === "true";
        }
        try {
            return JSON.parse(src);
        }
        catch (jsonError) {
            return /^-?[d.]+(?:e-?d+)?$/.test(src) && !isNaN(parseFloat(src)) ? parseFloat(src) : src;
        }
    };
    Object.defineProperty(ceabbcbdffbefecfdceddfd, "encoders", {
        /**
         * Encoders
         *
         * Get Encoder instance available.
         *
         * @since		2017.10.16
         * @access		public
         *
         * @memberOf    ceabbcbdffbefecfdceddfd
         *
         * @see     WordArray
         *
         * @return  {object}  Returns object of Encoder instances.
         */
        get: function () {
            return __assign({ Default: crypto_js_1.enc.Utf8 }, crypto_js_1.enc);
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Generate Random
     *
     * Generate a random string or WordArray.
     *
     * @since		2017.10.16
     * @access		public
     *
     * @memberOf    ceabbcbdffbefecfdceddfd
     *
     * @see     WordArray
     *
     * @param   {number}    length      		The length of random to be generated.
     * @param   {boolean}   expectsWordArray	Set to true to return WordArray instance.
     * Default is false and return a string.
     *
     * @return  {string | WordArray}  Returns a random string or WordArray.
     */
    ceabbcbdffbefecfdceddfd.generateRandom = function (length, expectsWordArray) {
        if (length === void 0) { length = 128; }
        if (expectsWordArray === void 0) { expectsWordArray = false; }
        var random = crypto_js_1.lib.WordArray.random(length / 8);
        return expectsWordArray ? random : random.toString();
    };
    /**
     * Generate Random String
     *
     * Generate a random string
     *
     * @since		2020.05.09
     * @access		public
     *
     * @memberOf    ceabbcbdffbefecfdceddfd
     *
     * @see     WordArray
     *
     * @param   {number}    length      		The length of random to be generated.
     *
     * @return  {string | WordArray}  Returns a random string.
     */
    ceabbcbdffbefecfdceddfd.generateRandomString = function (length) {
        if (length === void 0) { length = 128; }
        return ceabbcbdffbefecfdceddfd.generateRandom(length, false);
    };
    /**
     * Generate Random Word Array
     *
     * Generate a random WordArray.
     *
     * @since		2020.05.09
     * @access		public
     *
     * @memberOf    ceabbcbdffbefecfdceddfd
     *
     * @see     WordArray
     *
     * @param   {number}    length      		The length of random to be generated.
     *
     * @return  {string | WordArray}  Returns a random WordArray.
     */
    ceabbcbdffbefecfdceddfd.generateRandomWordArray = function (length) {
        if (length === void 0) { length = 128; }
        return ceabbcbdffbefecfdceddfd.generateRandom(length, true);
    };
    ceabbcbdffbefecfdceddfd.prototype._decrypt = function () {
        if (this._dataBuffer.length <= 64) {
            throw new Error("Invalid cipher text. Decryption halted.");
        }
        var salt = crypto_js_1.enc.Hex.parse(this._dataBuffer.substr(0, 32));
        var initialVector = crypto_js_1.enc.Hex.parse(this._dataBuffer.substr(32, 32));
        var encrypted = this._dataBuffer.substring(64, this._dataBuffer.length - 64);
        var key = crypto_js_1.PBKDF2(this._secret.toString(), salt, {
            keySize: this._keySize / 32,
            iterations: this._iterations
        });
        var hashedCipherText = this._dataBuffer.substring(this._dataBuffer.length - 64);
        var cipherText = this._dataBuffer.substring(0, this._dataBuffer.length - 64);
        if (hashedCipherText != crypto_js_1.HmacSHA256(cipherText, key).toString()) {
            throw new Error("Invalid encrypted text received. Decryption halted.");
        }
        var decrypted = crypto_js_1.AES.decrypt(encrypted, key, {
            iv: initialVector,
            padding: crypto_js_1.pad.Pkcs7,
            mode: crypto_js_1.mode.CBC
        });
        return ceabbcbdffbefecfdceddfd.transform(decrypted.toString(ceabbcbdffbefecfdceddfd.encoders.Default));
    };
    ceabbcbdffbefecfdceddfd.prototype._encrypt = function () {
        var salt = ceabbcbdffbefecfdceddfd.generateRandom(128, true);
        var initialVector = ceabbcbdffbefecfdceddfd.generateRandom(128, true);
        var key = crypto_js_1.PBKDF2(this._secret.toString(), salt, {
            keySize: this._keySize / 32,
            iterations: this._iterations
        });
        var encrypted = crypto_js_1.AES.encrypt(this._dataBuffer, key, {
            iv: initialVector,
            padding: crypto_js_1.pad.Pkcs7,
            mode: crypto_js_1.mode.CBC
        });
        // Combining the encrypted string with salt and IV to form cipher-text
        var cipherText = salt.toString()
            + initialVector.toString()
            + encrypted.toString();
        // Generate authentication tag and append that to the cipher-text using the key derived from PBKDF2.
        // (Optional TODO: Include a module to generate authentication key. Possibly HKDF-SHA256.)
        var hashedCipherText = crypto_js_1.HmacSHA256(cipherText, key).toString();
        return cipherText + hashedCipherText;
    };
    ceabbcbdffbefecfdceddfd.prototype.decrypt = function (cipher, secondArg, thirdArg) {
        var _this = this;
        var setDecryptionOption = function (arg) {
            if (typeof arg !== "boolean")
                _this.setEncoder(arg);
        };
        try {
            if (cipher !== void 0) {
                this.update(cipher);
            }
            if (secondArg !== void 0) {
                setDecryptionOption(secondArg);
            }
            if (thirdArg !== void 0) {
                setDecryptionOption(thirdArg);
            }
            return this._decrypt();
        }
        catch (error) {
            throw error;
        }
    };
    ceabbcbdffbefecfdceddfd.prototype.encrypt = function (data) {
        try {
            if (data !== void 0) {
                this.update(data);
            }
            return this._encrypt();
        }
        catch (error) {
            throw error;
        }
    };
    /**
     * Decrypt Object
     *
     * Decrypt a encrypted string and try to convert it back to object.
     *
     * @since		2017.10.16
     * @access		public
     * @deprecated	Since version 2.0.0, use decrypt(cipher: CipherText) instead.
     *
     * @memberOf    ceabbcbdffbefecfdceddfd
     *
     * @see		decrypt
     *
     * @param   {string}	cipher		The encrypted string of the data.
     *
     * @return  {string}	The decrypted data of the encrypted string in the form
     * of object.
     */
    ceabbcbdffbefecfdceddfd.prototype.decryptObject = function (cipher) {
        return this.update(cipher).decrypt();
    };
    /**
     * Encrypt Object
     *
     * Encrypt an object.
     *
     * @since		2017.10.16
     * @access		public
     * @deprecated	Since version 2.0.0, use encrypt(data: PlainData) instead.
     *
     * @memberOf    ceabbcbdffbefecfdceddfd
     *
     * @see		encrypt
     *
     * @param   {object}	object		The object to be encrypted.
     *
     * @return  {string}	The encrypted string of the object.
     */
    ceabbcbdffbefecfdceddfd.prototype.encryptObject = function (object) {
        return this.update(object).encrypt();
    };
    /**
     * Append
     *
     * Append the data to be encrypted or decrypted.
     *
     * @since		2020.05.09
     * @access		public
     *
     * @memberOf    ceabbcbdffbefecfdceddfd
     *
     * @param   {object | string | number | boolean}	data	Data to be encrypted or decrypted.
     *
     * @return  {ceabbcbdffbefecfdceddfd}		Current ceabbcbdffbefecfdceddfd instance.
     */
    ceabbcbdffbefecfdceddfd.prototype.append = function (data) {
        try {
            this._dataBuffer = this._dataBuffer + ceabbcbdffbefecfdceddfd.sanitiseData(data);
            return this;
        }
        catch (error) {
            throw error;
        }
    };
    /**
     * Update
     *
     * Change data to be encrypted or decrypted.
     *
     * @since		2020.05.09
     * @access		public
     *
     * @memberOf    ceabbcbdffbefecfdceddfd
     *
     * @param   {object | string | number | boolean}	data	Data to be encrypted or decrypted.
     *
     * @return  {ceabbcbdffbefecfdceddfd}		Current ceabbcbdffbefecfdceddfd instance.
     */
    ceabbcbdffbefecfdceddfd.prototype.update = function (data) {
        try {
            this._dataBuffer = ceabbcbdffbefecfdceddfd.sanitiseData(data);
            return this;
        }
        catch (error) {
            throw error;
        }
    };
    /**
     * Set Encoder
     *
     * Change the default encoding type for the decryption process.
     *
     * @since		2020.05.09
     * @access		public
     *
     * @memberOf    ceabbcbdffbefecfdceddfd
     *
     * @param   {Encoder}	encoder		The new Encoder object.
     *
     * @return  {ceabbcbdffbefecfdceddfd}		Current ceabbcbdffbefecfdceddfd instance.
     */
    ceabbcbdffbefecfdceddfd.prototype.setEncoder = function (encoder) {
        /*
        * TODO: Encoding support is dropped at the moment, both for encryption
        *  and decryption. We should figure out how we have to implement encoding
        *  support in the simplest way possible.
        * */
        this._encoder = encoder;
        return this;
    };
    /**
     * Set Secret
     *
     * Change the secret key by setting a new one. By changing the secret key,
     * any encrypted string that encrypted by previous secret key will not be
     * able to decrypted, unless the secret key is set to the one used to
     * encrypt the data.
     *
     * @since		2017.10.16
     * @access		public
     *
     * @memberOf    ceabbcbdffbefecfdceddfd
     *
     * @param   {string}	secret		The new secret key as string.
     *
     * @return  {ceabbcbdffbefecfdceddfd}		Current ceabbcbdffbefecfdceddfd instance.
     */
    ceabbcbdffbefecfdceddfd.prototype.setSecret = function (secret) {
        this._secret = crypto_js_1.SHA3(typeof secret === "string" ? secret : secret.toString());
        return this;
    };
    return ceabbcbdffbefecfdceddfd;
}());
exports.ceabbcbdffbefecfdceddfd = ceabbcbdffbefecfdceddfd;
exports.default = ceabbcbdffbefecfdceddfd;


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

;(function (root, factory, undef) {
	if (true) {
		// CommonJS
		module.exports = exports = factory(__webpack_require__(0), __webpack_require__(5), __webpack_require__(12), __webpack_require__(13), __webpack_require__(3), __webpack_require__(4), __webpack_require__(6), __webpack_require__(8), __webpack_require__(14), __webpack_require__(9), __webpack_require__(15), __webpack_require__(16), __webpack_require__(17), __webpack_require__(7), __webpack_require__(18), __webpack_require__(2), __webpack_require__(1), __webpack_require__(19), __webpack_require__(20), __webpack_require__(21), __webpack_require__(22), __webpack_require__(23), __webpack_require__(24), __webpack_require__(25), __webpack_require__(26), __webpack_require__(27), __webpack_require__(28), __webpack_require__(29), __webpack_require__(30), __webpack_require__(31), __webpack_require__(32), __webpack_require__(33), __webpack_require__(34));
	}
	else {}
}(this, function (CryptoJS) {

	return CryptoJS;

}));

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

;(function (root, factory) {
	if (true) {
		// CommonJS
		module.exports = exports = factory(__webpack_require__(0));
	}
	else {}
}(this, function (CryptoJS) {

	(function () {
	    // Check if typed arrays are supported
	    if (typeof ArrayBuffer != 'function') {
	        return;
	    }

	    // Shortcuts
	    var C = CryptoJS;
	    var C_lib = C.lib;
	    var WordArray = C_lib.WordArray;

	    // Reference original init
	    var superInit = WordArray.init;

	    // Augment WordArray.init to handle typed arrays
	    var subInit = WordArray.init = function (typedArray) {
	        // Convert buffers to uint8
	        if (typedArray instanceof ArrayBuffer) {
	            typedArray = new Uint8Array(typedArray);
	        }

	        // Convert other array views to uint8
	        if (
	            typedArray instanceof Int8Array ||
	            (typeof Uint8ClampedArray !== "undefined" && typedArray instanceof Uint8ClampedArray) ||
	            typedArray instanceof Int16Array ||
	            typedArray instanceof Uint16Array ||
	            typedArray instanceof Int32Array ||
	            typedArray instanceof Uint32Array ||
	            typedArray instanceof Float32Array ||
	            typedArray instanceof Float64Array
	        ) {
	            typedArray = new Uint8Array(typedArray.buffer, typedArray.byteOffset, typedArray.byteLength);
	        }

	        // Handle Uint8Array
	        if (typedArray instanceof Uint8Array) {
	            // Shortcut
	            var typedArrayByteLength = typedArray.byteLength;

	            // Extract bytes
	            var words = [];
	            for (var i = 0; i < typedArrayByteLength; i++) {
	                words[i >>> 2] |= typedArray[i] << (24 - (i % 4) * 8);
	            }

	            // Initialize this word array
	            superInit.call(this, words, typedArrayByteLength);
	        } else {
	            // Else call normal init
	            superInit.apply(this, arguments);
	        }
	    };

	    subInit.prototype = WordArray;
	}());


	return CryptoJS.lib.WordArray;

}));

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

;(function (root, factory) {
	if (true) {
		// CommonJS
		module.exports = exports = factory(__webpack_require__(0));
	}
	else {}
}(this, function (CryptoJS) {

	(function () {
	    // Shortcuts
	    var C = CryptoJS;
	    var C_lib = C.lib;
	    var WordArray = C_lib.WordArray;
	    var C_enc = C.enc;

	    /**
	     * UTF-16 BE encoding strategy.
	     */
	    var Utf16BE = C_enc.Utf16 = C_enc.Utf16BE = {
	        /**
	         * Converts a word array to a UTF-16 BE string.
	         *
	         * @param {WordArray} wordArray The word array.
	         *
	         * @return {string} The UTF-16 BE string.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var utf16String = CryptoJS.enc.Utf16.stringify(wordArray);
	         */
	        stringify: function (wordArray) {
	            // Shortcuts
	            var words = wordArray.words;
	            var sigBytes = wordArray.sigBytes;

	            // Convert
	            var utf16Chars = [];
	            for (var i = 0; i < sigBytes; i += 2) {
	                var codePoint = (words[i >>> 2] >>> (16 - (i % 4) * 8)) & 0xffff;
	                utf16Chars.push(String.fromCharCode(codePoint));
	            }

	            return utf16Chars.join('');
	        },

	        /**
	         * Converts a UTF-16 BE string to a word array.
	         *
	         * @param {string} utf16Str The UTF-16 BE string.
	         *
	         * @return {WordArray} The word array.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var wordArray = CryptoJS.enc.Utf16.parse(utf16String);
	         */
	        parse: function (utf16Str) {
	            // Shortcut
	            var utf16StrLength = utf16Str.length;

	            // Convert
	            var words = [];
	            for (var i = 0; i < utf16StrLength; i++) {
	                words[i >>> 1] |= utf16Str.charCodeAt(i) << (16 - (i % 2) * 16);
	            }

	            return WordArray.create(words, utf16StrLength * 2);
	        }
	    };

	    /**
	     * UTF-16 LE encoding strategy.
	     */
	    C_enc.Utf16LE = {
	        /**
	         * Converts a word array to a UTF-16 LE string.
	         *
	         * @param {WordArray} wordArray The word array.
	         *
	         * @return {string} The UTF-16 LE string.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var utf16Str = CryptoJS.enc.Utf16LE.stringify(wordArray);
	         */
	        stringify: function (wordArray) {
	            // Shortcuts
	            var words = wordArray.words;
	            var sigBytes = wordArray.sigBytes;

	            // Convert
	            var utf16Chars = [];
	            for (var i = 0; i < sigBytes; i += 2) {
	                var codePoint = swapEndian((words[i >>> 2] >>> (16 - (i % 4) * 8)) & 0xffff);
	                utf16Chars.push(String.fromCharCode(codePoint));
	            }

	            return utf16Chars.join('');
	        },

	        /**
	         * Converts a UTF-16 LE string to a word array.
	         *
	         * @param {string} utf16Str The UTF-16 LE string.
	         *
	         * @return {WordArray} The word array.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var wordArray = CryptoJS.enc.Utf16LE.parse(utf16Str);
	         */
	        parse: function (utf16Str) {
	            // Shortcut
	            var utf16StrLength = utf16Str.length;

	            // Convert
	            var words = [];
	            for (var i = 0; i < utf16StrLength; i++) {
	                words[i >>> 1] |= swapEndian(utf16Str.charCodeAt(i) << (16 - (i % 2) * 16));
	            }

	            return WordArray.create(words, utf16StrLength * 2);
	        }
	    };

	    function swapEndian(word) {
	        return ((word << 8) & 0xff00ff00) | ((word >>> 8) & 0x00ff00ff);
	    }
	}());


	return CryptoJS.enc.Utf16;

}));

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

;(function (root, factory, undef) {
	if (true) {
		// CommonJS
		module.exports = exports = factory(__webpack_require__(0), __webpack_require__(8));
	}
	else {}
}(this, function (CryptoJS) {

	(function () {
	    // Shortcuts
	    var C = CryptoJS;
	    var C_lib = C.lib;
	    var WordArray = C_lib.WordArray;
	    var C_algo = C.algo;
	    var SHA256 = C_algo.SHA256;

	    /**
	     * SHA-224 hash algorithm.
	     */
	    var SHA224 = C_algo.SHA224 = SHA256.extend({
	        _doReset: function () {
	            this._hash = new WordArray.init([
	                0xc1059ed8, 0x367cd507, 0x3070dd17, 0xf70e5939,
	                0xffc00b31, 0x68581511, 0x64f98fa7, 0xbefa4fa4
	            ]);
	        },

	        _doFinalize: function () {
	            var hash = SHA256._doFinalize.call(this);

	            hash.sigBytes -= 4;

	            return hash;
	        }
	    });

	    /**
	     * Shortcut function to the hasher's object interface.
	     *
	     * @param {WordArray|string} message The message to hash.
	     *
	     * @return {WordArray} The hash.
	     *
	     * @static
	     *
	     * @example
	     *
	     *     var hash = CryptoJS.SHA224('message');
	     *     var hash = CryptoJS.SHA224(wordArray);
	     */
	    C.SHA224 = SHA256._createHelper(SHA224);

	    /**
	     * Shortcut function to the HMAC's object interface.
	     *
	     * @param {WordArray|string} message The message to hash.
	     * @param {WordArray|string} key The secret key.
	     *
	     * @return {WordArray} The HMAC.
	     *
	     * @static
	     *
	     * @example
	     *
	     *     var hmac = CryptoJS.HmacSHA224(message, key);
	     */
	    C.HmacSHA224 = SHA256._createHmacHelper(SHA224);
	}());


	return CryptoJS.SHA224;

}));

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

;(function (root, factory, undef) {
	if (true) {
		// CommonJS
		module.exports = exports = factory(__webpack_require__(0), __webpack_require__(5), __webpack_require__(9));
	}
	else {}
}(this, function (CryptoJS) {

	(function () {
	    // Shortcuts
	    var C = CryptoJS;
	    var C_x64 = C.x64;
	    var X64Word = C_x64.Word;
	    var X64WordArray = C_x64.WordArray;
	    var C_algo = C.algo;
	    var SHA512 = C_algo.SHA512;

	    /**
	     * SHA-384 hash algorithm.
	     */
	    var SHA384 = C_algo.SHA384 = SHA512.extend({
	        _doReset: function () {
	            this._hash = new X64WordArray.init([
	                new X64Word.init(0xcbbb9d5d, 0xc1059ed8), new X64Word.init(0x629a292a, 0x367cd507),
	                new X64Word.init(0x9159015a, 0x3070dd17), new X64Word.init(0x152fecd8, 0xf70e5939),
	                new X64Word.init(0x67332667, 0xffc00b31), new X64Word.init(0x8eb44a87, 0x68581511),
	                new X64Word.init(0xdb0c2e0d, 0x64f98fa7), new X64Word.init(0x47b5481d, 0xbefa4fa4)
	            ]);
	        },

	        _doFinalize: function () {
	            var hash = SHA512._doFinalize.call(this);

	            hash.sigBytes -= 16;

	            return hash;
	        }
	    });

	    /**
	     * Shortcut function to the hasher's object interface.
	     *
	     * @param {WordArray|string} message The message to hash.
	     *
	     * @return {WordArray} The hash.
	     *
	     * @static
	     *
	     * @example
	     *
	     *     var hash = CryptoJS.SHA384('message');
	     *     var hash = CryptoJS.SHA384(wordArray);
	     */
	    C.SHA384 = SHA512._createHelper(SHA384);

	    /**
	     * Shortcut function to the HMAC's object interface.
	     *
	     * @param {WordArray|string} message The message to hash.
	     * @param {WordArray|string} key The secret key.
	     *
	     * @return {WordArray} The HMAC.
	     *
	     * @static
	     *
	     * @example
	     *
	     *     var hmac = CryptoJS.HmacSHA384(message, key);
	     */
	    C.HmacSHA384 = SHA512._createHmacHelper(SHA384);
	}());


	return CryptoJS.SHA384;

}));

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

;(function (root, factory, undef) {
	if (true) {
		// CommonJS
		module.exports = exports = factory(__webpack_require__(0), __webpack_require__(5));
	}
	else {}
}(this, function (CryptoJS) {

	(function (Math) {
	    // Shortcuts
	    var C = CryptoJS;
	    var C_lib = C.lib;
	    var WordArray = C_lib.WordArray;
	    var Hasher = C_lib.Hasher;
	    var C_x64 = C.x64;
	    var X64Word = C_x64.Word;
	    var C_algo = C.algo;

	    // Constants tables
	    var RHO_OFFSETS = [];
	    var PI_INDEXES  = [];
	    var ROUND_CONSTANTS = [];

	    // Compute Constants
	    (function () {
	        // Compute rho offset constants
	        var x = 1, y = 0;
	        for (var t = 0; t < 24; t++) {
	            RHO_OFFSETS[x + 5 * y] = ((t + 1) * (t + 2) / 2) % 64;

	            var newX = y % 5;
	            var newY = (2 * x + 3 * y) % 5;
	            x = newX;
	            y = newY;
	        }

	        // Compute pi index constants
	        for (var x = 0; x < 5; x++) {
	            for (var y = 0; y < 5; y++) {
	                PI_INDEXES[x + 5 * y] = y + ((2 * x + 3 * y) % 5) * 5;
	            }
	        }

	        // Compute round constants
	        var LFSR = 0x01;
	        for (var i = 0; i < 24; i++) {
	            var roundConstantMsw = 0;
	            var roundConstantLsw = 0;

	            for (var j = 0; j < 7; j++) {
	                if (LFSR & 0x01) {
	                    var bitPosition = (1 << j) - 1;
	                    if (bitPosition < 32) {
	                        roundConstantLsw ^= 1 << bitPosition;
	                    } else /* if (bitPosition >= 32) */ {
	                        roundConstantMsw ^= 1 << (bitPosition - 32);
	                    }
	                }

	                // Compute next LFSR
	                if (LFSR & 0x80) {
	                    // Primitive polynomial over GF(2): x^8 + x^6 + x^5 + x^4 + 1
	                    LFSR = (LFSR << 1) ^ 0x71;
	                } else {
	                    LFSR <<= 1;
	                }
	            }

	            ROUND_CONSTANTS[i] = X64Word.create(roundConstantMsw, roundConstantLsw);
	        }
	    }());

	    // Reusable objects for temporary values
	    var T = [];
	    (function () {
	        for (var i = 0; i < 25; i++) {
	            T[i] = X64Word.create();
	        }
	    }());

	    /**
	     * SHA-3 hash algorithm.
	     */
	    var SHA3 = C_algo.SHA3 = Hasher.extend({
	        /**
	         * Configuration options.
	         *
	         * @property {number} outputLength
	         *   The desired number of bits in the output hash.
	         *   Only values permitted are: 224, 256, 384, 512.
	         *   Default: 512
	         */
	        cfg: Hasher.cfg.extend({
	            outputLength: 512
	        }),

	        _doReset: function () {
	            var state = this._state = []
	            for (var i = 0; i < 25; i++) {
	                state[i] = new X64Word.init();
	            }

	            this.blockSize = (1600 - 2 * this.cfg.outputLength) / 32;
	        },

	        _doProcessBlock: function (M, offset) {
	            // Shortcuts
	            var state = this._state;
	            var nBlockSizeLanes = this.blockSize / 2;

	            // Absorb
	            for (var i = 0; i < nBlockSizeLanes; i++) {
	                // Shortcuts
	                var M2i  = M[offset + 2 * i];
	                var M2i1 = M[offset + 2 * i + 1];

	                // Swap endian
	                M2i = (
	                    (((M2i << 8)  | (M2i >>> 24)) & 0x00ff00ff) |
	                    (((M2i << 24) | (M2i >>> 8))  & 0xff00ff00)
	                );
	                M2i1 = (
	                    (((M2i1 << 8)  | (M2i1 >>> 24)) & 0x00ff00ff) |
	                    (((M2i1 << 24) | (M2i1 >>> 8))  & 0xff00ff00)
	                );

	                // Absorb message into state
	                var lane = state[i];
	                lane.high ^= M2i1;
	                lane.low  ^= M2i;
	            }

	            // Rounds
	            for (var round = 0; round < 24; round++) {
	                // Theta
	                for (var x = 0; x < 5; x++) {
	                    // Mix column lanes
	                    var tMsw = 0, tLsw = 0;
	                    for (var y = 0; y < 5; y++) {
	                        var lane = state[x + 5 * y];
	                        tMsw ^= lane.high;
	                        tLsw ^= lane.low;
	                    }

	                    // Temporary values
	                    var Tx = T[x];
	                    Tx.high = tMsw;
	                    Tx.low  = tLsw;
	                }
	                for (var x = 0; x < 5; x++) {
	                    // Shortcuts
	                    var Tx4 = T[(x + 4) % 5];
	                    var Tx1 = T[(x + 1) % 5];
	                    var Tx1Msw = Tx1.high;
	                    var Tx1Lsw = Tx1.low;

	                    // Mix surrounding columns
	                    var tMsw = Tx4.high ^ ((Tx1Msw << 1) | (Tx1Lsw >>> 31));
	                    var tLsw = Tx4.low  ^ ((Tx1Lsw << 1) | (Tx1Msw >>> 31));
	                    for (var y = 0; y < 5; y++) {
	                        var lane = state[x + 5 * y];
	                        lane.high ^= tMsw;
	                        lane.low  ^= tLsw;
	                    }
	                }

	                // Rho Pi
	                for (var laneIndex = 1; laneIndex < 25; laneIndex++) {
	                    // Shortcuts
	                    var lane = state[laneIndex];
	                    var laneMsw = lane.high;
	                    var laneLsw = lane.low;
	                    var rhoOffset = RHO_OFFSETS[laneIndex];

	                    // Rotate lanes
	                    if (rhoOffset < 32) {
	                        var tMsw = (laneMsw << rhoOffset) | (laneLsw >>> (32 - rhoOffset));
	                        var tLsw = (laneLsw << rhoOffset) | (laneMsw >>> (32 - rhoOffset));
	                    } else /* if (rhoOffset >= 32) */ {
	                        var tMsw = (laneLsw << (rhoOffset - 32)) | (laneMsw >>> (64 - rhoOffset));
	                        var tLsw = (laneMsw << (rhoOffset - 32)) | (laneLsw >>> (64 - rhoOffset));
	                    }

	                    // Transpose lanes
	                    var TPiLane = T[PI_INDEXES[laneIndex]];
	                    TPiLane.high = tMsw;
	                    TPiLane.low  = tLsw;
	                }

	                // Rho pi at x = y = 0
	                var T0 = T[0];
	                var state0 = state[0];
	                T0.high = state0.high;
	                T0.low  = state0.low;

	                // Chi
	                for (var x = 0; x < 5; x++) {
	                    for (var y = 0; y < 5; y++) {
	                        // Shortcuts
	                        var laneIndex = x + 5 * y;
	                        var lane = state[laneIndex];
	                        var TLane = T[laneIndex];
	                        var Tx1Lane = T[((x + 1) % 5) + 5 * y];
	                        var Tx2Lane = T[((x + 2) % 5) + 5 * y];

	                        // Mix rows
	                        lane.high = TLane.high ^ (~Tx1Lane.high & Tx2Lane.high);
	                        lane.low  = TLane.low  ^ (~Tx1Lane.low  & Tx2Lane.low);
	                    }
	                }

	                // Iota
	                var lane = state[0];
	                var roundConstant = ROUND_CONSTANTS[round];
	                lane.high ^= roundConstant.high;
	                lane.low  ^= roundConstant.low;;
	            }
	        },

	        _doFinalize: function () {
	            // Shortcuts
	            var data = this._data;
	            var dataWords = data.words;
	            var nBitsTotal = this._nDataBytes * 8;
	            var nBitsLeft = data.sigBytes * 8;
	            var blockSizeBits = this.blockSize * 32;

	            // Add padding
	            dataWords[nBitsLeft >>> 5] |= 0x1 << (24 - nBitsLeft % 32);
	            dataWords[((Math.ceil((nBitsLeft + 1) / blockSizeBits) * blockSizeBits) >>> 5) - 1] |= 0x80;
	            data.sigBytes = dataWords.length * 4;

	            // Hash final blocks
	            this._process();

	            // Shortcuts
	            var state = this._state;
	            var outputLengthBytes = this.cfg.outputLength / 8;
	            var outputLengthLanes = outputLengthBytes / 8;

	            // Squeeze
	            var hashWords = [];
	            for (var i = 0; i < outputLengthLanes; i++) {
	                // Shortcuts
	                var lane = state[i];
	                var laneMsw = lane.high;
	                var laneLsw = lane.low;

	                // Swap endian
	                laneMsw = (
	                    (((laneMsw << 8)  | (laneMsw >>> 24)) & 0x00ff00ff) |
	                    (((laneMsw << 24) | (laneMsw >>> 8))  & 0xff00ff00)
	                );
	                laneLsw = (
	                    (((laneLsw << 8)  | (laneLsw >>> 24)) & 0x00ff00ff) |
	                    (((laneLsw << 24) | (laneLsw >>> 8))  & 0xff00ff00)
	                );

	                // Squeeze state to retrieve hash
	                hashWords.push(laneLsw);
	                hashWords.push(laneMsw);
	            }

	            // Return final computed hash
	            return new WordArray.init(hashWords, outputLengthBytes);
	        },

	        clone: function () {
	            var clone = Hasher.clone.call(this);

	            var state = clone._state = this._state.slice(0);
	            for (var i = 0; i < 25; i++) {
	                state[i] = state[i].clone();
	            }

	            return clone;
	        }
	    });

	    /**
	     * Shortcut function to the hasher's object interface.
	     *
	     * @param {WordArray|string} message The message to hash.
	     *
	     * @return {WordArray} The hash.
	     *
	     * @static
	     *
	     * @example
	     *
	     *     var hash = CryptoJS.SHA3('message');
	     *     var hash = CryptoJS.SHA3(wordArray);
	     */
	    C.SHA3 = Hasher._createHelper(SHA3);

	    /**
	     * Shortcut function to the HMAC's object interface.
	     *
	     * @param {WordArray|string} message The message to hash.
	     * @param {WordArray|string} key The secret key.
	     *
	     * @return {WordArray} The HMAC.
	     *
	     * @static
	     *
	     * @example
	     *
	     *     var hmac = CryptoJS.HmacSHA3(message, key);
	     */
	    C.HmacSHA3 = Hasher._createHmacHelper(SHA3);
	}(Math));


	return CryptoJS.SHA3;

}));

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

;(function (root, factory) {
	if (true) {
		// CommonJS
		module.exports = exports = factory(__webpack_require__(0));
	}
	else {}
}(this, function (CryptoJS) {

	/** @preserve
	(c) 2012 by Cédric Mesnil. All rights reserved.

	Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:

	    - Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
	    - Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.

	THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
	*/

	(function (Math) {
	    // Shortcuts
	    var C = CryptoJS;
	    var C_lib = C.lib;
	    var WordArray = C_lib.WordArray;
	    var Hasher = C_lib.Hasher;
	    var C_algo = C.algo;

	    // Constants table
	    var _zl = WordArray.create([
	        0,  1,  2,  3,  4,  5,  6,  7,  8,  9, 10, 11, 12, 13, 14, 15,
	        7,  4, 13,  1, 10,  6, 15,  3, 12,  0,  9,  5,  2, 14, 11,  8,
	        3, 10, 14,  4,  9, 15,  8,  1,  2,  7,  0,  6, 13, 11,  5, 12,
	        1,  9, 11, 10,  0,  8, 12,  4, 13,  3,  7, 15, 14,  5,  6,  2,
	        4,  0,  5,  9,  7, 12,  2, 10, 14,  1,  3,  8, 11,  6, 15, 13]);
	    var _zr = WordArray.create([
	        5, 14,  7,  0,  9,  2, 11,  4, 13,  6, 15,  8,  1, 10,  3, 12,
	        6, 11,  3,  7,  0, 13,  5, 10, 14, 15,  8, 12,  4,  9,  1,  2,
	        15,  5,  1,  3,  7, 14,  6,  9, 11,  8, 12,  2, 10,  0,  4, 13,
	        8,  6,  4,  1,  3, 11, 15,  0,  5, 12,  2, 13,  9,  7, 10, 14,
	        12, 15, 10,  4,  1,  5,  8,  7,  6,  2, 13, 14,  0,  3,  9, 11]);
	    var _sl = WordArray.create([
	         11, 14, 15, 12,  5,  8,  7,  9, 11, 13, 14, 15,  6,  7,  9,  8,
	        7, 6,   8, 13, 11,  9,  7, 15,  7, 12, 15,  9, 11,  7, 13, 12,
	        11, 13,  6,  7, 14,  9, 13, 15, 14,  8, 13,  6,  5, 12,  7,  5,
	          11, 12, 14, 15, 14, 15,  9,  8,  9, 14,  5,  6,  8,  6,  5, 12,
	        9, 15,  5, 11,  6,  8, 13, 12,  5, 12, 13, 14, 11,  8,  5,  6 ]);
	    var _sr = WordArray.create([
	        8,  9,  9, 11, 13, 15, 15,  5,  7,  7,  8, 11, 14, 14, 12,  6,
	        9, 13, 15,  7, 12,  8,  9, 11,  7,  7, 12,  7,  6, 15, 13, 11,
	        9,  7, 15, 11,  8,  6,  6, 14, 12, 13,  5, 14, 13, 13,  7,  5,
	        15,  5,  8, 11, 14, 14,  6, 14,  6,  9, 12,  9, 12,  5, 15,  8,
	        8,  5, 12,  9, 12,  5, 14,  6,  8, 13,  6,  5, 15, 13, 11, 11 ]);

	    var _hl =  WordArray.create([ 0x00000000, 0x5A827999, 0x6ED9EBA1, 0x8F1BBCDC, 0xA953FD4E]);
	    var _hr =  WordArray.create([ 0x50A28BE6, 0x5C4DD124, 0x6D703EF3, 0x7A6D76E9, 0x00000000]);

	    /**
	     * RIPEMD160 hash algorithm.
	     */
	    var RIPEMD160 = C_algo.RIPEMD160 = Hasher.extend({
	        _doReset: function () {
	            this._hash  = WordArray.create([0x67452301, 0xEFCDAB89, 0x98BADCFE, 0x10325476, 0xC3D2E1F0]);
	        },

	        _doProcessBlock: function (M, offset) {

	            // Swap endian
	            for (var i = 0; i < 16; i++) {
	                // Shortcuts
	                var offset_i = offset + i;
	                var M_offset_i = M[offset_i];

	                // Swap
	                M[offset_i] = (
	                    (((M_offset_i << 8)  | (M_offset_i >>> 24)) & 0x00ff00ff) |
	                    (((M_offset_i << 24) | (M_offset_i >>> 8))  & 0xff00ff00)
	                );
	            }
	            // Shortcut
	            var H  = this._hash.words;
	            var hl = _hl.words;
	            var hr = _hr.words;
	            var zl = _zl.words;
	            var zr = _zr.words;
	            var sl = _sl.words;
	            var sr = _sr.words;

	            // Working variables
	            var al, bl, cl, dl, el;
	            var ar, br, cr, dr, er;

	            ar = al = H[0];
	            br = bl = H[1];
	            cr = cl = H[2];
	            dr = dl = H[3];
	            er = el = H[4];
	            // Computation
	            var t;
	            for (var i = 0; i < 80; i += 1) {
	                t = (al +  M[offset+zl[i]])|0;
	                if (i<16){
		            t +=  f1(bl,cl,dl) + hl[0];
	                } else if (i<32) {
		            t +=  f2(bl,cl,dl) + hl[1];
	                } else if (i<48) {
		            t +=  f3(bl,cl,dl) + hl[2];
	                } else if (i<64) {
		            t +=  f4(bl,cl,dl) + hl[3];
	                } else {// if (i<80) {
		            t +=  f5(bl,cl,dl) + hl[4];
	                }
	                t = t|0;
	                t =  rotl(t,sl[i]);
	                t = (t+el)|0;
	                al = el;
	                el = dl;
	                dl = rotl(cl, 10);
	                cl = bl;
	                bl = t;

	                t = (ar + M[offset+zr[i]])|0;
	                if (i<16){
		            t +=  f5(br,cr,dr) + hr[0];
	                } else if (i<32) {
		            t +=  f4(br,cr,dr) + hr[1];
	                } else if (i<48) {
		            t +=  f3(br,cr,dr) + hr[2];
	                } else if (i<64) {
		            t +=  f2(br,cr,dr) + hr[3];
	                } else {// if (i<80) {
		            t +=  f1(br,cr,dr) + hr[4];
	                }
	                t = t|0;
	                t =  rotl(t,sr[i]) ;
	                t = (t+er)|0;
	                ar = er;
	                er = dr;
	                dr = rotl(cr, 10);
	                cr = br;
	                br = t;
	            }
	            // Intermediate hash value
	            t    = (H[1] + cl + dr)|0;
	            H[1] = (H[2] + dl + er)|0;
	            H[2] = (H[3] + el + ar)|0;
	            H[3] = (H[4] + al + br)|0;
	            H[4] = (H[0] + bl + cr)|0;
	            H[0] =  t;
	        },

	        _doFinalize: function () {
	            // Shortcuts
	            var data = this._data;
	            var dataWords = data.words;

	            var nBitsTotal = this._nDataBytes * 8;
	            var nBitsLeft = data.sigBytes * 8;

	            // Add padding
	            dataWords[nBitsLeft >>> 5] |= 0x80 << (24 - nBitsLeft % 32);
	            dataWords[(((nBitsLeft + 64) >>> 9) << 4) + 14] = (
	                (((nBitsTotal << 8)  | (nBitsTotal >>> 24)) & 0x00ff00ff) |
	                (((nBitsTotal << 24) | (nBitsTotal >>> 8))  & 0xff00ff00)
	            );
	            data.sigBytes = (dataWords.length + 1) * 4;

	            // Hash final blocks
	            this._process();

	            // Shortcuts
	            var hash = this._hash;
	            var H = hash.words;

	            // Swap endian
	            for (var i = 0; i < 5; i++) {
	                // Shortcut
	                var H_i = H[i];

	                // Swap
	                H[i] = (((H_i << 8)  | (H_i >>> 24)) & 0x00ff00ff) |
	                       (((H_i << 24) | (H_i >>> 8))  & 0xff00ff00);
	            }

	            // Return final computed hash
	            return hash;
	        },

	        clone: function () {
	            var clone = Hasher.clone.call(this);
	            clone._hash = this._hash.clone();

	            return clone;
	        }
	    });


	    function f1(x, y, z) {
	        return ((x) ^ (y) ^ (z));

	    }

	    function f2(x, y, z) {
	        return (((x)&(y)) | ((~x)&(z)));
	    }

	    function f3(x, y, z) {
	        return (((x) | (~(y))) ^ (z));
	    }

	    function f4(x, y, z) {
	        return (((x) & (z)) | ((y)&(~(z))));
	    }

	    function f5(x, y, z) {
	        return ((x) ^ ((y) |(~(z))));

	    }

	    function rotl(x,n) {
	        return (x<<n) | (x>>>(32-n));
	    }


	    /**
	     * Shortcut function to the hasher's object interface.
	     *
	     * @param {WordArray|string} message The message to hash.
	     *
	     * @return {WordArray} The hash.
	     *
	     * @static
	     *
	     * @example
	     *
	     *     var hash = CryptoJS.RIPEMD160('message');
	     *     var hash = CryptoJS.RIPEMD160(wordArray);
	     */
	    C.RIPEMD160 = Hasher._createHelper(RIPEMD160);

	    /**
	     * Shortcut function to the HMAC's object interface.
	     *
	     * @param {WordArray|string} message The message to hash.
	     * @param {WordArray|string} key The secret key.
	     *
	     * @return {WordArray} The HMAC.
	     *
	     * @static
	     *
	     * @example
	     *
	     *     var hmac = CryptoJS.HmacRIPEMD160(message, key);
	     */
	    C.HmacRIPEMD160 = Hasher._createHmacHelper(RIPEMD160);
	}(Math));


	return CryptoJS.RIPEMD160;

}));

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

;(function (root, factory, undef) {
	if (true) {
		// CommonJS
		module.exports = exports = factory(__webpack_require__(0), __webpack_require__(6), __webpack_require__(7));
	}
	else {}
}(this, function (CryptoJS) {

	(function () {
	    // Shortcuts
	    var C = CryptoJS;
	    var C_lib = C.lib;
	    var Base = C_lib.Base;
	    var WordArray = C_lib.WordArray;
	    var C_algo = C.algo;
	    var SHA1 = C_algo.SHA1;
	    var HMAC = C_algo.HMAC;

	    /**
	     * Password-Based Key Derivation Function 2 algorithm.
	     */
	    var PBKDF2 = C_algo.PBKDF2 = Base.extend({
	        /**
	         * Configuration options.
	         *
	         * @property {number} keySize The key size in words to generate. Default: 4 (128 bits)
	         * @property {Hasher} hasher The hasher to use. Default: SHA1
	         * @property {number} iterations The number of iterations to perform. Default: 1
	         */
	        cfg: Base.extend({
	            keySize: 128/32,
	            hasher: SHA1,
	            iterations: 1
	        }),

	        /**
	         * Initializes a newly created key derivation function.
	         *
	         * @param {Object} cfg (Optional) The configuration options to use for the derivation.
	         *
	         * @example
	         *
	         *     var kdf = CryptoJS.algo.PBKDF2.create();
	         *     var kdf = CryptoJS.algo.PBKDF2.create({ keySize: 8 });
	         *     var kdf = CryptoJS.algo.PBKDF2.create({ keySize: 8, iterations: 1000 });
	         */
	        init: function (cfg) {
	            this.cfg = this.cfg.extend(cfg);
	        },

	        /**
	         * Computes the Password-Based Key Derivation Function 2.
	         *
	         * @param {WordArray|string} password The password.
	         * @param {WordArray|string} salt A salt.
	         *
	         * @return {WordArray} The derived key.
	         *
	         * @example
	         *
	         *     var key = kdf.compute(password, salt);
	         */
	        compute: function (password, salt) {
	            // Shortcut
	            var cfg = this.cfg;

	            // Init HMAC
	            var hmac = HMAC.create(cfg.hasher, password);

	            // Initial values
	            var derivedKey = WordArray.create();
	            var blockIndex = WordArray.create([0x00000001]);

	            // Shortcuts
	            var derivedKeyWords = derivedKey.words;
	            var blockIndexWords = blockIndex.words;
	            var keySize = cfg.keySize;
	            var iterations = cfg.iterations;

	            // Generate key
	            while (derivedKeyWords.length < keySize) {
	                var block = hmac.update(salt).finalize(blockIndex);
	                hmac.reset();

	                // Shortcuts
	                var blockWords = block.words;
	                var blockWordsLength = blockWords.length;

	                // Iterations
	                var intermediate = block;
	                for (var i = 1; i < iterations; i++) {
	                    intermediate = hmac.finalize(intermediate);
	                    hmac.reset();

	                    // Shortcut
	                    var intermediateWords = intermediate.words;

	                    // XOR intermediate with block
	                    for (var j = 0; j < blockWordsLength; j++) {
	                        blockWords[j] ^= intermediateWords[j];
	                    }
	                }

	                derivedKey.concat(block);
	                blockIndexWords[0]++;
	            }
	            derivedKey.sigBytes = keySize * 4;

	            return derivedKey;
	        }
	    });

	    /**
	     * Computes the Password-Based Key Derivation Function 2.
	     *
	     * @param {WordArray|string} password The password.
	     * @param {WordArray|string} salt A salt.
	     * @param {Object} cfg (Optional) The configuration options to use for this computation.
	     *
	     * @return {WordArray} The derived key.
	     *
	     * @static
	     *
	     * @example
	     *
	     *     var key = CryptoJS.PBKDF2(password, salt);
	     *     var key = CryptoJS.PBKDF2(password, salt, { keySize: 8 });
	     *     var key = CryptoJS.PBKDF2(password, salt, { keySize: 8, iterations: 1000 });
	     */
	    C.PBKDF2 = function (password, salt, cfg) {
	        return PBKDF2.create(cfg).compute(password, salt);
	    };
	}());


	return CryptoJS.PBKDF2;

}));

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

;(function (root, factory, undef) {
	if (true) {
		// CommonJS
		module.exports = exports = factory(__webpack_require__(0), __webpack_require__(1));
	}
	else {}
}(this, function (CryptoJS) {

	/**
	 * Cipher Feedback block mode.
	 */
	CryptoJS.mode.CFB = (function () {
	    var CFB = CryptoJS.lib.BlockCipherMode.extend();

	    CFB.Encryptor = CFB.extend({
	        processBlock: function (words, offset) {
	            // Shortcuts
	            var cipher = this._cipher;
	            var blockSize = cipher.blockSize;

	            generateKeystreamAndEncrypt.call(this, words, offset, blockSize, cipher);

	            // Remember this block to use with next block
	            this._prevBlock = words.slice(offset, offset + blockSize);
	        }
	    });

	    CFB.Decryptor = CFB.extend({
	        processBlock: function (words, offset) {
	            // Shortcuts
	            var cipher = this._cipher;
	            var blockSize = cipher.blockSize;

	            // Remember this block to use with next block
	            var thisBlock = words.slice(offset, offset + blockSize);

	            generateKeystreamAndEncrypt.call(this, words, offset, blockSize, cipher);

	            // This block becomes the previous block
	            this._prevBlock = thisBlock;
	        }
	    });

	    function generateKeystreamAndEncrypt(words, offset, blockSize, cipher) {
	        // Shortcut
	        var iv = this._iv;

	        // Generate keystream
	        if (iv) {
	            var keystream = iv.slice(0);

	            // Remove IV for subsequent blocks
	            this._iv = undefined;
	        } else {
	            var keystream = this._prevBlock;
	        }
	        cipher.encryptBlock(keystream, 0);

	        // Encrypt
	        for (var i = 0; i < blockSize; i++) {
	            words[offset + i] ^= keystream[i];
	        }
	    }

	    return CFB;
	}());


	return CryptoJS.mode.CFB;

}));

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

;(function (root, factory, undef) {
	if (true) {
		// CommonJS
		module.exports = exports = factory(__webpack_require__(0), __webpack_require__(1));
	}
	else {}
}(this, function (CryptoJS) {

	/**
	 * Counter block mode.
	 */
	CryptoJS.mode.CTR = (function () {
	    var CTR = CryptoJS.lib.BlockCipherMode.extend();

	    var Encryptor = CTR.Encryptor = CTR.extend({
	        processBlock: function (words, offset) {
	            // Shortcuts
	            var cipher = this._cipher
	            var blockSize = cipher.blockSize;
	            var iv = this._iv;
	            var counter = this._counter;

	            // Generate keystream
	            if (iv) {
	                counter = this._counter = iv.slice(0);

	                // Remove IV for subsequent blocks
	                this._iv = undefined;
	            }
	            var keystream = counter.slice(0);
	            cipher.encryptBlock(keystream, 0);

	            // Increment counter
	            counter[blockSize - 1] = (counter[blockSize - 1] + 1) | 0

	            // Encrypt
	            for (var i = 0; i < blockSize; i++) {
	                words[offset + i] ^= keystream[i];
	            }
	        }
	    });

	    CTR.Decryptor = Encryptor;

	    return CTR;
	}());


	return CryptoJS.mode.CTR;

}));

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

;(function (root, factory, undef) {
	if (true) {
		// CommonJS
		module.exports = exports = factory(__webpack_require__(0), __webpack_require__(1));
	}
	else {}
}(this, function (CryptoJS) {

	/** @preserve
	 * Counter block mode compatible with  Dr Brian Gladman fileenc.c
	 * derived from CryptoJS.mode.CTR
	 * Jan Hruby jhruby.web@gmail.com
	 */
	CryptoJS.mode.CTRGladman = (function () {
	    var CTRGladman = CryptoJS.lib.BlockCipherMode.extend();

		function incWord(word)
		{
			if (((word >> 24) & 0xff) === 0xff) { //overflow
			var b1 = (word >> 16)&0xff;
			var b2 = (word >> 8)&0xff;
			var b3 = word & 0xff;

			if (b1 === 0xff) // overflow b1
			{
			b1 = 0;
			if (b2 === 0xff)
			{
				b2 = 0;
				if (b3 === 0xff)
				{
					b3 = 0;
				}
				else
				{
					++b3;
				}
			}
			else
			{
				++b2;
			}
			}
			else
			{
			++b1;
			}

			word = 0;
			word += (b1 << 16);
			word += (b2 << 8);
			word += b3;
			}
			else
			{
			word += (0x01 << 24);
			}
			return word;
		}

		function incCounter(counter)
		{
			if ((counter[0] = incWord(counter[0])) === 0)
			{
				// encr_data in fileenc.c from  Dr Brian Gladman's counts only with DWORD j < 8
				counter[1] = incWord(counter[1]);
			}
			return counter;
		}

	    var Encryptor = CTRGladman.Encryptor = CTRGladman.extend({
	        processBlock: function (words, offset) {
	            // Shortcuts
	            var cipher = this._cipher
	            var blockSize = cipher.blockSize;
	            var iv = this._iv;
	            var counter = this._counter;

	            // Generate keystream
	            if (iv) {
	                counter = this._counter = iv.slice(0);

	                // Remove IV for subsequent blocks
	                this._iv = undefined;
	            }

				incCounter(counter);

				var keystream = counter.slice(0);
	            cipher.encryptBlock(keystream, 0);

	            // Encrypt
	            for (var i = 0; i < blockSize; i++) {
	                words[offset + i] ^= keystream[i];
	            }
	        }
	    });

	    CTRGladman.Decryptor = Encryptor;

	    return CTRGladman;
	}());




	return CryptoJS.mode.CTRGladman;

}));

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

;(function (root, factory, undef) {
	if (true) {
		// CommonJS
		module.exports = exports = factory(__webpack_require__(0), __webpack_require__(1));
	}
	else {}
}(this, function (CryptoJS) {

	/**
	 * Output Feedback block mode.
	 */
	CryptoJS.mode.OFB = (function () {
	    var OFB = CryptoJS.lib.BlockCipherMode.extend();

	    var Encryptor = OFB.Encryptor = OFB.extend({
	        processBlock: function (words, offset) {
	            // Shortcuts
	            var cipher = this._cipher
	            var blockSize = cipher.blockSize;
	            var iv = this._iv;
	            var keystream = this._keystream;

	            // Generate keystream
	            if (iv) {
	                keystream = this._keystream = iv.slice(0);

	                // Remove IV for subsequent blocks
	                this._iv = undefined;
	            }
	            cipher.encryptBlock(keystream, 0);

	            // Encrypt
	            for (var i = 0; i < blockSize; i++) {
	                words[offset + i] ^= keystream[i];
	            }
	        }
	    });

	    OFB.Decryptor = Encryptor;

	    return OFB;
	}());


	return CryptoJS.mode.OFB;

}));

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

;(function (root, factory, undef) {
	if (true) {
		// CommonJS
		module.exports = exports = factory(__webpack_require__(0), __webpack_require__(1));
	}
	else {}
}(this, function (CryptoJS) {

	/**
	 * Electronic Codebook block mode.
	 */
	CryptoJS.mode.ECB = (function () {
	    var ECB = CryptoJS.lib.BlockCipherMode.extend();

	    ECB.Encryptor = ECB.extend({
	        processBlock: function (words, offset) {
	            this._cipher.encryptBlock(words, offset);
	        }
	    });

	    ECB.Decryptor = ECB.extend({
	        processBlock: function (words, offset) {
	            this._cipher.decryptBlock(words, offset);
	        }
	    });

	    return ECB;
	}());


	return CryptoJS.mode.ECB;

}));

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

;(function (root, factory, undef) {
	if (true) {
		// CommonJS
		module.exports = exports = factory(__webpack_require__(0), __webpack_require__(1));
	}
	else {}
}(this, function (CryptoJS) {

	/**
	 * ANSI X.923 padding strategy.
	 */
	CryptoJS.pad.AnsiX923 = {
	    pad: function (data, blockSize) {
	        // Shortcuts
	        var dataSigBytes = data.sigBytes;
	        var blockSizeBytes = blockSize * 4;

	        // Count padding bytes
	        var nPaddingBytes = blockSizeBytes - dataSigBytes % blockSizeBytes;

	        // Compute last byte position
	        var lastBytePos = dataSigBytes + nPaddingBytes - 1;

	        // Pad
	        data.clamp();
	        data.words[lastBytePos >>> 2] |= nPaddingBytes << (24 - (lastBytePos % 4) * 8);
	        data.sigBytes += nPaddingBytes;
	    },

	    unpad: function (data) {
	        // Get number of padding bytes from last byte
	        var nPaddingBytes = data.words[(data.sigBytes - 1) >>> 2] & 0xff;

	        // Remove padding
	        data.sigBytes -= nPaddingBytes;
	    }
	};


	return CryptoJS.pad.Ansix923;

}));

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

;(function (root, factory, undef) {
	if (true) {
		// CommonJS
		module.exports = exports = factory(__webpack_require__(0), __webpack_require__(1));
	}
	else {}
}(this, function (CryptoJS) {

	/**
	 * ISO 10126 padding strategy.
	 */
	CryptoJS.pad.Iso10126 = {
	    pad: function (data, blockSize) {
	        // Shortcut
	        var blockSizeBytes = blockSize * 4;

	        // Count padding bytes
	        var nPaddingBytes = blockSizeBytes - data.sigBytes % blockSizeBytes;

	        // Pad
	        data.concat(CryptoJS.lib.WordArray.random(nPaddingBytes - 1)).
	             concat(CryptoJS.lib.WordArray.create([nPaddingBytes << 24], 1));
	    },

	    unpad: function (data) {
	        // Get number of padding bytes from last byte
	        var nPaddingBytes = data.words[(data.sigBytes - 1) >>> 2] & 0xff;

	        // Remove padding
	        data.sigBytes -= nPaddingBytes;
	    }
	};


	return CryptoJS.pad.Iso10126;

}));

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

;(function (root, factory, undef) {
	if (true) {
		// CommonJS
		module.exports = exports = factory(__webpack_require__(0), __webpack_require__(1));
	}
	else {}
}(this, function (CryptoJS) {

	/**
	 * ISO/IEC 9797-1 Padding Method 2.
	 */
	CryptoJS.pad.Iso97971 = {
	    pad: function (data, blockSize) {
	        // Add 0x80 byte
	        data.concat(CryptoJS.lib.WordArray.create([0x80000000], 1));

	        // Zero pad the rest
	        CryptoJS.pad.ZeroPadding.pad(data, blockSize);
	    },

	    unpad: function (data) {
	        // Remove zero padding
	        CryptoJS.pad.ZeroPadding.unpad(data);

	        // Remove one more byte -- the 0x80 byte
	        data.sigBytes--;
	    }
	};


	return CryptoJS.pad.Iso97971;

}));

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

;(function (root, factory, undef) {
	if (true) {
		// CommonJS
		module.exports = exports = factory(__webpack_require__(0), __webpack_require__(1));
	}
	else {}
}(this, function (CryptoJS) {

	/**
	 * Zero padding strategy.
	 */
	CryptoJS.pad.ZeroPadding = {
	    pad: function (data, blockSize) {
	        // Shortcut
	        var blockSizeBytes = blockSize * 4;

	        // Pad
	        data.clamp();
	        data.sigBytes += blockSizeBytes - ((data.sigBytes % blockSizeBytes) || blockSizeBytes);
	    },

	    unpad: function (data) {
	        // Shortcut
	        var dataWords = data.words;

	        // Unpad
	        var i = data.sigBytes - 1;
	        while (!((dataWords[i >>> 2] >>> (24 - (i % 4) * 8)) & 0xff)) {
	            i--;
	        }
	        data.sigBytes = i + 1;
	    }
	};


	return CryptoJS.pad.ZeroPadding;

}));

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

;(function (root, factory, undef) {
	if (true) {
		// CommonJS
		module.exports = exports = factory(__webpack_require__(0), __webpack_require__(1));
	}
	else {}
}(this, function (CryptoJS) {

	/**
	 * A noop padding strategy.
	 */
	CryptoJS.pad.NoPadding = {
	    pad: function () {
	    },

	    unpad: function () {
	    }
	};


	return CryptoJS.pad.NoPadding;

}));

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

;(function (root, factory, undef) {
	if (true) {
		// CommonJS
		module.exports = exports = factory(__webpack_require__(0), __webpack_require__(1));
	}
	else {}
}(this, function (CryptoJS) {

	(function (undefined) {
	    // Shortcuts
	    var C = CryptoJS;
	    var C_lib = C.lib;
	    var CipherParams = C_lib.CipherParams;
	    var C_enc = C.enc;
	    var Hex = C_enc.Hex;
	    var C_format = C.format;

	    var HexFormatter = C_format.Hex = {
	        /**
	         * Converts the ciphertext of a cipher params object to a hexadecimally encoded string.
	         *
	         * @param {CipherParams} cipherParams The cipher params object.
	         *
	         * @return {string} The hexadecimally encoded string.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var hexString = CryptoJS.format.Hex.stringify(cipherParams);
	         */
	        stringify: function (cipherParams) {
	            return cipherParams.ciphertext.toString(Hex);
	        },

	        /**
	         * Converts a hexadecimally encoded ciphertext string to a cipher params object.
	         *
	         * @param {string} input The hexadecimally encoded string.
	         *
	         * @return {CipherParams} The cipher params object.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var cipherParams = CryptoJS.format.Hex.parse(hexString);
	         */
	        parse: function (input) {
	            var ciphertext = Hex.parse(input);
	            return CipherParams.create({ ciphertext: ciphertext });
	        }
	    };
	}());


	return CryptoJS.format.Hex;

}));

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

;(function (root, factory, undef) {
	if (true) {
		// CommonJS
		module.exports = exports = factory(__webpack_require__(0), __webpack_require__(3), __webpack_require__(4), __webpack_require__(2), __webpack_require__(1));
	}
	else {}
}(this, function (CryptoJS) {

	(function () {
	    // Shortcuts
	    var C = CryptoJS;
	    var C_lib = C.lib;
	    var BlockCipher = C_lib.BlockCipher;
	    var C_algo = C.algo;

	    // Lookup tables
	    var SBOX = [];
	    var INV_SBOX = [];
	    var SUB_MIX_0 = [];
	    var SUB_MIX_1 = [];
	    var SUB_MIX_2 = [];
	    var SUB_MIX_3 = [];
	    var INV_SUB_MIX_0 = [];
	    var INV_SUB_MIX_1 = [];
	    var INV_SUB_MIX_2 = [];
	    var INV_SUB_MIX_3 = [];

	    // Compute lookup tables
	    (function () {
	        // Compute double table
	        var d = [];
	        for (var i = 0; i < 256; i++) {
	            if (i < 128) {
	                d[i] = i << 1;
	            } else {
	                d[i] = (i << 1) ^ 0x11b;
	            }
	        }

	        // Walk GF(2^8)
	        var x = 0;
	        var xi = 0;
	        for (var i = 0; i < 256; i++) {
	            // Compute sbox
	            var sx = xi ^ (xi << 1) ^ (xi << 2) ^ (xi << 3) ^ (xi << 4);
	            sx = (sx >>> 8) ^ (sx & 0xff) ^ 0x63;
	            SBOX[x] = sx;
	            INV_SBOX[sx] = x;

	            // Compute multiplication
	            var x2 = d[x];
	            var x4 = d[x2];
	            var x8 = d[x4];

	            // Compute sub bytes, mix columns tables
	            var t = (d[sx] * 0x101) ^ (sx * 0x1010100);
	            SUB_MIX_0[x] = (t << 24) | (t >>> 8);
	            SUB_MIX_1[x] = (t << 16) | (t >>> 16);
	            SUB_MIX_2[x] = (t << 8)  | (t >>> 24);
	            SUB_MIX_3[x] = t;

	            // Compute inv sub bytes, inv mix columns tables
	            var t = (x8 * 0x1010101) ^ (x4 * 0x10001) ^ (x2 * 0x101) ^ (x * 0x1010100);
	            INV_SUB_MIX_0[sx] = (t << 24) | (t >>> 8);
	            INV_SUB_MIX_1[sx] = (t << 16) | (t >>> 16);
	            INV_SUB_MIX_2[sx] = (t << 8)  | (t >>> 24);
	            INV_SUB_MIX_3[sx] = t;

	            // Compute next counter
	            if (!x) {
	                x = xi = 1;
	            } else {
	                x = x2 ^ d[d[d[x8 ^ x2]]];
	                xi ^= d[d[xi]];
	            }
	        }
	    }());

	    // Precomputed Rcon lookup
	    var RCON = [0x00, 0x01, 0x02, 0x04, 0x08, 0x10, 0x20, 0x40, 0x80, 0x1b, 0x36];

	    /**
	     * AES block cipher algorithm.
	     */
	    var AES = C_algo.AES = BlockCipher.extend({
	        _doReset: function () {
	            // Skip reset of nRounds has been set before and key did not change
	            if (this._nRounds && this._keyPriorReset === this._key) {
	                return;
	            }

	            // Shortcuts
	            var key = this._keyPriorReset = this._key;
	            var keyWords = key.words;
	            var keySize = key.sigBytes / 4;

	            // Compute number of rounds
	            var nRounds = this._nRounds = keySize + 6;

	            // Compute number of key schedule rows
	            var ksRows = (nRounds + 1) * 4;

	            // Compute key schedule
	            var keySchedule = this._keySchedule = [];
	            for (var ksRow = 0; ksRow < ksRows; ksRow++) {
	                if (ksRow < keySize) {
	                    keySchedule[ksRow] = keyWords[ksRow];
	                } else {
	                    var t = keySchedule[ksRow - 1];

	                    if (!(ksRow % keySize)) {
	                        // Rot word
	                        t = (t << 8) | (t >>> 24);

	                        // Sub word
	                        t = (SBOX[t >>> 24] << 24) | (SBOX[(t >>> 16) & 0xff] << 16) | (SBOX[(t >>> 8) & 0xff] << 8) | SBOX[t & 0xff];

	                        // Mix Rcon
	                        t ^= RCON[(ksRow / keySize) | 0] << 24;
	                    } else if (keySize > 6 && ksRow % keySize == 4) {
	                        // Sub word
	                        t = (SBOX[t >>> 24] << 24) | (SBOX[(t >>> 16) & 0xff] << 16) | (SBOX[(t >>> 8) & 0xff] << 8) | SBOX[t & 0xff];
	                    }

	                    keySchedule[ksRow] = keySchedule[ksRow - keySize] ^ t;
	                }
	            }

	            // Compute inv key schedule
	            var invKeySchedule = this._invKeySchedule = [];
	            for (var invKsRow = 0; invKsRow < ksRows; invKsRow++) {
	                var ksRow = ksRows - invKsRow;

	                if (invKsRow % 4) {
	                    var t = keySchedule[ksRow];
	                } else {
	                    var t = keySchedule[ksRow - 4];
	                }

	                if (invKsRow < 4 || ksRow <= 4) {
	                    invKeySchedule[invKsRow] = t;
	                } else {
	                    invKeySchedule[invKsRow] = INV_SUB_MIX_0[SBOX[t >>> 24]] ^ INV_SUB_MIX_1[SBOX[(t >>> 16) & 0xff]] ^
	                                               INV_SUB_MIX_2[SBOX[(t >>> 8) & 0xff]] ^ INV_SUB_MIX_3[SBOX[t & 0xff]];
	                }
	            }
	        },

	        encryptBlock: function (M, offset) {
	            this._doCryptBlock(M, offset, this._keySchedule, SUB_MIX_0, SUB_MIX_1, SUB_MIX_2, SUB_MIX_3, SBOX);
	        },

	        decryptBlock: function (M, offset) {
	            // Swap 2nd and 4th rows
	            var t = M[offset + 1];
	            M[offset + 1] = M[offset + 3];
	            M[offset + 3] = t;

	            this._doCryptBlock(M, offset, this._invKeySchedule, INV_SUB_MIX_0, INV_SUB_MIX_1, INV_SUB_MIX_2, INV_SUB_MIX_3, INV_SBOX);

	            // Inv swap 2nd and 4th rows
	            var t = M[offset + 1];
	            M[offset + 1] = M[offset + 3];
	            M[offset + 3] = t;
	        },

	        _doCryptBlock: function (M, offset, keySchedule, SUB_MIX_0, SUB_MIX_1, SUB_MIX_2, SUB_MIX_3, SBOX) {
	            // Shortcut
	            var nRounds = this._nRounds;

	            // Get input, add round key
	            var s0 = M[offset]     ^ keySchedule[0];
	            var s1 = M[offset + 1] ^ keySchedule[1];
	            var s2 = M[offset + 2] ^ keySchedule[2];
	            var s3 = M[offset + 3] ^ keySchedule[3];

	            // Key schedule row counter
	            var ksRow = 4;

	            // Rounds
	            for (var round = 1; round < nRounds; round++) {
	                // Shift rows, sub bytes, mix columns, add round key
	                var t0 = SUB_MIX_0[s0 >>> 24] ^ SUB_MIX_1[(s1 >>> 16) & 0xff] ^ SUB_MIX_2[(s2 >>> 8) & 0xff] ^ SUB_MIX_3[s3 & 0xff] ^ keySchedule[ksRow++];
	                var t1 = SUB_MIX_0[s1 >>> 24] ^ SUB_MIX_1[(s2 >>> 16) & 0xff] ^ SUB_MIX_2[(s3 >>> 8) & 0xff] ^ SUB_MIX_3[s0 & 0xff] ^ keySchedule[ksRow++];
	                var t2 = SUB_MIX_0[s2 >>> 24] ^ SUB_MIX_1[(s3 >>> 16) & 0xff] ^ SUB_MIX_2[(s0 >>> 8) & 0xff] ^ SUB_MIX_3[s1 & 0xff] ^ keySchedule[ksRow++];
	                var t3 = SUB_MIX_0[s3 >>> 24] ^ SUB_MIX_1[(s0 >>> 16) & 0xff] ^ SUB_MIX_2[(s1 >>> 8) & 0xff] ^ SUB_MIX_3[s2 & 0xff] ^ keySchedule[ksRow++];

	                // Update state
	                s0 = t0;
	                s1 = t1;
	                s2 = t2;
	                s3 = t3;
	            }

	            // Shift rows, sub bytes, add round key
	            var t0 = ((SBOX[s0 >>> 24] << 24) | (SBOX[(s1 >>> 16) & 0xff] << 16) | (SBOX[(s2 >>> 8) & 0xff] << 8) | SBOX[s3 & 0xff]) ^ keySchedule[ksRow++];
	            var t1 = ((SBOX[s1 >>> 24] << 24) | (SBOX[(s2 >>> 16) & 0xff] << 16) | (SBOX[(s3 >>> 8) & 0xff] << 8) | SBOX[s0 & 0xff]) ^ keySchedule[ksRow++];
	            var t2 = ((SBOX[s2 >>> 24] << 24) | (SBOX[(s3 >>> 16) & 0xff] << 16) | (SBOX[(s0 >>> 8) & 0xff] << 8) | SBOX[s1 & 0xff]) ^ keySchedule[ksRow++];
	            var t3 = ((SBOX[s3 >>> 24] << 24) | (SBOX[(s0 >>> 16) & 0xff] << 16) | (SBOX[(s1 >>> 8) & 0xff] << 8) | SBOX[s2 & 0xff]) ^ keySchedule[ksRow++];

	            // Set output
	            M[offset]     = t0;
	            M[offset + 1] = t1;
	            M[offset + 2] = t2;
	            M[offset + 3] = t3;
	        },

	        keySize: 256/32
	    });

	    /**
	     * Shortcut functions to the cipher's object interface.
	     *
	     * @example
	     *
	     *     var ciphertext = CryptoJS.AES.encrypt(message, key, cfg);
	     *     var plaintext  = CryptoJS.AES.decrypt(ciphertext, key, cfg);
	     */
	    C.AES = BlockCipher._createHelper(AES);
	}());


	return CryptoJS.AES;

}));

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

;(function (root, factory, undef) {
	if (true) {
		// CommonJS
		module.exports = exports = factory(__webpack_require__(0), __webpack_require__(3), __webpack_require__(4), __webpack_require__(2), __webpack_require__(1));
	}
	else {}
}(this, function (CryptoJS) {

	(function () {
	    // Shortcuts
	    var C = CryptoJS;
	    var C_lib = C.lib;
	    var WordArray = C_lib.WordArray;
	    var BlockCipher = C_lib.BlockCipher;
	    var C_algo = C.algo;

	    // Permuted Choice 1 constants
	    var PC1 = [
	        57, 49, 41, 33, 25, 17, 9,  1,
	        58, 50, 42, 34, 26, 18, 10, 2,
	        59, 51, 43, 35, 27, 19, 11, 3,
	        60, 52, 44, 36, 63, 55, 47, 39,
	        31, 23, 15, 7,  62, 54, 46, 38,
	        30, 22, 14, 6,  61, 53, 45, 37,
	        29, 21, 13, 5,  28, 20, 12, 4
	    ];

	    // Permuted Choice 2 constants
	    var PC2 = [
	        14, 17, 11, 24, 1,  5,
	        3,  28, 15, 6,  21, 10,
	        23, 19, 12, 4,  26, 8,
	        16, 7,  27, 20, 13, 2,
	        41, 52, 31, 37, 47, 55,
	        30, 40, 51, 45, 33, 48,
	        44, 49, 39, 56, 34, 53,
	        46, 42, 50, 36, 29, 32
	    ];

	    // Cumulative bit shift constants
	    var BIT_SHIFTS = [1,  2,  4,  6,  8,  10, 12, 14, 15, 17, 19, 21, 23, 25, 27, 28];

	    // SBOXes and round permutation constants
	    var SBOX_P = [
	        {
	            0x0: 0x808200,
	            0x10000000: 0x8000,
	            0x20000000: 0x808002,
	            0x30000000: 0x2,
	            0x40000000: 0x200,
	            0x50000000: 0x808202,
	            0x60000000: 0x800202,
	            0x70000000: 0x800000,
	            0x80000000: 0x202,
	            0x90000000: 0x800200,
	            0xa0000000: 0x8200,
	            0xb0000000: 0x808000,
	            0xc0000000: 0x8002,
	            0xd0000000: 0x800002,
	            0xe0000000: 0x0,
	            0xf0000000: 0x8202,
	            0x8000000: 0x0,
	            0x18000000: 0x808202,
	            0x28000000: 0x8202,
	            0x38000000: 0x8000,
	            0x48000000: 0x808200,
	            0x58000000: 0x200,
	            0x68000000: 0x808002,
	            0x78000000: 0x2,
	            0x88000000: 0x800200,
	            0x98000000: 0x8200,
	            0xa8000000: 0x808000,
	            0xb8000000: 0x800202,
	            0xc8000000: 0x800002,
	            0xd8000000: 0x8002,
	            0xe8000000: 0x202,
	            0xf8000000: 0x800000,
	            0x1: 0x8000,
	            0x10000001: 0x2,
	            0x20000001: 0x808200,
	            0x30000001: 0x800000,
	            0x40000001: 0x808002,
	            0x50000001: 0x8200,
	            0x60000001: 0x200,
	            0x70000001: 0x800202,
	            0x80000001: 0x808202,
	            0x90000001: 0x808000,
	            0xa0000001: 0x800002,
	            0xb0000001: 0x8202,
	            0xc0000001: 0x202,
	            0xd0000001: 0x800200,
	            0xe0000001: 0x8002,
	            0xf0000001: 0x0,
	            0x8000001: 0x808202,
	            0x18000001: 0x808000,
	            0x28000001: 0x800000,
	            0x38000001: 0x200,
	            0x48000001: 0x8000,
	            0x58000001: 0x800002,
	            0x68000001: 0x2,
	            0x78000001: 0x8202,
	            0x88000001: 0x8002,
	            0x98000001: 0x800202,
	            0xa8000001: 0x202,
	            0xb8000001: 0x808200,
	            0xc8000001: 0x800200,
	            0xd8000001: 0x0,
	            0xe8000001: 0x8200,
	            0xf8000001: 0x808002
	        },
	        {
	            0x0: 0x40084010,
	            0x1000000: 0x4000,
	            0x2000000: 0x80000,
	            0x3000000: 0x40080010,
	            0x4000000: 0x40000010,
	            0x5000000: 0x40084000,
	            0x6000000: 0x40004000,
	            0x7000000: 0x10,
	            0x8000000: 0x84000,
	            0x9000000: 0x40004010,
	            0xa000000: 0x40000000,
	            0xb000000: 0x84010,
	            0xc000000: 0x80010,
	            0xd000000: 0x0,
	            0xe000000: 0x4010,
	            0xf000000: 0x40080000,
	            0x800000: 0x40004000,
	            0x1800000: 0x84010,
	            0x2800000: 0x10,
	            0x3800000: 0x40004010,
	            0x4800000: 0x40084010,
	            0x5800000: 0x40000000,
	            0x6800000: 0x80000,
	            0x7800000: 0x40080010,
	            0x8800000: 0x80010,
	            0x9800000: 0x0,
	            0xa800000: 0x4000,
	            0xb800000: 0x40080000,
	            0xc800000: 0x40000010,
	            0xd800000: 0x84000,
	            0xe800000: 0x40084000,
	            0xf800000: 0x4010,
	            0x10000000: 0x0,
	            0x11000000: 0x40080010,
	            0x12000000: 0x40004010,
	            0x13000000: 0x40084000,
	            0x14000000: 0x40080000,
	            0x15000000: 0x10,
	            0x16000000: 0x84010,
	            0x17000000: 0x4000,
	            0x18000000: 0x4010,
	            0x19000000: 0x80000,
	            0x1a000000: 0x80010,
	            0x1b000000: 0x40000010,
	            0x1c000000: 0x84000,
	            0x1d000000: 0x40004000,
	            0x1e000000: 0x40000000,
	            0x1f000000: 0x40084010,
	            0x10800000: 0x84010,
	            0x11800000: 0x80000,
	            0x12800000: 0x40080000,
	            0x13800000: 0x4000,
	            0x14800000: 0x40004000,
	            0x15800000: 0x40084010,
	            0x16800000: 0x10,
	            0x17800000: 0x40000000,
	            0x18800000: 0x40084000,
	            0x19800000: 0x40000010,
	            0x1a800000: 0x40004010,
	            0x1b800000: 0x80010,
	            0x1c800000: 0x0,
	            0x1d800000: 0x4010,
	            0x1e800000: 0x40080010,
	            0x1f800000: 0x84000
	        },
	        {
	            0x0: 0x104,
	            0x100000: 0x0,
	            0x200000: 0x4000100,
	            0x300000: 0x10104,
	            0x400000: 0x10004,
	            0x500000: 0x4000004,
	            0x600000: 0x4010104,
	            0x700000: 0x4010000,
	            0x800000: 0x4000000,
	            0x900000: 0x4010100,
	            0xa00000: 0x10100,
	            0xb00000: 0x4010004,
	            0xc00000: 0x4000104,
	            0xd00000: 0x10000,
	            0xe00000: 0x4,
	            0xf00000: 0x100,
	            0x80000: 0x4010100,
	            0x180000: 0x4010004,
	            0x280000: 0x0,
	            0x380000: 0x4000100,
	            0x480000: 0x4000004,
	            0x580000: 0x10000,
	            0x680000: 0x10004,
	            0x780000: 0x104,
	            0x880000: 0x4,
	            0x980000: 0x100,
	            0xa80000: 0x4010000,
	            0xb80000: 0x10104,
	            0xc80000: 0x10100,
	            0xd80000: 0x4000104,
	            0xe80000: 0x4010104,
	            0xf80000: 0x4000000,
	            0x1000000: 0x4010100,
	            0x1100000: 0x10004,
	            0x1200000: 0x10000,
	            0x1300000: 0x4000100,
	            0x1400000: 0x100,
	            0x1500000: 0x4010104,
	            0x1600000: 0x4000004,
	            0x1700000: 0x0,
	            0x1800000: 0x4000104,
	            0x1900000: 0x4000000,
	            0x1a00000: 0x4,
	            0x1b00000: 0x10100,
	            0x1c00000: 0x4010000,
	            0x1d00000: 0x104,
	            0x1e00000: 0x10104,
	            0x1f00000: 0x4010004,
	            0x1080000: 0x4000000,
	            0x1180000: 0x104,
	            0x1280000: 0x4010100,
	            0x1380000: 0x0,
	            0x1480000: 0x10004,
	            0x1580000: 0x4000100,
	            0x1680000: 0x100,
	            0x1780000: 0x4010004,
	            0x1880000: 0x10000,
	            0x1980000: 0x4010104,
	            0x1a80000: 0x10104,
	            0x1b80000: 0x4000004,
	            0x1c80000: 0x4000104,
	            0x1d80000: 0x4010000,
	            0x1e80000: 0x4,
	            0x1f80000: 0x10100
	        },
	        {
	            0x0: 0x80401000,
	            0x10000: 0x80001040,
	            0x20000: 0x401040,
	            0x30000: 0x80400000,
	            0x40000: 0x0,
	            0x50000: 0x401000,
	            0x60000: 0x80000040,
	            0x70000: 0x400040,
	            0x80000: 0x80000000,
	            0x90000: 0x400000,
	            0xa0000: 0x40,
	            0xb0000: 0x80001000,
	            0xc0000: 0x80400040,
	            0xd0000: 0x1040,
	            0xe0000: 0x1000,
	            0xf0000: 0x80401040,
	            0x8000: 0x80001040,
	            0x18000: 0x40,
	            0x28000: 0x80400040,
	            0x38000: 0x80001000,
	            0x48000: 0x401000,
	            0x58000: 0x80401040,
	            0x68000: 0x0,
	            0x78000: 0x80400000,
	            0x88000: 0x1000,
	            0x98000: 0x80401000,
	            0xa8000: 0x400000,
	            0xb8000: 0x1040,
	            0xc8000: 0x80000000,
	            0xd8000: 0x400040,
	            0xe8000: 0x401040,
	            0xf8000: 0x80000040,
	            0x100000: 0x400040,
	            0x110000: 0x401000,
	            0x120000: 0x80000040,
	            0x130000: 0x0,
	            0x140000: 0x1040,
	            0x150000: 0x80400040,
	            0x160000: 0x80401000,
	            0x170000: 0x80001040,
	            0x180000: 0x80401040,
	            0x190000: 0x80000000,
	            0x1a0000: 0x80400000,
	            0x1b0000: 0x401040,
	            0x1c0000: 0x80001000,
	            0x1d0000: 0x400000,
	            0x1e0000: 0x40,
	            0x1f0000: 0x1000,
	            0x108000: 0x80400000,
	            0x118000: 0x80401040,
	            0x128000: 0x0,
	            0x138000: 0x401000,
	            0x148000: 0x400040,
	            0x158000: 0x80000000,
	            0x168000: 0x80001040,
	            0x178000: 0x40,
	            0x188000: 0x80000040,
	            0x198000: 0x1000,
	            0x1a8000: 0x80001000,
	            0x1b8000: 0x80400040,
	            0x1c8000: 0x1040,
	            0x1d8000: 0x80401000,
	            0x1e8000: 0x400000,
	            0x1f8000: 0x401040
	        },
	        {
	            0x0: 0x80,
	            0x1000: 0x1040000,
	            0x2000: 0x40000,
	            0x3000: 0x20000000,
	            0x4000: 0x20040080,
	            0x5000: 0x1000080,
	            0x6000: 0x21000080,
	            0x7000: 0x40080,
	            0x8000: 0x1000000,
	            0x9000: 0x20040000,
	            0xa000: 0x20000080,
	            0xb000: 0x21040080,
	            0xc000: 0x21040000,
	            0xd000: 0x0,
	            0xe000: 0x1040080,
	            0xf000: 0x21000000,
	            0x800: 0x1040080,
	            0x1800: 0x21000080,
	            0x2800: 0x80,
	            0x3800: 0x1040000,
	            0x4800: 0x40000,
	            0x5800: 0x20040080,
	            0x6800: 0x21040000,
	            0x7800: 0x20000000,
	            0x8800: 0x20040000,
	            0x9800: 0x0,
	            0xa800: 0x21040080,
	            0xb800: 0x1000080,
	            0xc800: 0x20000080,
	            0xd800: 0x21000000,
	            0xe800: 0x1000000,
	            0xf800: 0x40080,
	            0x10000: 0x40000,
	            0x11000: 0x80,
	            0x12000: 0x20000000,
	            0x13000: 0x21000080,
	            0x14000: 0x1000080,
	            0x15000: 0x21040000,
	            0x16000: 0x20040080,
	            0x17000: 0x1000000,
	            0x18000: 0x21040080,
	            0x19000: 0x21000000,
	            0x1a000: 0x1040000,
	            0x1b000: 0x20040000,
	            0x1c000: 0x40080,
	            0x1d000: 0x20000080,
	            0x1e000: 0x0,
	            0x1f000: 0x1040080,
	            0x10800: 0x21000080,
	            0x11800: 0x1000000,
	            0x12800: 0x1040000,
	            0x13800: 0x20040080,
	            0x14800: 0x20000000,
	            0x15800: 0x1040080,
	            0x16800: 0x80,
	            0x17800: 0x21040000,
	            0x18800: 0x40080,
	            0x19800: 0x21040080,
	            0x1a800: 0x0,
	            0x1b800: 0x21000000,
	            0x1c800: 0x1000080,
	            0x1d800: 0x40000,
	            0x1e800: 0x20040000,
	            0x1f800: 0x20000080
	        },
	        {
	            0x0: 0x10000008,
	            0x100: 0x2000,
	            0x200: 0x10200000,
	            0x300: 0x10202008,
	            0x400: 0x10002000,
	            0x500: 0x200000,
	            0x600: 0x200008,
	            0x700: 0x10000000,
	            0x800: 0x0,
	            0x900: 0x10002008,
	            0xa00: 0x202000,
	            0xb00: 0x8,
	            0xc00: 0x10200008,
	            0xd00: 0x202008,
	            0xe00: 0x2008,
	            0xf00: 0x10202000,
	            0x80: 0x10200000,
	            0x180: 0x10202008,
	            0x280: 0x8,
	            0x380: 0x200000,
	            0x480: 0x202008,
	            0x580: 0x10000008,
	            0x680: 0x10002000,
	            0x780: 0x2008,
	            0x880: 0x200008,
	            0x980: 0x2000,
	            0xa80: 0x10002008,
	            0xb80: 0x10200008,
	            0xc80: 0x0,
	            0xd80: 0x10202000,
	            0xe80: 0x202000,
	            0xf80: 0x10000000,
	            0x1000: 0x10002000,
	            0x1100: 0x10200008,
	            0x1200: 0x10202008,
	            0x1300: 0x2008,
	            0x1400: 0x200000,
	            0x1500: 0x10000000,
	            0x1600: 0x10000008,
	            0x1700: 0x202000,
	            0x1800: 0x202008,
	            0x1900: 0x0,
	            0x1a00: 0x8,
	            0x1b00: 0x10200000,
	            0x1c00: 0x2000,
	            0x1d00: 0x10002008,
	            0x1e00: 0x10202000,
	            0x1f00: 0x200008,
	            0x1080: 0x8,
	            0x1180: 0x202000,
	            0x1280: 0x200000,
	            0x1380: 0x10000008,
	            0x1480: 0x10002000,
	            0x1580: 0x2008,
	            0x1680: 0x10202008,
	            0x1780: 0x10200000,
	            0x1880: 0x10202000,
	            0x1980: 0x10200008,
	            0x1a80: 0x2000,
	            0x1b80: 0x202008,
	            0x1c80: 0x200008,
	            0x1d80: 0x0,
	            0x1e80: 0x10000000,
	            0x1f80: 0x10002008
	        },
	        {
	            0x0: 0x100000,
	            0x10: 0x2000401,
	            0x20: 0x400,
	            0x30: 0x100401,
	            0x40: 0x2100401,
	            0x50: 0x0,
	            0x60: 0x1,
	            0x70: 0x2100001,
	            0x80: 0x2000400,
	            0x90: 0x100001,
	            0xa0: 0x2000001,
	            0xb0: 0x2100400,
	            0xc0: 0x2100000,
	            0xd0: 0x401,
	            0xe0: 0x100400,
	            0xf0: 0x2000000,
	            0x8: 0x2100001,
	            0x18: 0x0,
	            0x28: 0x2000401,
	            0x38: 0x2100400,
	            0x48: 0x100000,
	            0x58: 0x2000001,
	            0x68: 0x2000000,
	            0x78: 0x401,
	            0x88: 0x100401,
	            0x98: 0x2000400,
	            0xa8: 0x2100000,
	            0xb8: 0x100001,
	            0xc8: 0x400,
	            0xd8: 0x2100401,
	            0xe8: 0x1,
	            0xf8: 0x100400,
	            0x100: 0x2000000,
	            0x110: 0x100000,
	            0x120: 0x2000401,
	            0x130: 0x2100001,
	            0x140: 0x100001,
	            0x150: 0x2000400,
	            0x160: 0x2100400,
	            0x170: 0x100401,
	            0x180: 0x401,
	            0x190: 0x2100401,
	            0x1a0: 0x100400,
	            0x1b0: 0x1,
	            0x1c0: 0x0,
	            0x1d0: 0x2100000,
	            0x1e0: 0x2000001,
	            0x1f0: 0x400,
	            0x108: 0x100400,
	            0x118: 0x2000401,
	            0x128: 0x2100001,
	            0x138: 0x1,
	            0x148: 0x2000000,
	            0x158: 0x100000,
	            0x168: 0x401,
	            0x178: 0x2100400,
	            0x188: 0x2000001,
	            0x198: 0x2100000,
	            0x1a8: 0x0,
	            0x1b8: 0x2100401,
	            0x1c8: 0x100401,
	            0x1d8: 0x400,
	            0x1e8: 0x2000400,
	            0x1f8: 0x100001
	        },
	        {
	            0x0: 0x8000820,
	            0x1: 0x20000,
	            0x2: 0x8000000,
	            0x3: 0x20,
	            0x4: 0x20020,
	            0x5: 0x8020820,
	            0x6: 0x8020800,
	            0x7: 0x800,
	            0x8: 0x8020000,
	            0x9: 0x8000800,
	            0xa: 0x20800,
	            0xb: 0x8020020,
	            0xc: 0x820,
	            0xd: 0x0,
	            0xe: 0x8000020,
	            0xf: 0x20820,
	            0x80000000: 0x800,
	            0x80000001: 0x8020820,
	            0x80000002: 0x8000820,
	            0x80000003: 0x8000000,
	            0x80000004: 0x8020000,
	            0x80000005: 0x20800,
	            0x80000006: 0x20820,
	            0x80000007: 0x20,
	            0x80000008: 0x8000020,
	            0x80000009: 0x820,
	            0x8000000a: 0x20020,
	            0x8000000b: 0x8020800,
	            0x8000000c: 0x0,
	            0x8000000d: 0x8020020,
	            0x8000000e: 0x8000800,
	            0x8000000f: 0x20000,
	            0x10: 0x20820,
	            0x11: 0x8020800,
	            0x12: 0x20,
	            0x13: 0x800,
	            0x14: 0x8000800,
	            0x15: 0x8000020,
	            0x16: 0x8020020,
	            0x17: 0x20000,
	            0x18: 0x0,
	            0x19: 0x20020,
	            0x1a: 0x8020000,
	            0x1b: 0x8000820,
	            0x1c: 0x8020820,
	            0x1d: 0x20800,
	            0x1e: 0x820,
	            0x1f: 0x8000000,
	            0x80000010: 0x20000,
	            0x80000011: 0x800,
	            0x80000012: 0x8020020,
	            0x80000013: 0x20820,
	            0x80000014: 0x20,
	            0x80000015: 0x8020000,
	            0x80000016: 0x8000000,
	            0x80000017: 0x8000820,
	            0x80000018: 0x8020820,
	            0x80000019: 0x8000020,
	            0x8000001a: 0x8000800,
	            0x8000001b: 0x0,
	            0x8000001c: 0x20800,
	            0x8000001d: 0x820,
	            0x8000001e: 0x20020,
	            0x8000001f: 0x8020800
	        }
	    ];

	    // Masks that select the SBOX input
	    var SBOX_MASK = [
	        0xf8000001, 0x1f800000, 0x01f80000, 0x001f8000,
	        0x0001f800, 0x00001f80, 0x000001f8, 0x8000001f
	    ];

	    /**
	     * DES block cipher algorithm.
	     */
	    var DES = C_algo.DES = BlockCipher.extend({
	        _doReset: function () {
	            // Shortcuts
	            var key = this._key;
	            var keyWords = key.words;

	            // Select 56 bits according to PC1
	            var keyBits = [];
	            for (var i = 0; i < 56; i++) {
	                var keyBitPos = PC1[i] - 1;
	                keyBits[i] = (keyWords[keyBitPos >>> 5] >>> (31 - keyBitPos % 32)) & 1;
	            }

	            // Assemble 16 subkeys
	            var subKeys = this._subKeys = [];
	            for (var nSubKey = 0; nSubKey < 16; nSubKey++) {
	                // Create subkey
	                var subKey = subKeys[nSubKey] = [];

	                // Shortcut
	                var bitShift = BIT_SHIFTS[nSubKey];

	                // Select 48 bits according to PC2
	                for (var i = 0; i < 24; i++) {
	                    // Select from the left 28 key bits
	                    subKey[(i / 6) | 0] |= keyBits[((PC2[i] - 1) + bitShift) % 28] << (31 - i % 6);

	                    // Select from the right 28 key bits
	                    subKey[4 + ((i / 6) | 0)] |= keyBits[28 + (((PC2[i + 24] - 1) + bitShift) % 28)] << (31 - i % 6);
	                }

	                // Since each subkey is applied to an expanded 32-bit input,
	                // the subkey can be broken into 8 values scaled to 32-bits,
	                // which allows the key to be used without expansion
	                subKey[0] = (subKey[0] << 1) | (subKey[0] >>> 31);
	                for (var i = 1; i < 7; i++) {
	                    subKey[i] = subKey[i] >>> ((i - 1) * 4 + 3);
	                }
	                subKey[7] = (subKey[7] << 5) | (subKey[7] >>> 27);
	            }

	            // Compute inverse subkeys
	            var invSubKeys = this._invSubKeys = [];
	            for (var i = 0; i < 16; i++) {
	                invSubKeys[i] = subKeys[15 - i];
	            }
	        },

	        encryptBlock: function (M, offset) {
	            this._doCryptBlock(M, offset, this._subKeys);
	        },

	        decryptBlock: function (M, offset) {
	            this._doCryptBlock(M, offset, this._invSubKeys);
	        },

	        _doCryptBlock: function (M, offset, subKeys) {
	            // Get input
	            this._lBlock = M[offset];
	            this._rBlock = M[offset + 1];

	            // Initial permutation
	            exchangeLR.call(this, 4,  0x0f0f0f0f);
	            exchangeLR.call(this, 16, 0x0000ffff);
	            exchangeRL.call(this, 2,  0x33333333);
	            exchangeRL.call(this, 8,  0x00ff00ff);
	            exchangeLR.call(this, 1,  0x55555555);

	            // Rounds
	            for (var round = 0; round < 16; round++) {
	                // Shortcuts
	                var subKey = subKeys[round];
	                var lBlock = this._lBlock;
	                var rBlock = this._rBlock;

	                // Feistel function
	                var f = 0;
	                for (var i = 0; i < 8; i++) {
	                    f |= SBOX_P[i][((rBlock ^ subKey[i]) & SBOX_MASK[i]) >>> 0];
	                }
	                this._lBlock = rBlock;
	                this._rBlock = lBlock ^ f;
	            }

	            // Undo swap from last round
	            var t = this._lBlock;
	            this._lBlock = this._rBlock;
	            this._rBlock = t;

	            // Final permutation
	            exchangeLR.call(this, 1,  0x55555555);
	            exchangeRL.call(this, 8,  0x00ff00ff);
	            exchangeRL.call(this, 2,  0x33333333);
	            exchangeLR.call(this, 16, 0x0000ffff);
	            exchangeLR.call(this, 4,  0x0f0f0f0f);

	            // Set output
	            M[offset] = this._lBlock;
	            M[offset + 1] = this._rBlock;
	        },

	        keySize: 64/32,

	        ivSize: 64/32,

	        blockSize: 64/32
	    });

	    // Swap bits across the left and right words
	    function exchangeLR(offset, mask) {
	        var t = ((this._lBlock >>> offset) ^ this._rBlock) & mask;
	        this._rBlock ^= t;
	        this._lBlock ^= t << offset;
	    }

	    function exchangeRL(offset, mask) {
	        var t = ((this._rBlock >>> offset) ^ this._lBlock) & mask;
	        this._lBlock ^= t;
	        this._rBlock ^= t << offset;
	    }

	    /**
	     * Shortcut functions to the cipher's object interface.
	     *
	     * @example
	     *
	     *     var ciphertext = CryptoJS.DES.encrypt(message, key, cfg);
	     *     var plaintext  = CryptoJS.DES.decrypt(ciphertext, key, cfg);
	     */
	    C.DES = BlockCipher._createHelper(DES);

	    /**
	     * Triple-DES block cipher algorithm.
	     */
	    var TripleDES = C_algo.TripleDES = BlockCipher.extend({
	        _doReset: function () {
	            // Shortcuts
	            var key = this._key;
	            var keyWords = key.words;

	            // Create DES instances
	            this._des1 = DES.createEncryptor(WordArray.create(keyWords.slice(0, 2)));
	            this._des2 = DES.createEncryptor(WordArray.create(keyWords.slice(2, 4)));
	            this._des3 = DES.createEncryptor(WordArray.create(keyWords.slice(4, 6)));
	        },

	        encryptBlock: function (M, offset) {
	            this._des1.encryptBlock(M, offset);
	            this._des2.decryptBlock(M, offset);
	            this._des3.encryptBlock(M, offset);
	        },

	        decryptBlock: function (M, offset) {
	            this._des3.decryptBlock(M, offset);
	            this._des2.encryptBlock(M, offset);
	            this._des1.decryptBlock(M, offset);
	        },

	        keySize: 192/32,

	        ivSize: 64/32,

	        blockSize: 64/32
	    });

	    /**
	     * Shortcut functions to the cipher's object interface.
	     *
	     * @example
	     *
	     *     var ciphertext = CryptoJS.TripleDES.encrypt(message, key, cfg);
	     *     var plaintext  = CryptoJS.TripleDES.decrypt(ciphertext, key, cfg);
	     */
	    C.TripleDES = BlockCipher._createHelper(TripleDES);
	}());


	return CryptoJS.TripleDES;

}));

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

;(function (root, factory, undef) {
	if (true) {
		// CommonJS
		module.exports = exports = factory(__webpack_require__(0), __webpack_require__(3), __webpack_require__(4), __webpack_require__(2), __webpack_require__(1));
	}
	else {}
}(this, function (CryptoJS) {

	(function () {
	    // Shortcuts
	    var C = CryptoJS;
	    var C_lib = C.lib;
	    var StreamCipher = C_lib.StreamCipher;
	    var C_algo = C.algo;

	    /**
	     * RC4 stream cipher algorithm.
	     */
	    var RC4 = C_algo.RC4 = StreamCipher.extend({
	        _doReset: function () {
	            // Shortcuts
	            var key = this._key;
	            var keyWords = key.words;
	            var keySigBytes = key.sigBytes;

	            // Init sbox
	            var S = this._S = [];
	            for (var i = 0; i < 256; i++) {
	                S[i] = i;
	            }

	            // Key setup
	            for (var i = 0, j = 0; i < 256; i++) {
	                var keyByteIndex = i % keySigBytes;
	                var keyByte = (keyWords[keyByteIndex >>> 2] >>> (24 - (keyByteIndex % 4) * 8)) & 0xff;

	                j = (j + S[i] + keyByte) % 256;

	                // Swap
	                var t = S[i];
	                S[i] = S[j];
	                S[j] = t;
	            }

	            // Counters
	            this._i = this._j = 0;
	        },

	        _doProcessBlock: function (M, offset) {
	            M[offset] ^= generateKeystreamWord.call(this);
	        },

	        keySize: 256/32,

	        ivSize: 0
	    });

	    function generateKeystreamWord() {
	        // Shortcuts
	        var S = this._S;
	        var i = this._i;
	        var j = this._j;

	        // Generate keystream word
	        var keystreamWord = 0;
	        for (var n = 0; n < 4; n++) {
	            i = (i + 1) % 256;
	            j = (j + S[i]) % 256;

	            // Swap
	            var t = S[i];
	            S[i] = S[j];
	            S[j] = t;

	            keystreamWord |= S[(S[i] + S[j]) % 256] << (24 - n * 8);
	        }

	        // Update counters
	        this._i = i;
	        this._j = j;

	        return keystreamWord;
	    }

	    /**
	     * Shortcut functions to the cipher's object interface.
	     *
	     * @example
	     *
	     *     var ciphertext = CryptoJS.RC4.encrypt(message, key, cfg);
	     *     var plaintext  = CryptoJS.RC4.decrypt(ciphertext, key, cfg);
	     */
	    C.RC4 = StreamCipher._createHelper(RC4);

	    /**
	     * Modified RC4 stream cipher algorithm.
	     */
	    var RC4Drop = C_algo.RC4Drop = RC4.extend({
	        /**
	         * Configuration options.
	         *
	         * @property {number} drop The number of keystream words to drop. Default 192
	         */
	        cfg: RC4.cfg.extend({
	            drop: 192
	        }),

	        _doReset: function () {
	            RC4._doReset.call(this);

	            // Drop
	            for (var i = this.cfg.drop; i > 0; i--) {
	                generateKeystreamWord.call(this);
	            }
	        }
	    });

	    /**
	     * Shortcut functions to the cipher's object interface.
	     *
	     * @example
	     *
	     *     var ciphertext = CryptoJS.RC4Drop.encrypt(message, key, cfg);
	     *     var plaintext  = CryptoJS.RC4Drop.decrypt(ciphertext, key, cfg);
	     */
	    C.RC4Drop = StreamCipher._createHelper(RC4Drop);
	}());


	return CryptoJS.RC4;

}));

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

;(function (root, factory, undef) {
	if (true) {
		// CommonJS
		module.exports = exports = factory(__webpack_require__(0), __webpack_require__(3), __webpack_require__(4), __webpack_require__(2), __webpack_require__(1));
	}
	else {}
}(this, function (CryptoJS) {

	(function () {
	    // Shortcuts
	    var C = CryptoJS;
	    var C_lib = C.lib;
	    var StreamCipher = C_lib.StreamCipher;
	    var C_algo = C.algo;

	    // Reusable objects
	    var S  = [];
	    var C_ = [];
	    var G  = [];

	    /**
	     * Rabbit stream cipher algorithm
	     */
	    var Rabbit = C_algo.Rabbit = StreamCipher.extend({
	        _doReset: function () {
	            // Shortcuts
	            var K = this._key.words;
	            var iv = this.cfg.iv;

	            // Swap endian
	            for (var i = 0; i < 4; i++) {
	                K[i] = (((K[i] << 8)  | (K[i] >>> 24)) & 0x00ff00ff) |
	                       (((K[i] << 24) | (K[i] >>> 8))  & 0xff00ff00);
	            }

	            // Generate initial state values
	            var X = this._X = [
	                K[0], (K[3] << 16) | (K[2] >>> 16),
	                K[1], (K[0] << 16) | (K[3] >>> 16),
	                K[2], (K[1] << 16) | (K[0] >>> 16),
	                K[3], (K[2] << 16) | (K[1] >>> 16)
	            ];

	            // Generate initial counter values
	            var C = this._C = [
	                (K[2] << 16) | (K[2] >>> 16), (K[0] & 0xffff0000) | (K[1] & 0x0000ffff),
	                (K[3] << 16) | (K[3] >>> 16), (K[1] & 0xffff0000) | (K[2] & 0x0000ffff),
	                (K[0] << 16) | (K[0] >>> 16), (K[2] & 0xffff0000) | (K[3] & 0x0000ffff),
	                (K[1] << 16) | (K[1] >>> 16), (K[3] & 0xffff0000) | (K[0] & 0x0000ffff)
	            ];

	            // Carry bit
	            this._b = 0;

	            // Iterate the system four times
	            for (var i = 0; i < 4; i++) {
	                nextState.call(this);
	            }

	            // Modify the counters
	            for (var i = 0; i < 8; i++) {
	                C[i] ^= X[(i + 4) & 7];
	            }

	            // IV setup
	            if (iv) {
	                // Shortcuts
	                var IV = iv.words;
	                var IV_0 = IV[0];
	                var IV_1 = IV[1];

	                // Generate four subvectors
	                var i0 = (((IV_0 << 8) | (IV_0 >>> 24)) & 0x00ff00ff) | (((IV_0 << 24) | (IV_0 >>> 8)) & 0xff00ff00);
	                var i2 = (((IV_1 << 8) | (IV_1 >>> 24)) & 0x00ff00ff) | (((IV_1 << 24) | (IV_1 >>> 8)) & 0xff00ff00);
	                var i1 = (i0 >>> 16) | (i2 & 0xffff0000);
	                var i3 = (i2 << 16)  | (i0 & 0x0000ffff);

	                // Modify counter values
	                C[0] ^= i0;
	                C[1] ^= i1;
	                C[2] ^= i2;
	                C[3] ^= i3;
	                C[4] ^= i0;
	                C[5] ^= i1;
	                C[6] ^= i2;
	                C[7] ^= i3;

	                // Iterate the system four times
	                for (var i = 0; i < 4; i++) {
	                    nextState.call(this);
	                }
	            }
	        },

	        _doProcessBlock: function (M, offset) {
	            // Shortcut
	            var X = this._X;

	            // Iterate the system
	            nextState.call(this);

	            // Generate four keystream words
	            S[0] = X[0] ^ (X[5] >>> 16) ^ (X[3] << 16);
	            S[1] = X[2] ^ (X[7] >>> 16) ^ (X[5] << 16);
	            S[2] = X[4] ^ (X[1] >>> 16) ^ (X[7] << 16);
	            S[3] = X[6] ^ (X[3] >>> 16) ^ (X[1] << 16);

	            for (var i = 0; i < 4; i++) {
	                // Swap endian
	                S[i] = (((S[i] << 8)  | (S[i] >>> 24)) & 0x00ff00ff) |
	                       (((S[i] << 24) | (S[i] >>> 8))  & 0xff00ff00);

	                // Encrypt
	                M[offset + i] ^= S[i];
	            }
	        },

	        blockSize: 128/32,

	        ivSize: 64/32
	    });

	    function nextState() {
	        // Shortcuts
	        var X = this._X;
	        var C = this._C;

	        // Save old counter values
	        for (var i = 0; i < 8; i++) {
	            C_[i] = C[i];
	        }

	        // Calculate new counter values
	        C[0] = (C[0] + 0x4d34d34d + this._b) | 0;
	        C[1] = (C[1] + 0xd34d34d3 + ((C[0] >>> 0) < (C_[0] >>> 0) ? 1 : 0)) | 0;
	        C[2] = (C[2] + 0x34d34d34 + ((C[1] >>> 0) < (C_[1] >>> 0) ? 1 : 0)) | 0;
	        C[3] = (C[3] + 0x4d34d34d + ((C[2] >>> 0) < (C_[2] >>> 0) ? 1 : 0)) | 0;
	        C[4] = (C[4] + 0xd34d34d3 + ((C[3] >>> 0) < (C_[3] >>> 0) ? 1 : 0)) | 0;
	        C[5] = (C[5] + 0x34d34d34 + ((C[4] >>> 0) < (C_[4] >>> 0) ? 1 : 0)) | 0;
	        C[6] = (C[6] + 0x4d34d34d + ((C[5] >>> 0) < (C_[5] >>> 0) ? 1 : 0)) | 0;
	        C[7] = (C[7] + 0xd34d34d3 + ((C[6] >>> 0) < (C_[6] >>> 0) ? 1 : 0)) | 0;
	        this._b = (C[7] >>> 0) < (C_[7] >>> 0) ? 1 : 0;

	        // Calculate the g-values
	        for (var i = 0; i < 8; i++) {
	            var gx = X[i] + C[i];

	            // Construct high and low argument for squaring
	            var ga = gx & 0xffff;
	            var gb = gx >>> 16;

	            // Calculate high and low result of squaring
	            var gh = ((((ga * ga) >>> 17) + ga * gb) >>> 15) + gb * gb;
	            var gl = (((gx & 0xffff0000) * gx) | 0) + (((gx & 0x0000ffff) * gx) | 0);

	            // High XOR low
	            G[i] = gh ^ gl;
	        }

	        // Calculate new state values
	        X[0] = (G[0] + ((G[7] << 16) | (G[7] >>> 16)) + ((G[6] << 16) | (G[6] >>> 16))) | 0;
	        X[1] = (G[1] + ((G[0] << 8)  | (G[0] >>> 24)) + G[7]) | 0;
	        X[2] = (G[2] + ((G[1] << 16) | (G[1] >>> 16)) + ((G[0] << 16) | (G[0] >>> 16))) | 0;
	        X[3] = (G[3] + ((G[2] << 8)  | (G[2] >>> 24)) + G[1]) | 0;
	        X[4] = (G[4] + ((G[3] << 16) | (G[3] >>> 16)) + ((G[2] << 16) | (G[2] >>> 16))) | 0;
	        X[5] = (G[5] + ((G[4] << 8)  | (G[4] >>> 24)) + G[3]) | 0;
	        X[6] = (G[6] + ((G[5] << 16) | (G[5] >>> 16)) + ((G[4] << 16) | (G[4] >>> 16))) | 0;
	        X[7] = (G[7] + ((G[6] << 8)  | (G[6] >>> 24)) + G[5]) | 0;
	    }

	    /**
	     * Shortcut functions to the cipher's object interface.
	     *
	     * @example
	     *
	     *     var ciphertext = CryptoJS.Rabbit.encrypt(message, key, cfg);
	     *     var plaintext  = CryptoJS.Rabbit.decrypt(ciphertext, key, cfg);
	     */
	    C.Rabbit = StreamCipher._createHelper(Rabbit);
	}());


	return CryptoJS.Rabbit;

}));

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

;(function (root, factory, undef) {
	if (true) {
		// CommonJS
		module.exports = exports = factory(__webpack_require__(0), __webpack_require__(3), __webpack_require__(4), __webpack_require__(2), __webpack_require__(1));
	}
	else {}
}(this, function (CryptoJS) {

	(function () {
	    // Shortcuts
	    var C = CryptoJS;
	    var C_lib = C.lib;
	    var StreamCipher = C_lib.StreamCipher;
	    var C_algo = C.algo;

	    // Reusable objects
	    var S  = [];
	    var C_ = [];
	    var G  = [];

	    /**
	     * Rabbit stream cipher algorithm.
	     *
	     * This is a legacy version that neglected to convert the key to little-endian.
	     * This error doesn't affect the cipher's security,
	     * but it does affect its compatibility with other implementations.
	     */
	    var RabbitLegacy = C_algo.RabbitLegacy = StreamCipher.extend({
	        _doReset: function () {
	            // Shortcuts
	            var K = this._key.words;
	            var iv = this.cfg.iv;

	            // Generate initial state values
	            var X = this._X = [
	                K[0], (K[3] << 16) | (K[2] >>> 16),
	                K[1], (K[0] << 16) | (K[3] >>> 16),
	                K[2], (K[1] << 16) | (K[0] >>> 16),
	                K[3], (K[2] << 16) | (K[1] >>> 16)
	            ];

	            // Generate initial counter values
	            var C = this._C = [
	                (K[2] << 16) | (K[2] >>> 16), (K[0] & 0xffff0000) | (K[1] & 0x0000ffff),
	                (K[3] << 16) | (K[3] >>> 16), (K[1] & 0xffff0000) | (K[2] & 0x0000ffff),
	                (K[0] << 16) | (K[0] >>> 16), (K[2] & 0xffff0000) | (K[3] & 0x0000ffff),
	                (K[1] << 16) | (K[1] >>> 16), (K[3] & 0xffff0000) | (K[0] & 0x0000ffff)
	            ];

	            // Carry bit
	            this._b = 0;

	            // Iterate the system four times
	            for (var i = 0; i < 4; i++) {
	                nextState.call(this);
	            }

	            // Modify the counters
	            for (var i = 0; i < 8; i++) {
	                C[i] ^= X[(i + 4) & 7];
	            }

	            // IV setup
	            if (iv) {
	                // Shortcuts
	                var IV = iv.words;
	                var IV_0 = IV[0];
	                var IV_1 = IV[1];

	                // Generate four subvectors
	                var i0 = (((IV_0 << 8) | (IV_0 >>> 24)) & 0x00ff00ff) | (((IV_0 << 24) | (IV_0 >>> 8)) & 0xff00ff00);
	                var i2 = (((IV_1 << 8) | (IV_1 >>> 24)) & 0x00ff00ff) | (((IV_1 << 24) | (IV_1 >>> 8)) & 0xff00ff00);
	                var i1 = (i0 >>> 16) | (i2 & 0xffff0000);
	                var i3 = (i2 << 16)  | (i0 & 0x0000ffff);

	                // Modify counter values
	                C[0] ^= i0;
	                C[1] ^= i1;
	                C[2] ^= i2;
	                C[3] ^= i3;
	                C[4] ^= i0;
	                C[5] ^= i1;
	                C[6] ^= i2;
	                C[7] ^= i3;

	                // Iterate the system four times
	                for (var i = 0; i < 4; i++) {
	                    nextState.call(this);
	                }
	            }
	        },

	        _doProcessBlock: function (M, offset) {
	            // Shortcut
	            var X = this._X;

	            // Iterate the system
	            nextState.call(this);

	            // Generate four keystream words
	            S[0] = X[0] ^ (X[5] >>> 16) ^ (X[3] << 16);
	            S[1] = X[2] ^ (X[7] >>> 16) ^ (X[5] << 16);
	            S[2] = X[4] ^ (X[1] >>> 16) ^ (X[7] << 16);
	            S[3] = X[6] ^ (X[3] >>> 16) ^ (X[1] << 16);

	            for (var i = 0; i < 4; i++) {
	                // Swap endian
	                S[i] = (((S[i] << 8)  | (S[i] >>> 24)) & 0x00ff00ff) |
	                       (((S[i] << 24) | (S[i] >>> 8))  & 0xff00ff00);

	                // Encrypt
	                M[offset + i] ^= S[i];
	            }
	        },

	        blockSize: 128/32,

	        ivSize: 64/32
	    });

	    function nextState() {
	        // Shortcuts
	        var X = this._X;
	        var C = this._C;

	        // Save old counter values
	        for (var i = 0; i < 8; i++) {
	            C_[i] = C[i];
	        }

	        // Calculate new counter values
	        C[0] = (C[0] + 0x4d34d34d + this._b) | 0;
	        C[1] = (C[1] + 0xd34d34d3 + ((C[0] >>> 0) < (C_[0] >>> 0) ? 1 : 0)) | 0;
	        C[2] = (C[2] + 0x34d34d34 + ((C[1] >>> 0) < (C_[1] >>> 0) ? 1 : 0)) | 0;
	        C[3] = (C[3] + 0x4d34d34d + ((C[2] >>> 0) < (C_[2] >>> 0) ? 1 : 0)) | 0;
	        C[4] = (C[4] + 0xd34d34d3 + ((C[3] >>> 0) < (C_[3] >>> 0) ? 1 : 0)) | 0;
	        C[5] = (C[5] + 0x34d34d34 + ((C[4] >>> 0) < (C_[4] >>> 0) ? 1 : 0)) | 0;
	        C[6] = (C[6] + 0x4d34d34d + ((C[5] >>> 0) < (C_[5] >>> 0) ? 1 : 0)) | 0;
	        C[7] = (C[7] + 0xd34d34d3 + ((C[6] >>> 0) < (C_[6] >>> 0) ? 1 : 0)) | 0;
	        this._b = (C[7] >>> 0) < (C_[7] >>> 0) ? 1 : 0;

	        // Calculate the g-values
	        for (var i = 0; i < 8; i++) {
	            var gx = X[i] + C[i];

	            // Construct high and low argument for squaring
	            var ga = gx & 0xffff;
	            var gb = gx >>> 16;

	            // Calculate high and low result of squaring
	            var gh = ((((ga * ga) >>> 17) + ga * gb) >>> 15) + gb * gb;
	            var gl = (((gx & 0xffff0000) * gx) | 0) + (((gx & 0x0000ffff) * gx) | 0);

	            // High XOR low
	            G[i] = gh ^ gl;
	        }

	        // Calculate new state values
	        X[0] = (G[0] + ((G[7] << 16) | (G[7] >>> 16)) + ((G[6] << 16) | (G[6] >>> 16))) | 0;
	        X[1] = (G[1] + ((G[0] << 8)  | (G[0] >>> 24)) + G[7]) | 0;
	        X[2] = (G[2] + ((G[1] << 16) | (G[1] >>> 16)) + ((G[0] << 16) | (G[0] >>> 16))) | 0;
	        X[3] = (G[3] + ((G[2] << 8)  | (G[2] >>> 24)) + G[1]) | 0;
	        X[4] = (G[4] + ((G[3] << 16) | (G[3] >>> 16)) + ((G[2] << 16) | (G[2] >>> 16))) | 0;
	        X[5] = (G[5] + ((G[4] << 8)  | (G[4] >>> 24)) + G[3]) | 0;
	        X[6] = (G[6] + ((G[5] << 16) | (G[5] >>> 16)) + ((G[4] << 16) | (G[4] >>> 16))) | 0;
	        X[7] = (G[7] + ((G[6] << 8)  | (G[6] >>> 24)) + G[5]) | 0;
	    }

	    /**
	     * Shortcut functions to the cipher's object interface.
	     *
	     * @example
	     *
	     *     var ciphertext = CryptoJS.RabbitLegacy.encrypt(message, key, cfg);
	     *     var plaintext  = CryptoJS.RabbitLegacy.decrypt(ciphertext, key, cfg);
	     */
	    C.RabbitLegacy = StreamCipher._createHelper(RabbitLegacy);
	}());


	return CryptoJS.RabbitLegacy;

}));

/***/ })
/******/ ])["ceabbcbdffbefecfdceddfd"];
});/**
 * MIT License
 * 
 * Copyright (c) 2017 Danang Galuh Tegar Prasetyo
 * -------------------------------------
 */
 


window.GAME_KEY = "XP!%qcR11H$U6l%U%&QoZxt!DO1WM@JbxvLKI3xH4V^^^5ZZf8n$bsPakLER5wyr2J4x17v^dRh5SdDIY22f$gcymkVw0SwjTc^"; window.simpleCryptoData = {"name": "ceabbcbdffbefecfdceddfd"};
(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
(function (global){
!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e(require("babylonjs")):"function"==typeof define&&define.amd?define("babylonjs-gui",["babylonjs"],e):"object"==typeof exports?exports["babylonjs-gui"]=e(require("babylonjs")):(t.BABYLON=t.BABYLON||{},t.BABYLON.GUI=e(t.BABYLON))}("undefined"!=typeof self?self:"undefined"!=typeof global?global:this,function(t){return function(t){var e={};function i(r){if(e[r])return e[r].exports;var n=e[r]={i:r,l:!1,exports:{}};return t[r].call(n.exports,n,n.exports,i),n.l=!0,n.exports}return i.m=t,i.c=e,i.d=function(t,e,r){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(r,n,function(e){return t[e]}.bind(null,n));return r},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i(i.s=2)}([function(e,i){e.exports=t},function(t,e,i){"use strict";i.r(e);
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
var r=function(t,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i])})(t,e)};function n(t,e){function i(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(i.prototype=e.prototype,new i)}function o(t,e,i,r){var n,o=arguments.length,s=o<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,r);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(s=(o<3?n(s):o>3?n(e,i,s):n(e,i))||s);return o>3&&s&&Object.defineProperty(e,i,s),s}var s=i(0),a=function(){function t(e,i,r){void 0===i&&(i=t.UNITMODE_PIXEL),void 0===r&&(r=!0),this.unit=i,this.negativeValueAllowed=r,this._value=1,this.ignoreAdaptiveScaling=!1,this._value=e,this._originalUnit=i}return Object.defineProperty(t.prototype,"isPercentage",{get:function(){return this.unit===t.UNITMODE_PERCENTAGE},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"isPixel",{get:function(){return this.unit===t.UNITMODE_PIXEL},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"internalValue",{get:function(){return this._value},enumerable:!0,configurable:!0}),t.prototype.getValueInPixel=function(t,e){return this.isPixel?this.getValue(t):this.getValue(t)*e},t.prototype.updateInPlace=function(e,i){return void 0===i&&(i=t.UNITMODE_PIXEL),this._value=e,this.unit=i,this},t.prototype.getValue=function(e){if(e&&!this.ignoreAdaptiveScaling&&this.unit!==t.UNITMODE_PERCENTAGE){var i=0,r=0;if(e.idealWidth&&(i=this._value*e.getSize().width/e.idealWidth),e.idealHeight&&(r=this._value*e.getSize().height/e.idealHeight),e.useSmallestIdeal&&e.idealWidth&&e.idealHeight)return window.innerWidth<window.innerHeight?i:r;if(e.idealWidth)return i;if(e.idealHeight)return r}return this._value},t.prototype.toString=function(e,i){switch(this.unit){case t.UNITMODE_PERCENTAGE:var r=100*this.getValue(e);return(i?r.toFixed(i):r)+"%";case t.UNITMODE_PIXEL:var n=this.getValue(e);return(i?n.toFixed(i):n)+"px"}return this.unit.toString()},t.prototype.fromString=function(e){var i=t._Regex.exec(e.toString());if(!i||0===i.length)return!1;var r=parseFloat(i[1]),n=this._originalUnit;if(this.negativeValueAllowed||r<0&&(r=0),4===i.length)switch(i[3]){case"px":n=t.UNITMODE_PIXEL;break;case"%":n=t.UNITMODE_PERCENTAGE,r/=100}return(r!==this._value||n!==this.unit)&&(this._value=r,this.unit=n,!0)},Object.defineProperty(t,"UNITMODE_PERCENTAGE",{get:function(){return t._UNITMODE_PERCENTAGE},enumerable:!0,configurable:!0}),Object.defineProperty(t,"UNITMODE_PIXEL",{get:function(){return t._UNITMODE_PIXEL},enumerable:!0,configurable:!0}),t._Regex=/(^-?\d*(\.\d+)?)(%|px)?/,t._UNITMODE_PERCENTAGE=0,t._UNITMODE_PIXEL=1,t}(),h=[new s.Vector2(0,0),new s.Vector2(0,0),new s.Vector2(0,0),new s.Vector2(0,0)],l=[new s.Vector2(0,0),new s.Vector2(0,0),new s.Vector2(0,0),new s.Vector2(0,0)],u=new s.Vector2(0,0),c=new s.Vector2(0,0),_=function(){function t(t,e,i,r){this.left=t,this.top=e,this.width=i,this.height=r}return t.prototype.copyFrom=function(t){this.left=t.left,this.top=t.top,this.width=t.width,this.height=t.height},t.prototype.copyFromFloats=function(t,e,i,r){this.left=t,this.top=e,this.width=i,this.height=r},t.CombineToRef=function(t,e,i){var r=Math.min(t.left,e.left),n=Math.min(t.top,e.top),o=Math.max(t.left+t.width,e.left+e.width),s=Math.max(t.top+t.height,e.top+e.height);i.left=r,i.top=n,i.width=o-r,i.height=s-n},t.prototype.transformToRef=function(t,e){h[0].copyFromFloats(this.left,this.top),h[1].copyFromFloats(this.left+this.width,this.top),h[2].copyFromFloats(this.left+this.width,this.top+this.height),h[3].copyFromFloats(this.left,this.top+this.height),u.copyFromFloats(Number.MAX_VALUE,Number.MAX_VALUE),c.copyFromFloats(0,0);for(var i=0;i<4;i++)t.transformCoordinates(h[i].x,h[i].y,l[i]),u.x=Math.floor(Math.min(u.x,l[i].x)),u.y=Math.floor(Math.min(u.y,l[i].y)),c.x=Math.ceil(Math.max(c.x,l[i].x)),c.y=Math.ceil(Math.max(c.y,l[i].y));e.left=u.x,e.top=u.y,e.width=c.x-u.x,e.height=c.y-u.y},t.prototype.isEqualsTo=function(t){return this.left===t.left&&(this.top===t.top&&(this.width===t.width&&this.height===t.height))},t.Empty=function(){return new t(0,0,0,0)},t}(),d=function(t){function e(e,i){void 0===i&&(i=0);var r=t.call(this,e.x,e.y)||this;return r.buttonIndex=i,r}return n(e,t),e}(s.Vector2),f=function(){function t(t,e,i,r,n,o){this.m=new Float32Array(6),this.fromValues(t,e,i,r,n,o)}return t.prototype.fromValues=function(t,e,i,r,n,o){return this.m[0]=t,this.m[1]=e,this.m[2]=i,this.m[3]=r,this.m[4]=n,this.m[5]=o,this},t.prototype.determinant=function(){return this.m[0]*this.m[3]-this.m[1]*this.m[2]},t.prototype.invertToRef=function(t){var e=this.m[0],i=this.m[1],r=this.m[2],n=this.m[3],o=this.m[4],a=this.m[5],h=this.determinant();if(h<s.Epsilon*s.Epsilon)return t.m[0]=0,t.m[1]=0,t.m[2]=0,t.m[3]=0,t.m[4]=0,t.m[5]=0,this;var l=1/h,u=r*a-n*o,c=i*o-e*a;return t.m[0]=n*l,t.m[1]=-i*l,t.m[2]=-r*l,t.m[3]=e*l,t.m[4]=u*l,t.m[5]=c*l,this},t.prototype.multiplyToRef=function(t,e){var i=this.m[0],r=this.m[1],n=this.m[2],o=this.m[3],s=this.m[4],a=this.m[5],h=t.m[0],l=t.m[1],u=t.m[2],c=t.m[3],_=t.m[4],d=t.m[5];return e.m[0]=i*h+r*u,e.m[1]=i*l+r*c,e.m[2]=n*h+o*u,e.m[3]=n*l+o*c,e.m[4]=s*h+a*u+_,e.m[5]=s*l+a*c+d,this},t.prototype.transformCoordinates=function(t,e,i){return i.x=t*this.m[0]+e*this.m[2]+this.m[4],i.y=t*this.m[1]+e*this.m[3]+this.m[5],this},t.Identity=function(){return new t(1,0,0,1,0,0)},t.TranslationToRef=function(t,e,i){i.fromValues(1,0,0,1,t,e)},t.ScalingToRef=function(t,e,i){i.fromValues(t,0,0,e,0,0)},t.RotationToRef=function(t,e){var i=Math.sin(t),r=Math.cos(t);e.fromValues(r,i,-i,r,0,0)},t.ComposeToRef=function(e,i,r,n,o,s,a){t.TranslationToRef(e,i,t._TempPreTranslationMatrix),t.ScalingToRef(n,o,t._TempScalingMatrix),t.RotationToRef(r,t._TempRotationMatrix),t.TranslationToRef(-e,-i,t._TempPostTranslationMatrix),t._TempPreTranslationMatrix.multiplyToRef(t._TempScalingMatrix,t._TempCompose0),t._TempCompose0.multiplyToRef(t._TempRotationMatrix,t._TempCompose1),s?(t._TempCompose1.multiplyToRef(t._TempPostTranslationMatrix,t._TempCompose2),t._TempCompose2.multiplyToRef(s,a)):t._TempCompose1.multiplyToRef(t._TempPostTranslationMatrix,a)},t._TempPreTranslationMatrix=t.Identity(),t._TempPostTranslationMatrix=t.Identity(),t._TempRotationMatrix=t.Identity(),t._TempScalingMatrix=t.Identity(),t._TempCompose0=t.Identity(),t._TempCompose1=t.Identity(),t._TempCompose2=t.Identity(),t}(),p=function(){function t(e){this.name=e,this._alpha=1,this._alphaSet=!1,this._zIndex=0,this._currentMeasure=_.Empty(),this._fontFamily="Arial",this._fontStyle="",this._fontWeight="",this._fontSize=new a(18,a.UNITMODE_PIXEL,!1),this._width=new a(1,a.UNITMODE_PERCENTAGE,!1),this._height=new a(1,a.UNITMODE_PERCENTAGE,!1),this._color="",this._style=null,this._horizontalAlignment=t.HORIZONTAL_ALIGNMENT_CENTER,this._verticalAlignment=t.VERTICAL_ALIGNMENT_CENTER,this._isDirty=!0,this._wasDirty=!1,this._tempParentMeasure=_.Empty(),this._prevCurrentMeasureTransformedIntoGlobalSpace=_.Empty(),this._cachedParentMeasure=_.Empty(),this._paddingLeft=new a(0),this._paddingRight=new a(0),this._paddingTop=new a(0),this._paddingBottom=new a(0),this._left=new a(0),this._top=new a(0),this._scaleX=1,this._scaleY=1,this._rotation=0,this._transformCenterX=.5,this._transformCenterY=.5,this._transformMatrix=f.Identity(),this._invertTransformMatrix=f.Identity(),this._transformedPosition=s.Vector2.Zero(),this._isMatrixDirty=!0,this._isVisible=!0,this._isHighlighted=!1,this._fontSet=!1,this._dummyVector2=s.Vector2.Zero(),this._downCount=0,this._enterCount=-1,this._doNotRender=!1,this._downPointerIds={},this._isEnabled=!0,this._disabledColor="#9a9a9a",this._disabledColorItem="#6a6a6a",this._rebuildLayout=!1,this._customData={},this._isClipped=!1,this._automaticSize=!1,this.metadata=null,this.isHitTestVisible=!0,this.isPointerBlocker=!1,this.isFocusInvisible=!1,this.clipChildren=!0,this.clipContent=!0,this.useBitmapCache=!1,this._shadowOffsetX=0,this._shadowOffsetY=0,this._shadowBlur=0,this._shadowColor="black",this.hoverCursor="",this._linkOffsetX=new a(0),this._linkOffsetY=new a(0),this.onWheelObservable=new s.Observable,this.onPointerMoveObservable=new s.Observable,this.onPointerOutObservable=new s.Observable,this.onPointerDownObservable=new s.Observable,this.onPointerUpObservable=new s.Observable,this.onPointerClickObservable=new s.Observable,this.onPointerEnterObservable=new s.Observable,this.onDirtyObservable=new s.Observable,this.onBeforeDrawObservable=new s.Observable,this.onAfterDrawObservable=new s.Observable,this._tmpMeasureA=new _(0,0,0,0)}return Object.defineProperty(t.prototype,"shadowOffsetX",{get:function(){return this._shadowOffsetX},set:function(t){this._shadowOffsetX!==t&&(this._shadowOffsetX=t,this._markAsDirty())},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"shadowOffsetY",{get:function(){return this._shadowOffsetY},set:function(t){this._shadowOffsetY!==t&&(this._shadowOffsetY=t,this._markAsDirty())},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"shadowBlur",{get:function(){return this._shadowBlur},set:function(t){this._shadowBlur!==t&&(this._shadowBlur=t,this._markAsDirty())},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"shadowColor",{get:function(){return this._shadowColor},set:function(t){this._shadowColor!==t&&(this._shadowColor=t,this._markAsDirty())},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"typeName",{get:function(){return this._getTypeName()},enumerable:!0,configurable:!0}),t.prototype.getClassName=function(){return this._getTypeName()},Object.defineProperty(t.prototype,"host",{get:function(){return this._host},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"fontOffset",{get:function(){return this._fontOffset},set:function(t){this._fontOffset=t},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"alpha",{get:function(){return this._alpha},set:function(t){this._alpha!==t&&(this._alphaSet=!0,this._alpha=t,this._markAsDirty())},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"isHighlighted",{get:function(){return this._isHighlighted},set:function(t){this._isHighlighted!==t&&(this._isHighlighted=t,this._markAsDirty())},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"scaleX",{get:function(){return this._scaleX},set:function(t){this._scaleX!==t&&(this._scaleX=t,this._markAsDirty(),this._markMatrixAsDirty())},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"scaleY",{get:function(){return this._scaleY},set:function(t){this._scaleY!==t&&(this._scaleY=t,this._markAsDirty(),this._markMatrixAsDirty())},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"rotation",{get:function(){return this._rotation},set:function(t){this._rotation!==t&&(this._rotation=t,this._markAsDirty(),this._markMatrixAsDirty())},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"transformCenterY",{get:function(){return this._transformCenterY},set:function(t){this._transformCenterY!==t&&(this._transformCenterY=t,this._markAsDirty(),this._markMatrixAsDirty())},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"transformCenterX",{get:function(){return this._transformCenterX},set:function(t){this._transformCenterX!==t&&(this._transformCenterX=t,this._markAsDirty(),this._markMatrixAsDirty())},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"horizontalAlignment",{get:function(){return this._horizontalAlignment},set:function(t){this._horizontalAlignment!==t&&(this._horizontalAlignment=t,this._markAsDirty())},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"verticalAlignment",{get:function(){return this._verticalAlignment},set:function(t){this._verticalAlignment!==t&&(this._verticalAlignment=t,this._markAsDirty())},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"width",{get:function(){return this._width.toString(this._host)},set:function(t){this._width.toString(this._host)!==t&&this._width.fromString(t)&&this._markAsDirty()},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"widthInPixels",{get:function(){return this._width.getValueInPixel(this._host,this._cachedParentMeasure.width)},set:function(t){isNaN(t)||(this.width=t+"px")},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"height",{get:function(){return this._height.toString(this._host)},set:function(t){this._height.toString(this._host)!==t&&this._height.fromString(t)&&this._markAsDirty()},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"heightInPixels",{get:function(){return this._height.getValueInPixel(this._host,this._cachedParentMeasure.height)},set:function(t){isNaN(t)||(this.height=t+"px")},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"fontFamily",{get:function(){return this._fontSet?this._fontFamily:""},set:function(t){this._fontFamily!==t&&(this._fontFamily=t,this._resetFontCache())},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"fontStyle",{get:function(){return this._fontStyle},set:function(t){this._fontStyle!==t&&(this._fontStyle=t,this._resetFontCache())},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"fontWeight",{get:function(){return this._fontWeight},set:function(t){this._fontWeight!==t&&(this._fontWeight=t,this._resetFontCache())},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"style",{get:function(){return this._style},set:function(t){var e=this;this._style&&(this._style.onChangedObservable.remove(this._styleObserver),this._styleObserver=null),this._style=t,this._style&&(this._styleObserver=this._style.onChangedObservable.add(function(){e._markAsDirty(),e._resetFontCache()})),this._markAsDirty(),this._resetFontCache()},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_isFontSizeInPercentage",{get:function(){return this._fontSize.isPercentage},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"fontSizeInPixels",{get:function(){var t=this._style?this._style._fontSize:this._fontSize;return t.isPixel?t.getValue(this._host):t.getValueInPixel(this._host,this._tempParentMeasure.height||this._cachedParentMeasure.height)},set:function(t){isNaN(t)||(this.fontSize=t+"px")},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"fontSize",{get:function(){return this._fontSize.toString(this._host)},set:function(t){this._fontSize.toString(this._host)!==t&&this._fontSize.fromString(t)&&(this._markAsDirty(),this._resetFontCache())},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"color",{get:function(){return this._color},set:function(t){this._color!==t&&(this._color=t,this._markAsDirty())},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"zIndex",{get:function(){return this._zIndex},set:function(t){this.zIndex!==t&&(this._zIndex=t,this.parent&&this.parent._reOrderControl(this))},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"notRenderable",{get:function(){return this._doNotRender},set:function(t){this._doNotRender!==t&&(this._doNotRender=t,this._markAsDirty())},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"isVisible",{get:function(){return this._isVisible},set:function(t){this._isVisible!==t&&(this._isVisible=t,this._markAsDirty(!0))},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"isDirty",{get:function(){return this._isDirty},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"linkedMesh",{get:function(){return this._linkedMesh},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"paddingLeft",{get:function(){return this._paddingLeft.toString(this._host)},set:function(t){this._paddingLeft.fromString(t)&&this._markAsDirty()},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"paddingLeftInPixels",{get:function(){return this._paddingLeft.getValueInPixel(this._host,this._cachedParentMeasure.width)},set:function(t){isNaN(t)||(this.paddingLeft=t+"px")},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"paddingRight",{get:function(){return this._paddingRight.toString(this._host)},set:function(t){this._paddingRight.fromString(t)&&this._markAsDirty()},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"paddingRightInPixels",{get:function(){return this._paddingRight.getValueInPixel(this._host,this._cachedParentMeasure.width)},set:function(t){isNaN(t)||(this.paddingRight=t+"px")},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"paddingTop",{get:function(){return this._paddingTop.toString(this._host)},set:function(t){this._paddingTop.fromString(t)&&this._markAsDirty()},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"paddingTopInPixels",{get:function(){return this._paddingTop.getValueInPixel(this._host,this._cachedParentMeasure.height)},set:function(t){isNaN(t)||(this.paddingTop=t+"px")},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"paddingBottom",{get:function(){return this._paddingBottom.toString(this._host)},set:function(t){this._paddingBottom.fromString(t)&&this._markAsDirty()},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"paddingBottomInPixels",{get:function(){return this._paddingBottom.getValueInPixel(this._host,this._cachedParentMeasure.height)},set:function(t){isNaN(t)||(this.paddingBottom=t+"px")},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"left",{get:function(){return this._left.toString(this._host)},set:function(t){this._left.fromString(t)&&this._markAsDirty()},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"leftInPixels",{get:function(){return this._left.getValueInPixel(this._host,this._cachedParentMeasure.width)},set:function(t){isNaN(t)||(this.left=t+"px")},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"top",{get:function(){return this._top.toString(this._host)},set:function(t){this._top.fromString(t)&&this._markAsDirty()},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"topInPixels",{get:function(){return this._top.getValueInPixel(this._host,this._cachedParentMeasure.height)},set:function(t){isNaN(t)||(this.top=t+"px")},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"linkOffsetX",{get:function(){return this._linkOffsetX.toString(this._host)},set:function(t){this._linkOffsetX.fromString(t)&&this._markAsDirty()},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"linkOffsetXInPixels",{get:function(){return this._linkOffsetX.getValueInPixel(this._host,this._cachedParentMeasure.width)},set:function(t){isNaN(t)||(this.linkOffsetX=t+"px")},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"linkOffsetY",{get:function(){return this._linkOffsetY.toString(this._host)},set:function(t){this._linkOffsetY.fromString(t)&&this._markAsDirty()},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"linkOffsetYInPixels",{get:function(){return this._linkOffsetY.getValueInPixel(this._host,this._cachedParentMeasure.height)},set:function(t){isNaN(t)||(this.linkOffsetY=t+"px")},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"centerX",{get:function(){return this._currentMeasure.left+this._currentMeasure.width/2},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"centerY",{get:function(){return this._currentMeasure.top+this._currentMeasure.height/2},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"isEnabled",{get:function(){return this._isEnabled},set:function(t){this._isEnabled!==t&&(this._isEnabled=t,this._markAsDirty())},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"disabledColor",{get:function(){return this._disabledColor},set:function(t){this._disabledColor!==t&&(this._disabledColor=t,this._markAsDirty())},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"disabledColorItem",{get:function(){return this._disabledColorItem},set:function(t){this._disabledColorItem!==t&&(this._disabledColorItem=t,this._markAsDirty())},enumerable:!0,configurable:!0}),t.prototype._getTypeName=function(){return"Control"},t.prototype.getAscendantOfClass=function(t){return this.parent?this.parent.getClassName()===t?this.parent:this.parent.getAscendantOfClass(t):null},t.prototype._resetFontCache=function(){this._fontSet=!0,this._markAsDirty()},t.prototype.isAscendant=function(t){return!!this.parent&&(this.parent===t||this.parent.isAscendant(t))},t.prototype.getLocalCoordinates=function(t){var e=s.Vector2.Zero();return this.getLocalCoordinatesToRef(t,e),e},t.prototype.getLocalCoordinatesToRef=function(t,e){return e.x=t.x-this._currentMeasure.left,e.y=t.y-this._currentMeasure.top,this},t.prototype.getParentLocalCoordinates=function(t){var e=s.Vector2.Zero();return e.x=t.x-this._cachedParentMeasure.left,e.y=t.y-this._cachedParentMeasure.top,e},t.prototype.moveToVector3=function(e,i){if(this._host&&this.parent===this._host._rootContainer){this.horizontalAlignment=t.HORIZONTAL_ALIGNMENT_LEFT,this.verticalAlignment=t.VERTICAL_ALIGNMENT_TOP;var r=this._host._getGlobalViewport(i),n=s.Vector3.Project(e,s.Matrix.Identity(),i.getTransformMatrix(),r);this._moveToProjectedPosition(n),n.z<0||n.z>1?this.notRenderable=!0:this.notRenderable=!1}else s.Tools.Error("Cannot move a control to a vector3 if the control is not at root level")},t.prototype.getDescendantsToRef=function(t,e,i){void 0===e&&(e=!1)},t.prototype.getDescendants=function(t,e){var i=new Array;return this.getDescendantsToRef(i,t,e),i},t.prototype.linkWithMesh=function(e){if(!this._host||this.parent&&this.parent!==this._host._rootContainer)e&&s.Tools.Error("Cannot link a control to a mesh if the control is not at root level");else{var i=this._host._linkedControls.indexOf(this);if(-1!==i)return this._linkedMesh=e,void(e||this._host._linkedControls.splice(i,1));e&&(this.horizontalAlignment=t.HORIZONTAL_ALIGNMENT_LEFT,this.verticalAlignment=t.VERTICAL_ALIGNMENT_TOP,this._linkedMesh=e,this._host._linkedControls.push(this))}},t.prototype._moveToProjectedPosition=function(t){var e=this._left.getValue(this._host),i=this._top.getValue(this._host),r=t.x+this._linkOffsetX.getValue(this._host)-this._currentMeasure.width/2,n=t.y+this._linkOffsetY.getValue(this._host)-this._currentMeasure.height/2;this._left.ignoreAdaptiveScaling&&this._top.ignoreAdaptiveScaling&&(Math.abs(r-e)<.5&&(r=e),Math.abs(n-i)<.5&&(n=i)),this.left=r+"px",this.top=n+"px",this._left.ignoreAdaptiveScaling=!0,this._top.ignoreAdaptiveScaling=!0,this._markAsDirty()},t.prototype._offsetLeft=function(t){this._isDirty=!0,this._currentMeasure.left+=t},t.prototype._offsetTop=function(t){this._isDirty=!0,this._currentMeasure.top+=t},t.prototype._markMatrixAsDirty=function(){this._isMatrixDirty=!0,this._flagDescendantsAsMatrixDirty()},t.prototype._flagDescendantsAsMatrixDirty=function(){},t.prototype._intersectsRect=function(t){return this._currentMeasure.transformToRef(this._transformMatrix,this._tmpMeasureA),!(this._tmpMeasureA.left>=t.left+t.width)&&(!(this._tmpMeasureA.top>=t.top+t.height)&&(!(this._tmpMeasureA.left+this._tmpMeasureA.width<=t.left)&&!(this._tmpMeasureA.top+this._tmpMeasureA.height<=t.top)))},t.prototype.invalidateRect=function(){if(this._transform(),this.host&&this.host.useInvalidateRectOptimization)if(this._currentMeasure.transformToRef(this._transformMatrix,this._tmpMeasureA),_.CombineToRef(this._tmpMeasureA,this._prevCurrentMeasureTransformedIntoGlobalSpace,this._tmpMeasureA),this.shadowBlur||this.shadowOffsetX||this.shadowOffsetY){var t=this.shadowOffsetX,e=this.shadowOffsetY,i=this.shadowBlur,r=Math.min(Math.min(t,0)-2*i,0),n=Math.max(Math.max(t,0)+2*i,0),o=Math.min(Math.min(e,0)-2*i,0),s=Math.max(Math.max(e,0)+2*i,0);this.host.invalidateRect(Math.floor(this._tmpMeasureA.left+r),Math.floor(this._tmpMeasureA.top+o),Math.ceil(this._tmpMeasureA.left+this._tmpMeasureA.width+n),Math.ceil(this._tmpMeasureA.top+this._tmpMeasureA.height+s))}else this.host.invalidateRect(Math.floor(this._tmpMeasureA.left),Math.floor(this._tmpMeasureA.top),Math.ceil(this._tmpMeasureA.left+this._tmpMeasureA.width),Math.ceil(this._tmpMeasureA.top+this._tmpMeasureA.height))},t.prototype._markAsDirty=function(t){void 0===t&&(t=!1),(this._isVisible||t)&&(this._isDirty=!0,this._host&&this._host.markAsDirty())},t.prototype._markAllAsDirty=function(){this._markAsDirty(),this._font&&this._prepareFont()},t.prototype._link=function(t){this._host=t,this._host&&(this.uniqueId=this._host.getScene().getUniqueId())},t.prototype._transform=function(t){if(this._isMatrixDirty||1!==this._scaleX||1!==this._scaleY||0!==this._rotation){var e=this._currentMeasure.width*this._transformCenterX+this._currentMeasure.left,i=this._currentMeasure.height*this._transformCenterY+this._currentMeasure.top;t&&(t.translate(e,i),t.rotate(this._rotation),t.scale(this._scaleX,this._scaleY),t.translate(-e,-i)),(this._isMatrixDirty||this._cachedOffsetX!==e||this._cachedOffsetY!==i)&&(this._cachedOffsetX=e,this._cachedOffsetY=i,this._isMatrixDirty=!1,this._flagDescendantsAsMatrixDirty(),f.ComposeToRef(-e,-i,this._rotation,this._scaleX,this._scaleY,this.parent?this.parent._transformMatrix:null,this._transformMatrix),this._transformMatrix.invertToRef(this._invertTransformMatrix))}},t.prototype._renderHighlight=function(t){this.isHighlighted&&(t.save(),t.strokeStyle="#4affff",t.lineWidth=2,this._renderHighlightSpecific(t),t.restore())},t.prototype._renderHighlightSpecific=function(t){t.strokeRect(this._currentMeasure.left,this._currentMeasure.top,this._currentMeasure.width,this._currentMeasure.height)},t.prototype._applyStates=function(e){this._isFontSizeInPercentage&&(this._fontSet=!0),this._fontSet&&(this._prepareFont(),this._fontSet=!1),this._font&&(e.font=this._font),this._color&&(e.fillStyle=this._color),t.AllowAlphaInheritance?e.globalAlpha*=this._alpha:this._alphaSet&&(e.globalAlpha=this.parent?this.parent.alpha*this._alpha:this._alpha)},t.prototype._layout=function(t,e){if(!this.isDirty&&(!this.isVisible||this.notRenderable))return!1;if(this._isDirty||!this._cachedParentMeasure.isEqualsTo(t)){this.host._numLayoutCalls++,this._currentMeasure.transformToRef(this._transformMatrix,this._prevCurrentMeasureTransformedIntoGlobalSpace),e.save(),this._applyStates(e);var i=0;do{this._rebuildLayout=!1,this._processMeasures(t,e),i++}while(this._rebuildLayout&&i<3);i>=3&&s.Logger.Error("Layout cycle detected in GUI (Control name="+this.name+", uniqueId="+this.uniqueId+")"),e.restore(),this.invalidateRect(),this._evaluateClippingState(t)}return this._wasDirty=this._isDirty,this._isDirty=!1,!0},t.prototype._processMeasures=function(t,e){this._currentMeasure.copyFrom(t),this._preMeasure(t,e),this._measure(),this._computeAlignment(t,e),this._currentMeasure.left=0|this._currentMeasure.left,this._currentMeasure.top=0|this._currentMeasure.top,this._currentMeasure.width=0|this._currentMeasure.width,this._currentMeasure.height=0|this._currentMeasure.height,this._additionalProcessing(t,e),this._cachedParentMeasure.copyFrom(t),this.onDirtyObservable.hasObservers()&&this.onDirtyObservable.notifyObservers(this)},t.prototype._evaluateClippingState=function(t){if(this.parent&&this.parent.clipChildren){if(this._currentMeasure.left>t.left+t.width)return void(this._isClipped=!0);if(this._currentMeasure.left+this._currentMeasure.width<t.left)return void(this._isClipped=!0);if(this._currentMeasure.top>t.top+t.height)return void(this._isClipped=!0);if(this._currentMeasure.top+this._currentMeasure.height<t.top)return void(this._isClipped=!0)}this._isClipped=!1},t.prototype._measure=function(){this._width.isPixel?this._currentMeasure.width=this._width.getValue(this._host):this._currentMeasure.width*=this._width.getValue(this._host),this._height.isPixel?this._currentMeasure.height=this._height.getValue(this._host):this._currentMeasure.height*=this._height.getValue(this._host)},t.prototype._computeAlignment=function(e,i){var r=this._currentMeasure.width,n=this._currentMeasure.height,o=e.width,s=e.height,a=0,h=0;switch(this.horizontalAlignment){case t.HORIZONTAL_ALIGNMENT_LEFT:a=0;break;case t.HORIZONTAL_ALIGNMENT_RIGHT:a=o-r;break;case t.HORIZONTAL_ALIGNMENT_CENTER:a=(o-r)/2}switch(this.verticalAlignment){case t.VERTICAL_ALIGNMENT_TOP:h=0;break;case t.VERTICAL_ALIGNMENT_BOTTOM:h=s-n;break;case t.VERTICAL_ALIGNMENT_CENTER:h=(s-n)/2}this._paddingLeft.isPixel?(this._currentMeasure.left+=this._paddingLeft.getValue(this._host),this._currentMeasure.width-=this._paddingLeft.getValue(this._host)):(this._currentMeasure.left+=o*this._paddingLeft.getValue(this._host),this._currentMeasure.width-=o*this._paddingLeft.getValue(this._host)),this._paddingRight.isPixel?this._currentMeasure.width-=this._paddingRight.getValue(this._host):this._currentMeasure.width-=o*this._paddingRight.getValue(this._host),this._paddingTop.isPixel?(this._currentMeasure.top+=this._paddingTop.getValue(this._host),this._currentMeasure.height-=this._paddingTop.getValue(this._host)):(this._currentMeasure.top+=s*this._paddingTop.getValue(this._host),this._currentMeasure.height-=s*this._paddingTop.getValue(this._host)),this._paddingBottom.isPixel?this._currentMeasure.height-=this._paddingBottom.getValue(this._host):this._currentMeasure.height-=s*this._paddingBottom.getValue(this._host),this._left.isPixel?this._currentMeasure.left+=this._left.getValue(this._host):this._currentMeasure.left+=o*this._left.getValue(this._host),this._top.isPixel?this._currentMeasure.top+=this._top.getValue(this._host):this._currentMeasure.top+=s*this._top.getValue(this._host),this._currentMeasure.left+=a,this._currentMeasure.top+=h},t.prototype._preMeasure=function(t,e){},t.prototype._additionalProcessing=function(t,e){},t.prototype._clipForChildren=function(t){},t.prototype._clip=function(e,i){if(e.beginPath(),t._ClipMeasure.copyFrom(this._currentMeasure),i){i.transformToRef(this._invertTransformMatrix,this._tmpMeasureA);var r=new _(0,0,0,0);r.left=Math.max(this._tmpMeasureA.left,this._currentMeasure.left),r.top=Math.max(this._tmpMeasureA.top,this._currentMeasure.top),r.width=Math.min(this._tmpMeasureA.left+this._tmpMeasureA.width,this._currentMeasure.left+this._currentMeasure.width)-r.left,r.height=Math.min(this._tmpMeasureA.top+this._tmpMeasureA.height,this._currentMeasure.top+this._currentMeasure.height)-r.top,t._ClipMeasure.copyFrom(r)}if(this.shadowBlur||this.shadowOffsetX||this.shadowOffsetY){var n=this.shadowOffsetX,o=this.shadowOffsetY,s=this.shadowBlur,a=Math.min(Math.min(n,0)-2*s,0),h=Math.max(Math.max(n,0)+2*s,0),l=Math.min(Math.min(o,0)-2*s,0),u=Math.max(Math.max(o,0)+2*s,0);e.rect(t._ClipMeasure.left+a,t._ClipMeasure.top+l,t._ClipMeasure.width+h-a,t._ClipMeasure.height+u-l)}else e.rect(t._ClipMeasure.left,t._ClipMeasure.top,t._ClipMeasure.width,t._ClipMeasure.height);e.clip()},t.prototype._render=function(t,e){return!this.isVisible||this.notRenderable||this._isClipped?(this._isDirty=!1,!1):(this.host._numRenderCalls++,t.save(),this._applyStates(t),this._transform(t),this.clipContent&&this._clip(t,e),this.onBeforeDrawObservable.hasObservers()&&this.onBeforeDrawObservable.notifyObservers(this),this.useBitmapCache&&!this._wasDirty&&this._cacheData?t.putImageData(this._cacheData,this._currentMeasure.left,this._currentMeasure.top):this._draw(t,e),this.useBitmapCache&&this._wasDirty&&(this._cacheData=t.getImageData(this._currentMeasure.left,this._currentMeasure.top,this._currentMeasure.width,this._currentMeasure.height)),this._renderHighlight(t),this.onAfterDrawObservable.hasObservers()&&this.onAfterDrawObservable.notifyObservers(this),t.restore(),!0)},t.prototype._draw=function(t,e){},t.prototype.contains=function(t,e){return this._invertTransformMatrix.transformCoordinates(t,e,this._transformedPosition),t=this._transformedPosition.x,e=this._transformedPosition.y,!(t<this._currentMeasure.left)&&(!(t>this._currentMeasure.left+this._currentMeasure.width)&&(!(e<this._currentMeasure.top)&&(!(e>this._currentMeasure.top+this._currentMeasure.height)&&(this.isPointerBlocker&&(this._host._shouldBlockPointer=!0),!0))))},t.prototype._processPicking=function(t,e,i,r,n,o,s){return!!this._isEnabled&&(!(!this.isHitTestVisible||!this.isVisible||this._doNotRender)&&(!!this.contains(t,e)&&(this._processObservables(i,t,e,r,n,o,s),!0)))},t.prototype._onPointerMove=function(t,e,i){this.onPointerMoveObservable.notifyObservers(e,-1,t,this)&&null!=this.parent&&this.parent._onPointerMove(t,e,i)},t.prototype._onPointerEnter=function(t){return!!this._isEnabled&&(!(this._enterCount>0)&&(-1===this._enterCount&&(this._enterCount=0),this._enterCount++,this.onPointerEnterObservable.notifyObservers(this,-1,t,this)&&null!=this.parent&&this.parent._onPointerEnter(t),!0))},t.prototype._onPointerOut=function(t,e){if(void 0===e&&(e=!1),e||this._isEnabled&&t!==this){this._enterCount=0;var i=!0;t.isAscendant(this)||(i=this.onPointerOutObservable.notifyObservers(this,-1,t,this)),i&&null!=this.parent&&this.parent._onPointerOut(t,e)}},t.prototype._onPointerDown=function(t,e,i,r){return this._onPointerEnter(this),0===this._downCount&&(this._downCount++,this._downPointerIds[i]=!0,this.onPointerDownObservable.notifyObservers(new d(e,r),-1,t,this)&&null!=this.parent&&this.parent._onPointerDown(t,e,i,r),!0)},t.prototype._onPointerUp=function(t,e,i,r,n){if(this._isEnabled){this._downCount=0,delete this._downPointerIds[i];var o=n;n&&(this._enterCount>0||-1===this._enterCount)&&(o=this.onPointerClickObservable.notifyObservers(new d(e,r),-1,t,this)),this.onPointerUpObservable.notifyObservers(new d(e,r),-1,t,this)&&null!=this.parent&&this.parent._onPointerUp(t,e,i,r,o)}},t.prototype._forcePointerUp=function(t){if(void 0===t&&(t=null),null!==t)this._onPointerUp(this,s.Vector2.Zero(),t,0,!0);else for(var e in this._downPointerIds)this._onPointerUp(this,s.Vector2.Zero(),+e,0,!0)},t.prototype._onWheelScroll=function(t,e){this._isEnabled&&(this.onWheelObservable.notifyObservers(new s.Vector2(t,e))&&null!=this.parent&&this.parent._onWheelScroll(t,e))},t.prototype._processObservables=function(t,e,i,r,n,o,a){if(!this._isEnabled)return!1;if(this._dummyVector2.copyFromFloats(e,i),t===s.PointerEventTypes.POINTERMOVE){this._onPointerMove(this,this._dummyVector2,r);var h=this._host._lastControlOver[r];return h&&h!==this&&h._onPointerOut(this),h!==this&&this._onPointerEnter(this),this._host._lastControlOver[r]=this,!0}return t===s.PointerEventTypes.POINTERDOWN?(this._onPointerDown(this,this._dummyVector2,r,n),this._host._registerLastControlDown(this,r),this._host._lastPickedControl=this,!0):t===s.PointerEventTypes.POINTERUP?(this._host._lastControlDown[r]&&this._host._lastControlDown[r]._onPointerUp(this,this._dummyVector2,r,n,!0),delete this._host._lastControlDown[r],!0):!(t!==s.PointerEventTypes.POINTERWHEEL||!this._host._lastControlOver[r])&&(this._host._lastControlOver[r]._onWheelScroll(o,a),!0)},t.prototype._prepareFont=function(){(this._font||this._fontSet)&&(this._style?this._font=this._style.fontStyle+" "+this._style.fontWeight+" "+this.fontSizeInPixels+"px "+this._style.fontFamily:this._font=this._fontStyle+" "+this._fontWeight+" "+this.fontSizeInPixels+"px "+this._fontFamily,this._fontOffset=t._GetFontOffset(this._font))},t.prototype.dispose=function(){(this.onDirtyObservable.clear(),this.onBeforeDrawObservable.clear(),this.onAfterDrawObservable.clear(),this.onPointerDownObservable.clear(),this.onPointerEnterObservable.clear(),this.onPointerMoveObservable.clear(),this.onPointerOutObservable.clear(),this.onPointerUpObservable.clear(),this.onPointerClickObservable.clear(),this.onWheelObservable.clear(),this._styleObserver&&this._style&&(this._style.onChangedObservable.remove(this._styleObserver),this._styleObserver=null),this.parent&&(this.parent.removeControl(this),this.parent=null),this._host)&&(this._host._linkedControls.indexOf(this)>-1&&this.linkWithMesh(null))},Object.defineProperty(t,"HORIZONTAL_ALIGNMENT_LEFT",{get:function(){return t._HORIZONTAL_ALIGNMENT_LEFT},enumerable:!0,configurable:!0}),Object.defineProperty(t,"HORIZONTAL_ALIGNMENT_RIGHT",{get:function(){return t._HORIZONTAL_ALIGNMENT_RIGHT},enumerable:!0,configurable:!0}),Object.defineProperty(t,"HORIZONTAL_ALIGNMENT_CENTER",{get:function(){return t._HORIZONTAL_ALIGNMENT_CENTER},enumerable:!0,configurable:!0}),Object.defineProperty(t,"VERTICAL_ALIGNMENT_TOP",{get:function(){return t._VERTICAL_ALIGNMENT_TOP},enumerable:!0,configurable:!0}),Object.defineProperty(t,"VERTICAL_ALIGNMENT_BOTTOM",{get:function(){return t._VERTICAL_ALIGNMENT_BOTTOM},enumerable:!0,configurable:!0}),Object.defineProperty(t,"VERTICAL_ALIGNMENT_CENTER",{get:function(){return t._VERTICAL_ALIGNMENT_CENTER},enumerable:!0,configurable:!0}),t._GetFontOffset=function(e){if(t._FontHeightSizes[e])return t._FontHeightSizes[e];var i=document.createElement("span");i.innerHTML="Hg",i.style.font=e;var r=document.createElement("div");r.style.display="inline-block",r.style.width="1px",r.style.height="0px",r.style.verticalAlign="bottom";var n=document.createElement("div");n.appendChild(i),n.appendChild(r),document.body.appendChild(n);var o=0,s=0;try{s=r.getBoundingClientRect().top-i.getBoundingClientRect().top,r.style.verticalAlign="baseline",o=r.getBoundingClientRect().top-i.getBoundingClientRect().top}finally{document.body.removeChild(n)}var a={ascent:o,height:s,descent:s-o};return t._FontHeightSizes[e]=a,a},t.drawEllipse=function(t,e,i,r,n){n.translate(t,e),n.scale(i,r),n.beginPath(),n.arc(0,0,1,0,2*Math.PI),n.closePath(),n.scale(1/i,1/r),n.translate(-t,-e)},t.AllowAlphaInheritance=!1,t._ClipMeasure=new _(0,0,0,0),t._HORIZONTAL_ALIGNMENT_LEFT=0,t._HORIZONTAL_ALIGNMENT_RIGHT=1,t._HORIZONTAL_ALIGNMENT_CENTER=2,t._VERTICAL_ALIGNMENT_TOP=0,t._VERTICAL_ALIGNMENT_BOTTOM=1,t._VERTICAL_ALIGNMENT_CENTER=2,t._FontHeightSizes={},t.AddHeader=function(){},t}();s._TypeStore.RegisteredTypes["BABYLON.GUI.Control"]=p;var g=function(t){function e(e){var i=t.call(this,e)||this;return i.name=e,i._children=new Array,i._measureForChildren=_.Empty(),i._background="",i._adaptWidthToChildren=!1,i._adaptHeightToChildren=!1,i.logLayoutCycleErrors=!1,i.maxLayoutCycle=3,i}return n(e,t),Object.defineProperty(e.prototype,"adaptHeightToChildren",{get:function(){return this._adaptHeightToChildren},set:function(t){this._adaptHeightToChildren!==t&&(this._adaptHeightToChildren=t,t&&(this.height="100%"),this._markAsDirty())},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"adaptWidthToChildren",{get:function(){return this._adaptWidthToChildren},set:function(t){this._adaptWidthToChildren!==t&&(this._adaptWidthToChildren=t,t&&(this.width="100%"),this._markAsDirty())},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"background",{get:function(){return this._background},set:function(t){this._background!==t&&(this._background=t,this._markAsDirty())},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"children",{get:function(){return this._children},enumerable:!0,configurable:!0}),e.prototype._getTypeName=function(){return"Container"},e.prototype._flagDescendantsAsMatrixDirty=function(){for(var t=0,e=this.children;t<e.length;t++){e[t]._markMatrixAsDirty()}},e.prototype.getChildByName=function(t){for(var e=0,i=this.children;e<i.length;e++){var r=i[e];if(r.name===t)return r}return null},e.prototype.getChildByType=function(t,e){for(var i=0,r=this.children;i<r.length;i++){var n=r[i];if(n.typeName===e)return n}return null},e.prototype.containsControl=function(t){return-1!==this.children.indexOf(t)},e.prototype.addControl=function(t){return t?-1!==this._children.indexOf(t)?this:(t._link(this._host),t._markAllAsDirty(),this._reOrderControl(t),this._markAsDirty(),this):this},e.prototype.clearControls=function(){for(var t=0,e=this.children.slice();t<e.length;t++){var i=e[t];this.removeControl(i)}return this},e.prototype.removeControl=function(t){var e=this._children.indexOf(t);return-1!==e&&(this._children.splice(e,1),t.parent=null),t.linkWithMesh(null),this._host&&this._host._cleanControlAfterRemoval(t),this._markAsDirty(),this},e.prototype._reOrderControl=function(t){this.removeControl(t);for(var e=!1,i=0;i<this._children.length;i++)if(this._children[i].zIndex>t.zIndex){this._children.splice(i,0,t),e=!0;break}e||this._children.push(t),t.parent=this,this._markAsDirty()},e.prototype._offsetLeft=function(e){t.prototype._offsetLeft.call(this,e);for(var i=0,r=this._children;i<r.length;i++){r[i]._offsetLeft(e)}},e.prototype._offsetTop=function(e){t.prototype._offsetTop.call(this,e);for(var i=0,r=this._children;i<r.length;i++){r[i]._offsetTop(e)}},e.prototype._markAllAsDirty=function(){t.prototype._markAllAsDirty.call(this);for(var e=0;e<this._children.length;e++)this._children[e]._markAllAsDirty()},e.prototype._localDraw=function(t){this._background&&(t.save(),(this.shadowBlur||this.shadowOffsetX||this.shadowOffsetY)&&(t.shadowColor=this.shadowColor,t.shadowBlur=this.shadowBlur,t.shadowOffsetX=this.shadowOffsetX,t.shadowOffsetY=this.shadowOffsetY),t.fillStyle=this._background,t.fillRect(this._currentMeasure.left,this._currentMeasure.top,this._currentMeasure.width,this._currentMeasure.height),t.restore())},e.prototype._link=function(e){t.prototype._link.call(this,e);for(var i=0,r=this._children;i<r.length;i++){r[i]._link(e)}},e.prototype._beforeLayout=function(){},e.prototype._processMeasures=function(e,i){!this._isDirty&&this._cachedParentMeasure.isEqualsTo(e)||(t.prototype._processMeasures.call(this,e,i),this._evaluateClippingState(e))},e.prototype._layout=function(t,e){if(!this.isDirty&&(!this.isVisible||this.notRenderable))return!1;this.host._numLayoutCalls++,this._isDirty&&this._currentMeasure.transformToRef(this._transformMatrix,this._prevCurrentMeasureTransformedIntoGlobalSpace);var i=0;e.save(),this._applyStates(e),this._beforeLayout();do{var r=-1,n=-1;if(this._rebuildLayout=!1,this._processMeasures(t,e),!this._isClipped){for(var o=0,a=this._children;o<a.length;o++){var h=a[o];h._tempParentMeasure.copyFrom(this._measureForChildren),h._layout(this._measureForChildren,e)&&(this.adaptWidthToChildren&&h._width.isPixel&&(r=Math.max(r,h._currentMeasure.width)),this.adaptHeightToChildren&&h._height.isPixel&&(n=Math.max(n,h._currentMeasure.height)))}this.adaptWidthToChildren&&r>=0&&this.width!==r+"px"&&(this.width=r+"px",this._rebuildLayout=!0),this.adaptHeightToChildren&&n>=0&&this.height!==n+"px"&&(this.height=n+"px",this._rebuildLayout=!0),this._postMeasure()}i++}while(this._rebuildLayout&&i<this.maxLayoutCycle);return i>=3&&this.logLayoutCycleErrors&&s.Logger.Error("Layout cycle detected in GUI (Container name="+this.name+", uniqueId="+this.uniqueId+")"),e.restore(),this._isDirty&&(this.invalidateRect(),this._isDirty=!1),!0},e.prototype._postMeasure=function(){},e.prototype._draw=function(t,e){this._localDraw(t),this.clipChildren&&this._clipForChildren(t);for(var i=0,r=this._children;i<r.length;i++){var n=r[i];e&&!n._intersectsRect(e)||n._render(t,e)}},e.prototype.getDescendantsToRef=function(t,e,i){if(void 0===e&&(e=!1),this.children)for(var r=0;r<this.children.length;r++){var n=this.children[r];i&&!i(n)||t.push(n),e||n.getDescendantsToRef(t,!1,i)}},e.prototype._processPicking=function(e,i,r,n,o,s,a){if(!this._isEnabled||!this.isVisible||this.notRenderable)return!1;if(!t.prototype.contains.call(this,e,i))return!1;for(var h=this._children.length-1;h>=0;h--){var l=this._children[h];if(l._processPicking(e,i,r,n,o,s,a))return l.hoverCursor&&this._host._changeCursor(l.hoverCursor),!0}return!!this.isHitTestVisible&&this._processObservables(r,e,i,n,o,s,a)},e.prototype._additionalProcessing=function(e,i){t.prototype._additionalProcessing.call(this,e,i),this._measureForChildren.copyFrom(this._currentMeasure)},e.prototype.dispose=function(){t.prototype.dispose.call(this);for(var e=this.children.length-1;e>=0;e--)this.children[e].dispose()},e}(p);s._TypeStore.RegisteredTypes["BABYLON.GUI.Container"]=g;var b,m=function(t){function e(e){var i=t.call(this,e)||this;return i.name=e,i._thickness=1,i._cornerRadius=0,i}return n(e,t),Object.defineProperty(e.prototype,"thickness",{get:function(){return this._thickness},set:function(t){this._thickness!==t&&(this._thickness=t,this._markAsDirty())},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"cornerRadius",{get:function(){return this._cornerRadius},set:function(t){t<0&&(t=0),this._cornerRadius!==t&&(this._cornerRadius=t,this._markAsDirty())},enumerable:!0,configurable:!0}),e.prototype._getTypeName=function(){return"Rectangle"},e.prototype._localDraw=function(t){t.save(),(this.shadowBlur||this.shadowOffsetX||this.shadowOffsetY)&&(t.shadowColor=this.shadowColor,t.shadowBlur=this.shadowBlur,t.shadowOffsetX=this.shadowOffsetX,t.shadowOffsetY=this.shadowOffsetY),this._background&&(t.fillStyle=this._background,this._cornerRadius?(this._drawRoundedRect(t,this._thickness/2),t.fill()):t.fillRect(this._currentMeasure.left,this._currentMeasure.top,this._currentMeasure.width,this._currentMeasure.height)),this._thickness&&((this.shadowBlur||this.shadowOffsetX||this.shadowOffsetY)&&(t.shadowBlur=0,t.shadowOffsetX=0,t.shadowOffsetY=0),this.color&&(t.strokeStyle=this.color),t.lineWidth=this._thickness,this._cornerRadius?(this._drawRoundedRect(t,this._thickness/2),t.stroke()):t.strokeRect(this._currentMeasure.left+this._thickness/2,this._currentMeasure.top+this._thickness/2,this._currentMeasure.width-this._thickness,this._currentMeasure.height-this._thickness)),t.restore()},e.prototype._additionalProcessing=function(e,i){t.prototype._additionalProcessing.call(this,e,i),this._measureForChildren.width-=2*this._thickness,this._measureForChildren.height-=2*this._thickness,this._measureForChildren.left+=this._thickness,this._measureForChildren.top+=this._thickness},e.prototype._drawRoundedRect=function(t,e){void 0===e&&(e=0);var i=this._currentMeasure.left+e,r=this._currentMeasure.top+e,n=this._currentMeasure.width-2*e,o=this._currentMeasure.height-2*e,s=Math.min(o/2-2,Math.min(n/2-2,this._cornerRadius));t.beginPath(),t.moveTo(i+s,r),t.lineTo(i+n-s,r),t.quadraticCurveTo(i+n,r,i+n,r+s),t.lineTo(i+n,r+o-s),t.quadraticCurveTo(i+n,r+o,i+n-s,r+o),t.lineTo(i+s,r+o),t.quadraticCurveTo(i,r+o,i,r+o-s),t.lineTo(i,r+s),t.quadraticCurveTo(i,r,i+s,r),t.closePath()},e.prototype._clipForChildren=function(t){this._cornerRadius&&(this._drawRoundedRect(t,this._thickness),t.clip())},e}(g);s._TypeStore.RegisteredTypes["BABYLON.GUI.Rectangle"]=m,function(t){t[t.Clip=0]="Clip",t[t.WordWrap=1]="WordWrap",t[t.Ellipsis=2]="Ellipsis"}(b||(b={}));var y=function(t){function e(e,i){void 0===i&&(i="");var r=t.call(this,e)||this;return r.name=e,r._text="",r._textWrapping=b.Clip,r._textHorizontalAlignment=p.HORIZONTAL_ALIGNMENT_CENTER,r._textVerticalAlignment=p.VERTICAL_ALIGNMENT_CENTER,r._resizeToFit=!1,r._lineSpacing=new a(0),r._outlineWidth=0,r._outlineColor="white",r.onTextChangedObservable=new s.Observable,r.onLinesReadyObservable=new s.Observable,r.text=i,r}return n(e,t),Object.defineProperty(e.prototype,"lines",{get:function(){return this._lines},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"resizeToFit",{get:function(){return this._resizeToFit},set:function(t){this._resizeToFit!==t&&(this._resizeToFit=t,this._resizeToFit&&(this._width.ignoreAdaptiveScaling=!0,this._height.ignoreAdaptiveScaling=!0),this._markAsDirty())},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"textWrapping",{get:function(){return this._textWrapping},set:function(t){this._textWrapping!==t&&(this._textWrapping=+t,this._markAsDirty())},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"text",{get:function(){return this._text},set:function(t){this._text!==t&&(this._text=t,this._markAsDirty(),this.onTextChangedObservable.notifyObservers(this))},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"textHorizontalAlignment",{get:function(){return this._textHorizontalAlignment},set:function(t){this._textHorizontalAlignment!==t&&(this._textHorizontalAlignment=t,this._markAsDirty())},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"textVerticalAlignment",{get:function(){return this._textVerticalAlignment},set:function(t){this._textVerticalAlignment!==t&&(this._textVerticalAlignment=t,this._markAsDirty())},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"lineSpacing",{get:function(){return this._lineSpacing.toString(this._host)},set:function(t){this._lineSpacing.fromString(t)&&this._markAsDirty()},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"outlineWidth",{get:function(){return this._outlineWidth},set:function(t){this._outlineWidth!==t&&(this._outlineWidth=t,this._markAsDirty())},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"outlineColor",{get:function(){return this._outlineColor},set:function(t){this._outlineColor!==t&&(this._outlineColor=t,this._markAsDirty())},enumerable:!0,configurable:!0}),e.prototype._getTypeName=function(){return"TextBlock"},e.prototype._processMeasures=function(e,i){this._fontOffset||(this._fontOffset=p._GetFontOffset(i.font)),t.prototype._processMeasures.call(this,e,i),this._lines=this._breakLines(this._currentMeasure.width,i),this.onLinesReadyObservable.notifyObservers(this);for(var r=0,n=0;n<this._lines.length;n++){var o=this._lines[n];o.width>r&&(r=o.width)}if(this._resizeToFit){if(this._textWrapping===b.Clip){var s=this.paddingLeftInPixels+this.paddingRightInPixels+r;s!==this._width.internalValue&&(this._width.updateInPlace(s,a.UNITMODE_PIXEL),this._rebuildLayout=!0)}var h=this.paddingTopInPixels+this.paddingBottomInPixels+this._fontOffset.height*this._lines.length;if(this._lines.length>0&&0!==this._lineSpacing.internalValue){var l=0;l=this._lineSpacing.isPixel?this._lineSpacing.getValue(this._host):this._lineSpacing.getValue(this._host)*this._height.getValueInPixel(this._host,this._cachedParentMeasure.height),h+=(this._lines.length-1)*l}h!==this._height.internalValue&&(this._height.updateInPlace(h,a.UNITMODE_PIXEL),this._rebuildLayout=!0)}},e.prototype._drawText=function(t,e,i,r){var n=this._currentMeasure.width,o=0;switch(this._textHorizontalAlignment){case p.HORIZONTAL_ALIGNMENT_LEFT:o=0;break;case p.HORIZONTAL_ALIGNMENT_RIGHT:o=n-e;break;case p.HORIZONTAL_ALIGNMENT_CENTER:o=(n-e)/2}(this.shadowBlur||this.shadowOffsetX||this.shadowOffsetY)&&(r.shadowColor=this.shadowColor,r.shadowBlur=this.shadowBlur,r.shadowOffsetX=this.shadowOffsetX,r.shadowOffsetY=this.shadowOffsetY),this.outlineWidth&&r.strokeText(t,this._currentMeasure.left+o,i),r.fillText(t,this._currentMeasure.left+o,i)},e.prototype._draw=function(t,e){t.save(),this._applyStates(t),this._renderLines(t),t.restore()},e.prototype._applyStates=function(e){t.prototype._applyStates.call(this,e),this.outlineWidth&&(e.lineWidth=this.outlineWidth,e.strokeStyle=this.outlineColor)},e.prototype._breakLines=function(t,e){var i=[],r=this.text.split("\n");if(this._textWrapping===b.Ellipsis)for(var n=0,o=r;n<o.length;n++){var s=o[n];i.push(this._parseLineEllipsis(s,t,e))}else if(this._textWrapping===b.WordWrap)for(var a=0,h=r;a<h.length;a++){s=h[a];i.push.apply(i,this._parseLineWordWrap(s,t,e))}else for(var l=0,u=r;l<u.length;l++){s=u[l];i.push(this._parseLine(s,e))}return i},e.prototype._parseLine=function(t,e){return void 0===t&&(t=""),{text:t,width:e.measureText(t).width}},e.prototype._parseLineEllipsis=function(t,e,i){void 0===t&&(t="");var r=i.measureText(t).width;for(r>e&&(t+="…");t.length>2&&r>e;)t=t.slice(0,-2)+"…",r=i.measureText(t).width;return{text:t,width:r}},e.prototype._parseLineWordWrap=function(t,e,i){void 0===t&&(t="");for(var r=[],n=t.split(" "),o=0,s=0;s<n.length;s++){var a=s>0?t+" "+n[s]:n[0],h=i.measureText(a).width;h>e&&s>0?(r.push({text:t,width:o}),t=n[s],o=i.measureText(t).width):(o=h,t=a)}return r.push({text:t,width:o}),r},e.prototype._renderLines=function(t){var e=this._currentMeasure.height,i=0;switch(this._textVerticalAlignment){case p.VERTICAL_ALIGNMENT_TOP:i=this._fontOffset.ascent;break;case p.VERTICAL_ALIGNMENT_BOTTOM:i=e-this._fontOffset.height*(this._lines.length-1)-this._fontOffset.descent;break;case p.VERTICAL_ALIGNMENT_CENTER:i=this._fontOffset.ascent+(e-this._fontOffset.height*this._lines.length)/2}i+=this._currentMeasure.top;for(var r=0;r<this._lines.length;r++){var n=this._lines[r];0!==r&&0!==this._lineSpacing.internalValue&&(this._lineSpacing.isPixel?i+=this._lineSpacing.getValue(this._host):i+=this._lineSpacing.getValue(this._host)*this._height.getValueInPixel(this._host,this._cachedParentMeasure.height)),this._drawText(n.text,n.width,i,t),i+=this._fontOffset.height}},e.prototype.computeExpectedHeight=function(){if(this.text&&this.widthInPixels){var t=document.createElement("canvas").getContext("2d");if(t){this._applyStates(t),this._fontOffset||(this._fontOffset=p._GetFontOffset(t.font));var e=this._lines?this._lines:this._breakLines(this.widthInPixels-this.paddingLeftInPixels-this.paddingRightInPixels,t),i=this.paddingTopInPixels+this.paddingBottomInPixels+this._fontOffset.height*e.length;if(e.length>0&&0!==this._lineSpacing.internalValue){var r=0;r=this._lineSpacing.isPixel?this._lineSpacing.getValue(this._host):this._lineSpacing.getValue(this._host)*this._height.getValueInPixel(this._host,this._cachedParentMeasure.height),i+=(e.length-1)*r}return i}}return 0},e.prototype.dispose=function(){t.prototype.dispose.call(this),this.onTextChangedObservable.clear()},e}(p);s._TypeStore.RegisteredTypes["BABYLON.GUI.TextBlock"]=y;var v=function(t){function e(i,r){void 0===r&&(r=null);var n=t.call(this,i)||this;return n.name=i,n._workingCanvas=null,n._loaded=!1,n._stretch=e.STRETCH_FILL,n._autoScale=!1,n._sourceLeft=0,n._sourceTop=0,n._sourceWidth=0,n._sourceHeight=0,n._svgAttributesComputationCompleted=!1,n._isSVG=!1,n._cellWidth=0,n._cellHeight=0,n._cellId=-1,n._populateNinePatchSlicesFromImage=!1,n.onImageLoadedObservable=new s.Observable,n.onSVGAttributesComputedObservable=new s.Observable,n.source=r,n}return n(e,t),Object.defineProperty(e.prototype,"isLoaded",{get:function(){return this._loaded},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"populateNinePatchSlicesFromImage",{get:function(){return this._populateNinePatchSlicesFromImage},set:function(t){this._populateNinePatchSlicesFromImage!==t&&(this._populateNinePatchSlicesFromImage=t,this._populateNinePatchSlicesFromImage&&this._loaded&&this._extractNinePatchSliceDataFromImage())},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"detectPointerOnOpaqueOnly",{get:function(){return this._detectPointerOnOpaqueOnly},set:function(t){this._detectPointerOnOpaqueOnly!==t&&(this._detectPointerOnOpaqueOnly=t)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"sliceLeft",{get:function(){return this._sliceLeft},set:function(t){this._sliceLeft!==t&&(this._sliceLeft=t,this._markAsDirty())},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"sliceRight",{get:function(){return this._sliceRight},set:function(t){this._sliceRight!==t&&(this._sliceRight=t,this._markAsDirty())},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"sliceTop",{get:function(){return this._sliceTop},set:function(t){this._sliceTop!==t&&(this._sliceTop=t,this._markAsDirty())},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"sliceBottom",{get:function(){return this._sliceBottom},set:function(t){this._sliceBottom!==t&&(this._sliceBottom=t,this._markAsDirty())},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"sourceLeft",{get:function(){return this._sourceLeft},set:function(t){this._sourceLeft!==t&&(this._sourceLeft=t,this._markAsDirty())},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"sourceTop",{get:function(){return this._sourceTop},set:function(t){this._sourceTop!==t&&(this._sourceTop=t,this._markAsDirty())},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"sourceWidth",{get:function(){return this._sourceWidth},set:function(t){this._sourceWidth!==t&&(this._sourceWidth=t,this._markAsDirty())},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"sourceHeight",{get:function(){return this._sourceHeight},set:function(t){this._sourceHeight!==t&&(this._sourceHeight=t,this._markAsDirty())},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"isSVG",{get:function(){return this._isSVG},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"svgAttributesComputationCompleted",{get:function(){return this._svgAttributesComputationCompleted},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"autoScale",{get:function(){return this._autoScale},set:function(t){this._autoScale!==t&&(this._autoScale=t,t&&this._loaded&&this.synchronizeSizeWithContent())},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"stretch",{get:function(){return this._stretch},set:function(t){this._stretch!==t&&(this._stretch=t,this._markAsDirty())},enumerable:!0,configurable:!0}),e.prototype._rotate90=function(t,i){void 0===i&&(i=!1);var r=document.createElement("canvas"),n=r.getContext("2d"),o=this._domImage.width,s=this._domImage.height;r.width=s,r.height=o,n.translate(r.width/2,r.height/2),n.rotate(t*Math.PI/2),n.drawImage(this._domImage,0,0,o,s,-o/2,-s/2,o,s);var a=r.toDataURL("image/jpg"),h=new e(this.name+"rotated",a);return i&&(h._stretch=this._stretch,h._autoScale=this._autoScale,h._cellId=this._cellId,h._cellWidth=t%1?this._cellHeight:this._cellWidth,h._cellHeight=t%1?this._cellWidth:this._cellHeight),this._handleRotationForSVGImage(this,h,t),h},e.prototype._handleRotationForSVGImage=function(t,e,i){var r=this;t._isSVG&&(t._svgAttributesComputationCompleted?(this._rotate90SourceProperties(t,e,i),this._markAsDirty()):t.onSVGAttributesComputedObservable.addOnce(function(){r._rotate90SourceProperties(t,e,i),r._markAsDirty()}))},e.prototype._rotate90SourceProperties=function(t,e,i){var r,n,o=t.sourceLeft,s=t.sourceTop,a=t.domImage.width,h=t.domImage.height,l=o,u=s,c=t.sourceWidth,_=t.sourceHeight;if(0!=i){var d=i<0?-1:1;i%=4;for(var f=0;f<Math.abs(i);++f)l=-(s-h/2)*d+h/2,u=(o-a/2)*d+a/2,c=(r=[_,c])[0],_=r[1],i<0?u-=_:l-=c,o=l,s=u,a=(n=[h,a])[0],h=n[1]}e.sourceLeft=l,e.sourceTop=u,e.sourceWidth=c,e.sourceHeight=_},Object.defineProperty(e.prototype,"domImage",{get:function(){return this._domImage},set:function(t){var e=this;this._domImage=t,this._loaded=!1,this._domImage.width?this._onImageLoaded():this._domImage.onload=function(){e._onImageLoaded()}},enumerable:!0,configurable:!0}),e.prototype._onImageLoaded=function(){this._imageWidth=this._domImage.width,this._imageHeight=this._domImage.height,this._loaded=!0,this._populateNinePatchSlicesFromImage&&this._extractNinePatchSliceDataFromImage(),this._autoScale&&this.synchronizeSizeWithContent(),this.onImageLoadedObservable.notifyObservers(this),this._markAsDirty()},e.prototype._extractNinePatchSliceDataFromImage=function(){this._workingCanvas||(this._workingCanvas=document.createElement("canvas"));var t=this._workingCanvas,e=t.getContext("2d"),i=this._domImage.width,r=this._domImage.height;t.width=i,t.height=r,e.drawImage(this._domImage,0,0,i,r);var n=e.getImageData(0,0,i,r);this._sliceLeft=-1,this._sliceRight=-1;for(var o=0;o<i;o++){if((a=n.data[4*o+3])>127&&-1===this._sliceLeft)this._sliceLeft=o;else if(a<127&&this._sliceLeft>-1){this._sliceRight=o;break}}this._sliceTop=-1,this._sliceBottom=-1;for(var s=0;s<r;s++){var a;if((a=n.data[s*i*4+3])>127&&-1===this._sliceTop)this._sliceTop=s;else if(a<127&&this._sliceTop>-1){this._sliceBottom=s;break}}},Object.defineProperty(e.prototype,"source",{set:function(t){var e=this;this._source!==t&&(this._loaded=!1,this._source=t,t&&(t=this._svgCheck(t)),this._domImage=document.createElement("img"),this._domImage.onload=function(){e._onImageLoaded()},t&&(s.Tools.SetCorsBehavior(t,this._domImage),this._domImage.src=t))},enumerable:!0,configurable:!0}),e.prototype._svgCheck=function(t){var e=this;if(window.SVGSVGElement&&-1!==t.search(/.svg#/gi)&&t.indexOf("#")===t.lastIndexOf("#")){this._isSVG=!0;var i=t.split("#")[0],r=t.split("#")[1],n=document.body.querySelector('object[data="'+i+'"]');if(n){var o=n.contentDocument;if(o&&o.documentElement){var s=o.documentElement.getAttribute("viewBox"),a=Number(o.documentElement.getAttribute("width")),h=Number(o.documentElement.getAttribute("height"));if(o.getElementById(r)&&s&&a&&h)return this._getSVGAttribs(n,r),t}n.addEventListener("load",function(){e._getSVGAttribs(n,r)})}else{var l=document.createElement("object");l.data=i,l.type="image/svg+xml",l.width="0%",l.height="0%",document.body.appendChild(l),l.onload=function(){var t=document.body.querySelector('object[data="'+i+'"]');t&&e._getSVGAttribs(t,r)}}return i}return t},e.prototype._getSVGAttribs=function(t,e){var i=t.contentDocument;if(i&&i.documentElement){var r=i.documentElement.getAttribute("viewBox"),n=Number(i.documentElement.getAttribute("width")),o=Number(i.documentElement.getAttribute("height")),s=i.getElementById(e);if(r&&n&&o&&s){var a=Number(r.split(" ")[2]),h=Number(r.split(" ")[3]),l=s.getBBox(),u=1,c=1,_=0,d=0;s.transform&&s.transform.baseVal.consolidate()&&(u=s.transform.baseVal.consolidate().matrix.a,c=s.transform.baseVal.consolidate().matrix.d,_=s.transform.baseVal.consolidate().matrix.e,d=s.transform.baseVal.consolidate().matrix.f),this.sourceLeft=(u*l.x+_)*n/a,this.sourceTop=(c*l.y+d)*o/h,this.sourceWidth=l.width*u*(n/a),this.sourceHeight=l.height*c*(o/h),this._svgAttributesComputationCompleted=!0,this.onSVGAttributesComputedObservable.notifyObservers(this)}}},Object.defineProperty(e.prototype,"cellWidth",{get:function(){return this._cellWidth},set:function(t){this._cellWidth!==t&&(this._cellWidth=t,this._markAsDirty())},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"cellHeight",{get:function(){return this._cellHeight},set:function(t){this._cellHeight!==t&&(this._cellHeight=t,this._markAsDirty())},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"cellId",{get:function(){return this._cellId},set:function(t){this._cellId!==t&&(this._cellId=t,this._markAsDirty())},enumerable:!0,configurable:!0}),e.prototype.contains=function(e,i){if(!t.prototype.contains.call(this,e,i))return!1;if(!this._detectPointerOnOpaqueOnly||!this._workingCanvas)return!0;var r=this._workingCanvas.getContext("2d"),n=0|this._currentMeasure.width,o=0|this._currentMeasure.height;return r.getImageData(0,0,n,o).data[4*((e=e-this._currentMeasure.left|0)+(i=i-this._currentMeasure.top|0)*this._currentMeasure.width)+3]>0},e.prototype._getTypeName=function(){return"Image"},e.prototype.synchronizeSizeWithContent=function(){this._loaded&&(this.width=this._domImage.width+"px",this.height=this._domImage.height+"px")},e.prototype._processMeasures=function(i,r){if(this._loaded)switch(this._stretch){case e.STRETCH_NONE:case e.STRETCH_FILL:case e.STRETCH_UNIFORM:case e.STRETCH_NINE_PATCH:break;case e.STRETCH_EXTEND:this._autoScale&&this.synchronizeSizeWithContent(),this.parent&&this.parent.parent&&(this.parent.adaptWidthToChildren=!0,this.parent.adaptHeightToChildren=!0)}t.prototype._processMeasures.call(this,i,r)},e.prototype._prepareWorkingCanvasForOpaqueDetection=function(){if(this._detectPointerOnOpaqueOnly){this._workingCanvas||(this._workingCanvas=document.createElement("canvas"));var t=this._workingCanvas,e=this._currentMeasure.width,i=this._currentMeasure.height,r=t.getContext("2d");t.width=e,t.height=i,r.clearRect(0,0,e,i)}},e.prototype._drawImage=function(t,e,i,r,n,o,s,a,h){(t.drawImage(this._domImage,e,i,r,n,o,s,a,h),this._detectPointerOnOpaqueOnly)&&(t=this._workingCanvas.getContext("2d")).drawImage(this._domImage,e,i,r,n,o-this._currentMeasure.left,s-this._currentMeasure.top,a,h)},e.prototype._draw=function(t){var i,r,n,o;if(t.save(),(this.shadowBlur||this.shadowOffsetX||this.shadowOffsetY)&&(t.shadowColor=this.shadowColor,t.shadowBlur=this.shadowBlur,t.shadowOffsetX=this.shadowOffsetX,t.shadowOffsetY=this.shadowOffsetY),-1==this.cellId)i=this._sourceLeft,r=this._sourceTop,n=this._sourceWidth?this._sourceWidth:this._imageWidth,o=this._sourceHeight?this._sourceHeight:this._imageHeight;else{var s=this._domImage.naturalWidth/this.cellWidth,a=this.cellId/s>>0,h=this.cellId%s;i=this.cellWidth*h,r=this.cellHeight*a,n=this.cellWidth,o=this.cellHeight}if(this._prepareWorkingCanvasForOpaqueDetection(),this._applyStates(t),this._loaded)switch(this._stretch){case e.STRETCH_NONE:case e.STRETCH_FILL:this._drawImage(t,i,r,n,o,this._currentMeasure.left,this._currentMeasure.top,this._currentMeasure.width,this._currentMeasure.height);break;case e.STRETCH_UNIFORM:var l=this._currentMeasure.width/n,u=this._currentMeasure.height/o,c=Math.min(l,u),_=(this._currentMeasure.width-n*c)/2,d=(this._currentMeasure.height-o*c)/2;this._drawImage(t,i,r,n,o,this._currentMeasure.left+_,this._currentMeasure.top+d,n*c,o*c);break;case e.STRETCH_EXTEND:this._drawImage(t,i,r,n,o,this._currentMeasure.left,this._currentMeasure.top,this._currentMeasure.width,this._currentMeasure.height);break;case e.STRETCH_NINE_PATCH:this._renderNinePatch(t)}t.restore()},e.prototype._renderCornerPatch=function(t,e,i,r,n,o,s){this._drawImage(t,e,i,r,n,this._currentMeasure.left+o,this._currentMeasure.top+s,r,n)},e.prototype._renderNinePatch=function(t){var e=this._imageHeight,i=this._sliceLeft,r=this._sliceTop,n=this._imageHeight-this._sliceBottom,o=this._imageWidth-this._sliceRight,s=0,a=0;this._populateNinePatchSlicesFromImage&&(s=1,a=1,e-=2,i-=1,r-=1,n-=1,o-=1);var h=this._sliceRight-this._sliceLeft,l=this._currentMeasure.width-o-this.sliceLeft,u=this._currentMeasure.height-e+this._sliceBottom;this._renderCornerPatch(t,s,a,i,r,0,0),this._renderCornerPatch(t,s,this._sliceBottom,i,e-this._sliceBottom,0,u),this._renderCornerPatch(t,this._sliceRight,a,o,r,this._currentMeasure.width-o,0),this._renderCornerPatch(t,this._sliceRight,this._sliceBottom,o,e-this._sliceBottom,this._currentMeasure.width-o,u),this._drawImage(t,this._sliceLeft,this._sliceTop,h,this._sliceBottom-this._sliceTop,this._currentMeasure.left+i,this._currentMeasure.top+r,l,u-r),this._drawImage(t,s,this._sliceTop,i,this._sliceBottom-this._sliceTop,this._currentMeasure.left,this._currentMeasure.top+r,i,u-r),this._drawImage(t,this._sliceRight,this._sliceTop,i,this._sliceBottom-this._sliceTop,this._currentMeasure.left+this._currentMeasure.width-o,this._currentMeasure.top+r,i,u-r),this._drawImage(t,this._sliceLeft,a,h,r,this._currentMeasure.left+i,this._currentMeasure.top,l,r),this._drawImage(t,this._sliceLeft,this._sliceBottom,h,n,this._currentMeasure.left+i,this._currentMeasure.top+u,l,n)},e.prototype.dispose=function(){t.prototype.dispose.call(this),this.onImageLoadedObservable.clear(),this.onSVGAttributesComputedObservable.clear()},e.STRETCH_NONE=0,e.STRETCH_FILL=1,e.STRETCH_UNIFORM=2,e.STRETCH_EXTEND=3,e.STRETCH_NINE_PATCH=4,e}(p);s._TypeStore.RegisteredTypes["BABYLON.GUI.Image"]=v;var O=function(t){function e(e){var i=t.call(this,e)||this;i.name=e,i.delegatePickingToChildren=!1,i.thickness=1,i.isPointerBlocker=!0;var r=null;return i.pointerEnterAnimation=function(){r=i.alpha,i.alpha-=.1},i.pointerOutAnimation=function(){null!==r&&(i.alpha=r)},i.pointerDownAnimation=function(){i.scaleX-=.05,i.scaleY-=.05},i.pointerUpAnimation=function(){i.scaleX+=.05,i.scaleY+=.05},i}return n(e,t),Object.defineProperty(e.prototype,"image",{get:function(){return this._image},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"textBlock",{get:function(){return this._textBlock},enumerable:!0,configurable:!0}),e.prototype._getTypeName=function(){return"Button"},e.prototype._processPicking=function(e,i,r,n,o,s,a){if(!this._isEnabled||!this.isHitTestVisible||!this.isVisible||this.notRenderable)return!1;if(!t.prototype.contains.call(this,e,i))return!1;if(this.delegatePickingToChildren){for(var h=!1,l=this._children.length-1;l>=0;l--){var u=this._children[l];if(u.isEnabled&&u.isHitTestVisible&&u.isVisible&&!u.notRenderable&&u.contains(e,i)){h=!0;break}}if(!h)return!1}return this._processObservables(r,e,i,n,o,s,a),!0},e.prototype._onPointerEnter=function(e){return!!t.prototype._onPointerEnter.call(this,e)&&(this.pointerEnterAnimation&&this.pointerEnterAnimation(),!0)},e.prototype._onPointerOut=function(e,i){void 0===i&&(i=!1),this.pointerOutAnimation&&this.pointerOutAnimation(),t.prototype._onPointerOut.call(this,e,i)},e.prototype._onPointerDown=function(e,i,r,n){return!!t.prototype._onPointerDown.call(this,e,i,r,n)&&(this.pointerDownAnimation&&this.pointerDownAnimation(),!0)},e.prototype._onPointerUp=function(e,i,r,n,o){this.pointerUpAnimation&&this.pointerUpAnimation(),t.prototype._onPointerUp.call(this,e,i,r,n,o)},e.CreateImageButton=function(t,i,r){var n=new e(t),o=new y(t+"_button",i);o.textWrapping=!0,o.textHorizontalAlignment=p.HORIZONTAL_ALIGNMENT_CENTER,o.paddingLeft="20%",n.addControl(o);var s=new v(t+"_icon",r);return s.width="20%",s.stretch=v.STRETCH_UNIFORM,s.horizontalAlignment=p.HORIZONTAL_ALIGNMENT_LEFT,n.addControl(s),n._image=s,n._textBlock=o,n},e.CreateImageOnlyButton=function(t,i){var r=new e(t),n=new v(t+"_icon",i);return n.stretch=v.STRETCH_FILL,n.horizontalAlignment=p.HORIZONTAL_ALIGNMENT_LEFT,r.addControl(n),r._image=n,r},e.CreateSimpleButton=function(t,i){var r=new e(t),n=new y(t+"_button",i);return n.textWrapping=!0,n.textHorizontalAlignment=p.HORIZONTAL_ALIGNMENT_CENTER,r.addControl(n),r._textBlock=n,r},e.CreateImageWithCenterTextButton=function(t,i,r){var n=new e(t),o=new v(t+"_icon",r);o.stretch=v.STRETCH_FILL,n.addControl(o);var s=new y(t+"_button",i);return s.textWrapping=!0,s.textHorizontalAlignment=p.HORIZONTAL_ALIGNMENT_CENTER,n.addControl(s),n._image=o,n._textBlock=s,n},e}(m);s._TypeStore.RegisteredTypes["BABYLON.GUI.Button"]=O;var C=function(t){function e(e){var i=t.call(this,e)||this;return i.name=e,i._isVertical=!0,i._manualWidth=!1,i._manualHeight=!1,i._doNotTrackManualChanges=!1,i.ignoreLayoutWarnings=!1,i}return n(e,t),Object.defineProperty(e.prototype,"isVertical",{get:function(){return this._isVertical},set:function(t){this._isVertical!==t&&(this._isVertical=t,this._markAsDirty())},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"width",{get:function(){return this._width.toString(this._host)},set:function(t){this._doNotTrackManualChanges||(this._manualWidth=!0),this._width.toString(this._host)!==t&&this._width.fromString(t)&&this._markAsDirty()},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"height",{get:function(){return this._height.toString(this._host)},set:function(t){this._doNotTrackManualChanges||(this._manualHeight=!0),this._height.toString(this._host)!==t&&this._height.fromString(t)&&this._markAsDirty()},enumerable:!0,configurable:!0}),e.prototype._getTypeName=function(){return"StackPanel"},e.prototype._preMeasure=function(e,i){for(var r=0,n=this._children;r<n.length;r++){var o=n[r];this._isVertical?o.verticalAlignment=p.VERTICAL_ALIGNMENT_TOP:o.horizontalAlignment=p.HORIZONTAL_ALIGNMENT_LEFT}t.prototype._preMeasure.call(this,e,i)},e.prototype._additionalProcessing=function(e,i){t.prototype._additionalProcessing.call(this,e,i),this._measureForChildren.copyFrom(e),this._measureForChildren.left=this._currentMeasure.left,this._measureForChildren.top=this._currentMeasure.top,this.isVertical&&!this._manualWidth||(this._measureForChildren.width=this._currentMeasure.width),(this.isVertical||this._manualHeight)&&(this._measureForChildren.height=this._currentMeasure.height)},e.prototype._postMeasure=function(){for(var e=0,i=0,r=0,n=this._children;r<n.length;r++){var o=n[r];o.isVisible&&!o.notRenderable&&(this._isVertical?(o.top!==i+"px"&&(o.top=i+"px",this._rebuildLayout=!0,o._top.ignoreAdaptiveScaling=!0),o._height.isPercentage&&!o._automaticSize?this.ignoreLayoutWarnings||s.Tools.Warn("Control (Name:"+o.name+", UniqueId:"+o.uniqueId+") is using height in percentage mode inside a vertical StackPanel"):i+=o._currentMeasure.height+o.paddingTopInPixels+o.paddingBottomInPixels):(o.left!==e+"px"&&(o.left=e+"px",this._rebuildLayout=!0,o._left.ignoreAdaptiveScaling=!0),o._width.isPercentage&&!o._automaticSize?this.ignoreLayoutWarnings||s.Tools.Warn("Control (Name:"+o.name+", UniqueId:"+o.uniqueId+") is using width in percentage mode inside a horizontal StackPanel"):e+=o._currentMeasure.width+o.paddingLeftInPixels+o.paddingRightInPixels))}this._doNotTrackManualChanges=!0;var a=!1,h=!1;if(!this._manualHeight&&this._isVertical){var l=this.height;this.height=i+"px",h=l!==this.height||!this._height.ignoreAdaptiveScaling}if(!this._manualWidth&&!this._isVertical){var u=this.width;this.width=e+"px",a=u!==this.width||!this._width.ignoreAdaptiveScaling}h&&(this._height.ignoreAdaptiveScaling=!0),a&&(this._width.ignoreAdaptiveScaling=!0),this._doNotTrackManualChanges=!1,(a||h)&&(this._rebuildLayout=!0),t.prototype._postMeasure.call(this)},e}(g);s._TypeStore.RegisteredTypes["BABYLON.GUI.StackPanel"]=C;var w=function(t){function e(e){var i=t.call(this,e)||this;return i.name=e,i._isChecked=!1,i._background="black",i._checkSizeRatio=.8,i._thickness=1,i.onIsCheckedChangedObservable=new s.Observable,i.isPointerBlocker=!0,i}return n(e,t),Object.defineProperty(e.prototype,"thickness",{get:function(){return this._thickness},set:function(t){this._thickness!==t&&(this._thickness=t,this._markAsDirty())},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"checkSizeRatio",{get:function(){return this._checkSizeRatio},set:function(t){t=Math.max(Math.min(1,t),0),this._checkSizeRatio!==t&&(this._checkSizeRatio=t,this._markAsDirty())},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"background",{get:function(){return this._background},set:function(t){this._background!==t&&(this._background=t,this._markAsDirty())},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"isChecked",{get:function(){return this._isChecked},set:function(t){this._isChecked!==t&&(this._isChecked=t,this._markAsDirty(),this.onIsCheckedChangedObservable.notifyObservers(t))},enumerable:!0,configurable:!0}),e.prototype._getTypeName=function(){return"Checkbox"},e.prototype._draw=function(t,e){t.save(),this._applyStates(t);var i=this._currentMeasure.width-this._thickness,r=this._currentMeasure.height-this._thickness;if((this.shadowBlur||this.shadowOffsetX||this.shadowOffsetY)&&(t.shadowColor=this.shadowColor,t.shadowBlur=this.shadowBlur,t.shadowOffsetX=this.shadowOffsetX,t.shadowOffsetY=this.shadowOffsetY),t.fillStyle=this._isEnabled?this._background:this._disabledColor,t.fillRect(this._currentMeasure.left+this._thickness/2,this._currentMeasure.top+this._thickness/2,i,r),(this.shadowBlur||this.shadowOffsetX||this.shadowOffsetY)&&(t.shadowBlur=0,t.shadowOffsetX=0,t.shadowOffsetY=0),this._isChecked){t.fillStyle=this._isEnabled?this.color:this._disabledColorItem;var n=i*this._checkSizeRatio,o=r*this._checkSizeRatio;t.fillRect(this._currentMeasure.left+this._thickness/2+(i-n)/2,this._currentMeasure.top+this._thickness/2+(r-o)/2,n,o)}t.strokeStyle=this.color,t.lineWidth=this._thickness,t.strokeRect(this._currentMeasure.left+this._thickness/2,this._currentMeasure.top+this._thickness/2,i,r),t.restore()},e.prototype._onPointerDown=function(e,i,r,n){return!!t.prototype._onPointerDown.call(this,e,i,r,n)&&(this.isChecked=!this.isChecked,!0)},e.AddCheckBoxWithHeader=function(t,i){var r=new C;r.isVertical=!1,r.height="30px";var n=new e;n.width="20px",n.height="20px",n.isChecked=!0,n.color="green",n.onIsCheckedChangedObservable.add(i),r.addControl(n);var o=new y;return o.text=t,o.width="180px",o.paddingLeft="5px",o.textHorizontalAlignment=p.HORIZONTAL_ALIGNMENT_LEFT,o.color="white",r.addControl(o),r},e}(p);s._TypeStore.RegisteredTypes["BABYLON.GUI.Checkbox"]=w;var T=function(t){function e(e,i){void 0===i&&(i="");var r=t.call(this,e)||this;return r.name=e,r._text="",r._placeholderText="",r._background="#222222",r._focusedBackground="#000000",r._focusedColor="white",r._placeholderColor="gray",r._thickness=1,r._margin=new a(10,a.UNITMODE_PIXEL),r._autoStretchWidth=!0,r._maxWidth=new a(1,a.UNITMODE_PERCENTAGE,!1),r._isFocused=!1,r._blinkIsEven=!1,r._cursorOffset=0,r._deadKey=!1,r._addKey=!0,r._currentKey="",r._isTextHighlightOn=!1,r._textHighlightColor="#d5e0ff",r._highligherOpacity=.4,r._highlightedText="",r._startHighlightIndex=0,r._endHighlightIndex=0,r._cursorIndex=-1,r._onFocusSelectAll=!1,r._isPointerDown=!1,r.promptMessage="Please enter text:",r.disableMobilePrompt=!1,r.onTextChangedObservable=new s.Observable,r.onBeforeKeyAddObservable=new s.Observable,r.onFocusObservable=new s.Observable,r.onBlurObservable=new s.Observable,r.onTextHighlightObservable=new s.Observable,r.onTextCopyObservable=new s.Observable,r.onTextCutObservable=new s.Observable,r.onTextPasteObservable=new s.Observable,r.onKeyboardEventProcessedObservable=new s.Observable,r.text=i,r.isPointerBlocker=!0,r}return n(e,t),Object.defineProperty(e.prototype,"maxWidth",{get:function(){return this._maxWidth.toString(this._host)},set:function(t){this._maxWidth.toString(this._host)!==t&&this._maxWidth.fromString(t)&&this._markAsDirty()},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"maxWidthInPixels",{get:function(){return this._maxWidth.getValueInPixel(this._host,this._cachedParentMeasure.width)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"highligherOpacity",{get:function(){return this._highligherOpacity},set:function(t){this._highligherOpacity!==t&&(this._highligherOpacity=t,this._markAsDirty())},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"onFocusSelectAll",{get:function(){return this._onFocusSelectAll},set:function(t){this._onFocusSelectAll!==t&&(this._onFocusSelectAll=t,this._markAsDirty())},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"textHighlightColor",{get:function(){return this._textHighlightColor},set:function(t){this._textHighlightColor!==t&&(this._textHighlightColor=t,this._markAsDirty())},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"margin",{get:function(){return this._margin.toString(this._host)},set:function(t){this._margin.toString(this._host)!==t&&this._margin.fromString(t)&&this._markAsDirty()},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"marginInPixels",{get:function(){return this._margin.getValueInPixel(this._host,this._cachedParentMeasure.width)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"autoStretchWidth",{get:function(){return this._autoStretchWidth},set:function(t){this._autoStretchWidth!==t&&(this._autoStretchWidth=t,this._markAsDirty())},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"thickness",{get:function(){return this._thickness},set:function(t){this._thickness!==t&&(this._thickness=t,this._markAsDirty())},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"focusedBackground",{get:function(){return this._focusedBackground},set:function(t){this._focusedBackground!==t&&(this._focusedBackground=t,this._markAsDirty())},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"focusedColor",{get:function(){return this._focusedColor},set:function(t){this._focusedColor!==t&&(this._focusedColor=t,this._markAsDirty())},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"background",{get:function(){return this._background},set:function(t){this._background!==t&&(this._background=t,this._markAsDirty())},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"placeholderColor",{get:function(){return this._placeholderColor},set:function(t){this._placeholderColor!==t&&(this._placeholderColor=t,this._markAsDirty())},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"placeholderText",{get:function(){return this._placeholderText},set:function(t){this._placeholderText!==t&&(this._placeholderText=t,this._markAsDirty())},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"deadKey",{get:function(){return this._deadKey},set:function(t){this._deadKey=t},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"highlightedText",{get:function(){return this._highlightedText},set:function(t){this._highlightedText!==t&&(this._highlightedText=t,this._markAsDirty())},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"addKey",{get:function(){return this._addKey},set:function(t){this._addKey=t},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"currentKey",{get:function(){return this._currentKey},set:function(t){this._currentKey=t},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"text",{get:function(){return this._text},set:function(t){var e=t.toString();this._text!==e&&(this._text=e,this._markAsDirty(),this.onTextChangedObservable.notifyObservers(this))},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"width",{get:function(){return this._width.toString(this._host)},set:function(t){this._width.toString(this._host)!==t&&(this._width.fromString(t)&&this._markAsDirty(),this.autoStretchWidth=!1)},enumerable:!0,configurable:!0}),e.prototype.onBlur=function(){this._isFocused=!1,this._scrollLeft=null,this._cursorOffset=0,clearTimeout(this._blinkTimeout),this._markAsDirty(),this.onBlurObservable.notifyObservers(this),this._host.unRegisterClipboardEvents(),this._onClipboardObserver&&this._host.onClipboardObservable.remove(this._onClipboardObserver);var t=this._host.getScene();this._onPointerDblTapObserver&&t&&t.onPointerObservable.remove(this._onPointerDblTapObserver)},e.prototype.onFocus=function(){var t=this;if(this._isEnabled){if(this._scrollLeft=null,this._isFocused=!0,this._blinkIsEven=!1,this._cursorOffset=0,this._markAsDirty(),this.onFocusObservable.notifyObservers(this),-1!==navigator.userAgent.indexOf("Mobile")&&!this.disableMobilePrompt){var e=prompt(this.promptMessage);return null!==e&&(this.text=e),void(this._host.focusedControl=null)}this._host.registerClipboardEvents(),this._onClipboardObserver=this._host.onClipboardObservable.add(function(e){switch(e.type){case s.ClipboardEventTypes.COPY:t._onCopyText(e.event),t.onTextCopyObservable.notifyObservers(t);break;case s.ClipboardEventTypes.CUT:t._onCutText(e.event),t.onTextCutObservable.notifyObservers(t);break;case s.ClipboardEventTypes.PASTE:t._onPasteText(e.event),t.onTextPasteObservable.notifyObservers(t);break;default:return}});var i=this._host.getScene();i&&(this._onPointerDblTapObserver=i.onPointerObservable.add(function(e){t._isFocused&&e.type===s.PointerEventTypes.POINTERDOUBLETAP&&t._processDblClick(e)})),this._onFocusSelectAll&&this._selectAllText()}},e.prototype._getTypeName=function(){return"InputText"},e.prototype.keepsFocusWith=function(){return this._connectedVirtualKeyboard?[this._connectedVirtualKeyboard]:null},e.prototype.processKey=function(t,e,i){if(!i||!i.ctrlKey&&!i.metaKey||67!==t&&86!==t&&88!==t){if(i&&(i.ctrlKey||i.metaKey)&&65===t)return this._selectAllText(),void i.preventDefault();switch(t){case 32:e=" ";break;case 191:i&&i.preventDefault();break;case 8:if(this._text&&this._text.length>0){if(this._isTextHighlightOn)return this.text=this._text.slice(0,this._startHighlightIndex)+this._text.slice(this._endHighlightIndex),this._isTextHighlightOn=!1,this._cursorOffset=this.text.length-this._startHighlightIndex,this._blinkIsEven=!1,void(i&&i.preventDefault());if(0===this._cursorOffset)this.text=this._text.substr(0,this._text.length-1);else(n=this._text.length-this._cursorOffset)>0&&(this.text=this._text.slice(0,n-1)+this._text.slice(n))}return void(i&&i.preventDefault());case 46:if(this._isTextHighlightOn){this.text=this._text.slice(0,this._startHighlightIndex)+this._text.slice(this._endHighlightIndex);for(var r=this._endHighlightIndex-this._startHighlightIndex;r>0&&this._cursorOffset>0;)this._cursorOffset--;return this._isTextHighlightOn=!1,this._cursorOffset=this.text.length-this._startHighlightIndex,void(i&&i.preventDefault())}if(this._text&&this._text.length>0&&this._cursorOffset>0){var n=this._text.length-this._cursorOffset;this.text=this._text.slice(0,n)+this._text.slice(n+1),this._cursorOffset--}return void(i&&i.preventDefault());case 13:return this._host.focusedControl=null,void(this._isTextHighlightOn=!1);case 35:return this._cursorOffset=0,this._blinkIsEven=!1,this._isTextHighlightOn=!1,void this._markAsDirty();case 36:return this._cursorOffset=this._text.length,this._blinkIsEven=!1,this._isTextHighlightOn=!1,void this._markAsDirty();case 37:if(this._cursorOffset++,this._cursorOffset>this._text.length&&(this._cursorOffset=this._text.length),i&&i.shiftKey){if(this._blinkIsEven=!1,i.ctrlKey||i.metaKey){if(!this._isTextHighlightOn){if(this._text.length===this._cursorOffset)return;this._endHighlightIndex=this._text.length-this._cursorOffset+1}return this._startHighlightIndex=0,this._cursorIndex=this._text.length-this._endHighlightIndex,this._cursorOffset=this._text.length,this._isTextHighlightOn=!0,void this._markAsDirty()}return this._isTextHighlightOn?-1===this._cursorIndex&&(this._cursorIndex=this._text.length-this._endHighlightIndex,this._cursorOffset=0===this._startHighlightIndex?this._text.length:this._text.length-this._startHighlightIndex+1):(this._isTextHighlightOn=!0,this._cursorIndex=this._cursorOffset>=this._text.length?this._text.length:this._cursorOffset-1),this._cursorIndex<this._cursorOffset?(this._endHighlightIndex=this._text.length-this._cursorIndex,this._startHighlightIndex=this._text.length-this._cursorOffset):this._cursorIndex>this._cursorOffset?(this._endHighlightIndex=this._text.length-this._cursorOffset,this._startHighlightIndex=this._text.length-this._cursorIndex):this._isTextHighlightOn=!1,void this._markAsDirty()}return this._isTextHighlightOn&&(this._cursorOffset=this._text.length-this._startHighlightIndex,this._isTextHighlightOn=!1),i&&(i.ctrlKey||i.metaKey)&&(this._cursorOffset=this.text.length,i.preventDefault()),this._blinkIsEven=!1,this._isTextHighlightOn=!1,this._cursorIndex=-1,void this._markAsDirty();case 39:if(this._cursorOffset--,this._cursorOffset<0&&(this._cursorOffset=0),i&&i.shiftKey){if(this._blinkIsEven=!1,i.ctrlKey||i.metaKey){if(!this._isTextHighlightOn){if(0===this._cursorOffset)return;this._startHighlightIndex=this._text.length-this._cursorOffset-1}return this._endHighlightIndex=this._text.length,this._isTextHighlightOn=!0,this._cursorIndex=this._text.length-this._startHighlightIndex,this._cursorOffset=0,void this._markAsDirty()}return this._isTextHighlightOn?-1===this._cursorIndex&&(this._cursorIndex=this._text.length-this._startHighlightIndex,this._cursorOffset=this._text.length===this._endHighlightIndex?0:this._text.length-this._endHighlightIndex-1):(this._isTextHighlightOn=!0,this._cursorIndex=this._cursorOffset<=0?0:this._cursorOffset+1),this._cursorIndex<this._cursorOffset?(this._endHighlightIndex=this._text.length-this._cursorIndex,this._startHighlightIndex=this._text.length-this._cursorOffset):this._cursorIndex>this._cursorOffset?(this._endHighlightIndex=this._text.length-this._cursorOffset,this._startHighlightIndex=this._text.length-this._cursorIndex):this._isTextHighlightOn=!1,void this._markAsDirty()}return this._isTextHighlightOn&&(this._cursorOffset=this._text.length-this._endHighlightIndex,this._isTextHighlightOn=!1),i&&(i.ctrlKey||i.metaKey)&&(this._cursorOffset=0,i.preventDefault()),this._blinkIsEven=!1,this._isTextHighlightOn=!1,this._cursorIndex=-1,void this._markAsDirty();case 222:i&&i.preventDefault(),this._cursorIndex=-1,this.deadKey=!0}if(e&&(-1===t||32===t||t>47&&t<64||t>64&&t<91||t>159&&t<193||t>218&&t<223||t>95&&t<112)&&(this._currentKey=e,this.onBeforeKeyAddObservable.notifyObservers(this),e=this._currentKey,this._addKey))if(this._isTextHighlightOn)this.text=this._text.slice(0,this._startHighlightIndex)+e+this._text.slice(this._endHighlightIndex),this._cursorOffset=this.text.length-(this._startHighlightIndex+1),this._isTextHighlightOn=!1,this._blinkIsEven=!1,this._markAsDirty();else if(0===this._cursorOffset)this.text+=e;else{var o=this._text.length-this._cursorOffset;this.text=this._text.slice(0,o)+e+this._text.slice(o)}}},e.prototype._updateValueFromCursorIndex=function(t){if(this._blinkIsEven=!1,-1===this._cursorIndex)this._cursorIndex=t;else if(this._cursorIndex<this._cursorOffset)this._endHighlightIndex=this._text.length-this._cursorIndex,this._startHighlightIndex=this._text.length-this._cursorOffset;else{if(!(this._cursorIndex>this._cursorOffset))return this._isTextHighlightOn=!1,void this._markAsDirty();this._endHighlightIndex=this._text.length-this._cursorOffset,this._startHighlightIndex=this._text.length-this._cursorIndex}this._isTextHighlightOn=!0,this._markAsDirty()},e.prototype._processDblClick=function(t){this._startHighlightIndex=this._text.length-this._cursorOffset,this._endHighlightIndex=this._startHighlightIndex;var e,i,r=/\w+/g;do{i=this._endHighlightIndex<this._text.length&&-1!==this._text[this._endHighlightIndex].search(r)?++this._endHighlightIndex:0,e=this._startHighlightIndex>0&&-1!==this._text[this._startHighlightIndex-1].search(r)?--this._startHighlightIndex:0}while(e||i);this._cursorOffset=this.text.length-this._startHighlightIndex,this.onTextHighlightObservable.notifyObservers(this),this._isTextHighlightOn=!0,this._clickedCoordinate=null,this._blinkIsEven=!0,this._cursorIndex=-1,this._markAsDirty()},e.prototype._selectAllText=function(){this._blinkIsEven=!0,this._isTextHighlightOn=!0,this._startHighlightIndex=0,this._endHighlightIndex=this._text.length,this._cursorOffset=this._text.length,this._cursorIndex=-1,this._markAsDirty()},e.prototype.processKeyboard=function(t){this.processKey(t.keyCode,t.key,t),this.onKeyboardEventProcessedObservable.notifyObservers(t)},e.prototype._onCopyText=function(t){this._isTextHighlightOn=!1;try{t.clipboardData&&t.clipboardData.setData("text/plain",this._highlightedText)}catch(t){}this._host.clipboardData=this._highlightedText},e.prototype._onCutText=function(t){if(this._highlightedText){this.text=this._text.slice(0,this._startHighlightIndex)+this._text.slice(this._endHighlightIndex),this._isTextHighlightOn=!1,this._cursorOffset=this.text.length-this._startHighlightIndex;try{t.clipboardData&&t.clipboardData.setData("text/plain",this._highlightedText)}catch(t){}this._host.clipboardData=this._highlightedText,this._highlightedText=""}},e.prototype._onPasteText=function(t){var e="";e=t.clipboardData&&-1!==t.clipboardData.types.indexOf("text/plain")?t.clipboardData.getData("text/plain"):this._host.clipboardData;var i=this._text.length-this._cursorOffset;this.text=this._text.slice(0,i)+e+this._text.slice(i)},e.prototype._draw=function(t,e){var i=this;t.save(),this._applyStates(t),(this.shadowBlur||this.shadowOffsetX||this.shadowOffsetY)&&(t.shadowColor=this.shadowColor,t.shadowBlur=this.shadowBlur,t.shadowOffsetX=this.shadowOffsetX,t.shadowOffsetY=this.shadowOffsetY),this._isFocused?this._focusedBackground&&(t.fillStyle=this._isEnabled?this._focusedBackground:this._disabledColor,t.fillRect(this._currentMeasure.left,this._currentMeasure.top,this._currentMeasure.width,this._currentMeasure.height)):this._background&&(t.fillStyle=this._isEnabled?this._background:this._disabledColor,t.fillRect(this._currentMeasure.left,this._currentMeasure.top,this._currentMeasure.width,this._currentMeasure.height)),(this.shadowBlur||this.shadowOffsetX||this.shadowOffsetY)&&(t.shadowBlur=0,t.shadowOffsetX=0,t.shadowOffsetY=0),this._fontOffset||(this._fontOffset=p._GetFontOffset(t.font));var r=this._currentMeasure.left+this._margin.getValueInPixel(this._host,this._tempParentMeasure.width);this.color&&(t.fillStyle=this.color);var n=this._beforeRenderText(this._text);this._isFocused||this._text||!this._placeholderText||(n=this._placeholderText,this._placeholderColor&&(t.fillStyle=this._placeholderColor)),this._textWidth=t.measureText(n).width;var o=2*this._margin.getValueInPixel(this._host,this._tempParentMeasure.width);this._autoStretchWidth&&(this.width=Math.min(this._maxWidth.getValueInPixel(this._host,this._tempParentMeasure.width),this._textWidth+o)+"px");var s=this._fontOffset.ascent+(this._currentMeasure.height-this._fontOffset.height)/2,a=this._width.getValueInPixel(this._host,this._tempParentMeasure.width)-o;if(t.save(),t.beginPath(),t.rect(r,this._currentMeasure.top+(this._currentMeasure.height-this._fontOffset.height)/2,a+2,this._currentMeasure.height),t.clip(),this._isFocused&&this._textWidth>a){var h=r-this._textWidth+a;this._scrollLeft||(this._scrollLeft=h)}else this._scrollLeft=r;if(t.fillText(n,this._scrollLeft,this._currentMeasure.top+s),this._isFocused){if(this._clickedCoordinate){var l=this._scrollLeft+this._textWidth-this._clickedCoordinate,u=0;this._cursorOffset=0;var c=0;do{this._cursorOffset&&(c=Math.abs(l-u)),this._cursorOffset++,u=t.measureText(n.substr(n.length-this._cursorOffset,this._cursorOffset)).width}while(u<l&&n.length>=this._cursorOffset);Math.abs(l-u)>c&&this._cursorOffset--,this._blinkIsEven=!1,this._clickedCoordinate=null}if(!this._blinkIsEven){var _=this.text.substr(this._text.length-this._cursorOffset),d=t.measureText(_).width,f=this._scrollLeft+this._textWidth-d;f<r?(this._scrollLeft+=r-f,f=r,this._markAsDirty()):f>r+a&&(this._scrollLeft+=r+a-f,f=r+a,this._markAsDirty()),this._isTextHighlightOn||t.fillRect(f,this._currentMeasure.top+(this._currentMeasure.height-this._fontOffset.height)/2,2,this._fontOffset.height)}if(clearTimeout(this._blinkTimeout),this._blinkTimeout=setTimeout(function(){i._blinkIsEven=!i._blinkIsEven,i._markAsDirty()},500),this._isTextHighlightOn){clearTimeout(this._blinkTimeout);var g=t.measureText(this.text.substring(this._startHighlightIndex)).width,b=this._scrollLeft+this._textWidth-g;this._highlightedText=this.text.substring(this._startHighlightIndex,this._endHighlightIndex);var m=t.measureText(this.text.substring(this._startHighlightIndex,this._endHighlightIndex)).width;b<r&&((m-=r-b)||(m=t.measureText(this.text.charAt(this.text.length-this._cursorOffset)).width),b=r),t.globalAlpha=this._highligherOpacity,t.fillStyle=this._textHighlightColor,t.fillRect(b,this._currentMeasure.top+(this._currentMeasure.height-this._fontOffset.height)/2,m,this._fontOffset.height),t.globalAlpha=1}}t.restore(),this._thickness&&(this._isFocused?this.focusedColor&&(t.strokeStyle=this.focusedColor):this.color&&(t.strokeStyle=this.color),t.lineWidth=this._thickness,t.strokeRect(this._currentMeasure.left+this._thickness/2,this._currentMeasure.top+this._thickness/2,this._currentMeasure.width-this._thickness,this._currentMeasure.height-this._thickness)),t.restore()},e.prototype._onPointerDown=function(e,i,r,n){return!!t.prototype._onPointerDown.call(this,e,i,r,n)&&(this._clickedCoordinate=i.x,this._isTextHighlightOn=!1,this._highlightedText="",this._cursorIndex=-1,this._isPointerDown=!0,this._host._capturingControl[r]=this,this._host.focusedControl===this?(clearTimeout(this._blinkTimeout),this._markAsDirty(),!0):!!this._isEnabled&&(this._host.focusedControl=this,!0))},e.prototype._onPointerMove=function(e,i,r){this._host.focusedControl===this&&this._isPointerDown&&(this._clickedCoordinate=i.x,this._markAsDirty(),this._updateValueFromCursorIndex(this._cursorOffset)),t.prototype._onPointerMove.call(this,e,i,r)},e.prototype._onPointerUp=function(e,i,r,n,o){this._isPointerDown=!1,delete this._host._capturingControl[r],t.prototype._onPointerUp.call(this,e,i,r,n,o)},e.prototype._beforeRenderText=function(t){return t},e.prototype.dispose=function(){t.prototype.dispose.call(this),this.onBlurObservable.clear(),this.onFocusObservable.clear(),this.onTextChangedObservable.clear(),this.onTextCopyObservable.clear(),this.onTextCutObservable.clear(),this.onTextPasteObservable.clear(),this.onTextHighlightObservable.clear(),this.onKeyboardEventProcessedObservable.clear()},e}(p);s._TypeStore.RegisteredTypes["BABYLON.GUI.InputText"]=T;var x=function(t){function e(e){var i=t.call(this,e)||this;return i.name=e,i._rowDefinitions=new Array,i._columnDefinitions=new Array,i._cells={},i._childControls=new Array,i}return n(e,t),Object.defineProperty(e.prototype,"columnCount",{get:function(){return this._columnDefinitions.length},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"rowCount",{get:function(){return this._rowDefinitions.length},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"children",{get:function(){return this._childControls},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"cells",{get:function(){return this._cells},enumerable:!0,configurable:!0}),e.prototype.getRowDefinition=function(t){return t<0||t>=this._rowDefinitions.length?null:this._rowDefinitions[t]},e.prototype.getColumnDefinition=function(t){return t<0||t>=this._columnDefinitions.length?null:this._columnDefinitions[t]},e.prototype.addRowDefinition=function(t,e){return void 0===e&&(e=!1),this._rowDefinitions.push(new a(t,e?a.UNITMODE_PIXEL:a.UNITMODE_PERCENTAGE)),this._markAsDirty(),this},e.prototype.addColumnDefinition=function(t,e){return void 0===e&&(e=!1),this._columnDefinitions.push(new a(t,e?a.UNITMODE_PIXEL:a.UNITMODE_PERCENTAGE)),this._markAsDirty(),this},e.prototype.setRowDefinition=function(t,e,i){if(void 0===i&&(i=!1),t<0||t>=this._rowDefinitions.length)return this;var r=this._rowDefinitions[t];return r&&r.isPixel===i&&r.internalValue===e?this:(this._rowDefinitions[t]=new a(e,i?a.UNITMODE_PIXEL:a.UNITMODE_PERCENTAGE),this._markAsDirty(),this)},e.prototype.setColumnDefinition=function(t,e,i){if(void 0===i&&(i=!1),t<0||t>=this._columnDefinitions.length)return this;var r=this._columnDefinitions[t];return r&&r.isPixel===i&&r.internalValue===e?this:(this._columnDefinitions[t]=new a(e,i?a.UNITMODE_PIXEL:a.UNITMODE_PERCENTAGE),this._markAsDirty(),this)},e.prototype.getChildrenAt=function(t,e){var i=this._cells[t+":"+e];return i?i.children:null},e.prototype.getChildCellInfo=function(t){return t._tag},e.prototype._removeCell=function(e,i){if(e){t.prototype.removeControl.call(this,e);for(var r=0,n=e.children;r<n.length;r++){var o=n[r],s=this._childControls.indexOf(o);-1!==s&&this._childControls.splice(s,1)}delete this._cells[i]}},e.prototype._offsetCell=function(t,e){if(this._cells[e]){this._cells[t]=this._cells[e];for(var i=0,r=this._cells[t].children;i<r.length;i++){r[i]._tag=t}delete this._cells[e]}},e.prototype.removeColumnDefinition=function(t){if(t<0||t>=this._columnDefinitions.length)return this;for(var e=0;e<this._rowDefinitions.length;e++){var i=e+":"+t,r=this._cells[i];this._removeCell(r,i)}for(e=0;e<this._rowDefinitions.length;e++)for(var n=t+1;n<this._columnDefinitions.length;n++){var o=e+":"+(n-1);i=e+":"+n;this._offsetCell(o,i)}return this._columnDefinitions.splice(t,1),this._markAsDirty(),this},e.prototype.removeRowDefinition=function(t){if(t<0||t>=this._rowDefinitions.length)return this;for(var e=0;e<this._columnDefinitions.length;e++){var i=t+":"+e,r=this._cells[i];this._removeCell(r,i)}for(e=0;e<this._columnDefinitions.length;e++)for(var n=t+1;n<this._rowDefinitions.length;n++){var o=n-1+":"+e;i=n+":"+e;this._offsetCell(o,i)}return this._rowDefinitions.splice(t,1),this._markAsDirty(),this},e.prototype.addControl=function(e,i,r){if(void 0===i&&(i=0),void 0===r&&(r=0),0===this._rowDefinitions.length&&this.addRowDefinition(1,!1),0===this._columnDefinitions.length&&this.addColumnDefinition(1,!1),-1!==this._childControls.indexOf(e))return s.Tools.Warn("Control (Name:"+e.name+", UniqueId:"+e.uniqueId+") is already associated with this grid. You must remove it before reattaching it"),this;var n=Math.min(i,this._rowDefinitions.length-1)+":"+Math.min(r,this._columnDefinitions.length-1),o=this._cells[n];return o||(o=new g(n),this._cells[n]=o,o.horizontalAlignment=p.HORIZONTAL_ALIGNMENT_LEFT,o.verticalAlignment=p.VERTICAL_ALIGNMENT_TOP,t.prototype.addControl.call(this,o)),o.addControl(e),this._childControls.push(e),e._tag=n,e.parent=this,this._markAsDirty(),this},e.prototype.removeControl=function(t){var e=this._childControls.indexOf(t);-1!==e&&this._childControls.splice(e,1);var i=this._cells[t._tag];return i&&(i.removeControl(t),t._tag=null),this._markAsDirty(),this},e.prototype._getTypeName=function(){return"Grid"},e.prototype._getGridDefinitions=function(t){for(var e=[],i=[],r=[],n=[],o=this._currentMeasure.width,s=0,a=this._currentMeasure.height,h=0,l=0,u=0,c=this._rowDefinitions;u<c.length;u++){if((g=c[u]).isPixel)a-=p=g.getValue(this._host),i[l]=p;else h+=g.internalValue;l++}var _=0;l=0;for(var d=0,f=this._rowDefinitions;d<f.length;d++){var p,g=f[d];if(n.push(_),g.isPixel)_+=g.getValue(this._host);else _+=p=g.internalValue/h*a,i[l]=p;l++}l=0;for(var b=0,m=this._columnDefinitions;b<m.length;b++){if((g=m[b]).isPixel)o-=C=g.getValue(this._host),e[l]=C;else s+=g.internalValue;l++}var y=0;l=0;for(var v=0,O=this._columnDefinitions;v<O.length;v++){var C;g=O[v];if(r.push(y),g.isPixel)y+=g.getValue(this._host);else y+=C=g.internalValue/s*o,e[l]=C;l++}t(r,n,e,i)},e.prototype._additionalProcessing=function(e,i){var r=this;this._getGridDefinitions(function(t,e,i,n){for(var o in r._cells)if(r._cells.hasOwnProperty(o)){var s=o.split(":"),a=parseInt(s[0]),h=parseInt(s[1]),l=r._cells[o];l.left=t[h]+"px",l.top=e[a]+"px",l.width=i[h]+"px",l.height=n[a]+"px",l._left.ignoreAdaptiveScaling=!0,l._top.ignoreAdaptiveScaling=!0,l._width.ignoreAdaptiveScaling=!0,l._height.ignoreAdaptiveScaling=!0}}),t.prototype._additionalProcessing.call(this,e,i)},e.prototype._flagDescendantsAsMatrixDirty=function(){for(var t in this._cells){if(this._cells.hasOwnProperty(t))this._cells[t]._markMatrixAsDirty()}},e.prototype._renderHighlightSpecific=function(e){var i=this;t.prototype._renderHighlightSpecific.call(this,e),this._getGridDefinitions(function(t,r,n,o){for(var s=0;s<t.length;s++){var a=i._currentMeasure.left+t[s]+n[s];e.beginPath(),e.moveTo(a,i._currentMeasure.top),e.lineTo(a,i._currentMeasure.top+i._currentMeasure.height),e.stroke()}for(s=0;s<r.length;s++){var h=i._currentMeasure.top+r[s]+o[s];e.beginPath(),e.moveTo(i._currentMeasure.left,h),e.lineTo(i._currentMeasure.left+i._currentMeasure.width,h),e.stroke()}}),e.restore()},e.prototype.dispose=function(){t.prototype.dispose.call(this);for(var e=0,i=this._childControls;e<i.length;e++){i[e].dispose()}this._childControls=[]},e}(g);s._TypeStore.RegisteredTypes["BABYLON.GUI.Grid"]=x;var M=function(t){function e(e){var i=t.call(this,e)||this;return i.name=e,i._value=s.Color3.Red(),i._tmpColor=new s.Color3,i._pointerStartedOnSquare=!1,i._pointerStartedOnWheel=!1,i._squareLeft=0,i._squareTop=0,i._squareSize=0,i._h=360,i._s=1,i._v=1,i._lastPointerDownID=-1,i.onValueChangedObservable=new s.Observable,i._pointerIsDown=!1,i.value=new s.Color3(.88,.1,.1),i.size="200px",i.isPointerBlocker=!0,i}return n(e,t),Object.defineProperty(e.prototype,"value",{get:function(){return this._value},set:function(t){this._value.equals(t)||(this._value.copyFrom(t),this._value.toHSVToRef(this._tmpColor),this._h=this._tmpColor.r,this._s=Math.max(this._tmpColor.g,1e-5),this._v=Math.max(this._tmpColor.b,1e-5),this._markAsDirty(),this._value.r<=e._Epsilon&&(this._value.r=0),this._value.g<=e._Epsilon&&(this._value.g=0),this._value.b<=e._Epsilon&&(this._value.b=0),this._value.r>=1-e._Epsilon&&(this._value.r=1),this._value.g>=1-e._Epsilon&&(this._value.g=1),this._value.b>=1-e._Epsilon&&(this._value.b=1),this.onValueChangedObservable.notifyObservers(this._value))},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"width",{get:function(){return this._width.toString(this._host)},set:function(t){this._width.toString(this._host)!==t&&this._width.fromString(t)&&(this._height.fromString(t),this._markAsDirty())},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"height",{get:function(){return this._height.toString(this._host)},set:function(t){this._height.toString(this._host)!==t&&this._height.fromString(t)&&(this._width.fromString(t),this._markAsDirty())},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"size",{get:function(){return this.width},set:function(t){this.width=t},enumerable:!0,configurable:!0}),e.prototype._getTypeName=function(){return"ColorPicker"},e.prototype._preMeasure=function(t,e){t.width<t.height?this._currentMeasure.height=t.width:this._currentMeasure.width=t.height},e.prototype._updateSquareProps=function(){var t=.5*Math.min(this._currentMeasure.width,this._currentMeasure.height),e=2*(t-.2*t)/Math.sqrt(2),i=t-.5*e;this._squareLeft=this._currentMeasure.left+i,this._squareTop=this._currentMeasure.top+i,this._squareSize=e},e.prototype._drawGradientSquare=function(t,e,i,r,n,o){var s=o.createLinearGradient(e,i,r+e,i);s.addColorStop(0,"#fff"),s.addColorStop(1,"hsl("+t+", 100%, 50%)"),o.fillStyle=s,o.fillRect(e,i,r,n);var a=o.createLinearGradient(e,i,e,n+i);a.addColorStop(0,"rgba(0,0,0,0)"),a.addColorStop(1,"#000"),o.fillStyle=a,o.fillRect(e,i,r,n)},e.prototype._drawCircle=function(t,e,i,r){r.beginPath(),r.arc(t,e,i+1,0,2*Math.PI,!1),r.lineWidth=3,r.strokeStyle="#333333",r.stroke(),r.beginPath(),r.arc(t,e,i,0,2*Math.PI,!1),r.lineWidth=3,r.strokeStyle="#ffffff",r.stroke()},e.prototype._createColorWheelCanvas=function(t,e){var i=document.createElement("canvas");i.width=2*t,i.height=2*t;for(var r=i.getContext("2d"),n=r.getImageData(0,0,2*t,2*t),o=n.data,a=this._tmpColor,h=t*t,l=t-e,u=l*l,c=-t;c<t;c++)for(var _=-t;_<t;_++){var d=c*c+_*_;if(!(d>h||d<u)){var f=Math.sqrt(d),p=Math.atan2(_,c);s.Color3.HSVtoRGBToRef(180*p/Math.PI+180,f/t,1,a);var g=4*(c+t+2*(_+t)*t);o[g]=255*a.r,o[g+1]=255*a.g,o[g+2]=255*a.b;var b=.2;b=t<50?.2:t>150?.04:-.16*(t-50)/100+.2;var m=(f-l)/(t-l);o[g+3]=m<b?m/b*255:m>1-b?255*(1-(m-(1-b))/b):255}}return r.putImageData(n,0,0),i},e.prototype._draw=function(t){t.save(),this._applyStates(t);var e=.5*Math.min(this._currentMeasure.width,this._currentMeasure.height),i=.2*e,r=this._currentMeasure.left,n=this._currentMeasure.top;this._colorWheelCanvas&&this._colorWheelCanvas.width==2*e||(this._colorWheelCanvas=this._createColorWheelCanvas(e,i)),this._updateSquareProps(),(this.shadowBlur||this.shadowOffsetX||this.shadowOffsetY)&&(t.shadowColor=this.shadowColor,t.shadowBlur=this.shadowBlur,t.shadowOffsetX=this.shadowOffsetX,t.shadowOffsetY=this.shadowOffsetY,t.fillRect(this._squareLeft,this._squareTop,this._squareSize,this._squareSize)),t.drawImage(this._colorWheelCanvas,r,n),(this.shadowBlur||this.shadowOffsetX||this.shadowOffsetY)&&(t.shadowBlur=0,t.shadowOffsetX=0,t.shadowOffsetY=0),this._drawGradientSquare(this._h,this._squareLeft,this._squareTop,this._squareSize,this._squareSize,t);var o=this._squareLeft+this._squareSize*this._s,s=this._squareTop+this._squareSize*(1-this._v);this._drawCircle(o,s,.04*e,t);var a=e-.5*i;o=r+e+Math.cos((this._h-180)*Math.PI/180)*a,s=n+e+Math.sin((this._h-180)*Math.PI/180)*a,this._drawCircle(o,s,.35*i,t),t.restore()},e.prototype._updateValueFromPointer=function(t,i){if(this._pointerStartedOnWheel){var r=.5*Math.min(this._currentMeasure.width,this._currentMeasure.height),n=r+this._currentMeasure.left,o=r+this._currentMeasure.top;this._h=180*Math.atan2(i-o,t-n)/Math.PI+180}else this._pointerStartedOnSquare&&(this._updateSquareProps(),this._s=(t-this._squareLeft)/this._squareSize,this._v=1-(i-this._squareTop)/this._squareSize,this._s=Math.min(this._s,1),this._s=Math.max(this._s,e._Epsilon),this._v=Math.min(this._v,1),this._v=Math.max(this._v,e._Epsilon));s.Color3.HSVtoRGBToRef(this._h,this._s,this._v,this._tmpColor),this.value=this._tmpColor},e.prototype._isPointOnSquare=function(t,e){this._updateSquareProps();var i=this._squareLeft,r=this._squareTop,n=this._squareSize;return t>=i&&t<=i+n&&e>=r&&e<=r+n},e.prototype._isPointOnWheel=function(t,e){var i=.5*Math.min(this._currentMeasure.width,this._currentMeasure.height),r=i-.2*i,n=t-(i+this._currentMeasure.left),o=e-(i+this._currentMeasure.top),s=n*n+o*o;return s<=i*i&&s>=r*r},e.prototype._onPointerDown=function(e,i,r,n){if(!t.prototype._onPointerDown.call(this,e,i,r,n))return!1;this._pointerIsDown=!0,this._pointerStartedOnSquare=!1,this._pointerStartedOnWheel=!1,this._invertTransformMatrix.transformCoordinates(i.x,i.y,this._transformedPosition);var o=this._transformedPosition.x,s=this._transformedPosition.y;return this._isPointOnSquare(o,s)?this._pointerStartedOnSquare=!0:this._isPointOnWheel(o,s)&&(this._pointerStartedOnWheel=!0),this._updateValueFromPointer(o,s),this._host._capturingControl[r]=this,this._lastPointerDownID=r,!0},e.prototype._onPointerMove=function(e,i,r){if(r==this._lastPointerDownID){this._invertTransformMatrix.transformCoordinates(i.x,i.y,this._transformedPosition);var n=this._transformedPosition.x,o=this._transformedPosition.y;this._pointerIsDown&&this._updateValueFromPointer(n,o),t.prototype._onPointerMove.call(this,e,i,r)}},e.prototype._onPointerUp=function(e,i,r,n,o){this._pointerIsDown=!1,delete this._host._capturingControl[r],t.prototype._onPointerUp.call(this,e,i,r,n,o)},e.ShowPickerDialogAsync=function(t,i){return new Promise(function(r,n){i.pickerWidth=i.pickerWidth||"640px",i.pickerHeight=i.pickerHeight||"400px",i.headerHeight=i.headerHeight||"35px",i.lastColor=i.lastColor||"#000000",i.swatchLimit=i.swatchLimit||20,i.numSwatchesPerLine=i.numSwatchesPerLine||10;var o,a,h,l,u,c,_,d,f,g,b,v,C,w,M,P,k,I,A,S=i.swatchLimit/i.numSwatchesPerLine,E=parseFloat(i.pickerWidth)/i.numSwatchesPerLine,L=Math.floor(.25*E),R=L*(i.numSwatchesPerLine+1),D=Math.floor((parseFloat(i.pickerWidth)-R)/i.numSwatchesPerLine),B=D*S+L*(S+1),N=(parseInt(i.pickerHeight)+B+Math.floor(.25*D)).toString()+"px",V="#c0c0c0",H="#535353",F="#414141",j="515151",W="#555555",z="#454545",G=s.Color3.FromHexString("#dddddd"),X=G.r+G.g+G.b,Y="#aaaaaa",U="#ffffff",q=["R","G","B"],K=!1;function Z(t,e){A=e;var i=t.toHexString();if(k.background=i,g.name!=A&&(g.text=Math.floor(255*t.r).toString()),b.name!=A&&(b.text=Math.floor(255*t.g).toString()),v.name!=A&&(v.text=Math.floor(255*t.b).toString()),C.name!=A&&(C.text=t.r.toString()),w.name!=A&&(w.text=t.g.toString()),M.name!=A&&(M.text=t.b.toString()),P.name!=A){var r=i.split("#");P.text=r[1]}f.name!=A&&(f.value=t)}function J(t,e){var i=t.text;if(/[^0-9]/g.test(i))t.text=I;else if(""!=i&&(Math.floor(parseInt(i))<0?i="0":Math.floor(parseInt(i))>255?i="255":isNaN(parseInt(i))&&(i="0")),A==t.name&&(I=i),""!=i){i=parseInt(i).toString(),t.text=i;var r=s.Color3.FromHexString(k.background);A==t.name&&Z("r"==e?new s.Color3(parseInt(i)/255,r.g,r.b):"g"==e?new s.Color3(r.r,parseInt(i)/255,r.b):new s.Color3(r.r,r.g,parseInt(i)/255),t.name)}}function Q(t,e){var i=t.text;if(/[^0-9\.]/g.test(i))t.text=I;else{""!=i&&"."!=i&&0!=parseFloat(i)&&(parseFloat(i)<0?i="0.0":parseFloat(i)>1?i="1.0":isNaN(parseFloat(i))&&(i="0.0")),A==t.name&&(I=i),""!=i&&"."!=i&&0!=parseFloat(i)?(i=parseFloat(i).toString(),t.text=i):i="0.0";var r=s.Color3.FromHexString(k.background);A==t.name&&Z("r"==e?new s.Color3(parseFloat(i),r.g,r.b):"g"==e?new s.Color3(r.r,parseFloat(i),r.b):new s.Color3(r.r,r.g,parseFloat(i)),t.name)}}function $(){if(i.savedColors&&i.savedColors[_]){if(K)var t="b";else t="";var e=O.CreateSimpleButton("Swatch_"+_,t);e.fontFamily="BabylonJSglyphs";var r=s.Color3.FromHexString(i.savedColors[_]),n=r.r+r.g+r.b;e.color=n>X?Y:U,e.fontSize=Math.floor(.7*D),e.textBlock.verticalAlignment=p.VERTICAL_ALIGNMENT_CENTER,e.height=e.width=D.toString()+"px",e.background=i.savedColors[_],e.thickness=2;var o=_;return e.pointerDownAnimation=function(){e.thickness=4},e.pointerUpAnimation=function(){e.thickness=3},e.pointerEnterAnimation=function(){e.thickness=3},e.pointerOutAnimation=function(){e.thickness=2},e.onPointerClickObservable.add(function(){var t;K?(t=o,i.savedColors&&i.savedColors.splice(t,1),i.savedColors&&0==i.savedColors.length&&(it(!1),K=!1),et("",Bt)):i.savedColors&&Z(s.Color3.FromHexString(i.savedColors[o]),e.name)}),e}return null}function tt(t){if(void 0!==t&&(K=t),K){for(var e=0;e<d.children.length;e++){d.children[e].textBlock.text="b"}void 0!==h&&(h.textBlock.text="Done")}else{for(e=0;e<d.children.length;e++){d.children[e].textBlock.text=""}void 0!==h&&(h.textBlock.text="Edit")}}function et(t,e){if(i.savedColors){""!=t&&i.savedColors.push(t),_=0,d.clearControls();var r=Math.ceil(i.savedColors.length/i.numSwatchesPerLine);if(0==r)var n=0;else n=r+1;if(d.rowCount!=r+n){for(var o=d.rowCount,s=0;s<o;s++)d.removeRowDefinition(0);for(s=0;s<r+n;s++)s%2?d.addRowDefinition(D,!0):d.addRowDefinition(L,!0)}d.height=(D*r+n*L).toString()+"px";for(var a=1,h=1;a<r+n;a+=2,h++){if(i.savedColors.length>h*i.numSwatchesPerLine)var l=i.numSwatchesPerLine;else l=i.savedColors.length-(h-1)*i.numSwatchesPerLine;for(var u=Math.min(Math.max(l,0),i.numSwatchesPerLine),c=0,f=1;c<u;c++)if(!(c>i.numSwatchesPerLine)){var p=$();null!=p&&(d.addControl(p,a,f),f+=2,_++)}}i.savedColors.length>=i.swatchLimit?rt(e,!0):rt(e,!1)}}function it(t){t?((h=O.CreateSimpleButton("butEdit","Edit")).width=l,h.height=u,h.left=Math.floor(.1*parseInt(l)).toString()+"px",h.top=(-1*parseFloat(h.left)).toString()+"px",h.verticalAlignment=p.VERTICAL_ALIGNMENT_BOTTOM,h.horizontalAlignment=p.HORIZONTAL_ALIGNMENT_LEFT,h.thickness=2,h.color=V,h.fontSize=a,h.background=H,h.onPointerEnterObservable.add(function(){h.background=F}),h.onPointerOutObservable.add(function(){h.background=H}),h.pointerDownAnimation=function(){h.background=j},h.pointerUpAnimation=function(){h.background=F},h.onPointerClickObservable.add(function(){K=!K,tt()}),mt.addControl(h,1,0)):mt.removeControl(h)}function rt(t,e){e?(t.color=W,t.background=z):(t.color=V,t.background=H)}function nt(e){i.savedColors&&i.savedColors.length>0?r({savedColors:i.savedColors,pickedColor:e}):r({pickedColor:e}),t.removeControl(ot)}var ot=new x;if(ot.name="Dialog Container",ot.width=i.pickerWidth,i.savedColors){ot.height=N;var st=parseInt(i.pickerHeight)/parseInt(N);ot.addRowDefinition(st,!1),ot.addRowDefinition(1-st,!1)}else ot.height=i.pickerHeight,ot.addRowDefinition(1,!1);if(t.addControl(ot),i.savedColors){(d=new x).name="Swatch Drawer",d.verticalAlignment=p.VERTICAL_ALIGNMENT_TOP,d.background=H,d.width=i.pickerWidth;var at=i.savedColors.length/i.numSwatchesPerLine;if(0==at)var ht=0;else ht=at+1;d.height=(D*at+ht*L).toString()+"px",d.top=Math.floor(.25*D).toString()+"px";for(var lt=0;lt<2*Math.ceil(i.savedColors.length/i.numSwatchesPerLine)+1;lt++)lt%2!=0?d.addRowDefinition(D,!0):d.addRowDefinition(L,!0);for(lt=0;lt<2*i.numSwatchesPerLine+1;lt++)lt%2!=0?d.addColumnDefinition(D,!0):d.addColumnDefinition(L,!0);ot.addControl(d,1,0)}var ut=new x;ut.name="Picker Panel",ut.height=i.pickerHeight;var ct=parseInt(i.headerHeight)/parseInt(i.pickerHeight),_t=[ct,1-ct];ut.addRowDefinition(_t[0],!1),ut.addRowDefinition(_t[1],!1),ot.addControl(ut,0,0);var dt=new m;dt.name="Dialogue Header Bar",dt.background="#cccccc",dt.thickness=0,ut.addControl(dt,0,0);var ft=O.CreateSimpleButton("closeButton","a");ft.fontFamily="BabylonJSglyphs";var pt=s.Color3.FromHexString(dt.background);o=new s.Color3(1-pt.r,1-pt.g,1-pt.b),ft.color=o.toHexString(),ft.fontSize=Math.floor(.6*parseInt(i.headerHeight)),ft.textBlock.textVerticalAlignment=p.VERTICAL_ALIGNMENT_CENTER,ft.horizontalAlignment=p.HORIZONTAL_ALIGNMENT_RIGHT,ft.height=ft.width=i.headerHeight,ft.background=dt.background,ft.thickness=0,ft.pointerDownAnimation=function(){},ft.pointerUpAnimation=function(){ft.background=dt.background},ft.pointerEnterAnimation=function(){ft.color=dt.background,ft.background="red"},ft.pointerOutAnimation=function(){ft.color=o.toHexString(),ft.background=dt.background},ft.onPointerClickObservable.add(function(){nt(At.background)}),ut.addControl(ft,0,0);var gt=new x;gt.name="Dialogue Body",gt.background=H;var bt=[.4375,.5625];gt.addRowDefinition(1,!1),gt.addColumnDefinition(bt[0],!1),gt.addColumnDefinition(bt[1],!1),ut.addControl(gt,1,0);var mt=new x;mt.name="Picker Grid",mt.addRowDefinition(.85,!1),mt.addRowDefinition(.15,!1),gt.addControl(mt,0,0),(f=new e).name="GUI Color Picker",i.pickerHeight<i.pickerWidth?f.width=.89:f.height=.89,f.value=s.Color3.FromHexString(i.lastColor),f.horizontalAlignment=p.HORIZONTAL_ALIGNMENT_CENTER,f.verticalAlignment=p.VERTICAL_ALIGNMENT_CENTER,f.onPointerDownObservable.add(function(){A=f.name,I="",tt(!1)}),f.onValueChangedObservable.add(function(t){A==f.name&&Z(t,f.name)}),mt.addControl(f,0,0);var yt=new x;yt.name="Dialogue Right Half",yt.horizontalAlignment=p.HORIZONTAL_ALIGNMENT_LEFT;var vt=[.514,.486];yt.addRowDefinition(vt[0],!1),yt.addRowDefinition(vt[1],!1),gt.addControl(yt,1,1);var Ot=new x;Ot.name="Swatches and Buttons";var Ct=[.417,.583];Ot.addRowDefinition(1,!1),Ot.addColumnDefinition(Ct[0],!1),Ot.addColumnDefinition(Ct[1],!1),yt.addControl(Ot,0,0);var wt=new x;wt.name="New and Current Swatches";var Tt=[.04,.16,.64,.16];wt.addRowDefinition(Tt[0],!1),wt.addRowDefinition(Tt[1],!1),wt.addRowDefinition(Tt[2],!1),wt.addRowDefinition(Tt[3],!1),Ot.addControl(wt,0,0);var xt=new x;xt.name="Active Swatches",xt.width=.67,xt.addRowDefinition(.5,!1),xt.addRowDefinition(.5,!1),wt.addControl(xt,2,0);var Mt=Math.floor(parseInt(i.pickerWidth)*bt[1]*Ct[0]*.11),Pt=Math.floor(parseInt(i.pickerHeight)*_t[1]*vt[0]*Tt[1]*.5);if(i.pickerWidth>i.pickerHeight)var kt=Pt;else kt=Mt;var It=new y;It.text="new",It.name="New Color Label",It.color=V,It.fontSize=kt,wt.addControl(It,1,0),(k=new m).name="New Color Swatch",k.background=i.lastColor,k.thickness=0,xt.addControl(k,0,0);var At=O.CreateSimpleButton("currentSwatch","");At.background=i.lastColor,At.thickness=0,At.onPointerClickObservable.add(function(){Z(s.Color3.FromHexString(At.background),At.name),tt(!1)}),At.pointerDownAnimation=function(){},At.pointerUpAnimation=function(){},At.pointerEnterAnimation=function(){},At.pointerOutAnimation=function(){},xt.addControl(At,1,0);var St=new m;St.name="Swatch Outline",St.width=.67,St.thickness=2,St.color="#404040",St.isHitTestVisible=!1,wt.addControl(St,2,0);var Et=new y;Et.name="Current Color Label",Et.text="current",Et.color=V,Et.fontSize=kt,wt.addControl(Et,3,0);var Lt=new x;Lt.name="Button Grid",Lt.height=.8;Lt.addRowDefinition(1/3,!1),Lt.addRowDefinition(1/3,!1),Lt.addRowDefinition(1/3,!1),Ot.addControl(Lt,0,1),l=Math.floor(parseInt(i.pickerWidth)*bt[1]*Ct[1]*.67).toString()+"px",u=Math.floor(parseInt(i.pickerHeight)*_t[1]*vt[0]*(parseFloat(Lt.height.toString())/100)*(1/3)*.7).toString()+"px",a=parseFloat(l)>parseFloat(u)?Math.floor(.45*parseFloat(u)):Math.floor(.11*parseFloat(l));var Rt=O.CreateSimpleButton("butOK","OK");Rt.width=l,Rt.height=u,Rt.verticalAlignment=p.VERTICAL_ALIGNMENT_CENTER,Rt.thickness=2,Rt.color=V,Rt.fontSize=a,Rt.background=H,Rt.onPointerEnterObservable.add(function(){Rt.background=F}),Rt.onPointerOutObservable.add(function(){Rt.background=H}),Rt.pointerDownAnimation=function(){Rt.background=j},Rt.pointerUpAnimation=function(){Rt.background=F},Rt.onPointerClickObservable.add(function(){tt(!1),nt(k.background)}),Lt.addControl(Rt,0,0);var Dt=O.CreateSimpleButton("butCancel","Cancel");if(Dt.width=l,Dt.height=u,Dt.verticalAlignment=p.VERTICAL_ALIGNMENT_CENTER,Dt.thickness=2,Dt.color=V,Dt.fontSize=a,Dt.background=H,Dt.onPointerEnterObservable.add(function(){Dt.background=F}),Dt.onPointerOutObservable.add(function(){Dt.background=H}),Dt.pointerDownAnimation=function(){Dt.background=j},Dt.pointerUpAnimation=function(){Dt.background=F},Dt.onPointerClickObservable.add(function(){tt(!1),nt(At.background)}),Lt.addControl(Dt,1,0),i.savedColors){var Bt=O.CreateSimpleButton("butSave","Save");Bt.width=l,Bt.height=u,Bt.verticalAlignment=p.VERTICAL_ALIGNMENT_CENTER,Bt.thickness=2,Bt.fontSize=a,i.savedColors.length<i.swatchLimit?(Bt.color=V,Bt.background=H):rt(Bt,!0),Bt.onPointerEnterObservable.add(function(){i.savedColors&&i.savedColors.length<i.swatchLimit&&(Bt.background=F)}),Bt.onPointerOutObservable.add(function(){i.savedColors&&i.savedColors.length<i.swatchLimit&&(Bt.background=H)}),Bt.pointerDownAnimation=function(){i.savedColors&&i.savedColors.length<i.swatchLimit&&(Bt.background=j)},Bt.pointerUpAnimation=function(){i.savedColors&&i.savedColors.length<i.swatchLimit&&(Bt.background=F)},Bt.onPointerClickObservable.add(function(){i.savedColors&&(0==i.savedColors.length&&it(!0),i.savedColors.length<i.swatchLimit&&et(k.background,Bt),tt(!1))}),i.savedColors.length>0&&it(!0),Lt.addControl(Bt,2,0)}var Nt=new x;Nt.name="Dialog Lower Right",Nt.addRowDefinition(.02,!1),Nt.addRowDefinition(.63,!1),Nt.addRowDefinition(.21,!1),Nt.addRowDefinition(.14,!1),yt.addControl(Nt,1,0),c=s.Color3.FromHexString(i.lastColor);var Vt=new x;Vt.name="RGB Values",Vt.width=.82,Vt.verticalAlignment=p.VERTICAL_ALIGNMENT_CENTER,Vt.addRowDefinition(1/3,!1),Vt.addRowDefinition(1/3,!1),Vt.addRowDefinition(1/3,!1),Vt.addColumnDefinition(.1,!1),Vt.addColumnDefinition(.2,!1),Vt.addColumnDefinition(.7,!1),Nt.addControl(Vt,1,0);for(lt=0;lt<q.length;lt++){(Ht=new y).text=q[lt],Ht.color=V,Ht.fontSize=a,Vt.addControl(Ht,lt,0)}(g=new T).width=.83,g.height=.72,g.name="rIntField",g.fontSize=a,g.text=(255*c.r).toString(),g.color="#f0f0f0",g.background="#454545",g.onFocusObservable.add(function(){A=g.name,I=g.text,tt(!1)}),g.onBlurObservable.add(function(){""==g.text&&(g.text="0"),J(g,"r"),A==g.name&&(A="")}),g.onTextChangedObservable.add(function(){A==g.name&&J(g,"r")}),Vt.addControl(g,0,1),(b=new T).width=.83,b.height=.72,b.name="gIntField",b.fontSize=a,b.text=(255*c.g).toString(),b.color="#f0f0f0",b.background="#454545",b.onFocusObservable.add(function(){A=b.name,I=b.text,tt(!1)}),b.onBlurObservable.add(function(){""==b.text&&(b.text="0"),J(b,"g"),A==b.name&&(A="")}),b.onTextChangedObservable.add(function(){A==b.name&&J(b,"g")}),Vt.addControl(b,1,1),(v=new T).width=.83,v.height=.72,v.name="bIntField",v.fontSize=a,v.text=(255*c.b).toString(),v.color="#f0f0f0",v.background="#454545",v.onFocusObservable.add(function(){A=v.name,I=v.text,tt(!1)}),v.onBlurObservable.add(function(){""==v.text&&(v.text="0"),J(v,"b"),A==v.name&&(A="")}),v.onTextChangedObservable.add(function(){A==v.name&&J(v,"b")}),Vt.addControl(v,2,1),(C=new T).width=.95,C.height=.72,C.name="rDecField",C.fontSize=a,C.text=c.r.toString(),C.color="#f0f0f0",C.background="#454545",C.onFocusObservable.add(function(){A=C.name,I=C.text,tt(!1)}),C.onBlurObservable.add(function(){0!=parseFloat(C.text)&&""!=C.text||(C.text="0",Q(C,"r")),A==C.name&&(A="")}),C.onTextChangedObservable.add(function(){A==C.name&&Q(C,"r")}),Vt.addControl(C,0,2),(w=new T).width=.95,w.height=.72,w.name="gDecField",w.fontSize=a,w.text=c.g.toString(),w.color="#f0f0f0",w.background="#454545",w.onFocusObservable.add(function(){A=w.name,I=w.text,tt(!1)}),w.onBlurObservable.add(function(){0!=parseFloat(w.text)&&""!=w.text||(w.text="0",Q(w,"g")),A==w.name&&(A="")}),w.onTextChangedObservable.add(function(){A==w.name&&Q(w,"g")}),Vt.addControl(w,1,2),(M=new T).width=.95,M.height=.72,M.name="bDecField",M.fontSize=a,M.text=c.b.toString(),M.color="#f0f0f0",M.background="#454545",M.onFocusObservable.add(function(){A=M.name,I=M.text,tt(!1)}),M.onBlurObservable.add(function(){0!=parseFloat(M.text)&&""!=M.text||(M.text="0",Q(M,"b")),A==M.name&&(A="")}),M.onTextChangedObservable.add(function(){A==M.name&&Q(M,"b")}),Vt.addControl(M,2,2);var Ht,Ft=new x;Ft.name="Hex Value",Ft.width=.82,Ft.addRowDefinition(1,!1),Ft.addColumnDefinition(.1,!1),Ft.addColumnDefinition(.9,!1),Nt.addControl(Ft,2,0),(Ht=new y).text="#",Ht.color=V,Ht.fontSize=a,Ft.addControl(Ht,0,0),(P=new T).width=.96,P.height=.72,P.name="hexField",P.horizontalAlignment=p.HORIZONTAL_ALIGNMENT_CENTER,P.fontSize=a;var jt=i.lastColor.split("#");P.text=jt[1],P.color="#f0f0f0",P.background="#454545",P.onFocusObservable.add(function(){A=P.name,I=P.text,tt(!1)}),P.onBlurObservable.add(function(){if(3==P.text.length){var t=P.text.split("");P.text=t[0]+t[0]+t[1]+t[1]+t[2]+t[2]}""==P.text&&(P.text="000000",Z(s.Color3.FromHexString(P.text),"b")),A==P.name&&(A="")}),P.onTextChangedObservable.add(function(){var t=P.text,e=/[^0-9A-F]/i.test(t);if((P.text.length>6||e)&&A==P.name)P.text=I;else{if(P.text.length<6)for(var i=6-P.text.length,r=0;r<i;r++)t="0"+t;if(3==P.text.length){var n=P.text.split("");t=n[0]+n[0]+n[1]+n[1]+n[2]+n[2]}t="#"+t,A==P.name&&(I=P.text,Z(s.Color3.FromHexString(t),P.name))}}),Ft.addControl(P,0,1),i.savedColors&&i.savedColors.length>0&&et("",Bt)})},e._Epsilon=1e-6,e}(p);s._TypeStore.RegisteredTypes["BABYLON.GUI.ColorPicker"]=M;var P=function(t){function e(e){var i=t.call(this,e)||this;return i.name=e,i._thickness=1,i}return n(e,t),Object.defineProperty(e.prototype,"thickness",{get:function(){return this._thickness},set:function(t){this._thickness!==t&&(this._thickness=t,this._markAsDirty())},enumerable:!0,configurable:!0}),e.prototype._getTypeName=function(){return"Ellipse"},e.prototype._localDraw=function(t){t.save(),(this.shadowBlur||this.shadowOffsetX||this.shadowOffsetY)&&(t.shadowColor=this.shadowColor,t.shadowBlur=this.shadowBlur,t.shadowOffsetX=this.shadowOffsetX,t.shadowOffsetY=this.shadowOffsetY),p.drawEllipse(this._currentMeasure.left+this._currentMeasure.width/2,this._currentMeasure.top+this._currentMeasure.height/2,this._currentMeasure.width/2-this._thickness/2,this._currentMeasure.height/2-this._thickness/2,t),this._background&&(t.fillStyle=this._background,t.fill()),(this.shadowBlur||this.shadowOffsetX||this.shadowOffsetY)&&(t.shadowBlur=0,t.shadowOffsetX=0,t.shadowOffsetY=0),this._thickness&&(this.color&&(t.strokeStyle=this.color),t.lineWidth=this._thickness,t.stroke()),t.restore()},e.prototype._additionalProcessing=function(e,i){t.prototype._additionalProcessing.call(this,e,i),this._measureForChildren.width-=2*this._thickness,this._measureForChildren.height-=2*this._thickness,this._measureForChildren.left+=this._thickness,this._measureForChildren.top+=this._thickness},e.prototype._clipForChildren=function(t){p.drawEllipse(this._currentMeasure.left+this._currentMeasure.width/2,this._currentMeasure.top+this._currentMeasure.height/2,this._currentMeasure.width/2,this._currentMeasure.height/2,t),t.clip()},e}(g);s._TypeStore.RegisteredTypes["BABYLON.GUI.Ellipse"]=P;var k=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return n(e,t),e.prototype._beforeRenderText=function(t){for(var e="",i=0;i<t.length;i++)e+="•";return e},e}(T);s._TypeStore.RegisteredTypes["BABYLON.GUI.InputPassword"]=k;var I=function(t){function e(e){var i=t.call(this,e)||this;return i.name=e,i._lineWidth=1,i._x1=new a(0),i._y1=new a(0),i._x2=new a(0),i._y2=new a(0),i._dash=new Array,i._automaticSize=!0,i.isHitTestVisible=!1,i._horizontalAlignment=p.HORIZONTAL_ALIGNMENT_LEFT,i._verticalAlignment=p.VERTICAL_ALIGNMENT_TOP,i}return n(e,t),Object.defineProperty(e.prototype,"dash",{get:function(){return this._dash},set:function(t){this._dash!==t&&(this._dash=t,this._markAsDirty())},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"connectedControl",{get:function(){return this._connectedControl},set:function(t){var e=this;this._connectedControl!==t&&(this._connectedControlDirtyObserver&&this._connectedControl&&(this._connectedControl.onDirtyObservable.remove(this._connectedControlDirtyObserver),this._connectedControlDirtyObserver=null),t&&(this._connectedControlDirtyObserver=t.onDirtyObservable.add(function(){return e._markAsDirty()})),this._connectedControl=t,this._markAsDirty())},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"x1",{get:function(){return this._x1.toString(this._host)},set:function(t){this._x1.toString(this._host)!==t&&this._x1.fromString(t)&&this._markAsDirty()},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"y1",{get:function(){return this._y1.toString(this._host)},set:function(t){this._y1.toString(this._host)!==t&&this._y1.fromString(t)&&this._markAsDirty()},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"x2",{get:function(){return this._x2.toString(this._host)},set:function(t){this._x2.toString(this._host)!==t&&this._x2.fromString(t)&&this._markAsDirty()},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"y2",{get:function(){return this._y2.toString(this._host)},set:function(t){this._y2.toString(this._host)!==t&&this._y2.fromString(t)&&this._markAsDirty()},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"lineWidth",{get:function(){return this._lineWidth},set:function(t){this._lineWidth!==t&&(this._lineWidth=t,this._markAsDirty())},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"horizontalAlignment",{set:function(t){},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"verticalAlignment",{set:function(t){},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"_effectiveX2",{get:function(){return(this._connectedControl?this._connectedControl.centerX:0)+this._x2.getValue(this._host)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"_effectiveY2",{get:function(){return(this._connectedControl?this._connectedControl.centerY:0)+this._y2.getValue(this._host)},enumerable:!0,configurable:!0}),e.prototype._getTypeName=function(){return"Line"},e.prototype._draw=function(t){t.save(),(this.shadowBlur||this.shadowOffsetX||this.shadowOffsetY)&&(t.shadowColor=this.shadowColor,t.shadowBlur=this.shadowBlur,t.shadowOffsetX=this.shadowOffsetX,t.shadowOffsetY=this.shadowOffsetY),this._applyStates(t),t.strokeStyle=this.color,t.lineWidth=this._lineWidth,t.setLineDash(this._dash),t.beginPath(),t.moveTo(this._cachedParentMeasure.left+this._x1.getValue(this._host),this._cachedParentMeasure.top+this._y1.getValue(this._host)),t.lineTo(this._cachedParentMeasure.left+this._effectiveX2,this._cachedParentMeasure.top+this._effectiveY2),t.stroke(),t.restore()},e.prototype._measure=function(){this._currentMeasure.width=Math.abs(this._x1.getValue(this._host)-this._effectiveX2)+this._lineWidth,this._currentMeasure.height=Math.abs(this._y1.getValue(this._host)-this._effectiveY2)+this._lineWidth},e.prototype._computeAlignment=function(t,e){this._currentMeasure.left=t.left+Math.min(this._x1.getValue(this._host),this._effectiveX2)-this._lineWidth/2,this._currentMeasure.top=t.top+Math.min(this._y1.getValue(this._host),this._effectiveY2)-this._lineWidth/2},e.prototype.moveToVector3=function(t,e,i){if(void 0===i&&(i=!1),this._host&&this.parent===this._host._rootContainer){var r=this._host._getGlobalViewport(e),n=s.Vector3.Project(t,s.Matrix.Identity(),e.getTransformMatrix(),r);this._moveToProjectedPosition(n,i),n.z<0||n.z>1?this.notRenderable=!0:this.notRenderable=!1}else s.Tools.Error("Cannot move a control to a vector3 if the control is not at root level")},e.prototype._moveToProjectedPosition=function(t,e){void 0===e&&(e=!1);var i=t.x+this._linkOffsetX.getValue(this._host)+"px",r=t.y+this._linkOffsetY.getValue(this._host)+"px";e?(this.x2=i,this.y2=r,this._x2.ignoreAdaptiveScaling=!0,this._y2.ignoreAdaptiveScaling=!0):(this.x1=i,this.y1=r,this._x1.ignoreAdaptiveScaling=!0,this._y1.ignoreAdaptiveScaling=!0)},e}(p);s._TypeStore.RegisteredTypes["BABYLON.GUI.Line"]=I;var A=function(){function t(t){this._multiLine=t,this._x=new a(0),this._y=new a(0),this._point=new s.Vector2(0,0)}return Object.defineProperty(t.prototype,"x",{get:function(){return this._x.toString(this._multiLine._host)},set:function(t){this._x.toString(this._multiLine._host)!==t&&this._x.fromString(t)&&this._multiLine._markAsDirty()},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"y",{get:function(){return this._y.toString(this._multiLine._host)},set:function(t){this._y.toString(this._multiLine._host)!==t&&this._y.fromString(t)&&this._multiLine._markAsDirty()},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"control",{get:function(){return this._control},set:function(t){this._control!==t&&(this._control&&this._controlObserver&&(this._control.onDirtyObservable.remove(this._controlObserver),this._controlObserver=null),this._control=t,this._control&&(this._controlObserver=this._control.onDirtyObservable.add(this._multiLine.onPointUpdate)),this._multiLine._markAsDirty())},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"mesh",{get:function(){return this._mesh},set:function(t){this._mesh!==t&&(this._mesh&&this._meshObserver&&this._mesh.getScene().onAfterCameraRenderObservable.remove(this._meshObserver),this._mesh=t,this._mesh&&(this._meshObserver=this._mesh.getScene().onAfterCameraRenderObservable.add(this._multiLine.onPointUpdate)),this._multiLine._markAsDirty())},enumerable:!0,configurable:!0}),t.prototype.resetLinks=function(){this.control=null,this.mesh=null},t.prototype.translate=function(){return this._point=this._translatePoint(),this._point},t.prototype._translatePoint=function(){if(null!=this._mesh)return this._multiLine._host.getProjectedPosition(this._mesh.getBoundingInfo().boundingSphere.center,this._mesh.getWorldMatrix());if(null!=this._control)return new s.Vector2(this._control.centerX,this._control.centerY);var t=this._multiLine._host,e=this._x.getValueInPixel(t,Number(t._canvas.width)),i=this._y.getValueInPixel(t,Number(t._canvas.height));return new s.Vector2(e,i)},t.prototype.dispose=function(){this.resetLinks()},t}(),S=function(t){function e(e){var i=t.call(this,e)||this;return i.name=e,i._lineWidth=1,i.onPointUpdate=function(){i._markAsDirty()},i._automaticSize=!0,i.isHitTestVisible=!1,i._horizontalAlignment=p.HORIZONTAL_ALIGNMENT_LEFT,i._verticalAlignment=p.VERTICAL_ALIGNMENT_TOP,i._dash=[],i._points=[],i}return n(e,t),Object.defineProperty(e.prototype,"dash",{get:function(){return this._dash},set:function(t){this._dash!==t&&(this._dash=t,this._markAsDirty())},enumerable:!0,configurable:!0}),e.prototype.getAt=function(t){return this._points[t]||(this._points[t]=new A(this)),this._points[t]},e.prototype.add=function(){for(var t=this,e=[],i=0;i<arguments.length;i++)e[i]=arguments[i];return e.map(function(e){return t.push(e)})},e.prototype.push=function(t){var e=this.getAt(this._points.length);return null==t?e:(t instanceof s.AbstractMesh?e.mesh=t:t instanceof p?e.control=t:null!=t.x&&null!=t.y&&(e.x=t.x,e.y=t.y),e)},e.prototype.remove=function(t){var e;if(t instanceof A){if(-1===(e=this._points.indexOf(t)))return}else e=t;var i=this._points[e];i&&(i.dispose(),this._points.splice(e,1))},e.prototype.reset=function(){for(;this._points.length>0;)this.remove(this._points.length-1)},e.prototype.resetLinks=function(){this._points.forEach(function(t){null!=t&&t.resetLinks()})},Object.defineProperty(e.prototype,"lineWidth",{get:function(){return this._lineWidth},set:function(t){this._lineWidth!==t&&(this._lineWidth=t,this._markAsDirty())},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"horizontalAlignment",{set:function(t){},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"verticalAlignment",{set:function(t){},enumerable:!0,configurable:!0}),e.prototype._getTypeName=function(){return"MultiLine"},e.prototype._draw=function(t,e){t.save(),(this.shadowBlur||this.shadowOffsetX||this.shadowOffsetY)&&(t.shadowColor=this.shadowColor,t.shadowBlur=this.shadowBlur,t.shadowOffsetX=this.shadowOffsetX,t.shadowOffsetY=this.shadowOffsetY),this._applyStates(t),t.strokeStyle=this.color,t.lineWidth=this._lineWidth,t.setLineDash(this._dash),t.beginPath();var i=!0;this._points.forEach(function(e){e&&(i?(t.moveTo(e._point.x,e._point.y),i=!1):t.lineTo(e._point.x,e._point.y))}),t.stroke(),t.restore()},e.prototype._additionalProcessing=function(t,e){var i=this;this._minX=null,this._minY=null,this._maxX=null,this._maxY=null,this._points.forEach(function(t,e){t&&(t.translate(),(null==i._minX||t._point.x<i._minX)&&(i._minX=t._point.x),(null==i._minY||t._point.y<i._minY)&&(i._minY=t._point.y),(null==i._maxX||t._point.x>i._maxX)&&(i._maxX=t._point.x),(null==i._maxY||t._point.y>i._maxY)&&(i._maxY=t._point.y))}),null==this._minX&&(this._minX=0),null==this._minY&&(this._minY=0),null==this._maxX&&(this._maxX=0),null==this._maxY&&(this._maxY=0)},e.prototype._measure=function(){null!=this._minX&&null!=this._maxX&&null!=this._minY&&null!=this._maxY&&(this._currentMeasure.width=Math.abs(this._maxX-this._minX)+this._lineWidth,this._currentMeasure.height=Math.abs(this._maxY-this._minY)+this._lineWidth)},e.prototype._computeAlignment=function(t,e){null!=this._minX&&null!=this._minY&&(this._currentMeasure.left=this._minX-this._lineWidth/2,this._currentMeasure.top=this._minY-this._lineWidth/2)},e.prototype.dispose=function(){this.reset(),t.prototype.dispose.call(this)},e}(p);s._TypeStore.RegisteredTypes["BABYLON.GUI.MultiLine"]=S;var E=function(t){function e(e){var i=t.call(this,e)||this;return i.name=e,i._isChecked=!1,i._background="black",i._checkSizeRatio=.8,i._thickness=1,i.group="",i.onIsCheckedChangedObservable=new s.Observable,i.isPointerBlocker=!0,i}return n(e,t),Object.defineProperty(e.prototype,"thickness",{get:function(){return this._thickness},set:function(t){this._thickness!==t&&(this._thickness=t,this._markAsDirty())},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"checkSizeRatio",{get:function(){return this._checkSizeRatio},set:function(t){t=Math.max(Math.min(1,t),0),this._checkSizeRatio!==t&&(this._checkSizeRatio=t,this._markAsDirty())},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"background",{get:function(){return this._background},set:function(t){this._background!==t&&(this._background=t,this._markAsDirty())},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"isChecked",{get:function(){return this._isChecked},set:function(t){var e=this;this._isChecked!==t&&(this._isChecked=t,this._markAsDirty(),this.onIsCheckedChangedObservable.notifyObservers(t),this._isChecked&&this._host&&this._host.executeOnAllControls(function(t){if(t!==e&&void 0!==t.group){var i=t;i.group===e.group&&(i.isChecked=!1)}}))},enumerable:!0,configurable:!0}),e.prototype._getTypeName=function(){return"RadioButton"},e.prototype._draw=function(t){t.save(),this._applyStates(t);var e=this._currentMeasure.width-this._thickness,i=this._currentMeasure.height-this._thickness;if((this.shadowBlur||this.shadowOffsetX||this.shadowOffsetY)&&(t.shadowColor=this.shadowColor,t.shadowBlur=this.shadowBlur,t.shadowOffsetX=this.shadowOffsetX,t.shadowOffsetY=this.shadowOffsetY),p.drawEllipse(this._currentMeasure.left+this._currentMeasure.width/2,this._currentMeasure.top+this._currentMeasure.height/2,this._currentMeasure.width/2-this._thickness/2,this._currentMeasure.height/2-this._thickness/2,t),t.fillStyle=this._isEnabled?this._background:this._disabledColor,t.fill(),(this.shadowBlur||this.shadowOffsetX||this.shadowOffsetY)&&(t.shadowBlur=0,t.shadowOffsetX=0,t.shadowOffsetY=0),t.strokeStyle=this.color,t.lineWidth=this._thickness,t.stroke(),this._isChecked){t.fillStyle=this._isEnabled?this.color:this._disabledColor;var r=e*this._checkSizeRatio,n=i*this._checkSizeRatio;p.drawEllipse(this._currentMeasure.left+this._currentMeasure.width/2,this._currentMeasure.top+this._currentMeasure.height/2,r/2-this._thickness/2,n/2-this._thickness/2,t),t.fill()}t.restore()},e.prototype._onPointerDown=function(e,i,r,n){return!!t.prototype._onPointerDown.call(this,e,i,r,n)&&(this.isChecked||(this.isChecked=!0),!0)},e.AddRadioButtonWithHeader=function(t,i,r,n){var o=new C;o.isVertical=!1,o.height="30px";var s=new e;s.width="20px",s.height="20px",s.isChecked=r,s.color="green",s.group=i,s.onIsCheckedChangedObservable.add(function(t){return n(s,t)}),o.addControl(s);var a=new y;return a.text=t,a.width="180px",a.paddingLeft="5px",a.textHorizontalAlignment=p.HORIZONTAL_ALIGNMENT_LEFT,a.color="white",o.addControl(a),o},e}(p);s._TypeStore.RegisteredTypes["BABYLON.GUI.RadioButton"]=E;var L=function(t){function e(e){var i=t.call(this,e)||this;return i.name=e,i._thumbWidth=new a(20,a.UNITMODE_PIXEL,!1),i._minimum=0,i._maximum=100,i._value=50,i._isVertical=!1,i._barOffset=new a(5,a.UNITMODE_PIXEL,!1),i._isThumbClamped=!1,i._displayThumb=!0,i._step=0,i._lastPointerDownID=-1,i._effectiveBarOffset=0,i.onValueChangedObservable=new s.Observable,i._pointerIsDown=!1,i.isPointerBlocker=!0,i}return n(e,t),Object.defineProperty(e.prototype,"displayThumb",{get:function(){return this._displayThumb},set:function(t){this._displayThumb!==t&&(this._displayThumb=t,this._markAsDirty())},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"step",{get:function(){return this._step},set:function(t){this._step!==t&&(this._step=t,this._markAsDirty())},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"barOffset",{get:function(){return this._barOffset.toString(this._host)},set:function(t){this._barOffset.toString(this._host)!==t&&this._barOffset.fromString(t)&&this._markAsDirty()},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"barOffsetInPixels",{get:function(){return this._barOffset.getValueInPixel(this._host,this._cachedParentMeasure.width)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"thumbWidth",{get:function(){return this._thumbWidth.toString(this._host)},set:function(t){this._thumbWidth.toString(this._host)!==t&&this._thumbWidth.fromString(t)&&this._markAsDirty()},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"thumbWidthInPixels",{get:function(){return this._thumbWidth.getValueInPixel(this._host,this._cachedParentMeasure.width)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"minimum",{get:function(){return this._minimum},set:function(t){this._minimum!==t&&(this._minimum=t,this._markAsDirty(),this.value=Math.max(Math.min(this.value,this._maximum),this._minimum))},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"maximum",{get:function(){return this._maximum},set:function(t){this._maximum!==t&&(this._maximum=t,this._markAsDirty(),this.value=Math.max(Math.min(this.value,this._maximum),this._minimum))},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"value",{get:function(){return this._value},set:function(t){t=Math.max(Math.min(t,this._maximum),this._minimum),this._value!==t&&(this._value=t,this._markAsDirty(),this.onValueChangedObservable.notifyObservers(this._value))},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"isVertical",{get:function(){return this._isVertical},set:function(t){this._isVertical!==t&&(this._isVertical=t,this._markAsDirty())},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"isThumbClamped",{get:function(){return this._isThumbClamped},set:function(t){this._isThumbClamped!==t&&(this._isThumbClamped=t,this._markAsDirty())},enumerable:!0,configurable:!0}),e.prototype._getTypeName=function(){return"BaseSlider"},e.prototype._getThumbPosition=function(){return this.isVertical?(this.maximum-this.value)/(this.maximum-this.minimum)*this._backgroundBoxLength:(this.value-this.minimum)/(this.maximum-this.minimum)*this._backgroundBoxLength},e.prototype._getThumbThickness=function(t){var e=0;switch(t){case"circle":e=this._thumbWidth.isPixel?Math.max(this._thumbWidth.getValue(this._host),this._backgroundBoxThickness):this._backgroundBoxThickness*this._thumbWidth.getValue(this._host);break;case"rectangle":e=this._thumbWidth.isPixel?Math.min(this._thumbWidth.getValue(this._host),this._backgroundBoxThickness):this._backgroundBoxThickness*this._thumbWidth.getValue(this._host)}return e},e.prototype._prepareRenderingData=function(t){this._effectiveBarOffset=0,this._renderLeft=this._currentMeasure.left,this._renderTop=this._currentMeasure.top,this._renderWidth=this._currentMeasure.width,this._renderHeight=this._currentMeasure.height,this._backgroundBoxLength=Math.max(this._currentMeasure.width,this._currentMeasure.height),this._backgroundBoxThickness=Math.min(this._currentMeasure.width,this._currentMeasure.height),this._effectiveThumbThickness=this._getThumbThickness(t),this.displayThumb&&(this._backgroundBoxLength-=this._effectiveThumbThickness),this.isVertical&&this._currentMeasure.height<this._currentMeasure.width?console.error("Height should be greater than width"):(this._barOffset.isPixel?this._effectiveBarOffset=Math.min(this._barOffset.getValue(this._host),this._backgroundBoxThickness):this._effectiveBarOffset=this._backgroundBoxThickness*this._barOffset.getValue(this._host),this._backgroundBoxThickness-=2*this._effectiveBarOffset,this.isVertical?(this._renderLeft+=this._effectiveBarOffset,!this.isThumbClamped&&this.displayThumb&&(this._renderTop+=this._effectiveThumbThickness/2),this._renderHeight=this._backgroundBoxLength,this._renderWidth=this._backgroundBoxThickness):(this._renderTop+=this._effectiveBarOffset,!this.isThumbClamped&&this.displayThumb&&(this._renderLeft+=this._effectiveThumbThickness/2),this._renderHeight=this._backgroundBoxThickness,this._renderWidth=this._backgroundBoxLength))},e.prototype._updateValueFromPointer=function(t,e){var i;0!=this.rotation&&(this._invertTransformMatrix.transformCoordinates(t,e,this._transformedPosition),t=this._transformedPosition.x,e=this._transformedPosition.y),i=this._isVertical?this._minimum+(1-(e-this._currentMeasure.top)/this._currentMeasure.height)*(this._maximum-this._minimum):this._minimum+(t-this._currentMeasure.left)/this._currentMeasure.width*(this._maximum-this._minimum);var r=1/this._step|0;this.value=this._step?(i*r|0)/r:i},e.prototype._onPointerDown=function(e,i,r,n){return!!t.prototype._onPointerDown.call(this,e,i,r,n)&&(this._pointerIsDown=!0,this._updateValueFromPointer(i.x,i.y),this._host._capturingControl[r]=this,this._lastPointerDownID=r,!0)},e.prototype._onPointerMove=function(e,i,r){r==this._lastPointerDownID&&(this._pointerIsDown&&this._updateValueFromPointer(i.x,i.y),t.prototype._onPointerMove.call(this,e,i,r))},e.prototype._onPointerUp=function(e,i,r,n,o){this._pointerIsDown=!1,delete this._host._capturingControl[r],t.prototype._onPointerUp.call(this,e,i,r,n,o)},e}(p),R=function(t){function e(e){var i=t.call(this,e)||this;return i.name=e,i._background="black",i._borderColor="white",i._isThumbCircle=!1,i._displayValueBar=!0,i}return n(e,t),Object.defineProperty(e.prototype,"displayValueBar",{get:function(){return this._displayValueBar},set:function(t){this._displayValueBar!==t&&(this._displayValueBar=t,this._markAsDirty())},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"borderColor",{get:function(){return this._borderColor},set:function(t){this._borderColor!==t&&(this._borderColor=t,this._markAsDirty())},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"background",{get:function(){return this._background},set:function(t){this._background!==t&&(this._background=t,this._markAsDirty())},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"isThumbCircle",{get:function(){return this._isThumbCircle},set:function(t){this._isThumbCircle!==t&&(this._isThumbCircle=t,this._markAsDirty())},enumerable:!0,configurable:!0}),e.prototype._getTypeName=function(){return"Slider"},e.prototype._draw=function(t,e){t.save(),this._applyStates(t),this._prepareRenderingData(this.isThumbCircle?"circle":"rectangle");var i=this._renderLeft,r=this._renderTop,n=this._renderWidth,o=this._renderHeight,s=0;this.isThumbClamped&&this.isThumbCircle?(this.isVertical?r+=this._effectiveThumbThickness/2:i+=this._effectiveThumbThickness/2,s=this._backgroundBoxThickness/2):s=(this._effectiveThumbThickness-this._effectiveBarOffset)/2,(this.shadowBlur||this.shadowOffsetX||this.shadowOffsetY)&&(t.shadowColor=this.shadowColor,t.shadowBlur=this.shadowBlur,t.shadowOffsetX=this.shadowOffsetX,t.shadowOffsetY=this.shadowOffsetY);var a=this._getThumbPosition();t.fillStyle=this._background,this.isVertical?this.isThumbClamped?this.isThumbCircle?(t.beginPath(),t.arc(i+this._backgroundBoxThickness/2,r,s,Math.PI,2*Math.PI),t.fill(),t.fillRect(i,r,n,o)):t.fillRect(i,r,n,o+this._effectiveThumbThickness):t.fillRect(i,r,n,o):this.isThumbClamped?this.isThumbCircle?(t.beginPath(),t.arc(i+this._backgroundBoxLength,r+this._backgroundBoxThickness/2,s,0,2*Math.PI),t.fill(),t.fillRect(i,r,n,o)):t.fillRect(i,r,n+this._effectiveThumbThickness,o):t.fillRect(i,r,n,o),(this.shadowBlur||this.shadowOffsetX||this.shadowOffsetY)&&(t.shadowBlur=0,t.shadowOffsetX=0,t.shadowOffsetY=0),t.fillStyle=this.color,this._displayValueBar&&(this.isVertical?this.isThumbClamped?this.isThumbCircle?(t.beginPath(),t.arc(i+this._backgroundBoxThickness/2,r+this._backgroundBoxLength,s,0,2*Math.PI),t.fill(),t.fillRect(i,r+a,n,o-a)):t.fillRect(i,r+a,n,o-a+this._effectiveThumbThickness):t.fillRect(i,r+a,n,o-a):this.isThumbClamped&&this.isThumbCircle?(t.beginPath(),t.arc(i,r+this._backgroundBoxThickness/2,s,0,2*Math.PI),t.fill(),t.fillRect(i,r,a,o)):t.fillRect(i,r,a,o)),this.displayThumb&&((this.shadowBlur||this.shadowOffsetX||this.shadowOffsetY)&&(t.shadowColor=this.shadowColor,t.shadowBlur=this.shadowBlur,t.shadowOffsetX=this.shadowOffsetX,t.shadowOffsetY=this.shadowOffsetY),this._isThumbCircle?(t.beginPath(),this.isVertical?t.arc(i+this._backgroundBoxThickness/2,r+a,s,0,2*Math.PI):t.arc(i+a,r+this._backgroundBoxThickness/2,s,0,2*Math.PI),t.fill(),(this.shadowBlur||this.shadowOffsetX||this.shadowOffsetY)&&(t.shadowBlur=0,t.shadowOffsetX=0,t.shadowOffsetY=0),t.strokeStyle=this._borderColor,t.stroke()):(this.isVertical?t.fillRect(i-this._effectiveBarOffset,this._currentMeasure.top+a,this._currentMeasure.width,this._effectiveThumbThickness):t.fillRect(this._currentMeasure.left+a,this._currentMeasure.top,this._effectiveThumbThickness,this._currentMeasure.height),(this.shadowBlur||this.shadowOffsetX||this.shadowOffsetY)&&(t.shadowBlur=0,t.shadowOffsetX=0,t.shadowOffsetY=0),t.strokeStyle=this._borderColor,this.isVertical?t.strokeRect(i-this._effectiveBarOffset,this._currentMeasure.top+a,this._currentMeasure.width,this._effectiveThumbThickness):t.strokeRect(this._currentMeasure.left+a,this._currentMeasure.top,this._effectiveThumbThickness,this._currentMeasure.height))),t.restore()},e}(L);s._TypeStore.RegisteredTypes["BABYLON.GUI.Slider"]=R;var D=function(){function t(t){this.name=t,this._groupPanel=new C,this._selectors=new Array,this._groupPanel.verticalAlignment=p.VERTICAL_ALIGNMENT_TOP,this._groupPanel.horizontalAlignment=p.HORIZONTAL_ALIGNMENT_LEFT,this._groupHeader=this._addGroupHeader(t)}return Object.defineProperty(t.prototype,"groupPanel",{get:function(){return this._groupPanel},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"selectors",{get:function(){return this._selectors},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"header",{get:function(){return this._groupHeader.text},set:function(t){"label"!==this._groupHeader.text&&(this._groupHeader.text=t)},enumerable:!0,configurable:!0}),t.prototype._addGroupHeader=function(t){var e=new y("groupHead",t);return e.width=.9,e.height="30px",e.textWrapping=!0,e.color="black",e.horizontalAlignment=p.HORIZONTAL_ALIGNMENT_LEFT,e.textHorizontalAlignment=p.HORIZONTAL_ALIGNMENT_LEFT,e.left="2px",this._groupPanel.addControl(e),e},t.prototype._getSelector=function(t){if(!(t<0||t>=this._selectors.length))return this._selectors[t]},t.prototype.removeSelector=function(t){t<0||t>=this._selectors.length||(this._groupPanel.removeControl(this._selectors[t]),this._selectors.splice(t,1))},t}(),B=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return n(e,t),e.prototype.addCheckbox=function(t,e,i){void 0===e&&(e=function(t){}),void 0===i&&(i=!1);i=i||!1;var r=new w;r.width="20px",r.height="20px",r.color="#364249",r.background="#CCCCCC",r.horizontalAlignment=p.HORIZONTAL_ALIGNMENT_LEFT,r.onIsCheckedChangedObservable.add(function(t){e(t)});var n=p.AddHeader(r,t,"200px",{isHorizontal:!0,controlFirst:!0});n.height="30px",n.horizontalAlignment=p.HORIZONTAL_ALIGNMENT_LEFT,n.left="4px",this.groupPanel.addControl(n),this.selectors.push(n),r.isChecked=i,this.groupPanel.parent&&this.groupPanel.parent.parent&&(r.color=this.groupPanel.parent.parent.buttonColor,r.background=this.groupPanel.parent.parent.buttonBackground)},e.prototype._setSelectorLabel=function(t,e){this.selectors[t].children[1].text=e},e.prototype._setSelectorLabelColor=function(t,e){this.selectors[t].children[1].color=e},e.prototype._setSelectorButtonColor=function(t,e){this.selectors[t].children[0].color=e},e.prototype._setSelectorButtonBackground=function(t,e){this.selectors[t].children[0].background=e},e}(D),N=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e._selectNb=0,e}return n(e,t),e.prototype.addRadio=function(t,e,i){void 0===e&&(e=function(t){}),void 0===i&&(i=!1);var r=this._selectNb++,n=new E;n.name=t,n.width="20px",n.height="20px",n.color="#364249",n.background="#CCCCCC",n.group=this.name,n.horizontalAlignment=p.HORIZONTAL_ALIGNMENT_LEFT,n.onIsCheckedChangedObservable.add(function(t){t&&e(r)});var o=p.AddHeader(n,t,"200px",{isHorizontal:!0,controlFirst:!0});o.height="30px",o.horizontalAlignment=p.HORIZONTAL_ALIGNMENT_LEFT,o.left="4px",this.groupPanel.addControl(o),this.selectors.push(o),n.isChecked=i,this.groupPanel.parent&&this.groupPanel.parent.parent&&(n.color=this.groupPanel.parent.parent.buttonColor,n.background=this.groupPanel.parent.parent.buttonBackground)},e.prototype._setSelectorLabel=function(t,e){this.selectors[t].children[1].text=e},e.prototype._setSelectorLabelColor=function(t,e){this.selectors[t].children[1].color=e},e.prototype._setSelectorButtonColor=function(t,e){this.selectors[t].children[0].color=e},e.prototype._setSelectorButtonBackground=function(t,e){this.selectors[t].children[0].background=e},e}(D),V=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return n(e,t),e.prototype.addSlider=function(t,e,i,r,n,o,s){void 0===e&&(e=function(t){}),void 0===i&&(i="Units"),void 0===r&&(r=0),void 0===n&&(n=0),void 0===o&&(o=0),void 0===s&&(s=function(t){return 0|t});var a=new R;a.name=i,a.value=o,a.minimum=r,a.maximum=n,a.width=.9,a.height="20px",a.color="#364249",a.background="#CCCCCC",a.borderColor="black",a.horizontalAlignment=p.HORIZONTAL_ALIGNMENT_LEFT,a.left="4px",a.paddingBottom="4px",a.onValueChangedObservable.add(function(t){a.parent.children[0].text=a.parent.children[0].name+": "+s(t)+" "+a.name,e(t)});var h=p.AddHeader(a,t+": "+s(o)+" "+i,"30px",{isHorizontal:!1,controlFirst:!1});h.height="60px",h.horizontalAlignment=p.HORIZONTAL_ALIGNMENT_LEFT,h.left="4px",h.children[0].name=t,this.groupPanel.addControl(h),this.selectors.push(h),this.groupPanel.parent&&this.groupPanel.parent.parent&&(a.color=this.groupPanel.parent.parent.buttonColor,a.background=this.groupPanel.parent.parent.buttonBackground)},e.prototype._setSelectorLabel=function(t,e){this.selectors[t].children[0].name=e,this.selectors[t].children[0].text=e+": "+this.selectors[t].children[1].value+" "+this.selectors[t].children[1].name},e.prototype._setSelectorLabelColor=function(t,e){this.selectors[t].children[0].color=e},e.prototype._setSelectorButtonColor=function(t,e){this.selectors[t].children[1].color=e},e.prototype._setSelectorButtonBackground=function(t,e){this.selectors[t].children[1].background=e},e}(D),H=function(t){function e(e,i){void 0===i&&(i=[]);var r=t.call(this,e)||this;if(r.name=e,r.groups=i,r._buttonColor="#364249",r._buttonBackground="#CCCCCC",r._headerColor="black",r._barColor="white",r._barHeight="2px",r._spacerHeight="20px",r._bars=new Array,r._groups=i,r.thickness=2,r._panel=new C,r._panel.verticalAlignment=p.VERTICAL_ALIGNMENT_TOP,r._panel.horizontalAlignment=p.HORIZONTAL_ALIGNMENT_LEFT,r._panel.top=5,r._panel.left=5,r._panel.width=.95,i.length>0){for(var n=0;n<i.length-1;n++)r._panel.addControl(i[n].groupPanel),r._addSpacer();r._panel.addControl(i[i.length-1].groupPanel)}return r.addControl(r._panel),r}return n(e,t),e.prototype._getTypeName=function(){return"SelectionPanel"},Object.defineProperty(e.prototype,"headerColor",{get:function(){return this._headerColor},set:function(t){this._headerColor!==t&&(this._headerColor=t,this._setHeaderColor())},enumerable:!0,configurable:!0}),e.prototype._setHeaderColor=function(){for(var t=0;t<this._groups.length;t++)this._groups[t].groupPanel.children[0].color=this._headerColor},Object.defineProperty(e.prototype,"buttonColor",{get:function(){return this._buttonColor},set:function(t){this._buttonColor!==t&&(this._buttonColor=t,this._setbuttonColor())},enumerable:!0,configurable:!0}),e.prototype._setbuttonColor=function(){for(var t=0;t<this._groups.length;t++)for(var e=0;e<this._groups[t].selectors.length;e++)this._groups[t]._setSelectorButtonColor(e,this._buttonColor)},Object.defineProperty(e.prototype,"labelColor",{get:function(){return this._labelColor},set:function(t){this._labelColor!==t&&(this._labelColor=t,this._setLabelColor())},enumerable:!0,configurable:!0}),e.prototype._setLabelColor=function(){for(var t=0;t<this._groups.length;t++)for(var e=0;e<this._groups[t].selectors.length;e++)this._groups[t]._setSelectorLabelColor(e,this._labelColor)},Object.defineProperty(e.prototype,"buttonBackground",{get:function(){return this._buttonBackground},set:function(t){this._buttonBackground!==t&&(this._buttonBackground=t,this._setButtonBackground())},enumerable:!0,configurable:!0}),e.prototype._setButtonBackground=function(){for(var t=0;t<this._groups.length;t++)for(var e=0;e<this._groups[t].selectors.length;e++)this._groups[t]._setSelectorButtonBackground(e,this._buttonBackground)},Object.defineProperty(e.prototype,"barColor",{get:function(){return this._barColor},set:function(t){this._barColor!==t&&(this._barColor=t,this._setBarColor())},enumerable:!0,configurable:!0}),e.prototype._setBarColor=function(){for(var t=0;t<this._bars.length;t++)this._bars[t].children[0].background=this._barColor},Object.defineProperty(e.prototype,"barHeight",{get:function(){return this._barHeight},set:function(t){this._barHeight!==t&&(this._barHeight=t,this._setBarHeight())},enumerable:!0,configurable:!0}),e.prototype._setBarHeight=function(){for(var t=0;t<this._bars.length;t++)this._bars[t].children[0].height=this._barHeight},Object.defineProperty(e.prototype,"spacerHeight",{get:function(){return this._spacerHeight},set:function(t){this._spacerHeight!==t&&(this._spacerHeight=t,this._setSpacerHeight())},enumerable:!0,configurable:!0}),e.prototype._setSpacerHeight=function(){for(var t=0;t<this._bars.length;t++)this._bars[t].height=this._spacerHeight},e.prototype._addSpacer=function(){var t=new g;t.width=1,t.height=this._spacerHeight,t.horizontalAlignment=p.HORIZONTAL_ALIGNMENT_LEFT;var e=new m;e.width=1,e.height=this._barHeight,e.horizontalAlignment=p.HORIZONTAL_ALIGNMENT_LEFT,e.verticalAlignment=p.VERTICAL_ALIGNMENT_CENTER,e.background=this._barColor,e.color="transparent",t.addControl(e),this._panel.addControl(t),this._bars.push(t)},e.prototype.addGroup=function(t){this._groups.length>0&&this._addSpacer(),this._panel.addControl(t.groupPanel),this._groups.push(t),t.groupPanel.children[0].color=this._headerColor;for(var e=0;e<t.selectors.length;e++)t._setSelectorButtonColor(e,this._buttonColor),t._setSelectorButtonBackground(e,this._buttonBackground)},e.prototype.removeGroup=function(t){if(!(t<0||t>=this._groups.length)){var e=this._groups[t];this._panel.removeControl(e.groupPanel),this._groups.splice(t,1),t<this._bars.length&&(this._panel.removeControl(this._bars[t]),this._bars.splice(t,1))}},e.prototype.setHeaderName=function(t,e){e<0||e>=this._groups.length||(this._groups[e].groupPanel.children[0].text=t)},e.prototype.relabel=function(t,e,i){if(!(e<0||e>=this._groups.length)){var r=this._groups[e];i<0||i>=r.selectors.length||r._setSelectorLabel(i,t)}},e.prototype.removeFromGroupSelector=function(t,e){if(!(t<0||t>=this._groups.length)){var i=this._groups[t];e<0||e>=i.selectors.length||i.removeSelector(e)}},e.prototype.addToGroupCheckbox=function(t,e,i,r){(void 0===i&&(i=function(){}),void 0===r&&(r=!1),t<0||t>=this._groups.length)||this._groups[t].addCheckbox(e,i,r)},e.prototype.addToGroupRadio=function(t,e,i,r){(void 0===i&&(i=function(){}),void 0===r&&(r=!1),t<0||t>=this._groups.length)||this._groups[t].addRadio(e,i,r)},e.prototype.addToGroupSlider=function(t,e,i,r,n,o,s,a){(void 0===i&&(i=function(){}),void 0===r&&(r="Units"),void 0===n&&(n=0),void 0===o&&(o=0),void 0===s&&(s=0),void 0===a&&(a=function(t){return 0|t}),t<0||t>=this._groups.length)||this._groups[t].addSlider(e,i,r,n,o,s,a)},e}(m),F=function(t){function e(e){var i=t.call(this,e)||this;return i._freezeControls=!1,i._bucketWidth=0,i._bucketHeight=0,i._buckets={},i}return n(e,t),Object.defineProperty(e.prototype,"freezeControls",{get:function(){return this._freezeControls},set:function(t){if(this._freezeControls!==t){this._freezeControls=!1;var e=this.host.getSize(),i=e.width,r=e.height,n=this.host.getContext(),o=new _(0,0,i,r);this.host._numLayoutCalls=0,this.host._rootContainer._layout(o,n),t&&(this._updateMeasures(),this._useBuckets()&&this._makeBuckets()),this._freezeControls=t,this.host.markAsDirty()}},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"bucketWidth",{get:function(){return this._bucketWidth},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"bucketHeight",{get:function(){return this._bucketHeight},enumerable:!0,configurable:!0}),e.prototype.setBucketSizes=function(t,e){this._bucketWidth=t,this._bucketHeight=e,this._useBuckets()?this._freezeControls&&this._makeBuckets():this._buckets={}},e.prototype._useBuckets=function(){return this._bucketWidth>0&&this._bucketHeight>0},e.prototype._makeBuckets=function(){this._buckets={},this._bucketLen=Math.ceil(this.widthInPixels/this._bucketWidth),this._dispatchInBuckets(this._children)},e.prototype._dispatchInBuckets=function(t){for(var e=0;e<t.length;++e){for(var i=t[e],r=Math.max(0,Math.floor((i._currentMeasure.left-this._currentMeasure.left)/this._bucketWidth)),n=Math.floor((i._currentMeasure.left-this._currentMeasure.left+i._currentMeasure.width-1)/this._bucketWidth),o=Math.max(0,Math.floor((i._currentMeasure.top-this._currentMeasure.top)/this._bucketHeight)),s=Math.floor((i._currentMeasure.top-this._currentMeasure.top+i._currentMeasure.height-1)/this._bucketHeight);o<=s;){for(var a=r;a<=n;++a){var h=o*this._bucketLen+a,l=this._buckets[h];l||(l=[],this._buckets[h]=l),l.push(i)}o++}i instanceof g&&i._children.length>0&&this._dispatchInBuckets(i._children)}},e.prototype._updateMeasures=function(){var t=0|this.leftInPixels,e=0|this.topInPixels;this._measureForChildren.left-=t,this._measureForChildren.top-=e,this._currentMeasure.left-=t,this._currentMeasure.top-=e,this._updateChildrenMeasures(this._children,t,e)},e.prototype._updateChildrenMeasures=function(t,e,i){for(var r=0;r<t.length;++r){var n=t[r];n._currentMeasure.left-=e,n._currentMeasure.top-=i,n._customData._origLeft=n._currentMeasure.left,n._customData._origTop=n._currentMeasure.top,n instanceof g&&n._children.length>0&&this._updateChildrenMeasures(n._children,e,i)}},e.prototype._getTypeName=function(){return"ScrollViewerWindow"},e.prototype._additionalProcessing=function(e,i){t.prototype._additionalProcessing.call(this,e,i),this._parentMeasure=e,this._measureForChildren.left=this._currentMeasure.left,this._measureForChildren.top=this._currentMeasure.top,this._measureForChildren.width=e.width,this._measureForChildren.height=e.height},e.prototype._layout=function(e,i){return this._freezeControls?(this.invalidateRect(),!1):t.prototype._layout.call(this,e,i)},e.prototype._scrollChildren=function(t,e,i){for(var r=0;r<t.length;++r){var n=t[r];n._currentMeasure.left=n._customData._origLeft+e,n._currentMeasure.top=n._customData._origTop+i,n._isClipped=!1,n instanceof g&&n._children.length>0&&this._scrollChildren(n._children,e,i)}},e.prototype._scrollChildrenWithBuckets=function(t,e,i,r){for(var n=Math.max(0,Math.floor(-t/this._bucketWidth)),o=Math.floor((-t+this._parentMeasure.width-1)/this._bucketWidth),s=Math.max(0,Math.floor(-e/this._bucketHeight)),a=Math.floor((-e+this._parentMeasure.height-1)/this._bucketHeight);s<=a;){for(var h=n;h<=o;++h){var l=s*this._bucketLen+h,u=this._buckets[l];if(u)for(var c=0;c<u.length;++c){var _=u[c];_._currentMeasure.left=_._customData._origLeft+i,_._currentMeasure.top=_._customData._origTop+r,_._isClipped=!1}}s++}},e.prototype._draw=function(e,i){if(this._freezeControls){this._localDraw(e),this.clipChildren&&this._clipForChildren(e);var r=this.leftInPixels,n=this.topInPixels;this._useBuckets()?(this._scrollChildrenWithBuckets(this._oldLeft,this._oldTop,r,n),this._scrollChildrenWithBuckets(r,n,r,n)):this._scrollChildren(this._children,r,n),this._oldLeft=r,this._oldTop=n;for(var o=0,s=this._children;o<s.length;o++){var a=s[o];a._intersectsRect(this._parentMeasure)&&a._render(e,this._parentMeasure)}}else t.prototype._draw.call(this,e,i)},e.prototype._postMeasure=function(){if(this._freezeControls)t.prototype._postMeasure.call(this);else{for(var e=this.parentClientWidth,i=this.parentClientHeight,r=0,n=this.children;r<n.length;r++){var o=n[r];o.isVisible&&!o.notRenderable&&(o.horizontalAlignment===p.HORIZONTAL_ALIGNMENT_CENTER&&o._offsetLeft(this._currentMeasure.left-o._currentMeasure.left),o.verticalAlignment===p.VERTICAL_ALIGNMENT_CENTER&&o._offsetTop(this._currentMeasure.top-o._currentMeasure.top),e=Math.max(e,o._currentMeasure.left-this._currentMeasure.left+o._currentMeasure.width),i=Math.max(i,o._currentMeasure.top-this._currentMeasure.top+o._currentMeasure.height))}this._currentMeasure.width!==e&&(this._width.updateInPlace(e,a.UNITMODE_PIXEL),this._currentMeasure.width=e,this._rebuildLayout=!0,this._isDirty=!0),this._currentMeasure.height!==i&&(this._height.updateInPlace(i,a.UNITMODE_PIXEL),this._currentMeasure.height=i,this._rebuildLayout=!0,this._isDirty=!0),t.prototype._postMeasure.call(this)}},e}(g),j=function(t){function e(e){var i=t.call(this,e)||this;return i.name=e,i._background="black",i._borderColor="white",i._tempMeasure=new _(0,0,0,0),i}return n(e,t),Object.defineProperty(e.prototype,"borderColor",{get:function(){return this._borderColor},set:function(t){this._borderColor!==t&&(this._borderColor=t,this._markAsDirty())},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"background",{get:function(){return this._background},set:function(t){this._background!==t&&(this._background=t,this._markAsDirty())},enumerable:!0,configurable:!0}),e.prototype._getTypeName=function(){return"Scrollbar"},e.prototype._getThumbThickness=function(){return this._thumbWidth.isPixel?this._thumbWidth.getValue(this._host):this._backgroundBoxThickness*this._thumbWidth.getValue(this._host)},e.prototype._draw=function(t){t.save(),this._applyStates(t),this._prepareRenderingData("rectangle");var e=this._renderLeft,i=this._getThumbPosition();t.fillStyle=this._background,t.fillRect(this._currentMeasure.left,this._currentMeasure.top,this._currentMeasure.width,this._currentMeasure.height),t.fillStyle=this.color,this.isVertical?(this._tempMeasure.left=e-this._effectiveBarOffset,this._tempMeasure.top=this._currentMeasure.top+i,this._tempMeasure.width=this._currentMeasure.width,this._tempMeasure.height=this._effectiveThumbThickness):(this._tempMeasure.left=this._currentMeasure.left+i,this._tempMeasure.top=this._currentMeasure.top,this._tempMeasure.width=this._effectiveThumbThickness,this._tempMeasure.height=this._currentMeasure.height),t.fillRect(this._tempMeasure.left,this._tempMeasure.top,this._tempMeasure.width,this._tempMeasure.height),t.restore()},e.prototype._updateValueFromPointer=function(t,e){0!=this.rotation&&(this._invertTransformMatrix.transformCoordinates(t,e,this._transformedPosition),t=this._transformedPosition.x,e=this._transformedPosition.y),this._first&&(this._first=!1,this._originX=t,this._originY=e,(t<this._tempMeasure.left||t>this._tempMeasure.left+this._tempMeasure.width||e<this._tempMeasure.top||e>this._tempMeasure.top+this._tempMeasure.height)&&(this.isVertical?this.value=this.minimum+(1-(e-this._currentMeasure.top)/this._currentMeasure.height)*(this.maximum-this.minimum):this.value=this.minimum+(t-this._currentMeasure.left)/this._currentMeasure.width*(this.maximum-this.minimum)));var i=0;i=this.isVertical?-(e-this._originY)/(this._currentMeasure.height-this._effectiveThumbThickness):(t-this._originX)/(this._currentMeasure.width-this._effectiveThumbThickness),this.value+=i*(this.maximum-this.minimum),this._originX=t,this._originY=e},e.prototype._onPointerDown=function(e,i,r,n){return this._first=!0,t.prototype._onPointerDown.call(this,e,i,r,n)},e}(L),W=function(t){function e(e){var i=t.call(this,e)||this;return i.name=e,i._thumbLength=.5,i._thumbHeight=1,i._barImageHeight=1,i._tempMeasure=new _(0,0,0,0),i.num90RotationInVerticalMode=1,i}return n(e,t),Object.defineProperty(e.prototype,"backgroundImage",{get:function(){return this._backgroundBaseImage},set:function(t){var e=this;this._backgroundBaseImage!==t&&(this._backgroundBaseImage=t,this.isVertical&&0!==this.num90RotationInVerticalMode?t.isLoaded?(this._backgroundImage=t._rotate90(this.num90RotationInVerticalMode,!0),this._markAsDirty()):t.onImageLoadedObservable.addOnce(function(){var i=t._rotate90(e.num90RotationInVerticalMode,!0);e._backgroundImage=i,i.isLoaded||i.onImageLoadedObservable.addOnce(function(){e._markAsDirty()}),e._markAsDirty()}):(this._backgroundImage=t,t&&!t.isLoaded&&t.onImageLoadedObservable.addOnce(function(){e._markAsDirty()}),this._markAsDirty()))},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"thumbImage",{get:function(){return this._thumbBaseImage},set:function(t){var e=this;this._thumbBaseImage!==t&&(this._thumbBaseImage=t,this.isVertical&&0!==this.num90RotationInVerticalMode?t.isLoaded?(this._thumbImage=t._rotate90(-this.num90RotationInVerticalMode,!0),this._markAsDirty()):t.onImageLoadedObservable.addOnce(function(){var i=t._rotate90(-e.num90RotationInVerticalMode,!0);e._thumbImage=i,i.isLoaded||i.onImageLoadedObservable.addOnce(function(){e._markAsDirty()}),e._markAsDirty()}):(this._thumbImage=t,t&&!t.isLoaded&&t.onImageLoadedObservable.addOnce(function(){e._markAsDirty()}),this._markAsDirty()))},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"thumbLength",{get:function(){return this._thumbLength},set:function(t){this._thumbLength!==t&&(this._thumbLength=t,this._markAsDirty())},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"thumbHeight",{get:function(){return this._thumbHeight},set:function(t){this._thumbLength!==t&&(this._thumbHeight=t,this._markAsDirty())},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"barImageHeight",{get:function(){return this._barImageHeight},set:function(t){this._barImageHeight!==t&&(this._barImageHeight=t,this._markAsDirty())},enumerable:!0,configurable:!0}),e.prototype._getTypeName=function(){return"ImageScrollBar"},e.prototype._getThumbThickness=function(){return this._thumbWidth.isPixel?this._thumbWidth.getValue(this._host):this._backgroundBoxThickness*this._thumbWidth.getValue(this._host)},e.prototype._draw=function(t){t.save(),this._applyStates(t),this._prepareRenderingData("rectangle");var e=this._getThumbPosition(),i=this._renderLeft,r=this._renderTop,n=this._renderWidth,o=this._renderHeight;this._backgroundImage&&(this._tempMeasure.copyFromFloats(i,r,n,o),this.isVertical?(this._tempMeasure.copyFromFloats(i+n*(1-this._barImageHeight)*.5,this._currentMeasure.top,n*this._barImageHeight,o),this._tempMeasure.height+=this._effectiveThumbThickness,this._backgroundImage._currentMeasure.copyFrom(this._tempMeasure)):(this._tempMeasure.copyFromFloats(this._currentMeasure.left,r+o*(1-this._barImageHeight)*.5,n,o*this._barImageHeight),this._tempMeasure.width+=this._effectiveThumbThickness,this._backgroundImage._currentMeasure.copyFrom(this._tempMeasure)),this._backgroundImage._draw(t)),this.isVertical?this._tempMeasure.copyFromFloats(i-this._effectiveBarOffset+this._currentMeasure.width*(1-this._thumbHeight)*.5,this._currentMeasure.top+e,this._currentMeasure.width*this._thumbHeight,this._effectiveThumbThickness):this._tempMeasure.copyFromFloats(this._currentMeasure.left+e,this._currentMeasure.top+this._currentMeasure.height*(1-this._thumbHeight)*.5,this._effectiveThumbThickness,this._currentMeasure.height*this._thumbHeight),this._thumbImage&&(this._thumbImage._currentMeasure.copyFrom(this._tempMeasure),this._thumbImage._draw(t)),t.restore()},e.prototype._updateValueFromPointer=function(t,e){0!=this.rotation&&(this._invertTransformMatrix.transformCoordinates(t,e,this._transformedPosition),t=this._transformedPosition.x,e=this._transformedPosition.y),this._first&&(this._first=!1,this._originX=t,this._originY=e,(t<this._tempMeasure.left||t>this._tempMeasure.left+this._tempMeasure.width||e<this._tempMeasure.top||e>this._tempMeasure.top+this._tempMeasure.height)&&(this.isVertical?this.value=this.minimum+(1-(e-this._currentMeasure.top)/this._currentMeasure.height)*(this.maximum-this.minimum):this.value=this.minimum+(t-this._currentMeasure.left)/this._currentMeasure.width*(this.maximum-this.minimum)));var i=0;i=this.isVertical?-(e-this._originY)/(this._currentMeasure.height-this._effectiveThumbThickness):(t-this._originX)/(this._currentMeasure.width-this._effectiveThumbThickness),this.value+=i*(this.maximum-this.minimum),this._originX=t,this._originY=e},e.prototype._onPointerDown=function(e,i,r,n){return this._first=!0,t.prototype._onPointerDown.call(this,e,i,r,n)},e}(L),z=function(t){function e(e,i){var r=t.call(this,e)||this;return r._barSize=20,r._pointerIsOver=!1,r._wheelPrecision=.05,r._thumbLength=.5,r._thumbHeight=1,r._barImageHeight=1,r._horizontalBarImageHeight=1,r._verticalBarImageHeight=1,r._forceHorizontalBar=!1,r._forceVerticalBar=!1,r._useImageBar=i||!1,r.onDirtyObservable.add(function(){r._horizontalBarSpace.color=r.color,r._verticalBarSpace.color=r.color,r._dragSpace.color=r.color}),r.onPointerEnterObservable.add(function(){r._pointerIsOver=!0}),r.onPointerOutObservable.add(function(){r._pointerIsOver=!1}),r._grid=new x,r._useImageBar?(r._horizontalBar=new W,r._verticalBar=new W):(r._horizontalBar=new j,r._verticalBar=new j),r._window=new F("scrollViewer_window"),r._window.horizontalAlignment=p.HORIZONTAL_ALIGNMENT_LEFT,r._window.verticalAlignment=p.VERTICAL_ALIGNMENT_TOP,r._grid.addColumnDefinition(1),r._grid.addColumnDefinition(0,!0),r._grid.addRowDefinition(1),r._grid.addRowDefinition(0,!0),t.prototype.addControl.call(r,r._grid),r._grid.addControl(r._window,0,0),r._verticalBarSpace=new m,r._verticalBarSpace.horizontalAlignment=p.HORIZONTAL_ALIGNMENT_LEFT,r._verticalBarSpace.verticalAlignment=p.VERTICAL_ALIGNMENT_TOP,r._verticalBarSpace.thickness=1,r._grid.addControl(r._verticalBarSpace,0,1),r._addBar(r._verticalBar,r._verticalBarSpace,!0,Math.PI),r._horizontalBarSpace=new m,r._horizontalBarSpace.horizontalAlignment=p.HORIZONTAL_ALIGNMENT_LEFT,r._horizontalBarSpace.verticalAlignment=p.VERTICAL_ALIGNMENT_TOP,r._horizontalBarSpace.thickness=1,r._grid.addControl(r._horizontalBarSpace,1,0),r._addBar(r._horizontalBar,r._horizontalBarSpace,!1,0),r._dragSpace=new m,r._dragSpace.thickness=1,r._grid.addControl(r._dragSpace,1,1),r._useImageBar||(r.barColor="grey",r.barBackground="transparent"),r}return n(e,t),Object.defineProperty(e.prototype,"horizontalBar",{get:function(){return this._horizontalBar},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"verticalBar",{get:function(){return this._verticalBar},enumerable:!0,configurable:!0}),e.prototype.addControl=function(t){return t?(this._window.addControl(t),this):this},e.prototype.removeControl=function(t){return this._window.removeControl(t),this},Object.defineProperty(e.prototype,"children",{get:function(){return this._window.children},enumerable:!0,configurable:!0}),e.prototype._flagDescendantsAsMatrixDirty=function(){for(var t=0,e=this._children;t<e.length;t++){e[t]._markMatrixAsDirty()}},Object.defineProperty(e.prototype,"freezeControls",{get:function(){return this._window.freezeControls},set:function(t){this._window.freezeControls=t},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"bucketWidth",{get:function(){return this._window.bucketWidth},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"bucketHeight",{get:function(){return this._window.bucketHeight},enumerable:!0,configurable:!0}),e.prototype.setBucketSizes=function(t,e){this._window.setBucketSizes(t,e)},Object.defineProperty(e.prototype,"forceHorizontalBar",{get:function(){return this._forceHorizontalBar},set:function(t){this._grid.setRowDefinition(1,t?this._barSize:0,!0),this._horizontalBar.isVisible=t,this._forceHorizontalBar=t},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"forceVerticalBar",{get:function(){return this._forceVerticalBar},set:function(t){this._grid.setColumnDefinition(1,t?this._barSize:0,!0),this._verticalBar.isVisible=t,this._forceVerticalBar=t},enumerable:!0,configurable:!0}),e.prototype.resetWindow=function(){this._window.width="100%",this._window.height="100%"},e.prototype._getTypeName=function(){return"ScrollViewer"},e.prototype._buildClientSizes=function(){var t=this.host.idealRatio;this._window.parentClientWidth=this._currentMeasure.width-(this._verticalBar.isVisible||this.forceVerticalBar?this._barSize*t:0)-2*this.thickness,this._window.parentClientHeight=this._currentMeasure.height-(this._horizontalBar.isVisible||this.forceHorizontalBar?this._barSize*t:0)-2*this.thickness,this._clientWidth=this._window.parentClientWidth,this._clientHeight=this._window.parentClientHeight},e.prototype._additionalProcessing=function(e,i){t.prototype._additionalProcessing.call(this,e,i),this._buildClientSizes()},e.prototype._postMeasure=function(){t.prototype._postMeasure.call(this),this._updateScroller()},Object.defineProperty(e.prototype,"wheelPrecision",{get:function(){return this._wheelPrecision},set:function(t){this._wheelPrecision!==t&&(t<0&&(t=0),t>1&&(t=1),this._wheelPrecision=t)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"scrollBackground",{get:function(){return this._horizontalBarSpace.background},set:function(t){this._horizontalBarSpace.background!==t&&(this._horizontalBarSpace.background=t,this._verticalBarSpace.background=t)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"barColor",{get:function(){return this._barColor},set:function(t){this._barColor!==t&&(this._barColor=t,this._horizontalBar.color=t,this._verticalBar.color=t)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"thumbImage",{get:function(){return this._barImage},set:function(t){if(this._barImage!==t){this._barImage=t;var e=this._horizontalBar,i=this._verticalBar;e.thumbImage=t,i.thumbImage=t}},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"horizontalThumbImage",{get:function(){return this._horizontalBarImage},set:function(t){this._horizontalBarImage!==t&&(this._horizontalBarImage=t,this._horizontalBar.thumbImage=t)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"verticalThumbImage",{get:function(){return this._verticalBarImage},set:function(t){this._verticalBarImage!==t&&(this._verticalBarImage=t,this._verticalBar.thumbImage=t)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"barSize",{get:function(){return this._barSize},set:function(t){this._barSize!==t&&(this._barSize=t,this._markAsDirty(),this._horizontalBar.isVisible&&this._grid.setRowDefinition(1,this._barSize,!0),this._verticalBar.isVisible&&this._grid.setColumnDefinition(1,this._barSize,!0))},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"thumbLength",{get:function(){return this._thumbLength},set:function(t){if(this._thumbLength!==t){t<=0&&(t=.1),t>1&&(t=1),this._thumbLength=t;var e=this._horizontalBar,i=this._verticalBar;e.thumbLength=t,i.thumbLength=t,this._markAsDirty()}},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"thumbHeight",{get:function(){return this._thumbHeight},set:function(t){if(this._thumbHeight!==t){t<=0&&(t=.1),t>1&&(t=1),this._thumbHeight=t;var e=this._horizontalBar,i=this._verticalBar;e.thumbHeight=t,i.thumbHeight=t,this._markAsDirty()}},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"barImageHeight",{get:function(){return this._barImageHeight},set:function(t){if(this._barImageHeight!==t){t<=0&&(t=.1),t>1&&(t=1),this._barImageHeight=t;var e=this._horizontalBar,i=this._verticalBar;e.barImageHeight=t,i.barImageHeight=t,this._markAsDirty()}},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"horizontalBarImageHeight",{get:function(){return this._horizontalBarImageHeight},set:function(t){this._horizontalBarImageHeight!==t&&(t<=0&&(t=.1),t>1&&(t=1),this._horizontalBarImageHeight=t,this._horizontalBar.barImageHeight=t,this._markAsDirty())},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"verticalBarImageHeight",{get:function(){return this._verticalBarImageHeight},set:function(t){this._verticalBarImageHeight!==t&&(t<=0&&(t=.1),t>1&&(t=1),this._verticalBarImageHeight=t,this._verticalBar.barImageHeight=t,this._markAsDirty())},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"barBackground",{get:function(){return this._barBackground},set:function(t){if(this._barBackground!==t){this._barBackground=t;var e=this._horizontalBar,i=this._verticalBar;e.background=t,i.background=t,this._dragSpace.background=t}},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"barImage",{get:function(){return this._barBackgroundImage},set:function(t){this._barBackgroundImage,this._barBackgroundImage=t;var e=this._horizontalBar,i=this._verticalBar;e.backgroundImage=t,i.backgroundImage=t},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"horizontalBarImage",{get:function(){return this._horizontalBarBackgroundImage},set:function(t){this._horizontalBarBackgroundImage,this._horizontalBarBackgroundImage=t,this._horizontalBar.backgroundImage=t},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"verticalBarImage",{get:function(){return this._verticalBarBackgroundImage},set:function(t){this._verticalBarBackgroundImage,this._verticalBarBackgroundImage=t,this._verticalBar.backgroundImage=t},enumerable:!0,configurable:!0}),e.prototype._setWindowPosition=function(){var t=this.host.idealRatio,e=this._window._currentMeasure.width,i=this._window._currentMeasure.height,r=this._clientWidth-e,n=this._clientHeight-i,o=this._horizontalBar.value/t*r+"px",s=this._verticalBar.value/t*n+"px";o!==this._window.left&&(this._window.left=o,this.freezeControls||(this._rebuildLayout=!0)),s!==this._window.top&&(this._window.top=s,this.freezeControls||(this._rebuildLayout=!0))},e.prototype._updateScroller=function(){var t=this._window._currentMeasure.width,e=this._window._currentMeasure.height;this._horizontalBar.isVisible&&t<=this._clientWidth&&!this.forceHorizontalBar?(this._grid.setRowDefinition(1,0,!0),this._horizontalBar.isVisible=!1,this._horizontalBar.value=0,this._rebuildLayout=!0):!this._horizontalBar.isVisible&&(t>this._clientWidth||this.forceHorizontalBar)&&(this._grid.setRowDefinition(1,this._barSize,!0),this._horizontalBar.isVisible=!0,this._rebuildLayout=!0),this._verticalBar.isVisible&&e<=this._clientHeight&&!this.forceVerticalBar?(this._grid.setColumnDefinition(1,0,!0),this._verticalBar.isVisible=!1,this._verticalBar.value=0,this._rebuildLayout=!0):!this._verticalBar.isVisible&&(e>this._clientHeight||this.forceVerticalBar)&&(this._grid.setColumnDefinition(1,this._barSize,!0),this._verticalBar.isVisible=!0,this._rebuildLayout=!0),this._buildClientSizes();var i=this.host.idealRatio;this._horizontalBar.thumbWidth=.9*this._thumbLength*(this._clientWidth/i)+"px",this._verticalBar.thumbWidth=.9*this._thumbLength*(this._clientHeight/i)+"px"},e.prototype._link=function(e){t.prototype._link.call(this,e),this._attachWheel()},e.prototype._addBar=function(t,e,i,r){var n=this;t.paddingLeft=0,t.width="100%",t.height="100%",t.barOffset=0,t.value=0,t.maximum=1,t.horizontalAlignment=p.HORIZONTAL_ALIGNMENT_CENTER,t.verticalAlignment=p.VERTICAL_ALIGNMENT_CENTER,t.isVertical=i,t.rotation=r,t.isVisible=!1,e.addControl(t),t.onValueChangedObservable.add(function(t){n._setWindowPosition()})},e.prototype._attachWheel=function(){var t=this;this._host&&!this._onWheelObserver&&(this._onWheelObserver=this.onWheelObservable.add(function(e){t._pointerIsOver&&(1==t._verticalBar.isVisible&&(e.y<0&&t._verticalBar.value>0?t._verticalBar.value-=t._wheelPrecision:e.y>0&&t._verticalBar.value<t._verticalBar.maximum&&(t._verticalBar.value+=t._wheelPrecision)),1==t._horizontalBar.isVisible&&(e.x<0&&t._horizontalBar.value<t._horizontalBar.maximum?t._horizontalBar.value+=t._wheelPrecision:e.x>0&&t._horizontalBar.value>0&&(t._horizontalBar.value-=t._wheelPrecision)))}))},e.prototype._renderHighlightSpecific=function(e){this.isHighlighted&&(t.prototype._renderHighlightSpecific.call(this,e),this._grid._renderHighlightSpecific(e),e.restore())},e.prototype.dispose=function(){this.onWheelObservable.remove(this._onWheelObserver),this._onWheelObserver=null,t.prototype.dispose.call(this)},e}(m);s._TypeStore.RegisteredTypes["BABYLON.GUI.ScrollViewer"]=z;var G=function(){},X=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.onKeyPressObservable=new s.Observable,e.defaultButtonWidth="40px",e.defaultButtonHeight="40px",e.defaultButtonPaddingLeft="2px",e.defaultButtonPaddingRight="2px",e.defaultButtonPaddingTop="2px",e.defaultButtonPaddingBottom="2px",e.defaultButtonColor="#DDD",e.defaultButtonBackground="#070707",e.shiftButtonColor="#7799FF",e.selectedShiftThickness=1,e.shiftState=0,e._currentlyConnectedInputText=null,e._connectedInputTexts=[],e._onKeyPressObserver=null,e}return n(e,t),e.prototype._getTypeName=function(){return"VirtualKeyboard"},e.prototype._createKey=function(t,e){var i=this,r=O.CreateSimpleButton(t,t);return r.width=e&&e.width?e.width:this.defaultButtonWidth,r.height=e&&e.height?e.height:this.defaultButtonHeight,r.color=e&&e.color?e.color:this.defaultButtonColor,r.background=e&&e.background?e.background:this.defaultButtonBackground,r.paddingLeft=e&&e.paddingLeft?e.paddingLeft:this.defaultButtonPaddingLeft,r.paddingRight=e&&e.paddingRight?e.paddingRight:this.defaultButtonPaddingRight,r.paddingTop=e&&e.paddingTop?e.paddingTop:this.defaultButtonPaddingTop,r.paddingBottom=e&&e.paddingBottom?e.paddingBottom:this.defaultButtonPaddingBottom,r.thickness=0,r.isFocusInvisible=!0,r.shadowColor=this.shadowColor,r.shadowBlur=this.shadowBlur,r.shadowOffsetX=this.shadowOffsetX,r.shadowOffsetY=this.shadowOffsetY,r.onPointerUpObservable.add(function(){i.onKeyPressObservable.notifyObservers(t)}),r},e.prototype.addKeysRow=function(t,e){var i=new C;i.isVertical=!1,i.isFocusInvisible=!0;for(var r=null,n=0;n<t.length;n++){var o=null;e&&e.length===t.length&&(o=e[n]);var s=this._createKey(t[n],o);(!r||s.heightInPixels>r.heightInPixels)&&(r=s),i.addControl(s)}i.height=r?r.height:this.defaultButtonHeight,this.addControl(i)},e.prototype.applyShiftState=function(t){if(this.children)for(var e=0;e<this.children.length;e++){var i=this.children[e];if(i&&i.children)for(var r=i,n=0;n<r.children.length;n++){var o=r.children[n];if(o&&o.children[0]){var s=o.children[0];"⇧"===s.text&&(o.color=t?this.shiftButtonColor:this.defaultButtonColor,o.thickness=t>1?this.selectedShiftThickness:0),s.text=t>0?s.text.toUpperCase():s.text.toLowerCase()}}}},Object.defineProperty(e.prototype,"connectedInputText",{get:function(){return this._currentlyConnectedInputText},enumerable:!0,configurable:!0}),e.prototype.connect=function(t){var e=this;if(!this._connectedInputTexts.some(function(e){return e.input===t})){null===this._onKeyPressObserver&&(this._onKeyPressObserver=this.onKeyPressObservable.add(function(t){if(e._currentlyConnectedInputText){switch(e._currentlyConnectedInputText._host.focusedControl=e._currentlyConnectedInputText,t){case"⇧":return e.shiftState++,e.shiftState>2&&(e.shiftState=0),void e.applyShiftState(e.shiftState);case"←":return void e._currentlyConnectedInputText.processKey(8);case"↵":return void e._currentlyConnectedInputText.processKey(13)}e._currentlyConnectedInputText.processKey(-1,e.shiftState?t.toUpperCase():t),1===e.shiftState&&(e.shiftState=0,e.applyShiftState(e.shiftState))}})),this.isVisible=!1,this._currentlyConnectedInputText=t,t._connectedVirtualKeyboard=this;var i=t.onFocusObservable.add(function(){e._currentlyConnectedInputText=t,t._connectedVirtualKeyboard=e,e.isVisible=!0}),r=t.onBlurObservable.add(function(){t._connectedVirtualKeyboard=null,e._currentlyConnectedInputText=null,e.isVisible=!1});this._connectedInputTexts.push({input:t,onBlurObserver:r,onFocusObserver:i})}},e.prototype.disconnect=function(t){var e=this;if(t){var i=this._connectedInputTexts.filter(function(e){return e.input===t});1===i.length&&(this._removeConnectedInputObservables(i[0]),this._connectedInputTexts=this._connectedInputTexts.filter(function(e){return e.input!==t}),this._currentlyConnectedInputText===t&&(this._currentlyConnectedInputText=null))}else this._connectedInputTexts.forEach(function(t){e._removeConnectedInputObservables(t)}),this._connectedInputTexts=[];0===this._connectedInputTexts.length&&(this._currentlyConnectedInputText=null,this.onKeyPressObservable.remove(this._onKeyPressObserver),this._onKeyPressObserver=null)},e.prototype._removeConnectedInputObservables=function(t){t.input._connectedVirtualKeyboard=null,t.input.onFocusObservable.remove(t.onFocusObserver),t.input.onBlurObservable.remove(t.onBlurObserver)},e.prototype.dispose=function(){t.prototype.dispose.call(this),this.disconnect()},e.CreateDefaultLayout=function(t){var i=new e(t);return i.addKeysRow(["1","2","3","4","5","6","7","8","9","0","←"]),i.addKeysRow(["q","w","e","r","t","y","u","i","o","p"]),i.addKeysRow(["a","s","d","f","g","h","j","k","l",";","'","↵"]),i.addKeysRow(["⇧","z","x","c","v","b","n","m",",",".","/"]),i.addKeysRow([" "],[{width:"200px"}]),i},e}(C);s._TypeStore.RegisteredTypes["BABYLON.GUI.VirtualKeyboard"]=X;var Y=function(t){function e(e){var i=t.call(this,e)||this;return i.name=e,i._cellWidth=20,i._cellHeight=20,i._minorLineTickness=1,i._minorLineColor="DarkGray",i._majorLineTickness=2,i._majorLineColor="White",i._majorLineFrequency=5,i._background="Black",i._displayMajorLines=!0,i._displayMinorLines=!0,i}return n(e,t),Object.defineProperty(e.prototype,"displayMinorLines",{get:function(){return this._displayMinorLines},set:function(t){this._displayMinorLines!==t&&(this._displayMinorLines=t,this._markAsDirty())},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"displayMajorLines",{get:function(){return this._displayMajorLines},set:function(t){this._displayMajorLines!==t&&(this._displayMajorLines=t,this._markAsDirty())},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"background",{get:function(){return this._background},set:function(t){this._background!==t&&(this._background=t,this._markAsDirty())},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"cellWidth",{get:function(){return this._cellWidth},set:function(t){this._cellWidth=t,this._markAsDirty()},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"cellHeight",{get:function(){return this._cellHeight},set:function(t){this._cellHeight=t,this._markAsDirty()},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"minorLineTickness",{get:function(){return this._minorLineTickness},set:function(t){this._minorLineTickness=t,this._markAsDirty()},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"minorLineColor",{get:function(){return this._minorLineColor},set:function(t){this._minorLineColor=t,this._markAsDirty()},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"majorLineTickness",{get:function(){return this._majorLineTickness},set:function(t){this._majorLineTickness=t,this._markAsDirty()},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"majorLineColor",{get:function(){return this._majorLineColor},set:function(t){this._majorLineColor=t,this._markAsDirty()},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"majorLineFrequency",{get:function(){return this._majorLineFrequency},set:function(t){this._majorLineFrequency=t,this._markAsDirty()},enumerable:!0,configurable:!0}),e.prototype._draw=function(t,e){if(t.save(),this._applyStates(t),this._isEnabled){this._background&&(t.fillStyle=this._background,t.fillRect(this._currentMeasure.left,this._currentMeasure.top,this._currentMeasure.width,this._currentMeasure.height));var i=this._currentMeasure.width/this._cellWidth,r=this._currentMeasure.height/this._cellHeight,n=this._currentMeasure.left+this._currentMeasure.width/2,o=this._currentMeasure.top+this._currentMeasure.height/2;if(this._displayMinorLines){t.strokeStyle=this._minorLineColor,t.lineWidth=this._minorLineTickness;for(var s=-i/2;s<i/2;s++){var a=n+s*this.cellWidth;t.beginPath(),t.moveTo(a,this._currentMeasure.top),t.lineTo(a,this._currentMeasure.top+this._currentMeasure.height),t.stroke()}for(var h=-r/2;h<r/2;h++){var l=o+h*this.cellHeight;t.beginPath(),t.moveTo(this._currentMeasure.left,l),t.lineTo(this._currentMeasure.left+this._currentMeasure.width,l),t.stroke()}}if(this._displayMajorLines){t.strokeStyle=this._majorLineColor,t.lineWidth=this._majorLineTickness;for(s=-i/2+this._majorLineFrequency;s<i/2;s+=this._majorLineFrequency){a=n+s*this.cellWidth;t.beginPath(),t.moveTo(a,this._currentMeasure.top),t.lineTo(a,this._currentMeasure.top+this._currentMeasure.height),t.stroke()}for(h=-r/2+this._majorLineFrequency;h<r/2;h+=this._majorLineFrequency){l=o+h*this.cellHeight;t.moveTo(this._currentMeasure.left,l),t.lineTo(this._currentMeasure.left+this._currentMeasure.width,l),t.closePath(),t.stroke()}}}t.restore()},e.prototype._getTypeName=function(){return"DisplayGrid"},e}(p);s._TypeStore.RegisteredTypes["BABYLON.GUI.DisplayGrid"]=Y;var U=function(t){function e(e){var i=t.call(this,e)||this;return i.name=e,i._tempMeasure=new _(0,0,0,0),i}return n(e,t),Object.defineProperty(e.prototype,"displayThumb",{get:function(){return this._displayThumb&&null!=this.thumbImage},set:function(t){this._displayThumb!==t&&(this._displayThumb=t,this._markAsDirty())},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"backgroundImage",{get:function(){return this._backgroundImage},set:function(t){var e=this;this._backgroundImage!==t&&(this._backgroundImage=t,t&&!t.isLoaded&&t.onImageLoadedObservable.addOnce(function(){return e._markAsDirty()}),this._markAsDirty())},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"valueBarImage",{get:function(){return this._valueBarImage},set:function(t){var e=this;this._valueBarImage!==t&&(this._valueBarImage=t,t&&!t.isLoaded&&t.onImageLoadedObservable.addOnce(function(){return e._markAsDirty()}),this._markAsDirty())},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"thumbImage",{get:function(){return this._thumbImage},set:function(t){var e=this;this._thumbImage!==t&&(this._thumbImage=t,t&&!t.isLoaded&&t.onImageLoadedObservable.addOnce(function(){return e._markAsDirty()}),this._markAsDirty())},enumerable:!0,configurable:!0}),e.prototype._getTypeName=function(){return"ImageBasedSlider"},e.prototype._draw=function(t,e){t.save(),this._applyStates(t),this._prepareRenderingData("rectangle");var i=this._getThumbPosition(),r=this._renderLeft,n=this._renderTop,o=this._renderWidth,s=this._renderHeight;this._backgroundImage&&(this._tempMeasure.copyFromFloats(r,n,o,s),this.isThumbClamped&&this.displayThumb&&(this.isVertical?this._tempMeasure.height+=this._effectiveThumbThickness:this._tempMeasure.width+=this._effectiveThumbThickness),this._backgroundImage._currentMeasure.copyFrom(this._tempMeasure),this._backgroundImage._draw(t)),this._valueBarImage&&(this.isVertical?this.isThumbClamped&&this.displayThumb?this._tempMeasure.copyFromFloats(r,n+i,o,s-i+this._effectiveThumbThickness):this._tempMeasure.copyFromFloats(r,n+i,o,s-i):this.isThumbClamped&&this.displayThumb?this._tempMeasure.copyFromFloats(r,n,i+this._effectiveThumbThickness/2,s):this._tempMeasure.copyFromFloats(r,n,i,s),this._valueBarImage._currentMeasure.copyFrom(this._tempMeasure),this._valueBarImage._draw(t)),this.displayThumb&&(this.isVertical?this._tempMeasure.copyFromFloats(r-this._effectiveBarOffset,this._currentMeasure.top+i,this._currentMeasure.width,this._effectiveThumbThickness):this._tempMeasure.copyFromFloats(this._currentMeasure.left+i,this._currentMeasure.top,this._effectiveThumbThickness,this._currentMeasure.height),this._thumbImage._currentMeasure.copyFrom(this._tempMeasure),this._thumbImage._draw(t)),t.restore()},e}(L);s._TypeStore.RegisteredTypes["BABYLON.GUI.ImageBasedSlider"]=U;p.AddHeader=function(t,e,i,r){var n=new C("panel"),o=!r||r.isHorizontal,s=!r||r.controlFirst;n.isVertical=!o;var a=new y("header");return a.text=e,a.textHorizontalAlignment=p.HORIZONTAL_ALIGNMENT_LEFT,o?a.width=i:a.height=i,s?(n.addControl(t),n.addControl(a),a.paddingLeft="5px"):(n.addControl(a),n.addControl(t),a.paddingRight="5px"),a.shadowBlur=t.shadowBlur,a.shadowColor=t.shadowColor,a.shadowOffsetX=t.shadowOffsetX,a.shadowOffsetY=t.shadowOffsetY,n};var q=function(){function t(t){this._fontFamily="Arial",this._fontStyle="",this._fontWeight="",this._fontSize=new a(18,a.UNITMODE_PIXEL,!1),this.onChangedObservable=new s.Observable,this._host=t}return Object.defineProperty(t.prototype,"fontSize",{get:function(){return this._fontSize.toString(this._host)},set:function(t){this._fontSize.toString(this._host)!==t&&this._fontSize.fromString(t)&&this.onChangedObservable.notifyObservers(this)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"fontFamily",{get:function(){return this._fontFamily},set:function(t){this._fontFamily!==t&&(this._fontFamily=t,this.onChangedObservable.notifyObservers(this))},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"fontStyle",{get:function(){return this._fontStyle},set:function(t){this._fontStyle!==t&&(this._fontStyle=t,this.onChangedObservable.notifyObservers(this))},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"fontWeight",{get:function(){return this._fontWeight},set:function(t){this._fontWeight!==t&&(this._fontWeight=t,this.onChangedObservable.notifyObservers(this))},enumerable:!0,configurable:!0}),t.prototype.dispose=function(){this.onChangedObservable.clear()},t}(),K=function(t){function e(e,i,r,n,o,a){void 0===i&&(i=0),void 0===r&&(r=0),void 0===o&&(o=!1),void 0===a&&(a=s.Texture.NEAREST_SAMPLINGMODE);var h=t.call(this,e,{width:i,height:r},n,o,a,s.Constants.TEXTUREFORMAT_RGBA)||this;return h._isDirty=!1,h._rootContainer=new g("root"),h._lastControlOver={},h._lastControlDown={},h._capturingControl={},h._linkedControls=new Array,h._isFullscreen=!1,h._fullscreenViewport=new s.Viewport(0,0,1,1),h._idealWidth=0,h._idealHeight=0,h._useSmallestIdeal=!1,h._renderAtIdealSize=!1,h._blockNextFocusCheck=!1,h._renderScale=1,h._cursorChanged=!1,h._defaultMousePointerId=0,h._numLayoutCalls=0,h._numRenderCalls=0,h._clipboardData="",h.onClipboardObservable=new s.Observable,h.onControlPickedObservable=new s.Observable,h.onBeginLayoutObservable=new s.Observable,h.onEndLayoutObservable=new s.Observable,h.onBeginRenderObservable=new s.Observable,h.onEndRenderObservable=new s.Observable,h.premulAlpha=!1,h._useInvalidateRectOptimization=!0,h._invalidatedRectangle=null,h._clearMeasure=new _(0,0,0,0),h.onClipboardCopy=function(t){var e=t,i=new s.ClipboardInfo(s.ClipboardEventTypes.COPY,e);h.onClipboardObservable.notifyObservers(i),e.preventDefault()},h.onClipboardCut=function(t){var e=t,i=new s.ClipboardInfo(s.ClipboardEventTypes.CUT,e);h.onClipboardObservable.notifyObservers(i),e.preventDefault()},h.onClipboardPaste=function(t){var e=t,i=new s.ClipboardInfo(s.ClipboardEventTypes.PASTE,e);h.onClipboardObservable.notifyObservers(i),e.preventDefault()},(n=h.getScene())&&h._texture?(h._rootElement=n.getEngine().getInputElement(),h._renderObserver=n.onBeforeCameraRenderObservable.add(function(t){return h._checkUpdate(t)}),h._preKeyboardObserver=n.onPreKeyboardObservable.add(function(t){h._focusedControl&&(t.type===s.KeyboardEventTypes.KEYDOWN&&h._focusedControl.processKeyboard(t.event),t.skipOnPointerObservable=!0)}),h._rootContainer._link(h),h.hasAlpha=!0,i&&r||(h._resizeObserver=n.getEngine().onResizeObservable.add(function(){return h._onResize()}),h._onResize()),h._texture.isReady=!0,h):h}return n(e,t),Object.defineProperty(e.prototype,"numLayoutCalls",{get:function(){return this._numLayoutCalls},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"numRenderCalls",{get:function(){return this._numRenderCalls},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"renderScale",{get:function(){return this._renderScale},set:function(t){t!==this._renderScale&&(this._renderScale=t,this._onResize())},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"background",{get:function(){return this._background},set:function(t){this._background!==t&&(this._background=t,this.markAsDirty())},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"idealWidth",{get:function(){return this._idealWidth},set:function(t){this._idealWidth!==t&&(this._idealWidth=t,this.markAsDirty(),this._rootContainer._markAllAsDirty())},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"idealHeight",{get:function(){return this._idealHeight},set:function(t){this._idealHeight!==t&&(this._idealHeight=t,this.markAsDirty(),this._rootContainer._markAllAsDirty())},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"useSmallestIdeal",{get:function(){return this._useSmallestIdeal},set:function(t){this._useSmallestIdeal!==t&&(this._useSmallestIdeal=t,this.markAsDirty(),this._rootContainer._markAllAsDirty())},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"renderAtIdealSize",{get:function(){return this._renderAtIdealSize},set:function(t){this._renderAtIdealSize!==t&&(this._renderAtIdealSize=t,this._onResize())},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"idealRatio",{get:function(){var t=0,e=0;return this._idealWidth&&(t=this.getSize().width/this._idealWidth),this._idealHeight&&(e=this.getSize().height/this._idealHeight),this._useSmallestIdeal&&this._idealWidth&&this._idealHeight?window.innerWidth<window.innerHeight?t:e:this._idealWidth?t:this._idealHeight?e:1},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"layer",{get:function(){return this._layerToDispose},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"rootContainer",{get:function(){return this._rootContainer},enumerable:!0,configurable:!0}),e.prototype.getChildren=function(){return[this._rootContainer]},e.prototype.getDescendants=function(t,e){return this._rootContainer.getDescendants(t,e)},Object.defineProperty(e.prototype,"focusedControl",{get:function(){return this._focusedControl},set:function(t){this._focusedControl!=t&&(this._focusedControl&&this._focusedControl.onBlur(),t&&t.onFocus(),this._focusedControl=t)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"isForeground",{get:function(){return!this.layer||!this.layer.isBackground},set:function(t){this.layer&&this.layer.isBackground!==!t&&(this.layer.isBackground=!t)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"clipboardData",{get:function(){return this._clipboardData},set:function(t){this._clipboardData=t},enumerable:!0,configurable:!0}),e.prototype.getClassName=function(){return"AdvancedDynamicTexture"},e.prototype.executeOnAllControls=function(t,e){e||(e=this._rootContainer),t(e);for(var i=0,r=e.children;i<r.length;i++){var n=r[i];n.children?this.executeOnAllControls(t,n):t(n)}},Object.defineProperty(e.prototype,"useInvalidateRectOptimization",{get:function(){return this._useInvalidateRectOptimization},set:function(t){this._useInvalidateRectOptimization=t},enumerable:!0,configurable:!0}),e.prototype.invalidateRect=function(t,e,i,r){if(this._useInvalidateRectOptimization)if(this._invalidatedRectangle){var n=Math.ceil(Math.max(this._invalidatedRectangle.left+this._invalidatedRectangle.width-1,i)),o=Math.ceil(Math.max(this._invalidatedRectangle.top+this._invalidatedRectangle.height-1,r));this._invalidatedRectangle.left=Math.floor(Math.min(this._invalidatedRectangle.left,t)),this._invalidatedRectangle.top=Math.floor(Math.min(this._invalidatedRectangle.top,e)),this._invalidatedRectangle.width=n-this._invalidatedRectangle.left+1,this._invalidatedRectangle.height=o-this._invalidatedRectangle.top+1}else this._invalidatedRectangle=new _(t,e,i-t+1,r-e+1)},e.prototype.markAsDirty=function(){this._isDirty=!0},e.prototype.createStyle=function(){return new q(this)},e.prototype.addControl=function(t){return this._rootContainer.addControl(t),this},e.prototype.removeControl=function(t){return this._rootContainer.removeControl(t),this},e.prototype.dispose=function(){var e=this.getScene();e&&(this._rootElement=null,e.onBeforeCameraRenderObservable.remove(this._renderObserver),this._resizeObserver&&e.getEngine().onResizeObservable.remove(this._resizeObserver),this._pointerMoveObserver&&e.onPrePointerObservable.remove(this._pointerMoveObserver),this._pointerObserver&&e.onPointerObservable.remove(this._pointerObserver),this._preKeyboardObserver&&e.onPreKeyboardObservable.remove(this._preKeyboardObserver),this._canvasPointerOutObserver&&e.getEngine().onCanvasPointerOutObservable.remove(this._canvasPointerOutObserver),this._layerToDispose&&(this._layerToDispose.texture=null,this._layerToDispose.dispose(),this._layerToDispose=null),this._rootContainer.dispose(),this.onClipboardObservable.clear(),this.onControlPickedObservable.clear(),this.onBeginRenderObservable.clear(),this.onEndRenderObservable.clear(),this.onBeginLayoutObservable.clear(),this.onEndLayoutObservable.clear(),t.prototype.dispose.call(this))},e.prototype._onResize=function(){var t=this.getScene();if(t){var e=t.getEngine(),i=this.getSize(),r=e.getRenderWidth()*this._renderScale,n=e.getRenderHeight()*this._renderScale;this._renderAtIdealSize&&(this._idealWidth?(n=n*this._idealWidth/r,r=this._idealWidth):this._idealHeight&&(r=r*this._idealHeight/n,n=this._idealHeight)),i.width===r&&i.height===n||(this.scaleTo(r,n),this.markAsDirty(),(this._idealWidth||this._idealHeight)&&this._rootContainer._markAllAsDirty()),this.invalidateRect(0,0,i.width-1,i.height-1)}},e.prototype._getGlobalViewport=function(t){var e=t.getEngine();return this._fullscreenViewport.toGlobal(e.getRenderWidth(),e.getRenderHeight())},e.prototype.getProjectedPosition=function(t,e){var i=this.getScene();if(!i)return s.Vector2.Zero();var r=this._getGlobalViewport(i),n=s.Vector3.Project(t,e,i.getTransformMatrix(),r);return n.scaleInPlace(this.renderScale),new s.Vector2(n.x,n.y)},e.prototype._checkUpdate=function(t){if(!this._layerToDispose||0!=(t.layerMask&this._layerToDispose.layerMask)){if(this._isFullscreen&&this._linkedControls.length){var e=this.getScene();if(!e)return;for(var i=this._getGlobalViewport(e),r=0,n=this._linkedControls;r<n.length;r++){var o=n[r];if(o.isVisible){var a=o._linkedMesh;if(a&&!a.isDisposed()){var h=a.getBoundingInfo?a.getBoundingInfo().boundingSphere.center:s.Vector3.ZeroReadOnly,l=s.Vector3.Project(h,a.getWorldMatrix(),e.getTransformMatrix(),i);l.z<0||l.z>1?o.notRenderable=!0:(o.notRenderable=!1,l.scaleInPlace(this.renderScale),o._moveToProjectedPosition(l))}else s.Tools.SetImmediate(function(){o.linkWithMesh(null)})}}}(this._isDirty||this._rootContainer.isDirty)&&(this._isDirty=!1,this._render(),this.update(!0,this.premulAlpha))}},e.prototype._render=function(){var t=this.getSize(),e=t.width,i=t.height,r=this.getContext();r.font="18px Arial",r.strokeStyle="white",this.onBeginLayoutObservable.notifyObservers(this);var n=new _(0,0,e,i);this._numLayoutCalls=0,this._rootContainer._layout(n,r),this.onEndLayoutObservable.notifyObservers(this),this._isDirty=!1,this._invalidatedRectangle?this._clearMeasure.copyFrom(this._invalidatedRectangle):this._clearMeasure.copyFromFloats(0,0,e,i),r.clearRect(this._clearMeasure.left,this._clearMeasure.top,this._clearMeasure.width,this._clearMeasure.height),this._background&&(r.save(),r.fillStyle=this._background,r.fillRect(this._clearMeasure.left,this._clearMeasure.top,this._clearMeasure.width,this._clearMeasure.height),r.restore()),this.onBeginRenderObservable.notifyObservers(this),this._numRenderCalls=0,this._rootContainer._render(r,this._invalidatedRectangle),this.onEndRenderObservable.notifyObservers(this),this._invalidatedRectangle=null},e.prototype._changeCursor=function(t){this._rootElement&&(this._rootElement.style.cursor=t,this._cursorChanged=!0)},e.prototype._registerLastControlDown=function(t,e){this._lastControlDown[e]=t,this.onControlPickedObservable.notifyObservers(t)},e.prototype._doPicking=function(t,e,i,r,n,o,a){var h=this.getScene();if(h){var l=h.getEngine(),u=this.getSize();if(this._isFullscreen){var c=(h.cameraToUseForPointers||h.activeCamera).viewport;t*=u.width/(l.getRenderWidth()*c.width),e*=u.height/(l.getRenderHeight()*c.height)}this._capturingControl[r]?this._capturingControl[r]._processObservables(i,t,e,r,n):(this._cursorChanged=!1,this._rootContainer._processPicking(t,e,i,r,n,o,a)||(this._changeCursor(""),i===s.PointerEventTypes.POINTERMOVE&&this._lastControlOver[r]&&(this._lastControlOver[r]._onPointerOut(this._lastControlOver[r]),delete this._lastControlOver[r])),this._cursorChanged||this._changeCursor(""),this._manageFocus())}},e.prototype._cleanControlAfterRemovalFromList=function(t,e){for(var i in t){if(t.hasOwnProperty(i))t[i]===e&&delete t[i]}},e.prototype._cleanControlAfterRemoval=function(t){this._cleanControlAfterRemovalFromList(this._lastControlDown,t),this._cleanControlAfterRemovalFromList(this._lastControlOver,t)},e.prototype.attach=function(){var t=this,e=this.getScene();if(e){var i=new s.Viewport(0,0,0,0);this._pointerMoveObserver=e.onPrePointerObservable.add(function(r,n){if(!e.isPointerCaptured(r.event.pointerId)&&(r.type===s.PointerEventTypes.POINTERMOVE||r.type===s.PointerEventTypes.POINTERUP||r.type===s.PointerEventTypes.POINTERDOWN||r.type===s.PointerEventTypes.POINTERWHEEL)&&e){r.type===s.PointerEventTypes.POINTERMOVE&&r.event.pointerId&&(t._defaultMousePointerId=r.event.pointerId);var o=e.cameraToUseForPointers||e.activeCamera,a=e.getEngine();o?o.viewport.toGlobalToRef(a.getRenderWidth(),a.getRenderHeight(),i):(i.x=0,i.y=0,i.width=a.getRenderWidth(),i.height=a.getRenderHeight());var h=e.pointerX/a.getHardwareScalingLevel()-i.x,l=e.pointerY/a.getHardwareScalingLevel()-(a.getRenderHeight()-i.y-i.height);t._shouldBlockPointer=!1;var u=r.event.pointerId||t._defaultMousePointerId;t._doPicking(h,l,r.type,u,r.event.button,r.event.deltaX,r.event.deltaY),t._shouldBlockPointer&&(r.skipOnPointerObservable=t._shouldBlockPointer)}}),this._attachToOnPointerOut(e)}},e.prototype.registerClipboardEvents=function(){self.addEventListener("copy",this.onClipboardCopy,!1),self.addEventListener("cut",this.onClipboardCut,!1),self.addEventListener("paste",this.onClipboardPaste,!1)},e.prototype.unRegisterClipboardEvents=function(){self.removeEventListener("copy",this.onClipboardCopy),self.removeEventListener("cut",this.onClipboardCut),self.removeEventListener("paste",this.onClipboardPaste)},e.prototype.attachToMesh=function(t,e){var i=this;void 0===e&&(e=!0);var r=this.getScene();r&&(this._pointerObserver=r.onPointerObservable.add(function(e,r){if(e.type===s.PointerEventTypes.POINTERMOVE||e.type===s.PointerEventTypes.POINTERUP||e.type===s.PointerEventTypes.POINTERDOWN){var n=e.event.pointerId||i._defaultMousePointerId;if(e.pickInfo&&e.pickInfo.hit&&e.pickInfo.pickedMesh===t){var o=e.pickInfo.getTextureCoordinates();if(o){var a=i.getSize();i._doPicking(o.x*a.width,(1-o.y)*a.height,e.type,n,e.event.button)}}else if(e.type===s.PointerEventTypes.POINTERUP){if(i._lastControlDown[n]&&i._lastControlDown[n]._forcePointerUp(n),delete i._lastControlDown[n],i.focusedControl){var h=i.focusedControl.keepsFocusWith(),l=!0;if(h)for(var u=0,c=h;u<c.length;u++){var _=c[u];if(i!==_._host){var d=_._host;if(d._lastControlOver[n]&&d._lastControlOver[n].isAscendant(_)){l=!1;break}}}l&&(i.focusedControl=null)}}else e.type===s.PointerEventTypes.POINTERMOVE&&(i._lastControlOver[n]&&i._lastControlOver[n]._onPointerOut(i._lastControlOver[n],!0),delete i._lastControlOver[n])}}),t.enablePointerMoveEvents=e,this._attachToOnPointerOut(r))},e.prototype.moveFocusToControl=function(t){this.focusedControl=t,this._lastPickedControl=t,this._blockNextFocusCheck=!0},e.prototype._manageFocus=function(){if(this._blockNextFocusCheck)return this._blockNextFocusCheck=!1,void(this._lastPickedControl=this._focusedControl);if(this._focusedControl&&this._focusedControl!==this._lastPickedControl){if(this._lastPickedControl.isFocusInvisible)return;this.focusedControl=null}},e.prototype._attachToOnPointerOut=function(t){var e=this;this._canvasPointerOutObserver=t.getEngine().onCanvasPointerOutObservable.add(function(t){e._lastControlOver[t.pointerId]&&e._lastControlOver[t.pointerId]._onPointerOut(e._lastControlOver[t.pointerId]),delete e._lastControlOver[t.pointerId],e._lastControlDown[t.pointerId]&&e._lastControlDown[t.pointerId]!==e._capturingControl[t.pointerId]&&(e._lastControlDown[t.pointerId]._forcePointerUp(),delete e._lastControlDown[t.pointerId])})},e.CreateForMesh=function(t,i,r,n,o){void 0===i&&(i=1024),void 0===r&&(r=1024),void 0===n&&(n=!0),void 0===o&&(o=!1);var a=new e(t.name+" AdvancedDynamicTexture",i,r,t.getScene(),!0,s.Texture.TRILINEAR_SAMPLINGMODE),h=new s.StandardMaterial("AdvancedDynamicTextureMaterial",t.getScene());return h.backFaceCulling=!1,h.diffuseColor=s.Color3.Black(),h.specularColor=s.Color3.Black(),o?(h.diffuseTexture=a,h.emissiveTexture=a,a.hasAlpha=!0):(h.emissiveTexture=a,h.opacityTexture=a),t.material=h,a.attachToMesh(t,n),a},e.CreateFullscreenUI=function(t,i,r,n){void 0===i&&(i=!0),void 0===r&&(r=null),void 0===n&&(n=s.Texture.BILINEAR_SAMPLINGMODE);var o=new e(t,0,0,r,!1,n),a=new s.Layer(t+"_layer",null,r,!i);return a.texture=o,o._layerToDispose=a,o._isFullscreen=!0,o.attach(),o},e}(s.DynamicTexture),Z=function(){function t(t){this.texture=t,this._captureRenderTime=!1,this._renderTime=new s.PerfCounter,this._captureLayoutTime=!1,this._layoutTime=new s.PerfCounter,this._onBeginRenderObserver=null,this._onEndRenderObserver=null,this._onBeginLayoutObserver=null,this._onEndLayoutObserver=null}return Object.defineProperty(t.prototype,"renderTimeCounter",{get:function(){return this._renderTime},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"layoutTimeCounter",{get:function(){return this._layoutTime},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"captureRenderTime",{get:function(){return this._captureRenderTime},set:function(t){var e=this;t!==this._captureRenderTime&&(this._captureRenderTime=t,t?(this._onBeginRenderObserver=this.texture.onBeginRenderObservable.add(function(){e._renderTime.beginMonitoring()}),this._onEndRenderObserver=this.texture.onEndRenderObservable.add(function(){e._renderTime.endMonitoring(!0)})):(this.texture.onBeginRenderObservable.remove(this._onBeginRenderObserver),this._onBeginRenderObserver=null,this.texture.onEndRenderObservable.remove(this._onEndRenderObserver),this._onEndRenderObserver=null))},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"captureLayoutTime",{get:function(){return this._captureLayoutTime},set:function(t){var e=this;t!==this._captureLayoutTime&&(this._captureLayoutTime=t,t?(this._onBeginLayoutObserver=this.texture.onBeginLayoutObservable.add(function(){e._layoutTime.beginMonitoring()}),this._onEndLayoutObserver=this.texture.onEndLayoutObservable.add(function(){e._layoutTime.endMonitoring(!0)})):(this.texture.onBeginLayoutObservable.remove(this._onBeginLayoutObserver),this._onBeginLayoutObserver=null,this.texture.onEndLayoutObservable.remove(this._onEndLayoutObserver),this._onEndLayoutObserver=null))},enumerable:!0,configurable:!0}),t.prototype.dispose=function(){this.texture.onBeginRenderObservable.remove(this._onBeginRenderObserver),this._onBeginRenderObserver=null,this.texture.onEndRenderObservable.remove(this._onEndRenderObserver),this._onEndRenderObserver=null,this.texture.onBeginLayoutObservable.remove(this._onBeginLayoutObserver),this._onBeginLayoutObserver=null,this.texture.onEndLayoutObservable.remove(this._onEndLayoutObserver),this._onEndLayoutObserver=null,this.texture=null},t}(),J=function(){function t(t){void 0===t&&(t=null),this._nodes={},this._nodeTypes={element:1,attribute:2,text:3},this._isLoaded=!1,this._objectAttributes={textHorizontalAlignment:1,textVerticalAlignment:2,horizontalAlignment:3,verticalAlignment:4,stretch:5},t&&(this._parentClass=t)}return t.prototype._getChainElement=function(t){var e=window;this._parentClass&&(e=this._parentClass);var i=t;i=i.split(".");for(var r=0;r<i.length;r++)e=e[i[r]];return e},t.prototype._getClassAttribute=function(t){var e=t.split(".");return s._TypeStore.GetClass("BABYLON.GUI."+e[0])[e[1]]},t.prototype._createGuiElement=function(t,e,i){void 0===i&&(i=!0);try{var r=new(s._TypeStore.GetClass("BABYLON.GUI."+t.nodeName));e&&i&&e.addControl(r);for(var n=0;n<t.attributes.length;n++)if(!t.attributes[n].name.toLowerCase().includes("datasource"))if(t.attributes[n].name.toLowerCase().includes("observable")){var o=this._getChainElement(t.attributes[n].value);r[t.attributes[n].name].add(o)}else if("linkWithMesh"==t.attributes[n].name)this._parentClass?r.linkWithMesh(this._parentClass[t.attributes[n].value]):r.linkWithMesh(window[t.attributes[n].value]);else if(t.attributes[n].value.startsWith("{{")&&t.attributes[n].value.endsWith("}}")){o=this._getChainElement(t.attributes[n].value.substring(2,t.attributes[n].value.length-2));r[t.attributes[n].name]=o}else this._objectAttributes[t.attributes[n].name]?r[t.attributes[n].name]=this._getClassAttribute(t.attributes[n].value):"true"==t.attributes[n].value||"false"==t.attributes[n].value?r[t.attributes[n].name]="true"==t.attributes[n].value:r[t.attributes[n].name]=isNaN(Number(t.attributes[n].value))?t.attributes[n].value:Number(t.attributes[n].value);if(!t.attributes.getNamedItem("id"))return this._nodes[t.nodeName+Object.keys(this._nodes).length+"_gen"]=r,r;var a=t.attributes.getNamedItem("id").value;if(a.startsWith("{{")&&a.endsWith("}}")&&(a=this._getChainElement(a.substring(2,a.length-2))),this._nodes[a])throw"XmlLoader Exception : Duplicate ID, every element should have an unique ID attribute";return this._nodes[a]=r,r}catch(e){throw"XmlLoader Exception : Error parsing Control "+t.nodeName+","+e+"."}},t.prototype._parseGrid=function(t,e,i){for(var r,n,o,s,a,h=t.children,l=!1,u=-1,c=-1,_=0,d=0;d<h.length;d++)if(h[d].nodeType==this._nodeTypes.element){if("Row"!=h[d].nodeName)throw"XmlLoader Exception : Expecting Row node, received "+h[d].nodeName;if(u+=1,o=h[d].children,!h[d].attributes.getNamedItem("height"))throw"XmlLoader Exception : Height must be defined for grid rows";n=Number(h[d].attributes.getNamedItem("height").nodeValue),l=!!h[d].attributes.getNamedItem("isPixel")&&JSON.parse(h[d].attributes.getNamedItem("isPixel").nodeValue),e.addRowDefinition(n,l);for(var f=0;f<o.length;f++)if(o[f].nodeType==this._nodeTypes.element){if("Column"!=o[f].nodeName)throw"XmlLoader Exception : Expecting Column node, received "+o[f].nodeName;if(c+=1,u>0&&c>_)throw"XmlLoader Exception : In the Grid element, the number of columns is defined in the first row, do not add more columns in the subsequent rows.";if(0==u){if(!o[f].attributes.getNamedItem("width"))throw"XmlLoader Exception : Width must be defined for all the grid columns in the first row";r=Number(o[f].attributes.getNamedItem("width").nodeValue),l=!!o[f].attributes.getNamedItem("isPixel")&&JSON.parse(o[f].attributes.getNamedItem("isPixel").nodeValue),e.addColumnDefinition(r,l)}s=o[f].children;for(var p=0;p<s.length;p++)s[p].nodeType==this._nodeTypes.element&&(a=this._createGuiElement(s[p],e,!1),e.addControl(a,u,c),s[p].firstChild&&this._parseXml(s[p].firstChild,a))}0==u&&(_=c),c=-1}t.nextSibling&&this._parseXml(t.nextSibling,i)},t.prototype._parseElement=function(t,e,i){t.firstChild&&this._parseXml(t.firstChild,e),t.nextSibling&&this._parseXml(t.nextSibling,i)},t.prototype._prepareSourceElement=function(t,e,i,r,n){this._parentClass?this._parentClass[i]=r[n]:window[i]=r[n],t.firstChild&&this._parseXml(t.firstChild,e,!0)},t.prototype._parseElementsFromSource=function(t,e,i){var r=t.attributes.getNamedItem("dataSource").value;if(!r.includes(" in "))throw"XmlLoader Exception : Malformed XML, Data Source must include an in";var n=!0,o=r.split(" in ");if(o.length<2)throw"XmlLoader Exception : Malformed XML, Data Source must an iterator and a source";var s=o[1];if(s.startsWith("{")&&s.endsWith("}")&&(n=!1),(!n||s.startsWith("[")&&s.endsWith("]"))&&(s=s.substring(1,s.length-1)),s=this._parentClass?this._parentClass[s]:window[s],n)for(var a=0;a<s.length;a++)this._prepareSourceElement(t,e,o[0],s,a);else for(var a in s)this._prepareSourceElement(t,e,o[0],s,a);t.nextSibling&&this._parseXml(t.nextSibling,i)},t.prototype._parseXml=function(t,e,i){if(void 0===i&&(i=!1),t.nodeType==this._nodeTypes.element){i&&t.setAttribute("id",e.id+(e._children.length+1));var r=this._createGuiElement(t,e);"Grid"==t.nodeName?this._parseGrid(t,r,e):t.attributes.getNamedItem("dataSource")?this._parseElementsFromSource(t,r,e):this._parseElement(t,r,e)}else t.nextSibling&&this._parseXml(t.nextSibling,e,i)},t.prototype.isLoaded=function(){return this._isLoaded},t.prototype.getNodeById=function(t){return this._nodes[t]},t.prototype.getNodes=function(){return this._nodes},t.prototype.loadLayout=function(t,e,i){var r=new XMLHttpRequest;r.onreadystatechange=function(){if(4==r.readyState&&200==r.status){if(!r.responseXML)throw"XmlLoader Exception : XML file is malformed or corrupted.";var t=r.responseXML.documentElement;this._parseXml(t.firstChild,e),this._isLoaded=!0,i&&i()}}.bind(this),r.open("GET",t,!0),r.send()},t}(),Q=function(t){function e(e,i){void 0===i&&(i=0);var r=t.call(this,e.x,e.y,e.z)||this;return r.buttonIndex=i,r}return n(e,t),e}(s.Vector3),$=function(){function t(t){this.name=t,this._downCount=0,this._enterCount=-1,this._downPointerIds={},this._isVisible=!0,this.onPointerMoveObservable=new s.Observable,this.onPointerOutObservable=new s.Observable,this.onPointerDownObservable=new s.Observable,this.onPointerUpObservable=new s.Observable,this.onPointerClickObservable=new s.Observable,this.onPointerEnterObservable=new s.Observable,this._behaviors=new Array}return Object.defineProperty(t.prototype,"position",{get:function(){return this._node?this._node.position:s.Vector3.Zero()},set:function(t){this._node&&(this._node.position=t)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"scaling",{get:function(){return this._node?this._node.scaling:new s.Vector3(1,1,1)},set:function(t){this._node&&(this._node.scaling=t)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"behaviors",{get:function(){return this._behaviors},enumerable:!0,configurable:!0}),t.prototype.addBehavior=function(t){var e=this;if(-1!==this._behaviors.indexOf(t))return this;t.init();var i=this._host.scene;return i.isLoading?i.onDataLoadedObservable.addOnce(function(){t.attach(e)}):t.attach(this),this._behaviors.push(t),this},t.prototype.removeBehavior=function(t){var e=this._behaviors.indexOf(t);return-1===e?this:(this._behaviors[e].detach(),this._behaviors.splice(e,1),this)},t.prototype.getBehaviorByName=function(t){for(var e=0,i=this._behaviors;e<i.length;e++){var r=i[e];if(r.name===t)return r}return null},Object.defineProperty(t.prototype,"isVisible",{get:function(){return this._isVisible},set:function(t){if(this._isVisible!==t){this._isVisible=t;var e=this.mesh;e&&e.setEnabled(t)}},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"typeName",{get:function(){return this._getTypeName()},enumerable:!0,configurable:!0}),t.prototype.getClassName=function(){return this._getTypeName()},t.prototype._getTypeName=function(){return"Control3D"},Object.defineProperty(t.prototype,"node",{get:function(){return this._node},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"mesh",{get:function(){return this._node instanceof s.AbstractMesh?this._node:null},enumerable:!0,configurable:!0}),t.prototype.linkToTransformNode=function(t){return this._node&&(this._node.parent=t),this},t.prototype._prepareNode=function(t){if(!this._node){if(this._node=this._createNode(t),!this.node)return;this._node.metadata=this,this._node.position=this.position,this._node.scaling=this.scaling;var e=this.mesh;e&&(e.isPickable=!0,this._affectMaterial(e))}},t.prototype._createNode=function(t){return null},t.prototype._affectMaterial=function(t){t.material=null},t.prototype._onPointerMove=function(t,e){this.onPointerMoveObservable.notifyObservers(e,-1,t,this)},t.prototype._onPointerEnter=function(t){return!(this._enterCount>0)&&(-1===this._enterCount&&(this._enterCount=0),this._enterCount++,this.onPointerEnterObservable.notifyObservers(this,-1,t,this),this.pointerEnterAnimation&&this.pointerEnterAnimation(),!0)},t.prototype._onPointerOut=function(t){this._enterCount=0,this.onPointerOutObservable.notifyObservers(this,-1,t,this),this.pointerOutAnimation&&this.pointerOutAnimation()},t.prototype._onPointerDown=function(t,e,i,r){return 0!==this._downCount?(this._downCount++,!1):(this._downCount++,this._downPointerIds[i]=!0,this.onPointerDownObservable.notifyObservers(new Q(e,r),-1,t,this),this.pointerDownAnimation&&this.pointerDownAnimation(),!0)},t.prototype._onPointerUp=function(t,e,i,r,n){this._downCount--,delete this._downPointerIds[i],this._downCount<0?this._downCount=0:0==this._downCount&&(n&&(this._enterCount>0||-1===this._enterCount)&&this.onPointerClickObservable.notifyObservers(new Q(e,r),-1,t,this),this.onPointerUpObservable.notifyObservers(new Q(e,r),-1,t,this),this.pointerUpAnimation&&this.pointerUpAnimation())},t.prototype.forcePointerUp=function(t){if(void 0===t&&(t=null),null!==t)this._onPointerUp(this,s.Vector3.Zero(),t,0,!0);else{for(var e in this._downPointerIds)this._onPointerUp(this,s.Vector3.Zero(),+e,0,!0);this._downCount>0&&(this._downCount=1,this._onPointerUp(this,s.Vector3.Zero(),0,0,!0))}},t.prototype._processObservables=function(t,e,i,r){if(t===s.PointerEventTypes.POINTERMOVE){this._onPointerMove(this,e);var n=this._host._lastControlOver[i];return n&&n!==this&&n._onPointerOut(this),n!==this&&this._onPointerEnter(this),this._host._lastControlOver[i]=this,!0}return t===s.PointerEventTypes.POINTERDOWN?(this._onPointerDown(this,e,i,r),this._host._lastControlDown[i]=this,this._host._lastPickedControl=this,!0):t===s.PointerEventTypes.POINTERUP&&(this._host._lastControlDown[i]&&this._host._lastControlDown[i]._onPointerUp(this,e,i,r,!0),delete this._host._lastControlDown[i],!0)},t.prototype._disposeNode=function(){this._node&&(this._node.dispose(),this._node=null)},t.prototype.dispose=function(){this.onPointerDownObservable.clear(),this.onPointerEnterObservable.clear(),this.onPointerMoveObservable.clear(),this.onPointerOutObservable.clear(),this.onPointerUpObservable.clear(),this.onPointerClickObservable.clear(),this._disposeNode();for(var t=0,e=this._behaviors;t<e.length;t++){e[t].detach()}},t}(),tt=function(t){function e(e){return t.call(this,e)||this}return n(e,t),e.prototype._getTypeName=function(){return"AbstractButton3D"},e.prototype._createNode=function(t){return new s.TransformNode("button"+this.name)},e}($),et=function(t){function e(e){var i=t.call(this,e)||this;return i._contentResolution=512,i._contentScaleRatio=2,i.pointerEnterAnimation=function(){i.mesh&&(i._currentMaterial.emissiveColor=s.Color3.Red())},i.pointerOutAnimation=function(){i._currentMaterial.emissiveColor=s.Color3.Black()},i.pointerDownAnimation=function(){i.mesh&&i.mesh.scaling.scaleInPlace(.95)},i.pointerUpAnimation=function(){i.mesh&&i.mesh.scaling.scaleInPlace(1/.95)},i}return n(e,t),Object.defineProperty(e.prototype,"contentResolution",{get:function(){return this._contentResolution},set:function(t){this._contentResolution!==t&&(this._contentResolution=t,this._resetContent())},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"contentScaleRatio",{get:function(){return this._contentScaleRatio},set:function(t){this._contentScaleRatio!==t&&(this._contentScaleRatio=t,this._resetContent())},enumerable:!0,configurable:!0}),e.prototype._disposeFacadeTexture=function(){this._facadeTexture&&(this._facadeTexture.dispose(),this._facadeTexture=null)},e.prototype._resetContent=function(){this._disposeFacadeTexture(),this.content=this._content},Object.defineProperty(e.prototype,"content",{get:function(){return this._content},set:function(t){this._content=t,this._host&&this._host.utilityLayer&&(this._facadeTexture?this._facadeTexture.rootContainer.clearControls():(this._facadeTexture=new K("Facade",this._contentResolution,this._contentResolution,this._host.utilityLayer.utilityLayerScene,!0,s.Texture.TRILINEAR_SAMPLINGMODE),this._facadeTexture.rootContainer.scaleX=this._contentScaleRatio,this._facadeTexture.rootContainer.scaleY=this._contentScaleRatio,this._facadeTexture.premulAlpha=!0),this._facadeTexture.addControl(t),this._applyFacade(this._facadeTexture))},enumerable:!0,configurable:!0}),e.prototype._applyFacade=function(t){this._currentMaterial.emissiveTexture=t},e.prototype._getTypeName=function(){return"Button3D"},e.prototype._createNode=function(t){for(var e=new Array(6),i=0;i<6;i++)e[i]=new s.Vector4(0,0,0,0);return e[1]=new s.Vector4(0,0,1,1),s.BoxBuilder.CreateBox(this.name+"_rootMesh",{width:1,height:1,depth:.08,faceUV:e},t)},e.prototype._affectMaterial=function(t){var e=new s.StandardMaterial(this.name+"Material",t.getScene());e.specularColor=s.Color3.Black(),t.material=e,this._currentMaterial=e,this._resetContent()},e.prototype.dispose=function(){t.prototype.dispose.call(this),this._disposeFacadeTexture(),this._currentMaterial&&this._currentMaterial.dispose()},e}(tt),it=function(t){function e(e){var i=t.call(this,e)||this;return i._blockLayout=!1,i._children=new Array,i}return n(e,t),Object.defineProperty(e.prototype,"children",{get:function(){return this._children},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"blockLayout",{get:function(){return this._blockLayout},set:function(t){this._blockLayout!==t&&(this._blockLayout=t,this._blockLayout||this._arrangeChildren())},enumerable:!0,configurable:!0}),e.prototype.updateLayout=function(){return this._arrangeChildren(),this},e.prototype.containsControl=function(t){return-1!==this._children.indexOf(t)},e.prototype.addControl=function(t){return-1!==this._children.indexOf(t)?this:(t.parent=this,t._host=this._host,this._children.push(t),this._host.utilityLayer&&(t._prepareNode(this._host.utilityLayer.utilityLayerScene),t.node&&(t.node.parent=this.node),this.blockLayout||this._arrangeChildren()),this)},e.prototype._arrangeChildren=function(){},e.prototype._createNode=function(t){return new s.TransformNode("ContainerNode",t)},e.prototype.removeControl=function(t){var e=this._children.indexOf(t);return-1!==e&&(this._children.splice(e,1),t.parent=null,t._disposeNode()),this},e.prototype._getTypeName=function(){return"Container3D"},e.prototype.dispose=function(){for(var e=0,i=this._children;e<i.length;e++){i[e].dispose()}this._children=[],t.prototype.dispose.call(this)},e.UNSET_ORIENTATION=0,e.FACEORIGIN_ORIENTATION=1,e.FACEORIGINREVERSED_ORIENTATION=2,e.FACEFORWARD_ORIENTATION=3,e.FACEFORWARDREVERSED_ORIENTATION=4,e}($),rt=function(t){function e(){var e=t.call(this)||this;return e._columns=10,e._rows=0,e._rowThenColum=!0,e._orientation=it.FACEORIGIN_ORIENTATION,e.margin=0,e}return n(e,t),Object.defineProperty(e.prototype,"orientation",{get:function(){return this._orientation},set:function(t){var e=this;this._orientation!==t&&(this._orientation=t,s.Tools.SetImmediate(function(){e._arrangeChildren()}))},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"columns",{get:function(){return this._columns},set:function(t){var e=this;this._columns!==t&&(this._columns=t,this._rowThenColum=!0,s.Tools.SetImmediate(function(){e._arrangeChildren()}))},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"rows",{get:function(){return this._rows},set:function(t){var e=this;this._rows!==t&&(this._rows=t,this._rowThenColum=!1,s.Tools.SetImmediate(function(){e._arrangeChildren()}))},enumerable:!0,configurable:!0}),e.prototype._arrangeChildren=function(){this._cellWidth=0,this._cellHeight=0;for(var t=0,e=0,i=0,r=s.Matrix.Invert(this.node.computeWorldMatrix(!0)),n=0,o=this._children;n<o.length;n++){if((m=o[n]).mesh){i++,m.mesh.computeWorldMatrix(!0);var a=m.mesh.getHierarchyBoundingVectors(),h=s.TmpVectors.Vector3[0],l=s.TmpVectors.Vector3[1];a.max.subtractToRef(a.min,l),l.scaleInPlace(.5),s.Vector3.TransformNormalToRef(l,r,h),this._cellWidth=Math.max(this._cellWidth,2*h.x),this._cellHeight=Math.max(this._cellHeight,2*h.y)}}this._cellWidth+=2*this.margin,this._cellHeight+=2*this.margin,this._rowThenColum?(e=this._columns,t=Math.ceil(i/this._columns)):(t=this._rows,e=Math.ceil(i/this._rows));var u=.5*e*this._cellWidth,c=.5*t*this._cellHeight,_=[],d=0;if(this._rowThenColum)for(var f=0;f<t;f++)for(var p=0;p<e&&(_.push(new s.Vector3(p*this._cellWidth-u+this._cellWidth/2,f*this._cellHeight-c+this._cellHeight/2,0)),!(++d>i));p++);else for(p=0;p<e;p++)for(f=0;f<t&&(_.push(new s.Vector3(p*this._cellWidth-u+this._cellWidth/2,f*this._cellHeight-c+this._cellHeight/2,0)),!(++d>i));f++);d=0;for(var g=0,b=this._children;g<b.length;g++){var m;(m=b[g]).mesh&&(this._mapGridNode(m,_[d]),d++)}this._finalProcessing()},e.prototype._finalProcessing=function(){},e}(it),nt=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e._radius=5,e}return n(e,t),Object.defineProperty(e.prototype,"radius",{get:function(){return this._radius},set:function(t){var e=this;this._radius!==t&&(this._radius=t,s.Tools.SetImmediate(function(){e._arrangeChildren()}))},enumerable:!0,configurable:!0}),e.prototype._mapGridNode=function(t,e){var i=t.mesh;if(i){var r=this._cylindricalMapping(e);switch(t.position=r,this.orientation){case it.FACEORIGIN_ORIENTATION:i.lookAt(new s.Vector3(2*r.x,r.y,2*r.z));break;case it.FACEORIGINREVERSED_ORIENTATION:i.lookAt(new s.Vector3(-r.x,r.y,-r.z));break;case it.FACEFORWARD_ORIENTATION:break;case it.FACEFORWARDREVERSED_ORIENTATION:i.rotate(s.Axis.Y,Math.PI,s.Space.LOCAL)}}},e.prototype._cylindricalMapping=function(t){var e=new s.Vector3(0,t.y,this._radius),i=t.x/this._radius;return s.Matrix.RotationYawPitchRollToRef(i,0,0,s.TmpVectors.Matrix[0]),s.Vector3.TransformNormal(e,s.TmpVectors.Matrix[0])},e}(rt),ot="precision highp float;\n\nattribute vec3 position;\nattribute vec3 normal;\nattribute vec2 uv;\n\nuniform mat4 world;\nuniform mat4 viewProjection;\nvarying vec2 vUV;\n#ifdef BORDER\nvarying vec2 scaleInfo;\nuniform float borderWidth;\nuniform vec3 scaleFactor;\n#endif\n#ifdef HOVERLIGHT\nvarying vec3 worldPosition;\n#endif\nvoid main(void) {\nvUV=uv;\n#ifdef BORDER\nvec3 scale=scaleFactor;\nfloat minScale=min(min(scale.x,scale.y),scale.z);\nfloat maxScale=max(max(scale.x,scale.y),scale.z);\nfloat minOverMiddleScale=minScale/(scale.x+scale.y+scale.z-minScale-maxScale);\nfloat areaYZ=scale.y*scale.z;\nfloat areaXZ=scale.x*scale.z;\nfloat areaXY=scale.x*scale.y;\nfloat scaledBorderWidth=borderWidth;\nif (abs(normal.x) == 1.0)\n{\nscale.x=scale.y;\nscale.y=scale.z;\nif (areaYZ>areaXZ && areaYZ>areaXY)\n{\nscaledBorderWidth*=minOverMiddleScale;\n}\n}\nelse if (abs(normal.y) == 1.0)\n{\nscale.x=scale.z;\nif (areaXZ>areaXY && areaXZ>areaYZ)\n{\nscaledBorderWidth*=minOverMiddleScale;\n}\n}\nelse\n{\nif (areaXY>areaYZ && areaXY>areaXZ)\n{\nscaledBorderWidth*=minOverMiddleScale;\n}\n}\nfloat scaleRatio=min(scale.x,scale.y)/max(scale.x,scale.y);\nif (scale.x>scale.y)\n{\nscaleInfo.x=1.0-(scaledBorderWidth*scaleRatio);\nscaleInfo.y=1.0-scaledBorderWidth;\n}\nelse\n{\nscaleInfo.x=1.0-scaledBorderWidth;\nscaleInfo.y=1.0-(scaledBorderWidth*scaleRatio);\n}\n#endif\nvec4 worldPos=world*vec4(position,1.0);\n#ifdef HOVERLIGHT\nworldPosition=worldPos.xyz;\n#endif\ngl_Position=viewProjection*worldPos;\n}\n";s.Effect.ShadersStore.fluentVertexShader=ot;var st="precision highp float;\nvarying vec2 vUV;\nuniform vec4 albedoColor;\n#ifdef INNERGLOW\nuniform vec4 innerGlowColor;\n#endif\n#ifdef BORDER\nvarying vec2 scaleInfo;\nuniform float edgeSmoothingValue;\nuniform float borderMinValue;\n#endif\n#ifdef HOVERLIGHT\nvarying vec3 worldPosition;\nuniform vec3 hoverPosition;\nuniform vec4 hoverColor;\nuniform float hoverRadius;\n#endif\n#ifdef TEXTURE\nuniform sampler2D albedoSampler;\n#endif\nvoid main(void) {\nvec3 albedo=albedoColor.rgb;\nfloat alpha=albedoColor.a;\n#ifdef TEXTURE\nalbedo=texture2D(albedoSampler,vUV).rgb;\n#endif\n#ifdef HOVERLIGHT\nfloat pointToHover=(1.0-clamp(length(hoverPosition-worldPosition)/hoverRadius,0.,1.))*hoverColor.a;\nalbedo=clamp(albedo+hoverColor.rgb*pointToHover,0.,1.);\n#else\nfloat pointToHover=1.0;\n#endif\n#ifdef BORDER\nfloat borderPower=10.0;\nfloat inverseBorderPower=1.0/borderPower;\nvec3 borderColor=albedo*borderPower;\nvec2 distanceToEdge;\ndistanceToEdge.x=abs(vUV.x-0.5)*2.0;\ndistanceToEdge.y=abs(vUV.y-0.5)*2.0;\nfloat borderValue=max(smoothstep(scaleInfo.x-edgeSmoothingValue,scaleInfo.x+edgeSmoothingValue,distanceToEdge.x),\nsmoothstep(scaleInfo.y-edgeSmoothingValue,scaleInfo.y+edgeSmoothingValue,distanceToEdge.y));\nborderColor=borderColor*borderValue*max(borderMinValue*inverseBorderPower,pointToHover);\nalbedo+=borderColor;\nalpha=max(alpha,borderValue);\n#endif\n#ifdef INNERGLOW\n\nvec2 uvGlow=(vUV-vec2(0.5,0.5))*(innerGlowColor.a*2.0);\nuvGlow=uvGlow*uvGlow;\nuvGlow=uvGlow*uvGlow;\nalbedo+=mix(vec3(0.0,0.0,0.0),innerGlowColor.rgb,uvGlow.x+uvGlow.y);\n#endif\ngl_FragColor=vec4(albedo,alpha);\n}";s.Effect.ShadersStore.fluentPixelShader=st;var at=function(t){function e(){var e=t.call(this)||this;return e.INNERGLOW=!1,e.BORDER=!1,e.HOVERLIGHT=!1,e.TEXTURE=!1,e.rebuild(),e}return n(e,t),e}(s.MaterialDefines),ht=function(t){function e(e,i){var r=t.call(this,e,i)||this;return r.innerGlowColorIntensity=.5,r.innerGlowColor=new s.Color3(1,1,1),r.alpha=1,r.albedoColor=new s.Color3(.3,.35,.4),r.renderBorders=!1,r.borderWidth=.5,r.edgeSmoothingValue=.02,r.borderMinValue=.1,r.renderHoverLight=!1,r.hoverRadius=1,r.hoverColor=new s.Color4(.3,.3,.3,1),r.hoverPosition=s.Vector3.Zero(),r}return n(e,t),e.prototype.needAlphaBlending=function(){return 1!==this.alpha},e.prototype.needAlphaTesting=function(){return!1},e.prototype.getAlphaTestTexture=function(){return null},e.prototype.isReadyForSubMesh=function(t,e,i){if(this.isFrozen&&e.effect&&e.effect._wasPreviouslyReady)return!0;e._materialDefines||(e._materialDefines=new at);var r=this.getScene(),n=e._materialDefines;if(!this.checkReadyOnEveryCall&&e.effect&&n._renderId===r.getRenderId())return!0;if(n._areTexturesDirty)if(n.INNERGLOW=this.innerGlowColorIntensity>0,n.BORDER=this.renderBorders,n.HOVERLIGHT=this.renderHoverLight,this._albedoTexture){if(!this._albedoTexture.isReadyOrNotBlocking())return!1;n.TEXTURE=!0}else n.TEXTURE=!1;var o=r.getEngine();if(n.isDirty){n.markAsProcessed(),r.resetCachedMaterial();var a=[s.VertexBuffer.PositionKind];a.push(s.VertexBuffer.NormalKind),a.push(s.VertexBuffer.UVKind);var h=["world","viewProjection","innerGlowColor","albedoColor","borderWidth","edgeSmoothingValue","scaleFactor","borderMinValue","hoverColor","hoverPosition","hoverRadius"],l=["albedoSampler"],u=new Array;s.MaterialHelper.PrepareUniformsAndSamplersList({uniformsNames:h,uniformBuffersNames:u,samplers:l,defines:n,maxSimultaneousLights:4});var c=n.toString();e.setEffect(r.getEngine().createEffect("fluent",{attributes:a,uniformsNames:h,uniformBuffersNames:u,samplers:l,defines:c,fallbacks:null,onCompiled:this.onCompiled,onError:this.onError,indexParameters:{maxSimultaneousLights:4}},o))}return!(!e.effect||!e.effect.isReady())&&(n._renderId=r.getRenderId(),e.effect._wasPreviouslyReady=!0,!0)},e.prototype.bindForSubMesh=function(t,e,i){var r=this.getScene(),n=i._materialDefines;if(n){var o=i.effect;o&&(this._activeEffect=o,this.bindOnlyWorldMatrix(t),this._activeEffect.setMatrix("viewProjection",r.getTransformMatrix()),this._mustRebind(r,o)&&(this._activeEffect.setColor4("albedoColor",this.albedoColor,this.alpha),n.INNERGLOW&&this._activeEffect.setColor4("innerGlowColor",this.innerGlowColor,this.innerGlowColorIntensity),n.BORDER&&(this._activeEffect.setFloat("borderWidth",this.borderWidth),this._activeEffect.setFloat("edgeSmoothingValue",this.edgeSmoothingValue),this._activeEffect.setFloat("borderMinValue",this.borderMinValue),e.getBoundingInfo().boundingBox.extendSize.multiplyToRef(e.scaling,s.TmpVectors.Vector3[0]),this._activeEffect.setVector3("scaleFactor",s.TmpVectors.Vector3[0])),n.HOVERLIGHT&&(this._activeEffect.setDirectColor4("hoverColor",this.hoverColor),this._activeEffect.setFloat("hoverRadius",this.hoverRadius),this._activeEffect.setVector3("hoverPosition",this.hoverPosition)),n.TEXTURE&&this._activeEffect.setTexture("albedoSampler",this._albedoTexture)),this._afterBind(e,this._activeEffect))}},e.prototype.getActiveTextures=function(){return t.prototype.getActiveTextures.call(this)},e.prototype.hasTexture=function(e){return!!t.prototype.hasTexture.call(this,e)},e.prototype.dispose=function(e){t.prototype.dispose.call(this,e)},e.prototype.clone=function(t){var i=this;return s.SerializationHelper.Clone(function(){return new e(t,i.getScene())},this)},e.prototype.serialize=function(){var t=s.SerializationHelper.Serialize(this);return t.customType="BABYLON.GUI.FluentMaterial",t},e.prototype.getClassName=function(){return"FluentMaterial"},e.Parse=function(t,i,r){return s.SerializationHelper.Parse(function(){return new e(t.name,i)},t,i,r)},o([Object(s.serialize)(),Object(s.expandToProperty)("_markAllSubMeshesAsTexturesDirty")],e.prototype,"innerGlowColorIntensity",void 0),o([Object(s.serializeAsColor3)()],e.prototype,"innerGlowColor",void 0),o([Object(s.serialize)()],e.prototype,"alpha",void 0),o([Object(s.serializeAsColor3)()],e.prototype,"albedoColor",void 0),o([Object(s.serialize)(),Object(s.expandToProperty)("_markAllSubMeshesAsTexturesDirty")],e.prototype,"renderBorders",void 0),o([Object(s.serialize)()],e.prototype,"borderWidth",void 0),o([Object(s.serialize)()],e.prototype,"edgeSmoothingValue",void 0),o([Object(s.serialize)()],e.prototype,"borderMinValue",void 0),o([Object(s.serialize)(),Object(s.expandToProperty)("_markAllSubMeshesAsTexturesDirty")],e.prototype,"renderHoverLight",void 0),o([Object(s.serialize)()],e.prototype,"hoverRadius",void 0),o([Object(s.serializeAsColor4)()],e.prototype,"hoverColor",void 0),o([Object(s.serializeAsVector3)()],e.prototype,"hoverPosition",void 0),o([Object(s.serializeAsTexture)("albedoTexture")],e.prototype,"_albedoTexture",void 0),o([Object(s.expandToProperty)("_markAllSubMeshesAsTexturesAndMiscDirty")],e.prototype,"albedoTexture",void 0),e}(s.PushMaterial);s._TypeStore.RegisteredTypes["BABYLON.GUI.FluentMaterial"]=ht;var lt=function(t){function e(e,i){void 0===i&&(i=!0);var r=t.call(this,e)||this;return r._shareMaterials=!0,r._shareMaterials=i,r.pointerEnterAnimation=function(){r.mesh&&r._frontPlate.setEnabled(!0)},r.pointerOutAnimation=function(){r.mesh&&r._frontPlate.setEnabled(!1)},r}return n(e,t),e.prototype._disposeTooltip=function(){this._tooltipFade=null,this._tooltipTextBlock&&this._tooltipTextBlock.dispose(),this._tooltipTexture&&this._tooltipTexture.dispose(),this._tooltipMesh&&this._tooltipMesh.dispose(),this.onPointerEnterObservable.remove(this._tooltipHoverObserver),this.onPointerOutObservable.remove(this._tooltipOutObserver)},Object.defineProperty(e.prototype,"renderingGroupId",{get:function(){return this._backPlate.renderingGroupId},set:function(t){this._backPlate.renderingGroupId=t,this._textPlate.renderingGroupId=t,this._frontPlate.renderingGroupId=t,this._tooltipMesh&&(this._tooltipMesh.renderingGroupId=t)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"tooltipText",{get:function(){return this._tooltipTextBlock?this._tooltipTextBlock.text:null},set:function(t){var e=this;if(t){if(!this._tooltipFade){this._tooltipMesh=s.PlaneBuilder.CreatePlane("",{size:1},this._backPlate._scene);var i=s.PlaneBuilder.CreatePlane("",{size:1,sideOrientation:s.Mesh.DOUBLESIDE},this._backPlate._scene),r=new s.StandardMaterial("",this._backPlate._scene);r.diffuseColor=s.Color3.FromHexString("#212121"),i.material=r,i.isPickable=!1,this._tooltipMesh.addChild(i),i.position.z=.05,this._tooltipMesh.scaling.y=1/3,this._tooltipMesh.position.y=.7,this._tooltipMesh.position.z=-.15,this._tooltipMesh.isPickable=!1,this._tooltipMesh.parent=this._backPlate,this._tooltipTexture=K.CreateForMesh(this._tooltipMesh),this._tooltipTextBlock=new y,this._tooltipTextBlock.scaleY=3,this._tooltipTextBlock.color="white",this._tooltipTextBlock.fontSize=130,this._tooltipTexture.addControl(this._tooltipTextBlock),this._tooltipFade=new s.FadeInOutBehavior,this._tooltipFade.delay=500,this._tooltipMesh.addBehavior(this._tooltipFade),this._tooltipHoverObserver=this.onPointerEnterObservable.add(function(){e._tooltipFade&&e._tooltipFade.fadeIn(!0)}),this._tooltipOutObserver=this.onPointerOutObservable.add(function(){e._tooltipFade&&e._tooltipFade.fadeIn(!1)})}this._tooltipTextBlock&&(this._tooltipTextBlock.text=t)}else this._disposeTooltip()},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"text",{get:function(){return this._text},set:function(t){this._text!==t&&(this._text=t,this._rebuildContent())},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"imageUrl",{get:function(){return this._imageUrl},set:function(t){this._imageUrl!==t&&(this._imageUrl=t,this._rebuildContent())},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"backMaterial",{get:function(){return this._backMaterial},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"frontMaterial",{get:function(){return this._frontMaterial},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"plateMaterial",{get:function(){return this._plateMaterial},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"shareMaterials",{get:function(){return this._shareMaterials},enumerable:!0,configurable:!0}),e.prototype._getTypeName=function(){return"HolographicButton"},e.prototype._rebuildContent=function(){this._disposeFacadeTexture();var t=new C;if(t.isVertical=!0,this._imageUrl){var e=new v;e.source=this._imageUrl,e.paddingTop="40px",e.height="180px",e.width="100px",e.paddingBottom="40px",t.addControl(e)}if(this._text){var i=new y;i.text=this._text,i.color="white",i.height="30px",i.fontSize=24,t.addControl(i)}this._frontPlate&&(this.content=t)},e.prototype._createNode=function(e){return this._backPlate=s.BoxBuilder.CreateBox(this.name+"BackMesh",{width:1,height:1,depth:.08},e),this._frontPlate=s.BoxBuilder.CreateBox(this.name+"FrontMesh",{width:1,height:1,depth:.08},e),this._frontPlate.parent=this._backPlate,this._frontPlate.position.z=-.08,this._frontPlate.isPickable=!1,this._frontPlate.setEnabled(!1),this._textPlate=t.prototype._createNode.call(this,e),this._textPlate.parent=this._backPlate,this._textPlate.position.z=-.08,this._textPlate.isPickable=!1,this._backPlate},e.prototype._applyFacade=function(t){this._plateMaterial.emissiveTexture=t,this._plateMaterial.opacityTexture=t},e.prototype._createBackMaterial=function(t){var e=this;this._backMaterial=new ht(this.name+"Back Material",t.getScene()),this._backMaterial.renderHoverLight=!0,this._pickedPointObserver=this._host.onPickedPointChangedObservable.add(function(t){t?(e._backMaterial.hoverPosition=t,e._backMaterial.hoverColor.a=1):e._backMaterial.hoverColor.a=0})},e.prototype._createFrontMaterial=function(t){this._frontMaterial=new ht(this.name+"Front Material",t.getScene()),this._frontMaterial.innerGlowColorIntensity=0,this._frontMaterial.alpha=.5,this._frontMaterial.renderBorders=!0},e.prototype._createPlateMaterial=function(t){this._plateMaterial=new s.StandardMaterial(this.name+"Plate Material",t.getScene()),this._plateMaterial.specularColor=s.Color3.Black()},e.prototype._affectMaterial=function(t){this._shareMaterials?(this._host._sharedMaterials.backFluentMaterial?this._backMaterial=this._host._sharedMaterials.backFluentMaterial:(this._createBackMaterial(t),this._host._sharedMaterials.backFluentMaterial=this._backMaterial),this._host._sharedMaterials.frontFluentMaterial?this._frontMaterial=this._host._sharedMaterials.frontFluentMaterial:(this._createFrontMaterial(t),this._host._sharedMaterials.frontFluentMaterial=this._frontMaterial)):(this._createBackMaterial(t),this._createFrontMaterial(t)),this._createPlateMaterial(t),this._backPlate.material=this._backMaterial,this._frontPlate.material=this._frontMaterial,this._textPlate.material=this._plateMaterial,this._rebuildContent()},e.prototype.dispose=function(){t.prototype.dispose.call(this),this._disposeTooltip(),this.shareMaterials||(this._backMaterial.dispose(),this._frontMaterial.dispose(),this._plateMaterial.dispose(),this._pickedPointObserver&&(this._host.onPickedPointChangedObservable.remove(this._pickedPointObserver),this._pickedPointObserver=null))},e}(et),ut=function(t){function e(e,i){var r=t.call(this,i)||this;return r._currentMesh=e,r.pointerEnterAnimation=function(){r.mesh&&r.mesh.scaling.scaleInPlace(1.1)},r.pointerOutAnimation=function(){r.mesh&&r.mesh.scaling.scaleInPlace(1/1.1)},r.pointerDownAnimation=function(){r.mesh&&r.mesh.scaling.scaleInPlace(.95)},r.pointerUpAnimation=function(){r.mesh&&r.mesh.scaling.scaleInPlace(1/.95)},r}return n(e,t),e.prototype._getTypeName=function(){return"MeshButton3D"},e.prototype._createNode=function(t){var e=this;return this._currentMesh.getChildMeshes().forEach(function(t){t.metadata=e}),this._currentMesh},e.prototype._affectMaterial=function(t){},e}(et),ct=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return n(e,t),e.prototype._mapGridNode=function(t,e){var i=t.mesh;if(i){t.position=e.clone();var r=s.TmpVectors.Vector3[0];switch(r.copyFrom(e),this.orientation){case it.FACEORIGIN_ORIENTATION:case it.FACEFORWARD_ORIENTATION:r.addInPlace(new s.Vector3(0,0,1)),i.lookAt(r);break;case it.FACEFORWARDREVERSED_ORIENTATION:case it.FACEORIGINREVERSED_ORIENTATION:r.addInPlace(new s.Vector3(0,0,-1)),i.lookAt(r)}}},e}(rt),_t=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e._iteration=100,e}return n(e,t),Object.defineProperty(e.prototype,"iteration",{get:function(){return this._iteration},set:function(t){var e=this;this._iteration!==t&&(this._iteration=t,s.Tools.SetImmediate(function(){e._arrangeChildren()}))},enumerable:!0,configurable:!0}),e.prototype._mapGridNode=function(t,e){var i=t.mesh,r=this._scatterMapping(e);if(i){switch(this.orientation){case it.FACEORIGIN_ORIENTATION:case it.FACEFORWARD_ORIENTATION:i.lookAt(new s.Vector3(0,0,1));break;case it.FACEFORWARDREVERSED_ORIENTATION:case it.FACEORIGINREVERSED_ORIENTATION:i.lookAt(new s.Vector3(0,0,-1))}t.position=r}},e.prototype._scatterMapping=function(t){return t.x=(1-2*Math.random())*this._cellWidth,t.y=(1-2*Math.random())*this._cellHeight,t},e.prototype._finalProcessing=function(){for(var t=[],e=0,i=this._children;e<i.length;e++){var r=i[e];r.mesh&&t.push(r.mesh)}for(var n=0;n<this._iteration;n++){t.sort(function(t,e){var i=t.position.lengthSquared(),r=e.position.lengthSquared();return i<r?1:i>r?-1:0});for(var o=Math.pow(this.margin,2),a=Math.max(this._cellWidth,this._cellHeight),h=s.TmpVectors.Vector2[0],l=s.TmpVectors.Vector3[0],u=0;u<t.length-1;u++)for(var c=u+1;c<t.length;c++)if(u!=c){t[c].position.subtractToRef(t[u].position,l),h.x=l.x,h.y=l.y;var _=a,d=h.lengthSquared()-o;(d-=Math.min(d,o))<Math.pow(_,2)&&(h.normalize(),l.scaleInPlace(.5*(_-Math.sqrt(d))),t[c].position.addInPlace(l),t[u].position.subtractInPlace(l))}}},e}(rt),dt=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e._radius=5,e}return n(e,t),Object.defineProperty(e.prototype,"radius",{get:function(){return this._radius},set:function(t){var e=this;this._radius!==t&&(this._radius=t,s.Tools.SetImmediate(function(){e._arrangeChildren()}))},enumerable:!0,configurable:!0}),e.prototype._mapGridNode=function(t,e){var i=t.mesh;if(i){var r=this._sphericalMapping(e);switch(t.position=r,this.orientation){case it.FACEORIGIN_ORIENTATION:i.lookAt(new s.Vector3(2*r.x,2*r.y,2*r.z));break;case it.FACEORIGINREVERSED_ORIENTATION:i.lookAt(new s.Vector3(-r.x,-r.y,-r.z));break;case it.FACEFORWARD_ORIENTATION:break;case it.FACEFORWARDREVERSED_ORIENTATION:i.rotate(s.Axis.Y,Math.PI,s.Space.LOCAL)}}},e.prototype._sphericalMapping=function(t){var e=new s.Vector3(0,0,this._radius),i=t.y/this._radius,r=-t.x/this._radius;return s.Matrix.RotationYawPitchRollToRef(r,i,0,s.TmpVectors.Matrix[0]),s.Vector3.TransformNormal(e,s.TmpVectors.Matrix[0])},e}(rt),ft=function(t){function e(e){void 0===e&&(e=!1);var i=t.call(this)||this;return i._isVertical=!1,i.margin=.1,i._isVertical=e,i}return n(e,t),Object.defineProperty(e.prototype,"isVertical",{get:function(){return this._isVertical},set:function(t){var e=this;this._isVertical!==t&&(this._isVertical=t,s.Tools.SetImmediate(function(){e._arrangeChildren()}))},enumerable:!0,configurable:!0}),e.prototype._arrangeChildren=function(){for(var t,e=0,i=0,r=0,n=[],o=s.Matrix.Invert(this.node.computeWorldMatrix(!0)),a=0,h=this._children;a<h.length;a++){if((f=h[a]).mesh){r++,f.mesh.computeWorldMatrix(!0),f.mesh.getWorldMatrix().multiplyToRef(o,s.TmpVectors.Matrix[0]);var l=f.mesh.getBoundingInfo().boundingBox,u=s.Vector3.TransformNormal(l.extendSize,s.TmpVectors.Matrix[0]);n.push(u),this._isVertical?i+=u.y:e+=u.x}}this._isVertical?i+=(r-1)*this.margin/2:e+=(r-1)*this.margin/2,t=this._isVertical?-i:-e;for(var c=0,_=0,d=this._children;_<d.length;_++){var f;if((f=d[_]).mesh){r--;u=n[c++];this._isVertical?(f.position.y=t+u.y,f.position.x=0,t+=2*u.y):(f.position.x=t+u.x,f.position.y=0,t+=2*u.x),t+=r>0?this.margin:0}}},e}(it),pt=function(){function t(t){var e=this;this._lastControlOver={},this._lastControlDown={},this.onPickedPointChangedObservable=new s.Observable,this._sharedMaterials={},this._scene=t||s.EngineStore.LastCreatedScene,this._sceneDisposeObserver=this._scene.onDisposeObservable.add(function(){e._sceneDisposeObserver=null,e._utilityLayer=null,e.dispose()}),this._utilityLayer=new s.UtilityLayerRenderer(this._scene),this._utilityLayer.onlyCheckPointerDownEvents=!1,this._utilityLayer.pickUtilitySceneFirst=!1,this._utilityLayer.mainSceneTrackerPredicate=function(t){return t&&t.metadata&&t.metadata._node},this._rootContainer=new it("RootContainer"),this._rootContainer._host=this;var i=this._utilityLayer.utilityLayerScene;this._pointerOutObserver=this._utilityLayer.onPointerOutObservable.add(function(t){e._handlePointerOut(t,!0)}),this._pointerObserver=i.onPointerObservable.add(function(t,i){e._doPicking(t)}),this._utilityLayer.utilityLayerScene.autoClear=!1,this._utilityLayer.utilityLayerScene.autoClearDepthAndStencil=!1,new s.HemisphericLight("hemi",s.Vector3.Up(),this._utilityLayer.utilityLayerScene)}return Object.defineProperty(t.prototype,"scene",{get:function(){return this._scene},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"utilityLayer",{get:function(){return this._utilityLayer},enumerable:!0,configurable:!0}),t.prototype._handlePointerOut=function(t,e){var i=this._lastControlOver[t];i&&(i._onPointerOut(i),delete this._lastControlOver[t]),e&&this._lastControlDown[t]&&(this._lastControlDown[t].forcePointerUp(),delete this._lastControlDown[t]),this.onPickedPointChangedObservable.notifyObservers(null)},t.prototype._doPicking=function(t){if(!this._utilityLayer||!this._utilityLayer.shouldRender||!this._utilityLayer.utilityLayerScene.activeCamera)return!1;var e=t.event,i=e.pointerId||0,r=e.button,n=t.pickInfo;if(!n||!n.hit)return this._handlePointerOut(i,t.type===s.PointerEventTypes.POINTERUP),!1;var o=n.pickedMesh.metadata;return n.pickedPoint&&this.onPickedPointChangedObservable.notifyObservers(n.pickedPoint),o._processObservables(t.type,n.pickedPoint,i,r)||t.type===s.PointerEventTypes.POINTERMOVE&&(this._lastControlOver[i]&&this._lastControlOver[i]._onPointerOut(this._lastControlOver[i]),delete this._lastControlOver[i]),t.type===s.PointerEventTypes.POINTERUP&&(this._lastControlDown[e.pointerId]&&(this._lastControlDown[e.pointerId].forcePointerUp(),delete this._lastControlDown[e.pointerId]),"touch"===e.pointerType&&this._handlePointerOut(i,!1)),!0},Object.defineProperty(t.prototype,"rootContainer",{get:function(){return this._rootContainer},enumerable:!0,configurable:!0}),t.prototype.containsControl=function(t){return this._rootContainer.containsControl(t)},t.prototype.addControl=function(t){return this._rootContainer.addControl(t),this},t.prototype.removeControl=function(t){return this._rootContainer.removeControl(t),this},t.prototype.dispose=function(){for(var t in this._rootContainer.dispose(),this._sharedMaterials)this._sharedMaterials.hasOwnProperty(t)&&this._sharedMaterials[t].dispose();this._sharedMaterials={},this._pointerOutObserver&&this._utilityLayer&&(this._utilityLayer.onPointerOutObservable.remove(this._pointerOutObserver),this._pointerOutObserver=null),this.onPickedPointChangedObservable.clear();var e=this._utilityLayer?this._utilityLayer.utilityLayerScene:null;e&&this._pointerObserver&&(e.onPointerObservable.remove(this._pointerObserver),this._pointerObserver=null),this._scene&&this._sceneDisposeObserver&&(this._scene.onDisposeObservable.remove(this._sceneDisposeObserver),this._sceneDisposeObserver=null),this._utilityLayer&&this._utilityLayer.dispose()},t}();i.d(e,"AdvancedDynamicTexture",function(){return K}),i.d(e,"AdvancedDynamicTextureInstrumentation",function(){return Z}),i.d(e,"Vector2WithInfo",function(){return d}),i.d(e,"Matrix2D",function(){return f}),i.d(e,"Measure",function(){return _}),i.d(e,"MultiLinePoint",function(){return A}),i.d(e,"Style",function(){return q}),i.d(e,"ValueAndUnit",function(){return a}),i.d(e,"XmlLoader",function(){return J}),i.d(e,"Button",function(){return O}),i.d(e,"Checkbox",function(){return w}),i.d(e,"ColorPicker",function(){return M}),i.d(e,"Container",function(){return g}),i.d(e,"Control",function(){return p}),i.d(e,"Ellipse",function(){return P}),i.d(e,"Grid",function(){return x}),i.d(e,"Image",function(){return v}),i.d(e,"InputText",function(){return T}),i.d(e,"InputPassword",function(){return k}),i.d(e,"Line",function(){return I}),i.d(e,"MultiLine",function(){return S}),i.d(e,"RadioButton",function(){return E}),i.d(e,"StackPanel",function(){return C}),i.d(e,"SelectorGroup",function(){return D}),i.d(e,"CheckboxGroup",function(){return B}),i.d(e,"RadioGroup",function(){return N}),i.d(e,"SliderGroup",function(){return V}),i.d(e,"SelectionPanel",function(){return H}),i.d(e,"ScrollViewer",function(){return z}),i.d(e,"TextWrapping",function(){return b}),i.d(e,"TextBlock",function(){return y}),i.d(e,"KeyPropertySet",function(){return G}),i.d(e,"VirtualKeyboard",function(){return X}),i.d(e,"Rectangle",function(){return m}),i.d(e,"DisplayGrid",function(){return Y}),i.d(e,"BaseSlider",function(){return L}),i.d(e,"Slider",function(){return R}),i.d(e,"ImageBasedSlider",function(){return U}),i.d(e,"ScrollBar",function(){return j}),i.d(e,"ImageScrollBar",function(){return W}),i.d(e,"name",function(){return"Statics"}),i.d(e,"GUI3DManager",function(){return pt}),i.d(e,"Vector3WithInfo",function(){return Q}),i.d(e,"AbstractButton3D",function(){return tt}),i.d(e,"Button3D",function(){return et}),i.d(e,"Container3D",function(){return it}),i.d(e,"Control3D",function(){return $}),i.d(e,"CylinderPanel",function(){return nt}),i.d(e,"HolographicButton",function(){return lt}),i.d(e,"MeshButton3D",function(){return ut}),i.d(e,"PlanePanel",function(){return ct}),i.d(e,"ScatterPanel",function(){return _t}),i.d(e,"SpherePanel",function(){return dt}),i.d(e,"StackPanel3D",function(){return ft}),i.d(e,"VolumeBasedPanel",function(){return rt}),i.d(e,"FluentMaterialDefines",function(){return at}),i.d(e,"FluentMaterial",function(){return ht})},function(t,e,i){"use strict";i.r(e),function(t){var r=i(1);i.d(e,"AdvancedDynamicTexture",function(){return r.AdvancedDynamicTexture}),i.d(e,"AdvancedDynamicTextureInstrumentation",function(){return r.AdvancedDynamicTextureInstrumentation}),i.d(e,"Vector2WithInfo",function(){return r.Vector2WithInfo}),i.d(e,"Matrix2D",function(){return r.Matrix2D}),i.d(e,"Measure",function(){return r.Measure}),i.d(e,"MultiLinePoint",function(){return r.MultiLinePoint}),i.d(e,"Style",function(){return r.Style}),i.d(e,"ValueAndUnit",function(){return r.ValueAndUnit}),i.d(e,"XmlLoader",function(){return r.XmlLoader}),i.d(e,"GUI3DManager",function(){return r.GUI3DManager}),i.d(e,"Vector3WithInfo",function(){return r.Vector3WithInfo}),i.d(e,"Button",function(){return r.Button}),i.d(e,"Checkbox",function(){return r.Checkbox}),i.d(e,"ColorPicker",function(){return r.ColorPicker}),i.d(e,"Container",function(){return r.Container}),i.d(e,"Control",function(){return r.Control}),i.d(e,"Ellipse",function(){return r.Ellipse}),i.d(e,"Grid",function(){return r.Grid}),i.d(e,"Image",function(){return r.Image}),i.d(e,"InputText",function(){return r.InputText}),i.d(e,"InputPassword",function(){return r.InputPassword}),i.d(e,"Line",function(){return r.Line}),i.d(e,"MultiLine",function(){return r.MultiLine}),i.d(e,"RadioButton",function(){return r.RadioButton}),i.d(e,"StackPanel",function(){return r.StackPanel}),i.d(e,"SelectorGroup",function(){return r.SelectorGroup}),i.d(e,"CheckboxGroup",function(){return r.CheckboxGroup}),i.d(e,"RadioGroup",function(){return r.RadioGroup}),i.d(e,"SliderGroup",function(){return r.SliderGroup}),i.d(e,"SelectionPanel",function(){return r.SelectionPanel}),i.d(e,"ScrollViewer",function(){return r.ScrollViewer}),i.d(e,"TextWrapping",function(){return r.TextWrapping}),i.d(e,"TextBlock",function(){return r.TextBlock}),i.d(e,"KeyPropertySet",function(){return r.KeyPropertySet}),i.d(e,"VirtualKeyboard",function(){return r.VirtualKeyboard}),i.d(e,"Rectangle",function(){return r.Rectangle}),i.d(e,"DisplayGrid",function(){return r.DisplayGrid}),i.d(e,"BaseSlider",function(){return r.BaseSlider}),i.d(e,"Slider",function(){return r.Slider}),i.d(e,"ImageBasedSlider",function(){return r.ImageBasedSlider}),i.d(e,"ScrollBar",function(){return r.ScrollBar}),i.d(e,"ImageScrollBar",function(){return r.ImageScrollBar}),i.d(e,"name",function(){return r.name}),i.d(e,"AbstractButton3D",function(){return r.AbstractButton3D}),i.d(e,"Button3D",function(){return r.Button3D}),i.d(e,"Container3D",function(){return r.Container3D}),i.d(e,"Control3D",function(){return r.Control3D}),i.d(e,"CylinderPanel",function(){return r.CylinderPanel}),i.d(e,"HolographicButton",function(){return r.HolographicButton}),i.d(e,"MeshButton3D",function(){return r.MeshButton3D}),i.d(e,"PlanePanel",function(){return r.PlanePanel}),i.d(e,"ScatterPanel",function(){return r.ScatterPanel}),i.d(e,"SpherePanel",function(){return r.SpherePanel}),i.d(e,"StackPanel3D",function(){return r.StackPanel3D}),i.d(e,"VolumeBasedPanel",function(){return r.VolumeBasedPanel}),i.d(e,"FluentMaterialDefines",function(){return r.FluentMaterialDefines}),i.d(e,"FluentMaterial",function(){return r.FluentMaterial});var n=void 0!==t?t:"undefined"!=typeof window?window:void 0;void 0!==n&&(n.BABYLON=n.BABYLON||{},n.BABYLON.GUI=r)}.call(this,i(3))},function(t,e){var i;i=function(){return this}();try{i=i||new Function("return this")()}catch(t){"object"==typeof window&&(i=window)}t.exports=i}])});
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"babylonjs":4}],2:[function(require,module,exports){
(function (global){
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("babylonjs")):"function"==typeof define&&define.amd?define("babylonjs-loaders",["babylonjs"],t):"object"==typeof exports?exports["babylonjs-loaders"]=t(require("babylonjs")):e.LOADERS=t(e.BABYLON)}("undefined"!=typeof self?self:"undefined"!=typeof global?global:this,function(e){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=19)}([function(t,n){t.exports=e},function(e,t,n){"use strict";n.d(t,"a",function(){return a}),n.d(t,"b",function(){return i});var r=n(0),o=n(2),a=function(){function e(){}return e.Get=function(e,t,n){if(!t||null==n||!t[n])throw new Error(e+": Failed to find index ("+n+")");return t[n]},e.Assign=function(e){if(e)for(var t=0;t<e.length;t++)e[t].index=t},e}(),i=function(){function e(e){this._completePromises=new Array,this._forAssetContainer=!1,this._babylonLights=[],this._disposed=!1,this._state=null,this._extensions=new Array,this._defaultBabylonMaterialData={},this._requests=new Array,this._parent=e}return e.RegisterExtension=function(t,n){e.UnregisterExtension(t)&&r.Logger.Warn("Extension with the name '"+t+"' already exists"),e._RegisteredExtensions[t]={factory:n}},e.UnregisterExtension=function(t){return!!e._RegisteredExtensions[t]&&(delete e._RegisteredExtensions[t],!0)},Object.defineProperty(e.prototype,"state",{get:function(){return this._state},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"gltf",{get:function(){return this._gltf},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"bin",{get:function(){return this._bin},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"parent",{get:function(){return this._parent},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"babylonScene",{get:function(){return this._babylonScene},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"rootBabylonMesh",{get:function(){return this._rootBabylonMesh},enumerable:!0,configurable:!0}),e.prototype.dispose=function(){if(!this._disposed){this._disposed=!0;for(var e=0,t=this._requests;e<t.length;e++){t[e].abort()}for(var n in this._requests.length=0,this._completePromises.length=0,this._extensions){var r=this._extensions[n];r.dispose&&r.dispose(),delete this._extensions[n]}delete this._gltf,delete this._babylonScene,delete this._rootBabylonMesh,delete this._progressCallback,this._parent._clear()}},e.prototype.importMeshAsync=function(e,t,n,r,o,a,i){var s=this;return Promise.resolve().then(function(){s._babylonScene=t,s._rootUrl=o,s._fileName=i||"scene",s._progressCallback=a,s._forAssetContainer=n,s._loadData(r);var l=null;if(e){var u={};if(s._gltf.nodes)for(var c=0,f=s._gltf.nodes;c<f.length;c++){var d=f[c];d.name&&(u[d.name]=d.index)}l=(e instanceof Array?e:[e]).map(function(e){var t=u[e];if(void 0===t)throw new Error("Failed to find node '"+e+"'");return t})}return s._loadAsync(l,function(){return{meshes:s._getMeshes(),particleSystems:[],skeletons:s._getSkeletons(),animationGroups:s._getAnimationGroups(),lights:s._babylonLights,transformNodes:s._getTransformNodes()}})})},e.prototype.loadAsync=function(e,t,n,r,o){var a=this;return Promise.resolve().then(function(){return a._babylonScene=e,a._rootUrl=n,a._fileName=o||"scene",a._progressCallback=r,a._loadData(t),a._loadAsync(null,function(){})})},e.prototype._loadAsync=function(e,t){var n=this;return Promise.resolve().then(function(){n._uniqueRootUrl=-1===n._rootUrl.indexOf("file:")&&n._fileName?n._rootUrl:""+n._rootUrl+Date.now()+"/",n._loadExtensions(),n._checkExtensions();var i=o.GLTFLoaderState[o.GLTFLoaderState.LOADING]+" => "+o.GLTFLoaderState[o.GLTFLoaderState.READY],s=o.GLTFLoaderState[o.GLTFLoaderState.LOADING]+" => "+o.GLTFLoaderState[o.GLTFLoaderState.COMPLETE];n._parent._startPerformanceCounter(i),n._parent._startPerformanceCounter(s),n._setState(o.GLTFLoaderState.LOADING),n._extensionsOnLoading();var l=new Array,u=n._babylonScene.blockMaterialDirtyMechanism;if(n._babylonScene.blockMaterialDirtyMechanism=!0,e)l.push(n.loadSceneAsync("/nodes",{nodes:e,index:-1}));else if(null!=n._gltf.scene||n._gltf.scenes&&n._gltf.scenes[0]){var c=a.Get("/scene",n._gltf.scenes,n._gltf.scene||0);l.push(n.loadSceneAsync("/scenes/"+c.index,c))}n._babylonScene.blockMaterialDirtyMechanism=u,n._parent.compileMaterials&&l.push(n._compileMaterialsAsync()),n._parent.compileShadowGenerators&&l.push(n._compileShadowGeneratorsAsync());var f=Promise.all(l).then(function(){return n._rootBabylonMesh&&n._rootBabylonMesh.setEnabled(!0),n._setState(o.GLTFLoaderState.READY),n._extensionsOnReady(),n._startAnimations(),t()});return f.then(function(){n._parent._endPerformanceCounter(i),r.Tools.SetImmediate(function(){n._disposed||Promise.all(n._completePromises).then(function(){n._parent._endPerformanceCounter(s),n._setState(o.GLTFLoaderState.COMPLETE),n._parent.onCompleteObservable.notifyObservers(void 0),n._parent.onCompleteObservable.clear(),n.dispose()},function(e){n._parent.onErrorObservable.notifyObservers(e),n._parent.onErrorObservable.clear(),n.dispose()})})}),f},function(e){throw n._disposed||(n._parent.onErrorObservable.notifyObservers(e),n._parent.onErrorObservable.clear(),n.dispose()),e})},e.prototype._loadData=function(e){if(this._gltf=e.json,this._setupData(),e.bin){var t=this._gltf.buffers;if(t&&t[0]&&!t[0].uri){var n=t[0];(n.byteLength<e.bin.byteLength-3||n.byteLength>e.bin.byteLength)&&r.Logger.Warn("Binary buffer length ("+n.byteLength+") from JSON does not match chunk length ("+e.bin.byteLength+")"),this._bin=e.bin}else r.Logger.Warn("Unexpected BIN chunk")}},e.prototype._setupData=function(){if(a.Assign(this._gltf.accessors),a.Assign(this._gltf.animations),a.Assign(this._gltf.buffers),a.Assign(this._gltf.bufferViews),a.Assign(this._gltf.cameras),a.Assign(this._gltf.images),a.Assign(this._gltf.materials),a.Assign(this._gltf.meshes),a.Assign(this._gltf.nodes),a.Assign(this._gltf.samplers),a.Assign(this._gltf.scenes),a.Assign(this._gltf.skins),a.Assign(this._gltf.textures),this._gltf.nodes){for(var e={},t=0,n=this._gltf.nodes;t<n.length;t++){if((u=n[t]).children)for(var r=0,o=u.children;r<o.length;r++){e[o[r]]=u.index}}for(var i=this._createRootNode(),s=0,l=this._gltf.nodes;s<l.length;s++){var u,c=e[(u=l[s]).index];u.parent=void 0===c?i:this._gltf.nodes[c]}}},e.prototype._loadExtensions=function(){for(var t in e._RegisteredExtensions){var n=e._RegisteredExtensions[t].factory(this);n.name!==t&&r.Logger.Warn("The name of the glTF loader extension instance does not match the registered name: "+n.name+" !== "+t),this._extensions.push(n),this._parent.onExtensionLoadedObservable.notifyObservers(n)}this._extensions.sort(function(e,t){return(e.order||Number.MAX_VALUE)-(t.order||Number.MAX_VALUE)}),this._parent.onExtensionLoadedObservable.clear()},e.prototype._checkExtensions=function(){if(this._gltf.extensionsRequired)for(var e=function(e){if(!t._extensions.some(function(t){return t.name===e&&t.enabled}))throw new Error("Require extension "+e+" is not available")},t=this,n=0,r=this._gltf.extensionsRequired;n<r.length;n++){e(r[n])}},e.prototype._setState=function(e){this._state=e,this.log(o.GLTFLoaderState[this._state])},e.prototype._createRootNode=function(){this._babylonScene._blockEntityCollection=this._forAssetContainer,this._rootBabylonMesh=new r.Mesh("__root__",this._babylonScene),this._babylonScene._blockEntityCollection=!1,this._rootBabylonMesh.setEnabled(!1);var t={_babylonTransformNode:this._rootBabylonMesh,index:-1};switch(this._parent.coordinateSystemMode){case o.GLTFLoaderCoordinateSystemMode.AUTO:this._babylonScene.useRightHandedSystem||(t.rotation=[0,1,0,0],t.scale=[1,1,-1],e._LoadTransform(t,this._rootBabylonMesh));break;case o.GLTFLoaderCoordinateSystemMode.FORCE_RIGHT_HANDED:this._babylonScene.useRightHandedSystem=!0;break;default:throw new Error("Invalid coordinate system mode ("+this._parent.coordinateSystemMode+")")}return this._parent.onMeshLoadedObservable.notifyObservers(this._rootBabylonMesh),t},e.prototype.loadSceneAsync=function(e,t){var n=this,r=this._extensionsLoadSceneAsync(e,t);if(r)return r;var o=new Array;if(this.logOpen(e+" "+(t.name||"")),t.nodes)for(var i=0,s=t.nodes;i<s.length;i++){var l=s[i],u=a.Get(e+"/nodes/"+l,this._gltf.nodes,l);o.push(this.loadNodeAsync("/nodes/"+u.index,u,function(e){e.parent=n._rootBabylonMesh}))}if(this._gltf.nodes)for(var c=0,f=this._gltf.nodes;c<f.length;c++){if((u=f[c])._babylonTransformNode&&u._babylonBones)for(var d=0,h=u._babylonBones;d<h.length;d++){h[d].linkTransformNode(u._babylonTransformNode)}}return o.push(this._loadAnimationsAsync()),this.logClose(),Promise.all(o).then(function(){})},e.prototype._forEachPrimitive=function(e,t){if(e._primitiveBabylonMeshes)for(var n=0,r=e._primitiveBabylonMeshes;n<r.length;n++){t(r[n])}},e.prototype._getMeshes=function(){var e=new Array;e.push(this._rootBabylonMesh);var t=this._gltf.nodes;if(t)for(var n=0,r=t;n<r.length;n++){var o=r[n];this._forEachPrimitive(o,function(t){e.push(t)})}return e},e.prototype._getTransformNodes=function(){var e=new Array,t=this._gltf.nodes;if(t)for(var n=0,r=t;n<r.length;n++){var o=r[n];o._babylonTransformNode&&"TransformNode"===o._babylonTransformNode.getClassName()&&e.push(o._babylonTransformNode)}return e},e.prototype._getSkeletons=function(){var e=new Array,t=this._gltf.skins;if(t)for(var n=0,r=t;n<r.length;n++){var o=r[n];o._data&&e.push(o._data.babylonSkeleton)}return e},e.prototype._getAnimationGroups=function(){var e=new Array,t=this._gltf.animations;if(t)for(var n=0,r=t;n<r.length;n++){var o=r[n];o._babylonAnimationGroup&&e.push(o._babylonAnimationGroup)}return e},e.prototype._startAnimations=function(){switch(this._parent.animationStartMode){case o.GLTFLoaderAnimationStartMode.NONE:break;case o.GLTFLoaderAnimationStartMode.FIRST:0!==(e=this._getAnimationGroups()).length&&e[0].start(!0);break;case o.GLTFLoaderAnimationStartMode.ALL:for(var e,t=0,n=e=this._getAnimationGroups();t<n.length;t++){n[t].start(!0)}break;default:return void r.Logger.Error("Invalid animation start mode ("+this._parent.animationStartMode+")")}},e.prototype.loadNodeAsync=function(t,n,o){var i=this;void 0===o&&(o=function(){});var s=this._extensionsLoadNodeAsync(t,n,o);if(s)return s;if(n._babylonTransformNode)throw new Error(t+": Invalid recursive node hierarchy");var l=new Array;this.logOpen(t+" "+(n.name||""));var u=function(r){if(e.AddPointerMetadata(r,t),e._LoadTransform(n,r),null!=n.camera){var s=a.Get(t+"/camera",i._gltf.cameras,n.camera);l.push(i.loadCameraAsync("/cameras/"+s.index,s,function(e){e.parent=r}))}if(n.children)for(var u=0,c=n.children;u<c.length;u++){var f=c[u],d=a.Get(t+"/children/"+f,i._gltf.nodes,f);l.push(i.loadNodeAsync("/nodes/"+d.index,d,function(e){e.parent=r}))}o(r)};if(null==n.mesh){var c=n.name||"node"+n.index;this._babylonScene._blockEntityCollection=this._forAssetContainer,n._babylonTransformNode=new r.TransformNode(c,this._babylonScene),this._babylonScene._blockEntityCollection=!1,u(n._babylonTransformNode)}else{var f=a.Get(t+"/mesh",this._gltf.meshes,n.mesh);l.push(this._loadMeshAsync("/meshes/"+f.index,n,f,u))}return this.logClose(),Promise.all(l).then(function(){return i._forEachPrimitive(n,function(e){e.refreshBoundingInfo(!0)}),n._babylonTransformNode})},e.prototype._loadMeshAsync=function(e,t,n,o){var i=n.primitives;if(!i||!i.length)throw new Error(e+": Primitives are missing");null==i[0].index&&a.Assign(i);var s=new Array;this.logOpen(e+" "+(n.name||""));var l=t.name||"node"+t.index;if(1===i.length){var u=n.primitives[0];s.push(this._loadMeshPrimitiveAsync(e+"/primitives/"+u.index,l,t,n,u,function(e){t._babylonTransformNode=e,t._primitiveBabylonMeshes=[e]}))}else{t._babylonTransformNode=new r.TransformNode(l,this._babylonScene),t._primitiveBabylonMeshes=[];for(var c=0,f=i;c<f.length;c++){u=f[c];s.push(this._loadMeshPrimitiveAsync(e+"/primitives/"+u.index,l+"_primitive"+u.index,t,n,u,function(e){e.parent=t._babylonTransformNode,t._primitiveBabylonMeshes.push(e)}))}}if(null!=t.skin){var d=a.Get(e+"/skin",this._gltf.skins,t.skin);s.push(this._loadSkinAsync("/skins/"+d.index,t,d))}return o(t._babylonTransformNode),this.logClose(),Promise.all(s).then(function(){return t._babylonTransformNode})},e.prototype._loadMeshPrimitiveAsync=function(t,n,o,i,s,l){var u=this,c=this._extensionsLoadMeshPrimitiveAsync(t,n,o,i,s,l);if(c)return c;this.logOpen(""+t);var f,d,h=this._parent.createInstances&&null==o.skin&&!i.primitives[0].targets;if(h&&s._instanceData)f=s._instanceData.babylonSourceMesh.createInstance(n),d=s._instanceData.promise;else{var p=new Array;this._babylonScene._blockEntityCollection=this._forAssetContainer;var m=new r.Mesh(n,this._babylonScene);this._babylonScene._blockEntityCollection=!1,m.overrideMaterialSideOrientation=this._babylonScene.useRightHandedSystem?r.Material.CounterClockWiseSideOrientation:r.Material.ClockWiseSideOrientation,this._createMorphTargets(t,o,i,s,m),p.push(this._loadVertexDataAsync(t,s,m).then(function(e){return u._loadMorphTargetsAsync(t,s,m,e).then(function(){e.applyToMesh(m)})}));var _=e._GetDrawMode(t,s.mode);if(null==s.material){var y=this._defaultBabylonMaterialData[_];y||(y=this._createDefaultMaterial("__GLTFLoader._default",_),this._parent.onMaterialLoadedObservable.notifyObservers(y),this._defaultBabylonMaterialData[_]=y),m.material=y}else{var b=a.Get(t+"/material",this._gltf.materials,s.material);p.push(this._loadMaterialAsync("/materials/"+b.index,b,m,_,function(e){m.material=e}))}d=Promise.all(p),h&&(s._instanceData={babylonSourceMesh:m,promise:d}),f=m}return e.AddPointerMetadata(f,t),this._parent.onMeshLoadedObservable.notifyObservers(f),l(f),this.logClose(),d.then(function(){return f})},e.prototype._loadVertexDataAsync=function(e,t,n){var o=this,i=this._extensionsLoadVertexDataAsync(e,t,n);if(i)return i;var s=t.attributes;if(!s)throw new Error(e+": Attributes are missing");var l=new Array,u=new r.Geometry(n.name,this._babylonScene);if(null==t.indices)n.isUnIndexed=!0;else{var c=a.Get(e+"/indices",this._gltf.accessors,t.indices);l.push(this._loadIndicesAccessorAsync("/accessors/"+c.index,c).then(function(e){u.setIndices(e)}))}var f=function(t,i,c){if(null!=s[t]){n._delayInfo=n._delayInfo||[],-1===n._delayInfo.indexOf(i)&&n._delayInfo.push(i);var f=a.Get(e+"/attributes/"+t,o._gltf.accessors,s[t]);l.push(o._loadVertexAccessorAsync("/accessors/"+f.index,f,i).then(function(e){u.setVerticesBuffer(e,f.count)})),i==r.VertexBuffer.MatricesIndicesExtraKind&&(n.numBoneInfluencers=8),c&&c(f)}};return f("POSITION",r.VertexBuffer.PositionKind),f("NORMAL",r.VertexBuffer.NormalKind),f("TANGENT",r.VertexBuffer.TangentKind),f("TEXCOORD_0",r.VertexBuffer.UVKind),f("TEXCOORD_1",r.VertexBuffer.UV2Kind),f("JOINTS_0",r.VertexBuffer.MatricesIndicesKind),f("WEIGHTS_0",r.VertexBuffer.MatricesWeightsKind),f("JOINTS_1",r.VertexBuffer.MatricesIndicesExtraKind),f("WEIGHTS_1",r.VertexBuffer.MatricesWeightsExtraKind),f("COLOR_0",r.VertexBuffer.ColorKind,function(e){"VEC4"===e.type&&(n.hasVertexAlpha=!0)}),Promise.all(l).then(function(){return u})},e.prototype._createMorphTargets=function(e,t,n,o,a){if(o.targets){if(null==t._numMorphTargets)t._numMorphTargets=o.targets.length;else if(o.targets.length!==t._numMorphTargets)throw new Error(e+": Primitives do not have the same number of targets");var i=n.extras?n.extras.targetNames:null;a.morphTargetManager=new r.MorphTargetManager(a.getScene());for(var s=0;s<o.targets.length;s++){var l=t.weights?t.weights[s]:n.weights?n.weights[s]:0,u=i?i[s]:"morphTarget"+s;a.morphTargetManager.addTarget(new r.MorphTarget(u,l,a.getScene()))}}},e.prototype._loadMorphTargetsAsync=function(e,t,n,r){if(!t.targets)return Promise.resolve();for(var o=new Array,a=n.morphTargetManager,i=0;i<a.numTargets;i++){var s=a.getTarget(i);o.push(this._loadMorphTargetVertexDataAsync(e+"/targets/"+i,r,t.targets[i],s))}return Promise.all(o).then(function(){})},e.prototype._loadMorphTargetVertexDataAsync=function(e,t,n,o){var i=this,s=new Array,l=function(r,o,l){if(null!=n[r]){var u=t.getVertexBuffer(o);if(u){var c=a.Get(e+"/"+r,i._gltf.accessors,n[r]);s.push(i._loadFloatAccessorAsync("/accessors/"+c.index,c).then(function(e){l(u,e)}))}}};return l("POSITION",r.VertexBuffer.PositionKind,function(e,t){var n=new Float32Array(t.length);e.forEach(t.length,function(e,r){n[r]=t[r]+e}),o.setPositions(n)}),l("NORMAL",r.VertexBuffer.NormalKind,function(e,t){var n=new Float32Array(t.length);e.forEach(n.length,function(e,r){n[r]=t[r]+e}),o.setNormals(n)}),l("TANGENT",r.VertexBuffer.TangentKind,function(e,t){var n=new Float32Array(t.length/3*4),r=0;e.forEach(t.length/3*4,function(e,o){(o+1)%4!=0&&(n[r]=t[r]+e,r++)}),o.setTangents(n)}),Promise.all(s).then(function(){})},e._LoadTransform=function(e,t){if(null==e.skin){var n=r.Vector3.Zero(),o=r.Quaternion.Identity(),a=r.Vector3.One();if(e.matrix)r.Matrix.FromArray(e.matrix).decompose(a,o,n);else e.translation&&(n=r.Vector3.FromArray(e.translation)),e.rotation&&(o=r.Quaternion.FromArray(e.rotation)),e.scale&&(a=r.Vector3.FromArray(e.scale));t.position=n,t.rotationQuaternion=o,t.scaling=a}},e.prototype._loadSkinAsync=function(e,t,n){var o=this,a=this._extensionsLoadSkinAsync(e,t,n);if(a)return a;var i=function(e){o._forEachPrimitive(t,function(t){t.skeleton=e})};if(n._data)return i(n._data.babylonSkeleton),n._data.promise;var s="skeleton"+n.index;this._babylonScene._blockEntityCollection=this._forAssetContainer;var l=new r.Skeleton(n.name||s,s,this._babylonScene);this._babylonScene._blockEntityCollection=!1,l.overrideMesh=this._rootBabylonMesh,this._loadBones(e,n,l),i(l);var u=this._loadSkinInverseBindMatricesDataAsync(e,n).then(function(e){o._updateBoneMatrices(l,e)});return n._data={babylonSkeleton:l,promise:u},u},e.prototype._loadBones=function(e,t,n){for(var r={},o=0,i=t.joints;o<i.length;o++){var s=i[o],l=a.Get(e+"/joints/"+s,this._gltf.nodes,s);this._loadBone(l,t,n,r)}},e.prototype._loadBone=function(e,t,n,o){var a=o[e.index];if(a)return a;var i=null;e.parent&&e.parent._babylonTransformNode!==this._rootBabylonMesh&&(i=this._loadBone(e.parent,t,n,o));var s=t.joints.indexOf(e.index);return a=new r.Bone(e.name||"joint"+e.index,n,i,this._getNodeMatrix(e),null,null,s),o[e.index]=a,e._babylonBones=e._babylonBones||[],e._babylonBones.push(a),a},e.prototype._loadSkinInverseBindMatricesDataAsync=function(e,t){if(null==t.inverseBindMatrices)return Promise.resolve(null);var n=a.Get(e+"/inverseBindMatrices",this._gltf.accessors,t.inverseBindMatrices);return this._loadFloatAccessorAsync("/accessors/"+n.index,n)},e.prototype._updateBoneMatrices=function(e,t){for(var n=0,o=e.bones;n<o.length;n++){var a=o[n],i=r.Matrix.Identity(),s=a._index;t&&-1!==s&&(r.Matrix.FromArrayToRef(t,16*s,i),i.invertToRef(i));var l=a.getParent();l&&i.multiplyToRef(l.getInvertedAbsoluteTransform(),i),a.updateMatrix(i,!1,!1),a._updateDifferenceMatrix(void 0,!1)}},e.prototype._getNodeMatrix=function(e){return e.matrix?r.Matrix.FromArray(e.matrix):r.Matrix.Compose(e.scale?r.Vector3.FromArray(e.scale):r.Vector3.One(),e.rotation?r.Quaternion.FromArray(e.rotation):r.Quaternion.Identity(),e.translation?r.Vector3.FromArray(e.translation):r.Vector3.Zero())},e.prototype.loadCameraAsync=function(t,n,o){void 0===o&&(o=function(){});var a=this._extensionsLoadCameraAsync(t,n,o);if(a)return a;var i=new Array;this.logOpen(t+" "+(n.name||"")),this._babylonScene._blockEntityCollection=this._forAssetContainer;var s=new r.FreeCamera(n.name||"camera"+n.index,r.Vector3.Zero(),this._babylonScene,!1);switch(this._babylonScene._blockEntityCollection=!1,s.rotation=new r.Vector3(0,Math.PI,0),n.type){case"perspective":var l=n.perspective;if(!l)throw new Error(t+": Camera perspective properties are missing");s.fov=l.yfov,s.minZ=l.znear,s.maxZ=l.zfar||Number.MAX_VALUE;break;case"orthographic":if(!n.orthographic)throw new Error(t+": Camera orthographic properties are missing");s.mode=r.Camera.ORTHOGRAPHIC_CAMERA,s.orthoLeft=-n.orthographic.xmag,s.orthoRight=n.orthographic.xmag,s.orthoBottom=-n.orthographic.ymag,s.orthoTop=n.orthographic.ymag,s.minZ=n.orthographic.znear,s.maxZ=n.orthographic.zfar;break;default:throw new Error(t+": Invalid camera type ("+n.type+")")}return e.AddPointerMetadata(s,t),this._parent.onCameraLoadedObservable.notifyObservers(s),o(s),Promise.all(i).then(function(){return s})},e.prototype._loadAnimationsAsync=function(){var e=this._gltf.animations;if(!e)return Promise.resolve();for(var t=new Array,n=0;n<e.length;n++){var r=e[n];t.push(this.loadAnimationAsync("/animations/"+r.index,r))}return Promise.all(t).then(function(){})},e.prototype.loadAnimationAsync=function(e,t){var n=this._extensionsLoadAnimationAsync(e,t);if(n)return n;this._babylonScene._blockEntityCollection=this._forAssetContainer;var o=new r.AnimationGroup(t.name||"animation"+t.index,this._babylonScene);this._babylonScene._blockEntityCollection=!1,t._babylonAnimationGroup=o;var i=new Array;a.Assign(t.channels),a.Assign(t.samplers);for(var s=0,l=t.channels;s<l.length;s++){var u=l[s];i.push(this._loadAnimationChannelAsync(e+"/channels/"+u.index,e,t,u,o))}return Promise.all(i).then(function(){return o.normalize(0),o})},e.prototype._loadAnimationChannelAsync=function(e,t,n,o,i,s){var l=this;if(void 0===s&&(s=null),null==o.target.node)return Promise.resolve();var u=a.Get(e+"/target/node",this._gltf.nodes,o.target.node);if("weights"===o.target.path&&!u._numMorphTargets||"weights"!==o.target.path&&!u._babylonTransformNode)return Promise.resolve();var c=a.Get(e+"/sampler",n.samplers,o.sampler);return this._loadAnimationSamplerAsync(t+"/samplers/"+o.sampler,c).then(function(t){var n,a;switch(o.target.path){case"translation":n="position",a=r.Animation.ANIMATIONTYPE_VECTOR3;break;case"rotation":n="rotationQuaternion",a=r.Animation.ANIMATIONTYPE_QUATERNION;break;case"scale":n="scaling",a=r.Animation.ANIMATIONTYPE_VECTOR3;break;case"weights":n="influence",a=r.Animation.ANIMATIONTYPE_FLOAT;break;default:throw new Error(e+"/target/path: Invalid value ("+o.target.path+")")}var c,f,d=0;switch(n){case"position":c=function(){var e=r.Vector3.FromArray(t.output,d);return d+=3,e};break;case"rotationQuaternion":c=function(){var e=r.Quaternion.FromArray(t.output,d);return d+=4,e};break;case"scaling":c=function(){var e=r.Vector3.FromArray(t.output,d);return d+=3,e};break;case"influence":c=function(){for(var e=new Array(u._numMorphTargets),n=0;n<u._numMorphTargets;n++)e[n]=t.output[d++];return e}}switch(t.interpolation){case"STEP":f=function(e){return{frame:t.input[e],value:c(),interpolation:r.AnimationKeyInterpolation.STEP}};break;case"LINEAR":f=function(e){return{frame:t.input[e],value:c()}};break;case"CUBICSPLINE":f=function(e){return{frame:t.input[e],inTangent:c(),value:c(),outTangent:c()}}}for(var h=new Array(t.input.length),p=0;p<t.input.length;p++)h[p]=f(p);if("influence"===n)for(var m=function(e){var t=i.name+"_channel"+i.targetedAnimations.length,o=new r.Animation(t,n,1,a);o.setKeys(h.map(function(t){return{frame:t.frame,inTangent:t.inTangent?t.inTangent[e]:void 0,value:t.value[e],outTangent:t.outTangent?t.outTangent[e]:void 0}})),l._forEachPrimitive(u,function(t){var n=t.morphTargetManager.getTarget(e),r=o.clone();n.animations.push(r),i.addTargetedAnimation(r,n)})},_=0;_<u._numMorphTargets;_++)m(_);else{var y=i.name+"_channel"+i.targetedAnimations.length,b=new r.Animation(y,n,1,a);b.setKeys(h),null!=s&&null!=s.animations?(s.animations.push(b),i.addTargetedAnimation(b,s)):(u._babylonTransformNode.animations.push(b),i.addTargetedAnimation(b,u._babylonTransformNode))}})},e.prototype._loadAnimationSamplerAsync=function(e,t){if(t._data)return t._data;var n=t.interpolation||"LINEAR";switch(n){case"STEP":case"LINEAR":case"CUBICSPLINE":break;default:throw new Error(e+"/interpolation: Invalid value ("+t.interpolation+")")}var r=a.Get(e+"/input",this._gltf.accessors,t.input),o=a.Get(e+"/output",this._gltf.accessors,t.output);return t._data=Promise.all([this._loadFloatAccessorAsync("/accessors/"+r.index,r),this._loadFloatAccessorAsync("/accessors/"+o.index,o)]).then(function(e){var t=e[0],r=e[1];return{input:t,interpolation:n,output:r}}),t._data},e.prototype._loadBufferAsync=function(e,t,n,r){var o=this._extensionsLoadBufferAsync(e,t,n,r);if(o)return o;if(!t._data)if(t.uri)t._data=this.loadUriAsync(e+"/uri",t,t.uri);else{if(!this._bin)throw new Error(e+": Uri is missing or the binary glTF is missing its binary chunk");t._data=this._bin.readAsync(0,t.byteLength)}return t._data.then(function(t){try{return new Uint8Array(t.buffer,t.byteOffset+n,r)}catch(t){throw new Error(e+": "+t.message)}})},e.prototype.loadBufferViewAsync=function(e,t){var n=this._extensionsLoadBufferViewAsync(e,t);if(n)return n;if(t._data)return t._data;var r=a.Get(e+"/buffer",this._gltf.buffers,t.buffer);return t._data=this._loadBufferAsync("/buffers/"+r.index,r,t.byteOffset||0,t.byteLength),t._data},e.prototype._loadAccessorAsync=function(t,n,o){var i=this;if(n._data)return n._data;var s=e._GetNumComponents(t,n.type),l=s*r.VertexBuffer.GetTypeByteLength(n.componentType),u=s*n.count;if(null==n.bufferView)n._data=Promise.resolve(new o(u));else{var c=a.Get(t+"/bufferView",this._gltf.bufferViews,n.bufferView);n._data=this.loadBufferViewAsync("/bufferViews/"+c.index,c).then(function(a){if(5126!==n.componentType||n.normalized){var i=new o(u);return r.VertexBuffer.ForEach(a,n.byteOffset||0,c.byteStride||l,s,n.componentType,i.length,n.normalized||!1,function(e,t){i[t]=e}),i}return e._GetTypedArray(t,n.componentType,a,n.byteOffset,u)})}if(n.sparse){var f=n.sparse;n._data=n._data.then(function(u){var c=u,d=a.Get(t+"/sparse/indices/bufferView",i._gltf.bufferViews,f.indices.bufferView),h=a.Get(t+"/sparse/values/bufferView",i._gltf.bufferViews,f.values.bufferView);return Promise.all([i.loadBufferViewAsync("/bufferViews/"+d.index,d),i.loadBufferViewAsync("/bufferViews/"+h.index,h)]).then(function(a){var i,u=a[0],d=a[1],h=e._GetTypedArray(t+"/sparse/indices",f.indices.componentType,u,f.indices.byteOffset,f.count),p=s*f.count;if(5126!==n.componentType||n.normalized){var m=e._GetTypedArray(t+"/sparse/values",n.componentType,d,f.values.byteOffset,p);i=new o(p),r.VertexBuffer.ForEach(m,0,l,s,n.componentType,i.length,n.normalized||!1,function(e,t){i[t]=e})}else i=e._GetTypedArray(t+"/sparse/values",n.componentType,d,f.values.byteOffset,p);for(var _=0,y=0;y<h.length;y++)for(var b=h[y]*s,v=0;v<s;v++)c[b++]=i[_++];return c})})}return n._data},e.prototype._loadFloatAccessorAsync=function(e,t){return this._loadAccessorAsync(e,t,Float32Array)},e.prototype._loadIndicesAccessorAsync=function(t,n){if("SCALAR"!==n.type)throw new Error(t+"/type: Invalid value "+n.type);if(5121!==n.componentType&&5123!==n.componentType&&5125!==n.componentType)throw new Error(t+"/componentType: Invalid value "+n.componentType);if(n._data)return n._data;if(n.sparse){var r=e._GetTypedArrayConstructor(t+"/componentType",n.componentType);n._data=this._loadAccessorAsync(t,n,r)}else{var o=a.Get(t+"/bufferView",this._gltf.bufferViews,n.bufferView);n._data=this.loadBufferViewAsync("/bufferViews/"+o.index,o).then(function(r){return e._GetTypedArray(t,n.componentType,r,n.byteOffset,n.count)})}return n._data},e.prototype._loadVertexBufferViewAsync=function(e,t){var n=this;return e._babylonBuffer?e._babylonBuffer:(e._babylonBuffer=this.loadBufferViewAsync("/bufferViews/"+e.index,e).then(function(e){return new r.Buffer(n._babylonScene.getEngine(),e,!1)}),e._babylonBuffer)},e.prototype._loadVertexAccessorAsync=function(t,n,o){var i=this;if(n._babylonVertexBuffer)return n._babylonVertexBuffer;if(n.sparse)n._babylonVertexBuffer=this._loadFloatAccessorAsync("/accessors/"+n.index,n).then(function(e){return new r.VertexBuffer(i._babylonScene.getEngine(),e,o,!1)});else if(n.byteOffset&&n.byteOffset%r.VertexBuffer.GetTypeByteLength(n.componentType)!=0)r.Logger.Warn("Accessor byte offset is not a multiple of component type byte length"),n._babylonVertexBuffer=this._loadFloatAccessorAsync("/accessors/"+n.index,n).then(function(e){return new r.VertexBuffer(i._babylonScene.getEngine(),e,o,!1)});else if(o===r.VertexBuffer.MatricesIndicesKind||o===r.VertexBuffer.MatricesIndicesExtraKind)n._babylonVertexBuffer=this._loadFloatAccessorAsync("/accessors/"+n.index,n).then(function(e){return new r.VertexBuffer(i._babylonScene.getEngine(),e,o,!1)});else{var s=a.Get(t+"/bufferView",this._gltf.bufferViews,n.bufferView);n._babylonVertexBuffer=this._loadVertexBufferViewAsync(s,o).then(function(a){var l=e._GetNumComponents(t,n.type);return new r.VertexBuffer(i._babylonScene.getEngine(),a,o,!1,!1,s.byteStride,!1,n.byteOffset,l,n.componentType,n.normalized,!0)})}return n._babylonVertexBuffer},e.prototype._loadMaterialMetallicRoughnessPropertiesAsync=function(e,t,n){if(!(n instanceof r.PBRMaterial))throw new Error(e+": Material type not supported");var o=new Array;return t&&(t.baseColorFactor?(n.albedoColor=r.Color3.FromArray(t.baseColorFactor),n.alpha=t.baseColorFactor[3]):n.albedoColor=r.Color3.White(),n.metallic=null==t.metallicFactor?1:t.metallicFactor,n.roughness=null==t.roughnessFactor?1:t.roughnessFactor,t.baseColorTexture&&o.push(this.loadTextureInfoAsync(e+"/baseColorTexture",t.baseColorTexture,function(e){e.name=n.name+" (Base Color)",n.albedoTexture=e})),t.metallicRoughnessTexture&&(o.push(this.loadTextureInfoAsync(e+"/metallicRoughnessTexture",t.metallicRoughnessTexture,function(e){e.name=n.name+" (Metallic Roughness)",n.metallicTexture=e})),n.useMetallnessFromMetallicTextureBlue=!0,n.useRoughnessFromMetallicTextureGreen=!0,n.useRoughnessFromMetallicTextureAlpha=!1)),Promise.all(o).then(function(){})},e.prototype._loadMaterialAsync=function(t,n,r,o,a){void 0===a&&(a=function(){});var i=this._extensionsLoadMaterialAsync(t,n,r,o,a);if(i)return i;n._data=n._data||{};var s=n._data[o];if(!s){this.logOpen(t+" "+(n.name||""));var l=this.createMaterial(t,n,o);s={babylonMaterial:l,babylonMeshes:[],promise:this.loadMaterialPropertiesAsync(t,n,l)},n._data[o]=s,e.AddPointerMetadata(l,t),this._parent.onMaterialLoadedObservable.notifyObservers(l),this.logClose()}return s.babylonMeshes.push(r),r.onDisposeObservable.addOnce(function(){var e=s.babylonMeshes.indexOf(r);-1!==e&&s.babylonMeshes.splice(e,1)}),a(s.babylonMaterial),s.promise.then(function(){return s.babylonMaterial})},e.prototype._createDefaultMaterial=function(e,t){this._babylonScene._blockEntityCollection=this._forAssetContainer;var n=new r.PBRMaterial(e,this._babylonScene);return this._babylonScene._blockEntityCollection=!1,n.fillMode=t,n.enableSpecularAntiAliasing=!0,n.useRadianceOverAlpha=!this._parent.transparencyAsCoverage,n.useSpecularOverAlpha=!this._parent.transparencyAsCoverage,n.transparencyMode=r.PBRMaterial.PBRMATERIAL_OPAQUE,n.metallic=1,n.roughness=1,n},e.prototype.createMaterial=function(e,t,n){var r=this._extensionsCreateMaterial(e,t,n);if(r)return r;var o=t.name||"material"+t.index;return this._createDefaultMaterial(o,n)},e.prototype.loadMaterialPropertiesAsync=function(e,t,n){var r=this._extensionsLoadMaterialPropertiesAsync(e,t,n);if(r)return r;var o=new Array;return o.push(this.loadMaterialBasePropertiesAsync(e,t,n)),t.pbrMetallicRoughness&&o.push(this._loadMaterialMetallicRoughnessPropertiesAsync(e+"/pbrMetallicRoughness",t.pbrMetallicRoughness,n)),this.loadMaterialAlphaProperties(e,t,n),Promise.all(o).then(function(){})},e.prototype.loadMaterialBasePropertiesAsync=function(e,t,n){if(!(n instanceof r.PBRMaterial))throw new Error(e+": Material type not supported");var o=new Array;return n.emissiveColor=t.emissiveFactor?r.Color3.FromArray(t.emissiveFactor):new r.Color3(0,0,0),t.doubleSided&&(n.backFaceCulling=!1,n.twoSidedLighting=!0),t.normalTexture&&(o.push(this.loadTextureInfoAsync(e+"/normalTexture",t.normalTexture,function(e){e.name=n.name+" (Normal)",n.bumpTexture=e})),n.invertNormalMapX=!this._babylonScene.useRightHandedSystem,n.invertNormalMapY=this._babylonScene.useRightHandedSystem,null!=t.normalTexture.scale&&(n.bumpTexture.level=t.normalTexture.scale),n.forceIrradianceInFragment=!0),t.occlusionTexture&&(o.push(this.loadTextureInfoAsync(e+"/occlusionTexture",t.occlusionTexture,function(e){e.name=n.name+" (Occlusion)",n.ambientTexture=e})),n.useAmbientInGrayScale=!0,null!=t.occlusionTexture.strength&&(n.ambientTextureStrength=t.occlusionTexture.strength)),t.emissiveTexture&&o.push(this.loadTextureInfoAsync(e+"/emissiveTexture",t.emissiveTexture,function(e){e.name=n.name+" (Emissive)",n.emissiveTexture=e})),Promise.all(o).then(function(){})},e.prototype.loadMaterialAlphaProperties=function(e,t,n){if(!(n instanceof r.PBRMaterial))throw new Error(e+": Material type not supported");switch(t.alphaMode||"OPAQUE"){case"OPAQUE":n.transparencyMode=r.PBRMaterial.PBRMATERIAL_OPAQUE;break;case"MASK":n.transparencyMode=r.PBRMaterial.PBRMATERIAL_ALPHATEST,n.alphaCutOff=null==t.alphaCutoff?.5:t.alphaCutoff,n.albedoTexture&&(n.albedoTexture.hasAlpha=!0);break;case"BLEND":n.transparencyMode=r.PBRMaterial.PBRMATERIAL_ALPHABLEND,n.albedoTexture&&(n.albedoTexture.hasAlpha=!0,n.useAlphaFromAlbedoTexture=!0);break;default:throw new Error(e+"/alphaMode: Invalid value ("+t.alphaMode+")")}},e.prototype.loadTextureInfoAsync=function(t,n,r){var o=this;void 0===r&&(r=function(){});var i=this._extensionsLoadTextureInfoAsync(t,n,r);if(i)return i;if(this.logOpen(""+t),n.texCoord>=2)throw new Error(t+"/texCoord: Invalid value ("+n.texCoord+")");var s=a.Get(t+"/index",this._gltf.textures,n.index),l=this._loadTextureAsync("/textures/"+n.index,s,function(a){a.coordinatesIndex=n.texCoord||0,e.AddPointerMetadata(a,t),o._parent.onTextureLoadedObservable.notifyObservers(a),r(a)});return this.logClose(),l},e.prototype._loadTextureAsync=function(t,n,r){void 0===r&&(r=function(){});var o=this._extensionsLoadTextureAsync(t,n,r);if(o)return o;this.logOpen(t+" "+(n.name||""));var i=null==n.sampler?e.DefaultSampler:a.Get(t+"/sampler",this._gltf.samplers,n.sampler),s=a.Get(t+"/source",this._gltf.images,n.source),l=this._createTextureAsync(t,i,s,r);return this.logClose(),l},e.prototype._createTextureAsync=function(e,t,n,o){var a=this;void 0===o&&(o=function(){});var i=this._loadSampler("/samplers/"+t.index,t),s=new Array,l=new r.Deferred;this._babylonScene._blockEntityCollection=this._forAssetContainer;var u=new r.Texture(null,this._babylonScene,i.noMipMaps,!1,i.samplingMode,function(){a._disposed||l.resolve()},function(t,n){a._disposed||l.reject(new Error(e+": "+(n&&n.message?n.message:t||"Failed to load texture")))},void 0,void 0,void 0,n.mimeType);return this._babylonScene._blockEntityCollection=!1,s.push(l.promise),s.push(this.loadImageAsync("/images/"+n.index,n).then(function(e){var t=n.uri||a._fileName+"#image"+n.index,r="data:"+a._uniqueRootUrl+t;u.updateURL(r,e)})),u.wrapU=i.wrapU,u.wrapV=i.wrapV,o(u),Promise.all(s).then(function(){return u})},e.prototype._loadSampler=function(t,n){return n._data||(n._data={noMipMaps:9728===n.minFilter||9729===n.minFilter,samplingMode:e._GetTextureSamplingMode(t,n),wrapU:e._GetTextureWrapMode(t+"/wrapS",n.wrapS),wrapV:e._GetTextureWrapMode(t+"/wrapT",n.wrapT)}),n._data},e.prototype.loadImageAsync=function(e,t){if(!t._data){if(this.logOpen(e+" "+(t.name||"")),t.uri)t._data=this.loadUriAsync(e+"/uri",t,t.uri);else{var n=a.Get(e+"/bufferView",this._gltf.bufferViews,t.bufferView);t._data=this.loadBufferViewAsync("/bufferViews/"+n.index,n)}this.logClose()}return t._data},e.prototype.loadUriAsync=function(t,n,a){var i=this,s=this._extensionsLoadUriAsync(t,n,a);if(s)return s;if(!e._ValidateUri(a))throw new Error(t+": '"+a+"' is invalid");if(r.Tools.IsBase64(a)){var l=new Uint8Array(r.Tools.DecodeBase64(a));return this.log("Decoded "+a.substr(0,64)+"... ("+l.length+" bytes)"),Promise.resolve(l)}return this.log("Loading "+a),this._parent.preprocessUrlAsync(this._rootUrl+a).then(function(e){return new Promise(function(n,s){if(!i._disposed){var l=r.Tools.LoadFile(e,function(e){if(!i._disposed){var t=new Uint8Array(e);i.log("Loaded "+a+" ("+t.length+" bytes)"),n(t)}},function(e){if(!i._disposed&&(l&&(l._lengthComputable=e.lengthComputable,l._loaded=e.loaded,l._total=e.total),i._state===o.GLTFLoaderState.LOADING))try{i._onProgress()}catch(e){s(e)}},i._babylonScene.offlineProvider,!0,function(e,n){i._disposed||s(new r.LoadFileError(t+": Failed to load '"+a+"'"+(e?": "+e.status+" "+e.statusText:""),e))});i._requests.push(l)}})})},e.prototype._onProgress=function(){if(this._progressCallback){for(var e=!0,t=0,n=0,o=0,a=this._requests;o<a.length;o++){var i=a[o];if(void 0===i._lengthComputable||void 0===i._loaded||void 0===i._total)return;e=e&&i._lengthComputable,t+=i._loaded,n+=i._total}this._progressCallback(new r.SceneLoaderProgressEvent(e,t,e?n:0))}},e.AddPointerMetadata=function(e,t){var n=e.metadata=e.metadata||{},r=n.gltf=n.gltf||{};(r.pointers=r.pointers||[]).push(t)},e._GetTextureWrapMode=function(e,t){switch(t=null==t?10497:t){case 33071:return r.Texture.CLAMP_ADDRESSMODE;case 33648:return r.Texture.MIRROR_ADDRESSMODE;case 10497:return r.Texture.WRAP_ADDRESSMODE;default:return r.Logger.Warn(e+": Invalid value ("+t+")"),r.Texture.WRAP_ADDRESSMODE}},e._GetTextureSamplingMode=function(e,t){var n=null==t.magFilter?9729:t.magFilter,o=null==t.minFilter?9987:t.minFilter;if(9729===n)switch(o){case 9728:return r.Texture.LINEAR_NEAREST;case 9729:return r.Texture.LINEAR_LINEAR;case 9984:return r.Texture.LINEAR_NEAREST_MIPNEAREST;case 9985:return r.Texture.LINEAR_LINEAR_MIPNEAREST;case 9986:return r.Texture.LINEAR_NEAREST_MIPLINEAR;case 9987:return r.Texture.LINEAR_LINEAR_MIPLINEAR;default:return r.Logger.Warn(e+"/minFilter: Invalid value ("+o+")"),r.Texture.LINEAR_LINEAR_MIPLINEAR}else switch(9728!==n&&r.Logger.Warn(e+"/magFilter: Invalid value ("+n+")"),o){case 9728:return r.Texture.NEAREST_NEAREST;case 9729:return r.Texture.NEAREST_LINEAR;case 9984:return r.Texture.NEAREST_NEAREST_MIPNEAREST;case 9985:return r.Texture.NEAREST_LINEAR_MIPNEAREST;case 9986:return r.Texture.NEAREST_NEAREST_MIPLINEAR;case 9987:return r.Texture.NEAREST_LINEAR_MIPLINEAR;default:return r.Logger.Warn(e+"/minFilter: Invalid value ("+o+")"),r.Texture.NEAREST_NEAREST_MIPNEAREST}},e._GetTypedArrayConstructor=function(e,t){switch(t){case 5120:return Int8Array;case 5121:return Uint8Array;case 5122:return Int16Array;case 5123:return Uint16Array;case 5125:return Uint32Array;case 5126:return Float32Array;default:throw new Error(e+": Invalid component type "+t)}},e._GetTypedArray=function(t,n,r,o,a){var i=r.buffer;o=r.byteOffset+(o||0);var s=e._GetTypedArrayConstructor(t+"/componentType",n);try{return new s(i,o,a)}catch(e){throw new Error(t+": "+e)}},e._GetNumComponents=function(e,t){switch(t){case"SCALAR":return 1;case"VEC2":return 2;case"VEC3":return 3;case"VEC4":case"MAT2":return 4;case"MAT3":return 9;case"MAT4":return 16}throw new Error(e+": Invalid type ("+t+")")},e._ValidateUri=function(e){return r.Tools.IsBase64(e)||-1===e.indexOf("..")},e._GetDrawMode=function(e,t){switch(null==t&&(t=4),t){case 0:return r.Material.PointListDrawMode;case 1:return r.Material.LineListDrawMode;case 2:return r.Material.LineLoopDrawMode;case 3:return r.Material.LineStripDrawMode;case 4:return r.Material.TriangleFillMode;case 5:return r.Material.TriangleStripDrawMode;case 6:return r.Material.TriangleFanDrawMode}throw new Error(e+": Invalid mesh primitive mode ("+t+")")},e.prototype._compileMaterialsAsync=function(){var e=this;this._parent._startPerformanceCounter("Compile materials");var t=new Array;if(this._gltf.materials)for(var n=0,r=this._gltf.materials;n<r.length;n++){var o=r[n];if(o._data)for(var a in o._data)for(var i=o._data[a],s=0,l=i.babylonMeshes;s<l.length;s++){var u=l[s];u.computeWorldMatrix(!0);var c=i.babylonMaterial;t.push(c.forceCompilationAsync(u)),t.push(c.forceCompilationAsync(u,{useInstances:!0})),this._parent.useClipPlane&&(t.push(c.forceCompilationAsync(u,{clipPlane:!0})),t.push(c.forceCompilationAsync(u,{clipPlane:!0,useInstances:!0})))}}return Promise.all(t).then(function(){e._parent._endPerformanceCounter("Compile materials")})},e.prototype._compileShadowGeneratorsAsync=function(){var e=this;this._parent._startPerformanceCounter("Compile shadow generators");for(var t=new Array,n=0,r=this._babylonScene.lights;n<r.length;n++){var o=r[n].getShadowGenerator();o&&t.push(o.forceCompilationAsync())}return Promise.all(t).then(function(){e._parent._endPerformanceCounter("Compile shadow generators")})},e.prototype._forEachExtensions=function(e){for(var t=0,n=this._extensions;t<n.length;t++){var r=n[t];r.enabled&&e(r)}},e.prototype._applyExtensions=function(e,t,n){for(var r=0,o=this._extensions;r<o.length;r++){var a=o[r];if(a.enabled){var i=a.name+"."+t,s=e;s._activeLoaderExtensionFunctions=s._activeLoaderExtensionFunctions||{};var l=s._activeLoaderExtensionFunctions;if(!l[i]){l[i]=!0;try{var u=n(a);if(u)return u}finally{delete l[i]}}}}return null},e.prototype._extensionsOnLoading=function(){this._forEachExtensions(function(e){return e.onLoading&&e.onLoading()})},e.prototype._extensionsOnReady=function(){this._forEachExtensions(function(e){return e.onReady&&e.onReady()})},e.prototype._extensionsLoadSceneAsync=function(e,t){return this._applyExtensions(t,"loadScene",function(n){return n.loadSceneAsync&&n.loadSceneAsync(e,t)})},e.prototype._extensionsLoadNodeAsync=function(e,t,n){return this._applyExtensions(t,"loadNode",function(r){return r.loadNodeAsync&&r.loadNodeAsync(e,t,n)})},e.prototype._extensionsLoadCameraAsync=function(e,t,n){return this._applyExtensions(t,"loadCamera",function(r){return r.loadCameraAsync&&r.loadCameraAsync(e,t,n)})},e.prototype._extensionsLoadVertexDataAsync=function(e,t,n){return this._applyExtensions(t,"loadVertexData",function(r){return r._loadVertexDataAsync&&r._loadVertexDataAsync(e,t,n)})},e.prototype._extensionsLoadMeshPrimitiveAsync=function(e,t,n,r,o,a){return this._applyExtensions(o,"loadMeshPrimitive",function(i){return i._loadMeshPrimitiveAsync&&i._loadMeshPrimitiveAsync(e,t,n,r,o,a)})},e.prototype._extensionsLoadMaterialAsync=function(e,t,n,r,o){return this._applyExtensions(t,"loadMaterial",function(a){return a._loadMaterialAsync&&a._loadMaterialAsync(e,t,n,r,o)})},e.prototype._extensionsCreateMaterial=function(e,t,n){return this._applyExtensions(t,"createMaterial",function(r){return r.createMaterial&&r.createMaterial(e,t,n)})},e.prototype._extensionsLoadMaterialPropertiesAsync=function(e,t,n){return this._applyExtensions(t,"loadMaterialProperties",function(r){return r.loadMaterialPropertiesAsync&&r.loadMaterialPropertiesAsync(e,t,n)})},e.prototype._extensionsLoadTextureInfoAsync=function(e,t,n){return this._applyExtensions(t,"loadTextureInfo",function(r){return r.loadTextureInfoAsync&&r.loadTextureInfoAsync(e,t,n)})},e.prototype._extensionsLoadTextureAsync=function(e,t,n){return this._applyExtensions(t,"loadTexture",function(r){return r._loadTextureAsync&&r._loadTextureAsync(e,t,n)})},e.prototype._extensionsLoadAnimationAsync=function(e,t){return this._applyExtensions(t,"loadAnimation",function(n){return n.loadAnimationAsync&&n.loadAnimationAsync(e,t)})},e.prototype._extensionsLoadSkinAsync=function(e,t,n){return this._applyExtensions(n,"loadSkin",function(r){return r._loadSkinAsync&&r._loadSkinAsync(e,t,n)})},e.prototype._extensionsLoadUriAsync=function(e,t,n){return this._applyExtensions(t,"loadUri",function(r){return r._loadUriAsync&&r._loadUriAsync(e,t,n)})},e.prototype._extensionsLoadBufferViewAsync=function(e,t){return this._applyExtensions(t,"loadBufferView",function(n){return n.loadBufferViewAsync&&n.loadBufferViewAsync(e,t)})},e.prototype._extensionsLoadBufferAsync=function(e,t,n,r){return this._applyExtensions(t,"loadBuffer",function(o){return o.loadBufferAsync&&o.loadBufferAsync(e,t,n,r)})},e.LoadExtensionAsync=function(e,t,n,r){if(!t.extensions)return null;var o=t.extensions[n];return o?r(e+"/extensions/"+n,o):null},e.LoadExtraAsync=function(e,t,n,r){if(!t.extras)return null;var o=t.extras[n];return o?r(e+"/extras/"+n,o):null},e.prototype.isExtensionUsed=function(e){return!!this._gltf.extensionsUsed&&-1!==this._gltf.extensionsUsed.indexOf(e)},e.prototype.logOpen=function(e){this._parent._logOpen(e)},e.prototype.logClose=function(){this._parent._logClose()},e.prototype.log=function(e){this._parent._log(e)},e.prototype.startPerformanceCounter=function(e){this._parent._startPerformanceCounter(e)},e.prototype.endPerformanceCounter=function(e){this._parent._endPerformanceCounter(e)},e._RegisteredExtensions={},e.DefaultSampler={index:-1},e}();o.GLTFFileLoader._CreateGLTF2Loader=function(e){return new i(e)}},function(e,t,n){"use strict";n.r(t),n.d(t,"GLTFLoaderCoordinateSystemMode",function(){return r}),n.d(t,"GLTFLoaderAnimationStartMode",function(){return o}),n.d(t,"GLTFLoaderState",function(){return a}),n.d(t,"GLTFFileLoader",function(){return l});var r,o,a,i=n(0),s=n(3);!function(e){e[e.AUTO=0]="AUTO",e[e.FORCE_RIGHT_HANDED=1]="FORCE_RIGHT_HANDED"}(r||(r={})),function(e){e[e.NONE=0]="NONE",e[e.FIRST=1]="FIRST",e[e.ALL=2]="ALL"}(o||(o={})),function(e){e[e.LOADING=0]="LOADING",e[e.READY=1]="READY",e[e.COMPLETE=2]="COMPLETE"}(a||(a={}));var l=function(){function e(){this.onParsedObservable=new i.Observable,this.coordinateSystemMode=r.AUTO,this.animationStartMode=o.FIRST,this.compileMaterials=!1,this.useClipPlane=!1,this.compileShadowGenerators=!1,this.transparencyAsCoverage=!1,this.useRangeRequests=!1,this.createInstances=!0,this.preprocessUrlAsync=function(e){return Promise.resolve(e)},this.onMeshLoadedObservable=new i.Observable,this.onTextureLoadedObservable=new i.Observable,this.onMaterialLoadedObservable=new i.Observable,this.onCameraLoadedObservable=new i.Observable,this.onCompleteObservable=new i.Observable,this.onErrorObservable=new i.Observable,this.onDisposeObservable=new i.Observable,this.onExtensionLoadedObservable=new i.Observable,this.validate=!1,this.onValidatedObservable=new i.Observable,this._loader=null,this.name="gltf",this.extensions={".gltf":{isBinary:!1},".glb":{isBinary:!0}},this._logIndentLevel=0,this._loggingEnabled=!1,this._log=this._logDisabled,this._capturePerformanceCounters=!1,this._startPerformanceCounter=this._startPerformanceCounterDisabled,this._endPerformanceCounter=this._endPerformanceCounterDisabled}return Object.defineProperty(e.prototype,"onParsed",{set:function(e){this._onParsedObserver&&this.onParsedObservable.remove(this._onParsedObserver),this._onParsedObserver=this.onParsedObservable.add(e)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"onMeshLoaded",{set:function(e){this._onMeshLoadedObserver&&this.onMeshLoadedObservable.remove(this._onMeshLoadedObserver),this._onMeshLoadedObserver=this.onMeshLoadedObservable.add(e)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"onTextureLoaded",{set:function(e){this._onTextureLoadedObserver&&this.onTextureLoadedObservable.remove(this._onTextureLoadedObserver),this._onTextureLoadedObserver=this.onTextureLoadedObservable.add(e)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"onMaterialLoaded",{set:function(e){this._onMaterialLoadedObserver&&this.onMaterialLoadedObservable.remove(this._onMaterialLoadedObserver),this._onMaterialLoadedObserver=this.onMaterialLoadedObservable.add(e)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"onCameraLoaded",{set:function(e){this._onCameraLoadedObserver&&this.onCameraLoadedObservable.remove(this._onCameraLoadedObserver),this._onCameraLoadedObserver=this.onCameraLoadedObservable.add(e)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"onComplete",{set:function(e){this._onCompleteObserver&&this.onCompleteObservable.remove(this._onCompleteObserver),this._onCompleteObserver=this.onCompleteObservable.add(e)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"onError",{set:function(e){this._onErrorObserver&&this.onErrorObservable.remove(this._onErrorObserver),this._onErrorObserver=this.onErrorObservable.add(e)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"onDispose",{set:function(e){this._onDisposeObserver&&this.onDisposeObservable.remove(this._onDisposeObserver),this._onDisposeObserver=this.onDisposeObservable.add(e)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"onExtensionLoaded",{set:function(e){this._onExtensionLoadedObserver&&this.onExtensionLoadedObservable.remove(this._onExtensionLoadedObserver),this._onExtensionLoadedObserver=this.onExtensionLoadedObservable.add(e)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"loggingEnabled",{get:function(){return this._loggingEnabled},set:function(e){this._loggingEnabled!==e&&(this._loggingEnabled=e,this._loggingEnabled?this._log=this._logEnabled:this._log=this._logDisabled)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"capturePerformanceCounters",{get:function(){return this._capturePerformanceCounters},set:function(e){this._capturePerformanceCounters!==e&&(this._capturePerformanceCounters=e,this._capturePerformanceCounters?(this._startPerformanceCounter=this._startPerformanceCounterEnabled,this._endPerformanceCounter=this._endPerformanceCounterEnabled):(this._startPerformanceCounter=this._startPerformanceCounterDisabled,this._endPerformanceCounter=this._endPerformanceCounterDisabled))},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"onValidated",{set:function(e){this._onValidatedObserver&&this.onValidatedObservable.remove(this._onValidatedObserver),this._onValidatedObserver=this.onValidatedObservable.add(e)},enumerable:!0,configurable:!0}),e.prototype.dispose=function(){this._loader&&(this._loader.dispose(),this._loader=null),this._clear(),this.onDisposeObservable.notifyObservers(void 0),this.onDisposeObservable.clear()},e.prototype._clear=function(){this.preprocessUrlAsync=function(e){return Promise.resolve(e)},this.onMeshLoadedObservable.clear(),this.onTextureLoadedObservable.clear(),this.onMaterialLoadedObservable.clear(),this.onCameraLoadedObservable.clear(),this.onCompleteObservable.clear(),this.onExtensionLoadedObservable.clear()},e.prototype.requestFile=function(e,t,n,r,o,a){var s=this;if(o){if(this.useRangeRequests){this.validate&&i.Logger.Warn("glTF validation is not supported when range requests are enabled");var l=new Array,u={abort:function(){return l.forEach(function(e){return e.abort()})},onCompleteObservable:new i.Observable},c={readAsync:function(n,o){return new Promise(function(a,i){l.push(e._requestFile(t,function(e,t){var n=t.getResponseHeader("Content-Range");n&&(c.byteLength=Number(n.split("/")[1])),a(new Uint8Array(e))},r,!0,!0,function(e){i(e)},function(e){e.setRequestHeader("Range","bytes="+n+"-"+(n+o-1))}))})},byteLength:0};return this._unpackBinaryAsync(new i.DataReader(c)).then(function(e){u.onCompleteObservable.notifyObservers(u),n(e)},a),u}return e._requestFile(t,function(e,t){var r=e;s._unpackBinaryAsync(new i.DataReader({readAsync:function(e,t){return Promise.resolve(new Uint8Array(r,e,t))},byteLength:r.byteLength})).then(function(e){n(e,t)},a)},r,!0,!0,a)}return e._requestFile(t,function(r,o){s._validate(e,r,i.Tools.GetFolderPath(t),i.Tools.GetFilename(t)),n({json:s._parseJson(r)},o)},r,!0,!1,a)},e.prototype.readFile=function(e,t,n,r,o,a){var s=this;return e._readFile(t,function(r){if(s._validate(e,r,"file:",t.name),o){var l=r;s._unpackBinaryAsync(new i.DataReader({readAsync:function(e,t){return Promise.resolve(new Uint8Array(l,e,t))},byteLength:l.byteLength})).then(n,a)}else n({json:s._parseJson(r)})},r,o,a)},e.prototype.importMeshAsync=function(e,t,n,r,o,a){var i=this;return Promise.resolve().then(function(){return i.onParsedObservable.notifyObservers(n),i.onParsedObservable.clear(),i._log("Loading "+(a||"")),i._loader=i._getLoader(n),i._loader.importMeshAsync(e,t,!1,n,r,o,a)})},e.prototype.loadAsync=function(e,t,n,r,o){var a=this;return Promise.resolve().then(function(){return a.onParsedObservable.notifyObservers(t),a.onParsedObservable.clear(),a._log("Loading "+(o||"")),a._loader=a._getLoader(t),a._loader.loadAsync(e,t,n,r,o)})},e.prototype.loadAssetContainerAsync=function(e,t,n,r,o){var a=this;return Promise.resolve().then(function(){a.onParsedObservable.notifyObservers(t),a.onParsedObservable.clear(),a._log("Loading "+(o||"")),a._loader=a._getLoader(t);var s=[];a.onMaterialLoadedObservable.add(function(e){s.push(e)});var l=[];return a.onTextureLoadedObservable.add(function(e){l.push(e)}),a._loader.importMeshAsync(null,e,!0,t,n,r,o).then(function(t){var n=new i.AssetContainer(e);return Array.prototype.push.apply(n.meshes,t.meshes),Array.prototype.push.apply(n.particleSystems,t.particleSystems),Array.prototype.push.apply(n.skeletons,t.skeletons),Array.prototype.push.apply(n.animationGroups,t.animationGroups),Array.prototype.push.apply(n.materials,s),Array.prototype.push.apply(n.textures,l),Array.prototype.push.apply(n.lights,t.lights),Array.prototype.push.apply(n.transformNodes,t.transformNodes),n})})},e.prototype.canDirectLoad=function(e){return-1!==e.indexOf("asset")&&-1!==e.indexOf("version")},e.prototype.directLoad=function(e,t){return this._validate(e,t),{json:this._parseJson(t)}},e.prototype.createPlugin=function(){return new e},Object.defineProperty(e.prototype,"loaderState",{get:function(){return this._loader?this._loader.state:null},enumerable:!0,configurable:!0}),e.prototype.whenCompleteAsync=function(){var e=this;return new Promise(function(t,n){e.onCompleteObservable.addOnce(function(){t()}),e.onErrorObservable.addOnce(function(e){n(e)})})},e.prototype._validate=function(e,t,n,r){var o=this;void 0===n&&(n=""),void 0===r&&(r=""),this.validate&&(this._startPerformanceCounter("Validate JSON"),s.GLTFValidation.ValidateAsync(t,n,r,function(t){return o.preprocessUrlAsync(n+t).then(function(t){return e._loadFileAsync(t,void 0,!0,!0)})}).then(function(e){o._endPerformanceCounter("Validate JSON"),o.onValidatedObservable.notifyObservers(e),o.onValidatedObservable.clear()},function(e){o._endPerformanceCounter("Validate JSON"),i.Tools.Warn("Failed to validate: "+e.message),o.onValidatedObservable.clear()}))},e.prototype._getLoader=function(t){var n=t.json.asset||{};this._log("Asset version: "+n.version),n.minVersion&&this._log("Asset minimum version: "+n.minVersion),n.generator&&this._log("Asset generator: "+n.generator);var r=e._parseVersion(n.version);if(!r)throw new Error("Invalid version: "+n.version);if(void 0!==n.minVersion){var o=e._parseVersion(n.minVersion);if(!o)throw new Error("Invalid minimum version: "+n.minVersion);if(e._compareVersion(o,{major:2,minor:0})>0)throw new Error("Incompatible minimum version: "+n.minVersion)}var a={1:e._CreateGLTF1Loader,2:e._CreateGLTF2Loader}[r.major];if(!a)throw new Error("Unsupported version: "+n.version);return a(this)},e.prototype._parseJson=function(e){this._startPerformanceCounter("Parse JSON"),this._log("JSON length: "+e.length);var t=JSON.parse(e);return this._endPerformanceCounter("Parse JSON"),t},e.prototype._unpackBinaryAsync=function(e){var t=this;return this._startPerformanceCounter("Unpack Binary"),e.loadAsync(20).then(function(){var n=e.readUint32();if(1179937895!==n)throw new Error("Unexpected magic: "+n);var r=e.readUint32();t.loggingEnabled&&t._log("Binary version: "+r);var o,a=e.readUint32();if(0!=e.buffer.byteLength&&a!==e.buffer.byteLength)throw new Error("Length in header does not match actual data length: "+a+" != "+e.buffer.byteLength);switch(r){case 1:o=t._unpackBinaryV1Async(e,a);break;case 2:o=t._unpackBinaryV2Async(e,a);break;default:throw new Error("Unsupported version: "+r)}return t._endPerformanceCounter("Unpack Binary"),o})},e.prototype._unpackBinaryV1Async=function(e,t){var n=e.readUint32(),r=e.readUint32();if(0!==r)throw new Error("Unexpected content format: "+r);var o=t-e.byteOffset,a={json:this._parseJson(e.readString(n)),bin:null};if(0!==o){var i=e.byteOffset;a.bin={readAsync:function(t,n){return e.buffer.readAsync(i+t,n)},byteLength:o}}return Promise.resolve(a)},e.prototype._unpackBinaryV2Async=function(e,t){var n=this,r=1313821514,o=5130562,a=e.readUint32();if(e.readUint32()!==r)throw new Error("First chunk format is not JSON");return e.byteOffset+a===t?e.loadAsync(a).then(function(){return{json:n._parseJson(e.readString(a)),bin:null}}):e.loadAsync(a+8).then(function(){var i={json:n._parseJson(e.readString(a)),bin:null},s=function(){var n=e.readUint32();switch(e.readUint32()){case r:throw new Error("Unexpected JSON chunk");case o:var a=e.byteOffset;i.bin={readAsync:function(t,n){return e.buffer.readAsync(a+t,n)},byteLength:n},e.skipBytes(n);break;default:e.skipBytes(n)}return e.byteOffset!==t?e.loadAsync(8).then(s):Promise.resolve(i)};return s()})},e._parseVersion=function(e){if("1.0"===e||"1.0.1"===e)return{major:1,minor:0};var t=(e+"").match(/^(\d+)\.(\d+)/);return t?{major:parseInt(t[1]),minor:parseInt(t[2])}:null},e._compareVersion=function(e,t){return e.major>t.major?1:e.major<t.major?-1:e.minor>t.minor?1:e.minor<t.minor?-1:0},e.prototype._logOpen=function(e){this._log(e),this._logIndentLevel++},e.prototype._logClose=function(){--this._logIndentLevel},e.prototype._logEnabled=function(t){var n=e._logSpaces.substr(0,2*this._logIndentLevel);i.Logger.Log(""+n+t)},e.prototype._logDisabled=function(e){},e.prototype._startPerformanceCounterEnabled=function(e){i.Tools.StartPerformanceCounter(e)},e.prototype._startPerformanceCounterDisabled=function(e){},e.prototype._endPerformanceCounterEnabled=function(e){i.Tools.EndPerformanceCounter(e)},e.prototype._endPerformanceCounterDisabled=function(e){},e.IncrementalLoading=!0,e.HomogeneousCoordinates=!1,e._logSpaces="                                ",e}();i.SceneLoader&&i.SceneLoader.RegisterPlugin(new l)},function(e,t,n){"use strict";n.r(t),n.d(t,"GLTFValidation",function(){return a});var r=n(0);function o(e,t,n,r){var o={externalResourceFunction:function(e){return r(e).then(function(e){return new Uint8Array(e)})}};return n&&(o.uri="file:"===t?n:t+n),e instanceof ArrayBuffer?GLTFValidator.validateBytes(new Uint8Array(e),o):GLTFValidator.validateString(e,o)}var a=function(){function e(){}return e.ValidateAsync=function(e,t,n,a){var i=this;return"function"==typeof Worker?new Promise(function(s,l){var u=o+"("+function(){var e=[];onmessage=function(t){var n=t.data;switch(n.id){case"init":importScripts(n.url);break;case"validate":o(n.data,n.rootUrl,n.fileName,function(t){return new Promise(function(n,r){var o=e.length;e.push({resolve:n,reject:r}),postMessage({id:"getExternalResource",index:o,uri:t})})}).then(function(e){postMessage({id:"validate.resolve",value:e})},function(e){postMessage({id:"validate.reject",reason:e})});break;case"getExternalResource.resolve":e[n.index].resolve(n.value);break;case"getExternalResource.reject":e[n.index].reject(n.reason)}}}+")()",c=URL.createObjectURL(new Blob([u],{type:"application/javascript"})),f=new Worker(c),d=function(e){f.removeEventListener("error",d),f.removeEventListener("message",h),l(e)},h=function(e){var t=e.data;switch(t.id){case"getExternalResource":a(t.uri).then(function(e){f.postMessage({id:"getExternalResource.resolve",index:t.index,value:e},[e])},function(e){f.postMessage({id:"getExternalResource.reject",index:t.index,reason:e})});break;case"validate.resolve":f.removeEventListener("error",d),f.removeEventListener("message",h),s(t.value);break;case"validate.reject":f.removeEventListener("error",d),f.removeEventListener("message",h),l(t.reason)}};f.addEventListener("error",d),f.addEventListener("message",h),f.postMessage({id:"init",url:r.Tools.GetAbsoluteUrl(i.Configuration.url)}),f.postMessage({id:"validate",data:e,rootUrl:t,fileName:n})}):(this._LoadScriptPromise||(this._LoadScriptPromise=r.Tools.LoadScriptAsync(this.Configuration.url)),this._LoadScriptPromise.then(function(){return o(e,t,n,a)}))},e.Configuration={url:"https://preview.babylonjs.com/gltf_validator.js"},e}()},function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(e){"object"==typeof window&&(n=window)}e.exports=n},function(e,t,n){"use strict";n.r(t);var r=n(0),o=n(1),a="EXT_lights_image_based",i=function(){function e(e){this.name=a,this._loader=e,this.enabled=this._loader.isExtensionUsed(a)}return e.prototype.dispose=function(){delete this._loader,delete this._lights},e.prototype.onLoading=function(){var e=this._loader.gltf.extensions;if(e&&e[this.name]){var t=e[this.name];this._lights=t.lights}},e.prototype.loadSceneAsync=function(e,t){var n=this;return o.b.LoadExtensionAsync(e,t,this.name,function(r,a){var i=new Array;i.push(n._loader.loadSceneAsync(e,t)),n._loader.logOpen(""+r);var s=o.a.Get(r+"/light",n._lights,a.light);return i.push(n._loadLightAsync("#/extensions/"+n.name+"/lights/"+a.light,s).then(function(e){n._loader.babylonScene.environmentTexture=e})),n._loader.logClose(),Promise.all(i).then(function(){})})},e.prototype._loadLightAsync=function(e,t){var n=this;if(!t._loaded){var a=new Array;this._loader.logOpen(""+e);for(var i=new Array(t.specularImages.length),s=function(n){var r=t.specularImages[n];i[n]=new Array(r.length);for(var s=function(t){var s=e+"/specularImages/"+n+"/"+t;l._loader.logOpen(""+s);var u=r[t],c=o.a.Get(s,l._loader.gltf.images,u);a.push(l._loader.loadImageAsync("#/images/"+u,c).then(function(e){i[n][t]=e})),l._loader.logClose()},u=0;u<r.length;u++)s(u)},l=this,u=0;u<t.specularImages.length;u++)s(u);this._loader.logClose(),t._loaded=Promise.all(a).then(function(){var e=new r.RawCubeTexture(n._loader.babylonScene,null,t.specularImageSize);if(t._babylonTexture=e,null!=t.intensity&&(e.level=t.intensity),t.rotation){var o=r.Quaternion.FromArray(t.rotation);n._loader.babylonScene.useRightHandedSystem||(o=r.Quaternion.Inverse(o)),r.Matrix.FromQuaternionToRef(o,e.getReflectionTextureMatrix())}var a=r.SphericalHarmonics.FromArray(t.irradianceCoefficients);a.scaleInPlace(t.intensity),a.convertIrradianceToLambertianRadiance();var s=r.SphericalPolynomial.FromHarmonics(a),l=(i.length-1)/r.Scalar.Log2(t.specularImageSize);return e.updateRGBDAsync(i,s,l)})}return t._loaded.then(function(){return t._babylonTexture})},e}();o.b.RegisterExtension(a,function(e){return new i(e)});var s="KHR_draco_mesh_compression",l=function(){function e(e){this.name=s,this._loader=e,this.enabled=r.DracoCompression.DecoderAvailable&&this._loader.isExtensionUsed(s)}return e.prototype.dispose=function(){delete this.dracoCompression,delete this._loader},e.prototype._loadVertexDataAsync=function(e,t,n){var a=this;return o.b.LoadExtensionAsync(e,t,this.name,function(i,s){if(null!=t.mode){if(5!==t.mode&&4!==t.mode)throw new Error(e+": Unsupported mode "+t.mode);if(5===t.mode)throw new Error(e+": Mode "+t.mode+" is not currently supported")}var l={},u=function(e,t){var r=s.attributes[e];null!=r&&(n._delayInfo=n._delayInfo||[],-1===n._delayInfo.indexOf(t)&&n._delayInfo.push(t),l[t]=r)};u("POSITION",r.VertexBuffer.PositionKind),u("NORMAL",r.VertexBuffer.NormalKind),u("TANGENT",r.VertexBuffer.TangentKind),u("TEXCOORD_0",r.VertexBuffer.UVKind),u("TEXCOORD_1",r.VertexBuffer.UV2Kind),u("JOINTS_0",r.VertexBuffer.MatricesIndicesKind),u("WEIGHTS_0",r.VertexBuffer.MatricesWeightsKind),u("COLOR_0",r.VertexBuffer.ColorKind);var c=o.a.Get(i,a._loader.gltf.bufferViews,s.bufferView);return c._dracoBabylonGeometry||(c._dracoBabylonGeometry=a._loader.loadBufferViewAsync("#/bufferViews/"+c.index,c).then(function(t){return(a.dracoCompression||r.DracoCompression.Default).decodeMeshAsync(t,l).then(function(e){var t=new r.Geometry(n.name,a._loader.babylonScene);return e.applyToGeometry(t),t}).catch(function(t){throw new Error(e+": "+t.message)})})),c._dracoBabylonGeometry})},e}();o.b.RegisterExtension(s,function(e){return new l(e)});var u,c="KHR_lights_punctual";!function(e){e.DIRECTIONAL="directional",e.POINT="point",e.SPOT="spot"}(u||(u={}));var f=function(){function e(e){this.name=c,this._loader=e,this.enabled=this._loader.isExtensionUsed(c)}return e.prototype.dispose=function(){delete this._loader,delete this._lights},e.prototype.onLoading=function(){var e=this._loader.gltf.extensions;if(e&&e[this.name]){var t=e[this.name];this._lights=t.lights}},e.prototype.loadNodeAsync=function(e,t,n){var a=this;return o.b.LoadExtensionAsync(e,t,this.name,function(i,s){return a._loader.loadNodeAsync(e,t,function(e){var t,l=o.a.Get(i,a._lights,s.light),c=l.name||e.name;switch(a._loader.babylonScene._blockEntityCollection=a._loader._forAssetContainer,l.type){case u.DIRECTIONAL:t=new r.DirectionalLight(c,r.Vector3.Backward(),a._loader.babylonScene);break;case u.POINT:t=new r.PointLight(c,r.Vector3.Zero(),a._loader.babylonScene);break;case u.SPOT:var f=new r.SpotLight(c,r.Vector3.Zero(),r.Vector3.Backward(),0,1,a._loader.babylonScene);f.angle=2*(l.spot&&l.spot.outerConeAngle||Math.PI/4),f.innerAngle=2*(l.spot&&l.spot.innerConeAngle||0),t=f;break;default:throw a._loader.babylonScene._blockEntityCollection=!1,new Error(i+": Invalid light type ("+l.type+")")}a._loader.babylonScene._blockEntityCollection=!1,t.falloffType=r.Light.FALLOFF_GLTF,t.diffuse=l.color?r.Color3.FromArray(l.color):r.Color3.White(),t.intensity=null==l.intensity?1:l.intensity,t.range=null==l.range?Number.MAX_VALUE:l.range,t.parent=e,a._loader._babylonLights.push(t),o.b.AddPointerMetadata(t,i),n(e)})})},e}();o.b.RegisterExtension(c,function(e){return new f(e)});var d="KHR_materials_pbrSpecularGlossiness",h=function(){function e(e){this.name=d,this.order=200,this._loader=e,this.enabled=this._loader.isExtensionUsed(d)}return e.prototype.dispose=function(){delete this._loader},e.prototype.loadMaterialPropertiesAsync=function(e,t,n){var r=this;return o.b.LoadExtensionAsync(e,t,this.name,function(o,a){var i=new Array;return i.push(r._loader.loadMaterialBasePropertiesAsync(e,t,n)),i.push(r._loadSpecularGlossinessPropertiesAsync(o,t,a,n)),r._loader.loadMaterialAlphaProperties(e,t,n),Promise.all(i).then(function(){})})},e.prototype._loadSpecularGlossinessPropertiesAsync=function(e,t,n,o){if(!(o instanceof r.PBRMaterial))throw new Error(e+": Material type not supported");var a=new Array;return o.metallic=null,o.roughness=null,n.diffuseFactor?(o.albedoColor=r.Color3.FromArray(n.diffuseFactor),o.alpha=n.diffuseFactor[3]):o.albedoColor=r.Color3.White(),o.reflectivityColor=n.specularFactor?r.Color3.FromArray(n.specularFactor):r.Color3.White(),o.microSurface=null==n.glossinessFactor?1:n.glossinessFactor,n.diffuseTexture&&a.push(this._loader.loadTextureInfoAsync(e+"/diffuseTexture",n.diffuseTexture,function(e){e.name=o.name+" (Diffuse)",o.albedoTexture=e})),n.specularGlossinessTexture&&(a.push(this._loader.loadTextureInfoAsync(e+"/specularGlossinessTexture",n.specularGlossinessTexture,function(e){e.name=o.name+" (Specular Glossiness)",o.reflectivityTexture=e})),o.reflectivityTexture.hasAlpha=!0,o.useMicroSurfaceFromReflectivityMapAlpha=!0),Promise.all(a).then(function(){})},e}();o.b.RegisterExtension(d,function(e){return new h(e)});var p="KHR_materials_unlit",m=function(){function e(e){this.name=p,this.order=210,this._loader=e,this.enabled=this._loader.isExtensionUsed(p)}return e.prototype.dispose=function(){delete this._loader},e.prototype.loadMaterialPropertiesAsync=function(e,t,n){var r=this;return o.b.LoadExtensionAsync(e,t,this.name,function(){return r._loadUnlitPropertiesAsync(e,t,n)})},e.prototype._loadUnlitPropertiesAsync=function(e,t,n){if(!(n instanceof r.PBRMaterial))throw new Error(e+": Material type not supported");var o=new Array;n.unlit=!0;var a=t.pbrMetallicRoughness;return a&&(a.baseColorFactor?(n.albedoColor=r.Color3.FromArray(a.baseColorFactor),n.alpha=a.baseColorFactor[3]):n.albedoColor=r.Color3.White(),a.baseColorTexture&&o.push(this._loader.loadTextureInfoAsync(e+"/baseColorTexture",a.baseColorTexture,function(e){e.name=n.name+" (Base Color)",n.albedoTexture=e}))),t.doubleSided&&(n.backFaceCulling=!1,n.twoSidedLighting=!0),this._loader.loadMaterialAlphaProperties(e,t,n),Promise.all(o).then(function(){})},e}();o.b.RegisterExtension(p,function(e){return new m(e)});var _="KHR_materials_clearcoat",y=function(){function e(e){this.name=_,this.order=190,this._loader=e,this.enabled=this._loader.isExtensionUsed(_)}return e.prototype.dispose=function(){delete this._loader},e.prototype.loadMaterialPropertiesAsync=function(e,t,n){var r=this;return o.b.LoadExtensionAsync(e,t,this.name,function(o,a){var i=new Array;return i.push(r._loader.loadMaterialPropertiesAsync(e,t,n)),i.push(r._loadClearCoatPropertiesAsync(o,a,n)),Promise.all(i).then(function(){})})},e.prototype._loadClearCoatPropertiesAsync=function(e,t,n){if(!(n instanceof r.PBRMaterial))throw new Error(e+": Material type not supported");var o=new Array;return n.clearCoat.isEnabled=!0,null!=t.clearcoatFactor?n.clearCoat.intensity=t.clearcoatFactor:n.clearCoat.intensity=0,t.clearcoatTexture&&o.push(this._loader.loadTextureInfoAsync(e+"/clearcoatTexture",t.clearcoatTexture,function(e){e.name=n.name+" (ClearCoat Intensity)",n.clearCoat.texture=e})),null!=t.clearcoatRoughnessFactor?n.clearCoat.roughness=t.clearcoatRoughnessFactor:n.clearCoat.roughness=0,t.clearcoatRoughnessTexture&&o.push(this._loader.loadTextureInfoAsync(e+"/clearcoatRoughnessTexture",t.clearcoatRoughnessTexture,function(e){e.name=n.name+" (ClearCoat Roughness)",n.clearCoat.texture=e})),t.clearcoatNormalTexture&&(o.push(this._loader.loadTextureInfoAsync(e+"/clearcoatNormalTexture",t.clearcoatNormalTexture,function(e){e.name=n.name+" (ClearCoat Normal)",n.clearCoat.bumpTexture=e})),n.invertNormalMapX=!n.getScene().useRightHandedSystem,n.invertNormalMapY=n.getScene().useRightHandedSystem,null!=t.clearcoatNormalTexture.scale&&(n.clearCoat.bumpTexture.level=t.clearcoatNormalTexture.scale)),Promise.all(o).then(function(){})},e}();o.b.RegisterExtension(_,function(e){return new y(e)});var b="KHR_materials_sheen",v=function(){function e(e){this.name=b,this.order=190,this._loader=e,this.enabled=this._loader.isExtensionUsed(b)}return e.prototype.dispose=function(){delete this._loader},e.prototype.loadMaterialPropertiesAsync=function(e,t,n){var r=this;return o.b.LoadExtensionAsync(e,t,this.name,function(o,a){var i=new Array;return i.push(r._loader.loadMaterialPropertiesAsync(e,t,n)),i.push(r._loadSheenPropertiesAsync(o,a,n)),Promise.all(i).then(function(){})})},e.prototype._loadSheenPropertiesAsync=function(e,t,n){if(!(n instanceof r.PBRMaterial))throw new Error(e+": Material type not supported");var o=new Array;return n.sheen.isEnabled=!0,null!=t.intensityFactor?n.sheen.intensity=t.intensityFactor:n.sheen.intensity=0,null!=t.colorFactor&&(n.sheen.color=r.Color3.FromArray(t.colorFactor)),t.colorIntensityTexture&&o.push(this._loader.loadTextureInfoAsync(e+"/sheenTexture",t.colorIntensityTexture,function(e){e.name=n.name+" (Sheen Intensity)",n.sheen.texture=e})),Promise.all(o).then(function(){})},e}();o.b.RegisterExtension(b,function(e){return new v(e)});var A="KHR_materials_specular",g=function(){function e(e){this.name=A,this.order=190,this._loader=e,this.enabled=this._loader.isExtensionUsed(A)}return e.prototype.dispose=function(){delete this._loader},e.prototype.loadMaterialPropertiesAsync=function(e,t,n){var r=this;return o.b.LoadExtensionAsync(e,t,this.name,function(o,a){var i=new Array;return i.push(r._loader.loadMaterialPropertiesAsync(e,t,n)),i.push(r._loadSpecularPropertiesAsync(o,a,n)),Promise.all(i).then(function(){})})},e.prototype._loadSpecularPropertiesAsync=function(e,t,n){if(!(n instanceof r.PBRMaterial))throw new Error(e+": Material type not supported");return void 0!==t.specularFactor&&(n.metallicF0Factor=t.specularFactor),t.specularTexture&&(n.useMetallicF0FactorFromMetallicTexture=!0),Promise.resolve()},e}();o.b.RegisterExtension(A,function(e){return new g(e)});var T="KHR_mesh_quantization",x=function(){function e(e){this.name=T,this.enabled=e.isExtensionUsed(T)}return e.prototype.dispose=function(){},e}();o.b.RegisterExtension(T,function(e){return new x(e)});var E="KHR_texture_basisu",L=function(){function e(e){this.name=E,this._loader=e,this.enabled=e.isExtensionUsed(E)}return e.prototype.dispose=function(){delete this._loader},e.prototype._loadTextureAsync=function(e,t,n){var r=this;return o.b.LoadExtensionAsync(e,t,this.name,function(a,i){var s=null==t.sampler?o.b.DefaultSampler:o.a.Get(e+"/sampler",r._loader.gltf.samplers,t.sampler),l=o.a.Get(a+"/source",r._loader.gltf.images,i.source);return r._loader._createTextureAsync(e,s,l,function(e){e.gammaSpace=!1,n(e)})})},e}();o.b.RegisterExtension(E,function(e){return new L(e)});var O="KHR_texture_transform",M=function(){function e(e){this.name=O,this._loader=e,this.enabled=this._loader.isExtensionUsed(O)}return e.prototype.dispose=function(){delete this._loader},e.prototype.loadTextureInfoAsync=function(e,t,n){var a=this;return o.b.LoadExtensionAsync(e,t,this.name,function(o,i){return a._loader.loadTextureInfoAsync(e,t,function(e){if(!(e instanceof r.Texture))throw new Error(o+": Texture type not supported");i.offset&&(e.uOffset=i.offset[0],e.vOffset=i.offset[1]),e.uRotationCenter=0,e.vRotationCenter=0,i.rotation&&(e.wAng=-i.rotation),i.scale&&(e.uScale=i.scale[0],e.vScale=i.scale[1]),null!=i.texCoord&&(e.coordinatesIndex=i.texCoord),n(e)})})},e}();o.b.RegisterExtension(O,function(e){return new M(e)});var S="MSFT_audio_emitter",w=function(){function e(e){this.name=S,this._loader=e,this.enabled=this._loader.isExtensionUsed(S)}return e.prototype.dispose=function(){delete this._loader,delete this._clips,delete this._emitters},e.prototype.onLoading=function(){var e=this._loader.gltf.extensions;if(e&&e[this.name]){var t=e[this.name];this._clips=t.clips,this._emitters=t.emitters,o.a.Assign(this._clips),o.a.Assign(this._emitters)}},e.prototype.loadSceneAsync=function(e,t){var n=this;return o.b.LoadExtensionAsync(e,t,this.name,function(r,a){var i=new Array;i.push(n._loader.loadSceneAsync(e,t));for(var s=0,l=a.emitters;s<l.length;s++){var u=l[s],c=o.a.Get(r+"/emitters",n._emitters,u);if(null!=c.refDistance||null!=c.maxDistance||null!=c.rolloffFactor||null!=c.distanceModel||null!=c.innerAngle||null!=c.outerAngle)throw new Error(r+": Direction or Distance properties are not allowed on emitters attached to a scene");i.push(n._loadEmitterAsync(r+"/emitters/"+c.index,c))}return Promise.all(i).then(function(){})})},e.prototype.loadNodeAsync=function(e,t,n){var a=this;return o.b.LoadExtensionAsync(e,t,this.name,function(e,i){var s=new Array;return a._loader.loadNodeAsync(e,t,function(t){for(var l=function(n){var i=o.a.Get(e+"/emitters",a._emitters,n);s.push(a._loadEmitterAsync(e+"/emitters/"+i.index,i).then(function(){for(var e=0,n=i._babylonSounds;e<n.length;e++){var o=n[e];o.attachToMesh(t),null==i.innerAngle&&null==i.outerAngle||(o.setLocalDirectionToMesh(r.Vector3.Forward()),o.setDirectionalCone(2*r.Tools.ToDegrees(null==i.innerAngle?Math.PI:i.innerAngle),2*r.Tools.ToDegrees(null==i.outerAngle?Math.PI:i.outerAngle),0))}}))},u=0,c=i.emitters;u<c.length;u++){l(c[u])}n(t)}).then(function(e){return Promise.all(s).then(function(){return e})})})},e.prototype.loadAnimationAsync=function(e,t){var n=this;return o.b.LoadExtensionAsync(e,t,this.name,function(r,a){return n._loader.loadAnimationAsync(e,t).then(function(i){var s=new Array;o.a.Assign(a.events);for(var l=0,u=a.events;l<u.length;l++){var c=u[l];s.push(n._loadAnimationEventAsync(r+"/events/"+c.index,e,t,c,i))}return Promise.all(s).then(function(){return i})})})},e.prototype._loadClipAsync=function(e,t){if(t._objectURL)return t._objectURL;var n;if(t.uri)n=this._loader.loadUriAsync(e,t,t.uri);else{var r=o.a.Get(e+"/bufferView",this._loader.gltf.bufferViews,t.bufferView);n=this._loader.loadBufferViewAsync("#/bufferViews/"+r.index,r)}return t._objectURL=n.then(function(e){return URL.createObjectURL(new Blob([e],{type:t.mimeType}))}),t._objectURL},e.prototype._loadEmitterAsync=function(e,t){var n=this;if(t._babylonSounds=t._babylonSounds||[],!t._babylonData){for(var a=new Array,i=t.name||"emitter"+t.index,s={loop:!1,autoplay:!1,volume:null==t.volume?1:t.volume},l=function(e){var l="#/extensions/"+u.name+"/clips",c=o.a.Get(l,u._clips,t.clips[e].clip);a.push(u._loadClipAsync(l+"/"+t.clips[e].clip,c).then(function(o){var a=t._babylonSounds[e]=new r.Sound(i,o,n._loader.babylonScene,null,s);a.refDistance=t.refDistance||1,a.maxDistance=t.maxDistance||256,a.rolloffFactor=t.rolloffFactor||1,a.distanceModel=t.distanceModel||"exponential",a._positionInEmitterSpace=!0}))},u=this,c=0;c<t.clips.length;c++)l(c);var f=Promise.all(a).then(function(){var e=t.clips.map(function(e){return e.weight||1}),n=new r.WeightedSound(t.loop||!1,t._babylonSounds,e);t.innerAngle&&(n.directionalConeInnerAngle=2*r.Tools.ToDegrees(t.innerAngle)),t.outerAngle&&(n.directionalConeOuterAngle=2*r.Tools.ToDegrees(t.outerAngle)),t.volume&&(n.volume=t.volume),t._babylonData.sound=n});t._babylonData={loaded:f}}return t._babylonData.loaded},e.prototype._getEventAction=function(e,t,n,r,o){switch(n){case"play":return function(e){var n=(o||0)+(e-r);t.play(n)};case"stop":return function(e){t.stop()};case"pause":return function(e){t.pause()};default:throw new Error(e+": Unsupported action "+n)}},e.prototype._loadAnimationEventAsync=function(e,t,n,a,i){var s=this;if(0==i.targetedAnimations.length)return Promise.resolve();var l=i.targetedAnimations[0],u=a.emitter,c=o.a.Get("#/extensions/"+this.name+"/emitters",this._emitters,u);return this._loadEmitterAsync(e,c).then(function(){var t=c._babylonData.sound;if(t){var n=new r.AnimationEvent(a.time,s._getEventAction(e,t,a.action,a.time,a.startOffset));l.animation.addEvent(n),i.onAnimationGroupEndObservable.add(function(){t.stop()}),i.onAnimationGroupPauseObservable.add(function(){t.pause()})}})},e}();o.b.RegisterExtension(S,function(e){return new w(e)});var C="MSFT_lod",N=function(){function e(e){this.name=C,this.order=100,this.maxLODsToLoad=10,this.onNodeLODsLoadedObservable=new r.Observable,this.onMaterialLODsLoadedObservable=new r.Observable,this._nodeIndexLOD=null,this._nodeSignalLODs=new Array,this._nodePromiseLODs=new Array,this._materialIndexLOD=null,this._materialSignalLODs=new Array,this._materialPromiseLODs=new Array,this._indexLOD=null,this._bufferLODs=new Array,this._loader=e,this.enabled=this._loader.isExtensionUsed(C)}return e.prototype.dispose=function(){delete this._loader,this._nodeIndexLOD=null,this._nodeSignalLODs.length=0,this._nodePromiseLODs.length=0,this._materialIndexLOD=null,this._materialSignalLODs.length=0,this._materialPromiseLODs.length=0,this._indexLOD=null,this._bufferLODs.length=0,this.onMaterialLODsLoadedObservable.clear(),this.onNodeLODsLoadedObservable.clear()},e.prototype.onReady=function(){for(var e=this,t=function(t){var r=Promise.all(n._nodePromiseLODs[t]).then(function(){0!==t&&e._loader.endPerformanceCounter("Node LOD "+t),e._loader.log("Loaded node LOD "+t),e.onNodeLODsLoadedObservable.notifyObservers(t),t!==e._nodePromiseLODs.length-1&&(e._loader.startPerformanceCounter("Node LOD "+(t+1)),e._nodeSignalLODs[t]&&e._nodeSignalLODs[t].resolve())});n._loader._completePromises.push(r)},n=this,r=0;r<this._nodePromiseLODs.length;r++)t(r);var o=function(t){var n=Promise.all(a._materialPromiseLODs[t]).then(function(){0!==t&&e._loader.endPerformanceCounter("Material LOD "+t),e._loader.log("Loaded material LOD "+t),e.onMaterialLODsLoadedObservable.notifyObservers(t),t!==e._materialPromiseLODs.length-1&&(e._loader.startPerformanceCounter("Material LOD "+(t+1)),e._materialSignalLODs[t]&&e._materialSignalLODs[t].resolve())});a._loader._completePromises.push(n)},a=this;for(r=0;r<this._materialPromiseLODs.length;r++)o(r);for(r=1;r<this._bufferLODs.length;r++)this._loadBufferLOD(r)},e.prototype.loadSceneAsync=function(e,t){var n=this._loader.loadSceneAsync(e,t);return 0!==this._bufferLODs.length&&this._loadBufferLOD(0),n},e.prototype.loadNodeAsync=function(e,t,n){var a=this;return o.b.LoadExtensionAsync(e,t,this.name,function(e,n){var o,i=a._getLODs(e,t,a._loader.gltf.nodes,n.ids);a._loader.logOpen(""+e);for(var s=function(e){var t=i[e];a._indexLOD=e,0!==e&&(a._nodeIndexLOD=e,a._nodeSignalLODs[e]=a._nodeSignalLODs[e]||new r.Deferred);var n=a._loader.loadNodeAsync("#/nodes/"+t.index,t,function(e){e.setEnabled(!1)}).then(function(t){if(0!==e){var n=i[e-1];n._babylonTransformNode&&(a._disposeTransformNode(n._babylonTransformNode),delete n._babylonTransformNode)}return t.setEnabled(!0),t});0===e?o=n:a._nodeIndexLOD=null,a._indexLOD=null,a._nodePromiseLODs[e]=a._nodePromiseLODs[e]||[],a._nodePromiseLODs[e].push(n)},l=0;l<i.length;l++)s(l);return a._loader.logClose(),o})},e.prototype._loadMaterialAsync=function(e,t,n,r,a){var i=this;return this._indexLOD?null:o.b.LoadExtensionAsync(e,t,this.name,function(e,o){var s,l=i._getLODs(e,t,i._loader.gltf.materials,o.ids);i._loader.logOpen(""+e);for(var u=function(e){var t=l[e];i._indexLOD=e,0!==e&&(i._materialIndexLOD=e);var o=i._loader._loadMaterialAsync("#/materials/"+t.index,t,n,r,function(t){0===e&&a(t)}).then(function(t){if(0!==e){a(t);var n=l[e-1]._data;n[r]&&(i._disposeMaterials([n[r].babylonMaterial]),delete n[r])}return t});0===e?s=o:i._materialIndexLOD=null,i._indexLOD=null,i._materialPromiseLODs[e]=i._materialPromiseLODs[e]||[],i._materialPromiseLODs[e].push(o)},c=0;c<l.length;c++)u(c);return i._loader.logClose(),s})},e.prototype._loadUriAsync=function(e,t,n){var o=this;if(null!==this._materialIndexLOD){this._loader.log("deferred");var a=this._materialIndexLOD-1;return this._materialSignalLODs[a]=this._materialSignalLODs[a]||new r.Deferred,this._materialSignalLODs[a].promise.then(function(){return o._loader.loadUriAsync(e,t,n)})}if(null!==this._nodeIndexLOD){this._loader.log("deferred");a=this._nodeIndexLOD-1;return this._nodeSignalLODs[a]=this._nodeSignalLODs[a]||new r.Deferred,this._nodeSignalLODs[this._nodeIndexLOD-1].promise.then(function(){return o._loader.loadUriAsync(e,t,n)})}return null},e.prototype.loadBufferAsync=function(e,t,n,o){if(this._loader.parent.useRangeRequests&&!t.uri){if(!this._loader.bin)throw new Error(e+": Uri is missing or the binary glTF is missing its binary chunk");var a=this._indexLOD||0,i=n,s=i+o-1,l=this._bufferLODs[a];return l?(l.start=Math.min(l.start,i),l.end=Math.max(l.end,s)):(l={start:i,end:s,loaded:new r.Deferred},this._bufferLODs[a]=l),l.loaded.promise.then(function(e){return new Uint8Array(e.buffer,e.byteOffset+n-l.start,o)})}return null},e.prototype._loadBufferLOD=function(e){var t=this._bufferLODs[e];this._loader.bin.readAsync(t.start,t.end-t.start+1).then(function(e){t.loaded.resolve(e)},function(e){t.loaded.reject(e)})},e.prototype._getLODs=function(e,t,n,r){if(this.maxLODsToLoad<=0)throw new Error("maxLODsToLoad must be greater than zero");for(var a=new Array,i=r.length-1;i>=0;i--)if(a.push(o.a.Get(e+"/ids/"+r[i],n,r[i])),a.length===this.maxLODsToLoad)return a;return a.push(t),a},e.prototype._disposeTransformNode=function(e){var t=this,n=new Array,r=e.material;r&&n.push(r);for(var o=0,a=e.getChildMeshes();o<a.length;o++){var i=a[o];i.material&&n.push(i.material)}e.dispose();var s=n.filter(function(e){return t._loader.babylonScene.meshes.every(function(t){return t.material!=e})});this._disposeMaterials(s)},e.prototype._disposeMaterials=function(e){for(var t={},n=0,r=e;n<r.length;n++){for(var o=0,a=(c=r[n]).getActiveTextures();o<a.length;o++){var i=a[o];t[i.uniqueId]=i}c.dispose()}for(var s in t)for(var l=0,u=this._loader.babylonScene.materials;l<u.length;l++){var c;(c=u[l]).hasTexture(t[s])&&delete t[s]}for(var s in t)t[s].dispose()},e}();o.b.RegisterExtension(C,function(e){return new N(e)});var P="MSFT_minecraftMesh",R=function(){function e(e){this.name=P,this._loader=e,this.enabled=this._loader.isExtensionUsed(P)}return e.prototype.dispose=function(){delete this._loader},e.prototype.loadMaterialPropertiesAsync=function(e,t,n){var a=this;return o.b.LoadExtraAsync(e,t,this.name,function(o,i){if(i){if(!(n instanceof r.PBRMaterial))throw new Error(o+": Material type not supported");var s=a._loader.loadMaterialPropertiesAsync(e,t,n);return n.needAlphaBlending()&&(n.forceDepthWrite=!0,n.separateCullingPass=!0),n.backFaceCulling=n.forceDepthWrite,n.twoSidedLighting=!0,s}return null})},e}();o.b.RegisterExtension(P,function(e){return new R(e)});var I="MSFT_sRGBFactors",F=function(){function e(e){this.name=I,this._loader=e,this.enabled=this._loader.isExtensionUsed(I)}return e.prototype.dispose=function(){delete this._loader},e.prototype.loadMaterialPropertiesAsync=function(e,t,n){var a=this;return o.b.LoadExtraAsync(e,t,this.name,function(o,i){if(i){if(!(n instanceof r.PBRMaterial))throw new Error(o+": Material type not supported");var s=a._loader.loadMaterialPropertiesAsync(e,t,n);return n.albedoTexture||n.albedoColor.toLinearSpaceToRef(n.albedoColor),n.reflectivityTexture||n.reflectivityColor.toLinearSpaceToRef(n.reflectivityColor),s}return null})},e}();o.b.RegisterExtension(I,function(e){return new F(e)});var V="ExtrasAsMetadata",B=function(){function e(e){this.name=V,this.enabled=!0,this._loader=e}return e.prototype._assignExtras=function(e,t){if(t.extras&&Object.keys(t.extras).length>0){var n=e.metadata=e.metadata||{};(n.gltf=n.gltf||{}).extras=t.extras}},e.prototype.dispose=function(){delete this._loader},e.prototype.loadNodeAsync=function(e,t,n){var r=this;return this._loader.loadNodeAsync(e,t,function(e){r._assignExtras(e,t),n(e)})},e.prototype.loadCameraAsync=function(e,t,n){var r=this;return this._loader.loadCameraAsync(e,t,function(e){r._assignExtras(e,t),n(e)})},e.prototype.createMaterial=function(e,t,n){var r=this._loader.createMaterial(e,t,n);return this._assignExtras(r,t),r},e}();o.b.RegisterExtension(V,function(e){return new B(e)}),n.d(t,"EXT_lights_image_based",function(){return i}),n.d(t,"KHR_draco_mesh_compression",function(){return l}),n.d(t,"KHR_lights",function(){return f}),n.d(t,"KHR_materials_pbrSpecularGlossiness",function(){return h}),n.d(t,"KHR_materials_unlit",function(){return m}),n.d(t,"KHR_materials_clearcoat",function(){return y}),n.d(t,"KHR_materials_sheen",function(){return v}),n.d(t,"KHR_materials_specular",function(){return g}),n.d(t,"KHR_mesh_quantization",function(){return x}),n.d(t,"KHR_texture_basisu",function(){return L}),n.d(t,"KHR_texture_transform",function(){return M}),n.d(t,"MSFT_audio_emitter",function(){return w}),n.d(t,"MSFT_lod",function(){return N}),n.d(t,"MSFT_minecraftMesh",function(){return R}),n.d(t,"MSFT_sRGBFactors",function(){return F}),n.d(t,"ExtrasAsMetadata",function(){return B})},function(e,t,n){"use strict";n.r(t);var r=n(1);n.d(t,"ArrayItem",function(){return r.a}),n.d(t,"GLTFLoader",function(){return r.b});var o=n(5);n.d(t,"EXT_lights_image_based",function(){return o.EXT_lights_image_based}),n.d(t,"KHR_draco_mesh_compression",function(){return o.KHR_draco_mesh_compression}),n.d(t,"KHR_lights",function(){return o.KHR_lights}),n.d(t,"KHR_materials_pbrSpecularGlossiness",function(){return o.KHR_materials_pbrSpecularGlossiness}),n.d(t,"KHR_materials_unlit",function(){return o.KHR_materials_unlit}),n.d(t,"KHR_materials_clearcoat",function(){return o.KHR_materials_clearcoat}),n.d(t,"KHR_materials_sheen",function(){return o.KHR_materials_sheen}),n.d(t,"KHR_materials_specular",function(){return o.KHR_materials_specular}),n.d(t,"KHR_mesh_quantization",function(){return o.KHR_mesh_quantization}),n.d(t,"KHR_texture_basisu",function(){return o.KHR_texture_basisu}),n.d(t,"KHR_texture_transform",function(){return o.KHR_texture_transform}),n.d(t,"MSFT_audio_emitter",function(){return o.MSFT_audio_emitter}),n.d(t,"MSFT_lod",function(){return o.MSFT_lod}),n.d(t,"MSFT_minecraftMesh",function(){return o.MSFT_minecraftMesh}),n.d(t,"MSFT_sRGBFactors",function(){return o.MSFT_sRGBFactors}),n.d(t,"ExtrasAsMetadata",function(){return o.ExtrasAsMetadata})},function(e,t,n){"use strict";n.r(t);
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
var r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)};function o(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}var a,i,s,l,u,c,f,d;!function(e){e[e.BYTE=5120]="BYTE",e[e.UNSIGNED_BYTE=5121]="UNSIGNED_BYTE",e[e.SHORT=5122]="SHORT",e[e.UNSIGNED_SHORT=5123]="UNSIGNED_SHORT",e[e.FLOAT=5126]="FLOAT"}(a||(a={})),function(e){e[e.FRAGMENT=35632]="FRAGMENT",e[e.VERTEX=35633]="VERTEX"}(i||(i={})),function(e){e[e.BYTE=5120]="BYTE",e[e.UNSIGNED_BYTE=5121]="UNSIGNED_BYTE",e[e.SHORT=5122]="SHORT",e[e.UNSIGNED_SHORT=5123]="UNSIGNED_SHORT",e[e.INT=5124]="INT",e[e.UNSIGNED_INT=5125]="UNSIGNED_INT",e[e.FLOAT=5126]="FLOAT",e[e.FLOAT_VEC2=35664]="FLOAT_VEC2",e[e.FLOAT_VEC3=35665]="FLOAT_VEC3",e[e.FLOAT_VEC4=35666]="FLOAT_VEC4",e[e.INT_VEC2=35667]="INT_VEC2",e[e.INT_VEC3=35668]="INT_VEC3",e[e.INT_VEC4=35669]="INT_VEC4",e[e.BOOL=35670]="BOOL",e[e.BOOL_VEC2=35671]="BOOL_VEC2",e[e.BOOL_VEC3=35672]="BOOL_VEC3",e[e.BOOL_VEC4=35673]="BOOL_VEC4",e[e.FLOAT_MAT2=35674]="FLOAT_MAT2",e[e.FLOAT_MAT3=35675]="FLOAT_MAT3",e[e.FLOAT_MAT4=35676]="FLOAT_MAT4",e[e.SAMPLER_2D=35678]="SAMPLER_2D"}(s||(s={})),function(e){e[e.CLAMP_TO_EDGE=33071]="CLAMP_TO_EDGE",e[e.MIRRORED_REPEAT=33648]="MIRRORED_REPEAT",e[e.REPEAT=10497]="REPEAT"}(l||(l={})),function(e){e[e.NEAREST=9728]="NEAREST",e[e.LINEAR=9728]="LINEAR",e[e.NEAREST_MIPMAP_NEAREST=9984]="NEAREST_MIPMAP_NEAREST",e[e.LINEAR_MIPMAP_NEAREST=9985]="LINEAR_MIPMAP_NEAREST",e[e.NEAREST_MIPMAP_LINEAR=9986]="NEAREST_MIPMAP_LINEAR",e[e.LINEAR_MIPMAP_LINEAR=9987]="LINEAR_MIPMAP_LINEAR"}(u||(u={})),function(e){e[e.ALPHA=6406]="ALPHA",e[e.RGB=6407]="RGB",e[e.RGBA=6408]="RGBA",e[e.LUMINANCE=6409]="LUMINANCE",e[e.LUMINANCE_ALPHA=6410]="LUMINANCE_ALPHA"}(c||(c={})),function(e){e[e.FRONT=1028]="FRONT",e[e.BACK=1029]="BACK",e[e.FRONT_AND_BACK=1032]="FRONT_AND_BACK"}(f||(f={})),function(e){e[e.ZERO=0]="ZERO",e[e.ONE=1]="ONE",e[e.SRC_COLOR=768]="SRC_COLOR",e[e.ONE_MINUS_SRC_COLOR=769]="ONE_MINUS_SRC_COLOR",e[e.DST_COLOR=774]="DST_COLOR",e[e.ONE_MINUS_DST_COLOR=775]="ONE_MINUS_DST_COLOR",e[e.SRC_ALPHA=770]="SRC_ALPHA",e[e.ONE_MINUS_SRC_ALPHA=771]="ONE_MINUS_SRC_ALPHA",e[e.DST_ALPHA=772]="DST_ALPHA",e[e.ONE_MINUS_DST_ALPHA=773]="ONE_MINUS_DST_ALPHA",e[e.CONSTANT_COLOR=32769]="CONSTANT_COLOR",e[e.ONE_MINUS_CONSTANT_COLOR=32770]="ONE_MINUS_CONSTANT_COLOR",e[e.CONSTANT_ALPHA=32771]="CONSTANT_ALPHA",e[e.ONE_MINUS_CONSTANT_ALPHA=32772]="ONE_MINUS_CONSTANT_ALPHA",e[e.SRC_ALPHA_SATURATE=776]="SRC_ALPHA_SATURATE"}(d||(d={}));var h,p=n(0),m=function(){function e(){}return e.SetMatrix=function(e,t,n,r,o){var a=null;if("MODEL"===n.semantic?a=t.getWorldMatrix():"PROJECTION"===n.semantic?a=e.getProjectionMatrix():"VIEW"===n.semantic?a=e.getViewMatrix():"MODELVIEWINVERSETRANSPOSE"===n.semantic?a=p.Matrix.Transpose(t.getWorldMatrix().multiply(e.getViewMatrix()).invert()):"MODELVIEW"===n.semantic?a=t.getWorldMatrix().multiply(e.getViewMatrix()):"MODELVIEWPROJECTION"===n.semantic?a=t.getWorldMatrix().multiply(e.getTransformMatrix()):"MODELINVERSE"===n.semantic?a=t.getWorldMatrix().invert():"VIEWINVERSE"===n.semantic?a=e.getViewMatrix().invert():"PROJECTIONINVERSE"===n.semantic?a=e.getProjectionMatrix().invert():"MODELVIEWINVERSE"===n.semantic?a=t.getWorldMatrix().multiply(e.getViewMatrix()).invert():"MODELVIEWPROJECTIONINVERSE"===n.semantic?a=t.getWorldMatrix().multiply(e.getTransformMatrix()).invert():"MODELINVERSETRANSPOSE"===n.semantic&&(a=p.Matrix.Transpose(t.getWorldMatrix().invert())),a)switch(n.type){case s.FLOAT_MAT2:o.setMatrix2x2(r,p.Matrix.GetAsMatrix2x2(a));break;case s.FLOAT_MAT3:o.setMatrix3x3(r,p.Matrix.GetAsMatrix3x3(a));break;case s.FLOAT_MAT4:o.setMatrix(r,a)}},e.SetUniform=function(e,t,n,r){switch(r){case s.FLOAT:return e.setFloat(t,n),!0;case s.FLOAT_VEC2:return e.setVector2(t,p.Vector2.FromArray(n)),!0;case s.FLOAT_VEC3:return e.setVector3(t,p.Vector3.FromArray(n)),!0;case s.FLOAT_VEC4:return e.setVector4(t,p.Vector4.FromArray(n)),!0;default:return!1}},e.GetWrapMode=function(e){switch(e){case l.CLAMP_TO_EDGE:return p.Texture.CLAMP_ADDRESSMODE;case l.MIRRORED_REPEAT:return p.Texture.MIRROR_ADDRESSMODE;case l.REPEAT:default:return p.Texture.WRAP_ADDRESSMODE}},e.GetByteStrideFromType=function(e){switch(e.type){case"VEC2":return 2;case"VEC3":return 3;case"VEC4":case"MAT2":return 4;case"MAT3":return 9;case"MAT4":return 16;default:return 1}},e.GetTextureFilterMode=function(e){switch(e){case u.LINEAR:case u.LINEAR_MIPMAP_NEAREST:case u.LINEAR_MIPMAP_LINEAR:return p.Texture.TRILINEAR_SAMPLINGMODE;case u.NEAREST:case u.NEAREST_MIPMAP_NEAREST:return p.Texture.NEAREST_SAMPLINGMODE;default:return p.Texture.BILINEAR_SAMPLINGMODE}},e.GetBufferFromBufferView=function(e,t,n,r,o){n=t.byteOffset+n;var i=e.loadedBufferViews[t.buffer];if(n+r>i.byteLength)throw new Error("Buffer access is out of range");var s=i.buffer;switch(n+=i.byteOffset,o){case a.BYTE:return new Int8Array(s,n,r);case a.UNSIGNED_BYTE:return new Uint8Array(s,n,r);case a.SHORT:return new Int16Array(s,n,r);case a.UNSIGNED_SHORT:return new Uint16Array(s,n,r);default:return new Float32Array(s,n,r)}},e.GetBufferFromAccessor=function(t,n){var r=t.bufferViews[n.bufferView],o=n.count*e.GetByteStrideFromType(n);return e.GetBufferFromBufferView(t,r,n.byteOffset,o,n.componentType)},e.DecodeBufferToText=function(e){for(var t="",n=e.byteLength,r=0;r<n;++r)t+=String.fromCharCode(e[r]);return t},e.GetDefaultMaterial=function(t){if(!e._DefaultMaterial){p.Effect.ShadersStore.GLTFDefaultMaterialVertexShader=["precision highp float;","","uniform mat4 worldView;","uniform mat4 projection;","","attribute vec3 position;","","void main(void)","{","    gl_Position = projection * worldView * vec4(position, 1.0);","}"].join("\n"),p.Effect.ShadersStore.GLTFDefaultMaterialPixelShader=["precision highp float;","","uniform vec4 u_emission;","","void main(void)","{","    gl_FragColor = u_emission;","}"].join("\n");var n={attributes:["position"],uniforms:["worldView","projection","u_emission"],samplers:new Array,needAlphaBlending:!1};e._DefaultMaterial=new p.ShaderMaterial("GLTFDefaultMaterial",t,{vertex:"GLTFDefaultMaterial",fragment:"GLTFDefaultMaterial"},n),e._DefaultMaterial.setColor4("u_emission",new p.Color4(.5,.5,.5,1))}return e._DefaultMaterial},e._DefaultMaterial=null,e}(),_=n(2);!function(e){e[e.IDENTIFIER=1]="IDENTIFIER",e[e.UNKNOWN=2]="UNKNOWN",e[e.END_OF_INPUT=3]="END_OF_INPUT"}(h||(h={}));var y=function(){function e(e){this._pos=0,this.currentToken=h.UNKNOWN,this.currentIdentifier="",this.currentString="",this.isLetterOrDigitPattern=/^[a-zA-Z0-9]+$/,this._toParse=e,this._maxPos=e.length}return e.prototype.getNextToken=function(){if(this.isEnd())return h.END_OF_INPUT;if(this.currentString=this.read(),this.currentToken=h.UNKNOWN,"_"===this.currentString||this.isLetterOrDigitPattern.test(this.currentString))for(this.currentToken=h.IDENTIFIER,this.currentIdentifier=this.currentString;!this.isEnd()&&(this.isLetterOrDigitPattern.test(this.currentString=this.peek())||"_"===this.currentString);)this.currentIdentifier+=this.currentString,this.forward();return this.currentToken},e.prototype.peek=function(){return this._toParse[this._pos]},e.prototype.read=function(){return this._toParse[this._pos++]},e.prototype.forward=function(){this._pos++},e.prototype.isEnd=function(){return this._pos>=this._maxPos},e}(),b=["MODEL","VIEW","PROJECTION","MODELVIEW","MODELVIEWPROJECTION","JOINTMATRIX"],v=["world","view","projection","worldView","worldViewProjection","mBones"],A=["translation","rotation","scale"],g=["position","rotationQuaternion","scaling"],T=function(e,t,n){for(var r in e){var o=e[r];n[t][r]=o}},x=function(e){if(e)for(var t=0;t<e.length/2;t++)e[2*t+1]=1-e[2*t+1]},E=function(e){if("NORMAL"===e.semantic)return"normal";if("POSITION"===e.semantic)return"position";if("JOINT"===e.semantic)return"matricesIndices";if("WEIGHT"===e.semantic)return"matricesWeights";if("COLOR"===e.semantic)return"color";if(e.semantic&&-1!==e.semantic.indexOf("TEXCOORD_")){var t=Number(e.semantic.split("_")[1]);return"uv"+(0===t?"":t+1)}return null},L=function(e){var t=null;if(e.translation||e.rotation||e.scale){var n=p.Vector3.FromArray(e.scale||[1,1,1]),r=p.Quaternion.FromArray(e.rotation||[0,0,0,1]),o=p.Vector3.FromArray(e.translation||[0,0,0]);t=p.Matrix.Compose(n,r,o)}else t=p.Matrix.FromArray(e.matrix);return t},O=function(e,t,n,r){for(var o=0;o<r.bones.length;o++)if(r.bones[o].name===n)return r.bones[o];var a=e.nodes;for(var i in a){var s=a[i];if(s.jointName){var l=s.children;for(o=0;o<l.length;o++){var u=e.nodes[l[o]];if(u.jointName&&u.jointName===n){var c=L(s),f=new p.Bone(s.name||"",r,O(e,t,s.jointName,r),c);return f.id=i,f}}}}return null},M=function(e,t){for(var n=0;n<e.length;n++)for(var r=e[n],o=0;o<r.node.children.length;o++){if(r.node.children[o]===t)return r.bone}return null},S=function(e,t){var n=e.nodes,r=n[t];if(r)return{node:r,id:t};for(var o in n)if((r=n[o]).jointName===t)return{node:r,id:o};return null},w=function(e,t){for(var n=0;n<e.jointNames.length;n++)if(e.jointNames[n]===t)return!0;return!1},C=function(e,t,n,r,o){if(r||(r=new p.Skeleton(t.name||"","",e.scene)),!t.babylonSkeleton)return r;var a=[],i=[];!function(e,t,n,r){for(var o in e.nodes){var a=e.nodes[o],i=o;if(a.jointName&&!w(n,a.jointName)){var s=L(a),l=new p.Bone(a.name||"",t,null,s);l.id=i,r.push({bone:l,node:a,id:i})}}for(var u=0;u<r.length;u++)for(var c=r[u],f=c.node.children,d=0;d<f.length;d++){for(var h=null,m=0;m<r.length;m++)if(r[m].id===f[d]){h=r[m];break}h&&(h.bone._parent=c.bone,c.bone.children.push(h.bone))}}(e,r,t,a),r.bones=[];for(var s=0;s<t.jointNames.length;s++){if(A=S(e,t.jointNames[s])){var l=A.node;if(l){o=A.id;var u=e.scene.getBoneByID(o);if(u)r.bones.push(u);else{for(var c=!1,f=null,d=0;d<s;d++){var h=S(e,t.jointNames[d]);if(h){var m=h.node;if(m){var _=m.children;if(_){c=!1;for(var y=0;y<_.length;y++)if(_[y]===o){f=O(e,t,t.jointNames[d],r),c=!0;break}if(c)break}}else p.Tools.Warn("Joint named "+t.jointNames[d]+" does not exist when looking for parent")}}var b=L(l);!f&&a.length>0&&(f=M(a,o))&&-1===i.indexOf(f)&&i.push(f),new p.Bone(l.jointName||"",r,f,b).id=o}}else p.Tools.Warn("Joint named "+t.jointNames[s]+" does not exist")}}var v=r.bones;r.bones=[];for(s=0;s<t.jointNames.length;s++){var A;if(A=S(e,t.jointNames[s]))for(d=0;d<v.length;d++)if(v[d].id===A.id){r.bones.push(v[d]);break}}r.prepare();for(s=0;s<i.length;s++)r.bones.push(i[s]);return r},N=function(e,t,n,r,o){if(o||(e.scene._blockEntityCollection=e.forAssetContainer,o=new p.Mesh(t.name||"",e.scene),e.scene._blockEntityCollection=!1,o.id=r),!t.babylonNode)return o;for(var a,i=[],s=null,l=new Array,u=new Array,c=new Array,f=new Array,d=0;d<n.length;d++){var h=n[d];if(P=e.meshes[h])for(var y=0;y<P.primitives.length;y++){var b=new p.VertexData,v=P.primitives[y];v.mode;var A=v.attributes,g=null,T=null;for(var E in A)if(g=e.accessors[A[E]],T=m.GetBufferFromAccessor(e,g),"NORMAL"===E)b.normals=new Float32Array(T.length),b.normals.set(T);else if("POSITION"===E){if(_.GLTFFileLoader.HomogeneousCoordinates){b.positions=new Float32Array(T.length-T.length/4);for(var L=0;L<T.length;L+=4)b.positions[L]=T[L],b.positions[L+1]=T[L+1],b.positions[L+2]=T[L+2]}else b.positions=new Float32Array(T.length),b.positions.set(T);u.push(b.positions.length)}else if(-1!==E.indexOf("TEXCOORD_")){var O=Number(E.split("_")[1]),M=p.VertexBuffer.UVKind+(0===O?"":O+1),S=new Float32Array(T.length);S.set(T),x(S),b.set(S,M)}else"JOINT"===E?(b.matricesIndices=new Float32Array(T.length),b.matricesIndices.set(T)):"WEIGHT"===E?(b.matricesWeights=new Float32Array(T.length),b.matricesWeights.set(T)):"COLOR"===E&&(b.colors=new Float32Array(T.length),b.colors.set(T));if(g=e.accessors[v.indices])T=m.GetBufferFromAccessor(e,g),b.indices=new Int32Array(T.length),b.indices.set(T),f.push(b.indices.length);else{var w=[];for(L=0;L<b.positions.length/3;L++)w.push(L);b.indices=new Int32Array(w),f.push(b.indices.length)}s?s.merge(b):s=b;var C=e.scene.getMaterialByID(v.material);i.push(null===C?m.GetDefaultMaterial(e.scene):C),l.push(0===l.length?0:l[l.length-1]+u[u.length-2]),c.push(0===c.length?0:c[c.length-1]+f[f.length-2])}}e.scene._blockEntityCollection=e.forAssetContainer,i.length>1?(a=new p.MultiMaterial("multimat"+r,e.scene)).subMaterials=i:a=new p.StandardMaterial("multimat"+r,e.scene),1===i.length&&(a=i[0]),o.material||(o.material=a),new p.Geometry(r,e.scene,s,!1,o),o.computeWorldMatrix(!0),e.scene._blockEntityCollection=!1,o.subMeshes=[];var N=0;for(d=0;d<n.length;d++){var P;h=n[d];if(P=e.meshes[h])for(y=0;y<P.primitives.length;y++)P.primitives[y].mode,p.SubMesh.AddToMesh(N,l[N],u[N],c[N],f[N],o,o,!0),N++}return o},P=function(e,t,n,r){e.position&&(e.position=t),(e.rotationQuaternion||e.rotation)&&(e.rotationQuaternion=n),e.scaling&&(e.scaling=r)},R=function(e,t,n,r){var o=null;if(e.importOnlyMeshes&&(t.skin||t.meshes)&&e.importMeshesNames&&e.importMeshesNames.length>0&&-1===e.importMeshesNames.indexOf(t.name||""))return null;if(t.skin){if(t.meshes){var a=e.skins[t.skin];(i=N(e,t,t.meshes,n,t.babylonNode)).skeleton=e.scene.getLastSkeletonByID(t.skin),null===i.skeleton&&(i.skeleton=C(e,a,0,a.babylonSkeleton,t.skin),a.babylonSkeleton||(a.babylonSkeleton=i.skeleton)),o=i}}else if(t.meshes){var i;o=i=N(e,t,t.mesh?[t.mesh]:t.meshes,n,t.babylonNode)}else if(!t.light||t.babylonNode||e.importOnlyMeshes){if(t.camera&&!t.babylonNode&&!e.importOnlyMeshes){var s=e.cameras[t.camera];if(s){if(e.scene._blockEntityCollection=e.forAssetContainer,"orthographic"===s.type){var l=new p.FreeCamera(t.camera,p.Vector3.Zero(),e.scene,!1);l.name=t.name||"",l.mode=p.Camera.ORTHOGRAPHIC_CAMERA,l.attachControl(e.scene.getEngine().getInputElement()),o=l}else if("perspective"===s.type){var u=s[s.type],c=new p.FreeCamera(t.camera,p.Vector3.Zero(),e.scene,!1);c.name=t.name||"",c.attachControl(e.scene.getEngine().getInputElement()),u.aspectRatio||(u.aspectRatio=e.scene.getEngine().getRenderWidth()/e.scene.getEngine().getRenderHeight()),u.znear&&u.zfar&&(c.maxZ=u.zfar,c.minZ=u.znear),o=c}e.scene._blockEntityCollection=!1}}}else{var f=e.lights[t.light];if(f)if("ambient"===f.type){var d=f[f.type],h=new p.HemisphericLight(t.light,p.Vector3.Zero(),e.scene);h.name=t.name||"",d.color&&(h.diffuse=p.Color3.FromArray(d.color)),o=h}else if("directional"===f.type){var m=f[f.type],_=new p.DirectionalLight(t.light,p.Vector3.Zero(),e.scene);_.name=t.name||"",m.color&&(_.diffuse=p.Color3.FromArray(m.color)),o=_}else if("point"===f.type){var y=f[f.type],b=new p.PointLight(t.light,p.Vector3.Zero(),e.scene);b.name=t.name||"",y.color&&(b.diffuse=p.Color3.FromArray(y.color)),o=b}else if("spot"===f.type){var v=f[f.type],A=new p.SpotLight(t.light,p.Vector3.Zero(),p.Vector3.Zero(),0,0,e.scene);A.name=t.name||"",v.color&&(A.diffuse=p.Color3.FromArray(v.color)),v.fallOfAngle&&(A.angle=v.fallOfAngle),v.fallOffExponent&&(A.exponent=v.fallOffExponent),o=A}}if(!t.jointName){if(t.babylonNode)return t.babylonNode;if(null===o){e.scene._blockEntityCollection=e.forAssetContainer;var g=new p.Mesh(t.name||"",e.scene);e.scene._blockEntityCollection=!1,t.babylonNode=g,o=g}}if(null!==o){if(t.matrix&&o instanceof p.Mesh)!function(e,t,n){if(t.matrix){var r=new p.Vector3(0,0,0),o=new p.Quaternion,a=new p.Vector3(0,0,0);p.Matrix.FromArray(t.matrix).decompose(a,o,r),P(e,r,o,a)}else t.translation&&t.rotation&&t.scale&&P(e,p.Vector3.FromArray(t.translation),p.Quaternion.FromArray(t.rotation),p.Vector3.FromArray(t.scale));e.computeWorldMatrix(!0)}(o,t);else{var T=t.translation||[0,0,0],x=t.rotation||[0,0,0,1],E=t.scale||[1,1,1];P(o,p.Vector3.FromArray(T),p.Quaternion.FromArray(x),p.Vector3.FromArray(E))}o.updateCache(!0),t.babylonNode=o}return o},I=function(e,t,n,r){void 0===r&&(r=!1);var o=e.nodes[t],a=null;if(r=!(e.importOnlyMeshes&&!r&&e.importMeshesNames)||(-1!==e.importMeshesNames.indexOf(o.name||"")||0===e.importMeshesNames.length),!o.jointName&&r&&null!==(a=R(e,o,t))&&(a.id=t,a.parent=n),o.children)for(var i=0;i<o.children.length;i++)I(e,o.children[i],a,r)},F=function(e){var t=e.currentScene;if(t)for(var n=0;n<t.nodes.length;n++)I(e,t.nodes[n],null);else for(var r in e.scenes){t=e.scenes[r];for(n=0;n<t.nodes.length;n++)I(e,t.nodes[n],null)}!function(e){for(var t in e.animations){var n=e.animations[t];if(n.channels&&n.samplers)for(var r=null,o=0;o<n.channels.length;o++){var a=n.channels[o],i=n.samplers[a.sampler];if(i){var s=null,l=null;n.parameters?(s=n.parameters[i.input],l=n.parameters[i.output]):(s=i.input,l=i.output);var u=m.GetBufferFromAccessor(e,e.accessors[s]),c=m.GetBufferFromAccessor(e,e.accessors[l]),f=a.target.id,d=e.scene.getNodeByID(f);if(null===d&&(d=e.scene.getNodeByName(f)),null!==d){var h=d instanceof p.Bone,_=a.target.path,y=A.indexOf(_);-1!==y&&(_=g[y]);var b=p.Animation.ANIMATIONTYPE_MATRIX;h||("rotationQuaternion"===_?(b=p.Animation.ANIMATIONTYPE_QUATERNION,d.rotationQuaternion=new p.Quaternion):b=p.Animation.ANIMATIONTYPE_VECTOR3);var v=null,T=[],x=0,E=!1;h&&r&&r.getKeys().length===u.length&&(v=r,E=!0),E||(e.scene._blockEntityCollection=e.forAssetContainer,v=new p.Animation(t,h?"_matrix":_,1,b,p.Animation.ANIMATIONLOOPMODE_CYCLE),e.scene._blockEntityCollection=!1);for(var L=0;L<u.length;L++){var O=null;if("rotationQuaternion"===_?(O=p.Quaternion.FromArray([c[x],c[x+1],c[x+2],c[x+3]]),x+=4):(O=p.Vector3.FromArray([c[x],c[x+1],c[x+2]]),x+=3),h){var M=d,S=p.Vector3.Zero(),w=new p.Quaternion,C=p.Vector3.Zero(),N=M.getBaseMatrix();E&&r&&(N=r.getKeys()[L].value),N.decompose(C,w,S),"position"===_?S=O:"rotationQuaternion"===_?w=O:C=O,O=p.Matrix.Compose(C,w,S)}E?r&&(r.getKeys()[L].value=O):T.push({frame:u[L],value:O})}!E&&v&&(v.setKeys(T),d.animations.push(v)),r=v,e.scene.stopAnimation(d),e.scene.beginAnimation(d,0,u[u.length-1],!0,1)}else p.Tools.Warn("Creating animation named "+t+". But cannot find node named "+f+" to attach to")}}}}(e);for(n=0;n<e.scene.skeletons.length;n++){var o=e.scene.skeletons[n];e.scene.beginAnimation(o,0,Number.MAX_VALUE,!0,1)}},V=function(e,t,n,r,o,a){return function(i){!function(e,t,n,r,o){var a=r.values||n.parameters,i=n.uniforms;for(var l in o){var u=o[l],c=u.type,f=a[i[l]];if(void 0===f&&(f=u.value),f){var d=function(e){return function(n){u.value&&e&&(t.setTexture(e,n),delete o[e])}};c===s.SAMPLER_2D?k.LoadTextureAsync(e,r.values?f:u.value,d(l),function(){return d(null)}):u.value&&m.SetUniform(t,l,r.values?f:u.value,c)&&delete o[l]}}}(e,t,n,r,o),t.onBind=function(i){!function(e,t,n,r,o,a,i){var l=a.values||o.parameters;for(var u in n){var c=n[u],f=c.type;if(f===s.FLOAT_MAT2||f===s.FLOAT_MAT3||f===s.FLOAT_MAT4)if(!c.semantic||c.source||c.node){if(c.semantic&&(c.source||c.node)){var d=t.scene.getNodeByName(c.source||c.node||"");if(null===d&&(d=t.scene.getNodeByID(c.source||c.node||"")),null===d)continue;m.SetMatrix(t.scene,d,c,u,r.getEffect())}}else m.SetMatrix(t.scene,e,c,u,r.getEffect());else{var h=l[o.uniforms[u]];if(!h)continue;if(f===s.SAMPLER_2D){var p=t.textures[a.values?h:c.value].babylonTexture;if(null==p)continue;r.getEffect().setTexture(u,p)}else m.SetUniform(r.getEffect(),u,h,f)}}i(r)}(i,e,o,t,n,r,a)}}},B=function(e,t,n){for(var r in t.uniforms){var o=t.uniforms[r],a=t.parameters[o];if(e.currentIdentifier===r&&a.semantic&&!a.source&&!a.node){var i=b.indexOf(a.semantic);if(-1!==i)return delete n[r],v[i]}}return e.currentIdentifier},D=function(e){for(var t in e.materials)k.LoadMaterialAsync(e,t,function(e){},function(){})},G=function(){function e(){}return e.CreateRuntime=function(e,t,n){var r={extensions:{},accessors:{},buffers:{},bufferViews:{},meshes:{},lights:{},cameras:{},nodes:{},images:{},textures:{},shaders:{},programs:{},samplers:{},techniques:{},materials:{},animations:{},skins:{},extensionsUsed:[],scenes:{},buffersCount:0,shaderscount:0,scene:t,rootUrl:n,loadedBufferCount:0,loadedBufferViews:{},loadedShaderCount:0,importOnlyMeshes:!1,dummyNodes:[],forAssetContainer:!1};return e.extensions&&T(e.extensions,"extensions",r),e.extensionsUsed&&T(e.extensionsUsed,"extensionsUsed",r),e.buffers&&function(e,t){for(var n in e){var r=e[n];t.buffers[n]=r,t.buffersCount++}}(e.buffers,r),e.bufferViews&&T(e.bufferViews,"bufferViews",r),e.accessors&&T(e.accessors,"accessors",r),e.meshes&&T(e.meshes,"meshes",r),e.lights&&T(e.lights,"lights",r),e.cameras&&T(e.cameras,"cameras",r),e.nodes&&T(e.nodes,"nodes",r),e.images&&T(e.images,"images",r),e.textures&&T(e.textures,"textures",r),e.shaders&&function(e,t){for(var n in e){var r=e[n];t.shaders[n]=r,t.shaderscount++}}(e.shaders,r),e.programs&&T(e.programs,"programs",r),e.samplers&&T(e.samplers,"samplers",r),e.techniques&&T(e.techniques,"techniques",r),e.materials&&T(e.materials,"materials",r),e.animations&&T(e.animations,"animations",r),e.skins&&T(e.skins,"skins",r),e.scenes&&(r.scenes=e.scenes),e.scene&&e.scenes&&(r.currentScene=e.scenes[e.scene]),r},e.LoadBufferAsync=function(e,t,n,r,o){var a=e.buffers[t];p.Tools.IsBase64(a.uri)?setTimeout(function(){return n(new Uint8Array(p.Tools.DecodeBase64(a.uri)))}):p.Tools.LoadFile(e.rootUrl+a.uri,function(e){return n(new Uint8Array(e))},o,void 0,!0,function(e){e&&r(e.status+" "+e.statusText)})},e.LoadTextureBufferAsync=function(e,t,n,r){var o=e.textures[t];if(o&&o.source)if(o.babylonTexture)n(null);else{var a=e.images[o.source];p.Tools.IsBase64(a.uri)?setTimeout(function(){return n(new Uint8Array(p.Tools.DecodeBase64(a.uri)))}):p.Tools.LoadFile(e.rootUrl+a.uri,function(e){return n(new Uint8Array(e))},void 0,void 0,!0,function(e){e&&r(e.status+" "+e.statusText)})}else r("")},e.CreateTextureAsync=function(e,t,n,r,o){var a=e.textures[t];if(a.babylonTexture)r(a.babylonTexture);else{var i=e.samplers[a.sampler],s=i.minFilter===u.NEAREST_MIPMAP_NEAREST||i.minFilter===u.NEAREST_MIPMAP_LINEAR||i.minFilter===u.LINEAR_MIPMAP_NEAREST||i.minFilter===u.LINEAR_MIPMAP_LINEAR,l=p.Texture.BILINEAR_SAMPLINGMODE,c=null==n?new Blob:new Blob([n]),f=URL.createObjectURL(c),d=function(){return URL.revokeObjectURL(f)},h=new p.Texture(f,e.scene,!s,!0,l,d,d);void 0!==i.wrapS&&(h.wrapU=m.GetWrapMode(i.wrapS)),void 0!==i.wrapT&&(h.wrapV=m.GetWrapMode(i.wrapT)),h.name=t,a.babylonTexture=h,r(h)}},e.LoadShaderStringAsync=function(e,t,n,r){var o=e.shaders[t];if(p.Tools.IsBase64(o.uri)){var a=atob(o.uri.split(",")[1]);n&&n(a)}else p.Tools.LoadFile(e.rootUrl+o.uri,n,void 0,void 0,!1,function(e){e&&r&&r(e.status+" "+e.statusText)})},e.LoadMaterialAsync=function(e,t,n,r){var o=e.materials[t];if(o.technique){var a=e.techniques[o.technique];if(!a){e.scene._blockEntityCollection=e.forAssetContainer;var i=new p.StandardMaterial(t,e.scene);return e.scene._blockEntityCollection=!1,i.diffuseColor=new p.Color3(.5,.5,.5),i.sideOrientation=p.Material.CounterClockWiseSideOrientation,void n(i)}var l=e.programs[a.program],u=a.states,c=p.Effect.ShadersStore[l.vertexShader+"VertexShader"],m=p.Effect.ShadersStore[l.fragmentShader+"PixelShader"],_="",A="",g=new y(c),T=new y(m),x={},L=[],O=[],M=[];for(var S in a.uniforms){var w=a.uniforms[S],C=a.parameters[w];if(x[S]=C,!C.semantic||C.node||C.source)C.type===s.SAMPLER_2D?M.push(S):L.push(S);else{var N=b.indexOf(C.semantic);-1!==N?(L.push(v[N]),delete x[S]):L.push(S)}}for(var P in a.attributes){var R=a.attributes[P];if((D=a.parameters[R]).semantic){var I=E(D);I&&O.push(I)}}for(;!g.isEnd()&&g.getNextToken();){if(g.currentToken===h.IDENTIFIER){var F=!1;for(var P in a.attributes){R=a.attributes[P];var D=a.parameters[R];if(g.currentIdentifier===P&&D.semantic){_+=E(D),F=!0;break}}F||(_+=B(g,a,x))}else _+=g.currentString}for(;!T.isEnd()&&T.getNextToken();){T.currentToken===h.IDENTIFIER?A+=B(T,a,x):A+=T.currentString}var G={vertex:l.vertexShader+t,fragment:l.fragmentShader+t},U={attributes:O,uniforms:L,samplers:M,needAlphaBlending:u&&u.enable&&-1!==u.enable.indexOf(3042)};p.Effect.ShadersStore[l.vertexShader+t+"VertexShader"]=_,p.Effect.ShadersStore[l.fragmentShader+t+"PixelShader"]=A;var k=new p.ShaderMaterial(t,e.scene,G,U);if(k.onError=function(e,t,n){return function(r,o){t.dispose(!0),n("Cannot compile program named "+e.name+". Error: "+o+". Default material will be applied")}}(l,k,r),k.onCompiled=V(e,k,a,o,x,n),k.sideOrientation=p.Material.CounterClockWiseSideOrientation,u&&u.functions){var H=u.functions;H.cullFace&&H.cullFace[0]!==f.BACK&&(k.backFaceCulling=!1);var j=H.blendFuncSeparate;j&&(j[0]===d.SRC_ALPHA&&j[1]===d.ONE_MINUS_SRC_ALPHA&&j[2]===d.ONE&&j[3]===d.ONE?k.alphaMode=p.Constants.ALPHA_COMBINE:j[0]===d.ONE&&j[1]===d.ONE&&j[2]===d.ZERO&&j[3]===d.ONE?k.alphaMode=p.Constants.ALPHA_ONEONE:j[0]===d.SRC_ALPHA&&j[1]===d.ONE&&j[2]===d.ZERO&&j[3]===d.ONE?k.alphaMode=p.Constants.ALPHA_ADD:j[0]===d.ZERO&&j[1]===d.ONE_MINUS_SRC_COLOR&&j[2]===d.ONE&&j[3]===d.ONE?k.alphaMode=p.Constants.ALPHA_SUBTRACT:j[0]===d.DST_COLOR&&j[1]===d.ZERO&&j[2]===d.ONE&&j[3]===d.ONE?k.alphaMode=p.Constants.ALPHA_MULTIPLY:j[0]===d.SRC_ALPHA&&j[1]===d.ONE_MINUS_SRC_COLOR&&j[2]===d.ONE&&j[3]===d.ONE&&(k.alphaMode=p.Constants.ALPHA_MAXIMIZED))}}else r&&r("No technique found.")},e}(),U=function(){function e(){this.state=null}return e.RegisterExtension=function(t){e.Extensions[t.name]?p.Tools.Error('Tool with the same name "'+t.name+'" already exists'):e.Extensions[t.name]=t},e.prototype.dispose=function(){},e.prototype._importMeshAsync=function(e,t,n,r,o,a,i,s){var l=this;return t.useRightHandedSystem=!0,k.LoadRuntimeAsync(t,n,r,function(t){t.forAssetContainer=o,t.importOnlyMeshes=!0,""===e?t.importMeshesNames=[]:"string"==typeof e?t.importMeshesNames=[e]:!e||e instanceof Array?(t.importMeshesNames=[],p.Tools.Warn("Argument meshesNames must be of type string or string[]")):t.importMeshesNames=[e],l._createNodes(t);var n=new Array,r=new Array;for(var s in t.nodes){var u=t.nodes[s];u.babylonNode instanceof p.AbstractMesh&&n.push(u.babylonNode)}for(var c in t.skins){var f=t.skins[c];f.babylonSkeleton instanceof p.Skeleton&&r.push(f.babylonSkeleton)}l._loadBuffersAsync(t,function(){l._loadShadersAsync(t,function(){D(t),F(t),!_.GLTFFileLoader.IncrementalLoading&&a&&a(n,r)})},i),_.GLTFFileLoader.IncrementalLoading&&a&&a(n,r)},s),!0},e.prototype.importMeshAsync=function(e,t,n,r,o,a){var i=this;return new Promise(function(s,l){i._importMeshAsync(e,t,r,o,n,function(e,t){s({meshes:e,particleSystems:[],skeletons:t,animationGroups:[],lights:[],transformNodes:[]})},a,function(e){l(new Error(e))})})},e.prototype._loadAsync=function(e,t,n,r,o,a,i){var s=this;e.useRightHandedSystem=!0,k.LoadRuntimeAsync(e,t,n,function(e){k.LoadRuntimeExtensionsAsync(e,function(){s._createNodes(e),s._loadBuffersAsync(e,function(){s._loadShadersAsync(e,function(){D(e),F(e),_.GLTFFileLoader.IncrementalLoading||o()})}),_.GLTFFileLoader.IncrementalLoading&&o()},i)},i)},e.prototype.loadAsync=function(e,t,n,r){var o=this;return new Promise(function(a,i){o._loadAsync(e,t,n,!1,function(){a()},r,function(e){i(new Error(e))})})},e.prototype._loadShadersAsync=function(e,t){var n=!1,r=function(n,r){k.LoadShaderStringAsync(e,n,function(o){o instanceof ArrayBuffer||(e.loadedShaderCount++,o&&(p.Effect.ShadersStore[n+(r.type===i.VERTEX?"VertexShader":"PixelShader")]=o),e.loadedShaderCount===e.shaderscount&&t())},function(){p.Tools.Error("Error when loading shader program named "+n+" located at "+r.uri)})};for(var o in e.shaders){n=!0;var a=e.shaders[o];a?r.bind(this,o,a)():p.Tools.Error("No shader named: "+o)}n||t()},e.prototype._loadBuffersAsync=function(e,t,n){var r=!1,o=function(n,r){k.LoadBufferAsync(e,n,function(o){e.loadedBufferCount++,o&&(o.byteLength!=e.buffers[n].byteLength&&p.Tools.Error("Buffer named "+n+" is length "+o.byteLength+". Expected: "+r.byteLength),e.loadedBufferViews[n]=o),e.loadedBufferCount===e.buffersCount&&t()},function(){p.Tools.Error("Error when loading buffer named "+n+" located at "+r.uri)})};for(var a in e.buffers){r=!0;var i=e.buffers[a];i?o.bind(this,a,i)():p.Tools.Error("No buffer named: "+a)}r||t()},e.prototype._createNodes=function(e){var t=e.currentScene;if(t)for(var n=0;n<t.nodes.length;n++)I(e,t.nodes[n],null);else for(var r in e.scenes){t=e.scenes[r];for(n=0;n<t.nodes.length;n++)I(e,t.nodes[n],null)}},e.Extensions={},e}(),k=function(){function e(e){this._name=e}return Object.defineProperty(e.prototype,"name",{get:function(){return this._name},enumerable:!0,configurable:!0}),e.prototype.loadRuntimeAsync=function(e,t,n,r,o){return!1},e.prototype.loadRuntimeExtensionsAsync=function(e,t,n){return!1},e.prototype.loadBufferAsync=function(e,t,n,r,o){return!1},e.prototype.loadTextureBufferAsync=function(e,t,n,r){return!1},e.prototype.createTextureAsync=function(e,t,n,r,o){return!1},e.prototype.loadShaderStringAsync=function(e,t,n,r){return!1},e.prototype.loadMaterialAsync=function(e,t,n,r){return!1},e.LoadRuntimeAsync=function(t,n,r,o,a){e.ApplyExtensions(function(e){return e.loadRuntimeAsync(t,n,r,o,a)},function(){setTimeout(function(){o&&o(G.CreateRuntime(n.json,t,r))})})},e.LoadRuntimeExtensionsAsync=function(t,n,r){e.ApplyExtensions(function(e){return e.loadRuntimeExtensionsAsync(t,n,r)},function(){setTimeout(function(){n()})})},e.LoadBufferAsync=function(t,n,r,o,a){e.ApplyExtensions(function(e){return e.loadBufferAsync(t,n,r,o,a)},function(){G.LoadBufferAsync(t,n,r,o,a)})},e.LoadTextureAsync=function(t,n,r,o){e.LoadTextureBufferAsync(t,n,function(a){a&&e.CreateTextureAsync(t,n,a,r,o)},o)},e.LoadShaderStringAsync=function(t,n,r,o){e.ApplyExtensions(function(e){return e.loadShaderStringAsync(t,n,r,o)},function(){G.LoadShaderStringAsync(t,n,r,o)})},e.LoadMaterialAsync=function(t,n,r,o){e.ApplyExtensions(function(e){return e.loadMaterialAsync(t,n,r,o)},function(){G.LoadMaterialAsync(t,n,r,o)})},e.LoadTextureBufferAsync=function(t,n,r,o){e.ApplyExtensions(function(e){return e.loadTextureBufferAsync(t,n,r,o)},function(){G.LoadTextureBufferAsync(t,n,r,o)})},e.CreateTextureAsync=function(t,n,r,o,a){e.ApplyExtensions(function(e){return e.createTextureAsync(t,n,r,o,a)},function(){G.CreateTextureAsync(t,n,r,o,a)})},e.ApplyExtensions=function(e,t){for(var n in U.Extensions){if(e(U.Extensions[n]))return}t()},e}();_.GLTFFileLoader._CreateGLTF1Loader=function(){return new U};var H=function(e){function t(){return e.call(this,"KHR_binary_glTF")||this}return o(t,e),t.prototype.loadRuntimeAsync=function(e,t,n,r,o){var a=t.json.extensionsUsed;return!(!a||-1===a.indexOf(this.name)||!t.bin)&&(this._bin=t.bin,r(G.CreateRuntime(t.json,e,n)),!0)},t.prototype.loadBufferAsync=function(e,t,n,r){return-1!==e.extensionsUsed.indexOf(this.name)&&("binary_glTF"===t&&(this._bin.readAsync(0,this._bin.byteLength).then(n,function(e){return r(e.message)}),!0))},t.prototype.loadTextureBufferAsync=function(e,t,n,r){var o=e.textures[t],i=e.images[o.source];if(!(i.extensions&&this.name in i.extensions))return!1;var s=i.extensions[this.name],l=e.bufferViews[s.bufferView];return n(m.GetBufferFromBufferView(e,l,0,l.byteLength,a.UNSIGNED_BYTE)),!0},t.prototype.loadShaderStringAsync=function(e,t,n,r){var o=e.shaders[t];if(!(o.extensions&&this.name in o.extensions))return!1;var i=o.extensions[this.name],s=e.bufferViews[i.bufferView],l=m.GetBufferFromBufferView(e,s,0,s.byteLength,a.UNSIGNED_BYTE);return setTimeout(function(){var e=m.DecodeBufferToText(l);n(e)}),!0},t}(k);U.RegisterExtension(new H);var j=function(e){function t(){return e.call(this,"KHR_materials_common")||this}return o(t,e),t.prototype.loadRuntimeExtensionsAsync=function(e,t,n){if(!e.extensions)return!1;var r=e.extensions[this.name];if(!r)return!1;var o=r.lights;if(o)for(var a in o){var i=o[a];switch(i.type){case"ambient":var s=new p.HemisphericLight(i.name,new p.Vector3(0,1,0),e.scene),l=i.ambient;l&&(s.diffuse=p.Color3.FromArray(l.color||[1,1,1]));break;case"point":var u=new p.PointLight(i.name,new p.Vector3(10,10,10),e.scene),c=i.point;c&&(u.diffuse=p.Color3.FromArray(c.color||[1,1,1]));break;case"directional":var f=new p.DirectionalLight(i.name,new p.Vector3(0,-1,0),e.scene),d=i.directional;d&&(f.diffuse=p.Color3.FromArray(d.color||[1,1,1]));break;case"spot":var h=i.spot;if(h)new p.SpotLight(i.name,new p.Vector3(0,10,0),new p.Vector3(0,-1,0),h.fallOffAngle||Math.PI,h.fallOffExponent||0,e.scene).diffuse=p.Color3.FromArray(h.color||[1,1,1]);break;default:p.Tools.Warn('GLTF Material Common extension: light type "'+i.type+"” not supported")}}return!1},t.prototype.loadMaterialAsync=function(e,t,n,r){var o=e.materials[t];if(!o||!o.extensions)return!1;var a=o.extensions[this.name];if(!a)return!1;var i=new p.StandardMaterial(t,e.scene);return i.sideOrientation=p.Material.CounterClockWiseSideOrientation,"CONSTANT"===a.technique&&(i.disableLighting=!0),i.backFaceCulling=void 0!==a.doubleSided&&!a.doubleSided,i.alpha=void 0===a.values.transparency?1:a.values.transparency,i.specularPower=void 0===a.values.shininess?0:a.values.shininess,"string"==typeof a.values.ambient?this._loadTexture(e,a.values.ambient,i,"ambientTexture",r):i.ambientColor=p.Color3.FromArray(a.values.ambient||[0,0,0]),"string"==typeof a.values.diffuse?this._loadTexture(e,a.values.diffuse,i,"diffuseTexture",r):i.diffuseColor=p.Color3.FromArray(a.values.diffuse||[0,0,0]),"string"==typeof a.values.emission?this._loadTexture(e,a.values.emission,i,"emissiveTexture",r):i.emissiveColor=p.Color3.FromArray(a.values.emission||[0,0,0]),"string"==typeof a.values.specular?this._loadTexture(e,a.values.specular,i,"specularTexture",r):i.specularColor=p.Color3.FromArray(a.values.specular||[0,0,0]),!0},t.prototype._loadTexture=function(e,t,n,r,o){G.LoadTextureBufferAsync(e,t,function(a){G.CreateTextureAsync(e,t,a,function(e){return n[r]=e},o)},o)},t}(k);U.RegisterExtension(new j),n.d(t,"GLTFBinaryExtension",function(){return H}),n.d(t,"GLTFLoaderBase",function(){return G}),n.d(t,"GLTFLoader",function(){return U}),n.d(t,"GLTFLoaderExtension",function(){return k}),n.d(t,"EComponentType",function(){return a}),n.d(t,"EShaderType",function(){return i}),n.d(t,"EParameterType",function(){return s}),n.d(t,"ETextureWrapMode",function(){return l}),n.d(t,"ETextureFilterType",function(){return u}),n.d(t,"ETextureFormat",function(){return c}),n.d(t,"ECullingType",function(){return f}),n.d(t,"EBlendingFunction",function(){return d}),n.d(t,"GLTFUtils",function(){return m}),n.d(t,"GLTFMaterialsCommonExtension",function(){return j})},function(e,t,n){"use strict";n.r(t);var r=n(0),o=function(){function e(){this.materials=[]}return e.prototype.parseMTL=function(t,n,o,a){if(!(n instanceof ArrayBuffer)){for(var i,s=n.split("\n"),l=/\s+/,u=null,c=0;c<s.length;c++){var f=s[c].trim();if(0!==f.length&&"#"!==f.charAt(0)){var d=f.indexOf(" "),h=d>=0?f.substring(0,d):f;h=h.toLowerCase();var p=d>=0?f.substring(d+1).trim():"";"newmtl"===h?(u&&this.materials.push(u),t._blockEntityCollection=a,u=new r.StandardMaterial(p,t),t._blockEntityCollection=!1):"kd"===h&&u?(i=p.split(l,3).map(parseFloat),u.diffuseColor=r.Color3.FromArray(i)):"ka"===h&&u?(i=p.split(l,3).map(parseFloat),u.ambientColor=r.Color3.FromArray(i)):"ks"===h&&u?(i=p.split(l,3).map(parseFloat),u.specularColor=r.Color3.FromArray(i)):"ke"===h&&u?(i=p.split(l,3).map(parseFloat),u.emissiveColor=r.Color3.FromArray(i)):"ns"===h&&u?u.specularPower=parseFloat(p):"d"===h&&u?u.alpha=parseFloat(p):"map_ka"===h&&u?u.ambientTexture=e._getTexture(o,p,t):"map_kd"===h&&u?u.diffuseTexture=e._getTexture(o,p,t):"map_ks"===h&&u?u.specularTexture=e._getTexture(o,p,t):"map_ns"===h||("map_bump"===h&&u?u.bumpTexture=e._getTexture(o,p,t):"map_d"===h&&u&&(u.opacityTexture=e._getTexture(o,p,t)))}}u&&this.materials.push(u)}},e._getTexture=function(t,n,o){if(!n)return null;var a=t;if("file:"===t){var i=n.lastIndexOf("\\");-1===i&&(i=n.lastIndexOf("/")),a+=i>-1?n.substr(i+1):n}else a+=n;return new r.Texture(a,o,!1,e.INVERT_TEXTURE_Y)},e.INVERT_TEXTURE_Y=!0,e}(),a=function(){function e(t){this.name="obj",this.extensions=".obj",this.obj=/^o/,this.group=/^g/,this.mtllib=/^mtllib /,this.usemtl=/^usemtl /,this.smooth=/^s /,this.vertexPattern=/v( +[\d|\.|\+|\-|e|E]+){3,7}/,this.normalPattern=/vn( +[\d|\.|\+|\-|e|E]+)( +[\d|\.|\+|\-|e|E]+)( +[\d|\.|\+|\-|e|E]+)/,this.uvPattern=/vt( +[\d|\.|\+|\-|e|E]+)( +[\d|\.|\+|\-|e|E]+)/,this.facePattern1=/f\s+(([\d]{1,}[\s]?){3,})+/,this.facePattern2=/f\s+((([\d]{1,}\/[\d]{1,}[\s]?){3,})+)/,this.facePattern3=/f\s+((([\d]{1,}\/[\d]{1,}\/[\d]{1,}[\s]?){3,})+)/,this.facePattern4=/f\s+((([\d]{1,}\/\/[\d]{1,}[\s]?){3,})+)/,this.facePattern5=/f\s+(((-[\d]{1,}\/-[\d]{1,}\/-[\d]{1,}[\s]?){3,})+)/,this._forAssetContainer=!1,this._meshLoadOptions=t||e.currentMeshLoadOptions}return Object.defineProperty(e,"INVERT_TEXTURE_Y",{get:function(){return o.INVERT_TEXTURE_Y},set:function(e){o.INVERT_TEXTURE_Y=e},enumerable:!0,configurable:!0}),Object.defineProperty(e,"currentMeshLoadOptions",{get:function(){return{ComputeNormals:e.COMPUTE_NORMALS,ImportVertexColors:e.IMPORT_VERTEX_COLORS,InvertY:e.INVERT_Y,InvertTextureY:e.INVERT_TEXTURE_Y,UVScaling:e.UV_SCALING,MaterialLoadingFailsSilently:e.MATERIAL_LOADING_FAILS_SILENTLY,OptimizeWithUV:e.OPTIMIZE_WITH_UV,SkipMaterials:e.SKIP_MATERIALS}},enumerable:!0,configurable:!0}),e.prototype._loadMTL=function(e,t,n,o){var a=r.Tools.BaseUrl+t+e;r.Tools.LoadFile(a,n,void 0,void 0,!1,function(e,t){o(a,t)})},e.prototype.createPlugin=function(){return new e(e.currentMeshLoadOptions)},e.prototype.canDirectLoad=function(e){return!1},e.prototype.importMeshAsync=function(e,t,n,r,o,a){return this._parseSolid(e,t,n,r).then(function(e){return{meshes:e,particleSystems:[],skeletons:[],animationGroups:[]}})},e.prototype.loadAsync=function(e,t,n,r,o){return this.importMeshAsync(null,e,t,n,r).then(function(){})},e.prototype.loadAssetContainerAsync=function(e,t,n,o,a){var i=this;return this._forAssetContainer=!0,this.importMeshAsync(null,e,t,n).then(function(t){var n=new r.AssetContainer(e);return t.meshes.forEach(function(e){return n.meshes.push(e)}),t.meshes.forEach(function(e){var t=e.material;t&&(-1==n.materials.indexOf(t)&&(n.materials.push(t),t.getActiveTextures().forEach(function(e){-1==n.textures.indexOf(e)&&n.textures.push(e)})))}),i._forAssetContainer=!1,n}).catch(function(e){throw i._forAssetContainer=!1,e})},e.prototype._parseSolid=function(t,n,a,i){for(var s,l=this,u=[],c=[],f=[],d=[],h=[],p=[],m=[],_=[],y=[],b=[],v=[],A=0,g=!1,T=[],x=[],E=[],L=[],O=[],M="",S="",w=new o,C=1,N=!0,P=new r.Color4(.5,.5,.5,1),R=function(e,t,n,r,o,a,i){var s;-1===(s=l._meshLoadOptions.OptimizeWithUV?function(e,t){e[t[0]]||(e[t[0]]={normals:[],idx:[],uv:[]});var n=e[t[0]].normals.indexOf(t[1]);return 1!=n&&t[2]===e[t[0]].uv[n]?e[t[0]].idx[n]:-1}(v,[e,n,t]):function(e,t){e[t[0]]||(e[t[0]]={normals:[],idx:[]});var n=e[t[0]].normals.indexOf(t[1]);return-1===n?-1:e[t[0]].idx[n]}(v,[e,n]))?(p.push(m.length),m.push(r),_.push(o),b.push(a),void 0!==i&&y.push(i),v[e].normals.push(n),v[e].idx.push(A++),l._meshLoadOptions.OptimizeWithUV&&v[e].uv.push(t)):p.push(s)},I=function(){for(var e=0;e<m.length;e++)T.push(m[e].x,m[e].y,m[e].z),E.push(b[e].x,b[e].y,b[e].z),L.push(_[e].x,_[e].y);!0===l._meshLoadOptions.ImportVertexColors&&x.push(y[e].r,y[e].g,y[e].b,y[e].a),m=[],b=[],_=[],y=[],v=[],A=0},F=function(e,t){for(var n=t;n<e.length-1;n++)O.push(e[0],e[n],e[n+1])},V=function(e,t){F(e,t);for(var n=0;n<O.length;n++){var o=parseInt(O[n])-1;R(o,0,0,u[o],r.Vector2.Zero(),r.Vector3.Up(),!0===l._meshLoadOptions.ImportVertexColors?d[o]:void 0)}O=[]},B=function(e,t){F(e,t);for(var n=0;n<O.length;n++){var o=O[n].split("/"),a=parseInt(o[0])-1,i=parseInt(o[1])-1;R(a,i,0,u[a],f[i],r.Vector3.Up(),!0===l._meshLoadOptions.ImportVertexColors?d[a]:void 0)}O=[]},D=function(e,t){F(e,t);for(var n=0;n<O.length;n++){var r=O[n].split("/"),o=parseInt(r[0])-1,a=parseInt(r[1])-1,i=parseInt(r[2])-1;R(o,a,i,u[o],f[a],c[i])}O=[]},G=function(e,t){F(e,t);for(var n=0;n<O.length;n++){var o=O[n].split("//"),a=parseInt(o[0])-1,i=parseInt(o[1])-1;R(a,1,i,u[a],r.Vector2.Zero(),c[i],!0===l._meshLoadOptions.ImportVertexColors?d[a]:void 0)}O=[]},U=function(e,t){F(e,t);for(var n=0;n<O.length;n++){var r=O[n].split("/"),o=u.length+parseInt(r[0]),a=f.length+parseInt(r[1]),i=c.length+parseInt(r[2]);R(o,a,i,u[o],f[a],c[i],!0===l._meshLoadOptions.ImportVertexColors?d[o]:void 0)}O=[]},k=function(){h.length>0&&(s=h[h.length-1],I(),p.reverse(),s.indices=p.slice(),s.positions=T.slice(),s.normals=E.slice(),s.uvs=L.slice(),!0===l._meshLoadOptions.ImportVertexColors&&(s.colors=x.slice()),p=[],T=[],x=[],E=[],L=[])},H=a.split("\n"),j=0;j<H.length;j++){var K,W=H[j].trim().replace(/\s\s/g," ");if(0!==W.length&&"#"!==W.charAt(0))if(this.vertexPattern.test(W))K=W.match(/[^ ]+/g),u.push(new r.Vector3(parseFloat(K[1]),parseFloat(K[2]),parseFloat(K[3]))),!0===this._meshLoadOptions.ImportVertexColors&&(K.length>=7?d.push(new r.Color4(parseFloat(K[4]),parseFloat(K[5]),parseFloat(K[6]),7===K.length||void 0===K[7]?1:parseFloat(K[7]))):d.push(P));else if(null!==(K=this.normalPattern.exec(W)))c.push(new r.Vector3(parseFloat(K[1]),parseFloat(K[2]),parseFloat(K[3])));else if(null!==(K=this.uvPattern.exec(W)))f.push(new r.Vector2(parseFloat(K[1])*e.UV_SCALING.x,parseFloat(K[2])*e.UV_SCALING.y));else if(null!==(K=this.facePattern3.exec(W)))D(K[1].trim().split(" "),1);else if(null!==(K=this.facePattern4.exec(W)))G(K[1].trim().split(" "),1);else if(null!==(K=this.facePattern5.exec(W)))U(K[1].trim().split(" "),1);else if(null!==(K=this.facePattern2.exec(W)))B(K[1].trim().split(" "),1);else if(null!==(K=this.facePattern1.exec(W)))V(K[1].trim().split(" "),1);else if(this.group.test(W)||this.obj.test(W)){var Y={name:W.substring(2).trim(),indices:void 0,positions:void 0,normals:void 0,uvs:void 0,colors:void 0,materialName:""};k(),h.push(Y),g=!0,N=!0,C=1}else if(this.usemtl.test(W)){if(M=W.substring(7).trim(),!N||!g){k();Y={name:"mesh_mm"+C.toString(),indices:void 0,positions:void 0,normals:void 0,uvs:void 0,colors:void 0,materialName:M};C++,h.push(Y),g=!0}g&&N&&(h[h.length-1].materialName=M,N=!1)}else this.mtllib.test(W)?S=W.substring(7).trim():this.smooth.test(W)||console.log("Unhandled expression at line : "+W)}g&&(s=h[h.length-1],p.reverse(),I(),s.indices=p,s.positions=T,s.normals=E,s.uvs=L,!0===this._meshLoadOptions.ImportVertexColors&&(s.colors=x)),g||(p.reverse(),I(),h.push({name:r.Geometry.RandomId(),indices:p,positions:T,colors:x,normals:E,uvs:L,materialName:M}));for(var J=[],q=new Array,Z=0;Z<h.length;Z++){if(t&&h[Z].name)if(t instanceof Array){if(-1===t.indexOf(h[Z].name))continue}else if(h[Z].name!==t)continue;s=h[Z],n._blockEntityCollection=this._forAssetContainer;var Q=new r.Mesh(h[Z].name,n);n._blockEntityCollection=!1,q.push(h[Z].materialName);var X=new r.VertexData;if(X.uvs=s.uvs,X.indices=s.indices,X.positions=s.positions,!0===this._meshLoadOptions.ComputeNormals){var z=new Array;r.VertexData.ComputeNormals(s.positions,s.indices,z),X.normals=z}else X.normals=s.normals;!0===this._meshLoadOptions.ImportVertexColors&&(X.colors=s.colors),X.applyToMesh(Q),this._meshLoadOptions.InvertY&&(Q.scaling.y*=-1),J.push(Q)}var $=[];return""!==S&&!1===this._meshLoadOptions.SkipMaterials&&$.push(new Promise(function(e,t){l._loadMTL(S,i,function(o){try{w.parseMTL(n,o,i,l._forAssetContainer);for(var a=0;a<w.materials.length;a++){for(var s,u=0,c=[];(s=q.indexOf(w.materials[a].name,u))>-1;)c.push(s),u=s+1;if(-1===s&&0===c.length)w.materials[a].dispose();else for(var f=0;f<c.length;f++)J[c[f]].material=w.materials[a]}e()}catch(n){r.Tools.Warn("Error processing MTL file: '"+S+"'"),l._meshLoadOptions.MaterialLoadingFailsSilently?e():t(n)}},function(n,o){r.Tools.Warn("Error downloading MTL file: '"+S+"'"),l._meshLoadOptions.MaterialLoadingFailsSilently?e():t(o)})})),Promise.all($).then(function(){return J})},e.OPTIMIZE_WITH_UV=!0,e.INVERT_Y=!1,e.IMPORT_VERTEX_COLORS=!1,e.COMPUTE_NORMALS=!1,e.UV_SCALING=new r.Vector2(1,1),e.SKIP_MATERIALS=!1,e.MATERIAL_LOADING_FAILS_SILENTLY=!0,e}();r.SceneLoader&&r.SceneLoader.RegisterPlugin(new a),n.d(t,"MTLFileLoader",function(){return o}),n.d(t,"OBJFileLoader",function(){return a})},function(e,t,n){"use strict";n.r(t);var r=n(0),o=function(){function e(){this.solidPattern=/solid (\S*)([\S\s]*)endsolid[ ]*(\S*)/g,this.facetsPattern=/facet([\s\S]*?)endfacet/g,this.normalPattern=/normal[\s]+([\-+]?[0-9]+\.?[0-9]*([eE][\-+]?[0-9]+)?)+[\s]+([\-+]?[0-9]*\.?[0-9]+([eE][\-+]?[0-9]+)?)+[\s]+([\-+]?[0-9]*\.?[0-9]+([eE][\-+]?[0-9]+)?)+/g,this.vertexPattern=/vertex[\s]+([\-+]?[0-9]+\.?[0-9]*([eE][\-+]?[0-9]+)?)+[\s]+([\-+]?[0-9]*\.?[0-9]+([eE][\-+]?[0-9]+)?)+[\s]+([\-+]?[0-9]*\.?[0-9]+([eE][\-+]?[0-9]+)?)+/g,this.name="stl",this.extensions={".stl":{isBinary:!0}}}return e.prototype.importMesh=function(e,t,n,o,a,i,s){var l;if("string"!=typeof n){if(this._isBinary(n)){var u=new r.Mesh("stlmesh",t);return this._parseBinary(u,n),a&&a.push(u),!0}for(var c=new Uint8Array(n),f="",d=0;d<n.byteLength;d++)f+=String.fromCharCode(c[d]);n=f}for(;l=this.solidPattern.exec(n);){var h=l[1];if(h!=l[3])return r.Tools.Error("Error in STL, solid name != endsolid name"),!1;if(e&&h)if(e instanceof Array){if(!e.indexOf(h))continue}else if(h!==e)continue;h=h||"stlmesh";u=new r.Mesh(h,t);this._parseASCII(u,l[2]),a&&a.push(u)}return!0},e.prototype.load=function(e,t,n){return this.importMesh(null,e,t,n,null,null,null)},e.prototype.loadAssetContainer=function(e,t,n,o){var a=new r.AssetContainer(e);return e._blockEntityCollection=!0,this.importMesh(null,e,t,n,a.meshes,null,null),e._blockEntityCollection=!1,a},e.prototype._isBinary=function(e){var t;if(50,84+50*(t=new DataView(e)).getUint32(80,!0)===t.byteLength)return!0;for(var n=t.byteLength,r=0;r<n;r++)if(t.getUint8(r)>127)return!0;return!1},e.prototype._parseBinary=function(e,t){for(var n=new DataView(t),o=n.getUint32(80,!0),a=0,i=new Float32Array(3*o*3),s=new Float32Array(3*o*3),l=new Uint32Array(3*o),u=0,c=0;c<o;c++){for(var f=84+50*c,d=n.getFloat32(f,!0),h=n.getFloat32(f+4,!0),p=n.getFloat32(f+8,!0),m=1;m<=3;m++){var _=f+12*m;i[a]=n.getFloat32(_,!0),i[a+2]=n.getFloat32(_+4,!0),i[a+1]=n.getFloat32(_+8,!0),s[a]=d,s[a+2]=h,s[a+1]=p,a+=3}l[u]=u++,l[u]=u++,l[u]=u++}e.setVerticesData(r.VertexBuffer.PositionKind,i),e.setVerticesData(r.VertexBuffer.NormalKind,s),e.setIndices(l),e.computeWorldMatrix(!0)},e.prototype._parseASCII=function(e,t){for(var n,o=[],a=[],i=[],s=0;n=this.facetsPattern.exec(t);){var l=n[1],u=this.normalPattern.exec(l);if(this.normalPattern.lastIndex=0,u){for(var c,f=[Number(u[1]),Number(u[5]),Number(u[3])];c=this.vertexPattern.exec(l);)o.push(Number(c[1]),Number(c[5]),Number(c[3])),a.push(f[0],f[1],f[2]);i.push(s++,s++,s++),this.vertexPattern.lastIndex=0}}this.facetsPattern.lastIndex=0,e.setVerticesData(r.VertexBuffer.PositionKind,o),e.setVerticesData(r.VertexBuffer.NormalKind,a),e.setIndices(i),e.computeWorldMatrix(!0)},e}();r.SceneLoader&&r.SceneLoader.RegisterPlugin(new o),n.d(t,"STLFileLoader",function(){return o})},function(e,t,n){"use strict";(function(e){var r=n(2),o=n(3);n.d(t,"a",function(){return r.GLTFFileLoader}),n.d(t,"b",function(){return r.GLTFLoaderAnimationStartMode}),n.d(t,"c",function(){return r.GLTFLoaderCoordinateSystemMode}),n.d(t,"d",function(){return r.GLTFLoaderState}),n.d(t,"e",function(){return o.GLTFValidation});var a=void 0!==e?e:"undefined"!=typeof window?window:void 0;if(void 0!==a){for(var i in a.BABYLON=a.BABYLON||{},r)a.BABYLON[i]=r[i];for(var i in o)a.BABYLON[i]=o[i]}}).call(this,n(4))},function(e,t){},function(e,t,n){"use strict";(function(e){var r=n(7);n.d(t,"a",function(){return r});var o=void 0!==e?e:"undefined"!=typeof window?window:void 0;if(void 0!==o)for(var a in o.BABYLON=o.BABYLON||{},o.BABYLON.GLTF1=o.BABYLON.GLTF1||{},r)o.BABYLON.GLTF1[a]=r[a]}).call(this,n(4))},function(e,t,n){"use strict";(function(e){var r=n(5),o=n(11),a=n(6);n.d(t,"a",function(){return a});var i=void 0!==e?e:"undefined"!=typeof window?window:void 0;if(void 0!==i){i.BABYLON=i.BABYLON||{};var s=i.BABYLON;s.GLTF2=s.GLTF2||{},s.GLTF2.Loader=s.GLTF2.Loader||{},s.GLTF2.Loader.Extensions=s.GLTF2.Loader.Extensions||{};var l=[];for(var u in r)s.GLTF2.Loader.Extensions[u]=r[u],l.push(u);for(var u in o)s.GLTF2.Loader[u]=o[u],l.push(u);for(var u in a)l.indexOf(u)>-1||(s.GLTF2[u]=a[u])}}).call(this,n(4))},function(e,t,n){"use strict";n.r(t),function(e){var r=n(8);n.d(t,"MTLFileLoader",function(){return r.MTLFileLoader}),n.d(t,"OBJFileLoader",function(){return r.OBJFileLoader});var o=void 0!==e?e:"undefined"!=typeof window?window:void 0;if(void 0!==o)for(var a in r)o.BABYLON[a]=r[a]}.call(this,n(4))},function(e,t,n){"use strict";n.r(t),function(e){var r=n(9);n.d(t,"STLFileLoader",function(){return r.STLFileLoader});var o=void 0!==e?e:"undefined"!=typeof window?window:void 0;if(void 0!==o)for(var a in r)o.BABYLON[a]=r[a]}.call(this,n(4))},,,,function(e,t,n){"use strict";n.r(t);n(2),n(3),n(7),n(6),n(8),n(9);var r=n(10),o=n(12),a=n(13),i=n(14),s=n(15);n.d(t,"GLTFLoaderCoordinateSystemMode",function(){return r.c}),n.d(t,"GLTFLoaderAnimationStartMode",function(){return r.b}),n.d(t,"GLTFLoaderState",function(){return r.d}),n.d(t,"GLTFFileLoader",function(){return r.a}),n.d(t,"GLTFValidation",function(){return r.e}),n.d(t,"GLTF1",function(){return o.a}),n.d(t,"GLTF2",function(){return a.a}),n.d(t,"MTLFileLoader",function(){return i.MTLFileLoader}),n.d(t,"OBJFileLoader",function(){return i.OBJFileLoader}),n.d(t,"STLFileLoader",function(){return s.STLFileLoader})}])});
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"babylonjs":4}],3:[function(require,module,exports){
(function (global){
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("babylonjs")):"function"==typeof define&&define.amd?define("babylonjs-materials",["babylonjs"],t):"object"==typeof exports?exports["babylonjs-materials"]=t(require("babylonjs")):e.MATERIALS=t(e.BABYLON)}("undefined"!=typeof self?self:"undefined"!=typeof global?global:this,function(e){return function(e){var t={};function i(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,i),r.l=!0,r.exports}return i.m=e,i.c=t,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i(i.s=19)}([function(t,i){t.exports=e},function(e,t,i){"use strict";i.d(t,"b",function(){return r}),i.d(t,"a",function(){return o});
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
var n=function(e,t){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var i in t)t.hasOwnProperty(i)&&(e[i]=t[i])})(e,t)};function r(e,t){function i(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(i.prototype=t.prototype,new i)}function o(e,t,i,n){var r,o=arguments.length,a=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,n);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(o<3?r(a):o>3?r(t,i,a):r(t,i))||a);return o>3&&a&&Object.defineProperty(t,i,a),a}},function(e,t){var i;i=function(){return this}();try{i=i||new Function("return this")()}catch(e){"object"==typeof window&&(i=window)}e.exports=i},function(e,t,i){"use strict";i.r(t);var n=i(1),r=i(0),o="#ifdef LOGARITHMICDEPTH\n#extension GL_EXT_frag_depth : enable\n#endif\nprecision highp float;\n\nuniform vec3 vEyePosition;\nuniform vec4 vDiffuseColor;\n#ifdef SPECULARTERM\nuniform vec4 vSpecularColor;\n#endif\n\nvarying vec3 vPositionW;\n#ifdef NORMAL\nvarying vec3 vNormalW;\n#endif\n#ifdef VERTEXCOLOR\nvarying vec4 vColor;\n#endif\n\n#include<helperFunctions>\n#include<imageProcessingDeclaration>\n#include<imageProcessingFunctions>\n\n#include<__decl__lightFragment>[0..maxSimultaneousLights]\n#include<lightsFragmentFunctions>\n#include<shadowsFragmentFunctions>\n\n#ifdef BUMP\nvarying vec2 vNormalUV;\nvarying vec2 vNormalUV2;\nuniform sampler2D normalSampler;\nuniform vec2 vNormalInfos;\n#endif\nuniform sampler2D refractionSampler;\nuniform sampler2D reflectionSampler;\n\nconst float LOG2=1.442695;\nuniform vec3 cameraPosition;\nuniform vec4 waterColor;\nuniform float colorBlendFactor;\nuniform vec4 waterColor2;\nuniform float colorBlendFactor2;\nuniform float bumpHeight;\nuniform float time;\n\nvarying vec3 vRefractionMapTexCoord;\nvarying vec3 vReflectionMapTexCoord;\nvarying vec3 vPosition;\n#include<clipPlaneFragmentDeclaration>\n#include<logDepthDeclaration>\n\n#include<fogFragmentDeclaration>\nvoid main(void) {\n\n#include<clipPlaneFragment>\nvec3 viewDirectionW=normalize(vEyePosition-vPositionW);\n\nvec4 baseColor=vec4(1.,1.,1.,1.);\nvec3 diffuseColor=vDiffuseColor.rgb;\n\nfloat alpha=vDiffuseColor.a;\n#ifdef BUMP\n#ifdef BUMPSUPERIMPOSE\nbaseColor=0.6*texture2D(normalSampler,vNormalUV)+0.4*texture2D(normalSampler,vec2(vNormalUV2.x,vNormalUV2.y));\n#else\nbaseColor=texture2D(normalSampler,vNormalUV);\n#endif\nvec3 bumpColor=baseColor.rgb;\n#ifdef ALPHATEST\nif (baseColor.a<0.4)\ndiscard;\n#endif\nbaseColor.rgb*=vNormalInfos.y;\n#else\nvec3 bumpColor=vec3(1.0);\n#endif\n#ifdef VERTEXCOLOR\nbaseColor.rgb*=vColor.rgb;\n#endif\n\n#ifdef NORMAL\nvec2 perturbation=bumpHeight*(baseColor.rg-0.5);\n#ifdef BUMPAFFECTSREFLECTION\nvec3 normalW=normalize(vNormalW+vec3(perturbation.x*8.0,0.0,perturbation.y*8.0));\nif (normalW.y<0.0) {\nnormalW.y=-normalW.y;\n}\n#else\nvec3 normalW=normalize(vNormalW);\n#endif\n#else\nvec3 normalW=vec3(1.0,1.0,1.0);\nvec2 perturbation=bumpHeight*(vec2(1.0,1.0)-0.5);\n#endif\n#ifdef FRESNELSEPARATE\n#ifdef REFLECTION\n\nvec2 projectedRefractionTexCoords=clamp(vRefractionMapTexCoord.xy/vRefractionMapTexCoord.z+perturbation*0.5,0.0,1.0);\nvec4 refractiveColor=texture2D(refractionSampler,projectedRefractionTexCoords);\n#ifdef IS_REFRACTION_LINEAR\nrefractiveColor.rgb=toGammaSpace(refractiveColor.rgb);\n#endif\nvec2 projectedReflectionTexCoords=clamp(vec2(\nvReflectionMapTexCoord.x/vReflectionMapTexCoord.z+perturbation.x*0.3,\nvReflectionMapTexCoord.y/vReflectionMapTexCoord.z+perturbation.y\n),0.0,1.0);\nvec4 reflectiveColor=texture2D(reflectionSampler,projectedReflectionTexCoords);\n#ifdef IS_REFLECTION_LINEAR\nreflectiveColor.rgb=toGammaSpace(reflectiveColor.rgb);\n#endif\nvec3 upVector=vec3(0.0,1.0,0.0);\nfloat fresnelTerm=clamp(abs(pow(dot(viewDirectionW,upVector),3.0)),0.05,0.65);\nfloat IfresnelTerm=1.0-fresnelTerm;\nrefractiveColor=colorBlendFactor*waterColor+(1.0-colorBlendFactor)*refractiveColor;\nreflectiveColor=IfresnelTerm*colorBlendFactor2*waterColor+(1.0-colorBlendFactor2*IfresnelTerm)*reflectiveColor;\nvec4 combinedColor=refractiveColor*fresnelTerm+reflectiveColor*IfresnelTerm;\nbaseColor=combinedColor;\n#endif\n\nvec3 diffuseBase=vec3(0.,0.,0.);\nlightingInfo info;\nfloat shadow=1.;\n#ifdef SPECULARTERM\nfloat glossiness=vSpecularColor.a;\nvec3 specularBase=vec3(0.,0.,0.);\nvec3 specularColor=vSpecularColor.rgb;\n#else\nfloat glossiness=0.;\n#endif\n#include<lightFragment>[0..maxSimultaneousLights]\nvec3 finalDiffuse=clamp(baseColor.rgb,0.0,1.0);\n#ifdef VERTEXALPHA\nalpha*=vColor.a;\n#endif\n#ifdef SPECULARTERM\nvec3 finalSpecular=specularBase*specularColor;\n#else\nvec3 finalSpecular=vec3(0.0);\n#endif\n#else\n#ifdef REFLECTION\n\nvec2 projectedRefractionTexCoords=clamp(vRefractionMapTexCoord.xy/vRefractionMapTexCoord.z+perturbation,0.0,1.0);\nvec4 refractiveColor=texture2D(refractionSampler,projectedRefractionTexCoords);\n#ifdef IS_REFRACTION_LINEAR\nrefractiveColor.rgb=toGammaSpace(refractiveColor.rgb);\n#endif\nvec2 projectedReflectionTexCoords=clamp(vReflectionMapTexCoord.xy/vReflectionMapTexCoord.z+perturbation,0.0,1.0);\nvec4 reflectiveColor=texture2D(reflectionSampler,projectedReflectionTexCoords);\n#ifdef IS_REFLECTION_LINEAR\nreflectiveColor.rgb=toGammaSpace(reflectiveColor.rgb);\n#endif\nvec3 upVector=vec3(0.0,1.0,0.0);\nfloat fresnelTerm=max(dot(viewDirectionW,upVector),0.0);\nvec4 combinedColor=refractiveColor*fresnelTerm+reflectiveColor*(1.0-fresnelTerm);\nbaseColor=colorBlendFactor*waterColor+(1.0-colorBlendFactor)*combinedColor;\n#endif\n\nvec3 diffuseBase=vec3(0.,0.,0.);\nlightingInfo info;\nfloat shadow=1.;\n#ifdef SPECULARTERM\nfloat glossiness=vSpecularColor.a;\nvec3 specularBase=vec3(0.,0.,0.);\nvec3 specularColor=vSpecularColor.rgb;\n#else\nfloat glossiness=0.;\n#endif\n#include<lightFragment>[0..maxSimultaneousLights]\nvec3 finalDiffuse=clamp(baseColor.rgb,0.0,1.0);\n#ifdef VERTEXALPHA\nalpha*=vColor.a;\n#endif\n#ifdef SPECULARTERM\nvec3 finalSpecular=specularBase*specularColor;\n#else\nvec3 finalSpecular=vec3(0.0);\n#endif\n#endif\n\nvec4 color=vec4(finalDiffuse+finalSpecular,alpha);\n#include<logDepthFragment>\n#include<fogFragment>\n\n\n#ifdef IMAGEPROCESSINGPOSTPROCESS\ncolor.rgb=toLinearSpace(color.rgb);\n#elif defined(IMAGEPROCESSING)\ncolor.rgb=toLinearSpace(color.rgb);\ncolor=applyImageProcessing(color);\n#endif\ngl_FragColor=color;\n}\n";r.Effect.ShadersStore.waterPixelShader=o;var a="precision highp float;\n\nattribute vec3 position;\n#ifdef NORMAL\nattribute vec3 normal;\n#endif\n#ifdef UV1\nattribute vec2 uv;\n#endif\n#ifdef UV2\nattribute vec2 uv2;\n#endif\n#ifdef VERTEXCOLOR\nattribute vec4 color;\n#endif\n#include<bonesDeclaration>\n\n#include<instancesDeclaration>\nuniform mat4 view;\nuniform mat4 viewProjection;\n#ifdef BUMP\nvarying vec2 vNormalUV;\n#ifdef BUMPSUPERIMPOSE\nvarying vec2 vNormalUV2;\n#endif\nuniform mat4 normalMatrix;\nuniform vec2 vNormalInfos;\n#endif\n#ifdef POINTSIZE\nuniform float pointSize;\n#endif\n\nvarying vec3 vPositionW;\n#ifdef NORMAL\nvarying vec3 vNormalW;\n#endif\n#ifdef VERTEXCOLOR\nvarying vec4 vColor;\n#endif\n#include<clipPlaneVertexDeclaration>\n#include<fogVertexDeclaration>\n#include<__decl__lightFragment>[0..maxSimultaneousLights]\n#include<logDepthDeclaration>\n\nuniform mat4 worldReflectionViewProjection;\nuniform vec2 windDirection;\nuniform float waveLength;\nuniform float time;\nuniform float windForce;\nuniform float waveHeight;\nuniform float waveSpeed;\n\nvarying vec3 vPosition;\nvarying vec3 vRefractionMapTexCoord;\nvarying vec3 vReflectionMapTexCoord;\nvoid main(void) {\n#include<instancesVertex>\n#include<bonesVertex>\nvec4 worldPos=finalWorld*vec4(position,1.0);\nvPositionW=vec3(worldPos);\n#ifdef NORMAL\nvNormalW=normalize(vec3(finalWorld*vec4(normal,0.0)));\n#endif\n\n#ifndef UV1\nvec2 uv=vec2(0.,0.);\n#endif\n#ifndef UV2\nvec2 uv2=vec2(0.,0.);\n#endif\n#ifdef BUMP\nif (vNormalInfos.x == 0.)\n{\nvNormalUV=vec2(normalMatrix*vec4((uv*1.0)/waveLength+time*windForce*windDirection,1.0,0.0));\n#ifdef BUMPSUPERIMPOSE\nvNormalUV2=vec2(normalMatrix*vec4((uv*0.721)/waveLength+time*1.2*windForce*windDirection,1.0,0.0));\n#endif\n}\nelse\n{\nvNormalUV=vec2(normalMatrix*vec4((uv2*1.0)/waveLength+time*windForce*windDirection ,1.0,0.0));\n#ifdef BUMPSUPERIMPOSE\nvNormalUV2=vec2(normalMatrix*vec4((uv2*0.721)/waveLength+time*1.2*windForce*windDirection ,1.0,0.0));\n#endif\n}\n#endif\n\n#include<clipPlaneVertex>\n\n#include<fogVertex>\n\n#include<shadowsVertex>[0..maxSimultaneousLights]\n\n#ifdef VERTEXCOLOR\nvColor=color;\n#endif\n\n#ifdef POINTSIZE\ngl_PointSize=pointSize;\n#endif\nvec3 p=position;\nfloat newY=(sin(((p.x/0.05)+time*waveSpeed))*waveHeight*windDirection.x*5.0)\n+(cos(((p.z/0.05)+time*waveSpeed))*waveHeight*windDirection.y*5.0);\np.y+=abs(newY);\ngl_Position=viewProjection*finalWorld*vec4(p,1.0);\n#ifdef REFLECTION\nworldPos=viewProjection*finalWorld*vec4(p,1.0);\n\nvPosition=position;\nvRefractionMapTexCoord.x=0.5*(worldPos.w+worldPos.x);\nvRefractionMapTexCoord.y=0.5*(worldPos.w+worldPos.y);\nvRefractionMapTexCoord.z=worldPos.w;\nworldPos=worldReflectionViewProjection*vec4(position,1.0);\nvReflectionMapTexCoord.x=0.5*(worldPos.w+worldPos.x);\nvReflectionMapTexCoord.y=0.5*(worldPos.w+worldPos.y);\nvReflectionMapTexCoord.z=worldPos.w;\n#endif\n#include<logDepthVertex>\n}\n";r.Effect.ShadersStore.waterVertexShader=a;var s=function(e){function t(){var t=e.call(this)||this;return t.BUMP=!1,t.REFLECTION=!1,t.CLIPPLANE=!1,t.CLIPPLANE2=!1,t.CLIPPLANE3=!1,t.CLIPPLANE4=!1,t.CLIPPLANE5=!1,t.CLIPPLANE6=!1,t.ALPHATEST=!1,t.DEPTHPREPASS=!1,t.POINTSIZE=!1,t.FOG=!1,t.NORMAL=!1,t.UV1=!1,t.UV2=!1,t.VERTEXCOLOR=!1,t.VERTEXALPHA=!1,t.NUM_BONE_INFLUENCERS=0,t.BonesPerMesh=0,t.INSTANCES=!1,t.SPECULARTERM=!1,t.LOGARITHMICDEPTH=!1,t.FRESNELSEPARATE=!1,t.BUMPSUPERIMPOSE=!1,t.BUMPAFFECTSREFLECTION=!1,t.IMAGEPROCESSING=!1,t.VIGNETTE=!1,t.VIGNETTEBLENDMODEMULTIPLY=!1,t.VIGNETTEBLENDMODEOPAQUE=!1,t.TONEMAPPING=!1,t.TONEMAPPING_ACES=!1,t.CONTRAST=!1,t.EXPOSURE=!1,t.COLORCURVES=!1,t.COLORGRADING=!1,t.COLORGRADING3D=!1,t.SAMPLER3DGREENDEPTH=!1,t.SAMPLER3DBGRMAP=!1,t.IMAGEPROCESSINGPOSTPROCESS=!1,t.rebuild(),t}return Object(n.b)(t,e),t}(r.MaterialDefines),f=function(e){function t(t,i,n){void 0===n&&(n=new r.Vector2(512,512));var o=e.call(this,t,i)||this;return o.renderTargetSize=n,o.diffuseColor=new r.Color3(1,1,1),o.specularColor=new r.Color3(0,0,0),o.specularPower=64,o._disableLighting=!1,o._maxSimultaneousLights=4,o.windForce=6,o.windDirection=new r.Vector2(0,1),o.waveHeight=.4,o.bumpHeight=.4,o._bumpSuperimpose=!1,o._fresnelSeparate=!1,o._bumpAffectsReflection=!1,o.waterColor=new r.Color3(.1,.1,.6),o.colorBlendFactor=.2,o.waterColor2=new r.Color3(.1,.1,.6),o.colorBlendFactor2=.2,o.waveLength=.1,o.waveSpeed=1,o.disableClipPlane=!1,o._renderTargets=new r.SmartArray(16),o._mesh=null,o._reflectionTransform=r.Matrix.Zero(),o._lastTime=0,o._lastDeltaTime=0,o._createRenderTargets(i,n),o.getRenderTargetTextures=function(){return o._renderTargets.reset(),o._renderTargets.push(o._reflectionRTT),o._renderTargets.push(o._refractionRTT),o._renderTargets},o._imageProcessingConfiguration=o.getScene().imageProcessingConfiguration,o._imageProcessingConfiguration&&(o._imageProcessingObserver=o._imageProcessingConfiguration.onUpdateParameters.add(function(){o._markAllSubMeshesAsImageProcessingDirty()})),o}return Object(n.b)(t,e),Object.defineProperty(t.prototype,"hasRenderTargetTextures",{get:function(){return!0},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"useLogarithmicDepth",{get:function(){return this._useLogarithmicDepth},set:function(e){this._useLogarithmicDepth=e&&this.getScene().getEngine().getCaps().fragmentDepthSupported,this._markAllSubMeshesAsMiscDirty()},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"refractionTexture",{get:function(){return this._refractionRTT},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"reflectionTexture",{get:function(){return this._reflectionRTT},enumerable:!0,configurable:!0}),t.prototype.addToRenderList=function(e){this._refractionRTT&&this._refractionRTT.renderList&&this._refractionRTT.renderList.push(e),this._reflectionRTT&&this._reflectionRTT.renderList&&this._reflectionRTT.renderList.push(e)},t.prototype.enableRenderTargets=function(e){var t=e?1:0;this._refractionRTT&&(this._refractionRTT.refreshRate=t),this._reflectionRTT&&(this._reflectionRTT.refreshRate=t)},t.prototype.getRenderList=function(){return this._refractionRTT?this._refractionRTT.renderList:[]},Object.defineProperty(t.prototype,"renderTargetsEnabled",{get:function(){return!(this._refractionRTT&&0===this._refractionRTT.refreshRate)},enumerable:!0,configurable:!0}),t.prototype.needAlphaBlending=function(){return this.alpha<1},t.prototype.needAlphaTesting=function(){return!1},t.prototype.getAlphaTestTexture=function(){return null},t.prototype.isReadyForSubMesh=function(e,t,i){if(this.isFrozen&&t.effect&&t.effect._wasPreviouslyReady)return!0;t._materialDefines||(t._materialDefines=new s);var n=t._materialDefines,o=this.getScene();if(!this.checkReadyOnEveryCall&&t.effect&&this._renderId===o.getRenderId())return!0;var a=o.getEngine();if(n._areTexturesDirty&&(n._needUVs=!1,o.texturesEnabled)){if(this.bumpTexture&&r.MaterialFlags.BumpTextureEnabled){if(!this.bumpTexture.isReady())return!1;n._needUVs=!0,n.BUMP=!0}r.MaterialFlags.ReflectionTextureEnabled&&(n.REFLECTION=!0)}if(r.MaterialHelper.PrepareDefinesForFrameBoundValues(o,a,n,!!i),r.MaterialHelper.PrepareDefinesForMisc(e,o,this._useLogarithmicDepth,this.pointsCloud,this.fogEnabled,this._shouldTurnAlphaTestOn(e),n),n._areMiscDirty&&(this._fresnelSeparate&&(n.FRESNELSEPARATE=!0),this._bumpSuperimpose&&(n.BUMPSUPERIMPOSE=!0),this._bumpAffectsReflection&&(n.BUMPAFFECTSREFLECTION=!0)),n._needNormals=r.MaterialHelper.PrepareDefinesForLights(o,e,n,!0,this._maxSimultaneousLights,this._disableLighting),n._areImageProcessingDirty&&this._imageProcessingConfiguration){if(!this._imageProcessingConfiguration.isReady())return!1;this._imageProcessingConfiguration.prepareDefines(n),n.IS_REFLECTION_LINEAR=null!=this.reflectionTexture&&!this.reflectionTexture.gammaSpace,n.IS_REFRACTION_LINEAR=null!=this.refractionTexture&&!this.refractionTexture.gammaSpace}if(r.MaterialHelper.PrepareDefinesForAttributes(e,n,!0,!0),this._mesh=e,this._waitingRenderList){for(var f=0;f<this._waitingRenderList.length;f++)this.addToRenderList(o.getNodeByID(this._waitingRenderList[f]));this._waitingRenderList=null}if(n.isDirty){n.markAsProcessed(),o.resetCachedMaterial();var l=new r.EffectFallbacks;n.FOG&&l.addFallback(1,"FOG"),n.LOGARITHMICDEPTH&&l.addFallback(0,"LOGARITHMICDEPTH"),r.MaterialHelper.HandleFallbacksForShadows(n,l,this.maxSimultaneousLights),n.NUM_BONE_INFLUENCERS>0&&l.addCPUSkinningFallback(0,e);var u=[r.VertexBuffer.PositionKind];n.NORMAL&&u.push(r.VertexBuffer.NormalKind),n.UV1&&u.push(r.VertexBuffer.UVKind),n.UV2&&u.push(r.VertexBuffer.UV2Kind),n.VERTEXCOLOR&&u.push(r.VertexBuffer.ColorKind),r.MaterialHelper.PrepareAttributesForBones(u,e,n,l),r.MaterialHelper.PrepareAttributesForInstances(u,n);var c=n.toString(),d=["world","view","viewProjection","vEyePosition","vLightsType","vDiffuseColor","vSpecularColor","vFogInfos","vFogColor","pointSize","vNormalInfos","mBones","vClipPlane","vClipPlane2","vClipPlane3","vClipPlane4","vClipPlane5","vClipPlane6","normalMatrix","logarithmicDepthConstant","worldReflectionViewProjection","windDirection","waveLength","time","windForce","cameraPosition","bumpHeight","waveHeight","waterColor","waterColor2","colorBlendFactor","colorBlendFactor2","waveSpeed"],p=["normalSampler","refractionSampler","reflectionSampler"],h=new Array;r.ImageProcessingConfiguration&&(r.ImageProcessingConfiguration.PrepareUniforms(d,n),r.ImageProcessingConfiguration.PrepareSamplers(p,n)),r.MaterialHelper.PrepareUniformsAndSamplersList({uniformsNames:d,uniformBuffersNames:h,samplers:p,defines:n,maxSimultaneousLights:this.maxSimultaneousLights}),t.setEffect(o.getEngine().createEffect("water",{attributes:u,uniformsNames:d,uniformBuffersNames:h,samplers:p,defines:c,fallbacks:l,onCompiled:this.onCompiled,onError:this.onError,indexParameters:{maxSimultaneousLights:this._maxSimultaneousLights}},a),n)}return!(!t.effect||!t.effect.isReady())&&(this._renderId=o.getRenderId(),t.effect._wasPreviouslyReady=!0,!0)},t.prototype.bindForSubMesh=function(e,t,i){var n=this.getScene(),o=i._materialDefines;if(o){var a=i.effect;if(a&&this._mesh){this._activeEffect=a,this.bindOnlyWorldMatrix(e),this._activeEffect.setMatrix("viewProjection",n.getTransformMatrix()),r.MaterialHelper.BindBonesParameters(t,this._activeEffect),this._mustRebind(n,a)&&(this.bumpTexture&&r.MaterialFlags.BumpTextureEnabled&&(this._activeEffect.setTexture("normalSampler",this.bumpTexture),this._activeEffect.setFloat2("vNormalInfos",this.bumpTexture.coordinatesIndex,this.bumpTexture.level),this._activeEffect.setMatrix("normalMatrix",this.bumpTexture.getTextureMatrix())),r.MaterialHelper.BindClipPlane(this._activeEffect,n),this.pointsCloud&&this._activeEffect.setFloat("pointSize",this.pointSize),r.MaterialHelper.BindEyePosition(a,n)),this._activeEffect.setColor4("vDiffuseColor",this.diffuseColor,this.alpha*t.visibility),o.SPECULARTERM&&this._activeEffect.setColor4("vSpecularColor",this.specularColor,this.specularPower),n.lightsEnabled&&!this.disableLighting&&r.MaterialHelper.BindLights(n,t,this._activeEffect,o,this.maxSimultaneousLights),n.fogEnabled&&t.applyFog&&n.fogMode!==r.Scene.FOGMODE_NONE&&this._activeEffect.setMatrix("view",n.getViewMatrix()),r.MaterialHelper.BindFogParameters(n,t,this._activeEffect),r.MaterialHelper.BindLogDepth(o,this._activeEffect,n),r.MaterialFlags.ReflectionTextureEnabled&&(this._activeEffect.setTexture("refractionSampler",this._refractionRTT),this._activeEffect.setTexture("reflectionSampler",this._reflectionRTT));var s=this._mesh.getWorldMatrix().multiply(this._reflectionTransform).multiply(n.getProjectionMatrix()),f=n.getEngine().getDeltaTime();f!==this._lastDeltaTime&&(this._lastDeltaTime=f,this._lastTime+=this._lastDeltaTime),this._activeEffect.setMatrix("worldReflectionViewProjection",s),this._activeEffect.setVector2("windDirection",this.windDirection),this._activeEffect.setFloat("waveLength",this.waveLength),this._activeEffect.setFloat("time",this._lastTime/1e5),this._activeEffect.setFloat("windForce",this.windForce),this._activeEffect.setFloat("waveHeight",this.waveHeight),this._activeEffect.setFloat("bumpHeight",this.bumpHeight),this._activeEffect.setColor4("waterColor",this.waterColor,1),this._activeEffect.setFloat("colorBlendFactor",this.colorBlendFactor),this._activeEffect.setColor4("waterColor2",this.waterColor2,1),this._activeEffect.setFloat("colorBlendFactor2",this.colorBlendFactor2),this._activeEffect.setFloat("waveSpeed",this.waveSpeed),this._imageProcessingConfiguration&&!this._imageProcessingConfiguration.applyByPostProcess&&this._imageProcessingConfiguration.bind(this._activeEffect),this._afterBind(t,this._activeEffect)}}},t.prototype._createRenderTargets=function(e,t){var i,n=this;this._refractionRTT=new r.RenderTargetTexture(name+"_refraction",{width:t.x,height:t.y},e,!1,!0),this._refractionRTT.wrapU=r.Constants.TEXTURE_MIRROR_ADDRESSMODE,this._refractionRTT.wrapV=r.Constants.TEXTURE_MIRROR_ADDRESSMODE,this._refractionRTT.ignoreCameraViewport=!0,this._reflectionRTT=new r.RenderTargetTexture(name+"_reflection",{width:t.x,height:t.y},e,!1,!0),this._reflectionRTT.wrapU=r.Constants.TEXTURE_MIRROR_ADDRESSMODE,this._reflectionRTT.wrapV=r.Constants.TEXTURE_MIRROR_ADDRESSMODE,this._reflectionRTT.ignoreCameraViewport=!0;var o,a=null,s=r.Matrix.Zero();this._refractionRTT.onBeforeRender=function(){if(n._mesh&&(i=n._mesh.isVisible,n._mesh.isVisible=!1),!n.disableClipPlane){a=e.clipPlane;var t=n._mesh?n._mesh.position.y:0;e.clipPlane=r.Plane.FromPositionAndNormal(new r.Vector3(0,t+.05,0),new r.Vector3(0,1,0))}},this._refractionRTT.onAfterRender=function(){n._mesh&&(n._mesh.isVisible=i),n.disableClipPlane||(e.clipPlane=a)},this._reflectionRTT.onBeforeRender=function(){if(n._mesh&&(i=n._mesh.isVisible,n._mesh.isVisible=!1),!n.disableClipPlane){a=e.clipPlane;var t=n._mesh?n._mesh.position.y:0;e.clipPlane=r.Plane.FromPositionAndNormal(new r.Vector3(0,t-.05,0),new r.Vector3(0,-1,0)),r.Matrix.ReflectionToRef(e.clipPlane,s)}o=e.getViewMatrix(),s.multiplyToRef(o,n._reflectionTransform),e.setTransformMatrix(n._reflectionTransform,e.getProjectionMatrix()),e.getEngine().cullBackFaces=!1,e._mirroredCameraPosition=r.Vector3.TransformCoordinates(e.activeCamera.position,s)},this._reflectionRTT.onAfterRender=function(){n._mesh&&(n._mesh.isVisible=i),e.clipPlane=a,e.setTransformMatrix(o,e.getProjectionMatrix()),e.getEngine().cullBackFaces=!0,e._mirroredCameraPosition=null}},t.prototype.getAnimatables=function(){var e=[];return this.bumpTexture&&this.bumpTexture.animations&&this.bumpTexture.animations.length>0&&e.push(this.bumpTexture),this._reflectionRTT&&this._reflectionRTT.animations&&this._reflectionRTT.animations.length>0&&e.push(this._reflectionRTT),this._refractionRTT&&this._refractionRTT.animations&&this._refractionRTT.animations.length>0&&e.push(this._refractionRTT),e},t.prototype.getActiveTextures=function(){var t=e.prototype.getActiveTextures.call(this);return this._bumpTexture&&t.push(this._bumpTexture),t},t.prototype.hasTexture=function(t){return!!e.prototype.hasTexture.call(this,t)||this._bumpTexture===t},t.prototype.dispose=function(t){this.bumpTexture&&this.bumpTexture.dispose();var i=this.getScene().customRenderTargets.indexOf(this._refractionRTT);-1!=i&&this.getScene().customRenderTargets.splice(i,1),i=-1,-1!=(i=this.getScene().customRenderTargets.indexOf(this._reflectionRTT))&&this.getScene().customRenderTargets.splice(i,1),this._reflectionRTT&&this._reflectionRTT.dispose(),this._refractionRTT&&this._refractionRTT.dispose(),this._imageProcessingConfiguration&&this._imageProcessingObserver&&this._imageProcessingConfiguration.onUpdateParameters.remove(this._imageProcessingObserver),e.prototype.dispose.call(this,t)},t.prototype.clone=function(e){var i=this;return r.SerializationHelper.Clone(function(){return new t(e,i.getScene())},this)},t.prototype.serialize=function(){var e=r.SerializationHelper.Serialize(this);if(e.customType="BABYLON.WaterMaterial",e.renderList=[],this._refractionRTT&&this._refractionRTT.renderList)for(var t=0;t<this._refractionRTT.renderList.length;t++)e.renderList.push(this._refractionRTT.renderList[t].id);return e},t.prototype.getClassName=function(){return"WaterMaterial"},t.Parse=function(e,i,n){var o=r.SerializationHelper.Parse(function(){return new t(e.name,i)},e,i,n);return o._waitingRenderList=e.renderList,o},t.CreateDefaultMesh=function(e,t){return r.Mesh.CreateGround(e,512,512,32,t,!1)},Object(n.a)([Object(r.serializeAsTexture)("bumpTexture")],t.prototype,"_bumpTexture",void 0),Object(n.a)([Object(r.expandToProperty)("_markAllSubMeshesAsTexturesDirty")],t.prototype,"bumpTexture",void 0),Object(n.a)([Object(r.serializeAsColor3)()],t.prototype,"diffuseColor",void 0),Object(n.a)([Object(r.serializeAsColor3)()],t.prototype,"specularColor",void 0),Object(n.a)([Object(r.serialize)()],t.prototype,"specularPower",void 0),Object(n.a)([Object(r.serialize)("disableLighting")],t.prototype,"_disableLighting",void 0),Object(n.a)([Object(r.expandToProperty)("_markAllSubMeshesAsLightsDirty")],t.prototype,"disableLighting",void 0),Object(n.a)([Object(r.serialize)("maxSimultaneousLights")],t.prototype,"_maxSimultaneousLights",void 0),Object(n.a)([Object(r.expandToProperty)("_markAllSubMeshesAsLightsDirty")],t.prototype,"maxSimultaneousLights",void 0),Object(n.a)([Object(r.serialize)()],t.prototype,"windForce",void 0),Object(n.a)([Object(r.serializeAsVector2)()],t.prototype,"windDirection",void 0),Object(n.a)([Object(r.serialize)()],t.prototype,"waveHeight",void 0),Object(n.a)([Object(r.serialize)()],t.prototype,"bumpHeight",void 0),Object(n.a)([Object(r.serialize)("bumpSuperimpose")],t.prototype,"_bumpSuperimpose",void 0),Object(n.a)([Object(r.expandToProperty)("_markAllSubMeshesAsMiscDirty")],t.prototype,"bumpSuperimpose",void 0),Object(n.a)([Object(r.serialize)("fresnelSeparate")],t.prototype,"_fresnelSeparate",void 0),Object(n.a)([Object(r.expandToProperty)("_markAllSubMeshesAsMiscDirty")],t.prototype,"fresnelSeparate",void 0),Object(n.a)([Object(r.serialize)("bumpAffectsReflection")],t.prototype,"_bumpAffectsReflection",void 0),Object(n.a)([Object(r.expandToProperty)("_markAllSubMeshesAsMiscDirty")],t.prototype,"bumpAffectsReflection",void 0),Object(n.a)([Object(r.serializeAsColor3)()],t.prototype,"waterColor",void 0),Object(n.a)([Object(r.serialize)()],t.prototype,"colorBlendFactor",void 0),Object(n.a)([Object(r.serializeAsColor3)()],t.prototype,"waterColor2",void 0),Object(n.a)([Object(r.serialize)()],t.prototype,"colorBlendFactor2",void 0),Object(n.a)([Object(r.serialize)()],t.prototype,"waveLength",void 0),Object(n.a)([Object(r.serialize)()],t.prototype,"waveSpeed",void 0),Object(n.a)([Object(r.serialize)()],t.prototype,"disableClipPlane",void 0),Object(n.a)([Object(r.serialize)()],t.prototype,"useLogarithmicDepth",null),t}(r.PushMaterial);r._TypeStore.RegisteredTypes["BABYLON.WaterMaterial"]=f,i.d(t,"WaterMaterial",function(){return f})},function(e,t,i){"use strict";i.r(t);var n=i(1),r=i(0),o="precision highp float;\n\nvarying vec3 vPositionW;\n#ifdef VERTEXCOLOR\nvarying vec4 vColor;\n#endif\n#include<clipPlaneFragmentDeclaration>\n\nuniform vec3 cameraPosition;\nuniform vec3 cameraOffset;\nuniform float luminance;\nuniform float turbidity;\nuniform float rayleigh;\nuniform float mieCoefficient;\nuniform float mieDirectionalG;\nuniform vec3 sunPosition;\n\n#include<fogFragmentDeclaration>\n\nconst float e=2.71828182845904523536028747135266249775724709369995957;\nconst float pi=3.141592653589793238462643383279502884197169;\nconst float n=1.0003;\nconst float N=2.545E25;\nconst float pn=0.035;\nconst vec3 lambda=vec3(680E-9,550E-9,450E-9);\nconst vec3 K=vec3(0.686,0.678,0.666);\nconst float v=4.0;\nconst float rayleighZenithLength=8.4E3;\nconst float mieZenithLength=1.25E3;\nconst vec3 up=vec3(0.0,1.0,0.0);\nconst float EE=1000.0;\nconst float sunAngularDiameterCos=0.999956676946448443553574619906976478926848692873900859324;\nconst float cutoffAngle=pi/1.95;\nconst float steepness=1.5;\nvec3 totalRayleigh(vec3 lambda)\n{\nreturn (8.0*pow(pi,3.0)*pow(pow(n,2.0)-1.0,2.0)*(6.0+3.0*pn))/(3.0*N*pow(lambda,vec3(4.0))*(6.0-7.0*pn));\n}\nvec3 simplifiedRayleigh()\n{\nreturn 0.0005/vec3(94,40,18);\n}\nfloat rayleighPhase(float cosTheta)\n{\nreturn (3.0/(16.0*pi))*(1.0+pow(cosTheta,2.0));\n}\nvec3 totalMie(vec3 lambda,vec3 K,float T)\n{\nfloat c=(0.2*T )*10E-18;\nreturn 0.434*c*pi*pow((2.0*pi)/lambda,vec3(v-2.0))*K;\n}\nfloat hgPhase(float cosTheta,float g)\n{\nreturn (1.0/(4.0*pi))*((1.0-pow(g,2.0))/pow(1.0-2.0*g*cosTheta+pow(g,2.0),1.5));\n}\nfloat sunIntensity(float zenithAngleCos)\n{\nreturn EE*max(0.0,1.0-exp((-(cutoffAngle-acos(zenithAngleCos))/steepness)));\n}\nfloat A=0.15;\nfloat B=0.50;\nfloat C=0.10;\nfloat D=0.20;\nfloat EEE=0.02;\nfloat F=0.30;\nfloat W=1000.0;\nvec3 Uncharted2Tonemap(vec3 x)\n{\nreturn ((x*(A*x+C*B)+D*EEE)/(x*(A*x+B)+D*F))-EEE/F;\n}\nvoid main(void) {\n\n#include<clipPlaneFragment>\n\nfloat sunfade=1.0-clamp(1.0-exp((sunPosition.y/450000.0)),0.0,1.0);\nfloat rayleighCoefficient=rayleigh-(1.0*(1.0-sunfade));\nvec3 sunDirection=normalize(sunPosition);\nfloat sunE=sunIntensity(dot(sunDirection,up));\nvec3 betaR=simplifiedRayleigh()*rayleighCoefficient;\nvec3 betaM=totalMie(lambda,K,turbidity)*mieCoefficient;\nfloat zenithAngle=acos(max(0.0,dot(up,normalize(vPositionW-cameraPosition+cameraOffset))));\nfloat sR=rayleighZenithLength/(cos(zenithAngle)+0.15*pow(93.885-((zenithAngle*180.0)/pi),-1.253));\nfloat sM=mieZenithLength/(cos(zenithAngle)+0.15*pow(93.885-((zenithAngle*180.0)/pi),-1.253));\nvec3 Fex=exp(-(betaR*sR+betaM*sM));\nfloat cosTheta=dot(normalize(vPositionW-cameraPosition),sunDirection);\nfloat rPhase=rayleighPhase(cosTheta*0.5+0.5);\nvec3 betaRTheta=betaR*rPhase;\nfloat mPhase=hgPhase(cosTheta,mieDirectionalG);\nvec3 betaMTheta=betaM*mPhase;\nvec3 Lin=pow(sunE*((betaRTheta+betaMTheta)/(betaR+betaM))*(1.0-Fex),vec3(1.5));\nLin*=mix(vec3(1.0),pow(sunE*((betaRTheta+betaMTheta)/(betaR+betaM))*Fex,vec3(1.0/2.0)),clamp(pow(1.0-dot(up,sunDirection),5.0),0.0,1.0));\nvec3 direction=normalize(vPositionW-cameraPosition);\nfloat theta=acos(direction.y);\nfloat phi=atan(direction.z,direction.x);\nvec2 uv=vec2(phi,theta)/vec2(2.0*pi,pi)+vec2(0.5,0.0);\nvec3 L0=vec3(0.1)*Fex;\nfloat sundisk=smoothstep(sunAngularDiameterCos,sunAngularDiameterCos+0.00002,cosTheta);\nL0+=(sunE*19000.0*Fex)*sundisk;\nvec3 whiteScale=1.0/Uncharted2Tonemap(vec3(W));\nvec3 texColor=(Lin+L0);\ntexColor*=0.04 ;\ntexColor+=vec3(0.0,0.001,0.0025)*0.3;\nfloat g_fMaxLuminance=1.0;\nfloat fLumScaled=0.1/luminance;\nfloat fLumCompressed=(fLumScaled*(1.0+(fLumScaled/(g_fMaxLuminance*g_fMaxLuminance))))/(1.0+fLumScaled);\nfloat ExposureBias=fLumCompressed;\nvec3 curr=Uncharted2Tonemap((log2(2.0/pow(luminance,4.0)))*texColor);\n\n\n\nvec3 retColor=curr*whiteScale;\n\n\nfloat alpha=1.0;\n#ifdef VERTEXCOLOR\nretColor.rgb*=vColor.rgb;\n#endif\n#ifdef VERTEXALPHA\nalpha*=vColor.a;\n#endif\n\nvec4 color=clamp(vec4(retColor.rgb,alpha),0.0,1.0);\n\n#include<fogFragment>\ngl_FragColor=color;\n}\n";r.Effect.ShadersStore.skyPixelShader=o;var a="precision highp float;\n\nattribute vec3 position;\n#ifdef VERTEXCOLOR\nattribute vec4 color;\n#endif\n\nuniform mat4 world;\nuniform mat4 view;\nuniform mat4 viewProjection;\n#ifdef POINTSIZE\nuniform float pointSize;\n#endif\n\nvarying vec3 vPositionW;\n#ifdef VERTEXCOLOR\nvarying vec4 vColor;\n#endif\n#include<clipPlaneVertexDeclaration>\n#include<fogVertexDeclaration>\nvoid main(void) {\ngl_Position=viewProjection*world*vec4(position,1.0);\nvec4 worldPos=world*vec4(position,1.0);\nvPositionW=vec3(worldPos);\n\n#include<clipPlaneVertex>\n\n#include<fogVertex>\n\n#ifdef VERTEXCOLOR\nvColor=color;\n#endif\n\n#ifdef POINTSIZE\ngl_PointSize=pointSize;\n#endif\n}\n";r.Effect.ShadersStore.skyVertexShader=a;var s=function(e){function t(){var t=e.call(this)||this;return t.CLIPPLANE=!1,t.CLIPPLANE2=!1,t.CLIPPLANE3=!1,t.CLIPPLANE4=!1,t.CLIPPLANE5=!1,t.CLIPPLANE6=!1,t.POINTSIZE=!1,t.FOG=!1,t.VERTEXCOLOR=!1,t.VERTEXALPHA=!1,t.rebuild(),t}return Object(n.b)(t,e),t}(r.MaterialDefines),f=function(e){function t(t,i){var n=e.call(this,t,i)||this;return n.luminance=1,n.turbidity=10,n.rayleigh=2,n.mieCoefficient=.005,n.mieDirectionalG=.8,n.distance=500,n.inclination=.49,n.azimuth=.25,n.sunPosition=new r.Vector3(0,100,0),n.useSunPosition=!1,n.cameraOffset=r.Vector3.Zero(),n._cameraPosition=r.Vector3.Zero(),n}return Object(n.b)(t,e),t.prototype.needAlphaBlending=function(){return this.alpha<1},t.prototype.needAlphaTesting=function(){return!1},t.prototype.getAlphaTestTexture=function(){return null},t.prototype.isReadyForSubMesh=function(e,t,i){if(this.isFrozen&&t.effect&&t.effect._wasPreviouslyReady)return!0;t._materialDefines||(t._materialDefines=new s);var n=t._materialDefines,o=this.getScene();if(!this.checkReadyOnEveryCall&&t.effect&&this._renderId===o.getRenderId())return!0;if(r.MaterialHelper.PrepareDefinesForMisc(e,o,!1,this.pointsCloud,this.fogEnabled,!1,n),r.MaterialHelper.PrepareDefinesForAttributes(e,n,!0,!1),n.isDirty){n.markAsProcessed(),o.resetCachedMaterial();var a=new r.EffectFallbacks;n.FOG&&a.addFallback(1,"FOG");var f=[r.VertexBuffer.PositionKind];n.VERTEXCOLOR&&f.push(r.VertexBuffer.ColorKind);var l=n.toString();t.setEffect(o.getEngine().createEffect("sky",f,["world","viewProjection","view","vFogInfos","vFogColor","pointSize","vClipPlane","vClipPlane2","vClipPlane3","vClipPlane4","vClipPlane5","vClipPlane6","luminance","turbidity","rayleigh","mieCoefficient","mieDirectionalG","sunPosition","cameraPosition","cameraOffset"],[],l,a,this.onCompiled,this.onError),n)}return!(!t.effect||!t.effect.isReady())&&(this._renderId=o.getRenderId(),t.effect._wasPreviouslyReady=!0,!0)},t.prototype.bindForSubMesh=function(e,t,i){var n=this.getScene();if(i._materialDefines){var o=i.effect;if(o){this._activeEffect=o,this.bindOnlyWorldMatrix(e),this._activeEffect.setMatrix("viewProjection",n.getTransformMatrix()),this._mustRebind(n,o)&&(r.MaterialHelper.BindClipPlane(this._activeEffect,n),this.pointsCloud&&this._activeEffect.setFloat("pointSize",this.pointSize)),n.fogEnabled&&t.applyFog&&n.fogMode!==r.Scene.FOGMODE_NONE&&this._activeEffect.setMatrix("view",n.getViewMatrix()),r.MaterialHelper.BindFogParameters(n,t,this._activeEffect);var a=n.activeCamera;if(a){var s=a.getWorldMatrix();this._cameraPosition.x=s.m[12],this._cameraPosition.y=s.m[13],this._cameraPosition.z=s.m[14],this._activeEffect.setVector3("cameraPosition",this._cameraPosition)}if(this._activeEffect.setVector3("cameraOffset",this.cameraOffset),this.luminance>0&&this._activeEffect.setFloat("luminance",this.luminance),this._activeEffect.setFloat("turbidity",this.turbidity),this._activeEffect.setFloat("rayleigh",this.rayleigh),this._activeEffect.setFloat("mieCoefficient",this.mieCoefficient),this._activeEffect.setFloat("mieDirectionalG",this.mieDirectionalG),!this.useSunPosition){var f=Math.PI*(this.inclination-.5),l=2*Math.PI*(this.azimuth-.5);this.sunPosition.x=this.distance*Math.cos(l),this.sunPosition.y=this.distance*Math.sin(l)*Math.sin(f),this.sunPosition.z=this.distance*Math.sin(l)*Math.cos(f)}this._activeEffect.setVector3("sunPosition",this.sunPosition),this._afterBind(t,this._activeEffect)}}},t.prototype.getAnimatables=function(){return[]},t.prototype.dispose=function(t){e.prototype.dispose.call(this,t)},t.prototype.clone=function(e){var i=this;return r.SerializationHelper.Clone(function(){return new t(e,i.getScene())},this)},t.prototype.serialize=function(){var e=r.SerializationHelper.Serialize(this);return e.customType="BABYLON.SkyMaterial",e},t.prototype.getClassName=function(){return"SkyMaterial"},t.Parse=function(e,i,n){return r.SerializationHelper.Parse(function(){return new t(e.name,i)},e,i,n)},Object(n.a)([Object(r.serialize)()],t.prototype,"luminance",void 0),Object(n.a)([Object(r.serialize)()],t.prototype,"turbidity",void 0),Object(n.a)([Object(r.serialize)()],t.prototype,"rayleigh",void 0),Object(n.a)([Object(r.serialize)()],t.prototype,"mieCoefficient",void 0),Object(n.a)([Object(r.serialize)()],t.prototype,"mieDirectionalG",void 0),Object(n.a)([Object(r.serialize)()],t.prototype,"distance",void 0),Object(n.a)([Object(r.serialize)()],t.prototype,"inclination",void 0),Object(n.a)([Object(r.serialize)()],t.prototype,"azimuth",void 0),Object(n.a)([Object(r.serializeAsVector3)()],t.prototype,"sunPosition",void 0),Object(n.a)([Object(r.serialize)()],t.prototype,"useSunPosition",void 0),Object(n.a)([Object(r.serialize)()],t.prototype,"cameraOffset",void 0),t}(r.PushMaterial);r._TypeStore.RegisteredTypes["BABYLON.SkyMaterial"]=f,i.d(t,"SkyMaterial",function(){return f})},function(e,t,i){"use strict";i.r(t);var n=i(1),r=i(0),o="precision highp float;\n\nuniform vec3 vEyePosition;\n\nvarying vec3 vPositionW;\n#ifdef VERTEXCOLOR\nvarying vec4 vColor;\n#endif\n\n#ifdef DIFFUSE\nvarying vec2 vDiffuseUV;\nuniform sampler2D diffuseSampler;\nuniform vec2 vDiffuseInfos;\n#endif\n\nuniform sampler2D distortionSampler;\nuniform sampler2D opacitySampler;\n#ifdef DIFFUSE\nvarying vec2 vDistortionCoords1;\nvarying vec2 vDistortionCoords2;\nvarying vec2 vDistortionCoords3;\n#endif\n#include<clipPlaneFragmentDeclaration>\n\n#include<fogFragmentDeclaration>\nvec4 bx2(vec4 x)\n{\nreturn vec4(2.0)*x-vec4(1.0);\n}\nvoid main(void) {\n\n#include<clipPlaneFragment>\nvec3 viewDirectionW=normalize(vEyePosition-vPositionW);\n\nvec4 baseColor=vec4(1.,1.,1.,1.);\n\nfloat alpha=1.0;\n#ifdef DIFFUSE\n\nconst float distortionAmount0=0.092;\nconst float distortionAmount1=0.092;\nconst float distortionAmount2=0.092;\nvec2 heightAttenuation=vec2(0.3,0.39);\nvec4 noise0=texture2D(distortionSampler,vDistortionCoords1);\nvec4 noise1=texture2D(distortionSampler,vDistortionCoords2);\nvec4 noise2=texture2D(distortionSampler,vDistortionCoords3);\nvec4 noiseSum=bx2(noise0)*distortionAmount0+bx2(noise1)*distortionAmount1+bx2(noise2)*distortionAmount2;\nvec4 perturbedBaseCoords=vec4(vDiffuseUV,0.0,1.0)+noiseSum*(vDiffuseUV.y*heightAttenuation.x+heightAttenuation.y);\nvec4 opacityColor=texture2D(opacitySampler,perturbedBaseCoords.xy);\n#ifdef ALPHATEST\nif (opacityColor.r<0.1)\ndiscard;\n#endif\n#include<depthPrePass>\nbaseColor=texture2D(diffuseSampler,perturbedBaseCoords.xy)*2.0;\nbaseColor*=opacityColor;\nbaseColor.rgb*=vDiffuseInfos.y;\n#endif\n#ifdef VERTEXCOLOR\nbaseColor.rgb*=vColor.rgb;\n#endif\n\nvec3 diffuseBase=vec3(1.0,1.0,1.0);\n#ifdef VERTEXALPHA\nalpha*=vColor.a;\n#endif\n\nvec4 color=vec4(baseColor.rgb,alpha);\n#include<fogFragment>\ngl_FragColor=color;\n}";r.Effect.ShadersStore.firePixelShader=o;var a="precision highp float;\n\nattribute vec3 position;\n#ifdef UV1\nattribute vec2 uv;\n#endif\n#ifdef UV2\nattribute vec2 uv2;\n#endif\n#ifdef VERTEXCOLOR\nattribute vec4 color;\n#endif\n#include<bonesDeclaration>\n\n#include<instancesDeclaration>\nuniform mat4 view;\nuniform mat4 viewProjection;\n#ifdef DIFFUSE\nvarying vec2 vDiffuseUV;\n#endif\n#ifdef POINTSIZE\nuniform float pointSize;\n#endif\n\nvarying vec3 vPositionW;\n#ifdef VERTEXCOLOR\nvarying vec4 vColor;\n#endif\n#include<clipPlaneVertexDeclaration>\n#include<fogVertexDeclaration>\n\nuniform float time;\nuniform float speed;\n#ifdef DIFFUSE\nvarying vec2 vDistortionCoords1;\nvarying vec2 vDistortionCoords2;\nvarying vec2 vDistortionCoords3;\n#endif\nvoid main(void) {\n#include<instancesVertex>\n#include<bonesVertex>\nvec4 worldPos=finalWorld*vec4(position,1.0);\ngl_Position=viewProjection*worldPos;\nvPositionW=vec3(worldPos);\n\n#ifdef DIFFUSE\nvDiffuseUV=uv;\nvDiffuseUV.y-=0.2;\n#endif\n\n#include<clipPlaneVertex>\n\n#include<fogVertex>\n\n#ifdef VERTEXCOLOR\nvColor=color;\n#endif\n\n#ifdef POINTSIZE\ngl_PointSize=pointSize;\n#endif\n#ifdef DIFFUSE\n\nvec3 layerSpeed=vec3(-0.2,-0.52,-0.1)*speed;\nvDistortionCoords1.x=uv.x;\nvDistortionCoords1.y=uv.y+layerSpeed.x*time/1000.0;\nvDistortionCoords2.x=uv.x;\nvDistortionCoords2.y=uv.y+layerSpeed.y*time/1000.0;\nvDistortionCoords3.x=uv.x;\nvDistortionCoords3.y=uv.y+layerSpeed.z*time/1000.0;\n#endif\n}\n";r.Effect.ShadersStore.fireVertexShader=a;var s=function(e){function t(){var t=e.call(this)||this;return t.DIFFUSE=!1,t.CLIPPLANE=!1,t.CLIPPLANE2=!1,t.CLIPPLANE3=!1,t.CLIPPLANE4=!1,t.CLIPPLANE5=!1,t.CLIPPLANE6=!1,t.ALPHATEST=!1,t.DEPTHPREPASS=!1,t.POINTSIZE=!1,t.FOG=!1,t.UV1=!1,t.VERTEXCOLOR=!1,t.VERTEXALPHA=!1,t.BonesPerMesh=0,t.NUM_BONE_INFLUENCERS=0,t.INSTANCES=!1,t.rebuild(),t}return Object(n.b)(t,e),t}(r.MaterialDefines),f=function(e){function t(t,i){var n=e.call(this,t,i)||this;return n.diffuseColor=new r.Color3(1,1,1),n.speed=1,n._scaledDiffuse=new r.Color3,n._lastTime=0,n}return Object(n.b)(t,e),t.prototype.needAlphaBlending=function(){return!1},t.prototype.needAlphaTesting=function(){return!0},t.prototype.getAlphaTestTexture=function(){return null},t.prototype.isReadyForSubMesh=function(e,t,i){if(this.isFrozen&&t.effect&&t.effect._wasPreviouslyReady)return!0;t._materialDefines||(t._materialDefines=new s);var n=t._materialDefines,o=this.getScene();if(!this.checkReadyOnEveryCall&&t.effect&&this._renderId===o.getRenderId())return!0;var a=o.getEngine();if(n._areTexturesDirty&&(n._needUVs=!1,this._diffuseTexture&&r.MaterialFlags.DiffuseTextureEnabled)){if(!this._diffuseTexture.isReady())return!1;n._needUVs=!0,n.DIFFUSE=!0}if(n.ALPHATEST=!!this._opacityTexture,n._areMiscDirty&&(n.POINTSIZE=this.pointsCloud||o.forcePointsCloud,n.FOG=o.fogEnabled&&e.applyFog&&o.fogMode!==r.Scene.FOGMODE_NONE&&this.fogEnabled),r.MaterialHelper.PrepareDefinesForFrameBoundValues(o,a,n,!!i),r.MaterialHelper.PrepareDefinesForAttributes(e,n,!1,!0),n.isDirty){n.markAsProcessed(),o.resetCachedMaterial();var f=new r.EffectFallbacks;n.FOG&&f.addFallback(1,"FOG"),n.NUM_BONE_INFLUENCERS>0&&f.addCPUSkinningFallback(0,e);var l=[r.VertexBuffer.PositionKind];n.UV1&&l.push(r.VertexBuffer.UVKind),n.VERTEXCOLOR&&l.push(r.VertexBuffer.ColorKind),r.MaterialHelper.PrepareAttributesForBones(l,e,n,f),r.MaterialHelper.PrepareAttributesForInstances(l,n);var u=n.toString();t.setEffect(o.getEngine().createEffect("fire",{attributes:l,uniformsNames:["world","view","viewProjection","vEyePosition","vFogInfos","vFogColor","pointSize","vDiffuseInfos","mBones","vClipPlane","vClipPlane2","vClipPlane3","vClipPlane4","vClipPlane5","vClipPlane6","diffuseMatrix","time","speed"],uniformBuffersNames:[],samplers:["diffuseSampler","distortionSampler","opacitySampler"],defines:u,fallbacks:f,onCompiled:this.onCompiled,onError:this.onError,indexParameters:null,maxSimultaneousLights:4,transformFeedbackVaryings:null},a),n)}return!(!t.effect||!t.effect.isReady())&&(this._renderId=o.getRenderId(),t.effect._wasPreviouslyReady=!0,!0)},t.prototype.bindForSubMesh=function(e,t,i){var n=this.getScene();if(i._materialDefines){var o=i.effect;o&&(this._activeEffect=o,this.bindOnlyWorldMatrix(e),this._activeEffect.setMatrix("viewProjection",n.getTransformMatrix()),r.MaterialHelper.BindBonesParameters(t,this._activeEffect),this._mustRebind(n,o)&&(this._diffuseTexture&&r.MaterialFlags.DiffuseTextureEnabled&&(this._activeEffect.setTexture("diffuseSampler",this._diffuseTexture),this._activeEffect.setFloat2("vDiffuseInfos",this._diffuseTexture.coordinatesIndex,this._diffuseTexture.level),this._activeEffect.setMatrix("diffuseMatrix",this._diffuseTexture.getTextureMatrix()),this._activeEffect.setTexture("distortionSampler",this._distortionTexture),this._activeEffect.setTexture("opacitySampler",this._opacityTexture)),r.MaterialHelper.BindClipPlane(this._activeEffect,n),this.pointsCloud&&this._activeEffect.setFloat("pointSize",this.pointSize),r.MaterialHelper.BindEyePosition(o,n)),this._activeEffect.setColor4("vDiffuseColor",this._scaledDiffuse,this.alpha*t.visibility),n.fogEnabled&&t.applyFog&&n.fogMode!==r.Scene.FOGMODE_NONE&&this._activeEffect.setMatrix("view",n.getViewMatrix()),r.MaterialHelper.BindFogParameters(n,t,this._activeEffect),this._lastTime+=n.getEngine().getDeltaTime(),this._activeEffect.setFloat("time",this._lastTime),this._activeEffect.setFloat("speed",this.speed),this._afterBind(t,this._activeEffect))}},t.prototype.getAnimatables=function(){var e=[];return this._diffuseTexture&&this._diffuseTexture.animations&&this._diffuseTexture.animations.length>0&&e.push(this._diffuseTexture),this._distortionTexture&&this._distortionTexture.animations&&this._distortionTexture.animations.length>0&&e.push(this._distortionTexture),this._opacityTexture&&this._opacityTexture.animations&&this._opacityTexture.animations.length>0&&e.push(this._opacityTexture),e},t.prototype.getActiveTextures=function(){var t=e.prototype.getActiveTextures.call(this);return this._diffuseTexture&&t.push(this._diffuseTexture),this._distortionTexture&&t.push(this._distortionTexture),this._opacityTexture&&t.push(this._opacityTexture),t},t.prototype.hasTexture=function(t){return!!e.prototype.hasTexture.call(this,t)||(this._diffuseTexture===t||(this._distortionTexture===t||this._opacityTexture===t))},t.prototype.getClassName=function(){return"FireMaterial"},t.prototype.dispose=function(t){this._diffuseTexture&&this._diffuseTexture.dispose(),this._distortionTexture&&this._distortionTexture.dispose(),e.prototype.dispose.call(this,t)},t.prototype.clone=function(e){var i=this;return r.SerializationHelper.Clone(function(){return new t(e,i.getScene())},this)},t.prototype.serialize=function(){var t=e.prototype.serialize.call(this);return t.customType="BABYLON.FireMaterial",t.diffuseColor=this.diffuseColor.asArray(),t.speed=this.speed,this._diffuseTexture&&(t._diffuseTexture=this._diffuseTexture.serialize()),this._distortionTexture&&(t._distortionTexture=this._distortionTexture.serialize()),this._opacityTexture&&(t._opacityTexture=this._opacityTexture.serialize()),t},t.Parse=function(e,i,n){var o=new t(e.name,i);return o.diffuseColor=r.Color3.FromArray(e.diffuseColor),o.speed=e.speed,o.alpha=e.alpha,o.id=e.id,r.Tags.AddTagsTo(o,e.tags),o.backFaceCulling=e.backFaceCulling,o.wireframe=e.wireframe,e._diffuseTexture&&(o._diffuseTexture=r.Texture.Parse(e._diffuseTexture,i,n)),e._distortionTexture&&(o._distortionTexture=r.Texture.Parse(e._distortionTexture,i,n)),e._opacityTexture&&(o._opacityTexture=r.Texture.Parse(e._opacityTexture,i,n)),o},Object(n.a)([Object(r.serializeAsTexture)("diffuseTexture")],t.prototype,"_diffuseTexture",void 0),Object(n.a)([Object(r.expandToProperty)("_markAllSubMeshesAsTexturesDirty")],t.prototype,"diffuseTexture",void 0),Object(n.a)([Object(r.serializeAsTexture)("distortionTexture")],t.prototype,"_distortionTexture",void 0),Object(n.a)([Object(r.expandToProperty)("_markAllSubMeshesAsTexturesDirty")],t.prototype,"distortionTexture",void 0),Object(n.a)([Object(r.serializeAsTexture)("opacityTexture")],t.prototype,"_opacityTexture",void 0),Object(n.a)([Object(r.expandToProperty)("_markAllSubMeshesAsTexturesDirty")],t.prototype,"opacityTexture",void 0),Object(n.a)([Object(r.serializeAsColor3)("diffuse")],t.prototype,"diffuseColor",void 0),Object(n.a)([Object(r.serialize)()],t.prototype,"speed",void 0),t}(r.PushMaterial);r._TypeStore.RegisteredTypes["BABYLON.FireMaterial"]=f,i.d(t,"FireMaterial",function(){return f})},function(e,t,i){"use strict";i.r(t);var n=i(1),r=i(0),o="precision highp float;\n\nuniform vec3 vEyePosition;\nuniform vec4 vDiffuseColor;\n#ifdef SPECULARTERM\nuniform vec4 vSpecularColor;\n#endif\n\nvarying vec3 vPositionW;\n#ifdef VERTEXCOLOR\nvarying vec4 vColor;\n#endif\n\n#include<helperFunctions>\n\n#include<__decl__lightFragment>[0..maxSimultaneousLights]\n\n#ifdef DIFFUSEX\nvarying vec2 vTextureUVX;\nuniform sampler2D diffuseSamplerX;\n#ifdef BUMPX\nuniform sampler2D normalSamplerX;\n#endif\n#endif\n#ifdef DIFFUSEY\nvarying vec2 vTextureUVY;\nuniform sampler2D diffuseSamplerY;\n#ifdef BUMPY\nuniform sampler2D normalSamplerY;\n#endif\n#endif\n#ifdef DIFFUSEZ\nvarying vec2 vTextureUVZ;\nuniform sampler2D diffuseSamplerZ;\n#ifdef BUMPZ\nuniform sampler2D normalSamplerZ;\n#endif\n#endif\n#ifdef NORMAL\nvarying mat3 tangentSpace;\n#endif\n#include<lightsFragmentFunctions>\n#include<shadowsFragmentFunctions>\n#include<clipPlaneFragmentDeclaration>\n#include<fogFragmentDeclaration>\nvoid main(void) {\n\n#include<clipPlaneFragment>\nvec3 viewDirectionW=normalize(vEyePosition-vPositionW);\n\nvec4 baseColor=vec4(0.,0.,0.,1.);\nvec3 diffuseColor=vDiffuseColor.rgb;\n\nfloat alpha=vDiffuseColor.a;\n\n#ifdef NORMAL\nvec3 normalW=tangentSpace[2];\n#else\nvec3 normalW=vec3(1.0,1.0,1.0);\n#endif\nvec4 baseNormal=vec4(0.0,0.0,0.0,1.0);\nnormalW*=normalW;\n#ifdef DIFFUSEX\nbaseColor+=texture2D(diffuseSamplerX,vTextureUVX)*normalW.x;\n#ifdef BUMPX\nbaseNormal+=texture2D(normalSamplerX,vTextureUVX)*normalW.x;\n#endif\n#endif\n#ifdef DIFFUSEY\nbaseColor+=texture2D(diffuseSamplerY,vTextureUVY)*normalW.y;\n#ifdef BUMPY\nbaseNormal+=texture2D(normalSamplerY,vTextureUVY)*normalW.y;\n#endif\n#endif\n#ifdef DIFFUSEZ\nbaseColor+=texture2D(diffuseSamplerZ,vTextureUVZ)*normalW.z;\n#ifdef BUMPZ\nbaseNormal+=texture2D(normalSamplerZ,vTextureUVZ)*normalW.z;\n#endif\n#endif\n#ifdef NORMAL\nnormalW=normalize((2.0*baseNormal.xyz-1.0)*tangentSpace);\n#endif\n#ifdef ALPHATEST\nif (baseColor.a<0.4)\ndiscard;\n#endif\n#include<depthPrePass>\n#ifdef VERTEXCOLOR\nbaseColor.rgb*=vColor.rgb;\n#endif\n\nvec3 diffuseBase=vec3(0.,0.,0.);\nlightingInfo info;\nfloat shadow=1.;\n#ifdef SPECULARTERM\nfloat glossiness=vSpecularColor.a;\nvec3 specularBase=vec3(0.,0.,0.);\nvec3 specularColor=vSpecularColor.rgb;\n#else\nfloat glossiness=0.;\n#endif\n#include<lightFragment>[0..maxSimultaneousLights]\n#ifdef VERTEXALPHA\nalpha*=vColor.a;\n#endif\n#ifdef SPECULARTERM\nvec3 finalSpecular=specularBase*specularColor;\n#else\nvec3 finalSpecular=vec3(0.0);\n#endif\nvec3 finalDiffuse=clamp(diffuseBase*diffuseColor,0.0,1.0)*baseColor.rgb;\n\nvec4 color=vec4(finalDiffuse+finalSpecular,alpha);\n#include<fogFragment>\ngl_FragColor=color;\n}\n";r.Effect.ShadersStore.triplanarPixelShader=o;var a="precision highp float;\n\nattribute vec3 position;\n#ifdef NORMAL\nattribute vec3 normal;\n#endif\n#ifdef VERTEXCOLOR\nattribute vec4 color;\n#endif\n#include<bonesDeclaration>\n\n#include<instancesDeclaration>\nuniform mat4 view;\nuniform mat4 viewProjection;\n#ifdef DIFFUSEX\nvarying vec2 vTextureUVX;\n#endif\n#ifdef DIFFUSEY\nvarying vec2 vTextureUVY;\n#endif\n#ifdef DIFFUSEZ\nvarying vec2 vTextureUVZ;\n#endif\nuniform float tileSize;\n#ifdef POINTSIZE\nuniform float pointSize;\n#endif\n\nvarying vec3 vPositionW;\n#ifdef NORMAL\nvarying mat3 tangentSpace;\n#endif\n#ifdef VERTEXCOLOR\nvarying vec4 vColor;\n#endif\n#include<clipPlaneVertexDeclaration>\n#include<fogVertexDeclaration>\n#include<__decl__lightFragment>[0..maxSimultaneousLights]\nvoid main(void)\n{\n#include<instancesVertex>\n#include<bonesVertex>\nvec4 worldPos=finalWorld*vec4(position,1.0);\ngl_Position=viewProjection*worldPos;\nvPositionW=vec3(worldPos);\n#ifdef DIFFUSEX\nvTextureUVX=worldPos.zy/tileSize;\n#endif\n#ifdef DIFFUSEY\nvTextureUVY=worldPos.xz/tileSize;\n#endif\n#ifdef DIFFUSEZ\nvTextureUVZ=worldPos.xy/tileSize;\n#endif\n#ifdef NORMAL\n\nvec3 xtan=vec3(0,0,1);\nvec3 xbin=vec3(0,1,0);\nvec3 ytan=vec3(1,0,0);\nvec3 ybin=vec3(0,0,1);\nvec3 ztan=vec3(1,0,0);\nvec3 zbin=vec3(0,1,0);\nvec3 normalizedNormal=normalize(normal);\nnormalizedNormal*=normalizedNormal;\nvec3 worldBinormal=normalize(xbin*normalizedNormal.x+ybin*normalizedNormal.y+zbin*normalizedNormal.z);\nvec3 worldTangent=normalize(xtan*normalizedNormal.x+ytan*normalizedNormal.y+ztan*normalizedNormal.z);\nworldTangent=(world*vec4(worldTangent,1.0)).xyz;\nworldBinormal=(world*vec4(worldBinormal,1.0)).xyz;\nvec3 worldNormal=normalize(cross(worldTangent,worldBinormal));\ntangentSpace[0]=worldTangent;\ntangentSpace[1]=worldBinormal;\ntangentSpace[2]=worldNormal;\n#endif\n\n#include<clipPlaneVertex>\n\n#include<fogVertex>\n\n#include<shadowsVertex>[0..maxSimultaneousLights]\n\n#ifdef VERTEXCOLOR\nvColor=color;\n#endif\n\n#ifdef POINTSIZE\ngl_PointSize=pointSize;\n#endif\n}\n";r.Effect.ShadersStore.triplanarVertexShader=a;var s=function(e){function t(){var t=e.call(this)||this;return t.DIFFUSEX=!1,t.DIFFUSEY=!1,t.DIFFUSEZ=!1,t.BUMPX=!1,t.BUMPY=!1,t.BUMPZ=!1,t.CLIPPLANE=!1,t.CLIPPLANE2=!1,t.CLIPPLANE3=!1,t.CLIPPLANE4=!1,t.CLIPPLANE5=!1,t.CLIPPLANE6=!1,t.ALPHATEST=!1,t.DEPTHPREPASS=!1,t.POINTSIZE=!1,t.FOG=!1,t.SPECULARTERM=!1,t.NORMAL=!1,t.VERTEXCOLOR=!1,t.VERTEXALPHA=!1,t.NUM_BONE_INFLUENCERS=0,t.BonesPerMesh=0,t.INSTANCES=!1,t.rebuild(),t}return Object(n.b)(t,e),t}(r.MaterialDefines),f=function(e){function t(t,i){var n=e.call(this,t,i)||this;return n.tileSize=1,n.diffuseColor=new r.Color3(1,1,1),n.specularColor=new r.Color3(.2,.2,.2),n.specularPower=64,n._disableLighting=!1,n._maxSimultaneousLights=4,n}return Object(n.b)(t,e),t.prototype.needAlphaBlending=function(){return this.alpha<1},t.prototype.needAlphaTesting=function(){return!1},t.prototype.getAlphaTestTexture=function(){return null},t.prototype.isReadyForSubMesh=function(e,t,i){if(this.isFrozen&&t.effect&&t.effect._wasPreviouslyReady)return!0;t._materialDefines||(t._materialDefines=new s);var n=t._materialDefines,o=this.getScene();if(!this.checkReadyOnEveryCall&&t.effect&&this._renderId===o.getRenderId())return!0;var a=o.getEngine();if(n._areTexturesDirty&&o.texturesEnabled){if(r.MaterialFlags.DiffuseTextureEnabled)for(var f=[this.diffuseTextureX,this.diffuseTextureY,this.diffuseTextureZ],l=["DIFFUSEX","DIFFUSEY","DIFFUSEZ"],u=0;u<f.length;u++)if(f[u]){if(!f[u].isReady())return!1;n[l[u]]=!0}if(r.MaterialFlags.BumpTextureEnabled)for(f=[this.normalTextureX,this.normalTextureY,this.normalTextureZ],l=["BUMPX","BUMPY","BUMPZ"],u=0;u<f.length;u++)if(f[u]){if(!f[u].isReady())return!1;n[l[u]]=!0}}if(r.MaterialHelper.PrepareDefinesForMisc(e,o,!1,this.pointsCloud,this.fogEnabled,this._shouldTurnAlphaTestOn(e),n),n._needNormals=r.MaterialHelper.PrepareDefinesForLights(o,e,n,!1,this._maxSimultaneousLights,this._disableLighting),r.MaterialHelper.PrepareDefinesForFrameBoundValues(o,a,n,!!i),r.MaterialHelper.PrepareDefinesForAttributes(e,n,!0,!0),n.isDirty){n.markAsProcessed(),o.resetCachedMaterial();var c=new r.EffectFallbacks;n.FOG&&c.addFallback(1,"FOG"),r.MaterialHelper.HandleFallbacksForShadows(n,c,this.maxSimultaneousLights),n.NUM_BONE_INFLUENCERS>0&&c.addCPUSkinningFallback(0,e);var d=[r.VertexBuffer.PositionKind];n.NORMAL&&d.push(r.VertexBuffer.NormalKind),n.VERTEXCOLOR&&d.push(r.VertexBuffer.ColorKind),r.MaterialHelper.PrepareAttributesForBones(d,e,n,c),r.MaterialHelper.PrepareAttributesForInstances(d,n);var p=n.toString(),h=["world","view","viewProjection","vEyePosition","vLightsType","vDiffuseColor","vSpecularColor","vFogInfos","vFogColor","pointSize","mBones","vClipPlane","vClipPlane2","vClipPlane3","vClipPlane4","vClipPlane5","vClipPlane6","tileSize"],v=["diffuseSamplerX","diffuseSamplerY","diffuseSamplerZ","normalSamplerX","normalSamplerY","normalSamplerZ"],m=new Array;r.MaterialHelper.PrepareUniformsAndSamplersList({uniformsNames:h,uniformBuffersNames:m,samplers:v,defines:n,maxSimultaneousLights:this.maxSimultaneousLights}),t.setEffect(o.getEngine().createEffect("triplanar",{attributes:d,uniformsNames:h,uniformBuffersNames:m,samplers:v,defines:p,fallbacks:c,onCompiled:this.onCompiled,onError:this.onError,indexParameters:{maxSimultaneousLights:this.maxSimultaneousLights}},a),n)}return!(!t.effect||!t.effect.isReady())&&(this._renderId=o.getRenderId(),t.effect._wasPreviouslyReady=!0,!0)},t.prototype.bindForSubMesh=function(e,t,i){var n=this.getScene(),o=i._materialDefines;if(o){var a=i.effect;a&&(this._activeEffect=a,this.bindOnlyWorldMatrix(e),this._activeEffect.setMatrix("viewProjection",n.getTransformMatrix()),r.MaterialHelper.BindBonesParameters(t,this._activeEffect),this._activeEffect.setFloat("tileSize",this.tileSize),n.getCachedMaterial()!==this&&(this.diffuseTextureX&&this._activeEffect.setTexture("diffuseSamplerX",this.diffuseTextureX),this.diffuseTextureY&&this._activeEffect.setTexture("diffuseSamplerY",this.diffuseTextureY),this.diffuseTextureZ&&this._activeEffect.setTexture("diffuseSamplerZ",this.diffuseTextureZ),this.normalTextureX&&this._activeEffect.setTexture("normalSamplerX",this.normalTextureX),this.normalTextureY&&this._activeEffect.setTexture("normalSamplerY",this.normalTextureY),this.normalTextureZ&&this._activeEffect.setTexture("normalSamplerZ",this.normalTextureZ),r.MaterialHelper.BindClipPlane(this._activeEffect,n),this.pointsCloud&&this._activeEffect.setFloat("pointSize",this.pointSize),r.MaterialHelper.BindEyePosition(a,n)),this._activeEffect.setColor4("vDiffuseColor",this.diffuseColor,this.alpha*t.visibility),o.SPECULARTERM&&this._activeEffect.setColor4("vSpecularColor",this.specularColor,this.specularPower),n.lightsEnabled&&!this.disableLighting&&r.MaterialHelper.BindLights(n,t,this._activeEffect,o,this.maxSimultaneousLights),n.fogEnabled&&t.applyFog&&n.fogMode!==r.Scene.FOGMODE_NONE&&this._activeEffect.setMatrix("view",n.getViewMatrix()),r.MaterialHelper.BindFogParameters(n,t,this._activeEffect),this._afterBind(t,this._activeEffect))}},t.prototype.getAnimatables=function(){var e=[];return this.mixTexture&&this.mixTexture.animations&&this.mixTexture.animations.length>0&&e.push(this.mixTexture),e},t.prototype.getActiveTextures=function(){var t=e.prototype.getActiveTextures.call(this);return this._diffuseTextureX&&t.push(this._diffuseTextureX),this._diffuseTextureY&&t.push(this._diffuseTextureY),this._diffuseTextureZ&&t.push(this._diffuseTextureZ),this._normalTextureX&&t.push(this._normalTextureX),this._normalTextureY&&t.push(this._normalTextureY),this._normalTextureZ&&t.push(this._normalTextureZ),t},t.prototype.hasTexture=function(t){return!!e.prototype.hasTexture.call(this,t)||(this._diffuseTextureX===t||(this._diffuseTextureY===t||(this._diffuseTextureZ===t||(this._normalTextureX===t||(this._normalTextureY===t||this._normalTextureZ===t)))))},t.prototype.dispose=function(t){this.mixTexture&&this.mixTexture.dispose(),e.prototype.dispose.call(this,t)},t.prototype.clone=function(e){var i=this;return r.SerializationHelper.Clone(function(){return new t(e,i.getScene())},this)},t.prototype.serialize=function(){var e=r.SerializationHelper.Serialize(this);return e.customType="BABYLON.TriPlanarMaterial",e},t.prototype.getClassName=function(){return"TriPlanarMaterial"},t.Parse=function(e,i,n){return r.SerializationHelper.Parse(function(){return new t(e.name,i)},e,i,n)},Object(n.a)([Object(r.serializeAsTexture)()],t.prototype,"mixTexture",void 0),Object(n.a)([Object(r.serializeAsTexture)("diffuseTextureX")],t.prototype,"_diffuseTextureX",void 0),Object(n.a)([Object(r.expandToProperty)("_markAllSubMeshesAsTexturesDirty")],t.prototype,"diffuseTextureX",void 0),Object(n.a)([Object(r.serializeAsTexture)("diffuseTexturY")],t.prototype,"_diffuseTextureY",void 0),Object(n.a)([Object(r.expandToProperty)("_markAllSubMeshesAsTexturesDirty")],t.prototype,"diffuseTextureY",void 0),Object(n.a)([Object(r.serializeAsTexture)("diffuseTextureZ")],t.prototype,"_diffuseTextureZ",void 0),Object(n.a)([Object(r.expandToProperty)("_markAllSubMeshesAsTexturesDirty")],t.prototype,"diffuseTextureZ",void 0),Object(n.a)([Object(r.serializeAsTexture)("normalTextureX")],t.prototype,"_normalTextureX",void 0),Object(n.a)([Object(r.expandToProperty)("_markAllSubMeshesAsTexturesDirty")],t.prototype,"normalTextureX",void 0),Object(n.a)([Object(r.serializeAsTexture)("normalTextureY")],t.prototype,"_normalTextureY",void 0),Object(n.a)([Object(r.expandToProperty)("_markAllSubMeshesAsTexturesDirty")],t.prototype,"normalTextureY",void 0),Object(n.a)([Object(r.serializeAsTexture)("normalTextureZ")],t.prototype,"_normalTextureZ",void 0),Object(n.a)([Object(r.expandToProperty)("_markAllSubMeshesAsTexturesDirty")],t.prototype,"normalTextureZ",void 0),Object(n.a)([Object(r.serialize)()],t.prototype,"tileSize",void 0),Object(n.a)([Object(r.serializeAsColor3)()],t.prototype,"diffuseColor",void 0),Object(n.a)([Object(r.serializeAsColor3)()],t.prototype,"specularColor",void 0),Object(n.a)([Object(r.serialize)()],t.prototype,"specularPower",void 0),Object(n.a)([Object(r.serialize)("disableLighting")],t.prototype,"_disableLighting",void 0),Object(n.a)([Object(r.expandToProperty)("_markAllSubMeshesAsLightsDirty")],t.prototype,"disableLighting",void 0),Object(n.a)([Object(r.serialize)("maxSimultaneousLights")],t.prototype,"_maxSimultaneousLights",void 0),Object(n.a)([Object(r.expandToProperty)("_markAllSubMeshesAsLightsDirty")],t.prototype,"maxSimultaneousLights",void 0),t}(r.PushMaterial);r._TypeStore.RegisteredTypes["BABYLON.TriPlanarMaterial"]=f,i.d(t,"TriPlanarMaterial",function(){return f})},function(e,t,i){"use strict";i.r(t);var n=i(1),r=i(0),o="precision highp float;\n\nuniform vec3 vEyePosition;\nuniform vec4 vDiffuseColor;\n\nuniform vec4 furColor;\nuniform float furLength;\nvarying vec3 vPositionW;\nvarying float vfur_length;\n#ifdef NORMAL\nvarying vec3 vNormalW;\n#endif\n#ifdef VERTEXCOLOR\nvarying vec4 vColor;\n#endif\n\n#include<helperFunctions>\n\n#include<__decl__lightFragment>[0..maxSimultaneousLights]\n\n#ifdef DIFFUSE\nvarying vec2 vDiffuseUV;\nuniform sampler2D diffuseSampler;\nuniform vec2 vDiffuseInfos;\n#endif\n\n#ifdef HIGHLEVEL\nuniform float furOffset;\nuniform float furOcclusion;\nuniform sampler2D furTexture;\nvarying vec2 vFurUV;\n#endif\n#include<lightsFragmentFunctions>\n#include<shadowsFragmentFunctions>\n#include<fogFragmentDeclaration>\n#include<clipPlaneFragmentDeclaration>\nfloat Rand(vec3 rv) {\nfloat x=dot(rv,vec3(12.9898,78.233,24.65487));\nreturn fract(sin(x)*43758.5453);\n}\nvoid main(void) {\n\n#include<clipPlaneFragment>\nvec3 viewDirectionW=normalize(vEyePosition-vPositionW);\n\nvec4 baseColor=furColor;\nvec3 diffuseColor=vDiffuseColor.rgb;\n\nfloat alpha=vDiffuseColor.a;\n#ifdef DIFFUSE\nbaseColor*=texture2D(diffuseSampler,vDiffuseUV);\n#ifdef ALPHATEST\nif (baseColor.a<0.4)\ndiscard;\n#endif\n#include<depthPrePass>\nbaseColor.rgb*=vDiffuseInfos.y;\n#endif\n#ifdef VERTEXCOLOR\nbaseColor.rgb*=vColor.rgb;\n#endif\n\n#ifdef NORMAL\nvec3 normalW=normalize(vNormalW);\n#else\nvec3 normalW=vec3(1.0,1.0,1.0);\n#endif\n#ifdef HIGHLEVEL\n\nvec4 furTextureColor=texture2D(furTexture,vec2(vFurUV.x,vFurUV.y));\nif (furTextureColor.a<=0.0 || furTextureColor.g<furOffset) {\ndiscard;\n}\nfloat occlusion=mix(0.0,furTextureColor.b*1.2,furOffset);\nbaseColor=vec4(baseColor.xyz*max(occlusion,furOcclusion),1.1-furOffset);\n#endif\n\nvec3 diffuseBase=vec3(0.,0.,0.);\nlightingInfo info;\nfloat shadow=1.;\nfloat glossiness=0.;\n#ifdef SPECULARTERM\nvec3 specularBase=vec3(0.,0.,0.);\n#endif\n#include<lightFragment>[0..maxSimultaneousLights]\n#ifdef VERTEXALPHA\nalpha*=vColor.a;\n#endif\nvec3 finalDiffuse=clamp(diffuseBase.rgb*baseColor.rgb,0.0,1.0);\n\n#ifdef HIGHLEVEL\nvec4 color=vec4(finalDiffuse,alpha);\n#else\nfloat r=vfur_length/furLength*0.5;\nvec4 color=vec4(finalDiffuse*(0.5+r),alpha);\n#endif\n#include<fogFragment>\ngl_FragColor=color;\n}";r.Effect.ShadersStore.furPixelShader=o;var a="precision highp float;\n\nattribute vec3 position;\nattribute vec3 normal;\n#ifdef UV1\nattribute vec2 uv;\n#endif\n#ifdef UV2\nattribute vec2 uv2;\n#endif\n#ifdef VERTEXCOLOR\nattribute vec4 color;\n#endif\n#include<bonesDeclaration>\n\nuniform float furLength;\nuniform float furAngle;\n#ifdef HIGHLEVEL\nuniform float furOffset;\nuniform vec3 furGravity;\nuniform float furTime;\nuniform float furSpacing;\nuniform float furDensity;\n#endif\n#ifdef HEIGHTMAP\nuniform sampler2D heightTexture;\n#endif\n#ifdef HIGHLEVEL\nvarying vec2 vFurUV;\n#endif\n#include<instancesDeclaration>\nuniform mat4 view;\nuniform mat4 viewProjection;\n#ifdef DIFFUSE\nvarying vec2 vDiffuseUV;\nuniform mat4 diffuseMatrix;\nuniform vec2 vDiffuseInfos;\n#endif\n#ifdef POINTSIZE\nuniform float pointSize;\n#endif\n\nvarying vec3 vPositionW;\n#ifdef NORMAL\nvarying vec3 vNormalW;\n#endif\nvarying float vfur_length;\n#ifdef VERTEXCOLOR\nvarying vec4 vColor;\n#endif\n#include<clipPlaneVertexDeclaration>\n#include<fogVertexDeclaration>\n#include<__decl__lightFragment>[0..maxSimultaneousLights]\nfloat Rand(vec3 rv) {\nfloat x=dot(rv,vec3(12.9898,78.233,24.65487));\nreturn fract(sin(x)*43758.5453);\n}\nvoid main(void) {\n#include<instancesVertex>\n#include<bonesVertex>\n\nfloat r=Rand(position);\n#ifdef HEIGHTMAP\n#if __VERSION__>100\nvfur_length=furLength*texture(heightTexture,uv).x;\n#else\nvfur_length=furLength*texture2D(heightTexture,uv).r;\n#endif\n#else\nvfur_length=(furLength*r);\n#endif\nvec3 tangent1=vec3(normal.y,-normal.x,0);\nvec3 tangent2=vec3(-normal.z,0,normal.x);\nr=Rand(tangent1*r);\nfloat J=(2.0+4.0*r);\nr=Rand(tangent2*r);\nfloat K=(2.0+2.0*r);\ntangent1=tangent1*J+tangent2*K;\ntangent1=normalize(tangent1);\nvec3 newPosition=position+normal*vfur_length*cos(furAngle)+tangent1*vfur_length*sin(furAngle);\n#ifdef HIGHLEVEL\n\nvec3 forceDirection=vec3(0.0,0.0,0.0);\nforceDirection.x=sin(furTime+position.x*0.05)*0.2;\nforceDirection.y=cos(furTime*0.7+position.y*0.04)*0.2;\nforceDirection.z=sin(furTime*0.7+position.z*0.04)*0.2;\nvec3 displacement=vec3(0.0,0.0,0.0);\ndisplacement=furGravity+forceDirection;\nfloat displacementFactor=pow(furOffset,3.0);\nvec3 aNormal=normal;\naNormal.xyz+=displacement*displacementFactor;\nnewPosition=vec3(newPosition.x,newPosition.y,newPosition.z)+(normalize(aNormal)*furOffset*furSpacing);\n#endif\n#ifdef NORMAL\nvNormalW=normalize(vec3(finalWorld*vec4(normal,0.0)));\n#endif\n\ngl_Position=viewProjection*finalWorld*vec4(newPosition,1.0);\nvec4 worldPos=finalWorld*vec4(newPosition,1.0);\nvPositionW=vec3(worldPos);\n\n#ifndef UV1\nvec2 uv=vec2(0.,0.);\n#endif\n#ifndef UV2\nvec2 uv2=vec2(0.,0.);\n#endif\n#ifdef DIFFUSE\nif (vDiffuseInfos.x == 0.)\n{\nvDiffuseUV=vec2(diffuseMatrix*vec4(uv,1.0,0.0));\n}\nelse\n{\nvDiffuseUV=vec2(diffuseMatrix*vec4(uv2,1.0,0.0));\n}\n#ifdef HIGHLEVEL\nvFurUV=vDiffuseUV*furDensity;\n#endif\n#else\n#ifdef HIGHLEVEL\nvFurUV=uv*furDensity;\n#endif\n#endif\n\n#include<clipPlaneVertex>\n\n#include<fogVertex>\n\n#include<shadowsVertex>[0..maxSimultaneousLights]\n\n#ifdef VERTEXCOLOR\nvColor=color;\n#endif\n\n#ifdef POINTSIZE\ngl_PointSize=pointSize;\n#endif\n}\n";r.Effect.ShadersStore.furVertexShader=a;var s=function(e){function t(){var t=e.call(this)||this;return t.DIFFUSE=!1,t.HEIGHTMAP=!1,t.CLIPPLANE=!1,t.CLIPPLANE2=!1,t.CLIPPLANE3=!1,t.CLIPPLANE4=!1,t.CLIPPLANE5=!1,t.CLIPPLANE6=!1,t.ALPHATEST=!1,t.DEPTHPREPASS=!1,t.POINTSIZE=!1,t.FOG=!1,t.NORMAL=!1,t.UV1=!1,t.UV2=!1,t.VERTEXCOLOR=!1,t.VERTEXALPHA=!1,t.NUM_BONE_INFLUENCERS=0,t.BonesPerMesh=0,t.INSTANCES=!1,t.HIGHLEVEL=!1,t.rebuild(),t}return Object(n.b)(t,e),t}(r.MaterialDefines),f=function(e){function t(t,i){var n=e.call(this,t,i)||this;return n.diffuseColor=new r.Color3(1,1,1),n.furLength=1,n.furAngle=0,n.furColor=new r.Color3(.44,.21,.02),n.furOffset=0,n.furSpacing=12,n.furGravity=new r.Vector3(0,0,0),n.furSpeed=100,n.furDensity=20,n.furOcclusion=0,n._disableLighting=!1,n._maxSimultaneousLights=4,n.highLevelFur=!0,n._furTime=0,n}return Object(n.b)(t,e),Object.defineProperty(t.prototype,"furTime",{get:function(){return this._furTime},set:function(e){this._furTime=e},enumerable:!0,configurable:!0}),t.prototype.needAlphaBlending=function(){return this.alpha<1},t.prototype.needAlphaTesting=function(){return!1},t.prototype.getAlphaTestTexture=function(){return null},t.prototype.updateFur=function(){for(var e=1;e<this._meshes.length;e++){var t=this._meshes[e].material;t.furLength=this.furLength,t.furAngle=this.furAngle,t.furGravity=this.furGravity,t.furSpacing=this.furSpacing,t.furSpeed=this.furSpeed,t.furColor=this.furColor,t.diffuseTexture=this.diffuseTexture,t.furTexture=this.furTexture,t.highLevelFur=this.highLevelFur,t.furTime=this.furTime,t.furDensity=this.furDensity}},t.prototype.isReadyForSubMesh=function(e,t,i){if(this.isFrozen&&t.effect&&t.effect._wasPreviouslyReady)return!0;t._materialDefines||(t._materialDefines=new s);var n=t._materialDefines,o=this.getScene();if(!this.checkReadyOnEveryCall&&t.effect&&this._renderId===o.getRenderId())return!0;var a=o.getEngine();if(n._areTexturesDirty&&o.texturesEnabled){if(this.diffuseTexture&&r.MaterialFlags.DiffuseTextureEnabled){if(!this.diffuseTexture.isReady())return!1;n._needUVs=!0,n.DIFFUSE=!0}if(this.heightTexture&&a.getCaps().maxVertexTextureImageUnits){if(!this.heightTexture.isReady())return!1;n._needUVs=!0,n.HEIGHTMAP=!0}}if(this.highLevelFur!==n.HIGHLEVEL&&(n.HIGHLEVEL=!0,n.markAsUnprocessed()),r.MaterialHelper.PrepareDefinesForMisc(e,o,!1,this.pointsCloud,this.fogEnabled,this._shouldTurnAlphaTestOn(e),n),n._needNormals=r.MaterialHelper.PrepareDefinesForLights(o,e,n,!1,this._maxSimultaneousLights,this._disableLighting),r.MaterialHelper.PrepareDefinesForFrameBoundValues(o,a,n,!!i),r.MaterialHelper.PrepareDefinesForAttributes(e,n,!0,!0),n.isDirty){n.markAsProcessed(),o.resetCachedMaterial();var f=new r.EffectFallbacks;n.FOG&&f.addFallback(1,"FOG"),r.MaterialHelper.HandleFallbacksForShadows(n,f,this.maxSimultaneousLights),n.NUM_BONE_INFLUENCERS>0&&f.addCPUSkinningFallback(0,e);var l=[r.VertexBuffer.PositionKind];n.NORMAL&&l.push(r.VertexBuffer.NormalKind),n.UV1&&l.push(r.VertexBuffer.UVKind),n.UV2&&l.push(r.VertexBuffer.UV2Kind),n.VERTEXCOLOR&&l.push(r.VertexBuffer.ColorKind),r.MaterialHelper.PrepareAttributesForBones(l,e,n,f),r.MaterialHelper.PrepareAttributesForInstances(l,n);var u=n.toString(),c=["world","view","viewProjection","vEyePosition","vLightsType","vDiffuseColor","vFogInfos","vFogColor","pointSize","vDiffuseInfos","mBones","vClipPlane","vClipPlane2","vClipPlane3","vClipPlane4","vClipPlane5","vClipPlane6","diffuseMatrix","furLength","furAngle","furColor","furOffset","furGravity","furTime","furSpacing","furDensity","furOcclusion"],d=["diffuseSampler","heightTexture","furTexture"],p=new Array;r.MaterialHelper.PrepareUniformsAndSamplersList({uniformsNames:c,uniformBuffersNames:p,samplers:d,defines:n,maxSimultaneousLights:this.maxSimultaneousLights}),t.setEffect(o.getEngine().createEffect("fur",{attributes:l,uniformsNames:c,uniformBuffersNames:p,samplers:d,defines:u,fallbacks:f,onCompiled:this.onCompiled,onError:this.onError,indexParameters:{maxSimultaneousLights:this.maxSimultaneousLights}},a),n)}return!(!t.effect||!t.effect.isReady())&&(this._renderId=o.getRenderId(),t.effect._wasPreviouslyReady=!0,!0)},t.prototype.bindForSubMesh=function(e,t,i){var n=this.getScene(),o=i._materialDefines;if(o){var a=i.effect;a&&(this._activeEffect=a,this.bindOnlyWorldMatrix(e),this._activeEffect.setMatrix("viewProjection",n.getTransformMatrix()),r.MaterialHelper.BindBonesParameters(t,this._activeEffect),n.getCachedMaterial()!==this&&(this._diffuseTexture&&r.MaterialFlags.DiffuseTextureEnabled&&(this._activeEffect.setTexture("diffuseSampler",this._diffuseTexture),this._activeEffect.setFloat2("vDiffuseInfos",this._diffuseTexture.coordinatesIndex,this._diffuseTexture.level),this._activeEffect.setMatrix("diffuseMatrix",this._diffuseTexture.getTextureMatrix())),this._heightTexture&&this._activeEffect.setTexture("heightTexture",this._heightTexture),r.MaterialHelper.BindClipPlane(this._activeEffect,n),this.pointsCloud&&this._activeEffect.setFloat("pointSize",this.pointSize),r.MaterialHelper.BindEyePosition(a,n)),this._activeEffect.setColor4("vDiffuseColor",this.diffuseColor,this.alpha*t.visibility),n.lightsEnabled&&!this.disableLighting&&r.MaterialHelper.BindLights(n,t,this._activeEffect,o,this.maxSimultaneousLights),n.fogEnabled&&t.applyFog&&n.fogMode!==r.Scene.FOGMODE_NONE&&this._activeEffect.setMatrix("view",n.getViewMatrix()),r.MaterialHelper.BindFogParameters(n,t,this._activeEffect),this._activeEffect.setFloat("furLength",this.furLength),this._activeEffect.setFloat("furAngle",this.furAngle),this._activeEffect.setColor4("furColor",this.furColor,1),this.highLevelFur&&(this._activeEffect.setVector3("furGravity",this.furGravity),this._activeEffect.setFloat("furOffset",this.furOffset),this._activeEffect.setFloat("furSpacing",this.furSpacing),this._activeEffect.setFloat("furDensity",this.furDensity),this._activeEffect.setFloat("furOcclusion",this.furOcclusion),this._furTime+=this.getScene().getEngine().getDeltaTime()/this.furSpeed,this._activeEffect.setFloat("furTime",this._furTime),this._activeEffect.setTexture("furTexture",this.furTexture)),this._afterBind(t,this._activeEffect))}},t.prototype.getAnimatables=function(){var e=[];return this.diffuseTexture&&this.diffuseTexture.animations&&this.diffuseTexture.animations.length>0&&e.push(this.diffuseTexture),this.heightTexture&&this.heightTexture.animations&&this.heightTexture.animations.length>0&&e.push(this.heightTexture),e},t.prototype.getActiveTextures=function(){var t=e.prototype.getActiveTextures.call(this);return this._diffuseTexture&&t.push(this._diffuseTexture),this._heightTexture&&t.push(this._heightTexture),t},t.prototype.hasTexture=function(t){return!!e.prototype.hasTexture.call(this,t)||(this.diffuseTexture===t||this._heightTexture===t)},t.prototype.dispose=function(t){if(this.diffuseTexture&&this.diffuseTexture.dispose(),this._meshes)for(var i=1;i<this._meshes.length;i++){var n=this._meshes[i].material;n&&n.dispose(t),this._meshes[i].dispose()}e.prototype.dispose.call(this,t)},t.prototype.clone=function(e){var i=this;return r.SerializationHelper.Clone(function(){return new t(e,i.getScene())},this)},t.prototype.serialize=function(){var e=r.SerializationHelper.Serialize(this);return e.customType="BABYLON.FurMaterial",this._meshes&&(e.sourceMeshName=this._meshes[0].name,e.quality=this._meshes.length),e},t.prototype.getClassName=function(){return"FurMaterial"},t.Parse=function(e,i,n){var o=r.SerializationHelper.Parse(function(){return new t(e.name,i)},e,i,n);return e.sourceMeshName&&o.highLevelFur&&i.executeWhenReady(function(){var n=i.getMeshByName(e.sourceMeshName);if(n){var r=t.GenerateTexture("Fur Texture",i);o.furTexture=r,t.FurifyMesh(n,e.quality)}}),o},t.GenerateTexture=function(e,t){for(var i=new r.DynamicTexture("FurTexture "+e,256,t,!0),n=i.getContext(),o=0;o<2e4;++o)n.fillStyle="rgba(255, "+Math.floor(255*Math.random())+", "+Math.floor(255*Math.random())+", 1)",n.fillRect(Math.random()*i.getSize().width,Math.random()*i.getSize().height,2,2);return i.update(!1),i.wrapU=r.Texture.WRAP_ADDRESSMODE,i.wrapV=r.Texture.WRAP_ADDRESSMODE,i},t.FurifyMesh=function(e,i){var n,o=[e],a=e.material;if(!(a instanceof t))throw"The material of the source mesh must be a Fur Material";for(n=1;n<i;n++){var s=new t(a.name+n,e.getScene());e.getScene().materials.pop(),r.Tags.EnableFor(s),r.Tags.AddTagsTo(s,"furShellMaterial"),s.furLength=a.furLength,s.furAngle=a.furAngle,s.furGravity=a.furGravity,s.furSpacing=a.furSpacing,s.furSpeed=a.furSpeed,s.furColor=a.furColor,s.diffuseTexture=a.diffuseTexture,s.furOffset=n/i,s.furTexture=a.furTexture,s.highLevelFur=a.highLevelFur,s.furTime=a.furTime,s.furDensity=a.furDensity;var f=e.clone(e.name+n);f.material=s,f.skeleton=e.skeleton,f.position=r.Vector3.Zero(),o.push(f)}for(n=1;n<o.length;n++)o[n].parent=e;return e.material._meshes=o,o},Object(n.a)([Object(r.serializeAsTexture)("diffuseTexture")],t.prototype,"_diffuseTexture",void 0),Object(n.a)([Object(r.expandToProperty)("_markAllSubMeshesAsTexturesDirty")],t.prototype,"diffuseTexture",void 0),Object(n.a)([Object(r.serializeAsTexture)("heightTexture")],t.prototype,"_heightTexture",void 0),Object(n.a)([Object(r.expandToProperty)("_markAllSubMeshesAsTexturesDirty")],t.prototype,"heightTexture",void 0),Object(n.a)([Object(r.serializeAsColor3)()],t.prototype,"diffuseColor",void 0),Object(n.a)([Object(r.serialize)()],t.prototype,"furLength",void 0),Object(n.a)([Object(r.serialize)()],t.prototype,"furAngle",void 0),Object(n.a)([Object(r.serializeAsColor3)()],t.prototype,"furColor",void 0),Object(n.a)([Object(r.serialize)()],t.prototype,"furOffset",void 0),Object(n.a)([Object(r.serialize)()],t.prototype,"furSpacing",void 0),Object(n.a)([Object(r.serializeAsVector3)()],t.prototype,"furGravity",void 0),Object(n.a)([Object(r.serialize)()],t.prototype,"furSpeed",void 0),Object(n.a)([Object(r.serialize)()],t.prototype,"furDensity",void 0),Object(n.a)([Object(r.serialize)()],t.prototype,"furOcclusion",void 0),Object(n.a)([Object(r.serialize)("disableLighting")],t.prototype,"_disableLighting",void 0),Object(n.a)([Object(r.expandToProperty)("_markAllSubMeshesAsLightsDirty")],t.prototype,"disableLighting",void 0),Object(n.a)([Object(r.serialize)("maxSimultaneousLights")],t.prototype,"_maxSimultaneousLights",void 0),Object(n.a)([Object(r.expandToProperty)("_markAllSubMeshesAsLightsDirty")],t.prototype,"maxSimultaneousLights",void 0),Object(n.a)([Object(r.serialize)()],t.prototype,"highLevelFur",void 0),Object(n.a)([Object(r.serialize)()],t.prototype,"furTime",null),t}(r.PushMaterial);r._TypeStore.RegisteredTypes["BABYLON.FurMaterial"]=f,i.d(t,"FurMaterial",function(){return f})},function(e,t,i){"use strict";i.r(t);var n=i(1),r=i(0),o="precision highp float;\n\nuniform vec3 vEyePosition;\nuniform vec4 vDiffuseColor;\n#ifdef SPECULARTERM\nuniform vec4 vSpecularColor;\n#endif\n\nvarying vec3 vPositionW;\n#ifdef NORMAL\nvarying vec3 vNormalW;\n#endif\n#ifdef VERTEXCOLOR\nvarying vec4 vColor;\n#endif\n\n#include<helperFunctions>\n\n#include<__decl__lightFragment>[0..maxSimultaneousLights]\n\n#ifdef DIFFUSE\nvarying vec2 vTextureUV;\nuniform sampler2D textureSampler;\nuniform vec2 vTextureInfos;\nuniform sampler2D diffuse1Sampler;\nuniform sampler2D diffuse2Sampler;\nuniform sampler2D diffuse3Sampler;\nuniform vec2 diffuse1Infos;\nuniform vec2 diffuse2Infos;\nuniform vec2 diffuse3Infos;\n#endif\n#ifdef BUMP\nuniform sampler2D bump1Sampler;\nuniform sampler2D bump2Sampler;\nuniform sampler2D bump3Sampler;\n#endif\n\n#include<lightsFragmentFunctions>\n#include<shadowsFragmentFunctions>\n#include<clipPlaneFragmentDeclaration>\n\n#include<fogFragmentDeclaration>\n\n#ifdef BUMP\n#extension GL_OES_standard_derivatives : enable\n\nmat3 cotangent_frame(vec3 normal,vec3 p,vec2 uv)\n{\n\nvec3 dp1=dFdx(p);\nvec3 dp2=dFdy(p);\nvec2 duv1=dFdx(uv);\nvec2 duv2=dFdy(uv);\n\nvec3 dp2perp=cross(dp2,normal);\nvec3 dp1perp=cross(normal,dp1);\nvec3 tangent=dp2perp*duv1.x+dp1perp*duv2.x;\nvec3 binormal=dp2perp*duv1.y+dp1perp*duv2.y;\n\nfloat invmax=inversesqrt(max(dot(tangent,tangent),dot(binormal,binormal)));\nreturn mat3(tangent*invmax,binormal*invmax,normal);\n}\nvec3 perturbNormal(vec3 viewDir,vec3 mixColor)\n{\nvec3 bump1Color=texture2D(bump1Sampler,vTextureUV*diffuse1Infos).xyz;\nvec3 bump2Color=texture2D(bump2Sampler,vTextureUV*diffuse2Infos).xyz;\nvec3 bump3Color=texture2D(bump3Sampler,vTextureUV*diffuse3Infos).xyz;\nbump1Color.rgb*=mixColor.r;\nbump2Color.rgb=mix(bump1Color.rgb,bump2Color.rgb,mixColor.g);\nvec3 map=mix(bump2Color.rgb,bump3Color.rgb,mixColor.b);\nmap=map*255./127.-128./127.;\nmat3 TBN=cotangent_frame(vNormalW*vTextureInfos.y,-viewDir,vTextureUV);\nreturn normalize(TBN*map);\n}\n#endif\nvoid main(void) {\n\n#include<clipPlaneFragment>\nvec3 viewDirectionW=normalize(vEyePosition-vPositionW);\n\nvec4 baseColor=vec4(1.,1.,1.,1.);\nvec3 diffuseColor=vDiffuseColor.rgb;\n#ifdef SPECULARTERM\nfloat glossiness=vSpecularColor.a;\nvec3 specularColor=vSpecularColor.rgb;\n#else\nfloat glossiness=0.;\n#endif\n\nfloat alpha=vDiffuseColor.a;\n\n#ifdef NORMAL\nvec3 normalW=normalize(vNormalW);\n#else\nvec3 normalW=vec3(1.0,1.0,1.0);\n#endif\n#ifdef DIFFUSE\nbaseColor=texture2D(textureSampler,vTextureUV);\n#if defined(BUMP) && defined(DIFFUSE)\nnormalW=perturbNormal(viewDirectionW,baseColor.rgb);\n#endif\n#ifdef ALPHATEST\nif (baseColor.a<0.4)\ndiscard;\n#endif\n#include<depthPrePass>\nbaseColor.rgb*=vTextureInfos.y;\nvec4 diffuse1Color=texture2D(diffuse1Sampler,vTextureUV*diffuse1Infos);\nvec4 diffuse2Color=texture2D(diffuse2Sampler,vTextureUV*diffuse2Infos);\nvec4 diffuse3Color=texture2D(diffuse3Sampler,vTextureUV*diffuse3Infos);\ndiffuse1Color.rgb*=baseColor.r;\ndiffuse2Color.rgb=mix(diffuse1Color.rgb,diffuse2Color.rgb,baseColor.g);\nbaseColor.rgb=mix(diffuse2Color.rgb,diffuse3Color.rgb,baseColor.b);\n#endif\n#ifdef VERTEXCOLOR\nbaseColor.rgb*=vColor.rgb;\n#endif\n\nvec3 diffuseBase=vec3(0.,0.,0.);\nlightingInfo info;\nfloat shadow=1.;\n#ifdef SPECULARTERM\nvec3 specularBase=vec3(0.,0.,0.);\n#endif\n#include<lightFragment>[0..maxSimultaneousLights]\n#ifdef VERTEXALPHA\nalpha*=vColor.a;\n#endif\n#ifdef SPECULARTERM\nvec3 finalSpecular=specularBase*specularColor;\n#else\nvec3 finalSpecular=vec3(0.0);\n#endif\nvec3 finalDiffuse=clamp(diffuseBase*diffuseColor*baseColor.rgb,0.0,1.0);\n\nvec4 color=vec4(finalDiffuse+finalSpecular,alpha);\n#include<fogFragment>\ngl_FragColor=color;\n}\n";r.Effect.ShadersStore.terrainPixelShader=o;var a="precision highp float;\n\nattribute vec3 position;\n#ifdef NORMAL\nattribute vec3 normal;\n#endif\n#ifdef UV1\nattribute vec2 uv;\n#endif\n#ifdef UV2\nattribute vec2 uv2;\n#endif\n#ifdef VERTEXCOLOR\nattribute vec4 color;\n#endif\n#include<bonesDeclaration>\n\n#include<instancesDeclaration>\nuniform mat4 view;\nuniform mat4 viewProjection;\n#ifdef DIFFUSE\nvarying vec2 vTextureUV;\nuniform mat4 textureMatrix;\nuniform vec2 vTextureInfos;\n#endif\n#ifdef POINTSIZE\nuniform float pointSize;\n#endif\n\nvarying vec3 vPositionW;\n#ifdef NORMAL\nvarying vec3 vNormalW;\n#endif\n#ifdef VERTEXCOLOR\nvarying vec4 vColor;\n#endif\n#include<clipPlaneVertexDeclaration>\n#include<fogVertexDeclaration>\n#include<__decl__lightFragment>[0..maxSimultaneousLights]\nvoid main(void) {\n#include<instancesVertex>\n#include<bonesVertex>\nvec4 worldPos=finalWorld*vec4(position,1.0);\ngl_Position=viewProjection*worldPos;\nvPositionW=vec3(worldPos);\n#ifdef NORMAL\nvNormalW=normalize(vec3(finalWorld*vec4(normal,0.0)));\n#endif\n\n#ifndef UV1\nvec2 uv=vec2(0.,0.);\n#endif\n#ifndef UV2\nvec2 uv2=vec2(0.,0.);\n#endif\n#ifdef DIFFUSE\nif (vTextureInfos.x == 0.)\n{\nvTextureUV=vec2(textureMatrix*vec4(uv,1.0,0.0));\n}\nelse\n{\nvTextureUV=vec2(textureMatrix*vec4(uv2,1.0,0.0));\n}\n#endif\n\n#include<clipPlaneVertex>\n\n#include<fogVertex>\n\n#include<shadowsVertex>[0..maxSimultaneousLights]\n\n#ifdef VERTEXCOLOR\nvColor=color;\n#endif\n\n#ifdef POINTSIZE\ngl_PointSize=pointSize;\n#endif\n}\n";r.Effect.ShadersStore.terrainVertexShader=a;var s=function(e){function t(){var t=e.call(this)||this;return t.DIFFUSE=!1,t.BUMP=!1,t.CLIPPLANE=!1,t.CLIPPLANE2=!1,t.CLIPPLANE3=!1,t.CLIPPLANE4=!1,t.CLIPPLANE5=!1,t.CLIPPLANE6=!1,t.ALPHATEST=!1,t.DEPTHPREPASS=!1,t.POINTSIZE=!1,t.FOG=!1,t.SPECULARTERM=!1,t.NORMAL=!1,t.UV1=!1,t.UV2=!1,t.VERTEXCOLOR=!1,t.VERTEXALPHA=!1,t.NUM_BONE_INFLUENCERS=0,t.BonesPerMesh=0,t.INSTANCES=!1,t.rebuild(),t}return Object(n.b)(t,e),t}(r.MaterialDefines),f=function(e){function t(t,i){var n=e.call(this,t,i)||this;return n.diffuseColor=new r.Color3(1,1,1),n.specularColor=new r.Color3(0,0,0),n.specularPower=64,n._disableLighting=!1,n._maxSimultaneousLights=4,n}return Object(n.b)(t,e),t.prototype.needAlphaBlending=function(){return this.alpha<1},t.prototype.needAlphaTesting=function(){return!1},t.prototype.getAlphaTestTexture=function(){return null},t.prototype.isReadyForSubMesh=function(e,t,i){if(this.isFrozen&&t.effect&&t.effect._wasPreviouslyReady)return!0;t._materialDefines||(t._materialDefines=new s);var n=t._materialDefines,o=this.getScene();if(!this.checkReadyOnEveryCall&&t.effect&&this._renderId===o.getRenderId())return!0;var a=o.getEngine();if(o.texturesEnabled){if(!this.mixTexture||!this.mixTexture.isReady())return!1;if(n._needUVs=!0,r.MaterialFlags.DiffuseTextureEnabled){if(!this.diffuseTexture1||!this.diffuseTexture1.isReady())return!1;if(!this.diffuseTexture2||!this.diffuseTexture2.isReady())return!1;if(!this.diffuseTexture3||!this.diffuseTexture3.isReady())return!1;n.DIFFUSE=!0}if(this.bumpTexture1&&this.bumpTexture2&&this.bumpTexture3&&r.MaterialFlags.BumpTextureEnabled){if(!this.bumpTexture1.isReady())return!1;if(!this.bumpTexture2.isReady())return!1;if(!this.bumpTexture3.isReady())return!1;n._needNormals=!0,n.BUMP=!0}}if(r.MaterialHelper.PrepareDefinesForMisc(e,o,!1,this.pointsCloud,this.fogEnabled,this._shouldTurnAlphaTestOn(e),n),n._needNormals=r.MaterialHelper.PrepareDefinesForLights(o,e,n,!1,this._maxSimultaneousLights,this._disableLighting),r.MaterialHelper.PrepareDefinesForFrameBoundValues(o,a,n,!!i),r.MaterialHelper.PrepareDefinesForAttributes(e,n,!0,!0),n.isDirty){n.markAsProcessed(),o.resetCachedMaterial();var f=new r.EffectFallbacks;n.FOG&&f.addFallback(1,"FOG"),r.MaterialHelper.HandleFallbacksForShadows(n,f,this.maxSimultaneousLights),n.NUM_BONE_INFLUENCERS>0&&f.addCPUSkinningFallback(0,e);var l=[r.VertexBuffer.PositionKind];n.NORMAL&&l.push(r.VertexBuffer.NormalKind),n.UV1&&l.push(r.VertexBuffer.UVKind),n.UV2&&l.push(r.VertexBuffer.UV2Kind),n.VERTEXCOLOR&&l.push(r.VertexBuffer.ColorKind),r.MaterialHelper.PrepareAttributesForBones(l,e,n,f),r.MaterialHelper.PrepareAttributesForInstances(l,n);var u=n.toString(),c=["world","view","viewProjection","vEyePosition","vLightsType","vDiffuseColor","vSpecularColor","vFogInfos","vFogColor","pointSize","vTextureInfos","mBones","vClipPlane","vClipPlane2","vClipPlane3","vClipPlane4","vClipPlane5","vClipPlane6","textureMatrix","diffuse1Infos","diffuse2Infos","diffuse3Infos"],d=["textureSampler","diffuse1Sampler","diffuse2Sampler","diffuse3Sampler","bump1Sampler","bump2Sampler","bump3Sampler"],p=new Array;r.MaterialHelper.PrepareUniformsAndSamplersList({uniformsNames:c,uniformBuffersNames:p,samplers:d,defines:n,maxSimultaneousLights:this.maxSimultaneousLights}),t.setEffect(o.getEngine().createEffect("terrain",{attributes:l,uniformsNames:c,uniformBuffersNames:p,samplers:d,defines:u,fallbacks:f,onCompiled:this.onCompiled,onError:this.onError,indexParameters:{maxSimultaneousLights:this.maxSimultaneousLights}},a),n)}return!(!t.effect||!t.effect.isReady())&&(this._renderId=o.getRenderId(),t.effect._wasPreviouslyReady=!0,!0)},t.prototype.bindForSubMesh=function(e,t,i){var n=this.getScene(),o=i._materialDefines;if(o){var a=i.effect;a&&(this._activeEffect=a,this.bindOnlyWorldMatrix(e),this._activeEffect.setMatrix("viewProjection",n.getTransformMatrix()),r.MaterialHelper.BindBonesParameters(t,this._activeEffect),this._mustRebind(n,a)&&(this.mixTexture&&(this._activeEffect.setTexture("textureSampler",this._mixTexture),this._activeEffect.setFloat2("vTextureInfos",this._mixTexture.coordinatesIndex,this._mixTexture.level),this._activeEffect.setMatrix("textureMatrix",this._mixTexture.getTextureMatrix()),r.MaterialFlags.DiffuseTextureEnabled&&(this._diffuseTexture1&&(this._activeEffect.setTexture("diffuse1Sampler",this._diffuseTexture1),this._activeEffect.setFloat2("diffuse1Infos",this._diffuseTexture1.uScale,this._diffuseTexture1.vScale)),this._diffuseTexture2&&(this._activeEffect.setTexture("diffuse2Sampler",this._diffuseTexture2),this._activeEffect.setFloat2("diffuse2Infos",this._diffuseTexture2.uScale,this._diffuseTexture2.vScale)),this._diffuseTexture3&&(this._activeEffect.setTexture("diffuse3Sampler",this._diffuseTexture3),this._activeEffect.setFloat2("diffuse3Infos",this._diffuseTexture3.uScale,this._diffuseTexture3.vScale))),r.MaterialFlags.BumpTextureEnabled&&n.getEngine().getCaps().standardDerivatives&&(this._bumpTexture1&&this._activeEffect.setTexture("bump1Sampler",this._bumpTexture1),this._bumpTexture2&&this._activeEffect.setTexture("bump2Sampler",this._bumpTexture2),this._bumpTexture3&&this._activeEffect.setTexture("bump3Sampler",this._bumpTexture3))),r.MaterialHelper.BindClipPlane(this._activeEffect,n),this.pointsCloud&&this._activeEffect.setFloat("pointSize",this.pointSize),r.MaterialHelper.BindEyePosition(a,n)),this._activeEffect.setColor4("vDiffuseColor",this.diffuseColor,this.alpha*t.visibility),o.SPECULARTERM&&this._activeEffect.setColor4("vSpecularColor",this.specularColor,this.specularPower),n.lightsEnabled&&!this.disableLighting&&r.MaterialHelper.BindLights(n,t,this._activeEffect,o,this.maxSimultaneousLights),n.fogEnabled&&t.applyFog&&n.fogMode!==r.Scene.FOGMODE_NONE&&this._activeEffect.setMatrix("view",n.getViewMatrix()),r.MaterialHelper.BindFogParameters(n,t,this._activeEffect),this._afterBind(t,this._activeEffect))}},t.prototype.getAnimatables=function(){var e=[];return this.mixTexture&&this.mixTexture.animations&&this.mixTexture.animations.length>0&&e.push(this.mixTexture),e},t.prototype.getActiveTextures=function(){var t=e.prototype.getActiveTextures.call(this);return this._mixTexture&&t.push(this._mixTexture),this._diffuseTexture1&&t.push(this._diffuseTexture1),this._diffuseTexture2&&t.push(this._diffuseTexture2),this._diffuseTexture3&&t.push(this._diffuseTexture3),this._bumpTexture1&&t.push(this._bumpTexture1),this._bumpTexture2&&t.push(this._bumpTexture2),this._bumpTexture3&&t.push(this._bumpTexture3),t},t.prototype.hasTexture=function(t){return!!e.prototype.hasTexture.call(this,t)||(this._mixTexture===t||(this._diffuseTexture1===t||(this._diffuseTexture2===t||(this._diffuseTexture3===t||(this._bumpTexture1===t||(this._bumpTexture2===t||this._bumpTexture3===t))))))},t.prototype.dispose=function(t){this.mixTexture&&this.mixTexture.dispose(),e.prototype.dispose.call(this,t)},t.prototype.clone=function(e){var i=this;return r.SerializationHelper.Clone(function(){return new t(e,i.getScene())},this)},t.prototype.serialize=function(){var e=r.SerializationHelper.Serialize(this);return e.customType="BABYLON.TerrainMaterial",e},t.prototype.getClassName=function(){return"TerrainMaterial"},t.Parse=function(e,i,n){return r.SerializationHelper.Parse(function(){return new t(e.name,i)},e,i,n)},Object(n.a)([Object(r.serializeAsTexture)("mixTexture")],t.prototype,"_mixTexture",void 0),Object(n.a)([Object(r.expandToProperty)("_markAllSubMeshesAsTexturesDirty")],t.prototype,"mixTexture",void 0),Object(n.a)([Object(r.serializeAsTexture)("diffuseTexture1")],t.prototype,"_diffuseTexture1",void 0),Object(n.a)([Object(r.expandToProperty)("_markAllSubMeshesAsTexturesDirty")],t.prototype,"diffuseTexture1",void 0),Object(n.a)([Object(r.serializeAsTexture)("diffuseTexture2")],t.prototype,"_diffuseTexture2",void 0),Object(n.a)([Object(r.expandToProperty)("_markAllSubMeshesAsTexturesDirty")],t.prototype,"diffuseTexture2",void 0),Object(n.a)([Object(r.serializeAsTexture)("diffuseTexture3")],t.prototype,"_diffuseTexture3",void 0),Object(n.a)([Object(r.expandToProperty)("_markAllSubMeshesAsTexturesDirty")],t.prototype,"diffuseTexture3",void 0),Object(n.a)([Object(r.serializeAsTexture)("bumpTexture1")],t.prototype,"_bumpTexture1",void 0),Object(n.a)([Object(r.expandToProperty)("_markAllSubMeshesAsTexturesDirty")],t.prototype,"bumpTexture1",void 0),Object(n.a)([Object(r.serializeAsTexture)("bumpTexture2")],t.prototype,"_bumpTexture2",void 0),Object(n.a)([Object(r.expandToProperty)("_markAllSubMeshesAsTexturesDirty")],t.prototype,"bumpTexture2",void 0),Object(n.a)([Object(r.serializeAsTexture)("bumpTexture3")],t.prototype,"_bumpTexture3",void 0),Object(n.a)([Object(r.expandToProperty)("_markAllSubMeshesAsTexturesDirty")],t.prototype,"bumpTexture3",void 0),Object(n.a)([Object(r.serializeAsColor3)()],t.prototype,"diffuseColor",void 0),Object(n.a)([Object(r.serializeAsColor3)()],t.prototype,"specularColor",void 0),Object(n.a)([Object(r.serialize)()],t.prototype,"specularPower",void 0),Object(n.a)([Object(r.serialize)("disableLighting")],t.prototype,"_disableLighting",void 0),Object(n.a)([Object(r.expandToProperty)("_markAllSubMeshesAsLightsDirty")],t.prototype,"disableLighting",void 0),Object(n.a)([Object(r.serialize)("maxSimultaneousLights")],t.prototype,"_maxSimultaneousLights",void 0),Object(n.a)([Object(r.expandToProperty)("_markAllSubMeshesAsLightsDirty")],t.prototype,"maxSimultaneousLights",void 0),t}(r.PushMaterial);r._TypeStore.RegisteredTypes["BABYLON.TerrainMaterial"]=f,i.d(t,"TerrainMaterial",function(){return f})},function(e,t,i){"use strict";i.r(t);var n=i(1),r=i(0),o="precision highp float;\n\nuniform vec3 vEyePosition;\n\nuniform vec4 topColor;\nuniform vec4 bottomColor;\nuniform float offset;\nuniform float scale;\nuniform float smoothness;\n\nvarying vec3 vPositionW;\nvarying vec3 vPosition;\n#ifdef NORMAL\nvarying vec3 vNormalW;\n#endif\n#ifdef VERTEXCOLOR\nvarying vec4 vColor;\n#endif\n\n#include<helperFunctions>\n\n#include<__decl__lightFragment>[0]\n#include<__decl__lightFragment>[1]\n#include<__decl__lightFragment>[2]\n#include<__decl__lightFragment>[3]\n#include<lightsFragmentFunctions>\n#include<shadowsFragmentFunctions>\n#include<clipPlaneFragmentDeclaration>\n\n#include<fogFragmentDeclaration>\nvoid main(void) {\n#include<clipPlaneFragment>\nvec3 viewDirectionW=normalize(vEyePosition-vPositionW);\nfloat h=vPosition.y*scale+offset;\nfloat mysmoothness=clamp(smoothness,0.01,max(smoothness,10.));\nvec4 baseColor=mix(bottomColor,topColor,max(pow(max(h,0.0),mysmoothness),0.0));\n\nvec3 diffuseColor=baseColor.rgb;\n\nfloat alpha=baseColor.a;\n#ifdef ALPHATEST\nif (baseColor.a<0.4)\ndiscard;\n#endif\n#include<depthPrePass>\n#ifdef VERTEXCOLOR\nbaseColor.rgb*=vColor.rgb;\n#endif\n\n#ifdef NORMAL\nvec3 normalW=normalize(vNormalW);\n#else\nvec3 normalW=vec3(1.0,1.0,1.0);\n#endif\n\n#ifdef EMISSIVE\nvec3 diffuseBase=baseColor.rgb;\n#else\nvec3 diffuseBase=vec3(0.,0.,0.);\n#endif\nlightingInfo info;\nfloat shadow=1.;\nfloat glossiness=0.;\n#include<lightFragment>[0..maxSimultaneousLights]\n#ifdef VERTEXALPHA\nalpha*=vColor.a;\n#endif\nvec3 finalDiffuse=clamp(diffuseBase*diffuseColor,0.0,1.0)*baseColor.rgb;\n\nvec4 color=vec4(finalDiffuse,alpha);\n#include<fogFragment>\ngl_FragColor=color;\n}\n";r.Effect.ShadersStore.gradientPixelShader=o;var a="precision highp float;\n\nattribute vec3 position;\n#ifdef NORMAL\nattribute vec3 normal;\n#endif\n#ifdef UV1\nattribute vec2 uv;\n#endif\n#ifdef UV2\nattribute vec2 uv2;\n#endif\n#ifdef VERTEXCOLOR\nattribute vec4 color;\n#endif\n#include<bonesDeclaration>\n\n#include<instancesDeclaration>\nuniform mat4 view;\nuniform mat4 viewProjection;\n#ifdef POINTSIZE\nuniform float pointSize;\n#endif\n\nvarying vec3 vPositionW;\nvarying vec3 vPosition;\n#ifdef NORMAL\nvarying vec3 vNormalW;\n#endif\n#ifdef VERTEXCOLOR\nvarying vec4 vColor;\n#endif\n#include<clipPlaneVertexDeclaration>\n#include<fogVertexDeclaration>\n#include<__decl__lightFragment>[0..maxSimultaneousLights]\nvoid main(void) {\n#include<instancesVertex>\n#include<bonesVertex>\nvec4 worldPos=finalWorld*vec4(position,1.0);\ngl_Position=viewProjection*worldPos;\nvPositionW=vec3(worldPos);\nvPosition=position;\n#ifdef NORMAL\nvNormalW=normalize(vec3(finalWorld*vec4(normal,0.0)));\n#endif\n\n#ifndef UV1\nvec2 uv=vec2(0.,0.);\n#endif\n#ifndef UV2\nvec2 uv2=vec2(0.,0.);\n#endif\n\n#include<clipPlaneVertex>\n\n#include<fogVertex>\n#include<shadowsVertex>[0..maxSimultaneousLights]\n\n#ifdef VERTEXCOLOR\nvColor=color;\n#endif\n\n#ifdef POINTSIZE\ngl_PointSize=pointSize;\n#endif\n}\n";r.Effect.ShadersStore.gradientVertexShader=a;var s=function(e){function t(){var t=e.call(this)||this;return t.EMISSIVE=!1,t.CLIPPLANE=!1,t.CLIPPLANE2=!1,t.CLIPPLANE3=!1,t.CLIPPLANE4=!1,t.CLIPPLANE5=!1,t.CLIPPLANE6=!1,t.ALPHATEST=!1,t.DEPTHPREPASS=!1,t.POINTSIZE=!1,t.FOG=!1,t.NORMAL=!1,t.UV1=!1,t.UV2=!1,t.VERTEXCOLOR=!1,t.VERTEXALPHA=!1,t.NUM_BONE_INFLUENCERS=0,t.BonesPerMesh=0,t.INSTANCES=!1,t.rebuild(),t}return Object(n.b)(t,e),t}(r.MaterialDefines),f=function(e){function t(t,i){var n=e.call(this,t,i)||this;return n._maxSimultaneousLights=4,n.topColor=new r.Color3(1,0,0),n.topColorAlpha=1,n.bottomColor=new r.Color3(0,0,1),n.bottomColorAlpha=1,n.offset=0,n.scale=1,n.smoothness=1,n._disableLighting=!1,n}return Object(n.b)(t,e),t.prototype.needAlphaBlending=function(){return this.alpha<1||this.topColorAlpha<1||this.bottomColorAlpha<1},t.prototype.needAlphaTesting=function(){return!0},t.prototype.getAlphaTestTexture=function(){return null},t.prototype.isReadyForSubMesh=function(e,t,i){if(this.isFrozen&&t.effect&&t.effect._wasPreviouslyReady)return!0;t._materialDefines||(t._materialDefines=new s);var n=t._materialDefines,o=this.getScene();if(!this.checkReadyOnEveryCall&&t.effect&&this._renderId===o.getRenderId())return!0;var a=o.getEngine();if(r.MaterialHelper.PrepareDefinesForFrameBoundValues(o,a,n,!!i),r.MaterialHelper.PrepareDefinesForMisc(e,o,!1,this.pointsCloud,this.fogEnabled,this._shouldTurnAlphaTestOn(e),n),n._needNormals=r.MaterialHelper.PrepareDefinesForLights(o,e,n,!1,this._maxSimultaneousLights,this._disableLighting),n.EMISSIVE=this._disableLighting,r.MaterialHelper.PrepareDefinesForAttributes(e,n,!1,!0),n.isDirty){n.markAsProcessed(),o.resetCachedMaterial();var f=new r.EffectFallbacks;n.FOG&&f.addFallback(1,"FOG"),r.MaterialHelper.HandleFallbacksForShadows(n,f),n.NUM_BONE_INFLUENCERS>0&&f.addCPUSkinningFallback(0,e);var l=[r.VertexBuffer.PositionKind];n.NORMAL&&l.push(r.VertexBuffer.NormalKind),n.UV1&&l.push(r.VertexBuffer.UVKind),n.UV2&&l.push(r.VertexBuffer.UV2Kind),n.VERTEXCOLOR&&l.push(r.VertexBuffer.ColorKind),r.MaterialHelper.PrepareAttributesForBones(l,e,n,f),r.MaterialHelper.PrepareAttributesForInstances(l,n);var u=n.toString(),c=["world","view","viewProjection","vEyePosition","vLightsType","vFogInfos","vFogColor","pointSize","mBones","vClipPlane","vClipPlane2","vClipPlane3","vClipPlane4","vClipPlane5","vClipPlane6","topColor","bottomColor","offset","smoothness","scale"],d=[],p=new Array;r.MaterialHelper.PrepareUniformsAndSamplersList({uniformsNames:c,uniformBuffersNames:p,samplers:d,defines:n,maxSimultaneousLights:4}),t.setEffect(o.getEngine().createEffect("gradient",{attributes:l,uniformsNames:c,uniformBuffersNames:p,samplers:d,defines:u,fallbacks:f,onCompiled:this.onCompiled,onError:this.onError,indexParameters:{maxSimultaneousLights:4}},a),n)}return!(!t.effect||!t.effect.isReady())&&(this._renderId=o.getRenderId(),t.effect._wasPreviouslyReady=!0,!0)},t.prototype.bindForSubMesh=function(e,t,i){var n=this.getScene(),o=i._materialDefines;if(o){var a=i.effect;a&&(this._activeEffect=a,this.bindOnlyWorldMatrix(e),this._activeEffect.setMatrix("viewProjection",n.getTransformMatrix()),r.MaterialHelper.BindBonesParameters(t,a),this._mustRebind(n,a)&&(r.MaterialHelper.BindClipPlane(a,n),this.pointsCloud&&this._activeEffect.setFloat("pointSize",this.pointSize),r.MaterialHelper.BindEyePosition(a,n)),n.lightsEnabled&&!this.disableLighting&&r.MaterialHelper.BindLights(n,t,this._activeEffect,o,this.maxSimultaneousLights),n.fogEnabled&&t.applyFog&&n.fogMode!==r.Scene.FOGMODE_NONE&&this._activeEffect.setMatrix("view",n.getViewMatrix()),r.MaterialHelper.BindFogParameters(n,t,this._activeEffect),this._activeEffect.setColor4("topColor",this.topColor,this.topColorAlpha),this._activeEffect.setColor4("bottomColor",this.bottomColor,this.bottomColorAlpha),this._activeEffect.setFloat("offset",this.offset),this._activeEffect.setFloat("scale",this.scale),this._activeEffect.setFloat("smoothness",this.smoothness),this._afterBind(t,this._activeEffect))}},t.prototype.getAnimatables=function(){return[]},t.prototype.dispose=function(t){e.prototype.dispose.call(this,t)},t.prototype.clone=function(e){var i=this;return r.SerializationHelper.Clone(function(){return new t(e,i.getScene())},this)},t.prototype.serialize=function(){var e=r.SerializationHelper.Serialize(this);return e.customType="BABYLON.GradientMaterial",e},t.prototype.getClassName=function(){return"GradientMaterial"},t.Parse=function(e,i,n){return r.SerializationHelper.Parse(function(){return new t(e.name,i)},e,i,n)},Object(n.a)([Object(r.serialize)("maxSimultaneousLights")],t.prototype,"_maxSimultaneousLights",void 0),Object(n.a)([Object(r.expandToProperty)("_markAllSubMeshesAsLightsDirty")],t.prototype,"maxSimultaneousLights",void 0),Object(n.a)([Object(r.serializeAsColor3)()],t.prototype,"topColor",void 0),Object(n.a)([Object(r.serialize)()],t.prototype,"topColorAlpha",void 0),Object(n.a)([Object(r.serializeAsColor3)()],t.prototype,"bottomColor",void 0),Object(n.a)([Object(r.serialize)()],t.prototype,"bottomColorAlpha",void 0),Object(n.a)([Object(r.serialize)()],t.prototype,"offset",void 0),Object(n.a)([Object(r.serialize)()],t.prototype,"scale",void 0),Object(n.a)([Object(r.serialize)()],t.prototype,"smoothness",void 0),Object(n.a)([Object(r.serialize)("disableLighting")],t.prototype,"_disableLighting",void 0),Object(n.a)([Object(r.expandToProperty)("_markAllSubMeshesAsLightsDirty")],t.prototype,"disableLighting",void 0),t}(r.PushMaterial);r._TypeStore.RegisteredTypes["BABYLON.GradientMaterial"]=f,i.d(t,"GradientMaterial",function(){return f})},function(e,t,i){"use strict";i.r(t);var n=i(1),r=i(0),o="precision highp float;\n\nuniform vec3 vEyePosition;\nuniform vec4 vDiffuseColor;\n\nvarying vec3 vPositionW;\n#ifdef NORMAL\nvarying vec3 vNormalW;\n#endif\n#ifdef VERTEXCOLOR\nvarying vec4 vColor;\n#endif\n\n#include<helperFunctions>\n\n#include<__decl__lightFragment>[0..maxSimultaneousLights]\n#include<lightsFragmentFunctions>\n#include<shadowsFragmentFunctions>\n\n#ifdef DIFFUSE\nvarying vec2 vDiffuseUV;\nuniform sampler2D diffuseSampler;\nuniform vec2 vDiffuseInfos;\n#endif\n#include<clipPlaneFragmentDeclaration>\n\n#include<fogFragmentDeclaration>\n\nvec3 computeCustomDiffuseLighting(lightingInfo info,vec3 diffuseBase,float shadow)\n{\ndiffuseBase=info.diffuse*shadow;\n#ifdef CELLBASIC\nfloat level=1.0;\nif (info.ndl<0.5)\nlevel=0.5;\ndiffuseBase.rgb*vec3(level,level,level);\n#else\nfloat ToonThresholds[4];\nToonThresholds[0]=0.95;\nToonThresholds[1]=0.5;\nToonThresholds[2]=0.2;\nToonThresholds[3]=0.03;\nfloat ToonBrightnessLevels[5];\nToonBrightnessLevels[0]=1.0;\nToonBrightnessLevels[1]=0.8;\nToonBrightnessLevels[2]=0.6;\nToonBrightnessLevels[3]=0.35;\nToonBrightnessLevels[4]=0.2;\nif (info.ndl>ToonThresholds[0])\n{\ndiffuseBase.rgb*=ToonBrightnessLevels[0];\n}\nelse if (info.ndl>ToonThresholds[1])\n{\ndiffuseBase.rgb*=ToonBrightnessLevels[1];\n}\nelse if (info.ndl>ToonThresholds[2])\n{\ndiffuseBase.rgb*=ToonBrightnessLevels[2];\n}\nelse if (info.ndl>ToonThresholds[3])\n{\ndiffuseBase.rgb*=ToonBrightnessLevels[3];\n}\nelse\n{\ndiffuseBase.rgb*=ToonBrightnessLevels[4];\n}\n#endif\nreturn max(diffuseBase,vec3(0.2));\n}\nvoid main(void)\n{\n#include<clipPlaneFragment>\nvec3 viewDirectionW=normalize(vEyePosition-vPositionW);\n\nvec4 baseColor=vec4(1.,1.,1.,1.);\nvec3 diffuseColor=vDiffuseColor.rgb;\n\nfloat alpha=vDiffuseColor.a;\n#ifdef DIFFUSE\nbaseColor=texture2D(diffuseSampler,vDiffuseUV);\n#ifdef ALPHATEST\nif (baseColor.a<0.4)\ndiscard;\n#endif\n#include<depthPrePass>\nbaseColor.rgb*=vDiffuseInfos.y;\n#endif\n#ifdef VERTEXCOLOR\nbaseColor.rgb*=vColor.rgb;\n#endif\n\n#ifdef NORMAL\nvec3 normalW=normalize(vNormalW);\n#else\nvec3 normalW=vec3(1.0,1.0,1.0);\n#endif\n\nlightingInfo info;\nvec3 diffuseBase=vec3(0.,0.,0.);\nfloat shadow=1.;\nfloat glossiness=0.;\n#ifdef SPECULARTERM\nvec3 specularBase=vec3(0.,0.,0.);\n#endif\n#include<lightFragment>[0..maxSimultaneousLights]\n#ifdef VERTEXALPHA\nalpha*=vColor.a;\n#endif\nvec3 finalDiffuse=clamp(diffuseBase*diffuseColor,0.0,1.0)*baseColor.rgb;\n\nvec4 color=vec4(finalDiffuse,alpha);\n#include<fogFragment>\ngl_FragColor=color;\n}";r.Effect.ShadersStore.cellPixelShader=o;var a="precision highp float;\n\nattribute vec3 position;\n#ifdef NORMAL\nattribute vec3 normal;\n#endif\n#ifdef UV1\nattribute vec2 uv;\n#endif\n#ifdef UV2\nattribute vec2 uv2;\n#endif\n#ifdef VERTEXCOLOR\nattribute vec4 color;\n#endif\n#include<bonesDeclaration>\n\n#include<instancesDeclaration>\nuniform mat4 view;\nuniform mat4 viewProjection;\n#ifdef DIFFUSE\nvarying vec2 vDiffuseUV;\nuniform mat4 diffuseMatrix;\nuniform vec2 vDiffuseInfos;\n#endif\n#ifdef POINTSIZE\nuniform float pointSize;\n#endif\n\nvarying vec3 vPositionW;\n#ifdef NORMAL\nvarying vec3 vNormalW;\n#endif\n#ifdef VERTEXCOLOR\nvarying vec4 vColor;\n#endif\n#include<clipPlaneVertexDeclaration>\n#include<fogVertexDeclaration>\n#include<__decl__lightFragment>[0..maxSimultaneousLights]\nvoid main(void) {\n#include<instancesVertex>\n#include<bonesVertex>\nvec4 worldPos=finalWorld*vec4(position,1.0);\ngl_Position=viewProjection*worldPos;\nvPositionW=vec3(worldPos);\n#ifdef NORMAL\nvNormalW=normalize(vec3(finalWorld*vec4(normal,0.0)));\n#endif\n\n#ifndef UV1\nvec2 uv=vec2(0.,0.);\n#endif\n#ifndef UV2\nvec2 uv2=vec2(0.,0.);\n#endif\n#ifdef DIFFUSE\nif (vDiffuseInfos.x == 0.)\n{\nvDiffuseUV=vec2(diffuseMatrix*vec4(uv,1.0,0.0));\n}\nelse\n{\nvDiffuseUV=vec2(diffuseMatrix*vec4(uv2,1.0,0.0));\n}\n#endif\n\n#include<clipPlaneVertex>\n\n#include<fogVertex>\n#include<shadowsVertex>[0..maxSimultaneousLights]\n\n#ifdef VERTEXCOLOR\nvColor=color;\n#endif\n\n#ifdef POINTSIZE\ngl_PointSize=pointSize;\n#endif\n}\n";r.Effect.ShadersStore.cellVertexShader=a;var s=function(e){function t(){var t=e.call(this)||this;return t.DIFFUSE=!1,t.CLIPPLANE=!1,t.CLIPPLANE2=!1,t.CLIPPLANE3=!1,t.CLIPPLANE4=!1,t.CLIPPLANE5=!1,t.CLIPPLANE6=!1,t.ALPHATEST=!1,t.POINTSIZE=!1,t.FOG=!1,t.NORMAL=!1,t.UV1=!1,t.UV2=!1,t.VERTEXCOLOR=!1,t.VERTEXALPHA=!1,t.NUM_BONE_INFLUENCERS=0,t.BonesPerMesh=0,t.INSTANCES=!1,t.NDOTL=!0,t.CUSTOMUSERLIGHTING=!0,t.CELLBASIC=!0,t.DEPTHPREPASS=!1,t.rebuild(),t}return Object(n.b)(t,e),t}(r.MaterialDefines),f=function(e){function t(t,i){var n=e.call(this,t,i)||this;return n.diffuseColor=new r.Color3(1,1,1),n._computeHighLevel=!1,n._disableLighting=!1,n._maxSimultaneousLights=4,n}return Object(n.b)(t,e),t.prototype.needAlphaBlending=function(){return this.alpha<1},t.prototype.needAlphaTesting=function(){return!1},t.prototype.getAlphaTestTexture=function(){return null},t.prototype.isReadyForSubMesh=function(e,t,i){if(this.isFrozen&&t.effect&&t.effect._wasPreviouslyReady)return!0;t._materialDefines||(t._materialDefines=new s);var n=t._materialDefines,o=this.getScene();if(!this.checkReadyOnEveryCall&&t.effect&&this._renderId===o.getRenderId())return!0;var a=o.getEngine();if(n._areTexturesDirty&&(n._needUVs=!1,o.texturesEnabled&&this._diffuseTexture&&r.MaterialFlags.DiffuseTextureEnabled)){if(!this._diffuseTexture.isReady())return!1;n._needUVs=!0,n.DIFFUSE=!0}if(n.CELLBASIC=!this.computeHighLevel,r.MaterialHelper.PrepareDefinesForMisc(e,o,!1,this.pointsCloud,this.fogEnabled,this._shouldTurnAlphaTestOn(e),n),n._needNormals=r.MaterialHelper.PrepareDefinesForLights(o,e,n,!1,this._maxSimultaneousLights,this._disableLighting),r.MaterialHelper.PrepareDefinesForFrameBoundValues(o,a,n,!!i),r.MaterialHelper.PrepareDefinesForAttributes(e,n,!0,!0),n.isDirty){n.markAsProcessed(),o.resetCachedMaterial();var f=new r.EffectFallbacks;n.FOG&&f.addFallback(1,"FOG"),r.MaterialHelper.HandleFallbacksForShadows(n,f,this.maxSimultaneousLights),n.NUM_BONE_INFLUENCERS>0&&f.addCPUSkinningFallback(0,e);var l=[r.VertexBuffer.PositionKind];n.NORMAL&&l.push(r.VertexBuffer.NormalKind),n.UV1&&l.push(r.VertexBuffer.UVKind),n.UV2&&l.push(r.VertexBuffer.UV2Kind),n.VERTEXCOLOR&&l.push(r.VertexBuffer.ColorKind),r.MaterialHelper.PrepareAttributesForBones(l,e,n,f),r.MaterialHelper.PrepareAttributesForInstances(l,n);var u=n.toString(),c=["world","view","viewProjection","vEyePosition","vLightsType","vDiffuseColor","vFogInfos","vFogColor","pointSize","vDiffuseInfos","mBones","vClipPlane","vClipPlane2","vClipPlane3","vClipPlane4","vClipPlane5","vClipPlane6","diffuseMatrix"],d=["diffuseSampler"],p=new Array;r.MaterialHelper.PrepareUniformsAndSamplersList({uniformsNames:c,uniformBuffersNames:p,samplers:d,defines:n,maxSimultaneousLights:this.maxSimultaneousLights}),t.setEffect(o.getEngine().createEffect("cell",{attributes:l,uniformsNames:c,uniformBuffersNames:p,samplers:d,defines:u,fallbacks:f,onCompiled:this.onCompiled,onError:this.onError,indexParameters:{maxSimultaneousLights:this.maxSimultaneousLights-1}},a),n)}return!(!t.effect||!t.effect.isReady())&&(this._renderId=o.getRenderId(),t.effect._wasPreviouslyReady=!0,!0)},t.prototype.bindForSubMesh=function(e,t,i){var n=this.getScene(),o=i._materialDefines;if(o){var a=i.effect;a&&(this._activeEffect=a,this.bindOnlyWorldMatrix(e),this._activeEffect.setMatrix("viewProjection",n.getTransformMatrix()),r.MaterialHelper.BindBonesParameters(t,this._activeEffect),this._mustRebind(n,a)&&(this._diffuseTexture&&r.MaterialFlags.DiffuseTextureEnabled&&(this._activeEffect.setTexture("diffuseSampler",this._diffuseTexture),this._activeEffect.setFloat2("vDiffuseInfos",this._diffuseTexture.coordinatesIndex,this._diffuseTexture.level),this._activeEffect.setMatrix("diffuseMatrix",this._diffuseTexture.getTextureMatrix())),r.MaterialHelper.BindClipPlane(this._activeEffect,n),this.pointsCloud&&this._activeEffect.setFloat("pointSize",this.pointSize),r.MaterialHelper.BindEyePosition(a,n)),this._activeEffect.setColor4("vDiffuseColor",this.diffuseColor,this.alpha*t.visibility),n.lightsEnabled&&!this.disableLighting&&r.MaterialHelper.BindLights(n,t,this._activeEffect,o,this._maxSimultaneousLights),n.fogEnabled&&t.applyFog&&n.fogMode!==r.Scene.FOGMODE_NONE&&this._activeEffect.setMatrix("view",n.getViewMatrix()),r.MaterialHelper.BindFogParameters(n,t,this._activeEffect),this._afterBind(t,this._activeEffect))}},t.prototype.getAnimatables=function(){var e=[];return this._diffuseTexture&&this._diffuseTexture.animations&&this._diffuseTexture.animations.length>0&&e.push(this._diffuseTexture),e},t.prototype.getActiveTextures=function(){var t=e.prototype.getActiveTextures.call(this);return this._diffuseTexture&&t.push(this._diffuseTexture),t},t.prototype.hasTexture=function(t){return!!e.prototype.hasTexture.call(this,t)||this._diffuseTexture===t},t.prototype.dispose=function(t){this._diffuseTexture&&this._diffuseTexture.dispose(),e.prototype.dispose.call(this,t)},t.prototype.getClassName=function(){return"CellMaterial"},t.prototype.clone=function(e){var i=this;return r.SerializationHelper.Clone(function(){return new t(e,i.getScene())},this)},t.prototype.serialize=function(){var e=r.SerializationHelper.Serialize(this);return e.customType="BABYLON.CellMaterial",e},t.Parse=function(e,i,n){return r.SerializationHelper.Parse(function(){return new t(e.name,i)},e,i,n)},Object(n.a)([Object(r.serializeAsTexture)("diffuseTexture")],t.prototype,"_diffuseTexture",void 0),Object(n.a)([Object(r.expandToProperty)("_markAllSubMeshesAsTexturesDirty")],t.prototype,"diffuseTexture",void 0),Object(n.a)([Object(r.serializeAsColor3)("diffuse")],t.prototype,"diffuseColor",void 0),Object(n.a)([Object(r.serialize)("computeHighLevel")],t.prototype,"_computeHighLevel",void 0),Object(n.a)([Object(r.expandToProperty)("_markAllSubMeshesAsTexturesDirty")],t.prototype,"computeHighLevel",void 0),Object(n.a)([Object(r.serialize)("disableLighting")],t.prototype,"_disableLighting",void 0),Object(n.a)([Object(r.expandToProperty)("_markAllSubMeshesAsLightsDirty")],t.prototype,"disableLighting",void 0),Object(n.a)([Object(r.serialize)("maxSimultaneousLights")],t.prototype,"_maxSimultaneousLights",void 0),Object(n.a)([Object(r.expandToProperty)("_markAllSubMeshesAsLightsDirty")],t.prototype,"maxSimultaneousLights",void 0),t}(r.PushMaterial);r._TypeStore.RegisteredTypes["BABYLON.CellMaterial"]=f,i.d(t,"CellMaterial",function(){return f})},function(e,t,i){"use strict";i.r(t);var n=i(1),r=i(0),o="#extension GL_OES_standard_derivatives : enable\n#define SQRT2 1.41421356\n#define PI 3.14159\nprecision highp float;\nuniform vec3 mainColor;\nuniform vec3 lineColor;\nuniform vec4 gridControl;\nuniform vec3 gridOffset;\n\nvarying vec3 vPosition;\nvarying vec3 vNormal;\n#include<fogFragmentDeclaration>\n\n#ifdef OPACITY\nvarying vec2 vOpacityUV;\nuniform sampler2D opacitySampler;\nuniform vec2 vOpacityInfos;\n#endif\nfloat getVisibility(float position) {\n\nfloat majorGridFrequency=gridControl.y;\nif (floor(position+0.5) == floor(position/majorGridFrequency+0.5)*majorGridFrequency)\n{\nreturn 1.0;\n}\nreturn gridControl.z;\n}\nfloat getAnisotropicAttenuation(float differentialLength) {\nconst float maxNumberOfLines=10.0;\nreturn clamp(1.0/(differentialLength+1.0)-1.0/maxNumberOfLines,0.0,1.0);\n}\nfloat isPointOnLine(float position,float differentialLength) {\nfloat fractionPartOfPosition=position-floor(position+0.5);\nfractionPartOfPosition/=differentialLength;\nfractionPartOfPosition=clamp(fractionPartOfPosition,-1.,1.);\nfloat result=0.5+0.5*cos(fractionPartOfPosition*PI);\nreturn result;\n}\nfloat contributionOnAxis(float position) {\nfloat differentialLength=length(vec2(dFdx(position),dFdy(position)));\ndifferentialLength*=SQRT2;\n\nfloat result=isPointOnLine(position,differentialLength);\n\nfloat visibility=getVisibility(position);\nresult*=visibility;\n\nfloat anisotropicAttenuation=getAnisotropicAttenuation(differentialLength);\nresult*=anisotropicAttenuation;\nreturn result;\n}\nfloat normalImpactOnAxis(float x) {\nfloat normalImpact=clamp(1.0-3.0*abs(x*x*x),0.0,1.0);\nreturn normalImpact;\n}\nvoid main(void) {\n\nfloat gridRatio=gridControl.x;\nvec3 gridPos=(vPosition+gridOffset.xyz)/gridRatio;\n\nfloat x=contributionOnAxis(gridPos.x);\nfloat y=contributionOnAxis(gridPos.y);\nfloat z=contributionOnAxis(gridPos.z);\n\nvec3 normal=normalize(vNormal);\nx*=normalImpactOnAxis(normal.x);\ny*=normalImpactOnAxis(normal.y);\nz*=normalImpactOnAxis(normal.z);\n\nfloat grid=clamp(x+y+z,0.,1.);\n\nvec3 color=mix(mainColor,lineColor,grid);\n#ifdef FOG\n#include<fogFragment>\n#endif\nfloat opacity=1.0;\n#ifdef TRANSPARENT\nopacity=clamp(grid,0.08,gridControl.w*grid);\n#endif\n#ifdef OPACITY\nopacity*=texture2D(opacitySampler,vOpacityUV).a;\n#endif\n\ngl_FragColor=vec4(color.rgb,opacity);\n#ifdef TRANSPARENT\n#ifdef PREMULTIPLYALPHA\ngl_FragColor.rgb*=opacity;\n#endif\n#else\n#endif\n}";r.Effect.ShadersStore.gridPixelShader=o;var a="precision highp float;\n\nattribute vec3 position;\nattribute vec3 normal;\n#ifdef UV1\nattribute vec2 uv;\n#endif\n#ifdef UV2\nattribute vec2 uv2;\n#endif\n#include<instancesDeclaration>\n\nuniform mat4 projection;\nuniform mat4 view;\n\nvarying vec3 vPosition;\nvarying vec3 vNormal;\n#include<fogVertexDeclaration>\n#ifdef OPACITY\nvarying vec2 vOpacityUV;\nuniform mat4 opacityMatrix;\nuniform vec2 vOpacityInfos;\n#endif\nvoid main(void) {\n#include<instancesVertex>\nvec4 worldPos=finalWorld*vec4(position,1.0);\n#include<fogVertex>\nvec4 cameraSpacePosition=view*worldPos;\ngl_Position=projection*cameraSpacePosition;\n#ifdef OPACITY\n#ifndef UV1\nvec2 uv=vec2(0.,0.);\n#endif\n#ifndef UV2\nvec2 uv2=vec2(0.,0.);\n#endif\nif (vOpacityInfos.x == 0.)\n{\nvOpacityUV=vec2(opacityMatrix*vec4(uv,1.0,0.0));\n}\nelse\n{\nvOpacityUV=vec2(opacityMatrix*vec4(uv2,1.0,0.0));\n}\n#endif\nvPosition=position;\nvNormal=normal;\n}";r.Effect.ShadersStore.gridVertexShader=a;var s=function(e){function t(){var t=e.call(this)||this;return t.OPACITY=!1,t.TRANSPARENT=!1,t.FOG=!1,t.PREMULTIPLYALPHA=!1,t.UV1=!1,t.UV2=!1,t.INSTANCES=!1,t.rebuild(),t}return Object(n.b)(t,e),t}(r.MaterialDefines),f=function(e){function t(t,i){var n=e.call(this,t,i)||this;return n.mainColor=r.Color3.Black(),n.lineColor=r.Color3.Teal(),n.gridRatio=1,n.gridOffset=r.Vector3.Zero(),n.majorUnitFrequency=10,n.minorUnitVisibility=.33,n.opacity=1,n.preMultiplyAlpha=!1,n._gridControl=new r.Vector4(n.gridRatio,n.majorUnitFrequency,n.minorUnitVisibility,n.opacity),n}return Object(n.b)(t,e),t.prototype.needAlphaBlending=function(){return this.opacity<1||this._opacityTexture&&this._opacityTexture.isReady()},t.prototype.needAlphaBlendingForMesh=function(e){return this.needAlphaBlending()},t.prototype.isReadyForSubMesh=function(e,t,i){if(this.isFrozen&&t.effect&&t.effect._wasPreviouslyReady)return!0;t._materialDefines||(t._materialDefines=new s);var n=t._materialDefines,o=this.getScene();if(!this.checkReadyOnEveryCall&&t.effect&&this._renderId===o.getRenderId())return!0;if(n.TRANSPARENT!==this.opacity<1&&(n.TRANSPARENT=!n.TRANSPARENT,n.markAsUnprocessed()),n.PREMULTIPLYALPHA!=this.preMultiplyAlpha&&(n.PREMULTIPLYALPHA=!n.PREMULTIPLYALPHA,n.markAsUnprocessed()),n._areTexturesDirty&&(n._needUVs=!1,o.texturesEnabled&&this._opacityTexture&&r.MaterialFlags.OpacityTextureEnabled)){if(!this._opacityTexture.isReady())return!1;n._needUVs=!0,n.OPACITY=!0}if(r.MaterialHelper.PrepareDefinesForMisc(e,o,!1,!1,this.fogEnabled,!1,n),r.MaterialHelper.PrepareDefinesForFrameBoundValues(o,o.getEngine(),n,!!i),n.isDirty){n.markAsProcessed(),o.resetCachedMaterial(),r.MaterialHelper.PrepareDefinesForAttributes(e,n,!1,!1);var a=[r.VertexBuffer.PositionKind,r.VertexBuffer.NormalKind];n.UV1&&a.push(r.VertexBuffer.UVKind),n.UV2&&a.push(r.VertexBuffer.UV2Kind),r.MaterialHelper.PrepareAttributesForInstances(a,n);var f=n.toString();t.setEffect(o.getEngine().createEffect("grid",a,["projection","mainColor","lineColor","gridControl","gridOffset","vFogInfos","vFogColor","world","view","opacityMatrix","vOpacityInfos"],["opacitySampler"],f,void 0,this.onCompiled,this.onError),n)}return!(!t.effect||!t.effect.isReady())&&(this._renderId=o.getRenderId(),t.effect._wasPreviouslyReady=!0,!0)},t.prototype.bindForSubMesh=function(e,t,i){var n=this.getScene(),o=i._materialDefines;if(o){var a=i.effect;a&&(this._activeEffect=a,o.INSTANCES||this.bindOnlyWorldMatrix(e),this._activeEffect.setMatrix("view",n.getViewMatrix()),this._activeEffect.setMatrix("projection",n.getProjectionMatrix()),this._mustRebind(n,a)&&(this._activeEffect.setColor3("mainColor",this.mainColor),this._activeEffect.setColor3("lineColor",this.lineColor),this._activeEffect.setVector3("gridOffset",this.gridOffset),this._gridControl.x=this.gridRatio,this._gridControl.y=Math.round(this.majorUnitFrequency),this._gridControl.z=this.minorUnitVisibility,this._gridControl.w=this.opacity,this._activeEffect.setVector4("gridControl",this._gridControl),this._opacityTexture&&r.MaterialFlags.OpacityTextureEnabled&&(this._activeEffect.setTexture("opacitySampler",this._opacityTexture),this._activeEffect.setFloat2("vOpacityInfos",this._opacityTexture.coordinatesIndex,this._opacityTexture.level),this._activeEffect.setMatrix("opacityMatrix",this._opacityTexture.getTextureMatrix()))),r.MaterialHelper.BindFogParameters(n,t,this._activeEffect),this._afterBind(t,this._activeEffect))}},t.prototype.dispose=function(t){e.prototype.dispose.call(this,t)},t.prototype.clone=function(e){var i=this;return r.SerializationHelper.Clone(function(){return new t(e,i.getScene())},this)},t.prototype.serialize=function(){var e=r.SerializationHelper.Serialize(this);return e.customType="BABYLON.GridMaterial",e},t.prototype.getClassName=function(){return"GridMaterial"},t.Parse=function(e,i,n){return r.SerializationHelper.Parse(function(){return new t(e.name,i)},e,i,n)},Object(n.a)([Object(r.serializeAsColor3)()],t.prototype,"mainColor",void 0),Object(n.a)([Object(r.serializeAsColor3)()],t.prototype,"lineColor",void 0),Object(n.a)([Object(r.serialize)()],t.prototype,"gridRatio",void 0),Object(n.a)([Object(r.serializeAsColor3)()],t.prototype,"gridOffset",void 0),Object(n.a)([Object(r.serialize)()],t.prototype,"majorUnitFrequency",void 0),Object(n.a)([Object(r.serialize)()],t.prototype,"minorUnitVisibility",void 0),Object(n.a)([Object(r.serialize)()],t.prototype,"opacity",void 0),Object(n.a)([Object(r.serialize)()],t.prototype,"preMultiplyAlpha",void 0),Object(n.a)([Object(r.serializeAsTexture)("opacityTexture")],t.prototype,"_opacityTexture",void 0),Object(n.a)([Object(r.expandToProperty)("_markAllSubMeshesAsTexturesDirty")],t.prototype,"opacityTexture",void 0),t}(r.PushMaterial);r._TypeStore.RegisteredTypes["BABYLON.GridMaterial"]=f,i.d(t,"GridMaterial",function(){return f})},function(e,t,i){"use strict";i.r(t);var n=i(1),r=i(0),o="precision highp float;\n\nuniform vec3 vEyePosition;\nuniform vec4 vDiffuseColor;\n\nvarying vec3 vPositionW;\n#ifdef NORMAL\nvarying vec3 vNormalW;\n#endif\n#ifdef VERTEXCOLOR\nvarying vec4 vColor;\n#endif\n\n#include<helperFunctions>\n\n#include<__decl__lightFragment>[0..maxSimultaneousLights]\n#include<lightsFragmentFunctions>\n#include<shadowsFragmentFunctions>\n\n#ifdef DIFFUSE\nvarying vec2 vDiffuseUV;\nuniform sampler2D diffuseSampler;\nuniform vec2 vDiffuseInfos;\n#endif\n#include<clipPlaneFragmentDeclaration>\n\n#include<fogFragmentDeclaration>\nvoid main(void) {\n#include<clipPlaneFragment>\nvec3 viewDirectionW=normalize(vEyePosition-vPositionW);\n\nvec4 baseColor=vec4(1.,1.,1.,1.);\nvec3 diffuseColor=vDiffuseColor.rgb;\n\nfloat alpha=vDiffuseColor.a;\n#ifdef DIFFUSE\nbaseColor=texture2D(diffuseSampler,vDiffuseUV);\n#ifdef ALPHATEST\nif (baseColor.a<0.4)\ndiscard;\n#endif\n#include<depthPrePass>\nbaseColor.rgb*=vDiffuseInfos.y;\n#endif\n#ifdef VERTEXCOLOR\nbaseColor.rgb*=vColor.rgb;\n#endif\n\n#ifdef NORMAL\nvec3 normalW=normalize(vNormalW);\n#else\nvec3 normalW=vec3(1.0,1.0,1.0);\n#endif\n\nvec3 diffuseBase=vec3(0.,0.,0.);\nlightingInfo info;\nfloat shadow=1.;\nfloat glossiness=0.;\n#ifdef SPECULARTERM\nvec3 specularBase=vec3(0.,0.,0.);\n#endif\n#include<lightFragment>[0..maxSimultaneousLights]\n#ifdef VERTEXALPHA\nalpha*=vColor.a;\n#endif\nvec3 finalDiffuse=clamp(diffuseBase*diffuseColor,0.0,1.0)*baseColor.rgb;\n\nvec4 color=vec4(finalDiffuse,alpha);\n#include<fogFragment>\ngl_FragColor=color;\n}";r.Effect.ShadersStore.simplePixelShader=o;var a="precision highp float;\n\nattribute vec3 position;\n#ifdef NORMAL\nattribute vec3 normal;\n#endif\n#ifdef UV1\nattribute vec2 uv;\n#endif\n#ifdef UV2\nattribute vec2 uv2;\n#endif\n#ifdef VERTEXCOLOR\nattribute vec4 color;\n#endif\n#include<bonesDeclaration>\n\n#include<instancesDeclaration>\nuniform mat4 view;\nuniform mat4 viewProjection;\n#ifdef DIFFUSE\nvarying vec2 vDiffuseUV;\nuniform mat4 diffuseMatrix;\nuniform vec2 vDiffuseInfos;\n#endif\n#ifdef POINTSIZE\nuniform float pointSize;\n#endif\n\nvarying vec3 vPositionW;\n#ifdef NORMAL\nvarying vec3 vNormalW;\n#endif\n#ifdef VERTEXCOLOR\nvarying vec4 vColor;\n#endif\n#include<clipPlaneVertexDeclaration>\n#include<fogVertexDeclaration>\n#include<__decl__lightFragment>[0..maxSimultaneousLights]\nvoid main(void) {\n#include<instancesVertex>\n#include<bonesVertex>\nvec4 worldPos=finalWorld*vec4(position,1.0);\ngl_Position=viewProjection*worldPos;\nvPositionW=vec3(worldPos);\n#ifdef NORMAL\nvNormalW=normalize(vec3(finalWorld*vec4(normal,0.0)));\n#endif\n\n#ifndef UV1\nvec2 uv=vec2(0.,0.);\n#endif\n#ifndef UV2\nvec2 uv2=vec2(0.,0.);\n#endif\n#ifdef DIFFUSE\nif (vDiffuseInfos.x == 0.)\n{\nvDiffuseUV=vec2(diffuseMatrix*vec4(uv,1.0,0.0));\n}\nelse\n{\nvDiffuseUV=vec2(diffuseMatrix*vec4(uv2,1.0,0.0));\n}\n#endif\n\n#include<clipPlaneVertex>\n\n#include<fogVertex>\n#include<shadowsVertex>[0..maxSimultaneousLights]\n\n#ifdef VERTEXCOLOR\nvColor=color;\n#endif\n\n#ifdef POINTSIZE\ngl_PointSize=pointSize;\n#endif\n}\n";r.Effect.ShadersStore.simpleVertexShader=a;var s=function(e){function t(){var t=e.call(this)||this;return t.DIFFUSE=!1,t.CLIPPLANE=!1,t.CLIPPLANE2=!1,t.CLIPPLANE3=!1,t.CLIPPLANE4=!1,t.CLIPPLANE5=!1,t.CLIPPLANE6=!1,t.ALPHATEST=!1,t.DEPTHPREPASS=!1,t.POINTSIZE=!1,t.FOG=!1,t.NORMAL=!1,t.UV1=!1,t.UV2=!1,t.VERTEXCOLOR=!1,t.VERTEXALPHA=!1,t.NUM_BONE_INFLUENCERS=0,t.BonesPerMesh=0,t.INSTANCES=!1,t.rebuild(),t}return Object(n.b)(t,e),t}(r.MaterialDefines),f=function(e){function t(t,i){var n=e.call(this,t,i)||this;return n.diffuseColor=new r.Color3(1,1,1),n._disableLighting=!1,n._maxSimultaneousLights=4,n}return Object(n.b)(t,e),t.prototype.needAlphaBlending=function(){return this.alpha<1},t.prototype.needAlphaTesting=function(){return!1},t.prototype.getAlphaTestTexture=function(){return null},t.prototype.isReadyForSubMesh=function(e,t,i){if(this.isFrozen&&t.effect&&t.effect._wasPreviouslyReady)return!0;t._materialDefines||(t._materialDefines=new s);var n=t._materialDefines,o=this.getScene();if(!this.checkReadyOnEveryCall&&t.effect&&this._renderId===o.getRenderId())return!0;var a=o.getEngine();if(n._areTexturesDirty&&(n._needUVs=!1,o.texturesEnabled&&this._diffuseTexture&&r.MaterialFlags.DiffuseTextureEnabled)){if(!this._diffuseTexture.isReady())return!1;n._needUVs=!0,n.DIFFUSE=!0}if(r.MaterialHelper.PrepareDefinesForMisc(e,o,!1,this.pointsCloud,this.fogEnabled,this._shouldTurnAlphaTestOn(e),n),n._needNormals=r.MaterialHelper.PrepareDefinesForLights(o,e,n,!1,this._maxSimultaneousLights,this._disableLighting),r.MaterialHelper.PrepareDefinesForFrameBoundValues(o,a,n,!!i),r.MaterialHelper.PrepareDefinesForAttributes(e,n,!0,!0),n.isDirty){n.markAsProcessed(),o.resetCachedMaterial();var f=new r.EffectFallbacks;n.FOG&&f.addFallback(1,"FOG"),r.MaterialHelper.HandleFallbacksForShadows(n,f,this.maxSimultaneousLights),n.NUM_BONE_INFLUENCERS>0&&f.addCPUSkinningFallback(0,e);var l=[r.VertexBuffer.PositionKind];n.NORMAL&&l.push(r.VertexBuffer.NormalKind),n.UV1&&l.push(r.VertexBuffer.UVKind),n.UV2&&l.push(r.VertexBuffer.UV2Kind),n.VERTEXCOLOR&&l.push(r.VertexBuffer.ColorKind),r.MaterialHelper.PrepareAttributesForBones(l,e,n,f),r.MaterialHelper.PrepareAttributesForInstances(l,n);var u=n.toString(),c=["world","view","viewProjection","vEyePosition","vLightsType","vDiffuseColor","vFogInfos","vFogColor","pointSize","vDiffuseInfos","mBones","vClipPlane","vClipPlane2","vClipPlane3","vClipPlane4","vClipPlane5","vClipPlane6","diffuseMatrix"],d=["diffuseSampler"],p=new Array;r.MaterialHelper.PrepareUniformsAndSamplersList({uniformsNames:c,uniformBuffersNames:p,samplers:d,defines:n,maxSimultaneousLights:this.maxSimultaneousLights}),t.setEffect(o.getEngine().createEffect("simple",{attributes:l,uniformsNames:c,uniformBuffersNames:p,samplers:d,defines:u,fallbacks:f,onCompiled:this.onCompiled,onError:this.onError,indexParameters:{maxSimultaneousLights:this._maxSimultaneousLights-1}},a),n)}return!(!t.effect||!t.effect.isReady())&&(this._renderId=o.getRenderId(),t.effect._wasPreviouslyReady=!0,!0)},t.prototype.bindForSubMesh=function(e,t,i){var n=this.getScene(),o=i._materialDefines;if(o){var a=i.effect;a&&(this._activeEffect=a,this.bindOnlyWorldMatrix(e),this._activeEffect.setMatrix("viewProjection",n.getTransformMatrix()),r.MaterialHelper.BindBonesParameters(t,this._activeEffect),this._mustRebind(n,a)&&(this._diffuseTexture&&r.MaterialFlags.DiffuseTextureEnabled&&(this._activeEffect.setTexture("diffuseSampler",this._diffuseTexture),this._activeEffect.setFloat2("vDiffuseInfos",this._diffuseTexture.coordinatesIndex,this._diffuseTexture.level),this._activeEffect.setMatrix("diffuseMatrix",this._diffuseTexture.getTextureMatrix())),r.MaterialHelper.BindClipPlane(this._activeEffect,n),this.pointsCloud&&this._activeEffect.setFloat("pointSize",this.pointSize),r.MaterialHelper.BindEyePosition(a,n)),this._activeEffect.setColor4("vDiffuseColor",this.diffuseColor,this.alpha*t.visibility),n.lightsEnabled&&!this.disableLighting&&r.MaterialHelper.BindLights(n,t,this._activeEffect,o,this.maxSimultaneousLights),n.fogEnabled&&t.applyFog&&n.fogMode!==r.Scene.FOGMODE_NONE&&this._activeEffect.setMatrix("view",n.getViewMatrix()),r.MaterialHelper.BindFogParameters(n,t,this._activeEffect),this._afterBind(t,this._activeEffect))}},t.prototype.getAnimatables=function(){var e=[];return this._diffuseTexture&&this._diffuseTexture.animations&&this._diffuseTexture.animations.length>0&&e.push(this._diffuseTexture),e},t.prototype.getActiveTextures=function(){var t=e.prototype.getActiveTextures.call(this);return this._diffuseTexture&&t.push(this._diffuseTexture),t},t.prototype.hasTexture=function(t){return!!e.prototype.hasTexture.call(this,t)||this.diffuseTexture===t},t.prototype.dispose=function(t){this._diffuseTexture&&this._diffuseTexture.dispose(),e.prototype.dispose.call(this,t)},t.prototype.clone=function(e){var i=this;return r.SerializationHelper.Clone(function(){return new t(e,i.getScene())},this)},t.prototype.serialize=function(){var e=r.SerializationHelper.Serialize(this);return e.customType="BABYLON.SimpleMaterial",e},t.prototype.getClassName=function(){return"SimpleMaterial"},t.Parse=function(e,i,n){return r.SerializationHelper.Parse(function(){return new t(e.name,i)},e,i,n)},Object(n.a)([Object(r.serializeAsTexture)("diffuseTexture")],t.prototype,"_diffuseTexture",void 0),Object(n.a)([Object(r.expandToProperty)("_markAllSubMeshesAsTexturesDirty")],t.prototype,"diffuseTexture",void 0),Object(n.a)([Object(r.serializeAsColor3)("diffuse")],t.prototype,"diffuseColor",void 0),Object(n.a)([Object(r.serialize)("disableLighting")],t.prototype,"_disableLighting",void 0),Object(n.a)([Object(r.expandToProperty)("_markAllSubMeshesAsLightsDirty")],t.prototype,"disableLighting",void 0),Object(n.a)([Object(r.serialize)("maxSimultaneousLights")],t.prototype,"_maxSimultaneousLights",void 0),Object(n.a)([Object(r.expandToProperty)("_markAllSubMeshesAsLightsDirty")],t.prototype,"maxSimultaneousLights",void 0),t}(r.PushMaterial);r._TypeStore.RegisteredTypes["BABYLON.SimpleMaterial"]=f,i.d(t,"SimpleMaterial",function(){return f})},function(e,t,i){"use strict";i.r(t);var n=i(1),r=i(0),o="precision highp float;\n\nuniform vec3 vEyePosition;\nuniform vec4 vDiffuseColor;\n\nvarying vec3 vPositionW;\n\nuniform float time;\nuniform float speed;\nuniform float movingSpeed;\nuniform vec3 fogColor;\nuniform sampler2D noiseTexture;\nuniform float fogDensity;\n\nvarying float noise;\n#ifdef NORMAL\nvarying vec3 vNormalW;\n#endif\n#ifdef VERTEXCOLOR\nvarying vec4 vColor;\n#endif\n\n#include<helperFunctions>\n\n#include<__decl__lightFragment>[0]\n#include<__decl__lightFragment>[1]\n#include<__decl__lightFragment>[2]\n#include<__decl__lightFragment>[3]\n#include<lightsFragmentFunctions>\n#include<shadowsFragmentFunctions>\n\n#ifdef DIFFUSE\nvarying vec2 vDiffuseUV;\nuniform sampler2D diffuseSampler;\nuniform vec2 vDiffuseInfos;\n#endif\n#include<clipPlaneFragmentDeclaration>\n\n#include<fogFragmentDeclaration>\nfloat random( vec3 scale,float seed ){\nreturn fract( sin( dot( gl_FragCoord.xyz+seed,scale ) )*43758.5453+seed ) ;\n}\nvoid main(void) {\n#include<clipPlaneFragment>\nvec3 viewDirectionW=normalize(vEyePosition-vPositionW);\n\nvec4 baseColor=vec4(1.,1.,1.,1.);\nvec3 diffuseColor=vDiffuseColor.rgb;\n\nfloat alpha=vDiffuseColor.a;\n#ifdef DIFFUSE\n\nvec4 noiseTex=texture2D( noiseTexture,vDiffuseUV );\nvec2 T1=vDiffuseUV+vec2( 1.5,-1.5 )*time*0.02;\nvec2 T2=vDiffuseUV+vec2( -0.5,2.0 )*time*0.01*speed;\nT1.x+=noiseTex.x*2.0;\nT1.y+=noiseTex.y*2.0;\nT2.x-=noiseTex.y*0.2+time*0.001*movingSpeed;\nT2.y+=noiseTex.z*0.2+time*0.002*movingSpeed;\nfloat p=texture2D( noiseTexture,T1*3.0 ).a;\nvec4 lavaColor=texture2D( diffuseSampler,T2*4.0);\nvec4 temp=lavaColor*( vec4( p,p,p,p )*2. )+( lavaColor*lavaColor-0.1 );\nbaseColor=temp;\nfloat depth=gl_FragCoord.z*4.0;\nconst float LOG2=1.442695;\nfloat fogFactor=exp2(-fogDensity*fogDensity*depth*depth*LOG2 );\nfogFactor=1.0-clamp( fogFactor,0.0,1.0 );\nbaseColor=mix( baseColor,vec4( fogColor,baseColor.w ),fogFactor );\ndiffuseColor=baseColor.rgb;\n\n\n#ifdef ALPHATEST\nif (baseColor.a<0.4)\ndiscard;\n#endif\n#include<depthPrePass>\nbaseColor.rgb*=vDiffuseInfos.y;\n#endif\n#ifdef VERTEXCOLOR\nbaseColor.rgb*=vColor.rgb;\n#endif\n\n#ifdef NORMAL\nvec3 normalW=normalize(vNormalW);\n#else\nvec3 normalW=vec3(1.0,1.0,1.0);\n#endif\n#ifdef UNLIT\nvec3 diffuseBase=vec3(1.,1.,1.);\n#else\n\nvec3 diffuseBase=vec3(0.,0.,0.);\nlightingInfo info;\nfloat shadow=1.;\nfloat glossiness=0.;\n#include<lightFragment>[0]\n#include<lightFragment>[1]\n#include<lightFragment>[2]\n#include<lightFragment>[3]\n#endif\n#ifdef VERTEXALPHA\nalpha*=vColor.a;\n#endif\nvec3 finalDiffuse=clamp(diffuseBase*diffuseColor,0.0,1.0)*baseColor.rgb;\n\nvec4 color=vec4(finalDiffuse,alpha);\n#include<fogFragment>\ngl_FragColor=color;\n}";r.Effect.ShadersStore.lavaPixelShader=o;var a="precision highp float;\n\nuniform float time;\nuniform float lowFrequencySpeed;\n\nvarying float noise;\n\nattribute vec3 position;\n#ifdef NORMAL\nattribute vec3 normal;\n#endif\n#ifdef UV1\nattribute vec2 uv;\n#endif\n#ifdef UV2\nattribute vec2 uv2;\n#endif\n#ifdef VERTEXCOLOR\nattribute vec4 color;\n#endif\n#include<bonesDeclaration>\n\n#include<instancesDeclaration>\nuniform mat4 view;\nuniform mat4 viewProjection;\n#ifdef DIFFUSE\nvarying vec2 vDiffuseUV;\nuniform mat4 diffuseMatrix;\nuniform vec2 vDiffuseInfos;\n#endif\n#ifdef POINTSIZE\nuniform float pointSize;\n#endif\n\nvarying vec3 vPositionW;\n#ifdef NORMAL\nvarying vec3 vNormalW;\n#endif\n#ifdef VERTEXCOLOR\nvarying vec4 vColor;\n#endif\n#include<clipPlaneVertexDeclaration>\n#include<fogVertexDeclaration>\n#include<__decl__lightFragment>[0..maxSimultaneousLights]\n\n\n\nvec3 mod289(vec3 x)\n{\nreturn x-floor(x*(1.0/289.0))*289.0;\n}\nvec4 mod289(vec4 x)\n{\nreturn x-floor(x*(1.0/289.0))*289.0;\n}\nvec4 permute(vec4 x)\n{\nreturn mod289(((x*34.0)+1.0)*x);\n}\nvec4 taylorInvSqrt(vec4 r)\n{\nreturn 1.79284291400159-0.85373472095314*r;\n}\nvec3 fade(vec3 t) {\nreturn t*t*t*(t*(t*6.0-15.0)+10.0);\n}\n\nfloat pnoise(vec3 P,vec3 rep)\n{\nvec3 Pi0=mod(floor(P),rep);\nvec3 Pi1=mod(Pi0+vec3(1.0),rep);\nPi0=mod289(Pi0);\nPi1=mod289(Pi1);\nvec3 Pf0=fract(P);\nvec3 Pf1=Pf0-vec3(1.0);\nvec4 ix=vec4(Pi0.x,Pi1.x,Pi0.x,Pi1.x);\nvec4 iy=vec4(Pi0.yy,Pi1.yy);\nvec4 iz0=Pi0.zzzz;\nvec4 iz1=Pi1.zzzz;\nvec4 ixy=permute(permute(ix)+iy);\nvec4 ixy0=permute(ixy+iz0);\nvec4 ixy1=permute(ixy+iz1);\nvec4 gx0=ixy0*(1.0/7.0);\nvec4 gy0=fract(floor(gx0)*(1.0/7.0))-0.5;\ngx0=fract(gx0);\nvec4 gz0=vec4(0.5)-abs(gx0)-abs(gy0);\nvec4 sz0=step(gz0,vec4(0.0));\ngx0-=sz0*(step(0.0,gx0)-0.5);\ngy0-=sz0*(step(0.0,gy0)-0.5);\nvec4 gx1=ixy1*(1.0/7.0);\nvec4 gy1=fract(floor(gx1)*(1.0/7.0))-0.5;\ngx1=fract(gx1);\nvec4 gz1=vec4(0.5)-abs(gx1)-abs(gy1);\nvec4 sz1=step(gz1,vec4(0.0));\ngx1-=sz1*(step(0.0,gx1)-0.5);\ngy1-=sz1*(step(0.0,gy1)-0.5);\nvec3 g000=vec3(gx0.x,gy0.x,gz0.x);\nvec3 g100=vec3(gx0.y,gy0.y,gz0.y);\nvec3 g010=vec3(gx0.z,gy0.z,gz0.z);\nvec3 g110=vec3(gx0.w,gy0.w,gz0.w);\nvec3 g001=vec3(gx1.x,gy1.x,gz1.x);\nvec3 g101=vec3(gx1.y,gy1.y,gz1.y);\nvec3 g011=vec3(gx1.z,gy1.z,gz1.z);\nvec3 g111=vec3(gx1.w,gy1.w,gz1.w);\nvec4 norm0=taylorInvSqrt(vec4(dot(g000,g000),dot(g010,g010),dot(g100,g100),dot(g110,g110)));\ng000*=norm0.x;\ng010*=norm0.y;\ng100*=norm0.z;\ng110*=norm0.w;\nvec4 norm1=taylorInvSqrt(vec4(dot(g001,g001),dot(g011,g011),dot(g101,g101),dot(g111,g111)));\ng001*=norm1.x;\ng011*=norm1.y;\ng101*=norm1.z;\ng111*=norm1.w;\nfloat n000=dot(g000,Pf0);\nfloat n100=dot(g100,vec3(Pf1.x,Pf0.yz));\nfloat n010=dot(g010,vec3(Pf0.x,Pf1.y,Pf0.z));\nfloat n110=dot(g110,vec3(Pf1.xy,Pf0.z));\nfloat n001=dot(g001,vec3(Pf0.xy,Pf1.z));\nfloat n101=dot(g101,vec3(Pf1.x,Pf0.y,Pf1.z));\nfloat n011=dot(g011,vec3(Pf0.x,Pf1.yz));\nfloat n111=dot(g111,Pf1);\nvec3 fade_xyz=fade(Pf0);\nvec4 n_z=mix(vec4(n000,n100,n010,n110),vec4(n001,n101,n011,n111),fade_xyz.z);\nvec2 n_yz=mix(n_z.xy,n_z.zw,fade_xyz.y);\nfloat n_xyz=mix(n_yz.x,n_yz.y,fade_xyz.x);\nreturn 2.2*n_xyz;\n}\n\nfloat turbulence( vec3 p ) {\nfloat w=100.0;\nfloat t=-.5;\nfor (float f=1.0 ; f<=10.0 ; f++ ){\nfloat power=pow( 2.0,f );\nt+=abs( pnoise( vec3( power*p ),vec3( 10.0,10.0,10.0 ) )/power );\n}\nreturn t;\n}\nvoid main(void) {\n#include<instancesVertex>\n#include<bonesVertex>\n#ifdef NORMAL\n\nnoise=10.0*-.10*turbulence( .5*normal+time*1.15 );\n\nfloat b=lowFrequencySpeed*5.0*pnoise( 0.05*position +vec3(time*1.025),vec3( 100.0 ) );\n\nfloat displacement =-1.5*noise+b;\n\nvec3 newPosition=position+normal*displacement;\ngl_Position=viewProjection*finalWorld*vec4( newPosition,1.0 );\nvec4 worldPos=finalWorld*vec4(newPosition,1.0);\nvPositionW=vec3(worldPos);\nvNormalW=normalize(vec3(finalWorld*vec4(normal,0.0)));\n#endif\n\n#ifndef UV1\nvec2 uv=vec2(0.,0.);\n#endif\n#ifndef UV2\nvec2 uv2=vec2(0.,0.);\n#endif\n#ifdef DIFFUSE\nif (vDiffuseInfos.x == 0.)\n{\nvDiffuseUV=vec2(diffuseMatrix*vec4(uv,1.0,0.0));\n}\nelse\n{\nvDiffuseUV=vec2(diffuseMatrix*vec4(uv2,1.0,0.0));\n}\n#endif\n\n#include<clipPlaneVertex>\n\n#include<fogVertex>\n#include<shadowsVertex>[0..maxSimultaneousLights]\n\n#ifdef VERTEXCOLOR\nvColor=color;\n#endif\n\n#ifdef POINTSIZE\ngl_PointSize=pointSize;\n#endif\n}";r.Effect.ShadersStore.lavaVertexShader=a;var s=function(e){function t(){var t=e.call(this)||this;return t.DIFFUSE=!1,t.CLIPPLANE=!1,t.CLIPPLANE2=!1,t.CLIPPLANE3=!1,t.CLIPPLANE4=!1,t.CLIPPLANE5=!1,t.CLIPPLANE6=!1,t.ALPHATEST=!1,t.DEPTHPREPASS=!1,t.POINTSIZE=!1,t.FOG=!1,t.LIGHT0=!1,t.LIGHT1=!1,t.LIGHT2=!1,t.LIGHT3=!1,t.SPOTLIGHT0=!1,t.SPOTLIGHT1=!1,t.SPOTLIGHT2=!1,t.SPOTLIGHT3=!1,t.HEMILIGHT0=!1,t.HEMILIGHT1=!1,t.HEMILIGHT2=!1,t.HEMILIGHT3=!1,t.DIRLIGHT0=!1,t.DIRLIGHT1=!1,t.DIRLIGHT2=!1,t.DIRLIGHT3=!1,t.POINTLIGHT0=!1,t.POINTLIGHT1=!1,t.POINTLIGHT2=!1,t.POINTLIGHT3=!1,t.SHADOW0=!1,t.SHADOW1=!1,t.SHADOW2=!1,t.SHADOW3=!1,t.SHADOWS=!1,t.SHADOWESM0=!1,t.SHADOWESM1=!1,t.SHADOWESM2=!1,t.SHADOWESM3=!1,t.SHADOWPOISSON0=!1,t.SHADOWPOISSON1=!1,t.SHADOWPOISSON2=!1,t.SHADOWPOISSON3=!1,t.SHADOWPCF0=!1,t.SHADOWPCF1=!1,t.SHADOWPCF2=!1,t.SHADOWPCF3=!1,t.SHADOWPCSS0=!1,t.SHADOWPCSS1=!1,t.SHADOWPCSS2=!1,t.SHADOWPCSS3=!1,t.NORMAL=!1,t.UV1=!1,t.UV2=!1,t.VERTEXCOLOR=!1,t.VERTEXALPHA=!1,t.NUM_BONE_INFLUENCERS=0,t.BonesPerMesh=0,t.INSTANCES=!1,t.UNLIT=!1,t.rebuild(),t}return Object(n.b)(t,e),t}(r.MaterialDefines),f=function(e){function t(t,i){var n=e.call(this,t,i)||this;return n.speed=1,n.movingSpeed=1,n.lowFrequencySpeed=1,n.fogDensity=.15,n._lastTime=0,n.diffuseColor=new r.Color3(1,1,1),n._disableLighting=!1,n._unlit=!1,n._maxSimultaneousLights=4,n._scaledDiffuse=new r.Color3,n}return Object(n.b)(t,e),t.prototype.needAlphaBlending=function(){return this.alpha<1},t.prototype.needAlphaTesting=function(){return!1},t.prototype.getAlphaTestTexture=function(){return null},t.prototype.isReadyForSubMesh=function(e,t,i){if(this.isFrozen&&t.effect&&t.effect._wasPreviouslyReady)return!0;t._materialDefines||(t._materialDefines=new s);var n=t._materialDefines,o=this.getScene();if(!this.checkReadyOnEveryCall&&t.effect&&this._renderId===o.getRenderId())return!0;var a=o.getEngine();if(n._areTexturesDirty&&(n._needUVs=!1,o.texturesEnabled&&this._diffuseTexture&&r.MaterialFlags.DiffuseTextureEnabled)){if(!this._diffuseTexture.isReady())return!1;n._needUVs=!0,n.DIFFUSE=!0}if(r.MaterialHelper.PrepareDefinesForMisc(e,o,!1,this.pointsCloud,this.fogEnabled,this._shouldTurnAlphaTestOn(e),n),n._needNormals=!0,r.MaterialHelper.PrepareDefinesForLights(o,e,n,!1,this._maxSimultaneousLights,this._disableLighting),r.MaterialHelper.PrepareDefinesForFrameBoundValues(o,a,n,!!i),r.MaterialHelper.PrepareDefinesForAttributes(e,n,!0,!0),n.isDirty){n.markAsProcessed(),o.resetCachedMaterial();var f=new r.EffectFallbacks;n.FOG&&f.addFallback(1,"FOG"),r.MaterialHelper.HandleFallbacksForShadows(n,f),n.NUM_BONE_INFLUENCERS>0&&f.addCPUSkinningFallback(0,e);var l=[r.VertexBuffer.PositionKind];n.NORMAL&&l.push(r.VertexBuffer.NormalKind),n.UV1&&l.push(r.VertexBuffer.UVKind),n.UV2&&l.push(r.VertexBuffer.UV2Kind),n.VERTEXCOLOR&&l.push(r.VertexBuffer.ColorKind),r.MaterialHelper.PrepareAttributesForBones(l,e,n,f),r.MaterialHelper.PrepareAttributesForInstances(l,n);var u=n.toString(),c=["world","view","viewProjection","vEyePosition","vLightsType","vDiffuseColor","vFogInfos","vFogColor","pointSize","vDiffuseInfos","mBones","vClipPlane","vClipPlane2","vClipPlane3","vClipPlane4","vClipPlane5","vClipPlane6","diffuseMatrix","time","speed","movingSpeed","fogColor","fogDensity","lowFrequencySpeed"],d=["diffuseSampler","noiseTexture"],p=new Array;r.MaterialHelper.PrepareUniformsAndSamplersList({uniformsNames:c,uniformBuffersNames:p,samplers:d,defines:n,maxSimultaneousLights:this.maxSimultaneousLights}),t.setEffect(o.getEngine().createEffect("lava",{attributes:l,uniformsNames:c,uniformBuffersNames:p,samplers:d,defines:u,fallbacks:f,onCompiled:this.onCompiled,onError:this.onError,indexParameters:{maxSimultaneousLights:this.maxSimultaneousLights}},a),n)}return!(!t.effect||!t.effect.isReady())&&(this._renderId=o.getRenderId(),t.effect._wasPreviouslyReady=!0,!0)},t.prototype.bindForSubMesh=function(e,t,i){var n=this.getScene(),o=i._materialDefines;if(o){var a=i.effect;a&&(this._activeEffect=a,o.UNLIT=this._unlit,this.bindOnlyWorldMatrix(e),this._activeEffect.setMatrix("viewProjection",n.getTransformMatrix()),r.MaterialHelper.BindBonesParameters(t,this._activeEffect),this._mustRebind(n,a)&&(this.diffuseTexture&&r.MaterialFlags.DiffuseTextureEnabled&&(this._activeEffect.setTexture("diffuseSampler",this.diffuseTexture),this._activeEffect.setFloat2("vDiffuseInfos",this.diffuseTexture.coordinatesIndex,this.diffuseTexture.level),this._activeEffect.setMatrix("diffuseMatrix",this.diffuseTexture.getTextureMatrix())),this.noiseTexture&&this._activeEffect.setTexture("noiseTexture",this.noiseTexture),r.MaterialHelper.BindClipPlane(this._activeEffect,n),this.pointsCloud&&this._activeEffect.setFloat("pointSize",this.pointSize),r.MaterialHelper.BindEyePosition(a,n)),this._activeEffect.setColor4("vDiffuseColor",this._scaledDiffuse,this.alpha*t.visibility),n.lightsEnabled&&!this.disableLighting&&r.MaterialHelper.BindLights(n,t,this._activeEffect,o),n.fogEnabled&&t.applyFog&&n.fogMode!==r.Scene.FOGMODE_NONE&&this._activeEffect.setMatrix("view",n.getViewMatrix()),r.MaterialHelper.BindFogParameters(n,t,this._activeEffect),this._lastTime+=n.getEngine().getDeltaTime(),this._activeEffect.setFloat("time",this._lastTime*this.speed/1e3),this.fogColor||(this.fogColor=r.Color3.Black()),this._activeEffect.setColor3("fogColor",this.fogColor),this._activeEffect.setFloat("fogDensity",this.fogDensity),this._activeEffect.setFloat("lowFrequencySpeed",this.lowFrequencySpeed),this._activeEffect.setFloat("movingSpeed",this.movingSpeed),this._afterBind(t,this._activeEffect))}},t.prototype.getAnimatables=function(){var e=[];return this.diffuseTexture&&this.diffuseTexture.animations&&this.diffuseTexture.animations.length>0&&e.push(this.diffuseTexture),this.noiseTexture&&this.noiseTexture.animations&&this.noiseTexture.animations.length>0&&e.push(this.noiseTexture),e},t.prototype.getActiveTextures=function(){var t=e.prototype.getActiveTextures.call(this);return this._diffuseTexture&&t.push(this._diffuseTexture),t},t.prototype.hasTexture=function(t){return!!e.prototype.hasTexture.call(this,t)||this.diffuseTexture===t},t.prototype.dispose=function(t){this.diffuseTexture&&this.diffuseTexture.dispose(),this.noiseTexture&&this.noiseTexture.dispose(),e.prototype.dispose.call(this,t)},t.prototype.clone=function(e){var i=this;return r.SerializationHelper.Clone(function(){return new t(e,i.getScene())},this)},t.prototype.serialize=function(){var e=r.SerializationHelper.Serialize(this);return e.customType="BABYLON.LavaMaterial",e},t.prototype.getClassName=function(){return"LavaMaterial"},t.Parse=function(e,i,n){return r.SerializationHelper.Parse(function(){return new t(e.name,i)},e,i,n)},Object(n.a)([Object(r.serializeAsTexture)("diffuseTexture")],t.prototype,"_diffuseTexture",void 0),Object(n.a)([Object(r.expandToProperty)("_markAllSubMeshesAsTexturesDirty")],t.prototype,"diffuseTexture",void 0),Object(n.a)([Object(r.serializeAsTexture)()],t.prototype,"noiseTexture",void 0),Object(n.a)([Object(r.serializeAsColor3)()],t.prototype,"fogColor",void 0),Object(n.a)([Object(r.serialize)()],t.prototype,"speed",void 0),Object(n.a)([Object(r.serialize)()],t.prototype,"movingSpeed",void 0),Object(n.a)([Object(r.serialize)()],t.prototype,"lowFrequencySpeed",void 0),Object(n.a)([Object(r.serialize)()],t.prototype,"fogDensity",void 0),Object(n.a)([Object(r.serializeAsColor3)()],t.prototype,"diffuseColor",void 0),Object(n.a)([Object(r.serialize)("disableLighting")],t.prototype,"_disableLighting",void 0),Object(n.a)([Object(r.expandToProperty)("_markAllSubMeshesAsLightsDirty")],t.prototype,"disableLighting",void 0),Object(n.a)([Object(r.serialize)("unlit")],t.prototype,"_unlit",void 0),Object(n.a)([Object(r.expandToProperty)("_markAllSubMeshesAsLightsDirty")],t.prototype,"unlit",void 0),Object(n.a)([Object(r.serialize)("maxSimultaneousLights")],t.prototype,"_maxSimultaneousLights",void 0),Object(n.a)([Object(r.expandToProperty)("_markAllSubMeshesAsLightsDirty")],t.prototype,"maxSimultaneousLights",void 0),t}(r.PushMaterial);r._TypeStore.RegisteredTypes["BABYLON.LavaMaterial"]=f,i.d(t,"LavaMaterial",function(){return f})},function(e,t,i){"use strict";i.r(t);var n=i(1),r=i(0),o="precision highp float;\n\nuniform vec3 vEyePosition;\nuniform float alpha;\nuniform vec3 shadowColor;\n\nvarying vec3 vPositionW;\n#ifdef NORMAL\nvarying vec3 vNormalW;\n#endif\n\n#include<helperFunctions>\n\n#include<__decl__lightFragment>[0..maxSimultaneousLights]\n#include<lightsFragmentFunctions>\n#include<shadowsFragmentFunctions>\n#include<clipPlaneFragmentDeclaration>\n\n#include<fogFragmentDeclaration>\nvoid main(void) {\n#include<clipPlaneFragment>\nvec3 viewDirectionW=normalize(vEyePosition-vPositionW);\n\n#ifdef NORMAL\nvec3 normalW=normalize(vNormalW);\n#else\nvec3 normalW=vec3(1.0,1.0,1.0);\n#endif\n\nvec3 diffuseBase=vec3(0.,0.,0.);\nlightingInfo info;\nfloat shadow=1.;\nfloat glossiness=0.;\n#include<lightFragment>[0..1]\n\nvec4 color=vec4(shadowColor,(1.0-clamp(shadow,0.,1.))*alpha);\n#include<fogFragment>\ngl_FragColor=color;\n}";r.Effect.ShadersStore.shadowOnlyPixelShader=o;var a="precision highp float;\n\nattribute vec3 position;\n#ifdef NORMAL\nattribute vec3 normal;\n#endif\n#include<bonesDeclaration>\n\n#include<instancesDeclaration>\nuniform mat4 view;\nuniform mat4 viewProjection;\n#ifdef POINTSIZE\nuniform float pointSize;\n#endif\n\nvarying vec3 vPositionW;\n#ifdef NORMAL\nvarying vec3 vNormalW;\n#endif\n#ifdef VERTEXCOLOR\nvarying vec4 vColor;\n#endif\n#include<clipPlaneVertexDeclaration>\n#include<fogVertexDeclaration>\n#include<__decl__lightFragment>[0..maxSimultaneousLights]\nvoid main(void) {\n#include<instancesVertex>\n#include<bonesVertex>\nvec4 worldPos=finalWorld*vec4(position,1.0);\ngl_Position=viewProjection*worldPos;\nvPositionW=vec3(worldPos);\n#ifdef NORMAL\nvNormalW=normalize(vec3(finalWorld*vec4(normal,0.0)));\n#endif\n\n#include<clipPlaneVertex>\n\n#include<fogVertex>\n#include<shadowsVertex>[0..maxSimultaneousLights]\n\n#ifdef POINTSIZE\ngl_PointSize=pointSize;\n#endif\n}\n";r.Effect.ShadersStore.shadowOnlyVertexShader=a;var s=function(e){function t(){var t=e.call(this)||this;return t.CLIPPLANE=!1,t.CLIPPLANE2=!1,t.CLIPPLANE3=!1,t.CLIPPLANE4=!1,t.CLIPPLANE5=!1,t.CLIPPLANE6=!1,t.POINTSIZE=!1,t.FOG=!1,t.NORMAL=!1,t.NUM_BONE_INFLUENCERS=0,t.BonesPerMesh=0,t.INSTANCES=!1,t.rebuild(),t}return Object(n.b)(t,e),t}(r.MaterialDefines),f=function(e){function t(t,i){var n=e.call(this,t,i)||this;return n.shadowColor=r.Color3.Black(),n}return Object(n.b)(t,e),t.prototype.needAlphaBlending=function(){return!0},t.prototype.needAlphaTesting=function(){return!1},t.prototype.getAlphaTestTexture=function(){return null},Object.defineProperty(t.prototype,"activeLight",{get:function(){return this._activeLight},set:function(e){this._activeLight=e},enumerable:!0,configurable:!0}),t.prototype.isReadyForSubMesh=function(e,t,i){if(this.isFrozen&&t.effect&&t.effect._wasPreviouslyReady)return!0;t._materialDefines||(t._materialDefines=new s);var n=t._materialDefines,o=this.getScene();if(!this.checkReadyOnEveryCall&&t.effect&&this._renderId===o.getRenderId())return!0;var a=o.getEngine();if(this._activeLight)for(var f=0,l=e.lightSources;f<l.length;f++){var u=l[f];if(u.shadowEnabled){if(this._activeLight===u)break;var c=e.lightSources.indexOf(this._activeLight);-1!==c&&(e.lightSources.splice(c,1),e.lightSources.splice(0,0,this._activeLight));break}}if(r.MaterialHelper.PrepareDefinesForFrameBoundValues(o,a,n,!!i),r.MaterialHelper.PrepareDefinesForMisc(e,o,!1,this.pointsCloud,this.fogEnabled,this._shouldTurnAlphaTestOn(e),n),n._needNormals=r.MaterialHelper.PrepareDefinesForLights(o,e,n,!1,1),r.MaterialHelper.PrepareDefinesForAttributes(e,n,!1,!0),n.isDirty){n.markAsProcessed(),o.resetCachedMaterial();var d=new r.EffectFallbacks;n.FOG&&d.addFallback(1,"FOG"),r.MaterialHelper.HandleFallbacksForShadows(n,d,1),n.NUM_BONE_INFLUENCERS>0&&d.addCPUSkinningFallback(0,e);var p=[r.VertexBuffer.PositionKind];n.NORMAL&&p.push(r.VertexBuffer.NormalKind),r.MaterialHelper.PrepareAttributesForBones(p,e,n,d),r.MaterialHelper.PrepareAttributesForInstances(p,n);var h=n.toString(),v=["world","view","viewProjection","vEyePosition","vLightsType","vFogInfos","vFogColor","pointSize","alpha","shadowColor","mBones","vClipPlane","vClipPlane2","vClipPlane3","vClipPlane4","vClipPlane5","vClipPlane6"],m=new Array,g=new Array;r.MaterialHelper.PrepareUniformsAndSamplersList({uniformsNames:v,uniformBuffersNames:g,samplers:m,defines:n,maxSimultaneousLights:1}),t.setEffect(o.getEngine().createEffect("shadowOnly",{attributes:p,uniformsNames:v,uniformBuffersNames:g,samplers:m,defines:h,fallbacks:d,onCompiled:this.onCompiled,onError:this.onError,indexParameters:{maxSimultaneousLights:1}},a),n)}return!(!t.effect||!t.effect.isReady())&&(this._renderId=o.getRenderId(),t.effect._wasPreviouslyReady=!0,!0)},t.prototype.bindForSubMesh=function(e,t,i){var n=this.getScene(),o=i._materialDefines;if(o){var a=i.effect;a&&(this._activeEffect=a,this.bindOnlyWorldMatrix(e),this._activeEffect.setMatrix("viewProjection",n.getTransformMatrix()),r.MaterialHelper.BindBonesParameters(t,this._activeEffect),this._mustRebind(n,a)&&(r.MaterialHelper.BindClipPlane(this._activeEffect,n),this.pointsCloud&&this._activeEffect.setFloat("pointSize",this.pointSize),this._activeEffect.setFloat("alpha",this.alpha),this._activeEffect.setColor3("shadowColor",this.shadowColor),r.MaterialHelper.BindEyePosition(a,n)),n.lightsEnabled&&r.MaterialHelper.BindLights(n,t,this._activeEffect,o,1),n.fogEnabled&&t.applyFog&&n.fogMode!==r.Scene.FOGMODE_NONE&&this._activeEffect.setMatrix("view",n.getViewMatrix()),r.MaterialHelper.BindFogParameters(n,t,this._activeEffect),this._afterBind(t,this._activeEffect))}},t.prototype.clone=function(e){var i=this;return r.SerializationHelper.Clone(function(){return new t(e,i.getScene())},this)},t.prototype.serialize=function(){var e=r.SerializationHelper.Serialize(this);return e.customType="BABYLON.ShadowOnlyMaterial",e},t.prototype.getClassName=function(){return"ShadowOnlyMaterial"},t.Parse=function(e,i,n){return r.SerializationHelper.Parse(function(){return new t(e.name,i)},e,i,n)},t}(r.PushMaterial);r._TypeStore.RegisteredTypes["BABYLON.ShadowOnlyMaterial"]=f,i.d(t,"ShadowOnlyMaterial",function(){return f})},function(e,t,i){"use strict";i.r(t);var n=i(1),r=i(0),o="precision highp float;\n\nuniform vec3 vEyePosition;\nuniform vec4 vDiffuseColor;\n#ifdef SPECULARTERM\nuniform vec4 vSpecularColor;\n#endif\n\nvarying vec3 vPositionW;\n#ifdef NORMAL\nvarying vec3 vNormalW;\n#endif\n#ifdef VERTEXCOLOR\nvarying vec4 vColor;\n#endif\n\n#include<helperFunctions>\n\n#include<__decl__lightFragment>[0..maxSimultaneousLights]\n\n#ifdef DIFFUSE\nvarying vec2 vTextureUV;\nuniform sampler2D mixMap1Sampler;\nuniform vec2 vTextureInfos;\n#ifdef MIXMAP2\nuniform sampler2D mixMap2Sampler;\n#endif\nuniform sampler2D diffuse1Sampler;\nuniform sampler2D diffuse2Sampler;\nuniform sampler2D diffuse3Sampler;\nuniform sampler2D diffuse4Sampler;\nuniform vec2 diffuse1Infos;\nuniform vec2 diffuse2Infos;\nuniform vec2 diffuse3Infos;\nuniform vec2 diffuse4Infos;\n#ifdef MIXMAP2\nuniform sampler2D diffuse5Sampler;\nuniform sampler2D diffuse6Sampler;\nuniform sampler2D diffuse7Sampler;\nuniform sampler2D diffuse8Sampler;\nuniform vec2 diffuse5Infos;\nuniform vec2 diffuse6Infos;\nuniform vec2 diffuse7Infos;\nuniform vec2 diffuse8Infos;\n#endif\n#endif\n\n#include<lightsFragmentFunctions>\n#include<shadowsFragmentFunctions>\n#include<clipPlaneFragmentDeclaration>\n\n#include<fogFragmentDeclaration>\nvoid main(void) {\n\n#include<clipPlaneFragment>\nvec3 viewDirectionW=normalize(vEyePosition-vPositionW);\n\nvec4 finalMixColor=vec4(1.,1.,1.,1.);\nvec3 diffuseColor=vDiffuseColor.rgb;\n#ifdef MIXMAP2\nvec4 mixColor2=vec4(1.,1.,1.,1.);\n#endif\n#ifdef SPECULARTERM\nfloat glossiness=vSpecularColor.a;\nvec3 specularColor=vSpecularColor.rgb;\n#else\nfloat glossiness=0.;\n#endif\n\nfloat alpha=vDiffuseColor.a;\n\n#ifdef NORMAL\nvec3 normalW=normalize(vNormalW);\n#else\nvec3 normalW=vec3(1.0,1.0,1.0);\n#endif\n#ifdef DIFFUSE\nvec4 mixColor=texture2D(mixMap1Sampler,vTextureUV);\n#include<depthPrePass>\nmixColor.rgb*=vTextureInfos.y;\nvec4 diffuse1Color=texture2D(diffuse1Sampler,vTextureUV*diffuse1Infos);\nvec4 diffuse2Color=texture2D(diffuse2Sampler,vTextureUV*diffuse2Infos);\nvec4 diffuse3Color=texture2D(diffuse3Sampler,vTextureUV*diffuse3Infos);\nvec4 diffuse4Color=texture2D(diffuse4Sampler,vTextureUV*diffuse4Infos);\ndiffuse1Color.rgb*=mixColor.r;\ndiffuse2Color.rgb=mix(diffuse1Color.rgb,diffuse2Color.rgb,mixColor.g);\ndiffuse3Color.rgb=mix(diffuse2Color.rgb,diffuse3Color.rgb,mixColor.b);\nfinalMixColor.rgb=mix(diffuse3Color.rgb,diffuse4Color.rgb,1.0-mixColor.a);\n#ifdef MIXMAP2\nmixColor=texture2D(mixMap2Sampler,vTextureUV);\nmixColor.rgb*=vTextureInfos.y;\nvec4 diffuse5Color=texture2D(diffuse5Sampler,vTextureUV*diffuse5Infos);\nvec4 diffuse6Color=texture2D(diffuse6Sampler,vTextureUV*diffuse6Infos);\nvec4 diffuse7Color=texture2D(diffuse7Sampler,vTextureUV*diffuse7Infos);\nvec4 diffuse8Color=texture2D(diffuse8Sampler,vTextureUV*diffuse8Infos);\ndiffuse5Color.rgb=mix(finalMixColor.rgb,diffuse5Color.rgb,mixColor.r);\ndiffuse6Color.rgb=mix(diffuse5Color.rgb,diffuse6Color.rgb,mixColor.g);\ndiffuse7Color.rgb=mix(diffuse6Color.rgb,diffuse7Color.rgb,mixColor.b);\nfinalMixColor.rgb=mix(diffuse7Color.rgb,diffuse8Color.rgb,1.0-mixColor.a);\n#endif\n#endif\n#ifdef VERTEXCOLOR\nfinalMixColor.rgb*=vColor.rgb;\n#endif\n\nvec3 diffuseBase=vec3(0.,0.,0.);\nlightingInfo info;\nfloat shadow=1.;\n#ifdef SPECULARTERM\nvec3 specularBase=vec3(0.,0.,0.);\n#endif\n#include<lightFragment>[0..maxSimultaneousLights]\n#ifdef VERTEXALPHA\nalpha*=vColor.a;\n#endif\n#ifdef SPECULARTERM\nvec3 finalSpecular=specularBase*specularColor;\n#else\nvec3 finalSpecular=vec3(0.0);\n#endif\nvec3 finalDiffuse=clamp(diffuseBase*diffuseColor*finalMixColor.rgb,0.0,1.0);\n\nvec4 color=vec4(finalDiffuse+finalSpecular,alpha);\n#include<fogFragment>\ngl_FragColor=color;\n}\n";r.Effect.ShadersStore.mixPixelShader=o;var a="precision highp float;\n\nattribute vec3 position;\n#ifdef NORMAL\nattribute vec3 normal;\n#endif\n#ifdef UV1\nattribute vec2 uv;\n#endif\n#ifdef UV2\nattribute vec2 uv2;\n#endif\n#ifdef VERTEXCOLOR\nattribute vec4 color;\n#endif\n#include<bonesDeclaration>\n\n#include<instancesDeclaration>\nuniform mat4 view;\nuniform mat4 viewProjection;\n#ifdef DIFFUSE\nvarying vec2 vTextureUV;\nuniform mat4 textureMatrix;\nuniform vec2 vTextureInfos;\n#endif\n#ifdef POINTSIZE\nuniform float pointSize;\n#endif\n\nvarying vec3 vPositionW;\n#ifdef NORMAL\nvarying vec3 vNormalW;\n#endif\n#ifdef VERTEXCOLOR\nvarying vec4 vColor;\n#endif\n#include<clipPlaneVertexDeclaration>\n#include<fogVertexDeclaration>\n#include<__decl__lightFragment>[0..maxSimultaneousLights]\nvoid main(void) {\n#include<instancesVertex>\n#include<bonesVertex>\nvec4 worldPos=finalWorld*vec4(position,1.0);\ngl_Position=viewProjection*worldPos;\nvPositionW=vec3(worldPos);\n#ifdef NORMAL\nvNormalW=normalize(vec3(finalWorld*vec4(normal,0.0)));\n#endif\n\n#ifndef UV1\nvec2 uv=vec2(0.,0.);\n#endif\n#ifndef UV2\nvec2 uv2=vec2(0.,0.);\n#endif\n#ifdef DIFFUSE\nif (vTextureInfos.x == 0.)\n{\nvTextureUV=vec2(textureMatrix*vec4(uv,1.0,0.0));\n}\nelse\n{\nvTextureUV=vec2(textureMatrix*vec4(uv2,1.0,0.0));\n}\n#endif\n\n#include<clipPlaneVertex>\n\n#include<fogVertex>\n\n#include<shadowsVertex>[0..maxSimultaneousLights]\n\n#ifdef VERTEXCOLOR\nvColor=color;\n#endif\n\n#ifdef POINTSIZE\ngl_PointSize=pointSize;\n#endif\n}\n";r.Effect.ShadersStore.mixVertexShader=a;var s=function(e){function t(){var t=e.call(this)||this;return t.DIFFUSE=!1,t.CLIPPLANE=!1,t.CLIPPLANE2=!1,t.CLIPPLANE3=!1,t.CLIPPLANE4=!1,t.CLIPPLANE5=!1,t.CLIPPLANE6=!1,t.ALPHATEST=!1,t.DEPTHPREPASS=!1,t.POINTSIZE=!1,t.FOG=!1,t.SPECULARTERM=!1,t.NORMAL=!1,t.UV1=!1,t.UV2=!1,t.VERTEXCOLOR=!1,t.VERTEXALPHA=!1,t.NUM_BONE_INFLUENCERS=0,t.BonesPerMesh=0,t.INSTANCES=!1,t.MIXMAP2=!1,t.rebuild(),t}return Object(n.b)(t,e),t}(r.MaterialDefines),f=function(e){function t(t,i){var n=e.call(this,t,i)||this;return n.diffuseColor=new r.Color3(1,1,1),n.specularColor=new r.Color3(0,0,0),n.specularPower=64,n._disableLighting=!1,n._maxSimultaneousLights=4,n}return Object(n.b)(t,e),t.prototype.needAlphaBlending=function(){return this.alpha<1},t.prototype.needAlphaTesting=function(){return!1},t.prototype.getAlphaTestTexture=function(){return null},t.prototype.isReadyForSubMesh=function(e,t,i){if(this.isFrozen&&t.effect&&t.effect._wasPreviouslyReady)return!0;t._materialDefines||(t._materialDefines=new s);var n=t._materialDefines,o=this.getScene();if(!this.checkReadyOnEveryCall&&t.effect&&this._renderId===o.getRenderId())return!0;var a=o.getEngine();if(o.texturesEnabled){if(!this._mixTexture1||!this._mixTexture1.isReady())return!1;if(n._needUVs=!0,r.MaterialFlags.DiffuseTextureEnabled){if(!this._diffuseTexture1||!this._diffuseTexture1.isReady())return!1;if(n.DIFFUSE=!0,!this._diffuseTexture2||!this._diffuseTexture2.isReady())return!1;if(!this._diffuseTexture3||!this._diffuseTexture3.isReady())return!1;if(!this._diffuseTexture4||!this._diffuseTexture4.isReady())return!1;if(this._mixTexture2){if(!this._mixTexture2.isReady())return!1;if(n.MIXMAP2=!0,!this._diffuseTexture5||!this._diffuseTexture5.isReady())return!1;if(!this._diffuseTexture6||!this._diffuseTexture6.isReady())return!1;if(!this._diffuseTexture7||!this._diffuseTexture7.isReady())return!1;if(!this._diffuseTexture8||!this._diffuseTexture8.isReady())return!1}}}if(r.MaterialHelper.PrepareDefinesForMisc(e,o,!1,this.pointsCloud,this.fogEnabled,this._shouldTurnAlphaTestOn(e),n),n._needNormals=r.MaterialHelper.PrepareDefinesForLights(o,e,n,!1,this._maxSimultaneousLights,this._disableLighting),r.MaterialHelper.PrepareDefinesForFrameBoundValues(o,a,n,!!i),r.MaterialHelper.PrepareDefinesForAttributes(e,n,!0,!0),n.isDirty){n.markAsProcessed(),o.resetCachedMaterial();var f=new r.EffectFallbacks;n.FOG&&f.addFallback(1,"FOG"),r.MaterialHelper.HandleFallbacksForShadows(n,f,this.maxSimultaneousLights),n.NUM_BONE_INFLUENCERS>0&&f.addCPUSkinningFallback(0,e);var l=[r.VertexBuffer.PositionKind];n.NORMAL&&l.push(r.VertexBuffer.NormalKind),n.UV1&&l.push(r.VertexBuffer.UVKind),n.UV2&&l.push(r.VertexBuffer.UV2Kind),n.VERTEXCOLOR&&l.push(r.VertexBuffer.ColorKind),r.MaterialHelper.PrepareAttributesForBones(l,e,n,f),r.MaterialHelper.PrepareAttributesForInstances(l,n);var u=n.toString(),c=["world","view","viewProjection","vEyePosition","vLightsType","vDiffuseColor","vSpecularColor","vFogInfos","vFogColor","pointSize","vTextureInfos","mBones","vClipPlane","vClipPlane2","vClipPlane3","vClipPlane4","vClipPlane5","vClipPlane6","textureMatrix","diffuse1Infos","diffuse2Infos","diffuse3Infos","diffuse4Infos","diffuse5Infos","diffuse6Infos","diffuse7Infos","diffuse8Infos"],d=["mixMap1Sampler","mixMap2Sampler","diffuse1Sampler","diffuse2Sampler","diffuse3Sampler","diffuse4Sampler","diffuse5Sampler","diffuse6Sampler","diffuse7Sampler","diffuse8Sampler"],p=new Array;r.MaterialHelper.PrepareUniformsAndSamplersList({uniformsNames:c,uniformBuffersNames:p,samplers:d,defines:n,maxSimultaneousLights:this.maxSimultaneousLights}),t.setEffect(o.getEngine().createEffect("mix",{attributes:l,uniformsNames:c,uniformBuffersNames:p,samplers:d,defines:u,fallbacks:f,onCompiled:this.onCompiled,onError:this.onError,indexParameters:{maxSimultaneousLights:this.maxSimultaneousLights}},a),n)}return!(!t.effect||!t.effect.isReady())&&(this._renderId=o.getRenderId(),t.effect._wasPreviouslyReady=!0,!0)},t.prototype.bindForSubMesh=function(e,t,i){var n=this.getScene(),o=i._materialDefines;if(o){var a=i.effect;a&&(this._activeEffect=a,this.bindOnlyWorldMatrix(e),this._activeEffect.setMatrix("viewProjection",n.getTransformMatrix()),r.MaterialHelper.BindBonesParameters(t,this._activeEffect),this._mustRebind(n,a)&&(this._mixTexture1&&(this._activeEffect.setTexture("mixMap1Sampler",this._mixTexture1),this._activeEffect.setFloat2("vTextureInfos",this._mixTexture1.coordinatesIndex,this._mixTexture1.level),this._activeEffect.setMatrix("textureMatrix",this._mixTexture1.getTextureMatrix()),r.MaterialFlags.DiffuseTextureEnabled&&(this._diffuseTexture1&&(this._activeEffect.setTexture("diffuse1Sampler",this._diffuseTexture1),this._activeEffect.setFloat2("diffuse1Infos",this._diffuseTexture1.uScale,this._diffuseTexture1.vScale)),this._diffuseTexture2&&(this._activeEffect.setTexture("diffuse2Sampler",this._diffuseTexture2),this._activeEffect.setFloat2("diffuse2Infos",this._diffuseTexture2.uScale,this._diffuseTexture2.vScale)),this._diffuseTexture3&&(this._activeEffect.setTexture("diffuse3Sampler",this._diffuseTexture3),this._activeEffect.setFloat2("diffuse3Infos",this._diffuseTexture3.uScale,this._diffuseTexture3.vScale)),this._diffuseTexture4&&(this._activeEffect.setTexture("diffuse4Sampler",this._diffuseTexture4),this._activeEffect.setFloat2("diffuse4Infos",this._diffuseTexture4.uScale,this._diffuseTexture4.vScale)))),this._mixTexture2&&(this._activeEffect.setTexture("mixMap2Sampler",this._mixTexture2),r.MaterialFlags.DiffuseTextureEnabled&&(this._diffuseTexture5&&(this._activeEffect.setTexture("diffuse5Sampler",this._diffuseTexture5),this._activeEffect.setFloat2("diffuse5Infos",this._diffuseTexture5.uScale,this._diffuseTexture5.vScale)),this._diffuseTexture6&&(this._activeEffect.setTexture("diffuse6Sampler",this._diffuseTexture6),this._activeEffect.setFloat2("diffuse6Infos",this._diffuseTexture6.uScale,this._diffuseTexture6.vScale)),this._diffuseTexture7&&(this._activeEffect.setTexture("diffuse7Sampler",this._diffuseTexture7),this._activeEffect.setFloat2("diffuse7Infos",this._diffuseTexture7.uScale,this._diffuseTexture7.vScale)),this._diffuseTexture8&&(this._activeEffect.setTexture("diffuse8Sampler",this._diffuseTexture8),this._activeEffect.setFloat2("diffuse8Infos",this._diffuseTexture8.uScale,this._diffuseTexture8.vScale)))),r.MaterialHelper.BindClipPlane(this._activeEffect,n),this.pointsCloud&&this._activeEffect.setFloat("pointSize",this.pointSize),r.MaterialHelper.BindEyePosition(a,n)),this._activeEffect.setColor4("vDiffuseColor",this.diffuseColor,this.alpha*t.visibility),o.SPECULARTERM&&this._activeEffect.setColor4("vSpecularColor",this.specularColor,this.specularPower),n.lightsEnabled&&!this.disableLighting&&r.MaterialHelper.BindLights(n,t,this._activeEffect,o,this.maxSimultaneousLights),n.fogEnabled&&t.applyFog&&n.fogMode!==r.Scene.FOGMODE_NONE&&this._activeEffect.setMatrix("view",n.getViewMatrix()),r.MaterialHelper.BindFogParameters(n,t,this._activeEffect),this._afterBind(t,this._activeEffect))}},t.prototype.getAnimatables=function(){var e=[];return this._mixTexture1&&this._mixTexture1.animations&&this._mixTexture1.animations.length>0&&e.push(this._mixTexture1),this._mixTexture2&&this._mixTexture2.animations&&this._mixTexture2.animations.length>0&&e.push(this._mixTexture2),e},t.prototype.getActiveTextures=function(){var t=e.prototype.getActiveTextures.call(this);return this._mixTexture1&&t.push(this._mixTexture1),this._diffuseTexture1&&t.push(this._diffuseTexture1),this._diffuseTexture2&&t.push(this._diffuseTexture2),this._diffuseTexture3&&t.push(this._diffuseTexture3),this._diffuseTexture4&&t.push(this._diffuseTexture4),this._mixTexture2&&t.push(this._mixTexture2),this._diffuseTexture5&&t.push(this._diffuseTexture5),this._diffuseTexture6&&t.push(this._diffuseTexture6),this._diffuseTexture7&&t.push(this._diffuseTexture7),this._diffuseTexture8&&t.push(this._diffuseTexture8),t},t.prototype.hasTexture=function(t){return!!e.prototype.hasTexture.call(this,t)||(this._mixTexture1===t||(this._diffuseTexture1===t||(this._diffuseTexture2===t||(this._diffuseTexture3===t||(this._diffuseTexture4===t||(this._mixTexture2===t||(this._diffuseTexture5===t||(this._diffuseTexture6===t||(this._diffuseTexture7===t||this._diffuseTexture8===t)))))))))},t.prototype.dispose=function(t){this._mixTexture1&&this._mixTexture1.dispose(),e.prototype.dispose.call(this,t)},t.prototype.clone=function(e){var i=this;return r.SerializationHelper.Clone(function(){return new t(e,i.getScene())},this)},t.prototype.serialize=function(){var e=r.SerializationHelper.Serialize(this);return e.customType="BABYLON.MixMaterial",e},t.prototype.getClassName=function(){return"MixMaterial"},t.Parse=function(e,i,n){return r.SerializationHelper.Parse(function(){return new t(e.name,i)},e,i,n)},Object(n.a)([Object(r.serializeAsTexture)("mixTexture1")],t.prototype,"_mixTexture1",void 0),Object(n.a)([Object(r.expandToProperty)("_markAllSubMeshesAsTexturesDirty")],t.prototype,"mixTexture1",void 0),Object(n.a)([Object(r.serializeAsTexture)("mixTexture2")],t.prototype,"_mixTexture2",void 0),Object(n.a)([Object(r.expandToProperty)("_markAllSubMeshesAsTexturesDirty")],t.prototype,"mixTexture2",void 0),Object(n.a)([Object(r.serializeAsTexture)("diffuseTexture1")],t.prototype,"_diffuseTexture1",void 0),Object(n.a)([Object(r.expandToProperty)("_markAllSubMeshesAsTexturesDirty")],t.prototype,"diffuseTexture1",void 0),Object(n.a)([Object(r.serializeAsTexture)("diffuseTexture2")],t.prototype,"_diffuseTexture2",void 0),Object(n.a)([Object(r.expandToProperty)("_markAllSubMeshesAsTexturesDirty")],t.prototype,"diffuseTexture2",void 0),Object(n.a)([Object(r.serializeAsTexture)("diffuseTexture3")],t.prototype,"_diffuseTexture3",void 0),Object(n.a)([Object(r.expandToProperty)("_markAllSubMeshesAsTexturesDirty")],t.prototype,"diffuseTexture3",void 0),Object(n.a)([Object(r.serializeAsTexture)("diffuseTexture4")],t.prototype,"_diffuseTexture4",void 0),Object(n.a)([Object(r.expandToProperty)("_markAllSubMeshesAsTexturesDirty")],t.prototype,"diffuseTexture4",void 0),Object(n.a)([Object(r.serializeAsTexture)("diffuseTexture1")],t.prototype,"_diffuseTexture5",void 0),Object(n.a)([Object(r.expandToProperty)("_markAllSubMeshesAsTexturesDirty")],t.prototype,"diffuseTexture5",void 0),Object(n.a)([Object(r.serializeAsTexture)("diffuseTexture2")],t.prototype,"_diffuseTexture6",void 0),Object(n.a)([Object(r.expandToProperty)("_markAllSubMeshesAsTexturesDirty")],t.prototype,"diffuseTexture6",void 0),Object(n.a)([Object(r.serializeAsTexture)("diffuseTexture3")],t.prototype,"_diffuseTexture7",void 0),Object(n.a)([Object(r.expandToProperty)("_markAllSubMeshesAsTexturesDirty")],t.prototype,"diffuseTexture7",void 0),Object(n.a)([Object(r.serializeAsTexture)("diffuseTexture4")],t.prototype,"_diffuseTexture8",void 0),Object(n.a)([Object(r.expandToProperty)("_markAllSubMeshesAsTexturesDirty")],t.prototype,"diffuseTexture8",void 0),Object(n.a)([Object(r.serializeAsColor3)()],t.prototype,"diffuseColor",void 0),Object(n.a)([Object(r.serializeAsColor3)()],t.prototype,"specularColor",void 0),Object(n.a)([Object(r.serialize)()],t.prototype,"specularPower",void 0),Object(n.a)([Object(r.serialize)("disableLighting")],t.prototype,"_disableLighting",void 0),Object(n.a)([Object(r.expandToProperty)("_markAllSubMeshesAsLightsDirty")],t.prototype,"disableLighting",void 0),Object(n.a)([Object(r.serialize)("maxSimultaneousLights")],t.prototype,"_maxSimultaneousLights",void 0),Object(n.a)([Object(r.expandToProperty)("_markAllSubMeshesAsLightsDirty")],t.prototype,"maxSimultaneousLights",void 0),t}(r.PushMaterial);r._TypeStore.RegisteredTypes["BABYLON.MixMaterial"]=f,i.d(t,"MixMaterial",function(){return f})},function(e,t,i){"use strict";i.r(t);var n=i(1),r=i(0),o="precision highp float;\n\nuniform vec3 vEyePosition;\nuniform vec4 vDiffuseColor;\n\nvarying vec3 vPositionW;\n#ifdef NORMAL\nvarying vec3 vNormalW;\n#endif\n#ifdef LIGHTING\n\n#include<helperFunctions>\n\n#include<__decl__lightFragment>[0]\n#include<__decl__lightFragment>[1]\n#include<__decl__lightFragment>[2]\n#include<__decl__lightFragment>[3]\n#include<lightsFragmentFunctions>\n#include<shadowsFragmentFunctions>\n#endif\n\n#ifdef DIFFUSE\nvarying vec2 vDiffuseUV;\nuniform sampler2D diffuseSampler;\nuniform vec2 vDiffuseInfos;\n#endif\n#include<clipPlaneFragmentDeclaration>\n\n#include<fogFragmentDeclaration>\nvoid main(void) {\n#include<clipPlaneFragment>\nvec3 viewDirectionW=normalize(vEyePosition-vPositionW);\n\nvec4 baseColor=vec4(1.,1.,1.,1.);\nvec3 diffuseColor=vDiffuseColor.rgb;\n\nfloat alpha=vDiffuseColor.a;\n#ifdef DIFFUSE\nbaseColor=texture2D(diffuseSampler,vDiffuseUV);\n#ifdef ALPHATEST\nif (baseColor.a<0.4)\ndiscard;\n#endif\n#include<depthPrePass>\nbaseColor.rgb*=vDiffuseInfos.y;\n#endif\n#ifdef NORMAL\nbaseColor=mix(baseColor,vec4(vNormalW,1.0),0.5);\n#endif\n\n#ifdef NORMAL\nvec3 normalW=normalize(vNormalW);\n#else\nvec3 normalW=vec3(1.0,1.0,1.0);\n#endif\n\n#ifdef LIGHTING\nvec3 diffuseBase=vec3(0.,0.,0.);\nlightingInfo info;\nfloat shadow=1.;\nfloat glossiness=0.;\n#include<lightFragment>[0]\n#include<lightFragment>[1]\n#include<lightFragment>[2]\n#include<lightFragment>[3]\nvec3 finalDiffuse=clamp(diffuseBase*diffuseColor,0.0,1.0)*baseColor.rgb;\n#else\nvec3 finalDiffuse=baseColor.rgb;\n#endif\n\nvec4 color=vec4(finalDiffuse,alpha);\n#include<fogFragment>\ngl_FragColor=color;\n}";r.Effect.ShadersStore.normalPixelShader=o;var a="precision highp float;\n\nattribute vec3 position;\n#ifdef NORMAL\nattribute vec3 normal;\n#endif\n#ifdef UV1\nattribute vec2 uv;\n#endif\n#ifdef UV2\nattribute vec2 uv2;\n#endif\n#ifdef VERTEXCOLOR\nattribute vec4 color;\n#endif\n#include<bonesDeclaration>\n\n#include<instancesDeclaration>\nuniform mat4 view;\nuniform mat4 viewProjection;\n#ifdef DIFFUSE\nvarying vec2 vDiffuseUV;\nuniform mat4 diffuseMatrix;\nuniform vec2 vDiffuseInfos;\n#endif\n#ifdef POINTSIZE\nuniform float pointSize;\n#endif\n\nvarying vec3 vPositionW;\n#ifdef NORMAL\nvarying vec3 vNormalW;\n#endif\n#include<clipPlaneVertexDeclaration>\n#include<fogVertexDeclaration>\n#include<__decl__lightFragment>[0..maxSimultaneousLights]\nvoid main(void) {\n#include<instancesVertex>\n#include<bonesVertex>\nvec4 worldPos=finalWorld*vec4(position,1.0);\ngl_Position=viewProjection*worldPos;\nvPositionW=vec3(worldPos);\n#ifdef NORMAL\nvNormalW=normalize(vec3(finalWorld*vec4(normal,0.0)));\n#endif\n\n#ifndef UV1\nvec2 uv=vec2(0.,0.);\n#endif\n#ifndef UV2\nvec2 uv2=vec2(0.,0.);\n#endif\n#ifdef DIFFUSE\nif (vDiffuseInfos.x == 0.)\n{\nvDiffuseUV=vec2(diffuseMatrix*vec4(uv,1.0,0.0));\n}\nelse\n{\nvDiffuseUV=vec2(diffuseMatrix*vec4(uv2,1.0,0.0));\n}\n#endif\n\n#include<clipPlaneVertex>\n\n#include<fogVertex>\n#include<shadowsVertex>[0..maxSimultaneousLights]\n\n#ifdef POINTSIZE\ngl_PointSize=pointSize;\n#endif\n}\n";r.Effect.ShadersStore.normalVertexShader=a;var s=function(e){function t(){var t=e.call(this)||this;return t.DIFFUSE=!1,t.CLIPPLANE=!1,t.CLIPPLANE2=!1,t.CLIPPLANE3=!1,t.CLIPPLANE4=!1,t.CLIPPLANE5=!1,t.CLIPPLANE6=!1,t.ALPHATEST=!1,t.DEPTHPREPASS=!1,t.POINTSIZE=!1,t.FOG=!1,t.LIGHT0=!1,t.LIGHT1=!1,t.LIGHT2=!1,t.LIGHT3=!1,t.SPOTLIGHT0=!1,t.SPOTLIGHT1=!1,t.SPOTLIGHT2=!1,t.SPOTLIGHT3=!1,t.HEMILIGHT0=!1,t.HEMILIGHT1=!1,t.HEMILIGHT2=!1,t.HEMILIGHT3=!1,t.DIRLIGHT0=!1,t.DIRLIGHT1=!1,t.DIRLIGHT2=!1,t.DIRLIGHT3=!1,t.POINTLIGHT0=!1,t.POINTLIGHT1=!1,t.POINTLIGHT2=!1,t.POINTLIGHT3=!1,t.SHADOW0=!1,t.SHADOW1=!1,t.SHADOW2=!1,t.SHADOW3=!1,t.SHADOWS=!1,t.SHADOWESM0=!1,t.SHADOWESM1=!1,t.SHADOWESM2=!1,t.SHADOWESM3=!1,t.SHADOWPOISSON0=!1,t.SHADOWPOISSON1=!1,t.SHADOWPOISSON2=!1,t.SHADOWPOISSON3=!1,t.SHADOWPCF0=!1,t.SHADOWPCF1=!1,t.SHADOWPCF2=!1,t.SHADOWPCF3=!1,t.SHADOWPCSS0=!1,t.SHADOWPCSS1=!1,t.SHADOWPCSS2=!1,t.SHADOWPCSS3=!1,t.NORMAL=!1,t.UV1=!1,t.UV2=!1,t.NUM_BONE_INFLUENCERS=0,t.BonesPerMesh=0,t.INSTANCES=!1,t.LIGHTING=!1,t.rebuild(),t}return Object(n.b)(t,e),t}(r.MaterialDefines),f=function(e){function t(t,i){var n=e.call(this,t,i)||this;return n.diffuseColor=new r.Color3(1,1,1),n._disableLighting=!1,n._maxSimultaneousLights=4,n}return Object(n.b)(t,e),t.prototype.needAlphaBlending=function(){return this.alpha<1},t.prototype.needAlphaBlendingForMesh=function(e){return this.needAlphaBlending()||e.visibility<1},t.prototype.needAlphaTesting=function(){return!1},t.prototype.getAlphaTestTexture=function(){return null},t.prototype.isReadyForSubMesh=function(e,t,i){if(this.isFrozen&&t.effect&&t.effect._wasPreviouslyReady)return!0;t._materialDefines||(t._materialDefines=new s);var n=t._materialDefines,o=this.getScene();if(!this.checkReadyOnEveryCall&&t.effect&&this._renderId===o.getRenderId())return!0;var a=o.getEngine();if(n._areTexturesDirty&&(n._needUVs=!1,o.texturesEnabled&&this._diffuseTexture&&r.MaterialFlags.DiffuseTextureEnabled)){if(!this._diffuseTexture.isReady())return!1;n._needUVs=!0,n.DIFFUSE=!0}if(r.MaterialHelper.PrepareDefinesForMisc(e,o,!1,this.pointsCloud,this.fogEnabled,this._shouldTurnAlphaTestOn(e),n),n._needNormals=!0,r.MaterialHelper.PrepareDefinesForLights(o,e,n,!1,this._maxSimultaneousLights,this._disableLighting),r.MaterialHelper.PrepareDefinesForFrameBoundValues(o,a,n,!!i),n.LIGHTING=!this._disableLighting,r.MaterialHelper.PrepareDefinesForAttributes(e,n,!0,!0),n.isDirty){n.markAsProcessed(),o.resetCachedMaterial();var f=new r.EffectFallbacks;n.FOG&&f.addFallback(1,"FOG"),r.MaterialHelper.HandleFallbacksForShadows(n,f),n.NUM_BONE_INFLUENCERS>0&&f.addCPUSkinningFallback(0,e);var l=[r.VertexBuffer.PositionKind];n.NORMAL&&l.push(r.VertexBuffer.NormalKind),n.UV1&&l.push(r.VertexBuffer.UVKind),n.UV2&&l.push(r.VertexBuffer.UV2Kind),r.MaterialHelper.PrepareAttributesForBones(l,e,n,f),r.MaterialHelper.PrepareAttributesForInstances(l,n);var u=n.toString(),c=["world","view","viewProjection","vEyePosition","vLightsType","vDiffuseColor","vFogInfos","vFogColor","pointSize","vDiffuseInfos","mBones","vClipPlane","vClipPlane2","vClipPlane3","vClipPlane4","vClipPlane5","vClipPlane6","diffuseMatrix"],d=["diffuseSampler"],p=new Array;r.MaterialHelper.PrepareUniformsAndSamplersList({uniformsNames:c,uniformBuffersNames:p,samplers:d,defines:n,maxSimultaneousLights:4}),t.setEffect(o.getEngine().createEffect("normal",{attributes:l,uniformsNames:c,uniformBuffersNames:p,samplers:d,defines:u,fallbacks:f,onCompiled:this.onCompiled,onError:this.onError,indexParameters:{maxSimultaneousLights:4}},a),n)}return!(!t.effect||!t.effect.isReady())&&(this._renderId=o.getRenderId(),t.effect._wasPreviouslyReady=!0,!0)},t.prototype.bindForSubMesh=function(e,t,i){var n=this.getScene(),o=i._materialDefines;if(o){var a=i.effect;a&&(this._activeEffect=a,this.bindOnlyWorldMatrix(e),this._activeEffect.setMatrix("viewProjection",n.getTransformMatrix()),r.MaterialHelper.BindBonesParameters(t,this._activeEffect),this._mustRebind(n,a)&&(this.diffuseTexture&&r.MaterialFlags.DiffuseTextureEnabled&&(this._activeEffect.setTexture("diffuseSampler",this.diffuseTexture),this._activeEffect.setFloat2("vDiffuseInfos",this.diffuseTexture.coordinatesIndex,this.diffuseTexture.level),this._activeEffect.setMatrix("diffuseMatrix",this.diffuseTexture.getTextureMatrix())),r.MaterialHelper.BindClipPlane(this._activeEffect,n),this.pointsCloud&&this._activeEffect.setFloat("pointSize",this.pointSize),r.MaterialHelper.BindEyePosition(a,n)),this._activeEffect.setColor4("vDiffuseColor",this.diffuseColor,this.alpha*t.visibility),n.lightsEnabled&&!this.disableLighting&&r.MaterialHelper.BindLights(n,t,this._activeEffect,o),n.fogEnabled&&t.applyFog&&n.fogMode!==r.Scene.FOGMODE_NONE&&this._activeEffect.setMatrix("view",n.getViewMatrix()),r.MaterialHelper.BindFogParameters(n,t,this._activeEffect),this._afterBind(t,this._activeEffect))}},t.prototype.getAnimatables=function(){var e=[];return this.diffuseTexture&&this.diffuseTexture.animations&&this.diffuseTexture.animations.length>0&&e.push(this.diffuseTexture),e},t.prototype.getActiveTextures=function(){var t=e.prototype.getActiveTextures.call(this);return this._diffuseTexture&&t.push(this._diffuseTexture),t},t.prototype.hasTexture=function(t){return!!e.prototype.hasTexture.call(this,t)||this.diffuseTexture===t},t.prototype.dispose=function(t){this.diffuseTexture&&this.diffuseTexture.dispose(),e.prototype.dispose.call(this,t)},t.prototype.clone=function(e){var i=this;return r.SerializationHelper.Clone(function(){return new t(e,i.getScene())},this)},t.prototype.serialize=function(){var e=r.SerializationHelper.Serialize(this);return e.customType="BABYLON.NormalMaterial",e},t.prototype.getClassName=function(){return"NormalMaterial"},t.Parse=function(e,i,n){return r.SerializationHelper.Parse(function(){return new t(e.name,i)},e,i,n)},Object(n.a)([Object(r.serializeAsTexture)("diffuseTexture")],t.prototype,"_diffuseTexture",void 0),Object(n.a)([Object(r.expandToProperty)("_markAllSubMeshesAsTexturesDirty")],t.prototype,"diffuseTexture",void 0),Object(n.a)([Object(r.serializeAsColor3)()],t.prototype,"diffuseColor",void 0),Object(n.a)([Object(r.serialize)("disableLighting")],t.prototype,"_disableLighting",void 0),Object(n.a)([Object(r.expandToProperty)("_markAllSubMeshesAsLightsDirty")],t.prototype,"disableLighting",void 0),Object(n.a)([Object(r.serialize)("maxSimultaneousLights")],t.prototype,"_maxSimultaneousLights",void 0),Object(n.a)([Object(r.expandToProperty)("_markAllSubMeshesAsLightsDirty")],t.prototype,"maxSimultaneousLights",void 0),t}(r.PushMaterial);r._TypeStore.RegisteredTypes["BABYLON.NormalMaterial"]=f,i.d(t,"NormalMaterial",function(){return f})},function(e,t,i){"use strict";i.r(t);var n=i(1),r=i(0),o=function(){},a=function(){},s=function(e){function t(t,i){var n=e.call(this,t,i)||this;return n.CustomParts=new a,n.customShaderNameResolve=n.Builder,n.FragmentShader=r.Effect.ShadersStore.defaultPixelShader,n.VertexShader=r.Effect.ShadersStore.defaultVertexShader,n}return Object(n.b)(t,e),t.prototype.AttachAfterBind=function(e,t){for(var i in this._newUniformInstances){"vec2"==(n=i.toString().split("-"))[0]?t.setVector2(n[1],this._newUniformInstances[i]):"vec3"==n[0]?t.setVector3(n[1],this._newUniformInstances[i]):"vec4"==n[0]?t.setVector4(n[1],this._newUniformInstances[i]):"mat4"==n[0]?t.setMatrix(n[1],this._newUniformInstances[i]):"float"==n[0]&&t.setFloat(n[1],this._newUniformInstances[i])}for(var i in this._newSamplerInstances){var n;"sampler2D"==(n=i.toString().split("-"))[0]&&this._newSamplerInstances[i].isReady&&this._newSamplerInstances[i].isReady()&&t.setTexture(n[1],this._newSamplerInstances[i])}},t.prototype.ReviewUniform=function(e,t){if("uniform"==e)for(var i in this._newUniforms)-1==this._customUniform[i].indexOf("sampler")&&t.push(this._newUniforms[i]);if("sampler"==e)for(var i in this._newUniforms)-1!=this._customUniform[i].indexOf("sampler")&&t.push(this._newUniforms[i]);return t},t.prototype.Builder=function(e,i,n,o,a){var s=this;if(this._isCreatedShader)return this._createdShaderName;this._isCreatedShader=!1,t.ShaderIndexer++;var f="custom_"+t.ShaderIndexer;this.ReviewUniform("uniform",i),this.ReviewUniform("sampler",o);var l=this._afterBind.bind(this);return this._afterBind=function(e,t){if(t){s.AttachAfterBind(e,t);try{l(e,t)}catch(t){}}},r.Effect.ShadersStore[f+"VertexShader"]=this.VertexShader.replace("#define CUSTOM_VERTEX_BEGIN",this.CustomParts.Vertex_Begin?this.CustomParts.Vertex_Begin:"").replace("#define CUSTOM_VERTEX_DEFINITIONS",(this._customUniform?this._customUniform.join("\n"):"")+(this.CustomParts.Vertex_Definitions?this.CustomParts.Vertex_Definitions:"")).replace("#define CUSTOM_VERTEX_MAIN_BEGIN",this.CustomParts.Vertex_MainBegin?this.CustomParts.Vertex_MainBegin:"").replace("#define CUSTOM_VERTEX_UPDATE_POSITION",this.CustomParts.Vertex_Before_PositionUpdated?this.CustomParts.Vertex_Before_PositionUpdated:"").replace("#define CUSTOM_VERTEX_UPDATE_NORMAL",this.CustomParts.Vertex_Before_NormalUpdated?this.CustomParts.Vertex_Before_NormalUpdated:"").replace("#define CUSTOM_VERTEX_MAIN_END",this.CustomParts.Vertex_MainEnd?this.CustomParts.Vertex_MainEnd:""),r.Effect.ShadersStore[f+"PixelShader"]=this.FragmentShader.replace("#define CUSTOM_FRAGMENT_BEGIN",this.CustomParts.Fragment_Begin?this.CustomParts.Fragment_Begin:"").replace("#define CUSTOM_FRAGMENT_MAIN_BEGIN",this.CustomParts.Fragment_MainBegin?this.CustomParts.Fragment_MainBegin:"").replace("#define CUSTOM_FRAGMENT_DEFINITIONS",(this._customUniform?this._customUniform.join("\n"):"")+(this.CustomParts.Fragment_Definitions?this.CustomParts.Fragment_Definitions:"")).replace("#define CUSTOM_FRAGMENT_UPDATE_DIFFUSE",this.CustomParts.Fragment_Custom_Diffuse?this.CustomParts.Fragment_Custom_Diffuse:"").replace("#define CUSTOM_FRAGMENT_UPDATE_ALPHA",this.CustomParts.Fragment_Custom_Alpha?this.CustomParts.Fragment_Custom_Alpha:"").replace("#define CUSTOM_FRAGMENT_BEFORE_LIGHTS",this.CustomParts.Fragment_Before_Lights?this.CustomParts.Fragment_Before_Lights:"").replace("#define CUSTOM_FRAGMENT_BEFORE_FOG",this.CustomParts.Fragment_Before_Fog?this.CustomParts.Fragment_Before_Fog:"").replace("#define CUSTOM_FRAGMENT_BEFORE_FRAGCOLOR",this.CustomParts.Fragment_Before_FragColor?this.CustomParts.Fragment_Before_FragColor:""),this._isCreatedShader=!0,this._createdShaderName=f,f},t.prototype.AddUniform=function(e,t,i){return this._customUniform||(this._customUniform=new Array,this._newUniforms=new Array,this._newSamplerInstances=new Array,this._newUniformInstances=new Array),i&&(t.indexOf("sampler"),this._newUniformInstances[t+"-"+e]=i),this._customUniform.push("uniform "+t+" "+e+";"),this._newUniforms.push(e),this},t.prototype.Fragment_Begin=function(e){return this.CustomParts.Fragment_Begin=e,this},t.prototype.Fragment_Definitions=function(e){return this.CustomParts.Fragment_Definitions=e,this},t.prototype.Fragment_MainBegin=function(e){return this.CustomParts.Fragment_MainBegin=e,this},t.prototype.Fragment_Custom_Diffuse=function(e){return this.CustomParts.Fragment_Custom_Diffuse=e.replace("result","diffuseColor"),this},t.prototype.Fragment_Custom_Alpha=function(e){return this.CustomParts.Fragment_Custom_Alpha=e.replace("result","alpha"),this},t.prototype.Fragment_Before_Lights=function(e){return this.CustomParts.Fragment_Before_Lights=e,this},t.prototype.Fragment_Before_Fog=function(e){return this.CustomParts.Fragment_Before_Fog=e,this},t.prototype.Fragment_Before_FragColor=function(e){return this.CustomParts.Fragment_Before_FragColor=e.replace("result","color"),this},t.prototype.Vertex_Begin=function(e){return this.CustomParts.Vertex_Begin=e,this},t.prototype.Vertex_Definitions=function(e){return this.CustomParts.Vertex_Definitions=e,this},t.prototype.Vertex_MainBegin=function(e){return this.CustomParts.Vertex_MainBegin=e,this},t.prototype.Vertex_Before_PositionUpdated=function(e){return this.CustomParts.Vertex_Before_PositionUpdated=e.replace("result","positionUpdated"),this},t.prototype.Vertex_Before_NormalUpdated=function(e){return this.CustomParts.Vertex_Before_NormalUpdated=e.replace("result","normalUpdated"),this},t.prototype.Vertex_MainEnd=function(e){return this.CustomParts.Vertex_MainEnd=e,this},t.ShaderIndexer=1,t}(r.StandardMaterial);r._TypeStore.RegisteredTypes["BABYLON.CustomMaterial"]=s;var f=function(){},l=function(e){function t(t,i){var n=e.call(this,t,i)||this;return n.CustomParts=new f,n.customShaderNameResolve=n.Builder,n.FragmentShader=r.Effect.ShadersStore.pbrPixelShader,n.VertexShader=r.Effect.ShadersStore.pbrVertexShader,n}return Object(n.b)(t,e),t.prototype.AttachAfterBind=function(e,t){for(var i in this._newUniformInstances){"vec2"==(n=i.toString().split("-"))[0]?t.setVector2(n[1],this._newUniformInstances[i]):"vec3"==n[0]?t.setVector3(n[1],this._newUniformInstances[i]):"vec4"==n[0]?t.setVector4(n[1],this._newUniformInstances[i]):"mat4"==n[0]?t.setMatrix(n[1],this._newUniformInstances[i]):"float"==n[0]&&t.setFloat(n[1],this._newUniformInstances[i])}for(var i in this._newSamplerInstances){var n;"sampler2D"==(n=i.toString().split("-"))[0]&&this._newSamplerInstances[i].isReady&&this._newSamplerInstances[i].isReady()&&t.setTexture(n[1],this._newSamplerInstances[i])}},t.prototype.ReviewUniform=function(e,t){if("uniform"==e)for(var i in this._newUniforms)-1==this._customUniform[i].indexOf("sampler")&&t.push(this._newUniforms[i]);if("sampler"==e)for(var i in this._newUniforms)-1!=this._customUniform[i].indexOf("sampler")&&t.push(this._newUniforms[i]);return t},t.prototype.Builder=function(e,i,n,o,a){var s=this;if(this._isCreatedShader)return this._createdShaderName;this._isCreatedShader=!1,t.ShaderIndexer++;var f="custom_"+t.ShaderIndexer;this.ReviewUniform("uniform",i),this.ReviewUniform("sampler",o);var l=this._afterBind.bind(this);return this._afterBind=function(e,t){if(t){s.AttachAfterBind(e,t);try{l(e,t)}catch(t){}}},r.Effect.ShadersStore[f+"VertexShader"]=this.VertexShader.replace("#define CUSTOM_VERTEX_BEGIN",this.CustomParts.Vertex_Begin?this.CustomParts.Vertex_Begin:"").replace("#define CUSTOM_VERTEX_DEFINITIONS",(this._customUniform?this._customUniform.join("\n"):"")+(this.CustomParts.Vertex_Definitions?this.CustomParts.Vertex_Definitions:"")).replace("#define CUSTOM_VERTEX_MAIN_BEGIN",this.CustomParts.Vertex_MainBegin?this.CustomParts.Vertex_MainBegin:"").replace("#define CUSTOM_VERTEX_UPDATE_POSITION",this.CustomParts.Vertex_Before_PositionUpdated?this.CustomParts.Vertex_Before_PositionUpdated:"").replace("#define CUSTOM_VERTEX_UPDATE_NORMAL",this.CustomParts.Vertex_Before_NormalUpdated?this.CustomParts.Vertex_Before_NormalUpdated:"").replace("#define CUSTOM_VERTEX_MAIN_END",this.CustomParts.Vertex_MainEnd?this.CustomParts.Vertex_MainEnd:""),r.Effect.ShadersStore[f+"PixelShader"]=this.FragmentShader.replace("#define CUSTOM_FRAGMENT_BEGIN",this.CustomParts.Fragment_Begin?this.CustomParts.Fragment_Begin:"").replace("#define CUSTOM_FRAGMENT_MAIN_BEGIN",this.CustomParts.Fragment_MainBegin?this.CustomParts.Fragment_MainBegin:"").replace("#define CUSTOM_FRAGMENT_DEFINITIONS",(this._customUniform?this._customUniform.join("\n"):"")+(this.CustomParts.Fragment_Definitions?this.CustomParts.Fragment_Definitions:"")).replace("#define CUSTOM_FRAGMENT_UPDATE_ALBEDO",this.CustomParts.Fragment_Custom_Albedo?this.CustomParts.Fragment_Custom_Albedo:"").replace("#define CUSTOM_FRAGMENT_UPDATE_ALPHA",this.CustomParts.Fragment_Custom_Alpha?this.CustomParts.Fragment_Custom_Alpha:"").replace("#define CUSTOM_FRAGMENT_BEFORE_LIGHTS",this.CustomParts.Fragment_Before_Lights?this.CustomParts.Fragment_Before_Lights:"").replace("#define CUSTOM_FRAGMENT_UPDATE_METALLICROUGHNESS",this.CustomParts.Fragment_Custom_MetallicRoughness?this.CustomParts.Fragment_Custom_MetallicRoughness:"").replace("#define CUSTOM_FRAGMENT_UPDATE_MICROSURFACE",this.CustomParts.Fragment_Custom_MicroSurface?this.CustomParts.Fragment_Custom_MicroSurface:"").replace("#define CUSTOM_FRAGMENT_BEFORE_FOG",this.CustomParts.Fragment_Before_Fog?this.CustomParts.Fragment_Before_Fog:"").replace("#define CUSTOM_FRAGMENT_BEFORE_FRAGCOLOR",this.CustomParts.Fragment_Before_FragColor?this.CustomParts.Fragment_Before_FragColor:""),this._isCreatedShader=!0,this._createdShaderName=f,f},t.prototype.AddUniform=function(e,t,i){return this._customUniform||(this._customUniform=new Array,this._newUniforms=new Array,this._newSamplerInstances=new Array,this._newUniformInstances=new Array),i&&(t.indexOf("sampler"),this._newUniformInstances[t+"-"+e]=i),this._customUniform.push("uniform "+t+" "+e+";"),this._newUniforms.push(e),this},t.prototype.Fragment_Begin=function(e){return this.CustomParts.Fragment_Begin=e,this},t.prototype.Fragment_Definitions=function(e){return this.CustomParts.Fragment_Definitions=e,this},t.prototype.Fragment_MainBegin=function(e){return this.CustomParts.Fragment_MainBegin=e,this},t.prototype.Fragment_Custom_Albedo=function(e){return this.CustomParts.Fragment_Custom_Albedo=e.replace("result","surfaceAlbedo"),this},t.prototype.Fragment_Custom_Alpha=function(e){return this.CustomParts.Fragment_Custom_Alpha=e.replace("result","alpha"),this},t.prototype.Fragment_Before_Lights=function(e){return this.CustomParts.Fragment_Before_Lights=e,this},t.prototype.Fragment_Custom_MetallicRoughness=function(e){return this.CustomParts.Fragment_Custom_MetallicRoughness=e,this},t.prototype.Fragment_Custom_MicroSurface=function(e){return this.CustomParts.Fragment_Custom_MicroSurface=e,this},t.prototype.Fragment_Before_Fog=function(e){return this.CustomParts.Fragment_Before_Fog=e,this},t.prototype.Fragment_Before_FragColor=function(e){return this.CustomParts.Fragment_Before_FragColor=e.replace("result","color"),this},t.prototype.Vertex_Begin=function(e){return this.CustomParts.Vertex_Begin=e,this},t.prototype.Vertex_Definitions=function(e){return this.CustomParts.Vertex_Definitions=e,this},t.prototype.Vertex_MainBegin=function(e){return this.CustomParts.Vertex_MainBegin=e,this},t.prototype.Vertex_Before_PositionUpdated=function(e){return this.CustomParts.Vertex_Before_PositionUpdated=e.replace("result","positionUpdated"),this},t.prototype.Vertex_Before_NormalUpdated=function(e){return this.CustomParts.Vertex_Before_NormalUpdated=e.replace("result","normalUpdated"),this},t.prototype.Vertex_MainEnd=function(e){return this.CustomParts.Vertex_MainEnd=e,this},t.ShaderIndexer=1,t}(r.PBRMaterial);r._TypeStore.RegisteredTypes["BABYLON.PBRCustomMaterial"]=l,i.d(t,"CustomShaderStructure",function(){return o}),i.d(t,"ShaderSpecialParts",function(){return a}),i.d(t,"CustomMaterial",function(){return s}),i.d(t,"ShaderAlebdoParts",function(){return f}),i.d(t,"PBRCustomMaterial",function(){return l})},function(e,t,i){"use strict";i.r(t);var n=i(10);i.d(t,"CellMaterial",function(){return n.CellMaterial});var r=i(17);i.d(t,"CustomShaderStructure",function(){return r.CustomShaderStructure}),i.d(t,"ShaderSpecialParts",function(){return r.ShaderSpecialParts}),i.d(t,"CustomMaterial",function(){return r.CustomMaterial}),i.d(t,"ShaderAlebdoParts",function(){return r.ShaderAlebdoParts}),i.d(t,"PBRCustomMaterial",function(){return r.PBRCustomMaterial});var o=i(5);i.d(t,"FireMaterial",function(){return o.FireMaterial});var a=i(7);i.d(t,"FurMaterial",function(){return a.FurMaterial});var s=i(9);i.d(t,"GradientMaterial",function(){return s.GradientMaterial});var f=i(11);i.d(t,"GridMaterial",function(){return f.GridMaterial});var l=i(13);i.d(t,"LavaMaterial",function(){return l.LavaMaterial});var u=i(15);i.d(t,"MixMaterial",function(){return u.MixMaterial});var c=i(16);i.d(t,"NormalMaterial",function(){return c.NormalMaterial});var d=i(14);i.d(t,"ShadowOnlyMaterial",function(){return d.ShadowOnlyMaterial});var p=i(12);i.d(t,"SimpleMaterial",function(){return p.SimpleMaterial});var h=i(4);i.d(t,"SkyMaterial",function(){return h.SkyMaterial});var v=i(8);i.d(t,"TerrainMaterial",function(){return v.TerrainMaterial});var m=i(6);i.d(t,"TriPlanarMaterial",function(){return m.TriPlanarMaterial});var g=i(3);i.d(t,"WaterMaterial",function(){return g.WaterMaterial})},function(e,t,i){"use strict";i.r(t),function(e){var n=i(18);i.d(t,"CellMaterial",function(){return n.CellMaterial}),i.d(t,"CustomShaderStructure",function(){return n.CustomShaderStructure}),i.d(t,"ShaderSpecialParts",function(){return n.ShaderSpecialParts}),i.d(t,"CustomMaterial",function(){return n.CustomMaterial}),i.d(t,"ShaderAlebdoParts",function(){return n.ShaderAlebdoParts}),i.d(t,"PBRCustomMaterial",function(){return n.PBRCustomMaterial}),i.d(t,"FireMaterial",function(){return n.FireMaterial}),i.d(t,"FurMaterial",function(){return n.FurMaterial}),i.d(t,"GradientMaterial",function(){return n.GradientMaterial}),i.d(t,"GridMaterial",function(){return n.GridMaterial}),i.d(t,"LavaMaterial",function(){return n.LavaMaterial}),i.d(t,"MixMaterial",function(){return n.MixMaterial}),i.d(t,"NormalMaterial",function(){return n.NormalMaterial}),i.d(t,"ShadowOnlyMaterial",function(){return n.ShadowOnlyMaterial}),i.d(t,"SimpleMaterial",function(){return n.SimpleMaterial}),i.d(t,"SkyMaterial",function(){return n.SkyMaterial}),i.d(t,"TerrainMaterial",function(){return n.TerrainMaterial}),i.d(t,"TriPlanarMaterial",function(){return n.TriPlanarMaterial}),i.d(t,"WaterMaterial",function(){return n.WaterMaterial});var r=void 0!==e?e:"undefined"!=typeof window?window:void 0;if(void 0!==r)for(var o in r.BABYLON=r.BABYLON||{},n)r.BABYLON[o]=n[o]}.call(this,i(2))}])});
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"babylonjs":4}],4:[function(require,module,exports){
(function (global){
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("babylonjs",[],t):"object"==typeof exports?exports.babylonjs=t():e.BABYLON=t()}("undefined"!=typeof self?self:"undefined"!=typeof global?global:this,function(){return function(e){var t={};function i(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,i),r.l=!0,r.exports}return i.m=e,i.c=t,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i(i.s=151)}([function(e,t,i){"use strict";i.d(t,"d",function(){return s}),i.d(t,"e",function(){return c}),i.d(t,"f",function(){return l}),i.d(t,"b",function(){return u}),i.d(t,"a",function(){return h}),i.d(t,"c",function(){return f});var n=i(14),r=i(28),o=i(42),a=i(12),s=function(){function e(e,t){void 0===e&&(e=0),void 0===t&&(t=0),this.x=e,this.y=t}return e.prototype.toString=function(){return"{X: "+this.x+" Y:"+this.y+"}"},e.prototype.getClassName=function(){return"Vector2"},e.prototype.getHashCode=function(){var e=0|this.x;return e=397*e^(0|this.y)},e.prototype.toArray=function(e,t){return void 0===t&&(t=0),e[t]=this.x,e[t+1]=this.y,this},e.prototype.asArray=function(){var e=new Array;return this.toArray(e,0),e},e.prototype.copyFrom=function(e){return this.x=e.x,this.y=e.y,this},e.prototype.copyFromFloats=function(e,t){return this.x=e,this.y=t,this},e.prototype.set=function(e,t){return this.copyFromFloats(e,t)},e.prototype.add=function(t){return new e(this.x+t.x,this.y+t.y)},e.prototype.addToRef=function(e,t){return t.x=this.x+e.x,t.y=this.y+e.y,this},e.prototype.addInPlace=function(e){return this.x+=e.x,this.y+=e.y,this},e.prototype.addVector3=function(t){return new e(this.x+t.x,this.y+t.y)},e.prototype.subtract=function(t){return new e(this.x-t.x,this.y-t.y)},e.prototype.subtractToRef=function(e,t){return t.x=this.x-e.x,t.y=this.y-e.y,this},e.prototype.subtractInPlace=function(e){return this.x-=e.x,this.y-=e.y,this},e.prototype.multiplyInPlace=function(e){return this.x*=e.x,this.y*=e.y,this},e.prototype.multiply=function(t){return new e(this.x*t.x,this.y*t.y)},e.prototype.multiplyToRef=function(e,t){return t.x=this.x*e.x,t.y=this.y*e.y,this},e.prototype.multiplyByFloats=function(t,i){return new e(this.x*t,this.y*i)},e.prototype.divide=function(t){return new e(this.x/t.x,this.y/t.y)},e.prototype.divideToRef=function(e,t){return t.x=this.x/e.x,t.y=this.y/e.y,this},e.prototype.divideInPlace=function(e){return this.divideToRef(e,this)},e.prototype.negate=function(){return new e(-this.x,-this.y)},e.prototype.negateInPlace=function(){return this.x*=-1,this.y*=-1,this},e.prototype.negateToRef=function(e){return e.copyFromFloats(-1*this.x,-1*this.y)},e.prototype.scaleInPlace=function(e){return this.x*=e,this.y*=e,this},e.prototype.scale=function(t){var i=new e(0,0);return this.scaleToRef(t,i),i},e.prototype.scaleToRef=function(e,t){return t.x=this.x*e,t.y=this.y*e,this},e.prototype.scaleAndAddToRef=function(e,t){return t.x+=this.x*e,t.y+=this.y*e,this},e.prototype.equals=function(e){return e&&this.x===e.x&&this.y===e.y},e.prototype.equalsWithEpsilon=function(e,t){return void 0===t&&(t=r.a),e&&n.a.WithinEpsilon(this.x,e.x,t)&&n.a.WithinEpsilon(this.y,e.y,t)},e.prototype.floor=function(){return new e(Math.floor(this.x),Math.floor(this.y))},e.prototype.fract=function(){return new e(this.x-Math.floor(this.x),this.y-Math.floor(this.y))},e.prototype.length=function(){return Math.sqrt(this.x*this.x+this.y*this.y)},e.prototype.lengthSquared=function(){return this.x*this.x+this.y*this.y},e.prototype.normalize=function(){var e=this.length();return 0===e?this:(this.x/=e,this.y/=e,this)},e.prototype.clone=function(){return new e(this.x,this.y)},e.Zero=function(){return new e(0,0)},e.One=function(){return new e(1,1)},e.FromArray=function(t,i){return void 0===i&&(i=0),new e(t[i],t[i+1])},e.FromArrayToRef=function(e,t,i){i.x=e[t],i.y=e[t+1]},e.CatmullRom=function(t,i,n,r,o){var a=o*o,s=o*a;return new e(.5*(2*i.x+(-t.x+n.x)*o+(2*t.x-5*i.x+4*n.x-r.x)*a+(-t.x+3*i.x-3*n.x+r.x)*s),.5*(2*i.y+(-t.y+n.y)*o+(2*t.y-5*i.y+4*n.y-r.y)*a+(-t.y+3*i.y-3*n.y+r.y)*s))},e.Clamp=function(t,i,n){var r=t.x;r=(r=r>n.x?n.x:r)<i.x?i.x:r;var o=t.y;return new e(r,o=(o=o>n.y?n.y:o)<i.y?i.y:o)},e.Hermite=function(t,i,n,r,o){var a=o*o,s=o*a,c=2*s-3*a+1,l=-2*s+3*a,u=s-2*a+o,h=s-a;return new e(t.x*c+n.x*l+i.x*u+r.x*h,t.y*c+n.y*l+i.y*u+r.y*h)},e.Lerp=function(t,i,n){return new e(t.x+(i.x-t.x)*n,t.y+(i.y-t.y)*n)},e.Dot=function(e,t){return e.x*t.x+e.y*t.y},e.Normalize=function(e){var t=e.clone();return t.normalize(),t},e.Minimize=function(t,i){return new e(t.x<i.x?t.x:i.x,t.y<i.y?t.y:i.y)},e.Maximize=function(t,i){return new e(t.x>i.x?t.x:i.x,t.y>i.y?t.y:i.y)},e.Transform=function(t,i){var n=e.Zero();return e.TransformToRef(t,i,n),n},e.TransformToRef=function(e,t,i){var n=t.m,r=e.x*n[0]+e.y*n[4]+n[12],o=e.x*n[1]+e.y*n[5]+n[13];i.x=r,i.y=o},e.PointInTriangle=function(e,t,i,n){var r=.5*(-i.y*n.x+t.y*(-i.x+n.x)+t.x*(i.y-n.y)+i.x*n.y),o=r<0?-1:1,a=(t.y*n.x-t.x*n.y+(n.y-t.y)*e.x+(t.x-n.x)*e.y)*o,s=(t.x*i.y-t.y*i.x+(t.y-i.y)*e.x+(i.x-t.x)*e.y)*o;return a>0&&s>0&&a+s<2*r*o},e.Distance=function(t,i){return Math.sqrt(e.DistanceSquared(t,i))},e.DistanceSquared=function(e,t){var i=e.x-t.x,n=e.y-t.y;return i*i+n*n},e.Center=function(e,t){var i=e.add(t);return i.scaleInPlace(.5),i},e.DistanceOfPointFromSegment=function(t,i,n){var r=e.DistanceSquared(i,n);if(0===r)return e.Distance(t,i);var o=n.subtract(i),a=Math.max(0,Math.min(1,e.Dot(t.subtract(i),o)/r)),s=i.add(o.multiplyByFloats(a,a));return e.Distance(t,s)},e}(),c=function(){function e(e,t,i){void 0===e&&(e=0),void 0===t&&(t=0),void 0===i&&(i=0),this.x=e,this.y=t,this.z=i}return e.prototype.toString=function(){return"{X: "+this.x+" Y:"+this.y+" Z:"+this.z+"}"},e.prototype.getClassName=function(){return"Vector3"},e.prototype.getHashCode=function(){var e=0|this.x;return e=397*(e=397*e^(0|this.y))^(0|this.z)},e.prototype.asArray=function(){var e=[];return this.toArray(e,0),e},e.prototype.toArray=function(e,t){return void 0===t&&(t=0),e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,this},e.prototype.toQuaternion=function(){return u.RotationYawPitchRoll(this.y,this.x,this.z)},e.prototype.addInPlace=function(e){return this.addInPlaceFromFloats(e.x,e.y,e.z)},e.prototype.addInPlaceFromFloats=function(e,t,i){return this.x+=e,this.y+=t,this.z+=i,this},e.prototype.add=function(t){return new e(this.x+t.x,this.y+t.y,this.z+t.z)},e.prototype.addToRef=function(e,t){return t.copyFromFloats(this.x+e.x,this.y+e.y,this.z+e.z)},e.prototype.subtractInPlace=function(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this},e.prototype.subtract=function(t){return new e(this.x-t.x,this.y-t.y,this.z-t.z)},e.prototype.subtractToRef=function(e,t){return this.subtractFromFloatsToRef(e.x,e.y,e.z,t)},e.prototype.subtractFromFloats=function(t,i,n){return new e(this.x-t,this.y-i,this.z-n)},e.prototype.subtractFromFloatsToRef=function(e,t,i,n){return n.copyFromFloats(this.x-e,this.y-t,this.z-i)},e.prototype.negate=function(){return new e(-this.x,-this.y,-this.z)},e.prototype.negateInPlace=function(){return this.x*=-1,this.y*=-1,this.z*=-1,this},e.prototype.negateToRef=function(e){return e.copyFromFloats(-1*this.x,-1*this.y,-1*this.z)},e.prototype.scaleInPlace=function(e){return this.x*=e,this.y*=e,this.z*=e,this},e.prototype.scale=function(t){return new e(this.x*t,this.y*t,this.z*t)},e.prototype.scaleToRef=function(e,t){return t.copyFromFloats(this.x*e,this.y*e,this.z*e)},e.prototype.scaleAndAddToRef=function(e,t){return t.addInPlaceFromFloats(this.x*e,this.y*e,this.z*e)},e.prototype.equals=function(e){return e&&this.x===e.x&&this.y===e.y&&this.z===e.z},e.prototype.equalsWithEpsilon=function(e,t){return void 0===t&&(t=r.a),e&&n.a.WithinEpsilon(this.x,e.x,t)&&n.a.WithinEpsilon(this.y,e.y,t)&&n.a.WithinEpsilon(this.z,e.z,t)},e.prototype.equalsToFloats=function(e,t,i){return this.x===e&&this.y===t&&this.z===i},e.prototype.multiplyInPlace=function(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this},e.prototype.multiply=function(e){return this.multiplyByFloats(e.x,e.y,e.z)},e.prototype.multiplyToRef=function(e,t){return t.copyFromFloats(this.x*e.x,this.y*e.y,this.z*e.z)},e.prototype.multiplyByFloats=function(t,i,n){return new e(this.x*t,this.y*i,this.z*n)},e.prototype.divide=function(t){return new e(this.x/t.x,this.y/t.y,this.z/t.z)},e.prototype.divideToRef=function(e,t){return t.copyFromFloats(this.x/e.x,this.y/e.y,this.z/e.z)},e.prototype.divideInPlace=function(e){return this.divideToRef(e,this)},e.prototype.minimizeInPlace=function(e){return this.minimizeInPlaceFromFloats(e.x,e.y,e.z)},e.prototype.maximizeInPlace=function(e){return this.maximizeInPlaceFromFloats(e.x,e.y,e.z)},e.prototype.minimizeInPlaceFromFloats=function(e,t,i){return e<this.x&&(this.x=e),t<this.y&&(this.y=t),i<this.z&&(this.z=i),this},e.prototype.maximizeInPlaceFromFloats=function(e,t,i){return e>this.x&&(this.x=e),t>this.y&&(this.y=t),i>this.z&&(this.z=i),this},e.prototype.isNonUniformWithinEpsilon=function(e){var t=Math.abs(this.x),i=Math.abs(this.y);if(!n.a.WithinEpsilon(t,i,e))return!0;var r=Math.abs(this.z);return!n.a.WithinEpsilon(t,r,e)||!n.a.WithinEpsilon(i,r,e)},Object.defineProperty(e.prototype,"isNonUniform",{get:function(){var e=Math.abs(this.x),t=Math.abs(this.y);if(e!==t)return!0;var i=Math.abs(this.z);return e!==i||t!==i},enumerable:!0,configurable:!0}),e.prototype.floor=function(){return new e(Math.floor(this.x),Math.floor(this.y),Math.floor(this.z))},e.prototype.fract=function(){return new e(this.x-Math.floor(this.x),this.y-Math.floor(this.y),this.z-Math.floor(this.z))},e.prototype.length=function(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)},e.prototype.lengthSquared=function(){return this.x*this.x+this.y*this.y+this.z*this.z},e.prototype.normalize=function(){return this.normalizeFromLength(this.length())},e.prototype.reorderInPlace=function(e){var t=this;return"xyz"===(e=e.toLowerCase())?this:(d.Vector3[0].copyFrom(this),["x","y","z"].forEach(function(i,n){t[i]=d.Vector3[0][e[n]]}),this)},e.prototype.rotateByQuaternionToRef=function(t,i){return t.toRotationMatrix(d.Matrix[0]),e.TransformCoordinatesToRef(this,d.Matrix[0],i),i},e.prototype.rotateByQuaternionAroundPointToRef=function(e,t,i){return this.subtractToRef(t,d.Vector3[0]),d.Vector3[0].rotateByQuaternionToRef(e,d.Vector3[0]),t.addToRef(d.Vector3[0],i),i},e.prototype.cross=function(t){return e.Cross(this,t)},e.prototype.normalizeFromLength=function(e){return 0===e||1===e?this:this.scaleInPlace(1/e)},e.prototype.normalizeToNew=function(){var t=new e(0,0,0);return this.normalizeToRef(t),t},e.prototype.normalizeToRef=function(e){var t=this.length();return 0===t||1===t?e.copyFromFloats(this.x,this.y,this.z):this.scaleToRef(1/t,e)},e.prototype.clone=function(){return new e(this.x,this.y,this.z)},e.prototype.copyFrom=function(e){return this.copyFromFloats(e.x,e.y,e.z)},e.prototype.copyFromFloats=function(e,t,i){return this.x=e,this.y=t,this.z=i,this},e.prototype.set=function(e,t,i){return this.copyFromFloats(e,t,i)},e.prototype.setAll=function(e){return this.x=this.y=this.z=e,this},e.GetClipFactor=function(t,i,n,r){var o=e.Dot(t,n)-r;return o/(o-(e.Dot(i,n)-r))},e.GetAngleBetweenVectors=function(t,i,n){var r=t.normalizeToRef(d.Vector3[1]),o=i.normalizeToRef(d.Vector3[2]),a=e.Dot(r,o),s=d.Vector3[3];return e.CrossToRef(r,o,s),e.Dot(s,n)>0?Math.acos(a):-Math.acos(a)},e.FromArray=function(t,i){return void 0===i&&(i=0),new e(t[i],t[i+1],t[i+2])},e.FromFloatArray=function(t,i){return e.FromArray(t,i)},e.FromArrayToRef=function(e,t,i){i.x=e[t],i.y=e[t+1],i.z=e[t+2]},e.FromFloatArrayToRef=function(t,i,n){return e.FromArrayToRef(t,i,n)},e.FromFloatsToRef=function(e,t,i,n){n.copyFromFloats(e,t,i)},e.Zero=function(){return new e(0,0,0)},e.One=function(){return new e(1,1,1)},e.Up=function(){return new e(0,1,0)},Object.defineProperty(e,"UpReadOnly",{get:function(){return e._UpReadOnly},enumerable:!0,configurable:!0}),Object.defineProperty(e,"ZeroReadOnly",{get:function(){return e._ZeroReadOnly},enumerable:!0,configurable:!0}),e.Down=function(){return new e(0,-1,0)},e.Forward=function(){return new e(0,0,1)},e.Backward=function(){return new e(0,0,-1)},e.Right=function(){return new e(1,0,0)},e.Left=function(){return new e(-1,0,0)},e.TransformCoordinates=function(t,i){var n=e.Zero();return e.TransformCoordinatesToRef(t,i,n),n},e.TransformCoordinatesToRef=function(t,i,n){e.TransformCoordinatesFromFloatsToRef(t.x,t.y,t.z,i,n)},e.TransformCoordinatesFromFloatsToRef=function(e,t,i,n,r){var o=n.m,a=e*o[0]+t*o[4]+i*o[8]+o[12],s=e*o[1]+t*o[5]+i*o[9]+o[13],c=e*o[2]+t*o[6]+i*o[10]+o[14],l=1/(e*o[3]+t*o[7]+i*o[11]+o[15]);r.x=a*l,r.y=s*l,r.z=c*l},e.TransformNormal=function(t,i){var n=e.Zero();return e.TransformNormalToRef(t,i,n),n},e.TransformNormalToRef=function(e,t,i){this.TransformNormalFromFloatsToRef(e.x,e.y,e.z,t,i)},e.TransformNormalFromFloatsToRef=function(e,t,i,n,r){var o=n.m;r.x=e*o[0]+t*o[4]+i*o[8],r.y=e*o[1]+t*o[5]+i*o[9],r.z=e*o[2]+t*o[6]+i*o[10]},e.CatmullRom=function(t,i,n,r,o){var a=o*o,s=o*a;return new e(.5*(2*i.x+(-t.x+n.x)*o+(2*t.x-5*i.x+4*n.x-r.x)*a+(-t.x+3*i.x-3*n.x+r.x)*s),.5*(2*i.y+(-t.y+n.y)*o+(2*t.y-5*i.y+4*n.y-r.y)*a+(-t.y+3*i.y-3*n.y+r.y)*s),.5*(2*i.z+(-t.z+n.z)*o+(2*t.z-5*i.z+4*n.z-r.z)*a+(-t.z+3*i.z-3*n.z+r.z)*s))},e.Clamp=function(t,i,n){var r=new e;return e.ClampToRef(t,i,n,r),r},e.ClampToRef=function(e,t,i,n){var r=e.x;r=(r=r>i.x?i.x:r)<t.x?t.x:r;var o=e.y;o=(o=o>i.y?i.y:o)<t.y?t.y:o;var a=e.z;a=(a=a>i.z?i.z:a)<t.z?t.z:a,n.copyFromFloats(r,o,a)},e.CheckExtends=function(e,t,i){t.minimizeInPlace(e),i.maximizeInPlace(e)},e.Hermite=function(t,i,n,r,o){var a=o*o,s=o*a,c=2*s-3*a+1,l=-2*s+3*a,u=s-2*a+o,h=s-a;return new e(t.x*c+n.x*l+i.x*u+r.x*h,t.y*c+n.y*l+i.y*u+r.y*h,t.z*c+n.z*l+i.z*u+r.z*h)},e.Lerp=function(t,i,n){var r=new e(0,0,0);return e.LerpToRef(t,i,n,r),r},e.LerpToRef=function(e,t,i,n){n.x=e.x+(t.x-e.x)*i,n.y=e.y+(t.y-e.y)*i,n.z=e.z+(t.z-e.z)*i},e.Dot=function(e,t){return e.x*t.x+e.y*t.y+e.z*t.z},e.Cross=function(t,i){var n=e.Zero();return e.CrossToRef(t,i,n),n},e.CrossToRef=function(e,t,i){var n=e.y*t.z-e.z*t.y,r=e.z*t.x-e.x*t.z,o=e.x*t.y-e.y*t.x;i.copyFromFloats(n,r,o)},e.Normalize=function(t){var i=e.Zero();return e.NormalizeToRef(t,i),i},e.NormalizeToRef=function(e,t){e.normalizeToRef(t)},e.Project=function(t,i,n,r){var o=r.width,a=r.height,s=r.x,c=r.y,l=d.Matrix[1];h.FromValuesToRef(o/2,0,0,0,0,-a/2,0,0,0,0,.5,0,s+o/2,a/2+c,.5,1,l);var u=d.Matrix[0];return i.multiplyToRef(n,u),u.multiplyToRef(l,u),e.TransformCoordinates(t,u)},e._UnprojectFromInvertedMatrixToRef=function(t,i,r){e.TransformCoordinatesToRef(t,i,r);var o=i.m,a=t.x*o[3]+t.y*o[7]+t.z*o[11]+o[15];n.a.WithinEpsilon(a,1)&&r.scaleInPlace(1/a)},e.UnprojectFromTransform=function(t,i,n,r,o){var a=d.Matrix[0];r.multiplyToRef(o,a),a.invert(),t.x=t.x/i*2-1,t.y=-(t.y/n*2-1);var s=new e;return e._UnprojectFromInvertedMatrixToRef(t,a,s),s},e.Unproject=function(t,i,n,r,o,a){var s=e.Zero();return e.UnprojectToRef(t,i,n,r,o,a,s),s},e.UnprojectToRef=function(t,i,n,r,o,a,s){e.UnprojectFloatsToRef(t.x,t.y,t.z,i,n,r,o,a,s)},e.UnprojectFloatsToRef=function(t,i,n,r,o,a,s,c,l){var u=d.Matrix[0];a.multiplyToRef(s,u),u.multiplyToRef(c,u),u.invert();var h=d.Vector3[0];h.x=t/r*2-1,h.y=-(i/o*2-1),h.z=2*n-1,e._UnprojectFromInvertedMatrixToRef(h,u,l)},e.Minimize=function(e,t){var i=e.clone();return i.minimizeInPlace(t),i},e.Maximize=function(e,t){var i=e.clone();return i.maximizeInPlace(t),i},e.Distance=function(t,i){return Math.sqrt(e.DistanceSquared(t,i))},e.DistanceSquared=function(e,t){var i=e.x-t.x,n=e.y-t.y,r=e.z-t.z;return i*i+n*n+r*r},e.Center=function(e,t){var i=e.add(t);return i.scaleInPlace(.5),i},e.RotationFromAxis=function(t,i,n){var r=e.Zero();return e.RotationFromAxisToRef(t,i,n,r),r},e.RotationFromAxisToRef=function(e,t,i,n){var r=d.Quaternion[0];u.RotationQuaternionFromAxisToRef(e,t,i,r),r.toEulerAnglesToRef(n)},e._UpReadOnly=e.Up(),e._ZeroReadOnly=e.Zero(),e}(),l=function(){function e(e,t,i,n){this.x=e,this.y=t,this.z=i,this.w=n}return e.prototype.toString=function(){return"{X: "+this.x+" Y:"+this.y+" Z:"+this.z+" W:"+this.w+"}"},e.prototype.getClassName=function(){return"Vector4"},e.prototype.getHashCode=function(){var e=0|this.x;return e=397*(e=397*(e=397*e^(0|this.y))^(0|this.z))^(0|this.w)},e.prototype.asArray=function(){var e=new Array;return this.toArray(e,0),e},e.prototype.toArray=function(e,t){return void 0===t&&(t=0),e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,this},e.prototype.addInPlace=function(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this},e.prototype.add=function(t){return new e(this.x+t.x,this.y+t.y,this.z+t.z,this.w+t.w)},e.prototype.addToRef=function(e,t){return t.x=this.x+e.x,t.y=this.y+e.y,t.z=this.z+e.z,t.w=this.w+e.w,this},e.prototype.subtractInPlace=function(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this},e.prototype.subtract=function(t){return new e(this.x-t.x,this.y-t.y,this.z-t.z,this.w-t.w)},e.prototype.subtractToRef=function(e,t){return t.x=this.x-e.x,t.y=this.y-e.y,t.z=this.z-e.z,t.w=this.w-e.w,this},e.prototype.subtractFromFloats=function(t,i,n,r){return new e(this.x-t,this.y-i,this.z-n,this.w-r)},e.prototype.subtractFromFloatsToRef=function(e,t,i,n,r){return r.x=this.x-e,r.y=this.y-t,r.z=this.z-i,r.w=this.w-n,this},e.prototype.negate=function(){return new e(-this.x,-this.y,-this.z,-this.w)},e.prototype.negateInPlace=function(){return this.x*=-1,this.y*=-1,this.z*=-1,this.w*=-1,this},e.prototype.negateToRef=function(e){return e.copyFromFloats(-1*this.x,-1*this.y,-1*this.z,-1*this.w)},e.prototype.scaleInPlace=function(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this},e.prototype.scale=function(t){return new e(this.x*t,this.y*t,this.z*t,this.w*t)},e.prototype.scaleToRef=function(e,t){return t.x=this.x*e,t.y=this.y*e,t.z=this.z*e,t.w=this.w*e,this},e.prototype.scaleAndAddToRef=function(e,t){return t.x+=this.x*e,t.y+=this.y*e,t.z+=this.z*e,t.w+=this.w*e,this},e.prototype.equals=function(e){return e&&this.x===e.x&&this.y===e.y&&this.z===e.z&&this.w===e.w},e.prototype.equalsWithEpsilon=function(e,t){return void 0===t&&(t=r.a),e&&n.a.WithinEpsilon(this.x,e.x,t)&&n.a.WithinEpsilon(this.y,e.y,t)&&n.a.WithinEpsilon(this.z,e.z,t)&&n.a.WithinEpsilon(this.w,e.w,t)},e.prototype.equalsToFloats=function(e,t,i,n){return this.x===e&&this.y===t&&this.z===i&&this.w===n},e.prototype.multiplyInPlace=function(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this},e.prototype.multiply=function(t){return new e(this.x*t.x,this.y*t.y,this.z*t.z,this.w*t.w)},e.prototype.multiplyToRef=function(e,t){return t.x=this.x*e.x,t.y=this.y*e.y,t.z=this.z*e.z,t.w=this.w*e.w,this},e.prototype.multiplyByFloats=function(t,i,n,r){return new e(this.x*t,this.y*i,this.z*n,this.w*r)},e.prototype.divide=function(t){return new e(this.x/t.x,this.y/t.y,this.z/t.z,this.w/t.w)},e.prototype.divideToRef=function(e,t){return t.x=this.x/e.x,t.y=this.y/e.y,t.z=this.z/e.z,t.w=this.w/e.w,this},e.prototype.divideInPlace=function(e){return this.divideToRef(e,this)},e.prototype.minimizeInPlace=function(e){return e.x<this.x&&(this.x=e.x),e.y<this.y&&(this.y=e.y),e.z<this.z&&(this.z=e.z),e.w<this.w&&(this.w=e.w),this},e.prototype.maximizeInPlace=function(e){return e.x>this.x&&(this.x=e.x),e.y>this.y&&(this.y=e.y),e.z>this.z&&(this.z=e.z),e.w>this.w&&(this.w=e.w),this},e.prototype.floor=function(){return new e(Math.floor(this.x),Math.floor(this.y),Math.floor(this.z),Math.floor(this.w))},e.prototype.fract=function(){return new e(this.x-Math.floor(this.x),this.y-Math.floor(this.y),this.z-Math.floor(this.z),this.w-Math.floor(this.w))},e.prototype.length=function(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)},e.prototype.lengthSquared=function(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w},e.prototype.normalize=function(){var e=this.length();return 0===e?this:this.scaleInPlace(1/e)},e.prototype.toVector3=function(){return new c(this.x,this.y,this.z)},e.prototype.clone=function(){return new e(this.x,this.y,this.z,this.w)},e.prototype.copyFrom=function(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w,this},e.prototype.copyFromFloats=function(e,t,i,n){return this.x=e,this.y=t,this.z=i,this.w=n,this},e.prototype.set=function(e,t,i,n){return this.copyFromFloats(e,t,i,n)},e.prototype.setAll=function(e){return this.x=this.y=this.z=this.w=e,this},e.FromArray=function(t,i){return i||(i=0),new e(t[i],t[i+1],t[i+2],t[i+3])},e.FromArrayToRef=function(e,t,i){i.x=e[t],i.y=e[t+1],i.z=e[t+2],i.w=e[t+3]},e.FromFloatArrayToRef=function(t,i,n){e.FromArrayToRef(t,i,n)},e.FromFloatsToRef=function(e,t,i,n,r){r.x=e,r.y=t,r.z=i,r.w=n},e.Zero=function(){return new e(0,0,0,0)},e.One=function(){return new e(1,1,1,1)},e.Normalize=function(t){var i=e.Zero();return e.NormalizeToRef(t,i),i},e.NormalizeToRef=function(e,t){t.copyFrom(e),t.normalize()},e.Minimize=function(e,t){var i=e.clone();return i.minimizeInPlace(t),i},e.Maximize=function(e,t){var i=e.clone();return i.maximizeInPlace(t),i},e.Distance=function(t,i){return Math.sqrt(e.DistanceSquared(t,i))},e.DistanceSquared=function(e,t){var i=e.x-t.x,n=e.y-t.y,r=e.z-t.z,o=e.w-t.w;return i*i+n*n+r*r+o*o},e.Center=function(e,t){var i=e.add(t);return i.scaleInPlace(.5),i},e.TransformNormal=function(t,i){var n=e.Zero();return e.TransformNormalToRef(t,i,n),n},e.TransformNormalToRef=function(e,t,i){var n=t.m,r=e.x*n[0]+e.y*n[4]+e.z*n[8],o=e.x*n[1]+e.y*n[5]+e.z*n[9],a=e.x*n[2]+e.y*n[6]+e.z*n[10];i.x=r,i.y=o,i.z=a,i.w=e.w},e.TransformNormalFromFloatsToRef=function(e,t,i,n,r,o){var a=r.m;o.x=e*a[0]+t*a[4]+i*a[8],o.y=e*a[1]+t*a[5]+i*a[9],o.z=e*a[2]+t*a[6]+i*a[10],o.w=n},e.FromVector3=function(t,i){return void 0===i&&(i=0),new e(t.x,t.y,t.z,i)},e}(),u=function(){function e(e,t,i,n){void 0===e&&(e=0),void 0===t&&(t=0),void 0===i&&(i=0),void 0===n&&(n=1),this.x=e,this.y=t,this.z=i,this.w=n}return e.prototype.toString=function(){return"{X: "+this.x+" Y:"+this.y+" Z:"+this.z+" W:"+this.w+"}"},e.prototype.getClassName=function(){return"Quaternion"},e.prototype.getHashCode=function(){var e=0|this.x;return e=397*(e=397*(e=397*e^(0|this.y))^(0|this.z))^(0|this.w)},e.prototype.asArray=function(){return[this.x,this.y,this.z,this.w]},e.prototype.equals=function(e){return e&&this.x===e.x&&this.y===e.y&&this.z===e.z&&this.w===e.w},e.prototype.equalsWithEpsilon=function(e,t){return void 0===t&&(t=r.a),e&&n.a.WithinEpsilon(this.x,e.x,t)&&n.a.WithinEpsilon(this.y,e.y,t)&&n.a.WithinEpsilon(this.z,e.z,t)&&n.a.WithinEpsilon(this.w,e.w,t)},e.prototype.clone=function(){return new e(this.x,this.y,this.z,this.w)},e.prototype.copyFrom=function(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w,this},e.prototype.copyFromFloats=function(e,t,i,n){return this.x=e,this.y=t,this.z=i,this.w=n,this},e.prototype.set=function(e,t,i,n){return this.copyFromFloats(e,t,i,n)},e.prototype.add=function(t){return new e(this.x+t.x,this.y+t.y,this.z+t.z,this.w+t.w)},e.prototype.addInPlace=function(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this},e.prototype.subtract=function(t){return new e(this.x-t.x,this.y-t.y,this.z-t.z,this.w-t.w)},e.prototype.scale=function(t){return new e(this.x*t,this.y*t,this.z*t,this.w*t)},e.prototype.scaleToRef=function(e,t){return t.x=this.x*e,t.y=this.y*e,t.z=this.z*e,t.w=this.w*e,this},e.prototype.scaleInPlace=function(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this},e.prototype.scaleAndAddToRef=function(e,t){return t.x+=this.x*e,t.y+=this.y*e,t.z+=this.z*e,t.w+=this.w*e,this},e.prototype.multiply=function(t){var i=new e(0,0,0,1);return this.multiplyToRef(t,i),i},e.prototype.multiplyToRef=function(e,t){var i=this.x*e.w+this.y*e.z-this.z*e.y+this.w*e.x,n=-this.x*e.z+this.y*e.w+this.z*e.x+this.w*e.y,r=this.x*e.y-this.y*e.x+this.z*e.w+this.w*e.z,o=-this.x*e.x-this.y*e.y-this.z*e.z+this.w*e.w;return t.copyFromFloats(i,n,r,o),this},e.prototype.multiplyInPlace=function(e){return this.multiplyToRef(e,this),this},e.prototype.conjugateToRef=function(e){return e.copyFromFloats(-this.x,-this.y,-this.z,this.w),this},e.prototype.conjugateInPlace=function(){return this.x*=-1,this.y*=-1,this.z*=-1,this},e.prototype.conjugate=function(){return new e(-this.x,-this.y,-this.z,this.w)},e.prototype.length=function(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)},e.prototype.normalize=function(){var e=this.length();if(0===e)return this;var t=1/e;return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this},e.prototype.toEulerAngles=function(e){void 0===e&&(e="YZX");var t=c.Zero();return this.toEulerAnglesToRef(t),t},e.prototype.toEulerAnglesToRef=function(e){var t=this.z,i=this.x,n=this.y,r=this.w,o=r*r,a=t*t,s=i*i,c=n*n,l=n*t-i*r;return l<-.4999999?(e.y=2*Math.atan2(n,r),e.x=Math.PI/2,e.z=0):l>.4999999?(e.y=2*Math.atan2(n,r),e.x=-Math.PI/2,e.z=0):(e.z=Math.atan2(2*(i*n+t*r),-a-s+c+o),e.x=Math.asin(-2*(t*n-i*r)),e.y=Math.atan2(2*(t*i+n*r),a-s-c+o)),this},e.prototype.toRotationMatrix=function(e){return h.FromQuaternionToRef(this,e),this},e.prototype.fromRotationMatrix=function(t){return e.FromRotationMatrixToRef(t,this),this},e.FromRotationMatrix=function(t){var i=new e;return e.FromRotationMatrixToRef(t,i),i},e.FromRotationMatrixToRef=function(e,t){var i,n=e.m,r=n[0],o=n[4],a=n[8],s=n[1],c=n[5],l=n[9],u=n[2],h=n[6],d=n[10],f=r+c+d;f>0?(i=.5/Math.sqrt(f+1),t.w=.25/i,t.x=(h-l)*i,t.y=(a-u)*i,t.z=(s-o)*i):r>c&&r>d?(i=2*Math.sqrt(1+r-c-d),t.w=(h-l)/i,t.x=.25*i,t.y=(o+s)/i,t.z=(a+u)/i):c>d?(i=2*Math.sqrt(1+c-r-d),t.w=(a-u)/i,t.x=(o+s)/i,t.y=.25*i,t.z=(l+h)/i):(i=2*Math.sqrt(1+d-r-c),t.w=(s-o)/i,t.x=(a+u)/i,t.y=(l+h)/i,t.z=.25*i)},e.Dot=function(e,t){return e.x*t.x+e.y*t.y+e.z*t.z+e.w*t.w},e.AreClose=function(t,i){return e.Dot(t,i)>=0},e.Zero=function(){return new e(0,0,0,0)},e.Inverse=function(t){return new e(-t.x,-t.y,-t.z,t.w)},e.InverseToRef=function(e,t){return t.set(-e.x,-e.y,-e.z,e.w),t},e.Identity=function(){return new e(0,0,0,1)},e.IsIdentity=function(e){return e&&0===e.x&&0===e.y&&0===e.z&&1===e.w},e.RotationAxis=function(t,i){return e.RotationAxisToRef(t,i,new e)},e.RotationAxisToRef=function(e,t,i){var n=Math.sin(t/2);return e.normalize(),i.w=Math.cos(t/2),i.x=e.x*n,i.y=e.y*n,i.z=e.z*n,i},e.FromArray=function(t,i){return i||(i=0),new e(t[i],t[i+1],t[i+2],t[i+3])},e.FromEulerAngles=function(t,i,n){var r=new e;return e.RotationYawPitchRollToRef(i,t,n,r),r},e.FromEulerAnglesToRef=function(t,i,n,r){return e.RotationYawPitchRollToRef(i,t,n,r),r},e.FromEulerVector=function(t){var i=new e;return e.RotationYawPitchRollToRef(t.y,t.x,t.z,i),i},e.FromEulerVectorToRef=function(t,i){return e.RotationYawPitchRollToRef(t.y,t.x,t.z,i),i},e.RotationYawPitchRoll=function(t,i,n){var r=new e;return e.RotationYawPitchRollToRef(t,i,n,r),r},e.RotationYawPitchRollToRef=function(e,t,i,n){var r=.5*i,o=.5*t,a=.5*e,s=Math.sin(r),c=Math.cos(r),l=Math.sin(o),u=Math.cos(o),h=Math.sin(a),d=Math.cos(a);n.x=d*l*c+h*u*s,n.y=h*u*c-d*l*s,n.z=d*u*s-h*l*c,n.w=d*u*c+h*l*s},e.RotationAlphaBetaGamma=function(t,i,n){var r=new e;return e.RotationAlphaBetaGammaToRef(t,i,n,r),r},e.RotationAlphaBetaGammaToRef=function(e,t,i,n){var r=.5*(i+e),o=.5*(i-e),a=.5*t;n.x=Math.cos(o)*Math.sin(a),n.y=Math.sin(o)*Math.sin(a),n.z=Math.sin(r)*Math.cos(a),n.w=Math.cos(r)*Math.cos(a)},e.RotationQuaternionFromAxis=function(t,i,n){var r=new e(0,0,0,0);return e.RotationQuaternionFromAxisToRef(t,i,n,r),r},e.RotationQuaternionFromAxisToRef=function(t,i,n,r){var o=d.Matrix[0];h.FromXYZAxesToRef(t.normalize(),i.normalize(),n.normalize(),o),e.FromRotationMatrixToRef(o,r)},e.Slerp=function(t,i,n){var r=e.Identity();return e.SlerpToRef(t,i,n,r),r},e.SlerpToRef=function(e,t,i,n){var r,o,a=e.x*t.x+e.y*t.y+e.z*t.z+e.w*t.w,s=!1;if(a<0&&(s=!0,a=-a),a>.999999)o=1-i,r=s?-i:i;else{var c=Math.acos(a),l=1/Math.sin(c);o=Math.sin((1-i)*c)*l,r=s?-Math.sin(i*c)*l:Math.sin(i*c)*l}n.x=o*e.x+r*t.x,n.y=o*e.y+r*t.y,n.z=o*e.z+r*t.z,n.w=o*e.w+r*t.w},e.Hermite=function(t,i,n,r,o){var a=o*o,s=o*a,c=2*s-3*a+1,l=-2*s+3*a,u=s-2*a+o,h=s-a;return new e(t.x*c+n.x*l+i.x*u+r.x*h,t.y*c+n.y*l+i.y*u+r.y*h,t.z*c+n.z*l+i.z*u+r.z*h,t.w*c+n.w*l+i.w*u+r.w*h)},e}(),h=function(){function e(){this._isIdentity=!1,this._isIdentityDirty=!0,this._isIdentity3x2=!0,this._isIdentity3x2Dirty=!0,this.updateFlag=-1,this._m=new Float32Array(16),this._updateIdentityStatus(!1)}return Object.defineProperty(e.prototype,"m",{get:function(){return this._m},enumerable:!0,configurable:!0}),e.prototype._markAsUpdated=function(){this.updateFlag=e._updateFlagSeed++,this._isIdentity=!1,this._isIdentity3x2=!1,this._isIdentityDirty=!0,this._isIdentity3x2Dirty=!0},e.prototype._updateIdentityStatus=function(t,i,n,r){void 0===i&&(i=!1),void 0===n&&(n=!1),void 0===r&&(r=!0),this.updateFlag=e._updateFlagSeed++,this._isIdentity=t,this._isIdentity3x2=t||n,this._isIdentityDirty=!this._isIdentity&&i,this._isIdentity3x2Dirty=!this._isIdentity3x2&&r},e.prototype.isIdentity=function(){if(this._isIdentityDirty){this._isIdentityDirty=!1;var e=this._m;this._isIdentity=1===e[0]&&0===e[1]&&0===e[2]&&0===e[3]&&0===e[4]&&1===e[5]&&0===e[6]&&0===e[7]&&0===e[8]&&0===e[9]&&1===e[10]&&0===e[11]&&0===e[12]&&0===e[13]&&0===e[14]&&1===e[15]}return this._isIdentity},e.prototype.isIdentityAs3x2=function(){return this._isIdentity3x2Dirty&&(this._isIdentity3x2Dirty=!1,1!==this._m[0]||1!==this._m[5]||1!==this._m[15]?this._isIdentity3x2=!1:0!==this._m[1]||0!==this._m[2]||0!==this._m[3]||0!==this._m[4]||0!==this._m[6]||0!==this._m[7]||0!==this._m[8]||0!==this._m[9]||0!==this._m[10]||0!==this._m[11]||0!==this._m[12]||0!==this._m[13]||0!==this._m[14]?this._isIdentity3x2=!1:this._isIdentity3x2=!0),this._isIdentity3x2},e.prototype.determinant=function(){if(!0===this._isIdentity)return 1;var e=this._m,t=e[0],i=e[1],n=e[2],r=e[3],o=e[4],a=e[5],s=e[6],c=e[7],l=e[8],u=e[9],h=e[10],d=e[11],f=e[12],p=e[13],_=e[14],m=e[15],g=h*m-_*d,v=u*m-p*d,y=u*_-p*h,b=l*m-f*d,T=l*_-h*f,E=l*p-f*u;return t*+(a*g-s*v+c*y)+i*-(o*g-s*b+c*T)+n*+(o*v-a*b+c*E)+r*-(o*y-a*T+s*E)},e.prototype.toArray=function(){return this._m},e.prototype.asArray=function(){return this._m},e.prototype.invert=function(){return this.invertToRef(this),this},e.prototype.reset=function(){return e.FromValuesToRef(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,this),this._updateIdentityStatus(!1),this},e.prototype.add=function(t){var i=new e;return this.addToRef(t,i),i},e.prototype.addToRef=function(e,t){for(var i=this._m,n=t._m,r=e.m,o=0;o<16;o++)n[o]=i[o]+r[o];return t._markAsUpdated(),this},e.prototype.addToSelf=function(e){for(var t=this._m,i=e.m,n=0;n<16;n++)t[n]+=i[n];return this._markAsUpdated(),this},e.prototype.invertToRef=function(t){if(!0===this._isIdentity)return e.IdentityToRef(t),this;var i=this._m,n=i[0],r=i[1],o=i[2],a=i[3],s=i[4],c=i[5],l=i[6],u=i[7],h=i[8],d=i[9],f=i[10],p=i[11],_=i[12],m=i[13],g=i[14],v=i[15],y=f*v-g*p,b=d*v-m*p,T=d*g-m*f,E=h*v-_*p,x=h*g-f*_,P=h*m-_*d,A=+(c*y-l*b+u*T),S=-(s*y-l*E+u*x),C=+(s*b-c*E+u*P),R=-(s*T-c*x+l*P),O=n*A+r*S+o*C+a*R;if(0===O)return t.copyFrom(this),this;var M=1/O,I=l*v-g*u,D=c*v-m*u,w=c*g-m*l,L=s*v-_*u,N=s*g-_*l,F=s*m-_*c,B=l*p-f*u,U=c*p-d*u,V=c*f-d*l,k=s*p-h*u,z=s*f-h*l,G=s*d-h*c,j=-(r*y-o*b+a*T),W=+(n*y-o*E+a*x),X=-(n*b-r*E+a*P),H=+(n*T-r*x+o*P),Y=+(r*I-o*D+a*w),K=-(n*I-o*L+a*N),Q=+(n*D-r*L+a*F),q=-(n*w-r*N+o*F),Z=-(r*B-o*U+a*V),J=+(n*B-o*k+a*z),$=-(n*U-r*k+a*G),ee=+(n*V-r*z+o*G);return e.FromValuesToRef(A*M,j*M,Y*M,Z*M,S*M,W*M,K*M,J*M,C*M,X*M,Q*M,$*M,R*M,H*M,q*M,ee*M,t),this},e.prototype.addAtIndex=function(e,t){return this._m[e]+=t,this._markAsUpdated(),this},e.prototype.multiplyAtIndex=function(e,t){return this._m[e]*=t,this._markAsUpdated(),this},e.prototype.setTranslationFromFloats=function(e,t,i){return this._m[12]=e,this._m[13]=t,this._m[14]=i,this._markAsUpdated(),this},e.prototype.addTranslationFromFloats=function(e,t,i){return this._m[12]+=e,this._m[13]+=t,this._m[14]+=i,this._markAsUpdated(),this},e.prototype.setTranslation=function(e){return this.setTranslationFromFloats(e.x,e.y,e.z)},e.prototype.getTranslation=function(){return new c(this._m[12],this._m[13],this._m[14])},e.prototype.getTranslationToRef=function(e){return e.x=this._m[12],e.y=this._m[13],e.z=this._m[14],this},e.prototype.removeRotationAndScaling=function(){var t=this.m;return e.FromValuesToRef(1,0,0,0,0,1,0,0,0,0,1,0,t[12],t[13],t[14],t[15],this),this._updateIdentityStatus(0===t[12]&&0===t[13]&&0===t[14]&&1===t[15]),this},e.prototype.multiply=function(t){var i=new e;return this.multiplyToRef(t,i),i},e.prototype.copyFrom=function(e){e.copyToArray(this._m);var t=e;return this._updateIdentityStatus(t._isIdentity,t._isIdentityDirty,t._isIdentity3x2,t._isIdentity3x2Dirty),this},e.prototype.copyToArray=function(e,t){void 0===t&&(t=0);var i=this._m;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],this},e.prototype.multiplyToRef=function(e,t){return this._isIdentity?(t.copyFrom(e),this):e._isIdentity?(t.copyFrom(this),this):(this.multiplyToArray(e,t._m,0),t._markAsUpdated(),this)},e.prototype.multiplyToArray=function(e,t,i){var n=this._m,r=e.m,o=n[0],a=n[1],s=n[2],c=n[3],l=n[4],u=n[5],h=n[6],d=n[7],f=n[8],p=n[9],_=n[10],m=n[11],g=n[12],v=n[13],y=n[14],b=n[15],T=r[0],E=r[1],x=r[2],P=r[3],A=r[4],S=r[5],C=r[6],R=r[7],O=r[8],M=r[9],I=r[10],D=r[11],w=r[12],L=r[13],N=r[14],F=r[15];return t[i]=o*T+a*A+s*O+c*w,t[i+1]=o*E+a*S+s*M+c*L,t[i+2]=o*x+a*C+s*I+c*N,t[i+3]=o*P+a*R+s*D+c*F,t[i+4]=l*T+u*A+h*O+d*w,t[i+5]=l*E+u*S+h*M+d*L,t[i+6]=l*x+u*C+h*I+d*N,t[i+7]=l*P+u*R+h*D+d*F,t[i+8]=f*T+p*A+_*O+m*w,t[i+9]=f*E+p*S+_*M+m*L,t[i+10]=f*x+p*C+_*I+m*N,t[i+11]=f*P+p*R+_*D+m*F,t[i+12]=g*T+v*A+y*O+b*w,t[i+13]=g*E+v*S+y*M+b*L,t[i+14]=g*x+v*C+y*I+b*N,t[i+15]=g*P+v*R+y*D+b*F,this},e.prototype.equals=function(e){var t=e;if(!t)return!1;if((this._isIdentity||t._isIdentity)&&!this._isIdentityDirty&&!t._isIdentityDirty)return this._isIdentity&&t._isIdentity;var i=this.m,n=t.m;return i[0]===n[0]&&i[1]===n[1]&&i[2]===n[2]&&i[3]===n[3]&&i[4]===n[4]&&i[5]===n[5]&&i[6]===n[6]&&i[7]===n[7]&&i[8]===n[8]&&i[9]===n[9]&&i[10]===n[10]&&i[11]===n[11]&&i[12]===n[12]&&i[13]===n[13]&&i[14]===n[14]&&i[15]===n[15]},e.prototype.clone=function(){var t=new e;return t.copyFrom(this),t},e.prototype.getClassName=function(){return"Matrix"},e.prototype.getHashCode=function(){for(var e=0|this._m[0],t=1;t<16;t++)e=397*e^(0|this._m[t]);return e},e.prototype.decompose=function(t,i,n){if(this._isIdentity)return n&&n.setAll(0),t&&t.setAll(1),i&&i.copyFromFloats(0,0,0,1),!0;var r=this._m;if(n&&n.copyFromFloats(r[12],r[13],r[14]),(t=t||d.Vector3[0]).x=Math.sqrt(r[0]*r[0]+r[1]*r[1]+r[2]*r[2]),t.y=Math.sqrt(r[4]*r[4]+r[5]*r[5]+r[6]*r[6]),t.z=Math.sqrt(r[8]*r[8]+r[9]*r[9]+r[10]*r[10]),this.determinant()<=0&&(t.y*=-1),0===t.x||0===t.y||0===t.z)return i&&i.copyFromFloats(0,0,0,1),!1;if(i){var o=1/t.x,a=1/t.y,s=1/t.z;e.FromValuesToRef(r[0]*o,r[1]*o,r[2]*o,0,r[4]*a,r[5]*a,r[6]*a,0,r[8]*s,r[9]*s,r[10]*s,0,0,0,0,1,d.Matrix[0]),u.FromRotationMatrixToRef(d.Matrix[0],i)}return!0},e.prototype.getRow=function(e){if(e<0||e>3)return null;var t=4*e;return new l(this._m[t+0],this._m[t+1],this._m[t+2],this._m[t+3])},e.prototype.setRow=function(e,t){return this.setRowFromFloats(e,t.x,t.y,t.z,t.w)},e.prototype.transpose=function(){return e.Transpose(this)},e.prototype.transposeToRef=function(t){return e.TransposeToRef(this,t),this},e.prototype.setRowFromFloats=function(e,t,i,n,r){if(e<0||e>3)return this;var o=4*e;return this._m[o+0]=t,this._m[o+1]=i,this._m[o+2]=n,this._m[o+3]=r,this._markAsUpdated(),this},e.prototype.scale=function(t){var i=new e;return this.scaleToRef(t,i),i},e.prototype.scaleToRef=function(e,t){for(var i=0;i<16;i++)t._m[i]=this._m[i]*e;return t._markAsUpdated(),this},e.prototype.scaleAndAddToRef=function(e,t){for(var i=0;i<16;i++)t._m[i]+=this._m[i]*e;return t._markAsUpdated(),this},e.prototype.toNormalMatrix=function(t){var i=d.Matrix[0];this.invertToRef(i),i.transposeToRef(t);var n=t._m;e.FromValuesToRef(n[0],n[1],n[2],0,n[4],n[5],n[6],0,n[8],n[9],n[10],0,0,0,0,1,t)},e.prototype.getRotationMatrix=function(){var t=new e;return this.getRotationMatrixToRef(t),t},e.prototype.getRotationMatrixToRef=function(t){var i=d.Vector3[0];if(!this.decompose(i))return e.IdentityToRef(t),this;var n=this._m,r=1/i.x,o=1/i.y,a=1/i.z;return e.FromValuesToRef(n[0]*r,n[1]*r,n[2]*r,0,n[4]*o,n[5]*o,n[6]*o,0,n[8]*a,n[9]*a,n[10]*a,0,0,0,0,1,t),this},e.prototype.toggleModelMatrixHandInPlace=function(){var e=this._m;e[2]*=-1,e[6]*=-1,e[8]*=-1,e[9]*=-1,e[14]*=-1,this._markAsUpdated()},e.prototype.toggleProjectionMatrixHandInPlace=function(){var e=this._m;e[8]*=-1,e[9]*=-1,e[10]*=-1,e[11]*=-1,this._markAsUpdated()},e.FromArray=function(t,i){void 0===i&&(i=0);var n=new e;return e.FromArrayToRef(t,i,n),n},e.FromArrayToRef=function(e,t,i){for(var n=0;n<16;n++)i._m[n]=e[n+t];i._markAsUpdated()},e.FromFloat32ArrayToRefScaled=function(e,t,i,n){for(var r=0;r<16;r++)n._m[r]=e[r+t]*i;n._markAsUpdated()},Object.defineProperty(e,"IdentityReadOnly",{get:function(){return e._identityReadOnly},enumerable:!0,configurable:!0}),e.FromValuesToRef=function(e,t,i,n,r,o,a,s,c,l,u,h,d,f,p,_,m){var g=m._m;g[0]=e,g[1]=t,g[2]=i,g[3]=n,g[4]=r,g[5]=o,g[6]=a,g[7]=s,g[8]=c,g[9]=l,g[10]=u,g[11]=h,g[12]=d,g[13]=f,g[14]=p,g[15]=_,m._markAsUpdated()},e.FromValues=function(t,i,n,r,o,a,s,c,l,u,h,d,f,p,_,m){var g=new e,v=g._m;return v[0]=t,v[1]=i,v[2]=n,v[3]=r,v[4]=o,v[5]=a,v[6]=s,v[7]=c,v[8]=l,v[9]=u,v[10]=h,v[11]=d,v[12]=f,v[13]=p,v[14]=_,v[15]=m,g._markAsUpdated(),g},e.Compose=function(t,i,n){var r=new e;return e.ComposeToRef(t,i,n,r),r},e.ComposeToRef=function(e,t,i,n){var r=n._m,o=t.x,a=t.y,s=t.z,c=t.w,l=o+o,u=a+a,h=s+s,d=o*l,f=o*u,p=o*h,_=a*u,m=a*h,g=s*h,v=c*l,y=c*u,b=c*h,T=e.x,E=e.y,x=e.z;r[0]=(1-(_+g))*T,r[1]=(f+b)*T,r[2]=(p-y)*T,r[3]=0,r[4]=(f-b)*E,r[5]=(1-(d+g))*E,r[6]=(m+v)*E,r[7]=0,r[8]=(p+y)*x,r[9]=(m-v)*x,r[10]=(1-(d+_))*x,r[11]=0,r[12]=i.x,r[13]=i.y,r[14]=i.z,r[15]=1,n._markAsUpdated()},e.Identity=function(){var t=e.FromValues(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1);return t._updateIdentityStatus(!0),t},e.IdentityToRef=function(t){e.FromValuesToRef(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1,t),t._updateIdentityStatus(!0)},e.Zero=function(){var t=e.FromValues(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);return t._updateIdentityStatus(!1),t},e.RotationX=function(t){var i=new e;return e.RotationXToRef(t,i),i},e.Invert=function(t){var i=new e;return t.invertToRef(i),i},e.RotationXToRef=function(t,i){var n=Math.sin(t),r=Math.cos(t);e.FromValuesToRef(1,0,0,0,0,r,n,0,0,-n,r,0,0,0,0,1,i),i._updateIdentityStatus(1===r&&0===n)},e.RotationY=function(t){var i=new e;return e.RotationYToRef(t,i),i},e.RotationYToRef=function(t,i){var n=Math.sin(t),r=Math.cos(t);e.FromValuesToRef(r,0,-n,0,0,1,0,0,n,0,r,0,0,0,0,1,i),i._updateIdentityStatus(1===r&&0===n)},e.RotationZ=function(t){var i=new e;return e.RotationZToRef(t,i),i},e.RotationZToRef=function(t,i){var n=Math.sin(t),r=Math.cos(t);e.FromValuesToRef(r,n,0,0,-n,r,0,0,0,0,1,0,0,0,0,1,i),i._updateIdentityStatus(1===r&&0===n)},e.RotationAxis=function(t,i){var n=new e;return e.RotationAxisToRef(t,i,n),n},e.RotationAxisToRef=function(e,t,i){var n=Math.sin(-t),r=Math.cos(-t),o=1-r;e.normalize();var a=i._m;a[0]=e.x*e.x*o+r,a[1]=e.x*e.y*o-e.z*n,a[2]=e.x*e.z*o+e.y*n,a[3]=0,a[4]=e.y*e.x*o+e.z*n,a[5]=e.y*e.y*o+r,a[6]=e.y*e.z*o-e.x*n,a[7]=0,a[8]=e.z*e.x*o-e.y*n,a[9]=e.z*e.y*o+e.x*n,a[10]=e.z*e.z*o+r,a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,i._markAsUpdated()},e.RotationAlignToRef=function(e,t,i){var n=c.Cross(t,e),r=c.Dot(t,e),o=1/(1+r),a=i._m;a[0]=n.x*n.x*o+r,a[1]=n.y*n.x*o-n.z,a[2]=n.z*n.x*o+n.y,a[3]=0,a[4]=n.x*n.y*o+n.z,a[5]=n.y*n.y*o+r,a[6]=n.z*n.y*o-n.x,a[7]=0,a[8]=n.x*n.z*o-n.y,a[9]=n.y*n.z*o+n.x,a[10]=n.z*n.z*o+r,a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,i._markAsUpdated()},e.RotationYawPitchRoll=function(t,i,n){var r=new e;return e.RotationYawPitchRollToRef(t,i,n,r),r},e.RotationYawPitchRollToRef=function(e,t,i,n){u.RotationYawPitchRollToRef(e,t,i,d.Quaternion[0]),d.Quaternion[0].toRotationMatrix(n)},e.Scaling=function(t,i,n){var r=new e;return e.ScalingToRef(t,i,n,r),r},e.ScalingToRef=function(t,i,n,r){e.FromValuesToRef(t,0,0,0,0,i,0,0,0,0,n,0,0,0,0,1,r),r._updateIdentityStatus(1===t&&1===i&&1===n)},e.Translation=function(t,i,n){var r=new e;return e.TranslationToRef(t,i,n,r),r},e.TranslationToRef=function(t,i,n,r){e.FromValuesToRef(1,0,0,0,0,1,0,0,0,0,1,0,t,i,n,1,r),r._updateIdentityStatus(0===t&&0===i&&0===n)},e.Lerp=function(t,i,n){var r=new e;return e.LerpToRef(t,i,n,r),r},e.LerpToRef=function(e,t,i,n){for(var r=n._m,o=e.m,a=t.m,s=0;s<16;s++)r[s]=o[s]*(1-i)+a[s]*i;n._markAsUpdated()},e.DecomposeLerp=function(t,i,n){var r=new e;return e.DecomposeLerpToRef(t,i,n,r),r},e.DecomposeLerpToRef=function(t,i,n,r){var o=d.Vector3[0],a=d.Quaternion[0],s=d.Vector3[1];t.decompose(o,a,s);var l=d.Vector3[2],h=d.Quaternion[1],f=d.Vector3[3];i.decompose(l,h,f);var p=d.Vector3[4];c.LerpToRef(o,l,n,p);var _=d.Quaternion[2];u.SlerpToRef(a,h,n,_);var m=d.Vector3[5];c.LerpToRef(s,f,n,m),e.ComposeToRef(p,_,m,r)},e.LookAtLH=function(t,i,n){var r=new e;return e.LookAtLHToRef(t,i,n,r),r},e.LookAtLHToRef=function(t,i,n,r){var o=d.Vector3[0],a=d.Vector3[1],s=d.Vector3[2];i.subtractToRef(t,s),s.normalize(),c.CrossToRef(n,s,o);var l=o.lengthSquared();0===l?o.x=1:o.normalizeFromLength(Math.sqrt(l)),c.CrossToRef(s,o,a),a.normalize();var u=-c.Dot(o,t),h=-c.Dot(a,t),f=-c.Dot(s,t);e.FromValuesToRef(o.x,a.x,s.x,0,o.y,a.y,s.y,0,o.z,a.z,s.z,0,u,h,f,1,r)},e.LookAtRH=function(t,i,n){var r=new e;return e.LookAtRHToRef(t,i,n,r),r},e.LookAtRHToRef=function(t,i,n,r){var o=d.Vector3[0],a=d.Vector3[1],s=d.Vector3[2];t.subtractToRef(i,s),s.normalize(),c.CrossToRef(n,s,o);var l=o.lengthSquared();0===l?o.x=1:o.normalizeFromLength(Math.sqrt(l)),c.CrossToRef(s,o,a),a.normalize();var u=-c.Dot(o,t),h=-c.Dot(a,t),f=-c.Dot(s,t);e.FromValuesToRef(o.x,a.x,s.x,0,o.y,a.y,s.y,0,o.z,a.z,s.z,0,u,h,f,1,r)},e.OrthoLH=function(t,i,n,r){var o=new e;return e.OrthoLHToRef(t,i,n,r,o),o},e.OrthoLHToRef=function(t,i,n,r,o){var a=2/t,s=2/i,c=2/(r-n),l=-(r+n)/(r-n);e.FromValuesToRef(a,0,0,0,0,s,0,0,0,0,c,0,0,0,l,1,o),o._updateIdentityStatus(1===a&&1===s&&1===c&&0===l)},e.OrthoOffCenterLH=function(t,i,n,r,o,a){var s=new e;return e.OrthoOffCenterLHToRef(t,i,n,r,o,a,s),s},e.OrthoOffCenterLHToRef=function(t,i,n,r,o,a,s){var c=2/(i-t),l=2/(r-n),u=2/(a-o),h=-(a+o)/(a-o),d=(t+i)/(t-i),f=(r+n)/(n-r);e.FromValuesToRef(c,0,0,0,0,l,0,0,0,0,u,0,d,f,h,1,s),s._markAsUpdated()},e.OrthoOffCenterRH=function(t,i,n,r,o,a){var s=new e;return e.OrthoOffCenterRHToRef(t,i,n,r,o,a,s),s},e.OrthoOffCenterRHToRef=function(t,i,n,r,o,a,s){e.OrthoOffCenterLHToRef(t,i,n,r,o,a,s),s._m[10]*=-1},e.PerspectiveLH=function(t,i,n,r){var o=new e,a=2*n/t,s=2*n/i,c=(r+n)/(r-n),l=-2*r*n/(r-n);return e.FromValuesToRef(a,0,0,0,0,s,0,0,0,0,c,1,0,0,l,0,o),o._updateIdentityStatus(!1),o},e.PerspectiveFovLH=function(t,i,n,r){var o=new e;return e.PerspectiveFovLHToRef(t,i,n,r,o),o},e.PerspectiveFovLHToRef=function(t,i,n,r,o,a){void 0===a&&(a=!0);var s=n,c=r,l=1/Math.tan(.5*t),u=a?l/i:l,h=a?l:l*i,d=(c+s)/(c-s),f=-2*c*s/(c-s);e.FromValuesToRef(u,0,0,0,0,h,0,0,0,0,d,1,0,0,f,0,o),o._updateIdentityStatus(!1)},e.PerspectiveFovReverseLHToRef=function(t,i,n,r,o,a){void 0===a&&(a=!0);var s=1/Math.tan(.5*t),c=a?s/i:s,l=a?s:s*i;e.FromValuesToRef(c,0,0,0,0,l,0,0,0,0,-n,1,0,0,1,0,o),o._updateIdentityStatus(!1)},e.PerspectiveFovRH=function(t,i,n,r){var o=new e;return e.PerspectiveFovRHToRef(t,i,n,r,o),o},e.PerspectiveFovRHToRef=function(t,i,n,r,o,a){void 0===a&&(a=!0);var s=n,c=r,l=1/Math.tan(.5*t),u=a?l/i:l,h=a?l:l*i,d=-(c+s)/(c-s),f=-2*c*s/(c-s);e.FromValuesToRef(u,0,0,0,0,h,0,0,0,0,d,-1,0,0,f,0,o),o._updateIdentityStatus(!1)},e.PerspectiveFovReverseRHToRef=function(t,i,n,r,o,a){void 0===a&&(a=!0);var s=1/Math.tan(.5*t),c=a?s/i:s,l=a?s:s*i;e.FromValuesToRef(c,0,0,0,0,l,0,0,0,0,-n,-1,0,0,-1,0,o),o._updateIdentityStatus(!1)},e.PerspectiveFovWebVRToRef=function(e,t,i,n,r){void 0===r&&(r=!1);var o=r?-1:1,a=Math.tan(e.upDegrees*Math.PI/180),s=Math.tan(e.downDegrees*Math.PI/180),c=Math.tan(e.leftDegrees*Math.PI/180),l=Math.tan(e.rightDegrees*Math.PI/180),u=2/(c+l),h=2/(a+s),d=n._m;d[0]=u,d[1]=d[2]=d[3]=d[4]=0,d[5]=h,d[6]=d[7]=0,d[8]=(c-l)*u*.5,d[9]=-(a-s)*h*.5,d[10]=-i/(t-i),d[11]=1*o,d[12]=d[13]=d[15]=0,d[14]=-2*i*t/(i-t),n._markAsUpdated()},e.GetFinalMatrix=function(t,i,n,r,o,a){var s=t.width,c=t.height,l=t.x,u=t.y,h=e.FromValues(s/2,0,0,0,0,-c/2,0,0,0,0,a-o,0,l+s/2,c/2+u,o,1),f=d.Matrix[0];return i.multiplyToRef(n,f),f.multiplyToRef(r,f),f.multiply(h)},e.GetAsMatrix2x2=function(e){var t=e.m;return new Float32Array([t[0],t[1],t[4],t[5]])},e.GetAsMatrix3x3=function(e){var t=e.m;return new Float32Array([t[0],t[1],t[2],t[4],t[5],t[6],t[8],t[9],t[10]])},e.Transpose=function(t){var i=new e;return e.TransposeToRef(t,i),i},e.TransposeToRef=function(e,t){var i=t._m,n=e.m;i[0]=n[0],i[1]=n[4],i[2]=n[8],i[3]=n[12],i[4]=n[1],i[5]=n[5],i[6]=n[9],i[7]=n[13],i[8]=n[2],i[9]=n[6],i[10]=n[10],i[11]=n[14],i[12]=n[3],i[13]=n[7],i[14]=n[11],i[15]=n[15],t._updateIdentityStatus(e._isIdentity,e._isIdentityDirty)},e.Reflection=function(t){var i=new e;return e.ReflectionToRef(t,i),i},e.ReflectionToRef=function(t,i){t.normalize();var n=t.normal.x,r=t.normal.y,o=t.normal.z,a=-2*n,s=-2*r,c=-2*o;e.FromValuesToRef(a*n+1,s*n,c*n,0,a*r,s*r+1,c*r,0,a*o,s*o,c*o+1,0,a*t.d,s*t.d,c*t.d,1,i)},e.FromXYZAxesToRef=function(t,i,n,r){e.FromValuesToRef(t.x,t.y,t.z,0,i.x,i.y,i.z,0,n.x,n.y,n.z,0,0,0,0,1,r)},e.FromQuaternionToRef=function(e,t){var i=e.x*e.x,n=e.y*e.y,r=e.z*e.z,o=e.x*e.y,a=e.z*e.w,s=e.z*e.x,c=e.y*e.w,l=e.y*e.z,u=e.x*e.w;t._m[0]=1-2*(n+r),t._m[1]=2*(o+a),t._m[2]=2*(s-c),t._m[3]=0,t._m[4]=2*(o-a),t._m[5]=1-2*(r+i),t._m[6]=2*(l+u),t._m[7]=0,t._m[8]=2*(s+c),t._m[9]=2*(l-u),t._m[10]=1-2*(n+i),t._m[11]=0,t._m[12]=0,t._m[13]=0,t._m[14]=0,t._m[15]=1,t._markAsUpdated()},e._updateFlagSeed=0,e._identityReadOnly=e.Identity(),e}(),d=function(){function e(){}return e.Vector3=o.a.BuildArray(6,c.Zero),e.Matrix=o.a.BuildArray(2,h.Identity),e.Quaternion=o.a.BuildArray(3,u.Zero),e}(),f=function(){function e(){}return e.Vector2=o.a.BuildArray(3,s.Zero),e.Vector3=o.a.BuildArray(13,c.Zero),e.Vector4=o.a.BuildArray(3,l.Zero),e.Quaternion=o.a.BuildArray(2,u.Zero),e.Matrix=o.a.BuildArray(8,h.Identity),e}();a.a.RegisteredTypes["BABYLON.Vector2"]=s,a.a.RegisteredTypes["BABYLON.Vector3"]=c,a.a.RegisteredTypes["BABYLON.Vector4"]=l,a.a.RegisteredTypes["BABYLON.Matrix"]=h},function(e,t,i){"use strict";i.d(t,"d",function(){return r}),i.d(t,"a",function(){return o}),i.d(t,"c",function(){return a}),i.d(t,"b",function(){return s}),i.d(t,"e",function(){return c});
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],5:[function(require,module,exports){
// babylon core
const BABYLON = require('babylonjs');
// babylon gui
require('babylonjs-gui');
// babylon materials
require('babylonjs-materials');
// obj loader
require('babylonjs-loaders');

(function () {
    const gameAuthCode = $('#gamedata').attr('data-authcode');
    /**
     * Game Data
     */
    const gamedata = document.getElementById('gamedata');
    if (!gamedata) {
        window.location.href = "/game/error";
    }
    const gameId = parseInt(gamedata.getAttribute('data-gameid'), 10);
    if (!gameId || isNaN(gameId)) {
        window.location.href = "/game/error";
    }
    let gameServerId = 0;

    // Join Game

    let wsurl = "wss://" + window.location.host + "/game-sockets/websocket.aspx";
    if (window.location.protocol === 'http:') {
        wsurl = "ws://localhost:8080/game-sockets/websocket.aspx";
    }


    var isTrying = false;

    function attemptRetry(closeEvent) {
        if (!isTrying) {
            isTrying = true;
            setTimeout(function () {
                setupListen();
                isTrying = false;
            }, 1500);
        }
    }

    function handleWsMessage(event) {

    }

    function setupListen() {
        var sock = new WebSocket(wsurl + '?gameAuth=' + gameAuthCode);
        sock.onmessage = function (event) {
            handleWsMessage(event)
        }
        sock.onopen = function (event) {
            handleWsMessage(event)
            // Connect to game
            sock.send(JSON.stringify({
                cmd: 'join',
                gameId: gameId,
            }));
        }
        sock.onclose = function (event) {
            alert('Connection to the Game Server has been lost.');
            window.location.reload();
        }
        sock.onerror = function (event) {
            alert('Connection to the Game Server has been lost.');
            window.location.reload();
        }
        window.onbeforeunload = function () {
            sock.close();
        }
    }

    setupListen()

    /*
request('/game/'+gameId+'/join?authCode='+gameAuthCode, 'POST', JSON.stringify({}))
    .then((d) => {
        gameServerId = d.serverId;
        // Setup WSS here
    }).catch((e) => {
        alert(e.responseJSON.message);
        window.location.href = "/";
    });
    */

    /**
     * Global Babylon Vars
     */
    BABYLON.OBJFileLoader = BABYLON.OBJFileLoader || {}
    BABYLON.OBJFileLoader.MATERIAL_LOADING_FAILS_SILENTLY = false;
    BABYLON.OBJFileLoader.OPTIMIZE_WITH_UV = true;

    // Converts from degrees to radians.
    Math.radians = function (degrees) {
        return degrees * Math.PI / 180;
    };

    // Converts from radians to degrees.
    Math.degrees = function (radians) {
        return radians * 180 / Math.PI;
    };

    function rotateVector(vect, quat) {
        var matr = new BABYLON.Matrix();
        quat.toRotationMatrix(matr);
        var rotatedvect = BABYLON.Vector3.TransformCoordinates(vect, matr);
        return rotatedvect;
    }

    window.addEventListener('DOMContentLoaded', function () {
        // Canvas
        var canvas = document.getElementById('renderCanvas');
        // Game Engine
        var engine = new BABYLON.Engine(canvas, true);
        // Create Scene
        var createScene = function () {
            var scene = new BABYLON.Scene(engine);
            window.scene = scene;
            // Use Right Handed (since I believe it's what blender uses)
            scene.useRightHandedSystem = true;

            var gravityVector = new BABYLON.Vector3(0, -9.81, 0);
            var physicsPlugin = new BABYLON.AmmoJSPlugin();
            scene.enablePhysics(gravityVector, physicsPlugin);
            // Setup Player Camera
            var camera = new BABYLON.ArcRotateCamera("Camera", Math.PI / 4, Math.PI / 6, 45, new BABYLON.Vector3(0, 10, -10), scene);
            camera.maxZ = 100000;
            camera.angularSensibilityX = 2500;
            camera.angularSensibilityY = 2500;
            camera.panningSensibility = 2500;
            camera.checkCollisions = true;
            camera.wheelPrecision = 10;
            camera.useInputToRestoreState = true;

            camera.allowUpsideDown = false;
            // Attach the camera to the canvas.
            camera.attachControl(canvas, false);
            camera.useBouncingBehavior = false;
            camera.useAutoRotationBehavior = false;
            camera.useFramingBehavior = false;

            // Create a basic light, aiming 0,1,0 - meaning, to the sky.
            var light = new BABYLON.HemisphericLight('light1', new BABYLON.Vector3(0, 1, 0), scene);
            light.intensity = 1;

            // Skybox
            var skybox = BABYLON.Mesh.CreateBox("BackgroundSkybox", 2048, scene, undefined, BABYLON.Mesh.BACKSIDE);

            // Create and tweak the background material.
            var backgroundMaterial = new BABYLON.BackgroundMaterial("backgroundMaterial", scene);
            backgroundMaterial.reflectionTexture = new BABYLON.CubeTexture("https://cdn.blockshub.net/game/default_assets/TropicalSunnyDay", scene);
            backgroundMaterial.reflectionTexture.coordinatesMode = BABYLON.Texture.SKYBOX_MODE;
            skybox.material = backgroundMaterial;


            // ...
            // IMPORT MAP HERE

            console.log("Base URL", window.HTTPMeta);

            fetch(window.HTTPMeta.baseUrl + '/api/v1/game/' + gameId + '/map?authCode=' + gameAuthCode, {
                credentials: 'omit',
                mode: 'cors'
            }).then((d) => {
                return d.text();
            }).then((d) => {
                // Function(`let gameMap = new ${simpleCryptoData.name}("${GAME_KEY}").decrypt("${d}"); Function(gameMap)(scene);`)(scene);
                let mapString = eval(`new ${simpleCryptoData.name}("${GAME_KEY}").decrypt("${d}")`);
                if (mapString) {
                    Function(mapString)(scene);
                }
            });


            fetch(window.HTTPMeta.baseUrl + '/api/v1/game/' + gameId + '/scripts?authCode=' + gameAuthCode, {
                credentials: 'omit',
                mode: 'cors'
            }).then((d) => {
                return d.text();
            }).then((d) => {
                let scriptsString = eval(`new ${simpleCryptoData.name}("${GAME_KEY}").decrypt("${d}")`);
                if (scriptsString) {
                    Function(scriptsString)(scene);
                }
            });

            // ...

            // char system

            // old light (doesnt support shadows)
            // new BABYLON.HemisphericLight("hemi", new BABYLON.Vector3(0, 50, 0), scene);

            // light1
            // light1
            var light = new BABYLON.DirectionalLight("dir01", new BABYLON.Vector3(-1, -1, 0), scene);
            light.position = new BABYLON.Vector3(20, 40, 20);
            light.intensity = 1;

            // Shadows
            var shadowGenerator = new BABYLON.ShadowGenerator(1024, light);
            shadowGenerator.useExponentialShadowMap = true;

            var hull;
            scene.fogMode = BABYLON.Scene.FOGMODE_LINEAR;

            // var colorfogwater = new BABYLON.Color3(10 / 255, 80 / 255, 130 / 255);  // blue underwater

            var colorfogAmbient = new BABYLON.Color3(0.8, 0.8, 0.9);

            // let ref = new BABYLON.Mesh.CreateBox('ref', 10, scene)




            // skybox
            var skybox = BABYLON.MeshBuilder.CreateBox("skyBox", {size:1000.0}, scene);
            var skyboxMaterial = new BABYLON.StandardMaterial("skyBox", scene);
            skyboxMaterial.backFaceCulling = false;
            skyboxMaterial.reflectionTexture = new BABYLON.CubeTexture("https://cdn.blockshub.net/game/default_assets/TropicalSunnyDay", scene);
            skyboxMaterial.reflectionTexture.coordinatesMode = BABYLON.Texture.SKYBOX_MODE;
            skyboxMaterial.diffuseColor = new BABYLON.Color3(0, 0, 0);
            skyboxMaterial.specularColor = new BABYLON.Color3(0, 0, 0);
            skybox.material = skyboxMaterial;



            // Collisions
            scene.gravity = new BABYLON.Vector3(0, -9.81, 0);
            scene.collisionsEnabled = true;

            scene.fogColor = colorfogAmbient;
            scene.fogDensity = 0.008;

            var mat = new BABYLON.StandardMaterial("mat1", scene);
            mat.alpha = 0.8;
            mat.diffuseColor = new BABYLON.Color3(0.5, 0.5, 1.0);
            mat.emissiveColor = new BABYLON.Color3.Black();
            mat.backFaceCulling = false;

            /**
             * @type {BABYLON.Mesh}
             */
            var hrp = 0;


            // Define ground shape
            /**
             * @type {BABYLON.Mesh}
             */
            const ground = new BABYLON.Mesh.CreateGround('ground', 500, 500, 1, scene);
            const groundImposter = new BABYLON.PhysicsImpostor(ground, BABYLON.PhysicsImpostor.BoxImpostor);
            ground.checkCollisions = true;
            ground.receiveShadows = true;
            var groundMat = new BABYLON.StandardMaterial("groundMaterial", scene);
            // groundMat.diffuseTexture = new BABYLON.Texture("https://cdn.blockshub.net/game/default_assets/Concrete.jpg", scene);
            groundMat.diffuseTexture = new BABYLON.Texture('https://cdn.blockshub.net/game/default_assets/default_stud.png', scene);
            groundMat.diffuseTexture.uScale = 800;
            groundMat.diffuseTexture.vScale = 800;
            groundMat.diffuseTexture.alpha = 0.5;
            groundMat.diffuseTexture.hasAlpha = true;
            groundMat.opacityFresnel = false;
            ground.material = groundMat;

            const groundBgLayer = new BABYLON.Mesh.CreateGround('ground_bg', 500, 500, 1, scene);
            groundBgLayer.checkCollisions = false;
            groundBgLayer.receiveShadows = true;
            groundBgLayer.material = new BABYLON.StandardMaterial('groundMaterialBg',scene);
            groundBgLayer.material.diffuseColor = new BABYLON.Color3(179 / 255, 179 / 255, 179 / 255);
            groundBgLayer.material.hasAlpha = false;

            /**
             * @type {BABYLON.Mesh}
             */
            var leftLeg;
            /**
             * @type {BABYLON.Mesh}
             */
            var rightLeg;

            /**
             * @type {BABYLON.Mesh}
             */
            var torso;

            /**
             * @type {BABYLON.Mesh}
             */
            var leftArm;

            /**
             * @type {BABYLON.Mesh}
             */
            var rightArm;

            var genericMeshArray = [];

            function MakeCapsule(width, height, detail, readyCallback) {

                BABYLON.SceneLoader.ImportMesh("", "https://cdn.blockshub.net/game/default_assets/", "Player.obj", scene, function (meshes) {
                    // scene.createDefaultCameraOrLight(true, true, true);
                    // scene.createDefaultEnvironment();
                    meshes.forEach(msh => {
                        console.log('[info] [character] loading',msh.name);
                        genericMeshArray.push(msh)
                    });

                    readyCallback();
                });

            }

            MakeCapsule(7, 40, 20, () => {

                /**
                 * @type {BABYLON.Mesh}
                 */
                var submarine = undefined;
                submarine = BABYLON.Mesh.MergeMeshes(genericMeshArray, true, true, undefined, false, true);
                submarine.setPositionWithLocalVector(new BABYLON.Vector3(0, 3, 0));

                shadowGenerator.addShadowCaster(submarine);

                var mergedMeshesPhysics = new BABYLON.PhysicsImpostor(submarine, BABYLON.PhysicsImpostor.MeshImpostor, { mass: 500 });
                submarine.checkCollisions = true;

                var helper = scene.createDefaultEnvironment();
                helper.setMainColor(BABYLON.Color3.Teal());
                camera.lockedTarget = submarine;
                let isWPressed = false;
                let isAPressed = false;
                let isSPressed = false;
                let isDPressed = false;
                let isSpacePressed = false;

                let spacePressIndex = 0;

                document.addEventListener
                (
                    'keydown',
                    (e) => {
                        if (e.keyCode == 87) { isWPressed = true; }
                        if (e.keyCode == 65) { isDPressed = true; }
                        if (e.keyCode == 83) { isSPressed = true; }
                        if (e.keyCode == 68) { isAPressed = true; }
                        if (e.keyCode === 32) { isSpacePressed = true; }
                    }
                );

                document.addEventListener
                (
                    'keyup', (e) => {
                        if (e.keyCode == 87) { isWPressed = false; }
                        if (e.keyCode == 65) { isDPressed = false; }
                        if (e.keyCode == 83) { isSPressed = false; }
                        if (e.keyCode == 68) { isAPressed = false; }
                        if (e.keyCode === 32) { isSpacePressed = false; spacePressIndex = 0; }
                    }
                );


                scene.registerBeforeRender(function () {
                    if (!scene.isReady()) { return; }


                    if (isWPressed || isSPressed) {
                        /*
                        // idk what these are for...
                        var playerSpeed = 0.1;
                        var gravity = 0;
                        var x = playerSpeed * parseFloat(Math.sin(submarine.rotation.x));
                        var z = playerSpeed * parseFloat(Math.cos(submarine.rotation.y));
                        */
                        if (isWPressed == true) {
                            //playerMesh.locallyTranslate(new BABYLON.Vector3(0, 0, 0.1));
                            //var forwards = submarine.forward.clone().scale(0.1);
                            var forwards = submarine.right.clone().scale(0.1);
                            submarine.moveWithCollisions(forwards);
                            submarine.addRotation(0,0,0);
                        }
                        if (isSPressed == true) {
                            //playerMesh.locallyTranslate(new BABYLON.Vector3(0, 0, -0.1));
                            //var backwards = submarine.forward.clone().scale(-0.1);
                            var backwards = submarine.right.clone().scale(-0.1);
                            submarine.moveWithCollisions(backwards);
                            submarine.addRotation(0,0,0);
                        }
                    }
                    if (isAPressed == true) {
                        submarine.addRotation(0, -0.05, 0);
                    }
                    if (isDPressed == true) {
                        submarine.addRotation(0, 0.05, 0);
                    }
                    if (isSpacePressed) {
                        if (spacePressIndex < 100) {
                            // spacePressIndex += 0.1;
                            var forwards = submarine.right.clone().scale(0);
                            forwards.y += 25;
                            submarine.moveWithCollisions(forwards);
                        }
                    }
                });

            });

            // Return the created scene.
            return scene;
        };
        var scene = createScene();
        engine.runRenderLoop(function () {
            scene.render();
        });
        window.addEventListener('resize', function () {
            engine.resize();
        });
    });
})()
},{"babylonjs":4,"babylonjs-gui":1,"babylonjs-loaders":2,"babylonjs-materials":3}]},{},[5]);
