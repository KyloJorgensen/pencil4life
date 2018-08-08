(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[6],{

/***/ "./client/src/components/user/login-page.tsx":
/*!***************************************************!*\
  !*** ./client/src/components/user/login-page.tsx ***!
  \***************************************************/
/*! exports provided: LoginPageWrapper, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageWrapper", function() { return LoginPageWrapper; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var object_path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! object-path */ "./node_modules/object-path/index.js");
/* harmony import */ var object_path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(object_path__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var _utilities_styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utilities/styled.components */ "./client/src/components/utilities/styled.components.tsx");
/* harmony import */ var _user_provider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user-provider */ "./client/src/components/user/user-provider.tsx");

var __makeTemplateObject = (undefined && undefined.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();






var LoginPageWrapper = _utilities_styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\t.login-container {\n\t\tmax-width: 300px;\n\t\tinput {\n\t\t\twidth: 100%;\n\t\t}\n\t}\n\t@media (min-width: 300px) {\n\t\tposition: relative;\n\t\ttop: 50%;\n\t\tleft: 50%;\n\n\t\t.login-container {\n\t\t\ttransform: translate(-50%, -50%);\n\t\t}\n\t}\n"], ["\n\t.login-container {\n\t\tmax-width: 300px;\n\t\tinput {\n\t\t\twidth: 100%;\n\t\t}\n\t}\n\t@media (min-width: 300px) {\n\t\tposition: relative;\n\t\ttop: 50%;\n\t\tleft: 50%;\n\n\t\t.login-container {\n\t\t\ttransform: translate(-50%, -50%);\n\t\t}\n\t}\n"])));
var LoginPage = /** @class */ (function (_super) {
    __extends(LoginPage, _super);
    function LoginPage(props) {
        var _this = _super.call(this, props) || this;
        _this.emailRef = react__WEBPACK_IMPORTED_MODULE_0__["createRef"]();
        _this.passwordRef = react__WEBPACK_IMPORTED_MODULE_0__["createRef"]();
        _this.state = {
            badAuth: false,
            loading: false,
        };
        _this.hitKey = _this.hitKey.bind(_this);
        _this.login = _this.login.bind(_this);
        _this.loginResult = _this.loginResult.bind(_this);
        return _this;
    }
    LoginPage.prototype.hitKey = function (event) {
        if (event.key == 'Enter') {
            this.login(event);
        }
    };
    LoginPage.prototype.login = function (event) {
        event.preventDefault();
        var email, password;
        var invalid = null;
        // Validate email
        if (this.emailRef.current.value) {
            email = this.emailRef.current.value;
        }
        else {
            invalid = invalid || {};
            invalid.email = {
                message: "Email is Required"
            };
        }
        // Validate password
        if (this.passwordRef.current.value) {
            password = this.passwordRef.current.value;
        }
        else {
            invalid = invalid || {};
            invalid.password = {
                message: "Password is Required"
            };
        }
        if (invalid) {
            this.emailRef.current.value = '';
            this.passwordRef.current.value = '';
            this.setState(function () {
                return { badAuth: true };
            });
            return;
        }
        this.setState(function () {
            return {
                badAuth: false,
                loading: true,
            };
        });
        // Login in with vaildated email and password
        this.props.user.login(email, password, this.loginResult);
    };
    LoginPage.prototype.loginResult = function (result) {
        if (!result) {
            this.emailRef.current.value = '';
            this.passwordRef.current.value = '';
            this.setState(function () {
                return { badAuth: true };
            });
        }
        else {
            this.setState(function () {
                return { badAuth: true };
            });
        }
    };
    LoginPage.prototype.render = function () {
        var _a = this, emailRef = _a.emailRef, passwordRef = _a.passwordRef, hitKey = _a.hitKey, login = _a.login;
        var _b = this.state, badAuth = _b.badAuth, loading = _b.loading;
        var _c = this.props.user, userAccess = _c.userAccess, admin = _c.admin;
        if (userAccess || admin) {
            if (object_path__WEBPACK_IMPORTED_MODULE_1__["has"](this, 'props.location.state.redirectPath')) {
                if (this.props.location.state.redirectPath) {
                    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Redirect"], { to: this.props.location.state.redirectPath }));
                }
            }
            return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Redirect"], { to: '/' }));
        }
        return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](LoginPageWrapper, null,
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "login-container" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "login-login-form", onSubmit: login },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_2__["NavLink"], { to: '/login' },
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h2", null, "Login")),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("label", { htmlFor: "email" },
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("b", null, "Email:")),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", null,
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("input", { type: "text", onKeyPress: hitKey, placeholder: "coolhats@example.com", name: "email", ref: emailRef, autoComplete: 'email', required: true }),
                        badAuth ? (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", { className: "errortext" }, "* Required")) : ''),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("label", { htmlFor: "password" },
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("b", null, "Password:")),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", null,
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("input", { type: "password", onKeyPress: hitKey, placeholder: "Enter Password", name: "password", ref: passwordRef, autoComplete: 'password', required: true }),
                        badAuth ? (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", { className: "errortext" }, "* Required")) : ''),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("input", { type: "submit", onClick: login, value: "LOGIN" })),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", null,
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], { className: "btn", to: '/forgotpassword' }, "Forgot Password"),
                    "or ",
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], { className: "btn", to: '/signup' }, "Signup"))),
            loading ? (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utilities_styled_components__WEBPACK_IMPORTED_MODULE_3__["Popout"], null,
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", null,
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utilities_styled_components__WEBPACK_IMPORTED_MODULE_3__["LoadingSpinner"], null)))) : ''));
    };
    return LoginPage;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]));
;
/* harmony default export */ __webpack_exports__["default"] = (Object(_user_provider__WEBPACK_IMPORTED_MODULE_4__["userConsumer"])(Object(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["withRouter"])(LoginPage)));
var templateObject_1;


/***/ }),

/***/ "./client/src/components/utilities/styled.components.tsx":
/*!***************************************************************!*\
  !*** ./client/src/components/utilities/styled.components.tsx ***!
  \***************************************************************/
/*! exports provided: css, injectGlobal, keyframes, ThemeProvider, default, defaultTheme, Popout, LoadingSpinner */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "css", function() { return css; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "injectGlobal", function() { return injectGlobal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "keyframes", function() { return keyframes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemeProvider", function() { return ThemeProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultTheme", function() { return defaultTheme; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Popout", function() { return Popout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingSpinner", function() { return LoadingSpinner; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.es.js");

var __makeTemplateObject = (undefined && undefined.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

var _a = styled_components__WEBPACK_IMPORTED_MODULE_0__, styled = _a.default, css = _a.css, injectGlobal = _a.injectGlobal, keyframes = _a.keyframes, ThemeProvider = _a.ThemeProvider;

/* harmony default export */ __webpack_exports__["default"] = (styled);
var defaultTheme = {
    primaryColor: '#172B57',
    primaryColorInverted: '#4d5f86',
    blue: '#002157',
    darkblue: '#172B57',
    lightblue: '#3B5CA3',
    highlightblue: '#4d5f86',
    gray: 'gray',
};
var Popout = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\tcolor: white;\n\tposition: fixed;\n\ttop: 0;\n\tbottom: 0;\n\tleft: 0;\n\tright: 0;\n\tbackground: rgba(0, 0, 0, 0.85);\n\tz-index: 10000;\n\t> * {\n\t\tposition: relative;\n\t\ttop: 50%;\n\t\tleft: 50%;\n\t\ttransform: translate(-50%, -50%);\n\t\tmargin: 0;\n\t\toverflow: auto;    \n\t\tmax-height: 100%;\n\t\tpadding: 2em 0;\n\t}\n\t\n"], ["\n\tcolor: white;\n\tposition: fixed;\n\ttop: 0;\n\tbottom: 0;\n\tleft: 0;\n\tright: 0;\n\tbackground: rgba(0, 0, 0, 0.85);\n\tz-index: 10000;\n\t> * {\n\t\tposition: relative;\n\t\ttop: 50%;\n\t\tleft: 50%;\n\t\ttransform: translate(-50%, -50%);\n\t\tmargin: 0;\n\t\toverflow: auto;    \n\t\tmax-height: 100%;\n\t\tpadding: 2em 0;\n\t}\n\t\n"])));
var LoadingSpinner = styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  color: #ffffff;\n  font-size: 90px;\n  text-indent: -9999em;\n  overflow: hidden;\n  width: 1em;\n  height: 1em;\n  border-radius: 50%;\n  margin: 72px auto;\n  position: relative;\n  -webkit-transform: translateZ(0);\n  -ms-transform: translateZ(0);\n  transform: translateZ(0);\n  -webkit-animation: load6 1.7s infinite ease, round 1.7s infinite ease;\n  animation: load6 1.7s infinite ease, round 1.7s infinite ease;\n\t\n\t@-webkit-keyframes load6 {\n\t\t0% {\n\t\t\tbox-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em, 0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;\n\t\t}\n\t\t5%,\n\t\t95% {\n\t\t\tbox-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em, 0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;\n\t\t}\n\t\t10%,\n\t\t59% {\n\t\t\tbox-shadow: 0 -0.83em 0 -0.4em, -0.087em -0.825em 0 -0.42em, -0.173em -0.812em 0 -0.44em, -0.256em -0.789em 0 -0.46em, -0.297em -0.775em 0 -0.477em;\n\t\t}\n\t\t20% {\n\t\t\tbox-shadow: 0 -0.83em 0 -0.4em, -0.338em -0.758em 0 -0.42em, -0.555em -0.617em 0 -0.44em, -0.671em -0.488em 0 -0.46em, -0.749em -0.34em 0 -0.477em;\n\t\t}\n\t\t38% {\n\t\t\tbox-shadow: 0 -0.83em 0 -0.4em, -0.377em -0.74em 0 -0.42em, -0.645em -0.522em 0 -0.44em, -0.775em -0.297em 0 -0.46em, -0.82em -0.09em 0 -0.477em;\n\t\t}\n\t\t100% {\n\t\t\tbox-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em, 0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;\n\t\t}\n\t}\n\t@keyframes load6 {\n\t\t0% {\n\t\t\tbox-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em, 0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;\n\t\t}\n\t\t5%,\n\t\t95% {\n\t\t\tbox-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em, 0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;\n\t\t}\n\t\t10%,\n\t\t59% {\n\t\t\tbox-shadow: 0 -0.83em 0 -0.4em, -0.087em -0.825em 0 -0.42em, -0.173em -0.812em 0 -0.44em, -0.256em -0.789em 0 -0.46em, -0.297em -0.775em 0 -0.477em;\n\t\t}\n\t\t20% {\n\t\t\tbox-shadow: 0 -0.83em 0 -0.4em, -0.338em -0.758em 0 -0.42em, -0.555em -0.617em 0 -0.44em, -0.671em -0.488em 0 -0.46em, -0.749em -0.34em 0 -0.477em;\n\t\t}\n\t\t38% {\n\t\t\tbox-shadow: 0 -0.83em 0 -0.4em, -0.377em -0.74em 0 -0.42em, -0.645em -0.522em 0 -0.44em, -0.775em -0.297em 0 -0.46em, -0.82em -0.09em 0 -0.477em;\n\t\t}\n\t\t100% {\n\t\t\tbox-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em, 0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;\n\t\t}\n\t}\n\t@-webkit-keyframes round {\n\t\t0% {\n\t\t\t-webkit-transform: rotate(0deg);\n\t\t\ttransform: rotate(0deg);\n\t\t}\n\t\t100% {\n\t\t\t-webkit-transform: rotate(360deg);\n\t\t\ttransform: rotate(360deg);\n\t\t}\n\t\t}\n\t\t@keyframes round {\n\t\t0% {\n\t\t\t-webkit-transform: rotate(0deg);\n\t\t\ttransform: rotate(0deg);\n\t\t}\n\t\t100% {\n\t\t\t-webkit-transform: rotate(360deg);\n\t\t\ttransform: rotate(360deg);\n\t\t}\n\t}\n"], ["\n  color: #ffffff;\n  font-size: 90px;\n  text-indent: -9999em;\n  overflow: hidden;\n  width: 1em;\n  height: 1em;\n  border-radius: 50%;\n  margin: 72px auto;\n  position: relative;\n  -webkit-transform: translateZ(0);\n  -ms-transform: translateZ(0);\n  transform: translateZ(0);\n  -webkit-animation: load6 1.7s infinite ease, round 1.7s infinite ease;\n  animation: load6 1.7s infinite ease, round 1.7s infinite ease;\n\t\n\t@-webkit-keyframes load6 {\n\t\t0% {\n\t\t\tbox-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em, 0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;\n\t\t}\n\t\t5%,\n\t\t95% {\n\t\t\tbox-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em, 0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;\n\t\t}\n\t\t10%,\n\t\t59% {\n\t\t\tbox-shadow: 0 -0.83em 0 -0.4em, -0.087em -0.825em 0 -0.42em, -0.173em -0.812em 0 -0.44em, -0.256em -0.789em 0 -0.46em, -0.297em -0.775em 0 -0.477em;\n\t\t}\n\t\t20% {\n\t\t\tbox-shadow: 0 -0.83em 0 -0.4em, -0.338em -0.758em 0 -0.42em, -0.555em -0.617em 0 -0.44em, -0.671em -0.488em 0 -0.46em, -0.749em -0.34em 0 -0.477em;\n\t\t}\n\t\t38% {\n\t\t\tbox-shadow: 0 -0.83em 0 -0.4em, -0.377em -0.74em 0 -0.42em, -0.645em -0.522em 0 -0.44em, -0.775em -0.297em 0 -0.46em, -0.82em -0.09em 0 -0.477em;\n\t\t}\n\t\t100% {\n\t\t\tbox-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em, 0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;\n\t\t}\n\t}\n\t@keyframes load6 {\n\t\t0% {\n\t\t\tbox-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em, 0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;\n\t\t}\n\t\t5%,\n\t\t95% {\n\t\t\tbox-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em, 0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;\n\t\t}\n\t\t10%,\n\t\t59% {\n\t\t\tbox-shadow: 0 -0.83em 0 -0.4em, -0.087em -0.825em 0 -0.42em, -0.173em -0.812em 0 -0.44em, -0.256em -0.789em 0 -0.46em, -0.297em -0.775em 0 -0.477em;\n\t\t}\n\t\t20% {\n\t\t\tbox-shadow: 0 -0.83em 0 -0.4em, -0.338em -0.758em 0 -0.42em, -0.555em -0.617em 0 -0.44em, -0.671em -0.488em 0 -0.46em, -0.749em -0.34em 0 -0.477em;\n\t\t}\n\t\t38% {\n\t\t\tbox-shadow: 0 -0.83em 0 -0.4em, -0.377em -0.74em 0 -0.42em, -0.645em -0.522em 0 -0.44em, -0.775em -0.297em 0 -0.46em, -0.82em -0.09em 0 -0.477em;\n\t\t}\n\t\t100% {\n\t\t\tbox-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em, 0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;\n\t\t}\n\t}\n\t@-webkit-keyframes round {\n\t\t0% {\n\t\t\t-webkit-transform: rotate(0deg);\n\t\t\ttransform: rotate(0deg);\n\t\t}\n\t\t100% {\n\t\t\t-webkit-transform: rotate(360deg);\n\t\t\ttransform: rotate(360deg);\n\t\t}\n\t\t}\n\t\t@keyframes round {\n\t\t0% {\n\t\t\t-webkit-transform: rotate(0deg);\n\t\t\ttransform: rotate(0deg);\n\t\t}\n\t\t100% {\n\t\t\t-webkit-transform: rotate(360deg);\n\t\t\ttransform: rotate(360deg);\n\t\t}\n\t}\n"])));
var templateObject_1, templateObject_2;


/***/ }),

/***/ "./node_modules/object-path/index.js":
/*!*******************************************!*\
  !*** ./node_modules/object-path/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (root, factory){
  'use strict';

  /*istanbul ignore next:cant test*/
  if (typeof module === 'object' && typeof module.exports === 'object') {
    module.exports = factory();
  } else if (true) {
    // AMD. Register as an anonymous module.
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
})(this, function(){
  'use strict';

  var toStr = Object.prototype.toString;
  function hasOwnProperty(obj, prop) {
    if(obj == null) {
      return false
    }
    //to handle objects with null prototypes (too edge case?)
    return Object.prototype.hasOwnProperty.call(obj, prop)
  }

  function isEmpty(value){
    if (!value) {
      return true;
    }
    if (isArray(value) && value.length === 0) {
        return true;
    } else if (typeof value !== 'string') {
        for (var i in value) {
            if (hasOwnProperty(value, i)) {
                return false;
            }
        }
        return true;
    }
    return false;
  }

  function toString(type){
    return toStr.call(type);
  }

  function isObject(obj){
    return typeof obj === 'object' && toString(obj) === "[object Object]";
  }

  var isArray = Array.isArray || function(obj){
    /*istanbul ignore next:cant test*/
    return toStr.call(obj) === '[object Array]';
  }

  function isBoolean(obj){
    return typeof obj === 'boolean' || toString(obj) === '[object Boolean]';
  }

  function getKey(key){
    var intKey = parseInt(key);
    if (intKey.toString() === key) {
      return intKey;
    }
    return key;
  }

  function factory(options) {
    options = options || {}

    var objectPath = function(obj) {
      return Object.keys(objectPath).reduce(function(proxy, prop) {
        if(prop === 'create') {
          return proxy;
        }

        /*istanbul ignore else*/
        if (typeof objectPath[prop] === 'function') {
          proxy[prop] = objectPath[prop].bind(objectPath, obj);
        }

        return proxy;
      }, {});
    };

    function hasShallowProperty(obj, prop) {
      return (options.includeInheritedProps || (typeof prop === 'number' && Array.isArray(obj)) || hasOwnProperty(obj, prop))
    }

    function getShallowProperty(obj, prop) {
      if (hasShallowProperty(obj, prop)) {
        return obj[prop];
      }
    }

    function set(obj, path, value, doNotReplace){
      if (typeof path === 'number') {
        path = [path];
      }
      if (!path || path.length === 0) {
        return obj;
      }
      if (typeof path === 'string') {
        return set(obj, path.split('.').map(getKey), value, doNotReplace);
      }
      var currentPath = path[0];
      var currentValue = getShallowProperty(obj, currentPath);
      if (path.length === 1) {
        if (currentValue === void 0 || !doNotReplace) {
          obj[currentPath] = value;
        }
        return currentValue;
      }

      if (currentValue === void 0) {
        //check if we assume an array
        if(typeof path[1] === 'number') {
          obj[currentPath] = [];
        } else {
          obj[currentPath] = {};
        }
      }

      return set(obj[currentPath], path.slice(1), value, doNotReplace);
    }

    objectPath.has = function (obj, path) {
      if (typeof path === 'number') {
        path = [path];
      } else if (typeof path === 'string') {
        path = path.split('.');
      }

      if (!path || path.length === 0) {
        return !!obj;
      }

      for (var i = 0; i < path.length; i++) {
        var j = getKey(path[i]);

        if((typeof j === 'number' && isArray(obj) && j < obj.length) ||
          (options.includeInheritedProps ? (j in Object(obj)) : hasOwnProperty(obj, j))) {
          obj = obj[j];
        } else {
          return false;
        }
      }

      return true;
    };

    objectPath.ensureExists = function (obj, path, value){
      return set(obj, path, value, true);
    };

    objectPath.set = function (obj, path, value, doNotReplace){
      return set(obj, path, value, doNotReplace);
    };

    objectPath.insert = function (obj, path, value, at){
      var arr = objectPath.get(obj, path);
      at = ~~at;
      if (!isArray(arr)) {
        arr = [];
        objectPath.set(obj, path, arr);
      }
      arr.splice(at, 0, value);
    };

    objectPath.empty = function(obj, path) {
      if (isEmpty(path)) {
        return void 0;
      }
      if (obj == null) {
        return void 0;
      }

      var value, i;
      if (!(value = objectPath.get(obj, path))) {
        return void 0;
      }

      if (typeof value === 'string') {
        return objectPath.set(obj, path, '');
      } else if (isBoolean(value)) {
        return objectPath.set(obj, path, false);
      } else if (typeof value === 'number') {
        return objectPath.set(obj, path, 0);
      } else if (isArray(value)) {
        value.length = 0;
      } else if (isObject(value)) {
        for (i in value) {
          if (hasShallowProperty(value, i)) {
            delete value[i];
          }
        }
      } else {
        return objectPath.set(obj, path, null);
      }
    };

    objectPath.push = function (obj, path /*, values */){
      var arr = objectPath.get(obj, path);
      if (!isArray(arr)) {
        arr = [];
        objectPath.set(obj, path, arr);
      }

      arr.push.apply(arr, Array.prototype.slice.call(arguments, 2));
    };

    objectPath.coalesce = function (obj, paths, defaultValue) {
      var value;

      for (var i = 0, len = paths.length; i < len; i++) {
        if ((value = objectPath.get(obj, paths[i])) !== void 0) {
          return value;
        }
      }

      return defaultValue;
    };

    objectPath.get = function (obj, path, defaultValue){
      if (typeof path === 'number') {
        path = [path];
      }
      if (!path || path.length === 0) {
        return obj;
      }
      if (obj == null) {
        return defaultValue;
      }
      if (typeof path === 'string') {
        return objectPath.get(obj, path.split('.'), defaultValue);
      }

      var currentPath = getKey(path[0]);
      var nextObj = getShallowProperty(obj, currentPath)
      if (nextObj === void 0) {
        return defaultValue;
      }

      if (path.length === 1) {
        return nextObj;
      }

      return objectPath.get(obj[currentPath], path.slice(1), defaultValue);
    };

    objectPath.del = function del(obj, path) {
      if (typeof path === 'number') {
        path = [path];
      }

      if (obj == null) {
        return obj;
      }

      if (isEmpty(path)) {
        return obj;
      }
      if(typeof path === 'string') {
        return objectPath.del(obj, path.split('.'));
      }

      var currentPath = getKey(path[0]);
      if (!hasShallowProperty(obj, currentPath)) {
        return obj;
      }

      if(path.length === 1) {
        if (isArray(obj)) {
          obj.splice(currentPath, 1);
        } else {
          delete obj[currentPath];
        }
      } else {
        return objectPath.del(obj[currentPath], path.slice(1));
      }

      return obj;
    }

    return objectPath;
  }

  var mod = factory();
  mod.create = factory;
  mod.withInheritedProps = factory({includeInheritedProps: true})
  return mod;
});


/***/ })

}]);
//# sourceMappingURL=6.index_bundle.js.map