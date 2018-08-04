(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[19],{

/***/ "./client/src/components/user/forgotpassword.tsx":
/*!*******************************************************!*\
  !*** ./client/src/components/user/forgotpassword.tsx ***!
  \*******************************************************/
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



var ForgotPasswordPage = /** @class */ (function (_super) {
    __extends(ForgotPasswordPage, _super);
    function ForgotPasswordPage(props) {
        var _this = _super.call(this, props) || this;
        _this.emailRef = react__WEBPACK_IMPORTED_MODULE_0__["createRef"]();
        _this.state = {
            required: false,
            requestSent: false,
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
                return { required: true };
            });
            return;
        }
        // Send request off to server to reset password 
        this.props.user.forgotPassword(email, this.forgotPasswordResult);
        this.setState(function () {
            return { required: true };
        });
    };
    ForgotPasswordPage.prototype.forgotPasswordResult = function (result) {
        if (result) {
            this.setState(function () {
                return { requestSent: true };
            });
        }
        else {
            this.emailRef.current.value = '';
            this.setState(function () {
                return { required: true };
            });
        }
    };
    ForgotPasswordPage.prototype.render = function () {
        var _a = this, emailRef = _a.emailRef, hitKey = _a.hitKey, forgotPassword = _a.forgotPassword;
        var _b = this.state, required = _b.required, requestSent = _b.requestSent;
        if (requestSent) {
            return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "forgotPassword-page-wrapper" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "container" },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_1__["NavLink"], { to: '/forgotpassword', activeClassName: "selected" },
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h2", null, "Reset Password Request")),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", null, "Request successfully sent to your email. Check your inbox or junk for a Pencil 4 Life Password Reset for link to reset password."),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", null,
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], { className: "btn", to: '/login' }, "Login"),
                        " or ",
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], { className: "btn", to: '/signup' }, "Signup")))));
        }
        return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "forgotPassword-page-wrapper" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "container" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_1__["NavLink"], { to: '/forgotpassword', activeClassName: "selected" },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h2", null, "Reset Password Request")),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("br", null),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("label", { htmlFor: "email" },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("b", null, "Email:")),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("br", null),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("input", { type: "text", onKeyPress: hitKey, placeholder: "Enter youremail@example.com", name: "email", ref: emailRef, autoComplete: 'email', required: true }),
                required ? (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", { className: "errortext" }, "* Required")) : '',
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("br", null),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("input", { type: "submit", onClick: forgotPassword, value: "RESET PASSWORD" }),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", null,
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], { className: "btn", to: '/login' }, "Login"),
                    " or ",
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], { className: "btn", to: '/signup' }, "Signup")))));
    };
    return ForgotPasswordPage;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]));
;
/* harmony default export */ __webpack_exports__["default"] = (Object(_user_provider__WEBPACK_IMPORTED_MODULE_2__["userConsumer"])(Object(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["withRouter"])(ForgotPasswordPage)));


/***/ })

}]);
//# sourceMappingURL=19.index_bundle.js.map