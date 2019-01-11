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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/app/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/app/index.js":
/*!*****************************!*\
  !*** ./src/js/app/index.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _app_constants = __webpack_require__(/*! ../config/app_constants */ \"./src/js/config/app_constants.js\");\n\nvar _app_constants2 = _interopRequireDefault(_app_constants);\n\nvar _firebase_service = __webpack_require__(/*! ../services/firebase_service */ \"./src/js/services/firebase_service.js\");\n\nvar _firebase_service2 = _interopRequireDefault(_firebase_service);\n\nvar _data_service = __webpack_require__(/*! ../services/data_service */ \"./src/js/services/data_service.js\");\n\nvar _data_service2 = _interopRequireDefault(_data_service);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n// The function \"initialize\" is in charge to connect to de database and get the data needed to mount the app functionality\nvar initialize = new Promise(function (resolve, reject) {\n    _firebase_service2.default.getDatabaseByName(_app_constants2.default.databaseName).then(function (data) {\n        if (data.val()) {\n            resolve(data.val());\n        } else {\n            reject(\"ERROR - (def)initialize::getDatabaseByName::data.val() is null\");\n        }\n    }).catch(function (reason) {\n        console.log(\"ERROR - (def)initialize::getDatabaseByName::catch::reason: \" + reason);\n    });\n});\n\ninitialize.then(function (dbData) {\n    console.log(dbData);\n    _data_service2.default.generateChartModels(dbData).then(function (models) {\n        console.log(models);\n    });\n}).catch(function (reason) {\n    console.log(\"ERROR - initialize::catch::reason: \" + reason);\n});\n//services (model mapping...)\n//presentation (use of data models, d3.js...)\n\n//# sourceURL=webpack:///./src/js/app/index.js?");

/***/ }),

/***/ "./src/js/config/app_constants.js":
/*!****************************************!*\
  !*** ./src/js/config/app_constants.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar databaseName = 'App_Ad_Data',\n    txtImpresionsDatabase = 'Impresions',\n    txtRevenueDatabase = 'Revenue',\n    txtVisitsDatabase = 'Visits';\n\nvar Constants = function () {\n    function Constants() {\n        _classCallCheck(this, Constants);\n    }\n\n    _createClass(Constants, null, [{\n        key: 'databaseName',\n        get: function get() {\n            return databaseName;\n        }\n    }, {\n        key: 'txtImpresionsDatabase',\n        get: function get() {\n            return txtImpresionsDatabase;\n        }\n    }, {\n        key: 'txtRevenueDatabase',\n        get: function get() {\n            return txtRevenueDatabase;\n        }\n    }, {\n        key: 'txtVisitsDatabase',\n        get: function get() {\n            return txtVisitsDatabase;\n        }\n    }]);\n\n    return Constants;\n}();\n\nexports.default = Constants;\n\n//# sourceURL=webpack:///./src/js/config/app_constants.js?");

/***/ }),

/***/ "./src/js/services/data_service.js":
/*!*****************************************!*\
  !*** ./src/js/services/data_service.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed (from ./node_modules/babel-loader/lib/index.js):\\nSyntaxError: C:/Users/ssilva/Documents/Marfeel/Test/src/js/services/data_service.js: Unexpected token, expected ( (52:34)\\n\\n\\u001b[0m \\u001b[90m 50 | \\u001b[39m\\n \\u001b[90m 51 | \\u001b[39m\\u001b[36mclass\\u001b[39m \\u001b[33mDataService\\u001b[39m {\\n\\u001b[31m\\u001b[1m>\\u001b[22m\\u001b[39m\\u001b[90m 52 | \\u001b[39m    static get generateChartModels{\\n \\u001b[90m    | \\u001b[39m                                  \\u001b[31m\\u001b[1m^\\u001b[22m\\u001b[39m\\n \\u001b[90m 53 | \\u001b[39m        \\u001b[36mreturn\\u001b[39m generateChartModels(jsonData)\\u001b[33m;\\u001b[39m\\n \\u001b[90m 54 | \\u001b[39m    }    \\n \\u001b[90m 55 | \\u001b[39m}\\u001b[0m\\n\");\n\n//# sourceURL=webpack:///./src/js/services/data_service.js?");

/***/ }),

/***/ "./src/js/services/firebase_service.js":
/*!*********************************************!*\
  !*** ./src/js/services/firebase_service.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed (from ./node_modules/babel-loader/lib/index.js):\\nSyntaxError: C:/Users/ssilva/Documents/Marfeel/Test/src/js/services/firebase_service.js: getter should have no params (18:4)\\n\\n\\u001b[0m \\u001b[90m 16 | \\u001b[39m\\n \\u001b[90m 17 | \\u001b[39m\\u001b[36mclass\\u001b[39m \\u001b[33mFirebaseService\\u001b[39m {\\n\\u001b[31m\\u001b[1m>\\u001b[22m\\u001b[39m\\u001b[90m 18 | \\u001b[39m    static get getDatabaseByName(databaseName){\\n \\u001b[90m    | \\u001b[39m    \\u001b[31m\\u001b[1m^\\u001b[22m\\u001b[39m\\n \\u001b[90m 19 | \\u001b[39m        \\u001b[36mreturn\\u001b[39m getDatabaseByName(databaseName)\\u001b[33m;\\u001b[39m\\n \\u001b[90m 20 | \\u001b[39m    }    \\n \\u001b[90m 21 | \\u001b[39m}\\u001b[0m\\n\");\n\n//# sourceURL=webpack:///./src/js/services/firebase_service.js?");

/***/ })

/******/ });