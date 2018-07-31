(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[28],{

/***/ "./client/src/components/resetpassword/resetpassword.tsx":
/*!***************************************************************!*\
  !*** ./client/src/components/resetpassword/resetpassword.tsx ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var _user_user_provider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../user/user-provider */ "./client/src/components/user/user-provider.tsx");

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
        _this.oldpasswordRef = react__WEBPACK_IMPORTED_MODULE_0__["createRef"]();
        _this.newpasswordRef = react__WEBPACK_IMPORTED_MODULE_0__["createRef"]();
        _this.confirmpasswordRef = react__WEBPACK_IMPORTED_MODULE_0__["createRef"]();
        _this.state = {
            redirect: false,
            passwordMismtach: false,
            passwordBad: false,
        };
        _this.hitKey = _this.hitKey.bind(_this);
        _this.updatePassword = _this.updatePassword.bind(_this);
        _this.updatePasswordResult = _this.updatePasswordResult.bind(_this);
        _this.redirect = _this.redirect.bind(_this);
        return _this;
    }
    ResetPassword.prototype.hitKey = function (event) {
        if (event.key == 'Enter') {
            this.updatePassword(event);
        }
    };
    ResetPassword.prototype.updatePassword = function (event) {
        event.preventDefault();
        var oldpassword = this.oldpasswordRef.current.value;
        var newpassword = this.newpasswordRef.current.value;
        var confirmpassword = this.confirmpasswordRef.current.value;
        if (!oldpassword) {
            this.setState(function () {
                return {
                    passwordBad: true,
                };
            });
            return;
        }
        if (newpassword == confirmpassword) {
            this.setState(function () {
                return {
                    passwordBad: false,
                    passwordMismtach: false,
                };
            });
            this.props.user.updatePassword(oldpassword, newpassword, this.updatePasswordResult);
        }
        else {
            this.oldpasswordRef.current.value = '';
            this.newpasswordRef.current.value = '';
            this.confirmpasswordRef.current.value = '';
            this.setState(function () {
                return {
                    passwordMismtach: true,
                };
            });
        }
    };
    ResetPassword.prototype.updatePasswordResult = function (error) {
        if (error) {
            this.oldpasswordRef.current.value = '';
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
    ResetPassword.prototype.redirect = function () {
        this.setState(function () {
            return {
                redirect: true,
            };
        });
    };
    ResetPassword.prototype.render = function () {
        var _a = this, hitKey = _a.hitKey, updatePassword = _a.updatePassword, oldpasswordRef = _a.oldpasswordRef, newpasswordRef = _a.newpasswordRef, confirmpasswordRef = _a.confirmpasswordRef;
        var _b = this.state, redirect = _b.redirect, passwordBad = _b.passwordBad, passwordMismtach = _b.passwordMismtach;
        if (redirect) {
            return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Redirect"], { to: '/profile' }));
        }
        return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "profile-wrapper" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_1__["NavLink"], { exact: true, to: '/profile/changepassword', activeClassName: "selected" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h2", null, "Change Password")),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("form", { onSubmit: updatePassword },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("label", null,
                    "Old Password",
                    passwordBad ? (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", { className: "errortext" }, "* Bad Password")) : ''),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("br", null),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("input", { type: 'password', onKeyPress: hitKey, placeholder: "Old Password", ref: oldpasswordRef }),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("br", null),
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
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("input", { type: 'submit', onClick: updatePassword, value: 'SAVE' }))));
    };
    return ResetPassword;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]));
;
/* harmony default export */ __webpack_exports__["default"] = (Object(_user_user_provider__WEBPACK_IMPORTED_MODULE_2__["userConsumer"])(ResetPassword));


/***/ })

}]);
//# sourceMappingURL=28.index_bundle.js.map