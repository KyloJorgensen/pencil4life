(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

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
/* harmony import */ var _utilities_styled_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utilities/styled.components */ "./client/src/components/utilities/styled.components.tsx");
/* harmony import */ var _utilities_dropdown__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../utilities/dropdown */ "./client/src/components/utilities/dropdown.tsx");
/* harmony import */ var _user_user_provider__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../user/user-provider */ "./client/src/components/user/user-provider.tsx");

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











_fortawesome_fontawesome__WEBPACK_IMPORTED_MODULE_2__["library"].add(_fortawesome_fontawesome_free_solid_faCheckSquare__WEBPACK_IMPORTED_MODULE_4__, _fortawesome_fontawesome_free_solid_faSignInAlt__WEBPACK_IMPORTED_MODULE_5__, _fortawesome_fontawesome_free_solid_faSignOutAlt__WEBPACK_IMPORTED_MODULE_6__, _fortawesome_fontawesome_free_solid_faUserAlt__WEBPACK_IMPORTED_MODULE_7__);
var HeaderWrapper = _utilities_styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].header(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\tmargin: 0 0 20px 0;\n\tcolor: white;\n\t\n\t@media (min-width: 768px) {\n\t\tposition: sticky;\n\t\ttop: 0;\n\t\tz-index: 9999;\n\t}\n\n\t.dropdown-toggle::after {\n\t\tdisplay: inline-block;\n\t\twidth: 0;\n\t\theight: 0;\n\t\tmargin-left: .255em;\n\t\tvertical-align: .255em;\n\t\tcontent: \"\";\n\t\tborder-top: .3em solid;\n\t\tborder-right: .3em solid transparent;\n\t\tborder-bottom: 0;\n\t\tborder-left: .3em solid transparent;\n\t}\n\n\t.user-info {\n\t\tdisplay: flex;\n\t\tjustify-content: flex-end;\n\n\t\t> * {\n\t\t\tmargin: 0.3em 0.2em !important;\n\n\t\t}\n\n\t\t> .btn {\n\t\t\tbackground: ", ";\n\t\t\ta {\n\t\t\t\tpadding: 0;\n\t\t\t}\n\t\t}\n\t}\n\n\t.nav-wrapper {\n\t\tnav {\n\t\t\tdisplay: flex;\n\t\t\tflex-wrap: wrap;\n\t\t\tjustify-content: space-around;\n\t\t\tbackground-color: ", ";\n\t\t\tmargin: 0;\n\t\t}\n\t}\n\t.user-info, .nav-wrapper nav {\n\t\t.selected {\n\t\t\ttext-decoration: underline;\n\t\t}\n\n\t\ta {\n\t\t\tfont-family: \"QueenOfCamelot\", \"Lato\", sans-serif;\n\t\t\tcolor: white;\n\t\t\tmargin: 0;\n\t\t\tfont-size: 1em;\n\t\t\ttext-decoration: none;\n\t\t\tpadding: 0.5em;\n\t\t\tbackground-color: ", ";\n\t\t}\n\n\t\ta:hover, a:focus{\n\t\t\toutline: none;\n\t\t\tcolor: white;\n\t\t\ttext-decoration: none;\n\t\t\tbox-shadow: none;\n\t\t\tbackground-color: ", ";\n\t\t}\n\t\t.dropdown-menu, .dropdown-menu-right {\n\t\t\tdisplay: none;\n\t\t\tborder: none;\n\t\t\tborder-radius: unset;\n\t\t\tmargin: 0.167rem 0 0 0;\n\t\t\tpadding: 0;\n\t\t\tbackground-color: ", ";\n\t\t\t.btn {\n\t\t\t\tdisplay: block;\n\t\t\t\ttext-align: unset;\n\t\t\t}\n\t\t}\n\t\t.dropdown-menu-right {\n\t\t\tposition: absolute;\n\t\t\tright: 0;\n\t\t\t> * {\n\t\t\t\tjustify-self: right;\n\t\t\t}\n\t\t}\n\t\t.show {\n\t\t\tdisplay: block;\n\t\t}\n\t}\n"], ["\n\tmargin: 0 0 20px 0;\n\tcolor: white;\n\t\n\t@media (min-width: 768px) {\n\t\tposition: sticky;\n\t\ttop: 0;\n\t\tz-index: 9999;\n\t}\n\n\t.dropdown-toggle::after {\n\t\tdisplay: inline-block;\n\t\twidth: 0;\n\t\theight: 0;\n\t\tmargin-left: .255em;\n\t\tvertical-align: .255em;\n\t\tcontent: \"\";\n\t\tborder-top: .3em solid;\n\t\tborder-right: .3em solid transparent;\n\t\tborder-bottom: 0;\n\t\tborder-left: .3em solid transparent;\n\t}\n\n\t.user-info {\n\t\tdisplay: flex;\n\t\tjustify-content: flex-end;\n\n\t\t> * {\n\t\t\tmargin: 0.3em 0.2em !important;\n\n\t\t}\n\n\t\t> .btn {\n\t\t\tbackground: ", ";\n\t\t\ta {\n\t\t\t\tpadding: 0;\n\t\t\t}\n\t\t}\n\t}\n\n\t.nav-wrapper {\n\t\tnav {\n\t\t\tdisplay: flex;\n\t\t\tflex-wrap: wrap;\n\t\t\tjustify-content: space-around;\n\t\t\tbackground-color: ", ";\n\t\t\tmargin: 0;\n\t\t}\n\t}\n\t.user-info, .nav-wrapper nav {\n\t\t.selected {\n\t\t\ttext-decoration: underline;\n\t\t}\n\n\t\ta {\n\t\t\tfont-family: \"QueenOfCamelot\", \"Lato\", sans-serif;\n\t\t\tcolor: white;\n\t\t\tmargin: 0;\n\t\t\tfont-size: 1em;\n\t\t\ttext-decoration: none;\n\t\t\tpadding: 0.5em;\n\t\t\tbackground-color: ", ";\n\t\t}\n\n\t\ta:hover, a:focus{\n\t\t\toutline: none;\n\t\t\tcolor: white;\n\t\t\ttext-decoration: none;\n\t\t\tbox-shadow: none;\n\t\t\tbackground-color: ", ";\n\t\t}\n\t\t.dropdown-menu, .dropdown-menu-right {\n\t\t\tdisplay: none;\n\t\t\tborder: none;\n\t\t\tborder-radius: unset;\n\t\t\tmargin: 0.167rem 0 0 0;\n\t\t\tpadding: 0;\n\t\t\tbackground-color: ", ";\n\t\t\t.btn {\n\t\t\t\tdisplay: block;\n\t\t\t\ttext-align: unset;\n\t\t\t}\n\t\t}\n\t\t.dropdown-menu-right {\n\t\t\tposition: absolute;\n\t\t\tright: 0;\n\t\t\t> * {\n\t\t\t\tjustify-self: right;\n\t\t\t}\n\t\t}\n\t\t.show {\n\t\t\tdisplay: block;\n\t\t}\n\t}\n"])), function (props) { return props.theme.darkblue; }, function (props) { return props.theme.darkblue; }, function (props) { return props.theme.darkblue; }, function (props) { return props.theme.highlightblue; }, function (props) { return props.theme.darkblue; });
var Header = /** @class */ (function (_super) {
    __extends(Header, _super);
    function Header(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            navPosition: 'initial',
        };
        _this.logout = _this.logout.bind(_this);
        return _this;
    }
    Header.prototype.logout = function () {
        this.props.user.logout();
    };
    Header.prototype.componentDidMount = function () {
        this.props.user.getUser();
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
        var profile = this.props.user.userAccess ? (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_1__["NavLink"], { exact: true, key: "profile", className: "btn", role: "menuitem", tabIndex: -1, to: '/profile', activeClassName: "selected" },
            "PROFILE ",
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], { icon: ["fas", "user-alt"] }))) : '';
        user.push(profile);
        var logInOut = this.props.user.userAccess ? (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("a", { key: "logout", className: "btn", onClick: this.logout },
            "SIGN OUT ",
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], { icon: ["fas", "sign-out-alt"] }))) : (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_1__["NavLink"], { exact: true, key: "login", className: "btn", role: "menuitem", tabIndex: -1, to: {
                pathname: '/login',
                state: {
                    redirectPath: this.props.location.pathname
                }
            }, activeClassName: "selected" },
            "SIGN IN ",
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], { icon: ["fas", "sign-in-alt"] })));
        user.push(logInOut);
        var selectedCommunity = ['/soundboard', '/news', '/event'];
        var communityClasses = "btn dropdown-toggle";
        if (selectedCommunity.includes(this.props.location.pathname)) {
            communityClasses += " selected ";
        }
        return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](HeaderWrapper, { theme: _utilities_styled_components__WEBPACK_IMPORTED_MODULE_8__["defaultTheme"] },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "container nav-wrapper" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("nav", null,
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_1__["NavLink"], { exact: true, className: "btn", role: "menuitem", tabIndex: -1, to: '/', activeClassName: "selected" }, "HOME"),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_1__["NavLink"], { exact: true, className: "btn", role: "menuitem", tabIndex: -1, to: '/project', activeClassName: "selected" }, "PROJECTS"),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_1__["NavLink"], { exact: true, className: "btn", role: "menuitem", tabIndex: -1, to: '/doodle', activeClassName: "selected" }, "DOODLES"),
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
/* harmony default export */ __webpack_exports__["default"] = (Object(_user_user_provider__WEBPACK_IMPORTED_MODULE_10__["userConsumer"])(Object(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["withRouter"])(Header)));
var templateObject_1;


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

/***/ "./client/src/components/utilities/styled.components.tsx":
/*!***************************************************************!*\
  !*** ./client/src/components/utilities/styled.components.tsx ***!
  \***************************************************************/
/*! exports provided: css, injectGlobal, keyframes, ThemeProvider, default, defaultTheme, Popout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "css", function() { return css; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "injectGlobal", function() { return injectGlobal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "keyframes", function() { return keyframes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemeProvider", function() { return ThemeProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultTheme", function() { return defaultTheme; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Popout", function() { return Popout; });
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
var Popout = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\tposition: fixed;\n\ttop: 0;\n\tbottom: 0;\n\tleft: 0;\n\tright: 0;\n\tbackground: rgba(0, 0, 0, 0.85);\n\tz-index: 10000;\n\t> * {\n\t\tposition: relative;\n\t\ttop: 50%;\n\t\tleft: 50%;\n\t\ttransform: translate(-50%, -50%);\n\t\tmargin: 0;\n\t\toverflow: auto;    \n\t\tmax-height: 100%;\n\t\tpadding: 2em 0;\n\t}\n\t\n"], ["\n\tposition: fixed;\n\ttop: 0;\n\tbottom: 0;\n\tleft: 0;\n\tright: 0;\n\tbackground: rgba(0, 0, 0, 0.85);\n\tz-index: 10000;\n\t> * {\n\t\tposition: relative;\n\t\ttop: 50%;\n\t\tleft: 50%;\n\t\ttransform: translate(-50%, -50%);\n\t\tmargin: 0;\n\t\toverflow: auto;    \n\t\tmax-height: 100%;\n\t\tpadding: 2em 0;\n\t}\n\t\n"])));
var templateObject_1;


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

/***/ })

}]);
//# sourceMappingURL=2.index_bundle.js.map