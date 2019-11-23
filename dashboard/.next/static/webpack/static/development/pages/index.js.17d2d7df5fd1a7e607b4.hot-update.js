webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "../node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "../node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _lib_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/redux */ "./lib/redux.js");
/* harmony import */ var _components_meta__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/meta */ "./components/meta.js");
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/layout */ "./components/layout.js");
/* harmony import */ var _components_landingNav__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/landingNav */ "./components/landingNav.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








var Home = function Home() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0),
      timeElapsed = _useState[0],
      setTimeElapsed = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    setTimeout(function () {
      setTimeElapsed(timeElapsed + 1);
    }, 1000);
  }, [timeElapsed]);
  return __jsx("div", null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, null, __jsx("title", null, "Paras | Decentralized Personal Website")), __jsx(_components_meta__WEBPACK_IMPORTED_MODULE_4__["default"], null), __jsx(_components_layout__WEBPACK_IMPORTED_MODULE_5__["default"], null, __jsx(_components_landingNav__WEBPACK_IMPORTED_MODULE_6__["default"], null), __jsx("div", null, __jsx("div", {
    id: "home",
    className: "flex items-center mb-24 md:max-w-4xl xl:max-w-6xl m-auto px-4",
    style: {
      minHeight: '90vh'
    }
  }, __jsx("div", {
    className: "md:w-1/2"
  }, __jsx("p", {
    className: "text-3xl text-gray-900 font-semibold mb-2"
  }, "Your Decentralized Personal Website"), __jsx("p", {
    className: "text-xl text-gray-600"
  }, "Create your own personal website in a minute."), __jsx("p", {
    className: "text-xl text-gray-600 mb-8"
  }, "Zero Config. Zero Headache."), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/login"
  }, __jsx("button", {
    className: "bg-gray-900 text-white text-lg border-solid border-2 rounded-lg border-gray-900 px-4 py-1 font-medium"
  }, "Create now")))), __jsx("div", {
    className: "pt-16 pb-32 bg-gray-900 relative"
  }, __jsx("div", {
    className: "absolute bg-gray-900",
    style: {
      transform: "skew(0, -3deg)",
      height: "150px",
      width: "100%",
      zIndex: "-1",
      top: "-75px"
    }
  }), __jsx("div", {
    className: "max-w-2xl m-auto px-4"
  }, __jsx("p", {
    className: "text-lg text-white font-medium"
  }, "Paras helps you to create personal landing page in just a minute, super fast without hassle. We remove the complicated part of website builder, leaving only a few important options for you to set up your personal site. Tell the world who you are and just pick one from various available theme. That\u2019s it!"))), __jsx("div", {
    id: "features",
    className: "py-32"
  }, __jsx("div", null, __jsx("div", {
    className: "max-w-2xl m-auto flex flex-wrap items-center md:flex-row-reverse pb-16 px-4"
  }, __jsx("div", {
    className: "w-full md:w-2/5 pb-4"
  }, __jsx("img", {
    src: "/beauty.jpg",
    className: "m-auto h-64"
  })), __jsx("div", {
    className: "w-full md:w-3/5"
  }, __jsx("p", {
    className: "text-lg text-gray-900 font-semibold mb-2"
  }, "Beauty by Default"), __jsx("p", {
    className: "text-gray-600"
  }, "Every theme built on Paras is modern, eye-catching and fully responsive. Means that no matter which device open your website, it will automatically adapts to the screen and present your beautiful website."))), __jsx("div", {
    className: "max-w-2xl m-auto flex flex-wrap items-center pb-16 px-4"
  }, __jsx("div", {
    className: "w-full md:w-2/5 pb-4"
  }, __jsx("img", {
    src: "/fast.jpg",
    className: "m-auto h-64"
  })), __jsx("div", {
    className: "w-full md:w-3/5"
  }, __jsx("p", {
    className: "text-lg text-gray-900 font-semibold mb-2"
  }, "Fast at Everything"), __jsx("p", {
    className: "text-gray-600"
  }, "Create your own personal landing page in just a minute, zero configuration needed! But that\u2019s not the only thing we excel at, your website load will also be blazingly fast and SEO friendly."))), __jsx("div", {
    className: "max-w-2xl m-auto flex flex-wrap items-center md:flex-row-reverse pb-16 px-4"
  }, __jsx("div", {
    className: "w-full md:w-2/5 pb-4"
  }, __jsx("img", {
    src: "/secure.jpg",
    className: "m-auto h-64"
  })), __jsx("div", {
    className: "w-full md:w-3/5"
  }, __jsx("p", {
    className: "text-lg text-gray-900 font-semibold mb-2"
  }, "Decentralized Data Ownership"), __jsx("p", {
    className: "text-gray-600"
  }, "By leveraging decentralized data storage by Blockstack, your website will be stored in decentralized manner which means you fully own your data and your website can work even without our service."))))), __jsx("div", {
    className: "pt-16 bg-gray-900 relative"
  }, __jsx("div", {
    className: "absolute bg-gray-900",
    style: {
      transform: "skew(0, -3deg)",
      height: "200px",
      width: "100%",
      zIndex: "-1",
      top: "-100px"
    }
  }), __jsx("div", {
    className: "max-w-2xl m-auto px-4"
  }, __jsx("p", {
    className: "text-lg text-white font-medium mb-8 text-center"
  }, "Alright you already spend ", timeElapsed, " secs on this page, in the next 60 secs we better use it to create your own personal website. Only a minute and we\u2019re done."), __jsx("div", {
    className: "text-center"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/login"
  }, __jsx("button", {
    className: "text-lg bg-white text-gray-900 border-solid border-2 rounded-lg border-white px-4 py-1 font-semibold"
  }, "Let's Get It Done!")))), __jsx("div", {
    className: "md:max-w-4xl xl:max-w-6xl m-auto px-4 py-4 mt-32"
  }, __jsx("div", null, __jsx("p", {
    className: "text-center text-lg text-gray-400 font-medium mb-4"
  }, "Paras \xA9 2019")))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(_lib_redux__WEBPACK_IMPORTED_MODULE_3__["withRedux"])(Home));

/***/ })

})
//# sourceMappingURL=index.js.17d2d7df5fd1a7e607b4.hot-update.js.map