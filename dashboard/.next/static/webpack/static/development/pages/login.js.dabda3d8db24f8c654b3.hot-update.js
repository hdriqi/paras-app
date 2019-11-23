webpackHotUpdate("static/development/pages/login.js",{

/***/ "./components/meta.js":
false,

/***/ "./pages/login.js":
/*!************************!*\
  !*** ./pages/login.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "../node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "../node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "../node_modules/react-redux/es/index.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ "../node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "../node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _lib_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../lib/redux */ "./lib/redux.js");
/* harmony import */ var _actions_auth__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../actions/auth */ "./actions/auth.js");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../api */ "./api/index.js");
/* harmony import */ var radiks__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! radiks */ "../node_modules/radiks/lib/index.js");
/* harmony import */ var radiks__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(radiks__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/layout */ "./components/layout.js");
/* harmony import */ var _components_login__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/login */ "./components/login.js");
/* harmony import */ var _components_landingNav__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/landingNav */ "./components/landingNav.js");


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;












var LoginPage = function LoginPage() {
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"])();
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_5__["useRouter"])();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(''),
      loginState = _useState[0],
      setLoginState = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    var checkAuthData =
    /*#__PURE__*/
    function () {
      var _ref = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var authData, _authData;

        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!_api__WEBPACK_IMPORTED_MODULE_8__["blockstackAPI"].session.isUserSignedIn()) {
                  _context.next = 9;
                  break;
                }

                setLoginState('pending');
                authData = _api__WEBPACK_IMPORTED_MODULE_8__["blockstackAPI"].session.loadUserData();
                _context.next = 5;
                return radiks__WEBPACK_IMPORTED_MODULE_9__["User"].createWithCurrentUser();

              case 5:
                dispatch(Object(_actions_auth__WEBPACK_IMPORTED_MODULE_7__["saveAuthData"])(authData));
                router.push('/dash');
                _context.next = 18;
                break;

              case 9:
                if (!_api__WEBPACK_IMPORTED_MODULE_8__["blockstackAPI"].session.isSignInPending()) {
                  _context.next = 18;
                  break;
                }

                setLoginState('pending');
                _context.next = 13;
                return _api__WEBPACK_IMPORTED_MODULE_8__["blockstackAPI"].session.handlePendingSignIn();

              case 13:
                _authData = _context.sent;
                _context.next = 16;
                return radiks__WEBPACK_IMPORTED_MODULE_9__["User"].createWithCurrentUser();

              case 16:
                dispatch(Object(_actions_auth__WEBPACK_IMPORTED_MODULE_7__["saveAuthData"])(_authData));
                router.push('/dash');

              case 18:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function checkAuthData() {
        return _ref.apply(this, arguments);
      };
    }();

    checkAuthData();
  }, []);
  return __jsx(_components_layout__WEBPACK_IMPORTED_MODULE_10__["default"], null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_4___default.a, null, __jsx("title", null, "Login | Paras")), __jsx(Meta, null), __jsx(_components_landingNav__WEBPACK_IMPORTED_MODULE_12__["default"], null), __jsx(_components_login__WEBPACK_IMPORTED_MODULE_11__["default"], {
    loginState: loginState
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(_lib_redux__WEBPACK_IMPORTED_MODULE_6__["withRedux"])(LoginPage));

/***/ })

})
//# sourceMappingURL=login.js.dabda3d8db24f8c654b3.hot-update.js.map