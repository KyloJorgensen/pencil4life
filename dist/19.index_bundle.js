(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[19],{

/***/ "./client/src/components/image/image-list-item.tsx":
/*!*********************************************************!*\
  !*** ./client/src/components/image/image-list-item.tsx ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var _image_provider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./image-provider */ "./client/src/components/image/image-provider.tsx");

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



var ImageListItem = /** @class */ (function (_super) {
    __extends(ImageListItem, _super);
    function ImageListItem(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {};
        return _this;
    }
    ImageListItem.prototype.componentDidMount = function () {
        this.props.image.getImage(this.props._imageId);
    };
    ImageListItem.prototype.render = function () {
        var _a = this.props.image.image, name = _a.name, alt = _a.alt, filename = _a.filename, _imageId = _a._imageId;
        return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "image-list-item-wrapper" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], { className: "image-link", to: '/image/item/' + _imageId },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("img", { src: filename, alt: alt }),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", null, name),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", null, alt))));
    };
    return ImageListItem;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]));
;
/* harmony default export */ __webpack_exports__["default"] = (Object(_image_provider__WEBPACK_IMPORTED_MODULE_2__["imageConsumer"])(ImageListItem));


/***/ }),

/***/ "./client/src/components/image/image-list.tsx":
/*!****************************************************!*\
  !*** ./client/src/components/image/image-list.tsx ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var _image_list_item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./image-list-item */ "./client/src/components/image/image-list-item.tsx");
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





var ImageList = /** @class */ (function (_super) {
    __extends(ImageList, _super);
    function ImageList(props) {
        return _super.call(this, props) || this;
    }
    ImageList.prototype.componentDidMount = function () {
        var query = {};
        if (this.props.image.limit) {
            query = {};
            query.limit = this.props.image.limit;
        }
        this.props.image.getImages(query);
    };
    ImageList.prototype.componentDidUpdate = function (prevProps, prevState, snapshot) {
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
            this.props.image.getImages(query);
        }
    };
    ImageList.prototype.render = function () {
        var displayDetails = this.props.displayDetails;
        var images = this.props.image.images;
        var admin = this.props.user.admin;
        var ImageList = [];
        if (images) {
            images.forEach(function (imageKey) {
                ImageList.push(react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_image_list_item__WEBPACK_IMPORTED_MODULE_2__["default"], { key: imageKey, _imageId: imageKey, displayDetails: displayDetails }));
            });
        }
        return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "image-list-wrapper" },
            admin ? (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", null,
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], { to: "/image/new" }, "NEW IMAGE"),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("br", null))) : '',
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("ul", { className: 'image-list' }, ImageList)));
    };
    ImageList.defaultProps = {
        displayDetails: true,
    };
    return ImageList;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]));
;
/* harmony default export */ __webpack_exports__["default"] = (Object(_user_user_provider__WEBPACK_IMPORTED_MODULE_4__["userConsumer"])(Object(_image_provider__WEBPACK_IMPORTED_MODULE_3__["imageConsumer"])(ImageList)));


/***/ }),

/***/ "./client/src/components/image/image-new-page.tsx":
/*!********************************************************!*\
  !*** ./client/src/components/image/image-new-page.tsx ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var _utilities_dropzone__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utilities/dropzone */ "./client/src/components/utilities/dropzone.tsx");
/* harmony import */ var _image_new__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./image-new */ "./client/src/components/image/image-new.tsx");
/* harmony import */ var _user_user_provider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../user/user-provider */ "./client/src/components/user/user-provider.tsx");
/* harmony import */ var _image_provider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./image-provider */ "./client/src/components/image/image-provider.tsx");
/* harmony import */ var _image_list_item__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./image-list-item */ "./client/src/components/image/image-list-item.tsx");

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







var ImageNewPage = /** @class */ (function (_super) {
    __extends(ImageNewPage, _super);
    function ImageNewPage(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            required: false,
            images: [],
        };
        _this.hitKey = _this.hitKey.bind(_this);
        _this.addNewImage = _this.addNewImage.bind(_this);
        _this.addNewImages = _this.addNewImages.bind(_this);
        _this.addNewImageResult = _this.addNewImageResult.bind(_this);
        _this.imageDetailChanged = _this.imageDetailChanged.bind(_this);
        _this.imagesChanged = _this.imagesChanged.bind(_this);
        _this.imageChanged = _this.imageChanged.bind(_this);
        _this.deleteImage = _this.deleteImage.bind(_this);
        _this.deleteAllImages = _this.deleteAllImages.bind(_this);
        return _this;
    }
    ImageNewPage.prototype.deleteImage = function (index) {
        this.setState(function (prevState) {
            prevState.images.splice(index, 1);
            return prevState;
        });
    };
    ImageNewPage.prototype.deleteAllImages = function () {
        this.setState(function () {
            return { images: [] };
        });
    };
    ImageNewPage.prototype.imageDetailChanged = function (index, event) {
        var _a = event.target, name = _a.name, value = _a.value;
        this.setState(function (prevState) {
            prevState.images[index][name] = value;
            return prevState;
        });
    };
    ImageNewPage.prototype.hitKey = function (index, event) {
        if (event.key == 'Enter') {
            this.addNewImage(index, event);
        }
    };
    ImageNewPage.prototype.addNewImage = function (index, event) {
        event.preventDefault();
        var _a = this.state.images[index], image = _a.image, name = _a.name, alt = _a.alt;
        if (!name || !image.name) {
            var _state_1 = this.state;
            _state_1.images[index].required = true;
            _state_1.images[index]._imageId = '';
            this.setState(_state_1);
            return;
        }
        var newImage = {
            image: image,
            name: name,
            alt: alt,
        };
        var addNewImageResult = this.addNewImageResult;
        var _addNewImageResult = function (error, _imageId) {
            addNewImageResult(index, error, _imageId);
        };
        this.props.image.addImage(newImage, _addNewImageResult);
        var _state = this.state;
        _state.images[index].required = false;
        this.setState(_state);
    };
    ImageNewPage.prototype.addNewImages = function (event) {
        event.preventDefault();
    };
    ImageNewPage.prototype.addNewImageResult = function (index, error, _imageId) {
        if (error) {
            this.setState(function (prevState) {
                prevState.images[index].required = true;
                return prevState;
            });
        }
        else {
            // this.setState(() => {
            // 	return {_imageId: _imageId};
            // });
            this.setState(function (prevState) {
                prevState.images[index]._imageId = _imageId;
                return prevState;
            });
        }
    };
    ImageNewPage.prototype.imageChanged = function (index, images) {
        var _state = this.state;
        _state.images[index].image = images[0];
        this.setState(_state);
    };
    ImageNewPage.prototype.imagesChanged = function (images) {
        this.setState(function (prevState) {
            images.forEach(function (image) {
                prevState.images.push({
                    image: image,
                    name: '',
                    alt: '',
                    required: false,
                });
            });
            return prevState;
        });
    };
    ImageNewPage.prototype.render = function () {
        // const { _imageId } = this.state;
        var images = this.state.images;
        var admin = this.props.user.admin;
        var _a = this, deleteAllImages = _a.deleteAllImages, deleteImage = _a.deleteImage, imageDetailChanged = _a.imageDetailChanged, hitKey = _a.hitKey, addNewImage = _a.addNewImage, addNewImages = _a.addNewImages, imageChanged = _a.imageChanged, imagesChanged = _a.imagesChanged;
        // if (_imageId) {
        // 	return (<Redirect to={'/image/item/'+this.state._imageId} />);
        // }
        if (!admin) {
            return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Redirect"], { to: { pathname: '/login', state: { redirectPath: this.props.location.pathname } } }));
        }
        var _images = [];
        images.forEach(function (_image, index, array) {
            var image = _image.image, name = _image.name, alt = _image.alt, required = _image.required, _imageId = _image._imageId;
            var _deleteImage = function () {
                deleteImage(index);
            };
            var _imageDetailChanged = function (e) {
                imageDetailChanged(index, e);
            };
            var _hitKey = function (e) {
                hitKey(index, e);
            };
            var _addNewImage = function (e) {
                addNewImage(index, e);
            };
            var _imageChanged = function (e) {
                imageChanged(index, e);
            };
            if (_imageId) {
                return _images.push(react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("li", { className: "image-new-list-item", key: index },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", null, "Saved"),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("button", { onClick: _deleteImage }, "X"),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_image_list_item__WEBPACK_IMPORTED_MODULE_6__["default"], { _imageId: _imageId })));
            }
            _images.push(react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("li", { className: "image-new-list-item", key: index },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_image_new__WEBPACK_IMPORTED_MODULE_3__["default"], { required: required, currentImage: image, name: name, alt: alt, deleteImage: _deleteImage, imageDetailChanged: _imageDetailChanged, hitKey: _hitKey, addNewImage: _addNewImage, imageChanged: _imageChanged })));
        });
        return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "image-new-page-wrapper" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utilities_dropzone__WEBPACK_IMPORTED_MODULE_2__["default"], { multiple: true, handleChange: imagesChanged, fileTypes: ['image/jpeg', 'image/pjpeg', 'image/png'] }),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("ul", { className: "image-new-list" }, _images),
            images.length > 1 ? (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("input", { type: "button", onClick: deleteAllImages, value: 'Delete All Images' })) : '',
            images.length > 1 ? (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("input", { type: 'submit', onClick: addNewImages, value: 'SAVEALL' })) : ''));
    };
    return ImageNewPage;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]));
;
/* harmony default export */ __webpack_exports__["default"] = (Object(_user_user_provider__WEBPACK_IMPORTED_MODULE_4__["userConsumer"])(Object(_image_provider__WEBPACK_IMPORTED_MODULE_5__["imageConsumer"])(ImageNewPage)));


/***/ }),

/***/ "./client/src/components/image/image-page.tsx":
/*!****************************************************!*\
  !*** ./client/src/components/image/image-page.tsx ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _image_list__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./image-list */ "./client/src/components/image/image-list.tsx");
/* harmony import */ var _user_user_provider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../user/user-provider */ "./client/src/components/user/user-provider.tsx");

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



var ImagePage = /** @class */ (function (_super) {
    __extends(ImagePage, _super);
    function ImagePage(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            discontinued: false,
        };
        _this.handleCheckboxChange = _this.handleCheckboxChange.bind(_this);
        return _this;
    }
    ImagePage.prototype.handleCheckboxChange = function (event) {
        var _a = event.target, name = _a.name, checked = _a.checked;
        this.setState(function (prevState) {
            prevState[name] = checked;
            return prevState;
        });
    };
    ImagePage.prototype.render = function () {
        var adminOptions = this.props.user.admin ? (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", null,
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h5", null, "Admin Options"),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("label", null, "Discontinued"),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("input", { type: 'checkbox', checked: !!this.state.discontinued, name: "discontinued", onChange: this.handleCheckboxChange }))) : '';
        return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "image-wrapper" },
            adminOptions,
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_image_list__WEBPACK_IMPORTED_MODULE_1__["default"], { discontinued: this.state.discontinued })));
    };
    return ImagePage;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]));
;
/* harmony default export */ __webpack_exports__["default"] = (Object(_user_user_provider__WEBPACK_IMPORTED_MODULE_2__["userConsumer"])(ImagePage));


/***/ }),

/***/ "./client/src/components/image/image-switch.tsx":
/*!******************************************************!*\
  !*** ./client/src/components/image/image-switch.tsx ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router */ "./node_modules/react-router/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var _image_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./image-page */ "./client/src/components/image/image-page.tsx");
/* harmony import */ var _image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./image */ "./client/src/components/image/image.tsx");
/* harmony import */ var _image_edit__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./image-edit */ "./client/src/components/image/image-edit.tsx");
/* harmony import */ var _image_new_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./image-new-page */ "./client/src/components/image/image-new-page.tsx");
/* harmony import */ var _no_match__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../no-match */ "./client/src/components/no-match.tsx");
/* harmony import */ var _user_user_provider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../user/user-provider */ "./client/src/components/user/user-provider.tsx");

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









var ImageSwitch = /** @class */ (function (_super) {
    __extends(ImageSwitch, _super);
    function ImageSwitch(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {};
        return _this;
    }
    ImageSwitch.prototype.render = function () {
        if (!this.props.user.admin) {
            return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Redirect"], { to: { pathname: '/login', state: { redirectPath: this.props.location.pathname } } }));
        }
        return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "image-page-wrapper" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "container" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_2__["NavLink"], { exact: true, to: '/image', activeClassName: "selected" },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h2", null, "Images")),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router__WEBPACK_IMPORTED_MODULE_1__["Switch"], null,
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router__WEBPACK_IMPORTED_MODULE_1__["Route"], { exact: true, path: "/image", component: _image_page__WEBPACK_IMPORTED_MODULE_3__["default"] }),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router__WEBPACK_IMPORTED_MODULE_1__["Route"], { path: "/image/new", component: _image_new_page__WEBPACK_IMPORTED_MODULE_6__["default"] }),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router__WEBPACK_IMPORTED_MODULE_1__["Route"], { path: "/image/item/:_imageId", component: _image__WEBPACK_IMPORTED_MODULE_4__["default"] }),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router__WEBPACK_IMPORTED_MODULE_1__["Route"], { path: "/image/edit/:_imageId", component: _image_edit__WEBPACK_IMPORTED_MODULE_5__["default"] }),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router__WEBPACK_IMPORTED_MODULE_1__["Route"], { component: _no_match__WEBPACK_IMPORTED_MODULE_7__["default"] })))));
    };
    return ImageSwitch;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]));
;
/* harmony default export */ __webpack_exports__["default"] = (Object(_user_user_provider__WEBPACK_IMPORTED_MODULE_8__["userConsumer"])(ImageSwitch));


/***/ }),

/***/ "./client/src/components/image/image.tsx":
/*!***********************************************!*\
  !*** ./client/src/components/image/image.tsx ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var _image_provider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./image-provider */ "./client/src/components/image/image-provider.tsx");
/* harmony import */ var _user_user_provider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../user/user-provider */ "./client/src/components/user/user-provider.tsx");

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




var Image = /** @class */ (function (_super) {
    __extends(Image, _super);
    function Image(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {};
        return _this;
    }
    Image.prototype.componentDidMount = function () {
        this.props.image.getImage(this.props.image.image._imageId);
    };
    Image.prototype.render = function () {
        var admin = this.props.user.admin;
        var _a = this.props.image.image, _imageId = _a._imageId, name = _a.name, alt = _a.alt, filename = _a.filename;
        return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "image-wrapper" },
            admin ? react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", { className: "text-right" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], { to: '/image/edit/' + _imageId }, "EDIT")) : '',
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("img", { src: filename, alt: alt }),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", null, name),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", null, alt)));
    };
    return Image;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]));
;
/* harmony default export */ __webpack_exports__["default"] = (Object(_user_user_provider__WEBPACK_IMPORTED_MODULE_3__["userConsumer"])(Object(_image_provider__WEBPACK_IMPORTED_MODULE_2__["imageConsumer"])(Image)));


/***/ })

}]);
//# sourceMappingURL=19.index_bundle.js.map