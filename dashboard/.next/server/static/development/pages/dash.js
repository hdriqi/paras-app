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
/*! exports provided: blockstackAPI, credentialAPI, IdentifierAPI */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "blockstackAPI", function() { return blockstackAPI; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "credentialAPI", function() { return credentialAPI; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IdentifierAPI", function() { return IdentifierAPI; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "../node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var blockstack__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! blockstack */ "blockstack");
/* harmony import */ var blockstack__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(blockstack__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var radiks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! radiks */ "radiks");
/* harmony import */ var radiks__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(radiks__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var uuid_v4__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! uuid/v4 */ "uuid/v4");
/* harmony import */ var uuid_v4__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(uuid_v4__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var node_rsa__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! node-rsa */ "node-rsa");
/* harmony import */ var node_rsa__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(node_rsa__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var fast_json_stable_stringify__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! fast-json-stable-stringify */ "fast-json-stable-stringify");
/* harmony import */ var fast_json_stable_stringify__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(fast_json_stable_stringify__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var js_sha256__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! js-sha256 */ "js-sha256");
/* harmony import */ var js_sha256__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(js_sha256__WEBPACK_IMPORTED_MODULE_7__);









class Identifier extends radiks__WEBPACK_IMPORTED_MODULE_2__["Model"] {}

Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(Identifier, "className", 'Identifier');

Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(Identifier, "schema", {
  name: {
    type: String,
    decrypted: true
  },
  blockstackId: {
    type: String,
    decrypted: true
  }
});

class BlockstackAPI {
  constructor() {
    this.default = blockstack__WEBPACK_IMPORTED_MODULE_1__;
    this.appConfig = new blockstack__WEBPACK_IMPORTED_MODULE_1__["AppConfig"](['email', 'store_write', 'publish_data'], 'http://localhost:4000', '/login');
    this.session = new blockstack__WEBPACK_IMPORTED_MODULE_1__["UserSession"]({
      appConfig: this.appConfig
    });
    this.radiks = Object(radiks__WEBPACK_IMPORTED_MODULE_2__["configure"])({
      apiServer: 'http://localhost:4000',
      userSession: this.session
    });
  }

}

class CredentialAPI {
  async create(credential, privateKey) {
    try {
      const signature = await _signCredential(credential, privateKey);
      const input = {
        version: 'degree/v1',
        uid: uuid_v4__WEBPACK_IMPORTED_MODULE_4___default()(),
        credential: credential,
        signature: signature
      };
      const res = await axios__WEBPACK_IMPORTED_MODULE_3___default.a.post('http://localhost:8080/v1/certificates', input);
      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  }

}

const blockstackAPI = new BlockstackAPI();
const credentialAPI = new CredentialAPI();
const IdentifierAPI = Identifier;

/***/ }),

/***/ "./components/layout.js":
/*!******************************!*\
  !*** ./components/layout.js ***!
  \******************************/
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


const Layout = ({
  children
}) => __jsx("div", {
  className: "jsx-2287979055"
}, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, null, __jsx("meta", {
  name: "viewport",
  content: "width=device-width, initial-scale=1",
  className: "jsx-2287979055"
}), __jsx("meta", {
  charSet: "utf-8",
  className: "jsx-2287979055"
}), __jsx("link", {
  href: "https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css",
  rel: "stylesheet",
  className: "jsx-2287979055"
})), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
  id: "2287979055"
}, "@import url('https://rsms.me/inter/inter.css');html{font-family:'Inter',sans-serif;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yaXFpL1Byb2plY3RzL3BlcnNvbmEtYXBwL2Rhc2hib2FyZC9jb21wb25lbnRzL2xheW91dC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFXUSxBQUV1RCxBQUNSLCtCQUFDIiwiZmlsZSI6Ii9Vc2Vycy9yaXFpL1Byb2plY3RzL3BlcnNvbmEtYXBwL2Rhc2hib2FyZC9jb21wb25lbnRzL2xheW91dC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcblxuY29uc3QgTGF5b3V0ID0gKHsgY2hpbGRyZW4gfSkgPT4gKFxuICA8ZGl2PlxuICAgIDxIZWFkPlxuICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xXCIgLz5cbiAgICAgIDxtZXRhIGNoYXJTZXQ9XCJ1dGYtOFwiIC8+XG5cdFx0XHQ8bGluayBocmVmPVwiaHR0cHM6Ly91bnBrZy5jb20vdGFpbHdpbmRjc3NAXjEuMC9kaXN0L3RhaWx3aW5kLm1pbi5jc3NcIiByZWw9XCJzdHlsZXNoZWV0XCI+PC9saW5rPlxuICAgIDwvSGVhZD5cbiAgICA8c3R5bGUganN4IGdsb2JhbD5cbiAgICAgIHtcbiAgICAgICAgYFxuICAgICAgICBAaW1wb3J0IHVybCgnaHR0cHM6Ly9yc21zLm1lL2ludGVyL2ludGVyLmNzcycpO1xuICAgICAgICBodG1sIHsgZm9udC1mYW1pbHk6ICdJbnRlcicsIHNhbnMtc2VyaWY7IH1cbiAgICAgICAgYFxuICAgICAgfVxuICAgIDwvc3R5bGU+XG5cdFx0eyBjaGlsZHJlbiB9XG4gIDwvZGl2PlxuKVxuXG5leHBvcnQgZGVmYXVsdCBMYXlvdXQiXX0= */\n/*@ sourceURL=/Users/riqi/Projects/persona-app/dashboard/components/layout.js */"), children);

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./components/loggedIn.js":
/*!********************************!*\
  !*** ./components/loggedIn.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api */ "./api/index.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const LoggedIn = () => {
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (!_api__WEBPACK_IMPORTED_MODULE_1__["blockstackAPI"].session.isUserSignedIn()) {
      router.replace('/login');
    }
  });
  return __jsx("div", null);
};

/* harmony default export */ __webpack_exports__["default"] = (LoggedIn);

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

/***/ "./components/modal.js":
/*!*****************************!*\
  !*** ./components/modal.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const Modal = ({
  closeModal,
  children
}) => {
  const close = e => {
    e.persist();

    if (e.target.id === 'modal-overlay') {
      closeModal();
    }
  };

  return __jsx("div", {
    id: "modal-overlay",
    className: "absolute inset-0 z-20",
    onClick: e => close(e),
    style: {
      backgroundColor: `rgba(0,0,0,0.3)`
    }
  }, children);
};

/* harmony default export */ __webpack_exports__["default"] = (Modal);

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
/* harmony import */ var react_share__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-share */ "react-share");
/* harmony import */ var react_share__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_share__WEBPACK_IMPORTED_MODULE_2__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



let identifier = '';

const Nav = ({
  toggleProfileSidebar
}) => {
  const {
    0: showSocialShare,
    1: setSocialShare
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
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
  }, __jsx("li", null, __jsx("div", {
    className: "flex relative",
    onClick: () => setSocialShare(!showSocialShare)
  }, __jsx("p", {
    className: "cursor-pointer mr-2"
  }, identifier && `${identifier}.paras.id`), __jsx("svg", {
    className: "cursor-pointer",
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, __jsx("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M14 6C14 6.28742 14.0303 6.56777 14.0879 6.83801L9.01694 9.3735C8.28363 8.53189 7.20393 8 6 8C3.79086 8 2 9.79086 2 12C2 14.2091 3.79086 16 6 16C7.20393 16 8.28363 15.4681 9.01694 14.6265L14.0879 17.162C14.0303 17.4322 14 17.7126 14 18C14 20.2091 15.7909 22 18 22C20.2091 22 22 20.2091 22 18C22 15.7909 20.2091 14 18 14C16.7961 14 15.7164 14.5319 14.9831 15.3735L9.91208 12.838C9.96968 12.5678 10 12.2874 10 12C10 11.7126 9.96968 11.4322 9.91208 11.162L14.9831 8.6265C15.7164 9.46811 16.7961 10 18 10C20.2091 10 22 8.20914 22 6C22 3.79086 20.2091 2 18 2C15.7909 2 14 3.79086 14 6ZM8 12C8 13.1046 7.10457 14 6 14C4.89543 14 4 13.1046 4 12C4 10.8954 4.89543 10 6 10C7.10457 10 8 10.8954 8 12ZM18 8C19.1046 8 20 7.10457 20 6C20 4.89543 19.1046 4 18 4C16.8954 4 16 4.89543 16 6C16 7.10457 16.8954 8 18 8ZM20 18C20 19.1046 19.1046 20 18 20C16.8954 20 16 19.1046 16 18C16 16.8954 16.8954 16 18 16C19.1046 16 20 16.8954 20 18Z",
    fill: "#1a202c"
  })), showSocialShare && __jsx("div", {
    className: "absolute bg-white rounded-lg shadow-lg p-2",
    style: {
      top: `24px`,
      right: `-12px`
    }
  }, __jsx("div", {
    className: "mb-2 bg-gray-900 rounded-full flex items-center justify-center",
    style: {
      width: `32px`,
      height: `32px`
    }
  }, __jsx("a", {
    href: `https://${identifier}.paras.id`,
    target: "_blank"
  }, __jsx("svg", {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, __jsx("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12C1 5.92487 5.92487 1 12 1ZM3.06565 10.9074C3.35719 11.2805 4.16782 11.758 5.40826 12.1475C5.89668 12.3009 6.4316 12.4357 7.00555 12.5502C7.00186 12.3679 7 12.1844 7 12C7 8.67236 7.60556 5.6673 8.65455 3.64231C5.66412 4.84042 3.46628 7.59699 3.06565 10.9074ZM7.12914 14.6108C5.52334 14.3317 4.14644 13.9093 3.10296 13.3658C3.58837 16.5542 5.74677 19.1927 8.65455 20.3577C7.88867 18.8792 7.35916 16.8783 7.12914 14.6108ZM9.17891 14.8773C10.076 14.9581 11.0209 15 12 15C12.9633 15 13.9124 14.9454 14.8253 14.8441C14.3742 18.4417 13.127 21 12 21C10.8765 21 9.63347 18.4574 9.17891 14.8773ZM14.9863 12.8045C14.0367 12.9275 13.028 13 12 13C10.9558 13 9.95341 12.9483 9.01531 12.8502C9.00522 12.5706 9 12.287 9 12C9 6.98399 10.5936 3 12 3C13.4064 3 15 6.98399 15 12C15 12.2713 14.9953 12.5397 14.9863 12.8045ZM16.8792 14.5269C16.6539 16.8289 16.1208 18.861 15.3454 20.3577C18.3046 19.1721 20.4876 16.4606 20.9212 13.1964C19.861 13.7479 18.4647 14.209 16.8792 14.5269ZM20.9285 10.8601C20.458 11.3883 18.9737 12.0157 16.9962 12.4541C16.9987 12.3035 17 12.1521 17 12C17 8.67236 16.3944 5.6673 15.3454 3.64231C18.3216 4.83471 20.5128 7.57077 20.9285 10.8601Z",
    fill: "white"
  })))), __jsx(react_share__WEBPACK_IMPORTED_MODULE_2__["FacebookShareButton"], {
    className: "mb-2",
    quote: `Check out my personal website!`,
    url: `https://${identifier}.paras.id`
  }, __jsx(react_share__WEBPACK_IMPORTED_MODULE_2__["FacebookIcon"], {
    size: 32,
    round: true
  })), __jsx(react_share__WEBPACK_IMPORTED_MODULE_2__["TwitterShareButton"], {
    className: "mb-2",
    title: `Check out my personal website!`,
    url: `https://${identifier}.paras.id`
  }, __jsx(react_share__WEBPACK_IMPORTED_MODULE_2__["TwitterIcon"], {
    size: 32,
    round: true
  })), __jsx(react_share__WEBPACK_IMPORTED_MODULE_2__["TelegramShareButton"], {
    className: "mb-2",
    title: `Check out my personal website!`,
    url: `https://${identifier}.paras.id`
  }, __jsx(react_share__WEBPACK_IMPORTED_MODULE_2__["TelegramIcon"], {
    size: 32,
    round: true
  })), __jsx(react_share__WEBPACK_IMPORTED_MODULE_2__["WhatsappShareButton"], {
    title: `Check out my personal website!`,
    url: `https://${identifier}.paras.id`
  }, __jsx(react_share__WEBPACK_IMPORTED_MODULE_2__["WhatsappIcon"], {
    size: 32,
    round: true
  }))))), __jsx("li", null, __jsx("a", {
    onClick: () => toggleProfileSidebar(),
    className: " cursor-pointer"
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
    fill: "#1a202c"
  }), __jsx("rect", {
    width: "16.6667",
    height: "2",
    fill: "#1a202c"
  }), __jsx("rect", {
    y: "18.1177",
    width: "13.3333",
    height: "2",
    fill: "#1a202c"
  })))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Nav);

/***/ }),

/***/ "./components/onboarding.js":
/*!**********************************!*\
  !*** ./components/onboarding.js ***!
  \**********************************/
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
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../api */ "./api/index.js");
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modal */ "./components/modal.js");
/* harmony import */ var _actions_profile__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../actions/profile */ "./actions/profile.js");


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;







const Onboarding = ({
  style,
  identifier,
  setIdentifer,
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
  showOnboarding,
  setShowOnboarding,
  logout
}) => {
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"])();
  const profile = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(state => state.profile);
  const {
    0: onboardingState,
    1: setOnboardingState
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])('identifier');
  const {
    0: identifierAvailability,
    1: setIdentifierAvailability
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(true);
  const {
    0: identifierValid,
    1: setIdenfierValid
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(true);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => {
    const init = async () => {
      const getAuthData = await _api__WEBPACK_IMPORTED_MODULE_5__["blockstackAPI"].session.loadUserData(); // set default username

      const userIdentifier = getAuthData.username.split('.')[0];
      setIdentifer(userIdentifier); // set default avatar

      const avatarExist = getAuthData.profile.image.find(img => img.name === 'avatar');
      const avatarUrl = avatarExist ? avatarExist.contentUrl : `data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxITEhUTExANFRMXDRUVFRUVFQ8YFxUVFRUWFhUVFRUYHiggGBolGxcVITEhJSk3Li4uFx8zOD8tNygtLisBCgoKBQUFDgUFDisZExkrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrK//AABEIAOgA2QMBIgACEQEDEQH/xAAcAAEAAgIDAQAAAAAAAAAAAAAAAQgGBwIEBQP/xABGEAABAwIDBQUEBwUGBQUAAAABAAIDETEEIXEFBxJBUQYTYbHxIoGR8AgUMkJykqEzUmKCoiNTc7KzwiTBw9HhFhdDY5P/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8A3ehPII48gotkEEk8uaE01UW1S2qCa0SvVR4lAOZQSDzKA10UX0S+nmgkGuicX/kri94AOYDQKknIAC+arvvW3pPxTnYXBvczCCrXyNqHYjrncR+H3ufRBsLtpviwWDJigBxUwqCGOAiYRydLnU+DQbGpC1Ltve/tXEE8M7MOzP2YWgae26rq6ELAUQelie0OMk/aYzGv68c0zvNy6HeOrXidXrU1+K4Ig9DDbcxUf7PF4tn4JZW+RWTbG3rbWw5H/FumaPuzgSA6vPt/1LCUQWK7Ib7sLO4R4xn1V5y7wHihJyuftR++oyzK2pFKHAOaQWkAhwIIINiCLjxVIVn+7PeTNs54ilc+TBud7TLuiqc3xdOpbY52OaC0NeQQnkF8MFjI5Y2SQva+N7A5j25gtNivtbVBJPxQmii2qWzKCa0ugPMqAOZ9EGeZsgkFAa6KL6eaXyFkE1quS415BTRBDj0uotqpJpqotqgW1TxKDqfRAOZQAOZS+iX0S+nmgX080OeQQnkE8B6INR7/ALteYIW4CF1HzM4piDm2GtAz+cg18Gkc1XxZDvA2ucXtHEzE1acQ5rP8OP2GU/laD7yseQEREBERAREQEREG5vo/dsHMkds6R3sP4n4ev3ZAKvjHgQC6nUH95b5tqqV7J2g/DzxTx5PimZI3VjgaHwNKK5+DxDZI2Sg1a+Nr2/hcAR+hQfW2ZQDmfRAOZ9EvmbIAzzNkvp5pfTzQ55CyAc8hZCeQ9EPQeiWyCCbZBSoGWqlBByUDqfRSepUAcygAcyl9Evp5pfTzQL6eaHoEJ5BD0HogHoPRdbak/dwSvF2wSP8AytJz+C7Nshf5zK8btpJwbPxjq5jZ+IPwicgpzdERAREQEREBERAREQFbrdpPx7KwTjywTG/kHBX+lVFVqtzD+LY+EJ5NlH5Z5B/yQZqM9Evp5pfTzQ55CyAc8hZD0Hoh6D0S2QQLZBLapbVLaoJApquS4gcypqggjmVF9PNSRXRRfTzQL6eaE8gh6BPAeiAeg9EtkL/OZS2Qv85lLaoFtV4nbmMnZuNAzcdnYgADqYnZBe3bM3+cgsM3pdrosBg3hxDp5onxwxeLm8Je7+Ftc+uQ5oKpoiICIiAiIgIiICIiArT7lIyNjYUEEftjqDPKR7qFVYVj9x3bCLEYRmBcQzEQRkBv97HUkOZ4itCPfzyDaBzyFkPQeiHoPRLZC/zmUC2QultUtqls+aBa90HU+ieJ9EA5lBIHMqaqBnouSDiRXRQegUnooPQeiB4D0S2Qv85lLZC/zmUtqgW1S2Zv85BLZm/zkEHU+iCQOZ9FTztt2jfj8ZLiXk0c8iMH7kTSRGwDllmfEk81cIZ5lU67Z7K+qY7E4elAzEvDB/8AW48UZ/IWoPFREQEREBERAREQEREBdrZmPkw8rJ4nuZJG8OY4ciPMciOYNF1V2Nn4N88scTBV8krY2D+J7g1v6lBcrYm0BPhoJ2tp32GjlA6CRgfn8V3bar44HCthijiYPZZE1jR4MaGj9AvtbM3+cggWzN08T6J4n0QDmUADmUvp5pfTzS+nmgmtdPNclxryCmiCHHkFFshf5zKkn4qLaoFtUtmb/OQS2Zv85BB1PogDqfRBnmbIM8zZL6eaBfTzWkfpD9mCe72hG2oAEM9OWf8AZPPvJaT+Bbuvovhj8HHNG+GRjXxvYWPabFpFCEFJ0Waby+wMmy5h7Rkw0jj3UlMxTPu5OQeBzs4CuWYGFoCIiAiIgIiICIiAtr7gOzBmxTsa9v8AZ4erY+jp3N/2tJJ8XNWFdh+yM+08R3MVGtA4pZCCWxsrStObjybz8ACRazs7sSHBYePDwtoxjacuJxObnO6uJzKD0bZm/wA5J4n0TxPogHMoAHMpfTzS+nml9PNAvp5oegQ9Ah6D0QTXkFNFFslyQcSaKLZm/wA5BScs1A6n0QB1PogzzNkGeZsl9PNAvp5pfRL6IegQD0CWyCWyCW1QYlvU7P8A1zZs8TRWVre+i5kvjzIHi5vE3+ZVNV37aqqW9ns2cFtGVjW0ilPfRUsGvJ4m/wAruIU6AdUGGoiICIiAiIgIi9nsdsJ2OxkGGbWj5Rxkfdjb7Ujvc0H30Qb+3DbA+rbO797aSYmTvLZ9032Yh7/ado8LZA6n0XDDwNja1rQGtawNa0Wa1ooAPcuYHMoAHMpfTzS+nml9PNAvp5oTyCE8gngPRAPQeiWyF/nMpbIX+cyltUEjLVSoA5m6lBBHMqBnmbKSFF9PNAvp5pfRL6ITyHogE8h6JbIJbIJbVAtqltUtqg6lA8Ste77OypxmAMrG1nw3FKwC7o6f2rPgA7VlOa2EBzKUre3TrqgpAiyTeLsQYLaOIgYKRiXjjHIRyAPaBpXh/lWNoCIiAiIgKwP0fOyvdQPx8jfbmqyGtxC0+07+Zw+DB1Wjdg7NOJxMOHbkZZ2R16cTgC73Cp9yuVgcGyKNkbGhsccbWMbya1oAb+gQfYDmUvp5pfTzS+nmgX080J5BCeQQ9B6IHgPRLZC/zmlshdLaoFtUtmb/ADkEtmb/ADkEHU+iCQOZ9FNVAzzXKqDiRXRQc9FJzUHoPRAJ5D0S2QS2QS2qBbVLapbVPEoHiUA5lAOZS+iBfRYrt3eHs/CYr6riJzG/u2vJ4HuYOKtGuc2paaAHMUoQsh2pj2QwyTyGkUUTpHn+FgJNBztbmqc9oNrPxeJlxMn25ZS+l+EH7LR4AUA0QZHvd23Fi9pzSwua+INjjY9pqH8DBVw8OKo9ywxEQEREBERB7fYrabcNj8LO/wCxHimF56NrRx9wJPuVlsPvK2ZLio8JHiRJJJJwNLGu7vioSAZDQGpFBSuZCqcvph5nRua9ri17XhzSLtc01BHjUILt3080J5BeL2N2+3HYKDEtoOOL2wPuyN9mRo0cDTwoea9o9B6IB6D0S2QulrXS2qBbVLZm/wA5BLZm/wA5BAOZ9EAdT6IM8zZBnmbJfTzQSM9PNclxrXRcqIOJPIKLZBS49LqLaoFtUtqltU8SgeJQDmUA5ldPau1IMPGZcRNFFGPvPcGgnoK3PgM0HcvountbakOHjMs80cUTbueQAfAdT4DMrUna/frG2sez4e8P99MHNZq2PJzuf2iNCtN7e7QYrGSd5ip5JXcuIgNaDyYwUa0eACDYW9PeuMbG7CYVjm4YuHHI/J8vC4EBrfuMqAc8zlbMLVKIgIiICLYu73dTPtCNuIklZDhS40cKOkfwu4XcLRk3MEVdnlYhbeduh2ScP3H1d4IzE4ee/wCKlOIvsfw04fBBVxFsXt7unxGz434iOWObCtIq4lrJGBzuFvE0mjsy0VaakmwWukBERBsHdfvKfszihkjMmFfJxuDf2kbiAC5lTQ5AVaegzHOxfZ/tDhcZEJcLMyVvOh9pp6Pac2nUKma7mydqz4aQS4eaSKQWcwkGnQ9R4HJBdO2qWzPzotF9kN+jhRm0IePl38IAdyzfFY8yS0jRbh2B2gwuMZ3uGxEUraZhp9pleT2H2mnUIPTA5n0QZ5myDPM2S+nmgX080OeXJDnoh6D0QTXkFNFFsgpQQTTVRbVSclHifRA8Sultfa8GFjM2JmiijHN5Az6AXc7wGa1v2/3xw4YuhwYZiJxUF9SYYzqP2jtMh1uFobbm3MTi5DLiZ5JZOrjk0dGNGTR4AAINu9sd+hNY9nw0Fu/mF/FkXkXfBag2ztnEYqTvcTPLLJ1eSaDo0WaPAZLoIgIiICIiAiIg3T9HbtJwyS4CR2TqzQ1/faAJWjVoa6n8Duq3tfTzVQ93DXnamCEZId9eiqR+5xDvB72cQ96t5fRBpb6RfaSjIcAw/aPfTUP3WkiJp8CeI/ytWiVm2+YOG2MVxkn2ouGvJphjLQPAVp8VhKAiIgIiIC7GAx0sDxJDLJHI05PY5zXD3hddEG4OyW/GePhjx8ffMt3sYa2UfiZk1/up71urs/2kwuOZx4WeORtBxAZPbXk5h9pvvCpqu1s3aE2HkEsMskUjTk5ji06VHLwsUF1T0HolsgtL9gN9bX8MG0Q1jsmjEtFGuPWZg+z+IZeAGa3NFI0tDmkODgCCCCHA5ggi4QcxlqpUAU1UoIPUqvW93ei/EPfg8HIW4dpLZZWmhmIyLWkWj0+1pfY++vtKcHs9zWOpNiHGFlDm1pFZXjRvs1Fi8KrqAiIgIiICIiAiIgIiIM93H4HvNrwHlHHLIfdGWj9XBWiJ5BV9+jhguLGYmX9zBhlf8SQHyjKsF4BBXL6Q+C4NpRyUykwLDq5j3tP6cK1at5/SUwPs4Obo6aMnUMc3P3OWjEBERAREQEREBERAWxN1u8uTZ8ghmL5ME52bcy6Gv34/4eZbqRnfXaILuYeVr2tka5rmuaHNc01aWuFQWnmCOa+y1H9HvtKZsNJg5HVfhyHR1N4Xk5ePC79HtC23VBW/6Qm2DLtFsAPs4fDtFOkkvtuP5e7+C1cvf7f44zbSxkhNa42UD8LHFjP6WheAgIiICIiAiIgIiICIiDfn0bcJTD4ubm/Esj90bC7/AKq3HbVa83D4UR7IjcBnLiJpD4kP7qvwjC2HbVBrP6QWB49lh/OLGxvJ8HB8dPi9vwVbFbTerge92TjGm4w3ef8A4ubL/sVS0BERAREQEREBERAREQZrue2t9W2thzWjZXGB/iJRRo/PwH3K1qpHg8Q6KRkjftMka9urSHD9Qrh/+pYP3igqLt/BvhxM8UleNmJka6vMhxFfff3roKzG8zdXHtF/1iB7IcVw0cXA93KAKN46ZtcMhxCuQpS1NQbV3S7XhJ/4UStArxQvjfXRhIf/AEoMGRdzaGycRCaTYfExf4kcjP8AMAumgIiICIiAiIgIi5wxl7g1ty4NGpNAgt3u7wnc7MwbKUP1KNxHOr28ZHxcVkNsyvlhIBHGxvJsbWjwDQAAPgvqBzPog6u1MIJYZY3Uo+B7KG1HtLc/iqVuFMqGtaHw8Fd4Z58lTjtlhO5x+LjpThxswH4e8dw/pRB46IiAiIgIiICIiAi7OB2fNKaRQzSu6Rse8/BoKyrZO63a89CMFJG0/emLI6atceP9EGGsYSQACSTQAZkk2oFu/wD9sto/3zviP+69Xd3udbhJm4nGSRTTMIdHGwExxuFnuc4AvcMqCgAIrnlTblEAqAKaoiCCwEe0AfA2+C8LH9i9nTkmXAYJxPPu2Nd+ZoBUogxjH7ltkyV4Y8TBneKZx/1eMLHsduAgP7HHzs/xI45P1aWIiDwsZuDxgr3WMwb/AMYlZ5By8bFbltrsrSPDSfgmZnpx8KIg8nEbsNsM+1s+c/hdC/8AyuK82fsbtJp9rZ20RTn9XnI+IbREQdOXYOLb9rCYxo8YZh5hej2J2ZI/aWDjMbxXHwkhzSPZa8Off+EFEQW+A5lKV0REAiunmqub59nPbtjE8LHEPEUjaAmodE0E5fxByIgxKLYeKdm3C4t2kUp8gu3F2Q2i77OztonTD4inx4aIiD0oN2m1322fiB+Lu2f53BerhdzO130rBDH+OaLL8hKIg9nB7hccf2uKwTB/D3zz/lb5r3Nn/R/jH7baEjvCOJrP6nOd5IiDINnbkdlR/bGLmz/+SWn+kGZLJtn9g9mQ07vZ+DFLOcwPd+Z9SiIMgjiDRwsa1rejQABoAuZHIIiABRSpRB//2Q==`;
      setAvatarUrl(avatarUrl); // set default name

      setName(getAuthData.profile.name || userIdentifier); // set default description

      setDescription(getAuthData.profile.description || `You would be amaze if you know me`); // set default theme
      // setTheme()
    };

    init();
  }, []);

  const checkAndSetIdentifier = async e => {
    e.preventDefault();
    const idExist = await _api__WEBPACK_IMPORTED_MODULE_5__["IdentifierAPI"].fetchList({
      name: identifier
    });

    if (idExist.length > 0) {
      setIdentifierAvailability(false);
      setTimeout(() => {
        setIdentifierAvailability(true);
      }, 1000);
    } else {
      setOnboardingState('name');
    }
  };

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
    } // const getAuthData = await blockstackAPI.session.loadUserData()
    // let userIdentifier = getAuthData.username.split('.')[0]
    // const idExist = await IdentifierAPI.fetchList({
    // 	name: userIdentifier
    // })
    // if(idExist.length > 0) {
    // 	userIdentifier = `${userIdentifier}${Math.floor(Math.random() * (99 - 1 + 1)) + 1}`
    // }


    const newData = {
      name: userIdentifier,
      blockstackId: getAuthData.username
    };
    const newId = new _api__WEBPACK_IMPORTED_MODULE_5__["IdentifierAPI"](newData);
    await newId.save(); // // create new user profile
    // const avatarExist = getAuthData.profile.image.find(img => img.name === 'avatar') || {}
    // // set default data
    // let identifier = userIdentifier
    // let name = getAuthData.profile.name || userIdentifier
    // let description = getAuthData.profile.description || ''
    // let avatarUrl = avatarExist.contentUrl || ''
    // let theme = {
    // }
    // const newProfile = {
    // 	identifier: identifier,
    // 	name: name,
    // 	description: description,
    // 	avatarUrl: avatarUrl,
    // 	theme: theme,
    // 	accountList: [],
    // }
    // await blockstackAPI.session.putFile('profile.json', JSON.stringify(newProfile), {
    // 	encrypt: false
    // })
    // dispatch(saveProfileData(newProfile))
  };

  const submitOnboarding = e => {
    e.preventDefault();
    submit(e, true);
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
    } // if data is changed, prompt confirmation window
    else {
        setShowConfirmModal(true);
      }
  };

  const isSelectedTheme = name => {
    if (theme.name === name) {
      return true;
    }

    return false;
  };

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => {
    const regex = /^[a-z0-9]{4,32}$/g;

    if (regex.test(identifier)) {
      setIdenfierValid(true);
    } else {
      setIdenfierValid(false);
    }
  }, [identifier]);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => {
    if (submitState === 'fulfilled') {
      setShowOnboarding(false);
    }
  }, [submitState]);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "50543562"
  }, ".lds-ring-container.jsx-50543562{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.lds-ring.jsx-50543562{margin:auto;display:inline-block;width:1.125rem;height:1.125rem;}.lds-ring.jsx-50543562 div.jsx-50543562{box-sizing:border-box;display:block;position:absolute;width:1rem;height:1rem;margin:2px;border:2px solid white;border-radius:50%;-webkit-animation:lds-ring-jsx-50543562 1.2s cubic-bezier(0.5,0,0.5,1) infinite;animation:lds-ring-jsx-50543562 1.2s cubic-bezier(0.5,0,0.5,1) infinite;border-color:white transparent transparent transparent;}.lds-ring.jsx-50543562 div.jsx-50543562:nth-child(1){-webkit-animation-delay:-0.45s;animation-delay:-0.45s;}.lds-ring.jsx-50543562 div.jsx-50543562:nth-child(2){-webkit-animation-delay:-0.3s;animation-delay:-0.3s;}.lds-ring.jsx-50543562 div.jsx-50543562:nth-child(3){-webkit-animation-delay:-0.15s;animation-delay:-0.15s;}@-webkit-keyframes lds-ring-jsx-50543562{0%{-webkit-transform:rotate(0deg);-ms-transform:rotate(0deg);transform:rotate(0deg);}100%{-webkit-transform:rotate(360deg);-ms-transform:rotate(360deg);transform:rotate(360deg);}}@keyframes lds-ring-jsx-50543562{0%{-webkit-transform:rotate(0deg);-ms-transform:rotate(0deg);transform:rotate(0deg);}100%{-webkit-transform:rotate(360deg);-ms-transform:rotate(360deg);transform:rotate(360deg);}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yaXFpL1Byb2plY3RzL3BlcnNvbmEtYXBwL2Rhc2hib2FyZC9jb21wb25lbnRzL29uYm9hcmRpbmcuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBd0xLLEFBR29CLEFBR0QsQUFNVSxBQVlDLEFBR0QsQUFHQyxBQUlDLEFBR0UsWUE5QkwsVUFNUCxXQUxDLEdBTUcsWUFMRixJQW1CakIsRUFiWSxBQVVaLEFBTUEsVUFyQkEsQ0FNYSxTQVpiLEdBYVksSUFrQlgsTUFHQSxDQXBCdUIsdUJBQ0wsa0JBQzRDLHdKQUNQLHVEQUN4RCIsImZpbGUiOiIvVXNlcnMvcmlxaS9Qcm9qZWN0cy9wZXJzb25hLWFwcC9kYXNoYm9hcmQvY29tcG9uZW50cy9vbmJvYXJkaW5nLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4J1xuaW1wb3J0IHN0cmluZ2lmeSBmcm9tICdmYXN0LWpzb24tc3RhYmxlLXN0cmluZ2lmeSdcbmltcG9ydCB7IGJsb2Nrc3RhY2tBUEksIElkZW50aWZpZXJBUEkgfSBmcm9tICcuLi9hcGknXG5cbmltcG9ydCBNb2RhbCBmcm9tICcuL21vZGFsJ1xuXG5pbXBvcnQgeyBzYXZlUHJvZmlsZURhdGEgfSBmcm9tICcuLi9hY3Rpb25zL3Byb2ZpbGUnXG5cbmNvbnN0IE9uYm9hcmRpbmcgPSAoeyBcblx0c3R5bGUsXG5cdGlkZW50aWZpZXIsIHNldElkZW50aWZlcixcblx0bmFtZSwgc2V0TmFtZSwgXG5cdGRlc2NyaXB0aW9uLCBzZXREZXNjcmlwdGlvbiwgXG5cdGF2YXRhclVybCwgc2V0QXZhdGFyVXJsLCBcblx0YXZhdGFyRmlsZSwgc2V0QXZhdGFyRmlsZSwgXG5cdGFjY291bnRMaXN0LCBzZXRBY2NvdW50TGlzdCwgXG5cdHRoZW1lLCBzZXRUaGVtZSxcblx0dGhlbWVMaXN0LCBzZXRUaGVtZUxpc3QsXG5cdHN1Ym1pdCxcblx0c3VibWl0U3RhdGUsXG5cdHNob3dPbmJvYXJkaW5nLFxuXHRzZXRTaG93T25ib2FyZGluZyxcblx0bG9nb3V0XG59KSA9PiB7XG5cdGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKVxuXHRjb25zdCBwcm9maWxlID0gdXNlU2VsZWN0b3Ioc3RhdGUgPT4gc3RhdGUucHJvZmlsZSlcblx0Y29uc3QgW29uYm9hcmRpbmdTdGF0ZSwgc2V0T25ib2FyZGluZ1N0YXRlXSA9IHVzZVN0YXRlKCdpZGVudGlmaWVyJylcblx0Y29uc3QgW2lkZW50aWZpZXJBdmFpbGFiaWxpdHksIHNldElkZW50aWZpZXJBdmFpbGFiaWxpdHldID0gdXNlU3RhdGUodHJ1ZSlcblx0Y29uc3QgW2lkZW50aWZpZXJWYWxpZCwgc2V0SWRlbmZpZXJWYWxpZF0gPSB1c2VTdGF0ZSh0cnVlKVxuXG5cdHVzZUVmZmVjdCgoKSA9PiB7XG5cdFx0Y29uc3QgaW5pdCA9IGFzeW5jICgpID0+IHtcblx0XHRcdGNvbnN0IGdldEF1dGhEYXRhID0gYXdhaXQgYmxvY2tzdGFja0FQSS5zZXNzaW9uLmxvYWRVc2VyRGF0YSgpXG5cdFx0XHQvLyBzZXQgZGVmYXVsdCB1c2VybmFtZVxuXHRcdFx0Y29uc3QgdXNlcklkZW50aWZpZXIgPSBnZXRBdXRoRGF0YS51c2VybmFtZS5zcGxpdCgnLicpWzBdXG5cdFx0XHRzZXRJZGVudGlmZXIodXNlcklkZW50aWZpZXIpXG5cdFx0XHRcblx0XHRcdC8vIHNldCBkZWZhdWx0IGF2YXRhclxuXHRcdFx0Y29uc3QgYXZhdGFyRXhpc3QgPSBnZXRBdXRoRGF0YS5wcm9maWxlLmltYWdlLmZpbmQoaW1nID0+IGltZy5uYW1lID09PSAnYXZhdGFyJylcblx0XHRcdGNvbnN0IGF2YXRhclVybCA9IGF2YXRhckV4aXN0ID8gYXZhdGFyRXhpc3QuY29udGVudFVybCA6IGBkYXRhOmltYWdlL2pwZWc7YmFzZTY0LC85ai80QUFRU2taSlJnQUJBUUFBQVFBQkFBRC8yd0NFQUFrR0J4SVRFaFVURXhBTkZSTVhEUlVWRlJVVkZROFlGeFVWRlJVV0ZoVVZGUlVZSGlnZ0dCb2xHeGNWSVRFaEpTazNMaTR1Rng4ek9EOHROeWd0TGlzQkNnb0tCUVVGRGdVRkRpc1pFeGtyS3lzckt5c3JLeXNyS3lzckt5c3JLeXNyS3lzckt5c3JLeXNyS3lzckt5c3JLeXNyS3lzckt5c3JLeXNyS3lzcksvL0FBQkVJQU9nQTJRTUJJZ0FDRVFFREVRSC94QUFjQUFFQUFnSURBUUFBQUFBQUFBQUFBQUFBQVFnR0J3SUVCUVAveEFCR0VBQUJBd0lEQlFVRUJ3VUdCUVVBQUFBQkFBSURFVEVFSVhFRkJ4SkJVUVlUWWJIeElvR1I4QWdVTWtKeWtxRXpVbUtDb2lOVGM3S3p3aVRCdzlIaEZoZERZNVAveEFBVUFRRUFBQUFBQUFBQUFBQUFBQUFBQUFBQS84UUFGQkVCQUFBQUFBQUFBQUFBQUFBQUFBQUFBUC9hQUF3REFRQUNFUU1SQUQ4QTNlaFBJSTQ4Z290a0VFazh1YUUwMVVXMVMycUNhMFN2VlI0bEFPWlFTRHpLQTEwVVgwUytubWdrR3VpY1gva3JpOTRBT1lEUUtrbklBQythcnZ2VzNwUHhUbllYQnZjekNDclh5TnFIWWpybmNSK0gzdWZSQnNMdHB2aXdXREppZ0J4VXdxQ0dPQWlZUnlkTG5VK0RRYkdwQzFMdHZlL3RYRUU4TTdNT3pQMllXZ2FlMjZycTZFTEFVUWVsaWUwT01rL2FZekd2NjhjMHp2Tnk2SGVPclhpZFhyVTErSzRJZzlERGJjeFVmN1BGNHRuNEpaVytSV1RiRzNyYld3NUgvRnVtYVB1emdTQTZ2UHQvMUxDVVFXSzdJYjdzTE80UjR4bjFWNXk3d0hpaEp5dWZ0Uisrb3l6SzJwRktIQU9hUVdrQWh3SUlJTmlDTGp4VklWbis3UGVUTnM1NGlsYytUQnVkN1RMdWlxYzN4ZE9wYlk1Mk9hQzBOZVFRbmtGOE1Gakk1WTJTUXZhK043QTVqMjVndE5pdnRiVkJKUHhRbWlpMnFXektDYTB1Z1BNcUFPWjlFR2Vac2drRkFhNktMNmVhWHlGa0UxcXVTNDE1QlRSQkRqMHVvdHFwSnBxb3RxZ1cxVHhLRHFmUkFPWlFBT1pTK2lYMFMrbm1nWDA4ME9lUVFua0U4QjZJTlI3L0FMdGVZSVc0Q0YxSHpNNHBpRG0yR3RBeitjZzE4R2tjMVh4WkR2QTJ1Y1h0SEV6RTFhY1E1clA4T1AyR1UvbGFEN3lzZVFFUkVCRVJBUkVRRVJFRzV2by9kc0hNa2RzNlIzc1A0bjRldjNaQUt2akhnUUM2blVIOTViNXRxcVY3SjJnL0R6eFR4NVBpbVpJM1ZqZ2FId05LSzUrRHhEWkkyU2cxYStOcjIvaGNBUitoUWZXMlpRRG1mUkFPWjlFdm1iSUF6ek5rdnA1cGZUelE1NUN5QWM4aFpDZVE5RVBRZWlXeUNDYlpCU29HV3FsQkJ5VURxZlJTZXBVQWN5Z0FjeWw5RXZwNXBmVHpRTDZlYUhvRUo1QkQwSG9nSG9QUmRiYWsvZHdTdkYyd1NQOEF5dEp6K0M3TnNoZjV6SzhidHBKd2JQeGpxNWpaK0lQd2ljZ3B6ZEVSQVJFUUVSRUJFUkFSRVFGYnJkcFB4N0t3VGp5d1RHL2tIQlgrbFZGVnF0ekQrTFkrRUo1TmxINVo1Qi95UVpxTTlFdnA1cGZUelE1NUN5QWM4aFpEMEhvaDZEMFMyUVFMWkJMYXBiVkxhb0pBcHF1UzRnY3lwcWdnam1WRjlQTlNSWFJSZlR6UUw2ZWFFOGdoNkJQQWVpQWVnOUV0a0wvT1pTMlF2ODVsTGFvRnRWNG5ibU1uWnVOQXpjZG5ZZ0FEcVluWkJlM2JNMytjZ3NNM3Bkcm9zQmczaHhEcDVvbnh3eGVMbThKZTcrRnRjK3VRNW9LcG9pSUNJaUFpSWdJaUlDSWlBclQ3bEl5TmpZVUVFZnRqcURQS1I3cUZWWVZqOXgzYkNMRVlSbUJjUXpFUVJrQnY5N0hVa09aNGl0Q1BmenlEYUJ6eUZrUFFlaUhvUFJMWkMvem1VQzJRdWx0VXRxbHMrYUJhOTBIVStpZUo5RUE1bEJJSE1xYXFCbm91U0RpUlhSUWVnVW5vb1BRZWlCNEQwUzJRdjg1bExaQy96bVV0cWdXMVMyWnY4NUJMWm0vemtFSFUraUNRT1o5RlR6dHQyamZqOFpMaVhrMGM4aU1IN2tUU1JHd0RsbG1mRWs4MWNJWjVsVTY3WjdLK3FZN0U0ZWxBekV2REIvOEFXNDhVWi9JV29QRlJFUUVSRUJFUkFSRVFFUkVCZHJabVBrdzhySjRudVpKRzhPWTRjaVBNY2lPWU5GMVYyTm40Tjg4c2NUQlY4a3JZMkQrSjdnMXY2bEJjclltMEJQaG9KMnRwMzJHamxBNkNSZ2ZuOFYzYmFyNDRIQ3RoaWppWVBaWkUxalI0TWFHajlBdnRiTTMrY2dnV3pOMDhUNko0bjBRRG1VQURtVXZwNXBmVHpTK25tZ210ZFBOY2x4cnlDbWlDSEhrRkZzaGY1ektrbjRxTGFvRnRVdG1iL09RUzJadjg1QkIxUG9nRHFmUkJubWJJTTh6Wkw2ZWFCZlR6V2tmcEQ5bUNlNzJoRzJvQUVNOU9XZjhBWlBQdkphVCtCYnV2b3ZoajhISE5HK0dSalh4dllXUGFiRnBGQ0VGSjBXYWJ5K3dNbXk1aDdSa3cwamozVWxNeFRQdTVPUWVCenM0Q3VXWUdGb0NJaUFpSWdJaUlDSWlBdHI3Z096Qm14VHNhOXY4QVo0ZXJZK2pwM04vMnRKSjhYTldGZGgreU0rMDhSM01WR3RBNHBaQ0NXeHNyU3RPYmp5Yno4QUNSYXpzN3NTSEJZZVBEd3RveGphY3VKeE9ibk82dUp6S0QwYlptL3dBNUo0bjBUeFBvZ0hNb0FITXBmVHpTK25tbDlQTkF2cDVvZWdROUFoNkQwUVRYa0ZORkZzbHlRY1NhS0xabS93QTVCU2NzMUE2bjBRQjFQb2d6ek5rR2Vac2w5UE5BdnA1cGZSTDZJZWdRRDBDV3lDV3lDVzFRWWx2VTdQOEExelpzOFRSV1ZyZStpNWt2anpJSGk1dkUzK1pWTlYzN2FxcVc5bnMyY0Z0R1ZqVzBpbFBmUlVzR3ZKNG0vd0FydUlVNkFkVUdHb2lJQ0lpQWlJZ0lpOW5zZHNKMk94a0dHYldqNVJ4a2ZkamI3VWp2YzBIMzBRYiszRGJBK3JiTzc5N2FTWW1UdkxaOTAzMlloNy9hZG84TFpBNm4wWEREd05qYTFyUUd0YXdOYTBXYTFvb0FQY3VZSE1vQUhNcGZUelMrbm1sOVBOQXZwNW9UeUNFOGduZ1BSQVBRZWlXeUYvbk1wYklYK2N5bHRVRWpMVlNvQTVtNmxCQkhNcUJubWJLU0ZGOVBOQXZwNXBmUkw2SVR5SG9nRThoNkpiSUpiSUpiVkF0cWx0VXRxZzZsQThTdGU3N095cHhtQU1yRzFudzNGS3dDN282ZjJyUGdBN1ZsT2EyRUJ6S1VyZTNUcnFncEFpeVRlTHNRWUxhT0lnWUtSaVhqakhJUnlBUGFCcFhoL2xXTm9DSWlBaUlnS3dQMGZPeXZkUVB4OGpmYm1xeUd0eEMwKzA3K1p3K0RCMVdqZGc3Tk9KeE1PSGJrWloyUjE2Y1RnQzczQ3A5eXVWZ2NHeUtOa2JHaHNjY2JXTWJ5YTFvQWIrZ1FmWURtVXZwNXBmVHpTK25tZ1gwODBKNUJDZVFROUI2SUhnUFJMWkMvem1sc2hkTGFvRnRVdG1iL0FEa0V0bWIvQURrRUhVK2lDUU9aOUZOVkF6elhLcURpUlhSUWM5Rkp6VUhvUFJBSjVEMFMyUVMyUVMycUJiVkxhcGJWUEVvSGlVQTVsQU9aUytpQmZSWXJ0M2VIcy9DWXI2cmlKekcvdTJ2SjRIdVlPS3RHdWMycGFhQUhNVW9Rc2gycGoyUXd5VHlHa1VVVHBIbitGZ0pOQnp0Ym1xYzlvTnJQeGVKbHhNbjI1WlMrbCtFSDdMUjRBVUEwUVpIdmQyM0ZpOXB6U3d1YStJTmpqWTlwcUg4REJWdzhPS285eXd4RVFFUkVCRVJCN2ZZcmFiY05qOExPL3dDeEhpbUY1Nk5yUng5d0pQdVZsc1B2SzJaTGlvOEpIaVJKSkpKd05MR3U3dmlvU0FaRFFHcEZCU3VaQ3FjdnBoNW5SdWE5cmkxN1hoelNMdGMwMUJIalVJTHQzMDgwSjVCZUwyTjIrM0hZS0RFdG9PT0wyd1B1eU45bVJvMGNEVHdvZWE5bzlCNklCNkQwUzJRdWxyWFMycUJiVkxabS93QTVCTFptL3dBNUJBT1o5RUFkVDZJTTh6WkJubWJKZlR6UVNNOVBOY2x4clhSY3FJT0pQSUtMWkJTNDlMcUxhb0Z0VXRxbHRVOFNnZUpRRG1VQTVsZFBhdTFJTVBHWmNSTkZGR1B2UGNHZ25vSzNQZ00wSGN2b3VudGJha09Iak1zODBjVVRidWVRQWZBZFQ0RE1yVW5hL2ZyRzJzZXo0ZThQOTlNSE5acTJQSnp1ZjJpTkN0TjdlN1FZckdTZDVpcDVKWGN1SWdOYUR5WXdVYTBlQUNEWVc5UGV1TWJHN0NZVmptNFl1SEhJL0o4dkM0RUJyZnVNcUFjOHpsYk1MVktJZ0lpSUNMWXU3M2RUUHRDTnVJa2xaRGhTNDBjS09rZnd1NFhjTFJrM01FVmRubFloYmVkdWgyU2NQM0gxZDRJekU0ZWUvd0NLbE9JdnNmdzA0ZkJCVnhGc1h0N3VueEd6NDM0aU9XT2JDdElxNGxySkdCenVGdkUwbWpzeTBWYWFrbXdXdWtCRVJCc0hkZnZLZnN6aWhrak1tRmZKeHVEZjJrYmlBQzVsVFE1QVZhZWd6SE94ZlovdERoY1pFSmNMTXlWdk9oOXBwNlBhYzJuVUttYTdteWRxejRhUVM0ZWFTS1FXY3drR25ROVI0SEpCZE8ycVd6UHpvdEY5a04ramhSbTBJZVBsMzhJQWR5emZGWTh5UzBqUmJoMkIyZ3d1TVozdUd4RVVyYVpocDlwbGVUMkgybW5VSVBUQTVuMFFaNW15RFBNMlMrbm1nWDA4ME9lWEpEbm9oNkQwUVRYa0ZORkZzZ3BRUVRUVlJiVlNjbEhpZlJBOFN1bHRmYThHRmpNMkptaWlqSE41QXo2QVhjN3dHYTF2Mi8zeHc0WXVod1laaUp4VUY5U1lZenFQMmp0TWgxdUZvYmJtM01UaTVETGlaNUpaT3JqazBkR05HVFI0QUFJTnU5c2QraE5ZOW53MEZ1L21GL0ZrWGtYZkJhZzJ6dG5FWXFUdmNUUExMSjFlU2FEbzBXYVBBWkxvSWdJaUlDSWlBaUlnM1Q5SGJ0Snd5UzRDUjJUcXpRMS9mYUFKV2pWb2E2bjhEdXEzdGZUelZROTNEWG5hbUNFWklkOWVpcVIrNXhEdkI3MmNROTZ0NWZSQnBiNlJmYVNqSWNBdy9hUGZUVVAzV2tpSnA4Q2VJL3l0V2lWbTIrWU9HMk1WeGtuMm91R3ZKcGhqTFFQQVZwOFZoS0FpSWdJaUlDN0dBeDBzRHhKRExKSEkwNVBZNXpYRDNoZGRFRzRPeVcvR2VQaGp4OGZmTXQzc1lhMlVmaVprMS91cDcxdXJzLzJrd3VPWng0V2VPUnRCeEFaUGJYazVoOXB2dkNwcXUxczNhRTJIa0VzTXNrVWpUazVqaTA2VkhMd3NVRjFUMEhvbHNndEw5Z045Ylg4TUcwUTFqc21qRXRGR3VQV1pnK3orSVplQUdhM05GSTB0RG1rT0RnQ0NDQ0hBNWdnaTRRY3hscXBVQVUxVW9JUFVxdlc5M2VpL0VQZmc4SElXNGRwTFpaV21obUl5TFdrV2owKzFwZlkrK3Z0S2NIczl6V09wTmlIR0ZsRG0xcEZaWGpSdnMxRmk4S3JxQWlJZ0lpSUNJaUFpSWdJaUlNOTNINEh2TnJ3SGxISExJZmRHV2o5WEJXaUo1QlY5K2poZ3VMR1ltWDl6QmhsZjhTUUh5aktzRjRCQlhMNlErQzROcFJ5VXlrd0xEcTVqM3RQNmNLMWF0NS9TVXdQczRPYm82YU1uVU1jM1AzT1dqRUJFUkFSRVFFUkVCRVJBV3hOMXU4dVRaOGdobUw1TUU1MmJjeTZHdjM0LzRlWmJxUm5mWGFJTHVZZVZyMnRrYTVybXVhSE5jMDFhV3VGUVdubUNPYSt5MUg5SHZ0S1pzTkpnNUhWZmh5SFIxTjRYazVlUEM3OUh0QzIzVkJXLzZRbTJETHRGc0FQczRmRHRGT2trdnR1UDVlNytDMWN2ZjdmNDR6YlN4a2hOYTQyVUQ4TEhGalA2V2hlQWdJaUlDSWlBaUlnSWlJQ0lpRGZuMGJjSlRENHVibS9Fc2o5MGJDNy9BS3EzSGJWYTgzRDRVUjdJamNCbkxpSnBENGtQN3F2d2pDMkhiVkJyUDZRV0I0OWxoL09MR3h2SjhIQjhkUGk5dndWYkZiVGVyZ2U5MlRqR200dzNlZjhBNHViTC9zVlMwQkVSQVJFUUVSRUJFUkFSRVFacnVlMnQ5VzJ0aHpXalpYR0IvaUpSUm8vUHdIM0sxcXBIZzhRNktSa2pmdE1rYTl1clNIRDlRcmgvK3BZUDNpZ3FMdC9Cdmh4TThVbGVObUprYTZ2TWh4RmZmZjNyb0t6Rzh6ZFhIdEYvMWlCN0ljVncwY1hBOTNLQUtONDZadGNNaHhDdVFwUzFOUWJWM1M3WGhKLzRVU3RBcnhRdmpmWFJoSWYvQUVvTUdSZHphR3ljUkNhVFlmRXhmNGtjalA4QU1BdW1nSWlJQ0lpQWlJZ0lpNXd4bDdnMXR5NE5HcE5BZ3QzdTd3bmM3TXdiS1VQMUtOeEhPcjI4Wkh4Y1ZrTnN5dmxoSUJIR3h2SnNiV2p3RFFBQVBndnFCelBvZzZ1MU1JSllaWTNVbytCN0tHMUh0TGMvaXFWdUZNcUd0YUh3OEZkNFo1OGxUanRsaE81eCtManBUaHhzd0g0ZThkdy9wUkI0NklpQWlJZ0lpSUNJaUFpN09CMmZOS2FSUXpTdTZSc2U4L0JvS3lyWk82M2E4OUNNRkpHMC9lbUxJNmF0Y2VQOUVHR3NZU1FBQ1NUUUFaa2syb0Z1L3dEOXN0by8zenZpUCs2OVhkM3VkYmhKbTRuR1NSVFRNSWRIR3dFeHh1Rm51YzRBdmNNcUNnQUlybmxUYmxFQXFBS2FvaUNDd0VlMEFmQTIrQzhMSDlpOW5Ua21YQVlKeFBQdTJOZCtab0JVb2d4akg3bHRreVY0WThUQm5lS1p4LzFlTUxIc2R1QWdQN0hIenMveEk0NVAxYVdJaUR3c1p1RHhncjNXTXdiL0FNWWxaNUJ5OGJGYmx0cnNyU1BEU2ZnbVpucHg4S0lnOG5FYnNOc00rMXMrYy9oZEMvOEF5dUs4MmZzYnRKcDlyWjIwUlRuOVhuSStJYlJFUWRPWFlPTGI5ckNZeG84WVpoNWhlajJKMlpJL2FXRGpNYnhYSHdraHpTUFphOE9mZitFRkVRVytBNWxLVjBSRUFpdW5tcXViNTluUGJ0akU4TEhFUEVVamFBbW9kRTBFNWZ4QnlJZ3hLTFllS2RtM0M0dDJrVXA4Z3UzRjJRMmk3N096dG9uVEQ0aW54NGFJaUQwb04ybTEzMjJmaUIrTHUyZjUzQmVyaGR6TzEzMHJCREgrT2FMTDhoS0lnOW5CN2hjY2YydUt3VEIvRDN6ei9sYjVyM05uL1Ivakg3YmFFanZDT0pyUDZuT2Q1SWlESU5uYmtkbFIvYkdMbXovK1NXbitrR1pMSnRuOWc5bVEwN3ZaK0RGTE9jd1BkK1o5U2lJTWdqaURSd3NhMXJlalFBQm9BdVpISUlpQUJSU3BSQi8vMlE9PWBcblx0XHRcdHNldEF2YXRhclVybChhdmF0YXJVcmwpXG5cblx0XHRcdC8vIHNldCBkZWZhdWx0IG5hbWVcblx0XHRcdHNldE5hbWUoZ2V0QXV0aERhdGEucHJvZmlsZS5uYW1lIHx8IHVzZXJJZGVudGlmaWVyKVxuXG5cdFx0XHQvLyBzZXQgZGVmYXVsdCBkZXNjcmlwdGlvblxuXHRcdFx0c2V0RGVzY3JpcHRpb24oZ2V0QXV0aERhdGEucHJvZmlsZS5kZXNjcmlwdGlvbiB8fCBgWW91IHdvdWxkIGJlIGFtYXplIGlmIHlvdSBrbm93IG1lYClcblxuXHRcdFx0Ly8gc2V0IGRlZmF1bHQgdGhlbWVcblx0XHRcdC8vIHNldFRoZW1lKClcblx0XHR9XG5cdFx0aW5pdCgpXG5cdH0sIFtdKVxuXG5cdGNvbnN0IGNoZWNrQW5kU2V0SWRlbnRpZmllciA9IGFzeW5jIChlKSA9PiB7XG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpXG5cblx0XHRjb25zdCBpZEV4aXN0ID0gYXdhaXQgSWRlbnRpZmllckFQSS5mZXRjaExpc3Qoe1xuXHRcdFx0bmFtZTogaWRlbnRpZmllclxuXHRcdH0pXG5cblx0XHRpZihpZEV4aXN0Lmxlbmd0aCA+IDApIHtcblx0XHRcdHNldElkZW50aWZpZXJBdmFpbGFiaWxpdHkoZmFsc2UpXG5cdFx0XHRzZXRUaW1lb3V0KCgpID0+IHtcblx0XHRcdFx0c2V0SWRlbnRpZmllckF2YWlsYWJpbGl0eSh0cnVlKVxuXHRcdFx0fSwgMTAwMClcblx0XHR9XG5cdFx0ZWxzZSB7XG5cdFx0XHRzZXRPbmJvYXJkaW5nU3RhdGUoJ25hbWUnKVxuXHRcdH1cblx0fVxuXHRcblx0Y29uc3QgcmVhZEZpbGVBc1VybCA9IChmaWxlKSA9PiB7XG5cdFx0Y29uc3QgdGVtcG9yYXJ5RmlsZVJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKClcblx0XG5cdFx0cmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcblx0XHRcdHRlbXBvcmFyeUZpbGVSZWFkZXIub25sb2FkID0gKCkgPT4ge1xuXHRcdFx0XHRyZXNvbHZlKHRlbXBvcmFyeUZpbGVSZWFkZXIucmVzdWx0KVxuXHRcdFx0fVxuXHRcdFx0dGVtcG9yYXJ5RmlsZVJlYWRlci5yZWFkQXNEYXRhVVJMKGZpbGUpXG5cdFx0fSlcblx0fVxuXG5cdGNvbnN0IHVwZGF0ZUF2YXRhclVybCA9IGFzeW5jIChmaWxlcykgPT4ge1xuICAgIGlmKGZpbGVzLmxlbmd0aCA+IDApIHtcbiAgICAgIGNvbnN0IGltZ1VybCA9IGF3YWl0IHJlYWRGaWxlQXNVcmwoZmlsZXNbMF0pXG4gICAgICBzZXRBdmF0YXJVcmwoaW1nVXJsKVxuICAgICAgc2V0QXZhdGFyRmlsZShmaWxlc1swXSlcblx0XHR9XG5cdFx0XG5cdFx0Ly8gY29uc3QgZ2V0QXV0aERhdGEgPSBhd2FpdCBibG9ja3N0YWNrQVBJLnNlc3Npb24ubG9hZFVzZXJEYXRhKClcblx0XHQvLyBsZXQgdXNlcklkZW50aWZpZXIgPSBnZXRBdXRoRGF0YS51c2VybmFtZS5zcGxpdCgnLicpWzBdXG5cdFx0Ly8gY29uc3QgaWRFeGlzdCA9IGF3YWl0IElkZW50aWZpZXJBUEkuZmV0Y2hMaXN0KHtcblx0XHQvLyBcdG5hbWU6IHVzZXJJZGVudGlmaWVyXG5cdFx0Ly8gfSlcblx0XHQvLyBpZihpZEV4aXN0Lmxlbmd0aCA+IDApIHtcblx0XHQvLyBcdHVzZXJJZGVudGlmaWVyID0gYCR7dXNlcklkZW50aWZpZXJ9JHtNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoOTkgLSAxICsgMSkpICsgMX1gXG5cdFx0Ly8gfVxuXHRcdGNvbnN0IG5ld0RhdGEgPSB7XG5cdFx0XHRuYW1lOiB1c2VySWRlbnRpZmllcixcblx0XHRcdGJsb2Nrc3RhY2tJZDogZ2V0QXV0aERhdGEudXNlcm5hbWVcblx0XHR9XG5cdFx0Y29uc3QgbmV3SWQgPSBuZXcgSWRlbnRpZmllckFQSShuZXdEYXRhKVxuXHRcdGF3YWl0IG5ld0lkLnNhdmUoKVxuXG5cdFx0Ly8gLy8gY3JlYXRlIG5ldyB1c2VyIHByb2ZpbGVcblx0XHQvLyBjb25zdCBhdmF0YXJFeGlzdCA9IGdldEF1dGhEYXRhLnByb2ZpbGUuaW1hZ2UuZmluZChpbWcgPT4gaW1nLm5hbWUgPT09ICdhdmF0YXInKSB8fCB7fVxuXHRcdFxuXHRcdC8vIC8vIHNldCBkZWZhdWx0IGRhdGFcblx0XHQvLyBsZXQgaWRlbnRpZmllciA9IHVzZXJJZGVudGlmaWVyXG5cdFx0Ly8gbGV0IG5hbWUgPSBnZXRBdXRoRGF0YS5wcm9maWxlLm5hbWUgfHwgdXNlcklkZW50aWZpZXJcblx0XHQvLyBsZXQgZGVzY3JpcHRpb24gPSBnZXRBdXRoRGF0YS5wcm9maWxlLmRlc2NyaXB0aW9uIHx8ICcnXG5cdFx0Ly8gbGV0IGF2YXRhclVybCA9IGF2YXRhckV4aXN0LmNvbnRlbnRVcmwgfHwgJydcblx0XHQvLyBsZXQgdGhlbWUgPSB7XG5cblx0XHQvLyB9XG5cdFx0XG5cdFx0Ly8gY29uc3QgbmV3UHJvZmlsZSA9IHtcblx0XHQvLyBcdGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG5cdFx0Ly8gXHRuYW1lOiBuYW1lLFxuXHRcdC8vIFx0ZGVzY3JpcHRpb246IGRlc2NyaXB0aW9uLFxuXHRcdC8vIFx0YXZhdGFyVXJsOiBhdmF0YXJVcmwsXG5cdFx0Ly8gXHR0aGVtZTogdGhlbWUsXG5cdFx0Ly8gXHRhY2NvdW50TGlzdDogW10sXG5cdFx0Ly8gfVxuXHRcdC8vIGF3YWl0IGJsb2Nrc3RhY2tBUEkuc2Vzc2lvbi5wdXRGaWxlKCdwcm9maWxlLmpzb24nLCBKU09OLnN0cmluZ2lmeShuZXdQcm9maWxlKSwge1xuXHRcdC8vIFx0ZW5jcnlwdDogZmFsc2Vcblx0XHQvLyB9KVxuXG5cdFx0Ly8gZGlzcGF0Y2goc2F2ZVByb2ZpbGVEYXRhKG5ld1Byb2ZpbGUpKVxuXHR9XG5cdFxuXHRjb25zdCBzdWJtaXRPbmJvYXJkaW5nID0gKGUpID0+IHtcblx0XHRlLnByZXZlbnREZWZhdWx0KClcblxuXHRcdHN1Ym1pdChlLCB0cnVlKVxuXHR9XG5cblx0Y29uc3QgYmFjayA9ICgpID0+IHtcblx0XHRjb25zdCBuZXdQcm9maWxlID0ge1xuXHRcdFx0bmFtZTogbmFtZSxcblx0XHRcdGRlc2NyaXB0aW9uOiBkZXNjcmlwdGlvbixcblx0XHRcdGF2YXRhclVybDogYXZhdGFyVXJsLFxuXHRcdFx0YWNjb3VudExpc3Q6IGFjY291bnRMaXN0LFxuXHRcdFx0dGhlbWU6IHRoZW1lXG5cdFx0fVxuXHRcdC8vIGlmIGRhdGEgaXMgbm90IGNoYW5nZWQsIGFsbG93IHVzZXIgdG8gbmF2aWdhdGUgdG8gbWFpbiBzaWRlYmFyXG5cdFx0aWYoc3RyaW5naWZ5KHByb2ZpbGUpID09PSBzdHJpbmdpZnkobmV3UHJvZmlsZSkpIHtcblx0XHRcdHNldFNob3dOZXN0ZWRTaWRlYmFyKGZhbHNlKVxuXHRcdH1cblx0XHQvLyBpZiBkYXRhIGlzIGNoYW5nZWQsIHByb21wdCBjb25maXJtYXRpb24gd2luZG93XG5cdFx0ZWxzZSB7XG5cdFx0XHRzZXRTaG93Q29uZmlybU1vZGFsKHRydWUpXG5cdFx0fVxuXHR9XG5cblx0Y29uc3QgaXNTZWxlY3RlZFRoZW1lID0gKG5hbWUpID0+IHtcblx0XHRpZih0aGVtZS5uYW1lID09PSBuYW1lKSB7XG5cdFx0XHRyZXR1cm4gdHJ1ZVxuXHRcdH1cblx0XHRyZXR1cm4gZmFsc2Vcblx0fVxuXG5cdHVzZUVmZmVjdCgoKSA9PiB7XG5cdFx0Y29uc3QgcmVnZXggPSAvXlthLXowLTldezQsMzJ9JC9nXG5cdFx0aWYocmVnZXgudGVzdChpZGVudGlmaWVyKSkge1xuXHRcdFx0c2V0SWRlbmZpZXJWYWxpZCh0cnVlKVxuXHRcdH1cblx0XHRlbHNlIHtcblx0XHRcdHNldElkZW5maWVyVmFsaWQoZmFsc2UpXG5cdFx0fVxuXHR9LCBbaWRlbnRpZmllcl0pXG5cblx0dXNlRWZmZWN0KCgpID0+IHtcblx0XHRpZihzdWJtaXRTdGF0ZSA9PT0gJ2Z1bGZpbGxlZCcpIHtcblx0XHRcdHNldFNob3dPbmJvYXJkaW5nKGZhbHNlKVxuXHRcdH1cblx0fSwgW3N1Ym1pdFN0YXRlXSlcblxuXHRyZXR1cm4gKFxuXHRcdDxSZWFjdC5GcmFnbWVudD5cblx0XHRcdDxzdHlsZSBqc3g+XG5cdFx0XHRcdHtcblx0XHRcdFx0XHRgXG5cdFx0XHRcdFx0Lmxkcy1yaW5nLWNvbnRhaW5lciB7XG5cdFx0XHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHQubGRzLXJpbmcge1xuXHRcdFx0XHRcdFx0bWFyZ2luOiBhdXRvO1xuXHRcdFx0XHRcdFx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xuXHRcdFx0XHRcdFx0d2lkdGg6IDEuMTI1cmVtO1xuXHRcdFx0XHRcdFx0aGVpZ2h0OiAxLjEyNXJlbTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0Lmxkcy1yaW5nIGRpdiB7XG5cdFx0XHRcdFx0XHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xuXHRcdFx0XHRcdFx0ZGlzcGxheTogYmxvY2s7XG5cdFx0XHRcdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFx0XHRcdFx0XHR3aWR0aDogMXJlbTtcblx0XHRcdFx0XHRcdGhlaWdodDogMXJlbTtcblx0XHRcdFx0XHRcdG1hcmdpbjogMnB4O1xuXHRcdFx0XHRcdFx0Ym9yZGVyOiAycHggc29saWQgd2hpdGU7XG5cdFx0XHRcdFx0XHRib3JkZXItcmFkaXVzOiA1MCU7XG5cdFx0XHRcdFx0XHRhbmltYXRpb246IGxkcy1yaW5nIDEuMnMgY3ViaWMtYmV6aWVyKDAuNSwgMCwgMC41LCAxKSBpbmZpbml0ZTtcblx0XHRcdFx0XHRcdGJvcmRlci1jb2xvcjogd2hpdGUgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQ7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdC5sZHMtcmluZyBkaXY6bnRoLWNoaWxkKDEpIHtcblx0XHRcdFx0XHRcdGFuaW1hdGlvbi1kZWxheTogLTAuNDVzO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHQubGRzLXJpbmcgZGl2Om50aC1jaGlsZCgyKSB7XG5cdFx0XHRcdFx0XHRhbmltYXRpb24tZGVsYXk6IC0wLjNzO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHQubGRzLXJpbmcgZGl2Om50aC1jaGlsZCgzKSB7XG5cdFx0XHRcdFx0XHRhbmltYXRpb24tZGVsYXk6IC0wLjE1cztcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0QGtleWZyYW1lcyBsZHMtcmluZyB7XG5cdFx0XHRcdFx0XHQwJSB7XG5cdFx0XHRcdFx0XHRcdHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0MTAwJSB7XG5cdFx0XHRcdFx0XHRcdHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVx0XHRcdFx0XHRcblx0XHRcdFx0XHRgXG5cdFx0XHRcdH1cblx0XHRcdDwvc3R5bGU+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZpeGVkIGJnLXdoaXRlIGluc2V0LTAgei0zMFwiPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm1heC13LXhzIG1kOm1heC13LW1kIHAtNCBwdC0xNiBtdC0xNiBtLWF1dG8gdy1mdWxsXCI+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJteC0yIG1kOm14LThcIj5cblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0b25ib2FyZGluZ1N0YXRlID09PSAnaWRlbnRpZmllcicgJiYgKFxuXHRcdFx0XHRcdFx0XHRcdDxkaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm1iLTRcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwidGV4dC1sZyB0ZXh0LWdyYXktODAwIGZvbnQtc2VtaWJvbGRcIj5MZXQncyBjcmVhdGUgeW91ciBwZXJzb25hbCBzaXRlITwvcD5cblx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwibWItMiB0ZXh0LWxnIHRleHQtZ3JheS05MDAgZm9udC1zZW1pYm9sZFwiPlNldCB5b3VyIHNpdGUgYWRkcmVzczwvcD5cblx0XHRcdFx0XHRcdFx0XHRcdDxmb3JtIG9uU3VibWl0PXsoZSkgPT4gY2hlY2tBbmRTZXRJZGVudGlmaWVyKGUpfSAgPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm1iLTRcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm1iLTEgcHgtMyBweS0xIGZsZXggYm9yZGVyLXNvbGlkIGJvcmRlciByb3VuZGVkLXNtIGJvcmRlci1ncmF5LTMwMCBqdXN0aWZ5LWJldHdlZW5cIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxpbnB1dCBwbGFjZWhvbGRlcj1cInVzZXJuYW1lXCIgY2xhc3NOYW1lPVwiZmxleC1ncm93IGZvY3VzOm91dGxpbmUtbm9uZSB3LWZ1bGxcIiB0eXBlPVwidGV4dFwiIHZhbHVlPXtpZGVudGlmaWVyfSBvbkNoYW5nZT17KGUpID0+IHNldElkZW50aWZlcihlLnRhcmdldC52YWx1ZSl9IC8+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8bGFiZWwgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTYwMFwiPi5wYXJhcy5pZDwvbGFiZWw+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwidGV4dC14cyBpdGFsaWMgdGV4dC1ncmF5LTYwMFwiPk1pbmltYWwgNCBjaGFyYWN0ZXJzICYgTWF4aW11bSAzMiBjaGFyYWN0ZXJzPC9wPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PGJ1dHRvbiBkaXNhYmxlZD17IWlkZW50aWZpZXJWYWxpZH0gdHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT1cInctZnVsbCBiZy1ncmF5LTkwMCB0ZXh0LXdoaXRlIGJvcmRlci1zb2xpZCBib3JkZXItMiByb3VuZGVkLWxnIGJvcmRlci1ncmF5LTkwMCBweC00IHB5LTEgdGV4dC1zbVwiIHN0eWxlPXt7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0b3BhY2l0eTogaWRlbnRpZmllclZhbGlkID8gYDEwMCVgIDogYDMwJWBcblx0XHRcdFx0XHRcdFx0XHRcdFx0fX0+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0e2lkZW50aWZpZXJBdmFpbGFiaWxpdHkgPyAnTmV4dCcgOiAnQWxyZWFkeSBUYWtlbid9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvYnV0dG9uPlxuXHRcdFx0XHRcdFx0XHRcdFx0PC9mb3JtPlxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQpXG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdG9uYm9hcmRpbmdTdGF0ZSA9PT0gJ25hbWUnICYmIChcblx0XHRcdFx0XHRcdFx0XHQ8ZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJtYi00XCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgb25DbGljaz17KCkgPT4gc2V0T25ib2FyZGluZ1N0YXRlKCdpZGVudGlmaWVyJyl9IGNsYXNzTmFtZT1cImlubGluZS1mbGV4IGl0ZW1zLWNlbnRlciBjdXJzb3ItcG9pbnRlclwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxzdmcgY2xhc3NOYW1lPVwibXItNFwiIHdpZHRoPVwiMTZcIiBoZWlnaHQ9XCIxNlwiIHZpZXdCb3g9XCIwIDAgMTYgMTZcIiBmaWxsPVwibm9uZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxwYXRoIGZpbGxSdWxlPVwiZXZlbm9kZFwiIGNsaXBSdWxlPVwiZXZlbm9kZFwiIGQ9XCJNMTEuNzA3IDEzLjI5MjlMMTAuMjkyOCAxNC43MDcxTDMuNTg1NjkgOC4wMDAwMUwxMC4yOTI4IDEuMjkyOTFMMTEuNzA3IDIuNzA3MTJMNi40MTQxMiA4LjAwMDAxTDExLjcwNyAxMy4yOTI5WlwiIGZpbGw9XCJibGFja1wiLz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3N2Zz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJ0ZXh0LWxnIHRleHQtZ3JheS04MDAgZm9udC1zZW1pYm9sZFwiPkJhY2s8L3A+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJtYi0yIHRleHQtbGcgdGV4dC1ncmF5LTkwMCBmb250LXNlbWlib2xkXCI+VGVsbCB1cyB5b3VyIG5hbWU8L3A+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8Zm9ybSBvblN1Ym1pdD17KGUpID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpXG5cblx0XHRcdFx0XHRcdFx0XHRcdFx0c2V0T25ib2FyZGluZ1N0YXRlKCdkZXNjcmlwdGlvbicpXG5cdFx0XHRcdFx0XHRcdFx0XHR9fSA+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibWItOFwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicHgtMyBweS0xIGZsZXggZmxleC1jb2wgYm9yZGVyLXNvbGlkIGJvcmRlciByb3VuZGVkLXNtIGJvcmRlci1ncmF5LTMwMFwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGxhYmVsIGNsYXNzTmFtZT1cInRleHQteHMgZm9udC1saWdodCB0ZXh0LWdyYXktNjAwXCI+TmFtZTwvbGFiZWw+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8aW5wdXQgcGxhY2Vob2xkZXI9XCJZb3VyIG5hbWVcIiBjbGFzc05hbWU9XCJmb2N1czpvdXRsaW5lLW5vbmVcIiB0eXBlPVwidGV4dFwiIHZhbHVlPXtuYW1lfSBvbkNoYW5nZT17KGUpID0+IHNldE5hbWUoZS50YXJnZXQudmFsdWUpfSAvPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPVwidy1mdWxsIGJnLWdyYXktOTAwIHRleHQtd2hpdGUgYm9yZGVyLXNvbGlkIGJvcmRlci0yIHJvdW5kZWQtbGcgYm9yZGVyLWdyYXktOTAwIHB4LTQgcHktMSB0ZXh0LXNtXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0TmV4dFxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2J1dHRvbj5cblx0XHRcdFx0XHRcdFx0XHRcdDwvZm9ybT5cblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0KVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRvbmJvYXJkaW5nU3RhdGUgPT09ICdkZXNjcmlwdGlvbicgJiYgKFxuXHRcdFx0XHRcdFx0XHRcdDxkaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm1iLTRcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBvbkNsaWNrPXsoKSA9PiBzZXRPbmJvYXJkaW5nU3RhdGUoJ25hbWUnKX0gY2xhc3NOYW1lPVwiaW5saW5lLWZsZXggaXRlbXMtY2VudGVyIGN1cnNvci1wb2ludGVyXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHN2ZyBjbGFzc05hbWU9XCJtci00XCIgd2lkdGg9XCIxNlwiIGhlaWdodD1cIjE2XCIgdmlld0JveD1cIjAgMCAxNiAxNlwiIGZpbGw9XCJub25lXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHBhdGggZmlsbFJ1bGU9XCJldmVub2RkXCIgY2xpcFJ1bGU9XCJldmVub2RkXCIgZD1cIk0xMS43MDcgMTMuMjkyOUwxMC4yOTI4IDE0LjcwNzFMMy41ODU2OSA4LjAwMDAxTDEwLjI5MjggMS4yOTI5MUwxMS43MDcgMi43MDcxMkw2LjQxNDEyIDguMDAwMDFMMTEuNzA3IDEzLjI5MjlaXCIgZmlsbD1cImJsYWNrXCIvPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvc3ZnPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cInRleHQtbGcgdGV4dC1ncmF5LTgwMCBmb250LXNlbWlib2xkXCI+QmFjazwvcD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cIm1iLTIgdGV4dC1sZyB0ZXh0LWdyYXktOTAwIGZvbnQtc2VtaWJvbGRcIj5UZWxsIHRoZSB3b3JsZCBhYm91dCB5b3Vyc2VsZjwvcD5cblx0XHRcdFx0XHRcdFx0XHRcdDxmb3JtIG9uU3VibWl0PXsoZSkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRlLnByZXZlbnREZWZhdWx0KClcblxuXHRcdFx0XHRcdFx0XHRcdFx0XHRzZXRPbmJvYXJkaW5nU3RhdGUoJ2F2YXRhcicpXG5cdFx0XHRcdFx0XHRcdFx0XHR9fSA+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibWItNFwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicHgtMyBweS0xIGZsZXggZmxleC1jb2wgYm9yZGVyLXNvbGlkIGJvcmRlciByb3VuZGVkLXNtIGJvcmRlci1ncmF5LTMwMFwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGxhYmVsIGNsYXNzTmFtZT1cInRleHQteHMgZm9udC1saWdodCB0ZXh0LWdyYXktNjAwXCI+RGVzY3JpcHRpb248L2xhYmVsPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHRleHRhcmVhIHBsYWNlaG9sZGVyPVwiVGVsbCB0aGUgd29ybGQgYWJvdXQgeW91cnNlbGZcIiByb3dzPXs4fSBjbGFzc05hbWU9XCJmb2N1czpvdXRsaW5lLW5vbmUgcmVzaXplLW5vbmVcIiB2YWx1ZT17ZGVzY3JpcHRpb259IG9uQ2hhbmdlPXsoZSkgPT4gc2V0RGVzY3JpcHRpb24oZS50YXJnZXQudmFsdWUpfSAvPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPVwidy1mdWxsIGJnLWdyYXktOTAwIHRleHQtd2hpdGUgYm9yZGVyLXNvbGlkIGJvcmRlci0yIHJvdW5kZWQtbGcgYm9yZGVyLWdyYXktOTAwIHB4LTQgcHktMSB0ZXh0LXNtXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0TmV4dFxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2J1dHRvbj5cblx0XHRcdFx0XHRcdFx0XHRcdDwvZm9ybT5cblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0KVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRvbmJvYXJkaW5nU3RhdGUgPT09ICdhdmF0YXInICYmIChcblx0XHRcdFx0XHRcdFx0XHQ8ZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJtYi00XCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgb25DbGljaz17KCkgPT4gc2V0T25ib2FyZGluZ1N0YXRlKCdkZXNjcmlwdGlvbicpfSBjbGFzc05hbWU9XCJpbmxpbmUtZmxleCBpdGVtcy1jZW50ZXIgY3Vyc29yLXBvaW50ZXJcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8c3ZnIGNsYXNzTmFtZT1cIm1yLTRcIiB3aWR0aD1cIjE2XCIgaGVpZ2h0PVwiMTZcIiB2aWV3Qm94PVwiMCAwIDE2IDE2XCIgZmlsbD1cIm5vbmVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8cGF0aCBmaWxsUnVsZT1cImV2ZW5vZGRcIiBjbGlwUnVsZT1cImV2ZW5vZGRcIiBkPVwiTTExLjcwNyAxMy4yOTI5TDEwLjI5MjggMTQuNzA3MUwzLjU4NTY5IDguMDAwMDFMMTAuMjkyOCAxLjI5MjkxTDExLjcwNyAyLjcwNzEyTDYuNDE0MTIgOC4wMDAwMUwxMS43MDcgMTMuMjkyOVpcIiBmaWxsPVwiYmxhY2tcIi8+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9zdmc+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwidGV4dC1sZyB0ZXh0LWdyYXktODAwIGZvbnQtc2VtaWJvbGRcIj5CYWNrPC9wPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwibWItMiB0ZXh0LWxnIHRleHQtZ3JheS05MDAgZm9udC1zZW1pYm9sZFwiPlNlbGVjdCBpbWFnZSB0aGF0IHJlcHJlc2VudCB5b3Vyc2VsZjwvcD5cblx0XHRcdFx0XHRcdFx0XHRcdDxmb3JtIG9uU3VibWl0PXsoZSkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRlLnByZXZlbnREZWZhdWx0KClcblxuXHRcdFx0XHRcdFx0XHRcdFx0XHRzZXRPbmJvYXJkaW5nU3RhdGUoJ3RoZW1lJylcblx0XHRcdFx0XHRcdFx0XHRcdH19ID5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJtYi00XCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZVwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJib3JkZXItc29saWQgYm9yZGVyIHJvdW5kZWQtc20gYm9yZGVyLWdyYXktMzAwXCIgc3R5bGU9e3tcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0aGVpZ2h0OiBgMjAwcHhgLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR3aWR0aDogYDEwMCVgLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRiYWNrZ3JvdW5kU2l6ZTogYGNvdmVyYCxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0YmFja2dyb3VuZFBvc2l0aW9uOiBgY2VudGVyYCxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0YmFja2dyb3VuZEltYWdlOiBgdXJsKCR7YXZhdGFyVXJsfSlgXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9fT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJoLWZ1bGwgdy1mdWxsIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyXCIgc3R5bGU9e3tcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRiYWNrZ3JvdW5kQ29sb3I6IGByZ2JhKDAsMCwwLDAuNSlgXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH19PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmVcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8c3ZnIHdpZHRoPVwiMzJcIiBoZWlnaHQ9XCIzMlwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBmaWxsPVwibm9uZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxwYXRoIGZpbGxSdWxlPVwiZXZlbm9kZFwiIGNsaXBSdWxlPVwiZXZlbm9kZFwiIGQ9XCJNNi45MzcwMiA1Ljg0NTM4QzcuMDA3ODcgNS43NDY4OCA3LjA4NjU2IDUuNjI2MzEgNy4xODY4OSA1LjQ2MzcyQzcuMjIzNTYgNS40MDQzMSA3LjMyMzU1IDUuMjM5MzQgNy4zOTc5OSA1LjExNjUzTDcuNDgxOCA0Ljk3ODQxQzguMzEwNzkgMy42MjIzOSA4LjkxMzM5IDMgMTAgM0gxNVY1SDEwQzkuOTEzMjcgNSA5LjY0MDUgNS4yODE3MiA5LjE4ODIgNi4wMjE1OUw5LjExNTQyIDYuMTQxNTRMOS4xMTUyNCA2LjE0MTgzQzkuMDQwMTkgNi4yNjU2NiA4LjkzMDk2IDYuNDQ1ODkgOC44ODg4NyA2LjUxNDA5QzguNzY1OTIgNi43MTMzMiA4LjY2Mzc1IDYuODY5ODggOC41NjA2MSA3LjAxMzI2QzguMTEyMzcgNy42MzY0MSA3LjY2NDM0IDggNyA4SDRDMy40NDc3MiA4IDMgOC40NDc3MiAzIDlWMThDMyAxOC41NTIzIDMuNDQ3NzIgMTkgNCAxOUgyMEMyMC41NTIzIDE5IDIxIDE4LjU1MjMgMjEgMThWMTJIMjNWMThDMjMgMTkuNjU2OSAyMS42NTY5IDIxIDIwIDIxSDRDMi4zNDMxNSAyMSAxIDE5LjY1NjkgMSAxOFY5QzEgNy4zNDMxNSAyLjM0MzE1IDYgNCA2SDYuODE2MkM2Ljg0OTQ5IDUuOTYxOTQgNi44OTAzIDUuOTEwMzMgNi45MzcwMiA1Ljg0NTM4Wk0xNyA4VjZIMTlWNEgyMVY2SDIzVjhIMjFWMTBIMTlWOEgxN1pNMTIgMThDOS4yMzg1OCAxOCA3IDE1Ljc2MTQgNyAxM0M3IDEwLjIzODYgOS4yMzg1OCA4IDEyIDhDMTQuNzYxNCA4IDE3IDEwLjIzODYgMTcgMTNDMTcgMTUuNzYxNCAxNC43NjE0IDE4IDEyIDE4Wk0xMiAxNkMxMy42NTY5IDE2IDE1IDE0LjY1NjkgMTUgMTNDMTUgMTEuMzQzMSAxMy42NTY5IDEwIDEyIDEwQzEwLjM0MzEgMTAgOSAxMS4zNDMxIDkgMTNDOSAxNC42NTY5IDEwLjM0MzEgMTYgMTIgMTZaXCIgZmlsbD1cIndoaXRlXCIvPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvc3ZnPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGlucHV0IGNsYXNzTmFtZT1cImFic29sdXRlIGN1cnNvci1wb2ludGVyIGluc2V0LTAgb3BhY2l0eS0wIHctZnVsbFwiIHR5cGU9XCJmaWxlXCIgb25DaGFuZ2U9eyhlKSA9PiB1cGRhdGVBdmF0YXJVcmwoZS50YXJnZXQuZmlsZXMpfSAvPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPVwidy1mdWxsIGJnLWdyYXktOTAwIHRleHQtd2hpdGUgYm9yZGVyLXNvbGlkIGJvcmRlci0yIHJvdW5kZWQtbGcgYm9yZGVyLWdyYXktOTAwIHB4LTQgcHktMSB0ZXh0LXNtXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0TmV4dFxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2J1dHRvbj5cblx0XHRcdFx0XHRcdFx0XHRcdDwvZm9ybT5cblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0KVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRvbmJvYXJkaW5nU3RhdGUgPT09ICd0aGVtZScgJiYgKFxuXHRcdFx0XHRcdFx0XHRcdDxkaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm1iLTRcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBvbkNsaWNrPXsoKSA9PiBzZXRPbmJvYXJkaW5nU3RhdGUoJ2F2YXRhcicpfSBjbGFzc05hbWU9XCJpbmxpbmUtZmxleCBpdGVtcy1jZW50ZXIgY3Vyc29yLXBvaW50ZXJcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8c3ZnIGNsYXNzTmFtZT1cIm1yLTRcIiB3aWR0aD1cIjE2XCIgaGVpZ2h0PVwiMTZcIiB2aWV3Qm94PVwiMCAwIDE2IDE2XCIgZmlsbD1cIm5vbmVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8cGF0aCBmaWxsUnVsZT1cImV2ZW5vZGRcIiBjbGlwUnVsZT1cImV2ZW5vZGRcIiBkPVwiTTExLjcwNyAxMy4yOTI5TDEwLjI5MjggMTQuNzA3MUwzLjU4NTY5IDguMDAwMDFMMTAuMjkyOCAxLjI5MjkxTDExLjcwNyAyLjcwNzEyTDYuNDE0MTIgOC4wMDAwMUwxMS43MDcgMTMuMjkyOVpcIiBmaWxsPVwiYmxhY2tcIi8+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9zdmc+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwidGV4dC1sZyB0ZXh0LWdyYXktODAwIGZvbnQtc2VtaWJvbGRcIj5CYWNrPC9wPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwibWItMiB0ZXh0LWxnIHRleHQtZ3JheS05MDAgZm9udC1zZW1pYm9sZFwiPlNlbGVjdCB5b3VyIHRoZW1lPC9wPlxuXHRcdFx0XHRcdFx0XHRcdFx0PGZvcm0gb25TdWJtaXQ9eyhlKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGUucHJldmVudERlZmF1bHQoKVxuXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHNldE9uYm9hcmRpbmdTdGF0ZSgnZG9uZScpXG5cdFx0XHRcdFx0XHRcdFx0XHR9fSA+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LW5vLXdyYXAgbWItNCBvdmVyZmxvdy14LXNjcm9sbFwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHRoZW1lTGlzdC5tYXAodGhlbWUgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibXItNFwiIGtleT17dGhlbWUubmFtZX0gc3R5bGU9e3tcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdG1pbldpZHRoOiBgMjAwcHhgXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fX0+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7Lyogb25jbGljayBjaGFuZ2UgdGhlbWUgKi99XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImN1cnNvci1wb2ludGVyXCIgb25DbGljaz17KCkgPT4gc2V0VGhlbWUodGhlbWUpfT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGxhYmVsPnt0aGVtZS5uYW1lfTwvbGFiZWw+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgYm9yZGVyLXNvbGlkIGJvcmRlciByb3VuZGVkLXNtIGJvcmRlci1ncmF5LTMwMFwiIHN0eWxlPXt7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0aGVpZ2h0OiBgMjAwcHhgLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHdpZHRoOiBgMTAwJWAsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0YmFja2dyb3VuZFNpemU6IGBjb3ZlcmAsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0YmFja2dyb3VuZFBvc2l0aW9uOiBgY2VudGVyYCxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoJHthdmF0YXJVcmx9KWBcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fX0+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0eyBpc1NlbGVjdGVkVGhlbWUodGhlbWUubmFtZSkgJiYgKFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSBpbnNldC0wIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyXCIgc3R5bGU9e3tcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0YmFja2dyb3VuZENvbG9yOiBgcmdiYSgwLDAsMCwwLjMpYCxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH19PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktMjAwXCI+U2VsZWN0ZWQ8L3A+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQpfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQpXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxidXR0b24gb25DbGljaz17KGUpID0+IHN1Ym1pdE9uYm9hcmRpbmcoZSl9IGRpc2FibGVkPXshdGhlbWV9IHR5cGU9XCJzdWJtaXRcIiBjbGFzc05hbWU9XCJ3LWZ1bGwgYmctZ3JheS05MDAgdGV4dC13aGl0ZSBib3JkZXItc29saWQgYm9yZGVyLTIgcm91bmRlZC1sZyBib3JkZXItZ3JheS05MDAgcHgtNCBweS0xIHRleHQtc21cIiAgc3R5bGU9e3tcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRvcGFjaXR5OiB0aGVtZSA/IGAxMDAlYCA6IGAzMCVgXG5cdFx0XHRcdFx0XHRcdFx0XHRcdH19PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHsgc3VibWl0U3RhdGUgPT09ICdwZW5kaW5nJyAmJiAoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImlubGluZS1mbGV4XCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cInRleHQtc20gbXItMlwiPlNhdmluZzwvcD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJsZHMtcmluZy1jb250YWluZXJcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImxkcy1yaW5nXCI+PGRpdj48L2Rpdj48ZGl2PjwvZGl2PjxkaXY+PC9kaXY+PGRpdj48L2Rpdj48L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQpfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHN1Ym1pdFN0YXRlID09PSAnZnVsZmlsbGVkJyAmJiAoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cInRleHQtc21cIj5XZWJzaXRlIHN1Y2Nlc3NmdWxseSBjcmVhdGVkPC9wPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0KVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRzdWJtaXRTdGF0ZSA9PT0gJycgJiYgKFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJ0ZXh0LXNtXCI+Q3JlYXRlIG15IHdlYnNpdGU8L3A+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQpXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHN1Ym1pdFN0YXRlID09PSAncmVqZWN0ZWQnICYmIChcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwidGV4dC1zbVwiPkZhaWxlZDwvcD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdClcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvYnV0dG9uPlxuXHRcdFx0XHRcdFx0XHRcdFx0PC9mb3JtPlxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQpXG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0PC9SZWFjdC5GcmFnbWVudD5cblx0KVxufVxuXG5leHBvcnQgZGVmYXVsdCBPbmJvYXJkaW5nIl19 */\n/*@ sourceURL=/Users/riqi/Projects/persona-app/dashboard/components/onboarding.js */"), __jsx("div", {
    className: "jsx-50543562" + " " + "fixed bg-white inset-0 z-30"
  }, __jsx("div", {
    className: "jsx-50543562" + " " + "max-w-xs md:max-w-md p-4 pt-16 mt-16 m-auto w-full"
  }, __jsx("div", {
    className: "jsx-50543562" + " " + "mx-2 md:mx-8"
  }, onboardingState === 'identifier' && __jsx("div", {
    className: "jsx-50543562"
  }, __jsx("div", {
    className: "jsx-50543562" + " " + "mb-4"
  }, __jsx("p", {
    className: "jsx-50543562" + " " + "text-lg text-gray-800 font-semibold"
  }, "Let's create your personal site!")), __jsx("p", {
    className: "jsx-50543562" + " " + "mb-2 text-lg text-gray-900 font-semibold"
  }, "Set your site address"), __jsx("form", {
    onSubmit: e => checkAndSetIdentifier(e),
    className: "jsx-50543562"
  }, __jsx("div", {
    className: "jsx-50543562" + " " + "mb-4"
  }, __jsx("div", {
    className: "jsx-50543562" + " " + "mb-1 px-3 py-1 flex border-solid border rounded-sm border-gray-300 justify-between"
  }, __jsx("input", {
    placeholder: "username",
    type: "text",
    value: identifier,
    onChange: e => setIdentifer(e.target.value),
    className: "jsx-50543562" + " " + "flex-grow focus:outline-none w-full"
  }), __jsx("label", {
    className: "jsx-50543562" + " " + "text-gray-600"
  }, ".paras.id")), __jsx("p", {
    className: "jsx-50543562" + " " + "text-xs italic text-gray-600"
  }, "Minimal 4 characters & Maximum 32 characters")), __jsx("button", {
    disabled: !identifierValid,
    type: "submit",
    style: {
      opacity: identifierValid ? `100%` : `30%`
    },
    className: "jsx-50543562" + " " + "w-full bg-gray-900 text-white border-solid border-2 rounded-lg border-gray-900 px-4 py-1 text-sm"
  }, identifierAvailability ? 'Next' : 'Already Taken'))), onboardingState === 'name' && __jsx("div", {
    className: "jsx-50543562"
  }, __jsx("div", {
    className: "jsx-50543562" + " " + "mb-4"
  }, __jsx("div", {
    onClick: () => setOnboardingState('identifier'),
    className: "jsx-50543562" + " " + "inline-flex items-center cursor-pointer"
  }, __jsx("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 16 16",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: "jsx-50543562" + " " + "mr-4"
  }, __jsx("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M11.707 13.2929L10.2928 14.7071L3.58569 8.00001L10.2928 1.29291L11.707 2.70712L6.41412 8.00001L11.707 13.2929Z",
    fill: "black",
    className: "jsx-50543562"
  })), __jsx("p", {
    className: "jsx-50543562" + " " + "text-lg text-gray-800 font-semibold"
  }, "Back"))), __jsx("p", {
    className: "jsx-50543562" + " " + "mb-2 text-lg text-gray-900 font-semibold"
  }, "Tell us your name"), __jsx("form", {
    onSubmit: e => {
      e.preventDefault();
      setOnboardingState('description');
    },
    className: "jsx-50543562"
  }, __jsx("div", {
    className: "jsx-50543562" + " " + "mb-8"
  }, __jsx("div", {
    className: "jsx-50543562" + " " + "px-3 py-1 flex flex-col border-solid border rounded-sm border-gray-300"
  }, __jsx("label", {
    className: "jsx-50543562" + " " + "text-xs font-light text-gray-600"
  }, "Name"), __jsx("input", {
    placeholder: "Your name",
    type: "text",
    value: name,
    onChange: e => setName(e.target.value),
    className: "jsx-50543562" + " " + "focus:outline-none"
  }))), __jsx("button", {
    type: "submit",
    className: "jsx-50543562" + " " + "w-full bg-gray-900 text-white border-solid border-2 rounded-lg border-gray-900 px-4 py-1 text-sm"
  }, "Next"))), onboardingState === 'description' && __jsx("div", {
    className: "jsx-50543562"
  }, __jsx("div", {
    className: "jsx-50543562" + " " + "mb-4"
  }, __jsx("div", {
    onClick: () => setOnboardingState('name'),
    className: "jsx-50543562" + " " + "inline-flex items-center cursor-pointer"
  }, __jsx("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 16 16",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: "jsx-50543562" + " " + "mr-4"
  }, __jsx("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M11.707 13.2929L10.2928 14.7071L3.58569 8.00001L10.2928 1.29291L11.707 2.70712L6.41412 8.00001L11.707 13.2929Z",
    fill: "black",
    className: "jsx-50543562"
  })), __jsx("p", {
    className: "jsx-50543562" + " " + "text-lg text-gray-800 font-semibold"
  }, "Back"))), __jsx("p", {
    className: "jsx-50543562" + " " + "mb-2 text-lg text-gray-900 font-semibold"
  }, "Tell the world about yourself"), __jsx("form", {
    onSubmit: e => {
      e.preventDefault();
      setOnboardingState('avatar');
    },
    className: "jsx-50543562"
  }, __jsx("div", {
    className: "jsx-50543562" + " " + "mb-4"
  }, __jsx("div", {
    className: "jsx-50543562" + " " + "px-3 py-1 flex flex-col border-solid border rounded-sm border-gray-300"
  }, __jsx("label", {
    className: "jsx-50543562" + " " + "text-xs font-light text-gray-600"
  }, "Description"), __jsx("textarea", {
    placeholder: "Tell the world about yourself",
    rows: 8,
    value: description,
    onChange: e => setDescription(e.target.value),
    className: "jsx-50543562" + " " + "focus:outline-none resize-none"
  }))), __jsx("button", {
    type: "submit",
    className: "jsx-50543562" + " " + "w-full bg-gray-900 text-white border-solid border-2 rounded-lg border-gray-900 px-4 py-1 text-sm"
  }, "Next"))), onboardingState === 'avatar' && __jsx("div", {
    className: "jsx-50543562"
  }, __jsx("div", {
    className: "jsx-50543562" + " " + "mb-4"
  }, __jsx("div", {
    onClick: () => setOnboardingState('description'),
    className: "jsx-50543562" + " " + "inline-flex items-center cursor-pointer"
  }, __jsx("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 16 16",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: "jsx-50543562" + " " + "mr-4"
  }, __jsx("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M11.707 13.2929L10.2928 14.7071L3.58569 8.00001L10.2928 1.29291L11.707 2.70712L6.41412 8.00001L11.707 13.2929Z",
    fill: "black",
    className: "jsx-50543562"
  })), __jsx("p", {
    className: "jsx-50543562" + " " + "text-lg text-gray-800 font-semibold"
  }, "Back"))), __jsx("p", {
    className: "jsx-50543562" + " " + "mb-2 text-lg text-gray-900 font-semibold"
  }, "Select image that represent yourself"), __jsx("form", {
    onSubmit: e => {
      e.preventDefault();
      setOnboardingState('theme');
    },
    className: "jsx-50543562"
  }, __jsx("div", {
    className: "jsx-50543562" + " " + "mb-4"
  }, __jsx("div", {
    className: "jsx-50543562" + " " + "relative"
  }, __jsx("div", {
    style: {
      height: `200px`,
      width: `100%`,
      backgroundSize: `cover`,
      backgroundPosition: `center`,
      backgroundImage: `url(${avatarUrl})`
    },
    className: "jsx-50543562" + " " + "border-solid border rounded-sm border-gray-300"
  }, __jsx("div", {
    style: {
      backgroundColor: `rgba(0,0,0,0.5)`
    },
    className: "jsx-50543562" + " " + "h-full w-full flex items-center justify-center"
  }, __jsx("div", {
    className: "jsx-50543562" + " " + "relative"
  }, __jsx("svg", {
    width: "32",
    height: "32",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: "jsx-50543562"
  }, __jsx("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M6.93702 5.84538C7.00787 5.74688 7.08656 5.62631 7.18689 5.46372C7.22356 5.40431 7.32355 5.23934 7.39799 5.11653L7.4818 4.97841C8.31079 3.62239 8.91339 3 10 3H15V5H10C9.91327 5 9.6405 5.28172 9.1882 6.02159L9.11542 6.14154L9.11524 6.14183C9.04019 6.26566 8.93096 6.44589 8.88887 6.51409C8.76592 6.71332 8.66375 6.86988 8.56061 7.01326C8.11237 7.63641 7.66434 8 7 8H4C3.44772 8 3 8.44772 3 9V18C3 18.5523 3.44772 19 4 19H20C20.5523 19 21 18.5523 21 18V12H23V18C23 19.6569 21.6569 21 20 21H4C2.34315 21 1 19.6569 1 18V9C1 7.34315 2.34315 6 4 6H6.8162C6.84949 5.96194 6.8903 5.91033 6.93702 5.84538ZM17 8V6H19V4H21V6H23V8H21V10H19V8H17ZM12 18C9.23858 18 7 15.7614 7 13C7 10.2386 9.23858 8 12 8C14.7614 8 17 10.2386 17 13C17 15.7614 14.7614 18 12 18ZM12 16C13.6569 16 15 14.6569 15 13C15 11.3431 13.6569 10 12 10C10.3431 10 9 11.3431 9 13C9 14.6569 10.3431 16 12 16Z",
    fill: "white",
    className: "jsx-50543562"
  })), __jsx("input", {
    type: "file",
    onChange: e => updateAvatarUrl(e.target.files),
    className: "jsx-50543562" + " " + "absolute cursor-pointer inset-0 opacity-0 w-full"
  })))))), __jsx("button", {
    type: "submit",
    className: "jsx-50543562" + " " + "w-full bg-gray-900 text-white border-solid border-2 rounded-lg border-gray-900 px-4 py-1 text-sm"
  }, "Next"))), onboardingState === 'theme' && __jsx("div", {
    className: "jsx-50543562"
  }, __jsx("div", {
    className: "jsx-50543562" + " " + "mb-4"
  }, __jsx("div", {
    onClick: () => setOnboardingState('avatar'),
    className: "jsx-50543562" + " " + "inline-flex items-center cursor-pointer"
  }, __jsx("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 16 16",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: "jsx-50543562" + " " + "mr-4"
  }, __jsx("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M11.707 13.2929L10.2928 14.7071L3.58569 8.00001L10.2928 1.29291L11.707 2.70712L6.41412 8.00001L11.707 13.2929Z",
    fill: "black",
    className: "jsx-50543562"
  })), __jsx("p", {
    className: "jsx-50543562" + " " + "text-lg text-gray-800 font-semibold"
  }, "Back"))), __jsx("p", {
    className: "jsx-50543562" + " " + "mb-2 text-lg text-gray-900 font-semibold"
  }, "Select your theme"), __jsx("form", {
    onSubmit: e => {
      e.preventDefault();
      setOnboardingState('done');
    },
    className: "jsx-50543562"
  }, __jsx("div", {
    className: "jsx-50543562" + " " + "flex flex-no-wrap mb-4 overflow-x-scroll"
  }, themeList.map(theme => {
    return __jsx("div", {
      key: theme.name,
      style: {
        minWidth: `200px`
      },
      className: "jsx-50543562" + " " + "mr-4"
    }, __jsx("div", {
      onClick: () => setTheme(theme),
      className: "jsx-50543562" + " " + "cursor-pointer"
    }, __jsx("label", {
      className: "jsx-50543562"
    }, theme.name), __jsx("div", {
      style: {
        height: `200px`,
        width: `100%`,
        backgroundSize: `cover`,
        backgroundPosition: `center`,
        backgroundImage: `url(${avatarUrl})`
      },
      className: "jsx-50543562" + " " + "relative border-solid border rounded-sm border-gray-300"
    }, isSelectedTheme(theme.name) && __jsx("div", {
      style: {
        backgroundColor: `rgba(0,0,0,0.3)`
      },
      className: "jsx-50543562" + " " + "absolute inset-0 flex items-center justify-center"
    }, __jsx("p", {
      className: "jsx-50543562" + " " + "text-gray-200"
    }, "Selected")))));
  })), __jsx("button", {
    onClick: e => submitOnboarding(e),
    disabled: !theme,
    type: "submit",
    style: {
      opacity: theme ? `100%` : `30%`
    },
    className: "jsx-50543562" + " " + "w-full bg-gray-900 text-white border-solid border-2 rounded-lg border-gray-900 px-4 py-1 text-sm"
  }, submitState === 'pending' && __jsx("div", {
    className: "jsx-50543562" + " " + "inline-flex"
  }, __jsx("p", {
    className: "jsx-50543562" + " " + "text-sm mr-2"
  }, "Saving"), __jsx("div", {
    className: "jsx-50543562" + " " + "lds-ring-container"
  }, __jsx("div", {
    className: "jsx-50543562" + " " + "lds-ring"
  }, __jsx("div", {
    className: "jsx-50543562"
  }), __jsx("div", {
    className: "jsx-50543562"
  }), __jsx("div", {
    className: "jsx-50543562"
  }), __jsx("div", {
    className: "jsx-50543562"
  })))), submitState === 'fulfilled' && __jsx("p", {
    className: "jsx-50543562" + " " + "text-sm"
  }, "Website successfully created"), submitState === '' && __jsx("p", {
    className: "jsx-50543562" + " " + "text-sm"
  }, "Create my website"), submitState === 'rejected' && __jsx("p", {
    className: "jsx-50543562" + " " + "text-sm"
  }, "Failed"))))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Onboarding);

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
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modal */ "./components/modal.js");
/* harmony import */ var _actions_profile__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../actions/profile */ "./actions/profile.js");


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
  toggleProfileSidebar,
  logout
}) => {
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"])();
  const profile = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(state => state.profile);
  const {
    0: showNestedSidebar,
    1: setShowNestedSidebar
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])('');
  const {
    0: showConfirmModal,
    1: setShowConfirmModal
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false);

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
    } // if data is changed, prompt confirmation window
    else {
        setShowConfirmModal(true);
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
  }, ".lds-ring-container.jsx-2392098432{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.lds-ring.jsx-2392098432{margin-left:auto;display:inline-block;width:1.125rem;height:1.125rem;}.lds-ring.jsx-2392098432 div.jsx-2392098432{box-sizing:border-box;display:block;position:absolute;width:1rem;height:1rem;margin:2px;border:2px solid #4299e1;border-radius:50%;-webkit-animation:lds-ring-jsx-2392098432 1.2s cubic-bezier(0.5,0,0.5,1) infinite;animation:lds-ring-jsx-2392098432 1.2s cubic-bezier(0.5,0,0.5,1) infinite;border-color:#4299e1 transparent transparent transparent;}.lds-ring.jsx-2392098432 div.jsx-2392098432:nth-child(1){-webkit-animation-delay:-0.45s;animation-delay:-0.45s;}.lds-ring.jsx-2392098432 div.jsx-2392098432:nth-child(2){-webkit-animation-delay:-0.3s;animation-delay:-0.3s;}.lds-ring.jsx-2392098432 div.jsx-2392098432:nth-child(3){-webkit-animation-delay:-0.15s;animation-delay:-0.15s;}@-webkit-keyframes lds-ring-jsx-2392098432{0%{-webkit-transform:rotate(0deg);-ms-transform:rotate(0deg);transform:rotate(0deg);}100%{-webkit-transform:rotate(360deg);-ms-transform:rotate(360deg);transform:rotate(360deg);}}@keyframes lds-ring-jsx-2392098432{0%{-webkit-transform:rotate(0deg);-ms-transform:rotate(0deg);transform:rotate(0deg);}100%{-webkit-transform:rotate(360deg);-ms-transform:rotate(360deg);transform:rotate(360deg);}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yaXFpL1Byb2plY3RzL3BlcnNvbmEtYXBwL2Rhc2hib2FyZC9jb21wb25lbnRzL3NpZGViYXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBa0hLLEFBR29CLEFBR0ksQUFNSyxBQVlDLEFBR0QsQUFHQyxBQUlDLEFBR0UsaUJBOUJMLEtBTVAsY0FDSSxFQU5ILGNBb0JoQixDQW5CaUIsQ0FNTCxBQVVaLEFBTUEsV0FmYSxJQU5iLEtBTkEsR0FhWSxJQWtCWCxNQUdBLENBcEJ5Qix5QkFDUCxrQkFDNEMsNEpBQ0wseURBQzFEIiwiZmlsZSI6Ii9Vc2Vycy9yaXFpL1Byb2plY3RzL3BlcnNvbmEtYXBwL2Rhc2hib2FyZC9jb21wb25lbnRzL3NpZGViYXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQgc3RyaW5naWZ5IGZyb20gJ2Zhc3QtanNvbi1zdGFibGUtc3RyaW5naWZ5J1xuXG5pbXBvcnQgTW9kYWwgZnJvbSAnLi9tb2RhbCdcblxuaW1wb3J0IHsgc2F2ZVByb2ZpbGVEYXRhIH0gZnJvbSAnLi4vYWN0aW9ucy9wcm9maWxlJ1xuXG5jb25zdCBTaWRlYmFyID0gKHsgXG5cdHN0eWxlLFxuXHRuYW1lLCBzZXROYW1lLCBcblx0ZGVzY3JpcHRpb24sIHNldERlc2NyaXB0aW9uLCBcblx0YXZhdGFyVXJsLCBzZXRBdmF0YXJVcmwsIFxuXHRhdmF0YXJGaWxlLCBzZXRBdmF0YXJGaWxlLCBcblx0YWNjb3VudExpc3QsIHNldEFjY291bnRMaXN0LCBcblx0dGhlbWUsIHNldFRoZW1lLFxuXHR0aGVtZUxpc3QsIHNldFRoZW1lTGlzdCxcblx0c3VibWl0LFxuXHRzdWJtaXRTdGF0ZSxcblx0c2hvd1Byb2ZpbGVTaWRlYmFyLFxuXHR0b2dnbGVQcm9maWxlU2lkZWJhcixcblx0bG9nb3V0XG59KSA9PiB7XG5cdGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKVxuXHRjb25zdCBwcm9maWxlID0gdXNlU2VsZWN0b3Ioc3RhdGUgPT4gc3RhdGUucHJvZmlsZSlcblx0Y29uc3QgW3Nob3dOZXN0ZWRTaWRlYmFyLCBzZXRTaG93TmVzdGVkU2lkZWJhcl0gPSB1c2VTdGF0ZSgnJylcblx0Y29uc3QgW3Nob3dDb25maXJtTW9kYWwsIHNldFNob3dDb25maXJtTW9kYWxdID0gdXNlU3RhdGUoZmFsc2UpXG5cblx0Y29uc3QgcmVhZEZpbGVBc1VybCA9IChmaWxlKSA9PiB7XG5cdFx0Y29uc3QgdGVtcG9yYXJ5RmlsZVJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKClcblx0XG5cdFx0cmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcblx0XHRcdHRlbXBvcmFyeUZpbGVSZWFkZXIub25sb2FkID0gKCkgPT4ge1xuXHRcdFx0XHRyZXNvbHZlKHRlbXBvcmFyeUZpbGVSZWFkZXIucmVzdWx0KVxuXHRcdFx0fVxuXHRcdFx0dGVtcG9yYXJ5RmlsZVJlYWRlci5yZWFkQXNEYXRhVVJMKGZpbGUpXG5cdFx0fSlcblx0fVxuXG5cdGNvbnN0IHVwZGF0ZUF2YXRhclVybCA9IGFzeW5jIChmaWxlcykgPT4ge1xuICAgIGlmKGZpbGVzLmxlbmd0aCA+IDApIHtcbiAgICAgIGNvbnN0IGltZ1VybCA9IGF3YWl0IHJlYWRGaWxlQXNVcmwoZmlsZXNbMF0pXG4gICAgICBzZXRBdmF0YXJVcmwoaW1nVXJsKVxuICAgICAgc2V0QXZhdGFyRmlsZShmaWxlc1swXSlcbiAgICB9XG4gIH1cblxuXHRjb25zdCBiYWNrID0gKCkgPT4ge1xuXHRcdGNvbnN0IG5ld1Byb2ZpbGUgPSB7XG5cdFx0XHRuYW1lOiBuYW1lLFxuXHRcdFx0ZGVzY3JpcHRpb246IGRlc2NyaXB0aW9uLFxuXHRcdFx0YXZhdGFyVXJsOiBhdmF0YXJVcmwsXG5cdFx0XHRhY2NvdW50TGlzdDogYWNjb3VudExpc3QsXG5cdFx0XHR0aGVtZTogdGhlbWVcblx0XHR9XG5cdFx0Ly8gaWYgZGF0YSBpcyBub3QgY2hhbmdlZCwgYWxsb3cgdXNlciB0byBuYXZpZ2F0ZSB0byBtYWluIHNpZGViYXJcblx0XHRpZihzdHJpbmdpZnkocHJvZmlsZSkgPT09IHN0cmluZ2lmeShuZXdQcm9maWxlKSkge1xuXHRcdFx0c2V0U2hvd05lc3RlZFNpZGViYXIoZmFsc2UpXG5cdFx0fVxuXHRcdC8vIGlmIGRhdGEgaXMgY2hhbmdlZCwgcHJvbXB0IGNvbmZpcm1hdGlvbiB3aW5kb3dcblx0XHRlbHNlIHtcblx0XHRcdHNldFNob3dDb25maXJtTW9kYWwodHJ1ZSlcblx0XHR9XG5cdH1cblxuXHRjb25zdCBzZXRVc2VyQWNjb3VudCA9IChzZXJ2aWNlLCBpZGVudGlmaWVyKSA9PiB7XG5cdFx0Y29uc3QgaWR4ID0gYWNjb3VudExpc3QuZmluZEluZGV4KGFjYyA9PiBhY2Muc2VydmljZSA9PT0gc2VydmljZSlcblx0XHQvLyBpZiBpZGVudGlmaWVyIGlzIGFuIGVtcHR5IHN0cmluZyByZW1vdmUgaWR4XG5cdFx0aWYoaWRlbnRpZmllci5sZW5ndGggPT09IDApIHtcblx0XHRcdGNvbnN0IG5ld0FjY291bnRMaXN0ID0gYWNjb3VudExpc3Quc2xpY2UoMClcblx0XHRcdG5ld0FjY291bnRMaXN0LnNwbGljZShpZHgsIDEpXG5cblx0XHRcdHNldEFjY291bnRMaXN0KG5ld0FjY291bnRMaXN0KVxuXHRcdH1cblx0XHRlbHNlIHtcblx0XHRcdC8vIHVwZGF0ZSB0aGUgZGF0YSBpcyBzZXJ2aWNlIGFscmVhZHkgZXhpc3Rcblx0XHRcdGlmKGlkeCA+PSAwKSB7XG5cdFx0XHRcdGNvbnN0IG5ld0FjY291bnRMaXN0ID0gYWNjb3VudExpc3Quc2xpY2UoMClcblx0XHRcdFx0bmV3QWNjb3VudExpc3RbaWR4XS5pZGVudGlmaWVyID0gaWRlbnRpZmllclxuXHRcblx0XHRcdFx0c2V0QWNjb3VudExpc3QobmV3QWNjb3VudExpc3QpXG5cdFx0XHR9XG5cdFx0XHQvLyBjcmVhdGUgdGhlIGRhdGEgaXMgc2VydmljZSBub3QgZXhpc3Rcblx0XHRcdGVsc2Uge1xuXHRcdFx0XHRjb25zdCBuZXdBY2NvdW50TGlzdCA9IGFjY291bnRMaXN0LnNsaWNlKDApXG5cdFx0XHRcdG5ld0FjY291bnRMaXN0LnB1c2goe1xuXHRcdFx0XHRcdHNlcnZpY2U6IHNlcnZpY2UsXG5cdFx0XHRcdFx0aWRlbnRpZmllcjogaWRlbnRpZmllclxuXHRcdFx0XHR9KVxuXHRcblx0XHRcdFx0c2V0QWNjb3VudExpc3QobmV3QWNjb3VudExpc3QpXG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0Y29uc3QgZ2V0QWNjb3VudCA9IChzZXJ2aWNlKSA9PiB7XG5cdFx0Y29uc3QgaWR4ID0gYWNjb3VudExpc3QuZmluZEluZGV4KGFjYyA9PiBhY2Muc2VydmljZSA9PT0gc2VydmljZSlcblx0XHRpZihpZHggPj0gMCkge1xuXHRcdFx0cmV0dXJuIGFjY291bnRMaXN0W2lkeF0uaWRlbnRpZmllclxuXHRcdH1cblx0XHRyZXR1cm4gJydcblx0fVxuXG5cdGNvbnN0IGlzU2VsZWN0ZWRUaGVtZSA9IChuYW1lKSA9PiB7XG5cdFx0aWYodGhlbWUubmFtZSA9PT0gbmFtZSkge1xuXHRcdFx0cmV0dXJuIHRydWVcblx0XHR9XG5cdFx0cmV0dXJuIGZhbHNlXG5cdH1cblxuXHRyZXR1cm4gKFxuXHRcdDxSZWFjdC5GcmFnbWVudD5cblx0XHRcdDxzdHlsZSBqc3g+XG5cdFx0XHRcdHtcblx0XHRcdFx0XHRgXG5cdFx0XHRcdFx0Lmxkcy1yaW5nLWNvbnRhaW5lciB7XG5cdFx0XHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHQubGRzLXJpbmcge1xuXHRcdFx0XHRcdFx0bWFyZ2luLWxlZnQ6IGF1dG87XG5cdFx0XHRcdFx0XHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG5cdFx0XHRcdFx0XHR3aWR0aDogMS4xMjVyZW07XG5cdFx0XHRcdFx0XHRoZWlnaHQ6IDEuMTI1cmVtO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHQubGRzLXJpbmcgZGl2IHtcblx0XHRcdFx0XHRcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG5cdFx0XHRcdFx0XHRkaXNwbGF5OiBibG9jaztcblx0XHRcdFx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0XHRcdFx0XHRcdHdpZHRoOiAxcmVtO1xuXHRcdFx0XHRcdFx0aGVpZ2h0OiAxcmVtO1xuXHRcdFx0XHRcdFx0bWFyZ2luOiAycHg7XG5cdFx0XHRcdFx0XHRib3JkZXI6IDJweCBzb2xpZCAjNDI5OWUxO1xuXHRcdFx0XHRcdFx0Ym9yZGVyLXJhZGl1czogNTAlO1xuXHRcdFx0XHRcdFx0YW5pbWF0aW9uOiBsZHMtcmluZyAxLjJzIGN1YmljLWJlemllcigwLjUsIDAsIDAuNSwgMSkgaW5maW5pdGU7XG5cdFx0XHRcdFx0XHRib3JkZXItY29sb3I6ICM0Mjk5ZTEgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQ7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdC5sZHMtcmluZyBkaXY6bnRoLWNoaWxkKDEpIHtcblx0XHRcdFx0XHRcdGFuaW1hdGlvbi1kZWxheTogLTAuNDVzO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHQubGRzLXJpbmcgZGl2Om50aC1jaGlsZCgyKSB7XG5cdFx0XHRcdFx0XHRhbmltYXRpb24tZGVsYXk6IC0wLjNzO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHQubGRzLXJpbmcgZGl2Om50aC1jaGlsZCgzKSB7XG5cdFx0XHRcdFx0XHRhbmltYXRpb24tZGVsYXk6IC0wLjE1cztcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0QGtleWZyYW1lcyBsZHMtcmluZyB7XG5cdFx0XHRcdFx0XHQwJSB7XG5cdFx0XHRcdFx0XHRcdHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0MTAwJSB7XG5cdFx0XHRcdFx0XHRcdHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVx0XHRcdFx0XHRcblx0XHRcdFx0XHRgXG5cdFx0XHRcdH1cblx0XHRcdDwvc3R5bGU+XG5cdFx0XHR7XG5cdFx0XHRcdHNob3dDb25maXJtTW9kYWwgJiYgKFxuXHRcdFx0XHRcdDxNb2RhbCBjbG9zZU1vZGFsPXsoKSA9PiBzZXRTaG93Q29uZmlybU1vZGFsKGZhbHNlKX0+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm1heC13LXhzIG1kOm1heC13LW1kIHAtNCBwdC0xNiBtLWF1dG8gdy1mdWxsXCI+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiYmctd2hpdGUgcC00IHJvdW5kZWQtbGdcIj5cblx0XHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJ0ZXh0LWxnIHRleHQtZ3JheS05MDAgZm9udC1zZW1pYm9sZCBtYi0yXCI+WW91IEhhdmUgVW5zYXZlZCBDaGFuZ2VzPC9wPlxuXHRcdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cInRleHQtZ3JheS04MDAgbWItNFwiPklmIHlvdSBsZWF2ZSBub3csIHlvdSB3aWxsIGxvc2UgYWxsIHVuc2F2ZWQgY2hhbmdlcy48L3A+XG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktZW5kXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8YnV0dG9uIGNsYXNzTmFtZT1cIm1yLTQgYmctZ3JheS05MDAgdGV4dC13aGl0ZSBib3JkZXItc29saWQgYm9yZGVyLTIgcm91bmRlZC1sZyBib3JkZXItZ3JheS05MDAgcHgtNCBweS0xIHRleHQtc21cIiBvbkNsaWNrPXsoKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHNldFNob3dDb25maXJtTW9kYWwoZmFsc2UpXG5cdFx0XHRcdFx0XHRcdFx0XHR9fT5DYW5jZWw8L2J1dHRvbj5cblx0XHRcdFx0XHRcdFx0XHRcdDxidXR0b24gY2xhc3NOYW1lPVwiYm9yZGVyLXNvbGlkIGJvcmRlci0yIHJvdW5kZWQtbGcgYm9yZGVyLWdyYXktOTAwIHB4LTQgcHktMSB0ZXh0LXNtXCIgb25DbGljaz17KCkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRkaXNwYXRjaChzYXZlUHJvZmlsZURhdGEocHJvZmlsZSkpXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHNldFNob3dOZXN0ZWRTaWRlYmFyKGZhbHNlKVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRzZXRTaG93Q29uZmlybU1vZGFsKGZhbHNlKVxuXHRcdFx0XHRcdFx0XHRcdFx0fX0+RGlzY2FyZDwvYnV0dG9uPlxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDwvTW9kYWw+XG5cdFx0XHRcdClcblx0XHRcdH1cblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZml4ZWQgdG9wLTAgcmlnaHQtMCBib3R0b20tMCB3LTEwLzEyIG1kOnctNC8xMiBsZzp3LTMvMTIgYmctd2hpdGUgc2hhZG93LXhsXCIgc3R5bGU9e3tcblx0XHRcdFx0dHJhbnNmb3JtOiBgdHJhbnNsYXRlM2QoJHtzaG93UHJvZmlsZVNpZGViYXIgPyAwIDogYDEwMCVgfSwgMCwgMClgLFxuXHRcdFx0XHR0cmFuc2l0aW9uOiBgYWxsIC4zc2Bcblx0XHRcdH19PlxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0c2hvd1Byb2ZpbGVTaWRlYmFyICYmIChcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgei0xMCBiZy1ibGFjayByb3VuZGVkLWZ1bGwgcC0yIGN1cnNvci1wb2ludGVyXCIgb25DbGljaz17KCkgPT4gdG9nZ2xlUHJvZmlsZVNpZGViYXIoKX0gc3R5bGU9e3tcblx0XHRcdFx0XHRcdFx0d2lkdGg6IGAzMnB4YCxcblx0XHRcdFx0XHRcdFx0aGVpZ2h0OiBgMzJweGAsXG5cdFx0XHRcdFx0XHRcdGxlZnQ6IGAtMTZweGAsXG5cdFx0XHRcdFx0XHRcdHRvcDogYDE2cHhgXG5cdFx0XHRcdFx0XHR9fSA+XG5cdFx0XHRcdFx0XHRcdDxzdmcgd2lkdGg9XCIxMDAlXCIgaGVpZ2h0PVwiMTAwJVwiIHZpZXdCb3g9XCIwIDAgMzIgMzJcIiBmaWxsPVwibm9uZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cblx0XHRcdFx0XHRcdFx0XHQ8cGF0aCBmaWxsUnVsZT1cImV2ZW5vZGRcIiBjbGlwUnVsZT1cImV2ZW5vZGRcIiBkPVwiTTE2LjAwMDIgMTguODI4NUw3LjQxNDM2IDI3LjQxNDJMNC41ODU5NCAyNC41ODU4TDEzLjE3MTcgMTZMNC41ODU5NCA3LjQxNDI0TDcuNDE0MzYgNC41ODU4MkwxNi4wMDAyIDEzLjE3MTZMMjQuNTg1OSA0LjU4NTgyTDI3LjQxNDQgNy40MTQyNEwxOC44Mjg2IDE2TDI3LjQxNDQgMjQuNTg1OEwyNC41ODU5IDI3LjQxNDJMMTYuMDAwMiAxOC44Mjg1VjE4LjgyODVaXCIgZmlsbD1cIndoaXRlXCIvPlxuXHRcdFx0XHRcdFx0XHQ8L3N2Zz5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdClcblx0XHRcdFx0fVxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIGgtZnVsbCB3LWZ1bGwgb3ZlcmZsb3cteC1oaWRkZW5cIj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIHRvcC0wIHJpZ2h0LTAgYm90dG9tLTAgdy1mdWxsIGJnLXdoaXRlIHB5LTEyIG1kOnB5LTE2IHB4LTRcIiBzdHlsZT17e1xuXHRcdFx0XHRcdFx0dHJhbnNmb3JtOiBgdHJhbnNsYXRlM2QoJHshc2hvd05lc3RlZFNpZGViYXIgPyAwIDogYC0xMDAlYH0sIDAsIDApYCxcblx0XHRcdFx0XHRcdHRyYW5zaXRpb246IGBhbGwgLjNzYFxuXHRcdFx0XHRcdH19PlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBweS0yXCI+XG5cdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cInRleHQtMnhsIHRleHQtZ3JheS05MDAgZm9udC1zZW1pYm9sZFwiPkVkaXQgWW91ciBTaXRlPC9wPlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInB5LTIgbWF4LWgtZnVsbCBvdmVyZmxvdy15LXNjcm9sbFwiPlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IG9uQ2xpY2s9eygpID0+IHNldFNob3dOZXN0ZWRTaWRlYmFyKCdwcm9maWxlJyl9IGNsYXNzTmFtZT1cImN1cnNvci1wb2ludGVyIGgtMTIgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIGJvcmRlci1zb2xpZCBib3JkZXItYiBib3JkZXItZ3JheS0zMDBcIj5cblx0XHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJ0ZXh0LWxnIHRleHQtZ3JheS04MDAgdy0xLzIgZm9udC1tZWRpdW1cIj5Qcm9maWxlIDwvcD5cblx0XHRcdFx0XHRcdFx0XHQ8c3ZnIHdpZHRoPVwiMTZcIiBoZWlnaHQ9XCIxNlwiIHZpZXdCb3g9XCIwIDAgMTYgMTZcIiBmaWxsPVwibm9uZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cblx0XHRcdFx0XHRcdFx0XHRcdDxwYXRoIGZpbGw9XCIjYTBhZWMwXCIgZmlsbFJ1bGU9XCJldmVub2RkXCIgY2xpcFJ1bGU9XCJldmVub2RkXCIgZD1cIk05LjU4NTg2IDguMDAwMDFMNC4yOTI5NyAyLjcwNzEyTDUuNzA3MTggMS4yOTI5MUwxMi40MTQzIDguMDAwMDFMNS43MDcxOCAxNC43MDcxTDQuMjkyOTcgMTMuMjkyOUw5LjU4NTg2IDguMDAwMDFaXCIvPlxuXHRcdFx0XHRcdFx0XHRcdDwvc3ZnPlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0PGRpdiBvbkNsaWNrPXsoKSA9PiBzZXRTaG93TmVzdGVkU2lkZWJhcignc29jaWFsJyl9ICBjbGFzc05hbWU9XCJjdXJzb3ItcG9pbnRlciBoLTEyIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBib3JkZXItc29saWQgYm9yZGVyLWIgYm9yZGVyLWdyYXktMzAwXCI+XG5cdFx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwidGV4dC1sZyB0ZXh0LWdyYXktODAwIHctMS8yIGZvbnQtbWVkaXVtXCI+U29jaWFsPC9wPlxuXHRcdFx0XHRcdFx0XHRcdDxzdmcgd2lkdGg9XCIxNlwiIGhlaWdodD1cIjE2XCIgdmlld0JveD1cIjAgMCAxNiAxNlwiIGZpbGw9XCJub25lXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxuXHRcdFx0XHRcdFx0XHRcdFx0PHBhdGggZmlsbD1cIiNhMGFlYzBcIiBmaWxsUnVsZT1cImV2ZW5vZGRcIiBjbGlwUnVsZT1cImV2ZW5vZGRcIiBkPVwiTTkuNTg1ODYgOC4wMDAwMUw0LjI5Mjk3IDIuNzA3MTJMNS43MDcxOCAxLjI5MjkxTDEyLjQxNDMgOC4wMDAwMUw1LjcwNzE4IDE0LjcwNzFMNC4yOTI5NyAxMy4yOTI5TDkuNTg1ODYgOC4wMDAwMVpcIi8+XG5cdFx0XHRcdFx0XHRcdFx0PC9zdmc+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IG9uQ2xpY2s9eygpID0+IHNldFNob3dOZXN0ZWRTaWRlYmFyKCd0aGVtZScpfSAgY2xhc3NOYW1lPVwiY3Vyc29yLXBvaW50ZXIgaC0xMiBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gYm9yZGVyLXNvbGlkIGJvcmRlci1iIGJvcmRlci1ncmF5LTMwMFwiPlxuXHRcdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cInRleHQtbGcgdGV4dC1ncmF5LTgwMCB3LTEvMiBmb250LW1lZGl1bVwiPlRoZW1lPC9wPlxuXHRcdFx0XHRcdFx0XHRcdDxzdmcgd2lkdGg9XCIxNlwiIGhlaWdodD1cIjE2XCIgdmlld0JveD1cIjAgMCAxNiAxNlwiIGZpbGw9XCJub25lXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxuXHRcdFx0XHRcdFx0XHRcdFx0PHBhdGggZmlsbD1cIiNhMGFlYzBcIiBmaWxsUnVsZT1cImV2ZW5vZGRcIiBjbGlwUnVsZT1cImV2ZW5vZGRcIiBkPVwiTTkuNTg1ODYgOC4wMDAwMUw0LjI5Mjk3IDIuNzA3MTJMNS43MDcxOCAxLjI5MjkxTDEyLjQxNDMgOC4wMDAwMUw1LjcwNzE4IDE0LjcwNzFMNC4yOTI5NyAxMy4yOTI5TDkuNTg1ODYgOC4wMDAwMVpcIi8+XG5cdFx0XHRcdFx0XHRcdFx0PC9zdmc+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IG9uQ2xpY2s9eygpID0+IGxvZ291dCgpfSBjbGFzc05hbWU9XCJjdXJzb3ItcG9pbnRlciBoLTEyIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBib3JkZXItc29saWQgYm9yZGVyLWIgYm9yZGVyLWdyYXktMzAwXCI+XG5cdFx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwidGV4dC1sZyB0ZXh0LWJsdWUtNTAwIHctMS8yIGZvbnQtbWVkaXVtXCI+TG9nIG91dDwvcD5cblx0XHRcdFx0XHRcdFx0XHQ8c3ZnIHdpZHRoPVwiMTZcIiBoZWlnaHQ9XCIxNlwiIHZpZXdCb3g9XCIwIDAgMTYgMTZcIiBmaWxsPVwibm9uZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cblx0XHRcdFx0XHRcdFx0XHRcdDxwYXRoIGZpbGw9XCIjYTBhZWMwXCIgZmlsbFJ1bGU9XCJldmVub2RkXCIgY2xpcFJ1bGU9XCJldmVub2RkXCIgZD1cIk05LjU4NTg2IDguMDAwMDFMNC4yOTI5NyAyLjcwNzEyTDUuNzA3MTggMS4yOTI5MUwxMi40MTQzIDguMDAwMDFMNS43MDcxOCAxNC43MDcxTDQuMjkyOTcgMTMuMjkyOUw5LjU4NTg2IDguMDAwMDFaXCIvPlxuXHRcdFx0XHRcdFx0XHRcdDwvc3ZnPlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgdG9wLTAgcmlnaHQtMCBib3R0b20tMCB3LWZ1bGwgYmctd2hpdGUgcHktMTIgbWQ6cHktMTYgcHgtNFwiIHN0eWxlPXt7XG5cdFx0XHRcdFx0XHR0cmFuc2Zvcm06IGB0cmFuc2xhdGUzZCgke3Nob3dOZXN0ZWRTaWRlYmFyID8gMCA6IGAxMDAlYH0sIDAsIDApYCxcblx0XHRcdFx0XHRcdHRyYW5zaXRpb246IGBhbGwgLjNzYFxuXHRcdFx0XHRcdH19PlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBtYXgtaC1mdWxsIG92ZXJmbG93LXktc2Nyb2xsIGJvcmRlci1zb2xpZCBib3JkZXItYiBib3JkZXItZ3JheS0zMDAgcHktMlwiPlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInctMS8zXCI+XG5cdFx0XHRcdFx0XHRcdFx0PHN2ZyBjbGFzc05hbWU9XCJjdXJzb3ItcG9pbnRlclwiIG9uQ2xpY2s9eygpID0+IGJhY2soKX0gd2lkdGg9XCIxNlwiIGhlaWdodD1cIjE2XCIgdmlld0JveD1cIjAgMCAxNiAxNlwiIGZpbGw9XCJub25lXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxuXHRcdFx0XHRcdFx0XHRcdFx0PHBhdGggZmlsbFJ1bGU9XCJldmVub2RkXCIgY2xpcFJ1bGU9XCJldmVub2RkXCIgZD1cIk0xMS43MDcgMTMuMjkyOUwxMC4yOTI4IDE0LjcwNzFMMy41ODU2OSA4LjAwMDAxTDEwLjI5MjggMS4yOTI5MUwxMS43MDcgMi43MDcxMkw2LjQxNDEyIDguMDAwMDFMMTEuNzA3IDEzLjI5MjlaXCIgZmlsbD1cImJsYWNrXCIvPlxuXHRcdFx0XHRcdFx0XHRcdDwvc3ZnPlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ3LTEvMyB0ZXh0LWNlbnRlclwiID5cblx0XHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJ0ZXh0LWxnIHRleHQtZ3JheS04MDAgZm9udC1zZW1pYm9sZCBjYXBpdGFsaXplXCI+e3Nob3dOZXN0ZWRTaWRlYmFyfTwvcD5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwidy0xLzMgdGV4dC1yaWdodFwiPlxuXHRcdFx0XHRcdFx0XHRcdHsgc3VibWl0U3RhdGUgPT09ICdwZW5kaW5nJyAmJiAoXG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImxkcy1yaW5nLWNvbnRhaW5lclwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImxkcy1yaW5nXCI+PGRpdj48L2Rpdj48ZGl2PjwvZGl2PjxkaXY+PC9kaXY+PGRpdj48L2Rpdj48L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdCl9XG5cdFx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdFx0c3VibWl0U3RhdGUgPT09ICdmdWxmaWxsZWQnICYmIChcblx0XHRcdFx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwidGV4dC1sZyB0ZXh0LWJsdWUtNTAwIGZvbnQtbWVkaXVtIGNhcGl0YWxpemVcIj5TYXZlZDwvcD5cblx0XHRcdFx0XHRcdFx0XHRcdClcblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdFx0c3VibWl0U3RhdGUgPT09ICcnICYmIChcblx0XHRcdFx0XHRcdFx0XHRcdFx0PHAgb25DbGljaz17KGUpID0+IHN1Ym1pdChlKX0gY2xhc3NOYW1lPVwiaW5saW5lLWJsb2NrIGN1cnNvci1wb2ludGVyIHRleHQtbGcgdGV4dC1ibHVlLTUwMCBmb250LW1lZGl1bSBjYXBpdGFsaXplXCI+U2F2ZTwvcD5cblx0XHRcdFx0XHRcdFx0XHRcdClcblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdFx0c3VibWl0U3RhdGUgPT09ICdyZWplY3RlZCcgJiYgKFxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJ0ZXh0LWxnIHRleHQtcmVkLTUwMCBmb250LW1lZGl1bSBjYXBpdGFsaXplXCI+RmFpbGVkPC9wPlxuXHRcdFx0XHRcdFx0XHRcdFx0KVxuXHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0c2hvd05lc3RlZFNpZGViYXIgPT09ICdwcm9maWxlJyAmJiAoXG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJweS0yIG1heC1oLWZ1bGwgb3ZlcmZsb3cteS1zY3JvbGxcIj5cblx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibWItNFwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGxhYmVsPkF2YXRhcjwvbGFiZWw+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJib3JkZXItc29saWQgYm9yZGVyIHJvdW5kZWQtc20gYm9yZGVyLWdyYXktMzAwXCIgc3R5bGU9e3tcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGhlaWdodDogYDIwMHB4YCxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHdpZHRoOiBgMTAwJWAsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRiYWNrZ3JvdW5kU2l6ZTogYGNvdmVyYCxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGJhY2tncm91bmRQb3NpdGlvbjogYGNlbnRlcmAsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoJHthdmF0YXJVcmx9KWBcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9fT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiaC1mdWxsIHctZnVsbCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlclwiIHN0eWxlPXt7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGJhY2tncm91bmRDb2xvcjogYHJnYmEoMCwwLDAsMC41KWBcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH19PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxzdmcgd2lkdGg9XCIzMlwiIGhlaWdodD1cIjMyXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIGZpbGw9XCJub25lXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxwYXRoIGZpbGxSdWxlPVwiZXZlbm9kZFwiIGNsaXBSdWxlPVwiZXZlbm9kZFwiIGQ9XCJNNi45MzcwMiA1Ljg0NTM4QzcuMDA3ODcgNS43NDY4OCA3LjA4NjU2IDUuNjI2MzEgNy4xODY4OSA1LjQ2MzcyQzcuMjIzNTYgNS40MDQzMSA3LjMyMzU1IDUuMjM5MzQgNy4zOTc5OSA1LjExNjUzTDcuNDgxOCA0Ljk3ODQxQzguMzEwNzkgMy42MjIzOSA4LjkxMzM5IDMgMTAgM0gxNVY1SDEwQzkuOTEzMjcgNSA5LjY0MDUgNS4yODE3MiA5LjE4ODIgNi4wMjE1OUw5LjExNTQyIDYuMTQxNTRMOS4xMTUyNCA2LjE0MTgzQzkuMDQwMTkgNi4yNjU2NiA4LjkzMDk2IDYuNDQ1ODkgOC44ODg4NyA2LjUxNDA5QzguNzY1OTIgNi43MTMzMiA4LjY2Mzc1IDYuODY5ODggOC41NjA2MSA3LjAxMzI2QzguMTEyMzcgNy42MzY0MSA3LjY2NDM0IDggNyA4SDRDMy40NDc3MiA4IDMgOC40NDc3MiAzIDlWMThDMyAxOC41NTIzIDMuNDQ3NzIgMTkgNCAxOUgyMEMyMC41NTIzIDE5IDIxIDE4LjU1MjMgMjEgMThWMTJIMjNWMThDMjMgMTkuNjU2OSAyMS42NTY5IDIxIDIwIDIxSDRDMi4zNDMxNSAyMSAxIDE5LjY1NjkgMSAxOFY5QzEgNy4zNDMxNSAyLjM0MzE1IDYgNCA2SDYuODE2MkM2Ljg0OTQ5IDUuOTYxOTQgNi44OTAzIDUuOTEwMzMgNi45MzcwMiA1Ljg0NTM4Wk0xNyA4VjZIMTlWNEgyMVY2SDIzVjhIMjFWMTBIMTlWOEgxN1pNMTIgMThDOS4yMzg1OCAxOCA3IDE1Ljc2MTQgNyAxM0M3IDEwLjIzODYgOS4yMzg1OCA4IDEyIDhDMTQuNzYxNCA4IDE3IDEwLjIzODYgMTcgMTNDMTcgMTUuNzYxNCAxNC43NjE0IDE4IDEyIDE4Wk0xMiAxNkMxMy42NTY5IDE2IDE1IDE0LjY1NjkgMTUgMTNDMTUgMTEuMzQzMSAxMy42NTY5IDEwIDEyIDEwQzEwLjM0MzEgMTAgOSAxMS4zNDMxIDkgMTNDOSAxNC42NTY5IDEwLjM0MzEgMTYgMTIgMTZaXCIgZmlsbD1cIndoaXRlXCIvPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3N2Zz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8aW5wdXQgY2xhc3NOYW1lPVwiYWJzb2x1dGUgY3Vyc29yLXBvaW50ZXIgaW5zZXQtMCBvcGFjaXR5LTAgdy1mdWxsXCIgdHlwZT1cImZpbGVcIiBvbkNoYW5nZT17KGUpID0+IHVwZGF0ZUF2YXRhclVybChlLnRhcmdldC5maWxlcyl9IC8+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm1iLTRcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJweC0zIHB5LTEgZmxleCBmbGV4LWNvbCBib3JkZXItc29saWQgYm9yZGVyIHJvdW5kZWQtc20gYm9yZGVyLWdyYXktMzAwXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGxhYmVsIGNsYXNzTmFtZT1cInRleHQteHMgZm9udC1saWdodCB0ZXh0LWdyYXktNjAwXCI+TmFtZTwvbGFiZWw+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGlucHV0IHBsYWNlaG9sZGVyPVwiWW91ciBuYW1lXCIgY2xhc3NOYW1lPVwiZm9jdXM6b3V0bGluZS1ub25lXCIgdHlwZT1cInRleHRcIiB2YWx1ZT17bmFtZX0gb25DaGFuZ2U9eyhlKSA9PiBzZXROYW1lKGUudGFyZ2V0LnZhbHVlKX0gLz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibWItNFwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInB4LTMgcHktMSBmbGV4IGZsZXgtY29sIGJvcmRlci1zb2xpZCBib3JkZXIgcm91bmRlZC1zbSBib3JkZXItZ3JheS0zMDBcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8bGFiZWwgY2xhc3NOYW1lPVwidGV4dC14cyBmb250LWxpZ2h0IHRleHQtZ3JheS02MDBcIj5EZXNjcmlwdGlvbjwvbGFiZWw+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHRleHRhcmVhIHBsYWNlaG9sZGVyPVwiVGVsbCB0aGUgd29ybGQgYWJvdXQgeW91cnNlbGZcIiByb3dzPXs4fSBjbGFzc05hbWU9XCJmb2N1czpvdXRsaW5lLW5vbmUgcmVzaXplLW5vbmVcIiB2YWx1ZT17ZGVzY3JpcHRpb259IG9uQ2hhbmdlPXsoZSkgPT4gc2V0RGVzY3JpcHRpb24oZS50YXJnZXQudmFsdWUpfSAvPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQpXG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdHNob3dOZXN0ZWRTaWRlYmFyID09PSAnc29jaWFsJyAmJiAoXG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJweS0yIG1heC1oLWZ1bGwgb3ZlcmZsb3cteS1zY3JvbGxcIj5cblx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibWItNFwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInB4LTMgcHktMSBmbGV4IGZsZXgtY29sIGJvcmRlci1zb2xpZCBib3JkZXIgcm91bmRlZC1zbSBib3JkZXItZ3JheS0zMDBcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8bGFiZWwgY2xhc3NOYW1lPVwidGV4dC14cyBmb250LWxpZ2h0IHRleHQtZ3JheS02MDBcIj5mYWNlYm9vay5jb20vPC9sYWJlbD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8aW5wdXQgcGxhY2Vob2xkZXI9XCJ1c2VybmFtZVwiIGNsYXNzTmFtZT1cImZvY3VzOm91dGxpbmUtbm9uZVwiIHR5cGU9XCJ0ZXh0XCIgdmFsdWU9e2dldEFjY291bnQoJ2ZhY2Vib29rJyl9IG9uQ2hhbmdlPXsoZSkgPT4gc2V0VXNlckFjY291bnQoJ2ZhY2Vib29rJywgZS50YXJnZXQudmFsdWUpfSAvPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJtYi00XCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicHgtMyBweS0xIGZsZXggZmxleC1jb2wgYm9yZGVyLXNvbGlkIGJvcmRlciByb3VuZGVkLXNtIGJvcmRlci1ncmF5LTMwMFwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxsYWJlbCBjbGFzc05hbWU9XCJ0ZXh0LXhzIGZvbnQtbGlnaHQgdGV4dC1ncmF5LTYwMFwiPnR3aXR0ZXIuY29tLzwvbGFiZWw+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGlucHV0IHBsYWNlaG9sZGVyPVwidXNlcm5hbWVcIiBjbGFzc05hbWU9XCJmb2N1czpvdXRsaW5lLW5vbmVcIiB0eXBlPVwidGV4dFwiIHZhbHVlPXtnZXRBY2NvdW50KCd0d2l0dGVyJyl9IG9uQ2hhbmdlPXsoZSkgPT4gc2V0VXNlckFjY291bnQoJ3R3aXR0ZXInLCBlLnRhcmdldC52YWx1ZSl9IC8+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm1iLTRcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJweC0zIHB5LTEgZmxleCBmbGV4LWNvbCBib3JkZXItc29saWQgYm9yZGVyIHJvdW5kZWQtc20gYm9yZGVyLWdyYXktMzAwXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGxhYmVsIGNsYXNzTmFtZT1cInRleHQteHMgZm9udC1saWdodCB0ZXh0LWdyYXktNjAwXCI+aW5zdGFncmFtLmNvbS88L2xhYmVsPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxpbnB1dCBwbGFjZWhvbGRlcj1cInVzZXJuYW1lXCIgY2xhc3NOYW1lPVwiZm9jdXM6b3V0bGluZS1ub25lXCIgdHlwZT1cInRleHRcIiB2YWx1ZT17Z2V0QWNjb3VudCgnaW5zdGFncmFtJyl9IG9uQ2hhbmdlPXsoZSkgPT4gc2V0VXNlckFjY291bnQoJ2luc3RhZ3JhbScsIGUudGFyZ2V0LnZhbHVlKX0gLz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0KVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRzaG93TmVzdGVkU2lkZWJhciA9PT0gJ3RoZW1lJyAmJiAoXG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJvdmVyZmxvdy15LXNjcm9sbCBtYXgtaC1mdWxsIHB5LTIgbWF4LWgtZnVsbCBvdmVyZmxvdy15LXNjcm9sbFwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdFx0XHR0aGVtZUxpc3QubWFwKHRoZW1lID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJtYi00XCIga2V5PXt0aGVtZS5uYW1lfT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ey8qIG9uY2xpY2sgY2hhbmdlIHRoZW1lICovfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IG9uQ2xpY2s9eygpID0+IHNldFRoZW1lKHRoZW1lKX0+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGxhYmVsPnt0aGVtZS5uYW1lfTwvbGFiZWw+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBib3JkZXItc29saWQgYm9yZGVyIHJvdW5kZWQtc20gYm9yZGVyLWdyYXktMzAwXCIgc3R5bGU9e3tcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGhlaWdodDogYDIwMHB4YCxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHdpZHRoOiBgMTAwJWAsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRiYWNrZ3JvdW5kU2l6ZTogYGNvdmVyYCxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGJhY2tncm91bmRQb3NpdGlvbjogYGNlbnRlcmAsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoJHthdmF0YXJVcmx9KWBcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9fT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHsgaXNTZWxlY3RlZFRoZW1lKHRoZW1lLm5hbWUpICYmIChcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSBpbnNldC0wIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyXCIgc3R5bGU9e3tcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRiYWNrZ3JvdW5kQ29sb3I6IGByZ2JhKDAsMCwwLDAuMylgLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9fT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktMjAwXCI+U2VsZWN0ZWQ8L3A+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0KX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQpXG5cdFx0XHRcdFx0XHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdClcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L1JlYWN0LkZyYWdtZW50PlxuXHQpXG59XG5cbmV4cG9ydCBkZWZhdWx0IFNpZGViYXJcblx0XHRcdCJdfQ== */\n/*@ sourceURL=/Users/riqi/Projects/persona-app/dashboard/components/sidebar.js */"), showConfirmModal && __jsx(_modal__WEBPACK_IMPORTED_MODULE_5__["default"], {
    closeModal: () => setShowConfirmModal(false)
  }, __jsx("div", {
    className: "jsx-2392098432" + " " + "max-w-xs md:max-w-md p-4 pt-16 m-auto w-full"
  }, __jsx("div", {
    className: "jsx-2392098432" + " " + "bg-white p-4 rounded-lg"
  }, __jsx("p", {
    className: "jsx-2392098432" + " " + "text-lg text-gray-900 font-semibold mb-2"
  }, "You Have Unsaved Changes"), __jsx("p", {
    className: "jsx-2392098432" + " " + "text-gray-800 mb-4"
  }, "If you leave now, you will lose all unsaved changes."), __jsx("div", {
    className: "jsx-2392098432" + " " + "flex justify-end"
  }, __jsx("button", {
    onClick: () => {
      setShowConfirmModal(false);
    },
    className: "jsx-2392098432" + " " + "mr-4 bg-gray-900 text-white border-solid border-2 rounded-lg border-gray-900 px-4 py-1 text-sm"
  }, "Cancel"), __jsx("button", {
    onClick: () => {
      dispatch(Object(_actions_profile__WEBPACK_IMPORTED_MODULE_6__["saveProfileData"])(profile));
      setShowNestedSidebar(false);
      setShowConfirmModal(false);
    },
    className: "jsx-2392098432" + " " + "border-solid border-2 rounded-lg border-gray-900 px-4 py-1 text-sm"
  }, "Discard"))))), __jsx("div", {
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
    className: "jsx-2392098432" + " " + "absolute z-10 bg-black rounded-full p-2 cursor-pointer"
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
  }))), __jsx("div", {
    onClick: () => logout(),
    className: "jsx-2392098432" + " " + "cursor-pointer h-12 flex items-center justify-between border-solid border-b border-gray-300"
  }, __jsx("p", {
    className: "jsx-2392098432" + " " + "text-lg text-blue-500 w-1/2 font-medium"
  }, "Log out"), __jsx("svg", {
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
    className: "jsx-2392098432" + " " + "w-1/3"
  }, __jsx("svg", {
    onClick: () => back(),
    width: "16",
    height: "16",
    viewBox: "0 0 16 16",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: "jsx-2392098432" + " " + "cursor-pointer"
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
    onClick: e => submit(e),
    className: "jsx-2392098432" + " " + "inline-block cursor-pointer text-lg text-blue-500 font-medium capitalize"
  }, "Save"), submitState === 'rejected' && __jsx("p", {
    className: "jsx-2392098432" + " " + "text-lg text-red-500 font-medium capitalize"
  }, "Failed"))), showNestedSidebar === 'profile' && __jsx("div", {
    className: "jsx-2392098432" + " " + "py-2 max-h-full overflow-y-scroll"
  }, __jsx("div", {
    className: "jsx-2392098432" + " " + "mb-4"
  }, __jsx("div", {
    className: "jsx-2392098432" + " " + "relative"
  }, __jsx("label", {
    className: "jsx-2392098432"
  }, "Avatar"), __jsx("div", {
    style: {
      height: `200px`,
      width: `100%`,
      backgroundSize: `cover`,
      backgroundPosition: `center`,
      backgroundImage: `url(${avatarUrl})`
    },
    className: "jsx-2392098432" + " " + "border-solid border rounded-sm border-gray-300"
  }, __jsx("div", {
    style: {
      backgroundColor: `rgba(0,0,0,0.5)`
    },
    className: "jsx-2392098432" + " " + "h-full w-full flex items-center justify-center"
  }, __jsx("div", {
    className: "jsx-2392098432" + " " + "relative"
  }, __jsx("svg", {
    width: "32",
    height: "32",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: "jsx-2392098432"
  }, __jsx("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M6.93702 5.84538C7.00787 5.74688 7.08656 5.62631 7.18689 5.46372C7.22356 5.40431 7.32355 5.23934 7.39799 5.11653L7.4818 4.97841C8.31079 3.62239 8.91339 3 10 3H15V5H10C9.91327 5 9.6405 5.28172 9.1882 6.02159L9.11542 6.14154L9.11524 6.14183C9.04019 6.26566 8.93096 6.44589 8.88887 6.51409C8.76592 6.71332 8.66375 6.86988 8.56061 7.01326C8.11237 7.63641 7.66434 8 7 8H4C3.44772 8 3 8.44772 3 9V18C3 18.5523 3.44772 19 4 19H20C20.5523 19 21 18.5523 21 18V12H23V18C23 19.6569 21.6569 21 20 21H4C2.34315 21 1 19.6569 1 18V9C1 7.34315 2.34315 6 4 6H6.8162C6.84949 5.96194 6.8903 5.91033 6.93702 5.84538ZM17 8V6H19V4H21V6H23V8H21V10H19V8H17ZM12 18C9.23858 18 7 15.7614 7 13C7 10.2386 9.23858 8 12 8C14.7614 8 17 10.2386 17 13C17 15.7614 14.7614 18 12 18ZM12 16C13.6569 16 15 14.6569 15 13C15 11.3431 13.6569 10 12 10C10.3431 10 9 11.3431 9 13C9 14.6569 10.3431 16 12 16Z",
    fill: "white",
    className: "jsx-2392098432"
  })), __jsx("input", {
    type: "file",
    onChange: e => updateAvatarUrl(e.target.files),
    className: "jsx-2392098432" + " " + "absolute cursor-pointer inset-0 opacity-0 w-full"
  })))))), __jsx("div", {
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
/* harmony import */ var _components_loggedIn__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/loggedIn */ "./components/loggedIn.js");
/* harmony import */ var _components_onboarding__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../components/onboarding */ "./components/onboarding.js");
/* harmony import */ var _actions_auth__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../actions/auth */ "./actions/auth.js");
/* harmony import */ var _actions_profile__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../actions/profile */ "./actions/profile.js");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../api */ "./api/index.js");
/* harmony import */ var anchorme__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! anchorme */ "anchorme");
/* harmony import */ var anchorme__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(anchorme__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var handlebars__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! handlebars */ "handlebars");
/* harmony import */ var handlebars__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(handlebars__WEBPACK_IMPORTED_MODULE_20__);




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
    0: identifier,
    1: setIdentifier
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
  } = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(false);
  const {
    0: showOnboarding,
    1: setShowOnboarding
  } = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(true);

  const logout = async () => {
    await _api__WEBPACK_IMPORTED_MODULE_18__["blockstackAPI"].session.signUserOut();
    dispatch(Object(_actions_auth__WEBPACK_IMPORTED_MODULE_16__["saveAuthData"])(null));
  };

  const submit = async (e, onboarding) => {
    e.preventDefault();
    setSubmitState('pending');

    try {
      if (onboarding) {
        const newData = {
          name: name,
          blockstackId: authData.profile.username
        };
        const newId = new _api__WEBPACK_IMPORTED_MODULE_18__["IdentifierAPI"](newData);
        await newId.save();
      }

      const newProfile = {
        name: name,
        description: description,
        avatarUrl: avatarUrl,
        accountList: accountList,
        theme: theme
      };

      if (avatarFile) {
        const buff = await readFileAsBuffer(avatarFile);
        const newAvatarUrl = await _api__WEBPACK_IMPORTED_MODULE_18__["blockstackAPI"].session.putFile('avatar.png', buff, {
          encrypt: false
        });
        newProfile.avatarUrl = newAvatarUrl;
      }

      await _api__WEBPACK_IMPORTED_MODULE_18__["blockstackAPI"].session.putFile('profile.json', _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_2___default()(newProfile), {
        encrypt: false
      });
      dispatch(Object(_actions_profile__WEBPACK_IMPORTED_MODULE_17__["saveProfileData"])(newProfile));
      setSubmitState('fulfilled');
    } catch (err) {
      console.log(err);
      setSubmitState('rejected');
    }

    setTimeout(() => {
      setSubmitState('');
    }, 1000);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(() => {
    const checkAuthData = async () => {
      if (_api__WEBPACK_IMPORTED_MODULE_18__["blockstackAPI"].session.isUserSignedIn()) {
        if (!authData) {
          const getAuthData = await _api__WEBPACK_IMPORTED_MODULE_18__["blockstackAPI"].session.loadUserData();
          dispatch(Object(_actions_auth__WEBPACK_IMPORTED_MODULE_16__["saveAuthData"])(getAuthData));
        }

        if (_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1___default()(profile).length === 0) {
          const idExist = await _api__WEBPACK_IMPORTED_MODULE_18__["IdentifierAPI"].fetchList({
            name: identifier
          });

          if (idExist.length > 0) {
            const getProfile = await _api__WEBPACK_IMPORTED_MODULE_18__["blockstackAPI"].session.getFile('profile.json', {
              decrypt: false
            });

            if (getProfile) {
              setShowOnboarding(false);
              const parsedProfile = JSON.parse(getProfile);
              dispatch(Object(_actions_profile__WEBPACK_IMPORTED_MODULE_17__["saveProfileData"])(parsedProfile));
            }
          }
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
      currentData.description = anchorme__WEBPACK_IMPORTED_MODULE_19___default()(currentData.description, {
        attributes: [{
          name: "target",
          value: "_blank"
        }]
      });
    }

    if (theme) {
      const compiled = handlebars__WEBPACK_IMPORTED_MODULE_20___default.a.compile(theme.html || '')(currentData);
      setTemplate(compiled);
    }
  }, [theme, name, description, avatarUrl, accountList]);

  const toggleProfileSidebar = () => {
    setShowProfileSidebar(!showProfileSidebar);
  };

  return __jsx(_components_layout__WEBPACK_IMPORTED_MODULE_10__["default"], null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_5___default.a, null, __jsx("title", null, "Dashboard | Paras"), __jsx("link", {
    rel: "icon",
    href: "/favicon.ico"
  })), __jsx(_components_meta__WEBPACK_IMPORTED_MODULE_11__["default"], null), __jsx(_components_loggedIn__WEBPACK_IMPORTED_MODULE_14__["default"], null), __jsx(_components_nav__WEBPACK_IMPORTED_MODULE_12__["default"], {
    toggleProfileSidebar: toggleProfileSidebar
  }), showOnboarding && __jsx(_components_onboarding__WEBPACK_IMPORTED_MODULE_15__["default"], {
    identifier: identifier,
    setIdentifer: setIdentifier,
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
    showOnboarding: showOnboarding,
    setShowOnboarding: setShowOnboarding
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
    toggleProfileSidebar: toggleProfileSidebar,
    logout: logout
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

/***/ "radiks":
/*!*************************!*\
  !*** external "radiks" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("radiks");

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

/***/ "react-share":
/*!******************************!*\
  !*** external "react-share" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-share");

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