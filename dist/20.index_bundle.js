(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[20],{

/***/ "./client/src/components/user/resetpassword.tsx":
/*!******************************************************!*\
  !*** ./client/src/components/user/resetpassword.tsx ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var _user_provider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user-provider */ "./client/src/components/user/user-provider.tsx");

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



var ResetPassword = /** @class */ (function (_super) {
    __extends(ResetPassword, _super);
    function ResetPassword(props) {
        var _this = _super.call(this, props) || this;
        _this.newpasswordRef = react__WEBPACK_IMPORTED_MODULE_0__["createRef"]();
        _this.confirmpasswordRef = react__WEBPACK_IMPORTED_MODULE_0__["createRef"]();
        _this.state = {
            redirect: false,
            passwordMismtach: false,
            passwordBad: false,
            vaildCode: true,
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
                    passwordBad: false,
                    passwordMismtach: false,
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
                    passwordBad: true,
                };
            });
        }
        else {
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
        var _b = this.state, redirect = _b.redirect, passwordBad = _b.passwordBad, passwordMismtach = _b.passwordMismtach, vaildCode = _b.vaildCode;
        var _c = this.props.match.params, userId = _c.userId, reset_code = _c.reset_code;
        if (redirect) {
            return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Redirect"], { to: '/profile' }));
        }
        if (!userId || !reset_code || !vaildCode) {
            return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Redirect"], { to: '/forgotpassword' }));
        }
        return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "profile-wrapper container" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h2", null, "Reset Password"),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", null,
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("label", null,
                    "New Password",
                    passwordMismtach ? (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", { className: "errortext" }, "*")) : ''),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("br", null),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("input", { type: 'password', onKeyPress: hitKey, placeholder: "New Password", ref: newpasswordRef }),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("br", null),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("label", null,
                    "Confrim New Password",
                    passwordMismtach ? (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", { className: "errortext" }, "* Must match new Password")) : ''),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("br", null),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("input", { type: 'password', onKeyPress: hitKey, placeholder: "New Password", ref: confirmpasswordRef }),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("br", null),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("input", { type: 'submit', onClick: resetPassword, value: 'SAVE' }))));
    };
    return ResetPassword;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]));
;
/* harmony default export */ __webpack_exports__["default"] = (Object(_user_provider__WEBPACK_IMPORTED_MODULE_2__["userConsumer"])(ResetPassword));


/***/ })

}]);
//# sourceMappingURL=20.index_bundle.js.map