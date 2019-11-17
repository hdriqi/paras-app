module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "../node_modules/@babel/runtime-corejs2/core-js/array/is-array.js":
/*!************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/core-js/array/is-array.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/array/is-array */ "core-js/library/fn/array/is-array");

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/core-js/json/stringify.js":
/*!************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/core-js/json/stringify.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/json/stringify */ "core-js/library/fn/json/stringify");

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/core-js/object/assign.js":
/*!***********************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/core-js/object/assign.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/assign */ "core-js/library/fn/object/assign");

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js":
/*!**********************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-properties */ "core-js/library/fn/object/define-properties");

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!********************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js":
/*!********************************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptor */ "core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptors.js":
/*!*********************************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptors.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptors */ "core-js/library/fn/object/get-own-property-descriptors");

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js":
/*!*****************************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-symbols */ "core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/core-js/object/keys.js":
/*!*********************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/core-js/object/keys.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/keys */ "core-js/library/fn/object/keys");

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/core-js/promise.js":
/*!*****************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/core-js/promise.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/promise */ "core-js/library/fn/promise");

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/helpers/asyncToGenerator.js":
/*!**************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/helpers/asyncToGenerator.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Promise = __webpack_require__(/*! ../core-js/promise */ "../node_modules/@babel/runtime-corejs2/core-js/promise.js");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    _Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new _Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

module.exports = _asyncToGenerator;

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js":
/*!****************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "../node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js":
/*!*************************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectWithoutProperties; });
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/get-own-property-symbols */ "../node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./objectWithoutPropertiesLoose */ "../node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutPropertiesLoose.js");


function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = Object(_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(source, excluded);
  var key, i;

  if (_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_0___default.a) {
    var sourceSymbolKeys = _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_0___default()(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutPropertiesLoose.js":
/*!******************************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutPropertiesLoose.js ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectWithoutPropertiesLoose; });
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/keys */ "../node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__);

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};

  var sourceKeys = _core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(source);

  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/helpers/extends.js":
/*!*****************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/helpers/extends.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$assign = __webpack_require__(/*! ../core-js/object/assign */ "../node_modules/@babel/runtime-corejs2/core-js/object/assign.js");

function _extends() {
  module.exports = _extends = _Object$assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js":
/*!*******************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "../node_modules/next/app.js":
/*!***********************************!*\
  !*** ../node_modules/next/app.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/pages/_app */ "../node_modules/next/dist/pages/_app.js")


/***/ }),

/***/ "../node_modules/next/dist/next-server/lib/utils.js":
/*!**********************************************************!*\
  !*** ../node_modules/next/dist/next-server/lib/utils.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$keys = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "../node_modules/@babel/runtime-corejs2/core-js/object/keys.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "../node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");
/**
 * Utils
 */


function execOnce(fn) {
  let used = false;
  return (...args) => {
    if (!used) {
      used = true;
      fn.apply(this, args);
    }
  };
}

exports.execOnce = execOnce;

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

exports.getLocationOrigin = getLocationOrigin;

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

exports.getURL = getURL;

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

exports.getDisplayName = getDisplayName;

function isResSent(res) {
  return res.finished || res.headersSent;
}

exports.isResSent = isResSent;

async function loadGetInitialProps(Component, ctx) {
  if (true) {
    if (Component.prototype && Component.prototype.getInitialProps) {
      const message = `"${getDisplayName(Component)}.getInitialProps()" is defined as an instance method - visit https://err.sh/zeit/next.js/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!Component.getInitialProps) {
    return {};
  }

  const props = await Component.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(Component)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (_Object$keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(Component)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://err.sh/zeit/next.js/empty-object-getInitialProps`);
    }
  }

  return props;
}

exports.loadGetInitialProps = loadGetInitialProps;
exports.urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];

function formatWithValidation(url, options) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      _Object$keys(url).forEach(key => {
        if (exports.urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return url_1.format(url, options);
}

exports.formatWithValidation = formatWithValidation;
exports.SUPPORTS_PERFORMANCE = typeof performance !== 'undefined';
exports.SUPPORTS_PERFORMANCE_USER_TIMING = exports.SUPPORTS_PERFORMANCE && typeof performance.mark === 'function' && typeof performance.measure === 'function';

/***/ }),

/***/ "../node_modules/next/dist/pages/_app.js":
/*!***********************************************!*\
  !*** ../node_modules/next/dist/pages/_app.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "../node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.Container = Container;
exports.createUrl = createUrl;
exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/extends */ "../node_modules/@babel/runtime-corejs2/helpers/extends.js"));

var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/asyncToGenerator */ "../node_modules/@babel/runtime-corejs2/helpers/asyncToGenerator.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "../node_modules/next/dist/next-server/lib/utils.js");

exports.AppInitialProps = _utils.AppInitialProps;
/**
* `App` component is used for initialize of pages. It allows for overwriting and full control of the `page` initialization.
* This allows for keeping state between navigation, custom error handling, injecting additional data.
*/

function appGetInitialProps(_x) {
  return _appGetInitialProps.apply(this, arguments);
}

function _appGetInitialProps() {
  _appGetInitialProps = (0, _asyncToGenerator2.default)(function* (_ref) {
    var {
      Component,
      ctx
    } = _ref;
    var pageProps = yield (0, _utils.loadGetInitialProps)(Component, ctx);
    return {
      pageProps
    };
  });
  return _appGetInitialProps.apply(this, arguments);
}

class App extends _react.default.Component {
  // Kept here for backwards compatibility.
  // When someone ended App they could call `super.componentDidCatch`.
  // @deprecated This method is no longer needed. Errors are caught at the top level
  componentDidCatch(error, _errorInfo) {
    throw error;
  }

  render() {
    var {
      router,
      Component,
      pageProps
    } = this.props;
    var url = createUrl(router);
    return _react.default.createElement(Component, (0, _extends2.default)({}, pageProps, {
      url: url
    }));
  }

}

exports.default = App;
App.origGetInitialProps = appGetInitialProps;
App.getInitialProps = appGetInitialProps;
var warnContainer;
var warnUrl;

if (true) {
  warnContainer = (0, _utils.execOnce)(() => {
    console.warn("Warning: the `Container` in `_app` has been deprecated and should be removed. https://err.sh/zeit/next.js/app-container-deprecated");
  });
  warnUrl = (0, _utils.execOnce)(() => {
    console.error("Warning: the 'url' property is deprecated. https://err.sh/zeit/next.js/url-deprecated");
  });
} // @deprecated noop for now until removal


function Container(p) {
  if (true) warnContainer();
  return p.children;
}

function createUrl(router) {
  // This is to make sure we don't references the router object at call time
  var {
    pathname,
    asPath,
    query
  } = router;
  return {
    get query() {
      if (true) warnUrl();
      return query;
    },

    get pathname() {
      if (true) warnUrl();
      return pathname;
    },

    get asPath() {
      if (true) warnUrl();
      return asPath;
    },

    back: () => {
      if (true) warnUrl();
      router.back();
    },
    push: (url, as) => {
      if (true) warnUrl();
      return router.push(url, as);
    },
    pushTo: (href, as) => {
      if (true) warnUrl();
      var pushRoute = as ? href : '';
      var pushUrl = as || href;
      return router.push(pushRoute, pushUrl);
    },
    replace: (url, as) => {
      if (true) warnUrl();
      return router.replace(url, as);
    },
    replaceTo: (href, as) => {
      if (true) warnUrl();
      var replaceRoute = as ? href : '';
      var replaceUrl = as || href;
      return router.replace(replaceRoute, replaceUrl);
    }
  };
}

/***/ }),

/***/ "./actions/auth.js":
/*!*************************!*\
  !*** ./actions/auth.js ***!
  \*************************/
/*! exports provided: SAVE_AUTH_DATA, saveAuthData, SAVE_USER_SESSION, saveUserSession */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SAVE_AUTH_DATA", function() { return SAVE_AUTH_DATA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveAuthData", function() { return saveAuthData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SAVE_USER_SESSION", function() { return SAVE_USER_SESSION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveUserSession", function() { return saveUserSession; });
const SAVE_AUTH_DATA = 'SAVE_AUTH_DATA';
const saveAuthData = authData => {
  return {
    type: SAVE_AUTH_DATA,
    authData: authData
  };
};
const SAVE_USER_SESSION = 'SAVE_USER_SESSION';
const saveUserSession = userSession => {
  return {
    type: SAVE_AUTH_DATA,
    userSession: userSession
  };
};

/***/ }),

/***/ "./actions/profile.js":
/*!****************************!*\
  !*** ./actions/profile.js ***!
  \****************************/
/*! exports provided: SAVE_PROFILE_DATA, saveProfileData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SAVE_PROFILE_DATA", function() { return SAVE_PROFILE_DATA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveProfileData", function() { return saveProfileData; });
const SAVE_PROFILE_DATA = 'SAVE_PROFILE_DATA';
const saveProfileData = profile => {
  return {
    type: SAVE_PROFILE_DATA,
    profile: profile
  };
};

/***/ }),

/***/ "./actions/theme.js":
/*!**************************!*\
  !*** ./actions/theme.js ***!
  \**************************/
/*! exports provided: SET_THEME_DATA, setThemeData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_THEME_DATA", function() { return SET_THEME_DATA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setThemeData", function() { return setThemeData; });
const SET_THEME_DATA = 'SET_THEME_DATA';
const setThemeData = theme => {
  return {
    type: SET_THEME_DATA,
    theme: theme
  };
};

/***/ }),

/***/ "./api/index.js":
/*!**********************!*\
  !*** ./api/index.js ***!
  \**********************/
/*! exports provided: blockstackAPI, credentialAPI */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "blockstackAPI", function() { return blockstackAPI; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "credentialAPI", function() { return credentialAPI; });
/* harmony import */ var blockstack__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! blockstack */ "blockstack");
/* harmony import */ var blockstack__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(blockstack__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var uuid_v4__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! uuid/v4 */ "uuid/v4");
/* harmony import */ var uuid_v4__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(uuid_v4__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var node_rsa__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! node-rsa */ "node-rsa");
/* harmony import */ var node_rsa__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(node_rsa__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var fast_json_stable_stringify__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! fast-json-stable-stringify */ "fast-json-stable-stringify");
/* harmony import */ var fast_json_stable_stringify__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(fast_json_stable_stringify__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var js_sha256__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! js-sha256 */ "js-sha256");
/* harmony import */ var js_sha256__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(js_sha256__WEBPACK_IMPORTED_MODULE_5__);







class BlockstackAPI {
  constructor() {
    this.appConfig = new blockstack__WEBPACK_IMPORTED_MODULE_0__["AppConfig"](['email', 'store_write', 'publish_data'], 'http://localhost:4000', '/login');
    this.default = blockstack__WEBPACK_IMPORTED_MODULE_0__;
    this.session = new blockstack__WEBPACK_IMPORTED_MODULE_0__["UserSession"]({
      appConfig: this.appConfig
    });
  }

}

const _signCredential = async (message, privateKey) => {
  const msg = fast_json_stable_stringify__WEBPACK_IMPORTED_MODULE_4___default()(message);
  const hashedMsg = js_sha256__WEBPACK_IMPORTED_MODULE_5___default()(msg);
  const key = new node_rsa__WEBPACK_IMPORTED_MODULE_3___default.a(privateKey);
  const signedMsg = key.sign(hashedMsg, 'hex', 'utf8');
  const splitSignedMsg = signedMsg.length / 2;
  const leftSignedMsg = signedMsg.substring(0, splitSignedMsg);
  const rightSignedMsg = signedMsg.substring(splitSignedMsg);
  return {
    left: {
      hash: leftSignedMsg
    },
    right: {
      hash: rightSignedMsg
    }
  }; // const publicKey = new NodeRSA(currentOrg.publicKey)
  // const verify = publicKey.verify(hashedMsg, leftSignedMsg + rightSignedMsg, 'utf8', 'hex')
  // console.log(verify)
};

class CredentialAPI {
  async create(credential, privateKey) {
    try {
      const signature = await _signCredential(credential, privateKey);
      const input = {
        version: 'degree/v1',
        uid: uuid_v4__WEBPACK_IMPORTED_MODULE_2___default()(),
        credential: credential,
        signature: signature
      };
      const res = await axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('http://localhost:8080/v1/certificates', input);
      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  }

}

const blockstackAPI = new BlockstackAPI();
const credentialAPI = new CredentialAPI();

/***/ }),

/***/ "./components/layout.js":
/*!******************************!*\
  !*** ./components/layout.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const Layout = ({
  children
}) => __jsx("div", null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, null, __jsx("meta", {
  name: "viewport",
  content: "width=device-width, initial-scale=1"
}), __jsx("meta", {
  charSet: "utf-8"
}), __jsx("link", {
  href: "https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css",
  rel: "stylesheet"
}), __jsx("style", null, `
          @import url('https://rsms.me/inter/inter.css');
          html { font-family: 'Inter', sans-serif; }
          `)), children);

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./components/meta.js":
/*!****************************!*\
  !*** ./components/meta.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


const Meta = () => __jsx("div", {
  className: "jsx-2814811752"
}, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, null, __jsx("meta", {
  name: "viewport",
  content: "width=device-width, initial-scale=1",
  className: "jsx-2814811752"
}), __jsx("meta", {
  charSet: "utf-8",
  className: "jsx-2814811752"
})), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
  id: "2814811752"
}, "body{margin:0;padding:0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yaXFpL1Byb2plY3RzL3BlcnNvbmEtYXBwL2Rhc2hib2FyZC9jb21wb25lbnRzL21ldGEuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBUXVCLEFBR2MsU0FDQyxVQUNSIiwiZmlsZSI6Ii9Vc2Vycy9yaXFpL1Byb2plY3RzL3BlcnNvbmEtYXBwL2Rhc2hib2FyZC9jb21wb25lbnRzL21ldGEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5cbmNvbnN0IE1ldGEgPSAoKSA9PiAoXG4gIDxkaXY+XG4gICAgPEhlYWQ+XG4gICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTFcIiAvPlxuICAgICAgPG1ldGEgY2hhclNldD1cInV0Zi04XCIgLz5cbiAgICA8L0hlYWQ+XG4gICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgIGJvZHkgeyBcblx0XHRcdFx0bWFyZ2luOiAwO1xuXHRcdFx0XHRwYWRkaW5nOiAwO1xuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgPC9kaXY+XG4pXG5cbmV4cG9ydCBkZWZhdWx0IE1ldGEiXX0= */\n/*@ sourceURL=/Users/riqi/Projects/persona-app/dashboard/components/meta.js */"));

/* harmony default export */ __webpack_exports__["default"] = (Meta);

/***/ }),

/***/ "./components/nav.js":
/*!***************************!*\
  !*** ./components/nav.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


let identifier = '';

const Nav = ({
  toggleProfileSidebar
}) => {
  const authData = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(state => state.auth.authData);

  if (authData) {
    identifier = authData.username.split('.')[0];
  }

  return __jsx("nav", {
    className: "h-10 border-solid border-b border-gray-300"
  }, __jsx("div", {
    className: "h-full w-full max-w-6xl relative mx-auto px-4"
  }, __jsx("ul", {
    className: "h-full flex items-center justify-between"
  }, __jsx("li", null, __jsx("a", {
    className: "text-blue-500 hover:text-blue-800"
  }, identifier, ".paras.id")), __jsx("li", null, __jsx("a", {
    onClick: () => toggleProfileSidebar(),
    className: "text-blue-500 hover:text-blue-800"
  }, __jsx("svg", {
    width: "20",
    height: "21",
    viewBox: "0 0 20 21",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, __jsx("rect", {
    y: "9",
    width: "20",
    height: "2",
    fill: "black"
  }), __jsx("rect", {
    width: "16.6667",
    height: "2",
    fill: "black"
  }), __jsx("rect", {
    y: "18.1177",
    width: "13.3333",
    height: "2",
    fill: "black"
  })))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Nav);

/***/ }),

/***/ "./components/sidebar.js":
/*!*******************************!*\
  !*** ./components/sidebar.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/promise */ "../node_modules/@babel/runtime-corejs2/core-js/promise.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var fast_json_stable_stringify__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! fast-json-stable-stringify */ "fast-json-stable-stringify");
/* harmony import */ var fast_json_stable_stringify__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(fast_json_stable_stringify__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _actions_profile__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../actions/profile */ "./actions/profile.js");


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;





const Sidebar = ({
  style,
  name,
  setName,
  description,
  setDescription,
  avatarUrl,
  setAvatarUrl,
  avatarFile,
  setAvatarFile,
  accountList,
  setAccountList,
  theme,
  setTheme,
  themeList,
  setThemeList,
  submit,
  submitState,
  showProfileSidebar,
  toggleProfileSidebar
}) => {
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"])();
  const profile = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(state => state.profile);
  const {
    0: showNestedSidebar,
    1: setShowNestedSidebar
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])('');

  const readFileAsUrl = file => {
    const temporaryFileReader = new FileReader();
    return new _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a((resolve, reject) => {
      temporaryFileReader.onload = () => {
        resolve(temporaryFileReader.result);
      };

      temporaryFileReader.readAsDataURL(file);
    });
  };

  const updateAvatarUrl = async files => {
    if (files.length > 0) {
      const imgUrl = await readFileAsUrl(files[0]);
      setAvatarUrl(imgUrl);
      setAvatarFile(files[0]);
    }
  };

  const back = () => {
    const newProfile = {
      name: name,
      description: description,
      avatarUrl: avatarUrl,
      accountList: accountList,
      theme: theme
    }; // if data is not changed, allow user to navigate to main sidebar

    if (fast_json_stable_stringify__WEBPACK_IMPORTED_MODULE_4___default()(profile) === fast_json_stable_stringify__WEBPACK_IMPORTED_MODULE_4___default()(newProfile)) {
      setShowNestedSidebar(false);
    } // else if data is changed, alert user to save or discard their change
    else {
        const x = confirm('There are some changed data that are not saved');

        if (x) {
          dispatch(Object(_actions_profile__WEBPACK_IMPORTED_MODULE_5__["saveProfileData"])(profile));
          setShowNestedSidebar(false);
        }
      }
  };

  const setUserAccount = (service, identifier) => {
    const idx = accountList.findIndex(acc => acc.service === service); // if identifier is an empty string remove idx

    if (identifier.length === 0) {
      const newAccountList = accountList.slice(0);
      newAccountList.splice(idx, 1);
      setAccountList(newAccountList);
    } else {
      // update the data is service already exist
      if (idx >= 0) {
        const newAccountList = accountList.slice(0);
        newAccountList[idx].identifier = identifier;
        setAccountList(newAccountList);
      } // create the data is service not exist
      else {
          const newAccountList = accountList.slice(0);
          newAccountList.push({
            service: service,
            identifier: identifier
          });
          setAccountList(newAccountList);
        }
    }
  };

  const getAccount = service => {
    const idx = accountList.findIndex(acc => acc.service === service);

    if (idx >= 0) {
      return accountList[idx].identifier;
    }

    return '';
  };

  const isSelectedTheme = name => {
    if (theme.name === name) {
      return true;
    }

    return false;
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "2392098432"
  }, ".lds-ring-container.jsx-2392098432{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.lds-ring.jsx-2392098432{margin-left:auto;display:inline-block;width:1.125rem;height:1.125rem;}.lds-ring.jsx-2392098432 div.jsx-2392098432{box-sizing:border-box;display:block;position:absolute;width:1rem;height:1rem;margin:2px;border:2px solid #4299e1;border-radius:50%;-webkit-animation:lds-ring-jsx-2392098432 1.2s cubic-bezier(0.5,0,0.5,1) infinite;animation:lds-ring-jsx-2392098432 1.2s cubic-bezier(0.5,0,0.5,1) infinite;border-color:#4299e1 transparent transparent transparent;}.lds-ring.jsx-2392098432 div.jsx-2392098432:nth-child(1){-webkit-animation-delay:-0.45s;animation-delay:-0.45s;}.lds-ring.jsx-2392098432 div.jsx-2392098432:nth-child(2){-webkit-animation-delay:-0.3s;animation-delay:-0.3s;}.lds-ring.jsx-2392098432 div.jsx-2392098432:nth-child(3){-webkit-animation-delay:-0.15s;animation-delay:-0.15s;}@-webkit-keyframes lds-ring-jsx-2392098432{0%{-webkit-transform:rotate(0deg);-ms-transform:rotate(0deg);transform:rotate(0deg);}100%{-webkit-transform:rotate(360deg);-ms-transform:rotate(360deg);transform:rotate(360deg);}}@keyframes lds-ring-jsx-2392098432{0%{-webkit-transform:rotate(0deg);-ms-transform:rotate(0deg);transform:rotate(0deg);}100%{-webkit-transform:rotate(360deg);-ms-transform:rotate(360deg);transform:rotate(360deg);}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yaXFpL1Byb2plY3RzL3BlcnNvbmEtYXBwL2Rhc2hib2FyZC9jb21wb25lbnRzL3NpZGViYXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBa0hLLEFBR29CLEFBR0ksQUFNSyxBQVlDLEFBR0QsQUFHQyxBQUlDLEFBR0UsaUJBOUJMLEtBTVAsY0FDSSxFQU5ILGNBb0JoQixDQW5CaUIsQ0FNTCxBQVVaLEFBTUEsV0FmYSxJQU5iLEtBTkEsR0FhWSxJQWtCWCxNQUdBLENBcEJ5Qix5QkFDUCxrQkFDNEMsNEpBQ0wseURBQzFEIiwiZmlsZSI6Ii9Vc2Vycy9yaXFpL1Byb2plY3RzL3BlcnNvbmEtYXBwL2Rhc2hib2FyZC9jb21wb25lbnRzL3NpZGViYXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQgc3RyaW5naWZ5IGZyb20gJ2Zhc3QtanNvbi1zdGFibGUtc3RyaW5naWZ5J1xuXG5pbXBvcnQgeyBzYXZlUHJvZmlsZURhdGEgfSBmcm9tICcuLi9hY3Rpb25zL3Byb2ZpbGUnXG5cbmNvbnN0IFNpZGViYXIgPSAoeyBcblx0c3R5bGUsXG5cdG5hbWUsIHNldE5hbWUsIFxuXHRkZXNjcmlwdGlvbiwgc2V0RGVzY3JpcHRpb24sIFxuXHRhdmF0YXJVcmwsIHNldEF2YXRhclVybCwgXG5cdGF2YXRhckZpbGUsIHNldEF2YXRhckZpbGUsIFxuXHRhY2NvdW50TGlzdCwgc2V0QWNjb3VudExpc3QsIFxuXHR0aGVtZSwgc2V0VGhlbWUsXG5cdHRoZW1lTGlzdCwgc2V0VGhlbWVMaXN0LFxuXHRzdWJtaXQsXG5cdHN1Ym1pdFN0YXRlLFxuXHRzaG93UHJvZmlsZVNpZGViYXIsXG5cdHRvZ2dsZVByb2ZpbGVTaWRlYmFyXG59KSA9PiB7XG5cdGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKVxuXHRjb25zdCBwcm9maWxlID0gdXNlU2VsZWN0b3Ioc3RhdGUgPT4gc3RhdGUucHJvZmlsZSlcblx0Y29uc3QgW3Nob3dOZXN0ZWRTaWRlYmFyLCBzZXRTaG93TmVzdGVkU2lkZWJhcl0gPSB1c2VTdGF0ZSgnJylcblxuXHRjb25zdCByZWFkRmlsZUFzVXJsID0gKGZpbGUpID0+IHtcblx0XHRjb25zdCB0ZW1wb3JhcnlGaWxlUmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKVxuXHRcblx0XHRyZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuXHRcdFx0dGVtcG9yYXJ5RmlsZVJlYWRlci5vbmxvYWQgPSAoKSA9PiB7XG5cdFx0XHRcdHJlc29sdmUodGVtcG9yYXJ5RmlsZVJlYWRlci5yZXN1bHQpXG5cdFx0XHR9XG5cdFx0XHR0ZW1wb3JhcnlGaWxlUmVhZGVyLnJlYWRBc0RhdGFVUkwoZmlsZSlcblx0XHR9KVxuXHR9XG5cblx0Y29uc3QgdXBkYXRlQXZhdGFyVXJsID0gYXN5bmMgKGZpbGVzKSA9PiB7XG4gICAgaWYoZmlsZXMubGVuZ3RoID4gMCkge1xuICAgICAgY29uc3QgaW1nVXJsID0gYXdhaXQgcmVhZEZpbGVBc1VybChmaWxlc1swXSlcbiAgICAgIHNldEF2YXRhclVybChpbWdVcmwpXG4gICAgICBzZXRBdmF0YXJGaWxlKGZpbGVzWzBdKVxuICAgIH1cbiAgfVxuXG5cdGNvbnN0IGJhY2sgPSAoKSA9PiB7XG5cdFx0Y29uc3QgbmV3UHJvZmlsZSA9IHtcblx0XHRcdG5hbWU6IG5hbWUsXG5cdFx0XHRkZXNjcmlwdGlvbjogZGVzY3JpcHRpb24sXG5cdFx0XHRhdmF0YXJVcmw6IGF2YXRhclVybCxcblx0XHRcdGFjY291bnRMaXN0OiBhY2NvdW50TGlzdCxcblx0XHRcdHRoZW1lOiB0aGVtZVxuXHRcdH1cblx0XHQvLyBpZiBkYXRhIGlzIG5vdCBjaGFuZ2VkLCBhbGxvdyB1c2VyIHRvIG5hdmlnYXRlIHRvIG1haW4gc2lkZWJhclxuXHRcdGlmKHN0cmluZ2lmeShwcm9maWxlKSA9PT0gc3RyaW5naWZ5KG5ld1Byb2ZpbGUpKSB7XG5cdFx0XHRzZXRTaG93TmVzdGVkU2lkZWJhcihmYWxzZSlcblx0XHR9XG5cdFx0Ly8gZWxzZSBpZiBkYXRhIGlzIGNoYW5nZWQsIGFsZXJ0IHVzZXIgdG8gc2F2ZSBvciBkaXNjYXJkIHRoZWlyIGNoYW5nZVxuXHRcdGVsc2Uge1xuXHRcdFx0Y29uc3QgeCA9IGNvbmZpcm0oJ1RoZXJlIGFyZSBzb21lIGNoYW5nZWQgZGF0YSB0aGF0IGFyZSBub3Qgc2F2ZWQnKVxuXHRcdFx0aWYoeCkge1xuXHRcdFx0XHRkaXNwYXRjaChzYXZlUHJvZmlsZURhdGEocHJvZmlsZSkpXG5cdFx0XHRcdHNldFNob3dOZXN0ZWRTaWRlYmFyKGZhbHNlKVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdGNvbnN0IHNldFVzZXJBY2NvdW50ID0gKHNlcnZpY2UsIGlkZW50aWZpZXIpID0+IHtcblx0XHRjb25zdCBpZHggPSBhY2NvdW50TGlzdC5maW5kSW5kZXgoYWNjID0+IGFjYy5zZXJ2aWNlID09PSBzZXJ2aWNlKVxuXHRcdC8vIGlmIGlkZW50aWZpZXIgaXMgYW4gZW1wdHkgc3RyaW5nIHJlbW92ZSBpZHhcblx0XHRpZihpZGVudGlmaWVyLmxlbmd0aCA9PT0gMCkge1xuXHRcdFx0Y29uc3QgbmV3QWNjb3VudExpc3QgPSBhY2NvdW50TGlzdC5zbGljZSgwKVxuXHRcdFx0bmV3QWNjb3VudExpc3Quc3BsaWNlKGlkeCwgMSlcblxuXHRcdFx0c2V0QWNjb3VudExpc3QobmV3QWNjb3VudExpc3QpXG5cdFx0fVxuXHRcdGVsc2Uge1xuXHRcdFx0Ly8gdXBkYXRlIHRoZSBkYXRhIGlzIHNlcnZpY2UgYWxyZWFkeSBleGlzdFxuXHRcdFx0aWYoaWR4ID49IDApIHtcblx0XHRcdFx0Y29uc3QgbmV3QWNjb3VudExpc3QgPSBhY2NvdW50TGlzdC5zbGljZSgwKVxuXHRcdFx0XHRuZXdBY2NvdW50TGlzdFtpZHhdLmlkZW50aWZpZXIgPSBpZGVudGlmaWVyXG5cdFxuXHRcdFx0XHRzZXRBY2NvdW50TGlzdChuZXdBY2NvdW50TGlzdClcblx0XHRcdH1cblx0XHRcdC8vIGNyZWF0ZSB0aGUgZGF0YSBpcyBzZXJ2aWNlIG5vdCBleGlzdFxuXHRcdFx0ZWxzZSB7XG5cdFx0XHRcdGNvbnN0IG5ld0FjY291bnRMaXN0ID0gYWNjb3VudExpc3Quc2xpY2UoMClcblx0XHRcdFx0bmV3QWNjb3VudExpc3QucHVzaCh7XG5cdFx0XHRcdFx0c2VydmljZTogc2VydmljZSxcblx0XHRcdFx0XHRpZGVudGlmaWVyOiBpZGVudGlmaWVyXG5cdFx0XHRcdH0pXG5cdFxuXHRcdFx0XHRzZXRBY2NvdW50TGlzdChuZXdBY2NvdW50TGlzdClcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRjb25zdCBnZXRBY2NvdW50ID0gKHNlcnZpY2UpID0+IHtcblx0XHRjb25zdCBpZHggPSBhY2NvdW50TGlzdC5maW5kSW5kZXgoYWNjID0+IGFjYy5zZXJ2aWNlID09PSBzZXJ2aWNlKVxuXHRcdGlmKGlkeCA+PSAwKSB7XG5cdFx0XHRyZXR1cm4gYWNjb3VudExpc3RbaWR4XS5pZGVudGlmaWVyXG5cdFx0fVxuXHRcdHJldHVybiAnJ1xuXHR9XG5cblx0Y29uc3QgaXNTZWxlY3RlZFRoZW1lID0gKG5hbWUpID0+IHtcblx0XHRpZih0aGVtZS5uYW1lID09PSBuYW1lKSB7XG5cdFx0XHRyZXR1cm4gdHJ1ZVxuXHRcdH1cblx0XHRyZXR1cm4gZmFsc2Vcblx0fVxuXG5cdHJldHVybiAoXG5cdFx0PFJlYWN0LkZyYWdtZW50PlxuXHRcdFx0PHN0eWxlIGpzeD5cblx0XHRcdFx0e1xuXHRcdFx0XHRcdGBcblx0XHRcdFx0XHQubGRzLXJpbmctY29udGFpbmVyIHtcblx0XHRcdFx0XHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdC5sZHMtcmluZyB7XG5cdFx0XHRcdFx0XHRtYXJnaW4tbGVmdDogYXV0bztcblx0XHRcdFx0XHRcdGRpc3BsYXk6IGlubGluZS1ibG9jaztcblx0XHRcdFx0XHRcdHdpZHRoOiAxLjEyNXJlbTtcblx0XHRcdFx0XHRcdGhlaWdodDogMS4xMjVyZW07XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdC5sZHMtcmluZyBkaXYge1xuXHRcdFx0XHRcdFx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcblx0XHRcdFx0XHRcdGRpc3BsYXk6IGJsb2NrO1xuXHRcdFx0XHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xuXHRcdFx0XHRcdFx0d2lkdGg6IDFyZW07XG5cdFx0XHRcdFx0XHRoZWlnaHQ6IDFyZW07XG5cdFx0XHRcdFx0XHRtYXJnaW46IDJweDtcblx0XHRcdFx0XHRcdGJvcmRlcjogMnB4IHNvbGlkICM0Mjk5ZTE7XG5cdFx0XHRcdFx0XHRib3JkZXItcmFkaXVzOiA1MCU7XG5cdFx0XHRcdFx0XHRhbmltYXRpb246IGxkcy1yaW5nIDEuMnMgY3ViaWMtYmV6aWVyKDAuNSwgMCwgMC41LCAxKSBpbmZpbml0ZTtcblx0XHRcdFx0XHRcdGJvcmRlci1jb2xvcjogIzQyOTllMSB0cmFuc3BhcmVudCB0cmFuc3BhcmVudCB0cmFuc3BhcmVudDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0Lmxkcy1yaW5nIGRpdjpudGgtY2hpbGQoMSkge1xuXHRcdFx0XHRcdFx0YW5pbWF0aW9uLWRlbGF5OiAtMC40NXM7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdC5sZHMtcmluZyBkaXY6bnRoLWNoaWxkKDIpIHtcblx0XHRcdFx0XHRcdGFuaW1hdGlvbi1kZWxheTogLTAuM3M7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdC5sZHMtcmluZyBkaXY6bnRoLWNoaWxkKDMpIHtcblx0XHRcdFx0XHRcdGFuaW1hdGlvbi1kZWxheTogLTAuMTVzO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRAa2V5ZnJhbWVzIGxkcy1yaW5nIHtcblx0XHRcdFx0XHRcdDAlIHtcblx0XHRcdFx0XHRcdFx0dHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHQxMDAlIHtcblx0XHRcdFx0XHRcdFx0dHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XHRcdFx0XHRcdFxuXHRcdFx0XHRcdGBcblx0XHRcdFx0fVxuXHRcdFx0PC9zdHlsZT5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZml4ZWQgdG9wLTAgcmlnaHQtMCBib3R0b20tMCB3LTEwLzEyIG1kOnctNC8xMiBsZzp3LTMvMTIgYmctd2hpdGUgc2hhZG93LXhsXCIgc3R5bGU9e3tcblx0XHRcdFx0dHJhbnNmb3JtOiBgdHJhbnNsYXRlM2QoJHtzaG93UHJvZmlsZVNpZGViYXIgPyAwIDogYDEwMCVgfSwgMCwgMClgLFxuXHRcdFx0XHR0cmFuc2l0aW9uOiBgYWxsIC4zc2Bcblx0XHRcdH19PlxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0c2hvd1Byb2ZpbGVTaWRlYmFyICYmIChcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgei0xMCBiZy1ibGFjayByb3VuZGVkLWZ1bGwgcC0yXCIgb25DbGljaz17KCkgPT4gdG9nZ2xlUHJvZmlsZVNpZGViYXIoKX0gc3R5bGU9e3tcblx0XHRcdFx0XHRcdFx0d2lkdGg6IGAzMnB4YCxcblx0XHRcdFx0XHRcdFx0aGVpZ2h0OiBgMzJweGAsXG5cdFx0XHRcdFx0XHRcdGxlZnQ6IGAtMTZweGAsXG5cdFx0XHRcdFx0XHRcdHRvcDogYDE2cHhgXG5cdFx0XHRcdFx0XHR9fSA+XG5cdFx0XHRcdFx0XHRcdDxzdmcgd2lkdGg9XCIxMDAlXCIgaGVpZ2h0PVwiMTAwJVwiIHZpZXdCb3g9XCIwIDAgMzIgMzJcIiBmaWxsPVwibm9uZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cblx0XHRcdFx0XHRcdFx0XHQ8cGF0aCBmaWxsUnVsZT1cImV2ZW5vZGRcIiBjbGlwUnVsZT1cImV2ZW5vZGRcIiBkPVwiTTE2LjAwMDIgMTguODI4NUw3LjQxNDM2IDI3LjQxNDJMNC41ODU5NCAyNC41ODU4TDEzLjE3MTcgMTZMNC41ODU5NCA3LjQxNDI0TDcuNDE0MzYgNC41ODU4MkwxNi4wMDAyIDEzLjE3MTZMMjQuNTg1OSA0LjU4NTgyTDI3LjQxNDQgNy40MTQyNEwxOC44Mjg2IDE2TDI3LjQxNDQgMjQuNTg1OEwyNC41ODU5IDI3LjQxNDJMMTYuMDAwMiAxOC44Mjg1VjE4LjgyODVaXCIgZmlsbD1cIndoaXRlXCIvPlxuXHRcdFx0XHRcdFx0XHQ8L3N2Zz5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdClcblx0XHRcdFx0fVxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIGgtZnVsbCB3LWZ1bGwgb3ZlcmZsb3cteC1oaWRkZW5cIj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIHRvcC0wIHJpZ2h0LTAgYm90dG9tLTAgdy1mdWxsIGJnLXdoaXRlIHB5LTEyIG1kOnB5LTE2IHB4LTRcIiBzdHlsZT17e1xuXHRcdFx0XHRcdFx0dHJhbnNmb3JtOiBgdHJhbnNsYXRlM2QoJHshc2hvd05lc3RlZFNpZGViYXIgPyAwIDogYC0xMDAlYH0sIDAsIDApYCxcblx0XHRcdFx0XHRcdHRyYW5zaXRpb246IGBhbGwgLjNzYFxuXHRcdFx0XHRcdH19PlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBweS0yXCI+XG5cdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cInRleHQtMnhsIHRleHQtZ3JheS05MDAgZm9udC1zZW1pYm9sZFwiPkVkaXQgWW91ciBTaXRlPC9wPlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInB5LTIgbWF4LWgtZnVsbCBvdmVyZmxvdy15LXNjcm9sbFwiPlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IG9uQ2xpY2s9eygpID0+IHNldFNob3dOZXN0ZWRTaWRlYmFyKCdwcm9maWxlJyl9IGNsYXNzTmFtZT1cImN1cnNvci1wb2ludGVyIGgtMTIgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIGJvcmRlci1zb2xpZCBib3JkZXItYiBib3JkZXItZ3JheS0zMDBcIj5cblx0XHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJ0ZXh0LWxnIHRleHQtZ3JheS04MDAgdy0xLzIgZm9udC1tZWRpdW1cIj5Qcm9maWxlIDwvcD5cblx0XHRcdFx0XHRcdFx0XHQ8c3ZnIHdpZHRoPVwiMTZcIiBoZWlnaHQ9XCIxNlwiIHZpZXdCb3g9XCIwIDAgMTYgMTZcIiBmaWxsPVwibm9uZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cblx0XHRcdFx0XHRcdFx0XHRcdDxwYXRoIGZpbGw9XCIjYTBhZWMwXCIgZmlsbFJ1bGU9XCJldmVub2RkXCIgY2xpcFJ1bGU9XCJldmVub2RkXCIgZD1cIk05LjU4NTg2IDguMDAwMDFMNC4yOTI5NyAyLjcwNzEyTDUuNzA3MTggMS4yOTI5MUwxMi40MTQzIDguMDAwMDFMNS43MDcxOCAxNC43MDcxTDQuMjkyOTcgMTMuMjkyOUw5LjU4NTg2IDguMDAwMDFaXCIvPlxuXHRcdFx0XHRcdFx0XHRcdDwvc3ZnPlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0PGRpdiBvbkNsaWNrPXsoKSA9PiBzZXRTaG93TmVzdGVkU2lkZWJhcignc29jaWFsJyl9ICBjbGFzc05hbWU9XCJjdXJzb3ItcG9pbnRlciBoLTEyIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBib3JkZXItc29saWQgYm9yZGVyLWIgYm9yZGVyLWdyYXktMzAwXCI+XG5cdFx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwidGV4dC1sZyB0ZXh0LWdyYXktODAwIHctMS8yIGZvbnQtbWVkaXVtXCI+U29jaWFsPC9wPlxuXHRcdFx0XHRcdFx0XHRcdDxzdmcgd2lkdGg9XCIxNlwiIGhlaWdodD1cIjE2XCIgdmlld0JveD1cIjAgMCAxNiAxNlwiIGZpbGw9XCJub25lXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxuXHRcdFx0XHRcdFx0XHRcdFx0PHBhdGggZmlsbD1cIiNhMGFlYzBcIiBmaWxsUnVsZT1cImV2ZW5vZGRcIiBjbGlwUnVsZT1cImV2ZW5vZGRcIiBkPVwiTTkuNTg1ODYgOC4wMDAwMUw0LjI5Mjk3IDIuNzA3MTJMNS43MDcxOCAxLjI5MjkxTDEyLjQxNDMgOC4wMDAwMUw1LjcwNzE4IDE0LjcwNzFMNC4yOTI5NyAxMy4yOTI5TDkuNTg1ODYgOC4wMDAwMVpcIi8+XG5cdFx0XHRcdFx0XHRcdFx0PC9zdmc+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IG9uQ2xpY2s9eygpID0+IHNldFNob3dOZXN0ZWRTaWRlYmFyKCd0aGVtZScpfSAgY2xhc3NOYW1lPVwiY3Vyc29yLXBvaW50ZXIgaC0xMiBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gYm9yZGVyLXNvbGlkIGJvcmRlci1iIGJvcmRlci1ncmF5LTMwMFwiPlxuXHRcdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cInRleHQtbGcgdGV4dC1ncmF5LTgwMCB3LTEvMiBmb250LW1lZGl1bVwiPlRoZW1lPC9wPlxuXHRcdFx0XHRcdFx0XHRcdDxzdmcgd2lkdGg9XCIxNlwiIGhlaWdodD1cIjE2XCIgdmlld0JveD1cIjAgMCAxNiAxNlwiIGZpbGw9XCJub25lXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxuXHRcdFx0XHRcdFx0XHRcdFx0PHBhdGggZmlsbD1cIiNhMGFlYzBcIiBmaWxsUnVsZT1cImV2ZW5vZGRcIiBjbGlwUnVsZT1cImV2ZW5vZGRcIiBkPVwiTTkuNTg1ODYgOC4wMDAwMUw0LjI5Mjk3IDIuNzA3MTJMNS43MDcxOCAxLjI5MjkxTDEyLjQxNDMgOC4wMDAwMUw1LjcwNzE4IDE0LjcwNzFMNC4yOTI5NyAxMy4yOTI5TDkuNTg1ODYgOC4wMDAwMVpcIi8+XG5cdFx0XHRcdFx0XHRcdFx0PC9zdmc+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSB0b3AtMCByaWdodC0wIGJvdHRvbS0wIHctZnVsbCBiZy13aGl0ZSBweS0xMiBtZDpweS0xNiBweC00XCIgc3R5bGU9e3tcblx0XHRcdFx0XHRcdHRyYW5zZm9ybTogYHRyYW5zbGF0ZTNkKCR7c2hvd05lc3RlZFNpZGViYXIgPyAwIDogYDEwMCVgfSwgMCwgMClgLFxuXHRcdFx0XHRcdFx0dHJhbnNpdGlvbjogYGFsbCAuM3NgXG5cdFx0XHRcdFx0fX0+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIG1heC1oLWZ1bGwgb3ZlcmZsb3cteS1zY3JvbGwgYm9yZGVyLXNvbGlkIGJvcmRlci1iIGJvcmRlci1ncmF5LTMwMCBweS0yXCI+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwidy0xLzNcIiBvbkNsaWNrPXsoKSA9PiBiYWNrKCl9PlxuXHRcdFx0XHRcdFx0XHRcdDxzdmcgd2lkdGg9XCIxNlwiIGhlaWdodD1cIjE2XCIgdmlld0JveD1cIjAgMCAxNiAxNlwiIGZpbGw9XCJub25lXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxuXHRcdFx0XHRcdFx0XHRcdFx0PHBhdGggZmlsbFJ1bGU9XCJldmVub2RkXCIgY2xpcFJ1bGU9XCJldmVub2RkXCIgZD1cIk0xMS43MDcgMTMuMjkyOUwxMC4yOTI4IDE0LjcwNzFMMy41ODU2OSA4LjAwMDAxTDEwLjI5MjggMS4yOTI5MUwxMS43MDcgMi43MDcxMkw2LjQxNDEyIDguMDAwMDFMMTEuNzA3IDEzLjI5MjlaXCIgZmlsbD1cImJsYWNrXCIvPlxuXHRcdFx0XHRcdFx0XHRcdDwvc3ZnPlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ3LTEvMyB0ZXh0LWNlbnRlclwiID5cblx0XHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJ0ZXh0LWxnIHRleHQtZ3JheS04MDAgZm9udC1zZW1pYm9sZCBjYXBpdGFsaXplXCI+e3Nob3dOZXN0ZWRTaWRlYmFyfTwvcD5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwidy0xLzMgdGV4dC1yaWdodFwiIG9uQ2xpY2s9eyhlKSA9PiBzdWJtaXQoZSl9PlxuXHRcdFx0XHRcdFx0XHRcdHsgc3VibWl0U3RhdGUgPT09ICdwZW5kaW5nJyAmJiAoXG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImxkcy1yaW5nLWNvbnRhaW5lclwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImxkcy1yaW5nXCI+PGRpdj48L2Rpdj48ZGl2PjwvZGl2PjxkaXY+PC9kaXY+PGRpdj48L2Rpdj48L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdCl9XG5cdFx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdFx0c3VibWl0U3RhdGUgPT09ICdmdWxmaWxsZWQnICYmIChcblx0XHRcdFx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwidGV4dC1sZyB0ZXh0LWJsdWUtNTAwIGZvbnQtbWVkaXVtIGNhcGl0YWxpemVcIj5TYXZlZDwvcD5cblx0XHRcdFx0XHRcdFx0XHRcdClcblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdFx0c3VibWl0U3RhdGUgPT09ICcnICYmIChcblx0XHRcdFx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwidGV4dC1sZyB0ZXh0LWJsdWUtNTAwIGZvbnQtbWVkaXVtIGNhcGl0YWxpemVcIj5TYXZlPC9wPlxuXHRcdFx0XHRcdFx0XHRcdFx0KVxuXHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0c2hvd05lc3RlZFNpZGViYXIgPT09ICdwcm9maWxlJyAmJiAoXG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJweS0yIG1heC1oLWZ1bGwgb3ZlcmZsb3cteS1zY3JvbGxcIj5cblx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibWItNFwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGxhYmVsPkF2YXRhcjwvbGFiZWw+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGlucHV0IGNsYXNzTmFtZT1cImFic29sdXRlIGluc2V0LTAgb3BhY2l0eS0wIHctZnVsbFwiIHR5cGU9XCJmaWxlXCIgb25DaGFuZ2U9eyhlKSA9PiB1cGRhdGVBdmF0YXJVcmwoZS50YXJnZXQuZmlsZXMpfSAvPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiYm9yZGVyLXNvbGlkIGJvcmRlciByb3VuZGVkLXNtIGJvcmRlci1ncmF5LTMwMFwiIHN0eWxlPXt7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRoZWlnaHQ6IGAyMDBweGAsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR3aWR0aDogYDEwMCVgLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0YmFja2dyb3VuZFNpemU6IGBjb3ZlcmAsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRiYWNrZ3JvdW5kUG9zaXRpb246IGBjZW50ZXJgLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0YmFja2dyb3VuZEltYWdlOiBgdXJsKCR7YXZhdGFyVXJsfSlgXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0fX0+PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm1iLTRcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJweC0zIHB5LTEgZmxleCBmbGV4LWNvbCBib3JkZXItc29saWQgYm9yZGVyIHJvdW5kZWQtc20gYm9yZGVyLWdyYXktMzAwXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGxhYmVsIGNsYXNzTmFtZT1cInRleHQteHMgZm9udC1saWdodCB0ZXh0LWdyYXktNjAwXCI+TmFtZTwvbGFiZWw+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGlucHV0IHBsYWNlaG9sZGVyPVwiWW91ciBuYW1lXCIgY2xhc3NOYW1lPVwiZm9jdXM6b3V0bGluZS1ub25lXCIgdHlwZT1cInRleHRcIiB2YWx1ZT17bmFtZX0gb25DaGFuZ2U9eyhlKSA9PiBzZXROYW1lKGUudGFyZ2V0LnZhbHVlKX0gLz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibWItNFwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInB4LTMgcHktMSBmbGV4IGZsZXgtY29sIGJvcmRlci1zb2xpZCBib3JkZXIgcm91bmRlZC1zbSBib3JkZXItZ3JheS0zMDBcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8bGFiZWwgY2xhc3NOYW1lPVwidGV4dC14cyBmb250LWxpZ2h0IHRleHQtZ3JheS02MDBcIj5EZXNjcmlwdGlvbjwvbGFiZWw+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHRleHRhcmVhIHBsYWNlaG9sZGVyPVwiVGVsbCB0aGUgd29ybGQgYWJvdXQgeW91cnNlbGZcIiByb3dzPXs4fSBjbGFzc05hbWU9XCJmb2N1czpvdXRsaW5lLW5vbmUgcmVzaXplLW5vbmVcIiB2YWx1ZT17ZGVzY3JpcHRpb259IG9uQ2hhbmdlPXsoZSkgPT4gc2V0RGVzY3JpcHRpb24oZS50YXJnZXQudmFsdWUpfSAvPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQpXG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdHNob3dOZXN0ZWRTaWRlYmFyID09PSAnc29jaWFsJyAmJiAoXG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJweS0yIG1heC1oLWZ1bGwgb3ZlcmZsb3cteS1zY3JvbGxcIj5cblx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibWItNFwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInB4LTMgcHktMSBmbGV4IGZsZXgtY29sIGJvcmRlci1zb2xpZCBib3JkZXIgcm91bmRlZC1zbSBib3JkZXItZ3JheS0zMDBcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8bGFiZWwgY2xhc3NOYW1lPVwidGV4dC14cyBmb250LWxpZ2h0IHRleHQtZ3JheS02MDBcIj5mYWNlYm9vay5jb20vPC9sYWJlbD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8aW5wdXQgcGxhY2Vob2xkZXI9XCJ1c2VybmFtZVwiIGNsYXNzTmFtZT1cImZvY3VzOm91dGxpbmUtbm9uZVwiIHR5cGU9XCJ0ZXh0XCIgdmFsdWU9e2dldEFjY291bnQoJ2ZhY2Vib29rJyl9IG9uQ2hhbmdlPXsoZSkgPT4gc2V0VXNlckFjY291bnQoJ2ZhY2Vib29rJywgZS50YXJnZXQudmFsdWUpfSAvPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJtYi00XCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicHgtMyBweS0xIGZsZXggZmxleC1jb2wgYm9yZGVyLXNvbGlkIGJvcmRlciByb3VuZGVkLXNtIGJvcmRlci1ncmF5LTMwMFwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxsYWJlbCBjbGFzc05hbWU9XCJ0ZXh0LXhzIGZvbnQtbGlnaHQgdGV4dC1ncmF5LTYwMFwiPnR3aXR0ZXIuY29tLzwvbGFiZWw+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGlucHV0IHBsYWNlaG9sZGVyPVwidXNlcm5hbWVcIiBjbGFzc05hbWU9XCJmb2N1czpvdXRsaW5lLW5vbmVcIiB0eXBlPVwidGV4dFwiIHZhbHVlPXtnZXRBY2NvdW50KCd0d2l0dGVyJyl9IG9uQ2hhbmdlPXsoZSkgPT4gc2V0VXNlckFjY291bnQoJ3R3aXR0ZXInLCBlLnRhcmdldC52YWx1ZSl9IC8+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm1iLTRcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJweC0zIHB5LTEgZmxleCBmbGV4LWNvbCBib3JkZXItc29saWQgYm9yZGVyIHJvdW5kZWQtc20gYm9yZGVyLWdyYXktMzAwXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGxhYmVsIGNsYXNzTmFtZT1cInRleHQteHMgZm9udC1saWdodCB0ZXh0LWdyYXktNjAwXCI+aW5zdGFncmFtLmNvbS88L2xhYmVsPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxpbnB1dCBwbGFjZWhvbGRlcj1cInVzZXJuYW1lXCIgY2xhc3NOYW1lPVwiZm9jdXM6b3V0bGluZS1ub25lXCIgdHlwZT1cInRleHRcIiB2YWx1ZT17Z2V0QWNjb3VudCgnaW5zdGFncmFtJyl9IG9uQ2hhbmdlPXsoZSkgPT4gc2V0VXNlckFjY291bnQoJ2luc3RhZ3JhbScsIGUudGFyZ2V0LnZhbHVlKX0gLz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0KVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRzaG93TmVzdGVkU2lkZWJhciA9PT0gJ3RoZW1lJyAmJiAoXG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJvdmVyZmxvdy15LXNjcm9sbCBtYXgtaC1mdWxsIHB5LTIgbWF4LWgtZnVsbCBvdmVyZmxvdy15LXNjcm9sbFwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdFx0XHR0aGVtZUxpc3QubWFwKHRoZW1lID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJtYi00XCIga2V5PXt0aGVtZS5uYW1lfT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ey8qIG9uY2xpY2sgY2hhbmdlIHRoZW1lICovfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IG9uQ2xpY2s9eygpID0+IHNldFRoZW1lKHRoZW1lKX0+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGxhYmVsPnt0aGVtZS5uYW1lfTwvbGFiZWw+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBib3JkZXItc29saWQgYm9yZGVyIHJvdW5kZWQtc20gYm9yZGVyLWdyYXktMzAwXCIgc3R5bGU9e3tcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGhlaWdodDogYDIwMHB4YCxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHdpZHRoOiBgMTAwJWAsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRiYWNrZ3JvdW5kU2l6ZTogYGNvdmVyYCxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGJhY2tncm91bmRQb3NpdGlvbjogYGNlbnRlcmAsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoJHthdmF0YXJVcmx9KWBcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9fT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHsgaXNTZWxlY3RlZFRoZW1lKHRoZW1lLm5hbWUpICYmIChcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSBpbnNldC0wIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyXCIgc3R5bGU9e3tcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRiYWNrZ3JvdW5kQ29sb3I6IGByZ2JhKDAsMCwwLDAuMylgLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9fT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktMjAwXCI+U2VsZWN0ZWQ8L3A+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0KX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQpXG5cdFx0XHRcdFx0XHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdClcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L1JlYWN0LkZyYWdtZW50PlxuXHQpXG59XG5cbmV4cG9ydCBkZWZhdWx0IFNpZGViYXJcblx0XHRcdCJdfQ== */\n/*@ sourceURL=/Users/riqi/Projects/persona-app/dashboard/components/sidebar.js */"), __jsx("div", {
    style: {
      transform: `translate3d(${showProfileSidebar ? 0 : `100%`}, 0, 0)`,
      transition: `all .3s`
    },
    className: "jsx-2392098432" + " " + "fixed top-0 right-0 bottom-0 w-10/12 md:w-4/12 lg:w-3/12 bg-white shadow-xl"
  }, showProfileSidebar && __jsx("div", {
    onClick: () => toggleProfileSidebar(),
    style: {
      width: `32px`,
      height: `32px`,
      left: `-16px`,
      top: `16px`
    },
    className: "jsx-2392098432" + " " + "absolute z-10 bg-black rounded-full p-2"
  }, __jsx("svg", {
    width: "100%",
    height: "100%",
    viewBox: "0 0 32 32",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: "jsx-2392098432"
  }, __jsx("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M16.0002 18.8285L7.41436 27.4142L4.58594 24.5858L13.1717 16L4.58594 7.41424L7.41436 4.58582L16.0002 13.1716L24.5859 4.58582L27.4144 7.41424L18.8286 16L27.4144 24.5858L24.5859 27.4142L16.0002 18.8285V18.8285Z",
    fill: "white",
    className: "jsx-2392098432"
  }))), __jsx("div", {
    className: "jsx-2392098432" + " " + "relative h-full w-full overflow-x-hidden"
  }, __jsx("div", {
    style: {
      transform: `translate3d(${!showNestedSidebar ? 0 : `-100%`}, 0, 0)`,
      transition: `all .3s`
    },
    className: "jsx-2392098432" + " " + "absolute top-0 right-0 bottom-0 w-full bg-white py-12 md:py-16 px-4"
  }, __jsx("div", {
    className: "jsx-2392098432" + " " + "flex items-center py-2"
  }, __jsx("p", {
    className: "jsx-2392098432" + " " + "text-2xl text-gray-900 font-semibold"
  }, "Edit Your Site")), __jsx("div", {
    className: "jsx-2392098432" + " " + "py-2 max-h-full overflow-y-scroll"
  }, __jsx("div", {
    onClick: () => setShowNestedSidebar('profile'),
    className: "jsx-2392098432" + " " + "cursor-pointer h-12 flex items-center justify-between border-solid border-b border-gray-300"
  }, __jsx("p", {
    className: "jsx-2392098432" + " " + "text-lg text-gray-800 w-1/2 font-medium"
  }, "Profile "), __jsx("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 16 16",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: "jsx-2392098432"
  }, __jsx("path", {
    fill: "#a0aec0",
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M9.58586 8.00001L4.29297 2.70712L5.70718 1.29291L12.4143 8.00001L5.70718 14.7071L4.29297 13.2929L9.58586 8.00001Z",
    className: "jsx-2392098432"
  }))), __jsx("div", {
    onClick: () => setShowNestedSidebar('social'),
    className: "jsx-2392098432" + " " + "cursor-pointer h-12 flex items-center justify-between border-solid border-b border-gray-300"
  }, __jsx("p", {
    className: "jsx-2392098432" + " " + "text-lg text-gray-800 w-1/2 font-medium"
  }, "Social"), __jsx("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 16 16",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: "jsx-2392098432"
  }, __jsx("path", {
    fill: "#a0aec0",
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M9.58586 8.00001L4.29297 2.70712L5.70718 1.29291L12.4143 8.00001L5.70718 14.7071L4.29297 13.2929L9.58586 8.00001Z",
    className: "jsx-2392098432"
  }))), __jsx("div", {
    onClick: () => setShowNestedSidebar('theme'),
    className: "jsx-2392098432" + " " + "cursor-pointer h-12 flex items-center justify-between border-solid border-b border-gray-300"
  }, __jsx("p", {
    className: "jsx-2392098432" + " " + "text-lg text-gray-800 w-1/2 font-medium"
  }, "Theme"), __jsx("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 16 16",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: "jsx-2392098432"
  }, __jsx("path", {
    fill: "#a0aec0",
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M9.58586 8.00001L4.29297 2.70712L5.70718 1.29291L12.4143 8.00001L5.70718 14.7071L4.29297 13.2929L9.58586 8.00001Z",
    className: "jsx-2392098432"
  }))))), __jsx("div", {
    style: {
      transform: `translate3d(${showNestedSidebar ? 0 : `100%`}, 0, 0)`,
      transition: `all .3s`
    },
    className: "jsx-2392098432" + " " + "absolute top-0 right-0 bottom-0 w-full bg-white py-12 md:py-16 px-4"
  }, __jsx("div", {
    className: "jsx-2392098432" + " " + "flex items-center max-h-full overflow-y-scroll border-solid border-b border-gray-300 py-2"
  }, __jsx("div", {
    onClick: () => back(),
    className: "jsx-2392098432" + " " + "w-1/3"
  }, __jsx("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 16 16",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: "jsx-2392098432"
  }, __jsx("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M11.707 13.2929L10.2928 14.7071L3.58569 8.00001L10.2928 1.29291L11.707 2.70712L6.41412 8.00001L11.707 13.2929Z",
    fill: "black",
    className: "jsx-2392098432"
  }))), __jsx("div", {
    className: "jsx-2392098432" + " " + "w-1/3 text-center"
  }, __jsx("p", {
    className: "jsx-2392098432" + " " + "text-lg text-gray-800 font-semibold capitalize"
  }, showNestedSidebar)), __jsx("div", {
    onClick: e => submit(e),
    className: "jsx-2392098432" + " " + "w-1/3 text-right"
  }, submitState === 'pending' && __jsx("div", {
    className: "jsx-2392098432" + " " + "lds-ring-container"
  }, __jsx("div", {
    className: "jsx-2392098432" + " " + "lds-ring"
  }, __jsx("div", {
    className: "jsx-2392098432"
  }), __jsx("div", {
    className: "jsx-2392098432"
  }), __jsx("div", {
    className: "jsx-2392098432"
  }), __jsx("div", {
    className: "jsx-2392098432"
  }))), submitState === 'fulfilled' && __jsx("p", {
    className: "jsx-2392098432" + " " + "text-lg text-blue-500 font-medium capitalize"
  }, "Saved"), submitState === '' && __jsx("p", {
    className: "jsx-2392098432" + " " + "text-lg text-blue-500 font-medium capitalize"
  }, "Save"))), showNestedSidebar === 'profile' && __jsx("div", {
    className: "jsx-2392098432" + " " + "py-2 max-h-full overflow-y-scroll"
  }, __jsx("div", {
    className: "jsx-2392098432" + " " + "mb-4"
  }, __jsx("div", {
    className: "jsx-2392098432" + " " + "relative"
  }, __jsx("label", {
    className: "jsx-2392098432"
  }, "Avatar"), __jsx("input", {
    type: "file",
    onChange: e => updateAvatarUrl(e.target.files),
    className: "jsx-2392098432" + " " + "absolute inset-0 opacity-0 w-full"
  }), __jsx("div", {
    style: {
      height: `200px`,
      width: `100%`,
      backgroundSize: `cover`,
      backgroundPosition: `center`,
      backgroundImage: `url(${avatarUrl})`
    },
    className: "jsx-2392098432" + " " + "border-solid border rounded-sm border-gray-300"
  }))), __jsx("div", {
    className: "jsx-2392098432" + " " + "mb-4"
  }, __jsx("div", {
    className: "jsx-2392098432" + " " + "px-3 py-1 flex flex-col border-solid border rounded-sm border-gray-300"
  }, __jsx("label", {
    className: "jsx-2392098432" + " " + "text-xs font-light text-gray-600"
  }, "Name"), __jsx("input", {
    placeholder: "Your name",
    type: "text",
    value: name,
    onChange: e => setName(e.target.value),
    className: "jsx-2392098432" + " " + "focus:outline-none"
  }))), __jsx("div", {
    className: "jsx-2392098432" + " " + "mb-4"
  }, __jsx("div", {
    className: "jsx-2392098432" + " " + "px-3 py-1 flex flex-col border-solid border rounded-sm border-gray-300"
  }, __jsx("label", {
    className: "jsx-2392098432" + " " + "text-xs font-light text-gray-600"
  }, "Description"), __jsx("textarea", {
    placeholder: "Tell the world about yourself",
    rows: 8,
    value: description,
    onChange: e => setDescription(e.target.value),
    className: "jsx-2392098432" + " " + "focus:outline-none resize-none"
  })))), showNestedSidebar === 'social' && __jsx("div", {
    className: "jsx-2392098432" + " " + "py-2 max-h-full overflow-y-scroll"
  }, __jsx("div", {
    className: "jsx-2392098432" + " " + "mb-4"
  }, __jsx("div", {
    className: "jsx-2392098432" + " " + "px-3 py-1 flex flex-col border-solid border rounded-sm border-gray-300"
  }, __jsx("label", {
    className: "jsx-2392098432" + " " + "text-xs font-light text-gray-600"
  }, "facebook.com/"), __jsx("input", {
    placeholder: "username",
    type: "text",
    value: getAccount('facebook'),
    onChange: e => setUserAccount('facebook', e.target.value),
    className: "jsx-2392098432" + " " + "focus:outline-none"
  }))), __jsx("div", {
    className: "jsx-2392098432" + " " + "mb-4"
  }, __jsx("div", {
    className: "jsx-2392098432" + " " + "px-3 py-1 flex flex-col border-solid border rounded-sm border-gray-300"
  }, __jsx("label", {
    className: "jsx-2392098432" + " " + "text-xs font-light text-gray-600"
  }, "twitter.com/"), __jsx("input", {
    placeholder: "username",
    type: "text",
    value: getAccount('twitter'),
    onChange: e => setUserAccount('twitter', e.target.value),
    className: "jsx-2392098432" + " " + "focus:outline-none"
  }))), __jsx("div", {
    className: "jsx-2392098432" + " " + "mb-4"
  }, __jsx("div", {
    className: "jsx-2392098432" + " " + "px-3 py-1 flex flex-col border-solid border rounded-sm border-gray-300"
  }, __jsx("label", {
    className: "jsx-2392098432" + " " + "text-xs font-light text-gray-600"
  }, "instagram.com/"), __jsx("input", {
    placeholder: "username",
    type: "text",
    value: getAccount('instagram'),
    onChange: e => setUserAccount('instagram', e.target.value),
    className: "jsx-2392098432" + " " + "focus:outline-none"
  })))), showNestedSidebar === 'theme' && __jsx("div", {
    className: "jsx-2392098432" + " " + "overflow-y-scroll max-h-full py-2 max-h-full overflow-y-scroll"
  }, themeList.map(theme => {
    return __jsx("div", {
      key: theme.name,
      className: "jsx-2392098432" + " " + "mb-4"
    }, __jsx("div", {
      onClick: () => setTheme(theme),
      className: "jsx-2392098432"
    }, __jsx("label", {
      className: "jsx-2392098432"
    }, theme.name), __jsx("div", {
      style: {
        height: `200px`,
        width: `100%`,
        backgroundSize: `cover`,
        backgroundPosition: `center`,
        backgroundImage: `url(${avatarUrl})`
      },
      className: "jsx-2392098432" + " " + "relative border-solid border rounded-sm border-gray-300"
    }, isSelectedTheme(theme.name) && __jsx("div", {
      style: {
        backgroundColor: `rgba(0,0,0,0.3)`
      },
      className: "jsx-2392098432" + " " + "absolute inset-0 flex items-center justify-center"
    }, __jsx("p", {
      className: "jsx-2392098432" + " " + "text-gray-200"
    }, "Selected")))));
  }))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Sidebar);

/***/ }),

/***/ "./lib/redux.js":
/*!**********************!*\
  !*** ./lib/redux.js ***!
  \**********************/
/*! exports provided: withRedux */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withRedux", function() { return withRedux; });
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "../node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-properties */ "../node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptors */ "../node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptors.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptor */ "../node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-symbols */ "../node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "../node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "../node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "../node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _stores__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../stores */ "./stores.js");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! next/app */ "../node_modules/next/app.js");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_11__);








var __jsx = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default()(object); if (_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default.a) { var symbols = _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default()(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(target, key, source[key]); }); } else if (_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default.a) { _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default()(target, _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default()(source)); } else { ownKeys(source).forEach(function (key) { _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, key, _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(source, key)); }); } } return target; }





const withRedux = (PageComponent, {
  ssr = true
} = {}) => {
  const WithRedux = (_ref) => {
    let {
      initialReduxState
    } = _ref,
        props = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_7__["default"])(_ref, ["initialReduxState"]);

    const store = getOrInitializeStore(initialReduxState);
    return __jsx(react_redux__WEBPACK_IMPORTED_MODULE_9__["Provider"], {
      store: store
    }, __jsx(PageComponent, props));
  }; // Make sure people don't use this HOC on _app.js level


  if (true) {
    const isAppHoc = PageComponent === next_app__WEBPACK_IMPORTED_MODULE_11___default.a || PageComponent.prototype instanceof next_app__WEBPACK_IMPORTED_MODULE_11___default.a;

    if (isAppHoc) {
      throw new Error('The withRedux HOC only works with PageComponents');
    }
  } // Set the correct displayName in development


  if (true) {
    const displayName = PageComponent.displayName || PageComponent.name || 'Component';
    WithRedux.displayName = `withRedux(${displayName})`;
  }

  if (ssr || PageComponent.getInitialProps) {
    WithRedux.getInitialProps = async context => {
      // Get or Create the store with `undefined` as initialState
      // This allows you to set a custom default initialState
      const reduxStore = getOrInitializeStore(); // Provide the store to getInitialProps of pages

      context.reduxStore = reduxStore; // Run getInitialProps from HOCed PageComponent

      const pageProps = typeof PageComponent.getInitialProps === 'function' ? await PageComponent.getInitialProps(context) : {}; // Pass props to PageComponent

      return _objectSpread({}, pageProps, {
        initialReduxState: reduxStore.getState()
      });
    };
  }

  return WithRedux;
};
let reduxStore;

const getOrInitializeStore = initialState => {
  // Always make a new store if server, otherwise state is shared between requests
  if (true) {
    return Object(_stores__WEBPACK_IMPORTED_MODULE_10__["initializeStore"])(initialState);
  } // Create store if unavailable on the client and set it on the window object


  if (!reduxStore) {
    reduxStore = Object(_stores__WEBPACK_IMPORTED_MODULE_10__["initializeStore"])(initialState);
  }

  return reduxStore;
};

/***/ }),

/***/ "./pages/dash.js":
/*!***********************!*\
  !*** ./pages/dash.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/array/is-array */ "../node_modules/@babel/runtime-corejs2/core-js/array/is-array.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "../node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "../node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/promise */ "../node_modules/@babel/runtime-corejs2/core-js/promise.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_frame_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-frame-component */ "react-frame-component");
/* harmony import */ var react_frame_component__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_frame_component__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _lib_redux__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../lib/redux */ "./lib/redux.js");
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/layout */ "./components/layout.js");
/* harmony import */ var _components_meta__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/meta */ "./components/meta.js");
/* harmony import */ var _components_nav__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/nav */ "./components/nav.js");
/* harmony import */ var _components_sidebar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/sidebar */ "./components/sidebar.js");
/* harmony import */ var _actions_auth__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../actions/auth */ "./actions/auth.js");
/* harmony import */ var _actions_profile__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../actions/profile */ "./actions/profile.js");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../api */ "./api/index.js");
/* harmony import */ var anchorme__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! anchorme */ "anchorme");
/* harmony import */ var anchorme__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(anchorme__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var handlebars__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! handlebars */ "handlebars");
/* harmony import */ var handlebars__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(handlebars__WEBPACK_IMPORTED_MODULE_18__);




var __jsx = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement;
















const readFileAsBuffer = file => {
  const temporaryFileReader = new FileReader();
  return new _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_3___default.a((resolve, reject) => {
    temporaryFileReader.onload = () => {
      resolve(temporaryFileReader.result);
    };

    temporaryFileReader.readAsArrayBuffer(file);
  });
};

const Dashboard = () => {
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_7__["useDispatch"])();
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_6__["useRouter"])();
  const {
    0: name,
    1: setName
  } = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])('');
  const {
    0: description,
    1: setDescription
  } = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])('');
  const {
    0: avatarUrl,
    1: setAvatarUrl
  } = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])('');
  const {
    0: avatarFile,
    1: setAvatarFile
  } = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])('');
  const {
    0: accountList,
    1: setAccountList
  } = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])([]);
  const {
    0: themeList,
    1: setThemeList
  } = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])([]);
  const {
    0: theme,
    1: setTheme
  } = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])('');
  const {
    0: template,
    1: setTemplate
  } = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])('');
  const {
    0: submitState,
    1: setSubmitState
  } = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])('');
  const authData = Object(react_redux__WEBPACK_IMPORTED_MODULE_7__["useSelector"])(state => state.auth.authData);
  const profile = Object(react_redux__WEBPACK_IMPORTED_MODULE_7__["useSelector"])(state => state.profile);
  const {
    0: showProfileSidebar,
    1: setShowProfileSidebar
  } = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(true);

  const submit = async e => {
    e.preventDefault();
    setSubmitState('pending');

    try {
      const newProfile = {
        name: name,
        description: description,
        avatarUrl: avatarUrl,
        accountList: accountList,
        theme: theme
      };

      if (avatarFile) {
        const buff = await readFileAsBuffer(avatarFile);
        const newAvatarUrl = await _api__WEBPACK_IMPORTED_MODULE_16__["blockstackAPI"].session.putFile('avatar.png', buff, {
          encrypt: false
        });
        newProfile.avatarUrl = newAvatarUrl;
      }

      await _api__WEBPACK_IMPORTED_MODULE_16__["blockstackAPI"].session.putFile('profile.json', _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_2___default()(newProfile), {
        encrypt: false
      });
      dispatch(Object(_actions_profile__WEBPACK_IMPORTED_MODULE_15__["saveProfileData"])(newProfile));
      setSubmitState('fulfilled');
      setTimeout(() => {
        setSubmitState('');
      }, 1000);
    } catch (err) {
      setSubmitState('rejected');
    }
  };

  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(() => {
    const checkAuthData = async () => {
      if (_api__WEBPACK_IMPORTED_MODULE_16__["blockstackAPI"].session.isUserSignedIn()) {
        if (!authData) {
          const getAuthData = await _api__WEBPACK_IMPORTED_MODULE_16__["blockstackAPI"].session.loadUserData();
          dispatch(Object(_actions_auth__WEBPACK_IMPORTED_MODULE_14__["saveAuthData"])(getAuthData));
        }

        if (_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1___default()(profile).length === 0) {
          const getProfile = await _api__WEBPACK_IMPORTED_MODULE_16__["blockstackAPI"].session.getFile('profile.json', {
            decrypt: false
          });

          if (getProfile) {
            const parsedProfile = JSON.parse(getProfile);
            dispatch(Object(_actions_profile__WEBPACK_IMPORTED_MODULE_15__["saveProfileData"])(parsedProfile));
          } else {
            // create new user profile
            const avatarExist = authData.profile.image.find(img => img.name === 'avatar') || {}; // set default data

            let name = authData.profile.name || '';
            let description = authData.profile.description || '';
            let avatarUrl = avatarExist.contentUrl || '';
            let theme = {};
            const newProfile = {
              name: name,
              description: description,
              avatarUrl: avatarUrl,
              theme: theme,
              accountList: []
            };
            await _api__WEBPACK_IMPORTED_MODULE_16__["blockstackAPI"].session.putFile('profile.json', _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_2___default()(newProfile), {
              encrypt: false
            });
            dispatch(Object(_actions_profile__WEBPACK_IMPORTED_MODULE_15__["saveProfileData"])(newProfile));
          }
        }

        const choosenTheme = await _api__WEBPACK_IMPORTED_MODULE_16__["blockstackAPI"].session.getFile('theme.json', {
          decrypt: false
        });

        if (choosenTheme) {
          setTheme(JSON.parse(choosenTheme));
        }
      } else {
        router.replace('/login');
      }
    };

    checkAuthData();

    const fetchThemeList = () => {
      setThemeList([{
        name: 'Esox',
        html: `
        <style>
          @import url("https://fonts.googleapis.com/css?family=Open+Sans&display=swap");
          body {
            margin: 0;
          }
          .container {
            min-width: 100vw;
            min-height: 100vh;
            font-family: "Open Sans", sans-serif;
            color: #282828;
            display: flex;
            background: #f8f8f8;
          }
          .content {
            display: flex;
            max-width: 768px;
            margin: auto;
            width: 100%;
          }
          .content-img {
            padding: 0 16px;
            align-items: center;
            justify-content: center;
            display: flex;
          }
          .content-text {
            padding: 0 16px;
            padding-left: 32px;
            justify-content: center;
            display: flex;
            flex-direction: column;
          }
          p.name {
            font-size: 36px;
            font-weight: 600;
            margin: 0;
            margin-bottom: 16px;
          }
          p.description {
            font-size: 16px;
            font-weight: 400;
            margin: 0;
            margin-bottom: 32px;
            white-space: pre-wrap;
            line-height: 1.5;
          }
          .avatar {
            border: solid 3px #282828;
            border-radius: 50%;
          }
          a {
            color: blue;
            text-decoration: none;
          }
          .social-list {
            display: flex;
          }
          .social {
            padding-right: 8px;
          }
        </style>
        <div class="container">
          <div class="content">
            <div class="content-img">
              <img class="avatar" height="200" width="200" src={{avatarUrl}} />
            </div>
            <div class="content-text">
              <p class="name">{{name}}</p>
              <p class="description">{{{description}}}</p>
              <div class="social-list">
                {{#each accountList}}
                  <a class="social" href="https://{{service}}.com/{{identifier}}" target="_blank">
                    {{service}}
                  </a>
                {{/each}}
              </div>
            </div>
          </div>
        </div>
        `
      }, {
        name: 'Test 2',
        html: `<html><body>{{name}} 2</body></html>`
      }, {
        name: 'Test 3',
        html: `<html><body>{{name}} 3</body></html>`
      }]);
    };

    fetchThemeList();
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(() => {
    if (profile.name) {
      setName(profile.name);
    }

    if (profile.description) {
      setDescription(profile.description);
    }

    if (_babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0___default()(profile.accountList)) {
      const cloneAccountList = JSON.parse(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_2___default()(profile.accountList));
      setAccountList(cloneAccountList);
    }

    if (profile.avatarUrl) {
      setAvatarUrl(profile.avatarUrl);
    }

    if (profile.theme) {
      const cloneTheme = JSON.parse(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_2___default()(profile.theme));
      setTheme(cloneTheme);
    }
  }, [profile]);
  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(() => {
    const currentData = JSON.parse(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_2___default()({
      name: name,
      description: description,
      avatarUrl: avatarUrl,
      accountList: accountList
    }));

    if (currentData.description) {
      currentData.description = anchorme__WEBPACK_IMPORTED_MODULE_17___default()(currentData.description, {
        attributes: [{
          name: "target",
          value: "_blank"
        }]
      });
    }

    if (theme) {
      const compiled = handlebars__WEBPACK_IMPORTED_MODULE_18___default.a.compile(theme.html)(currentData);
      setTemplate(compiled);
    }
  }, [theme, name, description, avatarUrl, accountList]);

  const toggleProfileSidebar = () => {
    setShowProfileSidebar(!showProfileSidebar);
  };

  return __jsx(_components_layout__WEBPACK_IMPORTED_MODULE_10__["default"], null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_5___default.a, null, __jsx("title", null, "Dashboard | Paras"), __jsx("link", {
    rel: "icon",
    href: "/favicon.ico"
  })), __jsx(_components_meta__WEBPACK_IMPORTED_MODULE_11__["default"], null), __jsx(_components_nav__WEBPACK_IMPORTED_MODULE_12__["default"], {
    toggleProfileSidebar: toggleProfileSidebar
  }), __jsx(_components_sidebar__WEBPACK_IMPORTED_MODULE_13__["default"], {
    name: name,
    setName: setName,
    description: description,
    setDescription: setDescription,
    accountList: accountList,
    setAccountList: setAccountList,
    avatarUrl: avatarUrl,
    setAvatarUrl: setAvatarUrl,
    avatarFile: avatarFile,
    setAvatarFile: setAvatarFile,
    theme: theme,
    setTheme: setTheme,
    themeList: themeList,
    submit: submit,
    submitState: submitState,
    showProfileSidebar: showProfileSidebar,
    toggleProfileSidebar: toggleProfileSidebar
  }), __jsx(react_frame_component__WEBPACK_IMPORTED_MODULE_8___default.a, {
    className: "w-screen",
    style: {
      height: `calc(100vh - 2.5rem)`
    }
  }, __jsx("div", {
    dangerouslySetInnerHTML: {
      __html: template
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(_lib_redux__WEBPACK_IMPORTED_MODULE_9__["withRedux"])(Dashboard));

/***/ }),

/***/ "./reducers/auth.js":
/*!**************************!*\
  !*** ./reducers/auth.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "../node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-properties */ "../node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptors */ "../node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptors.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptor */ "../node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-symbols */ "../node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "../node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "../node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _actions_auth__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../actions/auth */ "./actions/auth.js");








function ownKeys(object, enumerableOnly) { var keys = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default()(object); if (_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default.a) { var symbols = _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default()(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(target, key, source[key]); }); } else if (_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default.a) { _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default()(target, _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default()(source)); } else { ownKeys(source).forEach(function (key) { _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, key, _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(source, key)); }); } } return target; }


const initialState = {};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case _actions_auth__WEBPACK_IMPORTED_MODULE_7__["SAVE_AUTH_DATA"]:
      return _objectSpread({}, state, {
        authData: action.authData
      });

    case _actions_auth__WEBPACK_IMPORTED_MODULE_7__["SAVE_USER_SESSION"]:
      return _objectSpread({}, state, {
        userSession: action.userSession
      });

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (reducer);

/***/ }),

/***/ "./reducers/profile.js":
/*!*****************************!*\
  !*** ./reducers/profile.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "../node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-properties */ "../node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptors */ "../node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptors.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptor */ "../node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-symbols */ "../node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "../node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "../node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _actions_profile__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../actions/profile */ "./actions/profile.js");








function ownKeys(object, enumerableOnly) { var keys = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default()(object); if (_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default.a) { var symbols = _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default()(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(target, key, source[key]); }); } else if (_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default.a) { _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default()(target, _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default()(source)); } else { ownKeys(source).forEach(function (key) { _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, key, _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(source, key)); }); } } return target; }


const initialState = {};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case _actions_profile__WEBPACK_IMPORTED_MODULE_7__["SAVE_PROFILE_DATA"]:
      return _objectSpread({}, state, {}, action.profile);

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (reducer);

/***/ }),

/***/ "./reducers/theme.js":
/*!***************************!*\
  !*** ./reducers/theme.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "../node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-properties */ "../node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptors */ "../node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptors.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptor */ "../node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-symbols */ "../node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "../node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "../node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _actions_theme__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../actions/theme */ "./actions/theme.js");








function ownKeys(object, enumerableOnly) { var keys = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default()(object); if (_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default.a) { var symbols = _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default()(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(target, key, source[key]); }); } else if (_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default.a) { _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default()(target, _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default()(source)); } else { ownKeys(source).forEach(function (key) { _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, key, _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(source, key)); }); } } return target; }


const initialState = {};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case _actions_theme__WEBPACK_IMPORTED_MODULE_7__["SET_THEME_DATA"]:
      return _objectSpread({}, state, {}, action.theme);

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (reducer);

/***/ }),

/***/ "./stores.js":
/*!*******************!*\
  !*** ./stores.js ***!
  \*******************/
/*! exports provided: initializeStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initializeStore", function() { return initializeStore; });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-thunk */ "redux-thunk");
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_thunk__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux_logger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-logger */ "redux-logger");
/* harmony import */ var redux_logger__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_logger__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-devtools-extension */ "redux-devtools-extension");
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _reducers_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./reducers/auth */ "./reducers/auth.js");
/* harmony import */ var _reducers_profile__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./reducers/profile */ "./reducers/profile.js");
/* harmony import */ var _reducers_theme__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./reducers/theme */ "./reducers/theme.js");







const initialState = {};
const reducer = Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  auth: _reducers_auth__WEBPACK_IMPORTED_MODULE_4__["default"],
  profile: _reducers_profile__WEBPACK_IMPORTED_MODULE_5__["default"],
  theme: _reducers_theme__WEBPACK_IMPORTED_MODULE_6__["default"]
});
const initializeStore = (preloadedState = initialState) => {
  return Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(reducer, preloadedState, Object(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_3__["composeWithDevTools"])(Object(redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"])(redux_thunk__WEBPACK_IMPORTED_MODULE_1___default.a, redux_logger__WEBPACK_IMPORTED_MODULE_2___default.a)));
};

/***/ }),

/***/ 4:
/*!*****************************!*\
  !*** multi ./pages/dash.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/riqi/Projects/persona-app/dashboard/pages/dash.js */"./pages/dash.js");


/***/ }),

/***/ "anchorme":
/*!***************************!*\
  !*** external "anchorme" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("anchorme");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "blockstack":
/*!*****************************!*\
  !*** external "blockstack" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("blockstack");

/***/ }),

/***/ "core-js/library/fn/array/is-array":
/*!****************************************************!*\
  !*** external "core-js/library/fn/array/is-array" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/array/is-array");

/***/ }),

/***/ "core-js/library/fn/json/stringify":
/*!****************************************************!*\
  !*** external "core-js/library/fn/json/stringify" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/json/stringify");

/***/ }),

/***/ "core-js/library/fn/object/assign":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/assign" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "core-js/library/fn/object/define-properties":
/*!**************************************************************!*\
  !*** external "core-js/library/fn/object/define-properties" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-properties");

/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-descriptor":
/*!************************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-descriptor" ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-descriptors":
/*!*************************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-descriptors" ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptors");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-symbols":
/*!*********************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-symbols" ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "core-js/library/fn/object/keys":
/*!*************************************************!*\
  !*** external "core-js/library/fn/object/keys" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/keys");

/***/ }),

/***/ "core-js/library/fn/promise":
/*!*********************************************!*\
  !*** external "core-js/library/fn/promise" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/promise");

/***/ }),

/***/ "fast-json-stable-stringify":
/*!*********************************************!*\
  !*** external "fast-json-stable-stringify" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("fast-json-stable-stringify");

/***/ }),

/***/ "handlebars":
/*!*****************************!*\
  !*** external "handlebars" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("handlebars");

/***/ }),

/***/ "js-sha256":
/*!****************************!*\
  !*** external "js-sha256" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("js-sha256");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "node-rsa":
/*!***************************!*\
  !*** external "node-rsa" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("node-rsa");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-frame-component":
/*!****************************************!*\
  !*** external "react-frame-component" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-frame-component");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "redux-devtools-extension":
/*!*******************************************!*\
  !*** external "redux-devtools-extension" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-devtools-extension");

/***/ }),

/***/ "redux-logger":
/*!*******************************!*\
  !*** external "redux-logger" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-logger");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ }),

/***/ "uuid/v4":
/*!**************************!*\
  !*** external "uuid/v4" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("uuid/v4");

/***/ })

/******/ });
//# sourceMappingURL=dash.js.map