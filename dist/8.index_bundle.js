(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[8],{

/***/ "./client/src/components/header/logo.tsx":
/*!***********************************************!*\
  !*** ./client/src/components/header/logo.tsx ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.es.js");

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



var LogoWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\t> .logo {\n\t\tbackground: -webkit-linear-gradient(#727c92, white);\n\t\tbackground: -o-linear-gradient(#727c92, white);\n\t\tbackground: linear-gradient(#727c92, white);\n\t\t\n\t\t> a {\n\t\t\t> .logo-img {\n\t\t\t\twidth: 100%;\n\t\t\t\tpadding: 20px 0;\n\t\t\t}\n\t\t}\n\t}\n"], ["\n\t> .logo {\n\t\tbackground: -webkit-linear-gradient(#727c92, white);\n\t\tbackground: -o-linear-gradient(#727c92, white);\n\t\tbackground: linear-gradient(#727c92, white);\n\t\t\n\t\t> a {\n\t\t\t> .logo-img {\n\t\t\t\twidth: 100%;\n\t\t\t\tpadding: 20px 0;\n\t\t\t}\n\t\t}\n\t}\n"])));
var Logo = /** @class */ (function (_super) {
    __extends(Logo, _super);
    function Logo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Logo.prototype.render = function () {
        return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](LogoWrapper, { className: "container" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "logo" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_1__["NavLink"], { role: "menuitem", tabIndex: -1, to: '/' },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("img", { className: "logo-img", src: "/images/pencil4lifelogo-blue-transparent.png", alt: "Pencil4Life" })))));
    };
    return Logo;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]));
;
/* harmony default export */ __webpack_exports__["default"] = (Logo);
var templateObject_1;


/***/ })

}]);
//# sourceMappingURL=8.index_bundle.js.map