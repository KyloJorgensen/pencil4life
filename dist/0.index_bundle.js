(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./client/src/components/app.tsx":
/*!***************************************!*\
  !*** ./client/src/components/app.tsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var react_loadable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-loadable */ "./node_modules/react-loadable/lib/index.js");
/* harmony import */ var react_loadable__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_loadable__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _event_listener_event_listener__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./event-listener/event-listener */ "./client/src/components/event-listener/event-listener.tsx");
/* harmony import */ var _user_user_provider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user/user-provider */ "./client/src/components/user/user-provider.tsx");
/* harmony import */ var _image_image_provider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./image/image-provider */ "./client/src/components/image/image-provider.tsx");
/* harmony import */ var _css_index_less__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../css/index.less */ "./client/src/css/index.less");
/* harmony import */ var _css_index_less__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_css_index_less__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./routes */ "./client/src/components/routes.tsx");
/* harmony import */ var _news_news_provider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./news/news-provider */ "./client/src/components/news/news-provider.tsx");

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






// import Header from './header/header';
// import Footer from './footer/footer';



var Loading = function () { return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", null, "Loading..."); };
var Header = react_loadable__WEBPACK_IMPORTED_MODULE_2__({
    loader: function () { return Promise.all(/*! import() */[__webpack_require__.e(19), __webpack_require__.e(1)]).then(__webpack_require__.bind(null, /*! ./header/header */ "./client/src/components/header/header.tsx")); },
    loading: Loading,
});
var Footer = react_loadable__WEBPACK_IMPORTED_MODULE_2__({
    loader: function () { return Promise.all(/*! import() */[__webpack_require__.e(19), __webpack_require__.e(23), __webpack_require__.e(2)]).then(__webpack_require__.bind(null, /*! ./footer/footer */ "./client/src/components/footer/footer.tsx")); },
    loading: Loading,
});
var App = /** @class */ (function (_super) {
    __extends(App, _super);
    function App() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    App.prototype.render = function () {
        return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_news_news_provider__WEBPACK_IMPORTED_MODULE_8__["NewsWrapper"], null,
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_user_user_provider__WEBPACK_IMPORTED_MODULE_4__["default"], null,
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_image_image_provider__WEBPACK_IMPORTED_MODULE_5__["default"], null,
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_1__["HashRouter"], null,
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_event_listener_event_listener__WEBPACK_IMPORTED_MODULE_3__["default"], null,
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Header, null),
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_routes__WEBPACK_IMPORTED_MODULE_7__["default"], null),
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Footer, null)))))));
    };
    return App;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]));
/* harmony default export */ __webpack_exports__["default"] = (App);


/***/ }),

/***/ "./client/src/components/event-listener/event-listener.less":
/*!******************************************************************!*\
  !*** ./client/src/components/event-listener/event-listener.less ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/less-loader/dist/cjs.js!./event-listener.less */ "./node_modules/css-loader/index.js!./node_modules/less-loader/dist/cjs.js!./client/src/components/event-listener/event-listener.less");

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

/***/ "./client/src/components/event-listener/event-listener.tsx":
/*!*****************************************************************!*\
  !*** ./client/src/components/event-listener/event-listener.tsx ***!
  \*****************************************************************/
/*! exports provided: EventListenerContext, EventListenerWrapper, default, eventListenerProvider, eventListenerConsumer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventListenerContext", function() { return EventListenerContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventListenerWrapper", function() { return EventListenerWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "eventListenerProvider", function() { return eventListenerProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "eventListenerConsumer", function() { return eventListenerConsumer; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _event_listener_less__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./event-listener.less */ "./client/src/components/event-listener/event-listener.less");
/* harmony import */ var _event_listener_less__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_event_listener_less__WEBPACK_IMPORTED_MODULE_1__);

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
    addEventListener: function (eventType, eventHandler) {
        console.error('Error: Cannot addEventListener no EventListenerContext.Provider element in parents');
        return false;
    },
    removeEventListener: function (eventType, eventHandler) {
        console.error('Error: Cannot removeEventListener no EventListenerContext.Provider element in parents');
        return false;
    },
};
var EventListenerContext = react__WEBPACK_IMPORTED_MODULE_0__["createContext"](Context);
var EventListenerWrapper = /** @class */ (function (_super) {
    __extends(EventListenerWrapper, _super);
    function EventListenerWrapper(props) {
        var _this = _super.call(this, props) || this;
        _this.eventRef = react__WEBPACK_IMPORTED_MODULE_0__["createRef"]();
        _this.state = {
            vaildEventTypes: [
                'click',
                'scroll',
                'resize'
            ],
            eventListeners: [],
        };
        _this.handleClick = _this.handleClick.bind(_this);
        _this.handleScroll = _this.handleScroll.bind(_this);
        _this.handleResize = _this.handleResize.bind(_this);
        _this.addEventListener = _this.addEventListener.bind(_this);
        _this.removeEventListener = _this.removeEventListener.bind(_this);
        return _this;
    }
    EventListenerWrapper.prototype.handleClick = function (event) {
        var _this = this;
        this.state.eventListeners.filter(function (listener) { return listener.eventType == 'click'; }).forEach(function (listener) { return listener.eventHandler(event, _this.eventRef); });
    };
    ;
    EventListenerWrapper.prototype.handleScroll = function (event) {
        var _this = this;
        this.state.eventListeners.filter(function (listener) { return listener.eventType == 'scroll'; }).forEach(function (listener) { return listener.eventHandler(event, _this.eventRef); });
    };
    EventListenerWrapper.prototype.handleResize = function (event) {
        var _this = this;
        this.state.eventListeners.filter(function (listener) { return listener.eventType == 'resize'; }).forEach(function (listener) { return listener.eventHandler(event, _this.eventRef); });
    };
    EventListenerWrapper.prototype.componentDidMount = function () {
        window.addEventListener('resize', this.handleResize);
    };
    EventListenerWrapper.prototype.componentWillUnmount = function () {
        window.removeEventListener('resize', this.handleResize);
    };
    EventListenerWrapper.prototype.addEventListener = function (eventType, eventHandler) {
        var added = true;
        this.setState(function (prevState) {
            var eventListeners = prevState.eventListeners, vaildEventTypes = prevState.vaildEventTypes;
            if (!vaildEventTypes.includes(eventType)) {
                added = false;
            }
            var index = eventListeners.findIndex(function (listener) {
                if ((listener.eventHandler === eventHandler) && (listener.eventType == eventType)) {
                    return true;
                }
                return false;
            });
            if (index != -1) {
                added = false;
            }
            if (added) {
                eventListeners.push({
                    eventType: eventType,
                    eventHandler: eventHandler
                });
            }
            return { eventListeners: eventListeners };
        });
        return added;
    };
    EventListenerWrapper.prototype.removeEventListener = function (eventType, eventHandler) {
        var deleted = true;
        this.setState(function (prevState, props) {
            var eventListeners = prevState.eventListeners, vaildEventTypes = prevState.vaildEventTypes;
            if (!vaildEventTypes.includes(eventType)) {
                deleted = false;
            }
            var index = eventListeners.findIndex(function (listener) { return listener.eventHandler === eventHandler; });
            if (index != -1) {
                deleted = false;
            }
            if (deleted) {
                eventListeners.splice(index, 1);
            }
            return { eventListeners: eventListeners };
        });
        return deleted;
    };
    EventListenerWrapper.prototype.render = function () {
        var _a = this, addEventListener = _a.addEventListener, removeEventListener = _a.removeEventListener, handleClick = _a.handleClick, handleScroll = _a.handleScroll, handleResize = _a.handleResize;
        var context = {
            addEventListener: addEventListener,
            removeEventListener: removeEventListener,
        };
        return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](EventListenerContext.Provider, { value: context },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "eventlistener-provider", ref: this.eventRef, onClick: handleClick, onScroll: handleScroll }, this.props.children)));
    };
    return EventListenerWrapper;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]));

/* harmony default export */ __webpack_exports__["default"] = (EventListenerWrapper);
var eventListenerProvider = function (Component) {
    var EventListenerProvider = /** @class */ (function (_super) {
        __extends(EventListenerProvider, _super);
        function EventListenerProvider() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        EventListenerProvider.prototype.render = function () {
            return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](EventListenerWrapper, null,
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Component, __assign({}, this.props))));
        };
        return EventListenerProvider;
    }(react__WEBPACK_IMPORTED_MODULE_0__["Component"]));
    return EventListenerProvider;
};
var eventListenerConsumer = function (Component) {
    var EventListenerConsumer = /** @class */ (function (_super) {
        __extends(EventListenerConsumer, _super);
        function EventListenerConsumer() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        EventListenerConsumer.prototype.render = function () {
            var _this = this;
            return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](EventListenerContext.Consumer, null, function (context) {
                return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Component, __assign({}, _this.props, context)));
            }));
        };
        return EventListenerConsumer;
    }(react__WEBPACK_IMPORTED_MODULE_0__["Component"]));
    return EventListenerConsumer;
};


/***/ }),

/***/ "./client/src/components/image/image-provider.tsx":
/*!********************************************************!*\
  !*** ./client/src/components/image/image-provider.tsx ***!
  \********************************************************/
/*! exports provided: ImageContext, ImageWrapper, default, imageProvider, imageConsumer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageContext", function() { return ImageContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageWrapper", function() { return ImageWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "imageProvider", function() { return imageProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "imageConsumer", function() { return imageConsumer; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var querystring__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! querystring */ "./node_modules/querystring-es3/index.js");
/* harmony import */ var querystring__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(querystring__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _image_less__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./image.less */ "./client/src/components/image/image.less");
/* harmony import */ var _image_less__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_image_less__WEBPACK_IMPORTED_MODULE_2__);

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
    getImages: function (params) {
        console.error('Error: Cannot getImages no ImageContext.Provider element in parents');
    },
    getImage: function (params) {
        console.error('Error: Cannot getImage no ImageContext.Provider element in parents');
    },
    addImage: function (params) {
        console.error('Error: Cannot addImage no ImageContext.Provider element in parents');
    },
    updateImage: function (params) {
        console.error('Error: Cannot updateImage no ImageContext.Provider element in parents');
    },
    images: [],
    imageList: {},
    page: 0,
    totalPages: 0,
    limit: 0,
    total: 0,
    pageTotal: 0,
};
var ImageContext = react__WEBPACK_IMPORTED_MODULE_0__["createContext"](Context);
var ImageWrapper = /** @class */ (function (_super) {
    __extends(ImageWrapper, _super);
    function ImageWrapper(props) {
        var _this = _super.call(this, props) || this;
        _this.state = _this.props.initialState;
        _this.getImages = _this.getImages.bind(_this);
        _this.getImage = _this.getImage.bind(_this);
        _this.addImage = _this.addImage.bind(_this);
        return _this;
    }
    ImageWrapper.prototype.getImages = function (query) {
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
        var request = new Request('/api/image' + _query, {
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
                    images: body.images,
                };
            });
        })
            .catch(function (error) {
            _this.setState(function () {
                return {
                    images: null,
                    page: null,
                    totalPages: null,
                    limit: null,
                    total: null,
                    pageTotal: null,
                };
            });
        });
    };
    ImageWrapper.prototype.getImage = function (_imageId) {
        var _this = this;
        var query = Object(querystring__WEBPACK_IMPORTED_MODULE_1__["stringify"])({
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
        var request = new Request('/api/image/' + _imageId + query, {
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
            var _id = body._id, name = body.name, alt = body.alt, filename = body.filename, discontinued = body.discontinued;
            _this.setState(function (preState) {
                preState.imageList[_id] = {
                    _imageId: _id,
                    name: name,
                    alt: alt,
                    filename: '/images/site/' + filename.split('.')[0].slice(0, -4) + '/' + filename,
                    discontinued: discontinued,
                };
                return preState;
            });
        })
            .catch(function (error) {
            console.log(error);
        });
    };
    ImageWrapper.prototype.addImage = function (params, callback) {
        var data = new FormData();
        data.append('image', params.image);
        data.append('name', params.name);
        data.append('alt', params.alt);
        var request = new Request('/api/image', {
            method: 'POST',
            credentials: 'same-origin',
            body: data,
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
    ImageWrapper.prototype.updateImage = function (_new, _old, callback) {
        var data = new FormData();
        data.append('_id', _old._imageId);
        var vaildKeys = ['name', 'alt', 'image', 'discontinued'];
        vaildKeys.forEach(function (_key) {
            if (_key == 'image') {
                if (_new.image.name) {
                    data.append('image', _new.image);
                }
            }
            else if (_new[_key] != _old[_key]) {
                data.append(_key, _new[_key]);
            }
        });
        // for(var pair of data.entries()) {
        //     console.log(pair[0]+ ', '+ pair[1]); 
        // }
        var request = new Request('/api/image', {
            method: 'PUT',
            credentials: 'same-origin',
            body: data,
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
    ImageWrapper.prototype.render = function () {
        var _a = this, getImages = _a.getImages, getImage = _a.getImage, addImage = _a.addImage, updateImage = _a.updateImage;
        var _b = this.state, images = _b.images, imageList = _b.imageList, page = _b.page, totalPages = _b.totalPages, limit = _b.limit, total = _b.total, pageTotal = _b.pageTotal;
        var context = {
            getImages: getImages,
            getImage: getImage,
            addImage: addImage,
            updateImage: updateImage,
            images: images,
            imageList: imageList,
            page: page,
            totalPages: totalPages,
            limit: limit,
            total: total,
            pageTotal: pageTotal,
        };
        return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](ImageContext.Provider, { value: context }, this.props.children));
    };
    ImageWrapper.defaultProps = {
        initialState: {
            images: [],
            imageList: {},
            page: 0,
            totalPages: 0,
            limit: 0,
            total: 0,
            pageTotal: 0,
        },
    };
    return ImageWrapper;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]));

/* harmony default export */ __webpack_exports__["default"] = (ImageWrapper);
var imageProvider = function (Component, options) {
    var ImageProvider = /** @class */ (function (_super) {
        __extends(ImageProvider, _super);
        function ImageProvider() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        ImageProvider.prototype.render = function () {
            var imageWrapperProps = {};
            if (options) {
                if ('props' in options) {
                    imageWrapperProps = options.props;
                }
            }
            return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](ImageWrapper, __assign({}, imageWrapperProps),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Component, __assign({}, this.props))));
        };
        return ImageProvider;
    }(react__WEBPACK_IMPORTED_MODULE_0__["Component"]));
    return ImageProvider;
};
var imageConsumer = function (Component) {
    var ImageConsumer = /** @class */ (function (_super) {
        __extends(ImageConsumer, _super);
        function ImageConsumer() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        ImageConsumer.prototype.render = function () {
            var _this = this;
            var _imageId = this.props._imageId;
            if ('match' in this.props) {
                if ('_imageId' in this.props.match.params) {
                    _imageId = this.props.match.params._imageId;
                }
            }
            return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](ImageContext.Consumer, null, function (context) {
                if (_imageId) {
                    context.image = {
                        _imageId: _imageId,
                        name: '',
                        alt: '',
                        filename: '',
                        discontinued: false,
                    };
                    if (_imageId in context.imageList) {
                        context.image = {
                            _imageId: _imageId,
                            name: 'name' in context.imageList[_imageId] ? context.imageList[_imageId].name : '',
                            alt: 'alt' in context.imageList[_imageId] ? context.imageList[_imageId].alt : '',
                            filename: 'filename' in context.imageList[_imageId] ? context.imageList[_imageId].filename : '',
                            discontinued: 'discontinued' in context.imageList[_imageId] ? context.imageList[_imageId].discontinued : false,
                        };
                    }
                }
                return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Component, __assign({}, _this.props, { image: context })));
            }));
        };
        return ImageConsumer;
    }(react__WEBPACK_IMPORTED_MODULE_0__["Component"]));
    return ImageConsumer;
};


/***/ }),

/***/ "./client/src/components/image/image.less":
/*!************************************************!*\
  !*** ./client/src/components/image/image.less ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/less-loader/dist/cjs.js!./image.less */ "./node_modules/css-loader/index.js!./node_modules/less-loader/dist/cjs.js!./client/src/components/image/image.less");

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

/***/ "./client/src/components/news/news-provider.tsx":
/*!******************************************************!*\
  !*** ./client/src/components/news/news-provider.tsx ***!
  \******************************************************/
/*! exports provided: NewsContext, NewsWrapper, default, newsProvider, newsConsumer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsContext", function() { return NewsContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsWrapper", function() { return NewsWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "newsProvider", function() { return newsProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "newsConsumer", function() { return newsConsumer; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var querystring__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! querystring */ "./node_modules/querystring-es3/index.js");
/* harmony import */ var querystring__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(querystring__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);

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
    getNewsItems: function (query) {
        console.error('Error: Cannot getNewsItems no NewsContext.Provider element in parents');
    },
    getNewsItem: function (_newsItemId) {
        console.error('Error: Cannot getNewsItem no NewsContext.Provider element in parents');
    },
    addNewsItem: function (error, _newsItemId) {
        console.error('Error: Cannot addNewsItem no NewsContext.Provider element in parents');
    },
    updateNewsItem: function (params, callback) {
        console.error('Error: Cannot updateNewsItem no NewsContext.Provider element in parents');
    },
    page: 0,
    totalPages: 0,
    limit: 0,
    total: 0,
    pageTotal: 0,
    newsItems: [],
    newsItemList: {},
};
var NewsContext = react__WEBPACK_IMPORTED_MODULE_0__["createContext"](Context);
var NewsWrapper = /** @class */ (function (_super) {
    __extends(NewsWrapper, _super);
    function NewsWrapper(props) {
        var _this = _super.call(this, props) || this;
        _this.state = _this.props.initialState;
        _this.getNewsItems = _this.getNewsItems.bind(_this);
        _this.getNewsItem = _this.getNewsItem.bind(_this);
        return _this;
    }
    NewsWrapper.prototype.getNewsItems = function (query) {
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
        var _query = querystring__WEBPACK_IMPORTED_MODULE_1__["stringify"](querydefaults);
        _query = _query ? '?' + _query : '';
        var request = new Request('/api/newsitem' + _query, {
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
            _this.setState(function () {
                return {
                    page: body.page,
                    totalPages: body.totalPages,
                    limit: body.limit,
                    total: body.total,
                    pageTotal: body.pageTotal,
                    newsItems: body.newsItems,
                };
            });
        })
            .catch(function (error) {
            console.log(error);
        });
    };
    NewsWrapper.prototype.getNewsItem = function (_newsItemId) {
        var _this = this;
        var query = querystring__WEBPACK_IMPORTED_MODULE_1__["stringify"]({
            field: [
                '_id',
                'post',
            ],
            format: 'json',
        });
        query = query ? '?' + query : '';
        var request = new Request('/api/newsitem/' + _newsItemId + query, {
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
            var _id = body._id, post = body.post, createdAt = body.createdAt, updatedAt = body.updatedAt, discontinued = body.discontinued;
            _this.setState(function (prevState) {
                var createDateTime = moment__WEBPACK_IMPORTED_MODULE_2__(createdAt);
                var updatedDateTime = moment__WEBPACK_IMPORTED_MODULE_2__(updatedAt);
                var daymessages = {
                    sameDay: '[Today]',
                    nextDay: '[Tomorrow]',
                    nextWeek: 'dddd',
                    lastDay: '[Yesterday]',
                    lastWeek: '[Last] dddd',
                    sameElse: 'MM/DD/YYYY',
                };
                var createdDay = createDateTime.calendar(null, daymessages);
                var updatedDay = updatedDateTime.calendar(null, daymessages);
                var createdTime = createDateTime.format("h:mm a");
                var updatedTime = updatedDateTime.format("h:mm a");
                var createdUpdatedDateTime = 'Created ';
                if (createdDay !== 'Today' && createdDay !== 'Yesterday') {
                    createdUpdatedDateTime += 'on ';
                }
                createdUpdatedDateTime += createdDay + ' at ' + createdTime;
                if (createdDay !== updatedDay) {
                    createdUpdatedDateTime += ' Updated ';
                    if (updatedDay !== 'Today' && updatedDay !== 'Yesterday') {
                        createdUpdatedDateTime += 'on ';
                    }
                    createdUpdatedDateTime += updatedDay + ' at ' + updatedTime;
                }
                else if (createdTime !== updatedTime) {
                    createdUpdatedDateTime += ' Updated at ' + updatedTime;
                }
                prevState.newsItemList[_id] = {
                    _newsItemId: _id,
                    post: post,
                    createdUpdatedDateTime: createdUpdatedDateTime,
                    discontinued: discontinued,
                };
                return prevState;
            });
        })
            .catch(function (error) {
            console.log(error);
        });
    };
    NewsWrapper.prototype.addNewsItem = function (post, callback) {
        var payload = {
            post: post,
        };
        var request = new Request('/api/newsitem', {
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
    NewsWrapper.prototype.updateNewsItem = function (params, callback) {
        var payload = {
            _id: params._id
        };
        if ('post' in params) {
            payload.post = params.post;
        }
        if ('discontinued' in params) {
            payload.discontinued = params.discontinued;
        }
        var request = new Request('/api/newsitem', {
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
    NewsWrapper.prototype.render = function () {
        var _a = this, getNewsItems = _a.getNewsItems, getNewsItem = _a.getNewsItem, addNewsItem = _a.addNewsItem, updateNewsItem = _a.updateNewsItem;
        var _b = this.state, page = _b.page, totalPages = _b.totalPages, limit = _b.limit, total = _b.total, pageTotal = _b.pageTotal, newsItems = _b.newsItems, newsItemList = _b.newsItemList;
        var context = {
            getNewsItems: getNewsItems,
            getNewsItem: getNewsItem,
            addNewsItem: addNewsItem,
            updateNewsItem: updateNewsItem,
            page: page,
            totalPages: totalPages,
            limit: limit,
            total: total,
            pageTotal: pageTotal,
            newsItems: newsItems,
            newsItemList: newsItemList,
        };
        return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](NewsContext.Provider, { value: context }, this.props.children));
    };
    NewsWrapper.defaultProps = {
        initialState: {
            page: 0,
            totalPages: 0,
            limit: 0,
            total: 0,
            pageTotal: 0,
            newsItems: [],
            newsItemList: {},
        },
    };
    return NewsWrapper;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]));

/* harmony default export */ __webpack_exports__["default"] = (NewsWrapper);
var newsProvider = function (Component, options) {
    var NewsProvider = /** @class */ (function (_super) {
        __extends(NewsProvider, _super);
        function NewsProvider() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        NewsProvider.prototype.render = function () {
            var newsWrapperProps = {};
            if (options) {
                if ('props' in options) {
                    newsWrapperProps = options.props;
                }
            }
            return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](NewsWrapper, __assign({}, newsWrapperProps),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Component, __assign({}, this.props))));
        };
        return NewsProvider;
    }(react__WEBPACK_IMPORTED_MODULE_0__["Component"]));
    return NewsProvider;
};
var newsConsumer = function (Component) {
    var NewsConsumer = /** @class */ (function (_super) {
        __extends(NewsConsumer, _super);
        function NewsConsumer() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        NewsConsumer.prototype.render = function () {
            var _this = this;
            var _newsItemId = this.props._newsItemId;
            if ('match' in this.props) {
                if ('_newsItemId' in this.props.match.params) {
                    _newsItemId = this.props.match.params._newsItemId;
                }
            }
            return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](NewsContext.Consumer, null, function (context) {
                if (_newsItemId) {
                    context.newsItem = {
                        _newsItemId: _newsItemId,
                        post: '',
                        createdUpdatedDateTime: '',
                        discontinued: false,
                    };
                    if (_newsItemId in context.newsItemList) {
                        context.newsItem = {
                            _newsItemId: _newsItemId,
                            post: 'post' in context.newsItemList[_newsItemId] ? context.newsItemList[_newsItemId].post : '',
                            createdUpdatedDateTime: 'createdUpdatedDateTime' in context.newsItemList[_newsItemId] ? context.newsItemList[_newsItemId].createdUpdatedDateTime : '',
                            discontinued: 'discontinued' in context.newsItemList[_newsItemId] ? context.newsItemList[_newsItemId].discontinued : false,
                        };
                    }
                }
                return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Component, __assign({}, _this.props, { news: context })));
            }));
        };
        return NewsConsumer;
    }(react__WEBPACK_IMPORTED_MODULE_0__["Component"]));
    return NewsConsumer;
};


/***/ }),

/***/ "./client/src/components/no-match.tsx":
/*!********************************************!*\
  !*** ./client/src/components/no-match.tsx ***!
  \********************************************/
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

var NoMatch = /** @class */ (function (_super) {
    __extends(NoMatch, _super);
    function NoMatch() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NoMatch.prototype.render = function () {
        return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "no-match-page-wrapper" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "container" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h1", null, "Page Not Found"))));
    };
    return NoMatch;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]));
;
/* harmony default export */ __webpack_exports__["default"] = (NoMatch);


/***/ }),

/***/ "./client/src/components/routes.tsx":
/*!******************************************!*\
  !*** ./client/src/components/routes.tsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router */ "./node_modules/react-router/es/index.js");
/* harmony import */ var react_loadable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-loadable */ "./node_modules/react-loadable/lib/index.js");
/* harmony import */ var react_loadable__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_loadable__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _no_match__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./no-match */ "./client/src/components/no-match.tsx");

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



// import CommingSoon from './comming-soon';

var Loading = function () { return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", null, "Loading..."); };
var HomePage = react_loadable__WEBPACK_IMPORTED_MODULE_2__({
    loader: function () { return Promise.all(/*! import() */[__webpack_require__.e(13), __webpack_require__.e(25), __webpack_require__.e(3)]).then(__webpack_require__.bind(null, /*! ./home/homepage */ "./client/src/components/home/homepage.tsx")); },
    loading: Loading,
});
var LoginPage = react_loadable__WEBPACK_IMPORTED_MODULE_2__({
    loader: function () { return __webpack_require__.e(/*! import() */ 4).then(__webpack_require__.bind(null, /*! ./login/login-page */ "./client/src/components/login/login-page.tsx")); },
    loading: Loading,
});
var SignupPage = react_loadable__WEBPACK_IMPORTED_MODULE_2__({
    loader: function () { return __webpack_require__.e(/*! import() */ 5).then(__webpack_require__.bind(null, /*! ./signup/signup-page */ "./client/src/components/signup/signup-page.tsx")); },
    loading: Loading,
});
var EventSwitch = react_loadable__WEBPACK_IMPORTED_MODULE_2__({
    loader: function () { return Promise.all(/*! import() */[__webpack_require__.e(13), __webpack_require__.e(20), __webpack_require__.e(25), __webpack_require__.e(6)]).then(__webpack_require__.bind(null, /*! ./event/event-switch */ "./client/src/components/event/event-switch.tsx")); },
    loading: Loading,
});
var NewsSwitch = react_loadable__WEBPACK_IMPORTED_MODULE_2__({
    loader: function () { return Promise.all(/*! import() */[__webpack_require__.e(13), __webpack_require__.e(7)]).then(__webpack_require__.bind(null, /*! ./news/news-switch */ "./client/src/components/news/news-switch.tsx")); },
    loading: Loading,
});
var ProjectSwitch = react_loadable__WEBPACK_IMPORTED_MODULE_2__({
    loader: function () { return Promise.all(/*! import() */[__webpack_require__.e(13), __webpack_require__.e(19), __webpack_require__.e(20), __webpack_require__.e(22), __webpack_require__.e(24), __webpack_require__.e(8)]).then(__webpack_require__.bind(null, /*! ./project/project-switch */ "./client/src/components/project/project-switch.tsx")); },
    loading: Loading,
});
var DoodlesSwitch = react_loadable__WEBPACK_IMPORTED_MODULE_2__({
    loader: function () { return __webpack_require__.e(/*! import() */ 9).then(__webpack_require__.bind(null, /*! ./doodles/doodles-switch */ "./client/src/components/doodles/doodles-switch.tsx")); },
    loading: Loading,
});
var ComicsSwitch = react_loadable__WEBPACK_IMPORTED_MODULE_2__({
    loader: function () { return __webpack_require__.e(/*! import() */ 10).then(__webpack_require__.bind(null, /*! ./comics/comics-switch */ "./client/src/components/comics/comics-switch.tsx")); },
    loading: Loading,
});
var SoundboardSwitch = react_loadable__WEBPACK_IMPORTED_MODULE_2__({
    loader: function () { return __webpack_require__.e(/*! import() */ 11).then(__webpack_require__.bind(null, /*! ./soundboard/soundboard-switch */ "./client/src/components/soundboard/soundboard-switch.tsx")); },
    loading: Loading,
});
var ShopSwitch = react_loadable__WEBPACK_IMPORTED_MODULE_2__({
    loader: function () { return __webpack_require__.e(/*! import() */ 12).then(__webpack_require__.bind(null, /*! ./shop/shop-switch */ "./client/src/components/shop/shop-switch.tsx")); },
    loading: Loading,
});
var CommissionSwitch = react_loadable__WEBPACK_IMPORTED_MODULE_2__({
    loader: function () { return Promise.all(/*! import() */[__webpack_require__.e(13), __webpack_require__.e(26)]).then(__webpack_require__.bind(null, /*! ./commission/commission-switch */ "./client/src/components/commission/commission-switch.tsx")); },
    loading: Loading,
});
var InfoSwitch = react_loadable__WEBPACK_IMPORTED_MODULE_2__({
    loader: function () { return __webpack_require__.e(/*! import() */ 14).then(__webpack_require__.bind(null, /*! ./info/info-switch */ "./client/src/components/info/info-switch.tsx")); },
    loading: Loading,
});
var ContactSwitch = react_loadable__WEBPACK_IMPORTED_MODULE_2__({
    loader: function () { return __webpack_require__.e(/*! import() */ 15).then(__webpack_require__.bind(null, /*! ./contact/contact-switch */ "./client/src/components/contact/contact-switch.tsx")); },
    loading: Loading,
});
var ProfilePage = react_loadable__WEBPACK_IMPORTED_MODULE_2__({
    loader: function () { return __webpack_require__.e(/*! import() */ 16).then(__webpack_require__.bind(null, /*! ./profile/profile-switch */ "./client/src/components/profile/profile-switch.tsx")); },
    loading: Loading,
});
var ImageSwitch = react_loadable__WEBPACK_IMPORTED_MODULE_2__({
    loader: function () { return Promise.all(/*! import() */[__webpack_require__.e(24), __webpack_require__.e(17)]).then(__webpack_require__.bind(null, /*! ./image/image-switch */ "./client/src/components/image/image-switch.tsx")); },
    loading: Loading,
});
var Routes = /** @class */ (function (_super) {
    __extends(Routes, _super);
    function Routes() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Routes.prototype.render = function () {
        return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", null,
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router__WEBPACK_IMPORTED_MODULE_1__["Switch"], null,
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router__WEBPACK_IMPORTED_MODULE_1__["Route"], { exact: true, path: "/", component: HomePage }),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router__WEBPACK_IMPORTED_MODULE_1__["Route"], { path: "/event", component: EventSwitch }),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router__WEBPACK_IMPORTED_MODULE_1__["Route"], { path: "/project", component: ProjectSwitch }),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router__WEBPACK_IMPORTED_MODULE_1__["Route"], { path: "/doodles", component: DoodlesSwitch }),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router__WEBPACK_IMPORTED_MODULE_1__["Route"], { path: "/comics", component: ComicsSwitch }),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router__WEBPACK_IMPORTED_MODULE_1__["Route"], { path: "/soundboard", component: SoundboardSwitch }),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router__WEBPACK_IMPORTED_MODULE_1__["Route"], { path: "/shop", component: ShopSwitch }),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router__WEBPACK_IMPORTED_MODULE_1__["Route"], { path: "/commission", component: CommissionSwitch }),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router__WEBPACK_IMPORTED_MODULE_1__["Route"], { path: "/info", component: InfoSwitch }),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router__WEBPACK_IMPORTED_MODULE_1__["Route"], { path: "/contact", component: ContactSwitch }),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router__WEBPACK_IMPORTED_MODULE_1__["Route"], { path: "/login", component: LoginPage }),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router__WEBPACK_IMPORTED_MODULE_1__["Route"], { path: "/signup/", component: SignupPage }),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router__WEBPACK_IMPORTED_MODULE_1__["Route"], { path: "/news", component: NewsSwitch }),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router__WEBPACK_IMPORTED_MODULE_1__["Route"], { path: "/profile", component: ProfilePage }),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router__WEBPACK_IMPORTED_MODULE_1__["Route"], { path: "/image", component: ImageSwitch }),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router__WEBPACK_IMPORTED_MODULE_1__["Route"], { component: _no_match__WEBPACK_IMPORTED_MODULE_3__["default"] }))));
    };
    return Routes;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]));
/* harmony default export */ __webpack_exports__["default"] = (Routes);


/***/ }),

/***/ "./client/src/components/user/user-provider.tsx":
/*!******************************************************!*\
  !*** ./client/src/components/user/user-provider.tsx ***!
  \******************************************************/
/*! exports provided: UserContext, UserWrapper, default, userProvider, userConsumer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserContext", function() { return UserContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserWrapper", function() { return UserWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userProvider", function() { return userProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userConsumer", function() { return userConsumer; });
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
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};

var Context = {
    signup: function () {
        console.error('Error: Cannot signup no UserContext.Provider element in parents');
    },
    getUser: function () {
        console.error('Error: Cannot getUser no UserContext.Provider element in parents');
    },
    login: function () {
        console.error('Error: Cannot login no UserContext.Provider element in parents');
    },
    logout: function () {
        console.error('Error: Cannot logout no UserContext.Provider element in parents');
    },
    updateUser: function () {
        console.error('Error: Cannot updateUser no UserContext.Provider element in parents');
    },
    updatePassword: function () {
        console.error('Error: Cannot updatePassword no UserContext.Provider element in parents');
    },
    email: null,
    firstname: null,
    lastname: null,
    username: null,
    userAccess: false,
    admin: false,
};
var UserContext = react__WEBPACK_IMPORTED_MODULE_0__["createContext"](Context);
;
var UserWrapper = /** @class */ (function (_super) {
    __extends(UserWrapper, _super);
    function UserWrapper(props) {
        var _this = _super.call(this, props) || this;
        _this.state = _this.props.initialState;
        _this.signup = _this.signup.bind(_this);
        _this.getUser = _this.getUser.bind(_this);
        _this.login = _this.login.bind(_this);
        _this.logout = _this.logout.bind(_this);
        _this.updateUser = _this.updateUser.bind(_this);
        _this.updatePassword = _this.updatePassword.bind(_this);
        return _this;
    }
    UserWrapper.prototype.getUser = function () {
        var _this = this;
        var request = new Request('/api/user/', {
            method: 'GET',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
        });
        fetch(request)
            .then(function (response) {
            if (response.status == 200) {
                return response.json();
            }
            else {
                var error = new Error(response.statusText);
                error.message = String(response);
                throw error;
            }
        })
            .then(function (body) {
            var user = {
                email: body.email,
                username: body.username,
                userAccess: true,
                firstname: body.firstname,
                lastname: body.lastname,
                admin: body.admin,
            };
            _this.setState(function () {
                return user;
            });
        })
            .catch(function (error) {
            console.log(error);
        });
    };
    UserWrapper.prototype.signup = function (params, callback) {
        var _this = this;
        var payload = {
            email: params.email,
            username: params.username,
            firstname: params.firstname,
            lastname: params.lastname,
            password: params.password,
        };
        var request = new Request('/api/user/', {
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
            return response.json();
        })
            .then(function (body) {
            var user = {
                email: body.email,
                username: body.username,
                userAccess: true,
                firstname: body.firstname,
                lastname: body.lastname,
                admin: body.admin,
            };
            _this.setState(function () {
                return user;
            });
            callback(false);
        })
            .catch(function (error) {
            callback(error);
            console.error(error);
        });
    };
    UserWrapper.prototype.login = function (email, password, callback) {
        var _this = this;
        var payload = {
            email: email,
            password: password,
        };
        var request = new Request('/api/user/login', {
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
            if (response.status == 200) {
                return response.json();
            }
            else {
                var error = new Error(response.statusText);
                error.message = String(response);
                throw error;
            }
        })
            .then(function (body) {
            var user = {
                email: body.email,
                username: body.username,
                userAccess: true,
                firstname: body.firstname,
                lastname: body.lastname,
                admin: body.admin,
            };
            _this.setState(function () {
                return user;
            });
            callback(false);
        })
            .catch(function (error) {
            callback(error);
            console.error(error);
        });
    };
    UserWrapper.prototype.logout = function () {
        var _this = this;
        var request = new Request('/api/user/logout', {
            method: 'GET',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
        });
        fetch(request)
            .then(function (response) {
            if (response.status == 200) {
                var user_1 = {
                    email: null,
                    username: null,
                    userAccess: false,
                    firstname: null,
                    lastname: null,
                    admin: false,
                };
                _this.setState(function () {
                    return user_1;
                });
            }
            else {
                console.log('logout failed');
            }
        })
            .catch(function (error) {
            console.error(error);
        });
    };
    UserWrapper.prototype.updateUser = function (params, callback) {
        var _this = this;
        var payload = {};
        if ('email' in params) {
            payload.email = params.email;
        }
        if ('username' in params) {
            payload.username = params.username;
        }
        if ('firstname' in params) {
            payload.firstname = params.firstname;
        }
        if ('lastname' in params) {
            payload.lastname = params.lastname;
        }
        if (Object.keys(payload).length > 0) {
            var request = new Request('/api/user/', {
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
                return response.json();
            })
                .then(function (body) {
                var user = {
                    email: body.email,
                    username: body.username,
                    userAccess: true,
                    firstname: body.firstname,
                    lastname: body.lastname,
                    admin: body.admin,
                };
                _this.setState(function () {
                    return user;
                });
                callback(false);
            })
                .catch(function (error) {
                callback(true);
                console.log(error);
            });
        }
    };
    UserWrapper.prototype.updatePassword = function (oldpassword, newpassword, callback) {
        var _this = this;
        var payload = {
            oldpassword: oldpassword,
            newpassword: newpassword
        };
        if (Object.keys(payload).length > 0) {
            var request = new Request('/api/user/login', {
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
                return response.json();
            })
                .then(function (body) {
                var user = {
                    email: body.email,
                    username: body.username,
                    userAccess: true,
                    firstname: body.firstname,
                    lastname: body.lastname,
                    admin: body.admin,
                };
                _this.setState(function () {
                    return user;
                });
                callback(false);
            })
                .catch(function (error) {
                callback(true);
                console.log(error);
            });
        }
    };
    UserWrapper.prototype.render = function () {
        var _a = this.state, email = _a.email, firstname = _a.firstname, lastname = _a.lastname, username = _a.username, userAccess = _a.userAccess, admin = _a.admin;
        var context = {
            email: email,
            firstname: firstname,
            lastname: lastname,
            username: username,
            userAccess: userAccess,
            admin: admin,
            signup: this.signup,
            getUser: this.getUser,
            login: this.login,
            logout: this.logout,
            updateUser: this.updateUser,
            updatePassword: this.updatePassword,
        };
        return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](UserContext.Provider, { value: context }, this.props.children));
    };
    UserWrapper.defaultProps = {
        initialState: {
            email: null,
            firstname: null,
            lastname: null,
            username: null,
            userAccess: false,
            admin: false,
        },
    };
    return UserWrapper;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]));

/* harmony default export */ __webpack_exports__["default"] = (UserWrapper);
var userProvider = function (Component, options) {
    var UserProvider = /** @class */ (function (_super) {
        __extends(UserProvider, _super);
        function UserProvider() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        UserProvider.prototype.render = function () {
            var userWrapperProps = {};
            if (options) {
                if ('props' in options) {
                    userWrapperProps = options.props;
                }
            }
            return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](UserWrapper, __assign({}, userWrapperProps),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Component, __assign({}, this.props))));
        };
        return UserProvider;
    }(react__WEBPACK_IMPORTED_MODULE_0__["Component"]));
    return UserProvider;
};
var userConsumer = function (Component) {
    var UserConsumer = /** @class */ (function (_super) {
        __extends(UserConsumer, _super);
        function UserConsumer() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        UserConsumer.prototype.render = function () {
            var _this = this;
            return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](UserContext.Consumer, null, function (context) {
                return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Component, __assign({}, _this.props, { user: context })));
            }));
        };
        return UserConsumer;
    }(react__WEBPACK_IMPORTED_MODULE_0__["Component"]));
    return UserConsumer;
};


/***/ }),

/***/ "./client/src/css/index.less":
/*!***********************************!*\
  !*** ./client/src/css/index.less ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader!../../../node_modules/less-loader/dist/cjs.js!./index.less */ "./node_modules/css-loader/index.js!./node_modules/less-loader/dist/cjs.js!./client/src/css/index.less");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/css-loader/index.js!./client/src/css/bootstrap.css":
/*!****************************************************************!*\
  !*** ./node_modules/css-loader!./client/src/css/bootstrap.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*!\r\n * Bootstrap v4.0.0 (https://getbootstrap.com)\r\n * Copyright 2011-2018 The Bootstrap Authors\r\n * Copyright 2011-2018 Twitter, Inc.\r\n * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)\r\n */\r\n:root {\r\n  --blue: #007bff;\r\n  --indigo: #6610f2;\r\n  --purple: #6f42c1;\r\n  --pink: #e83e8c;\r\n  --red: #dc3545;\r\n  --orange: #fd7e14;\r\n  --yellow: #ffc107;\r\n  --green: #28a745;\r\n  --teal: #20c997;\r\n  --cyan: #17a2b8;\r\n  --white: #fff;\r\n  --gray: #6c757d;\r\n  --gray-dark: #343a40;\r\n  --primary: #007bff;\r\n  --secondary: #6c757d;\r\n  --success: #28a745;\r\n  --info: #17a2b8;\r\n  --warning: #ffc107;\r\n  --danger: #dc3545;\r\n  --light: #f8f9fa;\r\n  --dark: #343a40;\r\n  --breakpoint-xs: 0;\r\n  --breakpoint-sm: 576px;\r\n  --breakpoint-md: 768px;\r\n  --breakpoint-lg: 992px;\r\n  --breakpoint-xl: 1200px;\r\n  --font-family-sans-serif: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\r\n  --font-family-monospace: SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace;\r\n}\r\n\r\n*,\r\n*::before,\r\n*::after {\r\n  box-sizing: border-box;\r\n}\r\n\r\nhtml {\r\n  font-family: sans-serif;\r\n  line-height: 1.15;\r\n  -webkit-text-size-adjust: 100%;\r\n  -ms-text-size-adjust: 100%;\r\n  -ms-overflow-style: scrollbar;\r\n  -webkit-tap-highlight-color: transparent;\r\n}\r\n\r\n@-ms-viewport {\r\n  width: device-width;\r\n}\r\n\r\narticle, aside, dialog, figcaption, figure, footer, header, hgroup, main, nav, section {\r\n  display: block;\r\n}\r\n\r\nbody {\r\n  margin: 0;\r\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\r\n  font-size: 1rem;\r\n  font-weight: 400;\r\n  line-height: 1.5;\r\n  color: #212529;\r\n  text-align: left;\r\n  background-color: #fff;\r\n}\r\n\r\n[tabindex=\"-1\"]:focus {\r\n  outline: 0 !important;\r\n}\r\n\r\nhr {\r\n  box-sizing: content-box;\r\n  height: 0;\r\n  overflow: visible;\r\n}\r\n\r\nh1, h2, h3, h4, h5, h6 {\r\n  margin-top: 0;\r\n  margin-bottom: 0.5rem;\r\n}\r\n\r\np {\r\n  margin-top: 0;\r\n  margin-bottom: 1rem;\r\n}\r\n\r\nabbr[title],\r\nabbr[data-original-title] {\r\n  text-decoration: underline;\r\n  -webkit-text-decoration: underline dotted;\r\n  text-decoration: underline dotted;\r\n  cursor: help;\r\n  border-bottom: 0;\r\n}\r\n\r\naddress {\r\n  margin-bottom: 1rem;\r\n  font-style: normal;\r\n  line-height: inherit;\r\n}\r\n\r\nol,\r\nul,\r\ndl {\r\n  margin-top: 0;\r\n  margin-bottom: 1rem;\r\n}\r\n\r\nol ol,\r\nul ul,\r\nol ul,\r\nul ol {\r\n  margin-bottom: 0;\r\n}\r\n\r\ndt {\r\n  font-weight: 700;\r\n}\r\n\r\ndd {\r\n  margin-bottom: .5rem;\r\n  margin-left: 0;\r\n}\r\n\r\nblockquote {\r\n  margin: 0 0 1rem;\r\n}\r\n\r\ndfn {\r\n  font-style: italic;\r\n}\r\n\r\nb,\r\nstrong {\r\n  font-weight: bolder;\r\n}\r\n\r\nsmall {\r\n  font-size: 80%;\r\n}\r\n\r\nsub,\r\nsup {\r\n  position: relative;\r\n  font-size: 75%;\r\n  line-height: 0;\r\n  vertical-align: baseline;\r\n}\r\n\r\nsub {\r\n  bottom: -.25em;\r\n}\r\n\r\nsup {\r\n  top: -.5em;\r\n}\r\n\r\na {\r\n  color: #007bff;\r\n  text-decoration: none;\r\n  background-color: transparent;\r\n  -webkit-text-decoration-skip: objects;\r\n}\r\n\r\na:hover {\r\n  color: #0056b3;\r\n  text-decoration: underline;\r\n}\r\n\r\na:not([href]):not([tabindex]) {\r\n  color: inherit;\r\n  text-decoration: none;\r\n}\r\n\r\na:not([href]):not([tabindex]):hover, a:not([href]):not([tabindex]):focus {\r\n  color: inherit;\r\n  text-decoration: none;\r\n}\r\n\r\na:not([href]):not([tabindex]):focus {\r\n  outline: 0;\r\n}\r\n\r\npre,\r\ncode,\r\nkbd,\r\nsamp {\r\n  font-family: monospace, monospace;\r\n  font-size: 1em;\r\n}\r\n\r\npre {\r\n  margin-top: 0;\r\n  margin-bottom: 1rem;\r\n  overflow: auto;\r\n  -ms-overflow-style: scrollbar;\r\n}\r\n\r\nfigure {\r\n  margin: 0 0 1rem;\r\n}\r\n\r\nimg {\r\n  vertical-align: middle;\r\n  border-style: none;\r\n}\r\n\r\nsvg:not(:root) {\r\n  overflow: hidden;\r\n}\r\n\r\ntable {\r\n  border-collapse: collapse;\r\n}\r\n\r\ncaption {\r\n  padding-top: 0.75rem;\r\n  padding-bottom: 0.75rem;\r\n  color: #6c757d;\r\n  text-align: left;\r\n  caption-side: bottom;\r\n}\r\n\r\nth {\r\n  text-align: inherit;\r\n}\r\n\r\nlabel {\r\n  display: inline-block;\r\n  margin-bottom: .5rem;\r\n}\r\n\r\nbutton {\r\n  border-radius: 0;\r\n}\r\n\r\nbutton:focus {\r\n  outline: 1px dotted;\r\n  outline: 5px auto -webkit-focus-ring-color;\r\n}\r\n\r\ninput,\r\nbutton,\r\nselect,\r\noptgroup,\r\ntextarea {\r\n  margin: 0;\r\n  font-family: inherit;\r\n  font-size: inherit;\r\n  line-height: inherit;\r\n}\r\n\r\nbutton,\r\ninput {\r\n  overflow: visible;\r\n}\r\n\r\nbutton,\r\nselect {\r\n  text-transform: none;\r\n}\r\n\r\nbutton,\r\nhtml [type=\"button\"],\r\n[type=\"reset\"],\r\n[type=\"submit\"] {\r\n  -webkit-appearance: button;\r\n}\r\n\r\nbutton::-moz-focus-inner,\r\n[type=\"button\"]::-moz-focus-inner,\r\n[type=\"reset\"]::-moz-focus-inner,\r\n[type=\"submit\"]::-moz-focus-inner {\r\n  padding: 0;\r\n  border-style: none;\r\n}\r\n\r\ninput[type=\"radio\"],\r\ninput[type=\"checkbox\"] {\r\n  box-sizing: border-box;\r\n  padding: 0;\r\n}\r\n\r\ninput[type=\"date\"],\r\ninput[type=\"time\"],\r\ninput[type=\"datetime-local\"],\r\ninput[type=\"month\"] {\r\n  -webkit-appearance: listbox;\r\n}\r\n\r\ntextarea {\r\n  overflow: auto;\r\n  resize: vertical;\r\n}\r\n\r\nfieldset {\r\n  min-width: 0;\r\n  padding: 0;\r\n  margin: 0;\r\n  border: 0;\r\n}\r\n\r\nlegend {\r\n  display: block;\r\n  width: 100%;\r\n  max-width: 100%;\r\n  padding: 0;\r\n  margin-bottom: .5rem;\r\n  font-size: 1.5rem;\r\n  line-height: inherit;\r\n  color: inherit;\r\n  white-space: normal;\r\n}\r\n\r\nprogress {\r\n  vertical-align: baseline;\r\n}\r\n\r\n[type=\"number\"]::-webkit-inner-spin-button,\r\n[type=\"number\"]::-webkit-outer-spin-button {\r\n  height: auto;\r\n}\r\n\r\n[type=\"search\"] {\r\n  outline-offset: -2px;\r\n  -webkit-appearance: none;\r\n}\r\n\r\n[type=\"search\"]::-webkit-search-cancel-button,\r\n[type=\"search\"]::-webkit-search-decoration {\r\n  -webkit-appearance: none;\r\n}\r\n\r\n::-webkit-file-upload-button {\r\n  font: inherit;\r\n  -webkit-appearance: button;\r\n}\r\n\r\noutput {\r\n  display: inline-block;\r\n}\r\n\r\nsummary {\r\n  display: list-item;\r\n  cursor: pointer;\r\n}\r\n\r\ntemplate {\r\n  display: none;\r\n}\r\n\r\n[hidden] {\r\n  display: none !important;\r\n}\r\n\r\nh1, h2, h3, h4, h5, h6,\r\n.h1, .h2, .h3, .h4, .h5, .h6 {\r\n  margin-bottom: 0.5rem;\r\n  font-family: inherit;\r\n  font-weight: 500;\r\n  line-height: 1.2;\r\n  color: inherit;\r\n}\r\n\r\nh1, .h1 {\r\n  font-size: 2.5rem;\r\n}\r\n\r\nh2, .h2 {\r\n  font-size: 2rem;\r\n}\r\n\r\nh3, .h3 {\r\n  font-size: 1.75rem;\r\n}\r\n\r\nh4, .h4 {\r\n  font-size: 1.5rem;\r\n}\r\n\r\nh5, .h5 {\r\n  font-size: 1.25rem;\r\n}\r\n\r\nh6, .h6 {\r\n  font-size: 1rem;\r\n}\r\n\r\n.lead {\r\n  font-size: 1.25rem;\r\n  font-weight: 300;\r\n}\r\n\r\n.display-1 {\r\n  font-size: 6rem;\r\n  font-weight: 300;\r\n  line-height: 1.2;\r\n}\r\n\r\n.display-2 {\r\n  font-size: 5.5rem;\r\n  font-weight: 300;\r\n  line-height: 1.2;\r\n}\r\n\r\n.display-3 {\r\n  font-size: 4.5rem;\r\n  font-weight: 300;\r\n  line-height: 1.2;\r\n}\r\n\r\n.display-4 {\r\n  font-size: 3.5rem;\r\n  font-weight: 300;\r\n  line-height: 1.2;\r\n}\r\n\r\nhr {\r\n  margin-top: 1rem;\r\n  margin-bottom: 1rem;\r\n  border: 0;\r\n  border-top: 1px solid rgba(0, 0, 0, 0.1);\r\n}\r\n\r\nsmall,\r\n.small {\r\n  font-size: 80%;\r\n  font-weight: 400;\r\n}\r\n\r\nmark,\r\n.mark {\r\n  padding: 0.2em;\r\n  background-color: #fcf8e3;\r\n}\r\n\r\n.list-unstyled {\r\n  padding-left: 0;\r\n  list-style: none;\r\n}\r\n\r\n.list-inline {\r\n  padding-left: 0;\r\n  list-style: none;\r\n}\r\n\r\n.list-inline-item {\r\n  display: inline-block;\r\n}\r\n\r\n.list-inline-item:not(:last-child) {\r\n  margin-right: 0.5rem;\r\n}\r\n\r\n.initialism {\r\n  font-size: 90%;\r\n  text-transform: uppercase;\r\n}\r\n\r\n.blockquote {\r\n  margin-bottom: 1rem;\r\n  font-size: 1.25rem;\r\n}\r\n\r\n.blockquote-footer {\r\n  display: block;\r\n  font-size: 80%;\r\n  color: #6c757d;\r\n}\r\n\r\n.blockquote-footer::before {\r\n  content: \"\\2014   \\A0\";\r\n}\r\n\r\n.img-fluid {\r\n  max-width: 100%;\r\n  height: auto;\r\n}\r\n\r\n.img-thumbnail {\r\n  padding: 0.25rem;\r\n  background-color: #fff;\r\n  border: 1px solid #dee2e6;\r\n  border-radius: 0.25rem;\r\n  max-width: 100%;\r\n  height: auto;\r\n}\r\n\r\n.figure {\r\n  display: inline-block;\r\n}\r\n\r\n.figure-img {\r\n  margin-bottom: 0.5rem;\r\n  line-height: 1;\r\n}\r\n\r\n.figure-caption {\r\n  font-size: 90%;\r\n  color: #6c757d;\r\n}\r\n\r\ncode,\r\nkbd,\r\npre,\r\nsamp {\r\n  font-family: SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace;\r\n}\r\n\r\ncode {\r\n  font-size: 87.5%;\r\n  color: #e83e8c;\r\n  word-break: break-word;\r\n}\r\n\r\na > code {\r\n  color: inherit;\r\n}\r\n\r\nkbd {\r\n  padding: 0.2rem 0.4rem;\r\n  font-size: 87.5%;\r\n  color: #fff;\r\n  background-color: #212529;\r\n  border-radius: 0.2rem;\r\n}\r\n\r\nkbd kbd {\r\n  padding: 0;\r\n  font-size: 100%;\r\n  font-weight: 700;\r\n}\r\n\r\npre {\r\n  display: block;\r\n  font-size: 87.5%;\r\n  color: #212529;\r\n}\r\n\r\npre code {\r\n  font-size: inherit;\r\n  color: inherit;\r\n  word-break: normal;\r\n}\r\n\r\n.pre-scrollable {\r\n  max-height: 340px;\r\n  overflow-y: scroll;\r\n}\r\n\r\n.container {\r\n  width: 100%;\r\n  padding-right: 15px;\r\n  padding-left: 15px;\r\n  margin-right: auto;\r\n  margin-left: auto;\r\n}\r\n\r\n@media (min-width: 576px) {\r\n  .container {\r\n    max-width: 540px;\r\n  }\r\n}\r\n\r\n@media (min-width: 768px) {\r\n  .container {\r\n    max-width: 720px;\r\n  }\r\n}\r\n\r\n@media (min-width: 992px) {\r\n  .container {\r\n    max-width: 960px;\r\n  }\r\n}\r\n\r\n@media (min-width: 1200px) {\r\n  .container {\r\n    max-width: 1140px;\r\n  }\r\n}\r\n\r\n.container-fluid {\r\n  width: 100%;\r\n  padding-right: 15px;\r\n  padding-left: 15px;\r\n  margin-right: auto;\r\n  margin-left: auto;\r\n}\r\n\r\n.row {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -ms-flex-wrap: wrap;\r\n  flex-wrap: wrap;\r\n  margin-right: -15px;\r\n  margin-left: -15px;\r\n}\r\n\r\n.no-gutters {\r\n  margin-right: 0;\r\n  margin-left: 0;\r\n}\r\n\r\n.no-gutters > .col,\r\n.no-gutters > [class*=\"col-\"] {\r\n  padding-right: 0;\r\n  padding-left: 0;\r\n}\r\n\r\n.col-1, .col-2, .col-3, .col-4, .col-5, .col-6, .col-7, .col-8, .col-9, .col-10, .col-11, .col-12, .col,\r\n.col-auto, .col-sm-1, .col-sm-2, .col-sm-3, .col-sm-4, .col-sm-5, .col-sm-6, .col-sm-7, .col-sm-8, .col-sm-9, .col-sm-10, .col-sm-11, .col-sm-12, .col-sm,\r\n.col-sm-auto, .col-md-1, .col-md-2, .col-md-3, .col-md-4, .col-md-5, .col-md-6, .col-md-7, .col-md-8, .col-md-9, .col-md-10, .col-md-11, .col-md-12, .col-md,\r\n.col-md-auto, .col-lg-1, .col-lg-2, .col-lg-3, .col-lg-4, .col-lg-5, .col-lg-6, .col-lg-7, .col-lg-8, .col-lg-9, .col-lg-10, .col-lg-11, .col-lg-12, .col-lg,\r\n.col-lg-auto, .col-xl-1, .col-xl-2, .col-xl-3, .col-xl-4, .col-xl-5, .col-xl-6, .col-xl-7, .col-xl-8, .col-xl-9, .col-xl-10, .col-xl-11, .col-xl-12, .col-xl,\r\n.col-xl-auto {\r\n  position: relative;\r\n  width: 100%;\r\n  min-height: 1px;\r\n  padding-right: 15px;\r\n  padding-left: 15px;\r\n}\r\n\r\n.col {\r\n  -ms-flex-preferred-size: 0;\r\n  flex-basis: 0;\r\n  -webkit-box-flex: 1;\r\n  -ms-flex-positive: 1;\r\n  flex-grow: 1;\r\n  max-width: 100%;\r\n}\r\n\r\n.col-auto {\r\n  -webkit-box-flex: 0;\r\n  -ms-flex: 0 0 auto;\r\n  flex: 0 0 auto;\r\n  width: auto;\r\n  max-width: none;\r\n}\r\n\r\n.col-1 {\r\n  -webkit-box-flex: 0;\r\n  -ms-flex: 0 0 8.333333%;\r\n  flex: 0 0 8.333333%;\r\n  max-width: 8.333333%;\r\n}\r\n\r\n.col-2 {\r\n  -webkit-box-flex: 0;\r\n  -ms-flex: 0 0 16.666667%;\r\n  flex: 0 0 16.666667%;\r\n  max-width: 16.666667%;\r\n}\r\n\r\n.col-3 {\r\n  -webkit-box-flex: 0;\r\n  -ms-flex: 0 0 25%;\r\n  flex: 0 0 25%;\r\n  max-width: 25%;\r\n}\r\n\r\n.col-4 {\r\n  -webkit-box-flex: 0;\r\n  -ms-flex: 0 0 33.333333%;\r\n  flex: 0 0 33.333333%;\r\n  max-width: 33.333333%;\r\n}\r\n\r\n.col-5 {\r\n  -webkit-box-flex: 0;\r\n  -ms-flex: 0 0 41.666667%;\r\n  flex: 0 0 41.666667%;\r\n  max-width: 41.666667%;\r\n}\r\n\r\n.col-6 {\r\n  -webkit-box-flex: 0;\r\n  -ms-flex: 0 0 50%;\r\n  flex: 0 0 50%;\r\n  max-width: 50%;\r\n}\r\n\r\n.col-7 {\r\n  -webkit-box-flex: 0;\r\n  -ms-flex: 0 0 58.333333%;\r\n  flex: 0 0 58.333333%;\r\n  max-width: 58.333333%;\r\n}\r\n\r\n.col-8 {\r\n  -webkit-box-flex: 0;\r\n  -ms-flex: 0 0 66.666667%;\r\n  flex: 0 0 66.666667%;\r\n  max-width: 66.666667%;\r\n}\r\n\r\n.col-9 {\r\n  -webkit-box-flex: 0;\r\n  -ms-flex: 0 0 75%;\r\n  flex: 0 0 75%;\r\n  max-width: 75%;\r\n}\r\n\r\n.col-10 {\r\n  -webkit-box-flex: 0;\r\n  -ms-flex: 0 0 83.333333%;\r\n  flex: 0 0 83.333333%;\r\n  max-width: 83.333333%;\r\n}\r\n\r\n.col-11 {\r\n  -webkit-box-flex: 0;\r\n  -ms-flex: 0 0 91.666667%;\r\n  flex: 0 0 91.666667%;\r\n  max-width: 91.666667%;\r\n}\r\n\r\n.col-12 {\r\n  -webkit-box-flex: 0;\r\n  -ms-flex: 0 0 100%;\r\n  flex: 0 0 100%;\r\n  max-width: 100%;\r\n}\r\n\r\n.order-first {\r\n  -webkit-box-ordinal-group: 0;\r\n  -ms-flex-order: -1;\r\n  order: -1;\r\n}\r\n\r\n.order-last {\r\n  -webkit-box-ordinal-group: 14;\r\n  -ms-flex-order: 13;\r\n  order: 13;\r\n}\r\n\r\n.order-0 {\r\n  -webkit-box-ordinal-group: 1;\r\n  -ms-flex-order: 0;\r\n  order: 0;\r\n}\r\n\r\n.order-1 {\r\n  -webkit-box-ordinal-group: 2;\r\n  -ms-flex-order: 1;\r\n  order: 1;\r\n}\r\n\r\n.order-2 {\r\n  -webkit-box-ordinal-group: 3;\r\n  -ms-flex-order: 2;\r\n  order: 2;\r\n}\r\n\r\n.order-3 {\r\n  -webkit-box-ordinal-group: 4;\r\n  -ms-flex-order: 3;\r\n  order: 3;\r\n}\r\n\r\n.order-4 {\r\n  -webkit-box-ordinal-group: 5;\r\n  -ms-flex-order: 4;\r\n  order: 4;\r\n}\r\n\r\n.order-5 {\r\n  -webkit-box-ordinal-group: 6;\r\n  -ms-flex-order: 5;\r\n  order: 5;\r\n}\r\n\r\n.order-6 {\r\n  -webkit-box-ordinal-group: 7;\r\n  -ms-flex-order: 6;\r\n  order: 6;\r\n}\r\n\r\n.order-7 {\r\n  -webkit-box-ordinal-group: 8;\r\n  -ms-flex-order: 7;\r\n  order: 7;\r\n}\r\n\r\n.order-8 {\r\n  -webkit-box-ordinal-group: 9;\r\n  -ms-flex-order: 8;\r\n  order: 8;\r\n}\r\n\r\n.order-9 {\r\n  -webkit-box-ordinal-group: 10;\r\n  -ms-flex-order: 9;\r\n  order: 9;\r\n}\r\n\r\n.order-10 {\r\n  -webkit-box-ordinal-group: 11;\r\n  -ms-flex-order: 10;\r\n  order: 10;\r\n}\r\n\r\n.order-11 {\r\n  -webkit-box-ordinal-group: 12;\r\n  -ms-flex-order: 11;\r\n  order: 11;\r\n}\r\n\r\n.order-12 {\r\n  -webkit-box-ordinal-group: 13;\r\n  -ms-flex-order: 12;\r\n  order: 12;\r\n}\r\n\r\n.offset-1 {\r\n  margin-left: 8.333333%;\r\n}\r\n\r\n.offset-2 {\r\n  margin-left: 16.666667%;\r\n}\r\n\r\n.offset-3 {\r\n  margin-left: 25%;\r\n}\r\n\r\n.offset-4 {\r\n  margin-left: 33.333333%;\r\n}\r\n\r\n.offset-5 {\r\n  margin-left: 41.666667%;\r\n}\r\n\r\n.offset-6 {\r\n  margin-left: 50%;\r\n}\r\n\r\n.offset-7 {\r\n  margin-left: 58.333333%;\r\n}\r\n\r\n.offset-8 {\r\n  margin-left: 66.666667%;\r\n}\r\n\r\n.offset-9 {\r\n  margin-left: 75%;\r\n}\r\n\r\n.offset-10 {\r\n  margin-left: 83.333333%;\r\n}\r\n\r\n.offset-11 {\r\n  margin-left: 91.666667%;\r\n}\r\n\r\n@media (min-width: 576px) {\r\n  .col-sm {\r\n    -ms-flex-preferred-size: 0;\r\n    flex-basis: 0;\r\n    -webkit-box-flex: 1;\r\n    -ms-flex-positive: 1;\r\n    flex-grow: 1;\r\n    max-width: 100%;\r\n  }\r\n  .col-sm-auto {\r\n    -webkit-box-flex: 0;\r\n    -ms-flex: 0 0 auto;\r\n    flex: 0 0 auto;\r\n    width: auto;\r\n    max-width: none;\r\n  }\r\n  .col-sm-1 {\r\n    -webkit-box-flex: 0;\r\n    -ms-flex: 0 0 8.333333%;\r\n    flex: 0 0 8.333333%;\r\n    max-width: 8.333333%;\r\n  }\r\n  .col-sm-2 {\r\n    -webkit-box-flex: 0;\r\n    -ms-flex: 0 0 16.666667%;\r\n    flex: 0 0 16.666667%;\r\n    max-width: 16.666667%;\r\n  }\r\n  .col-sm-3 {\r\n    -webkit-box-flex: 0;\r\n    -ms-flex: 0 0 25%;\r\n    flex: 0 0 25%;\r\n    max-width: 25%;\r\n  }\r\n  .col-sm-4 {\r\n    -webkit-box-flex: 0;\r\n    -ms-flex: 0 0 33.333333%;\r\n    flex: 0 0 33.333333%;\r\n    max-width: 33.333333%;\r\n  }\r\n  .col-sm-5 {\r\n    -webkit-box-flex: 0;\r\n    -ms-flex: 0 0 41.666667%;\r\n    flex: 0 0 41.666667%;\r\n    max-width: 41.666667%;\r\n  }\r\n  .col-sm-6 {\r\n    -webkit-box-flex: 0;\r\n    -ms-flex: 0 0 50%;\r\n    flex: 0 0 50%;\r\n    max-width: 50%;\r\n  }\r\n  .col-sm-7 {\r\n    -webkit-box-flex: 0;\r\n    -ms-flex: 0 0 58.333333%;\r\n    flex: 0 0 58.333333%;\r\n    max-width: 58.333333%;\r\n  }\r\n  .col-sm-8 {\r\n    -webkit-box-flex: 0;\r\n    -ms-flex: 0 0 66.666667%;\r\n    flex: 0 0 66.666667%;\r\n    max-width: 66.666667%;\r\n  }\r\n  .col-sm-9 {\r\n    -webkit-box-flex: 0;\r\n    -ms-flex: 0 0 75%;\r\n    flex: 0 0 75%;\r\n    max-width: 75%;\r\n  }\r\n  .col-sm-10 {\r\n    -webkit-box-flex: 0;\r\n    -ms-flex: 0 0 83.333333%;\r\n    flex: 0 0 83.333333%;\r\n    max-width: 83.333333%;\r\n  }\r\n  .col-sm-11 {\r\n    -webkit-box-flex: 0;\r\n    -ms-flex: 0 0 91.666667%;\r\n    flex: 0 0 91.666667%;\r\n    max-width: 91.666667%;\r\n  }\r\n  .col-sm-12 {\r\n    -webkit-box-flex: 0;\r\n    -ms-flex: 0 0 100%;\r\n    flex: 0 0 100%;\r\n    max-width: 100%;\r\n  }\r\n  .order-sm-first {\r\n    -webkit-box-ordinal-group: 0;\r\n    -ms-flex-order: -1;\r\n    order: -1;\r\n  }\r\n  .order-sm-last {\r\n    -webkit-box-ordinal-group: 14;\r\n    -ms-flex-order: 13;\r\n    order: 13;\r\n  }\r\n  .order-sm-0 {\r\n    -webkit-box-ordinal-group: 1;\r\n    -ms-flex-order: 0;\r\n    order: 0;\r\n  }\r\n  .order-sm-1 {\r\n    -webkit-box-ordinal-group: 2;\r\n    -ms-flex-order: 1;\r\n    order: 1;\r\n  }\r\n  .order-sm-2 {\r\n    -webkit-box-ordinal-group: 3;\r\n    -ms-flex-order: 2;\r\n    order: 2;\r\n  }\r\n  .order-sm-3 {\r\n    -webkit-box-ordinal-group: 4;\r\n    -ms-flex-order: 3;\r\n    order: 3;\r\n  }\r\n  .order-sm-4 {\r\n    -webkit-box-ordinal-group: 5;\r\n    -ms-flex-order: 4;\r\n    order: 4;\r\n  }\r\n  .order-sm-5 {\r\n    -webkit-box-ordinal-group: 6;\r\n    -ms-flex-order: 5;\r\n    order: 5;\r\n  }\r\n  .order-sm-6 {\r\n    -webkit-box-ordinal-group: 7;\r\n    -ms-flex-order: 6;\r\n    order: 6;\r\n  }\r\n  .order-sm-7 {\r\n    -webkit-box-ordinal-group: 8;\r\n    -ms-flex-order: 7;\r\n    order: 7;\r\n  }\r\n  .order-sm-8 {\r\n    -webkit-box-ordinal-group: 9;\r\n    -ms-flex-order: 8;\r\n    order: 8;\r\n  }\r\n  .order-sm-9 {\r\n    -webkit-box-ordinal-group: 10;\r\n    -ms-flex-order: 9;\r\n    order: 9;\r\n  }\r\n  .order-sm-10 {\r\n    -webkit-box-ordinal-group: 11;\r\n    -ms-flex-order: 10;\r\n    order: 10;\r\n  }\r\n  .order-sm-11 {\r\n    -webkit-box-ordinal-group: 12;\r\n    -ms-flex-order: 11;\r\n    order: 11;\r\n  }\r\n  .order-sm-12 {\r\n    -webkit-box-ordinal-group: 13;\r\n    -ms-flex-order: 12;\r\n    order: 12;\r\n  }\r\n  .offset-sm-0 {\r\n    margin-left: 0;\r\n  }\r\n  .offset-sm-1 {\r\n    margin-left: 8.333333%;\r\n  }\r\n  .offset-sm-2 {\r\n    margin-left: 16.666667%;\r\n  }\r\n  .offset-sm-3 {\r\n    margin-left: 25%;\r\n  }\r\n  .offset-sm-4 {\r\n    margin-left: 33.333333%;\r\n  }\r\n  .offset-sm-5 {\r\n    margin-left: 41.666667%;\r\n  }\r\n  .offset-sm-6 {\r\n    margin-left: 50%;\r\n  }\r\n  .offset-sm-7 {\r\n    margin-left: 58.333333%;\r\n  }\r\n  .offset-sm-8 {\r\n    margin-left: 66.666667%;\r\n  }\r\n  .offset-sm-9 {\r\n    margin-left: 75%;\r\n  }\r\n  .offset-sm-10 {\r\n    margin-left: 83.333333%;\r\n  }\r\n  .offset-sm-11 {\r\n    margin-left: 91.666667%;\r\n  }\r\n}\r\n\r\n@media (min-width: 768px) {\r\n  .col-md {\r\n    -ms-flex-preferred-size: 0;\r\n    flex-basis: 0;\r\n    -webkit-box-flex: 1;\r\n    -ms-flex-positive: 1;\r\n    flex-grow: 1;\r\n    max-width: 100%;\r\n  }\r\n  .col-md-auto {\r\n    -webkit-box-flex: 0;\r\n    -ms-flex: 0 0 auto;\r\n    flex: 0 0 auto;\r\n    width: auto;\r\n    max-width: none;\r\n  }\r\n  .col-md-1 {\r\n    -webkit-box-flex: 0;\r\n    -ms-flex: 0 0 8.333333%;\r\n    flex: 0 0 8.333333%;\r\n    max-width: 8.333333%;\r\n  }\r\n  .col-md-2 {\r\n    -webkit-box-flex: 0;\r\n    -ms-flex: 0 0 16.666667%;\r\n    flex: 0 0 16.666667%;\r\n    max-width: 16.666667%;\r\n  }\r\n  .col-md-3 {\r\n    -webkit-box-flex: 0;\r\n    -ms-flex: 0 0 25%;\r\n    flex: 0 0 25%;\r\n    max-width: 25%;\r\n  }\r\n  .col-md-4 {\r\n    -webkit-box-flex: 0;\r\n    -ms-flex: 0 0 33.333333%;\r\n    flex: 0 0 33.333333%;\r\n    max-width: 33.333333%;\r\n  }\r\n  .col-md-5 {\r\n    -webkit-box-flex: 0;\r\n    -ms-flex: 0 0 41.666667%;\r\n    flex: 0 0 41.666667%;\r\n    max-width: 41.666667%;\r\n  }\r\n  .col-md-6 {\r\n    -webkit-box-flex: 0;\r\n    -ms-flex: 0 0 50%;\r\n    flex: 0 0 50%;\r\n    max-width: 50%;\r\n  }\r\n  .col-md-7 {\r\n    -webkit-box-flex: 0;\r\n    -ms-flex: 0 0 58.333333%;\r\n    flex: 0 0 58.333333%;\r\n    max-width: 58.333333%;\r\n  }\r\n  .col-md-8 {\r\n    -webkit-box-flex: 0;\r\n    -ms-flex: 0 0 66.666667%;\r\n    flex: 0 0 66.666667%;\r\n    max-width: 66.666667%;\r\n  }\r\n  .col-md-9 {\r\n    -webkit-box-flex: 0;\r\n    -ms-flex: 0 0 75%;\r\n    flex: 0 0 75%;\r\n    max-width: 75%;\r\n  }\r\n  .col-md-10 {\r\n    -webkit-box-flex: 0;\r\n    -ms-flex: 0 0 83.333333%;\r\n    flex: 0 0 83.333333%;\r\n    max-width: 83.333333%;\r\n  }\r\n  .col-md-11 {\r\n    -webkit-box-flex: 0;\r\n    -ms-flex: 0 0 91.666667%;\r\n    flex: 0 0 91.666667%;\r\n    max-width: 91.666667%;\r\n  }\r\n  .col-md-12 {\r\n    -webkit-box-flex: 0;\r\n    -ms-flex: 0 0 100%;\r\n    flex: 0 0 100%;\r\n    max-width: 100%;\r\n  }\r\n  .order-md-first {\r\n    -webkit-box-ordinal-group: 0;\r\n    -ms-flex-order: -1;\r\n    order: -1;\r\n  }\r\n  .order-md-last {\r\n    -webkit-box-ordinal-group: 14;\r\n    -ms-flex-order: 13;\r\n    order: 13;\r\n  }\r\n  .order-md-0 {\r\n    -webkit-box-ordinal-group: 1;\r\n    -ms-flex-order: 0;\r\n    order: 0;\r\n  }\r\n  .order-md-1 {\r\n    -webkit-box-ordinal-group: 2;\r\n    -ms-flex-order: 1;\r\n    order: 1;\r\n  }\r\n  .order-md-2 {\r\n    -webkit-box-ordinal-group: 3;\r\n    -ms-flex-order: 2;\r\n    order: 2;\r\n  }\r\n  .order-md-3 {\r\n    -webkit-box-ordinal-group: 4;\r\n    -ms-flex-order: 3;\r\n    order: 3;\r\n  }\r\n  .order-md-4 {\r\n    -webkit-box-ordinal-group: 5;\r\n    -ms-flex-order: 4;\r\n    order: 4;\r\n  }\r\n  .order-md-5 {\r\n    -webkit-box-ordinal-group: 6;\r\n    -ms-flex-order: 5;\r\n    order: 5;\r\n  }\r\n  .order-md-6 {\r\n    -webkit-box-ordinal-group: 7;\r\n    -ms-flex-order: 6;\r\n    order: 6;\r\n  }\r\n  .order-md-7 {\r\n    -webkit-box-ordinal-group: 8;\r\n    -ms-flex-order: 7;\r\n    order: 7;\r\n  }\r\n  .order-md-8 {\r\n    -webkit-box-ordinal-group: 9;\r\n    -ms-flex-order: 8;\r\n    order: 8;\r\n  }\r\n  .order-md-9 {\r\n    -webkit-box-ordinal-group: 10;\r\n    -ms-flex-order: 9;\r\n    order: 9;\r\n  }\r\n  .order-md-10 {\r\n    -webkit-box-ordinal-group: 11;\r\n    -ms-flex-order: 10;\r\n    order: 10;\r\n  }\r\n  .order-md-11 {\r\n    -webkit-box-ordinal-group: 12;\r\n    -ms-flex-order: 11;\r\n    order: 11;\r\n  }\r\n  .order-md-12 {\r\n    -webkit-box-ordinal-group: 13;\r\n    -ms-flex-order: 12;\r\n    order: 12;\r\n  }\r\n  .offset-md-0 {\r\n    margin-left: 0;\r\n  }\r\n  .offset-md-1 {\r\n    margin-left: 8.333333%;\r\n  }\r\n  .offset-md-2 {\r\n    margin-left: 16.666667%;\r\n  }\r\n  .offset-md-3 {\r\n    margin-left: 25%;\r\n  }\r\n  .offset-md-4 {\r\n    margin-left: 33.333333%;\r\n  }\r\n  .offset-md-5 {\r\n    margin-left: 41.666667%;\r\n  }\r\n  .offset-md-6 {\r\n    margin-left: 50%;\r\n  }\r\n  .offset-md-7 {\r\n    margin-left: 58.333333%;\r\n  }\r\n  .offset-md-8 {\r\n    margin-left: 66.666667%;\r\n  }\r\n  .offset-md-9 {\r\n    margin-left: 75%;\r\n  }\r\n  .offset-md-10 {\r\n    margin-left: 83.333333%;\r\n  }\r\n  .offset-md-11 {\r\n    margin-left: 91.666667%;\r\n  }\r\n}\r\n\r\n@media (min-width: 992px) {\r\n  .col-lg {\r\n    -ms-flex-preferred-size: 0;\r\n    flex-basis: 0;\r\n    -webkit-box-flex: 1;\r\n    -ms-flex-positive: 1;\r\n    flex-grow: 1;\r\n    max-width: 100%;\r\n  }\r\n  .col-lg-auto {\r\n    -webkit-box-flex: 0;\r\n    -ms-flex: 0 0 auto;\r\n    flex: 0 0 auto;\r\n    width: auto;\r\n    max-width: none;\r\n  }\r\n  .col-lg-1 {\r\n    -webkit-box-flex: 0;\r\n    -ms-flex: 0 0 8.333333%;\r\n    flex: 0 0 8.333333%;\r\n    max-width: 8.333333%;\r\n  }\r\n  .col-lg-2 {\r\n    -webkit-box-flex: 0;\r\n    -ms-flex: 0 0 16.666667%;\r\n    flex: 0 0 16.666667%;\r\n    max-width: 16.666667%;\r\n  }\r\n  .col-lg-3 {\r\n    -webkit-box-flex: 0;\r\n    -ms-flex: 0 0 25%;\r\n    flex: 0 0 25%;\r\n    max-width: 25%;\r\n  }\r\n  .col-lg-4 {\r\n    -webkit-box-flex: 0;\r\n    -ms-flex: 0 0 33.333333%;\r\n    flex: 0 0 33.333333%;\r\n    max-width: 33.333333%;\r\n  }\r\n  .col-lg-5 {\r\n    -webkit-box-flex: 0;\r\n    -ms-flex: 0 0 41.666667%;\r\n    flex: 0 0 41.666667%;\r\n    max-width: 41.666667%;\r\n  }\r\n  .col-lg-6 {\r\n    -webkit-box-flex: 0;\r\n    -ms-flex: 0 0 50%;\r\n    flex: 0 0 50%;\r\n    max-width: 50%;\r\n  }\r\n  .col-lg-7 {\r\n    -webkit-box-flex: 0;\r\n    -ms-flex: 0 0 58.333333%;\r\n    flex: 0 0 58.333333%;\r\n    max-width: 58.333333%;\r\n  }\r\n  .col-lg-8 {\r\n    -webkit-box-flex: 0;\r\n    -ms-flex: 0 0 66.666667%;\r\n    flex: 0 0 66.666667%;\r\n    max-width: 66.666667%;\r\n  }\r\n  .col-lg-9 {\r\n    -webkit-box-flex: 0;\r\n    -ms-flex: 0 0 75%;\r\n    flex: 0 0 75%;\r\n    max-width: 75%;\r\n  }\r\n  .col-lg-10 {\r\n    -webkit-box-flex: 0;\r\n    -ms-flex: 0 0 83.333333%;\r\n    flex: 0 0 83.333333%;\r\n    max-width: 83.333333%;\r\n  }\r\n  .col-lg-11 {\r\n    -webkit-box-flex: 0;\r\n    -ms-flex: 0 0 91.666667%;\r\n    flex: 0 0 91.666667%;\r\n    max-width: 91.666667%;\r\n  }\r\n  .col-lg-12 {\r\n    -webkit-box-flex: 0;\r\n    -ms-flex: 0 0 100%;\r\n    flex: 0 0 100%;\r\n    max-width: 100%;\r\n  }\r\n  .order-lg-first {\r\n    -webkit-box-ordinal-group: 0;\r\n    -ms-flex-order: -1;\r\n    order: -1;\r\n  }\r\n  .order-lg-last {\r\n    -webkit-box-ordinal-group: 14;\r\n    -ms-flex-order: 13;\r\n    order: 13;\r\n  }\r\n  .order-lg-0 {\r\n    -webkit-box-ordinal-group: 1;\r\n    -ms-flex-order: 0;\r\n    order: 0;\r\n  }\r\n  .order-lg-1 {\r\n    -webkit-box-ordinal-group: 2;\r\n    -ms-flex-order: 1;\r\n    order: 1;\r\n  }\r\n  .order-lg-2 {\r\n    -webkit-box-ordinal-group: 3;\r\n    -ms-flex-order: 2;\r\n    order: 2;\r\n  }\r\n  .order-lg-3 {\r\n    -webkit-box-ordinal-group: 4;\r\n    -ms-flex-order: 3;\r\n    order: 3;\r\n  }\r\n  .order-lg-4 {\r\n    -webkit-box-ordinal-group: 5;\r\n    -ms-flex-order: 4;\r\n    order: 4;\r\n  }\r\n  .order-lg-5 {\r\n    -webkit-box-ordinal-group: 6;\r\n    -ms-flex-order: 5;\r\n    order: 5;\r\n  }\r\n  .order-lg-6 {\r\n    -webkit-box-ordinal-group: 7;\r\n    -ms-flex-order: 6;\r\n    order: 6;\r\n  }\r\n  .order-lg-7 {\r\n    -webkit-box-ordinal-group: 8;\r\n    -ms-flex-order: 7;\r\n    order: 7;\r\n  }\r\n  .order-lg-8 {\r\n    -webkit-box-ordinal-group: 9;\r\n    -ms-flex-order: 8;\r\n    order: 8;\r\n  }\r\n  .order-lg-9 {\r\n    -webkit-box-ordinal-group: 10;\r\n    -ms-flex-order: 9;\r\n    order: 9;\r\n  }\r\n  .order-lg-10 {\r\n    -webkit-box-ordinal-group: 11;\r\n    -ms-flex-order: 10;\r\n    order: 10;\r\n  }\r\n  .order-lg-11 {\r\n    -webkit-box-ordinal-group: 12;\r\n    -ms-flex-order: 11;\r\n    order: 11;\r\n  }\r\n  .order-lg-12 {\r\n    -webkit-box-ordinal-group: 13;\r\n    -ms-flex-order: 12;\r\n    order: 12;\r\n  }\r\n  .offset-lg-0 {\r\n    margin-left: 0;\r\n  }\r\n  .offset-lg-1 {\r\n    margin-left: 8.333333%;\r\n  }\r\n  .offset-lg-2 {\r\n    margin-left: 16.666667%;\r\n  }\r\n  .offset-lg-3 {\r\n    margin-left: 25%;\r\n  }\r\n  .offset-lg-4 {\r\n    margin-left: 33.333333%;\r\n  }\r\n  .offset-lg-5 {\r\n    margin-left: 41.666667%;\r\n  }\r\n  .offset-lg-6 {\r\n    margin-left: 50%;\r\n  }\r\n  .offset-lg-7 {\r\n    margin-left: 58.333333%;\r\n  }\r\n  .offset-lg-8 {\r\n    margin-left: 66.666667%;\r\n  }\r\n  .offset-lg-9 {\r\n    margin-left: 75%;\r\n  }\r\n  .offset-lg-10 {\r\n    margin-left: 83.333333%;\r\n  }\r\n  .offset-lg-11 {\r\n    margin-left: 91.666667%;\r\n  }\r\n}\r\n\r\n@media (min-width: 1200px) {\r\n  .col-xl {\r\n    -ms-flex-preferred-size: 0;\r\n    flex-basis: 0;\r\n    -webkit-box-flex: 1;\r\n    -ms-flex-positive: 1;\r\n    flex-grow: 1;\r\n    max-width: 100%;\r\n  }\r\n  .col-xl-auto {\r\n    -webkit-box-flex: 0;\r\n    -ms-flex: 0 0 auto;\r\n    flex: 0 0 auto;\r\n    width: auto;\r\n    max-width: none;\r\n  }\r\n  .col-xl-1 {\r\n    -webkit-box-flex: 0;\r\n    -ms-flex: 0 0 8.333333%;\r\n    flex: 0 0 8.333333%;\r\n    max-width: 8.333333%;\r\n  }\r\n  .col-xl-2 {\r\n    -webkit-box-flex: 0;\r\n    -ms-flex: 0 0 16.666667%;\r\n    flex: 0 0 16.666667%;\r\n    max-width: 16.666667%;\r\n  }\r\n  .col-xl-3 {\r\n    -webkit-box-flex: 0;\r\n    -ms-flex: 0 0 25%;\r\n    flex: 0 0 25%;\r\n    max-width: 25%;\r\n  }\r\n  .col-xl-4 {\r\n    -webkit-box-flex: 0;\r\n    -ms-flex: 0 0 33.333333%;\r\n    flex: 0 0 33.333333%;\r\n    max-width: 33.333333%;\r\n  }\r\n  .col-xl-5 {\r\n    -webkit-box-flex: 0;\r\n    -ms-flex: 0 0 41.666667%;\r\n    flex: 0 0 41.666667%;\r\n    max-width: 41.666667%;\r\n  }\r\n  .col-xl-6 {\r\n    -webkit-box-flex: 0;\r\n    -ms-flex: 0 0 50%;\r\n    flex: 0 0 50%;\r\n    max-width: 50%;\r\n  }\r\n  .col-xl-7 {\r\n    -webkit-box-flex: 0;\r\n    -ms-flex: 0 0 58.333333%;\r\n    flex: 0 0 58.333333%;\r\n    max-width: 58.333333%;\r\n  }\r\n  .col-xl-8 {\r\n    -webkit-box-flex: 0;\r\n    -ms-flex: 0 0 66.666667%;\r\n    flex: 0 0 66.666667%;\r\n    max-width: 66.666667%;\r\n  }\r\n  .col-xl-9 {\r\n    -webkit-box-flex: 0;\r\n    -ms-flex: 0 0 75%;\r\n    flex: 0 0 75%;\r\n    max-width: 75%;\r\n  }\r\n  .col-xl-10 {\r\n    -webkit-box-flex: 0;\r\n    -ms-flex: 0 0 83.333333%;\r\n    flex: 0 0 83.333333%;\r\n    max-width: 83.333333%;\r\n  }\r\n  .col-xl-11 {\r\n    -webkit-box-flex: 0;\r\n    -ms-flex: 0 0 91.666667%;\r\n    flex: 0 0 91.666667%;\r\n    max-width: 91.666667%;\r\n  }\r\n  .col-xl-12 {\r\n    -webkit-box-flex: 0;\r\n    -ms-flex: 0 0 100%;\r\n    flex: 0 0 100%;\r\n    max-width: 100%;\r\n  }\r\n  .order-xl-first {\r\n    -webkit-box-ordinal-group: 0;\r\n    -ms-flex-order: -1;\r\n    order: -1;\r\n  }\r\n  .order-xl-last {\r\n    -webkit-box-ordinal-group: 14;\r\n    -ms-flex-order: 13;\r\n    order: 13;\r\n  }\r\n  .order-xl-0 {\r\n    -webkit-box-ordinal-group: 1;\r\n    -ms-flex-order: 0;\r\n    order: 0;\r\n  }\r\n  .order-xl-1 {\r\n    -webkit-box-ordinal-group: 2;\r\n    -ms-flex-order: 1;\r\n    order: 1;\r\n  }\r\n  .order-xl-2 {\r\n    -webkit-box-ordinal-group: 3;\r\n    -ms-flex-order: 2;\r\n    order: 2;\r\n  }\r\n  .order-xl-3 {\r\n    -webkit-box-ordinal-group: 4;\r\n    -ms-flex-order: 3;\r\n    order: 3;\r\n  }\r\n  .order-xl-4 {\r\n    -webkit-box-ordinal-group: 5;\r\n    -ms-flex-order: 4;\r\n    order: 4;\r\n  }\r\n  .order-xl-5 {\r\n    -webkit-box-ordinal-group: 6;\r\n    -ms-flex-order: 5;\r\n    order: 5;\r\n  }\r\n  .order-xl-6 {\r\n    -webkit-box-ordinal-group: 7;\r\n    -ms-flex-order: 6;\r\n    order: 6;\r\n  }\r\n  .order-xl-7 {\r\n    -webkit-box-ordinal-group: 8;\r\n    -ms-flex-order: 7;\r\n    order: 7;\r\n  }\r\n  .order-xl-8 {\r\n    -webkit-box-ordinal-group: 9;\r\n    -ms-flex-order: 8;\r\n    order: 8;\r\n  }\r\n  .order-xl-9 {\r\n    -webkit-box-ordinal-group: 10;\r\n    -ms-flex-order: 9;\r\n    order: 9;\r\n  }\r\n  .order-xl-10 {\r\n    -webkit-box-ordinal-group: 11;\r\n    -ms-flex-order: 10;\r\n    order: 10;\r\n  }\r\n  .order-xl-11 {\r\n    -webkit-box-ordinal-group: 12;\r\n    -ms-flex-order: 11;\r\n    order: 11;\r\n  }\r\n  .order-xl-12 {\r\n    -webkit-box-ordinal-group: 13;\r\n    -ms-flex-order: 12;\r\n    order: 12;\r\n  }\r\n  .offset-xl-0 {\r\n    margin-left: 0;\r\n  }\r\n  .offset-xl-1 {\r\n    margin-left: 8.333333%;\r\n  }\r\n  .offset-xl-2 {\r\n    margin-left: 16.666667%;\r\n  }\r\n  .offset-xl-3 {\r\n    margin-left: 25%;\r\n  }\r\n  .offset-xl-4 {\r\n    margin-left: 33.333333%;\r\n  }\r\n  .offset-xl-5 {\r\n    margin-left: 41.666667%;\r\n  }\r\n  .offset-xl-6 {\r\n    margin-left: 50%;\r\n  }\r\n  .offset-xl-7 {\r\n    margin-left: 58.333333%;\r\n  }\r\n  .offset-xl-8 {\r\n    margin-left: 66.666667%;\r\n  }\r\n  .offset-xl-9 {\r\n    margin-left: 75%;\r\n  }\r\n  .offset-xl-10 {\r\n    margin-left: 83.333333%;\r\n  }\r\n  .offset-xl-11 {\r\n    margin-left: 91.666667%;\r\n  }\r\n}\r\n\r\n.table {\r\n  width: 100%;\r\n  max-width: 100%;\r\n  margin-bottom: 1rem;\r\n  background-color: transparent;\r\n}\r\n\r\n.table th,\r\n.table td {\r\n  padding: 0.75rem;\r\n  vertical-align: top;\r\n  border-top: 1px solid #dee2e6;\r\n}\r\n\r\n.table thead th {\r\n  vertical-align: bottom;\r\n  border-bottom: 2px solid #dee2e6;\r\n}\r\n\r\n.table tbody + tbody {\r\n  border-top: 2px solid #dee2e6;\r\n}\r\n\r\n.table .table {\r\n  background-color: #fff;\r\n}\r\n\r\n.table-sm th,\r\n.table-sm td {\r\n  padding: 0.3rem;\r\n}\r\n\r\n.table-bordered {\r\n  border: 1px solid #dee2e6;\r\n}\r\n\r\n.table-bordered th,\r\n.table-bordered td {\r\n  border: 1px solid #dee2e6;\r\n}\r\n\r\n.table-bordered thead th,\r\n.table-bordered thead td {\r\n  border-bottom-width: 2px;\r\n}\r\n\r\n.table-striped tbody tr:nth-of-type(odd) {\r\n  background-color: rgba(0, 0, 0, 0.05);\r\n}\r\n\r\n.table-hover tbody tr:hover {\r\n  background-color: rgba(0, 0, 0, 0.075);\r\n}\r\n\r\n.table-primary,\r\n.table-primary > th,\r\n.table-primary > td {\r\n  background-color: #b8daff;\r\n}\r\n\r\n.table-hover .table-primary:hover {\r\n  background-color: #9fcdff;\r\n}\r\n\r\n.table-hover .table-primary:hover > td,\r\n.table-hover .table-primary:hover > th {\r\n  background-color: #9fcdff;\r\n}\r\n\r\n.table-secondary,\r\n.table-secondary > th,\r\n.table-secondary > td {\r\n  background-color: #d6d8db;\r\n}\r\n\r\n.table-hover .table-secondary:hover {\r\n  background-color: #c8cbcf;\r\n}\r\n\r\n.table-hover .table-secondary:hover > td,\r\n.table-hover .table-secondary:hover > th {\r\n  background-color: #c8cbcf;\r\n}\r\n\r\n.table-success,\r\n.table-success > th,\r\n.table-success > td {\r\n  background-color: #c3e6cb;\r\n}\r\n\r\n.table-hover .table-success:hover {\r\n  background-color: #b1dfbb;\r\n}\r\n\r\n.table-hover .table-success:hover > td,\r\n.table-hover .table-success:hover > th {\r\n  background-color: #b1dfbb;\r\n}\r\n\r\n.table-info,\r\n.table-info > th,\r\n.table-info > td {\r\n  background-color: #bee5eb;\r\n}\r\n\r\n.table-hover .table-info:hover {\r\n  background-color: #abdde5;\r\n}\r\n\r\n.table-hover .table-info:hover > td,\r\n.table-hover .table-info:hover > th {\r\n  background-color: #abdde5;\r\n}\r\n\r\n.table-warning,\r\n.table-warning > th,\r\n.table-warning > td {\r\n  background-color: #ffeeba;\r\n}\r\n\r\n.table-hover .table-warning:hover {\r\n  background-color: #ffe8a1;\r\n}\r\n\r\n.table-hover .table-warning:hover > td,\r\n.table-hover .table-warning:hover > th {\r\n  background-color: #ffe8a1;\r\n}\r\n\r\n.table-danger,\r\n.table-danger > th,\r\n.table-danger > td {\r\n  background-color: #f5c6cb;\r\n}\r\n\r\n.table-hover .table-danger:hover {\r\n  background-color: #f1b0b7;\r\n}\r\n\r\n.table-hover .table-danger:hover > td,\r\n.table-hover .table-danger:hover > th {\r\n  background-color: #f1b0b7;\r\n}\r\n\r\n.table-light,\r\n.table-light > th,\r\n.table-light > td {\r\n  background-color: #fdfdfe;\r\n}\r\n\r\n.table-hover .table-light:hover {\r\n  background-color: #ececf6;\r\n}\r\n\r\n.table-hover .table-light:hover > td,\r\n.table-hover .table-light:hover > th {\r\n  background-color: #ececf6;\r\n}\r\n\r\n.table-dark,\r\n.table-dark > th,\r\n.table-dark > td {\r\n  background-color: #c6c8ca;\r\n}\r\n\r\n.table-hover .table-dark:hover {\r\n  background-color: #b9bbbe;\r\n}\r\n\r\n.table-hover .table-dark:hover > td,\r\n.table-hover .table-dark:hover > th {\r\n  background-color: #b9bbbe;\r\n}\r\n\r\n.table-active,\r\n.table-active > th,\r\n.table-active > td {\r\n  background-color: rgba(0, 0, 0, 0.075);\r\n}\r\n\r\n.table-hover .table-active:hover {\r\n  background-color: rgba(0, 0, 0, 0.075);\r\n}\r\n\r\n.table-hover .table-active:hover > td,\r\n.table-hover .table-active:hover > th {\r\n  background-color: rgba(0, 0, 0, 0.075);\r\n}\r\n\r\n.table .thead-dark th {\r\n  color: #fff;\r\n  background-color: #212529;\r\n  border-color: #32383e;\r\n}\r\n\r\n.table .thead-light th {\r\n  color: #495057;\r\n  background-color: #e9ecef;\r\n  border-color: #dee2e6;\r\n}\r\n\r\n.table-dark {\r\n  color: #fff;\r\n  background-color: #212529;\r\n}\r\n\r\n.table-dark th,\r\n.table-dark td,\r\n.table-dark thead th {\r\n  border-color: #32383e;\r\n}\r\n\r\n.table-dark.table-bordered {\r\n  border: 0;\r\n}\r\n\r\n.table-dark.table-striped tbody tr:nth-of-type(odd) {\r\n  background-color: rgba(255, 255, 255, 0.05);\r\n}\r\n\r\n.table-dark.table-hover tbody tr:hover {\r\n  background-color: rgba(255, 255, 255, 0.075);\r\n}\r\n\r\n@media (max-width: 575.98px) {\r\n  .table-responsive-sm {\r\n    display: block;\r\n    width: 100%;\r\n    overflow-x: auto;\r\n    -webkit-overflow-scrolling: touch;\r\n    -ms-overflow-style: -ms-autohiding-scrollbar;\r\n  }\r\n  .table-responsive-sm > .table-bordered {\r\n    border: 0;\r\n  }\r\n}\r\n\r\n@media (max-width: 767.98px) {\r\n  .table-responsive-md {\r\n    display: block;\r\n    width: 100%;\r\n    overflow-x: auto;\r\n    -webkit-overflow-scrolling: touch;\r\n    -ms-overflow-style: -ms-autohiding-scrollbar;\r\n  }\r\n  .table-responsive-md > .table-bordered {\r\n    border: 0;\r\n  }\r\n}\r\n\r\n@media (max-width: 991.98px) {\r\n  .table-responsive-lg {\r\n    display: block;\r\n    width: 100%;\r\n    overflow-x: auto;\r\n    -webkit-overflow-scrolling: touch;\r\n    -ms-overflow-style: -ms-autohiding-scrollbar;\r\n  }\r\n  .table-responsive-lg > .table-bordered {\r\n    border: 0;\r\n  }\r\n}\r\n\r\n@media (max-width: 1199.98px) {\r\n  .table-responsive-xl {\r\n    display: block;\r\n    width: 100%;\r\n    overflow-x: auto;\r\n    -webkit-overflow-scrolling: touch;\r\n    -ms-overflow-style: -ms-autohiding-scrollbar;\r\n  }\r\n  .table-responsive-xl > .table-bordered {\r\n    border: 0;\r\n  }\r\n}\r\n\r\n.table-responsive {\r\n  display: block;\r\n  width: 100%;\r\n  overflow-x: auto;\r\n  -webkit-overflow-scrolling: touch;\r\n  -ms-overflow-style: -ms-autohiding-scrollbar;\r\n}\r\n\r\n.table-responsive > .table-bordered {\r\n  border: 0;\r\n}\r\n\r\n.form-control {\r\n  display: block;\r\n  width: 100%;\r\n  padding: 0.375rem 0.75rem;\r\n  font-size: 1rem;\r\n  line-height: 1.5;\r\n  color: #495057;\r\n  background-color: #fff;\r\n  background-clip: padding-box;\r\n  border: 1px solid #ced4da;\r\n  border-radius: 0.25rem;\r\n  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\r\n}\r\n\r\n.form-control::-ms-expand {\r\n  background-color: transparent;\r\n  border: 0;\r\n}\r\n\r\n.form-control:focus {\r\n  color: #495057;\r\n  background-color: #fff;\r\n  border-color: #80bdff;\r\n  outline: 0;\r\n  box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);\r\n}\r\n\r\n.form-control::-webkit-input-placeholder {\r\n  color: #6c757d;\r\n  opacity: 1;\r\n}\r\n\r\n.form-control::-moz-placeholder {\r\n  color: #6c757d;\r\n  opacity: 1;\r\n}\r\n\r\n.form-control:-ms-input-placeholder {\r\n  color: #6c757d;\r\n  opacity: 1;\r\n}\r\n\r\n.form-control::-ms-input-placeholder {\r\n  color: #6c757d;\r\n  opacity: 1;\r\n}\r\n\r\n.form-control::placeholder {\r\n  color: #6c757d;\r\n  opacity: 1;\r\n}\r\n\r\n.form-control:disabled, .form-control[readonly] {\r\n  background-color: #e9ecef;\r\n  opacity: 1;\r\n}\r\n\r\nselect.form-control:not([size]):not([multiple]) {\r\n  height: calc(2.25rem + 2px);\r\n}\r\n\r\nselect.form-control:focus::-ms-value {\r\n  color: #495057;\r\n  background-color: #fff;\r\n}\r\n\r\n.form-control-file,\r\n.form-control-range {\r\n  display: block;\r\n  width: 100%;\r\n}\r\n\r\n.col-form-label {\r\n  padding-top: calc(0.375rem + 1px);\r\n  padding-bottom: calc(0.375rem + 1px);\r\n  margin-bottom: 0;\r\n  font-size: inherit;\r\n  line-height: 1.5;\r\n}\r\n\r\n.col-form-label-lg {\r\n  padding-top: calc(0.5rem + 1px);\r\n  padding-bottom: calc(0.5rem + 1px);\r\n  font-size: 1.25rem;\r\n  line-height: 1.5;\r\n}\r\n\r\n.col-form-label-sm {\r\n  padding-top: calc(0.25rem + 1px);\r\n  padding-bottom: calc(0.25rem + 1px);\r\n  font-size: 0.875rem;\r\n  line-height: 1.5;\r\n}\r\n\r\n.form-control-plaintext {\r\n  display: block;\r\n  width: 100%;\r\n  padding-top: 0.375rem;\r\n  padding-bottom: 0.375rem;\r\n  margin-bottom: 0;\r\n  line-height: 1.5;\r\n  background-color: transparent;\r\n  border: solid transparent;\r\n  border-width: 1px 0;\r\n}\r\n\r\n.form-control-plaintext.form-control-sm, .input-group-sm > .form-control-plaintext.form-control,\r\n.input-group-sm > .input-group-prepend > .form-control-plaintext.input-group-text,\r\n.input-group-sm > .input-group-append > .form-control-plaintext.input-group-text,\r\n.input-group-sm > .input-group-prepend > .form-control-plaintext.btn,\r\n.input-group-sm > .input-group-append > .form-control-plaintext.btn, .form-control-plaintext.form-control-lg, .input-group-lg > .form-control-plaintext.form-control,\r\n.input-group-lg > .input-group-prepend > .form-control-plaintext.input-group-text,\r\n.input-group-lg > .input-group-append > .form-control-plaintext.input-group-text,\r\n.input-group-lg > .input-group-prepend > .form-control-plaintext.btn,\r\n.input-group-lg > .input-group-append > .form-control-plaintext.btn {\r\n  padding-right: 0;\r\n  padding-left: 0;\r\n}\r\n\r\n.form-control-sm, .input-group-sm > .form-control,\r\n.input-group-sm > .input-group-prepend > .input-group-text,\r\n.input-group-sm > .input-group-append > .input-group-text,\r\n.input-group-sm > .input-group-prepend > .btn,\r\n.input-group-sm > .input-group-append > .btn {\r\n  padding: 0.25rem 0.5rem;\r\n  font-size: 0.875rem;\r\n  line-height: 1.5;\r\n  border-radius: 0.2rem;\r\n}\r\n\r\nselect.form-control-sm:not([size]):not([multiple]), .input-group-sm > select.form-control:not([size]):not([multiple]),\r\n.input-group-sm > .input-group-prepend > select.input-group-text:not([size]):not([multiple]),\r\n.input-group-sm > .input-group-append > select.input-group-text:not([size]):not([multiple]),\r\n.input-group-sm > .input-group-prepend > select.btn:not([size]):not([multiple]),\r\n.input-group-sm > .input-group-append > select.btn:not([size]):not([multiple]) {\r\n  height: calc(1.8125rem + 2px);\r\n}\r\n\r\n.form-control-lg, .input-group-lg > .form-control,\r\n.input-group-lg > .input-group-prepend > .input-group-text,\r\n.input-group-lg > .input-group-append > .input-group-text,\r\n.input-group-lg > .input-group-prepend > .btn,\r\n.input-group-lg > .input-group-append > .btn {\r\n  padding: 0.5rem 1rem;\r\n  font-size: 1.25rem;\r\n  line-height: 1.5;\r\n  border-radius: 0.3rem;\r\n}\r\n\r\nselect.form-control-lg:not([size]):not([multiple]), .input-group-lg > select.form-control:not([size]):not([multiple]),\r\n.input-group-lg > .input-group-prepend > select.input-group-text:not([size]):not([multiple]),\r\n.input-group-lg > .input-group-append > select.input-group-text:not([size]):not([multiple]),\r\n.input-group-lg > .input-group-prepend > select.btn:not([size]):not([multiple]),\r\n.input-group-lg > .input-group-append > select.btn:not([size]):not([multiple]) {\r\n  height: calc(2.875rem + 2px);\r\n}\r\n\r\n.form-group {\r\n  margin-bottom: 1rem;\r\n}\r\n\r\n.form-text {\r\n  display: block;\r\n  margin-top: 0.25rem;\r\n}\r\n\r\n.form-row {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -ms-flex-wrap: wrap;\r\n  flex-wrap: wrap;\r\n  margin-right: -5px;\r\n  margin-left: -5px;\r\n}\r\n\r\n.form-row > .col,\r\n.form-row > [class*=\"col-\"] {\r\n  padding-right: 5px;\r\n  padding-left: 5px;\r\n}\r\n\r\n.form-check {\r\n  position: relative;\r\n  display: block;\r\n  padding-left: 1.25rem;\r\n}\r\n\r\n.form-check-input {\r\n  position: absolute;\r\n  margin-top: 0.3rem;\r\n  margin-left: -1.25rem;\r\n}\r\n\r\n.form-check-input:disabled ~ .form-check-label {\r\n  color: #6c757d;\r\n}\r\n\r\n.form-check-label {\r\n  margin-bottom: 0;\r\n}\r\n\r\n.form-check-inline {\r\n  display: -webkit-inline-box;\r\n  display: -ms-inline-flexbox;\r\n  display: inline-flex;\r\n  -webkit-box-align: center;\r\n  -ms-flex-align: center;\r\n  align-items: center;\r\n  padding-left: 0;\r\n  margin-right: 0.75rem;\r\n}\r\n\r\n.form-check-inline .form-check-input {\r\n  position: static;\r\n  margin-top: 0;\r\n  margin-right: 0.3125rem;\r\n  margin-left: 0;\r\n}\r\n\r\n.valid-feedback {\r\n  display: none;\r\n  width: 100%;\r\n  margin-top: 0.25rem;\r\n  font-size: 80%;\r\n  color: #28a745;\r\n}\r\n\r\n.valid-tooltip {\r\n  position: absolute;\r\n  top: 100%;\r\n  z-index: 5;\r\n  display: none;\r\n  max-width: 100%;\r\n  padding: .5rem;\r\n  margin-top: .1rem;\r\n  font-size: .875rem;\r\n  line-height: 1;\r\n  color: #fff;\r\n  background-color: rgba(40, 167, 69, 0.8);\r\n  border-radius: .2rem;\r\n}\r\n\r\n.was-validated .form-control:valid, .form-control.is-valid, .was-validated\r\n.custom-select:valid,\r\n.custom-select.is-valid {\r\n  border-color: #28a745;\r\n}\r\n\r\n.was-validated .form-control:valid:focus, .form-control.is-valid:focus, .was-validated\r\n.custom-select:valid:focus,\r\n.custom-select.is-valid:focus {\r\n  border-color: #28a745;\r\n  box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.25);\r\n}\r\n\r\n.was-validated .form-control:valid ~ .valid-feedback,\r\n.was-validated .form-control:valid ~ .valid-tooltip, .form-control.is-valid ~ .valid-feedback,\r\n.form-control.is-valid ~ .valid-tooltip, .was-validated\r\n.custom-select:valid ~ .valid-feedback,\r\n.was-validated\r\n.custom-select:valid ~ .valid-tooltip,\r\n.custom-select.is-valid ~ .valid-feedback,\r\n.custom-select.is-valid ~ .valid-tooltip {\r\n  display: block;\r\n}\r\n\r\n.was-validated .form-check-input:valid ~ .form-check-label, .form-check-input.is-valid ~ .form-check-label {\r\n  color: #28a745;\r\n}\r\n\r\n.was-validated .form-check-input:valid ~ .valid-feedback,\r\n.was-validated .form-check-input:valid ~ .valid-tooltip, .form-check-input.is-valid ~ .valid-feedback,\r\n.form-check-input.is-valid ~ .valid-tooltip {\r\n  display: block;\r\n}\r\n\r\n.was-validated .custom-control-input:valid ~ .custom-control-label, .custom-control-input.is-valid ~ .custom-control-label {\r\n  color: #28a745;\r\n}\r\n\r\n.was-validated .custom-control-input:valid ~ .custom-control-label::before, .custom-control-input.is-valid ~ .custom-control-label::before {\r\n  background-color: #71dd8a;\r\n}\r\n\r\n.was-validated .custom-control-input:valid ~ .valid-feedback,\r\n.was-validated .custom-control-input:valid ~ .valid-tooltip, .custom-control-input.is-valid ~ .valid-feedback,\r\n.custom-control-input.is-valid ~ .valid-tooltip {\r\n  display: block;\r\n}\r\n\r\n.was-validated .custom-control-input:valid:checked ~ .custom-control-label::before, .custom-control-input.is-valid:checked ~ .custom-control-label::before {\r\n  background-color: #34ce57;\r\n}\r\n\r\n.was-validated .custom-control-input:valid:focus ~ .custom-control-label::before, .custom-control-input.is-valid:focus ~ .custom-control-label::before {\r\n  box-shadow: 0 0 0 1px #fff, 0 0 0 0.2rem rgba(40, 167, 69, 0.25);\r\n}\r\n\r\n.was-validated .custom-file-input:valid ~ .custom-file-label, .custom-file-input.is-valid ~ .custom-file-label {\r\n  border-color: #28a745;\r\n}\r\n\r\n.was-validated .custom-file-input:valid ~ .custom-file-label::before, .custom-file-input.is-valid ~ .custom-file-label::before {\r\n  border-color: inherit;\r\n}\r\n\r\n.was-validated .custom-file-input:valid ~ .valid-feedback,\r\n.was-validated .custom-file-input:valid ~ .valid-tooltip, .custom-file-input.is-valid ~ .valid-feedback,\r\n.custom-file-input.is-valid ~ .valid-tooltip {\r\n  display: block;\r\n}\r\n\r\n.was-validated .custom-file-input:valid:focus ~ .custom-file-label, .custom-file-input.is-valid:focus ~ .custom-file-label {\r\n  box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.25);\r\n}\r\n\r\n.invalid-feedback {\r\n  display: none;\r\n  width: 100%;\r\n  margin-top: 0.25rem;\r\n  font-size: 80%;\r\n  color: #dc3545;\r\n}\r\n\r\n.invalid-tooltip {\r\n  position: absolute;\r\n  top: 100%;\r\n  z-index: 5;\r\n  display: none;\r\n  max-width: 100%;\r\n  padding: .5rem;\r\n  margin-top: .1rem;\r\n  font-size: .875rem;\r\n  line-height: 1;\r\n  color: #fff;\r\n  background-color: rgba(220, 53, 69, 0.8);\r\n  border-radius: .2rem;\r\n}\r\n\r\n.was-validated .form-control:invalid, .form-control.is-invalid, .was-validated\r\n.custom-select:invalid,\r\n.custom-select.is-invalid {\r\n  border-color: #dc3545;\r\n}\r\n\r\n.was-validated .form-control:invalid:focus, .form-control.is-invalid:focus, .was-validated\r\n.custom-select:invalid:focus,\r\n.custom-select.is-invalid:focus {\r\n  border-color: #dc3545;\r\n  box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.25);\r\n}\r\n\r\n.was-validated .form-control:invalid ~ .invalid-feedback,\r\n.was-validated .form-control:invalid ~ .invalid-tooltip, .form-control.is-invalid ~ .invalid-feedback,\r\n.form-control.is-invalid ~ .invalid-tooltip, .was-validated\r\n.custom-select:invalid ~ .invalid-feedback,\r\n.was-validated\r\n.custom-select:invalid ~ .invalid-tooltip,\r\n.custom-select.is-invalid ~ .invalid-feedback,\r\n.custom-select.is-invalid ~ .invalid-tooltip {\r\n  display: block;\r\n}\r\n\r\n.was-validated .form-check-input:invalid ~ .form-check-label, .form-check-input.is-invalid ~ .form-check-label {\r\n  color: #dc3545;\r\n}\r\n\r\n.was-validated .form-check-input:invalid ~ .invalid-feedback,\r\n.was-validated .form-check-input:invalid ~ .invalid-tooltip, .form-check-input.is-invalid ~ .invalid-feedback,\r\n.form-check-input.is-invalid ~ .invalid-tooltip {\r\n  display: block;\r\n}\r\n\r\n.was-validated .custom-control-input:invalid ~ .custom-control-label, .custom-control-input.is-invalid ~ .custom-control-label {\r\n  color: #dc3545;\r\n}\r\n\r\n.was-validated .custom-control-input:invalid ~ .custom-control-label::before, .custom-control-input.is-invalid ~ .custom-control-label::before {\r\n  background-color: #efa2a9;\r\n}\r\n\r\n.was-validated .custom-control-input:invalid ~ .invalid-feedback,\r\n.was-validated .custom-control-input:invalid ~ .invalid-tooltip, .custom-control-input.is-invalid ~ .invalid-feedback,\r\n.custom-control-input.is-invalid ~ .invalid-tooltip {\r\n  display: block;\r\n}\r\n\r\n.was-validated .custom-control-input:invalid:checked ~ .custom-control-label::before, .custom-control-input.is-invalid:checked ~ .custom-control-label::before {\r\n  background-color: #e4606d;\r\n}\r\n\r\n.was-validated .custom-control-input:invalid:focus ~ .custom-control-label::before, .custom-control-input.is-invalid:focus ~ .custom-control-label::before {\r\n  box-shadow: 0 0 0 1px #fff, 0 0 0 0.2rem rgba(220, 53, 69, 0.25);\r\n}\r\n\r\n.was-validated .custom-file-input:invalid ~ .custom-file-label, .custom-file-input.is-invalid ~ .custom-file-label {\r\n  border-color: #dc3545;\r\n}\r\n\r\n.was-validated .custom-file-input:invalid ~ .custom-file-label::before, .custom-file-input.is-invalid ~ .custom-file-label::before {\r\n  border-color: inherit;\r\n}\r\n\r\n.was-validated .custom-file-input:invalid ~ .invalid-feedback,\r\n.was-validated .custom-file-input:invalid ~ .invalid-tooltip, .custom-file-input.is-invalid ~ .invalid-feedback,\r\n.custom-file-input.is-invalid ~ .invalid-tooltip {\r\n  display: block;\r\n}\r\n\r\n.was-validated .custom-file-input:invalid:focus ~ .custom-file-label, .custom-file-input.is-invalid:focus ~ .custom-file-label {\r\n  box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.25);\r\n}\r\n\r\n.form-inline {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-orient: horizontal;\r\n  -webkit-box-direction: normal;\r\n  -ms-flex-flow: row wrap;\r\n  flex-flow: row wrap;\r\n  -webkit-box-align: center;\r\n  -ms-flex-align: center;\r\n  align-items: center;\r\n}\r\n\r\n.form-inline .form-check {\r\n  width: 100%;\r\n}\r\n\r\n@media (min-width: 576px) {\r\n  .form-inline label {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-align: center;\r\n    -ms-flex-align: center;\r\n    align-items: center;\r\n    -webkit-box-pack: center;\r\n    -ms-flex-pack: center;\r\n    justify-content: center;\r\n    margin-bottom: 0;\r\n  }\r\n  .form-inline .form-group {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-flex: 0;\r\n    -ms-flex: 0 0 auto;\r\n    flex: 0 0 auto;\r\n    -webkit-box-orient: horizontal;\r\n    -webkit-box-direction: normal;\r\n    -ms-flex-flow: row wrap;\r\n    flex-flow: row wrap;\r\n    -webkit-box-align: center;\r\n    -ms-flex-align: center;\r\n    align-items: center;\r\n    margin-bottom: 0;\r\n  }\r\n  .form-inline .form-control {\r\n    display: inline-block;\r\n    width: auto;\r\n    vertical-align: middle;\r\n  }\r\n  .form-inline .form-control-plaintext {\r\n    display: inline-block;\r\n  }\r\n  .form-inline .input-group {\r\n    width: auto;\r\n  }\r\n  .form-inline .form-check {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-align: center;\r\n    -ms-flex-align: center;\r\n    align-items: center;\r\n    -webkit-box-pack: center;\r\n    -ms-flex-pack: center;\r\n    justify-content: center;\r\n    width: auto;\r\n    padding-left: 0;\r\n  }\r\n  .form-inline .form-check-input {\r\n    position: relative;\r\n    margin-top: 0;\r\n    margin-right: 0.25rem;\r\n    margin-left: 0;\r\n  }\r\n  .form-inline .custom-control {\r\n    -webkit-box-align: center;\r\n    -ms-flex-align: center;\r\n    align-items: center;\r\n    -webkit-box-pack: center;\r\n    -ms-flex-pack: center;\r\n    justify-content: center;\r\n  }\r\n  .form-inline .custom-control-label {\r\n    margin-bottom: 0;\r\n  }\r\n}\r\n\r\n.btn {\r\n  display: inline-block;\r\n  font-weight: 400;\r\n  text-align: center;\r\n  white-space: nowrap;\r\n  vertical-align: middle;\r\n  -webkit-user-select: none;\r\n  -moz-user-select: none;\r\n  -ms-user-select: none;\r\n  user-select: none;\r\n  border: 1px solid transparent;\r\n  padding: 0.375rem 0.75rem;\r\n  font-size: 1rem;\r\n  line-height: 1.5;\r\n  border-radius: 0.25rem;\r\n  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\r\n}\r\n\r\n.btn:hover, .btn:focus {\r\n  text-decoration: none;\r\n}\r\n\r\n.btn:focus, .btn.focus {\r\n  outline: 0;\r\n  box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);\r\n}\r\n\r\n.btn.disabled, .btn:disabled {\r\n  opacity: 0.65;\r\n}\r\n\r\n.btn:not(:disabled):not(.disabled) {\r\n  cursor: pointer;\r\n}\r\n\r\n.btn:not(:disabled):not(.disabled):active, .btn:not(:disabled):not(.disabled).active {\r\n  background-image: none;\r\n}\r\n\r\na.btn.disabled,\r\nfieldset:disabled a.btn {\r\n  pointer-events: none;\r\n}\r\n\r\n.btn-primary {\r\n  color: #fff;\r\n  background-color: #007bff;\r\n  border-color: #007bff;\r\n}\r\n\r\n.btn-primary:hover {\r\n  color: #fff;\r\n  background-color: #0069d9;\r\n  border-color: #0062cc;\r\n}\r\n\r\n.btn-primary:focus, .btn-primary.focus {\r\n  box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.5);\r\n}\r\n\r\n.btn-primary.disabled, .btn-primary:disabled {\r\n  color: #fff;\r\n  background-color: #007bff;\r\n  border-color: #007bff;\r\n}\r\n\r\n.btn-primary:not(:disabled):not(.disabled):active, .btn-primary:not(:disabled):not(.disabled).active,\r\n.show > .btn-primary.dropdown-toggle {\r\n  color: #fff;\r\n  background-color: #0062cc;\r\n  border-color: #005cbf;\r\n}\r\n\r\n.btn-primary:not(:disabled):not(.disabled):active:focus, .btn-primary:not(:disabled):not(.disabled).active:focus,\r\n.show > .btn-primary.dropdown-toggle:focus {\r\n  box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.5);\r\n}\r\n\r\n.btn-secondary {\r\n  color: #fff;\r\n  background-color: #6c757d;\r\n  border-color: #6c757d;\r\n}\r\n\r\n.btn-secondary:hover {\r\n  color: #fff;\r\n  background-color: #5a6268;\r\n  border-color: #545b62;\r\n}\r\n\r\n.btn-secondary:focus, .btn-secondary.focus {\r\n  box-shadow: 0 0 0 0.2rem rgba(108, 117, 125, 0.5);\r\n}\r\n\r\n.btn-secondary.disabled, .btn-secondary:disabled {\r\n  color: #fff;\r\n  background-color: #6c757d;\r\n  border-color: #6c757d;\r\n}\r\n\r\n.btn-secondary:not(:disabled):not(.disabled):active, .btn-secondary:not(:disabled):not(.disabled).active,\r\n.show > .btn-secondary.dropdown-toggle {\r\n  color: #fff;\r\n  background-color: #545b62;\r\n  border-color: #4e555b;\r\n}\r\n\r\n.btn-secondary:not(:disabled):not(.disabled):active:focus, .btn-secondary:not(:disabled):not(.disabled).active:focus,\r\n.show > .btn-secondary.dropdown-toggle:focus {\r\n  box-shadow: 0 0 0 0.2rem rgba(108, 117, 125, 0.5);\r\n}\r\n\r\n.btn-success {\r\n  color: #fff;\r\n  background-color: #28a745;\r\n  border-color: #28a745;\r\n}\r\n\r\n.btn-success:hover {\r\n  color: #fff;\r\n  background-color: #218838;\r\n  border-color: #1e7e34;\r\n}\r\n\r\n.btn-success:focus, .btn-success.focus {\r\n  box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.5);\r\n}\r\n\r\n.btn-success.disabled, .btn-success:disabled {\r\n  color: #fff;\r\n  background-color: #28a745;\r\n  border-color: #28a745;\r\n}\r\n\r\n.btn-success:not(:disabled):not(.disabled):active, .btn-success:not(:disabled):not(.disabled).active,\r\n.show > .btn-success.dropdown-toggle {\r\n  color: #fff;\r\n  background-color: #1e7e34;\r\n  border-color: #1c7430;\r\n}\r\n\r\n.btn-success:not(:disabled):not(.disabled):active:focus, .btn-success:not(:disabled):not(.disabled).active:focus,\r\n.show > .btn-success.dropdown-toggle:focus {\r\n  box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.5);\r\n}\r\n\r\n.btn-info {\r\n  color: #fff;\r\n  background-color: #17a2b8;\r\n  border-color: #17a2b8;\r\n}\r\n\r\n.btn-info:hover {\r\n  color: #fff;\r\n  background-color: #138496;\r\n  border-color: #117a8b;\r\n}\r\n\r\n.btn-info:focus, .btn-info.focus {\r\n  box-shadow: 0 0 0 0.2rem rgba(23, 162, 184, 0.5);\r\n}\r\n\r\n.btn-info.disabled, .btn-info:disabled {\r\n  color: #fff;\r\n  background-color: #17a2b8;\r\n  border-color: #17a2b8;\r\n}\r\n\r\n.btn-info:not(:disabled):not(.disabled):active, .btn-info:not(:disabled):not(.disabled).active,\r\n.show > .btn-info.dropdown-toggle {\r\n  color: #fff;\r\n  background-color: #117a8b;\r\n  border-color: #10707f;\r\n}\r\n\r\n.btn-info:not(:disabled):not(.disabled):active:focus, .btn-info:not(:disabled):not(.disabled).active:focus,\r\n.show > .btn-info.dropdown-toggle:focus {\r\n  box-shadow: 0 0 0 0.2rem rgba(23, 162, 184, 0.5);\r\n}\r\n\r\n.btn-warning {\r\n  color: #212529;\r\n  background-color: #ffc107;\r\n  border-color: #ffc107;\r\n}\r\n\r\n.btn-warning:hover {\r\n  color: #212529;\r\n  background-color: #e0a800;\r\n  border-color: #d39e00;\r\n}\r\n\r\n.btn-warning:focus, .btn-warning.focus {\r\n  box-shadow: 0 0 0 0.2rem rgba(255, 193, 7, 0.5);\r\n}\r\n\r\n.btn-warning.disabled, .btn-warning:disabled {\r\n  color: #212529;\r\n  background-color: #ffc107;\r\n  border-color: #ffc107;\r\n}\r\n\r\n.btn-warning:not(:disabled):not(.disabled):active, .btn-warning:not(:disabled):not(.disabled).active,\r\n.show > .btn-warning.dropdown-toggle {\r\n  color: #212529;\r\n  background-color: #d39e00;\r\n  border-color: #c69500;\r\n}\r\n\r\n.btn-warning:not(:disabled):not(.disabled):active:focus, .btn-warning:not(:disabled):not(.disabled).active:focus,\r\n.show > .btn-warning.dropdown-toggle:focus {\r\n  box-shadow: 0 0 0 0.2rem rgba(255, 193, 7, 0.5);\r\n}\r\n\r\n.btn-danger {\r\n  color: #fff;\r\n  background-color: #dc3545;\r\n  border-color: #dc3545;\r\n}\r\n\r\n.btn-danger:hover {\r\n  color: #fff;\r\n  background-color: #c82333;\r\n  border-color: #bd2130;\r\n}\r\n\r\n.btn-danger:focus, .btn-danger.focus {\r\n  box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.5);\r\n}\r\n\r\n.btn-danger.disabled, .btn-danger:disabled {\r\n  color: #fff;\r\n  background-color: #dc3545;\r\n  border-color: #dc3545;\r\n}\r\n\r\n.btn-danger:not(:disabled):not(.disabled):active, .btn-danger:not(:disabled):not(.disabled).active,\r\n.show > .btn-danger.dropdown-toggle {\r\n  color: #fff;\r\n  background-color: #bd2130;\r\n  border-color: #b21f2d;\r\n}\r\n\r\n.btn-danger:not(:disabled):not(.disabled):active:focus, .btn-danger:not(:disabled):not(.disabled).active:focus,\r\n.show > .btn-danger.dropdown-toggle:focus {\r\n  box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.5);\r\n}\r\n\r\n.btn-light {\r\n  color: #212529;\r\n  background-color: #f8f9fa;\r\n  border-color: #f8f9fa;\r\n}\r\n\r\n.btn-light:hover {\r\n  color: #212529;\r\n  background-color: #e2e6ea;\r\n  border-color: #dae0e5;\r\n}\r\n\r\n.btn-light:focus, .btn-light.focus {\r\n  box-shadow: 0 0 0 0.2rem rgba(248, 249, 250, 0.5);\r\n}\r\n\r\n.btn-light.disabled, .btn-light:disabled {\r\n  color: #212529;\r\n  background-color: #f8f9fa;\r\n  border-color: #f8f9fa;\r\n}\r\n\r\n.btn-light:not(:disabled):not(.disabled):active, .btn-light:not(:disabled):not(.disabled).active,\r\n.show > .btn-light.dropdown-toggle {\r\n  color: #212529;\r\n  background-color: #dae0e5;\r\n  border-color: #d3d9df;\r\n}\r\n\r\n.btn-light:not(:disabled):not(.disabled):active:focus, .btn-light:not(:disabled):not(.disabled).active:focus,\r\n.show > .btn-light.dropdown-toggle:focus {\r\n  box-shadow: 0 0 0 0.2rem rgba(248, 249, 250, 0.5);\r\n}\r\n\r\n.btn-dark {\r\n  color: #fff;\r\n  background-color: #343a40;\r\n  border-color: #343a40;\r\n}\r\n\r\n.btn-dark:hover {\r\n  color: #fff;\r\n  background-color: #23272b;\r\n  border-color: #1d2124;\r\n}\r\n\r\n.btn-dark:focus, .btn-dark.focus {\r\n  box-shadow: 0 0 0 0.2rem rgba(52, 58, 64, 0.5);\r\n}\r\n\r\n.btn-dark.disabled, .btn-dark:disabled {\r\n  color: #fff;\r\n  background-color: #343a40;\r\n  border-color: #343a40;\r\n}\r\n\r\n.btn-dark:not(:disabled):not(.disabled):active, .btn-dark:not(:disabled):not(.disabled).active,\r\n.show > .btn-dark.dropdown-toggle {\r\n  color: #fff;\r\n  background-color: #1d2124;\r\n  border-color: #171a1d;\r\n}\r\n\r\n.btn-dark:not(:disabled):not(.disabled):active:focus, .btn-dark:not(:disabled):not(.disabled).active:focus,\r\n.show > .btn-dark.dropdown-toggle:focus {\r\n  box-shadow: 0 0 0 0.2rem rgba(52, 58, 64, 0.5);\r\n}\r\n\r\n.btn-outline-primary {\r\n  color: #007bff;\r\n  background-color: transparent;\r\n  background-image: none;\r\n  border-color: #007bff;\r\n}\r\n\r\n.btn-outline-primary:hover {\r\n  color: #fff;\r\n  background-color: #007bff;\r\n  border-color: #007bff;\r\n}\r\n\r\n.btn-outline-primary:focus, .btn-outline-primary.focus {\r\n  box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.5);\r\n}\r\n\r\n.btn-outline-primary.disabled, .btn-outline-primary:disabled {\r\n  color: #007bff;\r\n  background-color: transparent;\r\n}\r\n\r\n.btn-outline-primary:not(:disabled):not(.disabled):active, .btn-outline-primary:not(:disabled):not(.disabled).active,\r\n.show > .btn-outline-primary.dropdown-toggle {\r\n  color: #fff;\r\n  background-color: #007bff;\r\n  border-color: #007bff;\r\n}\r\n\r\n.btn-outline-primary:not(:disabled):not(.disabled):active:focus, .btn-outline-primary:not(:disabled):not(.disabled).active:focus,\r\n.show > .btn-outline-primary.dropdown-toggle:focus {\r\n  box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.5);\r\n}\r\n\r\n.btn-outline-secondary {\r\n  color: #6c757d;\r\n  background-color: transparent;\r\n  background-image: none;\r\n  border-color: #6c757d;\r\n}\r\n\r\n.btn-outline-secondary:hover {\r\n  color: #fff;\r\n  background-color: #6c757d;\r\n  border-color: #6c757d;\r\n}\r\n\r\n.btn-outline-secondary:focus, .btn-outline-secondary.focus {\r\n  box-shadow: 0 0 0 0.2rem rgba(108, 117, 125, 0.5);\r\n}\r\n\r\n.btn-outline-secondary.disabled, .btn-outline-secondary:disabled {\r\n  color: #6c757d;\r\n  background-color: transparent;\r\n}\r\n\r\n.btn-outline-secondary:not(:disabled):not(.disabled):active, .btn-outline-secondary:not(:disabled):not(.disabled).active,\r\n.show > .btn-outline-secondary.dropdown-toggle {\r\n  color: #fff;\r\n  background-color: #6c757d;\r\n  border-color: #6c757d;\r\n}\r\n\r\n.btn-outline-secondary:not(:disabled):not(.disabled):active:focus, .btn-outline-secondary:not(:disabled):not(.disabled).active:focus,\r\n.show > .btn-outline-secondary.dropdown-toggle:focus {\r\n  box-shadow: 0 0 0 0.2rem rgba(108, 117, 125, 0.5);\r\n}\r\n\r\n.btn-outline-success {\r\n  color: #28a745;\r\n  background-color: transparent;\r\n  background-image: none;\r\n  border-color: #28a745;\r\n}\r\n\r\n.btn-outline-success:hover {\r\n  color: #fff;\r\n  background-color: #28a745;\r\n  border-color: #28a745;\r\n}\r\n\r\n.btn-outline-success:focus, .btn-outline-success.focus {\r\n  box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.5);\r\n}\r\n\r\n.btn-outline-success.disabled, .btn-outline-success:disabled {\r\n  color: #28a745;\r\n  background-color: transparent;\r\n}\r\n\r\n.btn-outline-success:not(:disabled):not(.disabled):active, .btn-outline-success:not(:disabled):not(.disabled).active,\r\n.show > .btn-outline-success.dropdown-toggle {\r\n  color: #fff;\r\n  background-color: #28a745;\r\n  border-color: #28a745;\r\n}\r\n\r\n.btn-outline-success:not(:disabled):not(.disabled):active:focus, .btn-outline-success:not(:disabled):not(.disabled).active:focus,\r\n.show > .btn-outline-success.dropdown-toggle:focus {\r\n  box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.5);\r\n}\r\n\r\n.btn-outline-info {\r\n  color: #17a2b8;\r\n  background-color: transparent;\r\n  background-image: none;\r\n  border-color: #17a2b8;\r\n}\r\n\r\n.btn-outline-info:hover {\r\n  color: #fff;\r\n  background-color: #17a2b8;\r\n  border-color: #17a2b8;\r\n}\r\n\r\n.btn-outline-info:focus, .btn-outline-info.focus {\r\n  box-shadow: 0 0 0 0.2rem rgba(23, 162, 184, 0.5);\r\n}\r\n\r\n.btn-outline-info.disabled, .btn-outline-info:disabled {\r\n  color: #17a2b8;\r\n  background-color: transparent;\r\n}\r\n\r\n.btn-outline-info:not(:disabled):not(.disabled):active, .btn-outline-info:not(:disabled):not(.disabled).active,\r\n.show > .btn-outline-info.dropdown-toggle {\r\n  color: #fff;\r\n  background-color: #17a2b8;\r\n  border-color: #17a2b8;\r\n}\r\n\r\n.btn-outline-info:not(:disabled):not(.disabled):active:focus, .btn-outline-info:not(:disabled):not(.disabled).active:focus,\r\n.show > .btn-outline-info.dropdown-toggle:focus {\r\n  box-shadow: 0 0 0 0.2rem rgba(23, 162, 184, 0.5);\r\n}\r\n\r\n.btn-outline-warning {\r\n  color: #ffc107;\r\n  background-color: transparent;\r\n  background-image: none;\r\n  border-color: #ffc107;\r\n}\r\n\r\n.btn-outline-warning:hover {\r\n  color: #212529;\r\n  background-color: #ffc107;\r\n  border-color: #ffc107;\r\n}\r\n\r\n.btn-outline-warning:focus, .btn-outline-warning.focus {\r\n  box-shadow: 0 0 0 0.2rem rgba(255, 193, 7, 0.5);\r\n}\r\n\r\n.btn-outline-warning.disabled, .btn-outline-warning:disabled {\r\n  color: #ffc107;\r\n  background-color: transparent;\r\n}\r\n\r\n.btn-outline-warning:not(:disabled):not(.disabled):active, .btn-outline-warning:not(:disabled):not(.disabled).active,\r\n.show > .btn-outline-warning.dropdown-toggle {\r\n  color: #212529;\r\n  background-color: #ffc107;\r\n  border-color: #ffc107;\r\n}\r\n\r\n.btn-outline-warning:not(:disabled):not(.disabled):active:focus, .btn-outline-warning:not(:disabled):not(.disabled).active:focus,\r\n.show > .btn-outline-warning.dropdown-toggle:focus {\r\n  box-shadow: 0 0 0 0.2rem rgba(255, 193, 7, 0.5);\r\n}\r\n\r\n.btn-outline-danger {\r\n  color: #dc3545;\r\n  background-color: transparent;\r\n  background-image: none;\r\n  border-color: #dc3545;\r\n}\r\n\r\n.btn-outline-danger:hover {\r\n  color: #fff;\r\n  background-color: #dc3545;\r\n  border-color: #dc3545;\r\n}\r\n\r\n.btn-outline-danger:focus, .btn-outline-danger.focus {\r\n  box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.5);\r\n}\r\n\r\n.btn-outline-danger.disabled, .btn-outline-danger:disabled {\r\n  color: #dc3545;\r\n  background-color: transparent;\r\n}\r\n\r\n.btn-outline-danger:not(:disabled):not(.disabled):active, .btn-outline-danger:not(:disabled):not(.disabled).active,\r\n.show > .btn-outline-danger.dropdown-toggle {\r\n  color: #fff;\r\n  background-color: #dc3545;\r\n  border-color: #dc3545;\r\n}\r\n\r\n.btn-outline-danger:not(:disabled):not(.disabled):active:focus, .btn-outline-danger:not(:disabled):not(.disabled).active:focus,\r\n.show > .btn-outline-danger.dropdown-toggle:focus {\r\n  box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.5);\r\n}\r\n\r\n.btn-outline-light {\r\n  color: #f8f9fa;\r\n  background-color: transparent;\r\n  background-image: none;\r\n  border-color: #f8f9fa;\r\n}\r\n\r\n.btn-outline-light:hover {\r\n  color: #212529;\r\n  background-color: #f8f9fa;\r\n  border-color: #f8f9fa;\r\n}\r\n\r\n.btn-outline-light:focus, .btn-outline-light.focus {\r\n  box-shadow: 0 0 0 0.2rem rgba(248, 249, 250, 0.5);\r\n}\r\n\r\n.btn-outline-light.disabled, .btn-outline-light:disabled {\r\n  color: #f8f9fa;\r\n  background-color: transparent;\r\n}\r\n\r\n.btn-outline-light:not(:disabled):not(.disabled):active, .btn-outline-light:not(:disabled):not(.disabled).active,\r\n.show > .btn-outline-light.dropdown-toggle {\r\n  color: #212529;\r\n  background-color: #f8f9fa;\r\n  border-color: #f8f9fa;\r\n}\r\n\r\n.btn-outline-light:not(:disabled):not(.disabled):active:focus, .btn-outline-light:not(:disabled):not(.disabled).active:focus,\r\n.show > .btn-outline-light.dropdown-toggle:focus {\r\n  box-shadow: 0 0 0 0.2rem rgba(248, 249, 250, 0.5);\r\n}\r\n\r\n.btn-outline-dark {\r\n  color: #343a40;\r\n  background-color: transparent;\r\n  background-image: none;\r\n  border-color: #343a40;\r\n}\r\n\r\n.btn-outline-dark:hover {\r\n  color: #fff;\r\n  background-color: #343a40;\r\n  border-color: #343a40;\r\n}\r\n\r\n.btn-outline-dark:focus, .btn-outline-dark.focus {\r\n  box-shadow: 0 0 0 0.2rem rgba(52, 58, 64, 0.5);\r\n}\r\n\r\n.btn-outline-dark.disabled, .btn-outline-dark:disabled {\r\n  color: #343a40;\r\n  background-color: transparent;\r\n}\r\n\r\n.btn-outline-dark:not(:disabled):not(.disabled):active, .btn-outline-dark:not(:disabled):not(.disabled).active,\r\n.show > .btn-outline-dark.dropdown-toggle {\r\n  color: #fff;\r\n  background-color: #343a40;\r\n  border-color: #343a40;\r\n}\r\n\r\n.btn-outline-dark:not(:disabled):not(.disabled):active:focus, .btn-outline-dark:not(:disabled):not(.disabled).active:focus,\r\n.show > .btn-outline-dark.dropdown-toggle:focus {\r\n  box-shadow: 0 0 0 0.2rem rgba(52, 58, 64, 0.5);\r\n}\r\n\r\n.btn-link {\r\n  font-weight: 400;\r\n  color: #007bff;\r\n  background-color: transparent;\r\n}\r\n\r\n.btn-link:hover {\r\n  color: #0056b3;\r\n  text-decoration: underline;\r\n  background-color: transparent;\r\n  border-color: transparent;\r\n}\r\n\r\n.btn-link:focus, .btn-link.focus {\r\n  text-decoration: underline;\r\n  border-color: transparent;\r\n  box-shadow: none;\r\n}\r\n\r\n.btn-link:disabled, .btn-link.disabled {\r\n  color: #6c757d;\r\n}\r\n\r\n.btn-lg, .btn-group-lg > .btn {\r\n  padding: 0.5rem 1rem;\r\n  font-size: 1.25rem;\r\n  line-height: 1.5;\r\n  border-radius: 0.3rem;\r\n}\r\n\r\n.btn-sm, .btn-group-sm > .btn {\r\n  padding: 0.25rem 0.5rem;\r\n  font-size: 0.875rem;\r\n  line-height: 1.5;\r\n  border-radius: 0.2rem;\r\n}\r\n\r\n.btn-block {\r\n  display: block;\r\n  width: 100%;\r\n}\r\n\r\n.btn-block + .btn-block {\r\n  margin-top: 0.5rem;\r\n}\r\n\r\ninput[type=\"submit\"].btn-block,\r\ninput[type=\"reset\"].btn-block,\r\ninput[type=\"button\"].btn-block {\r\n  width: 100%;\r\n}\r\n\r\n.fade {\r\n  opacity: 0;\r\n  transition: opacity 0.15s linear;\r\n}\r\n\r\n.fade.show {\r\n  opacity: 1;\r\n}\r\n\r\n.collapse {\r\n  display: none;\r\n}\r\n\r\n.collapse.show {\r\n  display: block;\r\n}\r\n\r\ntr.collapse.show {\r\n  display: table-row;\r\n}\r\n\r\ntbody.collapse.show {\r\n  display: table-row-group;\r\n}\r\n\r\n.collapsing {\r\n  position: relative;\r\n  height: 0;\r\n  overflow: hidden;\r\n  transition: height 0.35s ease;\r\n}\r\n\r\n.dropup,\r\n.dropdown {\r\n  position: relative;\r\n}\r\n\r\n.dropdown-toggle::after {\r\n  display: inline-block;\r\n  width: 0;\r\n  height: 0;\r\n  margin-left: 0.255em;\r\n  vertical-align: 0.255em;\r\n  content: \"\";\r\n  border-top: 0.3em solid;\r\n  border-right: 0.3em solid transparent;\r\n  border-bottom: 0;\r\n  border-left: 0.3em solid transparent;\r\n}\r\n\r\n.dropdown-toggle:empty::after {\r\n  margin-left: 0;\r\n}\r\n\r\n.dropdown-menu {\r\n  position: absolute;\r\n  top: 100%;\r\n  left: 0;\r\n  z-index: 1000;\r\n  display: none;\r\n  float: left;\r\n  min-width: 10rem;\r\n  padding: 0.5rem 0;\r\n  margin: 0.125rem 0 0;\r\n  font-size: 1rem;\r\n  color: #212529;\r\n  text-align: left;\r\n  list-style: none;\r\n  background-color: #fff;\r\n  background-clip: padding-box;\r\n  border: 1px solid rgba(0, 0, 0, 0.15);\r\n  border-radius: 0.25rem;\r\n}\r\n\r\n.dropup .dropdown-menu {\r\n  margin-top: 0;\r\n  margin-bottom: 0.125rem;\r\n}\r\n\r\n.dropup .dropdown-toggle::after {\r\n  display: inline-block;\r\n  width: 0;\r\n  height: 0;\r\n  margin-left: 0.255em;\r\n  vertical-align: 0.255em;\r\n  content: \"\";\r\n  border-top: 0;\r\n  border-right: 0.3em solid transparent;\r\n  border-bottom: 0.3em solid;\r\n  border-left: 0.3em solid transparent;\r\n}\r\n\r\n.dropup .dropdown-toggle:empty::after {\r\n  margin-left: 0;\r\n}\r\n\r\n.dropright .dropdown-menu {\r\n  margin-top: 0;\r\n  margin-left: 0.125rem;\r\n}\r\n\r\n.dropright .dropdown-toggle::after {\r\n  display: inline-block;\r\n  width: 0;\r\n  height: 0;\r\n  margin-left: 0.255em;\r\n  vertical-align: 0.255em;\r\n  content: \"\";\r\n  border-top: 0.3em solid transparent;\r\n  border-bottom: 0.3em solid transparent;\r\n  border-left: 0.3em solid;\r\n}\r\n\r\n.dropright .dropdown-toggle:empty::after {\r\n  margin-left: 0;\r\n}\r\n\r\n.dropright .dropdown-toggle::after {\r\n  vertical-align: 0;\r\n}\r\n\r\n.dropleft .dropdown-menu {\r\n  margin-top: 0;\r\n  margin-right: 0.125rem;\r\n}\r\n\r\n.dropleft .dropdown-toggle::after {\r\n  display: inline-block;\r\n  width: 0;\r\n  height: 0;\r\n  margin-left: 0.255em;\r\n  vertical-align: 0.255em;\r\n  content: \"\";\r\n}\r\n\r\n.dropleft .dropdown-toggle::after {\r\n  display: none;\r\n}\r\n\r\n.dropleft .dropdown-toggle::before {\r\n  display: inline-block;\r\n  width: 0;\r\n  height: 0;\r\n  margin-right: 0.255em;\r\n  vertical-align: 0.255em;\r\n  content: \"\";\r\n  border-top: 0.3em solid transparent;\r\n  border-right: 0.3em solid;\r\n  border-bottom: 0.3em solid transparent;\r\n}\r\n\r\n.dropleft .dropdown-toggle:empty::after {\r\n  margin-left: 0;\r\n}\r\n\r\n.dropleft .dropdown-toggle::before {\r\n  vertical-align: 0;\r\n}\r\n\r\n.dropdown-divider {\r\n  height: 0;\r\n  margin: 0.5rem 0;\r\n  overflow: hidden;\r\n  border-top: 1px solid #e9ecef;\r\n}\r\n\r\n.dropdown-item {\r\n  display: block;\r\n  width: 100%;\r\n  padding: 0.25rem 1.5rem;\r\n  clear: both;\r\n  font-weight: 400;\r\n  color: #212529;\r\n  text-align: inherit;\r\n  white-space: nowrap;\r\n  background-color: transparent;\r\n  border: 0;\r\n}\r\n\r\n.dropdown-item:hover, .dropdown-item:focus {\r\n  color: #16181b;\r\n  text-decoration: none;\r\n  background-color: #f8f9fa;\r\n}\r\n\r\n.dropdown-item.active, .dropdown-item:active {\r\n  color: #fff;\r\n  text-decoration: none;\r\n  background-color: #007bff;\r\n}\r\n\r\n.dropdown-item.disabled, .dropdown-item:disabled {\r\n  color: #6c757d;\r\n  background-color: transparent;\r\n}\r\n\r\n.dropdown-menu.show {\r\n  display: block;\r\n}\r\n\r\n.dropdown-header {\r\n  display: block;\r\n  padding: 0.5rem 1.5rem;\r\n  margin-bottom: 0;\r\n  font-size: 0.875rem;\r\n  color: #6c757d;\r\n  white-space: nowrap;\r\n}\r\n\r\n.btn-group,\r\n.btn-group-vertical {\r\n  position: relative;\r\n  display: -webkit-inline-box;\r\n  display: -ms-inline-flexbox;\r\n  display: inline-flex;\r\n  vertical-align: middle;\r\n}\r\n\r\n.btn-group > .btn,\r\n.btn-group-vertical > .btn {\r\n  position: relative;\r\n  -webkit-box-flex: 0;\r\n  -ms-flex: 0 1 auto;\r\n  flex: 0 1 auto;\r\n}\r\n\r\n.btn-group > .btn:hover,\r\n.btn-group-vertical > .btn:hover {\r\n  z-index: 1;\r\n}\r\n\r\n.btn-group > .btn:focus, .btn-group > .btn:active, .btn-group > .btn.active,\r\n.btn-group-vertical > .btn:focus,\r\n.btn-group-vertical > .btn:active,\r\n.btn-group-vertical > .btn.active {\r\n  z-index: 1;\r\n}\r\n\r\n.btn-group .btn + .btn,\r\n.btn-group .btn + .btn-group,\r\n.btn-group .btn-group + .btn,\r\n.btn-group .btn-group + .btn-group,\r\n.btn-group-vertical .btn + .btn,\r\n.btn-group-vertical .btn + .btn-group,\r\n.btn-group-vertical .btn-group + .btn,\r\n.btn-group-vertical .btn-group + .btn-group {\r\n  margin-left: -1px;\r\n}\r\n\r\n.btn-toolbar {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -ms-flex-wrap: wrap;\r\n  flex-wrap: wrap;\r\n  -webkit-box-pack: start;\r\n  -ms-flex-pack: start;\r\n  justify-content: flex-start;\r\n}\r\n\r\n.btn-toolbar .input-group {\r\n  width: auto;\r\n}\r\n\r\n.btn-group > .btn:first-child {\r\n  margin-left: 0;\r\n}\r\n\r\n.btn-group > .btn:not(:last-child):not(.dropdown-toggle),\r\n.btn-group > .btn-group:not(:last-child) > .btn {\r\n  border-top-right-radius: 0;\r\n  border-bottom-right-radius: 0;\r\n}\r\n\r\n.btn-group > .btn:not(:first-child),\r\n.btn-group > .btn-group:not(:first-child) > .btn {\r\n  border-top-left-radius: 0;\r\n  border-bottom-left-radius: 0;\r\n}\r\n\r\n.dropdown-toggle-split {\r\n  padding-right: 0.5625rem;\r\n  padding-left: 0.5625rem;\r\n}\r\n\r\n.dropdown-toggle-split::after {\r\n  margin-left: 0;\r\n}\r\n\r\n.btn-sm + .dropdown-toggle-split, .btn-group-sm > .btn + .dropdown-toggle-split {\r\n  padding-right: 0.375rem;\r\n  padding-left: 0.375rem;\r\n}\r\n\r\n.btn-lg + .dropdown-toggle-split, .btn-group-lg > .btn + .dropdown-toggle-split {\r\n  padding-right: 0.75rem;\r\n  padding-left: 0.75rem;\r\n}\r\n\r\n.btn-group-vertical {\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n  -ms-flex-direction: column;\r\n  flex-direction: column;\r\n  -webkit-box-align: start;\r\n  -ms-flex-align: start;\r\n  align-items: flex-start;\r\n  -webkit-box-pack: center;\r\n  -ms-flex-pack: center;\r\n  justify-content: center;\r\n}\r\n\r\n.btn-group-vertical .btn,\r\n.btn-group-vertical .btn-group {\r\n  width: 100%;\r\n}\r\n\r\n.btn-group-vertical > .btn + .btn,\r\n.btn-group-vertical > .btn + .btn-group,\r\n.btn-group-vertical > .btn-group + .btn,\r\n.btn-group-vertical > .btn-group + .btn-group {\r\n  margin-top: -1px;\r\n  margin-left: 0;\r\n}\r\n\r\n.btn-group-vertical > .btn:not(:last-child):not(.dropdown-toggle),\r\n.btn-group-vertical > .btn-group:not(:last-child) > .btn {\r\n  border-bottom-right-radius: 0;\r\n  border-bottom-left-radius: 0;\r\n}\r\n\r\n.btn-group-vertical > .btn:not(:first-child),\r\n.btn-group-vertical > .btn-group:not(:first-child) > .btn {\r\n  border-top-left-radius: 0;\r\n  border-top-right-radius: 0;\r\n}\r\n\r\n.btn-group-toggle > .btn,\r\n.btn-group-toggle > .btn-group > .btn {\r\n  margin-bottom: 0;\r\n}\r\n\r\n.btn-group-toggle > .btn input[type=\"radio\"],\r\n.btn-group-toggle > .btn input[type=\"checkbox\"],\r\n.btn-group-toggle > .btn-group > .btn input[type=\"radio\"],\r\n.btn-group-toggle > .btn-group > .btn input[type=\"checkbox\"] {\r\n  position: absolute;\r\n  clip: rect(0, 0, 0, 0);\r\n  pointer-events: none;\r\n}\r\n\r\n.input-group {\r\n  position: relative;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -ms-flex-wrap: wrap;\r\n  flex-wrap: wrap;\r\n  -webkit-box-align: stretch;\r\n  -ms-flex-align: stretch;\r\n  align-items: stretch;\r\n  width: 100%;\r\n}\r\n\r\n.input-group > .form-control,\r\n.input-group > .custom-select,\r\n.input-group > .custom-file {\r\n  position: relative;\r\n  -webkit-box-flex: 1;\r\n  -ms-flex: 1 1 auto;\r\n  flex: 1 1 auto;\r\n  width: 1%;\r\n  margin-bottom: 0;\r\n}\r\n\r\n.input-group > .form-control:focus,\r\n.input-group > .custom-select:focus,\r\n.input-group > .custom-file:focus {\r\n  z-index: 3;\r\n}\r\n\r\n.input-group > .form-control + .form-control,\r\n.input-group > .form-control + .custom-select,\r\n.input-group > .form-control + .custom-file,\r\n.input-group > .custom-select + .form-control,\r\n.input-group > .custom-select + .custom-select,\r\n.input-group > .custom-select + .custom-file,\r\n.input-group > .custom-file + .form-control,\r\n.input-group > .custom-file + .custom-select,\r\n.input-group > .custom-file + .custom-file {\r\n  margin-left: -1px;\r\n}\r\n\r\n.input-group > .form-control:not(:last-child),\r\n.input-group > .custom-select:not(:last-child) {\r\n  border-top-right-radius: 0;\r\n  border-bottom-right-radius: 0;\r\n}\r\n\r\n.input-group > .form-control:not(:first-child),\r\n.input-group > .custom-select:not(:first-child) {\r\n  border-top-left-radius: 0;\r\n  border-bottom-left-radius: 0;\r\n}\r\n\r\n.input-group > .custom-file {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-align: center;\r\n  -ms-flex-align: center;\r\n  align-items: center;\r\n}\r\n\r\n.input-group > .custom-file:not(:last-child) .custom-file-label,\r\n.input-group > .custom-file:not(:last-child) .custom-file-label::before {\r\n  border-top-right-radius: 0;\r\n  border-bottom-right-radius: 0;\r\n}\r\n\r\n.input-group > .custom-file:not(:first-child) .custom-file-label,\r\n.input-group > .custom-file:not(:first-child) .custom-file-label::before {\r\n  border-top-left-radius: 0;\r\n  border-bottom-left-radius: 0;\r\n}\r\n\r\n.input-group-prepend,\r\n.input-group-append {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n}\r\n\r\n.input-group-prepend .btn,\r\n.input-group-append .btn {\r\n  position: relative;\r\n  z-index: 2;\r\n}\r\n\r\n.input-group-prepend .btn + .btn,\r\n.input-group-prepend .btn + .input-group-text,\r\n.input-group-prepend .input-group-text + .input-group-text,\r\n.input-group-prepend .input-group-text + .btn,\r\n.input-group-append .btn + .btn,\r\n.input-group-append .btn + .input-group-text,\r\n.input-group-append .input-group-text + .input-group-text,\r\n.input-group-append .input-group-text + .btn {\r\n  margin-left: -1px;\r\n}\r\n\r\n.input-group-prepend {\r\n  margin-right: -1px;\r\n}\r\n\r\n.input-group-append {\r\n  margin-left: -1px;\r\n}\r\n\r\n.input-group-text {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-align: center;\r\n  -ms-flex-align: center;\r\n  align-items: center;\r\n  padding: 0.375rem 0.75rem;\r\n  margin-bottom: 0;\r\n  font-size: 1rem;\r\n  font-weight: 400;\r\n  line-height: 1.5;\r\n  color: #495057;\r\n  text-align: center;\r\n  white-space: nowrap;\r\n  background-color: #e9ecef;\r\n  border: 1px solid #ced4da;\r\n  border-radius: 0.25rem;\r\n}\r\n\r\n.input-group-text input[type=\"radio\"],\r\n.input-group-text input[type=\"checkbox\"] {\r\n  margin-top: 0;\r\n}\r\n\r\n.input-group > .input-group-prepend > .btn,\r\n.input-group > .input-group-prepend > .input-group-text,\r\n.input-group > .input-group-append:not(:last-child) > .btn,\r\n.input-group > .input-group-append:not(:last-child) > .input-group-text,\r\n.input-group > .input-group-append:last-child > .btn:not(:last-child):not(.dropdown-toggle),\r\n.input-group > .input-group-append:last-child > .input-group-text:not(:last-child) {\r\n  border-top-right-radius: 0;\r\n  border-bottom-right-radius: 0;\r\n}\r\n\r\n.input-group > .input-group-append > .btn,\r\n.input-group > .input-group-append > .input-group-text,\r\n.input-group > .input-group-prepend:not(:first-child) > .btn,\r\n.input-group > .input-group-prepend:not(:first-child) > .input-group-text,\r\n.input-group > .input-group-prepend:first-child > .btn:not(:first-child),\r\n.input-group > .input-group-prepend:first-child > .input-group-text:not(:first-child) {\r\n  border-top-left-radius: 0;\r\n  border-bottom-left-radius: 0;\r\n}\r\n\r\n.custom-control {\r\n  position: relative;\r\n  display: block;\r\n  min-height: 1.5rem;\r\n  padding-left: 1.5rem;\r\n}\r\n\r\n.custom-control-inline {\r\n  display: -webkit-inline-box;\r\n  display: -ms-inline-flexbox;\r\n  display: inline-flex;\r\n  margin-right: 1rem;\r\n}\r\n\r\n.custom-control-input {\r\n  position: absolute;\r\n  z-index: -1;\r\n  opacity: 0;\r\n}\r\n\r\n.custom-control-input:checked ~ .custom-control-label::before {\r\n  color: #fff;\r\n  background-color: #007bff;\r\n}\r\n\r\n.custom-control-input:focus ~ .custom-control-label::before {\r\n  box-shadow: 0 0 0 1px #fff, 0 0 0 0.2rem rgba(0, 123, 255, 0.25);\r\n}\r\n\r\n.custom-control-input:active ~ .custom-control-label::before {\r\n  color: #fff;\r\n  background-color: #b3d7ff;\r\n}\r\n\r\n.custom-control-input:disabled ~ .custom-control-label {\r\n  color: #6c757d;\r\n}\r\n\r\n.custom-control-input:disabled ~ .custom-control-label::before {\r\n  background-color: #e9ecef;\r\n}\r\n\r\n.custom-control-label {\r\n  margin-bottom: 0;\r\n}\r\n\r\n.custom-control-label::before {\r\n  position: absolute;\r\n  top: 0.25rem;\r\n  left: 0;\r\n  display: block;\r\n  width: 1rem;\r\n  height: 1rem;\r\n  pointer-events: none;\r\n  content: \"\";\r\n  -webkit-user-select: none;\r\n  -moz-user-select: none;\r\n  -ms-user-select: none;\r\n  user-select: none;\r\n  background-color: #dee2e6;\r\n}\r\n\r\n.custom-control-label::after {\r\n  position: absolute;\r\n  top: 0.25rem;\r\n  left: 0;\r\n  display: block;\r\n  width: 1rem;\r\n  height: 1rem;\r\n  content: \"\";\r\n  background-repeat: no-repeat;\r\n  background-position: center center;\r\n  background-size: 50% 50%;\r\n}\r\n\r\n.custom-checkbox .custom-control-label::before {\r\n  border-radius: 0.25rem;\r\n}\r\n\r\n.custom-checkbox .custom-control-input:checked ~ .custom-control-label::before {\r\n  background-color: #007bff;\r\n}\r\n\r\n.custom-checkbox .custom-control-input:checked ~ .custom-control-label::after {\r\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3E%3Cpath fill='%23fff' d='M6.564.75l-3.59 3.612-1.538-1.55L0 4.26 2.974 7.25 8 2.193z'/%3E%3C/svg%3E\");\r\n}\r\n\r\n.custom-checkbox .custom-control-input:indeterminate ~ .custom-control-label::before {\r\n  background-color: #007bff;\r\n}\r\n\r\n.custom-checkbox .custom-control-input:indeterminate ~ .custom-control-label::after {\r\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 4'%3E%3Cpath stroke='%23fff' d='M0 2h4'/%3E%3C/svg%3E\");\r\n}\r\n\r\n.custom-checkbox .custom-control-input:disabled:checked ~ .custom-control-label::before {\r\n  background-color: rgba(0, 123, 255, 0.5);\r\n}\r\n\r\n.custom-checkbox .custom-control-input:disabled:indeterminate ~ .custom-control-label::before {\r\n  background-color: rgba(0, 123, 255, 0.5);\r\n}\r\n\r\n.custom-radio .custom-control-label::before {\r\n  border-radius: 50%;\r\n}\r\n\r\n.custom-radio .custom-control-input:checked ~ .custom-control-label::before {\r\n  background-color: #007bff;\r\n}\r\n\r\n.custom-radio .custom-control-input:checked ~ .custom-control-label::after {\r\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3E%3Ccircle r='3' fill='%23fff'/%3E%3C/svg%3E\");\r\n}\r\n\r\n.custom-radio .custom-control-input:disabled:checked ~ .custom-control-label::before {\r\n  background-color: rgba(0, 123, 255, 0.5);\r\n}\r\n\r\n.custom-select {\r\n  display: inline-block;\r\n  width: 100%;\r\n  height: calc(2.25rem + 2px);\r\n  padding: 0.375rem 1.75rem 0.375rem 0.75rem;\r\n  line-height: 1.5;\r\n  color: #495057;\r\n  vertical-align: middle;\r\n  background: #fff url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'%3E%3Cpath fill='%23343a40' d='M2 0L0 2h4zm0 5L0 3h4z'/%3E%3C/svg%3E\") no-repeat right 0.75rem center;\r\n  background-size: 8px 10px;\r\n  border: 1px solid #ced4da;\r\n  border-radius: 0.25rem;\r\n  -webkit-appearance: none;\r\n  -moz-appearance: none;\r\n  appearance: none;\r\n}\r\n\r\n.custom-select:focus {\r\n  border-color: #80bdff;\r\n  outline: 0;\r\n  box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.075), 0 0 5px rgba(128, 189, 255, 0.5);\r\n}\r\n\r\n.custom-select:focus::-ms-value {\r\n  color: #495057;\r\n  background-color: #fff;\r\n}\r\n\r\n.custom-select[multiple], .custom-select[size]:not([size=\"1\"]) {\r\n  height: auto;\r\n  padding-right: 0.75rem;\r\n  background-image: none;\r\n}\r\n\r\n.custom-select:disabled {\r\n  color: #6c757d;\r\n  background-color: #e9ecef;\r\n}\r\n\r\n.custom-select::-ms-expand {\r\n  opacity: 0;\r\n}\r\n\r\n.custom-select-sm {\r\n  height: calc(1.8125rem + 2px);\r\n  padding-top: 0.375rem;\r\n  padding-bottom: 0.375rem;\r\n  font-size: 75%;\r\n}\r\n\r\n.custom-select-lg {\r\n  height: calc(2.875rem + 2px);\r\n  padding-top: 0.375rem;\r\n  padding-bottom: 0.375rem;\r\n  font-size: 125%;\r\n}\r\n\r\n.custom-file {\r\n  position: relative;\r\n  display: inline-block;\r\n  width: 100%;\r\n  height: calc(2.25rem + 2px);\r\n  margin-bottom: 0;\r\n}\r\n\r\n.custom-file-input {\r\n  position: relative;\r\n  z-index: 2;\r\n  width: 100%;\r\n  height: calc(2.25rem + 2px);\r\n  margin: 0;\r\n  opacity: 0;\r\n}\r\n\r\n.custom-file-input:focus ~ .custom-file-control {\r\n  border-color: #80bdff;\r\n  box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);\r\n}\r\n\r\n.custom-file-input:focus ~ .custom-file-control::before {\r\n  border-color: #80bdff;\r\n}\r\n\r\n.custom-file-input:lang(en) ~ .custom-file-label::after {\r\n  content: \"Browse\";\r\n}\r\n\r\n.custom-file-label {\r\n  position: absolute;\r\n  top: 0;\r\n  right: 0;\r\n  left: 0;\r\n  z-index: 1;\r\n  height: calc(2.25rem + 2px);\r\n  padding: 0.375rem 0.75rem;\r\n  line-height: 1.5;\r\n  color: #495057;\r\n  background-color: #fff;\r\n  border: 1px solid #ced4da;\r\n  border-radius: 0.25rem;\r\n}\r\n\r\n.custom-file-label::after {\r\n  position: absolute;\r\n  top: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  z-index: 3;\r\n  display: block;\r\n  height: calc(calc(2.25rem + 2px) - 1px * 2);\r\n  padding: 0.375rem 0.75rem;\r\n  line-height: 1.5;\r\n  color: #495057;\r\n  content: \"Browse\";\r\n  background-color: #e9ecef;\r\n  border-left: 1px solid #ced4da;\r\n  border-radius: 0 0.25rem 0.25rem 0;\r\n}\r\n\r\n.nav {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -ms-flex-wrap: wrap;\r\n  flex-wrap: wrap;\r\n  padding-left: 0;\r\n  margin-bottom: 0;\r\n  list-style: none;\r\n}\r\n\r\n.nav-link {\r\n  display: block;\r\n  padding: 0.5rem 1rem;\r\n}\r\n\r\n.nav-link:hover, .nav-link:focus {\r\n  text-decoration: none;\r\n}\r\n\r\n.nav-link.disabled {\r\n  color: #6c757d;\r\n}\r\n\r\n.nav-tabs {\r\n  border-bottom: 1px solid #dee2e6;\r\n}\r\n\r\n.nav-tabs .nav-item {\r\n  margin-bottom: -1px;\r\n}\r\n\r\n.nav-tabs .nav-link {\r\n  border: 1px solid transparent;\r\n  border-top-left-radius: 0.25rem;\r\n  border-top-right-radius: 0.25rem;\r\n}\r\n\r\n.nav-tabs .nav-link:hover, .nav-tabs .nav-link:focus {\r\n  border-color: #e9ecef #e9ecef #dee2e6;\r\n}\r\n\r\n.nav-tabs .nav-link.disabled {\r\n  color: #6c757d;\r\n  background-color: transparent;\r\n  border-color: transparent;\r\n}\r\n\r\n.nav-tabs .nav-link.active,\r\n.nav-tabs .nav-item.show .nav-link {\r\n  color: #495057;\r\n  background-color: #fff;\r\n  border-color: #dee2e6 #dee2e6 #fff;\r\n}\r\n\r\n.nav-tabs .dropdown-menu {\r\n  margin-top: -1px;\r\n  border-top-left-radius: 0;\r\n  border-top-right-radius: 0;\r\n}\r\n\r\n.nav-pills .nav-link {\r\n  border-radius: 0.25rem;\r\n}\r\n\r\n.nav-pills .nav-link.active,\r\n.nav-pills .show > .nav-link {\r\n  color: #fff;\r\n  background-color: #007bff;\r\n}\r\n\r\n.nav-fill .nav-item {\r\n  -webkit-box-flex: 1;\r\n  -ms-flex: 1 1 auto;\r\n  flex: 1 1 auto;\r\n  text-align: center;\r\n}\r\n\r\n.nav-justified .nav-item {\r\n  -ms-flex-preferred-size: 0;\r\n  flex-basis: 0;\r\n  -webkit-box-flex: 1;\r\n  -ms-flex-positive: 1;\r\n  flex-grow: 1;\r\n  text-align: center;\r\n}\r\n\r\n.tab-content > .tab-pane {\r\n  display: none;\r\n}\r\n\r\n.tab-content > .active {\r\n  display: block;\r\n}\r\n\r\n.navbar {\r\n  position: relative;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -ms-flex-wrap: wrap;\r\n  flex-wrap: wrap;\r\n  -webkit-box-align: center;\r\n  -ms-flex-align: center;\r\n  align-items: center;\r\n  -webkit-box-pack: justify;\r\n  -ms-flex-pack: justify;\r\n  justify-content: space-between;\r\n  padding: 0.5rem 1rem;\r\n}\r\n\r\n.navbar > .container,\r\n.navbar > .container-fluid {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -ms-flex-wrap: wrap;\r\n  flex-wrap: wrap;\r\n  -webkit-box-align: center;\r\n  -ms-flex-align: center;\r\n  align-items: center;\r\n  -webkit-box-pack: justify;\r\n  -ms-flex-pack: justify;\r\n  justify-content: space-between;\r\n}\r\n\r\n.navbar-brand {\r\n  display: inline-block;\r\n  padding-top: 0.3125rem;\r\n  padding-bottom: 0.3125rem;\r\n  margin-right: 1rem;\r\n  font-size: 1.25rem;\r\n  line-height: inherit;\r\n  white-space: nowrap;\r\n}\r\n\r\n.navbar-brand:hover, .navbar-brand:focus {\r\n  text-decoration: none;\r\n}\r\n\r\n.navbar-nav {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n  -ms-flex-direction: column;\r\n  flex-direction: column;\r\n  padding-left: 0;\r\n  margin-bottom: 0;\r\n  list-style: none;\r\n}\r\n\r\n.navbar-nav .nav-link {\r\n  padding-right: 0;\r\n  padding-left: 0;\r\n}\r\n\r\n.navbar-nav .dropdown-menu {\r\n  position: static;\r\n  float: none;\r\n}\r\n\r\n.navbar-text {\r\n  display: inline-block;\r\n  padding-top: 0.5rem;\r\n  padding-bottom: 0.5rem;\r\n}\r\n\r\n.navbar-collapse {\r\n  -ms-flex-preferred-size: 100%;\r\n  flex-basis: 100%;\r\n  -webkit-box-flex: 1;\r\n  -ms-flex-positive: 1;\r\n  flex-grow: 1;\r\n  -webkit-box-align: center;\r\n  -ms-flex-align: center;\r\n  align-items: center;\r\n}\r\n\r\n.navbar-toggler {\r\n  padding: 0.25rem 0.75rem;\r\n  font-size: 1.25rem;\r\n  line-height: 1;\r\n  background-color: transparent;\r\n  border: 1px solid transparent;\r\n  border-radius: 0.25rem;\r\n}\r\n\r\n.navbar-toggler:hover, .navbar-toggler:focus {\r\n  text-decoration: none;\r\n}\r\n\r\n.navbar-toggler:not(:disabled):not(.disabled) {\r\n  cursor: pointer;\r\n}\r\n\r\n.navbar-toggler-icon {\r\n  display: inline-block;\r\n  width: 1.5em;\r\n  height: 1.5em;\r\n  vertical-align: middle;\r\n  content: \"\";\r\n  background: no-repeat center center;\r\n  background-size: 100% 100%;\r\n}\r\n\r\n@media (max-width: 575.98px) {\r\n  .navbar-expand-sm > .container,\r\n  .navbar-expand-sm > .container-fluid {\r\n    padding-right: 0;\r\n    padding-left: 0;\r\n  }\r\n}\r\n\r\n@media (min-width: 576px) {\r\n  .navbar-expand-sm {\r\n    -webkit-box-orient: horizontal;\r\n    -webkit-box-direction: normal;\r\n    -ms-flex-flow: row nowrap;\r\n    flex-flow: row nowrap;\r\n    -webkit-box-pack: start;\r\n    -ms-flex-pack: start;\r\n    justify-content: flex-start;\r\n  }\r\n  .navbar-expand-sm .navbar-nav {\r\n    -webkit-box-orient: horizontal;\r\n    -webkit-box-direction: normal;\r\n    -ms-flex-direction: row;\r\n    flex-direction: row;\r\n  }\r\n  .navbar-expand-sm .navbar-nav .dropdown-menu {\r\n    position: absolute;\r\n  }\r\n  .navbar-expand-sm .navbar-nav .dropdown-menu-right {\r\n    right: 0;\r\n    left: auto;\r\n  }\r\n  .navbar-expand-sm .navbar-nav .nav-link {\r\n    padding-right: 0.5rem;\r\n    padding-left: 0.5rem;\r\n  }\r\n  .navbar-expand-sm > .container,\r\n  .navbar-expand-sm > .container-fluid {\r\n    -ms-flex-wrap: nowrap;\r\n    flex-wrap: nowrap;\r\n  }\r\n  .navbar-expand-sm .navbar-collapse {\r\n    display: -webkit-box !important;\r\n    display: -ms-flexbox !important;\r\n    display: flex !important;\r\n    -ms-flex-preferred-size: auto;\r\n    flex-basis: auto;\r\n  }\r\n  .navbar-expand-sm .navbar-toggler {\r\n    display: none;\r\n  }\r\n  .navbar-expand-sm .dropup .dropdown-menu {\r\n    top: auto;\r\n    bottom: 100%;\r\n  }\r\n}\r\n\r\n@media (max-width: 767.98px) {\r\n  .navbar-expand-md > .container,\r\n  .navbar-expand-md > .container-fluid {\r\n    padding-right: 0;\r\n    padding-left: 0;\r\n  }\r\n}\r\n\r\n@media (min-width: 768px) {\r\n  .navbar-expand-md {\r\n    -webkit-box-orient: horizontal;\r\n    -webkit-box-direction: normal;\r\n    -ms-flex-flow: row nowrap;\r\n    flex-flow: row nowrap;\r\n    -webkit-box-pack: start;\r\n    -ms-flex-pack: start;\r\n    justify-content: flex-start;\r\n  }\r\n  .navbar-expand-md .navbar-nav {\r\n    -webkit-box-orient: horizontal;\r\n    -webkit-box-direction: normal;\r\n    -ms-flex-direction: row;\r\n    flex-direction: row;\r\n  }\r\n  .navbar-expand-md .navbar-nav .dropdown-menu {\r\n    position: absolute;\r\n  }\r\n  .navbar-expand-md .navbar-nav .dropdown-menu-right {\r\n    right: 0;\r\n    left: auto;\r\n  }\r\n  .navbar-expand-md .navbar-nav .nav-link {\r\n    padding-right: 0.5rem;\r\n    padding-left: 0.5rem;\r\n  }\r\n  .navbar-expand-md > .container,\r\n  .navbar-expand-md > .container-fluid {\r\n    -ms-flex-wrap: nowrap;\r\n    flex-wrap: nowrap;\r\n  }\r\n  .navbar-expand-md .navbar-collapse {\r\n    display: -webkit-box !important;\r\n    display: -ms-flexbox !important;\r\n    display: flex !important;\r\n    -ms-flex-preferred-size: auto;\r\n    flex-basis: auto;\r\n  }\r\n  .navbar-expand-md .navbar-toggler {\r\n    display: none;\r\n  }\r\n  .navbar-expand-md .dropup .dropdown-menu {\r\n    top: auto;\r\n    bottom: 100%;\r\n  }\r\n}\r\n\r\n@media (max-width: 991.98px) {\r\n  .navbar-expand-lg > .container,\r\n  .navbar-expand-lg > .container-fluid {\r\n    padding-right: 0;\r\n    padding-left: 0;\r\n  }\r\n}\r\n\r\n@media (min-width: 992px) {\r\n  .navbar-expand-lg {\r\n    -webkit-box-orient: horizontal;\r\n    -webkit-box-direction: normal;\r\n    -ms-flex-flow: row nowrap;\r\n    flex-flow: row nowrap;\r\n    -webkit-box-pack: start;\r\n    -ms-flex-pack: start;\r\n    justify-content: flex-start;\r\n  }\r\n  .navbar-expand-lg .navbar-nav {\r\n    -webkit-box-orient: horizontal;\r\n    -webkit-box-direction: normal;\r\n    -ms-flex-direction: row;\r\n    flex-direction: row;\r\n  }\r\n  .navbar-expand-lg .navbar-nav .dropdown-menu {\r\n    position: absolute;\r\n  }\r\n  .navbar-expand-lg .navbar-nav .dropdown-menu-right {\r\n    right: 0;\r\n    left: auto;\r\n  }\r\n  .navbar-expand-lg .navbar-nav .nav-link {\r\n    padding-right: 0.5rem;\r\n    padding-left: 0.5rem;\r\n  }\r\n  .navbar-expand-lg > .container,\r\n  .navbar-expand-lg > .container-fluid {\r\n    -ms-flex-wrap: nowrap;\r\n    flex-wrap: nowrap;\r\n  }\r\n  .navbar-expand-lg .navbar-collapse {\r\n    display: -webkit-box !important;\r\n    display: -ms-flexbox !important;\r\n    display: flex !important;\r\n    -ms-flex-preferred-size: auto;\r\n    flex-basis: auto;\r\n  }\r\n  .navbar-expand-lg .navbar-toggler {\r\n    display: none;\r\n  }\r\n  .navbar-expand-lg .dropup .dropdown-menu {\r\n    top: auto;\r\n    bottom: 100%;\r\n  }\r\n}\r\n\r\n@media (max-width: 1199.98px) {\r\n  .navbar-expand-xl > .container,\r\n  .navbar-expand-xl > .container-fluid {\r\n    padding-right: 0;\r\n    padding-left: 0;\r\n  }\r\n}\r\n\r\n@media (min-width: 1200px) {\r\n  .navbar-expand-xl {\r\n    -webkit-box-orient: horizontal;\r\n    -webkit-box-direction: normal;\r\n    -ms-flex-flow: row nowrap;\r\n    flex-flow: row nowrap;\r\n    -webkit-box-pack: start;\r\n    -ms-flex-pack: start;\r\n    justify-content: flex-start;\r\n  }\r\n  .navbar-expand-xl .navbar-nav {\r\n    -webkit-box-orient: horizontal;\r\n    -webkit-box-direction: normal;\r\n    -ms-flex-direction: row;\r\n    flex-direction: row;\r\n  }\r\n  .navbar-expand-xl .navbar-nav .dropdown-menu {\r\n    position: absolute;\r\n  }\r\n  .navbar-expand-xl .navbar-nav .dropdown-menu-right {\r\n    right: 0;\r\n    left: auto;\r\n  }\r\n  .navbar-expand-xl .navbar-nav .nav-link {\r\n    padding-right: 0.5rem;\r\n    padding-left: 0.5rem;\r\n  }\r\n  .navbar-expand-xl > .container,\r\n  .navbar-expand-xl > .container-fluid {\r\n    -ms-flex-wrap: nowrap;\r\n    flex-wrap: nowrap;\r\n  }\r\n  .navbar-expand-xl .navbar-collapse {\r\n    display: -webkit-box !important;\r\n    display: -ms-flexbox !important;\r\n    display: flex !important;\r\n    -ms-flex-preferred-size: auto;\r\n    flex-basis: auto;\r\n  }\r\n  .navbar-expand-xl .navbar-toggler {\r\n    display: none;\r\n  }\r\n  .navbar-expand-xl .dropup .dropdown-menu {\r\n    top: auto;\r\n    bottom: 100%;\r\n  }\r\n}\r\n\r\n.navbar-expand {\r\n  -webkit-box-orient: horizontal;\r\n  -webkit-box-direction: normal;\r\n  -ms-flex-flow: row nowrap;\r\n  flex-flow: row nowrap;\r\n  -webkit-box-pack: start;\r\n  -ms-flex-pack: start;\r\n  justify-content: flex-start;\r\n}\r\n\r\n.navbar-expand > .container,\r\n.navbar-expand > .container-fluid {\r\n  padding-right: 0;\r\n  padding-left: 0;\r\n}\r\n\r\n.navbar-expand .navbar-nav {\r\n  -webkit-box-orient: horizontal;\r\n  -webkit-box-direction: normal;\r\n  -ms-flex-direction: row;\r\n  flex-direction: row;\r\n}\r\n\r\n.navbar-expand .navbar-nav .dropdown-menu {\r\n  position: absolute;\r\n}\r\n\r\n.navbar-expand .navbar-nav .dropdown-menu-right {\r\n  right: 0;\r\n  left: auto;\r\n}\r\n\r\n.navbar-expand .navbar-nav .nav-link {\r\n  padding-right: 0.5rem;\r\n  padding-left: 0.5rem;\r\n}\r\n\r\n.navbar-expand > .container,\r\n.navbar-expand > .container-fluid {\r\n  -ms-flex-wrap: nowrap;\r\n  flex-wrap: nowrap;\r\n}\r\n\r\n.navbar-expand .navbar-collapse {\r\n  display: -webkit-box !important;\r\n  display: -ms-flexbox !important;\r\n  display: flex !important;\r\n  -ms-flex-preferred-size: auto;\r\n  flex-basis: auto;\r\n}\r\n\r\n.navbar-expand .navbar-toggler {\r\n  display: none;\r\n}\r\n\r\n.navbar-expand .dropup .dropdown-menu {\r\n  top: auto;\r\n  bottom: 100%;\r\n}\r\n\r\n.navbar-light .navbar-brand {\r\n  color: rgba(0, 0, 0, 0.9);\r\n}\r\n\r\n.navbar-light .navbar-brand:hover, .navbar-light .navbar-brand:focus {\r\n  color: rgba(0, 0, 0, 0.9);\r\n}\r\n\r\n.navbar-light .navbar-nav .nav-link {\r\n  color: rgba(0, 0, 0, 0.5);\r\n}\r\n\r\n.navbar-light .navbar-nav .nav-link:hover, .navbar-light .navbar-nav .nav-link:focus {\r\n  color: rgba(0, 0, 0, 0.7);\r\n}\r\n\r\n.navbar-light .navbar-nav .nav-link.disabled {\r\n  color: rgba(0, 0, 0, 0.3);\r\n}\r\n\r\n.navbar-light .navbar-nav .show > .nav-link,\r\n.navbar-light .navbar-nav .active > .nav-link,\r\n.navbar-light .navbar-nav .nav-link.show,\r\n.navbar-light .navbar-nav .nav-link.active {\r\n  color: rgba(0, 0, 0, 0.9);\r\n}\r\n\r\n.navbar-light .navbar-toggler {\r\n  color: rgba(0, 0, 0, 0.5);\r\n  border-color: rgba(0, 0, 0, 0.1);\r\n}\r\n\r\n.navbar-light .navbar-toggler-icon {\r\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba(0, 0, 0, 0.5)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E\");\r\n}\r\n\r\n.navbar-light .navbar-text {\r\n  color: rgba(0, 0, 0, 0.5);\r\n}\r\n\r\n.navbar-light .navbar-text a {\r\n  color: rgba(0, 0, 0, 0.9);\r\n}\r\n\r\n.navbar-light .navbar-text a:hover, .navbar-light .navbar-text a:focus {\r\n  color: rgba(0, 0, 0, 0.9);\r\n}\r\n\r\n.navbar-dark .navbar-brand {\r\n  color: #fff;\r\n}\r\n\r\n.navbar-dark .navbar-brand:hover, .navbar-dark .navbar-brand:focus {\r\n  color: #fff;\r\n}\r\n\r\n.navbar-dark .navbar-nav .nav-link {\r\n  color: rgba(255, 255, 255, 0.5);\r\n}\r\n\r\n.navbar-dark .navbar-nav .nav-link:hover, .navbar-dark .navbar-nav .nav-link:focus {\r\n  color: rgba(255, 255, 255, 0.75);\r\n}\r\n\r\n.navbar-dark .navbar-nav .nav-link.disabled {\r\n  color: rgba(255, 255, 255, 0.25);\r\n}\r\n\r\n.navbar-dark .navbar-nav .show > .nav-link,\r\n.navbar-dark .navbar-nav .active > .nav-link,\r\n.navbar-dark .navbar-nav .nav-link.show,\r\n.navbar-dark .navbar-nav .nav-link.active {\r\n  color: #fff;\r\n}\r\n\r\n.navbar-dark .navbar-toggler {\r\n  color: rgba(255, 255, 255, 0.5);\r\n  border-color: rgba(255, 255, 255, 0.1);\r\n}\r\n\r\n.navbar-dark .navbar-toggler-icon {\r\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba(255, 255, 255, 0.5)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E\");\r\n}\r\n\r\n.navbar-dark .navbar-text {\r\n  color: rgba(255, 255, 255, 0.5);\r\n}\r\n\r\n.navbar-dark .navbar-text a {\r\n  color: #fff;\r\n}\r\n\r\n.navbar-dark .navbar-text a:hover, .navbar-dark .navbar-text a:focus {\r\n  color: #fff;\r\n}\r\n\r\n.card {\r\n  position: relative;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n  -ms-flex-direction: column;\r\n  flex-direction: column;\r\n  min-width: 0;\r\n  word-wrap: break-word;\r\n  background-color: #fff;\r\n  background-clip: border-box;\r\n  border: 1px solid rgba(0, 0, 0, 0.125);\r\n  border-radius: 0.25rem;\r\n}\r\n\r\n.card > hr {\r\n  margin-right: 0;\r\n  margin-left: 0;\r\n}\r\n\r\n.card > .list-group:first-child .list-group-item:first-child {\r\n  border-top-left-radius: 0.25rem;\r\n  border-top-right-radius: 0.25rem;\r\n}\r\n\r\n.card > .list-group:last-child .list-group-item:last-child {\r\n  border-bottom-right-radius: 0.25rem;\r\n  border-bottom-left-radius: 0.25rem;\r\n}\r\n\r\n.card-body {\r\n  -webkit-box-flex: 1;\r\n  -ms-flex: 1 1 auto;\r\n  flex: 1 1 auto;\r\n  padding: 1.25rem;\r\n}\r\n\r\n.card-title {\r\n  margin-bottom: 0.75rem;\r\n}\r\n\r\n.card-subtitle {\r\n  margin-top: -0.375rem;\r\n  margin-bottom: 0;\r\n}\r\n\r\n.card-text:last-child {\r\n  margin-bottom: 0;\r\n}\r\n\r\n.card-link:hover {\r\n  text-decoration: none;\r\n}\r\n\r\n.card-link + .card-link {\r\n  margin-left: 1.25rem;\r\n}\r\n\r\n.card-header {\r\n  padding: 0.75rem 1.25rem;\r\n  margin-bottom: 0;\r\n  background-color: rgba(0, 0, 0, 0.03);\r\n  border-bottom: 1px solid rgba(0, 0, 0, 0.125);\r\n}\r\n\r\n.card-header:first-child {\r\n  border-radius: calc(0.25rem - 1px) calc(0.25rem - 1px) 0 0;\r\n}\r\n\r\n.card-header + .list-group .list-group-item:first-child {\r\n  border-top: 0;\r\n}\r\n\r\n.card-footer {\r\n  padding: 0.75rem 1.25rem;\r\n  background-color: rgba(0, 0, 0, 0.03);\r\n  border-top: 1px solid rgba(0, 0, 0, 0.125);\r\n}\r\n\r\n.card-footer:last-child {\r\n  border-radius: 0 0 calc(0.25rem - 1px) calc(0.25rem - 1px);\r\n}\r\n\r\n.card-header-tabs {\r\n  margin-right: -0.625rem;\r\n  margin-bottom: -0.75rem;\r\n  margin-left: -0.625rem;\r\n  border-bottom: 0;\r\n}\r\n\r\n.card-header-pills {\r\n  margin-right: -0.625rem;\r\n  margin-left: -0.625rem;\r\n}\r\n\r\n.card-img-overlay {\r\n  position: absolute;\r\n  top: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  padding: 1.25rem;\r\n}\r\n\r\n.card-img {\r\n  width: 100%;\r\n  border-radius: calc(0.25rem - 1px);\r\n}\r\n\r\n.card-img-top {\r\n  width: 100%;\r\n  border-top-left-radius: calc(0.25rem - 1px);\r\n  border-top-right-radius: calc(0.25rem - 1px);\r\n}\r\n\r\n.card-img-bottom {\r\n  width: 100%;\r\n  border-bottom-right-radius: calc(0.25rem - 1px);\r\n  border-bottom-left-radius: calc(0.25rem - 1px);\r\n}\r\n\r\n.card-deck {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n  -ms-flex-direction: column;\r\n  flex-direction: column;\r\n}\r\n\r\n.card-deck .card {\r\n  margin-bottom: 15px;\r\n}\r\n\r\n@media (min-width: 576px) {\r\n  .card-deck {\r\n    -webkit-box-orient: horizontal;\r\n    -webkit-box-direction: normal;\r\n    -ms-flex-flow: row wrap;\r\n    flex-flow: row wrap;\r\n    margin-right: -15px;\r\n    margin-left: -15px;\r\n  }\r\n  .card-deck .card {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-flex: 1;\r\n    -ms-flex: 1 0 0%;\r\n    flex: 1 0 0%;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n    -ms-flex-direction: column;\r\n    flex-direction: column;\r\n    margin-right: 15px;\r\n    margin-bottom: 0;\r\n    margin-left: 15px;\r\n  }\r\n}\r\n\r\n.card-group {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n  -ms-flex-direction: column;\r\n  flex-direction: column;\r\n}\r\n\r\n.card-group > .card {\r\n  margin-bottom: 15px;\r\n}\r\n\r\n@media (min-width: 576px) {\r\n  .card-group {\r\n    -webkit-box-orient: horizontal;\r\n    -webkit-box-direction: normal;\r\n    -ms-flex-flow: row wrap;\r\n    flex-flow: row wrap;\r\n  }\r\n  .card-group > .card {\r\n    -webkit-box-flex: 1;\r\n    -ms-flex: 1 0 0%;\r\n    flex: 1 0 0%;\r\n    margin-bottom: 0;\r\n  }\r\n  .card-group > .card + .card {\r\n    margin-left: 0;\r\n    border-left: 0;\r\n  }\r\n  .card-group > .card:first-child {\r\n    border-top-right-radius: 0;\r\n    border-bottom-right-radius: 0;\r\n  }\r\n  .card-group > .card:first-child .card-img-top,\r\n  .card-group > .card:first-child .card-header {\r\n    border-top-right-radius: 0;\r\n  }\r\n  .card-group > .card:first-child .card-img-bottom,\r\n  .card-group > .card:first-child .card-footer {\r\n    border-bottom-right-radius: 0;\r\n  }\r\n  .card-group > .card:last-child {\r\n    border-top-left-radius: 0;\r\n    border-bottom-left-radius: 0;\r\n  }\r\n  .card-group > .card:last-child .card-img-top,\r\n  .card-group > .card:last-child .card-header {\r\n    border-top-left-radius: 0;\r\n  }\r\n  .card-group > .card:last-child .card-img-bottom,\r\n  .card-group > .card:last-child .card-footer {\r\n    border-bottom-left-radius: 0;\r\n  }\r\n  .card-group > .card:only-child {\r\n    border-radius: 0.25rem;\r\n  }\r\n  .card-group > .card:only-child .card-img-top,\r\n  .card-group > .card:only-child .card-header {\r\n    border-top-left-radius: 0.25rem;\r\n    border-top-right-radius: 0.25rem;\r\n  }\r\n  .card-group > .card:only-child .card-img-bottom,\r\n  .card-group > .card:only-child .card-footer {\r\n    border-bottom-right-radius: 0.25rem;\r\n    border-bottom-left-radius: 0.25rem;\r\n  }\r\n  .card-group > .card:not(:first-child):not(:last-child):not(:only-child) {\r\n    border-radius: 0;\r\n  }\r\n  .card-group > .card:not(:first-child):not(:last-child):not(:only-child) .card-img-top,\r\n  .card-group > .card:not(:first-child):not(:last-child):not(:only-child) .card-img-bottom,\r\n  .card-group > .card:not(:first-child):not(:last-child):not(:only-child) .card-header,\r\n  .card-group > .card:not(:first-child):not(:last-child):not(:only-child) .card-footer {\r\n    border-radius: 0;\r\n  }\r\n}\r\n\r\n.card-columns .card {\r\n  margin-bottom: 0.75rem;\r\n}\r\n\r\n@media (min-width: 576px) {\r\n  .card-columns {\r\n    -webkit-column-count: 3;\r\n    -moz-column-count: 3;\r\n    column-count: 3;\r\n    -webkit-column-gap: 1.25rem;\r\n    -moz-column-gap: 1.25rem;\r\n    column-gap: 1.25rem;\r\n  }\r\n  .card-columns .card {\r\n    display: inline-block;\r\n    width: 100%;\r\n  }\r\n}\r\n\r\n.breadcrumb {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -ms-flex-wrap: wrap;\r\n  flex-wrap: wrap;\r\n  padding: 0.75rem 1rem;\r\n  margin-bottom: 1rem;\r\n  list-style: none;\r\n  background-color: #e9ecef;\r\n  border-radius: 0.25rem;\r\n}\r\n\r\n.breadcrumb-item + .breadcrumb-item::before {\r\n  display: inline-block;\r\n  padding-right: 0.5rem;\r\n  padding-left: 0.5rem;\r\n  color: #6c757d;\r\n  content: \"/\";\r\n}\r\n\r\n.breadcrumb-item + .breadcrumb-item:hover::before {\r\n  text-decoration: underline;\r\n}\r\n\r\n.breadcrumb-item + .breadcrumb-item:hover::before {\r\n  text-decoration: none;\r\n}\r\n\r\n.breadcrumb-item.active {\r\n  color: #6c757d;\r\n}\r\n\r\n.pagination {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  padding-left: 0;\r\n  list-style: none;\r\n  border-radius: 0.25rem;\r\n}\r\n\r\n.page-link {\r\n  position: relative;\r\n  display: block;\r\n  padding: 0.5rem 0.75rem;\r\n  margin-left: -1px;\r\n  line-height: 1.25;\r\n  color: #007bff;\r\n  background-color: #fff;\r\n  border: 1px solid #dee2e6;\r\n}\r\n\r\n.page-link:hover {\r\n  color: #0056b3;\r\n  text-decoration: none;\r\n  background-color: #e9ecef;\r\n  border-color: #dee2e6;\r\n}\r\n\r\n.page-link:focus {\r\n  z-index: 2;\r\n  outline: 0;\r\n  box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);\r\n}\r\n\r\n.page-link:not(:disabled):not(.disabled) {\r\n  cursor: pointer;\r\n}\r\n\r\n.page-item:first-child .page-link {\r\n  margin-left: 0;\r\n  border-top-left-radius: 0.25rem;\r\n  border-bottom-left-radius: 0.25rem;\r\n}\r\n\r\n.page-item:last-child .page-link {\r\n  border-top-right-radius: 0.25rem;\r\n  border-bottom-right-radius: 0.25rem;\r\n}\r\n\r\n.page-item.active .page-link {\r\n  z-index: 1;\r\n  color: #fff;\r\n  background-color: #007bff;\r\n  border-color: #007bff;\r\n}\r\n\r\n.page-item.disabled .page-link {\r\n  color: #6c757d;\r\n  pointer-events: none;\r\n  cursor: auto;\r\n  background-color: #fff;\r\n  border-color: #dee2e6;\r\n}\r\n\r\n.pagination-lg .page-link {\r\n  padding: 0.75rem 1.5rem;\r\n  font-size: 1.25rem;\r\n  line-height: 1.5;\r\n}\r\n\r\n.pagination-lg .page-item:first-child .page-link {\r\n  border-top-left-radius: 0.3rem;\r\n  border-bottom-left-radius: 0.3rem;\r\n}\r\n\r\n.pagination-lg .page-item:last-child .page-link {\r\n  border-top-right-radius: 0.3rem;\r\n  border-bottom-right-radius: 0.3rem;\r\n}\r\n\r\n.pagination-sm .page-link {\r\n  padding: 0.25rem 0.5rem;\r\n  font-size: 0.875rem;\r\n  line-height: 1.5;\r\n}\r\n\r\n.pagination-sm .page-item:first-child .page-link {\r\n  border-top-left-radius: 0.2rem;\r\n  border-bottom-left-radius: 0.2rem;\r\n}\r\n\r\n.pagination-sm .page-item:last-child .page-link {\r\n  border-top-right-radius: 0.2rem;\r\n  border-bottom-right-radius: 0.2rem;\r\n}\r\n\r\n.badge {\r\n  display: inline-block;\r\n  padding: 0.25em 0.4em;\r\n  font-size: 75%;\r\n  font-weight: 700;\r\n  line-height: 1;\r\n  text-align: center;\r\n  white-space: nowrap;\r\n  vertical-align: baseline;\r\n  border-radius: 0.25rem;\r\n}\r\n\r\n.badge:empty {\r\n  display: none;\r\n}\r\n\r\n.btn .badge {\r\n  position: relative;\r\n  top: -1px;\r\n}\r\n\r\n.badge-pill {\r\n  padding-right: 0.6em;\r\n  padding-left: 0.6em;\r\n  border-radius: 10rem;\r\n}\r\n\r\n.badge-primary {\r\n  color: #fff;\r\n  background-color: #007bff;\r\n}\r\n\r\n.badge-primary[href]:hover, .badge-primary[href]:focus {\r\n  color: #fff;\r\n  text-decoration: none;\r\n  background-color: #0062cc;\r\n}\r\n\r\n.badge-secondary {\r\n  color: #fff;\r\n  background-color: #6c757d;\r\n}\r\n\r\n.badge-secondary[href]:hover, .badge-secondary[href]:focus {\r\n  color: #fff;\r\n  text-decoration: none;\r\n  background-color: #545b62;\r\n}\r\n\r\n.badge-success {\r\n  color: #fff;\r\n  background-color: #28a745;\r\n}\r\n\r\n.badge-success[href]:hover, .badge-success[href]:focus {\r\n  color: #fff;\r\n  text-decoration: none;\r\n  background-color: #1e7e34;\r\n}\r\n\r\n.badge-info {\r\n  color: #fff;\r\n  background-color: #17a2b8;\r\n}\r\n\r\n.badge-info[href]:hover, .badge-info[href]:focus {\r\n  color: #fff;\r\n  text-decoration: none;\r\n  background-color: #117a8b;\r\n}\r\n\r\n.badge-warning {\r\n  color: #212529;\r\n  background-color: #ffc107;\r\n}\r\n\r\n.badge-warning[href]:hover, .badge-warning[href]:focus {\r\n  color: #212529;\r\n  text-decoration: none;\r\n  background-color: #d39e00;\r\n}\r\n\r\n.badge-danger {\r\n  color: #fff;\r\n  background-color: #dc3545;\r\n}\r\n\r\n.badge-danger[href]:hover, .badge-danger[href]:focus {\r\n  color: #fff;\r\n  text-decoration: none;\r\n  background-color: #bd2130;\r\n}\r\n\r\n.badge-light {\r\n  color: #212529;\r\n  background-color: #f8f9fa;\r\n}\r\n\r\n.badge-light[href]:hover, .badge-light[href]:focus {\r\n  color: #212529;\r\n  text-decoration: none;\r\n  background-color: #dae0e5;\r\n}\r\n\r\n.badge-dark {\r\n  color: #fff;\r\n  background-color: #343a40;\r\n}\r\n\r\n.badge-dark[href]:hover, .badge-dark[href]:focus {\r\n  color: #fff;\r\n  text-decoration: none;\r\n  background-color: #1d2124;\r\n}\r\n\r\n.jumbotron {\r\n  padding: 2rem 1rem;\r\n  margin-bottom: 2rem;\r\n  background-color: #e9ecef;\r\n  border-radius: 0.3rem;\r\n}\r\n\r\n@media (min-width: 576px) {\r\n  .jumbotron {\r\n    padding: 4rem 2rem;\r\n  }\r\n}\r\n\r\n.jumbotron-fluid {\r\n  padding-right: 0;\r\n  padding-left: 0;\r\n  border-radius: 0;\r\n}\r\n\r\n.alert {\r\n  position: relative;\r\n  padding: 0.75rem 1.25rem;\r\n  margin-bottom: 1rem;\r\n  border: 1px solid transparent;\r\n  border-radius: 0.25rem;\r\n}\r\n\r\n.alert-heading {\r\n  color: inherit;\r\n}\r\n\r\n.alert-link {\r\n  font-weight: 700;\r\n}\r\n\r\n.alert-dismissible {\r\n  padding-right: 4rem;\r\n}\r\n\r\n.alert-dismissible .close {\r\n  position: absolute;\r\n  top: 0;\r\n  right: 0;\r\n  padding: 0.75rem 1.25rem;\r\n  color: inherit;\r\n}\r\n\r\n.alert-primary {\r\n  color: #004085;\r\n  background-color: #cce5ff;\r\n  border-color: #b8daff;\r\n}\r\n\r\n.alert-primary hr {\r\n  border-top-color: #9fcdff;\r\n}\r\n\r\n.alert-primary .alert-link {\r\n  color: #002752;\r\n}\r\n\r\n.alert-secondary {\r\n  color: #383d41;\r\n  background-color: #e2e3e5;\r\n  border-color: #d6d8db;\r\n}\r\n\r\n.alert-secondary hr {\r\n  border-top-color: #c8cbcf;\r\n}\r\n\r\n.alert-secondary .alert-link {\r\n  color: #202326;\r\n}\r\n\r\n.alert-success {\r\n  color: #155724;\r\n  background-color: #d4edda;\r\n  border-color: #c3e6cb;\r\n}\r\n\r\n.alert-success hr {\r\n  border-top-color: #b1dfbb;\r\n}\r\n\r\n.alert-success .alert-link {\r\n  color: #0b2e13;\r\n}\r\n\r\n.alert-info {\r\n  color: #0c5460;\r\n  background-color: #d1ecf1;\r\n  border-color: #bee5eb;\r\n}\r\n\r\n.alert-info hr {\r\n  border-top-color: #abdde5;\r\n}\r\n\r\n.alert-info .alert-link {\r\n  color: #062c33;\r\n}\r\n\r\n.alert-warning {\r\n  color: #856404;\r\n  background-color: #fff3cd;\r\n  border-color: #ffeeba;\r\n}\r\n\r\n.alert-warning hr {\r\n  border-top-color: #ffe8a1;\r\n}\r\n\r\n.alert-warning .alert-link {\r\n  color: #533f03;\r\n}\r\n\r\n.alert-danger {\r\n  color: #721c24;\r\n  background-color: #f8d7da;\r\n  border-color: #f5c6cb;\r\n}\r\n\r\n.alert-danger hr {\r\n  border-top-color: #f1b0b7;\r\n}\r\n\r\n.alert-danger .alert-link {\r\n  color: #491217;\r\n}\r\n\r\n.alert-light {\r\n  color: #818182;\r\n  background-color: #fefefe;\r\n  border-color: #fdfdfe;\r\n}\r\n\r\n.alert-light hr {\r\n  border-top-color: #ececf6;\r\n}\r\n\r\n.alert-light .alert-link {\r\n  color: #686868;\r\n}\r\n\r\n.alert-dark {\r\n  color: #1b1e21;\r\n  background-color: #d6d8d9;\r\n  border-color: #c6c8ca;\r\n}\r\n\r\n.alert-dark hr {\r\n  border-top-color: #b9bbbe;\r\n}\r\n\r\n.alert-dark .alert-link {\r\n  color: #040505;\r\n}\r\n\r\n@-webkit-keyframes progress-bar-stripes {\r\n  from {\r\n    background-position: 1rem 0;\r\n  }\r\n  to {\r\n    background-position: 0 0;\r\n  }\r\n}\r\n\r\n@keyframes progress-bar-stripes {\r\n  from {\r\n    background-position: 1rem 0;\r\n  }\r\n  to {\r\n    background-position: 0 0;\r\n  }\r\n}\r\n\r\n.progress {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  height: 1rem;\r\n  overflow: hidden;\r\n  font-size: 0.75rem;\r\n  background-color: #e9ecef;\r\n  border-radius: 0.25rem;\r\n}\r\n\r\n.progress-bar {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n  -ms-flex-direction: column;\r\n  flex-direction: column;\r\n  -webkit-box-pack: center;\r\n  -ms-flex-pack: center;\r\n  justify-content: center;\r\n  color: #fff;\r\n  text-align: center;\r\n  background-color: #007bff;\r\n  transition: width 0.6s ease;\r\n}\r\n\r\n.progress-bar-striped {\r\n  background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\r\n  background-size: 1rem 1rem;\r\n}\r\n\r\n.progress-bar-animated {\r\n  -webkit-animation: progress-bar-stripes 1s linear infinite;\r\n  animation: progress-bar-stripes 1s linear infinite;\r\n}\r\n\r\n.media {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-align: start;\r\n  -ms-flex-align: start;\r\n  align-items: flex-start;\r\n}\r\n\r\n.media-body {\r\n  -webkit-box-flex: 1;\r\n  -ms-flex: 1;\r\n  flex: 1;\r\n}\r\n\r\n.list-group {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n  -ms-flex-direction: column;\r\n  flex-direction: column;\r\n  padding-left: 0;\r\n  margin-bottom: 0;\r\n}\r\n\r\n.list-group-item-action {\r\n  width: 100%;\r\n  color: #495057;\r\n  text-align: inherit;\r\n}\r\n\r\n.list-group-item-action:hover, .list-group-item-action:focus {\r\n  color: #495057;\r\n  text-decoration: none;\r\n  background-color: #f8f9fa;\r\n}\r\n\r\n.list-group-item-action:active {\r\n  color: #212529;\r\n  background-color: #e9ecef;\r\n}\r\n\r\n.list-group-item {\r\n  position: relative;\r\n  display: block;\r\n  padding: 0.75rem 1.25rem;\r\n  margin-bottom: -1px;\r\n  background-color: #fff;\r\n  border: 1px solid rgba(0, 0, 0, 0.125);\r\n}\r\n\r\n.list-group-item:first-child {\r\n  border-top-left-radius: 0.25rem;\r\n  border-top-right-radius: 0.25rem;\r\n}\r\n\r\n.list-group-item:last-child {\r\n  margin-bottom: 0;\r\n  border-bottom-right-radius: 0.25rem;\r\n  border-bottom-left-radius: 0.25rem;\r\n}\r\n\r\n.list-group-item:hover, .list-group-item:focus {\r\n  z-index: 1;\r\n  text-decoration: none;\r\n}\r\n\r\n.list-group-item.disabled, .list-group-item:disabled {\r\n  color: #6c757d;\r\n  background-color: #fff;\r\n}\r\n\r\n.list-group-item.active {\r\n  z-index: 2;\r\n  color: #fff;\r\n  background-color: #007bff;\r\n  border-color: #007bff;\r\n}\r\n\r\n.list-group-flush .list-group-item {\r\n  border-right: 0;\r\n  border-left: 0;\r\n  border-radius: 0;\r\n}\r\n\r\n.list-group-flush:first-child .list-group-item:first-child {\r\n  border-top: 0;\r\n}\r\n\r\n.list-group-flush:last-child .list-group-item:last-child {\r\n  border-bottom: 0;\r\n}\r\n\r\n.list-group-item-primary {\r\n  color: #004085;\r\n  background-color: #b8daff;\r\n}\r\n\r\n.list-group-item-primary.list-group-item-action:hover, .list-group-item-primary.list-group-item-action:focus {\r\n  color: #004085;\r\n  background-color: #9fcdff;\r\n}\r\n\r\n.list-group-item-primary.list-group-item-action.active {\r\n  color: #fff;\r\n  background-color: #004085;\r\n  border-color: #004085;\r\n}\r\n\r\n.list-group-item-secondary {\r\n  color: #383d41;\r\n  background-color: #d6d8db;\r\n}\r\n\r\n.list-group-item-secondary.list-group-item-action:hover, .list-group-item-secondary.list-group-item-action:focus {\r\n  color: #383d41;\r\n  background-color: #c8cbcf;\r\n}\r\n\r\n.list-group-item-secondary.list-group-item-action.active {\r\n  color: #fff;\r\n  background-color: #383d41;\r\n  border-color: #383d41;\r\n}\r\n\r\n.list-group-item-success {\r\n  color: #155724;\r\n  background-color: #c3e6cb;\r\n}\r\n\r\n.list-group-item-success.list-group-item-action:hover, .list-group-item-success.list-group-item-action:focus {\r\n  color: #155724;\r\n  background-color: #b1dfbb;\r\n}\r\n\r\n.list-group-item-success.list-group-item-action.active {\r\n  color: #fff;\r\n  background-color: #155724;\r\n  border-color: #155724;\r\n}\r\n\r\n.list-group-item-info {\r\n  color: #0c5460;\r\n  background-color: #bee5eb;\r\n}\r\n\r\n.list-group-item-info.list-group-item-action:hover, .list-group-item-info.list-group-item-action:focus {\r\n  color: #0c5460;\r\n  background-color: #abdde5;\r\n}\r\n\r\n.list-group-item-info.list-group-item-action.active {\r\n  color: #fff;\r\n  background-color: #0c5460;\r\n  border-color: #0c5460;\r\n}\r\n\r\n.list-group-item-warning {\r\n  color: #856404;\r\n  background-color: #ffeeba;\r\n}\r\n\r\n.list-group-item-warning.list-group-item-action:hover, .list-group-item-warning.list-group-item-action:focus {\r\n  color: #856404;\r\n  background-color: #ffe8a1;\r\n}\r\n\r\n.list-group-item-warning.list-group-item-action.active {\r\n  color: #fff;\r\n  background-color: #856404;\r\n  border-color: #856404;\r\n}\r\n\r\n.list-group-item-danger {\r\n  color: #721c24;\r\n  background-color: #f5c6cb;\r\n}\r\n\r\n.list-group-item-danger.list-group-item-action:hover, .list-group-item-danger.list-group-item-action:focus {\r\n  color: #721c24;\r\n  background-color: #f1b0b7;\r\n}\r\n\r\n.list-group-item-danger.list-group-item-action.active {\r\n  color: #fff;\r\n  background-color: #721c24;\r\n  border-color: #721c24;\r\n}\r\n\r\n.list-group-item-light {\r\n  color: #818182;\r\n  background-color: #fdfdfe;\r\n}\r\n\r\n.list-group-item-light.list-group-item-action:hover, .list-group-item-light.list-group-item-action:focus {\r\n  color: #818182;\r\n  background-color: #ececf6;\r\n}\r\n\r\n.list-group-item-light.list-group-item-action.active {\r\n  color: #fff;\r\n  background-color: #818182;\r\n  border-color: #818182;\r\n}\r\n\r\n.list-group-item-dark {\r\n  color: #1b1e21;\r\n  background-color: #c6c8ca;\r\n}\r\n\r\n.list-group-item-dark.list-group-item-action:hover, .list-group-item-dark.list-group-item-action:focus {\r\n  color: #1b1e21;\r\n  background-color: #b9bbbe;\r\n}\r\n\r\n.list-group-item-dark.list-group-item-action.active {\r\n  color: #fff;\r\n  background-color: #1b1e21;\r\n  border-color: #1b1e21;\r\n}\r\n\r\n.close {\r\n  float: right;\r\n  font-size: 1.5rem;\r\n  font-weight: 700;\r\n  line-height: 1;\r\n  color: #000;\r\n  text-shadow: 0 1px 0 #fff;\r\n  opacity: .5;\r\n}\r\n\r\n.close:hover, .close:focus {\r\n  color: #000;\r\n  text-decoration: none;\r\n  opacity: .75;\r\n}\r\n\r\n.close:not(:disabled):not(.disabled) {\r\n  cursor: pointer;\r\n}\r\n\r\nbutton.close {\r\n  padding: 0;\r\n  background-color: transparent;\r\n  border: 0;\r\n  -webkit-appearance: none;\r\n}\r\n\r\n.modal-open {\r\n  overflow: hidden;\r\n}\r\n\r\n.modal {\r\n  position: fixed;\r\n  top: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  z-index: 1050;\r\n  display: none;\r\n  overflow: hidden;\r\n  outline: 0;\r\n}\r\n\r\n.modal-open .modal {\r\n  overflow-x: hidden;\r\n  overflow-y: auto;\r\n}\r\n\r\n.modal-dialog {\r\n  position: relative;\r\n  width: auto;\r\n  margin: 0.5rem;\r\n  pointer-events: none;\r\n}\r\n\r\n.modal.fade .modal-dialog {\r\n  transition: -webkit-transform 0.3s ease-out;\r\n  transition: transform 0.3s ease-out;\r\n  transition: transform 0.3s ease-out, -webkit-transform 0.3s ease-out;\r\n  -webkit-transform: translate(0, -25%);\r\n  transform: translate(0, -25%);\r\n}\r\n\r\n.modal.show .modal-dialog {\r\n  -webkit-transform: translate(0, 0);\r\n  transform: translate(0, 0);\r\n}\r\n\r\n.modal-dialog-centered {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-align: center;\r\n  -ms-flex-align: center;\r\n  align-items: center;\r\n  min-height: calc(100% - (0.5rem * 2));\r\n}\r\n\r\n.modal-content {\r\n  position: relative;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n  -ms-flex-direction: column;\r\n  flex-direction: column;\r\n  width: 100%;\r\n  pointer-events: auto;\r\n  background-color: #fff;\r\n  background-clip: padding-box;\r\n  border: 1px solid rgba(0, 0, 0, 0.2);\r\n  border-radius: 0.3rem;\r\n  outline: 0;\r\n}\r\n\r\n.modal-backdrop {\r\n  position: fixed;\r\n  top: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  z-index: 1040;\r\n  background-color: #000;\r\n}\r\n\r\n.modal-backdrop.fade {\r\n  opacity: 0;\r\n}\r\n\r\n.modal-backdrop.show {\r\n  opacity: 0.5;\r\n}\r\n\r\n.modal-header {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-align: start;\r\n  -ms-flex-align: start;\r\n  align-items: flex-start;\r\n  -webkit-box-pack: justify;\r\n  -ms-flex-pack: justify;\r\n  justify-content: space-between;\r\n  padding: 1rem;\r\n  border-bottom: 1px solid #e9ecef;\r\n  border-top-left-radius: 0.3rem;\r\n  border-top-right-radius: 0.3rem;\r\n}\r\n\r\n.modal-header .close {\r\n  padding: 1rem;\r\n  margin: -1rem -1rem -1rem auto;\r\n}\r\n\r\n.modal-title {\r\n  margin-bottom: 0;\r\n  line-height: 1.5;\r\n}\r\n\r\n.modal-body {\r\n  position: relative;\r\n  -webkit-box-flex: 1;\r\n  -ms-flex: 1 1 auto;\r\n  flex: 1 1 auto;\r\n  padding: 1rem;\r\n}\r\n\r\n.modal-footer {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-align: center;\r\n  -ms-flex-align: center;\r\n  align-items: center;\r\n  -webkit-box-pack: end;\r\n  -ms-flex-pack: end;\r\n  justify-content: flex-end;\r\n  padding: 1rem;\r\n  border-top: 1px solid #e9ecef;\r\n}\r\n\r\n.modal-footer > :not(:first-child) {\r\n  margin-left: .25rem;\r\n}\r\n\r\n.modal-footer > :not(:last-child) {\r\n  margin-right: .25rem;\r\n}\r\n\r\n.modal-scrollbar-measure {\r\n  position: absolute;\r\n  top: -9999px;\r\n  width: 50px;\r\n  height: 50px;\r\n  overflow: scroll;\r\n}\r\n\r\n@media (min-width: 576px) {\r\n  .modal-dialog {\r\n    max-width: 500px;\r\n    margin: 1.75rem auto;\r\n  }\r\n  .modal-dialog-centered {\r\n    min-height: calc(100% - (1.75rem * 2));\r\n  }\r\n  .modal-sm {\r\n    max-width: 300px;\r\n  }\r\n}\r\n\r\n@media (min-width: 992px) {\r\n  .modal-lg {\r\n    max-width: 800px;\r\n  }\r\n}\r\n\r\n.tooltip {\r\n  position: absolute;\r\n  z-index: 1070;\r\n  display: block;\r\n  margin: 0;\r\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\r\n  font-style: normal;\r\n  font-weight: 400;\r\n  line-height: 1.5;\r\n  text-align: left;\r\n  text-align: start;\r\n  text-decoration: none;\r\n  text-shadow: none;\r\n  text-transform: none;\r\n  letter-spacing: normal;\r\n  word-break: normal;\r\n  word-spacing: normal;\r\n  white-space: normal;\r\n  line-break: auto;\r\n  font-size: 0.875rem;\r\n  word-wrap: break-word;\r\n  opacity: 0;\r\n}\r\n\r\n.tooltip.show {\r\n  opacity: 0.9;\r\n}\r\n\r\n.tooltip .arrow {\r\n  position: absolute;\r\n  display: block;\r\n  width: 0.8rem;\r\n  height: 0.4rem;\r\n}\r\n\r\n.tooltip .arrow::before {\r\n  position: absolute;\r\n  content: \"\";\r\n  border-color: transparent;\r\n  border-style: solid;\r\n}\r\n\r\n.bs-tooltip-top, .bs-tooltip-auto[x-placement^=\"top\"] {\r\n  padding: 0.4rem 0;\r\n}\r\n\r\n.bs-tooltip-top .arrow, .bs-tooltip-auto[x-placement^=\"top\"] .arrow {\r\n  bottom: 0;\r\n}\r\n\r\n.bs-tooltip-top .arrow::before, .bs-tooltip-auto[x-placement^=\"top\"] .arrow::before {\r\n  top: 0;\r\n  border-width: 0.4rem 0.4rem 0;\r\n  border-top-color: #000;\r\n}\r\n\r\n.bs-tooltip-right, .bs-tooltip-auto[x-placement^=\"right\"] {\r\n  padding: 0 0.4rem;\r\n}\r\n\r\n.bs-tooltip-right .arrow, .bs-tooltip-auto[x-placement^=\"right\"] .arrow {\r\n  left: 0;\r\n  width: 0.4rem;\r\n  height: 0.8rem;\r\n}\r\n\r\n.bs-tooltip-right .arrow::before, .bs-tooltip-auto[x-placement^=\"right\"] .arrow::before {\r\n  right: 0;\r\n  border-width: 0.4rem 0.4rem 0.4rem 0;\r\n  border-right-color: #000;\r\n}\r\n\r\n.bs-tooltip-bottom, .bs-tooltip-auto[x-placement^=\"bottom\"] {\r\n  padding: 0.4rem 0;\r\n}\r\n\r\n.bs-tooltip-bottom .arrow, .bs-tooltip-auto[x-placement^=\"bottom\"] .arrow {\r\n  top: 0;\r\n}\r\n\r\n.bs-tooltip-bottom .arrow::before, .bs-tooltip-auto[x-placement^=\"bottom\"] .arrow::before {\r\n  bottom: 0;\r\n  border-width: 0 0.4rem 0.4rem;\r\n  border-bottom-color: #000;\r\n}\r\n\r\n.bs-tooltip-left, .bs-tooltip-auto[x-placement^=\"left\"] {\r\n  padding: 0 0.4rem;\r\n}\r\n\r\n.bs-tooltip-left .arrow, .bs-tooltip-auto[x-placement^=\"left\"] .arrow {\r\n  right: 0;\r\n  width: 0.4rem;\r\n  height: 0.8rem;\r\n}\r\n\r\n.bs-tooltip-left .arrow::before, .bs-tooltip-auto[x-placement^=\"left\"] .arrow::before {\r\n  left: 0;\r\n  border-width: 0.4rem 0 0.4rem 0.4rem;\r\n  border-left-color: #000;\r\n}\r\n\r\n.tooltip-inner {\r\n  max-width: 200px;\r\n  padding: 0.25rem 0.5rem;\r\n  color: #fff;\r\n  text-align: center;\r\n  background-color: #000;\r\n  border-radius: 0.25rem;\r\n}\r\n\r\n.popover {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  z-index: 1060;\r\n  display: block;\r\n  max-width: 276px;\r\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\r\n  font-style: normal;\r\n  font-weight: 400;\r\n  line-height: 1.5;\r\n  text-align: left;\r\n  text-align: start;\r\n  text-decoration: none;\r\n  text-shadow: none;\r\n  text-transform: none;\r\n  letter-spacing: normal;\r\n  word-break: normal;\r\n  word-spacing: normal;\r\n  white-space: normal;\r\n  line-break: auto;\r\n  font-size: 0.875rem;\r\n  word-wrap: break-word;\r\n  background-color: #fff;\r\n  background-clip: padding-box;\r\n  border: 1px solid rgba(0, 0, 0, 0.2);\r\n  border-radius: 0.3rem;\r\n}\r\n\r\n.popover .arrow {\r\n  position: absolute;\r\n  display: block;\r\n  width: 1rem;\r\n  height: 0.5rem;\r\n  margin: 0 0.3rem;\r\n}\r\n\r\n.popover .arrow::before, .popover .arrow::after {\r\n  position: absolute;\r\n  display: block;\r\n  content: \"\";\r\n  border-color: transparent;\r\n  border-style: solid;\r\n}\r\n\r\n.bs-popover-top, .bs-popover-auto[x-placement^=\"top\"] {\r\n  margin-bottom: 0.5rem;\r\n}\r\n\r\n.bs-popover-top .arrow, .bs-popover-auto[x-placement^=\"top\"] .arrow {\r\n  bottom: calc((0.5rem + 1px) * -1);\r\n}\r\n\r\n.bs-popover-top .arrow::before, .bs-popover-auto[x-placement^=\"top\"] .arrow::before,\r\n.bs-popover-top .arrow::after, .bs-popover-auto[x-placement^=\"top\"] .arrow::after {\r\n  border-width: 0.5rem 0.5rem 0;\r\n}\r\n\r\n.bs-popover-top .arrow::before, .bs-popover-auto[x-placement^=\"top\"] .arrow::before {\r\n  bottom: 0;\r\n  border-top-color: rgba(0, 0, 0, 0.25);\r\n}\r\n\r\n.bs-popover-top .arrow::after, .bs-popover-auto[x-placement^=\"top\"] .arrow::after {\r\n  bottom: 1px;\r\n  border-top-color: #fff;\r\n}\r\n\r\n.bs-popover-right, .bs-popover-auto[x-placement^=\"right\"] {\r\n  margin-left: 0.5rem;\r\n}\r\n\r\n.bs-popover-right .arrow, .bs-popover-auto[x-placement^=\"right\"] .arrow {\r\n  left: calc((0.5rem + 1px) * -1);\r\n  width: 0.5rem;\r\n  height: 1rem;\r\n  margin: 0.3rem 0;\r\n}\r\n\r\n.bs-popover-right .arrow::before, .bs-popover-auto[x-placement^=\"right\"] .arrow::before,\r\n.bs-popover-right .arrow::after, .bs-popover-auto[x-placement^=\"right\"] .arrow::after {\r\n  border-width: 0.5rem 0.5rem 0.5rem 0;\r\n}\r\n\r\n.bs-popover-right .arrow::before, .bs-popover-auto[x-placement^=\"right\"] .arrow::before {\r\n  left: 0;\r\n  border-right-color: rgba(0, 0, 0, 0.25);\r\n}\r\n\r\n.bs-popover-right .arrow::after, .bs-popover-auto[x-placement^=\"right\"] .arrow::after {\r\n  left: 1px;\r\n  border-right-color: #fff;\r\n}\r\n\r\n.bs-popover-bottom, .bs-popover-auto[x-placement^=\"bottom\"] {\r\n  margin-top: 0.5rem;\r\n}\r\n\r\n.bs-popover-bottom .arrow, .bs-popover-auto[x-placement^=\"bottom\"] .arrow {\r\n  top: calc((0.5rem + 1px) * -1);\r\n}\r\n\r\n.bs-popover-bottom .arrow::before, .bs-popover-auto[x-placement^=\"bottom\"] .arrow::before,\r\n.bs-popover-bottom .arrow::after, .bs-popover-auto[x-placement^=\"bottom\"] .arrow::after {\r\n  border-width: 0 0.5rem 0.5rem 0.5rem;\r\n}\r\n\r\n.bs-popover-bottom .arrow::before, .bs-popover-auto[x-placement^=\"bottom\"] .arrow::before {\r\n  top: 0;\r\n  border-bottom-color: rgba(0, 0, 0, 0.25);\r\n}\r\n\r\n.bs-popover-bottom .arrow::after, .bs-popover-auto[x-placement^=\"bottom\"] .arrow::after {\r\n  top: 1px;\r\n  border-bottom-color: #fff;\r\n}\r\n\r\n.bs-popover-bottom .popover-header::before, .bs-popover-auto[x-placement^=\"bottom\"] .popover-header::before {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 50%;\r\n  display: block;\r\n  width: 1rem;\r\n  margin-left: -0.5rem;\r\n  content: \"\";\r\n  border-bottom: 1px solid #f7f7f7;\r\n}\r\n\r\n.bs-popover-left, .bs-popover-auto[x-placement^=\"left\"] {\r\n  margin-right: 0.5rem;\r\n}\r\n\r\n.bs-popover-left .arrow, .bs-popover-auto[x-placement^=\"left\"] .arrow {\r\n  right: calc((0.5rem + 1px) * -1);\r\n  width: 0.5rem;\r\n  height: 1rem;\r\n  margin: 0.3rem 0;\r\n}\r\n\r\n.bs-popover-left .arrow::before, .bs-popover-auto[x-placement^=\"left\"] .arrow::before,\r\n.bs-popover-left .arrow::after, .bs-popover-auto[x-placement^=\"left\"] .arrow::after {\r\n  border-width: 0.5rem 0 0.5rem 0.5rem;\r\n}\r\n\r\n.bs-popover-left .arrow::before, .bs-popover-auto[x-placement^=\"left\"] .arrow::before {\r\n  right: 0;\r\n  border-left-color: rgba(0, 0, 0, 0.25);\r\n}\r\n\r\n.bs-popover-left .arrow::after, .bs-popover-auto[x-placement^=\"left\"] .arrow::after {\r\n  right: 1px;\r\n  border-left-color: #fff;\r\n}\r\n\r\n.popover-header {\r\n  padding: 0.5rem 0.75rem;\r\n  margin-bottom: 0;\r\n  font-size: 1rem;\r\n  color: inherit;\r\n  background-color: #f7f7f7;\r\n  border-bottom: 1px solid #ebebeb;\r\n  border-top-left-radius: calc(0.3rem - 1px);\r\n  border-top-right-radius: calc(0.3rem - 1px);\r\n}\r\n\r\n.popover-header:empty {\r\n  display: none;\r\n}\r\n\r\n.popover-body {\r\n  padding: 0.5rem 0.75rem;\r\n  color: #212529;\r\n}\r\n\r\n.carousel {\r\n  position: relative;\r\n}\r\n\r\n.carousel-inner {\r\n  position: relative;\r\n  width: 100%;\r\n  overflow: hidden;\r\n}\r\n\r\n.carousel-item {\r\n  position: relative;\r\n  display: none;\r\n  -webkit-box-align: center;\r\n  -ms-flex-align: center;\r\n  align-items: center;\r\n  width: 100%;\r\n  transition: -webkit-transform 0.6s ease;\r\n  transition: transform 0.6s ease;\r\n  transition: transform 0.6s ease, -webkit-transform 0.6s ease;\r\n  -webkit-backface-visibility: hidden;\r\n  backface-visibility: hidden;\r\n  -webkit-perspective: 1000px;\r\n  perspective: 1000px;\r\n}\r\n\r\n.carousel-item.active,\r\n.carousel-item-next,\r\n.carousel-item-prev {\r\n  display: block;\r\n}\r\n\r\n.carousel-item-next,\r\n.carousel-item-prev {\r\n  position: absolute;\r\n  top: 0;\r\n}\r\n\r\n.carousel-item-next.carousel-item-left,\r\n.carousel-item-prev.carousel-item-right {\r\n  -webkit-transform: translateX(0);\r\n  transform: translateX(0);\r\n}\r\n\r\n@supports ((-webkit-transform-style: preserve-3d) or (transform-style: preserve-3d)) {\r\n  .carousel-item-next.carousel-item-left,\r\n  .carousel-item-prev.carousel-item-right {\r\n    -webkit-transform: translate3d(0, 0, 0);\r\n    transform: translate3d(0, 0, 0);\r\n  }\r\n}\r\n\r\n.carousel-item-next,\r\n.active.carousel-item-right {\r\n  -webkit-transform: translateX(100%);\r\n  transform: translateX(100%);\r\n}\r\n\r\n@supports ((-webkit-transform-style: preserve-3d) or (transform-style: preserve-3d)) {\r\n  .carousel-item-next,\r\n  .active.carousel-item-right {\r\n    -webkit-transform: translate3d(100%, 0, 0);\r\n    transform: translate3d(100%, 0, 0);\r\n  }\r\n}\r\n\r\n.carousel-item-prev,\r\n.active.carousel-item-left {\r\n  -webkit-transform: translateX(-100%);\r\n  transform: translateX(-100%);\r\n}\r\n\r\n@supports ((-webkit-transform-style: preserve-3d) or (transform-style: preserve-3d)) {\r\n  .carousel-item-prev,\r\n  .active.carousel-item-left {\r\n    -webkit-transform: translate3d(-100%, 0, 0);\r\n    transform: translate3d(-100%, 0, 0);\r\n  }\r\n}\r\n\r\n.carousel-control-prev,\r\n.carousel-control-next {\r\n  position: absolute;\r\n  top: 0;\r\n  bottom: 0;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-align: center;\r\n  -ms-flex-align: center;\r\n  align-items: center;\r\n  -webkit-box-pack: center;\r\n  -ms-flex-pack: center;\r\n  justify-content: center;\r\n  width: 15%;\r\n  color: #fff;\r\n  text-align: center;\r\n  opacity: 0.5;\r\n}\r\n\r\n.carousel-control-prev:hover, .carousel-control-prev:focus,\r\n.carousel-control-next:hover,\r\n.carousel-control-next:focus {\r\n  color: #fff;\r\n  text-decoration: none;\r\n  outline: 0;\r\n  opacity: .9;\r\n}\r\n\r\n.carousel-control-prev {\r\n  left: 0;\r\n}\r\n\r\n.carousel-control-next {\r\n  right: 0;\r\n}\r\n\r\n.carousel-control-prev-icon,\r\n.carousel-control-next-icon {\r\n  display: inline-block;\r\n  width: 20px;\r\n  height: 20px;\r\n  background: transparent no-repeat center center;\r\n  background-size: 100% 100%;\r\n}\r\n\r\n.carousel-control-prev-icon {\r\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23fff' viewBox='0 0 8 8'%3E%3Cpath d='M5.25 0l-4 4 4 4 1.5-1.5-2.5-2.5 2.5-2.5-1.5-1.5z'/%3E%3C/svg%3E\");\r\n}\r\n\r\n.carousel-control-next-icon {\r\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23fff' viewBox='0 0 8 8'%3E%3Cpath d='M2.75 0l-1.5 1.5 2.5 2.5-2.5 2.5 1.5 1.5 4-4-4-4z'/%3E%3C/svg%3E\");\r\n}\r\n\r\n.carousel-indicators {\r\n  position: absolute;\r\n  right: 0;\r\n  bottom: 10px;\r\n  left: 0;\r\n  z-index: 15;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-pack: center;\r\n  -ms-flex-pack: center;\r\n  justify-content: center;\r\n  padding-left: 0;\r\n  margin-right: 15%;\r\n  margin-left: 15%;\r\n  list-style: none;\r\n}\r\n\r\n.carousel-indicators li {\r\n  position: relative;\r\n  -webkit-box-flex: 0;\r\n  -ms-flex: 0 1 auto;\r\n  flex: 0 1 auto;\r\n  width: 30px;\r\n  height: 3px;\r\n  margin-right: 3px;\r\n  margin-left: 3px;\r\n  text-indent: -999px;\r\n  background-color: rgba(255, 255, 255, 0.5);\r\n}\r\n\r\n.carousel-indicators li::before {\r\n  position: absolute;\r\n  top: -10px;\r\n  left: 0;\r\n  display: inline-block;\r\n  width: 100%;\r\n  height: 10px;\r\n  content: \"\";\r\n}\r\n\r\n.carousel-indicators li::after {\r\n  position: absolute;\r\n  bottom: -10px;\r\n  left: 0;\r\n  display: inline-block;\r\n  width: 100%;\r\n  height: 10px;\r\n  content: \"\";\r\n}\r\n\r\n.carousel-indicators .active {\r\n  background-color: #fff;\r\n}\r\n\r\n.carousel-caption {\r\n  position: absolute;\r\n  right: 15%;\r\n  bottom: 20px;\r\n  left: 15%;\r\n  z-index: 10;\r\n  padding-top: 20px;\r\n  padding-bottom: 20px;\r\n  color: #fff;\r\n  text-align: center;\r\n}\r\n\r\n.align-baseline {\r\n  vertical-align: baseline !important;\r\n}\r\n\r\n.align-top {\r\n  vertical-align: top !important;\r\n}\r\n\r\n.align-middle {\r\n  vertical-align: middle !important;\r\n}\r\n\r\n.align-bottom {\r\n  vertical-align: bottom !important;\r\n}\r\n\r\n.align-text-bottom {\r\n  vertical-align: text-bottom !important;\r\n}\r\n\r\n.align-text-top {\r\n  vertical-align: text-top !important;\r\n}\r\n\r\n.bg-primary {\r\n  background-color: #007bff !important;\r\n}\r\n\r\na.bg-primary:hover, a.bg-primary:focus,\r\nbutton.bg-primary:hover,\r\nbutton.bg-primary:focus {\r\n  background-color: #0062cc !important;\r\n}\r\n\r\n.bg-secondary {\r\n  background-color: #6c757d !important;\r\n}\r\n\r\na.bg-secondary:hover, a.bg-secondary:focus,\r\nbutton.bg-secondary:hover,\r\nbutton.bg-secondary:focus {\r\n  background-color: #545b62 !important;\r\n}\r\n\r\n.bg-success {\r\n  background-color: #28a745 !important;\r\n}\r\n\r\na.bg-success:hover, a.bg-success:focus,\r\nbutton.bg-success:hover,\r\nbutton.bg-success:focus {\r\n  background-color: #1e7e34 !important;\r\n}\r\n\r\n.bg-info {\r\n  background-color: #17a2b8 !important;\r\n}\r\n\r\na.bg-info:hover, a.bg-info:focus,\r\nbutton.bg-info:hover,\r\nbutton.bg-info:focus {\r\n  background-color: #117a8b !important;\r\n}\r\n\r\n.bg-warning {\r\n  background-color: #ffc107 !important;\r\n}\r\n\r\na.bg-warning:hover, a.bg-warning:focus,\r\nbutton.bg-warning:hover,\r\nbutton.bg-warning:focus {\r\n  background-color: #d39e00 !important;\r\n}\r\n\r\n.bg-danger {\r\n  background-color: #dc3545 !important;\r\n}\r\n\r\na.bg-danger:hover, a.bg-danger:focus,\r\nbutton.bg-danger:hover,\r\nbutton.bg-danger:focus {\r\n  background-color: #bd2130 !important;\r\n}\r\n\r\n.bg-light {\r\n  background-color: #f8f9fa !important;\r\n}\r\n\r\na.bg-light:hover, a.bg-light:focus,\r\nbutton.bg-light:hover,\r\nbutton.bg-light:focus {\r\n  background-color: #dae0e5 !important;\r\n}\r\n\r\n.bg-dark {\r\n  background-color: #343a40 !important;\r\n}\r\n\r\na.bg-dark:hover, a.bg-dark:focus,\r\nbutton.bg-dark:hover,\r\nbutton.bg-dark:focus {\r\n  background-color: #1d2124 !important;\r\n}\r\n\r\n.bg-white {\r\n  background-color: #fff !important;\r\n}\r\n\r\n.bg-transparent {\r\n  background-color: transparent !important;\r\n}\r\n\r\n.border {\r\n  border: 1px solid #dee2e6 !important;\r\n}\r\n\r\n.border-top {\r\n  border-top: 1px solid #dee2e6 !important;\r\n}\r\n\r\n.border-right {\r\n  border-right: 1px solid #dee2e6 !important;\r\n}\r\n\r\n.border-bottom {\r\n  border-bottom: 1px solid #dee2e6 !important;\r\n}\r\n\r\n.border-left {\r\n  border-left: 1px solid #dee2e6 !important;\r\n}\r\n\r\n.border-0 {\r\n  border: 0 !important;\r\n}\r\n\r\n.border-top-0 {\r\n  border-top: 0 !important;\r\n}\r\n\r\n.border-right-0 {\r\n  border-right: 0 !important;\r\n}\r\n\r\n.border-bottom-0 {\r\n  border-bottom: 0 !important;\r\n}\r\n\r\n.border-left-0 {\r\n  border-left: 0 !important;\r\n}\r\n\r\n.border-primary {\r\n  border-color: #007bff !important;\r\n}\r\n\r\n.border-secondary {\r\n  border-color: #6c757d !important;\r\n}\r\n\r\n.border-success {\r\n  border-color: #28a745 !important;\r\n}\r\n\r\n.border-info {\r\n  border-color: #17a2b8 !important;\r\n}\r\n\r\n.border-warning {\r\n  border-color: #ffc107 !important;\r\n}\r\n\r\n.border-danger {\r\n  border-color: #dc3545 !important;\r\n}\r\n\r\n.border-light {\r\n  border-color: #f8f9fa !important;\r\n}\r\n\r\n.border-dark {\r\n  border-color: #343a40 !important;\r\n}\r\n\r\n.border-white {\r\n  border-color: #fff !important;\r\n}\r\n\r\n.rounded {\r\n  border-radius: 0.25rem !important;\r\n}\r\n\r\n.rounded-top {\r\n  border-top-left-radius: 0.25rem !important;\r\n  border-top-right-radius: 0.25rem !important;\r\n}\r\n\r\n.rounded-right {\r\n  border-top-right-radius: 0.25rem !important;\r\n  border-bottom-right-radius: 0.25rem !important;\r\n}\r\n\r\n.rounded-bottom {\r\n  border-bottom-right-radius: 0.25rem !important;\r\n  border-bottom-left-radius: 0.25rem !important;\r\n}\r\n\r\n.rounded-left {\r\n  border-top-left-radius: 0.25rem !important;\r\n  border-bottom-left-radius: 0.25rem !important;\r\n}\r\n\r\n.rounded-circle {\r\n  border-radius: 50% !important;\r\n}\r\n\r\n.rounded-0 {\r\n  border-radius: 0 !important;\r\n}\r\n\r\n.clearfix::after {\r\n  display: block;\r\n  clear: both;\r\n  content: \"\";\r\n}\r\n\r\n.d-none {\r\n  display: none !important;\r\n}\r\n\r\n.d-inline {\r\n  display: inline !important;\r\n}\r\n\r\n.d-inline-block {\r\n  display: inline-block !important;\r\n}\r\n\r\n.d-block {\r\n  display: block !important;\r\n}\r\n\r\n.d-table {\r\n  display: table !important;\r\n}\r\n\r\n.d-table-row {\r\n  display: table-row !important;\r\n}\r\n\r\n.d-table-cell {\r\n  display: table-cell !important;\r\n}\r\n\r\n.d-flex {\r\n  display: -webkit-box !important;\r\n  display: -ms-flexbox !important;\r\n  display: flex !important;\r\n}\r\n\r\n.d-inline-flex {\r\n  display: -webkit-inline-box !important;\r\n  display: -ms-inline-flexbox !important;\r\n  display: inline-flex !important;\r\n}\r\n\r\n@media (min-width: 576px) {\r\n  .d-sm-none {\r\n    display: none !important;\r\n  }\r\n  .d-sm-inline {\r\n    display: inline !important;\r\n  }\r\n  .d-sm-inline-block {\r\n    display: inline-block !important;\r\n  }\r\n  .d-sm-block {\r\n    display: block !important;\r\n  }\r\n  .d-sm-table {\r\n    display: table !important;\r\n  }\r\n  .d-sm-table-row {\r\n    display: table-row !important;\r\n  }\r\n  .d-sm-table-cell {\r\n    display: table-cell !important;\r\n  }\r\n  .d-sm-flex {\r\n    display: -webkit-box !important;\r\n    display: -ms-flexbox !important;\r\n    display: flex !important;\r\n  }\r\n  .d-sm-inline-flex {\r\n    display: -webkit-inline-box !important;\r\n    display: -ms-inline-flexbox !important;\r\n    display: inline-flex !important;\r\n  }\r\n}\r\n\r\n@media (min-width: 768px) {\r\n  .d-md-none {\r\n    display: none !important;\r\n  }\r\n  .d-md-inline {\r\n    display: inline !important;\r\n  }\r\n  .d-md-inline-block {\r\n    display: inline-block !important;\r\n  }\r\n  .d-md-block {\r\n    display: block !important;\r\n  }\r\n  .d-md-table {\r\n    display: table !important;\r\n  }\r\n  .d-md-table-row {\r\n    display: table-row !important;\r\n  }\r\n  .d-md-table-cell {\r\n    display: table-cell !important;\r\n  }\r\n  .d-md-flex {\r\n    display: -webkit-box !important;\r\n    display: -ms-flexbox !important;\r\n    display: flex !important;\r\n  }\r\n  .d-md-inline-flex {\r\n    display: -webkit-inline-box !important;\r\n    display: -ms-inline-flexbox !important;\r\n    display: inline-flex !important;\r\n  }\r\n}\r\n\r\n@media (min-width: 992px) {\r\n  .d-lg-none {\r\n    display: none !important;\r\n  }\r\n  .d-lg-inline {\r\n    display: inline !important;\r\n  }\r\n  .d-lg-inline-block {\r\n    display: inline-block !important;\r\n  }\r\n  .d-lg-block {\r\n    display: block !important;\r\n  }\r\n  .d-lg-table {\r\n    display: table !important;\r\n  }\r\n  .d-lg-table-row {\r\n    display: table-row !important;\r\n  }\r\n  .d-lg-table-cell {\r\n    display: table-cell !important;\r\n  }\r\n  .d-lg-flex {\r\n    display: -webkit-box !important;\r\n    display: -ms-flexbox !important;\r\n    display: flex !important;\r\n  }\r\n  .d-lg-inline-flex {\r\n    display: -webkit-inline-box !important;\r\n    display: -ms-inline-flexbox !important;\r\n    display: inline-flex !important;\r\n  }\r\n}\r\n\r\n@media (min-width: 1200px) {\r\n  .d-xl-none {\r\n    display: none !important;\r\n  }\r\n  .d-xl-inline {\r\n    display: inline !important;\r\n  }\r\n  .d-xl-inline-block {\r\n    display: inline-block !important;\r\n  }\r\n  .d-xl-block {\r\n    display: block !important;\r\n  }\r\n  .d-xl-table {\r\n    display: table !important;\r\n  }\r\n  .d-xl-table-row {\r\n    display: table-row !important;\r\n  }\r\n  .d-xl-table-cell {\r\n    display: table-cell !important;\r\n  }\r\n  .d-xl-flex {\r\n    display: -webkit-box !important;\r\n    display: -ms-flexbox !important;\r\n    display: flex !important;\r\n  }\r\n  .d-xl-inline-flex {\r\n    display: -webkit-inline-box !important;\r\n    display: -ms-inline-flexbox !important;\r\n    display: inline-flex !important;\r\n  }\r\n}\r\n\r\n@media print {\r\n  .d-print-none {\r\n    display: none !important;\r\n  }\r\n  .d-print-inline {\r\n    display: inline !important;\r\n  }\r\n  .d-print-inline-block {\r\n    display: inline-block !important;\r\n  }\r\n  .d-print-block {\r\n    display: block !important;\r\n  }\r\n  .d-print-table {\r\n    display: table !important;\r\n  }\r\n  .d-print-table-row {\r\n    display: table-row !important;\r\n  }\r\n  .d-print-table-cell {\r\n    display: table-cell !important;\r\n  }\r\n  .d-print-flex {\r\n    display: -webkit-box !important;\r\n    display: -ms-flexbox !important;\r\n    display: flex !important;\r\n  }\r\n  .d-print-inline-flex {\r\n    display: -webkit-inline-box !important;\r\n    display: -ms-inline-flexbox !important;\r\n    display: inline-flex !important;\r\n  }\r\n}\r\n\r\n.embed-responsive {\r\n  position: relative;\r\n  display: block;\r\n  width: 100%;\r\n  padding: 0;\r\n  overflow: hidden;\r\n}\r\n\r\n.embed-responsive::before {\r\n  display: block;\r\n  content: \"\";\r\n}\r\n\r\n.embed-responsive .embed-responsive-item,\r\n.embed-responsive iframe,\r\n.embed-responsive embed,\r\n.embed-responsive object,\r\n.embed-responsive video {\r\n  position: absolute;\r\n  top: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  border: 0;\r\n}\r\n\r\n.embed-responsive-21by9::before {\r\n  padding-top: 42.857143%;\r\n}\r\n\r\n.embed-responsive-16by9::before {\r\n  padding-top: 56.25%;\r\n}\r\n\r\n.embed-responsive-4by3::before {\r\n  padding-top: 75%;\r\n}\r\n\r\n.embed-responsive-1by1::before {\r\n  padding-top: 100%;\r\n}\r\n\r\n.flex-row {\r\n  -webkit-box-orient: horizontal !important;\r\n  -webkit-box-direction: normal !important;\r\n  -ms-flex-direction: row !important;\r\n  flex-direction: row !important;\r\n}\r\n\r\n.flex-column {\r\n  -webkit-box-orient: vertical !important;\r\n  -webkit-box-direction: normal !important;\r\n  -ms-flex-direction: column !important;\r\n  flex-direction: column !important;\r\n}\r\n\r\n.flex-row-reverse {\r\n  -webkit-box-orient: horizontal !important;\r\n  -webkit-box-direction: reverse !important;\r\n  -ms-flex-direction: row-reverse !important;\r\n  flex-direction: row-reverse !important;\r\n}\r\n\r\n.flex-column-reverse {\r\n  -webkit-box-orient: vertical !important;\r\n  -webkit-box-direction: reverse !important;\r\n  -ms-flex-direction: column-reverse !important;\r\n  flex-direction: column-reverse !important;\r\n}\r\n\r\n.flex-wrap {\r\n  -ms-flex-wrap: wrap !important;\r\n  flex-wrap: wrap !important;\r\n}\r\n\r\n.flex-nowrap {\r\n  -ms-flex-wrap: nowrap !important;\r\n  flex-wrap: nowrap !important;\r\n}\r\n\r\n.flex-wrap-reverse {\r\n  -ms-flex-wrap: wrap-reverse !important;\r\n  flex-wrap: wrap-reverse !important;\r\n}\r\n\r\n.justify-content-start {\r\n  -webkit-box-pack: start !important;\r\n  -ms-flex-pack: start !important;\r\n  justify-content: flex-start !important;\r\n}\r\n\r\n.justify-content-end {\r\n  -webkit-box-pack: end !important;\r\n  -ms-flex-pack: end !important;\r\n  justify-content: flex-end !important;\r\n}\r\n\r\n.justify-content-center {\r\n  -webkit-box-pack: center !important;\r\n  -ms-flex-pack: center !important;\r\n  justify-content: center !important;\r\n}\r\n\r\n.justify-content-between {\r\n  -webkit-box-pack: justify !important;\r\n  -ms-flex-pack: justify !important;\r\n  justify-content: space-between !important;\r\n}\r\n\r\n.justify-content-around {\r\n  -ms-flex-pack: distribute !important;\r\n  justify-content: space-around !important;\r\n}\r\n\r\n.align-items-start {\r\n  -webkit-box-align: start !important;\r\n  -ms-flex-align: start !important;\r\n  align-items: flex-start !important;\r\n}\r\n\r\n.align-items-end {\r\n  -webkit-box-align: end !important;\r\n  -ms-flex-align: end !important;\r\n  align-items: flex-end !important;\r\n}\r\n\r\n.align-items-center {\r\n  -webkit-box-align: center !important;\r\n  -ms-flex-align: center !important;\r\n  align-items: center !important;\r\n}\r\n\r\n.align-items-baseline {\r\n  -webkit-box-align: baseline !important;\r\n  -ms-flex-align: baseline !important;\r\n  align-items: baseline !important;\r\n}\r\n\r\n.align-items-stretch {\r\n  -webkit-box-align: stretch !important;\r\n  -ms-flex-align: stretch !important;\r\n  align-items: stretch !important;\r\n}\r\n\r\n.align-content-start {\r\n  -ms-flex-line-pack: start !important;\r\n  align-content: flex-start !important;\r\n}\r\n\r\n.align-content-end {\r\n  -ms-flex-line-pack: end !important;\r\n  align-content: flex-end !important;\r\n}\r\n\r\n.align-content-center {\r\n  -ms-flex-line-pack: center !important;\r\n  align-content: center !important;\r\n}\r\n\r\n.align-content-between {\r\n  -ms-flex-line-pack: justify !important;\r\n  align-content: space-between !important;\r\n}\r\n\r\n.align-content-around {\r\n  -ms-flex-line-pack: distribute !important;\r\n  align-content: space-around !important;\r\n}\r\n\r\n.align-content-stretch {\r\n  -ms-flex-line-pack: stretch !important;\r\n  align-content: stretch !important;\r\n}\r\n\r\n.align-self-auto {\r\n  -ms-flex-item-align: auto !important;\r\n  align-self: auto !important;\r\n}\r\n\r\n.align-self-start {\r\n  -ms-flex-item-align: start !important;\r\n  align-self: flex-start !important;\r\n}\r\n\r\n.align-self-end {\r\n  -ms-flex-item-align: end !important;\r\n  align-self: flex-end !important;\r\n}\r\n\r\n.align-self-center {\r\n  -ms-flex-item-align: center !important;\r\n  align-self: center !important;\r\n}\r\n\r\n.align-self-baseline {\r\n  -ms-flex-item-align: baseline !important;\r\n  align-self: baseline !important;\r\n}\r\n\r\n.align-self-stretch {\r\n  -ms-flex-item-align: stretch !important;\r\n  align-self: stretch !important;\r\n}\r\n\r\n@media (min-width: 576px) {\r\n  .flex-sm-row {\r\n    -webkit-box-orient: horizontal !important;\r\n    -webkit-box-direction: normal !important;\r\n    -ms-flex-direction: row !important;\r\n    flex-direction: row !important;\r\n  }\r\n  .flex-sm-column {\r\n    -webkit-box-orient: vertical !important;\r\n    -webkit-box-direction: normal !important;\r\n    -ms-flex-direction: column !important;\r\n    flex-direction: column !important;\r\n  }\r\n  .flex-sm-row-reverse {\r\n    -webkit-box-orient: horizontal !important;\r\n    -webkit-box-direction: reverse !important;\r\n    -ms-flex-direction: row-reverse !important;\r\n    flex-direction: row-reverse !important;\r\n  }\r\n  .flex-sm-column-reverse {\r\n    -webkit-box-orient: vertical !important;\r\n    -webkit-box-direction: reverse !important;\r\n    -ms-flex-direction: column-reverse !important;\r\n    flex-direction: column-reverse !important;\r\n  }\r\n  .flex-sm-wrap {\r\n    -ms-flex-wrap: wrap !important;\r\n    flex-wrap: wrap !important;\r\n  }\r\n  .flex-sm-nowrap {\r\n    -ms-flex-wrap: nowrap !important;\r\n    flex-wrap: nowrap !important;\r\n  }\r\n  .flex-sm-wrap-reverse {\r\n    -ms-flex-wrap: wrap-reverse !important;\r\n    flex-wrap: wrap-reverse !important;\r\n  }\r\n  .justify-content-sm-start {\r\n    -webkit-box-pack: start !important;\r\n    -ms-flex-pack: start !important;\r\n    justify-content: flex-start !important;\r\n  }\r\n  .justify-content-sm-end {\r\n    -webkit-box-pack: end !important;\r\n    -ms-flex-pack: end !important;\r\n    justify-content: flex-end !important;\r\n  }\r\n  .justify-content-sm-center {\r\n    -webkit-box-pack: center !important;\r\n    -ms-flex-pack: center !important;\r\n    justify-content: center !important;\r\n  }\r\n  .justify-content-sm-between {\r\n    -webkit-box-pack: justify !important;\r\n    -ms-flex-pack: justify !important;\r\n    justify-content: space-between !important;\r\n  }\r\n  .justify-content-sm-around {\r\n    -ms-flex-pack: distribute !important;\r\n    justify-content: space-around !important;\r\n  }\r\n  .align-items-sm-start {\r\n    -webkit-box-align: start !important;\r\n    -ms-flex-align: start !important;\r\n    align-items: flex-start !important;\r\n  }\r\n  .align-items-sm-end {\r\n    -webkit-box-align: end !important;\r\n    -ms-flex-align: end !important;\r\n    align-items: flex-end !important;\r\n  }\r\n  .align-items-sm-center {\r\n    -webkit-box-align: center !important;\r\n    -ms-flex-align: center !important;\r\n    align-items: center !important;\r\n  }\r\n  .align-items-sm-baseline {\r\n    -webkit-box-align: baseline !important;\r\n    -ms-flex-align: baseline !important;\r\n    align-items: baseline !important;\r\n  }\r\n  .align-items-sm-stretch {\r\n    -webkit-box-align: stretch !important;\r\n    -ms-flex-align: stretch !important;\r\n    align-items: stretch !important;\r\n  }\r\n  .align-content-sm-start {\r\n    -ms-flex-line-pack: start !important;\r\n    align-content: flex-start !important;\r\n  }\r\n  .align-content-sm-end {\r\n    -ms-flex-line-pack: end !important;\r\n    align-content: flex-end !important;\r\n  }\r\n  .align-content-sm-center {\r\n    -ms-flex-line-pack: center !important;\r\n    align-content: center !important;\r\n  }\r\n  .align-content-sm-between {\r\n    -ms-flex-line-pack: justify !important;\r\n    align-content: space-between !important;\r\n  }\r\n  .align-content-sm-around {\r\n    -ms-flex-line-pack: distribute !important;\r\n    align-content: space-around !important;\r\n  }\r\n  .align-content-sm-stretch {\r\n    -ms-flex-line-pack: stretch !important;\r\n    align-content: stretch !important;\r\n  }\r\n  .align-self-sm-auto {\r\n    -ms-flex-item-align: auto !important;\r\n    align-self: auto !important;\r\n  }\r\n  .align-self-sm-start {\r\n    -ms-flex-item-align: start !important;\r\n    align-self: flex-start !important;\r\n  }\r\n  .align-self-sm-end {\r\n    -ms-flex-item-align: end !important;\r\n    align-self: flex-end !important;\r\n  }\r\n  .align-self-sm-center {\r\n    -ms-flex-item-align: center !important;\r\n    align-self: center !important;\r\n  }\r\n  .align-self-sm-baseline {\r\n    -ms-flex-item-align: baseline !important;\r\n    align-self: baseline !important;\r\n  }\r\n  .align-self-sm-stretch {\r\n    -ms-flex-item-align: stretch !important;\r\n    align-self: stretch !important;\r\n  }\r\n}\r\n\r\n@media (min-width: 768px) {\r\n  .flex-md-row {\r\n    -webkit-box-orient: horizontal !important;\r\n    -webkit-box-direction: normal !important;\r\n    -ms-flex-direction: row !important;\r\n    flex-direction: row !important;\r\n  }\r\n  .flex-md-column {\r\n    -webkit-box-orient: vertical !important;\r\n    -webkit-box-direction: normal !important;\r\n    -ms-flex-direction: column !important;\r\n    flex-direction: column !important;\r\n  }\r\n  .flex-md-row-reverse {\r\n    -webkit-box-orient: horizontal !important;\r\n    -webkit-box-direction: reverse !important;\r\n    -ms-flex-direction: row-reverse !important;\r\n    flex-direction: row-reverse !important;\r\n  }\r\n  .flex-md-column-reverse {\r\n    -webkit-box-orient: vertical !important;\r\n    -webkit-box-direction: reverse !important;\r\n    -ms-flex-direction: column-reverse !important;\r\n    flex-direction: column-reverse !important;\r\n  }\r\n  .flex-md-wrap {\r\n    -ms-flex-wrap: wrap !important;\r\n    flex-wrap: wrap !important;\r\n  }\r\n  .flex-md-nowrap {\r\n    -ms-flex-wrap: nowrap !important;\r\n    flex-wrap: nowrap !important;\r\n  }\r\n  .flex-md-wrap-reverse {\r\n    -ms-flex-wrap: wrap-reverse !important;\r\n    flex-wrap: wrap-reverse !important;\r\n  }\r\n  .justify-content-md-start {\r\n    -webkit-box-pack: start !important;\r\n    -ms-flex-pack: start !important;\r\n    justify-content: flex-start !important;\r\n  }\r\n  .justify-content-md-end {\r\n    -webkit-box-pack: end !important;\r\n    -ms-flex-pack: end !important;\r\n    justify-content: flex-end !important;\r\n  }\r\n  .justify-content-md-center {\r\n    -webkit-box-pack: center !important;\r\n    -ms-flex-pack: center !important;\r\n    justify-content: center !important;\r\n  }\r\n  .justify-content-md-between {\r\n    -webkit-box-pack: justify !important;\r\n    -ms-flex-pack: justify !important;\r\n    justify-content: space-between !important;\r\n  }\r\n  .justify-content-md-around {\r\n    -ms-flex-pack: distribute !important;\r\n    justify-content: space-around !important;\r\n  }\r\n  .align-items-md-start {\r\n    -webkit-box-align: start !important;\r\n    -ms-flex-align: start !important;\r\n    align-items: flex-start !important;\r\n  }\r\n  .align-items-md-end {\r\n    -webkit-box-align: end !important;\r\n    -ms-flex-align: end !important;\r\n    align-items: flex-end !important;\r\n  }\r\n  .align-items-md-center {\r\n    -webkit-box-align: center !important;\r\n    -ms-flex-align: center !important;\r\n    align-items: center !important;\r\n  }\r\n  .align-items-md-baseline {\r\n    -webkit-box-align: baseline !important;\r\n    -ms-flex-align: baseline !important;\r\n    align-items: baseline !important;\r\n  }\r\n  .align-items-md-stretch {\r\n    -webkit-box-align: stretch !important;\r\n    -ms-flex-align: stretch !important;\r\n    align-items: stretch !important;\r\n  }\r\n  .align-content-md-start {\r\n    -ms-flex-line-pack: start !important;\r\n    align-content: flex-start !important;\r\n  }\r\n  .align-content-md-end {\r\n    -ms-flex-line-pack: end !important;\r\n    align-content: flex-end !important;\r\n  }\r\n  .align-content-md-center {\r\n    -ms-flex-line-pack: center !important;\r\n    align-content: center !important;\r\n  }\r\n  .align-content-md-between {\r\n    -ms-flex-line-pack: justify !important;\r\n    align-content: space-between !important;\r\n  }\r\n  .align-content-md-around {\r\n    -ms-flex-line-pack: distribute !important;\r\n    align-content: space-around !important;\r\n  }\r\n  .align-content-md-stretch {\r\n    -ms-flex-line-pack: stretch !important;\r\n    align-content: stretch !important;\r\n  }\r\n  .align-self-md-auto {\r\n    -ms-flex-item-align: auto !important;\r\n    align-self: auto !important;\r\n  }\r\n  .align-self-md-start {\r\n    -ms-flex-item-align: start !important;\r\n    align-self: flex-start !important;\r\n  }\r\n  .align-self-md-end {\r\n    -ms-flex-item-align: end !important;\r\n    align-self: flex-end !important;\r\n  }\r\n  .align-self-md-center {\r\n    -ms-flex-item-align: center !important;\r\n    align-self: center !important;\r\n  }\r\n  .align-self-md-baseline {\r\n    -ms-flex-item-align: baseline !important;\r\n    align-self: baseline !important;\r\n  }\r\n  .align-self-md-stretch {\r\n    -ms-flex-item-align: stretch !important;\r\n    align-self: stretch !important;\r\n  }\r\n}\r\n\r\n@media (min-width: 992px) {\r\n  .flex-lg-row {\r\n    -webkit-box-orient: horizontal !important;\r\n    -webkit-box-direction: normal !important;\r\n    -ms-flex-direction: row !important;\r\n    flex-direction: row !important;\r\n  }\r\n  .flex-lg-column {\r\n    -webkit-box-orient: vertical !important;\r\n    -webkit-box-direction: normal !important;\r\n    -ms-flex-direction: column !important;\r\n    flex-direction: column !important;\r\n  }\r\n  .flex-lg-row-reverse {\r\n    -webkit-box-orient: horizontal !important;\r\n    -webkit-box-direction: reverse !important;\r\n    -ms-flex-direction: row-reverse !important;\r\n    flex-direction: row-reverse !important;\r\n  }\r\n  .flex-lg-column-reverse {\r\n    -webkit-box-orient: vertical !important;\r\n    -webkit-box-direction: reverse !important;\r\n    -ms-flex-direction: column-reverse !important;\r\n    flex-direction: column-reverse !important;\r\n  }\r\n  .flex-lg-wrap {\r\n    -ms-flex-wrap: wrap !important;\r\n    flex-wrap: wrap !important;\r\n  }\r\n  .flex-lg-nowrap {\r\n    -ms-flex-wrap: nowrap !important;\r\n    flex-wrap: nowrap !important;\r\n  }\r\n  .flex-lg-wrap-reverse {\r\n    -ms-flex-wrap: wrap-reverse !important;\r\n    flex-wrap: wrap-reverse !important;\r\n  }\r\n  .justify-content-lg-start {\r\n    -webkit-box-pack: start !important;\r\n    -ms-flex-pack: start !important;\r\n    justify-content: flex-start !important;\r\n  }\r\n  .justify-content-lg-end {\r\n    -webkit-box-pack: end !important;\r\n    -ms-flex-pack: end !important;\r\n    justify-content: flex-end !important;\r\n  }\r\n  .justify-content-lg-center {\r\n    -webkit-box-pack: center !important;\r\n    -ms-flex-pack: center !important;\r\n    justify-content: center !important;\r\n  }\r\n  .justify-content-lg-between {\r\n    -webkit-box-pack: justify !important;\r\n    -ms-flex-pack: justify !important;\r\n    justify-content: space-between !important;\r\n  }\r\n  .justify-content-lg-around {\r\n    -ms-flex-pack: distribute !important;\r\n    justify-content: space-around !important;\r\n  }\r\n  .align-items-lg-start {\r\n    -webkit-box-align: start !important;\r\n    -ms-flex-align: start !important;\r\n    align-items: flex-start !important;\r\n  }\r\n  .align-items-lg-end {\r\n    -webkit-box-align: end !important;\r\n    -ms-flex-align: end !important;\r\n    align-items: flex-end !important;\r\n  }\r\n  .align-items-lg-center {\r\n    -webkit-box-align: center !important;\r\n    -ms-flex-align: center !important;\r\n    align-items: center !important;\r\n  }\r\n  .align-items-lg-baseline {\r\n    -webkit-box-align: baseline !important;\r\n    -ms-flex-align: baseline !important;\r\n    align-items: baseline !important;\r\n  }\r\n  .align-items-lg-stretch {\r\n    -webkit-box-align: stretch !important;\r\n    -ms-flex-align: stretch !important;\r\n    align-items: stretch !important;\r\n  }\r\n  .align-content-lg-start {\r\n    -ms-flex-line-pack: start !important;\r\n    align-content: flex-start !important;\r\n  }\r\n  .align-content-lg-end {\r\n    -ms-flex-line-pack: end !important;\r\n    align-content: flex-end !important;\r\n  }\r\n  .align-content-lg-center {\r\n    -ms-flex-line-pack: center !important;\r\n    align-content: center !important;\r\n  }\r\n  .align-content-lg-between {\r\n    -ms-flex-line-pack: justify !important;\r\n    align-content: space-between !important;\r\n  }\r\n  .align-content-lg-around {\r\n    -ms-flex-line-pack: distribute !important;\r\n    align-content: space-around !important;\r\n  }\r\n  .align-content-lg-stretch {\r\n    -ms-flex-line-pack: stretch !important;\r\n    align-content: stretch !important;\r\n  }\r\n  .align-self-lg-auto {\r\n    -ms-flex-item-align: auto !important;\r\n    align-self: auto !important;\r\n  }\r\n  .align-self-lg-start {\r\n    -ms-flex-item-align: start !important;\r\n    align-self: flex-start !important;\r\n  }\r\n  .align-self-lg-end {\r\n    -ms-flex-item-align: end !important;\r\n    align-self: flex-end !important;\r\n  }\r\n  .align-self-lg-center {\r\n    -ms-flex-item-align: center !important;\r\n    align-self: center !important;\r\n  }\r\n  .align-self-lg-baseline {\r\n    -ms-flex-item-align: baseline !important;\r\n    align-self: baseline !important;\r\n  }\r\n  .align-self-lg-stretch {\r\n    -ms-flex-item-align: stretch !important;\r\n    align-self: stretch !important;\r\n  }\r\n}\r\n\r\n@media (min-width: 1200px) {\r\n  .flex-xl-row {\r\n    -webkit-box-orient: horizontal !important;\r\n    -webkit-box-direction: normal !important;\r\n    -ms-flex-direction: row !important;\r\n    flex-direction: row !important;\r\n  }\r\n  .flex-xl-column {\r\n    -webkit-box-orient: vertical !important;\r\n    -webkit-box-direction: normal !important;\r\n    -ms-flex-direction: column !important;\r\n    flex-direction: column !important;\r\n  }\r\n  .flex-xl-row-reverse {\r\n    -webkit-box-orient: horizontal !important;\r\n    -webkit-box-direction: reverse !important;\r\n    -ms-flex-direction: row-reverse !important;\r\n    flex-direction: row-reverse !important;\r\n  }\r\n  .flex-xl-column-reverse {\r\n    -webkit-box-orient: vertical !important;\r\n    -webkit-box-direction: reverse !important;\r\n    -ms-flex-direction: column-reverse !important;\r\n    flex-direction: column-reverse !important;\r\n  }\r\n  .flex-xl-wrap {\r\n    -ms-flex-wrap: wrap !important;\r\n    flex-wrap: wrap !important;\r\n  }\r\n  .flex-xl-nowrap {\r\n    -ms-flex-wrap: nowrap !important;\r\n    flex-wrap: nowrap !important;\r\n  }\r\n  .flex-xl-wrap-reverse {\r\n    -ms-flex-wrap: wrap-reverse !important;\r\n    flex-wrap: wrap-reverse !important;\r\n  }\r\n  .justify-content-xl-start {\r\n    -webkit-box-pack: start !important;\r\n    -ms-flex-pack: start !important;\r\n    justify-content: flex-start !important;\r\n  }\r\n  .justify-content-xl-end {\r\n    -webkit-box-pack: end !important;\r\n    -ms-flex-pack: end !important;\r\n    justify-content: flex-end !important;\r\n  }\r\n  .justify-content-xl-center {\r\n    -webkit-box-pack: center !important;\r\n    -ms-flex-pack: center !important;\r\n    justify-content: center !important;\r\n  }\r\n  .justify-content-xl-between {\r\n    -webkit-box-pack: justify !important;\r\n    -ms-flex-pack: justify !important;\r\n    justify-content: space-between !important;\r\n  }\r\n  .justify-content-xl-around {\r\n    -ms-flex-pack: distribute !important;\r\n    justify-content: space-around !important;\r\n  }\r\n  .align-items-xl-start {\r\n    -webkit-box-align: start !important;\r\n    -ms-flex-align: start !important;\r\n    align-items: flex-start !important;\r\n  }\r\n  .align-items-xl-end {\r\n    -webkit-box-align: end !important;\r\n    -ms-flex-align: end !important;\r\n    align-items: flex-end !important;\r\n  }\r\n  .align-items-xl-center {\r\n    -webkit-box-align: center !important;\r\n    -ms-flex-align: center !important;\r\n    align-items: center !important;\r\n  }\r\n  .align-items-xl-baseline {\r\n    -webkit-box-align: baseline !important;\r\n    -ms-flex-align: baseline !important;\r\n    align-items: baseline !important;\r\n  }\r\n  .align-items-xl-stretch {\r\n    -webkit-box-align: stretch !important;\r\n    -ms-flex-align: stretch !important;\r\n    align-items: stretch !important;\r\n  }\r\n  .align-content-xl-start {\r\n    -ms-flex-line-pack: start !important;\r\n    align-content: flex-start !important;\r\n  }\r\n  .align-content-xl-end {\r\n    -ms-flex-line-pack: end !important;\r\n    align-content: flex-end !important;\r\n  }\r\n  .align-content-xl-center {\r\n    -ms-flex-line-pack: center !important;\r\n    align-content: center !important;\r\n  }\r\n  .align-content-xl-between {\r\n    -ms-flex-line-pack: justify !important;\r\n    align-content: space-between !important;\r\n  }\r\n  .align-content-xl-around {\r\n    -ms-flex-line-pack: distribute !important;\r\n    align-content: space-around !important;\r\n  }\r\n  .align-content-xl-stretch {\r\n    -ms-flex-line-pack: stretch !important;\r\n    align-content: stretch !important;\r\n  }\r\n  .align-self-xl-auto {\r\n    -ms-flex-item-align: auto !important;\r\n    align-self: auto !important;\r\n  }\r\n  .align-self-xl-start {\r\n    -ms-flex-item-align: start !important;\r\n    align-self: flex-start !important;\r\n  }\r\n  .align-self-xl-end {\r\n    -ms-flex-item-align: end !important;\r\n    align-self: flex-end !important;\r\n  }\r\n  .align-self-xl-center {\r\n    -ms-flex-item-align: center !important;\r\n    align-self: center !important;\r\n  }\r\n  .align-self-xl-baseline {\r\n    -ms-flex-item-align: baseline !important;\r\n    align-self: baseline !important;\r\n  }\r\n  .align-self-xl-stretch {\r\n    -ms-flex-item-align: stretch !important;\r\n    align-self: stretch !important;\r\n  }\r\n}\r\n\r\n.float-left {\r\n  float: left !important;\r\n}\r\n\r\n.float-right {\r\n  float: right !important;\r\n}\r\n\r\n.float-none {\r\n  float: none !important;\r\n}\r\n\r\n@media (min-width: 576px) {\r\n  .float-sm-left {\r\n    float: left !important;\r\n  }\r\n  .float-sm-right {\r\n    float: right !important;\r\n  }\r\n  .float-sm-none {\r\n    float: none !important;\r\n  }\r\n}\r\n\r\n@media (min-width: 768px) {\r\n  .float-md-left {\r\n    float: left !important;\r\n  }\r\n  .float-md-right {\r\n    float: right !important;\r\n  }\r\n  .float-md-none {\r\n    float: none !important;\r\n  }\r\n}\r\n\r\n@media (min-width: 992px) {\r\n  .float-lg-left {\r\n    float: left !important;\r\n  }\r\n  .float-lg-right {\r\n    float: right !important;\r\n  }\r\n  .float-lg-none {\r\n    float: none !important;\r\n  }\r\n}\r\n\r\n@media (min-width: 1200px) {\r\n  .float-xl-left {\r\n    float: left !important;\r\n  }\r\n  .float-xl-right {\r\n    float: right !important;\r\n  }\r\n  .float-xl-none {\r\n    float: none !important;\r\n  }\r\n}\r\n\r\n.position-static {\r\n  position: static !important;\r\n}\r\n\r\n.position-relative {\r\n  position: relative !important;\r\n}\r\n\r\n.position-absolute {\r\n  position: absolute !important;\r\n}\r\n\r\n.position-fixed {\r\n  position: fixed !important;\r\n}\r\n\r\n.position-sticky {\r\n  position: -webkit-sticky !important;\r\n  position: sticky !important;\r\n}\r\n\r\n.fixed-top {\r\n  position: fixed;\r\n  top: 0;\r\n  right: 0;\r\n  left: 0;\r\n  z-index: 1030;\r\n}\r\n\r\n.fixed-bottom {\r\n  position: fixed;\r\n  right: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  z-index: 1030;\r\n}\r\n\r\n@supports ((position: -webkit-sticky) or (position: sticky)) {\r\n  .sticky-top {\r\n    position: -webkit-sticky;\r\n    position: sticky;\r\n    top: 0;\r\n    z-index: 1020;\r\n  }\r\n}\r\n\r\n.sr-only {\r\n  position: absolute;\r\n  width: 1px;\r\n  height: 1px;\r\n  padding: 0;\r\n  overflow: hidden;\r\n  clip: rect(0, 0, 0, 0);\r\n  white-space: nowrap;\r\n  -webkit-clip-path: inset(50%);\r\n  clip-path: inset(50%);\r\n  border: 0;\r\n}\r\n\r\n.sr-only-focusable:active, .sr-only-focusable:focus {\r\n  position: static;\r\n  width: auto;\r\n  height: auto;\r\n  overflow: visible;\r\n  clip: auto;\r\n  white-space: normal;\r\n  -webkit-clip-path: none;\r\n  clip-path: none;\r\n}\r\n\r\n.w-25 {\r\n  width: 25% !important;\r\n}\r\n\r\n.w-50 {\r\n  width: 50% !important;\r\n}\r\n\r\n.w-75 {\r\n  width: 75% !important;\r\n}\r\n\r\n.w-100 {\r\n  width: 100% !important;\r\n}\r\n\r\n.h-25 {\r\n  height: 25% !important;\r\n}\r\n\r\n.h-50 {\r\n  height: 50% !important;\r\n}\r\n\r\n.h-75 {\r\n  height: 75% !important;\r\n}\r\n\r\n.h-100 {\r\n  height: 100% !important;\r\n}\r\n\r\n.mw-100 {\r\n  max-width: 100% !important;\r\n}\r\n\r\n.mh-100 {\r\n  max-height: 100% !important;\r\n}\r\n\r\n.m-0 {\r\n  margin: 0 !important;\r\n}\r\n\r\n.mt-0,\r\n.my-0 {\r\n  margin-top: 0 !important;\r\n}\r\n\r\n.mr-0,\r\n.mx-0 {\r\n  margin-right: 0 !important;\r\n}\r\n\r\n.mb-0,\r\n.my-0 {\r\n  margin-bottom: 0 !important;\r\n}\r\n\r\n.ml-0,\r\n.mx-0 {\r\n  margin-left: 0 !important;\r\n}\r\n\r\n.m-1 {\r\n  margin: 0.25rem !important;\r\n}\r\n\r\n.mt-1,\r\n.my-1 {\r\n  margin-top: 0.25rem !important;\r\n}\r\n\r\n.mr-1,\r\n.mx-1 {\r\n  margin-right: 0.25rem !important;\r\n}\r\n\r\n.mb-1,\r\n.my-1 {\r\n  margin-bottom: 0.25rem !important;\r\n}\r\n\r\n.ml-1,\r\n.mx-1 {\r\n  margin-left: 0.25rem !important;\r\n}\r\n\r\n.m-2 {\r\n  margin: 0.5rem !important;\r\n}\r\n\r\n.mt-2,\r\n.my-2 {\r\n  margin-top: 0.5rem !important;\r\n}\r\n\r\n.mr-2,\r\n.mx-2 {\r\n  margin-right: 0.5rem !important;\r\n}\r\n\r\n.mb-2,\r\n.my-2 {\r\n  margin-bottom: 0.5rem !important;\r\n}\r\n\r\n.ml-2,\r\n.mx-2 {\r\n  margin-left: 0.5rem !important;\r\n}\r\n\r\n.m-3 {\r\n  margin: 1rem !important;\r\n}\r\n\r\n.mt-3,\r\n.my-3 {\r\n  margin-top: 1rem !important;\r\n}\r\n\r\n.mr-3,\r\n.mx-3 {\r\n  margin-right: 1rem !important;\r\n}\r\n\r\n.mb-3,\r\n.my-3 {\r\n  margin-bottom: 1rem !important;\r\n}\r\n\r\n.ml-3,\r\n.mx-3 {\r\n  margin-left: 1rem !important;\r\n}\r\n\r\n.m-4 {\r\n  margin: 1.5rem !important;\r\n}\r\n\r\n.mt-4,\r\n.my-4 {\r\n  margin-top: 1.5rem !important;\r\n}\r\n\r\n.mr-4,\r\n.mx-4 {\r\n  margin-right: 1.5rem !important;\r\n}\r\n\r\n.mb-4,\r\n.my-4 {\r\n  margin-bottom: 1.5rem !important;\r\n}\r\n\r\n.ml-4,\r\n.mx-4 {\r\n  margin-left: 1.5rem !important;\r\n}\r\n\r\n.m-5 {\r\n  margin: 3rem !important;\r\n}\r\n\r\n.mt-5,\r\n.my-5 {\r\n  margin-top: 3rem !important;\r\n}\r\n\r\n.mr-5,\r\n.mx-5 {\r\n  margin-right: 3rem !important;\r\n}\r\n\r\n.mb-5,\r\n.my-5 {\r\n  margin-bottom: 3rem !important;\r\n}\r\n\r\n.ml-5,\r\n.mx-5 {\r\n  margin-left: 3rem !important;\r\n}\r\n\r\n.p-0 {\r\n  padding: 0 !important;\r\n}\r\n\r\n.pt-0,\r\n.py-0 {\r\n  padding-top: 0 !important;\r\n}\r\n\r\n.pr-0,\r\n.px-0 {\r\n  padding-right: 0 !important;\r\n}\r\n\r\n.pb-0,\r\n.py-0 {\r\n  padding-bottom: 0 !important;\r\n}\r\n\r\n.pl-0,\r\n.px-0 {\r\n  padding-left: 0 !important;\r\n}\r\n\r\n.p-1 {\r\n  padding: 0.25rem !important;\r\n}\r\n\r\n.pt-1,\r\n.py-1 {\r\n  padding-top: 0.25rem !important;\r\n}\r\n\r\n.pr-1,\r\n.px-1 {\r\n  padding-right: 0.25rem !important;\r\n}\r\n\r\n.pb-1,\r\n.py-1 {\r\n  padding-bottom: 0.25rem !important;\r\n}\r\n\r\n.pl-1,\r\n.px-1 {\r\n  padding-left: 0.25rem !important;\r\n}\r\n\r\n.p-2 {\r\n  padding: 0.5rem !important;\r\n}\r\n\r\n.pt-2,\r\n.py-2 {\r\n  padding-top: 0.5rem !important;\r\n}\r\n\r\n.pr-2,\r\n.px-2 {\r\n  padding-right: 0.5rem !important;\r\n}\r\n\r\n.pb-2,\r\n.py-2 {\r\n  padding-bottom: 0.5rem !important;\r\n}\r\n\r\n.pl-2,\r\n.px-2 {\r\n  padding-left: 0.5rem !important;\r\n}\r\n\r\n.p-3 {\r\n  padding: 1rem !important;\r\n}\r\n\r\n.pt-3,\r\n.py-3 {\r\n  padding-top: 1rem !important;\r\n}\r\n\r\n.pr-3,\r\n.px-3 {\r\n  padding-right: 1rem !important;\r\n}\r\n\r\n.pb-3,\r\n.py-3 {\r\n  padding-bottom: 1rem !important;\r\n}\r\n\r\n.pl-3,\r\n.px-3 {\r\n  padding-left: 1rem !important;\r\n}\r\n\r\n.p-4 {\r\n  padding: 1.5rem !important;\r\n}\r\n\r\n.pt-4,\r\n.py-4 {\r\n  padding-top: 1.5rem !important;\r\n}\r\n\r\n.pr-4,\r\n.px-4 {\r\n  padding-right: 1.5rem !important;\r\n}\r\n\r\n.pb-4,\r\n.py-4 {\r\n  padding-bottom: 1.5rem !important;\r\n}\r\n\r\n.pl-4,\r\n.px-4 {\r\n  padding-left: 1.5rem !important;\r\n}\r\n\r\n.p-5 {\r\n  padding: 3rem !important;\r\n}\r\n\r\n.pt-5,\r\n.py-5 {\r\n  padding-top: 3rem !important;\r\n}\r\n\r\n.pr-5,\r\n.px-5 {\r\n  padding-right: 3rem !important;\r\n}\r\n\r\n.pb-5,\r\n.py-5 {\r\n  padding-bottom: 3rem !important;\r\n}\r\n\r\n.pl-5,\r\n.px-5 {\r\n  padding-left: 3rem !important;\r\n}\r\n\r\n.m-auto {\r\n  margin: auto !important;\r\n}\r\n\r\n.mt-auto,\r\n.my-auto {\r\n  margin-top: auto !important;\r\n}\r\n\r\n.mr-auto,\r\n.mx-auto {\r\n  margin-right: auto !important;\r\n}\r\n\r\n.mb-auto,\r\n.my-auto {\r\n  margin-bottom: auto !important;\r\n}\r\n\r\n.ml-auto,\r\n.mx-auto {\r\n  margin-left: auto !important;\r\n}\r\n\r\n@media (min-width: 576px) {\r\n  .m-sm-0 {\r\n    margin: 0 !important;\r\n  }\r\n  .mt-sm-0,\r\n  .my-sm-0 {\r\n    margin-top: 0 !important;\r\n  }\r\n  .mr-sm-0,\r\n  .mx-sm-0 {\r\n    margin-right: 0 !important;\r\n  }\r\n  .mb-sm-0,\r\n  .my-sm-0 {\r\n    margin-bottom: 0 !important;\r\n  }\r\n  .ml-sm-0,\r\n  .mx-sm-0 {\r\n    margin-left: 0 !important;\r\n  }\r\n  .m-sm-1 {\r\n    margin: 0.25rem !important;\r\n  }\r\n  .mt-sm-1,\r\n  .my-sm-1 {\r\n    margin-top: 0.25rem !important;\r\n  }\r\n  .mr-sm-1,\r\n  .mx-sm-1 {\r\n    margin-right: 0.25rem !important;\r\n  }\r\n  .mb-sm-1,\r\n  .my-sm-1 {\r\n    margin-bottom: 0.25rem !important;\r\n  }\r\n  .ml-sm-1,\r\n  .mx-sm-1 {\r\n    margin-left: 0.25rem !important;\r\n  }\r\n  .m-sm-2 {\r\n    margin: 0.5rem !important;\r\n  }\r\n  .mt-sm-2,\r\n  .my-sm-2 {\r\n    margin-top: 0.5rem !important;\r\n  }\r\n  .mr-sm-2,\r\n  .mx-sm-2 {\r\n    margin-right: 0.5rem !important;\r\n  }\r\n  .mb-sm-2,\r\n  .my-sm-2 {\r\n    margin-bottom: 0.5rem !important;\r\n  }\r\n  .ml-sm-2,\r\n  .mx-sm-2 {\r\n    margin-left: 0.5rem !important;\r\n  }\r\n  .m-sm-3 {\r\n    margin: 1rem !important;\r\n  }\r\n  .mt-sm-3,\r\n  .my-sm-3 {\r\n    margin-top: 1rem !important;\r\n  }\r\n  .mr-sm-3,\r\n  .mx-sm-3 {\r\n    margin-right: 1rem !important;\r\n  }\r\n  .mb-sm-3,\r\n  .my-sm-3 {\r\n    margin-bottom: 1rem !important;\r\n  }\r\n  .ml-sm-3,\r\n  .mx-sm-3 {\r\n    margin-left: 1rem !important;\r\n  }\r\n  .m-sm-4 {\r\n    margin: 1.5rem !important;\r\n  }\r\n  .mt-sm-4,\r\n  .my-sm-4 {\r\n    margin-top: 1.5rem !important;\r\n  }\r\n  .mr-sm-4,\r\n  .mx-sm-4 {\r\n    margin-right: 1.5rem !important;\r\n  }\r\n  .mb-sm-4,\r\n  .my-sm-4 {\r\n    margin-bottom: 1.5rem !important;\r\n  }\r\n  .ml-sm-4,\r\n  .mx-sm-4 {\r\n    margin-left: 1.5rem !important;\r\n  }\r\n  .m-sm-5 {\r\n    margin: 3rem !important;\r\n  }\r\n  .mt-sm-5,\r\n  .my-sm-5 {\r\n    margin-top: 3rem !important;\r\n  }\r\n  .mr-sm-5,\r\n  .mx-sm-5 {\r\n    margin-right: 3rem !important;\r\n  }\r\n  .mb-sm-5,\r\n  .my-sm-5 {\r\n    margin-bottom: 3rem !important;\r\n  }\r\n  .ml-sm-5,\r\n  .mx-sm-5 {\r\n    margin-left: 3rem !important;\r\n  }\r\n  .p-sm-0 {\r\n    padding: 0 !important;\r\n  }\r\n  .pt-sm-0,\r\n  .py-sm-0 {\r\n    padding-top: 0 !important;\r\n  }\r\n  .pr-sm-0,\r\n  .px-sm-0 {\r\n    padding-right: 0 !important;\r\n  }\r\n  .pb-sm-0,\r\n  .py-sm-0 {\r\n    padding-bottom: 0 !important;\r\n  }\r\n  .pl-sm-0,\r\n  .px-sm-0 {\r\n    padding-left: 0 !important;\r\n  }\r\n  .p-sm-1 {\r\n    padding: 0.25rem !important;\r\n  }\r\n  .pt-sm-1,\r\n  .py-sm-1 {\r\n    padding-top: 0.25rem !important;\r\n  }\r\n  .pr-sm-1,\r\n  .px-sm-1 {\r\n    padding-right: 0.25rem !important;\r\n  }\r\n  .pb-sm-1,\r\n  .py-sm-1 {\r\n    padding-bottom: 0.25rem !important;\r\n  }\r\n  .pl-sm-1,\r\n  .px-sm-1 {\r\n    padding-left: 0.25rem !important;\r\n  }\r\n  .p-sm-2 {\r\n    padding: 0.5rem !important;\r\n  }\r\n  .pt-sm-2,\r\n  .py-sm-2 {\r\n    padding-top: 0.5rem !important;\r\n  }\r\n  .pr-sm-2,\r\n  .px-sm-2 {\r\n    padding-right: 0.5rem !important;\r\n  }\r\n  .pb-sm-2,\r\n  .py-sm-2 {\r\n    padding-bottom: 0.5rem !important;\r\n  }\r\n  .pl-sm-2,\r\n  .px-sm-2 {\r\n    padding-left: 0.5rem !important;\r\n  }\r\n  .p-sm-3 {\r\n    padding: 1rem !important;\r\n  }\r\n  .pt-sm-3,\r\n  .py-sm-3 {\r\n    padding-top: 1rem !important;\r\n  }\r\n  .pr-sm-3,\r\n  .px-sm-3 {\r\n    padding-right: 1rem !important;\r\n  }\r\n  .pb-sm-3,\r\n  .py-sm-3 {\r\n    padding-bottom: 1rem !important;\r\n  }\r\n  .pl-sm-3,\r\n  .px-sm-3 {\r\n    padding-left: 1rem !important;\r\n  }\r\n  .p-sm-4 {\r\n    padding: 1.5rem !important;\r\n  }\r\n  .pt-sm-4,\r\n  .py-sm-4 {\r\n    padding-top: 1.5rem !important;\r\n  }\r\n  .pr-sm-4,\r\n  .px-sm-4 {\r\n    padding-right: 1.5rem !important;\r\n  }\r\n  .pb-sm-4,\r\n  .py-sm-4 {\r\n    padding-bottom: 1.5rem !important;\r\n  }\r\n  .pl-sm-4,\r\n  .px-sm-4 {\r\n    padding-left: 1.5rem !important;\r\n  }\r\n  .p-sm-5 {\r\n    padding: 3rem !important;\r\n  }\r\n  .pt-sm-5,\r\n  .py-sm-5 {\r\n    padding-top: 3rem !important;\r\n  }\r\n  .pr-sm-5,\r\n  .px-sm-5 {\r\n    padding-right: 3rem !important;\r\n  }\r\n  .pb-sm-5,\r\n  .py-sm-5 {\r\n    padding-bottom: 3rem !important;\r\n  }\r\n  .pl-sm-5,\r\n  .px-sm-5 {\r\n    padding-left: 3rem !important;\r\n  }\r\n  .m-sm-auto {\r\n    margin: auto !important;\r\n  }\r\n  .mt-sm-auto,\r\n  .my-sm-auto {\r\n    margin-top: auto !important;\r\n  }\r\n  .mr-sm-auto,\r\n  .mx-sm-auto {\r\n    margin-right: auto !important;\r\n  }\r\n  .mb-sm-auto,\r\n  .my-sm-auto {\r\n    margin-bottom: auto !important;\r\n  }\r\n  .ml-sm-auto,\r\n  .mx-sm-auto {\r\n    margin-left: auto !important;\r\n  }\r\n}\r\n\r\n@media (min-width: 768px) {\r\n  .m-md-0 {\r\n    margin: 0 !important;\r\n  }\r\n  .mt-md-0,\r\n  .my-md-0 {\r\n    margin-top: 0 !important;\r\n  }\r\n  .mr-md-0,\r\n  .mx-md-0 {\r\n    margin-right: 0 !important;\r\n  }\r\n  .mb-md-0,\r\n  .my-md-0 {\r\n    margin-bottom: 0 !important;\r\n  }\r\n  .ml-md-0,\r\n  .mx-md-0 {\r\n    margin-left: 0 !important;\r\n  }\r\n  .m-md-1 {\r\n    margin: 0.25rem !important;\r\n  }\r\n  .mt-md-1,\r\n  .my-md-1 {\r\n    margin-top: 0.25rem !important;\r\n  }\r\n  .mr-md-1,\r\n  .mx-md-1 {\r\n    margin-right: 0.25rem !important;\r\n  }\r\n  .mb-md-1,\r\n  .my-md-1 {\r\n    margin-bottom: 0.25rem !important;\r\n  }\r\n  .ml-md-1,\r\n  .mx-md-1 {\r\n    margin-left: 0.25rem !important;\r\n  }\r\n  .m-md-2 {\r\n    margin: 0.5rem !important;\r\n  }\r\n  .mt-md-2,\r\n  .my-md-2 {\r\n    margin-top: 0.5rem !important;\r\n  }\r\n  .mr-md-2,\r\n  .mx-md-2 {\r\n    margin-right: 0.5rem !important;\r\n  }\r\n  .mb-md-2,\r\n  .my-md-2 {\r\n    margin-bottom: 0.5rem !important;\r\n  }\r\n  .ml-md-2,\r\n  .mx-md-2 {\r\n    margin-left: 0.5rem !important;\r\n  }\r\n  .m-md-3 {\r\n    margin: 1rem !important;\r\n  }\r\n  .mt-md-3,\r\n  .my-md-3 {\r\n    margin-top: 1rem !important;\r\n  }\r\n  .mr-md-3,\r\n  .mx-md-3 {\r\n    margin-right: 1rem !important;\r\n  }\r\n  .mb-md-3,\r\n  .my-md-3 {\r\n    margin-bottom: 1rem !important;\r\n  }\r\n  .ml-md-3,\r\n  .mx-md-3 {\r\n    margin-left: 1rem !important;\r\n  }\r\n  .m-md-4 {\r\n    margin: 1.5rem !important;\r\n  }\r\n  .mt-md-4,\r\n  .my-md-4 {\r\n    margin-top: 1.5rem !important;\r\n  }\r\n  .mr-md-4,\r\n  .mx-md-4 {\r\n    margin-right: 1.5rem !important;\r\n  }\r\n  .mb-md-4,\r\n  .my-md-4 {\r\n    margin-bottom: 1.5rem !important;\r\n  }\r\n  .ml-md-4,\r\n  .mx-md-4 {\r\n    margin-left: 1.5rem !important;\r\n  }\r\n  .m-md-5 {\r\n    margin: 3rem !important;\r\n  }\r\n  .mt-md-5,\r\n  .my-md-5 {\r\n    margin-top: 3rem !important;\r\n  }\r\n  .mr-md-5,\r\n  .mx-md-5 {\r\n    margin-right: 3rem !important;\r\n  }\r\n  .mb-md-5,\r\n  .my-md-5 {\r\n    margin-bottom: 3rem !important;\r\n  }\r\n  .ml-md-5,\r\n  .mx-md-5 {\r\n    margin-left: 3rem !important;\r\n  }\r\n  .p-md-0 {\r\n    padding: 0 !important;\r\n  }\r\n  .pt-md-0,\r\n  .py-md-0 {\r\n    padding-top: 0 !important;\r\n  }\r\n  .pr-md-0,\r\n  .px-md-0 {\r\n    padding-right: 0 !important;\r\n  }\r\n  .pb-md-0,\r\n  .py-md-0 {\r\n    padding-bottom: 0 !important;\r\n  }\r\n  .pl-md-0,\r\n  .px-md-0 {\r\n    padding-left: 0 !important;\r\n  }\r\n  .p-md-1 {\r\n    padding: 0.25rem !important;\r\n  }\r\n  .pt-md-1,\r\n  .py-md-1 {\r\n    padding-top: 0.25rem !important;\r\n  }\r\n  .pr-md-1,\r\n  .px-md-1 {\r\n    padding-right: 0.25rem !important;\r\n  }\r\n  .pb-md-1,\r\n  .py-md-1 {\r\n    padding-bottom: 0.25rem !important;\r\n  }\r\n  .pl-md-1,\r\n  .px-md-1 {\r\n    padding-left: 0.25rem !important;\r\n  }\r\n  .p-md-2 {\r\n    padding: 0.5rem !important;\r\n  }\r\n  .pt-md-2,\r\n  .py-md-2 {\r\n    padding-top: 0.5rem !important;\r\n  }\r\n  .pr-md-2,\r\n  .px-md-2 {\r\n    padding-right: 0.5rem !important;\r\n  }\r\n  .pb-md-2,\r\n  .py-md-2 {\r\n    padding-bottom: 0.5rem !important;\r\n  }\r\n  .pl-md-2,\r\n  .px-md-2 {\r\n    padding-left: 0.5rem !important;\r\n  }\r\n  .p-md-3 {\r\n    padding: 1rem !important;\r\n  }\r\n  .pt-md-3,\r\n  .py-md-3 {\r\n    padding-top: 1rem !important;\r\n  }\r\n  .pr-md-3,\r\n  .px-md-3 {\r\n    padding-right: 1rem !important;\r\n  }\r\n  .pb-md-3,\r\n  .py-md-3 {\r\n    padding-bottom: 1rem !important;\r\n  }\r\n  .pl-md-3,\r\n  .px-md-3 {\r\n    padding-left: 1rem !important;\r\n  }\r\n  .p-md-4 {\r\n    padding: 1.5rem !important;\r\n  }\r\n  .pt-md-4,\r\n  .py-md-4 {\r\n    padding-top: 1.5rem !important;\r\n  }\r\n  .pr-md-4,\r\n  .px-md-4 {\r\n    padding-right: 1.5rem !important;\r\n  }\r\n  .pb-md-4,\r\n  .py-md-4 {\r\n    padding-bottom: 1.5rem !important;\r\n  }\r\n  .pl-md-4,\r\n  .px-md-4 {\r\n    padding-left: 1.5rem !important;\r\n  }\r\n  .p-md-5 {\r\n    padding: 3rem !important;\r\n  }\r\n  .pt-md-5,\r\n  .py-md-5 {\r\n    padding-top: 3rem !important;\r\n  }\r\n  .pr-md-5,\r\n  .px-md-5 {\r\n    padding-right: 3rem !important;\r\n  }\r\n  .pb-md-5,\r\n  .py-md-5 {\r\n    padding-bottom: 3rem !important;\r\n  }\r\n  .pl-md-5,\r\n  .px-md-5 {\r\n    padding-left: 3rem !important;\r\n  }\r\n  .m-md-auto {\r\n    margin: auto !important;\r\n  }\r\n  .mt-md-auto,\r\n  .my-md-auto {\r\n    margin-top: auto !important;\r\n  }\r\n  .mr-md-auto,\r\n  .mx-md-auto {\r\n    margin-right: auto !important;\r\n  }\r\n  .mb-md-auto,\r\n  .my-md-auto {\r\n    margin-bottom: auto !important;\r\n  }\r\n  .ml-md-auto,\r\n  .mx-md-auto {\r\n    margin-left: auto !important;\r\n  }\r\n}\r\n\r\n@media (min-width: 992px) {\r\n  .m-lg-0 {\r\n    margin: 0 !important;\r\n  }\r\n  .mt-lg-0,\r\n  .my-lg-0 {\r\n    margin-top: 0 !important;\r\n  }\r\n  .mr-lg-0,\r\n  .mx-lg-0 {\r\n    margin-right: 0 !important;\r\n  }\r\n  .mb-lg-0,\r\n  .my-lg-0 {\r\n    margin-bottom: 0 !important;\r\n  }\r\n  .ml-lg-0,\r\n  .mx-lg-0 {\r\n    margin-left: 0 !important;\r\n  }\r\n  .m-lg-1 {\r\n    margin: 0.25rem !important;\r\n  }\r\n  .mt-lg-1,\r\n  .my-lg-1 {\r\n    margin-top: 0.25rem !important;\r\n  }\r\n  .mr-lg-1,\r\n  .mx-lg-1 {\r\n    margin-right: 0.25rem !important;\r\n  }\r\n  .mb-lg-1,\r\n  .my-lg-1 {\r\n    margin-bottom: 0.25rem !important;\r\n  }\r\n  .ml-lg-1,\r\n  .mx-lg-1 {\r\n    margin-left: 0.25rem !important;\r\n  }\r\n  .m-lg-2 {\r\n    margin: 0.5rem !important;\r\n  }\r\n  .mt-lg-2,\r\n  .my-lg-2 {\r\n    margin-top: 0.5rem !important;\r\n  }\r\n  .mr-lg-2,\r\n  .mx-lg-2 {\r\n    margin-right: 0.5rem !important;\r\n  }\r\n  .mb-lg-2,\r\n  .my-lg-2 {\r\n    margin-bottom: 0.5rem !important;\r\n  }\r\n  .ml-lg-2,\r\n  .mx-lg-2 {\r\n    margin-left: 0.5rem !important;\r\n  }\r\n  .m-lg-3 {\r\n    margin: 1rem !important;\r\n  }\r\n  .mt-lg-3,\r\n  .my-lg-3 {\r\n    margin-top: 1rem !important;\r\n  }\r\n  .mr-lg-3,\r\n  .mx-lg-3 {\r\n    margin-right: 1rem !important;\r\n  }\r\n  .mb-lg-3,\r\n  .my-lg-3 {\r\n    margin-bottom: 1rem !important;\r\n  }\r\n  .ml-lg-3,\r\n  .mx-lg-3 {\r\n    margin-left: 1rem !important;\r\n  }\r\n  .m-lg-4 {\r\n    margin: 1.5rem !important;\r\n  }\r\n  .mt-lg-4,\r\n  .my-lg-4 {\r\n    margin-top: 1.5rem !important;\r\n  }\r\n  .mr-lg-4,\r\n  .mx-lg-4 {\r\n    margin-right: 1.5rem !important;\r\n  }\r\n  .mb-lg-4,\r\n  .my-lg-4 {\r\n    margin-bottom: 1.5rem !important;\r\n  }\r\n  .ml-lg-4,\r\n  .mx-lg-4 {\r\n    margin-left: 1.5rem !important;\r\n  }\r\n  .m-lg-5 {\r\n    margin: 3rem !important;\r\n  }\r\n  .mt-lg-5,\r\n  .my-lg-5 {\r\n    margin-top: 3rem !important;\r\n  }\r\n  .mr-lg-5,\r\n  .mx-lg-5 {\r\n    margin-right: 3rem !important;\r\n  }\r\n  .mb-lg-5,\r\n  .my-lg-5 {\r\n    margin-bottom: 3rem !important;\r\n  }\r\n  .ml-lg-5,\r\n  .mx-lg-5 {\r\n    margin-left: 3rem !important;\r\n  }\r\n  .p-lg-0 {\r\n    padding: 0 !important;\r\n  }\r\n  .pt-lg-0,\r\n  .py-lg-0 {\r\n    padding-top: 0 !important;\r\n  }\r\n  .pr-lg-0,\r\n  .px-lg-0 {\r\n    padding-right: 0 !important;\r\n  }\r\n  .pb-lg-0,\r\n  .py-lg-0 {\r\n    padding-bottom: 0 !important;\r\n  }\r\n  .pl-lg-0,\r\n  .px-lg-0 {\r\n    padding-left: 0 !important;\r\n  }\r\n  .p-lg-1 {\r\n    padding: 0.25rem !important;\r\n  }\r\n  .pt-lg-1,\r\n  .py-lg-1 {\r\n    padding-top: 0.25rem !important;\r\n  }\r\n  .pr-lg-1,\r\n  .px-lg-1 {\r\n    padding-right: 0.25rem !important;\r\n  }\r\n  .pb-lg-1,\r\n  .py-lg-1 {\r\n    padding-bottom: 0.25rem !important;\r\n  }\r\n  .pl-lg-1,\r\n  .px-lg-1 {\r\n    padding-left: 0.25rem !important;\r\n  }\r\n  .p-lg-2 {\r\n    padding: 0.5rem !important;\r\n  }\r\n  .pt-lg-2,\r\n  .py-lg-2 {\r\n    padding-top: 0.5rem !important;\r\n  }\r\n  .pr-lg-2,\r\n  .px-lg-2 {\r\n    padding-right: 0.5rem !important;\r\n  }\r\n  .pb-lg-2,\r\n  .py-lg-2 {\r\n    padding-bottom: 0.5rem !important;\r\n  }\r\n  .pl-lg-2,\r\n  .px-lg-2 {\r\n    padding-left: 0.5rem !important;\r\n  }\r\n  .p-lg-3 {\r\n    padding: 1rem !important;\r\n  }\r\n  .pt-lg-3,\r\n  .py-lg-3 {\r\n    padding-top: 1rem !important;\r\n  }\r\n  .pr-lg-3,\r\n  .px-lg-3 {\r\n    padding-right: 1rem !important;\r\n  }\r\n  .pb-lg-3,\r\n  .py-lg-3 {\r\n    padding-bottom: 1rem !important;\r\n  }\r\n  .pl-lg-3,\r\n  .px-lg-3 {\r\n    padding-left: 1rem !important;\r\n  }\r\n  .p-lg-4 {\r\n    padding: 1.5rem !important;\r\n  }\r\n  .pt-lg-4,\r\n  .py-lg-4 {\r\n    padding-top: 1.5rem !important;\r\n  }\r\n  .pr-lg-4,\r\n  .px-lg-4 {\r\n    padding-right: 1.5rem !important;\r\n  }\r\n  .pb-lg-4,\r\n  .py-lg-4 {\r\n    padding-bottom: 1.5rem !important;\r\n  }\r\n  .pl-lg-4,\r\n  .px-lg-4 {\r\n    padding-left: 1.5rem !important;\r\n  }\r\n  .p-lg-5 {\r\n    padding: 3rem !important;\r\n  }\r\n  .pt-lg-5,\r\n  .py-lg-5 {\r\n    padding-top: 3rem !important;\r\n  }\r\n  .pr-lg-5,\r\n  .px-lg-5 {\r\n    padding-right: 3rem !important;\r\n  }\r\n  .pb-lg-5,\r\n  .py-lg-5 {\r\n    padding-bottom: 3rem !important;\r\n  }\r\n  .pl-lg-5,\r\n  .px-lg-5 {\r\n    padding-left: 3rem !important;\r\n  }\r\n  .m-lg-auto {\r\n    margin: auto !important;\r\n  }\r\n  .mt-lg-auto,\r\n  .my-lg-auto {\r\n    margin-top: auto !important;\r\n  }\r\n  .mr-lg-auto,\r\n  .mx-lg-auto {\r\n    margin-right: auto !important;\r\n  }\r\n  .mb-lg-auto,\r\n  .my-lg-auto {\r\n    margin-bottom: auto !important;\r\n  }\r\n  .ml-lg-auto,\r\n  .mx-lg-auto {\r\n    margin-left: auto !important;\r\n  }\r\n}\r\n\r\n@media (min-width: 1200px) {\r\n  .m-xl-0 {\r\n    margin: 0 !important;\r\n  }\r\n  .mt-xl-0,\r\n  .my-xl-0 {\r\n    margin-top: 0 !important;\r\n  }\r\n  .mr-xl-0,\r\n  .mx-xl-0 {\r\n    margin-right: 0 !important;\r\n  }\r\n  .mb-xl-0,\r\n  .my-xl-0 {\r\n    margin-bottom: 0 !important;\r\n  }\r\n  .ml-xl-0,\r\n  .mx-xl-0 {\r\n    margin-left: 0 !important;\r\n  }\r\n  .m-xl-1 {\r\n    margin: 0.25rem !important;\r\n  }\r\n  .mt-xl-1,\r\n  .my-xl-1 {\r\n    margin-top: 0.25rem !important;\r\n  }\r\n  .mr-xl-1,\r\n  .mx-xl-1 {\r\n    margin-right: 0.25rem !important;\r\n  }\r\n  .mb-xl-1,\r\n  .my-xl-1 {\r\n    margin-bottom: 0.25rem !important;\r\n  }\r\n  .ml-xl-1,\r\n  .mx-xl-1 {\r\n    margin-left: 0.25rem !important;\r\n  }\r\n  .m-xl-2 {\r\n    margin: 0.5rem !important;\r\n  }\r\n  .mt-xl-2,\r\n  .my-xl-2 {\r\n    margin-top: 0.5rem !important;\r\n  }\r\n  .mr-xl-2,\r\n  .mx-xl-2 {\r\n    margin-right: 0.5rem !important;\r\n  }\r\n  .mb-xl-2,\r\n  .my-xl-2 {\r\n    margin-bottom: 0.5rem !important;\r\n  }\r\n  .ml-xl-2,\r\n  .mx-xl-2 {\r\n    margin-left: 0.5rem !important;\r\n  }\r\n  .m-xl-3 {\r\n    margin: 1rem !important;\r\n  }\r\n  .mt-xl-3,\r\n  .my-xl-3 {\r\n    margin-top: 1rem !important;\r\n  }\r\n  .mr-xl-3,\r\n  .mx-xl-3 {\r\n    margin-right: 1rem !important;\r\n  }\r\n  .mb-xl-3,\r\n  .my-xl-3 {\r\n    margin-bottom: 1rem !important;\r\n  }\r\n  .ml-xl-3,\r\n  .mx-xl-3 {\r\n    margin-left: 1rem !important;\r\n  }\r\n  .m-xl-4 {\r\n    margin: 1.5rem !important;\r\n  }\r\n  .mt-xl-4,\r\n  .my-xl-4 {\r\n    margin-top: 1.5rem !important;\r\n  }\r\n  .mr-xl-4,\r\n  .mx-xl-4 {\r\n    margin-right: 1.5rem !important;\r\n  }\r\n  .mb-xl-4,\r\n  .my-xl-4 {\r\n    margin-bottom: 1.5rem !important;\r\n  }\r\n  .ml-xl-4,\r\n  .mx-xl-4 {\r\n    margin-left: 1.5rem !important;\r\n  }\r\n  .m-xl-5 {\r\n    margin: 3rem !important;\r\n  }\r\n  .mt-xl-5,\r\n  .my-xl-5 {\r\n    margin-top: 3rem !important;\r\n  }\r\n  .mr-xl-5,\r\n  .mx-xl-5 {\r\n    margin-right: 3rem !important;\r\n  }\r\n  .mb-xl-5,\r\n  .my-xl-5 {\r\n    margin-bottom: 3rem !important;\r\n  }\r\n  .ml-xl-5,\r\n  .mx-xl-5 {\r\n    margin-left: 3rem !important;\r\n  }\r\n  .p-xl-0 {\r\n    padding: 0 !important;\r\n  }\r\n  .pt-xl-0,\r\n  .py-xl-0 {\r\n    padding-top: 0 !important;\r\n  }\r\n  .pr-xl-0,\r\n  .px-xl-0 {\r\n    padding-right: 0 !important;\r\n  }\r\n  .pb-xl-0,\r\n  .py-xl-0 {\r\n    padding-bottom: 0 !important;\r\n  }\r\n  .pl-xl-0,\r\n  .px-xl-0 {\r\n    padding-left: 0 !important;\r\n  }\r\n  .p-xl-1 {\r\n    padding: 0.25rem !important;\r\n  }\r\n  .pt-xl-1,\r\n  .py-xl-1 {\r\n    padding-top: 0.25rem !important;\r\n  }\r\n  .pr-xl-1,\r\n  .px-xl-1 {\r\n    padding-right: 0.25rem !important;\r\n  }\r\n  .pb-xl-1,\r\n  .py-xl-1 {\r\n    padding-bottom: 0.25rem !important;\r\n  }\r\n  .pl-xl-1,\r\n  .px-xl-1 {\r\n    padding-left: 0.25rem !important;\r\n  }\r\n  .p-xl-2 {\r\n    padding: 0.5rem !important;\r\n  }\r\n  .pt-xl-2,\r\n  .py-xl-2 {\r\n    padding-top: 0.5rem !important;\r\n  }\r\n  .pr-xl-2,\r\n  .px-xl-2 {\r\n    padding-right: 0.5rem !important;\r\n  }\r\n  .pb-xl-2,\r\n  .py-xl-2 {\r\n    padding-bottom: 0.5rem !important;\r\n  }\r\n  .pl-xl-2,\r\n  .px-xl-2 {\r\n    padding-left: 0.5rem !important;\r\n  }\r\n  .p-xl-3 {\r\n    padding: 1rem !important;\r\n  }\r\n  .pt-xl-3,\r\n  .py-xl-3 {\r\n    padding-top: 1rem !important;\r\n  }\r\n  .pr-xl-3,\r\n  .px-xl-3 {\r\n    padding-right: 1rem !important;\r\n  }\r\n  .pb-xl-3,\r\n  .py-xl-3 {\r\n    padding-bottom: 1rem !important;\r\n  }\r\n  .pl-xl-3,\r\n  .px-xl-3 {\r\n    padding-left: 1rem !important;\r\n  }\r\n  .p-xl-4 {\r\n    padding: 1.5rem !important;\r\n  }\r\n  .pt-xl-4,\r\n  .py-xl-4 {\r\n    padding-top: 1.5rem !important;\r\n  }\r\n  .pr-xl-4,\r\n  .px-xl-4 {\r\n    padding-right: 1.5rem !important;\r\n  }\r\n  .pb-xl-4,\r\n  .py-xl-4 {\r\n    padding-bottom: 1.5rem !important;\r\n  }\r\n  .pl-xl-4,\r\n  .px-xl-4 {\r\n    padding-left: 1.5rem !important;\r\n  }\r\n  .p-xl-5 {\r\n    padding: 3rem !important;\r\n  }\r\n  .pt-xl-5,\r\n  .py-xl-5 {\r\n    padding-top: 3rem !important;\r\n  }\r\n  .pr-xl-5,\r\n  .px-xl-5 {\r\n    padding-right: 3rem !important;\r\n  }\r\n  .pb-xl-5,\r\n  .py-xl-5 {\r\n    padding-bottom: 3rem !important;\r\n  }\r\n  .pl-xl-5,\r\n  .px-xl-5 {\r\n    padding-left: 3rem !important;\r\n  }\r\n  .m-xl-auto {\r\n    margin: auto !important;\r\n  }\r\n  .mt-xl-auto,\r\n  .my-xl-auto {\r\n    margin-top: auto !important;\r\n  }\r\n  .mr-xl-auto,\r\n  .mx-xl-auto {\r\n    margin-right: auto !important;\r\n  }\r\n  .mb-xl-auto,\r\n  .my-xl-auto {\r\n    margin-bottom: auto !important;\r\n  }\r\n  .ml-xl-auto,\r\n  .mx-xl-auto {\r\n    margin-left: auto !important;\r\n  }\r\n}\r\n\r\n.text-justify {\r\n  text-align: justify !important;\r\n}\r\n\r\n.text-nowrap {\r\n  white-space: nowrap !important;\r\n}\r\n\r\n.text-truncate {\r\n  overflow: hidden;\r\n  text-overflow: ellipsis;\r\n  white-space: nowrap;\r\n}\r\n\r\n.text-left {\r\n  text-align: left !important;\r\n}\r\n\r\n.text-right {\r\n  text-align: right !important;\r\n}\r\n\r\n.text-center {\r\n  text-align: center !important;\r\n}\r\n\r\n@media (min-width: 576px) {\r\n  .text-sm-left {\r\n    text-align: left !important;\r\n  }\r\n  .text-sm-right {\r\n    text-align: right !important;\r\n  }\r\n  .text-sm-center {\r\n    text-align: center !important;\r\n  }\r\n}\r\n\r\n@media (min-width: 768px) {\r\n  .text-md-left {\r\n    text-align: left !important;\r\n  }\r\n  .text-md-right {\r\n    text-align: right !important;\r\n  }\r\n  .text-md-center {\r\n    text-align: center !important;\r\n  }\r\n}\r\n\r\n@media (min-width: 992px) {\r\n  .text-lg-left {\r\n    text-align: left !important;\r\n  }\r\n  .text-lg-right {\r\n    text-align: right !important;\r\n  }\r\n  .text-lg-center {\r\n    text-align: center !important;\r\n  }\r\n}\r\n\r\n@media (min-width: 1200px) {\r\n  .text-xl-left {\r\n    text-align: left !important;\r\n  }\r\n  .text-xl-right {\r\n    text-align: right !important;\r\n  }\r\n  .text-xl-center {\r\n    text-align: center !important;\r\n  }\r\n}\r\n\r\n.text-lowercase {\r\n  text-transform: lowercase !important;\r\n}\r\n\r\n.text-uppercase {\r\n  text-transform: uppercase !important;\r\n}\r\n\r\n.text-capitalize {\r\n  text-transform: capitalize !important;\r\n}\r\n\r\n.font-weight-light {\r\n  font-weight: 300 !important;\r\n}\r\n\r\n.font-weight-normal {\r\n  font-weight: 400 !important;\r\n}\r\n\r\n.font-weight-bold {\r\n  font-weight: 700 !important;\r\n}\r\n\r\n.font-italic {\r\n  font-style: italic !important;\r\n}\r\n\r\n.text-white {\r\n  color: #fff !important;\r\n}\r\n\r\n.text-primary {\r\n  color: #007bff !important;\r\n}\r\n\r\na.text-primary:hover, a.text-primary:focus {\r\n  color: #0062cc !important;\r\n}\r\n\r\n.text-secondary {\r\n  color: #6c757d !important;\r\n}\r\n\r\na.text-secondary:hover, a.text-secondary:focus {\r\n  color: #545b62 !important;\r\n}\r\n\r\n.text-success {\r\n  color: #28a745 !important;\r\n}\r\n\r\na.text-success:hover, a.text-success:focus {\r\n  color: #1e7e34 !important;\r\n}\r\n\r\n.text-info {\r\n  color: #17a2b8 !important;\r\n}\r\n\r\na.text-info:hover, a.text-info:focus {\r\n  color: #117a8b !important;\r\n}\r\n\r\n.text-warning {\r\n  color: #ffc107 !important;\r\n}\r\n\r\na.text-warning:hover, a.text-warning:focus {\r\n  color: #d39e00 !important;\r\n}\r\n\r\n.text-danger {\r\n  color: #dc3545 !important;\r\n}\r\n\r\na.text-danger:hover, a.text-danger:focus {\r\n  color: #bd2130 !important;\r\n}\r\n\r\n.text-light {\r\n  color: #f8f9fa !important;\r\n}\r\n\r\na.text-light:hover, a.text-light:focus {\r\n  color: #dae0e5 !important;\r\n}\r\n\r\n.text-dark {\r\n  color: #343a40 !important;\r\n}\r\n\r\na.text-dark:hover, a.text-dark:focus {\r\n  color: #1d2124 !important;\r\n}\r\n\r\n.text-muted {\r\n  color: #6c757d !important;\r\n}\r\n\r\n.text-hide {\r\n  font: 0/0 a;\r\n  color: transparent;\r\n  text-shadow: none;\r\n  background-color: transparent;\r\n  border: 0;\r\n}\r\n\r\n.visible {\r\n  visibility: visible !important;\r\n}\r\n\r\n.invisible {\r\n  visibility: hidden !important;\r\n}\r\n\r\n@media print {\r\n  *,\r\n  *::before,\r\n  *::after {\r\n    text-shadow: none !important;\r\n    box-shadow: none !important;\r\n  }\r\n  a:not(.btn) {\r\n    text-decoration: underline;\r\n  }\r\n  abbr[title]::after {\r\n    content: \" (\" attr(title) \")\";\r\n  }\r\n  pre {\r\n    white-space: pre-wrap !important;\r\n  }\r\n  pre,\r\n  blockquote {\r\n    border: 1px solid #999;\r\n    page-break-inside: avoid;\r\n  }\r\n  thead {\r\n    display: table-header-group;\r\n  }\r\n  tr,\r\n  img {\r\n    page-break-inside: avoid;\r\n  }\r\n  p,\r\n  h2,\r\n  h3 {\r\n    orphans: 3;\r\n    widows: 3;\r\n  }\r\n  h2,\r\n  h3 {\r\n    page-break-after: avoid;\r\n  }\r\n  @page {\r\n    size: a3;\r\n  }\r\n  body {\r\n    min-width: 992px !important;\r\n  }\r\n  .container {\r\n    min-width: 992px !important;\r\n  }\r\n  .navbar {\r\n    display: none;\r\n  }\r\n  .badge {\r\n    border: 1px solid #000;\r\n  }\r\n  .table {\r\n    border-collapse: collapse !important;\r\n  }\r\n  .table td,\r\n  .table th {\r\n    background-color: #fff !important;\r\n  }\r\n  .table-bordered th,\r\n  .table-bordered td {\r\n    border: 1px solid #ddd !important;\r\n  }\r\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/less-loader/dist/cjs.js!./client/src/components/event-listener/event-listener.less":
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/less-loader/dist/cjs.js!./client/src/components/event-listener/event-listener.less ***!
  \***********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  padding: 0;\n  margin: 0;\n}\n#app {\n  position: inherit;\n  top: 0;\n  bottom: 0;\n  right: 0;\n  left: 0;\n}\n.eventlistener-provider {\n  overflow: auto;\n  height: 100%;\n  width: 100%;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/less-loader/dist/cjs.js!./client/src/components/image/image.less":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/less-loader/dist/cjs.js!./client/src/components/image/image.less ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".image-new-item-wrapper .image-wrapper,\n.image-edit-item-wrapper .image-wrapper {\n  margin: 0.25em;\n}\n.image-new-item-wrapper .image-wrapper .image,\n.image-edit-item-wrapper .image-wrapper .image {\n  display: flex;\n  flex-wrap: wrap-reverse;\n}\n.image-new-item-wrapper .image-wrapper .image .dropzone-display,\n.image-edit-item-wrapper .image-wrapper .image .dropzone-display {\n  width: 100%;\n  height: 100%;\n  padding: 0;\n  margin: 0;\n  align-content: center;\n  text-align: center;\n  align-items: center;\n}\n.image-new-item-wrapper .image-wrapper .image .dropzone-display > *,\n.image-edit-item-wrapper .image-wrapper .image .dropzone-display > * {\n  max-width: 100%;\n  max-height: 100%;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  padding: 0;\n  margin: 0;\n}\n.image-new-item-wrapper .image-wrapper .image .dropzone-display p,\n.image-edit-item-wrapper .image-wrapper .image .dropzone-display p {\n  background: white;\n  opacity: 0.75;\n  border: 1px solid black;\n  color: black;\n}\n.image-new-item-wrapper .image-wrapper .image-info,\n.image-edit-item-wrapper .image-wrapper .image-info {\n  padding: 5px;\n  flex-grow: 1;\n  display: flex;\n  flex-direction: row-reverse;\n  justify-content: space-between;\n}\n.image-new-item-wrapper .image-wrapper .image-info > *,\n.image-edit-item-wrapper .image-wrapper .image-info > * {\n  margin: 5px;\n}\n.image-new-item-wrapper .image-wrapper .image-info .image-info-details,\n.image-edit-item-wrapper .image-wrapper .image-info .image-info-details {\n  flex-grow: 1;\n}\n.image-new-item-wrapper .image-wrapper p,\n.image-edit-item-wrapper .image-wrapper p {\n  margin: 0;\n}\n.image-new-item-wrapper .image-wrapper button,\n.image-edit-item-wrapper .image-wrapper button {\n  background-color: #e98383;\n  width: 2em;\n  height: 2em;\n  line-height: 0;\n  padding: 0;\n}\n.image-new-item-wrapper .image-input,\n.image-edit-item-wrapper .image-input {\n  display: grid;\n  grid-gap: 10px;\n  padding: 5px;\n  grid-template-columns: auto 1fr;\n}\n.image-new-item-wrapper .image-input label,\n.image-edit-item-wrapper .image-input label {\n  justify-self: end;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/less-loader/dist/cjs.js!./client/src/css/index.less":
/*!****************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/less-loader/dist/cjs.js!./client/src/css/index.less ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports
exports.i(__webpack_require__(/*! -!../../../node_modules/css-loader!./bootstrap.css */ "./node_modules/css-loader/index.js!./client/src/css/bootstrap.css"), "");

// module
exports.push([module.i, "/**\n * We inherit the height of the container by default\n */\n.DraftEditor-root,\n.DraftEditor-editorContainer,\n.public-DraftEditor-content {\n  height: inherit;\n  text-align: initial;\n}\n.DraftEditor-root {\n  position: relative;\n}\n/**\n * Zero-opacity background used to allow focus in IE. Otherwise, clicks\n * fall through to the placeholder.\n */\n.DraftEditor-editorContainer {\n  background-color: rgba(255, 255, 255, 0);\n  /* Repair mysterious missing Safari cursor */\n  border: 1px solid transparent;\n  position: relative;\n  z-index: 1;\n}\n.public-DraftEditor-content {\n  outline: none;\n  white-space: pre-wrap;\n}\n.public-DraftEditor-block {\n  position: relative;\n}\n.DraftEditor-alignLeft .public-DraftEditor-block {\n  text-align: left;\n}\n.DraftEditor-alignLeft .public-DraftEditorPlaceholder-root {\n  left: 0;\n  text-align: left;\n}\n.DraftEditor-alignCenter .public-DraftEditor-block {\n  text-align: center;\n}\n.DraftEditor-alignCenter .public-DraftEditorPlaceholder-root {\n  margin: 0 auto;\n  text-align: center;\n  width: 100%;\n}\n.DraftEditor-alignRight .public-DraftEditor-block {\n  text-align: right;\n}\n.DraftEditor-alignRight .public-DraftEditorPlaceholder-root {\n  right: 0;\n  text-align: right;\n}\n/**\n * @providesModule DraftEditorPlaceholder\n */\n.public-DraftEditorPlaceholder-root {\n  color: #9197a3;\n  position: absolute;\n  z-index: 0;\n}\n.public-DraftEditorPlaceholder-hasFocus {\n  color: #bdc1c9;\n}\n.DraftEditorPlaceholder-hidden {\n  display: none;\n}\n/**\n * @providesModule DraftStyleDefault\n */\n.public-DraftStyleDefault-block {\n  position: relative;\n  white-space: pre-wrap;\n}\n/* @noflip */\n.public-DraftStyleDefault-ltr {\n  direction: ltr;\n  text-align: left;\n}\n/* @noflip */\n.public-DraftStyleDefault-rtl {\n  direction: rtl;\n  text-align: right;\n}\n/**\n * These rules provide appropriate text direction for counter pseudo-elements.\n */\n/* @noflip */\n.public-DraftStyleDefault-listLTR {\n  direction: ltr;\n}\n/* @noflip */\n.public-DraftStyleDefault-listRTL {\n  direction: rtl;\n}\n/**\n * Default spacing for list container elements. Override with CSS as needed.\n */\n.public-DraftStyleDefault-ul,\n.public-DraftStyleDefault-ol {\n  margin: 16px 0;\n  padding: 0;\n}\n/**\n * Default counters and styles are provided for five levels of nesting.\n * If you require nesting beyond that level, you should use your own CSS\n * classes to do so. If you care about handling RTL languages, the rules you\n * create should look a lot like these.\n */\n/* @noflip */\n.public-DraftStyleDefault-depth0.public-DraftStyleDefault-listLTR {\n  margin-left: 1.5em;\n}\n/* @noflip */\n.public-DraftStyleDefault-depth0.public-DraftStyleDefault-listRTL {\n  margin-right: 1.5em;\n}\n/* @noflip */\n.public-DraftStyleDefault-depth1.public-DraftStyleDefault-listLTR {\n  margin-left: 3em;\n}\n/* @noflip */\n.public-DraftStyleDefault-depth1.public-DraftStyleDefault-listRTL {\n  margin-right: 3em;\n}\n/* @noflip */\n.public-DraftStyleDefault-depth2.public-DraftStyleDefault-listLTR {\n  margin-left: 4.5em;\n}\n/* @noflip */\n.public-DraftStyleDefault-depth2.public-DraftStyleDefault-listRTL {\n  margin-right: 4.5em;\n}\n/* @noflip */\n.public-DraftStyleDefault-depth3.public-DraftStyleDefault-listLTR {\n  margin-left: 6em;\n}\n/* @noflip */\n.public-DraftStyleDefault-depth3.public-DraftStyleDefault-listRTL {\n  margin-right: 6em;\n}\n/* @noflip */\n.public-DraftStyleDefault-depth4.public-DraftStyleDefault-listLTR {\n  margin-left: 7.5em;\n}\n/* @noflip */\n.public-DraftStyleDefault-depth4.public-DraftStyleDefault-listRTL {\n  margin-right: 7.5em;\n}\n/**\n * Only use `square` list-style after the first two levels.\n */\n.public-DraftStyleDefault-unorderedListItem {\n  list-style-type: square;\n  position: relative;\n}\n.public-DraftStyleDefault-unorderedListItem.public-DraftStyleDefault-depth0 {\n  list-style-type: disc;\n}\n.public-DraftStyleDefault-unorderedListItem.public-DraftStyleDefault-depth1 {\n  list-style-type: circle;\n}\n/**\n * Ordered list item counters are managed with CSS, since all list nesting is\n * purely visual.\n */\n.public-DraftStyleDefault-orderedListItem {\n  list-style-type: none;\n  position: relative;\n}\n/* @noflip */\n.public-DraftStyleDefault-orderedListItem.public-DraftStyleDefault-listLTR:before {\n  left: -36px;\n  position: absolute;\n  text-align: right;\n  width: 30px;\n}\n/* @noflip */\n.public-DraftStyleDefault-orderedListItem.public-DraftStyleDefault-listRTL:before {\n  position: absolute;\n  right: -36px;\n  text-align: left;\n  width: 30px;\n}\n/**\n * Counters are reset in JavaScript. If you need different counter styles,\n * override these rules. If you need more nesting, create your own rules to\n * do so.\n */\n.public-DraftStyleDefault-orderedListItem:before {\n  content: counter(ol0) \". \";\n  counter-increment: ol0;\n}\n.public-DraftStyleDefault-orderedListItem.public-DraftStyleDefault-depth1:before {\n  content: counter(ol1) \". \";\n  counter-increment: ol1;\n}\n.public-DraftStyleDefault-orderedListItem.public-DraftStyleDefault-depth2:before {\n  content: counter(ol2) \". \";\n  counter-increment: ol2;\n}\n.public-DraftStyleDefault-orderedListItem.public-DraftStyleDefault-depth3:before {\n  content: counter(ol3) \". \";\n  counter-increment: ol3;\n}\n.public-DraftStyleDefault-orderedListItem.public-DraftStyleDefault-depth4:before {\n  content: counter(ol4) \". \";\n  counter-increment: ol4;\n}\n.public-DraftStyleDefault-depth0.public-DraftStyleDefault-reset {\n  counter-reset: ol0;\n}\n.public-DraftStyleDefault-depth1.public-DraftStyleDefault-reset {\n  counter-reset: ol1;\n}\n.public-DraftStyleDefault-depth2.public-DraftStyleDefault-reset {\n  counter-reset: ol2;\n}\n.public-DraftStyleDefault-depth3.public-DraftStyleDefault-reset {\n  counter-reset: ol3;\n}\n.public-DraftStyleDefault-depth4.public-DraftStyleDefault-reset {\n  counter-reset: ol4;\n}\n.root {\n  background: #fff;\n  border: 1px solid #ddd;\n  border-radius: 3px;\n  font-family: 'Georgia', serif;\n  font-size: 14px;\n}\n.editor {\n  cursor: text;\n  font-size: 16px;\n}\n.editor .public-DraftEditorPlaceholder-root,\n.editor .public-DraftEditor-content {\n  margin: 0;\n  /* 1px is added as transparent border on .DraftEditor-editorContainer */\n  padding: 9px;\n}\n.editor .public-DraftEditor-content {\n  overflow: auto;\n}\n.hidePlaceholder .public-DraftEditorPlaceholder-root {\n  display: none;\n}\n.editor .paragraph {\n  margin: 14px 0;\n}\n/* Consecutive code blocks are nested inside a single parent <pre> (like <li>\n  inside <ul>). Unstyle the parent and style the children. */\n.editor pre {\n  margin: 14px 0;\n}\n.editor .codeBlock {\n  background-color: #f3f3f3;\n  font-family: \"Inconsolata\", \"Menlo\", \"Consolas\", monospace;\n  font-size: 16px;\n  /* This should collapse with the margin around the parent <pre>. */\n  margin: 14px 0;\n  padding: 20px;\n}\n/* Hacky: Remove padding from inline <code> within code block. */\n.editor .codeBlock span[style] {\n  padding: 0 !important;\n}\n.editor .blockquote {\n  border-left: 5px solid #eee;\n  color: #666;\n  font-family: 'Hoefler Text', 'Georgia', serif;\n  font-style: italic;\n  margin: 16px 0;\n  padding: 10px 20px;\n}\n/* There shouldn't be margin outside the first/last blocks */\n.editor .block:first-child,\n.editor pre:first-child,\n.editor ul:first-child,\n.editor ol:first-child {\n  margin-top: 0;\n}\n.editor .block:last-child,\n.editor pre:last-child,\n.editor ul:last-child,\n.editor ol:last-child {\n  margin-bottom: 0;\n}\n/*!\n * https://github.com/YouCanBookMe/react-datetime\n */\n.rdt {\n  position: relative;\n}\n.rdtPicker {\n  display: none;\n  position: absolute;\n  width: 250px;\n  padding: 4px;\n  margin-top: 1px;\n  z-index: 99999 !important;\n  background: #fff;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);\n  border: 1px solid #f9f9f9;\n}\n.rdtOpen .rdtPicker {\n  display: block;\n}\n.rdtStatic .rdtPicker {\n  box-shadow: none;\n  position: static;\n}\n.rdtPicker .rdtTimeToggle {\n  text-align: center;\n}\n.rdtPicker table {\n  width: 100%;\n  margin: 0;\n}\n.rdtPicker td,\n.rdtPicker th {\n  text-align: center;\n  height: 28px;\n}\n.rdtPicker td {\n  cursor: pointer;\n}\n.rdtPicker td.rdtDay:hover,\n.rdtPicker td.rdtHour:hover,\n.rdtPicker td.rdtMinute:hover,\n.rdtPicker td.rdtSecond:hover,\n.rdtPicker .rdtTimeToggle:hover {\n  background: #eeeeee;\n  cursor: pointer;\n}\n.rdtPicker td.rdtOld,\n.rdtPicker td.rdtNew {\n  color: #999999;\n}\n.rdtPicker td.rdtToday {\n  position: relative;\n}\n.rdtPicker td.rdtToday:before {\n  content: '';\n  display: inline-block;\n  border-left: 7px solid transparent;\n  border-bottom: 7px solid #428bca;\n  border-top-color: rgba(0, 0, 0, 0.2);\n  position: absolute;\n  bottom: 4px;\n  right: 4px;\n}\n.rdtPicker td.rdtActive,\n.rdtPicker td.rdtActive:hover {\n  background-color: #428bca;\n  color: #fff;\n  text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.25);\n}\n.rdtPicker td.rdtActive.rdtToday:before {\n  border-bottom-color: #fff;\n}\n.rdtPicker td.rdtDisabled,\n.rdtPicker td.rdtDisabled:hover {\n  background: none;\n  color: #999999;\n  cursor: not-allowed;\n}\n.rdtPicker td span.rdtOld {\n  color: #999999;\n}\n.rdtPicker td span.rdtDisabled,\n.rdtPicker td span.rdtDisabled:hover {\n  background: none;\n  color: #999999;\n  cursor: not-allowed;\n}\n.rdtPicker th {\n  border-bottom: 1px solid #f9f9f9;\n}\n.rdtPicker .dow {\n  width: 14.2857%;\n  border-bottom: none;\n}\n.rdtPicker th.rdtSwitch {\n  width: 100px;\n}\n.rdtPicker th.rdtNext,\n.rdtPicker th.rdtPrev {\n  font-size: 21px;\n  vertical-align: top;\n}\n.rdtPrev span,\n.rdtNext span {\n  display: block;\n  -webkit-touch-callout: none;\n  /* iOS Safari */\n  -webkit-user-select: none;\n  /* Chrome/Safari/Opera */\n  -khtml-user-select: none;\n  /* Konqueror */\n  -moz-user-select: none;\n  /* Firefox */\n  -ms-user-select: none;\n  /* Internet Explorer/Edge */\n  user-select: none;\n}\n.rdtPicker th.rdtDisabled,\n.rdtPicker th.rdtDisabled:hover {\n  background: none;\n  color: #999999;\n  cursor: not-allowed;\n}\n.rdtPicker thead tr:first-child th {\n  cursor: pointer;\n}\n.rdtPicker thead tr:first-child th:hover {\n  background: #eeeeee;\n}\n.rdtPicker tfoot {\n  border-top: 1px solid #f9f9f9;\n}\n.rdtPicker button {\n  border: none;\n  background: none;\n  cursor: pointer;\n}\n.rdtPicker button:hover {\n  background-color: #eee;\n}\n.rdtPicker thead button {\n  width: 100%;\n  height: 100%;\n}\ntd.rdtMonth,\ntd.rdtYear {\n  height: 50px;\n  width: 25%;\n  cursor: pointer;\n}\ntd.rdtMonth:hover,\ntd.rdtYear:hover {\n  background: #eee;\n}\n.rdtCounters {\n  display: inline-block;\n}\n.rdtCounters > div {\n  float: left;\n}\n.rdtCounter {\n  height: 100px;\n}\n.rdtCounter {\n  width: 40px;\n}\n.rdtCounterSeparator {\n  line-height: 100px;\n}\n.rdtCounter .rdtBtn {\n  height: 40%;\n  line-height: 40px;\n  cursor: pointer;\n  display: block;\n  -webkit-touch-callout: none;\n  /* iOS Safari */\n  -webkit-user-select: none;\n  /* Chrome/Safari/Opera */\n  -khtml-user-select: none;\n  /* Konqueror */\n  -moz-user-select: none;\n  /* Firefox */\n  -ms-user-select: none;\n  /* Internet Explorer/Edge */\n  user-select: none;\n}\n.rdtCounter .rdtBtn:hover {\n  background: #eee;\n}\n.rdtCounter .rdtCount {\n  height: 20%;\n  font-size: 1.2em;\n}\n.rdtMilli {\n  vertical-align: middle;\n  padding-left: 8px;\n  width: 48px;\n}\n.rdtMilli input {\n  width: 100%;\n  font-size: 1.2em;\n  margin-top: 37px;\n}\n.home-page-wrapper .container .row {\n  margin: 0;\n}\n.news-link {\n  color: initial;\n  display: block;\n  padding: 5px;\n}\n.news-link:hover,\n.news-link:focus {\n  color: initial;\n  text-decoration: none;\n  background: #d5d9e1;\n}\n.news-created-updated-date-time {\n  text-align: right;\n  font-size: .6rem;\n  color: #696969;\n  margin-bottom: 0.6rem;\n}\n.event-link {\n  color: initial;\n  display: block;\n  padding: 5px;\n}\n.event-link:hover,\n.event-link:focus {\n  color: initial;\n  text-decoration: none;\n  background: #d5d9e1;\n}\n.event-created-updated-date-time {\n  text-align: right;\n  font-size: .6rem;\n  color: #696969;\n  margin-bottom: 0.6rem;\n}\n.image-new-item-wrapper .image-wrapper,\n.image-edit-item-wrapper .image-wrapper {\n  margin: 0.25em;\n}\n.image-new-item-wrapper .image-wrapper .image,\n.image-edit-item-wrapper .image-wrapper .image {\n  display: flex;\n  flex-wrap: wrap-reverse;\n}\n.image-new-item-wrapper .image-wrapper .image .dropzone-display,\n.image-edit-item-wrapper .image-wrapper .image .dropzone-display {\n  width: 100%;\n  height: 100%;\n  padding: 0;\n  margin: 0;\n  align-content: center;\n  text-align: center;\n  align-items: center;\n}\n.image-new-item-wrapper .image-wrapper .image .dropzone-display > *,\n.image-edit-item-wrapper .image-wrapper .image .dropzone-display > * {\n  max-width: 100%;\n  max-height: 100%;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  padding: 0;\n  margin: 0;\n}\n.image-new-item-wrapper .image-wrapper .image .dropzone-display p,\n.image-edit-item-wrapper .image-wrapper .image .dropzone-display p {\n  background: white;\n  opacity: 0.75;\n  border: 1px solid black;\n  color: black;\n}\n.image-new-item-wrapper .image-wrapper .image-info,\n.image-edit-item-wrapper .image-wrapper .image-info {\n  padding: 5px;\n  flex-grow: 1;\n  display: flex;\n  flex-direction: row-reverse;\n  justify-content: space-between;\n}\n.image-new-item-wrapper .image-wrapper .image-info > *,\n.image-edit-item-wrapper .image-wrapper .image-info > * {\n  margin: 5px;\n}\n.image-new-item-wrapper .image-wrapper .image-info .image-info-details,\n.image-edit-item-wrapper .image-wrapper .image-info .image-info-details {\n  flex-grow: 1;\n}\n.image-new-item-wrapper .image-wrapper p,\n.image-edit-item-wrapper .image-wrapper p {\n  margin: 0;\n}\n.image-new-item-wrapper .image-wrapper button,\n.image-edit-item-wrapper .image-wrapper button {\n  background-color: #e98383;\n  width: 2em;\n  height: 2em;\n  line-height: 0;\n  padding: 0;\n}\n.image-new-item-wrapper .image-input,\n.image-edit-item-wrapper .image-input {\n  display: grid;\n  grid-gap: 10px;\n  padding: 5px;\n  grid-template-columns: auto 1fr;\n}\n.image-new-item-wrapper .image-input label,\n.image-edit-item-wrapper .image-input label {\n  justify-self: end;\n}\n@font-face {\n  font-family: 'Lato';\n  src: url('https://fonts.googleapis.com/css?family=Lato|Pacifico');\n}\n@font-face {\n  font-family: 'QueenOfCamelot';\n  src: url('/fonts/QueenOfCamelot.otf');\n  src: url('/fonts/QueenOfCamelot.eot');\n  src: url('/fonts/QueenOfCamelot.eot') format('embedded-opentype'), url('/fonts/QueenOfCamelot.woff2') format('woff2'), url('/fonts/QueenOfCamelot.woff') format('woff'), url('/fonts/QueenOfCamelot.ttf') format('truetype'), url('/fonts/QueenOfCamelot.svg#QueenOfCamelot') format('svg');\n}\nbody {\n  font-family: \"Lato\", sans-serif;\n  overflow-x: hidden;\n  background-color: white;\n}\nbody .container {\n  padding: 0;\n}\nul {\n  padding: 0;\n  margin: 0;\n  list-style-type: none;\n}\nh1,\nh2,\nh3,\nh4,\nh5 {\n  font-family: \"QueenOfCamelot\", \"Lato\", sans-serif;\n}\nh2,\nh4 {\n  color: #e5474b;\n}\n.errortext {\n  color: red;\n}\n.hidden {\n  display: none;\n}\n.errormMessage {\n  color: #CA2A2A;\n  font-size: 13px;\n  line-height: 1.4;\n  margin: 3px 0;\n  padding: 0;\n}\n.header-imgs-wrapper {\n  background-color: black;\n}\n.header-imgs-wrapper .fa-chevron-left,\n.header-imgs-wrapper .fa-chevron-right {\n  position: absolute;\n  font-size: 48px;\n  background-color: rgba(0, 0, 0, 0.4);\n  padding: 151px 18px;\n  color: white;\n}\n.header-imgs-wrapper .fa-chevron-right {\n  right: 0;\n}\n.header-imgs-wrapper a {\n  display: block;\n}\n#header-img {\n  margin: auto;\n  height: 350px;\n  display: block;\n}\n.float-right {\n  float: right;\n}\ninput[type=\"submit\"],\ninput[type=\"reset\"],\ninput[type=\"button\"],\nbutton,\n.button {\n  -moz-appearance: none;\n  -webkit-appearance: none;\n  -ms-appearance: none;\n  appearance: none;\n  -moz-transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;\n  -webkit-transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;\n  -ms-transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;\n  transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;\n  border-radius: 0;\n  border: 0;\n  cursor: pointer;\n  display: inline-block;\n  font-size: .8em;\n  font-weight: 700;\n  height: 3.5em;\n  line-height: 3.65em;\n  padding: 0 2.25em;\n  text-align: center;\n  text-decoration: none;\n  text-transform: uppercase;\n  white-space: nowrap;\n}\ninput[type=\"submit\"],\ninput[type=\"reset\"],\ninput[type=\"button\"],\nbutton,\n.button {\n  background-color: #5a5a5a;\n  color: #ffffff !important;\n}\ninput[type=\"submit\"].alt,\ninput[type=\"reset\"].alt,\ninput[type=\"button\"].alt,\nbutton.alt,\n.button.alt {\n  background-color: transparent;\n  box-shadow: inset 0 0 0 2px #e5474b;\n  color: #e5474b !important;\n}\n#footer input[type=\"submit\"].alt,\n#footer input[type=\"reset\"].alt,\n#footer input[type=\"button\"].alt,\n#footer button.alt,\n#footer .button.alt {\n  background-color: transparent;\n  box-shadow: inset 0 0 0 2px #fff;\n  color: #ffffff !important;\n}\n.main-news-section {\n  width: 50%;\n  float: right;\n  border-style: solid;\n  border-width: medium;\n  border-color: red;\n  margin: 10px;\n  padding: 32px;\n}\n.page-changer {\n  padding: 15px;\n}\n.page-changer .next {\n  float: right;\n  width: 33.3%;\n}\n.page-changer .previous {\n  float: left;\n  width: 33.3%;\n}\n.page-changer p {\n  text-align: center;\n  margin: 10px auto;\n  width: 33.3%;\n  display: inline-block;\n}\n.news-post-list,\n.news-posts-header {\n  max-width: 500px;\n}\n.news-post h4,\n.add-news-post h4,\n.news-post .admin input,\n.add-news-post .admin input {\n  display: inline-block;\n}\n.news-post h5,\n.add-news-post h5,\n.news-post .admin p,\n.add-news-post .admin p,\n.news-post .admin .right,\n.add-news-post .admin .right {\n  float: right;\n  display: inline-block;\n}\n.news-post .public .admin-edit,\n.add-news-post .public .admin-edit {\n  display: none;\n}\n.news-post .public p,\n.add-news-post .public p {\n  padding: 15px;\n}\n.news-post textarea,\n.add-news-post textarea {\n  width: 100%;\n  height: 200px;\n}\n.news-post .news-post-content img,\n.add-news-post .news-post-content img {\n  max-width: 100%;\n}\n.infinite {\n  overflow: auto;\n}\n.infinite::-webkit-scrollbar {\n  display: none;\n}\n.admin-login-form {\n  padding: 50px;\n}\n.admin-login-form > * {\n  margin: 10px 0;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/moment/locale sync recursive ^\\.\\/.*$":
/*!**************************************************!*\
  !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "./node_modules/moment/locale/af.js",
	"./af.js": "./node_modules/moment/locale/af.js",
	"./ar": "./node_modules/moment/locale/ar.js",
	"./ar-dz": "./node_modules/moment/locale/ar-dz.js",
	"./ar-dz.js": "./node_modules/moment/locale/ar-dz.js",
	"./ar-kw": "./node_modules/moment/locale/ar-kw.js",
	"./ar-kw.js": "./node_modules/moment/locale/ar-kw.js",
	"./ar-ly": "./node_modules/moment/locale/ar-ly.js",
	"./ar-ly.js": "./node_modules/moment/locale/ar-ly.js",
	"./ar-ma": "./node_modules/moment/locale/ar-ma.js",
	"./ar-ma.js": "./node_modules/moment/locale/ar-ma.js",
	"./ar-sa": "./node_modules/moment/locale/ar-sa.js",
	"./ar-sa.js": "./node_modules/moment/locale/ar-sa.js",
	"./ar-tn": "./node_modules/moment/locale/ar-tn.js",
	"./ar-tn.js": "./node_modules/moment/locale/ar-tn.js",
	"./ar.js": "./node_modules/moment/locale/ar.js",
	"./az": "./node_modules/moment/locale/az.js",
	"./az.js": "./node_modules/moment/locale/az.js",
	"./be": "./node_modules/moment/locale/be.js",
	"./be.js": "./node_modules/moment/locale/be.js",
	"./bg": "./node_modules/moment/locale/bg.js",
	"./bg.js": "./node_modules/moment/locale/bg.js",
	"./bm": "./node_modules/moment/locale/bm.js",
	"./bm.js": "./node_modules/moment/locale/bm.js",
	"./bn": "./node_modules/moment/locale/bn.js",
	"./bn.js": "./node_modules/moment/locale/bn.js",
	"./bo": "./node_modules/moment/locale/bo.js",
	"./bo.js": "./node_modules/moment/locale/bo.js",
	"./br": "./node_modules/moment/locale/br.js",
	"./br.js": "./node_modules/moment/locale/br.js",
	"./bs": "./node_modules/moment/locale/bs.js",
	"./bs.js": "./node_modules/moment/locale/bs.js",
	"./ca": "./node_modules/moment/locale/ca.js",
	"./ca.js": "./node_modules/moment/locale/ca.js",
	"./cs": "./node_modules/moment/locale/cs.js",
	"./cs.js": "./node_modules/moment/locale/cs.js",
	"./cv": "./node_modules/moment/locale/cv.js",
	"./cv.js": "./node_modules/moment/locale/cv.js",
	"./cy": "./node_modules/moment/locale/cy.js",
	"./cy.js": "./node_modules/moment/locale/cy.js",
	"./da": "./node_modules/moment/locale/da.js",
	"./da.js": "./node_modules/moment/locale/da.js",
	"./de": "./node_modules/moment/locale/de.js",
	"./de-at": "./node_modules/moment/locale/de-at.js",
	"./de-at.js": "./node_modules/moment/locale/de-at.js",
	"./de-ch": "./node_modules/moment/locale/de-ch.js",
	"./de-ch.js": "./node_modules/moment/locale/de-ch.js",
	"./de.js": "./node_modules/moment/locale/de.js",
	"./dv": "./node_modules/moment/locale/dv.js",
	"./dv.js": "./node_modules/moment/locale/dv.js",
	"./el": "./node_modules/moment/locale/el.js",
	"./el.js": "./node_modules/moment/locale/el.js",
	"./en-au": "./node_modules/moment/locale/en-au.js",
	"./en-au.js": "./node_modules/moment/locale/en-au.js",
	"./en-ca": "./node_modules/moment/locale/en-ca.js",
	"./en-ca.js": "./node_modules/moment/locale/en-ca.js",
	"./en-gb": "./node_modules/moment/locale/en-gb.js",
	"./en-gb.js": "./node_modules/moment/locale/en-gb.js",
	"./en-ie": "./node_modules/moment/locale/en-ie.js",
	"./en-ie.js": "./node_modules/moment/locale/en-ie.js",
	"./en-il": "./node_modules/moment/locale/en-il.js",
	"./en-il.js": "./node_modules/moment/locale/en-il.js",
	"./en-nz": "./node_modules/moment/locale/en-nz.js",
	"./en-nz.js": "./node_modules/moment/locale/en-nz.js",
	"./eo": "./node_modules/moment/locale/eo.js",
	"./eo.js": "./node_modules/moment/locale/eo.js",
	"./es": "./node_modules/moment/locale/es.js",
	"./es-do": "./node_modules/moment/locale/es-do.js",
	"./es-do.js": "./node_modules/moment/locale/es-do.js",
	"./es-us": "./node_modules/moment/locale/es-us.js",
	"./es-us.js": "./node_modules/moment/locale/es-us.js",
	"./es.js": "./node_modules/moment/locale/es.js",
	"./et": "./node_modules/moment/locale/et.js",
	"./et.js": "./node_modules/moment/locale/et.js",
	"./eu": "./node_modules/moment/locale/eu.js",
	"./eu.js": "./node_modules/moment/locale/eu.js",
	"./fa": "./node_modules/moment/locale/fa.js",
	"./fa.js": "./node_modules/moment/locale/fa.js",
	"./fi": "./node_modules/moment/locale/fi.js",
	"./fi.js": "./node_modules/moment/locale/fi.js",
	"./fo": "./node_modules/moment/locale/fo.js",
	"./fo.js": "./node_modules/moment/locale/fo.js",
	"./fr": "./node_modules/moment/locale/fr.js",
	"./fr-ca": "./node_modules/moment/locale/fr-ca.js",
	"./fr-ca.js": "./node_modules/moment/locale/fr-ca.js",
	"./fr-ch": "./node_modules/moment/locale/fr-ch.js",
	"./fr-ch.js": "./node_modules/moment/locale/fr-ch.js",
	"./fr.js": "./node_modules/moment/locale/fr.js",
	"./fy": "./node_modules/moment/locale/fy.js",
	"./fy.js": "./node_modules/moment/locale/fy.js",
	"./gd": "./node_modules/moment/locale/gd.js",
	"./gd.js": "./node_modules/moment/locale/gd.js",
	"./gl": "./node_modules/moment/locale/gl.js",
	"./gl.js": "./node_modules/moment/locale/gl.js",
	"./gom-latn": "./node_modules/moment/locale/gom-latn.js",
	"./gom-latn.js": "./node_modules/moment/locale/gom-latn.js",
	"./gu": "./node_modules/moment/locale/gu.js",
	"./gu.js": "./node_modules/moment/locale/gu.js",
	"./he": "./node_modules/moment/locale/he.js",
	"./he.js": "./node_modules/moment/locale/he.js",
	"./hi": "./node_modules/moment/locale/hi.js",
	"./hi.js": "./node_modules/moment/locale/hi.js",
	"./hr": "./node_modules/moment/locale/hr.js",
	"./hr.js": "./node_modules/moment/locale/hr.js",
	"./hu": "./node_modules/moment/locale/hu.js",
	"./hu.js": "./node_modules/moment/locale/hu.js",
	"./hy-am": "./node_modules/moment/locale/hy-am.js",
	"./hy-am.js": "./node_modules/moment/locale/hy-am.js",
	"./id": "./node_modules/moment/locale/id.js",
	"./id.js": "./node_modules/moment/locale/id.js",
	"./is": "./node_modules/moment/locale/is.js",
	"./is.js": "./node_modules/moment/locale/is.js",
	"./it": "./node_modules/moment/locale/it.js",
	"./it.js": "./node_modules/moment/locale/it.js",
	"./ja": "./node_modules/moment/locale/ja.js",
	"./ja.js": "./node_modules/moment/locale/ja.js",
	"./jv": "./node_modules/moment/locale/jv.js",
	"./jv.js": "./node_modules/moment/locale/jv.js",
	"./ka": "./node_modules/moment/locale/ka.js",
	"./ka.js": "./node_modules/moment/locale/ka.js",
	"./kk": "./node_modules/moment/locale/kk.js",
	"./kk.js": "./node_modules/moment/locale/kk.js",
	"./km": "./node_modules/moment/locale/km.js",
	"./km.js": "./node_modules/moment/locale/km.js",
	"./kn": "./node_modules/moment/locale/kn.js",
	"./kn.js": "./node_modules/moment/locale/kn.js",
	"./ko": "./node_modules/moment/locale/ko.js",
	"./ko.js": "./node_modules/moment/locale/ko.js",
	"./ky": "./node_modules/moment/locale/ky.js",
	"./ky.js": "./node_modules/moment/locale/ky.js",
	"./lb": "./node_modules/moment/locale/lb.js",
	"./lb.js": "./node_modules/moment/locale/lb.js",
	"./lo": "./node_modules/moment/locale/lo.js",
	"./lo.js": "./node_modules/moment/locale/lo.js",
	"./lt": "./node_modules/moment/locale/lt.js",
	"./lt.js": "./node_modules/moment/locale/lt.js",
	"./lv": "./node_modules/moment/locale/lv.js",
	"./lv.js": "./node_modules/moment/locale/lv.js",
	"./me": "./node_modules/moment/locale/me.js",
	"./me.js": "./node_modules/moment/locale/me.js",
	"./mi": "./node_modules/moment/locale/mi.js",
	"./mi.js": "./node_modules/moment/locale/mi.js",
	"./mk": "./node_modules/moment/locale/mk.js",
	"./mk.js": "./node_modules/moment/locale/mk.js",
	"./ml": "./node_modules/moment/locale/ml.js",
	"./ml.js": "./node_modules/moment/locale/ml.js",
	"./mn": "./node_modules/moment/locale/mn.js",
	"./mn.js": "./node_modules/moment/locale/mn.js",
	"./mr": "./node_modules/moment/locale/mr.js",
	"./mr.js": "./node_modules/moment/locale/mr.js",
	"./ms": "./node_modules/moment/locale/ms.js",
	"./ms-my": "./node_modules/moment/locale/ms-my.js",
	"./ms-my.js": "./node_modules/moment/locale/ms-my.js",
	"./ms.js": "./node_modules/moment/locale/ms.js",
	"./mt": "./node_modules/moment/locale/mt.js",
	"./mt.js": "./node_modules/moment/locale/mt.js",
	"./my": "./node_modules/moment/locale/my.js",
	"./my.js": "./node_modules/moment/locale/my.js",
	"./nb": "./node_modules/moment/locale/nb.js",
	"./nb.js": "./node_modules/moment/locale/nb.js",
	"./ne": "./node_modules/moment/locale/ne.js",
	"./ne.js": "./node_modules/moment/locale/ne.js",
	"./nl": "./node_modules/moment/locale/nl.js",
	"./nl-be": "./node_modules/moment/locale/nl-be.js",
	"./nl-be.js": "./node_modules/moment/locale/nl-be.js",
	"./nl.js": "./node_modules/moment/locale/nl.js",
	"./nn": "./node_modules/moment/locale/nn.js",
	"./nn.js": "./node_modules/moment/locale/nn.js",
	"./pa-in": "./node_modules/moment/locale/pa-in.js",
	"./pa-in.js": "./node_modules/moment/locale/pa-in.js",
	"./pl": "./node_modules/moment/locale/pl.js",
	"./pl.js": "./node_modules/moment/locale/pl.js",
	"./pt": "./node_modules/moment/locale/pt.js",
	"./pt-br": "./node_modules/moment/locale/pt-br.js",
	"./pt-br.js": "./node_modules/moment/locale/pt-br.js",
	"./pt.js": "./node_modules/moment/locale/pt.js",
	"./ro": "./node_modules/moment/locale/ro.js",
	"./ro.js": "./node_modules/moment/locale/ro.js",
	"./ru": "./node_modules/moment/locale/ru.js",
	"./ru.js": "./node_modules/moment/locale/ru.js",
	"./sd": "./node_modules/moment/locale/sd.js",
	"./sd.js": "./node_modules/moment/locale/sd.js",
	"./se": "./node_modules/moment/locale/se.js",
	"./se.js": "./node_modules/moment/locale/se.js",
	"./si": "./node_modules/moment/locale/si.js",
	"./si.js": "./node_modules/moment/locale/si.js",
	"./sk": "./node_modules/moment/locale/sk.js",
	"./sk.js": "./node_modules/moment/locale/sk.js",
	"./sl": "./node_modules/moment/locale/sl.js",
	"./sl.js": "./node_modules/moment/locale/sl.js",
	"./sq": "./node_modules/moment/locale/sq.js",
	"./sq.js": "./node_modules/moment/locale/sq.js",
	"./sr": "./node_modules/moment/locale/sr.js",
	"./sr-cyrl": "./node_modules/moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "./node_modules/moment/locale/sr-cyrl.js",
	"./sr.js": "./node_modules/moment/locale/sr.js",
	"./ss": "./node_modules/moment/locale/ss.js",
	"./ss.js": "./node_modules/moment/locale/ss.js",
	"./sv": "./node_modules/moment/locale/sv.js",
	"./sv.js": "./node_modules/moment/locale/sv.js",
	"./sw": "./node_modules/moment/locale/sw.js",
	"./sw.js": "./node_modules/moment/locale/sw.js",
	"./ta": "./node_modules/moment/locale/ta.js",
	"./ta.js": "./node_modules/moment/locale/ta.js",
	"./te": "./node_modules/moment/locale/te.js",
	"./te.js": "./node_modules/moment/locale/te.js",
	"./tet": "./node_modules/moment/locale/tet.js",
	"./tet.js": "./node_modules/moment/locale/tet.js",
	"./tg": "./node_modules/moment/locale/tg.js",
	"./tg.js": "./node_modules/moment/locale/tg.js",
	"./th": "./node_modules/moment/locale/th.js",
	"./th.js": "./node_modules/moment/locale/th.js",
	"./tl-ph": "./node_modules/moment/locale/tl-ph.js",
	"./tl-ph.js": "./node_modules/moment/locale/tl-ph.js",
	"./tlh": "./node_modules/moment/locale/tlh.js",
	"./tlh.js": "./node_modules/moment/locale/tlh.js",
	"./tr": "./node_modules/moment/locale/tr.js",
	"./tr.js": "./node_modules/moment/locale/tr.js",
	"./tzl": "./node_modules/moment/locale/tzl.js",
	"./tzl.js": "./node_modules/moment/locale/tzl.js",
	"./tzm": "./node_modules/moment/locale/tzm.js",
	"./tzm-latn": "./node_modules/moment/locale/tzm-latn.js",
	"./tzm-latn.js": "./node_modules/moment/locale/tzm-latn.js",
	"./tzm.js": "./node_modules/moment/locale/tzm.js",
	"./ug-cn": "./node_modules/moment/locale/ug-cn.js",
	"./ug-cn.js": "./node_modules/moment/locale/ug-cn.js",
	"./uk": "./node_modules/moment/locale/uk.js",
	"./uk.js": "./node_modules/moment/locale/uk.js",
	"./ur": "./node_modules/moment/locale/ur.js",
	"./ur.js": "./node_modules/moment/locale/ur.js",
	"./uz": "./node_modules/moment/locale/uz.js",
	"./uz-latn": "./node_modules/moment/locale/uz-latn.js",
	"./uz-latn.js": "./node_modules/moment/locale/uz-latn.js",
	"./uz.js": "./node_modules/moment/locale/uz.js",
	"./vi": "./node_modules/moment/locale/vi.js",
	"./vi.js": "./node_modules/moment/locale/vi.js",
	"./x-pseudo": "./node_modules/moment/locale/x-pseudo.js",
	"./x-pseudo.js": "./node_modules/moment/locale/x-pseudo.js",
	"./yo": "./node_modules/moment/locale/yo.js",
	"./yo.js": "./node_modules/moment/locale/yo.js",
	"./zh-cn": "./node_modules/moment/locale/zh-cn.js",
	"./zh-cn.js": "./node_modules/moment/locale/zh-cn.js",
	"./zh-hk": "./node_modules/moment/locale/zh-hk.js",
	"./zh-hk.js": "./node_modules/moment/locale/zh-hk.js",
	"./zh-tw": "./node_modules/moment/locale/zh-tw.js",
	"./zh-tw.js": "./node_modules/moment/locale/zh-tw.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) { // check for number or string
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return id;
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./node_modules/moment/locale sync recursive ^\\.\\/.*$";

/***/ })

}]);
//# sourceMappingURL=0.index_bundle.js.map