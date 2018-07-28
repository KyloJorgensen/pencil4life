(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ "./client/src/components/footer/footer-bar.tsx":
/*!*****************************************************!*\
  !*** ./client/src/components/footer/footer-bar.tsx ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.es.js");
/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./footer */ "./client/src/components/footer/footer.tsx");

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



var FooterBarWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\tbackground-color: black;\n\tposition: sticky;\n\tbottom: 0;\n\tz-index: 49;\n\toverflow: hidden;\n\n\t.footer-bar {\n\t\tbackground-color: black;\n\t\theight: 2em;\n\t\ttransform: translate(0, 1px);\n\t}\n"], ["\n\tbackground-color: black;\n\tposition: sticky;\n\tbottom: 0;\n\tz-index: 49;\n\toverflow: hidden;\n\n\t.footer-bar {\n\t\tbackground-color: black;\n\t\theight: 2em;\n\t\ttransform: translate(0, 1px);\n\t}\n"])));
var FooterBar = /** @class */ (function (_super) {
    __extends(FooterBar, _super);
    function FooterBar(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            show: false,
            over: false,
        };
        _this.popUpToggle = _this.popUpToggle.bind(_this);
        _this.handleOutsideClick = _this.handleOutsideClick.bind(_this);
        _this.handleOutsideScroll = _this.handleOutsideScroll.bind(_this);
        _this.handleMouseEnter = _this.handleMouseEnter.bind(_this);
        _this.handleMouseLeave = _this.handleMouseLeave.bind(_this);
        _this.handleMouseMove = _this.handleMouseMove.bind(_this);
        return _this;
    }
    FooterBar.prototype.popUpToggle = function () {
        this.setState(function (prevState) { return { show: !prevState.show }; });
    };
    FooterBar.prototype.handleOutsideClick = function () {
        if (!this.state.over) {
            this.setState(function () { return { show: false }; });
        }
    };
    FooterBar.prototype.handleOutsideScroll = function () {
        this.setState(function () { return { show: false }; });
    };
    FooterBar.prototype.handleMouseEnter = function () {
        this.setState(function () { return { over: true }; });
    };
    FooterBar.prototype.handleMouseLeave = function () {
        this.setState(function () { return { over: false }; });
    };
    FooterBar.prototype.handleMouseMove = function () {
        this.setState(function () { return { over: true }; });
    };
    FooterBar.prototype.componentDidMount = function () {
        window.addEventListener('scroll', this.handleOutsideScroll);
        window.addEventListener('click', this.handleOutsideClick);
    };
    FooterBar.prototype.componentWillUnmount = function () {
        window.removeEventListener('scroll', this.handleOutsideScroll);
        window.removeEventListener('click', this.handleOutsideClick);
    };
    FooterBar.prototype.render = function () {
        var _a = this, handleMouseEnter = _a.handleMouseEnter, handleMouseLeave = _a.handleMouseLeave, handleMouseMove = _a.handleMouseMove, popUpToggle = _a.popUpToggle;
        var show = this.state.show;
        return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](FooterBarWrapper, null,
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { onMouseLeave: handleMouseLeave, onMouseMove: handleMouseMove, onMouseEnter: handleMouseEnter, onClick: popUpToggle },
                show ? (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_footer__WEBPACK_IMPORTED_MODULE_2__["default"], null)) : '',
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "footer-bar" }))));
    };
    return FooterBar;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]));
;
/* harmony default export */ __webpack_exports__["default"] = (FooterBar);
var templateObject_1;


/***/ }),

/***/ "./client/src/components/footer/footer.tsx":
/*!*************************************************!*\
  !*** ./client/src/components/footer/footer.tsx ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fortawesome_fontawesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/fontawesome */ "./node_modules/@fortawesome/fontawesome/index.es.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _fortawesome_fontawesome_free_brands__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/fontawesome-free-brands */ "./node_modules/@fortawesome/fontawesome-free-brands/index.es.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.es.js");

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





_fortawesome_fontawesome__WEBPACK_IMPORTED_MODULE_1__["default"].library.add(_fortawesome_fontawesome_free_brands__WEBPACK_IMPORTED_MODULE_3__["default"]);
var FooterWrapper = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].footer(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\tbackground-color: black;\n\t/*padding: 64px;*/\n\tposition: relative;\n\tleft: 0;\n\tright: 0;\n\tbottom: 0;\n\tz-index: 50;\t\n\t.container {\n\t\tdisplay: flex;\n\t\tjustify-content: space-around;\n\t\tflex-wrap: wrap;\n\t\tmargin-left: auto; \n\t\tmargin-right: auto;\n\t\tpadding: 0.5em;\n\n\t}\n\n\t.social {\n\t\ta {\n\t\t\tcolor: #ffffff;\n\t\t\tfont-size: 2.5em;\n\t\t\tpadding: 0.5em;\n\t\t}\n\t}\n\n\t.legal, .legal * {\n\t\tcolor: #454545;\n\t\tfont-size: 1em;\n\t\tpadding-top: 0;\n\t\tpadding-bottom: 1em;\n\t\tmargin-bottom: 0;\n\t}\n\n"], ["\n\tbackground-color: black;\n\t/*padding: 64px;*/\n\tposition: relative;\n\tleft: 0;\n\tright: 0;\n\tbottom: 0;\n\tz-index: 50;\t\n\t.container {\n\t\tdisplay: flex;\n\t\tjustify-content: space-around;\n\t\tflex-wrap: wrap;\n\t\tmargin-left: auto; \n\t\tmargin-right: auto;\n\t\tpadding: 0.5em;\n\n\t}\n\n\t.social {\n\t\ta {\n\t\t\tcolor: #ffffff;\n\t\t\tfont-size: 2.5em;\n\t\t\tpadding: 0.5em;\n\t\t}\n\t}\n\n\t.legal, .legal * {\n\t\tcolor: #454545;\n\t\tfont-size: 1em;\n\t\tpadding-top: 0;\n\t\tpadding-bottom: 1em;\n\t\tmargin-bottom: 0;\n\t}\n\n"])));
var Footer = /** @class */ (function (_super) {
    __extends(Footer, _super);
    function Footer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Footer.prototype.render = function () {
        return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](FooterWrapper, null,
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "social container" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("a", { href: "https://www.instagram.com/pencil.4.life/", target: "_blank" },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeIcon"], { icon: ["fab", "instagram"] })),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("a", { href: "https://www.twitch.tv/pencil4life", target: "_blank" },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeIcon"], { icon: ["fab", "twitch"] })),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("a", { href: "https://twitter.com/pencil4life", target: "_blank" },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeIcon"], { icon: ["fab", "twitter"] })),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("a", { href: "https://www.facebook.com/pencil4life/?ref=br_rs", target: "_blank" },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeIcon"], { icon: ["fab", "facebook-f"] }))),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "legal container" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("a", { href: "" }, "\u00A9Pencil4Life"),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("a", { href: "" }, "\u00A9Brad Ashworth"),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("a", { href: "" }, "\u00A9Kylo Jorgensen"),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("a", { href: "" }, "Privacy Policy"),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("a", { href: "" }, "User Agreement"))));
    };
    return Footer;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]));
;
/* harmony default export */ __webpack_exports__["default"] = (Footer);
var templateObject_1;


/***/ })

}]);
//# sourceMappingURL=4.index_bundle.js.map