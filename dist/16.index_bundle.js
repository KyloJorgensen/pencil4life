(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[16],{

/***/ "./client/src/components/profile/profile-change-password.tsx":
/*!*******************************************************************!*\
  !*** ./client/src/components/profile/profile-change-password.tsx ***!
  \*******************************************************************/
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



var ProfileChangePassword = /** @class */ (function (_super) {
    __extends(ProfileChangePassword, _super);
    function ProfileChangePassword(props) {
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
    ProfileChangePassword.prototype.hitKey = function (event) {
        if (event.key == 'Enter') {
            this.updatePassword(event);
        }
    };
    ProfileChangePassword.prototype.updatePassword = function (event) {
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
    ProfileChangePassword.prototype.updatePasswordResult = function (error) {
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
    ProfileChangePassword.prototype.redirect = function () {
        this.setState(function () {
            return {
                redirect: true,
            };
        });
    };
    ProfileChangePassword.prototype.render = function () {
        var _a = this, hitKey = _a.hitKey, updatePassword = _a.updatePassword, oldpasswordRef = _a.oldpasswordRef, newpasswordRef = _a.newpasswordRef, confirmpasswordRef = _a.confirmpasswordRef;
        var _b = this.state, redirect = _b.redirect, passwordBad = _b.passwordBad, passwordMismtach = _b.passwordMismtach;
        if (redirect) {
            return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Redirect"], { to: '/profile' }));
        }
        return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "profile-wrapper" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h1", null, "Profile"),
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
    return ProfileChangePassword;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]));
;
/* harmony default export */ __webpack_exports__["default"] = (Object(_user_user_provider__WEBPACK_IMPORTED_MODULE_2__["userConsumer"])(ProfileChangePassword));


/***/ }),

/***/ "./client/src/components/profile/profile-edit.tsx":
/*!********************************************************!*\
  !*** ./client/src/components/profile/profile-edit.tsx ***!
  \********************************************************/
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



var ProfileEdit = /** @class */ (function (_super) {
    __extends(ProfileEdit, _super);
    function ProfileEdit(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            redirect: false,
            required: false,
            email: null,
            firstname: null,
            lastname: null,
        };
        _this.hitKey = _this.hitKey.bind(_this);
        _this.editField = _this.editField.bind(_this);
        _this.updateUser = _this.updateUser.bind(_this);
        _this.updateUserResult = _this.updateUserResult.bind(_this);
        _this.redirect = _this.redirect.bind(_this);
        return _this;
    }
    ProfileEdit.prototype.componentWillMount = function () {
        var _a = this.props.user, email = _a.email, firstname = _a.firstname, lastname = _a.lastname;
        this.setState(function () {
            return {
                email: email,
                firstname: firstname,
                lastname: lastname,
            };
        });
    };
    ProfileEdit.prototype.hitKey = function (event) {
        if (event.key == 'Enter') {
            this.updateUser(event);
        }
    };
    ProfileEdit.prototype.editField = function (event) {
        var _a = event.target, name = _a.name, value = _a.value;
        this.setState(function (preState) {
            preState[name] = value;
            return preState;
        });
        var _state = this.state;
        _state[event.target.name] = event.target.value;
        this.setState(_state);
    };
    ProfileEdit.prototype.updateUser = function (event) {
        event.preventDefault();
        var params = {};
        var vaildKeys = ['email', 'firstname', 'lastname'];
        for (var i = 0; i < vaildKeys.length; i++) {
            var _new = this.state[vaildKeys[i]];
            if (_new != this.props.user[vaildKeys[i]]) {
                params[vaildKeys[i]] = _new;
            }
        }
        this.props.user.updateUser(params, this.updateUserResult);
        this.redirect();
    };
    ProfileEdit.prototype.updateUserResult = function (error) {
        if (error) {
            this.setState(function () {
                return {
                    required: true,
                };
            });
        }
        else {
            this.setState(function () {
                return {
                    redirect: true,
                };
            });
        }
    };
    ProfileEdit.prototype.redirect = function () {
        this.setState(function () {
            return {
                redirect: true,
            };
        });
    };
    ProfileEdit.prototype.render = function () {
        var _a = this, hitKey = _a.hitKey, updateUser = _a.updateUser, editField = _a.editField;
        var _b = this.state, redirect = _b.redirect, email = _b.email, firstname = _b.firstname, lastname = _b.lastname;
        if (redirect) {
            return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Redirect"], { to: '/profile' }));
        }
        return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "profile-wrapper" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h1", null, "Profile"),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("form", { onSubmit: updateUser },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("label", null, "Email"),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("br", null),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("input", { type: 'text', onKeyPress: hitKey, placeholder: "joe.jones@example.com", onChange: editField, name: 'email', value: email }),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("br", null),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("label", null, "First Name"),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("br", null),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("input", { type: 'text', onKeyPress: hitKey, placeholder: "Joe", onChange: editField, name: 'firstname', value: firstname }),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("br", null),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("label", null, "Last Name"),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("br", null),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("input", { type: 'text', onKeyPress: hitKey, placeholder: "Jones", onChange: editField, name: 'lastname', value: lastname }),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("br", null),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("input", { type: 'submit', onClick: updateUser, value: 'SAVE' }))));
    };
    return ProfileEdit;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]));
;
/* harmony default export */ __webpack_exports__["default"] = (Object(_user_user_provider__WEBPACK_IMPORTED_MODULE_2__["userConsumer"])(ProfileEdit));


/***/ }),

/***/ "./client/src/components/profile/profile-switch.tsx":
/*!**********************************************************!*\
  !*** ./client/src/components/profile/profile-switch.tsx ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router */ "./node_modules/react-router/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var _profile__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./profile */ "./client/src/components/profile/profile.tsx");
/* harmony import */ var _profile_edit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./profile-edit */ "./client/src/components/profile/profile-edit.tsx");
/* harmony import */ var _profile_change_password__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./profile-change-password */ "./client/src/components/profile/profile-change-password.tsx");
/* harmony import */ var _no_match__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../no-match */ "./client/src/components/no-match.tsx");
/* harmony import */ var _user_user_provider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../user/user-provider */ "./client/src/components/user/user-provider.tsx");

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








var ProfileSwitch = /** @class */ (function (_super) {
    __extends(ProfileSwitch, _super);
    function ProfileSwitch(props) {
        return _super.call(this, props) || this;
    }
    ProfileSwitch.prototype.render = function () {
        if (!this.props.user.userAccess) {
            return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Redirect"], { to: { pathname: '/login', state: { redirectPath: '/profile' } } }));
        }
        return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "profile-page-wrapper" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "container" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router__WEBPACK_IMPORTED_MODULE_1__["Switch"], null,
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router__WEBPACK_IMPORTED_MODULE_1__["Route"], { exact: true, path: "/profile", component: _profile__WEBPACK_IMPORTED_MODULE_3__["default"] }),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router__WEBPACK_IMPORTED_MODULE_1__["Route"], { path: "/profile/edit", component: _profile_edit__WEBPACK_IMPORTED_MODULE_4__["default"] }),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router__WEBPACK_IMPORTED_MODULE_1__["Route"], { path: "/profile/changepassword", component: _profile_change_password__WEBPACK_IMPORTED_MODULE_5__["default"] }),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router__WEBPACK_IMPORTED_MODULE_1__["Route"], { component: _no_match__WEBPACK_IMPORTED_MODULE_6__["default"] })))));
    };
    return ProfileSwitch;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]));
;
/* harmony default export */ __webpack_exports__["default"] = (Object(_user_user_provider__WEBPACK_IMPORTED_MODULE_7__["userConsumer"])(ProfileSwitch));


/***/ }),

/***/ "./client/src/components/profile/profile.tsx":
/*!***************************************************!*\
  !*** ./client/src/components/profile/profile.tsx ***!
  \***************************************************/
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



var Profile = /** @class */ (function (_super) {
    __extends(Profile, _super);
    function Profile(props) {
        return _super.call(this, props) || this;
    }
    Profile.prototype.render = function () {
        var _a = this.props.user, email = _a.email, firstname = _a.firstname, lastname = _a.lastname;
        var logout = this.props.user.logout;
        return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "profile-wrapper" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h1", null, "Profile"),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("label", null, "Email"),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("br", null),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", null, email),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("br", null),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("label", null, "First Name"),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("br", null),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", null, firstname),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("br", null),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("label", null, "Last Name"),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("br", null),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", null, lastname),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("br", null),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], { to: "/profile/edit" }, "EDIT"),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("br", null),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], { to: "/profile/changepassword" }, "Change Password"),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("br", null),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("a", { onClick: logout }, "LOGOUT")));
    };
    return Profile;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]));
;
/* harmony default export */ __webpack_exports__["default"] = (Object(_user_user_provider__WEBPACK_IMPORTED_MODULE_2__["userConsumer"])(Profile));


/***/ })

}]);
//# sourceMappingURL=16.index_bundle.js.map