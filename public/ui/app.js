var Dalamud =
/******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "/ui/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./assets/js/App.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/js/App.js":
/*!**************************!*\
  !*** ./assets/js/App.js ***!
  \**************************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__BattleBar_BattleBar__ = __webpack_require__(/*! ./BattleBar/BattleBar */ "./assets/js/BattleBar/BattleBar.js");

__WEBPACK_IMPORTED_MODULE_0__BattleBar_BattleBar__["a" /* default */].start();

/***/ }),

/***/ "./assets/js/BattleBar/BattleBar.js":
/*!******************************************!*\
  !*** ./assets/js/BattleBar/BattleBar.js ***!
  \******************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__CommandHandler__ = __webpack_require__(/*! ./CommandHandler */ "./assets/js/BattleBar/CommandHandler.js");
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var BattleBar = function () {
    function BattleBar() {
        _classCallCheck(this, BattleBar);

        this.websocket = null;
    }

    _createClass(BattleBar, [{
        key: 'start',
        value: function start() {
            // todo - write start logic, it should check for a local var so it only
            // todo - starts on pages it needs to.

            BattleBar.websocket = new WebSocket('wss://xivapi.local/socket');
            BattleBar.websocket.onopen = this.webSocketOnOpen;
            BattleBar.websocket.onmessage = this.webSocketOnMessage;
            BattleBar.websocket.onclose = this.webSocketOnDisconnect;
            BattleBar.websocket.onerror = this.webSocketOnDisconnect;
        }

        /**
         * Connected to the server
         */

    }], [{
        key: 'webSocketOnOpen',
        value: function webSocketOnOpen(event) {
            console.log("Connection established!");
        }

        /**
         * Receive a message FROM the server
         */

    }, {
        key: 'webSocketOnMessage',
        value: function webSocketOnMessage(event) {
            var command = event.data.split('::');
            var action = command[0];
            var data = command[1];

            // do nothing if the lengths are bad
            if (action.length === 0 || data.length === 0) {
                return;
            }

            // handle the command
            __WEBPACK_IMPORTED_MODULE_0__CommandHandler__["a" /* default */].handle(action, data);
        }

        /**
         * Whenever the socket errors or closes.
         */

    }, {
        key: 'webSocketOnDisconnect',
        value: function webSocketOnDisconnect(event) {
            console.log('disconnected');
        }

        /**
         * Send a message TO the server
         */

    }, {
        key: 'webSocketSendMessage',
        value: function webSocketSendMessage(message) {
            this.websocket.send(message);
        }
    }]);

    return BattleBar;
}();

/* harmony default export */ __webpack_exports__["a"] = (new BattleBar());

/***/ }),

/***/ "./assets/js/BattleBar/CommandHandler.js":
/*!***********************************************!*\
  !*** ./assets/js/BattleBar/CommandHandler.js ***!
  \***********************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * This class handles any incoming actions and decides what to do, it's
 * effectively a websocket router
 */
var CommandHandler = function () {
    function CommandHandler() {
        _classCallCheck(this, CommandHandler);
    }

    _createClass(CommandHandler, null, [{
        key: "handle",
        value: function handle(action, data) {
            switch (action) {
                default:
                    console.log("Unknown action: " + action);
                    break;
            }
        }
    }]);

    return CommandHandler;
}();

/* harmony default export */ __webpack_exports__["a"] = (new BattleBar());

/***/ })

/******/ })["default"];