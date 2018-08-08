(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[19],{

/***/ "./client/src/components/user/forgotpassword.tsx":
/*!*******************************************************!*\
  !*** ./client/src/components/user/forgotpassword.tsx ***!
  \*******************************************************/
/*! exports provided: ForgotPasswordPageWrapper, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPasswordPageWrapper", function() { return ForgotPasswordPageWrapper; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var _user_provider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user-provider */ "./client/src/components/user/user-provider.tsx");
/* harmony import */ var _utilities_styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utilities/styled.components */ "./client/src/components/utilities/styled.components.tsx");

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




var ForgotPasswordPageWrapper = _utilities_styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\t.forgot-password-container {\n\t\tmax-width: 300px;\n\t\tinput {\n\t\t\twidth: 100%;\n\t\t}\n\t}\n\t@media (min-width: 300px) {\n\t\tposition: relative;\n\t\ttop: 50%;\n\t\tleft: 50%;\n\n\t\t.forgot-password-container {\n\t\t\ttransform: translate(-50%, -50%);\n\t\t}\n\t}\n"], ["\n\t.forgot-password-container {\n\t\tmax-width: 300px;\n\t\tinput {\n\t\t\twidth: 100%;\n\t\t}\n\t}\n\t@media (min-width: 300px) {\n\t\tposition: relative;\n\t\ttop: 50%;\n\t\tleft: 50%;\n\n\t\t.forgot-password-container {\n\t\t\ttransform: translate(-50%, -50%);\n\t\t}\n\t}\n"])));
var ForgotPasswordPage = /** @class */ (function (_super) {
    __extends(ForgotPasswordPage, _super);
    function ForgotPasswordPage(props) {
        var _this = _super.call(this, props) || this;
        _this.emailRef = react__WEBPACK_IMPORTED_MODULE_0__["createRef"]();
        _this.state = {
            required: false,
            requestSent: false,
            loading: false,
        };
        _this.hitKey = _this.hitKey.bind(_this);
        _this.forgotPassword = _this.forgotPassword.bind(_this);
        _this.forgotPasswordResult = _this.forgotPasswordResult.bind(_this);
        return _this;
    }
    ForgotPasswordPage.prototype.hitKey = function (event) {
        if (event.key == 'Enter') {
            this.forgotPassword(event);
        }
    };
    ForgotPasswordPage.prototype.forgotPassword = function (event) {
        event.preventDefault();
        var email;
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
        if (invalid) {
            this.emailRef.current.value = '';
            this.setState(function () {
                return {
                    required: true,
                };
            });
            return;
        }
        // Send request off to server to reset password 
        this.props.user.forgotPassword(email, this.forgotPasswordResult);
        this.setState(function () {
            return {
                required: true,
                loading: true,
            };
        });
    };
    ForgotPasswordPage.prototype.forgotPasswordResult = function (result) {
        if (result) {
            this.setState(function () {
                return {
                    requestSent: true,
                    required: false,
                    loading: false,
                };
            });
        }
        else {
            this.emailRef.current.value = '';
            this.setState(function () {
                return {
                    required: true,
                    loading: false,
                };
            });
        }
    };
    ForgotPasswordPage.prototype.render = function () {
        var _a = this, emailRef = _a.emailRef, hitKey = _a.hitKey, forgotPassword = _a.forgotPassword;
        var _b = this.state, required = _b.required, requestSent = _b.requestSent, loading = _b.loading;
        if (requestSent) {
            return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", null,
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "container" },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_1__["NavLink"], { to: '/forgotpassword', activeClassName: "selected" },
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h2", null, "Reset Password Request")),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", null, "Request successfully sent to your email. Check your inbox or junk for a Pencil 4 Life Password Reset for link to reset password."),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", null,
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], { className: "btn", to: '/login' }, "Login"),
                        " or ",
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], { className: "btn", to: '/signup' }, "Signup")))));
        }
        return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](ForgotPasswordPageWrapper, null,
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "forgot-password-container" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_1__["NavLink"], { to: '/forgotpassword', activeClassName: "selected" },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h2", null, "Reset Password")),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("label", { htmlFor: "email" }, "Email"),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", null,
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("input", { type: "text", onKeyPress: hitKey, placeholder: "Enter youremail@example.com", name: "email", ref: emailRef, autoComplete: 'email', required: true }),
                    required ? (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", { className: "errortext" }, "* Required")) : ''),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("input", { type: "submit", onClick: forgotPassword, value: "RESET PASSWORD" }),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", null,
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], { className: "btn", to: '/login' }, "Login"),
                    " or ",
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], { className: "btn", to: '/signup' }, "Signup"))),
            loading ? (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utilities_styled_components__WEBPACK_IMPORTED_MODULE_3__["Popout"], null,
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", null,
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utilities_styled_components__WEBPACK_IMPORTED_MODULE_3__["LoadingSpinner"], null)))) : ''));
    };
    return ForgotPasswordPage;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]));
;
/* harmony default export */ __webpack_exports__["default"] = (Object(_user_provider__WEBPACK_IMPORTED_MODULE_2__["userConsumer"])(Object(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["withRouter"])(ForgotPasswordPage)));
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


/***/ })

}]);
//# sourceMappingURL=19.index_bundle.js.map