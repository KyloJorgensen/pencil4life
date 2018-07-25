(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[11],{

/***/ "./client/src/components/doodles/doodles-page.tsx":
/*!********************************************************!*\
  !*** ./client/src/components/doodles/doodles-page.tsx ***!
  \********************************************************/
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

var DoodlesPage = /** @class */ (function (_super) {
    __extends(DoodlesPage, _super);
    function DoodlesPage(props) {
        return _super.call(this, props) || this;
    }
    DoodlesPage.prototype.render = function () {
        return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "doodles-page-wrapper" }, "Coming Soon!!"));
    };
    return DoodlesPage;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]));
;
/* harmony default export */ __webpack_exports__["default"] = (DoodlesPage);


/***/ }),

/***/ "./client/src/components/doodles/doodles-switch.tsx":
/*!**********************************************************!*\
  !*** ./client/src/components/doodles/doodles-switch.tsx ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router */ "./node_modules/react-router/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var _doodles_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./doodles-page */ "./client/src/components/doodles/doodles-page.tsx");
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





var DoodlesSwitch = /** @class */ (function (_super) {
    __extends(DoodlesSwitch, _super);
    function DoodlesSwitch(props) {
        return _super.call(this, props) || this;
    }
    DoodlesSwitch.prototype.render = function () {
        return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "doodles-switch-wrapper" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "container" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_2__["NavLink"], { exact: true, to: '/doodles', activeClassName: "selected" },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h2", null, "Doodles")),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router__WEBPACK_IMPORTED_MODULE_1__["Switch"], null,
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router__WEBPACK_IMPORTED_MODULE_1__["Route"], { exact: true, path: "/doodles", component: _doodles_page__WEBPACK_IMPORTED_MODULE_3__["default"] }),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router__WEBPACK_IMPORTED_MODULE_1__["Route"], { path: "/doodles/doodles", component: _no_match__WEBPACK_IMPORTED_MODULE_4__["default"] }),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router__WEBPACK_IMPORTED_MODULE_1__["Route"], { component: _no_match__WEBPACK_IMPORTED_MODULE_4__["default"] })))));
    };
    return DoodlesSwitch;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]));
;
/* harmony default export */ __webpack_exports__["default"] = (DoodlesSwitch);


/***/ })

}]);
//# sourceMappingURL=11.index_bundle.js.map