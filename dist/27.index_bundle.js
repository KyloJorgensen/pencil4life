(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[27],{

/***/ "./client/src/components/contact/contact-page.tsx":
/*!********************************************************!*\
  !*** ./client/src/components/contact/contact-page.tsx ***!
  \********************************************************/
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
/* harmony import */ var _fortawesome_fontawesome_free_solid_faEnvelope__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/fontawesome-free-solid/faEnvelope */ "./node_modules/@fortawesome/fontawesome-free-solid/faEnvelope.js");
/* harmony import */ var _fortawesome_fontawesome_free_solid_faEnvelope__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_fontawesome_free_solid_faEnvelope__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _fortawesome_fontawesome_free_solid_faComments__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/fontawesome-free-solid/faComments */ "./node_modules/@fortawesome/fontawesome-free-solid/faComments.js");
/* harmony import */ var _fortawesome_fontawesome_free_solid_faComments__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_fontawesome_free_solid_faComments__WEBPACK_IMPORTED_MODULE_6__);

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







_fortawesome_fontawesome__WEBPACK_IMPORTED_MODULE_1__["library"].add(_fortawesome_fontawesome_free_brands__WEBPACK_IMPORTED_MODULE_3__["default"], _fortawesome_fontawesome_free_solid_faEnvelope__WEBPACK_IMPORTED_MODULE_5__, _fortawesome_fontawesome_free_solid_faComments__WEBPACK_IMPORTED_MODULE_6__);
var ContactPageWrapper = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\tdisplay: grid;\n\tgrid-template-columns: repeat(auto-fill,minmax(500px,1fr));\n\tgrid-column-gap: 1em;\n\n\t> h1 {\n\t\tgrid-column-start: 1;\n  \t\tgrid-column-end: -1;\n\t}\n\n\t> .socialmedia {\n\t\tdisplay: block;\n\t\tmargin: 1em 0;\n    \tflex-wrap: nowrap;\n\t\ttext-decoration: none;\n\t\t\n\t\t> * {\n\t\t\tdisplay: block;\n\t\t\twidth: 100%;\n\t\t}\n\n\t\t> svg {\n     \t\tpadding: 8px;\n\t\t\tborder-radius: 16px;\n\t\t\tflex-grow: 1;\n\t\t\tcolor: white;\n\t\t\tfont-size: 8em;\n\t\t}\n\n\t\t> div {\n\t\t\theight: 0;\n\t\t\twidth: 0;\n\t\t\talign-self: center;\n\t\t\tflex-grow: 0;\n\t\t\ttransition: 2s;\n\t\t\toverflow: hidden;\n\t\t\tmargin: 0 1em;\n\n\t\t\t> h2 {\n\t\t\t\twidth: max-content;\n\t\t\t\tmargin: 0 auto;\n\t\t\t\topacity: 0;\n\t\t\t\ttransition: opacity 1s;\n\t\t\t}\n\t\t}\n\n\t\t@media (min-width: 765px) {\n\t\t\tdisplay: inline-block;\n\t\t\tdisplay: flex;\n\n\t\t\t> div {\n\t\t\t\twidth: 0;\n\t\t\t\theight: initial;\n\t\t\t\tmargin: 1em 0;\n\t\t\t}\n\n\t\t\t> svg {\n\t\t\t\twidth: initial;\n\t\t\t}\n\t\t}\n\n\t\t&:hover, &:focus {\n\t\t\t> div {\n\t\t\t\twidth: initial;\n\t\t\t\theight: initial;\n\t\t\t\tflex-grow: 1;\n\t\t\t\ttransition: 1s;\n\t\t\t\tmargin: 1em;\n\n\t\t\t\t> h2 {\n\t\t\t\t\topacity: 1;\n\t\t\t\t\ttransition-delay: 1s;\n\t\t\t\t\ttransition: 2s;\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n\n\t> .instagram {\n\t\tsvg {\n\t\t\tbackground:\n\t\t\t\tradial-gradient(circle farthest-corner at 35% 90%, #fec564, transparent 50%),\n\t\t\t\tradial-gradient(circle farthest-corner at 0 140%, #fec564, transparent 50%),\n\t\t\t\tradial-gradient(ellipse farthest-corner at 0 -25%, #5258cf, transparent 50%),\n\t\t\t\tradial-gradient(ellipse farthest-corner at 20% -50%, #5258cf, transparent 50%),\n\t\t\t\tradial-gradient(ellipse farthest-corner at 100% 0, #893dc2, transparent 50%),\n\t\t\t\tradial-gradient(ellipse farthest-corner at 60% -20%, #893dc2, transparent 50%),\n\t\t\t\tradial-gradient(ellipse farthest-corner at 100% 100%, #d9317a, transparent),\n\t\t\t\tlinear-gradient(#6559ca, #bc318f 30%, #e33f5f 50%, #f77638 70%, #fec66d 100%);\n\t\t}\n\t}\n\n\t> .twitch {\n\t\tsvg {\n\t\t\tbackground-color: #6441a4;\n\t\t}\n\t}\n\n\t> .twiiter {\n\t\tsvg {\n\t\t\tbackground-color: #1da1f2;\n\t\t}\n\t}\n\n\t> .facebook {\n\t\tsvg {\n\t\t\tbackground-color: #4267b2;\n\t\t}\n\t}\n\n\t> .soundboard {\n\t\tsvg {\n\t\t\tbackground-color: #4267b2;\n\t\t}\n\t}\n\n\t> .message {\n\t\tsvg {\n\t\t\tbackground-color: #4267b2;\n\t\t}\n\t}\n"], ["\n\tdisplay: grid;\n\tgrid-template-columns: repeat(auto-fill,minmax(500px,1fr));\n\tgrid-column-gap: 1em;\n\n\t> h1 {\n\t\tgrid-column-start: 1;\n  \t\tgrid-column-end: -1;\n\t}\n\n\t> .socialmedia {\n\t\tdisplay: block;\n\t\tmargin: 1em 0;\n    \tflex-wrap: nowrap;\n\t\ttext-decoration: none;\n\t\t\n\t\t> * {\n\t\t\tdisplay: block;\n\t\t\twidth: 100%;\n\t\t}\n\n\t\t> svg {\n     \t\tpadding: 8px;\n\t\t\tborder-radius: 16px;\n\t\t\tflex-grow: 1;\n\t\t\tcolor: white;\n\t\t\tfont-size: 8em;\n\t\t}\n\n\t\t> div {\n\t\t\theight: 0;\n\t\t\twidth: 0;\n\t\t\talign-self: center;\n\t\t\tflex-grow: 0;\n\t\t\ttransition: 2s;\n\t\t\toverflow: hidden;\n\t\t\tmargin: 0 1em;\n\n\t\t\t> h2 {\n\t\t\t\twidth: max-content;\n\t\t\t\tmargin: 0 auto;\n\t\t\t\topacity: 0;\n\t\t\t\ttransition: opacity 1s;\n\t\t\t}\n\t\t}\n\n\t\t@media (min-width: 765px) {\n\t\t\tdisplay: inline-block;\n\t\t\tdisplay: flex;\n\n\t\t\t> div {\n\t\t\t\twidth: 0;\n\t\t\t\theight: initial;\n\t\t\t\tmargin: 1em 0;\n\t\t\t}\n\n\t\t\t> svg {\n\t\t\t\twidth: initial;\n\t\t\t}\n\t\t}\n\n\t\t&:hover, &:focus {\n\t\t\t> div {\n\t\t\t\twidth: initial;\n\t\t\t\theight: initial;\n\t\t\t\tflex-grow: 1;\n\t\t\t\ttransition: 1s;\n\t\t\t\tmargin: 1em;\n\n\t\t\t\t> h2 {\n\t\t\t\t\topacity: 1;\n\t\t\t\t\ttransition-delay: 1s;\n\t\t\t\t\ttransition: 2s;\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n\n\t> .instagram {\n\t\tsvg {\n\t\t\tbackground:\n\t\t\t\tradial-gradient(circle farthest-corner at 35% 90%, #fec564, transparent 50%),\n\t\t\t\tradial-gradient(circle farthest-corner at 0 140%, #fec564, transparent 50%),\n\t\t\t\tradial-gradient(ellipse farthest-corner at 0 -25%, #5258cf, transparent 50%),\n\t\t\t\tradial-gradient(ellipse farthest-corner at 20% -50%, #5258cf, transparent 50%),\n\t\t\t\tradial-gradient(ellipse farthest-corner at 100% 0, #893dc2, transparent 50%),\n\t\t\t\tradial-gradient(ellipse farthest-corner at 60% -20%, #893dc2, transparent 50%),\n\t\t\t\tradial-gradient(ellipse farthest-corner at 100% 100%, #d9317a, transparent),\n\t\t\t\tlinear-gradient(#6559ca, #bc318f 30%, #e33f5f 50%, #f77638 70%, #fec66d 100%);\n\t\t}\n\t}\n\n\t> .twitch {\n\t\tsvg {\n\t\t\tbackground-color: #6441a4;\n\t\t}\n\t}\n\n\t> .twiiter {\n\t\tsvg {\n\t\t\tbackground-color: #1da1f2;\n\t\t}\n\t}\n\n\t> .facebook {\n\t\tsvg {\n\t\t\tbackground-color: #4267b2;\n\t\t}\n\t}\n\n\t> .soundboard {\n\t\tsvg {\n\t\t\tbackground-color: #4267b2;\n\t\t}\n\t}\n\n\t> .message {\n\t\tsvg {\n\t\t\tbackground-color: #4267b2;\n\t\t}\n\t}\n"])));
var ContactPage = /** @class */ (function (_super) {
    __extends(ContactPage, _super);
    function ContactPage(props) {
        return _super.call(this, props) || this;
    }
    ContactPage.prototype.render = function () {
        return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](ContactPageWrapper, null,
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h1", null, "Reach out to me on..."),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("a", { className: 'socialmedia instagram', href: "https://www.instagram.com/pencil.4.life/", target: "_blank" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeIcon"], { icon: ["fab", "instagram"] }),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", null,
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h2", null, "pencil.4.life on Instagram"))),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("a", { className: 'socialmedia twitch', href: "https://www.twitch.tv/pencil4life", target: "_blank" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeIcon"], { icon: ["fab", "twitch"] }),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", null,
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h2", null, "pencil4life on Twitch"))),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("a", { className: 'socialmedia twiiter', href: "https://twitter.com/pencil4life", target: "_blank" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeIcon"], { icon: ["fab", "twitter"] }),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", null,
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h2", null, "pencil4life on Twitter"))),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("a", { className: 'socialmedia facebook', href: "https://www.facebook.com/pencil4life/?ref=br_rs", target: "_blank" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeIcon"], { icon: ["fab", "facebook-f"] }),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", null,
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h2", null, "pencil4life on Facebook"))),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("a", { className: 'socialmedia soundboard', href: "" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeIcon"], { icon: ["fab", "twitter"] }),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", null,
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h2", null, "Join my sound board"))),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("a", { className: 'socialmedia message', href: "" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeIcon"], { icon: ["far", "envelope"] }),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", null,
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h2", null, "Send me a message")))));
    };
    return ContactPage;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]));
;
/* harmony default export */ __webpack_exports__["default"] = (ContactPage);
var templateObject_1;


/***/ }),

/***/ "./client/src/components/contact/contact-switch.tsx":
/*!**********************************************************!*\
  !*** ./client/src/components/contact/contact-switch.tsx ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router */ "./node_modules/react-router/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var _contact_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact-page */ "./client/src/components/contact/contact-page.tsx");
/* harmony import */ var _no_match__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../no-match */ "./client/src/components/no-match.tsx");

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





var ContactSwitch = /** @class */ (function (_super) {
    __extends(ContactSwitch, _super);
    function ContactSwitch(props) {
        return _super.call(this, props) || this;
    }
    ContactSwitch.prototype.render = function () {
        return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "contact-switch-wrapper" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "container" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_2__["NavLink"], { exact: true, to: '/contact', activeClassName: "selected" },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h2", null, "Contact")),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router__WEBPACK_IMPORTED_MODULE_1__["Switch"], null,
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router__WEBPACK_IMPORTED_MODULE_1__["Route"], { exact: true, path: "/contact", component: _contact_page__WEBPACK_IMPORTED_MODULE_3__["default"] }),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router__WEBPACK_IMPORTED_MODULE_1__["Route"], { path: "/contact/contact", component: _no_match__WEBPACK_IMPORTED_MODULE_4__["default"] }),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router__WEBPACK_IMPORTED_MODULE_1__["Route"], { component: _no_match__WEBPACK_IMPORTED_MODULE_4__["default"] })))));
    };
    return ContactSwitch;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]));
;
/* harmony default export */ __webpack_exports__["default"] = (ContactSwitch);


/***/ }),

/***/ "./node_modules/@fortawesome/fontawesome-free-solid/faComments.js":
/*!************************************************************************!*\
  !*** ./node_modules/@fortawesome/fontawesome-free-solid/faComments.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = { prefix: 'fas', iconName: 'comments', icon: [576, 512, [], "f086", "M416 192c0-88.4-93.1-160-208-160S0 103.6 0 192c0 34.3 14.1 65.9 38 92-13.4 30.2-35.5 54.2-35.8 54.5-2.2 2.3-2.8 5.7-1.5 8.7S4.8 352 8 352c36.6 0 66.9-12.3 88.7-25 32.2 15.7 70.3 25 111.3 25 114.9 0 208-71.6 208-160zm122 220c23.9-26 38-57.7 38-92 0-66.9-53.5-124.2-129.3-148.1.9 6.6 1.3 13.3 1.3 20.1 0 105.9-107.7 192-240 192-10.8 0-21.3-.8-31.7-1.9C207.8 439.6 281.8 480 368 480c41 0 79.1-9.2 111.3-25 21.8 12.7 52.1 25 88.7 25 3.2 0 6.1-1.9 7.3-4.8 1.3-2.9.7-6.3-1.5-8.7-.3-.3-22.4-24.2-35.8-54.5z"] };

/***/ }),

/***/ "./node_modules/@fortawesome/fontawesome-free-solid/faEnvelope.js":
/*!************************************************************************!*\
  !*** ./node_modules/@fortawesome/fontawesome-free-solid/faEnvelope.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = { prefix: 'fas', iconName: 'envelope', icon: [512, 512, [], "f0e0", "M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"] };

/***/ })

}]);
//# sourceMappingURL=27.index_bundle.js.map