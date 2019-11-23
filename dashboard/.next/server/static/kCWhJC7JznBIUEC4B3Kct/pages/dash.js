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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("VOv5");


/***/ }),

/***/ "0Nc6":
/***/ (function(module, exports) {

module.exports = require("react-frame-component");

/***/ }),

/***/ "1qCV":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("qJj/");

/***/ }),

/***/ "364l":
/***/ (function(module, exports) {

module.exports = require("anchorme");

/***/ }),

/***/ "3Jk1":
/***/ (function(module, exports) {

module.exports = require("radiks");

/***/ }),

/***/ "4DCN":
/***/ (function(module, exports) {

module.exports = require("redux-logger");

/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "5+fn":
/***/ (function(module, exports) {

module.exports = require("react-share");

/***/ }),

/***/ "6jsY":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("PL1w");

exports.__esModule = true;
exports.Container = Container;
exports.createUrl = createUrl;
exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__("pzQc"));

var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__("VJxl"));

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _utils = __webpack_require__("z4BS");

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

if (false) {} // @deprecated noop for now until removal


function Container(p) {
  if (false) {}
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
      if (false) {}
      return query;
    },

    get pathname() {
      if (false) {}
      return pathname;
    },

    get asPath() {
      if (false) {}
      return asPath;
    },

    back: () => {
      if (false) {}
      router.back();
    },
    push: (url, as) => {
      if (false) {}
      return router.push(url, as);
    },
    pushTo: (href, as) => {
      if (false) {}
      var pushRoute = as ? href : '';
      var pushUrl = as || href;
      return router.push(pushRoute, pushUrl);
    },
    replace: (url, as) => {
      if (false) {}
      return router.replace(url, as);
    },
    replaceTo: (href, as) => {
      if (false) {}
      var replaceRoute = as ? href : '';
      var replaceUrl = as || href;
      return router.replace(replaceRoute, replaceUrl);
    }
  };
}

/***/ }),

/***/ "B7CR":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("HJQg");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("xnum");
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
}, ["body{margin:0;padding:0;}"]));

/* harmony default export */ __webpack_exports__["a"] = (Meta);

/***/ }),

/***/ "CafY":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("HJQg");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("xnum");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


const Layout = ({
  children
}) => __jsx("div", {
  className: "jsx-820960751"
}, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, null, __jsx("meta", {
  name: "viewport",
  content: "width=device-width, initial-scale=1",
  className: "jsx-820960751"
}), __jsx("meta", {
  charSet: "utf-8",
  className: "jsx-820960751"
}), __jsx("link", {
  href: "https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css",
  rel: "stylesheet",
  className: "jsx-820960751"
}), __jsx("script", {
  src: "/smooth-scroll.polyfills.min.js",
  className: "jsx-820960751"
})), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
  id: "820960751"
}, ["@import url('https://rsms.me/inter/inter.css');", "html{font-family:'Inter',sans-serif;}", "input,textarea{font-family:'Inter',sans-serif;}"]), children);

/* harmony default export */ __webpack_exports__["a"] = (Layout);

/***/ }),

/***/ "Evix":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SAVE_PROFILE_DATA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return saveProfileData; });
const SAVE_PROFILE_DATA = 'SAVE_PROFILE_DATA';
const saveProfileData = profile => {
  return {
    type: SAVE_PROFILE_DATA,
    profile: profile
  };
};

/***/ }),

/***/ "HJQg":
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ }),

/***/ "JYC+":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("fozc");

/***/ }),

/***/ "PL1w":
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "QTVn":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptors");

/***/ }),

/***/ "R2Q7":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/array/is-array");

/***/ }),

/***/ "TUA0":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "U8Yc":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("dGr4");

/***/ }),

/***/ "UthY":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("QTVn");

/***/ }),

/***/ "VJxl":
/***/ (function(module, exports, __webpack_require__) {

var _Promise = __webpack_require__("ZOIa");

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

/***/ "VOv5":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ../node_modules/@babel/runtime-corejs2/core-js/json/stringify.js
var stringify = __webpack_require__("JYC+");
var stringify_default = /*#__PURE__*/__webpack_require__.n(stringify);

// EXTERNAL MODULE: ../node_modules/@babel/runtime-corejs2/core-js/array/is-array.js
var is_array = __webpack_require__("s20r");
var is_array_default = /*#__PURE__*/__webpack_require__.n(is_array);

// EXTERNAL MODULE: ../node_modules/@babel/runtime-corejs2/core-js/promise.js
var promise = __webpack_require__("ZOIa");
var promise_default = /*#__PURE__*/__webpack_require__.n(promise);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__("xnum");
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__("h74D");

// EXTERNAL MODULE: external "react-frame-component"
var external_react_frame_component_ = __webpack_require__("0Nc6");
var external_react_frame_component_default = /*#__PURE__*/__webpack_require__.n(external_react_frame_component_);

// EXTERNAL MODULE: ./lib/redux.js + 7 modules
var redux = __webpack_require__("kqH1");

// EXTERNAL MODULE: ./components/layout.js
var layout = __webpack_require__("CafY");

// EXTERNAL MODULE: ./components/meta.js
var meta = __webpack_require__("B7CR");

// EXTERNAL MODULE: external "react-share"
var external_react_share_ = __webpack_require__("5+fn");

// CONCATENATED MODULE: ./components/nav.js
var __jsx = external_react_default.a.createElement;




const Nav = ({
  toggleProfileSidebar
}) => {
  const {
    0: showSocialShare,
    1: setSocialShare
  } = Object(external_react_["useState"])(false);
  const identifier = Object(external_react_redux_["useSelector"])(state => state.auth.identifier);
  return __jsx("nav", {
    className: "border-solid border-b border-gray-300 "
  }, __jsx("div", {
    className: "h-full w-full max-w-6xl relative mx-auto py-2 px-4"
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
  })))), __jsx(external_react_share_["FacebookShareButton"], {
    className: "mb-2",
    quote: `Check out my personal website!`,
    url: `https://${identifier}.paras.id`
  }, __jsx(external_react_share_["FacebookIcon"], {
    size: 32,
    round: true
  })), __jsx(external_react_share_["TwitterShareButton"], {
    className: "mb-2",
    title: `Check out my personal website!`,
    url: `https://${identifier}.paras.id`
  }, __jsx(external_react_share_["TwitterIcon"], {
    size: 32,
    round: true
  })), __jsx(external_react_share_["RedditShareButton"], {
    className: "mb-2",
    title: `Check out my personal website!`,
    url: `https://${identifier}.paras.id`
  }, __jsx(external_react_share_["RedditIcon"], {
    size: 32,
    round: true
  })), __jsx(external_react_share_["TelegramShareButton"], {
    className: "mb-2",
    title: `Check out my personal website!`,
    url: `https://${identifier}.paras.id`
  }, __jsx(external_react_share_["TelegramIcon"], {
    size: 32,
    round: true
  })), __jsx(external_react_share_["WhatsappShareButton"], {
    title: `Check out my personal website!`,
    url: `https://${identifier}.paras.id`
  }, __jsx(external_react_share_["WhatsappIcon"], {
    size: 32,
    round: true
  }))))), __jsx("li", null, __jsx("a", {
    onClick: () => toggleProfileSidebar(),
    className: " cursor-pointer"
  }, __jsx("svg", {
    width: "32",
    height: "32",
    viewBox: "0 0 32 32",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, __jsx("path", {
    d: "M6.3623 27.481L25.6459 4.49962",
    stroke: "black",
    strokeWidth: "2.5"
  }), __jsx("path", {
    d: "M1 22.9814C5.51844 17.5966 12.5702 9.19265 12.5702 9.19265",
    stroke: "black",
    strokeWidth: "2.5"
  }), __jsx("path", {
    d: "M19.438 22.7878L31.0082 8.99904",
    stroke: "black",
    strokeWidth: "2.5"
  })))))));
};

/* harmony default export */ var nav = (Nav);
// EXTERNAL MODULE: external "styled-jsx/style"
var style_ = __webpack_require__("HJQg");
var style_default = /*#__PURE__*/__webpack_require__.n(style_);

// EXTERNAL MODULE: external "fast-json-stable-stringify"
var external_fast_json_stable_stringify_ = __webpack_require__("eQno");
var external_fast_json_stable_stringify_default = /*#__PURE__*/__webpack_require__.n(external_fast_json_stable_stringify_);

// CONCATENATED MODULE: ./components/modal.js

var modal_jsx = external_react_default.a.createElement;


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

  return modal_jsx("div", {
    id: "modal-overlay",
    className: "absolute inset-0 z-20",
    onClick: e => close(e),
    style: {
      backgroundColor: `rgba(0,0,0,0.3)`
    }
  }, children);
};

/* harmony default export */ var modal = (Modal);
// EXTERNAL MODULE: ./actions/profile.js
var actions_profile = __webpack_require__("Evix");

// CONCATENATED MODULE: ./components/sidebar.js


var sidebar_jsx = external_react_default.a.createElement;






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
  const dispatch = Object(external_react_redux_["useDispatch"])();
  const profile = Object(external_react_redux_["useSelector"])(state => state.profile);
  const {
    0: showNestedSidebar,
    1: setShowNestedSidebar
  } = Object(external_react_["useState"])('');
  const {
    0: showConfirmModal,
    1: setShowConfirmModal
  } = Object(external_react_["useState"])(false);

  const readFileAsUrl = file => {
    const temporaryFileReader = new FileReader();
    return new promise_default.a((resolve, reject) => {
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

    if (external_fast_json_stable_stringify_default()(profile) === external_fast_json_stable_stringify_default()(newProfile)) {
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

  return sidebar_jsx(external_react_default.a.Fragment, null, sidebar_jsx(style_default.a, {
    id: "2392098432"
  }, [".lds-ring-container.jsx-2392098432{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}", ".lds-ring.jsx-2392098432{margin-left:auto;display:inline-block;width:1.125rem;height:1.125rem;}", ".lds-ring.jsx-2392098432 div.jsx-2392098432{box-sizing:border-box;display:block;position:absolute;width:1rem;height:1rem;margin:2px;border:2px solid #4299e1;border-radius:50%;-webkit-animation:lds-ring-jsx-2392098432 1.2s cubic-bezier(0.5,0,0.5,1) infinite;animation:lds-ring-jsx-2392098432 1.2s cubic-bezier(0.5,0,0.5,1) infinite;border-color:#4299e1 transparent transparent transparent;}", ".lds-ring.jsx-2392098432 div.jsx-2392098432:nth-child(1){-webkit-animation-delay:-0.45s;animation-delay:-0.45s;}", ".lds-ring.jsx-2392098432 div.jsx-2392098432:nth-child(2){-webkit-animation-delay:-0.3s;animation-delay:-0.3s;}", ".lds-ring.jsx-2392098432 div.jsx-2392098432:nth-child(3){-webkit-animation-delay:-0.15s;animation-delay:-0.15s;}", "@-webkit-keyframes lds-ring-jsx-2392098432{0%{-webkit-transform:rotate(0deg);-ms-transform:rotate(0deg);transform:rotate(0deg);}100%{-webkit-transform:rotate(360deg);-ms-transform:rotate(360deg);transform:rotate(360deg);}}", "@keyframes lds-ring-jsx-2392098432{0%{-webkit-transform:rotate(0deg);-ms-transform:rotate(0deg);transform:rotate(0deg);}100%{-webkit-transform:rotate(360deg);-ms-transform:rotate(360deg);transform:rotate(360deg);}}"]), showConfirmModal && sidebar_jsx(modal, {
    closeModal: () => setShowConfirmModal(false)
  }, sidebar_jsx("div", {
    className: "jsx-2392098432" + " " + "max-w-xs md:max-w-md p-4 pt-16 m-auto w-full"
  }, sidebar_jsx("div", {
    className: "jsx-2392098432" + " " + "bg-white p-4 rounded-lg"
  }, sidebar_jsx("p", {
    className: "jsx-2392098432" + " " + "text-lg text-gray-900 font-semibold mb-2"
  }, "You Have Unsaved Changes"), sidebar_jsx("p", {
    className: "jsx-2392098432" + " " + "text-gray-800 mb-4"
  }, "If you leave now, you will lose all unsaved changes."), sidebar_jsx("div", {
    className: "jsx-2392098432" + " " + "flex justify-end"
  }, sidebar_jsx("button", {
    onClick: () => {
      setShowConfirmModal(false);
    },
    className: "jsx-2392098432" + " " + "mr-4 bg-gray-900 text-white border-solid border-2 rounded-lg border-gray-900 px-4 py-1 text-sm"
  }, "Cancel"), sidebar_jsx("button", {
    onClick: () => {
      dispatch(Object(actions_profile["b" /* saveProfileData */])(profile));
      setShowNestedSidebar(false);
      setShowConfirmModal(false);
    },
    className: "jsx-2392098432" + " " + "border-solid border-2 rounded-lg border-gray-900 px-4 py-1 text-sm"
  }, "Discard"))))), sidebar_jsx("div", {
    style: {
      transform: `translate3d(${showProfileSidebar ? 0 : `100%`}, 0, 0)`,
      transition: `all .3s`
    },
    className: "jsx-2392098432" + " " + "fixed top-0 right-0 bottom-0 w-10/12 md:w-4/12 lg:w-3/12 bg-white shadow-xl"
  }, showProfileSidebar && sidebar_jsx("div", {
    onClick: () => toggleProfileSidebar(),
    style: {
      width: `32px`,
      height: `32px`,
      left: `-16px`,
      top: `16px`
    },
    className: "jsx-2392098432" + " " + "absolute z-10 bg-black rounded-full p-2 cursor-pointer"
  }, sidebar_jsx("svg", {
    width: "100%",
    height: "100%",
    viewBox: "0 0 32 32",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: "jsx-2392098432"
  }, sidebar_jsx("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M16.0002 18.8285L7.41436 27.4142L4.58594 24.5858L13.1717 16L4.58594 7.41424L7.41436 4.58582L16.0002 13.1716L24.5859 4.58582L27.4144 7.41424L18.8286 16L27.4144 24.5858L24.5859 27.4142L16.0002 18.8285V18.8285Z",
    fill: "white",
    className: "jsx-2392098432"
  }))), sidebar_jsx("div", {
    className: "jsx-2392098432" + " " + "relative h-full w-full overflow-x-hidden"
  }, sidebar_jsx("div", {
    style: {
      transform: `translate3d(${!showNestedSidebar ? 0 : `-100%`}, 0, 0)`,
      transition: `all .3s`
    },
    className: "jsx-2392098432" + " " + "absolute top-0 right-0 bottom-0 w-full bg-white py-12 md:py-16 px-4"
  }, sidebar_jsx("div", {
    className: "jsx-2392098432" + " " + "flex items-center py-2"
  }, sidebar_jsx("p", {
    className: "jsx-2392098432" + " " + "text-2xl text-gray-900 font-semibold"
  }, "Edit Your Site")), sidebar_jsx("div", {
    className: "jsx-2392098432" + " " + "py-2 max-h-full overflow-y-scroll"
  }, sidebar_jsx("div", {
    onClick: () => setShowNestedSidebar('profile'),
    className: "jsx-2392098432" + " " + "cursor-pointer h-12 flex items-center justify-between border-solid border-b border-gray-300"
  }, sidebar_jsx("p", {
    className: "jsx-2392098432" + " " + "text-lg text-gray-800 w-1/2 font-medium"
  }, "Profile "), sidebar_jsx("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 16 16",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: "jsx-2392098432"
  }, sidebar_jsx("path", {
    fill: "#a0aec0",
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M9.58586 8.00001L4.29297 2.70712L5.70718 1.29291L12.4143 8.00001L5.70718 14.7071L4.29297 13.2929L9.58586 8.00001Z",
    className: "jsx-2392098432"
  }))), sidebar_jsx("div", {
    onClick: () => setShowNestedSidebar('social'),
    className: "jsx-2392098432" + " " + "cursor-pointer h-12 flex items-center justify-between border-solid border-b border-gray-300"
  }, sidebar_jsx("p", {
    className: "jsx-2392098432" + " " + "text-lg text-gray-800 w-1/2 font-medium"
  }, "Social"), sidebar_jsx("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 16 16",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: "jsx-2392098432"
  }, sidebar_jsx("path", {
    fill: "#a0aec0",
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M9.58586 8.00001L4.29297 2.70712L5.70718 1.29291L12.4143 8.00001L5.70718 14.7071L4.29297 13.2929L9.58586 8.00001Z",
    className: "jsx-2392098432"
  }))), sidebar_jsx("div", {
    onClick: () => setShowNestedSidebar('theme'),
    className: "jsx-2392098432" + " " + "cursor-pointer h-12 flex items-center justify-between border-solid border-b border-gray-300"
  }, sidebar_jsx("p", {
    className: "jsx-2392098432" + " " + "text-lg text-gray-800 w-1/2 font-medium"
  }, "Theme"), sidebar_jsx("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 16 16",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: "jsx-2392098432"
  }, sidebar_jsx("path", {
    fill: "#a0aec0",
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M9.58586 8.00001L4.29297 2.70712L5.70718 1.29291L12.4143 8.00001L5.70718 14.7071L4.29297 13.2929L9.58586 8.00001Z",
    className: "jsx-2392098432"
  }))), sidebar_jsx("div", {
    onClick: () => logout(),
    className: "jsx-2392098432" + " " + "cursor-pointer h-12 flex items-center justify-between border-solid border-b border-gray-300"
  }, sidebar_jsx("p", {
    className: "jsx-2392098432" + " " + "text-lg text-blue-500 w-1/2 font-medium"
  }, "Log out"), sidebar_jsx("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 16 16",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: "jsx-2392098432"
  }, sidebar_jsx("path", {
    fill: "#a0aec0",
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M9.58586 8.00001L4.29297 2.70712L5.70718 1.29291L12.4143 8.00001L5.70718 14.7071L4.29297 13.2929L9.58586 8.00001Z",
    className: "jsx-2392098432"
  }))))), sidebar_jsx("div", {
    style: {
      transform: `translate3d(${showNestedSidebar ? 0 : `100%`}, 0, 0)`,
      transition: `all .3s`
    },
    className: "jsx-2392098432" + " " + "absolute top-0 right-0 bottom-0 w-full bg-white py-12 md:py-16 px-4"
  }, sidebar_jsx("div", {
    className: "jsx-2392098432" + " " + "flex items-center max-h-full overflow-y-scroll border-solid border-b border-gray-300 py-2"
  }, sidebar_jsx("div", {
    className: "jsx-2392098432" + " " + "w-1/3"
  }, sidebar_jsx("svg", {
    onClick: () => back(),
    width: "16",
    height: "16",
    viewBox: "0 0 16 16",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: "jsx-2392098432" + " " + "cursor-pointer"
  }, sidebar_jsx("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M11.707 13.2929L10.2928 14.7071L3.58569 8.00001L10.2928 1.29291L11.707 2.70712L6.41412 8.00001L11.707 13.2929Z",
    fill: "black",
    className: "jsx-2392098432"
  }))), sidebar_jsx("div", {
    className: "jsx-2392098432" + " " + "w-1/3 text-center"
  }, sidebar_jsx("p", {
    className: "jsx-2392098432" + " " + "text-lg text-gray-800 font-semibold capitalize"
  }, showNestedSidebar)), sidebar_jsx("div", {
    className: "jsx-2392098432" + " " + "w-1/3 text-right"
  }, submitState === 'pending' && sidebar_jsx("div", {
    className: "jsx-2392098432" + " " + "lds-ring-container"
  }, sidebar_jsx("div", {
    className: "jsx-2392098432" + " " + "lds-ring"
  }, sidebar_jsx("div", {
    className: "jsx-2392098432"
  }), sidebar_jsx("div", {
    className: "jsx-2392098432"
  }), sidebar_jsx("div", {
    className: "jsx-2392098432"
  }), sidebar_jsx("div", {
    className: "jsx-2392098432"
  }))), submitState === 'fulfilled' && sidebar_jsx("p", {
    className: "jsx-2392098432" + " " + "text-lg text-blue-500 font-medium capitalize"
  }, "Saved"), submitState === '' && sidebar_jsx("p", {
    onClick: e => submit(e),
    className: "jsx-2392098432" + " " + "inline-block cursor-pointer text-lg text-blue-500 font-medium capitalize"
  }, "Save"), submitState === 'rejected' && sidebar_jsx("p", {
    className: "jsx-2392098432" + " " + "text-lg text-red-500 font-medium capitalize"
  }, "Failed"))), showNestedSidebar === 'profile' && sidebar_jsx("div", {
    className: "jsx-2392098432" + " " + "py-2 max-h-full overflow-y-scroll"
  }, sidebar_jsx("div", {
    className: "jsx-2392098432" + " " + "mb-4"
  }, sidebar_jsx("div", {
    className: "jsx-2392098432" + " " + "relative"
  }, sidebar_jsx("label", {
    className: "jsx-2392098432"
  }, "Avatar"), sidebar_jsx("div", {
    style: {
      height: `200px`,
      width: `100%`,
      backgroundSize: `cover`,
      backgroundPosition: `center`,
      backgroundImage: `url(${avatarUrl})`
    },
    className: "jsx-2392098432" + " " + "border-solid border rounded-sm border-gray-300"
  }, sidebar_jsx("div", {
    style: {
      backgroundColor: `rgba(0,0,0,0.5)`
    },
    className: "jsx-2392098432" + " " + "h-full w-full flex items-center justify-center"
  }, sidebar_jsx("div", {
    className: "jsx-2392098432" + " " + "relative"
  }, sidebar_jsx("svg", {
    width: "32",
    height: "32",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: "jsx-2392098432"
  }, sidebar_jsx("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M6.93702 5.84538C7.00787 5.74688 7.08656 5.62631 7.18689 5.46372C7.22356 5.40431 7.32355 5.23934 7.39799 5.11653L7.4818 4.97841C8.31079 3.62239 8.91339 3 10 3H15V5H10C9.91327 5 9.6405 5.28172 9.1882 6.02159L9.11542 6.14154L9.11524 6.14183C9.04019 6.26566 8.93096 6.44589 8.88887 6.51409C8.76592 6.71332 8.66375 6.86988 8.56061 7.01326C8.11237 7.63641 7.66434 8 7 8H4C3.44772 8 3 8.44772 3 9V18C3 18.5523 3.44772 19 4 19H20C20.5523 19 21 18.5523 21 18V12H23V18C23 19.6569 21.6569 21 20 21H4C2.34315 21 1 19.6569 1 18V9C1 7.34315 2.34315 6 4 6H6.8162C6.84949 5.96194 6.8903 5.91033 6.93702 5.84538ZM17 8V6H19V4H21V6H23V8H21V10H19V8H17ZM12 18C9.23858 18 7 15.7614 7 13C7 10.2386 9.23858 8 12 8C14.7614 8 17 10.2386 17 13C17 15.7614 14.7614 18 12 18ZM12 16C13.6569 16 15 14.6569 15 13C15 11.3431 13.6569 10 12 10C10.3431 10 9 11.3431 9 13C9 14.6569 10.3431 16 12 16Z",
    fill: "white",
    className: "jsx-2392098432"
  })), sidebar_jsx("input", {
    type: "file",
    accept: "image/*",
    onChange: e => updateAvatarUrl(e.target.files),
    className: "jsx-2392098432" + " " + "absolute cursor-pointer inset-0 opacity-0 w-full"
  })))))), sidebar_jsx("div", {
    className: "jsx-2392098432" + " " + "mb-4"
  }, sidebar_jsx("div", {
    className: "jsx-2392098432" + " " + "px-3 py-1 flex flex-col border-solid border rounded-sm border-gray-300"
  }, sidebar_jsx("label", {
    className: "jsx-2392098432" + " " + "text-xs font-light text-gray-600"
  }, "Name"), sidebar_jsx("input", {
    placeholder: "Your name",
    type: "text",
    value: name,
    onChange: e => setName(e.target.value),
    className: "jsx-2392098432" + " " + "focus:outline-none"
  }))), sidebar_jsx("div", {
    className: "jsx-2392098432" + " " + "mb-4"
  }, sidebar_jsx("div", {
    className: "jsx-2392098432" + " " + "px-3 py-1 flex flex-col border-solid border rounded-sm border-gray-300"
  }, sidebar_jsx("label", {
    className: "jsx-2392098432" + " " + "text-xs font-light text-gray-600"
  }, "Description"), sidebar_jsx("textarea", {
    placeholder: "Tell the world about yourself",
    rows: 8,
    value: description,
    onChange: e => setDescription(e.target.value),
    className: "jsx-2392098432" + " " + "focus:outline-none resize-none"
  })))), showNestedSidebar === 'social' && sidebar_jsx("div", {
    className: "jsx-2392098432" + " " + "py-2 max-h-full overflow-y-scroll"
  }, sidebar_jsx("div", {
    className: "jsx-2392098432" + " " + "mb-4"
  }, sidebar_jsx("div", {
    className: "jsx-2392098432" + " " + "px-3 py-1 flex flex-col border-solid border rounded-sm border-gray-300"
  }, sidebar_jsx("label", {
    className: "jsx-2392098432" + " " + "text-xs font-light text-gray-600"
  }, "facebook.com/"), sidebar_jsx("input", {
    placeholder: "username",
    type: "text",
    value: getAccount('facebook'),
    onChange: e => setUserAccount('facebook', e.target.value),
    className: "jsx-2392098432" + " " + "focus:outline-none"
  }))), sidebar_jsx("div", {
    className: "jsx-2392098432" + " " + "mb-4"
  }, sidebar_jsx("div", {
    className: "jsx-2392098432" + " " + "px-3 py-1 flex flex-col border-solid border rounded-sm border-gray-300"
  }, sidebar_jsx("label", {
    className: "jsx-2392098432" + " " + "text-xs font-light text-gray-600"
  }, "twitter.com/"), sidebar_jsx("input", {
    placeholder: "username",
    type: "text",
    value: getAccount('twitter'),
    onChange: e => setUserAccount('twitter', e.target.value),
    className: "jsx-2392098432" + " " + "focus:outline-none"
  }))), sidebar_jsx("div", {
    className: "jsx-2392098432" + " " + "mb-4"
  }, sidebar_jsx("div", {
    className: "jsx-2392098432" + " " + "px-3 py-1 flex flex-col border-solid border rounded-sm border-gray-300"
  }, sidebar_jsx("label", {
    className: "jsx-2392098432" + " " + "text-xs font-light text-gray-600"
  }, "instagram.com/"), sidebar_jsx("input", {
    placeholder: "username",
    type: "text",
    value: getAccount('instagram'),
    onChange: e => setUserAccount('instagram', e.target.value),
    className: "jsx-2392098432" + " " + "focus:outline-none"
  })))), showNestedSidebar === 'theme' && sidebar_jsx("div", {
    className: "jsx-2392098432" + " " + "overflow-y-scroll max-h-full py-2 max-h-full overflow-y-scroll"
  }, themeList.map(theme => {
    return sidebar_jsx("div", {
      key: theme.name,
      className: "jsx-2392098432" + " " + "mb-4"
    }, sidebar_jsx("div", {
      onClick: () => setTheme(theme),
      className: "jsx-2392098432"
    }, sidebar_jsx("label", {
      className: "jsx-2392098432"
    }, theme.name), sidebar_jsx("div", {
      style: {
        height: `200px`,
        width: `100%`,
        backgroundSize: `cover`,
        backgroundPosition: `center`,
        backgroundImage: `url(${theme.thumbnail})`
      },
      className: "jsx-2392098432" + " " + "relative border-solid border rounded-sm border-gray-300"
    }, isSelectedTheme(theme.name) && sidebar_jsx("div", {
      style: {
        backgroundColor: `rgba(0,0,0,0.3)`
      },
      className: "jsx-2392098432" + " " + "absolute inset-0 flex items-center justify-center"
    }, sidebar_jsx("p", {
      className: "jsx-2392098432" + " " + "text-gray-200"
    }, "Selected")))));
  }))))));
};

/* harmony default export */ var sidebar = (Sidebar);
// EXTERNAL MODULE: ./api/index.js
var api = __webpack_require__("bMwp");

// CONCATENATED MODULE: ./components/loggedIn.js

var loggedIn_jsx = external_react_default.a.createElement;




const LoggedIn = () => {
  const router = Object(router_["useRouter"])();
  Object(external_react_["useEffect"])(() => {
    if (!api["b" /* blockstackAPI */].session.isUserSignedIn()) {
      router.replace('/login');
    }
  });
  return loggedIn_jsx("div", null);
};

/* harmony default export */ var loggedIn = (LoggedIn);
// CONCATENATED MODULE: ./components/onboarding.js


var onboarding_jsx = external_react_default.a.createElement;







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
  const dispatch = Object(external_react_redux_["useDispatch"])();
  const profile = Object(external_react_redux_["useSelector"])(state => state.profile);
  const {
    0: onboardingState,
    1: setOnboardingState
  } = Object(external_react_["useState"])('identifier');
  const {
    0: identifierAvailability,
    1: setIdentifierAvailability
  } = Object(external_react_["useState"])(true);
  const {
    0: identifierValid,
    1: setIdenfierValid
  } = Object(external_react_["useState"])(true);
  Object(external_react_["useEffect"])(() => {
    const init = async () => {
      if (api["b" /* blockstackAPI */].session.isUserSignedIn()) {
        const getAuthData = await api["b" /* blockstackAPI */].session.loadUserData(); // set default username

        const userIdentifier = getAuthData.username.split('.')[0];
        setIdentifer(userIdentifier); // set default avatar

        const avatarExist = getAuthData.profile.image.find(img => img.name === 'avatar');
        const avatarUrl = avatarExist ? avatarExist.contentUrl : `data:image/jpeg;base64,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`;
        setAvatarUrl(avatarUrl); // set default name

        setName(getAuthData.profile.name || userIdentifier); // set default description

        setDescription(getAuthData.profile.description || `You would be amaze if you know me`);
      }
    };

    init();
  }, []);

  const checkAndSetIdentifier = async e => {
    e.preventDefault();
    const idExist = await api["a" /* IdentifierAPI */].fetchList({
      identifier: identifier
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
    return new promise_default.a((resolve, reject) => {
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
    const newId = new api["a" /* IdentifierAPI */](newData);
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

    if (external_fast_json_stable_stringify_default()(profile) === external_fast_json_stable_stringify_default()(newProfile)) {
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

  Object(external_react_["useEffect"])(() => {
    const regex = /^[a-z0-9]{4,32}$/g;

    if (regex.test(identifier)) {
      setIdenfierValid(true);
    } else {
      setIdenfierValid(false);
    }
  }, [identifier]);
  Object(external_react_["useEffect"])(() => {
    if (submitState === 'fulfilled') {
      setShowOnboarding(false);
    }
  }, [submitState]);
  return onboarding_jsx(external_react_default.a.Fragment, null, onboarding_jsx(style_default.a, {
    id: "50543562"
  }, [".lds-ring-container.jsx-50543562{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}", ".lds-ring.jsx-50543562{margin:auto;display:inline-block;width:1.125rem;height:1.125rem;}", ".lds-ring.jsx-50543562 div.jsx-50543562{box-sizing:border-box;display:block;position:absolute;width:1rem;height:1rem;margin:2px;border:2px solid white;border-radius:50%;-webkit-animation:lds-ring-jsx-50543562 1.2s cubic-bezier(0.5,0,0.5,1) infinite;animation:lds-ring-jsx-50543562 1.2s cubic-bezier(0.5,0,0.5,1) infinite;border-color:white transparent transparent transparent;}", ".lds-ring.jsx-50543562 div.jsx-50543562:nth-child(1){-webkit-animation-delay:-0.45s;animation-delay:-0.45s;}", ".lds-ring.jsx-50543562 div.jsx-50543562:nth-child(2){-webkit-animation-delay:-0.3s;animation-delay:-0.3s;}", ".lds-ring.jsx-50543562 div.jsx-50543562:nth-child(3){-webkit-animation-delay:-0.15s;animation-delay:-0.15s;}", "@-webkit-keyframes lds-ring-jsx-50543562{0%{-webkit-transform:rotate(0deg);-ms-transform:rotate(0deg);transform:rotate(0deg);}100%{-webkit-transform:rotate(360deg);-ms-transform:rotate(360deg);transform:rotate(360deg);}}", "@keyframes lds-ring-jsx-50543562{0%{-webkit-transform:rotate(0deg);-ms-transform:rotate(0deg);transform:rotate(0deg);}100%{-webkit-transform:rotate(360deg);-ms-transform:rotate(360deg);transform:rotate(360deg);}}"]), onboarding_jsx("div", {
    className: "jsx-50543562" + " " + "fixed bg-white inset-0 z-30"
  }, onboarding_jsx("div", {
    className: "jsx-50543562" + " " + "max-w-xs md:max-w-md p-4 pt-16 mt-16 m-auto w-full"
  }, onboarding_jsx("div", {
    className: "jsx-50543562" + " " + "mx-2 md:mx-8"
  }, onboardingState === 'identifier' && onboarding_jsx("div", {
    className: "jsx-50543562"
  }, onboarding_jsx("div", {
    className: "jsx-50543562" + " " + "mb-4"
  }, onboarding_jsx("p", {
    className: "jsx-50543562" + " " + "text-lg text-gray-800 font-semibold"
  }, "Let's create your personal site!")), onboarding_jsx("p", {
    className: "jsx-50543562" + " " + "mb-2 text-lg text-gray-900 font-semibold"
  }, "Set your site address"), onboarding_jsx("form", {
    onSubmit: e => checkAndSetIdentifier(e),
    className: "jsx-50543562"
  }, onboarding_jsx("div", {
    className: "jsx-50543562" + " " + "mb-4"
  }, onboarding_jsx("div", {
    className: "jsx-50543562" + " " + "mb-1 px-3 py-1 flex border-solid border rounded-sm border-gray-300 justify-between"
  }, onboarding_jsx("input", {
    placeholder: "username",
    type: "text",
    value: identifier,
    onChange: e => setIdentifer(e.target.value),
    className: "jsx-50543562" + " " + "flex-grow focus:outline-none w-full"
  }), onboarding_jsx("label", {
    className: "jsx-50543562" + " " + "text-gray-600"
  }, ".paras.id")), onboarding_jsx("p", {
    className: "jsx-50543562" + " " + "text-xs italic text-gray-600"
  }, "Minimal 4 characters & Maximum 32 characters")), onboarding_jsx("button", {
    disabled: !identifierValid,
    type: "submit",
    style: {
      opacity: identifierValid ? `100%` : `30%`
    },
    className: "jsx-50543562" + " " + "w-full bg-gray-900 text-white border-solid border-2 rounded-lg border-gray-900 px-4 py-1 text-sm"
  }, identifierAvailability ? 'Next' : 'Already Taken'))), onboardingState === 'name' && onboarding_jsx("div", {
    className: "jsx-50543562"
  }, onboarding_jsx("div", {
    className: "jsx-50543562" + " " + "mb-4"
  }, onboarding_jsx("div", {
    onClick: () => setOnboardingState('identifier'),
    className: "jsx-50543562" + " " + "inline-flex items-center cursor-pointer"
  }, onboarding_jsx("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 16 16",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: "jsx-50543562" + " " + "mr-4"
  }, onboarding_jsx("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M11.707 13.2929L10.2928 14.7071L3.58569 8.00001L10.2928 1.29291L11.707 2.70712L6.41412 8.00001L11.707 13.2929Z",
    fill: "black",
    className: "jsx-50543562"
  })), onboarding_jsx("p", {
    className: "jsx-50543562" + " " + "text-lg text-gray-800 font-semibold"
  }, "Back"))), onboarding_jsx("p", {
    className: "jsx-50543562" + " " + "mb-2 text-lg text-gray-900 font-semibold"
  }, "Tell us your name"), onboarding_jsx("form", {
    onSubmit: e => {
      e.preventDefault();
      setOnboardingState('description');
    },
    className: "jsx-50543562"
  }, onboarding_jsx("div", {
    className: "jsx-50543562" + " " + "mb-8"
  }, onboarding_jsx("div", {
    className: "jsx-50543562" + " " + "px-3 py-1 flex flex-col border-solid border rounded-sm border-gray-300"
  }, onboarding_jsx("label", {
    className: "jsx-50543562" + " " + "text-xs font-light text-gray-600"
  }, "Name"), onboarding_jsx("input", {
    placeholder: "Your name",
    type: "text",
    value: name,
    onChange: e => setName(e.target.value),
    className: "jsx-50543562" + " " + "focus:outline-none"
  }))), onboarding_jsx("button", {
    type: "submit",
    className: "jsx-50543562" + " " + "w-full bg-gray-900 text-white border-solid border-2 rounded-lg border-gray-900 px-4 py-1 text-sm"
  }, "Next"))), onboardingState === 'description' && onboarding_jsx("div", {
    className: "jsx-50543562"
  }, onboarding_jsx("div", {
    className: "jsx-50543562" + " " + "mb-4"
  }, onboarding_jsx("div", {
    onClick: () => setOnboardingState('name'),
    className: "jsx-50543562" + " " + "inline-flex items-center cursor-pointer"
  }, onboarding_jsx("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 16 16",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: "jsx-50543562" + " " + "mr-4"
  }, onboarding_jsx("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M11.707 13.2929L10.2928 14.7071L3.58569 8.00001L10.2928 1.29291L11.707 2.70712L6.41412 8.00001L11.707 13.2929Z",
    fill: "black",
    className: "jsx-50543562"
  })), onboarding_jsx("p", {
    className: "jsx-50543562" + " " + "text-lg text-gray-800 font-semibold"
  }, "Back"))), onboarding_jsx("p", {
    className: "jsx-50543562" + " " + "mb-2 text-lg text-gray-900 font-semibold"
  }, "Tell the world about yourself"), onboarding_jsx("form", {
    onSubmit: e => {
      e.preventDefault();
      setOnboardingState('avatar');
    },
    className: "jsx-50543562"
  }, onboarding_jsx("div", {
    className: "jsx-50543562" + " " + "mb-4"
  }, onboarding_jsx("div", {
    className: "jsx-50543562" + " " + "px-3 py-1 flex flex-col border-solid border rounded-sm border-gray-300"
  }, onboarding_jsx("label", {
    className: "jsx-50543562" + " " + "text-xs font-light text-gray-600"
  }, "Description"), onboarding_jsx("textarea", {
    placeholder: "Tell the world about yourself",
    rows: 8,
    value: description,
    onChange: e => setDescription(e.target.value),
    className: "jsx-50543562" + " " + "focus:outline-none resize-none"
  }))), onboarding_jsx("button", {
    type: "submit",
    className: "jsx-50543562" + " " + "w-full bg-gray-900 text-white border-solid border-2 rounded-lg border-gray-900 px-4 py-1 text-sm"
  }, "Next"))), onboardingState === 'avatar' && onboarding_jsx("div", {
    className: "jsx-50543562"
  }, onboarding_jsx("div", {
    className: "jsx-50543562" + " " + "mb-4"
  }, onboarding_jsx("div", {
    onClick: () => setOnboardingState('description'),
    className: "jsx-50543562" + " " + "inline-flex items-center cursor-pointer"
  }, onboarding_jsx("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 16 16",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: "jsx-50543562" + " " + "mr-4"
  }, onboarding_jsx("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M11.707 13.2929L10.2928 14.7071L3.58569 8.00001L10.2928 1.29291L11.707 2.70712L6.41412 8.00001L11.707 13.2929Z",
    fill: "black",
    className: "jsx-50543562"
  })), onboarding_jsx("p", {
    className: "jsx-50543562" + " " + "text-lg text-gray-800 font-semibold"
  }, "Back"))), onboarding_jsx("p", {
    className: "jsx-50543562" + " " + "mb-2 text-lg text-gray-900 font-semibold"
  }, "Select image that represent yourself"), onboarding_jsx("form", {
    onSubmit: e => {
      e.preventDefault();
      setOnboardingState('theme');
    },
    className: "jsx-50543562"
  }, onboarding_jsx("div", {
    className: "jsx-50543562" + " " + "mb-4"
  }, onboarding_jsx("div", {
    className: "jsx-50543562" + " " + "relative"
  }, onboarding_jsx("div", {
    style: {
      height: `200px`,
      width: `100%`,
      backgroundSize: `cover`,
      backgroundPosition: `center`,
      backgroundImage: `url(${avatarUrl})`
    },
    className: "jsx-50543562" + " " + "border-solid border rounded-sm border-gray-300"
  }, onboarding_jsx("div", {
    style: {
      backgroundColor: `rgba(0,0,0,0.5)`
    },
    className: "jsx-50543562" + " " + "h-full w-full flex items-center justify-center"
  }, onboarding_jsx("div", {
    className: "jsx-50543562" + " " + "relative"
  }, onboarding_jsx("svg", {
    width: "32",
    height: "32",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: "jsx-50543562"
  }, onboarding_jsx("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M6.93702 5.84538C7.00787 5.74688 7.08656 5.62631 7.18689 5.46372C7.22356 5.40431 7.32355 5.23934 7.39799 5.11653L7.4818 4.97841C8.31079 3.62239 8.91339 3 10 3H15V5H10C9.91327 5 9.6405 5.28172 9.1882 6.02159L9.11542 6.14154L9.11524 6.14183C9.04019 6.26566 8.93096 6.44589 8.88887 6.51409C8.76592 6.71332 8.66375 6.86988 8.56061 7.01326C8.11237 7.63641 7.66434 8 7 8H4C3.44772 8 3 8.44772 3 9V18C3 18.5523 3.44772 19 4 19H20C20.5523 19 21 18.5523 21 18V12H23V18C23 19.6569 21.6569 21 20 21H4C2.34315 21 1 19.6569 1 18V9C1 7.34315 2.34315 6 4 6H6.8162C6.84949 5.96194 6.8903 5.91033 6.93702 5.84538ZM17 8V6H19V4H21V6H23V8H21V10H19V8H17ZM12 18C9.23858 18 7 15.7614 7 13C7 10.2386 9.23858 8 12 8C14.7614 8 17 10.2386 17 13C17 15.7614 14.7614 18 12 18ZM12 16C13.6569 16 15 14.6569 15 13C15 11.3431 13.6569 10 12 10C10.3431 10 9 11.3431 9 13C9 14.6569 10.3431 16 12 16Z",
    fill: "white",
    className: "jsx-50543562"
  })), onboarding_jsx("input", {
    type: "file",
    accept: "image/*",
    onChange: e => updateAvatarUrl(e.target.files),
    className: "jsx-50543562" + " " + "absolute cursor-pointer inset-0 opacity-0 w-full"
  })))))), onboarding_jsx("button", {
    type: "submit",
    className: "jsx-50543562" + " " + "w-full bg-gray-900 text-white border-solid border-2 rounded-lg border-gray-900 px-4 py-1 text-sm"
  }, "Next"))), onboardingState === 'theme' && onboarding_jsx("div", {
    className: "jsx-50543562"
  }, onboarding_jsx("div", {
    className: "jsx-50543562" + " " + "mb-4"
  }, onboarding_jsx("div", {
    onClick: () => setOnboardingState('avatar'),
    className: "jsx-50543562" + " " + "inline-flex items-center cursor-pointer"
  }, onboarding_jsx("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 16 16",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: "jsx-50543562" + " " + "mr-4"
  }, onboarding_jsx("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M11.707 13.2929L10.2928 14.7071L3.58569 8.00001L10.2928 1.29291L11.707 2.70712L6.41412 8.00001L11.707 13.2929Z",
    fill: "black",
    className: "jsx-50543562"
  })), onboarding_jsx("p", {
    className: "jsx-50543562" + " " + "text-lg text-gray-800 font-semibold"
  }, "Back"))), onboarding_jsx("p", {
    className: "jsx-50543562" + " " + "mb-2 text-lg text-gray-900 font-semibold"
  }, "Select your theme"), onboarding_jsx("form", {
    onSubmit: e => {
      e.preventDefault();
      setOnboardingState('done');
    },
    className: "jsx-50543562"
  }, onboarding_jsx("div", {
    className: "jsx-50543562" + " " + "flex flex-no-wrap mb-4 overflow-x-scroll"
  }, themeList.map(theme => {
    return onboarding_jsx("div", {
      key: theme.name,
      style: {
        minWidth: `200px`
      },
      className: "jsx-50543562" + " " + "mr-4"
    }, onboarding_jsx("div", {
      onClick: () => setTheme(theme),
      className: "jsx-50543562" + " " + "cursor-pointer"
    }, onboarding_jsx("label", {
      className: "jsx-50543562"
    }, theme.name), onboarding_jsx("div", {
      style: {
        height: `200px`,
        width: `100%`,
        backgroundSize: `cover`,
        backgroundPosition: `center`,
        backgroundImage: `url(${theme.thumbnail})`
      },
      className: "jsx-50543562" + " " + "relative border-solid border rounded-sm border-gray-300"
    }, isSelectedTheme(theme.name) && onboarding_jsx("div", {
      style: {
        backgroundColor: `rgba(0,0,0,0.3)`
      },
      className: "jsx-50543562" + " " + "absolute inset-0 flex items-center justify-center"
    }, onboarding_jsx("p", {
      className: "jsx-50543562" + " " + "text-gray-200"
    }, "Selected")))));
  })), onboarding_jsx("button", {
    onClick: e => submitOnboarding(e),
    disabled: !theme,
    type: "submit",
    style: {
      opacity: theme ? `100%` : `30%`
    },
    className: "jsx-50543562" + " " + "w-full bg-gray-900 text-white border-solid border-2 rounded-lg border-gray-900 px-4 py-1 text-sm"
  }, submitState === 'pending' && onboarding_jsx("div", {
    className: "jsx-50543562" + " " + "inline-flex"
  }, onboarding_jsx("p", {
    className: "jsx-50543562" + " " + "text-sm mr-2"
  }, "Saving"), onboarding_jsx("div", {
    className: "jsx-50543562" + " " + "lds-ring-container"
  }, onboarding_jsx("div", {
    className: "jsx-50543562" + " " + "lds-ring"
  }, onboarding_jsx("div", {
    className: "jsx-50543562"
  }), onboarding_jsx("div", {
    className: "jsx-50543562"
  }), onboarding_jsx("div", {
    className: "jsx-50543562"
  }), onboarding_jsx("div", {
    className: "jsx-50543562"
  })))), submitState === 'fulfilled' && onboarding_jsx("p", {
    className: "jsx-50543562" + " " + "text-sm"
  }, "Website successfully created"), submitState === '' && onboarding_jsx("p", {
    className: "jsx-50543562" + " " + "text-sm"
  }, "Create my website"), submitState === 'rejected' && onboarding_jsx("p", {
    className: "jsx-50543562" + " " + "text-sm"
  }, "Failed"))))))));
};

/* harmony default export */ var components_onboarding = (Onboarding);
// CONCATENATED MODULE: ./components/loading.js

var loading_jsx = external_react_default.a.createElement;

const Loading = () => {
  return loading_jsx("div", {
    className: "fixed inset-0 z-50 bg-gray-900"
  }, loading_jsx("div", {
    className: "flex h-full w-full items-center justify-center"
  }, loading_jsx("p", {
    className: "text-gray-300 text-2xl font-medium"
  }, "Loading...")));
};

/* harmony default export */ var loading = (Loading);
// EXTERNAL MODULE: ./actions/auth.js
var auth = __webpack_require__("iuBY");

// EXTERNAL MODULE: external "anchorme"
var external_anchorme_ = __webpack_require__("364l");
var external_anchorme_default = /*#__PURE__*/__webpack_require__.n(external_anchorme_);

// EXTERNAL MODULE: external "handlebars"
var external_handlebars_ = __webpack_require__("lPnI");
var external_handlebars_default = /*#__PURE__*/__webpack_require__.n(external_handlebars_);

// CONCATENATED MODULE: ./pages/dash.js



var dash_jsx = external_react_default.a.createElement;



















const readFileAsBuffer = file => {
  const temporaryFileReader = new FileReader();
  return new promise_default.a((resolve, reject) => {
    temporaryFileReader.onload = () => {
      resolve(temporaryFileReader.result);
    };

    temporaryFileReader.readAsArrayBuffer(file);
  });
};

const Dashboard = () => {
  const dispatch = Object(external_react_redux_["useDispatch"])();
  const router = Object(router_["useRouter"])();
  const {
    0: name,
    1: setName
  } = Object(external_react_["useState"])('');
  const {
    0: description,
    1: setDescription
  } = Object(external_react_["useState"])('');
  const {
    0: avatarUrl,
    1: setAvatarUrl
  } = Object(external_react_["useState"])('');
  const {
    0: avatarFile,
    1: setAvatarFile
  } = Object(external_react_["useState"])('');
  const {
    0: accountList,
    1: setAccountList
  } = Object(external_react_["useState"])([]);
  const {
    0: themeList,
    1: setThemeList
  } = Object(external_react_["useState"])([]);
  const {
    0: theme,
    1: setTheme
  } = Object(external_react_["useState"])('');
  const {
    0: identifier,
    1: setIdentifier
  } = Object(external_react_["useState"])('');
  const {
    0: template,
    1: setTemplate
  } = Object(external_react_["useState"])('');
  const {
    0: submitState,
    1: setSubmitState
  } = Object(external_react_["useState"])('');
  const {
    0: loadingState,
    1: setLoadingState
  } = Object(external_react_["useState"])(true);
  const authData = Object(external_react_redux_["useSelector"])(state => state.auth.authData);
  const profile = Object(external_react_redux_["useSelector"])(state => state.profile);
  const {
    0: showProfileSidebar,
    1: setShowProfileSidebar
  } = Object(external_react_["useState"])(false);
  const {
    0: showOnboarding,
    1: setShowOnboarding
  } = Object(external_react_["useState"])(true);

  const logout = async () => {
    await api["b" /* blockstackAPI */].session.signUserOut();
    dispatch(Object(auth["d" /* saveAuthData */])(null));
  };

  const submit = async (e, onboarding) => {
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
        const newAvatarUrl = await api["b" /* blockstackAPI */].session.putFile('avatar.png', buff, {
          encrypt: false
        });
        newProfile.avatarUrl = newAvatarUrl;
      }

      if (onboarding) {
        const newData = {
          identifier: identifier,
          blockstackId: authData.username,
          profile: newProfile
        };
        const newId = new api["a" /* IdentifierAPI */](newData);
        await newId.save();
        dispatch(Object(auth["e" /* saveUserId */])(identifier));
      } else {
        const newId = await api["a" /* IdentifierAPI */].findOne({
          identifier: identifier
        });
        newId.update({
          profile: newProfile
        });
        await newId.save();
      }

      dispatch(Object(actions_profile["b" /* saveProfileData */])(newProfile));
      setSubmitState('fulfilled');
    } catch (err) {
      setSubmitState('rejected');
    }

    setTimeout(() => {
      setSubmitState('');
    }, 1000);
  };

  Object(external_react_["useEffect"])(() => {
    const checkAuthData = async () => {
      if (api["b" /* blockstackAPI */].session.isUserSignedIn()) {
        if (!authData) {
          const getAuthData = await api["b" /* blockstackAPI */].session.loadUserData();
          dispatch(Object(auth["d" /* saveAuthData */])(getAuthData));
        }

        const id = await api["a" /* IdentifierAPI */].findOne({
          identifier: identifier
        });

        if (id) {
          setShowOnboarding(false);
          dispatch(Object(actions_profile["b" /* saveProfileData */])(id.attrs.profile));
          dispatch(Object(auth["e" /* saveUserId */])(id.attrs.identifier));
        }

        setTimeout(() => {
          setLoadingState(false);
        }, 500);
      } else {
        router.replace('/login');
      }
    };

    checkAuthData();

    const fetchThemeList = async () => {
      const response = await api["c" /* themeAPI */].fetch();
      setThemeList(response.data.data);
    };

    fetchThemeList();
  }, []);
  Object(external_react_["useEffect"])(() => {
    if (profile.name) {
      setName(profile.name);
    }

    if (profile.description) {
      setDescription(profile.description);
    }

    if (is_array_default()(profile.accountList)) {
      const cloneAccountList = JSON.parse(stringify_default()(profile.accountList));
      setAccountList(cloneAccountList);
    }

    if (profile.avatarUrl) {
      setAvatarUrl(profile.avatarUrl);
    }

    if (profile.theme) {
      const cloneTheme = JSON.parse(stringify_default()(profile.theme));
      setTheme(cloneTheme);
    }
  }, [profile]);
  Object(external_react_["useEffect"])(() => {
    const currentData = JSON.parse(stringify_default()({
      name: name,
      description: description,
      avatarUrl: avatarUrl,
      accountList: accountList
    }));

    if (currentData.description) {
      currentData.description = external_anchorme_default()(currentData.description, {
        attributes: [{
          name: "target",
          value: "_blank"
        }]
      });
    }

    if (theme) {
      const path = 'index';
      const page = theme.templatePage.find(page => page.path === path);
      const compiled = external_handlebars_default.a.compile(page.template || '')(currentData);
      setTemplate(compiled);
    }
  }, [theme, name, description, avatarUrl, accountList]);

  const toggleProfileSidebar = () => {
    setShowProfileSidebar(!showProfileSidebar);
  };

  return dash_jsx(layout["a" /* default */], null, dash_jsx(head_default.a, null, dash_jsx("title", null, "Dashboard | Paras"), dash_jsx("link", {
    rel: "icon",
    href: "/favicon.ico"
  })), dash_jsx(meta["a" /* default */], null), dash_jsx(loggedIn, null), loadingState && dash_jsx(loading, null), dash_jsx(nav, {
    toggleProfileSidebar: toggleProfileSidebar
  }), showOnboarding && dash_jsx(components_onboarding, {
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
  }), dash_jsx(sidebar, {
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
  }), dash_jsx(external_react_frame_component_default.a, {
    className: "w-screen",
    style: {
      height: `calc(100vh - 2.5rem)`
    }
  }, dash_jsx("div", {
    dangerouslySetInnerHTML: {
      __html: template
    }
  })));
};

/* harmony default export */ var dash = __webpack_exports__["default"] = (Object(redux["a" /* withRedux */])(Dashboard));

/***/ }),

/***/ "YGDI":
/***/ (function(module, exports) {

module.exports = require("blockstack");

/***/ }),

/***/ "Z6Kq":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "ZOIa":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("aC71");

/***/ }),

/***/ "ZSx1":
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),

/***/ "aC71":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/promise");

/***/ }),

/***/ "azxR":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("hHgk");
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

/***/ "bMwp":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return blockstackAPI; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return themeAPI; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IdentifierAPI; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("azxR");
/* harmony import */ var blockstack__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("YGDI");
/* harmony import */ var blockstack__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(blockstack__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var radiks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("3Jk1");
/* harmony import */ var radiks__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(radiks__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("zr5I");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);





class Identifier extends radiks__WEBPACK_IMPORTED_MODULE_2__["Model"] {}

Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(Identifier, "className", 'Identifier');

Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(Identifier, "schema", {
  identifier: {
    type: String,
    decrypted: true
  },
  blockstackId: {
    type: String,
    decrypted: true
  },
  profile: {
    decrypted: true
  }
});

class BlockstackAPI {
  constructor() {
    this.default = blockstack__WEBPACK_IMPORTED_MODULE_1__;
    this.appConfig = new blockstack__WEBPACK_IMPORTED_MODULE_1__["AppConfig"](['email', 'store_write', 'publish_data'], "https://paras.id", '/login');
    this.session = new blockstack__WEBPACK_IMPORTED_MODULE_1__["UserSession"]({
      appConfig: this.appConfig
    });
    this.radiks = Object(radiks__WEBPACK_IMPORTED_MODULE_2__["configure"])({
      apiServer: "https://paras.id",
      userSession: this.session
    });
  }

}

class ThemeAPI {
  async fetch() {
    return await axios__WEBPACK_IMPORTED_MODULE_3___default.a.get('/api/themes');
  }

}

const blockstackAPI = new BlockstackAPI();
const themeAPI = new ThemeAPI();
const IdentifierAPI = Identifier;

/***/ }),

/***/ "bzos":
/***/ (function(module, exports) {

module.exports = require("url");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "dGr4":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "eQno":
/***/ (function(module, exports) {

module.exports = require("fast-json-stable-stringify");

/***/ }),

/***/ "fozc":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/json/stringify");

/***/ }),

/***/ "h74D":
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "hHgk":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("TUA0");

/***/ }),

/***/ "iuBY":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SAVE_AUTH_DATA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return saveAuthData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return SAVE_USER_SESSION; });
/* unused harmony export saveUserSession */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SAVE_USER_ID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return saveUserId; });
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
const SAVE_USER_ID = 'SAVE_USER_ID';
const saveUserId = identifier => {
  return {
    type: SAVE_USER_ID,
    identifier: identifier
  };
};

/***/ }),

/***/ "k1wZ":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "kqH1":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ../node_modules/@babel/runtime-corejs2/core-js/object/define-property.js
var define_property = __webpack_require__("hHgk");
var define_property_default = /*#__PURE__*/__webpack_require__.n(define_property);

// EXTERNAL MODULE: ../node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js
var define_properties = __webpack_require__("wuQJ");
var define_properties_default = /*#__PURE__*/__webpack_require__.n(define_properties);

// EXTERNAL MODULE: ../node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptors.js
var get_own_property_descriptors = __webpack_require__("UthY");
var get_own_property_descriptors_default = /*#__PURE__*/__webpack_require__.n(get_own_property_descriptors);

// EXTERNAL MODULE: ../node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js
var get_own_property_descriptor = __webpack_require__("tvLF");
var get_own_property_descriptor_default = /*#__PURE__*/__webpack_require__.n(get_own_property_descriptor);

// EXTERNAL MODULE: ../node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js
var get_own_property_symbols = __webpack_require__("s4hn");
var get_own_property_symbols_default = /*#__PURE__*/__webpack_require__.n(get_own_property_symbols);

// EXTERNAL MODULE: ../node_modules/@babel/runtime-corejs2/core-js/object/keys.js
var object_keys = __webpack_require__("1qCV");
var keys_default = /*#__PURE__*/__webpack_require__.n(object_keys);

// EXTERNAL MODULE: ../node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__("azxR");

// CONCATENATED MODULE: ../node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutPropertiesLoose.js

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};

  var sourceKeys = keys_default()(source);

  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}
// CONCATENATED MODULE: ../node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js


function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key, i;

  if (get_own_property_symbols_default.a) {
    var sourceSymbolKeys = get_own_property_symbols_default()(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__("h74D");

// EXTERNAL MODULE: external "redux"
var external_redux_ = __webpack_require__("rKB8");

// EXTERNAL MODULE: external "redux-thunk"
var external_redux_thunk_ = __webpack_require__("ZSx1");
var external_redux_thunk_default = /*#__PURE__*/__webpack_require__.n(external_redux_thunk_);

// EXTERNAL MODULE: external "redux-logger"
var external_redux_logger_ = __webpack_require__("4DCN");
var external_redux_logger_default = /*#__PURE__*/__webpack_require__.n(external_redux_logger_);

// EXTERNAL MODULE: external "redux-devtools-extension"
var external_redux_devtools_extension_ = __webpack_require__("ufKq");

// EXTERNAL MODULE: ./actions/auth.js
var auth = __webpack_require__("iuBY");

// CONCATENATED MODULE: ./reducers/auth.js








function ownKeys(object, enumerableOnly) { var keys = keys_default()(object); if (get_own_property_symbols_default.a) { var symbols = get_own_property_symbols_default()(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return get_own_property_descriptor_default()(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { Object(defineProperty["a" /* default */])(target, key, source[key]); }); } else if (get_own_property_descriptors_default.a) { define_properties_default()(target, get_own_property_descriptors_default()(source)); } else { ownKeys(source).forEach(function (key) { define_property_default()(target, key, get_own_property_descriptor_default()(source, key)); }); } } return target; }


const auth_initialState = {};

const reducer = (state = auth_initialState, action) => {
  switch (action.type) {
    case auth["a" /* SAVE_AUTH_DATA */]:
      return _objectSpread({}, state, {
        authData: action.authData
      });

    case auth["c" /* SAVE_USER_SESSION */]:
      return _objectSpread({}, state, {
        userSession: action.userSession
      });

    case auth["b" /* SAVE_USER_ID */]:
      return _objectSpread({}, state, {
        identifier: action.identifier
      });

    default:
      return state;
  }
};

/* harmony default export */ var reducers_auth = (reducer);
// EXTERNAL MODULE: ./actions/profile.js
var profile = __webpack_require__("Evix");

// CONCATENATED MODULE: ./reducers/profile.js








function profile_ownKeys(object, enumerableOnly) { var keys = keys_default()(object); if (get_own_property_symbols_default.a) { var symbols = get_own_property_symbols_default()(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return get_own_property_descriptor_default()(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function profile_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { profile_ownKeys(source, true).forEach(function (key) { Object(defineProperty["a" /* default */])(target, key, source[key]); }); } else if (get_own_property_descriptors_default.a) { define_properties_default()(target, get_own_property_descriptors_default()(source)); } else { profile_ownKeys(source).forEach(function (key) { define_property_default()(target, key, get_own_property_descriptor_default()(source, key)); }); } } return target; }


const profile_initialState = {};

const profile_reducer = (state = profile_initialState, action) => {
  switch (action.type) {
    case profile["a" /* SAVE_PROFILE_DATA */]:
      return profile_objectSpread({}, state, {}, action.profile);

    default:
      return state;
  }
};

/* harmony default export */ var reducers_profile = (profile_reducer);
// CONCATENATED MODULE: ./actions/theme.js
const SET_THEME_DATA = 'SET_THEME_DATA';
const setThemeData = theme => {
  return {
    type: SET_THEME_DATA,
    theme: theme
  };
};
// CONCATENATED MODULE: ./reducers/theme.js








function theme_ownKeys(object, enumerableOnly) { var keys = keys_default()(object); if (get_own_property_symbols_default.a) { var symbols = get_own_property_symbols_default()(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return get_own_property_descriptor_default()(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function theme_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { theme_ownKeys(source, true).forEach(function (key) { Object(defineProperty["a" /* default */])(target, key, source[key]); }); } else if (get_own_property_descriptors_default.a) { define_properties_default()(target, get_own_property_descriptors_default()(source)); } else { theme_ownKeys(source).forEach(function (key) { define_property_default()(target, key, get_own_property_descriptor_default()(source, key)); }); } } return target; }


const theme_initialState = {};

const theme_reducer = (state = theme_initialState, action) => {
  switch (action.type) {
    case SET_THEME_DATA:
      return theme_objectSpread({}, state, {}, action.theme);

    default:
      return state;
  }
};

/* harmony default export */ var theme = (theme_reducer);
// CONCATENATED MODULE: ./stores.js







const stores_initialState = {};
const stores_reducer = Object(external_redux_["combineReducers"])({
  auth: reducers_auth,
  profile: reducers_profile,
  theme: theme
});
const initializeStore = (preloadedState = stores_initialState) => {
  return Object(external_redux_["createStore"])(stores_reducer, preloadedState, Object(external_redux_devtools_extension_["composeWithDevTools"])(Object(external_redux_["applyMiddleware"])(external_redux_thunk_default.a, external_redux_logger_default.a)));
};
// EXTERNAL MODULE: ../node_modules/next/app.js
var app = __webpack_require__("o42t");

// CONCATENATED MODULE: ./lib/redux.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return withRedux; });








var __jsx = external_react_default.a.createElement;

function redux_ownKeys(object, enumerableOnly) { var keys = keys_default()(object); if (get_own_property_symbols_default.a) { var symbols = get_own_property_symbols_default()(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return get_own_property_descriptor_default()(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function redux_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { redux_ownKeys(source, true).forEach(function (key) { Object(defineProperty["a" /* default */])(target, key, source[key]); }); } else if (get_own_property_descriptors_default.a) { define_properties_default()(target, get_own_property_descriptors_default()(source)); } else { redux_ownKeys(source).forEach(function (key) { define_property_default()(target, key, get_own_property_descriptor_default()(source, key)); }); } } return target; }





const withRedux = (PageComponent, {
  ssr = true
} = {}) => {
  const WithRedux = (_ref) => {
    let {
      initialReduxState
    } = _ref,
        props = _objectWithoutProperties(_ref, ["initialReduxState"]);

    const store = getOrInitializeStore(initialReduxState);
    return __jsx(external_react_redux_["Provider"], {
      store: store
    }, __jsx(PageComponent, props));
  }; // Make sure people don't use this HOC on _app.js level


  if (false) {} // Set the correct displayName in development


  if (false) {}

  if (ssr || PageComponent.getInitialProps) {
    WithRedux.getInitialProps = async context => {
      // Get or Create the store with `undefined` as initialState
      // This allows you to set a custom default initialState
      const reduxStore = getOrInitializeStore(); // Provide the store to getInitialProps of pages

      context.reduxStore = reduxStore; // Run getInitialProps from HOCed PageComponent

      const pageProps = typeof PageComponent.getInitialProps === 'function' ? await PageComponent.getInitialProps(context) : {}; // Pass props to PageComponent

      return redux_objectSpread({}, pageProps, {
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
    return initializeStore(initialState);
  } // Create store if unavailable on the client and set it on the window object


  if (!reduxStore) {
    reduxStore = initializeStore(initialState);
  }

  return reduxStore;
};

/***/ }),

/***/ "lPnI":
/***/ (function(module, exports) {

module.exports = require("handlebars");

/***/ }),

/***/ "ltjX":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-properties");

/***/ }),

/***/ "o42t":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("6jsY")


/***/ }),

/***/ "pzQc":
/***/ (function(module, exports, __webpack_require__) {

var _Object$assign = __webpack_require__("U8Yc");

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

/***/ "qJj/":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/keys");

/***/ }),

/***/ "rKB8":
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "s20r":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("R2Q7");

/***/ }),

/***/ "s4hn":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("k1wZ");

/***/ }),

/***/ "tvLF":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Z6Kq");

/***/ }),

/***/ "ufKq":
/***/ (function(module, exports) {

module.exports = require("redux-devtools-extension");

/***/ }),

/***/ "wuQJ":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("ltjX");

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "z4BS":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$keys = __webpack_require__("1qCV");

var _Object$defineProperty = __webpack_require__("hHgk");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__("bzos");
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
  if (false) {} // when called from _app `ctx` is nested in `ctx`


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

  if (false) {}

  return props;
}

exports.loadGetInitialProps = loadGetInitialProps;
exports.urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];

function formatWithValidation(url, options) {
  if (false) {}

  return url_1.format(url, options);
}

exports.formatWithValidation = formatWithValidation;
exports.SUPPORTS_PERFORMANCE = typeof performance !== 'undefined';
exports.SUPPORTS_PERFORMANCE_USER_TIMING = exports.SUPPORTS_PERFORMANCE && typeof performance.mark === 'function' && typeof performance.measure === 'function';

/***/ }),

/***/ "zr5I":
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ })

/******/ });