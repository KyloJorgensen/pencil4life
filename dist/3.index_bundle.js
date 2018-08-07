(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

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
var FooterWrapper = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].footer(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\tbackground-color: black;\n\t/*padding: 64px;*/\n\tposition: relative;\n\tleft: 0;\n\tright: 0;\n\tbottom: 0;\n\tz-index: 50;\t\n\t.container {\n\t\tdisplay: flex;\n\t\tjustify-content: space-around;\n\t\tflex-wrap: wrap;\n\t\tmargin-left: auto; \n\t\tmargin-right: auto;\n\t\tpadding: 0.5em;\n\t}\n\n\t.social {\n\t\ta {\n\t\t\tcolor: #ffffff;\n\t\t\tfont-size: 2.5em;\n\t\t\tpadding: 0.3em;\n\t\t}\n\t}\n\n\t.legal, .legal * {\n\t\tcolor: #454545;\n\t\tfont-size: 1em;\n\t\tpadding-top: 0;\n\t\tpadding-bottom: 1em;\n\t\tmargin-bottom: 0;\n\t}\n\n"], ["\n\tbackground-color: black;\n\t/*padding: 64px;*/\n\tposition: relative;\n\tleft: 0;\n\tright: 0;\n\tbottom: 0;\n\tz-index: 50;\t\n\t.container {\n\t\tdisplay: flex;\n\t\tjustify-content: space-around;\n\t\tflex-wrap: wrap;\n\t\tmargin-left: auto; \n\t\tmargin-right: auto;\n\t\tpadding: 0.5em;\n\t}\n\n\t.social {\n\t\ta {\n\t\t\tcolor: #ffffff;\n\t\t\tfont-size: 2.5em;\n\t\t\tpadding: 0.3em;\n\t\t}\n\t}\n\n\t.legal, .legal * {\n\t\tcolor: #454545;\n\t\tfont-size: 1em;\n\t\tpadding-top: 0;\n\t\tpadding-bottom: 1em;\n\t\tmargin-bottom: 0;\n\t}\n\n"])));
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
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("a", { href: "https://www.youtube.com/user/shadowshand", target: "_blank" },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeIcon"], { icon: ["fab", "youtube"] })),
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
//# sourceMappingURL=3.index_bundle.js.map