webpackHotUpdate("static/development/pages/dash.js",{

/***/ "./components/sidebar.js":
/*!*******************************!*\
  !*** ./components/sidebar.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "../node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "../node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/promise */ "../node_modules/@babel/runtime-corejs2/core-js/promise.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "../node_modules/react-redux/es/index.js");
/* harmony import */ var fast_json_stable_stringify__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! fast-json-stable-stringify */ "../node_modules/fast-json-stable-stringify/index.js");
/* harmony import */ var fast_json_stable_stringify__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(fast_json_stable_stringify__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _actions_profile__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../actions/profile */ "./actions/profile.js");



var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;





var Sidebar = function Sidebar(_ref) {
  var style = _ref.style,
      name = _ref.name,
      setName = _ref.setName,
      description = _ref.description,
      setDescription = _ref.setDescription,
      avatarUrl = _ref.avatarUrl,
      setAvatarUrl = _ref.setAvatarUrl,
      avatarFile = _ref.avatarFile,
      setAvatarFile = _ref.setAvatarFile,
      accountList = _ref.accountList,
      setAccountList = _ref.setAccountList,
      theme = _ref.theme,
      setTheme = _ref.setTheme,
      themeList = _ref.themeList,
      setThemeList = _ref.setThemeList,
      submit = _ref.submit,
      showProfileSidebar = _ref.showProfileSidebar,
      toggleProfileSidebar = _ref.toggleProfileSidebar;
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useDispatch"])();
  var profile = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"])(function (state) {
    return state.profile;
  });

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(''),
      showNestedSidebar = _useState[0],
      setShowNestedSidebar = _useState[1];

  var readFileAsUrl = function readFileAsUrl(file) {
    var temporaryFileReader = new FileReader();
    return new _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_2___default.a(function (resolve, reject) {
      temporaryFileReader.onload = function () {
        resolve(temporaryFileReader.result);
      };

      temporaryFileReader.readAsDataURL(file);
    });
  };

  var updateAvatarUrl =
  /*#__PURE__*/
  function () {
    var _ref2 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
    /*#__PURE__*/
    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(files) {
      var imgUrl;
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!(files.length > 0)) {
                _context.next = 6;
                break;
              }

              _context.next = 3;
              return readFileAsUrl(files[0]);

            case 3:
              imgUrl = _context.sent;
              setAvatarUrl(imgUrl);
              setAvatarFile(files[0]);

            case 6:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function updateAvatarUrl(_x) {
      return _ref2.apply(this, arguments);
    };
  }();

  var back = function back() {
    var newProfile = {
      name: name,
      description: description,
      avatarUrl: avatarUrl,
      accountList: accountList,
      theme: theme
    }; // if data is not changed, allow user to navigate to main sidebar

    if (fast_json_stable_stringify__WEBPACK_IMPORTED_MODULE_5___default()(profile) === fast_json_stable_stringify__WEBPACK_IMPORTED_MODULE_5___default()(newProfile)) {
      setShowNestedSidebar(false);
    } // else if data is changed, alert user to save or discard their change
    else {
        var x = confirm('There are some changed data that are not saved');

        if (x) {
          dispatch(Object(_actions_profile__WEBPACK_IMPORTED_MODULE_6__["saveProfileData"])(profile));
          setShowNestedSidebar(false);
        }
      }
  };

  var setUserAccount = function setUserAccount(service, identifier) {
    var idx = accountList.findIndex(function (acc) {
      return acc.service === service;
    }); // if identifier is an empty string remove idx

    if (identifier.length === 0) {
      var newAccountList = accountList.slice(0);
      newAccountList.splice(idx, 1);
      setAccountList(newAccountList);
    } else {
      // update the data is service already exist
      if (idx >= 0) {
        var _newAccountList = accountList.slice(0);

        _newAccountList[idx].identifier = identifier;
        setAccountList(_newAccountList);
      } // create the data is service not exist
      else {
          var _newAccountList2 = accountList.slice(0);

          _newAccountList2.push({
            service: service,
            identifier: identifier
          });

          setAccountList(_newAccountList2);
        }
    }
  };

  var getAccount = function getAccount(service) {
    var idx = accountList.findIndex(function (acc) {
      return acc.service === service;
    });

    if (idx >= 0) {
      return accountList[idx].identifier;
    }

    return '';
  };

  var isSelectedTheme = function isSelectedTheme(name) {
    if (theme.name === name) {
      return true;
    }

    return false;
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, __jsx("div", {
    className: "fixed top-0 right-0 bottom-0 w-10/12 md:w-4/12 lg:w-3/12 bg-white shadow-xl",
    style: {
      transform: "translate3d(".concat(showProfileSidebar ? 0 : "100%", ", 0, 0)"),
      transition: "all .3s"
    }
  }, showProfileSidebar && __jsx("div", {
    className: "absolute z-10 bg-black rounded-full p-2",
    onClick: function onClick() {
      return toggleProfileSidebar();
    },
    style: {
      width: "32px",
      height: "32px",
      left: "-16px",
      top: "16px"
    }
  }, __jsx("svg", {
    width: "100%",
    height: "100%",
    viewBox: "0 0 32 32",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, __jsx("path", {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M16.0002 18.8285L7.41436 27.4142L4.58594 24.5858L13.1717 16L4.58594 7.41424L7.41436 4.58582L16.0002 13.1716L24.5859 4.58582L27.4144 7.41424L18.8286 16L27.4144 24.5858L24.5859 27.4142L16.0002 18.8285V18.8285Z",
    fill: "white"
  }))), __jsx("div", {
    className: "relative h-full w-full overflow-x-hidden overflow-y-scroll"
  }, __jsx("div", {
    className: "absolute top-0 right-0 bottom-0 w-full bg-white py-12 px-4",
    style: {
      transform: "translate3d(".concat(!showNestedSidebar ? 0 : "-100%", ", 0, 0)"),
      transition: "all .3s"
    }
  }, __jsx("div", {
    className: "h-10 flex items-center"
  }, __jsx("p", {
    className: "text-2xl text-gray-900 font-semibold"
  }, "Edit Your Site")), __jsx("div", {
    className: "py-8"
  }, __jsx("div", {
    onClick: function onClick() {
      return setShowNestedSidebar('profile');
    },
    className: "cursor-pointer h-12 flex items-center justify-between border-solid border-b border-t border-gray-300"
  }, __jsx("p", {
    className: "text-lg text-gray-800 w-1/2 font-medium"
  }, "Profile "), __jsx("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 16 16",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, __jsx("path", {
    fill: "#a0aec0",
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M9.58586 8.00001L4.29297 2.70712L5.70718 1.29291L12.4143 8.00001L5.70718 14.7071L4.29297 13.2929L9.58586 8.00001Z"
  }))), __jsx("div", {
    onClick: function onClick() {
      return setShowNestedSidebar('social');
    },
    className: "cursor-pointer h-12 flex items-center justify-between border-solid border-b border-gray-300"
  }, __jsx("p", {
    className: "text-lg text-gray-800 w-1/2 font-medium"
  }, "Social"), __jsx("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 16 16",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, __jsx("path", {
    fill: "#a0aec0",
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M9.58586 8.00001L4.29297 2.70712L5.70718 1.29291L12.4143 8.00001L5.70718 14.7071L4.29297 13.2929L9.58586 8.00001Z"
  }))), __jsx("div", {
    onClick: function onClick() {
      return setShowNestedSidebar('theme');
    },
    className: "cursor-pointer h-12 flex items-center justify-between border-solid border-b border-gray-300"
  }, __jsx("p", {
    className: "text-lg text-gray-800 w-1/2 font-medium"
  }, "Theme"), __jsx("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 16 16",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, __jsx("path", {
    fill: "#a0aec0",
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M9.58586 8.00001L4.29297 2.70712L5.70718 1.29291L12.4143 8.00001L5.70718 14.7071L4.29297 13.2929L9.58586 8.00001Z"
  }))))), __jsx("div", {
    className: "absolute top-0 right-0 bottom-0 w-full bg-white px-4",
    style: {
      transform: "translate3d(".concat(showNestedSidebar ? 0 : "100%", ", 0, 0)"),
      transition: "all .3s"
    }
  }, __jsx("div", {
    className: "flex h-10 items-center justify-between"
  }, __jsx("div", {
    onClick: function onClick() {
      return back();
    }
  }, __jsx("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 16 16",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, __jsx("path", {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M11.707 13.2929L10.2928 14.7071L3.58569 8.00001L10.2928 1.29291L11.707 2.70712L6.41412 8.00001L11.707 13.2929Z",
    fill: "black"
  }))), __jsx("div", {
    onClick: function onClick(e) {
      return submit(e);
    }
  }, __jsx("button", {
    className: "text-md px-2 py-1 border rounded"
  }, "Save"))), showNestedSidebar === 'profile' && __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, __jsx("div", {
    className: "mb-4"
  }, __jsx("div", {
    className: "relative"
  }, __jsx("label", null, "Avatar"), __jsx("input", {
    className: "absolute inset-0 opacity-0 w-full",
    type: "file",
    onChange: function onChange(e) {
      return updateAvatarUrl(e.target.files);
    }
  }), __jsx("div", {
    className: "border-solid border rounded-sm border-gray-300",
    style: {
      height: "200px",
      width: "100%",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundImage: "url(".concat(avatarUrl, ")")
    }
  }))), __jsx("div", {
    className: "mb-4"
  }, __jsx("div", {
    className: "px-3 py-1 flex flex-col border-solid border rounded-sm border-gray-300"
  }, __jsx("label", {
    className: "text-xs font-light text-gray-600"
  }, "Name"), __jsx("input", {
    placeholder: "Your name",
    className: "focus:outline-none",
    type: "text",
    value: name,
    onChange: function onChange(e) {
      return setName(e.target.value);
    }
  }))), __jsx("div", {
    className: "mb-4"
  }, __jsx("div", {
    className: "px-3 py-1 flex flex-col border-solid border rounded-sm border-gray-300"
  }, __jsx("label", {
    className: "text-xs font-light text-gray-600"
  }, "Description"), __jsx("textarea", {
    placeholder: "Tell the world about yourself",
    rows: 8,
    className: "focus:outline-none resize-none",
    value: description,
    onChange: function onChange(e) {
      return setDescription(e.target.value);
    }
  })))), showNestedSidebar === 'social' && __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, __jsx("div", {
    className: "mb-4"
  }, __jsx("div", {
    className: "px-3 py-1 flex flex-col border-solid border rounded-sm border-gray-300"
  }, __jsx("label", {
    className: "text-xs font-light text-gray-600"
  }, "facebook.com/"), __jsx("input", {
    placeholder: "username",
    className: "focus:outline-none",
    type: "text",
    value: getAccount('facebook'),
    onChange: function onChange(e) {
      return setUserAccount('facebook', e.target.value);
    }
  }))), __jsx("div", {
    className: "mb-4"
  }, __jsx("div", {
    className: "px-3 py-1 flex flex-col border-solid border rounded-sm border-gray-300"
  }, __jsx("label", {
    className: "text-xs font-light text-gray-600"
  }, "twitter.com/"), __jsx("input", {
    placeholder: "username",
    className: "focus:outline-none",
    type: "text",
    value: getAccount('twitter'),
    onChange: function onChange(e) {
      return setUserAccount('twitter', e.target.value);
    }
  }))), __jsx("div", {
    className: "mb-4"
  }, __jsx("div", {
    className: "px-3 py-1 flex flex-col border-solid border rounded-sm border-gray-300"
  }, __jsx("label", {
    className: "text-xs font-light text-gray-600"
  }, "instagram.com/"), __jsx("input", {
    placeholder: "username",
    className: "focus:outline-none",
    type: "text",
    value: getAccount('instagram'),
    onChange: function onChange(e) {
      return setUserAccount('instagram', e.target.value);
    }
  })))), showNestedSidebar === 'theme' && __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, themeList.map(function (theme) {
    return __jsx("div", {
      className: "mb-4"
    }, __jsx("div", {
      onClick: function onClick() {
        return setTheme(theme);
      }
    }, __jsx("label", null, theme.name), __jsx("div", {
      className: "relative border-solid border rounded-sm border-gray-300",
      style: {
        height: "200px",
        width: "100%",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundImage: "url(".concat(avatarUrl, ")")
      }
    }, isSelectedTheme(theme.name) && __jsx("div", {
      className: "absolute inset-0 flex items-center justify-center",
      style: {
        backgroundColor: "rgba(0,0,0,0.3)"
      }
    }, __jsx("p", {
      className: "text-gray-200"
    }, "Selected")))));
  }))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Sidebar);

/***/ })

})
//# sourceMappingURL=dash.js.dd7473ef580fd69b0296.hot-update.js.map