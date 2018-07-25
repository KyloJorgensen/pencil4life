(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[10],{

/***/ "./client/src/components/image/image-tag.tsx":
/*!***************************************************!*\
  !*** ./client/src/components/image/image-tag.tsx ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _image_provider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./image-provider */ "./client/src/components/image/image-provider.tsx");

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


var ImageTag = /** @class */ (function (_super) {
    __extends(ImageTag, _super);
    function ImageTag(props) {
        return _super.call(this, props) || this;
    }
    ImageTag.prototype.componentDidMount = function () {
        this.props.image.getImage(this.props._imageId);
    };
    ImageTag.prototype.render = function () {
        var _a = this.props.image.image, alt = _a.alt, filename = _a.filename;
        return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("img", { src: filename, alt: alt }));
    };
    return ImageTag;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]));
;
/* harmony default export */ __webpack_exports__["default"] = (Object(_image_provider__WEBPACK_IMPORTED_MODULE_1__["imageConsumer"])(ImageTag));


/***/ }),

/***/ "./client/src/components/project/page/project-page-changer.tsx":
/*!*********************************************************************!*\
  !*** ./client/src/components/project/page/project-page-changer.tsx ***!
  \*********************************************************************/
/*! exports provided: default, ProjectPageChanger, BackArrow, NextArrow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectPageChanger", function() { return changer; });
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
/* harmony import */ var _user_user_provider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../user/user-provider */ "./client/src/components/user/user-provider.tsx");
/* harmony import */ var _project_page_provider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./project-page-provider */ "./client/src/components/project/page/project-page-provider.tsx");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.es.js");

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
var __makeTemplateObject = (undefined && undefined.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};









_fortawesome_fontawesome__WEBPACK_IMPORTED_MODULE_2__["library"].add(_fortawesome_fontawesome_free_solid_faCaretRight__WEBPACK_IMPORTED_MODULE_4__, _fortawesome_fontawesome_free_solid_faCaretLeft__WEBPACK_IMPORTED_MODULE_5__);
var ProjectPageChanger = /** @class */ (function (_super) {
    __extends(ProjectPageChanger, _super);
    function ProjectPageChanger(props) {
        return _super.call(this, props) || this;
    }
    ProjectPageChanger.prototype.componentDidMount = function () {
        var _a = this.props.projectPage, _projectId = _a._projectId, getProjectPages = _a.getProjectPages;
        getProjectPages(_projectId, {});
    };
    ProjectPageChanger.prototype.render = function () {
        var projectPage = this.props.projectPage;
        var _a = this.props.projectPage, _projectId = _a._projectId, projectPages = _a.projectPages;
        var _b = 'projectPage' in this.props.projectPage ? this.props.projectPage.projectPage : { _projectPageId: '', page: 'MAIN' }, _projectPageId = _b._projectPageId, page = _b.page;
        var admin = this.props.user.admin;
        var pages = projectPages.map(function (page) { return page; });
        pages.push('');
        var index = pages.findIndex(function (page) { return page == ('projectPage' in projectPage ? projectPage.projectPage._projectPageId : ''); });
        return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "project-page-changer-wrapper" },
            admin ? react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", null,
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], { to: '/project/edit/' + _projectId + '/' + _projectPageId }, "EDIT"),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], { to: '/project/new/' + _projectId + '/' }, "NEW PAGE")) : '',
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", null,
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], { to: '/project/item/' + _projectId + '/' + pages[(index + pages.length - 1) % pages.length] },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], { icon: ["fas", "caret-left"] })),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", null,
                    page,
                    "/",
                    this.props.projectPage.total),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], { to: '/project/item/' + _projectId + '/' + pages[(index + pages.length + 1) % pages.length] },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], { icon: ["fas", "caret-right"] })))));
    };
    return ProjectPageChanger;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]));
;
/* harmony default export */ __webpack_exports__["default"] = (Object(_user_user_provider__WEBPACK_IMPORTED_MODULE_6__["userConsumer"])(Object(_project_page_provider__WEBPACK_IMPORTED_MODULE_7__["projectPageConsumer"])(ProjectPageChanger)));
var changer = Object(_user_user_provider__WEBPACK_IMPORTED_MODULE_6__["userConsumer"])(Object(_project_page_provider__WEBPACK_IMPORTED_MODULE_7__["projectPageConsumer"])(ProjectPageChanger));

var ArrowStyle = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    > a {\n        display: block;\n        position: relative;\n        width: 100%;\n        height: 100%;\n        padding: 0 1em;\n        > svg {\n            position: relative;\n            top: 50%;\n            left: 50%;\n            transform: translate(-50%, -50%);\n            margin: 0;                    \n            width: 2em !important;\n            height: 5em;\n            color: #494949;\n        }\n    }\n    &:hover {\n        > a > svg {\n            color: white;\n        }\n    }\n"], ["\n    > a {\n        display: block;\n        position: relative;\n        width: 100%;\n        height: 100%;\n        padding: 0 1em;\n        > svg {\n            position: relative;\n            top: 50%;\n            left: 50%;\n            transform: translate(-50%, -50%);\n            margin: 0;                    \n            width: 2em !important;\n            height: 5em;\n            color: #494949;\n        }\n    }\n    &:hover {\n        > a > svg {\n            color: white;\n        }\n    }\n"])));
var BackArrow = /** @class */ (function (_super) {
    __extends(BackArrow, _super);
    function BackArrow(props) {
        return _super.call(this, props) || this;
    }
    BackArrow.prototype.componentDidMount = function () {
        var _a = this.props.projectPage, _projectId = _a._projectId, getProjectPages = _a.getProjectPages;
        getProjectPages(_projectId, {});
    };
    BackArrow.prototype.render = function () {
        var projectPage = this.props.projectPage;
        var _a = this.props.projectPage, _projectId = _a._projectId, projectPages = _a.projectPages;
        var pages = projectPages.map(function (page) { return page; });
        pages.push('');
        var index = pages.findIndex(function (page) { return page == ('projectPage' in projectPage ? projectPage.projectPage._projectPageId : ''); });
        return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](ArrowStyle, { className: 'back' },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], { to: '/project/item/' + _projectId + '/' + pages[(index + pages.length - 1) % pages.length] },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], { icon: ["fas", "caret-left"] }))));
    };
    return BackArrow;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]));
;
var backarrow = Object(_user_user_provider__WEBPACK_IMPORTED_MODULE_6__["userConsumer"])(Object(_project_page_provider__WEBPACK_IMPORTED_MODULE_7__["projectPageConsumer"])(BackArrow));

var NextArrow = /** @class */ (function (_super) {
    __extends(NextArrow, _super);
    function NextArrow(props) {
        return _super.call(this, props) || this;
    }
    NextArrow.prototype.componentDidMount = function () {
        var _a = this.props.projectPage, _projectId = _a._projectId, getProjectPages = _a.getProjectPages;
        getProjectPages(_projectId, {});
    };
    NextArrow.prototype.render = function () {
        var projectPage = this.props.projectPage;
        var _a = this.props.projectPage, _projectId = _a._projectId, projectPages = _a.projectPages;
        var pages = projectPages.map(function (page) { return page; });
        pages.push('');
        var index = pages.findIndex(function (page) { return page == ('projectPage' in projectPage ? projectPage.projectPage._projectPageId : ''); });
        return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](ArrowStyle, { className: 'next' },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], { to: '/project/item/' + _projectId + '/' + pages[(index + pages.length + 1) % pages.length] },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], { icon: ["fas", "caret-right"] }))));
    };
    return NextArrow;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]));
;
var nextarrow = Object(_user_user_provider__WEBPACK_IMPORTED_MODULE_6__["userConsumer"])(Object(_project_page_provider__WEBPACK_IMPORTED_MODULE_7__["projectPageConsumer"])(NextArrow));

var templateObject_1;


/***/ }),

/***/ "./client/src/components/project/page/project-page-edit.tsx":
/*!******************************************************************!*\
  !*** ./client/src/components/project/page/project-page-edit.tsx ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_rte__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-rte */ "./node_modules/react-rte/dist/react-rte.js");
/* harmony import */ var react_rte__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_rte__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var _image_image_new__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../image/image-new */ "./client/src/components/image/image-new.tsx");
/* harmony import */ var _image_image_edit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../image/image-edit */ "./client/src/components/image/image-edit.tsx");
/* harmony import */ var _project_page_provider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./project-page-provider */ "./client/src/components/project/page/project-page-provider.tsx");
/* harmony import */ var _user_user_provider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../user/user-provider */ "./client/src/components/user/user-provider.tsx");
/* harmony import */ var _utilities_styled_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../utilities/styled.components */ "./client/src/components/utilities/styled.components.tsx");

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








var ProjectPageEdit = /** @class */ (function (_super) {
    __extends(ProjectPageEdit, _super);
    function ProjectPageEdit(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            redirect: false,
            required: false,
            title: null,
            page: null,
            imageRequired: false,
            _imageId: null,
            details: react_rte__WEBPACK_IMPORTED_MODULE_1___default.a.createEmptyValue(),
            discontinued: false,
        };
        _this.editField = _this.editField.bind(_this);
        _this.handleCheckboxChange = _this.handleCheckboxChange.bind(_this);
        _this.hitKey = _this.hitKey.bind(_this);
        _this.updateProjectPage = _this.updateProjectPage.bind(_this);
        _this.updateProjectPageResult = _this.updateProjectPageResult.bind(_this);
        _this.onRichTextChange = _this.onRichTextChange.bind(_this);
        _this.redirect = _this.redirect.bind(_this);
        _this.addNewImageResult = _this.addNewImageResult.bind(_this);
        return _this;
    }
    ProjectPageEdit.prototype.editField = function (event) {
        var _a = event.target, name = _a.name, value = _a.value;
        this.setState(function (prevState) {
            prevState[name] = value;
            return prevState;
        });
    };
    ProjectPageEdit.prototype.handleCheckboxChange = function (event) {
        var _a = event.target, name = _a.name, checked = _a.checked;
        this.setState(function (prevState) {
            prevState[name] = checked;
            return prevState;
        });
    };
    ProjectPageEdit.prototype.hitKey = function (event) {
        if (event.key == 'Enter') {
            this.updateProjectPage(event);
        }
    };
    ProjectPageEdit.prototype.updateProjectPage = function (event) {
        var _this = this;
        event.preventDefault();
        var _a = this.state, title = _a.title, page = _a.page, details = _a.details, _imageId = _a._imageId, discontinued = _a.discontinued;
        var changes = {
            title: title,
            page: page,
            details: details.toString('html'),
            _imageId: _imageId,
            discontinued: discontinued
        };
        var params = { _projectPageId: this.props.projectPage.projectPage._projectPageId };
        var vaildKeys = ['title', 'page', 'details', '_imageId', 'discontinued'];
        vaildKeys.forEach(function (vaildKey) {
            if (changes[vaildKey] != _this.props.projectPage.projectPage[vaildKey]) {
                params[vaildKey] = changes[vaildKey];
            }
        });
        this.props.projectPage.updateProjectPage(this.props.projectPage._projectId, params, this.updateProjectPageResult);
        this.setState(function () {
            return { required: false };
        });
    };
    ProjectPageEdit.prototype.updateProjectPageResult = function (error) {
        if (error) {
            this.setState(function () {
                return { required: true };
            });
        }
        else {
            this.redirect();
        }
    };
    ProjectPageEdit.prototype.onRichTextChange = function (value) {
        this.setState(function () {
            return { details: value };
        });
    };
    ProjectPageEdit.prototype.redirect = function () {
        this.setState(function () {
            return { redirect: true };
        });
    };
    ProjectPageEdit.prototype.addNewImageResult = function (error, _imageId) {
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
    ProjectPageEdit.prototype.componentWillMount = function () {
        var _a = this.props.projectPage.projectPage, title = _a.title, page = _a.page, details = _a.details, _imageId = _a._imageId, discontinued = _a.discontinued;
        this.setState(function () {
            return {
                title: title,
                page: page,
                details: react_rte__WEBPACK_IMPORTED_MODULE_1___default.a.createValueFromString(details, 'html'),
                _imageId: _imageId,
                discontinued: discontinued,
            };
        });
    };
    ProjectPageEdit.prototype.componentDidUpdate = function (prevProps, prevState) {
        var _this = this;
        var propsToCheck = ['title', 'year', 'coverImage', 'details', 'discontinued'];
        var _state = null;
        propsToCheck.forEach(function (propToCheck) {
            if (prevProps.projectPage.projectPage[propToCheck] !== _this.props.projectPage.projectPage[propToCheck]) {
                _state = _state == null ? {} : _state;
                if (propToCheck == 'details') {
                    _state[propToCheck] = react_rte__WEBPACK_IMPORTED_MODULE_1___default.a.createValueFromString(_this.props.projectPage.projectPage[propToCheck], 'html');
                }
                else {
                    _state[propToCheck] = _this.props.projectPage.projectPage[propToCheck];
                }
            }
        });
        if (_state) {
            this.setState(_state);
        }
    };
    ProjectPageEdit.prototype.componentDidMount = function () {
        this.props.projectPage.getProjectPage(this.props.projectPage._projectId, this.props.projectPage.projectPage._projectPageId);
    };
    ProjectPageEdit.prototype.render = function () {
        var _a = this, addNewImageResult = _a.addNewImageResult, hitKey = _a.hitKey, handleCheckboxChange = _a.handleCheckboxChange, editField = _a.editField, updateProjectPage = _a.updateProjectPage, onRichTextChange = _a.onRichTextChange;
        var _b = this.state, title = _b.title, _imageId = _b._imageId, imageRequired = _b.imageRequired, redirect = _b.redirect, required = _b.required, page = _b.page, details = _b.details, discontinued = _b.discontinued;
        var admin = this.props.user.admin;
        var pathname = this.props.location.pathname;
        var _c = this.props.projectPage, total = _c.total, _projectId = _c._projectId;
        var _projectPageId = this.props.projectPage.projectPage._projectPageId;
        if (redirect) {
            return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Redirect"], { to: '/project/item/' + this.props.projectPage._projectId + '/' + this.props.projectPage.projectPage._projectPageId }));
        }
        if (!admin) {
            return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Redirect"], { to: { pathname: '/login', state: { redirectPath: pathname } } }));
        }
        return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utilities_styled_components__WEBPACK_IMPORTED_MODULE_7__["Popout"], null,
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "project-page-edit-wrapper container" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("form", { onSubmit: updateProjectPage },
                    admin ? react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", { className: "text-right" },
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], { to: '/project/item/' + _projectId + '/' + _projectPageId }, "X")) : '',
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h3", null, "EDIT PROJECT PAGE"),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("label", null, "Image"),
                    _imageId ? react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_image_image_edit__WEBPACK_IMPORTED_MODULE_4__["default"], { _imageId: _imageId, updateRedirect: false }) : react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_image_image_new__WEBPACK_IMPORTED_MODULE_3__["default"], { required: imageRequired, addNewImageResult: addNewImageResult }),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("label", null,
                        "Title",
                        required ? (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", { className: "errortext" }, "*")) : ''),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("br", null),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("input", { type: 'text', onKeyPress: hitKey, onChange: editField, name: 'title', placeholder: "Great ProjectPage", value: title }),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("br", null),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("label", null, "Page"),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("br", null),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("input", { type: "number", onKeyPress: hitKey, onChange: editField, name: "page", min: 1, max: total, value: page }),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("br", null),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("label", null, "Details"),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("br", null),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_rte__WEBPACK_IMPORTED_MODULE_1___default.a, { value: details, onChange: onRichTextChange }),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("label", null, "Discontinued"),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("br", null),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("input", { type: 'checkbox', checked: !!discontinued, name: "discontinued", onChange: handleCheckboxChange }),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("br", null),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("input", { type: 'submit', onClick: updateProjectPage, value: 'SAVE' })))));
    };
    return ProjectPageEdit;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]));
;
/* harmony default export */ __webpack_exports__["default"] = (Object(_user_user_provider__WEBPACK_IMPORTED_MODULE_6__["userConsumer"])(Object(_project_page_provider__WEBPACK_IMPORTED_MODULE_5__["projectPageConsumer"])(ProjectPageEdit)));


/***/ }),

/***/ "./client/src/components/project/page/project-page-list-item.tsx":
/*!***********************************************************************!*\
  !*** ./client/src/components/project/page/project-page-list-item.tsx ***!
  \***********************************************************************/
/*! exports provided: default, ProjectPageListItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectPageListItem", function() { return ProjectPageListItem; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var _image_image_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../image/image-tag */ "./client/src/components/image/image-tag.tsx");
/* harmony import */ var _project_page_provider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./project-page-provider */ "./client/src/components/project/page/project-page-provider.tsx");

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




var ProjectPageListItem = /** @class */ (function (_super) {
    __extends(ProjectPageListItem, _super);
    function ProjectPageListItem(props) {
        return _super.call(this, props) || this;
    }
    ProjectPageListItem.prototype.componentDidMount = function () {
        this.props.projectPage.getProjectPage(this.props.projectPage._projectId, this.props._projectPageId);
    };
    ProjectPageListItem.prototype.render = function () {
        var _projectId = this.props.projectPage._projectId;
        var _a = this.props.projectPage.projectPage, _projectPageId = _a._projectPageId, title = _a.title, _imageId = _a._imageId;
        var imageIdElem = _imageId ? (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_image_image_tag__WEBPACK_IMPORTED_MODULE_2__["default"], { _imageId: _imageId })) : '';
        return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "project-page-list-item-wrapper" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], { className: "project-link", to: '/project/item/' + _projectId + '/' + _projectPageId },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "image-wrapper" }, imageIdElem))));
    };
    return ProjectPageListItem;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]));
;
/* harmony default export */ __webpack_exports__["default"] = (Object(_project_page_provider__WEBPACK_IMPORTED_MODULE_3__["projectPageConsumer"])(ProjectPageListItem));



/***/ }),

/***/ "./client/src/components/project/page/project-page-list.tsx":
/*!******************************************************************!*\
  !*** ./client/src/components/project/page/project-page-list.tsx ***!
  \******************************************************************/
/*! exports provided: default, ProjectPageList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectPageList", function() { return ProjectPageList; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _project_page_list_item__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project-page-list-item */ "./client/src/components/project/page/project-page-list-item.tsx");
/* harmony import */ var _user_user_provider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../user/user-provider */ "./client/src/components/user/user-provider.tsx");
/* harmony import */ var _project_page_provider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./project-page-provider */ "./client/src/components/project/page/project-page-provider.tsx");

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




var ProjectPageList = /** @class */ (function (_super) {
    __extends(ProjectPageList, _super);
    function ProjectPageList(props) {
        return _super.call(this, props) || this;
    }
    ProjectPageList.prototype.componentDidMount = function () {
        var query = {};
        if (this.props.limit) {
            query.limit = this.props.limit;
        }
        this.props.projectPage.getProjectPages(this.props.projectPage._projectId, query);
    };
    ProjectPageList.prototype.componentDidUpdate = function (prevProps, prevState, snapshot) {
        var update = false;
        var prevDiscontinued = prevProps.discontinued;
        var currentDiscontinued = this.props.discontinued;
        if (prevDiscontinued != currentDiscontinued) {
            update = true;
        }
        if (update) {
            var query = {
                discontinued: this.props.discontinued,
                limit: this.props.limit,
            };
            this.props.projectPage.getProjectPages(this.props.projectPage._projectId, query);
        }
    };
    ProjectPageList.prototype.render = function () {
        var displayDetails = this.props.displayDetails;
        var projectPages = this.props.projectPage.projectPages;
        var ProjectPageList = [];
        if (projectPages) {
            projectPages.forEach(function (_projectPageId) {
                ProjectPageList.push(react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_project_page_list_item__WEBPACK_IMPORTED_MODULE_1__["default"], { key: _projectPageId, _projectPageId: _projectPageId, displayDetails: displayDetails }));
            });
        }
        return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "project-page-list-wrapper" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("ul", { className: 'project-list' }, ProjectPageList)));
    };
    ProjectPageList.defaultProps = {
        displayDetails: true,
        discontinued: false,
        limit: 10,
    };
    return ProjectPageList;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]));
;
/* harmony default export */ __webpack_exports__["default"] = (Object(_user_user_provider__WEBPACK_IMPORTED_MODULE_2__["userConsumer"])(Object(_project_page_provider__WEBPACK_IMPORTED_MODULE_3__["projectPageConsumer"])(ProjectPageList)));



/***/ }),

/***/ "./client/src/components/project/page/project-page-new.tsx":
/*!*****************************************************************!*\
  !*** ./client/src/components/project/page/project-page-new.tsx ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_rte__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-rte */ "./node_modules/react-rte/dist/react-rte.js");
/* harmony import */ var react_rte__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_rte__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var _image_image_new__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../image/image-new */ "./client/src/components/image/image-new.tsx");
/* harmony import */ var _image_image_edit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../image/image-edit */ "./client/src/components/image/image-edit.tsx");
/* harmony import */ var _user_user_provider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../user/user-provider */ "./client/src/components/user/user-provider.tsx");
/* harmony import */ var _project_page_provider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./project-page-provider */ "./client/src/components/project/page/project-page-provider.tsx");
/* harmony import */ var _utilities_styled_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../utilities/styled.components */ "./client/src/components/utilities/styled.components.tsx");

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








var ProjectPageNew = /** @class */ (function (_super) {
    __extends(ProjectPageNew, _super);
    function ProjectPageNew(props) {
        var _this = _super.call(this, props) || this;
        _this.titleRef = react__WEBPACK_IMPORTED_MODULE_0__["createRef"]();
        _this.pageRef = react__WEBPACK_IMPORTED_MODULE_0__["createRef"]();
        _this.addNewProjectResult = function (error, _projectPageId) {
            if (error) {
                _this.setState(function () {
                    return { required: true };
                });
            }
            else {
                _this.setState(function () {
                    return { _projectPageId: _projectPageId };
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
            _projectPageId: null,
            required: false,
            imageRequired: false,
            title: null,
            page: null,
            details: react_rte__WEBPACK_IMPORTED_MODULE_1___default.a.createEmptyValue(),
        };
        _this.hitKey = _this.hitKey.bind(_this);
        _this.addNewProject = _this.addNewProject.bind(_this);
        _this.addNewProjectResult = _this.addNewProjectResult.bind(_this);
        _this.onRichTextChange = _this.onRichTextChange.bind(_this);
        _this.addNewImageResult = _this.addNewImageResult.bind(_this);
        return _this;
    }
    ProjectPageNew.prototype.hitKey = function (event) {
        if (event.key == 'Enter') {
            this.addNewProject(event);
        }
    };
    ProjectPageNew.prototype.componentDidMount = function () {
        this.props.projectPage.getProjectPages(this.props.projectPage._projectId, {});
    };
    ProjectPageNew.prototype.addNewProject = function (event) {
        event.preventDefault();
        var title = this.titleRef.current.value;
        var page = Number(this.pageRef.current.value);
        var _a = this.state, details = _a.details, _imageId = _a._imageId;
        var newProject = {
            title: title,
            page: page,
            details: details.toString('html'),
        };
        if (_imageId != null) {
            newProject._imageId = _imageId;
        }
        this.props.projectPage.addProjectPage(this.props.projectPage._projectId, newProject, this.addNewProjectResult);
        this.setState(function () {
            return { required: false };
        });
    };
    ProjectPageNew.prototype.render = function () {
        var _a = this, addNewImageResult = _a.addNewImageResult, addNewProject = _a.addNewProject, hitKey = _a.hitKey, onRichTextChange = _a.onRichTextChange, titleRef = _a.titleRef, pageRef = _a.pageRef;
        var _b = this.state, _imageId = _b._imageId, imageRequired = _b.imageRequired, _projectPageId = _b._projectPageId, required = _b.required, details = _b.details, page = _b.page;
        var _projectId = this.props.projectPage._projectId;
        var admin = this.props.user.admin;
        var pathname = this.props.location.pathname;
        var total = this.props.projectPage.total;
        if (_projectPageId) {
            return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Redirect"], { to: '/project/item/' + this.state._projectPageId }));
        }
        if (!admin) {
            return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Redirect"], { to: { pathname: '/login', state: { redirectPath: pathname } } }));
        }
        return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utilities_styled_components__WEBPACK_IMPORTED_MODULE_7__["Popout"], null,
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "project-page-new-wrapper container" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("form", { onSubmit: addNewProject },
                    admin ? react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", { className: "text-right" },
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], { to: '/project/item/' + _projectId }, "X")) : '',
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h3", null, "New Project Page"),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("label", null, "Image"),
                    _imageId ? react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_image_image_edit__WEBPACK_IMPORTED_MODULE_4__["default"], { _imageId: _imageId, updateRedirect: false }) : react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_image_image_new__WEBPACK_IMPORTED_MODULE_3__["default"], { required: imageRequired, addNewImageResult: addNewImageResult }),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("label", null,
                        "Title",
                        required ? (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", { className: "errortext" }, "*")) : ''),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("br", null),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("input", { type: 'text', onKeyPress: hitKey, placeholder: "Great Project", ref: titleRef }),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("br", null),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("label", null, "Page"),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("br", null),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("input", { type: "number", min: 1, max: total + 1, onKeyPress: hitKey, ref: pageRef, defaultValue: (total + 1).toString() }),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("br", null),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("label", null, "Details"),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("br", null),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_rte__WEBPACK_IMPORTED_MODULE_1___default.a, { value: details, onChange: onRichTextChange }),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("br", null),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("input", { type: 'submit', onClick: addNewProject, value: 'SAVE' })))));
    };
    return ProjectPageNew;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]));
;
/* harmony default export */ __webpack_exports__["default"] = (Object(_user_user_provider__WEBPACK_IMPORTED_MODULE_5__["userConsumer"])(Object(_project_page_provider__WEBPACK_IMPORTED_MODULE_6__["projectPageConsumer"])(ProjectPageNew)));


/***/ }),

/***/ "./client/src/components/project/page/project-page-provider.tsx":
/*!**********************************************************************!*\
  !*** ./client/src/components/project/page/project-page-provider.tsx ***!
  \**********************************************************************/
/*! exports provided: ProjectPageContext, ProjectPageWrapper, default, projectPageProvider, projectPageConsumer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectPageContext", function() { return ProjectPageContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectPageWrapper", function() { return ProjectPageWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "projectPageProvider", function() { return projectPageProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "projectPageConsumer", function() { return projectPageConsumer; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var querystring__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! querystring */ "./node_modules/querystring-es3/index.js");
/* harmony import */ var querystring__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(querystring__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router */ "./node_modules/react-router/es/index.js");

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
    getProjectPages: function (params) {
        console.error('Error: Cannot getProjectPages no ProjectPageContext.Provider element in parents');
    },
    getProjectPage: function (params) {
        console.error('Error: Cannot getProjectPage no ProjectPageContext.Provider element in parents');
    },
    addProjectPage: function (params) {
        console.error('Error: Cannot addProjectPage no ProjectPageContext.Provider element in parents');
    },
    updateProjectPage: function (params, callback) {
        console.error('Error: Cannot updateProjectPage no ProjectPageContext.Provider element in parents');
    },
    projectPages: [],
    projectPageList: {},
    page: 0,
    totalPages: 0,
    limit: 0,
    total: 0,
    pageTotal: 0,
};
var ProjectPageContext = react__WEBPACK_IMPORTED_MODULE_0__["createContext"](Context);
var ProjectPageWrapper = /** @class */ (function (_super) {
    __extends(ProjectPageWrapper, _super);
    function ProjectPageWrapper(props) {
        var _this = _super.call(this, props) || this;
        _this.state = _this.props.initialState;
        _this.getProjectPages = _this.getProjectPages.bind(_this);
        _this.getProjectPage = _this.getProjectPage.bind(_this);
        _this.addProjectPage = _this.addProjectPage.bind(_this);
        return _this;
    }
    ProjectPageWrapper.prototype.getProjectPages = function (_projectId, query) {
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
        var _query = Object(querystring__WEBPACK_IMPORTED_MODULE_1__["stringify"])(querydefaults);
        _query = _query ? '?' + _query : '';
        var request = new Request('/api/project/' + _projectId + '/page' + _query, {
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
                error.message = JSON.stringify(response);
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
                    limit: body.pageLimit,
                    total: body.total,
                    pageTotal: body.totalBatch,
                    projectPages: body.pages,
                };
            });
        })
            .catch(function (error) {
            _this.setState(function () {
                return {
                    projectPages: null,
                    page: null,
                    totalPages: null,
                    limit: null,
                    total: null,
                    pageTotal: null,
                };
            });
        });
    };
    ProjectPageWrapper.prototype.getProjectPage = function (_projectId, _projectPageId) {
        var _this = this;
        var query = Object(querystring__WEBPACK_IMPORTED_MODULE_1__["stringify"])({
            field: [
                '_id',
                'tiltle',
                'page',
                '_imageId',
                'discontinued',
            ],
            format: 'json',
        });
        query = query ? '?' + query : '';
        var request = new Request('/api/project/' + _projectId + '/page/' + _projectPageId + query, {
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
                error.message = JSON.stringify(response);
                throw error;
            }
            return response;
        })
            .then(function (response) {
            return response.json();
        })
            .then(function (body) {
            var _id = body._id, title = body.title, details = body.details, _imageId = body._imageId, discontinued = body.discontinued, page = body.page;
            _this.setState(function (preState) {
                preState.projectPageList[_id] = {
                    _projectPageId: _id,
                    title: title,
                    page: page,
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
    ProjectPageWrapper.prototype.addProjectPage = function (_projectId, params, callback) {
        var payload = {
            title: params.title,
            page: params.page,
            details: params.details,
        };
        if ('_imageId' in params) {
            payload._imageId = params._imageId;
        }
        var request = new Request('/api/project/' + _projectId + '/page/', {
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
    ProjectPageWrapper.prototype.updateProjectPage = function (_projectId, params, callback) {
        var payload = {};
        if ('title' in params) {
            payload.title = params.title;
        }
        if ('page' in params) {
            payload.page = params.page;
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
        var request = new Request('/api/project/' + _projectId + '/page/' + params._projectPageId, {
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
                error.message = JSON.stringify(response);
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
    ProjectPageWrapper.prototype.render = function () {
        var _a = this, getProjectPages = _a.getProjectPages, getProjectPage = _a.getProjectPage, addProjectPage = _a.addProjectPage, updateProjectPage = _a.updateProjectPage;
        var _b = this.state, projectPages = _b.projectPages, projectPageList = _b.projectPageList, page = _b.page, totalPages = _b.totalPages, limit = _b.limit, total = _b.total, pageTotal = _b.pageTotal;
        var context = {
            getProjectPages: getProjectPages,
            getProjectPage: getProjectPage,
            addProjectPage: addProjectPage,
            updateProjectPage: updateProjectPage,
            projectPages: projectPages,
            projectPageList: projectPageList,
            page: page,
            totalPages: totalPages,
            limit: limit,
            total: total,
            pageTotal: pageTotal,
        };
        return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](ProjectPageContext.Provider, { value: context }, this.props.children));
    };
    ProjectPageWrapper.defaultProps = {
        initialState: {
            projectPages: [],
            projectPageList: {},
            page: 0,
            totalPages: 0,
            limit: 0,
            total: 0,
            pageTotal: 0,
        },
    };
    return ProjectPageWrapper;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]));

/* harmony default export */ __webpack_exports__["default"] = (ProjectPageWrapper);
var projectPageProvider = function (Component, options) {
    var ProjectPageProvider = /** @class */ (function (_super) {
        __extends(ProjectPageProvider, _super);
        function ProjectPageProvider() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        ProjectPageProvider.prototype.render = function () {
            var projectPageWrapperProps = {};
            if (options) {
                if ('props' in options) {
                    projectPageWrapperProps = options.props;
                }
            }
            return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](ProjectPageWrapper, __assign({}, projectPageWrapperProps),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Component, __assign({}, this.props))));
        };
        return ProjectPageProvider;
    }(react__WEBPACK_IMPORTED_MODULE_0__["Component"]));
    return ProjectPageProvider;
};
var projectPageConsumer = function (Component) {
    var ProjectPageConsumer = /** @class */ (function (_super) {
        __extends(ProjectPageConsumer, _super);
        function ProjectPageConsumer() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        ProjectPageConsumer.prototype.render = function () {
            var _this = this;
            var _projectPageId, _projectId;
            if ('match' in this.props) {
                if ('_projectPageId' in this.props.match.params) {
                    _projectPageId = this.props.match.params._projectPageId;
                }
                if ('_projectId' in this.props.match.params) {
                    _projectId = this.props.match.params._projectId;
                }
            }
            if ('_projectId' in this.props) {
                _projectId = this.props._projectId;
            }
            if ('_projectPageId' in this.props) {
                _projectPageId = this.props._projectPageId;
            }
            return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](ProjectPageContext.Consumer, null, function (context) {
                if (_projectPageId) {
                    context.projectPage = {
                        _projectPageId: _projectPageId,
                        title: '',
                        page: 0,
                        details: '',
                        _imageId: null,
                        discontinued: false,
                    };
                    if (_projectPageId in context.projectPageList) {
                        var projectPage = context.projectPageList[_projectPageId];
                        context.projectPage = {
                            _projectPageId: _projectPageId,
                            title: 'title' in projectPage ? projectPage.title : '',
                            page: 'page' in projectPage ? projectPage.page : 0,
                            details: 'details' in projectPage ? projectPage.details : '',
                            _imageId: '_imageId' in projectPage ? projectPage._imageId : null,
                            discontinued: 'discontinued' in projectPage ? projectPage.discontinued : false,
                        };
                    }
                }
                if (_projectId) {
                    context._projectId = _projectId;
                }
                return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Component, __assign({}, _this.props, { projectPage: context })));
            }));
        };
        return ProjectPageConsumer;
    }(react__WEBPACK_IMPORTED_MODULE_0__["Component"]));
    //@ts-ignore
    return Object(react_router__WEBPACK_IMPORTED_MODULE_2__["withRouter"])(ProjectPageConsumer);
};


/***/ }),

/***/ "./client/src/components/project/page/project-page.tsx":
/*!*************************************************************!*\
  !*** ./client/src/components/project/page/project-page.tsx ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_rte__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-rte */ "./node_modules/react-rte/dist/react-rte.js");
/* harmony import */ var react_rte__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_rte__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var _image_image_tag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../image/image-tag */ "./client/src/components/image/image-tag.tsx");
/* harmony import */ var _user_user_provider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../user/user-provider */ "./client/src/components/user/user-provider.tsx");
/* harmony import */ var _project_page_provider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./project-page-provider */ "./client/src/components/project/page/project-page-provider.tsx");
/* harmony import */ var _project_page_changer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./project-page-changer */ "./client/src/components/project/page/project-page-changer.tsx");
/* harmony import */ var _utilities_styled_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../utilities/styled.components */ "./client/src/components/utilities/styled.components.tsx");
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
var ProjectPage = /** @class */ (function (_super) {
    __extends(ProjectPage, _super);
    function ProjectPage(props) {
        return _super.call(this, props) || this;
    }
    ProjectPage.prototype.componentDidMount = function () {
        var _projectId = this.props.projectPage._projectId;
        var _projectPageId = this.props.projectPage.projectPage._projectPageId;
        this.props.projectPage.getProjectPage(_projectId, _projectPageId);
    };
    ProjectPage.prototype.componentDidUpdate = function (prevProps, prevState) {
        var _projectId = this.props.projectPage._projectId;
        var _projectPageId = this.props.projectPage.projectPage._projectPageId;
        if (prevProps.projectPage.projectPage._projectPageId != _projectPageId) {
            this.props.projectPage.getProjectPage(_projectId, _projectPageId);
        }
    };
    ProjectPage.prototype.render = function () {
        var _projectId = this.props.projectPage._projectId;
        var _a = this.props.projectPage.projectPage, _projectPageId = _a._projectPageId, title = _a.title, page = _a.page, _imageId = _a._imageId, details = _a.details;
        var admin = this.props.user.admin;
        var coverImageElem = _imageId ? (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_image_image_tag__WEBPACK_IMPORTED_MODULE_3__["default"], { _imageId: _imageId })) : '';
        return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utilities_styled_components__WEBPACK_IMPORTED_MODULE_7__["Popout"], null,
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Wrapper, null,
                admin ? react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], { className: "edit", to: '/project/edit/' + _projectId + '/' + _projectPageId }, "EDIT") : '',
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], { className: "exit", to: '/project/item/' + _projectId }, "X"),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_project_page_changer__WEBPACK_IMPORTED_MODULE_6__["BackArrow"], { _projectId: _projectId }),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "content" },
                    coverImageElem,
                    title || details != '<p><br></p>' ? react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", null,
                        title ? react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h2", { className: "title" }, title) : '',
                        details != '<p><br></p>' ? react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_rte__WEBPACK_IMPORTED_MODULE_1___default.a, { value: react_rte__WEBPACK_IMPORTED_MODULE_1___default.a.createValueFromString(details, 'html'), readOnly: true }) : '') : ''),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_project_page_changer__WEBPACK_IMPORTED_MODULE_6__["NextArrow"], { _projectId: _projectId }))));
    };
    return ProjectPage;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]));
;
/* harmony default export */ __webpack_exports__["default"] = (Object(_user_user_provider__WEBPACK_IMPORTED_MODULE_4__["userConsumer"])(Object(_project_page_provider__WEBPACK_IMPORTED_MODULE_5__["projectPageConsumer"])(ProjectPage)));
var templateObject_1;


/***/ }),

/***/ "./client/src/components/project/project-edit.tsx":
/*!********************************************************!*\
  !*** ./client/src/components/project/project-edit.tsx ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_rte__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-rte */ "./node_modules/react-rte/dist/react-rte.js");
/* harmony import */ var react_rte__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_rte__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var react_datetime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-datetime */ "./node_modules/react-datetime/DateTime.js");
/* harmony import */ var react_datetime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_datetime__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _image_image_new__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../image/image-new */ "./client/src/components/image/image-new.tsx");
/* harmony import */ var _image_image_edit__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../image/image-edit */ "./client/src/components/image/image-edit.tsx");
/* harmony import */ var _project_provider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./project-provider */ "./client/src/components/project/project-provider.tsx");
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








var ProjectEdit = /** @class */ (function (_super) {
    __extends(ProjectEdit, _super);
    function ProjectEdit(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            redirect: false,
            required: false,
            title: null,
            year: null,
            imageRequired: false,
            coverImage: {
                _imageId: null,
            },
            details: react_rte__WEBPACK_IMPORTED_MODULE_1___default.a.createEmptyValue(),
            discontinued: false,
        };
        _this.editField = _this.editField.bind(_this);
        _this.handleCheckboxChange = _this.handleCheckboxChange.bind(_this);
        _this.yearChanged = _this.yearChanged.bind(_this);
        _this.hitKey = _this.hitKey.bind(_this);
        _this.updateProject = _this.updateProject.bind(_this);
        _this.updateProjectResult = _this.updateProjectResult.bind(_this);
        _this.onRichTextChange = _this.onRichTextChange.bind(_this);
        _this.redirect = _this.redirect.bind(_this);
        _this.addNewImageResult = _this.addNewImageResult.bind(_this);
        return _this;
    }
    ProjectEdit.prototype.editField = function (event) {
        var _a = event.target, name = _a.name, value = _a.value;
        this.setState(function (prevState) {
            prevState[name] = value;
            return prevState;
        });
    };
    ProjectEdit.prototype.handleCheckboxChange = function (event) {
        var _a = event.target, name = _a.name, checked = _a.checked;
        this.setState(function (prevState) {
            prevState[name] = checked;
            return prevState;
        });
    };
    ProjectEdit.prototype.yearChanged = function (momentDateTime) {
        this.setState(function (prevState) {
            return { year: momentDateTime };
        });
    };
    ProjectEdit.prototype.hitKey = function (event) {
        if (event.key == 'Enter') {
            this.updateProject(event);
        }
    };
    ProjectEdit.prototype.updateProject = function (event) {
        var _this = this;
        event.preventDefault();
        var _a = this.state, title = _a.title, year = _a.year, details = _a.details, coverImage = _a.coverImage, discontinued = _a.discontinued;
        if (!title || !year) {
            this.setState(function () {
                return { required: true };
            });
            return;
        }
        var changes = {
            title: title,
            year: year,
            details: details.toString('html'),
            coverImage: coverImage,
            discontinued: discontinued
        };
        var params = { _id: this.props.project.project._projectId };
        var vaildKeys = ['title', 'year', 'details', 'coverImage', 'discontinued'];
        vaildKeys.forEach(function (vaildKey) {
            if (changes[vaildKey] != _this.props[vaildKey]) {
                if (vaildKey == 'coverImage') {
                    if (changes.coverImage._imageId !== _this.props.project.project.coverImage._imageId) {
                        params.coverImage = params.coverImage || { _imageId: null };
                        params.coverImage._imageId = changes.coverImage._imageId;
                    }
                    return;
                }
                params[vaildKey] = changes[vaildKey];
            }
        });
        this.props.project.updateProject(params, this.updateProjectResult);
        this.setState(function () {
            return { required: false };
        });
    };
    ProjectEdit.prototype.updateProjectResult = function (error) {
        if (error) {
            this.setState(function () {
                return { required: true };
            });
        }
        else {
            this.redirect();
        }
    };
    ProjectEdit.prototype.onRichTextChange = function (value) {
        this.setState(function () {
            return { details: value };
        });
    };
    ProjectEdit.prototype.redirect = function () {
        this.setState(function () {
            return { redirect: true };
        });
    };
    ProjectEdit.prototype.addNewImageResult = function (error, _imageId) {
        if (error) {
            this.setState(function () {
                return { imageRequired: true };
            });
        }
        else {
            this.setState(function () {
                return {
                    coverImage: {
                        _imageId: _imageId,
                    },
                    imageRequired: false,
                };
            });
        }
    };
    ProjectEdit.prototype.componentWillMount = function () {
        var _a = this.props.project.project, title = _a.title, year = _a.year, details = _a.details, coverImage = _a.coverImage, discontinued = _a.discontinued;
        var _imageId = coverImage._imageId;
        this.setState(function () {
            return {
                title: title,
                year: year,
                details: react_rte__WEBPACK_IMPORTED_MODULE_1___default.a.createValueFromString(details, 'html'),
                coverImage: {
                    _imageId: _imageId,
                },
                discontinued: discontinued,
            };
        });
    };
    ProjectEdit.prototype.componentDidUpdate = function (prevProps, prevState) {
        var _this = this;
        var propsToCheck = ['title', 'year', 'coverImage', 'details', 'discontinued'];
        var _state = null;
        propsToCheck.forEach(function (propToCheck) {
            if (prevProps.project.project[propToCheck] !== _this.props.project.project[propToCheck]) {
                _state = _state == null ? {} : _state;
                if (propToCheck == 'coverImage') {
                    if (prevProps.project.project.coverImage._imageId !== _this.props.project.project.coverImage._imageId) {
                        _state.coverImage = _state.coverImage || {};
                        _state.coverImage._imageId = _this.props.project.project.coverImage._imageId;
                    }
                }
                else if (propToCheck == 'details') {
                    _state[propToCheck] = react_rte__WEBPACK_IMPORTED_MODULE_1___default.a.createValueFromString(_this.props.project.project[propToCheck], 'html');
                }
                else {
                    _state[propToCheck] = _this.props.project.project[propToCheck];
                }
            }
        });
        if (_state) {
            this.setState(_state);
        }
    };
    ProjectEdit.prototype.componentDidMount = function () {
        this.props.project.getProject(this.props.project.project._projectId);
    };
    ProjectEdit.prototype.render = function () {
        var _a = this, addNewImageResult = _a.addNewImageResult, hitKey = _a.hitKey, handleCheckboxChange = _a.handleCheckboxChange, editField = _a.editField, updateProject = _a.updateProject, yearChanged = _a.yearChanged, onRichTextChange = _a.onRichTextChange;
        var _b = this.state, title = _b.title, coverImage = _b.coverImage, imageRequired = _b.imageRequired, redirect = _b.redirect, required = _b.required, year = _b.year, details = _b.details, discontinued = _b.discontinued;
        var _imageId = coverImage._imageId;
        var admin = this.props.user.admin;
        var pathname = this.props.location.pathname;
        if (redirect) {
            return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Redirect"], { to: '/project/item/' + this.props.project.project._projectId }));
        }
        if (!admin) {
            return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Redirect"], { to: { pathname: '/login', state: { redirectPath: pathname } } }));
        }
        console.log(_imageId);
        return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "project-edit-wrapper" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("form", { onSubmit: updateProject },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h3", null, "EDIT PROJECT"),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("label", null, "Cover Image"),
                _imageId ? react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_image_image_edit__WEBPACK_IMPORTED_MODULE_5__["default"], { _imageId: _imageId, updateRedirect: false }) : react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_image_image_new__WEBPACK_IMPORTED_MODULE_4__["default"], { required: imageRequired, addNewImageResult: addNewImageResult }),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("label", null,
                    "Title",
                    required ? (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", { className: "errortext" }, "*")) : ''),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("br", null),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("input", { type: 'text', onKeyPress: hitKey, placeholder: "Great Project", onChange: editField, name: 'title', value: title }),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("br", null),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("label", null,
                    "Year",
                    required ? (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", { className: "errortext" }, "*")) : ''),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("br", null),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_datetime__WEBPACK_IMPORTED_MODULE_3__, { dateFormat: "YYYY", timeFormat: false, value: year, onChange: yearChanged }),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("br", null),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("label", null, "Details"),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("br", null),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_rte__WEBPACK_IMPORTED_MODULE_1___default.a, { value: details, onChange: onRichTextChange }),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("label", null, "Discontinued"),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("br", null),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("input", { type: 'checkbox', checked: !!discontinued, name: "discontinued", onChange: handleCheckboxChange }),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("br", null),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("input", { type: 'submit', onClick: updateProject, value: 'SAVE' }))));
    };
    return ProjectEdit;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]));
;
/* harmony default export */ __webpack_exports__["default"] = (Object(_user_user_provider__WEBPACK_IMPORTED_MODULE_7__["userConsumer"])(Object(_project_provider__WEBPACK_IMPORTED_MODULE_6__["projectConsumer"])(ProjectEdit)));


/***/ }),

/***/ "./client/src/components/project/project-list-item.tsx":
/*!*************************************************************!*\
  !*** ./client/src/components/project/project-list-item.tsx ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var object_path__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! object-path */ "./node_modules/object-path/index.js");
/* harmony import */ var object_path__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(object_path__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _image_image_tag__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../image/image-tag */ "./client/src/components/image/image-tag.tsx");
/* harmony import */ var _project_provider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./project-provider */ "./client/src/components/project/project-provider.tsx");

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






var ProjectListItem = /** @class */ (function (_super) {
    __extends(ProjectListItem, _super);
    function ProjectListItem(props) {
        return _super.call(this, props) || this;
    }
    ProjectListItem.prototype.componentDidMount = function () {
        this.props.project.getProject(this.props._projectId);
    };
    ProjectListItem.prototype.render = function () {
        var _a = this.props.project.project, _projectId = _a._projectId, title = _a.title, coverImage = _a.coverImage;
        var year = moment__WEBPACK_IMPORTED_MODULE_2__(this.props.project.project.year).format("YYYY");
        var coverImageElem = object_path__WEBPACK_IMPORTED_MODULE_3__["get"](coverImage, '_imageId', false) ? (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_image_image_tag__WEBPACK_IMPORTED_MODULE_4__["default"], { _imageId: this.props.project.project.coverImage._imageId })) : '';
        return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "project-list-item-wrapper" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], { className: "project-link", to: '/project/item/' + _projectId },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "image-wrapper" }, coverImageElem),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "title-year-wrapper" },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", { className: "title" }, title),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", { className: "year" }, year)))));
    };
    return ProjectListItem;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]));
;
/* harmony default export */ __webpack_exports__["default"] = (Object(_project_provider__WEBPACK_IMPORTED_MODULE_5__["projectConsumer"])(ProjectListItem));


/***/ }),

/***/ "./client/src/components/project/project-list.tsx":
/*!********************************************************!*\
  !*** ./client/src/components/project/project-list.tsx ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var _project_list_item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./project-list-item */ "./client/src/components/project/project-list-item.tsx");
/* harmony import */ var _project_provider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./project-provider */ "./client/src/components/project/project-provider.tsx");
/* harmony import */ var _user_user_provider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../user/user-provider */ "./client/src/components/user/user-provider.tsx");

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





var ProjectList = /** @class */ (function (_super) {
    __extends(ProjectList, _super);
    function ProjectList(props) {
        return _super.call(this, props) || this;
    }
    ProjectList.prototype.componentDidMount = function () {
        var query = {};
        if (this.props.limit) {
            query.limit = this.props.limit;
        }
        this.props.project.getProjects(query);
    };
    ProjectList.prototype.componentDidUpdate = function (prevProps, prevState, snapshot) {
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
            this.props.project.getProjects(query);
        }
    };
    ProjectList.prototype.render = function () {
        var displayDetails = this.props.displayDetails;
        var ProjectList = [];
        if (this.props.project.projects) {
            this.props.project.projects.forEach(function (projectKey) {
                ProjectList.push(react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_project_list_item__WEBPACK_IMPORTED_MODULE_2__["default"], { key: projectKey, _projectId: projectKey, displayDetails: displayDetails }));
            });
        }
        return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "project-wrapper" },
            this.props.user.admin ? (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", null,
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], { to: "/project/new" }, "NEW PROJECT"),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("br", null))) : '',
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("ul", { className: 'project-list' }, ProjectList)));
    };
    ProjectList.defaultProps = {
        displayDetails: true,
    };
    return ProjectList;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]));
;
/* harmony default export */ __webpack_exports__["default"] = (Object(_user_user_provider__WEBPACK_IMPORTED_MODULE_4__["userConsumer"])(Object(_project_provider__WEBPACK_IMPORTED_MODULE_3__["projectConsumer"])(ProjectList)));


/***/ }),

/***/ "./client/src/components/project/project-main.tsx":
/*!********************************************************!*\
  !*** ./client/src/components/project/project-main.tsx ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _project_list__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project-list */ "./client/src/components/project/project-list.tsx");
/* harmony import */ var _user_user_provider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../user/user-provider */ "./client/src/components/user/user-provider.tsx");
/* harmony import */ var _project_provider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./project-provider */ "./client/src/components/project/project-provider.tsx");

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




var ProjectMain = /** @class */ (function (_super) {
    __extends(ProjectMain, _super);
    function ProjectMain(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            discontinued: false,
        };
        _this.handleCheckboxChange = _this.handleCheckboxChange.bind(_this);
        return _this;
    }
    ProjectMain.prototype.handleCheckboxChange = function (event) {
        var _a = event.target, name = _a.name, checked = _a.checked;
        this.setState(function (prevState) {
            prevState[name] = checked;
            return prevState;
        });
    };
    ProjectMain.prototype.render = function () {
        var adminOptions = this.props.user.admin ? (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", null,
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h5", null, "Admin Options"),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("label", null, "Discontinued"),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("input", { type: 'checkbox', checked: !!this.state.discontinued, name: "discontinued", onChange: this.handleCheckboxChange }))) : '';
        return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "project-wrapper" },
            adminOptions,
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_project_list__WEBPACK_IMPORTED_MODULE_1__["default"], { discontinued: this.state.discontinued })));
    };
    return ProjectMain;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]));
;
/* harmony default export */ __webpack_exports__["default"] = (Object(_user_user_provider__WEBPACK_IMPORTED_MODULE_2__["userConsumer"])(Object(_project_provider__WEBPACK_IMPORTED_MODULE_3__["projectConsumer"])(ProjectMain)));


/***/ }),

/***/ "./client/src/components/project/project-new.tsx":
/*!*******************************************************!*\
  !*** ./client/src/components/project/project-new.tsx ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_rte__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-rte */ "./node_modules/react-rte/dist/react-rte.js");
/* harmony import */ var react_rte__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_rte__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var react_datetime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-datetime */ "./node_modules/react-datetime/DateTime.js");
/* harmony import */ var react_datetime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_datetime__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _image_image_new__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../image/image-new */ "./client/src/components/image/image-new.tsx");
/* harmony import */ var _image_image_edit__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../image/image-edit */ "./client/src/components/image/image-edit.tsx");
/* harmony import */ var _user_user_provider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../user/user-provider */ "./client/src/components/user/user-provider.tsx");
/* harmony import */ var _project_provider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./project-provider */ "./client/src/components/project/project-provider.tsx");

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








var ProjectNew = /** @class */ (function (_super) {
    __extends(ProjectNew, _super);
    function ProjectNew(props) {
        var _this = _super.call(this, props) || this;
        _this.titleRef = react__WEBPACK_IMPORTED_MODULE_0__["createRef"]();
        _this.addNewProjectResult = function (error, _projectId) {
            if (error) {
                _this.setState(function () {
                    return { required: true };
                });
            }
            else {
                _this.setState(function () {
                    return { _projectId: _projectId };
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
                        coverImage: {
                            _imageId: _imageId,
                        },
                        imageRequired: false,
                    };
                });
            }
        };
        _this.state = {
            _projectId: null,
            required: false,
            imageRequired: false,
            title: null,
            coverImage: {
                _imageId: null,
            },
            year: new Date(),
            details: react_rte__WEBPACK_IMPORTED_MODULE_1___default.a.createEmptyValue(),
        };
        _this.hitKey = _this.hitKey.bind(_this);
        _this.yearChanged = _this.yearChanged.bind(_this);
        _this.addNewProject = _this.addNewProject.bind(_this);
        _this.addNewProjectResult = _this.addNewProjectResult.bind(_this);
        _this.onRichTextChange = _this.onRichTextChange.bind(_this);
        _this.addNewImageResult = _this.addNewImageResult.bind(_this);
        return _this;
    }
    ProjectNew.prototype.hitKey = function (event) {
        if (event.key == 'Enter') {
            this.addNewProject(event);
        }
    };
    ProjectNew.prototype.yearChanged = function (date) {
        this.setState(function () {
            return { year: date };
        });
    };
    ProjectNew.prototype.addNewProject = function (event) {
        event.preventDefault();
        var title = this.titleRef.current.value;
        var _a = this.state, year = _a.year, details = _a.details, coverImage = _a.coverImage;
        if (!title || !year) {
            this.setState(function () {
                return { required: true };
            });
            return;
        }
        var newProject = {
            title: title,
            year: year,
            details: details.toString('html'),
        };
        if (coverImage._imageId != null) {
            newProject.coverImage = newProject.coverImage || { _imageId: '' };
            newProject.coverImage._imageId = coverImage._imageId;
        }
        this.props.project.addProject(newProject, this.addNewProjectResult);
        this.setState(function () {
            return { required: false };
        });
    };
    ProjectNew.prototype.render = function () {
        var _a = this, addNewImageResult = _a.addNewImageResult, addNewProject = _a.addNewProject, hitKey = _a.hitKey, yearChanged = _a.yearChanged, onRichTextChange = _a.onRichTextChange;
        var _b = this.state, coverImage = _b.coverImage, imageRequired = _b.imageRequired, _projectId = _b._projectId, required = _b.required, details = _b.details, year = _b.year;
        var _imageId = coverImage._imageId;
        var admin = this.props.user.admin;
        var pathname = this.props.location.pathname;
        if (_projectId) {
            return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Redirect"], { to: '/project/item/' + this.state._projectId }));
        }
        if (!admin) {
            return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Redirect"], { to: { pathname: '/login', state: { redirectPath: pathname } } }));
        }
        return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "project-new-wrapper" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("form", { onSubmit: addNewProject },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h3", null, "New Project"),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("label", null, "Cover Image"),
                _imageId ? react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_image_image_edit__WEBPACK_IMPORTED_MODULE_5__["default"], { _imageId: _imageId, updateRedirect: false }) : react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_image_image_new__WEBPACK_IMPORTED_MODULE_4__["default"], { required: imageRequired, addNewImageResult: addNewImageResult }),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("label", null,
                    "Title",
                    required ? (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", { className: "errortext" }, "*")) : ''),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("br", null),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("input", { type: 'text', onKeyPress: hitKey, placeholder: "Great Project", ref: this.titleRef }),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("br", null),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("label", null,
                    "Year",
                    required ? (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", { className: "errortext" }, "*")) : ''),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("br", null),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_datetime__WEBPACK_IMPORTED_MODULE_3__, { dateFormat: "YYYY", timeFormat: false, onChange: yearChanged, value: year }),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("br", null),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("label", null, "Details"),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("br", null),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_rte__WEBPACK_IMPORTED_MODULE_1___default.a, { value: details, onChange: onRichTextChange }),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("br", null),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("input", { type: 'submit', onClick: addNewProject, value: 'SAVE' }))));
    };
    return ProjectNew;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]));
;
/* harmony default export */ __webpack_exports__["default"] = (Object(_user_user_provider__WEBPACK_IMPORTED_MODULE_6__["userConsumer"])(Object(_project_provider__WEBPACK_IMPORTED_MODULE_7__["projectConsumer"])(ProjectNew)));


/***/ }),

/***/ "./client/src/components/project/project-provider.tsx":
/*!************************************************************!*\
  !*** ./client/src/components/project/project-provider.tsx ***!
  \************************************************************/
/*! exports provided: ProjectContext, ProjectWrapper, default, projectProvider, projectConsumer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectContext", function() { return ProjectContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectWrapper", function() { return ProjectWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "projectProvider", function() { return projectProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "projectConsumer", function() { return projectConsumer; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_rte__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-rte */ "./node_modules/react-rte/dist/react-rte.js");
/* harmony import */ var react_rte__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_rte__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var querystring__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! querystring */ "./node_modules/querystring-es3/index.js");
/* harmony import */ var querystring__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(querystring__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _project_less__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./project.less */ "./client/src/components/project/project.less");
/* harmony import */ var _project_less__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_project_less__WEBPACK_IMPORTED_MODULE_3__);

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
    getProjects: function (params) {
        console.error('Error: Cannot getProjects no ProjectContext.Provider element in parents');
    },
    getProject: function (params) {
        console.error('Error: Cannot getProject no ProjectContext.Provider element in parents');
    },
    addProject: function (params) {
        console.error('Error: Cannot addProject no ProjectContext.Provider element in parents');
    },
    updateProject: function (params, callback) {
        console.error('Error: Cannot updateProject no ProjectContext.Provider element in parents');
    },
    projects: [],
    projectList: {},
    page: 0,
    totalPages: 0,
    limit: 0,
    total: 0,
    pageTotal: 0,
};
var ProjectContext = react__WEBPACK_IMPORTED_MODULE_0__["createContext"](Context);
var ProjectWrapper = /** @class */ (function (_super) {
    __extends(ProjectWrapper, _super);
    function ProjectWrapper(props) {
        var _this = _super.call(this, props) || this;
        _this.state = _this.props.initialState;
        _this.getProjects = _this.getProjects.bind(_this);
        _this.getProject = _this.getProject.bind(_this);
        _this.addProject = _this.addProject.bind(_this);
        return _this;
    }
    ProjectWrapper.prototype.getProjects = function (query) {
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
        var request = new Request('/api/project' + _query, {
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
                    projects: body.projects,
                };
            });
        })
            .catch(function (error) {
            _this.setState(function () {
                return {
                    projects: null,
                    page: null,
                    totalPages: null,
                    limit: null,
                    total: null,
                    pageTotal: null,
                };
            });
        });
    };
    ProjectWrapper.prototype.getProject = function (_projectId) {
        var _this = this;
        var query = Object(querystring__WEBPACK_IMPORTED_MODULE_2__["stringify"])({
            field: [
                '_id',
                'name',
                'alt',
                'filename',
                'discontinued',
            ],
            format: 'json',
        });
        query = query ? '?' + query : '';
        var request = new Request('/api/project/' + _projectId + query, {
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
            var _id = body._id, title = body.title, year = body.year, details = body.details, discontinued = body.discontinued;
            var coverImage = body.coverImage;
            if (coverImage == undefined) {
                coverImage = {};
            }
            _this.setState(function (preState) {
                preState.projectList[_id] = {
                    _projectId: _id,
                    title: title,
                    year: year,
                    details: details,
                    coverImage: coverImage,
                    discontinued: discontinued,
                };
                return preState;
            });
        })
            .catch(function (error) {
            console.log(error);
        });
    };
    ProjectWrapper.prototype.addProject = function (params, callback) {
        var payload = {
            title: params.title,
            year: params.year,
            details: params.details,
        };
        if ('coverImage' in params) {
            payload.coverImage = params.coverImage;
        }
        var request = new Request('/api/project', {
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
                error.message = String(response);
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
    ProjectWrapper.prototype.updateProject = function (params, callback) {
        var payload = {
            _id: params._id
        };
        if ('title' in params) {
            payload.title = params.title;
        }
        if ('year' in params) {
            payload.year = params.year;
        }
        if ('details' in params) {
            payload.details = params.details;
        }
        if ('coverImage' in params) {
            if ('_imageId' in params.coverImage) {
                payload.coverImage = payload.coverImage || { _imageId: null };
                payload.coverImage._imageId = params.coverImage._imageId;
            }
        }
        if ('discontinued' in params) {
            payload.discontinued = params.discontinued;
        }
        var request = new Request('/api/project', {
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
    ProjectWrapper.prototype.render = function () {
        var _a = this, getProjects = _a.getProjects, getProject = _a.getProject, addProject = _a.addProject, updateProject = _a.updateProject;
        var _b = this.state, projects = _b.projects, projectList = _b.projectList, page = _b.page, totalPages = _b.totalPages, limit = _b.limit, total = _b.total, pageTotal = _b.pageTotal;
        var context = {
            getProjects: getProjects,
            getProject: getProject,
            addProject: addProject,
            updateProject: updateProject,
            projects: projects,
            projectList: projectList,
            page: page,
            totalPages: totalPages,
            limit: limit,
            total: total,
            pageTotal: pageTotal,
        };
        return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](ProjectContext.Provider, { value: context }, this.props.children));
    };
    ProjectWrapper.defaultProps = {
        initialState: {
            projects: [],
            projectList: {},
            page: 0,
            totalPages: 0,
            limit: 0,
            total: 0,
            pageTotal: 0,
        },
    };
    return ProjectWrapper;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]));

/* harmony default export */ __webpack_exports__["default"] = (ProjectWrapper);
var projectProvider = function (Component, options) {
    var ProjectProvider = /** @class */ (function (_super) {
        __extends(ProjectProvider, _super);
        function ProjectProvider() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        ProjectProvider.prototype.render = function () {
            var projectWrapperProps = {};
            if (options) {
                if ('props' in options) {
                    projectWrapperProps = options.props;
                }
            }
            return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](ProjectWrapper, __assign({}, projectWrapperProps),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Component, __assign({}, this.props))));
        };
        return ProjectProvider;
    }(react__WEBPACK_IMPORTED_MODULE_0__["Component"]));
    return ProjectProvider;
};
var projectConsumer = function (Component) {
    var ProjectConsumer = /** @class */ (function (_super) {
        __extends(ProjectConsumer, _super);
        function ProjectConsumer() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        ProjectConsumer.prototype.render = function () {
            var _this = this;
            var _projectId = this.props._projectId;
            if ('match' in this.props) {
                if ('_projectId' in this.props.match.params) {
                    _projectId = this.props.match.params._projectId;
                }
            }
            return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](ProjectContext.Consumer, null, function (context) {
                if (_projectId) {
                    context.project = {
                        _projectId: _projectId,
                        title: '',
                        year: new Date(),
                        details: react_rte__WEBPACK_IMPORTED_MODULE_1__["createEmptyValue"]().toString('html'),
                        coverImage: { _imageId: null },
                        discontinued: false,
                    };
                    if (_projectId in context.projectList) {
                        var project = context.projectList[_projectId];
                        context.project = {
                            _projectId: _projectId,
                            title: 'title' in project ? project.title : '',
                            year: 'year' in project ? project.year : new Date(),
                            details: 'details' in project ? project.details : react_rte__WEBPACK_IMPORTED_MODULE_1__["createEmptyValue"]().toString('html'),
                            coverImage: 'coverImage' in project ? '_imageId' in project.coverImage ? project.coverImage : { _imageId: null } : { _imageId: '' },
                            discontinued: 'discontinued' in project ? project.discontinued : false,
                        };
                    }
                }
                return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Component, __assign({}, _this.props, { project: context })));
            }));
        };
        return ProjectConsumer;
    }(react__WEBPACK_IMPORTED_MODULE_0__["Component"]));
    return ProjectConsumer;
};


/***/ }),

/***/ "./client/src/components/project/project-switch.tsx":
/*!**********************************************************!*\
  !*** ./client/src/components/project/project-switch.tsx ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router */ "./node_modules/react-router/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var _project_main__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./project-main */ "./client/src/components/project/project-main.tsx");
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./project */ "./client/src/components/project/project.tsx");
/* harmony import */ var _project_edit__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./project-edit */ "./client/src/components/project/project-edit.tsx");
/* harmony import */ var _project_new__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./project-new */ "./client/src/components/project/project-new.tsx");
/* harmony import */ var _no_match__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../no-match */ "./client/src/components/no-match.tsx");
/* harmony import */ var _project_provider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./project-provider */ "./client/src/components/project/project-provider.tsx");
/* harmony import */ var _page_project_page_provider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./page/project-page-provider */ "./client/src/components/project/page/project-page-provider.tsx");
/* harmony import */ var _project_less__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./project.less */ "./client/src/components/project/project.less");
/* harmony import */ var _project_less__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_project_less__WEBPACK_IMPORTED_MODULE_10__);

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







// import ProjectPage from './page/project-page';
// import ProjectPageNew from './page/project-page-new';
// import ProjectPageEdit from './page/project-page-edit';




var ProjectSwitch = /** @class */ (function (_super) {
    __extends(ProjectSwitch, _super);
    function ProjectSwitch(props) {
        return _super.call(this, props) || this;
    }
    ProjectSwitch.prototype.render = function () {
        return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "project-page-wrapper" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "container" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_2__["NavLink"], { exact: true, to: '/project', activeClassName: "selected" },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h2", null, "Projects")),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router__WEBPACK_IMPORTED_MODULE_1__["Switch"], null,
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router__WEBPACK_IMPORTED_MODULE_1__["Route"], { exact: true, path: "/project", component: _project_main__WEBPACK_IMPORTED_MODULE_3__["default"] }),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router__WEBPACK_IMPORTED_MODULE_1__["Route"], { exact: true, path: "/project/new/:_projectId", component: _project__WEBPACK_IMPORTED_MODULE_4__["default"] }),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router__WEBPACK_IMPORTED_MODULE_1__["Route"], { exact: true, path: "/project/new", component: _project_new__WEBPACK_IMPORTED_MODULE_6__["default"] }),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router__WEBPACK_IMPORTED_MODULE_1__["Route"], { exact: true, path: "/project/item/:_projectId/:_projectPageId", component: _project__WEBPACK_IMPORTED_MODULE_4__["default"] }),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router__WEBPACK_IMPORTED_MODULE_1__["Route"], { exact: true, path: "/project/item/:_projectId", component: _project__WEBPACK_IMPORTED_MODULE_4__["default"] }),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router__WEBPACK_IMPORTED_MODULE_1__["Route"], { exact: true, path: "/project/edit/:_projectId/:_projectPageId", component: _project__WEBPACK_IMPORTED_MODULE_4__["default"] }),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router__WEBPACK_IMPORTED_MODULE_1__["Route"], { exact: true, path: "/project/edit/:_projectId", component: _project_edit__WEBPACK_IMPORTED_MODULE_5__["default"] }),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router__WEBPACK_IMPORTED_MODULE_1__["Route"], { component: _no_match__WEBPACK_IMPORTED_MODULE_7__["default"] })))));
    };
    return ProjectSwitch;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]));
;
/* harmony default export */ __webpack_exports__["default"] = (Object(_project_provider__WEBPACK_IMPORTED_MODULE_8__["projectProvider"])(Object(_page_project_page_provider__WEBPACK_IMPORTED_MODULE_9__["projectPageProvider"])(ProjectSwitch)));


/***/ }),

/***/ "./client/src/components/project/project.less":
/*!****************************************************!*\
  !*** ./client/src/components/project/project.less ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/less-loader/dist/cjs.js!./project.less */ "./node_modules/css-loader/index.js!./node_modules/less-loader/dist/cjs.js!./client/src/components/project/project.less");

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

/***/ "./client/src/components/project/project.tsx":
/*!***************************************************!*\
  !*** ./client/src/components/project/project.tsx ***!
  \***************************************************/
/*! exports provided: Project, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Project", function() { return Project; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_rte__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-rte */ "./node_modules/react-rte/dist/react-rte.js");
/* harmony import */ var react_rte__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_rte__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.es.js");
/* harmony import */ var _project_provider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./project-provider */ "./client/src/components/project/project-provider.tsx");
/* harmony import */ var _user_user_provider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../user/user-provider */ "./client/src/components/user/user-provider.tsx");
/* harmony import */ var _image_image_tag__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../image/image-tag */ "./client/src/components/image/image-tag.tsx");
/* harmony import */ var _page_project_page_list__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./page/project-page-list */ "./client/src/components/project/page/project-page-list.tsx");
/* harmony import */ var _page_project_page_provider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./page/project-page-provider */ "./client/src/components/project/page/project-page-provider.tsx");
/* harmony import */ var _page_project_page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./page/project-page */ "./client/src/components/project/page/project-page.tsx");
/* harmony import */ var _page_project_page_new__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./page/project-page-new */ "./client/src/components/project/page/project-page-new.tsx");
/* harmony import */ var _page_project_page_edit__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./page/project-page-edit */ "./client/src/components/project/page/project-page-edit.tsx");

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













var Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\tdisplay: grid;\n\tgrid-row-gap: 1em;\n\t> .title-year-wrapper {\n\t\tdisplay: flex;\n\t\tjustify-content: space-between;\n\t}\n\t> img {\n\t\tmax-width: 100%;\n\t\tmargin: 0 auto;\n\t}\n\n"], ["\n\tdisplay: grid;\n\tgrid-row-gap: 1em;\n\t> .title-year-wrapper {\n\t\tdisplay: flex;\n\t\tjustify-content: space-between;\n\t}\n\t> img {\n\t\tmax-width: 100%;\n\t\tmargin: 0 auto;\n\t}\n\n"])));
var Project = /** @class */ (function (_super) {
    __extends(Project, _super);
    function Project(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            discontinued: false,
        };
        _this.handleCheckboxChange = _this.handleCheckboxChange.bind(_this);
        return _this;
    }
    Project.prototype.handleCheckboxChange = function (event) {
        var _a = event.target, name = _a.name, checked = _a.checked;
        this.setState(function (prevState) {
            prevState[name] = checked;
            return prevState;
        });
    };
    Project.prototype.componentDidMount = function () {
        this.props.project.getProject(this.props.project.project._projectId);
    };
    Project.prototype.render = function () {
        var _a = this.props.project.project, _projectId = _a._projectId, title = _a.title, year = _a.year, details = _a.details, coverImage = _a.coverImage;
        var _imageId = coverImage._imageId;
        var admin = this.props.user.admin;
        var discontinued = this.state.discontinued;
        var formatedYear = moment__WEBPACK_IMPORTED_MODULE_3__(year).format("YYYY");
        var coverImageElem = _imageId ? (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_image_image_tag__WEBPACK_IMPORTED_MODULE_7__["default"], { _imageId: _imageId })) : '';
        var convertedDetails = react_rte__WEBPACK_IMPORTED_MODULE_1___default.a.createValueFromString(details, 'html');
        return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Wrapper, { className: "project-wrapper" },
            admin ? react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", { className: "text-right" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], { to: '/project/edit/' + _projectId }, "EDIT")) : '',
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "title-year-wrapper" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_2__["NavLink"], { to: '/project/item/' + _projectId },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h2", { className: "title" }, title)),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", { className: "year" }, formatedYear)),
            coverImageElem,
            details != '<p><br></p>' ? react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_rte__WEBPACK_IMPORTED_MODULE_1___default.a, { value: convertedDetails, readOnly: true }) : '',
            admin ? (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", null,
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], { to: "/project/new/" + _projectId }, "NEW PAGE"),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("label", null, "Discontinued"),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("input", { type: 'checkbox', checked: !!this.state.discontinued, name: "discontinued", onChange: this.handleCheckboxChange }))) : '',
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_page_project_page_list__WEBPACK_IMPORTED_MODULE_8__["default"], { discontinued: discontinued }),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Switch"], null,
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], { exact: true, path: "/project/new/:_projectId/", component: _page_project_page_new__WEBPACK_IMPORTED_MODULE_11__["default"] }),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], { exact: true, path: "/project/item/:_projectId/:_projectPageId", component: _page_project_page__WEBPACK_IMPORTED_MODULE_10__["default"] }),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], { exact: true, path: "/project/edit/:_projectId/:_projectPageId", component: _page_project_page_edit__WEBPACK_IMPORTED_MODULE_12__["default"] }))));
    };
    return Project;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]));
;

/* harmony default export */ __webpack_exports__["default"] = (Object(_user_user_provider__WEBPACK_IMPORTED_MODULE_6__["userConsumer"])(Object(_project_provider__WEBPACK_IMPORTED_MODULE_5__["projectConsumer"])(Object(_page_project_page_provider__WEBPACK_IMPORTED_MODULE_9__["projectPageProvider"])(Project))));
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

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/less-loader/dist/cjs.js!./client/src/components/project/project.less":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/less-loader/dist/cjs.js!./client/src/components/project/project.less ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".project-wrapper .project-list {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));\n  grid-template-rows: minmax(100px, 1fr);\n  grid-gap: 2rem;\n}\n.project-wrapper .project-list .project-link {\n  display: grid;\n  grid-template-rows: 1fr auto;\n  width: 100%;\n  height: 100%;\n  color: black;\n  border-color: #ffffff;\n  border-style: solid;\n}\n.project-wrapper .project-list .project-link:hover {\n  border-style: solid;\n  border-color: black;\n  transition: border-color 2s linear;\n}\n.project-wrapper .project-list .image-wrapper {\n  align-self: stretch;\n  width: 100%;\n}\n.project-wrapper .project-list .image-wrapper img {\n  max-width: 100%;\n  position: relative;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n.project-wrapper .project-list .title-year-wrapper {\n  align-self: end;\n}\n.project-wrapper .project-list .title-year-wrapper > .title,\n.project-wrapper .project-list .title-year-wrapper > .year {\n  margin: 0.25em;\n  display: inline-block;\n}\n.project-wrapper .project-list .title-year-wrapper > .year {\n  float: right;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/object-path/index.js":
/*!*******************************************!*\
  !*** ./node_modules/object-path/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (root, factory){
  'use strict';

  /*istanbul ignore next:cant test*/
  if (typeof module === 'object' && typeof module.exports === 'object') {
    module.exports = factory();
  } else if (true) {
    // AMD. Register as an anonymous module.
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
})(this, function(){
  'use strict';

  var toStr = Object.prototype.toString;
  function hasOwnProperty(obj, prop) {
    if(obj == null) {
      return false
    }
    //to handle objects with null prototypes (too edge case?)
    return Object.prototype.hasOwnProperty.call(obj, prop)
  }

  function isEmpty(value){
    if (!value) {
      return true;
    }
    if (isArray(value) && value.length === 0) {
        return true;
    } else if (typeof value !== 'string') {
        for (var i in value) {
            if (hasOwnProperty(value, i)) {
                return false;
            }
        }
        return true;
    }
    return false;
  }

  function toString(type){
    return toStr.call(type);
  }

  function isObject(obj){
    return typeof obj === 'object' && toString(obj) === "[object Object]";
  }

  var isArray = Array.isArray || function(obj){
    /*istanbul ignore next:cant test*/
    return toStr.call(obj) === '[object Array]';
  }

  function isBoolean(obj){
    return typeof obj === 'boolean' || toString(obj) === '[object Boolean]';
  }

  function getKey(key){
    var intKey = parseInt(key);
    if (intKey.toString() === key) {
      return intKey;
    }
    return key;
  }

  function factory(options) {
    options = options || {}

    var objectPath = function(obj) {
      return Object.keys(objectPath).reduce(function(proxy, prop) {
        if(prop === 'create') {
          return proxy;
        }

        /*istanbul ignore else*/
        if (typeof objectPath[prop] === 'function') {
          proxy[prop] = objectPath[prop].bind(objectPath, obj);
        }

        return proxy;
      }, {});
    };

    function hasShallowProperty(obj, prop) {
      return (options.includeInheritedProps || (typeof prop === 'number' && Array.isArray(obj)) || hasOwnProperty(obj, prop))
    }

    function getShallowProperty(obj, prop) {
      if (hasShallowProperty(obj, prop)) {
        return obj[prop];
      }
    }

    function set(obj, path, value, doNotReplace){
      if (typeof path === 'number') {
        path = [path];
      }
      if (!path || path.length === 0) {
        return obj;
      }
      if (typeof path === 'string') {
        return set(obj, path.split('.').map(getKey), value, doNotReplace);
      }
      var currentPath = path[0];
      var currentValue = getShallowProperty(obj, currentPath);
      if (path.length === 1) {
        if (currentValue === void 0 || !doNotReplace) {
          obj[currentPath] = value;
        }
        return currentValue;
      }

      if (currentValue === void 0) {
        //check if we assume an array
        if(typeof path[1] === 'number') {
          obj[currentPath] = [];
        } else {
          obj[currentPath] = {};
        }
      }

      return set(obj[currentPath], path.slice(1), value, doNotReplace);
    }

    objectPath.has = function (obj, path) {
      if (typeof path === 'number') {
        path = [path];
      } else if (typeof path === 'string') {
        path = path.split('.');
      }

      if (!path || path.length === 0) {
        return !!obj;
      }

      for (var i = 0; i < path.length; i++) {
        var j = getKey(path[i]);

        if((typeof j === 'number' && isArray(obj) && j < obj.length) ||
          (options.includeInheritedProps ? (j in Object(obj)) : hasOwnProperty(obj, j))) {
          obj = obj[j];
        } else {
          return false;
        }
      }

      return true;
    };

    objectPath.ensureExists = function (obj, path, value){
      return set(obj, path, value, true);
    };

    objectPath.set = function (obj, path, value, doNotReplace){
      return set(obj, path, value, doNotReplace);
    };

    objectPath.insert = function (obj, path, value, at){
      var arr = objectPath.get(obj, path);
      at = ~~at;
      if (!isArray(arr)) {
        arr = [];
        objectPath.set(obj, path, arr);
      }
      arr.splice(at, 0, value);
    };

    objectPath.empty = function(obj, path) {
      if (isEmpty(path)) {
        return void 0;
      }
      if (obj == null) {
        return void 0;
      }

      var value, i;
      if (!(value = objectPath.get(obj, path))) {
        return void 0;
      }

      if (typeof value === 'string') {
        return objectPath.set(obj, path, '');
      } else if (isBoolean(value)) {
        return objectPath.set(obj, path, false);
      } else if (typeof value === 'number') {
        return objectPath.set(obj, path, 0);
      } else if (isArray(value)) {
        value.length = 0;
      } else if (isObject(value)) {
        for (i in value) {
          if (hasShallowProperty(value, i)) {
            delete value[i];
          }
        }
      } else {
        return objectPath.set(obj, path, null);
      }
    };

    objectPath.push = function (obj, path /*, values */){
      var arr = objectPath.get(obj, path);
      if (!isArray(arr)) {
        arr = [];
        objectPath.set(obj, path, arr);
      }

      arr.push.apply(arr, Array.prototype.slice.call(arguments, 2));
    };

    objectPath.coalesce = function (obj, paths, defaultValue) {
      var value;

      for (var i = 0, len = paths.length; i < len; i++) {
        if ((value = objectPath.get(obj, paths[i])) !== void 0) {
          return value;
        }
      }

      return defaultValue;
    };

    objectPath.get = function (obj, path, defaultValue){
      if (typeof path === 'number') {
        path = [path];
      }
      if (!path || path.length === 0) {
        return obj;
      }
      if (obj == null) {
        return defaultValue;
      }
      if (typeof path === 'string') {
        return objectPath.get(obj, path.split('.'), defaultValue);
      }

      var currentPath = getKey(path[0]);
      var nextObj = getShallowProperty(obj, currentPath)
      if (nextObj === void 0) {
        return defaultValue;
      }

      if (path.length === 1) {
        return nextObj;
      }

      return objectPath.get(obj[currentPath], path.slice(1), defaultValue);
    };

    objectPath.del = function del(obj, path) {
      if (typeof path === 'number') {
        path = [path];
      }

      if (obj == null) {
        return obj;
      }

      if (isEmpty(path)) {
        return obj;
      }
      if(typeof path === 'string') {
        return objectPath.del(obj, path.split('.'));
      }

      var currentPath = getKey(path[0]);
      if (!hasShallowProperty(obj, currentPath)) {
        return obj;
      }

      if(path.length === 1) {
        if (isArray(obj)) {
          obj.splice(currentPath, 1);
        } else {
          delete obj[currentPath];
        }
      } else {
        return objectPath.del(obj[currentPath], path.slice(1));
      }

      return obj;
    }

    return objectPath;
  }

  var mod = factory();
  mod.create = factory;
  mod.withInheritedProps = factory({includeInheritedProps: true})
  return mod;
});


/***/ })

}]);
//# sourceMappingURL=10.index_bundle.js.map