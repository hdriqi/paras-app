webpackHotUpdate("static/development/pages/dash.js",{

/***/ "./components/meta.js":
false,

/***/ "./pages/dash.js":
/*!***********************!*\
  !*** ./pages/dash.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "../node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/array/is-array */ "../node_modules/@babel/runtime-corejs2/core-js/array/is-array.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "../node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "../node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/promise */ "../node_modules/@babel/runtime-corejs2/core-js/promise.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/head */ "../node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/router */ "../node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-redux */ "../node_modules/react-redux/es/index.js");
/* harmony import */ var react_frame_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-frame-component */ "../node_modules/react-frame-component/lib/index.js");
/* harmony import */ var react_frame_component__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_frame_component__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _lib_redux__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../lib/redux */ "./lib/redux.js");
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/layout */ "./components/layout.js");
/* harmony import */ var _components_nav__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/nav */ "./components/nav.js");
/* harmony import */ var _components_sidebar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/sidebar */ "./components/sidebar.js");
/* harmony import */ var _components_loggedIn__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/loggedIn */ "./components/loggedIn.js");
/* harmony import */ var _components_onboarding__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../components/onboarding */ "./components/onboarding.js");
/* harmony import */ var _components_loading__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../components/loading */ "./components/loading.js");
/* harmony import */ var _actions_auth__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../actions/auth */ "./actions/auth.js");
/* harmony import */ var _actions_profile__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../actions/profile */ "./actions/profile.js");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../api */ "./api/index.js");
/* harmony import */ var anchorme__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! anchorme */ "../node_modules/anchorme/dist-node/index.js");
/* harmony import */ var anchorme__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(anchorme__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var handlebars__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! handlebars */ "../node_modules/handlebars/dist/cjs/handlebars.js");
/* harmony import */ var handlebars__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(handlebars__WEBPACK_IMPORTED_MODULE_21__);





var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;


















var readFileAsBuffer = function readFileAsBuffer(file) {
  var temporaryFileReader = new FileReader();
  return new _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_4___default.a(function (resolve, reject) {
    temporaryFileReader.onload = function () {
      resolve(temporaryFileReader.result);
    };

    temporaryFileReader.readAsArrayBuffer(file);
  });
};

var Dashboard = function Dashboard() {
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_8__["useDispatch"])();
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_7__["useRouter"])();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(''),
      name = _useState[0],
      setName = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(''),
      description = _useState2[0],
      setDescription = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(''),
      avatarUrl = _useState3[0],
      setAvatarUrl = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(''),
      avatarFile = _useState4[0],
      setAvatarFile = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])([]),
      accountList = _useState5[0],
      setAccountList = _useState5[1];

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])([]),
      themeList = _useState6[0],
      setThemeList = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(''),
      theme = _useState7[0],
      setTheme = _useState7[1];

  var _useState8 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(''),
      identifier = _useState8[0],
      setIdentifier = _useState8[1];

  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(''),
      template = _useState9[0],
      setTemplate = _useState9[1];

  var _useState10 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(''),
      submitState = _useState10[0],
      setSubmitState = _useState10[1];

  var _useState11 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(true),
      loadingState = _useState11[0],
      setLoadingState = _useState11[1];

  var authData = Object(react_redux__WEBPACK_IMPORTED_MODULE_8__["useSelector"])(function (state) {
    return state.auth.authData;
  });
  var profile = Object(react_redux__WEBPACK_IMPORTED_MODULE_8__["useSelector"])(function (state) {
    return state.profile;
  });

  var _useState12 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(false),
      showProfileSidebar = _useState12[0],
      setShowProfileSidebar = _useState12[1];

  var _useState13 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(true),
      showOnboarding = _useState13[0],
      setShowOnboarding = _useState13[1];

  var logout =
  /*#__PURE__*/
  function () {
    var _ref = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])(
    /*#__PURE__*/
    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee() {
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _api__WEBPACK_IMPORTED_MODULE_19__["blockstackAPI"].session.signUserOut();

            case 2:
              dispatch(Object(_actions_auth__WEBPACK_IMPORTED_MODULE_17__["saveAuthData"])(null));

            case 3:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function logout() {
      return _ref.apply(this, arguments);
    };
  }();

  var submit =
  /*#__PURE__*/
  function () {
    var _ref2 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])(
    /*#__PURE__*/
    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee2(e, onboarding) {
      var newProfile, buff, newAvatarUrl, newData, newId, _newId;

      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              e.preventDefault();
              setSubmitState('pending');
              _context2.prev = 2;
              newProfile = {
                name: name,
                description: description,
                avatarUrl: avatarUrl,
                accountList: accountList,
                theme: theme
              };

              if (!avatarFile) {
                _context2.next = 12;
                break;
              }

              _context2.next = 7;
              return readFileAsBuffer(avatarFile);

            case 7:
              buff = _context2.sent;
              _context2.next = 10;
              return _api__WEBPACK_IMPORTED_MODULE_19__["blockstackAPI"].session.putFile('avatar.png', buff, {
                encrypt: false
              });

            case 10:
              newAvatarUrl = _context2.sent;
              newProfile.avatarUrl = newAvatarUrl;

            case 12:
              if (!onboarding) {
                _context2.next = 20;
                break;
              }

              newData = {
                identifier: identifier,
                blockstackId: authData.username,
                profile: newProfile
              };
              newId = new _api__WEBPACK_IMPORTED_MODULE_19__["IdentifierAPI"](newData);
              _context2.next = 17;
              return newId.save();

            case 17:
              dispatch(Object(_actions_auth__WEBPACK_IMPORTED_MODULE_17__["saveUserId"])(identifier));
              _context2.next = 26;
              break;

            case 20:
              _context2.next = 22;
              return _api__WEBPACK_IMPORTED_MODULE_19__["IdentifierAPI"].findOne({
                identifier: identifier
              });

            case 22:
              _newId = _context2.sent;

              _newId.update({
                profile: newProfile
              });

              _context2.next = 26;
              return _newId.save();

            case 26:
              dispatch(Object(_actions_profile__WEBPACK_IMPORTED_MODULE_18__["saveProfileData"])(newProfile));
              setSubmitState('fulfilled');
              _context2.next = 33;
              break;

            case 30:
              _context2.prev = 30;
              _context2.t0 = _context2["catch"](2);
              setSubmitState('rejected');

            case 33:
              setTimeout(function () {
                setSubmitState('');
              }, 1000);

            case 34:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[2, 30]]);
    }));

    return function submit(_x, _x2) {
      return _ref2.apply(this, arguments);
    };
  }();

  Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(function () {
    var checkAuthData =
    /*#__PURE__*/
    function () {
      var _ref3 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee3() {
        var getAuthData, id;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                if (!_api__WEBPACK_IMPORTED_MODULE_19__["blockstackAPI"].session.isUserSignedIn()) {
                  _context3.next = 13;
                  break;
                }

                if (authData) {
                  _context3.next = 6;
                  break;
                }

                _context3.next = 4;
                return _api__WEBPACK_IMPORTED_MODULE_19__["blockstackAPI"].session.loadUserData();

              case 4:
                getAuthData = _context3.sent;
                dispatch(Object(_actions_auth__WEBPACK_IMPORTED_MODULE_17__["saveAuthData"])(getAuthData));

              case 6:
                _context3.next = 8;
                return _api__WEBPACK_IMPORTED_MODULE_19__["IdentifierAPI"].findOne({
                  identifier: identifier
                });

              case 8:
                id = _context3.sent;

                if (id) {
                  setShowOnboarding(false);
                  dispatch(Object(_actions_profile__WEBPACK_IMPORTED_MODULE_18__["saveProfileData"])(id.attrs.profile));
                  dispatch(Object(_actions_auth__WEBPACK_IMPORTED_MODULE_17__["saveUserId"])(id.attrs.identifier));
                }

                setTimeout(function () {
                  setLoadingState(false);
                }, 500);
                _context3.next = 14;
                break;

              case 13:
                router.replace('/login');

              case 14:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      return function checkAuthData() {
        return _ref3.apply(this, arguments);
      };
    }();

    checkAuthData();

    var fetchThemeList =
    /*#__PURE__*/
    function () {
      var _ref4 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee4() {
        var response;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return _api__WEBPACK_IMPORTED_MODULE_19__["themeAPI"].fetch();

              case 2:
                response = _context4.sent;
                setThemeList(response.data.data);

              case 4:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }));

      return function fetchThemeList() {
        return _ref4.apply(this, arguments);
      };
    }();

    fetchThemeList();
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(function () {
    if (profile.name) {
      setName(profile.name);
    }

    if (profile.description) {
      setDescription(profile.description);
    }

    if (_babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_1___default()(profile.accountList)) {
      var cloneAccountList = JSON.parse(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(profile.accountList));
      setAccountList(cloneAccountList);
    }

    if (profile.avatarUrl) {
      setAvatarUrl(profile.avatarUrl);
    }

    if (profile.theme) {
      var cloneTheme = JSON.parse(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(profile.theme));
      setTheme(cloneTheme);
    }
  }, [profile]);
  Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(function () {
    var currentData = JSON.parse(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()({
      name: name,
      description: description,
      avatarUrl: avatarUrl,
      accountList: accountList
    }));

    if (currentData.description) {
      currentData.description = anchorme__WEBPACK_IMPORTED_MODULE_20___default()(currentData.description, {
        attributes: [{
          name: "target",
          value: "_blank"
        }]
      });
    }

    if (theme) {
      var path = 'index';
      var page = theme.templatePage.find(function (page) {
        return page.path === path;
      });
      var compiled = handlebars__WEBPACK_IMPORTED_MODULE_21___default.a.compile(page.template || '')(currentData);
      setTemplate(compiled);
    }
  }, [theme, name, description, avatarUrl, accountList]);

  var toggleProfileSidebar = function toggleProfileSidebar() {
    setShowProfileSidebar(!showProfileSidebar);
  };

  return __jsx(_components_layout__WEBPACK_IMPORTED_MODULE_11__["default"], null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_6___default.a, null, __jsx("title", null, "Dashboard | Paras"), __jsx("link", {
    rel: "icon",
    href: "/favicon.ico"
  })), __jsx(_components_loggedIn__WEBPACK_IMPORTED_MODULE_14__["default"], null), loadingState && __jsx(_components_loading__WEBPACK_IMPORTED_MODULE_16__["default"], null), __jsx(_components_nav__WEBPACK_IMPORTED_MODULE_12__["default"], {
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
  }), __jsx(react_frame_component__WEBPACK_IMPORTED_MODULE_9___default.a, {
    className: "w-screen",
    style: {
      height: "calc(100vh - 2.5rem)"
    }
  }, __jsx("div", {
    dangerouslySetInnerHTML: {
      __html: template
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(_lib_redux__WEBPACK_IMPORTED_MODULE_10__["withRedux"])(Dashboard));

/***/ })

})
//# sourceMappingURL=dash.js.dabda3d8db24f8c654b3.hot-update.js.map