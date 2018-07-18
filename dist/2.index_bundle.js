(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "./client/src/components/footer/footer.less":
/*!**************************************************!*\
  !*** ./client/src/components/footer/footer.less ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/less-loader/dist/cjs.js!./footer.less */ "./node_modules/css-loader/index.js!./node_modules/less-loader/dist/cjs.js!./client/src/components/footer/footer.less");

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
/* harmony import */ var _event_listener_event_listener__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../event-listener/event-listener */ "./client/src/components/event-listener/event-listener.tsx");
/* harmony import */ var _footer_less__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./footer.less */ "./client/src/components/footer/footer.less");
/* harmony import */ var _footer_less__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_footer_less__WEBPACK_IMPORTED_MODULE_5__);

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
var Footer = /** @class */ (function (_super) {
    __extends(Footer, _super);
    function Footer(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            show: false,
            over: false,
        };
        _this.popUpToggle = _this.popUpToggle.bind(_this);
        _this.handleOutsideClick = _this.handleOutsideClick.bind(_this);
        _this.handleMouseEnter = _this.handleMouseEnter.bind(_this);
        _this.handleMouseLeave = _this.handleMouseLeave.bind(_this);
        _this.handleMouseMove = _this.handleMouseMove.bind(_this);
        _this.handleClick = _this.handleClick.bind(_this);
        return _this;
    }
    Footer.prototype.popUpToggle = function () {
        this.setState(function (prevState) { return { show: !prevState.show }; });
    };
    Footer.prototype.handleOutsideClick = function () {
        if (!this.state.over) {
            this.setState(function () { return { show: false }; });
        }
    };
    Footer.prototype.handleMouseEnter = function () {
        this.setState(function () { return { over: true }; });
    };
    Footer.prototype.handleMouseLeave = function () {
        this.setState(function () { return { over: false }; });
    };
    Footer.prototype.handleMouseMove = function () {
        this.setState(function () { return { over: true }; });
    };
    Footer.prototype.handleClick = function () {
        this.setState(function () { return { show: false, over: false }; });
    };
    Footer.prototype.componentDidMount = function () {
        this.props.addEventListener('scroll', this.handleOutsideClick);
        this.props.addEventListener('click', this.handleOutsideClick);
    };
    Footer.prototype.componentWillUnmount = function () {
        this.props.removeEventListener('scroll', this.handleOutsideClick);
        this.props.removeEventListener('click', this.handleOutsideClick);
    };
    Footer.prototype.render = function () {
        var _a = this, handleClick = _a.handleClick, handleMouseEnter = _a.handleMouseEnter, handleMouseLeave = _a.handleMouseLeave, handleMouseMove = _a.handleMouseMove, popUpToggle = _a.popUpToggle;
        var show = this.state.show;
        var footerBodyClass = show ? 'footer-body fixed' : 'footer-body';
        var BodyFillerClass = show ? 'container' : 'hide';
        return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("footer", { id: "footer" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: footerBodyClass, onMouseLeave: handleMouseLeave, onMouseMove: handleMouseMove, onMouseEnter: handleMouseEnter, onClick: handleClick },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "container" },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("a", { href: "https://www.instagram.com/pencil.4.life/" },
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeIcon"], { icon: ["fab", "instagram"] })),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("a", { href: "https://www.twitch.tv/pencil4life" },
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeIcon"], { icon: ["fab", "twitch"] })),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("a", { href: "https://twitter.com/pencil4life" },
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeIcon"], { icon: ["fab", "twitter"] })),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("a", { href: "https://www.facebook.com/pencil4life/?ref=br_rs" },
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeIcon"], { icon: ["fab", "facebook-f"] }))),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "legal container" },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("a", { href: "" }, "\u00A9Pencil4Life"),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("a", { href: "" }, "\u00A9Brad Ashworth"),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("a", { href: "" }, "\u00A9Kylo Jorgensen"),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("a", { href: "" }, "Privacy Policy"),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("a", { href: "" }, "User Agreement"))),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: BodyFillerClass },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("a", { href: "" }, "This is the body filler")),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "footer-bar", onMouseMove: handleMouseMove, onMouseEnter: handleMouseEnter, onClick: popUpToggle })));
    };
    return Footer;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]));
;
/* harmony default export */ __webpack_exports__["default"] = (Object(_event_listener_event_listener__WEBPACK_IMPORTED_MODULE_4__["eventListenerConsumer"])(Footer));


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/less-loader/dist/cjs.js!./client/src/components/footer/footer.less":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/less-loader/dist/cjs.js!./client/src/components/footer/footer.less ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".hide {\n  display: none;\n}\nfooter {\n  background-color: black;\n  /*padding: 64px;*/\n}\nfooter .footer-body {\n  background: black;\n  position: relative;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  z-index: 10;\n}\nfooter .footer-body .legal,\nfooter .footer-body .legal * {\n  color: #454545;\n  font-size: 1em;\n  padding-top: 0;\n  padding-bottom: 0;\n  margin-bottom: 0;\n}\nfooter .fixed {\n  position: fixed;\n}\nfooter .footer-bar {\n  background-color: black;\n  position: fixed;\n  bottom: 0;\n  right: 0;\n  left: 0;\n  height: 2em;\n  z-index: 2;\n}\nfooter .container {\n  display: flex;\n  justify-content: space-around;\n  flex-wrap: wrap;\n  margin-left: auto;\n  margin-right: auto;\n  padding: 0.5em;\n}\nfooter .container a {\n  color: #ffffff;\n  font-size: 2.5em;\n  padding: 0.5em;\n}\n", ""]);

// exports


/***/ })

}]);
//# sourceMappingURL=2.index_bundle.js.map