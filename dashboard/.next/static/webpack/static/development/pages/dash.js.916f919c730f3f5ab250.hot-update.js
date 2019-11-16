webpackHotUpdate("static/development/pages/dash.js",{

/***/ "./components/nav.js":
/*!***************************!*\
  !*** ./components/nav.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "../node_modules/react-redux/es/index.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var identifier = '';

var Nav = function Nav(_ref) {
  var toggleProfileSidebar = _ref.toggleProfileSidebar;
  var authData = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(function (state) {
    return state.auth.authData;
  });

  if (authData) {
    identifier = authData.username.split('.')[0];
  }

  return __jsx("nav", {
    className: "h-10 border-bottom"
  }, __jsx("div", {
    className: "h-full w-full max-w-6xl relative mx-auto px-4"
  }, __jsx("ul", {
    className: "h-full flex items-center justify-between"
  }, __jsx("li", null, __jsx("a", {
    className: "text-blue-500 hover:text-blue-800"
  }, identifier, ".paras.id")), __jsx("li", null, __jsx("a", {
    onClick: function onClick() {
      return toggleProfileSidebar();
    },
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

/***/ })

})
//# sourceMappingURL=dash.js.916f919c730f3f5ab250.hot-update.js.map