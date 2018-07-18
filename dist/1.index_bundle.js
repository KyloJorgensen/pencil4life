(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./client/src/components/header/header.less":
/*!**************************************************!*\
  !*** ./client/src/components/header/header.less ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/less-loader/dist/cjs.js!./header.less */ "./node_modules/css-loader/index.js!./node_modules/less-loader/dist/cjs.js!./client/src/components/header/header.less");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./client/src/components/header/header.tsx":
/*!*************************************************!*\
  !*** ./client/src/components/header/header.tsx ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var _fortawesome_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/fontawesome */ "./node_modules/@fortawesome/fontawesome/index.es.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _fortawesome_fontawesome_free_solid_faCheckSquare__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/fontawesome-free-solid/faCheckSquare */ "./node_modules/@fortawesome/fontawesome-free-solid/faCheckSquare.js");
/* harmony import */ var _fortawesome_fontawesome_free_solid_faCheckSquare__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_fontawesome_free_solid_faCheckSquare__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _fortawesome_fontawesome_free_solid_faSignInAlt__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/fontawesome-free-solid/faSignInAlt */ "./node_modules/@fortawesome/fontawesome-free-solid/faSignInAlt.js");
/* harmony import */ var _fortawesome_fontawesome_free_solid_faSignInAlt__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_fontawesome_free_solid_faSignInAlt__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _fortawesome_fontawesome_free_solid_faSignOutAlt__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/fontawesome-free-solid/faSignOutAlt */ "./node_modules/@fortawesome/fontawesome-free-solid/faSignOutAlt.js");
/* harmony import */ var _fortawesome_fontawesome_free_solid_faSignOutAlt__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_fontawesome_free_solid_faSignOutAlt__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _fortawesome_fontawesome_free_solid_faUserAlt__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/fontawesome-free-solid/faUserAlt */ "./node_modules/@fortawesome/fontawesome-free-solid/faUserAlt.js");
/* harmony import */ var _fortawesome_fontawesome_free_solid_faUserAlt__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_fontawesome_free_solid_faUserAlt__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _event_listener_event_listener__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../event-listener/event-listener */ "./client/src/components/event-listener/event-listener.tsx");
/* harmony import */ var _utilities_dropdown__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../utilities/dropdown */ "./client/src/components/utilities/dropdown.tsx");
/* harmony import */ var _user_user_provider__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../user/user-provider */ "./client/src/components/user/user-provider.tsx");
/* harmony import */ var _header_less__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./header.less */ "./client/src/components/header/header.less");
/* harmony import */ var _header_less__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_header_less__WEBPACK_IMPORTED_MODULE_11__);

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












_fortawesome_fontawesome__WEBPACK_IMPORTED_MODULE_2__["library"].add(_fortawesome_fontawesome_free_solid_faCheckSquare__WEBPACK_IMPORTED_MODULE_4__, _fortawesome_fontawesome_free_solid_faSignInAlt__WEBPACK_IMPORTED_MODULE_5__, _fortawesome_fontawesome_free_solid_faSignOutAlt__WEBPACK_IMPORTED_MODULE_6__, _fortawesome_fontawesome_free_solid_faUserAlt__WEBPACK_IMPORTED_MODULE_7__);
var Header = /** @class */ (function (_super) {
    __extends(Header, _super);
    function Header(props) {
        var _this = _super.call(this, props) || this;
        _this.logoRef = react__WEBPACK_IMPORTED_MODULE_0__["createRef"]();
        _this.navRef = react__WEBPACK_IMPORTED_MODULE_0__["createRef"]();
        _this.state = {
            navPosition: 'initial',
            logoMargin: 0,
        };
        _this.logout = _this.logout.bind(_this);
        _this.handleScroll = _this.handleScroll.bind(_this);
        return _this;
    }
    Header.prototype.componentDidMount = function () {
        this.props.user.getUser();
        this.props.addEventListener('scroll', this.handleScroll);
    };
    Header.prototype.componentWillUnmount = function () {
        this.props.removeEventListener('scroll', this.handleScroll);
    };
    Header.prototype.handleScroll = function (event, ref) {
        var _this = this;
        this.setState(function (prevState, props) {
            var scroll = ref.current.scrollTop;
            var imgHeight = _this.logoRef.current.clientHeight;
            var navBarHeight = _this.navRef.current.clientHeight;
            var navBarWidth = _this.navRef.current.clientWidth;
            return {
                navPosition: scroll >= imgHeight && navBarWidth > 900 ? 'fixed' : 'initial',
                logoMargin: scroll >= imgHeight && navBarWidth > 900 ? navBarHeight + 20 : 0,
            };
        });
    };
    Header.prototype.logout = function () {
        this.props.user.logout();
    };
    Header.prototype.render = function () {
        var user = [];
        var selectedAdmin = ['/image'];
        var adminClasses = "btn dropdown-toggle";
        if (selectedAdmin.includes(this.props.location.pathname)) {
            adminClasses += " selected ";
        }
        var admin = this.props.user.admin ? (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utilities_dropdown__WEBPACK_IMPORTED_MODULE_9__["default"], { key: "admin", toggleClass: adminClasses, menuClass: "dropdown-menu-right", toggleChild: 'ADMIN' },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_1__["NavLink"], { exact: true, className: "dropdown-item", role: "menuitem", tabIndex: -1, to: '/image', activeClassName: "selected" }, "IMAGES"))) : '';
        user.push(admin);
        var selectedProfile = ['/profile'];
        var profileClasses = "btn dropdown-toggle";
        if (selectedProfile.includes(this.props.location.pathname)) {
            profileClasses += " selected ";
        }
        var profile = this.props.user.userAccess ? (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_1__["NavLink"], { exact: true, key: "profile", className: "btn mytooltip", role: "menuitem", tabIndex: -1, to: '/profile', activeClassName: "selected" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], { icon: ["fas", "user-alt"] }),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", { className: "btn mytooltiptext" }, "PROFILE"))) : '';
        user.push(profile);
        var logInOut = this.props.user.userAccess ? (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("a", { key: "logout", className: "btn mytooltip", onClick: this.logout },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], { icon: ["fas", "sign-out-alt"] }),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", { className: "btn mytooltiptext" }, "SIGN OUT"))) : (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_1__["NavLink"], { exact: true, key: "login", className: "btn mytooltip", role: "menuitem", tabIndex: -1, to: {
                pathname: '/login',
                state: {
                    redirectPath: this.props.location.pathname
                }
            }, activeClassName: "selected" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], { icon: ["fas", "sign-in-alt"] }),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", { className: "btn mytooltiptext" }, "SIGN IN")));
        user.push(logInOut);
        var selectedCommunity = ['/soundboard', '/news', '/event'];
        var communityClasses = "btn dropdown-toggle";
        if (selectedCommunity.includes(this.props.location.pathname)) {
            communityClasses += " selected ";
        }
        return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("header", null,
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "container" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "logo", ref: this.logoRef, style: { marginBottom: this.state.logoMargin + 'px' } },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_1__["NavLink"], { role: "menuitem", tabIndex: -1, to: '/' },
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("img", { className: "logo-img", src: "/images/pencil4lifelogo-blue-transparent.png", alt: "Pencil4Life" })))),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "container nav-wrapper", ref: this.navRef, style: { position: this.state.navPosition } },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("nav", null,
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_1__["NavLink"], { exact: true, className: "btn", role: "menuitem", tabIndex: -1, to: '/', activeClassName: "selected" }, "HOME"),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_1__["NavLink"], { exact: true, className: "btn", role: "menuitem", tabIndex: -1, to: '/project', activeClassName: "selected" }, "PROJECTS"),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_1__["NavLink"], { exact: true, className: "btn", role: "menuitem", tabIndex: -1, to: '/doodles', activeClassName: "selected" }, "DOODLES"),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_1__["NavLink"], { exact: true, className: "btn", role: "menuitem", tabIndex: -1, to: '/comics', activeClassName: "selected" }, "COMICS"),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utilities_dropdown__WEBPACK_IMPORTED_MODULE_9__["default"], { toggleClass: communityClasses, toggleChild: 'COMMUNITY' },
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_1__["NavLink"], { className: "btn dropdown-item", exact: true, role: "menuitem", tabIndex: -1, to: '/event', activeClassName: "selected" }, "EVENTS"),
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_1__["NavLink"], { className: "btn dropdown-item", exact: true, role: "menuitem", tabIndex: -1, to: '/news', activeClassName: "selected" }, "NEWS"),
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_1__["NavLink"], { className: "btn dropdown-item", exact: true, role: "menuitem", tabIndex: -1, to: '/soundboard', activeClassName: "selected" }, "SOUNDBOARD")),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_1__["NavLink"], { exact: true, className: "btn", role: "menuitem", tabIndex: -1, to: '/shop', activeClassName: "selected" }, "SHOP"),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_1__["NavLink"], { exact: true, className: "btn", role: "menuitem", tabIndex: -1, to: '/commission', activeClassName: "selected" }, "COMMISSION"),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_1__["NavLink"], { exact: true, className: "btn", role: "menuitem", tabIndex: -1, to: '/info', activeClassName: "selected" }, "INFO"),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_1__["NavLink"], { exact: true, className: "btn", role: "menuitem", tabIndex: -1, to: '/contact', activeClassName: "selected" }, "CONTACT")),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "user-info" }, user))));
    };
    return Header;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]));
;
/* harmony default export */ __webpack_exports__["default"] = (Object(_user_user_provider__WEBPACK_IMPORTED_MODULE_10__["userConsumer"])(Object(_event_listener_event_listener__WEBPACK_IMPORTED_MODULE_8__["eventListenerConsumer"])(Object(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["withRouter"])(Header))));


/***/ }),

/***/ "./client/src/components/utilities/dropdown.tsx":
/*!******************************************************!*\
  !*** ./client/src/components/utilities/dropdown.tsx ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

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

var Dropdown = /** @class */ (function (_super) {
    __extends(Dropdown, _super);
    function Dropdown(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            show: false,
            over: true,
        };
        _this.dropDownToggle = _this.dropDownToggle.bind(_this);
        _this.click = _this.click.bind(_this);
        _this.onMouseEnter = _this.onMouseEnter.bind(_this);
        _this.onMouseLeave = _this.onMouseLeave.bind(_this);
        _this.onMouseMove = _this.onMouseMove.bind(_this);
        _this.onClick = _this.onClick.bind(_this);
        return _this;
    }
    Dropdown.prototype.componentDidMount = function () {
        // event to hide dropdown list
        window.addEventListener('click', this.click);
    };
    Dropdown.prototype.componentWillUnmount = function () {
        // remove eventlisters
        window.removeEventListener('click', this.click);
    };
    Dropdown.prototype.click = function (e) {
        if (!this.state.over) {
            this.setState(function (prevState, props) {
                return { show: false };
            });
        }
    };
    Dropdown.prototype.dropDownToggle = function (e) {
        var _this = this;
        e.preventDefault();
        this.setState(function (prevState, props) {
            if (_this.state.show == false) {
                return { show: true };
            }
            else {
                return { show: false };
            }
        });
    };
    Dropdown.prototype.onMouseEnter = function () {
        this.setState(function (prevState, props) {
            return { over: true };
        });
    };
    Dropdown.prototype.onMouseMove = function () {
        this.setState(function (prevState, props) {
            return { over: true };
        });
    };
    Dropdown.prototype.onMouseLeave = function () {
        this.setState(function (prevState, props) {
            return { over: false };
        });
    };
    Dropdown.prototype.onClick = function () {
        this.setState(function (prevState, props) {
            return { over: false, show: false };
        });
    };
    Dropdown.prototype.render = function () {
        var show = this.state.show;
        var _a = this.props, toggleClass = _a.toggleClass, menuClass = _a.menuClass, toggleChild = _a.toggleChild, children = _a.children;
        var _toggleClass, _menuClass, _toggleChild, _children;
        _toggleClass = !!toggleClass ? toggleClass : 'btn dropdown-toggle';
        _menuClass = !!menuClass ? menuClass : 'dropdown-menu';
        _toggleChild = !!toggleChild ? toggleChild : 'Menu';
        _children = !!children ? children : [
            (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("a", { key: '1', className: 'dropdown-item', href: "" }, "Item 1")),
            (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("a", { key: '2', className: 'dropdown-item', href: "" }, "Item 2")),
            (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("a", { key: '3', className: 'dropdown-item', href: "" }, "Item 3")),
        ];
        if (show) {
            _menuClass += ' show ';
        }
        else {
            _menuClass = _menuClass.replace('show', '');
        }
        return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "dropdown show", onMouseLeave: this.onMouseLeave, onMouseMove: this.onMouseMove, onMouseEnter: this.onMouseEnter },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("a", { className: _toggleClass, href: "", role: "button", id: "dropdownMenuLink", "data-toggle": "dropdown", "aria-haspopup": "true", "aria-expanded": "false", onClick: this.dropDownToggle }, _toggleChild),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: _menuClass, "aria-labelledby": "dropdownMenuLink", onClick: this.onClick }, _children)));
    };
    return Dropdown;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]));
;
/* harmony default export */ __webpack_exports__["default"] = (Dropdown);


/***/ }),

/***/ "./node_modules/@fortawesome/fontawesome-free-solid/faCheckSquare.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@fortawesome/fontawesome-free-solid/faCheckSquare.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = { prefix: 'fas', iconName: 'check-square', icon: [448, 512, [], "f14a", "M400 480H48c-26.51 0-48-21.49-48-48V80c0-26.51 21.49-48 48-48h352c26.51 0 48 21.49 48 48v352c0 26.51-21.49 48-48 48zm-204.686-98.059l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.248-16.379-6.249-22.628 0L184 302.745l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.25 16.379 6.25 22.628.001z"] };

/***/ }),

/***/ "./node_modules/@fortawesome/fontawesome-free-solid/faSignInAlt.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@fortawesome/fontawesome-free-solid/faSignInAlt.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = { prefix: 'fas', iconName: 'sign-in-alt', icon: [512, 512, [], "f2f6", "M416 448h-84c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h84c17.7 0 32-14.3 32-32V160c0-17.7-14.3-32-32-32h-84c-6.6 0-12-5.4-12-12V76c0-6.6 5.4-12 12-12h84c53 0 96 43 96 96v192c0 53-43 96-96 96zm-47-201L201 79c-15-15-41-4.5-41 17v96H24c-13.3 0-24 10.7-24 24v96c0 13.3 10.7 24 24 24h136v96c0 21.5 26 32 41 17l168-168c9.3-9.4 9.3-24.6 0-34z"] };

/***/ }),

/***/ "./node_modules/@fortawesome/fontawesome-free-solid/faSignOutAlt.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@fortawesome/fontawesome-free-solid/faSignOutAlt.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = { prefix: 'fas', iconName: 'sign-out-alt', icon: [512, 512, [], "f2f5", "M497 273L329 441c-15 15-41 4.5-41-17v-96H152c-13.3 0-24-10.7-24-24v-96c0-13.3 10.7-24 24-24h136V88c0-21.4 25.9-32 41-17l168 168c9.3 9.4 9.3 24.6 0 34zM192 436v-40c0-6.6-5.4-12-12-12H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h84c6.6 0 12-5.4 12-12V76c0-6.6-5.4-12-12-12H96c-53 0-96 43-96 96v192c0 53 43 96 96 96h84c6.6 0 12-5.4 12-12z"] };

/***/ }),

/***/ "./node_modules/@fortawesome/fontawesome-free-solid/faUserAlt.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@fortawesome/fontawesome-free-solid/faUserAlt.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = { prefix: 'fas', iconName: 'user-alt', icon: [512, 512, [], "f406", "M256 288c79.5 0 144-64.5 144-144S335.5 0 256 0 112 64.5 112 144s64.5 144 144 144zm128 32h-55.1c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16H128C57.3 320 0 377.3 0 448v16c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48v-16c0-70.7-57.3-128-128-128z"] };

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/less-loader/dist/cjs.js!./client/src/components/header/header.less":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/less-loader/dist/cjs.js!./client/src/components/header/header.less ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "header {\n  margin: 0 0 20px 0;\n  color: white;\n}\nheader .dropdown-toggle::after {\n  display: inline-block;\n  width: 0;\n  height: 0;\n  margin-left: .255em;\n  vertical-align: .255em;\n  content: \"\";\n  border-top: .3em solid;\n  border-right: .3em solid transparent;\n  border-bottom: 0;\n  border-left: .3em solid transparent;\n}\nheader .logo {\n  background: -webkit-linear-gradient(#727c92, white);\n  background: -o-linear-gradient(#727c92, white);\n  background: linear-gradient(#727c92, white);\n}\nheader .logo a .logo-img {\n  width: 100%;\n  padding: 20px 0;\n}\nheader .user-info {\n  display: flex;\n  justify-content: flex-end;\n}\nheader .user-info > * {\n  margin: 0.3em 0.2em !important;\n}\nheader .user-info > .btn {\n  background: #172B57;\n}\nheader .user-info > .btn a {\n  padding: 0;\n}\nheader .user-info .mytooltip {\n  position: relative;\n  display: inline-block;\n}\nheader .user-info .mytooltip:hover {\n  border-radius: 0 0.25em 0.25em 0;\n}\nheader .user-info .mytooltip .mytooltiptext {\n  display: none;\n  background-color: #2e4067;\n  color: #fff;\n  border: 3px solid #172b57;\n  text-align: center;\n  border-radius: 0.25em 0 0 0.25em;\n  position: absolute;\n  z-index: 1;\n  top: -1px;\n  right: 100%;\n  font-size: 1em;\n  /*\t\t    visibility: hidden;\n\t\t    width: 120px;\n\t\t    background-color: black;\n\t\t    color: #fff;\n\t\t    text-align: center;\n\t\t    border-radius: 6px;\n\t\t    padding: 5px 0;*/\n  /* Position the mytooltip */\n  /*\t\t    position: absolute;\n\t\t    z-index: 1;\n\t\t    top: 0;\n\t\t    right: 125%;*/\n}\nheader .user-info .mytooltip:hover .mytooltiptext {\n  display: inline-block;\n  background-color: #172B57;\n  border-color: #4d5f86;\n}\nheader .nav-wrapper {\n  top: 0;\n  right: 0;\n  left: 0;\n  z-index: 9999;\n}\nheader .nav-wrapper nav {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-around;\n  background-color: #172B57;\n  margin: 0;\n}\nheader .user-info .selected,\nheader .nav-wrapper nav .selected {\n  text-decoration: underline;\n}\nheader .user-info a,\nheader .nav-wrapper nav a {\n  font-family: \"QueenOfCamelot\", \"Lato\", sans-serif;\n  color: white;\n  margin: 0;\n  font-size: 1em;\n  text-decoration: none;\n  padding: 0.5em;\n  background-color: #172B57;\n}\nheader .user-info a:hover,\nheader .nav-wrapper nav a:hover,\nheader .user-info a:focus,\nheader .nav-wrapper nav a:focus {\n  outline: none;\n  color: white;\n  text-decoration: none;\n  box-shadow: none;\n  background-color: #4d5f86;\n}\nheader .user-info .dropdown-menu,\nheader .nav-wrapper nav .dropdown-menu,\nheader .user-info .dropdown-menu-right,\nheader .nav-wrapper nav .dropdown-menu-right {\n  display: none;\n  border: none;\n  border-radius: unset;\n  margin: 0.167rem 0 0 0;\n  padding: 0;\n  background-color: #172B57;\n}\nheader .user-info .dropdown-menu .btn,\nheader .nav-wrapper nav .dropdown-menu .btn,\nheader .user-info .dropdown-menu-right .btn,\nheader .nav-wrapper nav .dropdown-menu-right .btn {\n  display: block;\n  text-align: unset;\n}\nheader .user-info .dropdown-menu-right,\nheader .nav-wrapper nav .dropdown-menu-right {\n  position: absolute;\n  right: 0;\n}\nheader .user-info .dropdown-menu-right > *,\nheader .nav-wrapper nav .dropdown-menu-right > * {\n  justify-self: right;\n}\nheader .user-info .show,\nheader .nav-wrapper nav .show {\n  display: block;\n}\n/*.header-wrapper {\n    \n\tbackground-color: white;\n\t> ul {\t\n\t\t> li {\n\t\t\tpadding: 0px 10px;\n\t\t\tdisplay: inline-block;\n\t\t\tcolor: @red;\n\t\t}\n\t}\n\n    > * {\n    \tpadding: 10px 0px;\n    \tmargin: 0;\n    }\n\n    .logo {\n\n\t\t.logo-img {\n\t\t\twidth: 100%;\n\t\t}\n    \tp {\n\t    \tcolor: @red;\n\t    \tfont-family: 'Pacifico', cursive;\n\t    \tmargin: 0;\n    \t}\n    }\n\n    a {\n\t    color: #ffffff;\n\t    display: inline-block;\n\t    padding: 0 10px;\n    \n    }\n    .selected {\n\t\tcolor: @red;\n\t}\n\n    .profile-image {\n\t\tborder-radius: 50%;\n\t\twidth: 25px;\n\t\theight: 25px;\n\t\tdisplay: inline-block;\n\t\tvertical-align: middle;\n\t\tmargin-left: 10px;\n\t\tposition: relative;\n\t\ttop: -2px;\n\t}\n\n    #navmenu-items {\n\t\tposition: absolute;\n\t\ttop: 31px;\n\t\tright: 0px;\n\t\tbackground-color: @black;\n\t\twidth: 200px;\n\t\tz-index: 99;\n\t\t> li {\n\t\t\t> a, > p {\n\t\t\t\tdisplay: block;\n\t\t\t\tpadding: 10px;\n\t\t\t\tmargin: 0;\n\t\t\t\tborder-top: 1px solid black;\n\t\t\t}\n\t\t\ta:hover {\n\t\t\t\ttext-decoration: none;\n\t\t\t\tbackground: #3a3a3a;\n\t\t\t}\n\t\t}\n    }\n}*/\n", ""]);

// exports


/***/ })

}]);
//# sourceMappingURL=1.index_bundle.js.map