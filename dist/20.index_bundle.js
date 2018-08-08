(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[20],{

/***/ "./client/src/components/user/resetpassword.tsx":
/*!******************************************************!*\
  !*** ./client/src/components/user/resetpassword.tsx ***!
  \******************************************************/
/*! exports provided: ResetPasswordPageWrapper, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetPasswordPageWrapper", function() { return ResetPasswordPageWrapper; });
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




var ResetPasswordPageWrapper = _utilities_styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\t.reset-password-container {\n\t\tmax-width: 300px;\n\t\tinput {\n\t\t\twidth: 100%;\n\t\t}\n\t}\n\t@media (min-width: 300px) {\n\t\tposition: relative;\n\t\ttop: 50%;\n\t\tleft: 50%;\n\n\t\t.reset-password-container {\n\t\t\ttransform: translate(-50%, -50%);\n\t\t}\n\t}\n"], ["\n\t.reset-password-container {\n\t\tmax-width: 300px;\n\t\tinput {\n\t\t\twidth: 100%;\n\t\t}\n\t}\n\t@media (min-width: 300px) {\n\t\tposition: relative;\n\t\ttop: 50%;\n\t\tleft: 50%;\n\n\t\t.reset-password-container {\n\t\t\ttransform: translate(-50%, -50%);\n\t\t}\n\t}\n"])));
var ResetPassword = /** @class */ (function (_super) {
    __extends(ResetPassword, _super);
    function ResetPassword(props) {
        var _this = _super.call(this, props) || this;
        _this.newpasswordRef = react__WEBPACK_IMPORTED_MODULE_0__["createRef"]();
        _this.confirmpasswordRef = react__WEBPACK_IMPORTED_MODULE_0__["createRef"]();
        _this.state = {
            redirect: false,
            passwordMismtach: false,
            vaildCode: true,
            loading: false,
        };
        _this.hitKey = _this.hitKey.bind(_this);
        _this.resetPassword = _this.resetPassword.bind(_this);
        _this.resetPasswordResult = _this.resetPasswordResult.bind(_this);
        _this.redirect = _this.redirect.bind(_this);
        return _this;
    }
    ResetPassword.prototype.hitKey = function (event) {
        if (event.key == 'Enter') {
            this.resetPassword(event);
        }
    };
    ResetPassword.prototype.resetPassword = function (event) {
        event.preventDefault();
        var newpassword = this.newpasswordRef.current.value;
        var confirmpassword = this.confirmpasswordRef.current.value;
        if (newpassword == confirmpassword) {
            this.setState(function () {
                return {
                    passwordMismtach: false,
                    loading: true,
                };
            });
            this.props.user.resetPassword(newpassword, this.props.match.params.userId, this.props.match.params.reset_code, this.resetPasswordResult);
        }
        else {
            this.newpasswordRef.current.value = '';
            this.confirmpasswordRef.current.value = '';
            this.setState(function () {
                return {
                    passwordMismtach: true,
                };
            });
        }
    };
    ResetPassword.prototype.resetPasswordResult = function (error) {
        if (error) {
            this.newpasswordRef.current.value = '';
            this.confirmpasswordRef.current.value = '';
            this.setState(function () {
                return {
                    passwordMismtach: true,
                    loading: false,
                };
            });
        }
        else {
            this.setState(function () {
                return {
                    loading: false,
                };
            });
            this.redirect();
        }
    };
    ResetPassword.prototype.componentDidMount = function () {
        var _this = this;
        var _a = this.props.match.params, userId = _a.userId, reset_code = _a.reset_code;
        this.props.user.checkResetCode(userId, reset_code, function (vaild) {
            _this.setState(function () {
                return { vaildCode: vaild };
            });
        });
    };
    ResetPassword.prototype.redirect = function () {
        this.setState(function () {
            return {
                redirect: true,
            };
        });
    };
    ResetPassword.prototype.render = function () {
        var _a = this, hitKey = _a.hitKey, resetPassword = _a.resetPassword, newpasswordRef = _a.newpasswordRef, confirmpasswordRef = _a.confirmpasswordRef;
        var _b = this.state, redirect = _b.redirect, passwordMismtach = _b.passwordMismtach, vaildCode = _b.vaildCode, loading = _b.loading;
        var _c = this.props.match.params, userId = _c.userId, reset_code = _c.reset_code;
        if (redirect) {
            return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Redirect"], { to: '/profile' }));
        }
        if (!userId || !reset_code || !vaildCode) {
            return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Redirect"], { to: '/forgotpassword' }));
        }
        return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](ResetPasswordPageWrapper, null,
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: 'reset-password-container' },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h2", null, "Reset Password"),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("label", null,
                    "New Password",
                    passwordMismtach ? (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", { className: "errortext" }, "*")) : ''),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", null,
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("input", { type: 'password', onKeyPress: hitKey, placeholder: "New Password", ref: newpasswordRef })),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("label", null,
                    "Confrim New Password",
                    passwordMismtach ? (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", { className: "errortext" }, "* Must match new Password")) : ''),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", null,
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("input", { type: 'password', onKeyPress: hitKey, placeholder: "New Password", ref: confirmpasswordRef })),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("input", { type: 'submit', onClick: resetPassword, value: 'SAVE' })),
            loading ? (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utilities_styled_components__WEBPACK_IMPORTED_MODULE_3__["Popout"], null,
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", null,
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utilities_styled_components__WEBPACK_IMPORTED_MODULE_3__["LoadingSpinner"], null)))) : ''));
    };
    return ResetPassword;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]));
;
/* harmony default export */ __webpack_exports__["default"] = (Object(_user_provider__WEBPACK_IMPORTED_MODULE_2__["userConsumer"])(ResetPassword));
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
//# sourceMappingURL=20.index_bundle.js.map