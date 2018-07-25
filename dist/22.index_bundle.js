(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[22],{

/***/ "./client/src/components/image/image-edit.tsx":
/*!****************************************************!*\
  !*** ./client/src/components/image/image-edit.tsx ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var _utilities_dropzone__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utilities/dropzone */ "./client/src/components/utilities/dropzone.tsx");
/* harmony import */ var _image_provider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./image-provider */ "./client/src/components/image/image-provider.tsx");
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





var ImageEdit = /** @class */ (function (_super) {
    __extends(ImageEdit, _super);
    function ImageEdit(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            redirect: false,
            _imageId: false,
            required: false,
            discontinued: false,
            name: '',
            alt: '',
            image: new File([], ''),
        };
        _this.hitKey = _this.hitKey.bind(_this);
        _this.updateImage = _this.updateImage.bind(_this);
        _this.updateImageResult = _this.updateImageResult.bind(_this);
        _this.redirect = _this.redirect.bind(_this);
        _this.imageDetailChanged = _this.imageDetailChanged.bind(_this);
        _this.imageChanged = _this.imageChanged.bind(_this);
        _this.handleCheckboxChange = _this.handleCheckboxChange.bind(_this);
        return _this;
    }
    ImageEdit.prototype.componentWillMount = function () {
        var _a = this.props.image.image, name = _a.name, alt = _a.alt, discontinued = _a.discontinued;
        this.setState(function () {
            return {
                name: name,
                alt: alt,
                discontinued: discontinued,
            };
        });
    };
    ImageEdit.prototype.componentDidUpdate = function (prevProps, prevState) {
        var _this = this;
        var propsToCheck = ['name', 'alt', 'discontinued'];
        var _state = null;
        propsToCheck.forEach(function (propToCheck) {
            if (prevProps.image.image[propToCheck] !== _this.props.image.image[propToCheck]) {
                _state = _state == null ? {} : _state;
                _state[propToCheck] = _this.props.image.image[propToCheck];
            }
        });
        if (_state) {
            this.setState(_state);
        }
    };
    ImageEdit.prototype.componentDidMount = function () {
        this.props.image.getImage(this.props.image.image._imageId);
    };
    ImageEdit.prototype.hitKey = function (event) {
        if (event.key == 'Enter') {
            this.updateImage(event);
        }
    };
    ImageEdit.prototype.imageDetailChanged = function (event) {
        var _a = event.target, name = _a.name, value = _a.value;
        this.setState(function (prevState) {
            prevState[name] = value;
            return prevState;
        });
    };
    ImageEdit.prototype.updateImage = function (event) {
        event.preventDefault();
        var _a = this.state, image = _a.image, name = _a.name, alt = _a.alt;
        if (!name) {
            this.setState(function (prevState) {
                return { required: true };
            });
            return;
        }
        this.props.image.updateImage(this.state, this.props.image.image, this.updateImageResult);
        this.setState(function (prevState) {
            return { required: false };
        });
    };
    ImageEdit.prototype.updateImageResult = function (error) {
        if (error) {
            this.setState(function (prevState) {
                return { required: true };
            });
        }
        else {
            if (this.props.updateRedirect) {
                this.redirect();
            }
        }
    };
    ImageEdit.prototype.imageChanged = function (images) {
        var _state = this.state;
        this.setState(function () {
            return { image: images[0] };
        });
    };
    ImageEdit.prototype.handleCheckboxChange = function (event) {
        var _a = event.target, name = _a.name, checked = _a.checked;
        this.setState(function (prevState) {
            prevState[name] = checked;
            return prevState;
        });
    };
    ImageEdit.prototype.redirect = function () {
        this.setState(function () {
            return { redirect: true };
        });
    };
    ImageEdit.prototype.render = function () {
        var _a = this, imageDetailChanged = _a.imageDetailChanged, hitKey = _a.hitKey, updateImage = _a.updateImage, imageChanged = _a.imageChanged, handleCheckboxChange = _a.handleCheckboxChange;
        var _b = this.state, redirect = _b.redirect, image = _b.image, name = _b.name, alt = _b.alt, required = _b.required, discontinued = _b.discontinued;
        var _c = this.props.image.image, filename = _c.filename, _imageId = _c._imageId;
        var admin = this.props.user.admin;
        if (redirect) {
            return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Redirect"], { to: '/image/item/' + _imageId }));
        }
        if (!admin) {
            return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Redirect"], { to: { pathname: '/login', state: { redirectPath: this.props.location.pathname } } }));
        }
        var dropzoneDisplay = image.name ? (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: 'dropzone-display' },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("img", { src: window.URL.createObjectURL(image), alt: alt }),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", null, "Drop Image or Click to Browse"))) : filename ?
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: 'dropzone-display' },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("img", { src: filename, alt: alt }),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", null, "Drop Image or Click to Browse")) : '';
        return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "image-edit-item-wrapper" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: 'image-wrapper' },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "image" },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "image-pic" },
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utilities_dropzone__WEBPACK_IMPORTED_MODULE_2__["default"], { multiple: false, handleChange: imageChanged, fileTypes: ['image/jpeg', 'image/pjpeg', 'image/png'] }, dropzoneDisplay)),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "image-info" },
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "image-info-details" },
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h3", null, "Edit Image"),
                            required ? (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", { className: "errortext" }, "Image required")) : '',
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", null, image.name),
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", null,
                                image.type,
                                " ")))),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "image-input" },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("label", null, "Name"),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("input", { type: "text", onKeyPress: hitKey, name: "name", value: name, onChange: imageDetailChanged, placeholder: "Great Image" }),
                    required ? (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", { className: "errortext" }, "*")) : '',
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("label", null, "Alt"),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("input", { type: "text", onKeyPress: hitKey, name: "alt", value: alt, onChange: imageDetailChanged, placeholder: "blue tree pencil4life" }),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("label", null, "Discontinued"),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("input", { type: 'checkbox', checked: !!discontinued, name: "discontinued", onChange: handleCheckboxChange }))),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("input", { type: 'submit', onClick: updateImage, value: 'SAVE' })));
    };
    ImageEdit.defaultProps = {
        updateRedirect: true,
    };
    return ImageEdit;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]));
;
/* harmony default export */ __webpack_exports__["default"] = (Object(_user_user_provider__WEBPACK_IMPORTED_MODULE_4__["userConsumer"])(Object(_image_provider__WEBPACK_IMPORTED_MODULE_3__["imageConsumer"])(ImageEdit)));


/***/ }),

/***/ "./client/src/components/image/image-new.tsx":
/*!***************************************************!*\
  !*** ./client/src/components/image/image-new.tsx ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var _utilities_dropzone__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utilities/dropzone */ "./client/src/components/utilities/dropzone.tsx");
/* harmony import */ var _user_user_provider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../user/user-provider */ "./client/src/components/user/user-provider.tsx");
/* harmony import */ var _image_provider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./image-provider */ "./client/src/components/image/image-provider.tsx");

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





var ImageNew = /** @class */ (function (_super) {
    __extends(ImageNew, _super);
    function ImageNew(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            redirect: false,
            _imageId: null,
            required: false,
            name: '',
            alt: '',
            currentImage: new File([], 'file'),
        };
        _this.hitKey = _this.hitKey.bind(_this);
        _this.addNewImage = _this.addNewImage.bind(_this);
        _this.addNewImageResult = _this.addNewImageResult.bind(_this);
        _this.redirect = _this.redirect.bind(_this);
        _this.imageDetailChanged = _this.imageDetailChanged.bind(_this);
        _this.imageChanged = _this.imageChanged.bind(_this);
        _this.deleteImage = _this.deleteImage.bind(_this);
        return _this;
    }
    ImageNew.prototype.hitKey = function (event) {
        if (event.key == 'Enter') {
            this.addNewImage(event);
        }
    };
    ImageNew.prototype.imageDetailChanged = function (event) {
        var _a = event.target, name = _a.name, value = _a.value;
        this.setState(function (preState) {
            preState[name] = value;
            return preState;
        });
    };
    ImageNew.prototype.addNewImage = function (event) {
        event.preventDefault();
        var _a = this.state, currentImage = _a.currentImage, name = _a.name, alt = _a.alt;
        if (!name || !currentImage.name) {
            this.setState(function () {
                return { required: true };
            });
            return;
        }
        var params = {
            image: currentImage,
            name: name,
            alt: alt,
        };
        var addNewImageResult = 'addNewImageResult' in this.props ? this.props.addNewImageResult : this.addNewImageResult;
        this.props.image.addImage(params, addNewImageResult);
        this.setState(function () {
            return { required: false };
        });
    };
    ImageNew.prototype.addNewImageResult = function (error, _imageId) {
        if (error) {
            this.setState(function () {
                return { required: true };
            });
        }
        else {
            this.setState(function () {
                return { _imageId: _imageId };
            });
        }
    };
    ImageNew.prototype.imageChanged = function (images) {
        this.setState(function () {
            if (images.length > 0) {
                return { currentImage: images[0] };
            }
            return;
        });
    };
    ImageNew.prototype.deleteImage = function (event) {
        this.setState(function () {
            return {
                required: false,
                name: '',
                alt: '',
                currentImage: new File([], 'file'),
            };
        });
    };
    ImageNew.prototype.redirect = function (event) {
        this.setState(function () {
            return { redirect: true };
        });
    };
    ImageNew.prototype.render = function () {
        var _a = this.state, redirect = _a.redirect, _imageId = _a._imageId;
        var admin = this.props.user.admin;
        if (redirect) {
            return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Redirect"], { to: '/image' }));
        }
        if (_imageId) {
            return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Redirect"], { to: '/image/item/' + this.state._imageId }));
        }
        if (!admin) {
            return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Redirect"], { to: { pathname: '/login', state: { redirectPath: this.props.location.pathname } } }));
        }
        // variables
        var currentImage = 'currentImage' in this.props ? this.props.currentImage : this.state.currentImage;
        var name = 'name' in this.props ? this.props.name : this.state.name;
        var alt = 'alt' in this.props ? this.props.alt : this.state.alt;
        var required = 'required' in this.props ? this.props.required : this.state.required;
        // functions
        var deleteImage = 'deleteImage' in this.props ? this.props.deleteImage : this.deleteImage;
        var imageDetailChanged = 'imageDetailChanged' in this.props ? this.props.imageDetailChanged : this.imageDetailChanged;
        var hitKey = 'hitKey' in this.props ? this.props.hitKey : this.hitKey;
        var addNewImage = 'addNewImage' in this.props ? this.props.addNewImage : this.addNewImage;
        var imageChanged = 'imageChanged' in this.props ? this.props.imageChanged : this.imageChanged;
        var dropzoneDisplay = 'name' in currentImage ? (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: 'dropzone-display' },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("img", { src: window.URL.createObjectURL(currentImage), alt: alt }),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", null, "Drop Image or Click to Browse"))) : '';
        return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "image-new-item-wrapper" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: 'image-wrapper' },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "image" },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "image-pic" },
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utilities_dropzone__WEBPACK_IMPORTED_MODULE_2__["default"], { multiple: false, handleChange: imageChanged, fileTypes: ['image/jpeg', 'image/pjpeg', 'image/png'] }, dropzoneDisplay)),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "image-info" },
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("button", { onClick: deleteImage }, "X"),
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "image-info-details" },
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h3", null, "New Image"),
                            required ? (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", { className: "errortext" }, "Image required")) : '',
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", null, currentImage.name),
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", null,
                                currentImage.type,
                                " ")))),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "image-input" },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("label", null, "Name"),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("input", { type: "text", onKeyPress: hitKey, name: "name", value: name, onChange: imageDetailChanged, placeholder: "Great Image" }),
                    required ? (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", { className: "errortext" }, "*")) : '',
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("label", null, "Alt"),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("input", { type: "text", onKeyPress: hitKey, name: "alt", value: alt, onChange: imageDetailChanged, placeholder: "blue tree pencil4life" }))),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("input", { type: 'submit', onClick: addNewImage, value: 'SAVE' })));
    };
    return ImageNew;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]));
;
/* harmony default export */ __webpack_exports__["default"] = (Object(_user_user_provider__WEBPACK_IMPORTED_MODULE_3__["userConsumer"])(Object(_image_provider__WEBPACK_IMPORTED_MODULE_4__["imageConsumer"])(ImageNew)));


/***/ }),

/***/ "./client/src/components/utilities/dropzone.less":
/*!*******************************************************!*\
  !*** ./client/src/components/utilities/dropzone.less ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/less-loader/dist/cjs.js!./dropzone.less */ "./node_modules/css-loader/index.js!./node_modules/less-loader/dist/cjs.js!./client/src/components/utilities/dropzone.less");

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

/***/ "./client/src/components/utilities/dropzone.tsx":
/*!******************************************************!*\
  !*** ./client/src/components/utilities/dropzone.tsx ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _dropzone_less__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dropzone.less */ "./client/src/components/utilities/dropzone.less");
/* harmony import */ var _dropzone_less__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_dropzone_less__WEBPACK_IMPORTED_MODULE_1__);

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


var Dropzone = /** @class */ (function (_super) {
    __extends(Dropzone, _super);
    function Dropzone(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            over: false,
            vaildFiles: [],
            badFiles: [],
        };
        _this.onFilesSelected = _this.onFilesSelected.bind(_this);
        _this.handleDragOver = _this.handleDragOver.bind(_this);
        _this.handleDragEnter = _this.handleDragEnter.bind(_this);
        _this.handleDragLeave = _this.handleDragLeave.bind(_this);
        _this.handleDrop = _this.handleDrop.bind(_this);
        _this.handleFiles = _this.handleFiles.bind(_this);
        _this.clearBadFile = _this.clearBadFile.bind(_this);
        _this.validateFileType = _this.validateFileType.bind(_this);
        _this.clearAllBadFiles = _this.clearAllBadFiles.bind(_this);
        return _this;
    }
    Dropzone.prototype.onFilesSelected = function (event) {
        event.preventDefault();
        this.handleFiles(event.target.files);
    };
    Dropzone.prototype.handleDragOver = function (event) {
        event.preventDefault();
    };
    Dropzone.prototype.handleDragEnter = function (event) {
        this.setState({ over: true });
    };
    Dropzone.prototype.handleDragLeave = function (event) {
        this.setState({ over: false });
    };
    Dropzone.prototype.handleDrop = function (event) {
        event.preventDefault();
        this.handleFiles(event.dataTransfer.files);
    };
    Dropzone.prototype.handleFiles = function (_files) {
        var _this = this;
        var validateFileType = this.validateFileType;
        var multiple = this.props.multiple;
        var files = Object.values(_files);
        this.setState(function () {
            return {
                badFiles: [],
                vaildFiles: []
            };
        });
        var vaildFiles = [];
        files.forEach(function (file) {
            if (validateFileType(file)) {
                if (!!multiple) {
                    vaildFiles.push(file);
                }
                else {
                    if (vaildFiles.length == 0) {
                        vaildFiles.push(file);
                    }
                    else {
                        var _state = _this.state;
                        _state.badFiles.push(file.name + " -- Only One File");
                        _this.setState(_state);
                    }
                }
            }
        });
        if ('handleChange' in this.props) {
            this.props.handleChange(vaildFiles);
        }
        this.setState(function () {
            return {
                vaildFiles: vaildFiles,
            };
        });
    };
    Dropzone.prototype.validateFileType = function (file) {
        var fileTypes = [];
        if ('fileTypes' in this.props) {
            if (Array.isArray(fileTypes)) {
                fileTypes = this.props.fileTypes;
            }
        }
        if (fileTypes.includes(file.type)) {
            return true;
        }
        else {
            var _state = this.state;
            _state.badFiles.push(file.name + ' -- Invaild Type');
            this.setState(_state);
        }
        return false;
    };
    Dropzone.prototype.clearAllBadFiles = function () {
        this.setState(function () {
            return { badFiles: [] };
        });
    };
    Dropzone.prototype.clearBadFile = function (index) {
        this.setState(function (preState) {
            preState.badFiles.splice(index, 1);
            return preState;
        });
    };
    Dropzone.prototype.render = function () {
        var badFiles = [];
        var clearBadFile = this.clearBadFile;
        this.state.badFiles.forEach(function (badFile, index, array) {
            var _clearBadFile = function () {
                clearBadFile(index);
            };
            badFiles.push(react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("li", { className: "bad-file-wrapper", key: index },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", null,
                    "Bad File: ",
                    badFile),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("button", { onClick: _clearBadFile }, "X")));
        });
        return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "dropzone-wrapper" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "dropzone" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "bad-file-display" },
                    badFiles.length > 1 ? react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("button", { onClick: this.clearAllBadFiles }, "Clear all bad files") : '',
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("ul", { className: "bad-files-wrapper" }, badFiles)),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "custom-dropzone" },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("input", { type: "file", multiple: true, className: "custom-dropzone-input dropzone", onChange: this.onFilesSelected, onDrop: this.handleDrop, onDragOver: this.handleDragOver, onDragLeave: this.handleDragLeave, onDragEnter: this.handleDragEnter }),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("label", { className: "custom-dropzone-label" }, this.props.children ? this.props.children : react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", null, "Drop Files or Click to Browse"))))));
    };
    Dropzone.defaultProps = {
        multiple: false,
    };
    return Dropzone;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]));
;
/* harmony default export */ __webpack_exports__["default"] = (Dropzone);


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/less-loader/dist/cjs.js!./client/src/components/utilities/dropzone.less":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/less-loader/dist/cjs.js!./client/src/components/utilities/dropzone.less ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".dropzone-wrapper .dropzone .bad-files-wrapper .bad-file-wrapper {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  background: #ffb2b2;\n  margin: 0.25em;\n}\n.dropzone-wrapper .dropzone .bad-files-wrapper .bad-file-wrapper p {\n  align-self: center;\n  margin: 0 1em;\n}\n.dropzone-wrapper .dropzone .bad-files-wrapper .bad-file-wrapper button {\n  background-color: #e98383;\n  width: 2em;\n  height: 2em;\n  line-height: 0;\n  padding: 0;\n  margin: 0.5em 1.5em;\n}\n.dropzone-wrapper .dropzone .custom-dropzone {\n  position: relative;\n  display: inline-block;\n  width: 202px;\n  height: 202px;\n  margin: 0;\n  border: 1px solid #ced4da;\n}\n.dropzone-wrapper .dropzone .custom-dropzone .custom-dropzone-input {\n  position: relative;\n  z-index: 2;\n  width: 200px;\n  height: 200px;\n  margin: 0;\n  opacity: 0;\n}\n.dropzone-wrapper .dropzone .custom-dropzone .custom-dropzone-label {\n  position: absolute;\n  top: 0;\n  right: 0;\n  left: 0;\n  z-index: 1;\n  height: 200px;\n  width: 200px;\n  padding: 0;\n  margin: 0;\n  align-content: center;\n  text-align: center;\n  align-items: center;\n}\n.dropzone-wrapper .dropzone .custom-dropzone .custom-dropzone-label > * {\n  max-width: 200px;\n  max-height: 200px;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  padding: 0;\n  margin: 0;\n}\n", ""]);

// exports


/***/ })

}]);
//# sourceMappingURL=22.index_bundle.js.map