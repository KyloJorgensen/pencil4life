(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[11],{

/***/ "./client/src/components/doodle/doodle-changer.tsx":
/*!*********************************************************!*\
  !*** ./client/src/components/doodle/doodle-changer.tsx ***!
  \*********************************************************/
/*! exports provided: BackArrow, NextArrow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BackArrow", function() { return backarrow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NextArrow", function() { return nextarrow; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var _fortawesome_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/fontawesome */ "./node_modules/@fortawesome/fontawesome/index.es.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _fortawesome_fontawesome_free_solid_faCaretRight__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/fontawesome-free-solid/faCaretRight */ "./node_modules/@fortawesome/fontawesome-free-solid/faCaretRight.js");
/* harmony import */ var _fortawesome_fontawesome_free_solid_faCaretRight__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_fontawesome_free_solid_faCaretRight__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _fortawesome_fontawesome_free_solid_faCaretLeft__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/fontawesome-free-solid/faCaretLeft */ "./node_modules/@fortawesome/fontawesome-free-solid/faCaretLeft.js");
/* harmony import */ var _fortawesome_fontawesome_free_solid_faCaretLeft__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_fontawesome_free_solid_faCaretLeft__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _doodle_provider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./doodle-provider */ "./client/src/components/doodle/doodle-provider.tsx");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.es.js");

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








_fortawesome_fontawesome__WEBPACK_IMPORTED_MODULE_2__["library"].add(_fortawesome_fontawesome_free_solid_faCaretRight__WEBPACK_IMPORTED_MODULE_4__, _fortawesome_fontawesome_free_solid_faCaretLeft__WEBPACK_IMPORTED_MODULE_5__);
var ArrowStyle = styled_components__WEBPACK_IMPORTED_MODULE_7__["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    > a {\n        display: block;\n        position: relative;\n        width: 100%;\n        height: 100%;\n        padding: 0 1em;\n        > svg {\n            position: relative;\n            top: 50%;\n            left: 50%;\n            transform: translate(-50%, -50%);\n            margin: 0;                    \n            width: 2em !important;\n            height: 5em;\n            color: #494949;\n        }\n    }\n    &:hover {\n        > a > svg {\n            color: white;\n        }\n    }\n"], ["\n    > a {\n        display: block;\n        position: relative;\n        width: 100%;\n        height: 100%;\n        padding: 0 1em;\n        > svg {\n            position: relative;\n            top: 50%;\n            left: 50%;\n            transform: translate(-50%, -50%);\n            margin: 0;                    \n            width: 2em !important;\n            height: 5em;\n            color: #494949;\n        }\n    }\n    &:hover {\n        > a > svg {\n            color: white;\n        }\n    }\n"])));
var BackArrow = /** @class */ (function (_super) {
    __extends(BackArrow, _super);
    function BackArrow(props) {
        return _super.call(this, props) || this;
    }
    BackArrow.prototype.componentDidMount = function () {
        var getDoodles = this.props.doodle.getDoodles;
        getDoodles({});
    };
    BackArrow.prototype.render = function () {
        var _a = this.props.doodle, doodles = _a.doodles, doodle = _a.doodle;
        var pages = doodles.map(function (page) { return "item/" + page; });
        pages.push('');
        var index = pages.findIndex(function (page) { return page == ('_doodleId' in doodle ? "item/" + doodle._doodleId : ''); });
        return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](ArrowStyle, { className: 'back' },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], { to: "/doodle/" + pages[(index + pages.length - 1) % pages.length] },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], { icon: ["fas", "caret-left"] }))));
    };
    return BackArrow;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]));
;
var backarrow = Object(_doodle_provider__WEBPACK_IMPORTED_MODULE_6__["doodleConsumer"])(BackArrow);

var NextArrow = /** @class */ (function (_super) {
    __extends(NextArrow, _super);
    function NextArrow(props) {
        return _super.call(this, props) || this;
    }
    NextArrow.prototype.componentDidMount = function () {
        var getDoodles = this.props.doodle.getDoodles;
        getDoodles({});
    };
    NextArrow.prototype.render = function () {
        var _a = this.props.doodle, doodles = _a.doodles, doodle = _a.doodle;
        var pages = doodles.map(function (page) { return "item/" + page; });
        pages.push('');
        var index = pages.findIndex(function (page) { return page == ('_doodleId' in doodle ? "item/" + doodle._doodleId : ''); });
        return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](ArrowStyle, { className: 'next' },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], { to: "/doodle/" + pages[(index + pages.length + 1) % pages.length] },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], { icon: ["fas", "caret-right"] }))));
    };
    return NextArrow;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]));
;
var nextarrow = Object(_doodle_provider__WEBPACK_IMPORTED_MODULE_6__["doodleConsumer"])(NextArrow);

var templateObject_1;


/***/ }),

/***/ "./client/src/components/doodle/doodle-edit.tsx":
/*!******************************************************!*\
  !*** ./client/src/components/doodle/doodle-edit.tsx ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_rte__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-rte */ "./node_modules/react-rte/dist/react-rte.js");
/* harmony import */ var react_rte__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_rte__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var _image_image_new__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../image/image-new */ "./client/src/components/image/image-new.tsx");
/* harmony import */ var _image_image_edit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../image/image-edit */ "./client/src/components/image/image-edit.tsx");
/* harmony import */ var _doodle_provider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./doodle-provider */ "./client/src/components/doodle/doodle-provider.tsx");
/* harmony import */ var _user_user_provider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../user/user-provider */ "./client/src/components/user/user-provider.tsx");
/* harmony import */ var _utilities_styled_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utilities/styled.components */ "./client/src/components/utilities/styled.components.tsx");

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








var DoodleEdit = /** @class */ (function (_super) {
    __extends(DoodleEdit, _super);
    function DoodleEdit(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            redirect: false,
            title: null,
            imageRequired: false,
            _imageId: null,
            details: react_rte__WEBPACK_IMPORTED_MODULE_1___default.a.createEmptyValue(),
            discontinued: false,
        };
        _this.editField = _this.editField.bind(_this);
        _this.handleCheckboxChange = _this.handleCheckboxChange.bind(_this);
        _this.hitKey = _this.hitKey.bind(_this);
        _this.updateDoodle = _this.updateDoodle.bind(_this);
        _this.updateDoodleResult = _this.updateDoodleResult.bind(_this);
        _this.onRichTextChange = _this.onRichTextChange.bind(_this);
        _this.redirect = _this.redirect.bind(_this);
        _this.addNewImageResult = _this.addNewImageResult.bind(_this);
        return _this;
    }
    DoodleEdit.prototype.editField = function (event) {
        var _a = event.target, name = _a.name, value = _a.value;
        this.setState(function (prevState) {
            prevState[name] = value;
            return prevState;
        });
    };
    DoodleEdit.prototype.handleCheckboxChange = function (event) {
        var _a = event.target, name = _a.name, checked = _a.checked;
        this.setState(function (prevState) {
            prevState[name] = checked;
            return prevState;
        });
    };
    DoodleEdit.prototype.hitKey = function (event) {
        if (event.key == 'Enter') {
            this.updateDoodle(event);
        }
    };
    DoodleEdit.prototype.updateDoodle = function (event) {
        var _this = this;
        event.preventDefault();
        var _a = this.state, title = _a.title, details = _a.details, _imageId = _a._imageId, discontinued = _a.discontinued;
        var changes = {
            title: title,
            details: details.toString('html'),
            _imageId: _imageId,
            discontinued: discontinued
        };
        var params = { _id: this.props.doodle.doodle._doodleId };
        var vaildKeys = ['title', 'details', '_imageId', 'discontinued'];
        vaildKeys.forEach(function (vaildKey) {
            if (changes[vaildKey] != _this.props.doodle.doodle[vaildKey]) {
                params[vaildKey] = changes[vaildKey];
            }
        });
        this.props.doodle.updateDoodle(params, this.updateDoodleResult);
    };
    DoodleEdit.prototype.updateDoodleResult = function (error) {
        if (error) {
            console.log(error);
        }
        else {
            this.redirect();
        }
    };
    DoodleEdit.prototype.onRichTextChange = function (value) {
        this.setState(function () {
            return { details: value };
        });
    };
    DoodleEdit.prototype.redirect = function () {
        this.setState(function () {
            return { redirect: true };
        });
    };
    DoodleEdit.prototype.addNewImageResult = function (error, _imageId) {
        if (error) {
            this.setState(function () {
                return { imageRequired: true };
            });
        }
        else {
            this.setState(function () {
                return {
                    _imageId: _imageId,
                    imageRequired: false,
                };
            });
        }
    };
    DoodleEdit.prototype.componentWillMount = function () {
        var _a = this.props.doodle.doodle, title = _a.title, details = _a.details, _imageId = _a._imageId, discontinued = _a.discontinued;
        this.setState(function () {
            return {
                title: title,
                details: react_rte__WEBPACK_IMPORTED_MODULE_1___default.a.createValueFromString(details, 'html'),
                _imageId: _imageId,
                discontinued: discontinued,
            };
        });
    };
    DoodleEdit.prototype.componentDidUpdate = function (prevProps, prevState) {
        var _this = this;
        var propsToCheck = ['title', 'year', 'coverImage', 'details', 'discontinued'];
        var _state = null;
        propsToCheck.forEach(function (propToCheck) {
            if (prevProps.doodle.doodle[propToCheck] !== _this.props.doodle.doodle[propToCheck]) {
                _state = _state == null ? {} : _state;
                if (propToCheck == 'details') {
                    _state[propToCheck] = react_rte__WEBPACK_IMPORTED_MODULE_1___default.a.createValueFromString(_this.props.doodle.doodle[propToCheck], 'html');
                }
                else {
                    _state[propToCheck] = _this.props.doodle.doodle[propToCheck];
                }
            }
        });
        if (_state) {
            this.setState(_state);
        }
    };
    DoodleEdit.prototype.componentDidMount = function () {
        this.props.doodle.getDoodle(this.props.doodle.doodle._doodleId);
    };
    DoodleEdit.prototype.render = function () {
        var _a = this, addNewImageResult = _a.addNewImageResult, hitKey = _a.hitKey, handleCheckboxChange = _a.handleCheckboxChange, editField = _a.editField, updateDoodle = _a.updateDoodle, onRichTextChange = _a.onRichTextChange;
        var _b = this.state, title = _b.title, _imageId = _b._imageId, imageRequired = _b.imageRequired, redirect = _b.redirect, details = _b.details, discontinued = _b.discontinued;
        var admin = this.props.user.admin;
        var pathname = this.props.location.pathname;
        var _doodleId = this.props.doodle.doodle._doodleId;
        if (redirect) {
            return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Redirect"], { to: '/doodle/item/' + this.props.doodle.doodle._doodleId }));
        }
        if (!admin) {
            return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Redirect"], { to: { pathname: '/login', state: { redirectPath: pathname } } }));
        }
        return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utilities_styled_components__WEBPACK_IMPORTED_MODULE_7__["Popout"], null,
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "doodle-page-edit-wrapper" },
                admin ? react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", { className: "text-right" },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], { to: '/doodle/item/' + _doodleId }, "X")) : '',
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h3", null, "EDIT DOODLE"),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("label", null, "Image"),
                _imageId ? react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_image_image_edit__WEBPACK_IMPORTED_MODULE_4__["default"], { _imageId: _imageId, updateRedirect: false }) : react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_image_image_new__WEBPACK_IMPORTED_MODULE_3__["default"], { required: imageRequired, addNewImageResult: addNewImageResult }),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("label", null, "Title"),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("br", null),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("input", { type: 'text', onKeyPress: hitKey, onChange: editField, name: 'title', placeholder: "Great Doodle", value: title }),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("br", null),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("label", null, "Details"),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("br", null),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_rte__WEBPACK_IMPORTED_MODULE_1___default.a, { value: details, onChange: onRichTextChange }),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("label", null, "Discontinued"),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("br", null),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("input", { type: 'checkbox', checked: !!discontinued, name: "discontinued", onChange: handleCheckboxChange }),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("br", null),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("input", { type: 'submit', onClick: updateDoodle, value: 'SAVE' }))));
    };
    return DoodleEdit;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]));
;
/* harmony default export */ __webpack_exports__["default"] = (Object(_user_user_provider__WEBPACK_IMPORTED_MODULE_6__["userConsumer"])(Object(_doodle_provider__WEBPACK_IMPORTED_MODULE_5__["doodleConsumer"])(DoodleEdit)));


/***/ }),

/***/ "./client/src/components/doodle/doodle-list-item.tsx":
/*!***********************************************************!*\
  !*** ./client/src/components/doodle/doodle-list-item.tsx ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var _image_image_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../image/image-tag */ "./client/src/components/image/image-tag.tsx");
/* harmony import */ var _doodle_provider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./doodle-provider */ "./client/src/components/doodle/doodle-provider.tsx");
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





var DoodleListItemWrapper = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\t.doodle-link {    \n\t\tdisplay: grid;\n\t\tgrid-template-rows: 1fr auto;\n\t\twidth: 100%;\n\t\theight: 100%;\n\t\tcolor: black;\n\t\tborder-color: #ffffff;\n\t\tborder-style: solid;\n\t}\n\t.doodle-link:hover {\n\t\tborder-style: solid;\n\t\tborder-color: black;\n\t\ttransition: border-color 2s linear;\n\t}\n\n\t.image-wrapper {\n\t\talign-self: stretch;\n\t\twidth: 100%;\n\t}\n\t.title-year-wrapper {\n\t\talign-self: end;\n\t\t> .title, > .year {\n\t\t\tmargin: 0.25em;\n\t\t\tdisplay: inline-block;\n\t\t}\n\t\t> .year {\n\t\t\tfloat:right;\n\t\t}\n\t}\n"], ["\n\t.doodle-link {    \n\t\tdisplay: grid;\n\t\tgrid-template-rows: 1fr auto;\n\t\twidth: 100%;\n\t\theight: 100%;\n\t\tcolor: black;\n\t\tborder-color: #ffffff;\n\t\tborder-style: solid;\n\t}\n\t.doodle-link:hover {\n\t\tborder-style: solid;\n\t\tborder-color: black;\n\t\ttransition: border-color 2s linear;\n\t}\n\n\t.image-wrapper {\n\t\talign-self: stretch;\n\t\twidth: 100%;\n\t}\n\t.title-year-wrapper {\n\t\talign-self: end;\n\t\t> .title, > .year {\n\t\t\tmargin: 0.25em;\n\t\t\tdisplay: inline-block;\n\t\t}\n\t\t> .year {\n\t\t\tfloat:right;\n\t\t}\n\t}\n"])));
var DoodleListItem = /** @class */ (function (_super) {
    __extends(DoodleListItem, _super);
    function DoodleListItem(props) {
        return _super.call(this, props) || this;
    }
    DoodleListItem.prototype.componentDidMount = function () {
        this.props.doodle.getDoodle(this.props._doodleId);
    };
    DoodleListItem.prototype.render = function () {
        var _a = this.props.doodle.doodle, _doodleId = _a._doodleId, title = _a.title, _imageId = _a._imageId;
        var ImageElem = _imageId ? (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_image_image_tag__WEBPACK_IMPORTED_MODULE_2__["default"], { _imageId: this.props.doodle.doodle._imageId })) : '';
        return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](DoodleListItemWrapper, null,
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], { className: "doodle-link", to: '/doodle/item/' + _doodleId },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "image-wrapper" }, ImageElem),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "title-year-wrapper" },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", { className: "title" }, title)))));
    };
    return DoodleListItem;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]));
;
/* harmony default export */ __webpack_exports__["default"] = (Object(_doodle_provider__WEBPACK_IMPORTED_MODULE_3__["doodleConsumer"])(DoodleListItem));
var templateObject_1;


/***/ }),

/***/ "./client/src/components/doodle/doodle-list.tsx":
/*!******************************************************!*\
  !*** ./client/src/components/doodle/doodle-list.tsx ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _doodle_list_item__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./doodle-list-item */ "./client/src/components/doodle/doodle-list-item.tsx");
/* harmony import */ var _doodle_provider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./doodle-provider */ "./client/src/components/doodle/doodle-provider.tsx");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.es.js");

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




var DoodleListWrapper = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\t\n\t> ul {\n\t\tdisplay: grid;\n\t\tgrid-template-columns: repeat(auto-fill, minmax(300px, 1fr));\n\t\tgrid-template-rows: minmax(100px, 1fr);\n\t\tgrid-gap: 2rem;\n\t}\n"], ["\t\n\t> ul {\n\t\tdisplay: grid;\n\t\tgrid-template-columns: repeat(auto-fill, minmax(300px, 1fr));\n\t\tgrid-template-rows: minmax(100px, 1fr);\n\t\tgrid-gap: 2rem;\n\t}\n"])));
var DoodleList = /** @class */ (function (_super) {
    __extends(DoodleList, _super);
    function DoodleList(props) {
        return _super.call(this, props) || this;
    }
    DoodleList.prototype.componentDidMount = function () {
        var query = {};
        if (this.props.limit) {
            query.limit = this.props.limit;
        }
        this.props.doodle.getDoodles(query);
    };
    DoodleList.prototype.componentDidUpdate = function (prevProps, prevState, snapshot) {
        var update = false;
        var prevDiscontinued = prevProps.discontinued || false;
        var currentDiscontinued = this.props.discontinued || false;
        if (prevDiscontinued != currentDiscontinued) {
            update = true;
        }
        if (update) {
            var query = {
                discontinued: this.props.discontinued || false,
                limit: this.props.limit || 10,
            };
            this.props.doodle.getDoodles(query);
        }
    };
    DoodleList.prototype.render = function () {
        var displayDetails = this.props.displayDetails;
        var DoodleList = [];
        if (this.props.doodle.doodles) {
            this.props.doodle.doodles.forEach(function (doodleKey) {
                DoodleList.push(react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_doodle_list_item__WEBPACK_IMPORTED_MODULE_1__["default"], { key: doodleKey, _doodleId: doodleKey, displayDetails: displayDetails }));
            });
        }
        return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](DoodleListWrapper, null,
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("ul", { className: 'doodle-list' }, DoodleList)));
    };
    DoodleList.defaultProps = {
        displayDetails: true,
    };
    return DoodleList;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]));
;
/* harmony default export */ __webpack_exports__["default"] = (Object(_doodle_provider__WEBPACK_IMPORTED_MODULE_2__["doodleConsumer"])(DoodleList));
var templateObject_1;


/***/ }),

/***/ "./client/src/components/doodle/doodle-new.tsx":
/*!*****************************************************!*\
  !*** ./client/src/components/doodle/doodle-new.tsx ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_rte__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-rte */ "./node_modules/react-rte/dist/react-rte.js");
/* harmony import */ var react_rte__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_rte__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var _image_image_new__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../image/image-new */ "./client/src/components/image/image-new.tsx");
/* harmony import */ var _image_image_edit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../image/image-edit */ "./client/src/components/image/image-edit.tsx");
/* harmony import */ var _user_user_provider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../user/user-provider */ "./client/src/components/user/user-provider.tsx");
/* harmony import */ var _doodle_provider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./doodle-provider */ "./client/src/components/doodle/doodle-provider.tsx");
/* harmony import */ var _utilities_styled_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utilities/styled.components */ "./client/src/components/utilities/styled.components.tsx");

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








var DoodleNew = /** @class */ (function (_super) {
    __extends(DoodleNew, _super);
    function DoodleNew(props) {
        var _this = _super.call(this, props) || this;
        _this.titleRef = react__WEBPACK_IMPORTED_MODULE_0__["createRef"]();
        _this.addNewDoodleResult = function (error, _doodleId) {
            if (error) {
                _this.setState(function () {
                    return { required: true };
                });
            }
            else {
                _this.setState(function () {
                    return { _doodleId: _doodleId };
                });
            }
        };
        _this.onRichTextChange = function (value) {
            _this.setState(function () {
                return { details: value };
            });
        };
        _this.addNewImageResult = function (error, _imageId) {
            if (error) {
                _this.setState(function () {
                    return { imageRequired: true };
                });
            }
            else {
                _this.setState(function () {
                    return {
                        _imageId: _imageId,
                        imageRequired: false,
                    };
                });
            }
        };
        _this.state = {
            _doodleId: null,
            required: false,
            imageRequired: false,
            title: null,
            details: react_rte__WEBPACK_IMPORTED_MODULE_1___default.a.createEmptyValue(),
        };
        _this.hitKey = _this.hitKey.bind(_this);
        _this.addNewDoodle = _this.addNewDoodle.bind(_this);
        _this.addNewDoodleResult = _this.addNewDoodleResult.bind(_this);
        _this.onRichTextChange = _this.onRichTextChange.bind(_this);
        _this.addNewImageResult = _this.addNewImageResult.bind(_this);
        return _this;
    }
    DoodleNew.prototype.hitKey = function (event) {
        if (event.key == 'Enter') {
            this.addNewDoodle(event);
        }
    };
    DoodleNew.prototype.addNewDoodle = function (event) {
        event.preventDefault();
        var title = this.titleRef.current.value;
        var _a = this.state, details = _a.details, _imageId = _a._imageId;
        var newDoodle = {
            title: title,
            details: details.toString('html'),
        };
        if (_imageId != null) {
            newDoodle._imageId = _imageId;
        }
        this.props.doodle.addDoodle(newDoodle, this.addNewDoodleResult);
        this.setState(function () {
            return { required: false };
        });
    };
    DoodleNew.prototype.render = function () {
        var _a = this, addNewImageResult = _a.addNewImageResult, addNewDoodle = _a.addNewDoodle, hitKey = _a.hitKey, onRichTextChange = _a.onRichTextChange, titleRef = _a.titleRef;
        var _b = this.state, _imageId = _b._imageId, imageRequired = _b.imageRequired, _doodleId = _b._doodleId, required = _b.required, details = _b.details;
        var admin = this.props.user.admin;
        var pathname = this.props.location.pathname;
        var total = this.props.doodle.total;
        if (_doodleId) {
            return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Redirect"], { to: '/doodle/item/' + this.state._doodleId }));
        }
        if (!admin) {
            return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Redirect"], { to: { pathname: '/login', state: { redirectPath: pathname } } }));
        }
        return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utilities_styled_components__WEBPACK_IMPORTED_MODULE_7__["Popout"], null,
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "doodle-new-wrapper" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", { className: "text-right" },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], { to: '/doodle/' }, "X")),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h3", null, "New Doodle"),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("label", null, "Image"),
                _imageId ? react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_image_image_edit__WEBPACK_IMPORTED_MODULE_4__["default"], { _imageId: _imageId, updateRedirect: false }) : react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_image_image_new__WEBPACK_IMPORTED_MODULE_3__["default"], { required: imageRequired, addNewImageResult: addNewImageResult }),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("label", null,
                    "Title",
                    required ? (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", { className: "errortext" }, "*")) : ''),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("br", null),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("input", { type: 'text', onKeyPress: hitKey, placeholder: "Great Doodle", ref: titleRef }),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("br", null),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("label", null, "Details"),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("br", null),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_rte__WEBPACK_IMPORTED_MODULE_1___default.a, { value: details, onChange: onRichTextChange }),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("br", null),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("input", { type: 'submit', onClick: addNewDoodle, value: 'SAVE' }))));
    };
    return DoodleNew;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]));
;
/* harmony default export */ __webpack_exports__["default"] = (Object(_user_user_provider__WEBPACK_IMPORTED_MODULE_5__["userConsumer"])(Object(_doodle_provider__WEBPACK_IMPORTED_MODULE_6__["doodleConsumer"])(DoodleNew)));


/***/ }),

/***/ "./client/src/components/doodle/doodle-page.tsx":
/*!******************************************************!*\
  !*** ./client/src/components/doodle/doodle-page.tsx ***!
  \******************************************************/
/*! exports provided: DoodlePage, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DoodlePage", function() { return DoodlePage; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.es.js");
/* harmony import */ var _doodle_provider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./doodle-provider */ "./client/src/components/doodle/doodle-provider.tsx");
/* harmony import */ var _user_user_provider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../user/user-provider */ "./client/src/components/user/user-provider.tsx");
/* harmony import */ var _doodle_list__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./doodle-list */ "./client/src/components/doodle/doodle-list.tsx");
/* harmony import */ var _doodle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./doodle */ "./client/src/components/doodle/doodle.tsx");
/* harmony import */ var _doodle_new__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./doodle-new */ "./client/src/components/doodle/doodle-new.tsx");
/* harmony import */ var _doodle_edit__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./doodle-edit */ "./client/src/components/doodle/doodle-edit.tsx");

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









var Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\tdisplay: grid;\n\tgrid-row-gap: 1em;\n"], ["\n\tdisplay: grid;\n\tgrid-row-gap: 1em;\n"])));
var DoodlePage = /** @class */ (function (_super) {
    __extends(DoodlePage, _super);
    function DoodlePage(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            discontinued: false,
        };
        _this.handleCheckboxChange = _this.handleCheckboxChange.bind(_this);
        return _this;
    }
    DoodlePage.prototype.handleCheckboxChange = function (event) {
        var _a = event.target, name = _a.name, checked = _a.checked;
        this.setState(function (prevState) {
            prevState[name] = checked;
            return prevState;
        });
    };
    DoodlePage.prototype.render = function () {
        var admin = this.props.user.admin;
        var discontinued = this.state.discontinued;
        return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Wrapper, null,
            admin ? (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", null,
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], { to: "/doodle/new/" }, "NEW DOODLE"),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("label", null, "Discontinued"),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("input", { type: 'checkbox', checked: !!this.state.discontinued, name: "discontinued", onChange: this.handleCheckboxChange }))) : '',
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_doodle_list__WEBPACK_IMPORTED_MODULE_5__["default"], { discontinued: discontinued }),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Switch"], null,
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], { exact: true, path: "/doodle/new/", component: _doodle_new__WEBPACK_IMPORTED_MODULE_7__["default"] }),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], { exact: true, path: "/doodle/item/:_doodleId/", component: _doodle__WEBPACK_IMPORTED_MODULE_6__["default"] }),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], { exact: true, path: "/doodle/edit/:_doodleId/", component: _doodle_edit__WEBPACK_IMPORTED_MODULE_8__["default"] }))));
    };
    return DoodlePage;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]));
;

/* harmony default export */ __webpack_exports__["default"] = (Object(_user_user_provider__WEBPACK_IMPORTED_MODULE_4__["userConsumer"])(Object(_doodle_provider__WEBPACK_IMPORTED_MODULE_3__["doodleProvider"])(DoodlePage)));
var templateObject_1;


/***/ }),

/***/ "./client/src/components/doodle/doodle-provider.tsx":
/*!**********************************************************!*\
  !*** ./client/src/components/doodle/doodle-provider.tsx ***!
  \**********************************************************/
/*! exports provided: DoodleContext, DoodleWrapper, default, doodleProvider, doodleConsumer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DoodleContext", function() { return DoodleContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DoodleWrapper", function() { return DoodleWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "doodleProvider", function() { return doodleProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "doodleConsumer", function() { return doodleConsumer; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_rte__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-rte */ "./node_modules/react-rte/dist/react-rte.js");
/* harmony import */ var react_rte__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_rte__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var querystring__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! querystring */ "./node_modules/querystring-es3/index.js");
/* harmony import */ var querystring__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(querystring__WEBPACK_IMPORTED_MODULE_2__);

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
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};



var Context = {
    getDoodles: function (params) {
        console.error('Error: Cannot getDoodles no DoodleContext.Provider element in parents');
    },
    getDoodle: function (params) {
        console.error('Error: Cannot getDoodle no DoodleContext.Provider element in parents');
    },
    addDoodle: function (params) {
        console.error('Error: Cannot addDoodle no DoodleContext.Provider element in parents');
    },
    updateDoodle: function (params, callback) {
        console.error('Error: Cannot updateDoodle no DoodleContext.Provider element in parents');
    },
    doodles: [],
    doodleList: {},
    page: 0,
    totalPages: 0,
    limit: 0,
    total: 0,
    pageTotal: 0,
};
var DoodleContext = react__WEBPACK_IMPORTED_MODULE_0__["createContext"](Context);
var DoodleWrapper = /** @class */ (function (_super) {
    __extends(DoodleWrapper, _super);
    function DoodleWrapper(props) {
        var _this = _super.call(this, props) || this;
        _this.state = _this.props.initialState;
        _this.getDoodles = _this.getDoodles.bind(_this);
        _this.getDoodle = _this.getDoodle.bind(_this);
        _this.addDoodle = _this.addDoodle.bind(_this);
        return _this;
    }
    DoodleWrapper.prototype.getDoodles = function (query) {
        var _this = this;
        var querydefaults = {
            limit: 100,
        };
        if (query) {
            if (!query.discontinued) {
                querydefaults.discontinued = false;
            }
            if (query.limit) {
                querydefaults.limit = query.limit;
            }
        }
        else {
            querydefaults.discontinued = false;
        }
        var _query = Object(querystring__WEBPACK_IMPORTED_MODULE_2__["stringify"])(querydefaults);
        _query = _query ? '?' + _query : '';
        var request = new Request('/api/doodle' + _query, {
            method: 'GET',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
        });
        fetch(request)
            .then(function (response) {
            if (response.status < 200 || response.status >= 300) {
                var error = new Error(response.statusText);
                error.message = String(response);
                throw error;
            }
            return response;
        })
            .then(function (response) {
            return response.json();
        })
            .then(function (body) {
            _this.setState(function () {
                return {
                    page: body.page,
                    totalPages: body.totalPages,
                    limit: body.limit,
                    total: body.total,
                    pageTotal: body.pageTotal,
                    doodles: body.doodles,
                };
            });
        })
            .catch(function (error) {
            _this.setState(function () {
                return {
                    doodles: null,
                    page: null,
                    totalPages: null,
                    limit: null,
                    total: null,
                    pageTotal: null,
                };
            });
        });
    };
    DoodleWrapper.prototype.getDoodle = function (_doodleId) {
        var _this = this;
        var query = Object(querystring__WEBPACK_IMPORTED_MODULE_2__["stringify"])({
            field: [
                '_id',
                'title',
                'details',
                '_imageId',
                'discontinued',
            ],
            format: 'json',
        });
        query = query ? '?' + query : '';
        var request = new Request('/api/doodle/' + _doodleId + query, {
            method: 'GET',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            }
        });
        fetch(request)
            .then(function (response) {
            if (response.status < 200 || response.status >= 300) {
                var error = new Error(response.statusText);
                error.message = String(response);
                throw error;
            }
            return response;
        })
            .then(function (response) {
            return response.json();
        })
            .then(function (body) {
            var _id = body._id, title = body.title, details = body.details, _imageId = body._imageId, discontinued = body.discontinued;
            _this.setState(function (preState) {
                preState.doodleList[_id] = {
                    _doodleId: _id,
                    title: title,
                    details: details,
                    _imageId: _imageId,
                    discontinued: discontinued,
                };
                return preState;
            });
        })
            .catch(function (error) {
            console.log(error);
        });
    };
    DoodleWrapper.prototype.addDoodle = function (params, callback) {
        var payload = {
            title: params.title,
            details: params.details,
        };
        if ('_imageId' in params) {
            payload._imageId = params._imageId;
        }
        var request = new Request('/api/doodle', {
            method: 'POST',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify(payload),
        });
        fetch(request)
            .then(function (response) {
            if (response.status < 200 || response.status >= 300) {
                var error = new Error(response.statusText);
                error.message = JSON.stringify(response);
                throw error;
            }
            return response;
        })
            .then(function (response) {
            return response.json();
        })
            .then(function (response) {
            callback(false, response._id);
        })
            .catch(function (error) {
            callback(true);
        });
    };
    DoodleWrapper.prototype.updateDoodle = function (params, callback) {
        var payload = {
            _id: params._id
        };
        if ('title' in params) {
            payload.title = params.title;
        }
        if ('details' in params) {
            payload.details = params.details;
        }
        if ('_imageId' in params) {
            payload._imageId = params._imageId;
        }
        if ('discontinued' in params) {
            payload.discontinued = params.discontinued;
        }
        var request = new Request('/api/doodle', {
            method: 'PUT',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify(payload),
        });
        fetch(request)
            .then(function (response) {
            if (response.status < 200 || response.status >= 300) {
                var error = new Error(response.statusText);
                error.message = String(response);
                throw error;
            }
            return response;
        })
            .then(function (response) {
            callback(false);
        })
            .catch(function (error) {
            callback(true);
        });
    };
    DoodleWrapper.prototype.render = function () {
        var _a = this, getDoodles = _a.getDoodles, getDoodle = _a.getDoodle, addDoodle = _a.addDoodle, updateDoodle = _a.updateDoodle;
        var _b = this.state, doodles = _b.doodles, doodleList = _b.doodleList, page = _b.page, totalPages = _b.totalPages, limit = _b.limit, total = _b.total, pageTotal = _b.pageTotal;
        var context = {
            getDoodles: getDoodles,
            getDoodle: getDoodle,
            addDoodle: addDoodle,
            updateDoodle: updateDoodle,
            doodles: doodles,
            doodleList: doodleList,
            page: page,
            totalPages: totalPages,
            limit: limit,
            total: total,
            pageTotal: pageTotal,
        };
        return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](DoodleContext.Provider, { value: context }, this.props.children));
    };
    DoodleWrapper.defaultProps = {
        initialState: {
            doodles: [],
            doodleList: {},
            page: 0,
            totalPages: 0,
            limit: 0,
            total: 0,
            pageTotal: 0,
        },
    };
    return DoodleWrapper;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]));

/* harmony default export */ __webpack_exports__["default"] = (DoodleWrapper);
var doodleProvider = function (Component, options) {
    var DoodleProvider = /** @class */ (function (_super) {
        __extends(DoodleProvider, _super);
        function DoodleProvider() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DoodleProvider.prototype.render = function () {
            var doodleWrapperProps = {};
            if (options) {
                if ('props' in options) {
                    doodleWrapperProps = options.props;
                }
            }
            return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](DoodleWrapper, __assign({}, doodleWrapperProps),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Component, __assign({}, this.props))));
        };
        return DoodleProvider;
    }(react__WEBPACK_IMPORTED_MODULE_0__["Component"]));
    return DoodleProvider;
};
var doodleConsumer = function (Component) {
    var DoodleConsumer = /** @class */ (function (_super) {
        __extends(DoodleConsumer, _super);
        function DoodleConsumer() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DoodleConsumer.prototype.render = function () {
            var _this = this;
            var _doodleId = this.props._doodleId;
            if ('match' in this.props) {
                if ('_doodleId' in this.props.match.params) {
                    _doodleId = this.props.match.params._doodleId;
                }
            }
            return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](DoodleContext.Consumer, null, function (context) {
                if (_doodleId) {
                    context.doodle = {
                        _doodleId: _doodleId,
                        title: '',
                        details: react_rte__WEBPACK_IMPORTED_MODULE_1__["createEmptyValue"]().toString('html'),
                        _imageId: null,
                        discontinued: false,
                    };
                    if (_doodleId in context.doodleList) {
                        var doodle = context.doodleList[_doodleId];
                        context.doodle = {
                            _doodleId: _doodleId,
                            title: 'title' in doodle ? doodle.title : '',
                            details: 'details' in doodle ? doodle.details : react_rte__WEBPACK_IMPORTED_MODULE_1__["createEmptyValue"]().toString('html'),
                            _imageId: '_imageId' in doodle ? doodle._imageId : null,
                            discontinued: 'discontinued' in doodle ? doodle.discontinued : false,
                        };
                    }
                }
                return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Component, __assign({}, _this.props, { doodle: context })));
            }));
        };
        return DoodleConsumer;
    }(react__WEBPACK_IMPORTED_MODULE_0__["Component"]));
    return DoodleConsumer;
};


/***/ }),

/***/ "./client/src/components/doodle/doodle-switch.tsx":
/*!********************************************************!*\
  !*** ./client/src/components/doodle/doodle-switch.tsx ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router */ "./node_modules/react-router/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var _doodle_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./doodle-page */ "./client/src/components/doodle/doodle-page.tsx");
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





var DoodleSwitch = /** @class */ (function (_super) {
    __extends(DoodleSwitch, _super);
    function DoodleSwitch(props) {
        return _super.call(this, props) || this;
    }
    DoodleSwitch.prototype.render = function () {
        return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "doodle-switch-wrapper" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "container" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_2__["NavLink"], { exact: true, to: '/doodle', activeClassName: "selected" },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h2", null, "Doodles")),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router__WEBPACK_IMPORTED_MODULE_1__["Switch"], null,
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router__WEBPACK_IMPORTED_MODULE_1__["Route"], { exact: true, path: "/doodle", component: _doodle_page__WEBPACK_IMPORTED_MODULE_3__["default"] }),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router__WEBPACK_IMPORTED_MODULE_1__["Route"], { exact: true, path: "/doodle/new", component: _doodle_page__WEBPACK_IMPORTED_MODULE_3__["default"] }),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router__WEBPACK_IMPORTED_MODULE_1__["Route"], { exact: true, path: "/doodle/item/:_doodleId", component: _doodle_page__WEBPACK_IMPORTED_MODULE_3__["default"] }),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router__WEBPACK_IMPORTED_MODULE_1__["Route"], { exact: true, path: "/doodle/edit/:_doodleId", component: _doodle_page__WEBPACK_IMPORTED_MODULE_3__["default"] }),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router__WEBPACK_IMPORTED_MODULE_1__["Route"], { component: _no_match__WEBPACK_IMPORTED_MODULE_4__["default"] })))));
    };
    return DoodleSwitch;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]));
;
/* harmony default export */ __webpack_exports__["default"] = (DoodleSwitch);


/***/ }),

/***/ "./client/src/components/doodle/doodle.tsx":
/*!*************************************************!*\
  !*** ./client/src/components/doodle/doodle.tsx ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_rte__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-rte */ "./node_modules/react-rte/dist/react-rte.js");
/* harmony import */ var react_rte__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_rte__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var _image_image_tag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../image/image-tag */ "./client/src/components/image/image-tag.tsx");
/* harmony import */ var _user_user_provider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../user/user-provider */ "./client/src/components/user/user-provider.tsx");
/* harmony import */ var _doodle_provider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./doodle-provider */ "./client/src/components/doodle/doodle-provider.tsx");
/* harmony import */ var _doodle_changer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./doodle-changer */ "./client/src/components/doodle/doodle-changer.tsx");
/* harmony import */ var _utilities_styled_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utilities/styled.components */ "./client/src/components/utilities/styled.components.tsx");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.es.js");

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









var Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\tdisplay: grid;\n\tgrid-template-columns: auto auto auto min-content;\n\n\t> .back {\n\t\tgrid-row: 1;\n\t}\n\n\t> .edit {\n\t\tgrid-column: 2;\n\t\talign-self: center;\n\t\ttext-align: center;\n\t}\n\n\t> .next {\n\t\tgrid-column: 3;  \n\t\tgrid-row: 1;\n\t}\n\n\t> .exit {\n\t\tcolor: white;\n\t\tbackground-color: #e98383;\n\t\twidth: 2em;\n\t\theight: 2em;\n\t\tline-height: 2;\n\t\tpadding: 0;\n\t\ttext-align: center;\n\t\tgrid-column: 4;  \n\t}\n\n\t> .content {\n\t\tgrid-column-start: 1;\n\t\tgrid-column-end: -1;\n\t\tdisplay: flex;\n\t\tjustify-content: center;\n\t\tflex-wrap: wrap;\n\t\t\n\t\t> * {\n\t\t\tpadding: 1em;\n\t\t}\n\t\t> img {\n\t\t\tmax-width: 100%;\n\t\t\talign-self: center;\n\t\t}\n\t}\n\n\t@media (min-width: 575px) {\n\t\tgrid-template-columns: auto 1fr auto;\n\t\t> .back {\n\t\t\tgrid-row: unset;\n\t\t}\n\t\t\n\t\t> .edit {\n\t\t\ttext-align: left; \n\t\t}\n\n\t\t> .next {\n\t\t\tgrid-row: unset;\n\t\t}\n\n\t\t> .exit {\n\t\t\tgrid-column: 3;  \n\t\t}\n\n\t\t> .content {\n\t\t\tgrid-column: unset;\n\t\t}\n\t}\n\n"], ["\n\tdisplay: grid;\n\tgrid-template-columns: auto auto auto min-content;\n\n\t> .back {\n\t\tgrid-row: 1;\n\t}\n\n\t> .edit {\n\t\tgrid-column: 2;\n\t\talign-self: center;\n\t\ttext-align: center;\n\t}\n\n\t> .next {\n\t\tgrid-column: 3;  \n\t\tgrid-row: 1;\n\t}\n\n\t> .exit {\n\t\tcolor: white;\n\t\tbackground-color: #e98383;\n\t\twidth: 2em;\n\t\theight: 2em;\n\t\tline-height: 2;\n\t\tpadding: 0;\n\t\ttext-align: center;\n\t\tgrid-column: 4;  \n\t}\n\n\t> .content {\n\t\tgrid-column-start: 1;\n\t\tgrid-column-end: -1;\n\t\tdisplay: flex;\n\t\tjustify-content: center;\n\t\tflex-wrap: wrap;\n\t\t\n\t\t> * {\n\t\t\tpadding: 1em;\n\t\t}\n\t\t> img {\n\t\t\tmax-width: 100%;\n\t\t\talign-self: center;\n\t\t}\n\t}\n\n\t@media (min-width: 575px) {\n\t\tgrid-template-columns: auto 1fr auto;\n\t\t> .back {\n\t\t\tgrid-row: unset;\n\t\t}\n\t\t\n\t\t> .edit {\n\t\t\ttext-align: left; \n\t\t}\n\n\t\t> .next {\n\t\t\tgrid-row: unset;\n\t\t}\n\n\t\t> .exit {\n\t\t\tgrid-column: 3;  \n\t\t}\n\n\t\t> .content {\n\t\t\tgrid-column: unset;\n\t\t}\n\t}\n\n"])));
var Doodle = /** @class */ (function (_super) {
    __extends(Doodle, _super);
    function Doodle(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            redirect: false,
        };
        _this.exit = _this.exit.bind(_this);
        return _this;
    }
    Doodle.prototype.exit = function (event) {
        console.log('keydown');
        if (event.key == "Escape" || event.key == "Esc" || event.keyCode == 27) {
            this.setState(function () {
                return { redirect: true };
            });
        }
    };
    Doodle.prototype.componentDidMount = function () {
        var _doodleId = this.props.doodle.doodle._doodleId;
        this.props.doodle.getDoodle(_doodleId);
        document.addEventListener('keydown', this.exit, false);
    };
    Doodle.prototype.componentDidUpdate = function (prevProps, prevState) {
        var _doodleId = this.props.doodle.doodle._doodleId;
        if (prevProps.doodle.doodle._doodleId != _doodleId) {
            this.props.doodle.getDoodle(_doodleId);
        }
        document.removeEventListener('keydown', this.exit, false);
    };
    Doodle.prototype.render = function () {
        var redirect = this.state.redirect;
        var _a = this.props.doodle.doodle, _doodleId = _a._doodleId, title = _a.title, _imageId = _a._imageId, details = _a.details;
        var admin = this.props.user.admin;
        var coverImageElem = _imageId ? (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_image_image_tag__WEBPACK_IMPORTED_MODULE_3__["default"], { _imageId: _imageId })) : '';
        if (redirect) {
            return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Redirect"], { to: '/doodle/' }));
        }
        return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utilities_styled_components__WEBPACK_IMPORTED_MODULE_7__["Popout"], { onKeyDown: this.exit },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Wrapper, null,
                admin ? react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], { className: "edit", to: '/doodle/edit/' + _doodleId }, "EDIT") : '',
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], { className: "exit", to: '/doodle/' }, "X"),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_doodle_changer__WEBPACK_IMPORTED_MODULE_6__["BackArrow"], { _doodleId: _doodleId }),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "content" },
                    coverImageElem,
                    title || details != '<p><br></p>' ? react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", null,
                        title ? react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h2", { className: "title" }, title) : '',
                        details != '<p><br></p>' ? react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_rte__WEBPACK_IMPORTED_MODULE_1___default.a, { value: react_rte__WEBPACK_IMPORTED_MODULE_1___default.a.createValueFromString(details, 'html'), readOnly: true }) : '') : ''),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_doodle_changer__WEBPACK_IMPORTED_MODULE_6__["NextArrow"], { _doodleId: _doodleId }))));
    };
    return Doodle;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]));
;
/* harmony default export */ __webpack_exports__["default"] = (Object(_user_user_provider__WEBPACK_IMPORTED_MODULE_4__["userConsumer"])(Object(_doodle_provider__WEBPACK_IMPORTED_MODULE_5__["doodleConsumer"])(Doodle)));
var templateObject_1;


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

/***/ "./node_modules/@fortawesome/fontawesome-free-solid/faCaretLeft.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@fortawesome/fontawesome-free-solid/faCaretLeft.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = { prefix: 'fas', iconName: 'caret-left', icon: [192, 512, [], "f0d9", "M192 127.338v257.324c0 17.818-21.543 26.741-34.142 14.142L29.196 270.142c-7.81-7.81-7.81-20.474 0-28.284l128.662-128.662c12.599-12.6 34.142-3.676 34.142 14.142z"] };

/***/ }),

/***/ "./node_modules/@fortawesome/fontawesome-free-solid/faCaretRight.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@fortawesome/fontawesome-free-solid/faCaretRight.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = { prefix: 'fas', iconName: 'caret-right', icon: [192, 512, [], "f0da", "M0 384.662V127.338c0-17.818 21.543-26.741 34.142-14.142l128.662 128.662c7.81 7.81 7.81 20.474 0 28.284L34.142 398.804C21.543 411.404 0 402.48 0 384.662z"] };

/***/ })

}]);
//# sourceMappingURL=11.index_bundle.js.map