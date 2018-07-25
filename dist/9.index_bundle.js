(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[9],{

/***/ "./client/src/components/news/news-item-edit.tsx":
/*!*******************************************************!*\
  !*** ./client/src/components/news/news-item-edit.tsx ***!
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
/* harmony import */ var _news_provider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./news-provider */ "./client/src/components/news/news-provider.tsx");
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





var NewsItemEdit = /** @class */ (function (_super) {
    __extends(NewsItemEdit, _super);
    function NewsItemEdit(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            redirect: false,
            required: false,
            post: react_rte__WEBPACK_IMPORTED_MODULE_1___default.a.createEmptyValue(),
            discontinued: false,
        };
        _this.hitKey = _this.hitKey.bind(_this);
        _this.editField = _this.editField.bind(_this);
        _this.handleCheckboxChange = _this.handleCheckboxChange.bind(_this);
        _this.updateNewsItem = _this.updateNewsItem.bind(_this);
        _this.updateNewsItemResult = _this.updateNewsItemResult.bind(_this);
        _this.onRichTextChange = _this.onRichTextChange.bind(_this);
        _this.redirect = _this.redirect.bind(_this);
        return _this;
    }
    NewsItemEdit.prototype.componentWillMount = function () {
        var _this = this;
        this.setState(function () {
            return {
                post: react_rte__WEBPACK_IMPORTED_MODULE_1___default.a.createValueFromString(_this.props.news.newsItem.post, 'html'),
                discontinued: _this.props.news.newsItem.discontinued,
            };
        });
    };
    NewsItemEdit.prototype.componentDidUpdate = function (prevProps, prevState) {
        var _this = this;
        var propsToCheck = ['post', 'discontinued'];
        var _state = null;
        propsToCheck.forEach(function (propToCheck) {
            if (prevProps.news.newsItem[propToCheck] !== _this.props.news.newsItem[propToCheck]) {
                _state = _state == null ? {} : _state;
                _state[propToCheck] = _this.props.news.newsItem[propToCheck];
                if (propToCheck == 'post') {
                    _state[propToCheck] = react_rte__WEBPACK_IMPORTED_MODULE_1___default.a.createValueFromString(_this.props.news.newsItem[propToCheck], 'html');
                }
            }
        });
        if (_state) {
            this.setState(function () {
                return _state;
            });
        }
    };
    NewsItemEdit.prototype.componentDidMount = function () {
        this.props.news.getNewsItem(this.props.news.newsItem._newsItemId);
    };
    NewsItemEdit.prototype.editField = function (e) {
        var _state = this.state;
        _state[e.target.name] = e.target.value;
        this.setState(_state);
    };
    NewsItemEdit.prototype.hitKey = function (event) {
        if (event.key == 'Enter') {
            this.updateNewsItem(event);
        }
    };
    NewsItemEdit.prototype.updateNewsItem = function (event) {
        event.preventDefault();
        var params = { _id: this.props.news.newsItem._newsItemId };
        var vaildKeys = ['post', 'discontinued'];
        for (var i = 0; i < vaildKeys.length; i++) {
            var _new = this.state[vaildKeys[i]];
            if (vaildKeys[i] == 'post') {
                _new = _new.toString('html');
            }
            if (_new != this.props.news.newsItem[vaildKeys[i]]) {
                params[vaildKeys[i]] = _new;
            }
        }
        this.props.news.updateNewsItem(params, this.updateNewsItemResult);
    };
    NewsItemEdit.prototype.updateNewsItemResult = function (error) {
        if (error) {
            this.setState(function () {
                return { required: true };
            });
        }
        else {
            this.redirect();
        }
    };
    NewsItemEdit.prototype.onRichTextChange = function (value) {
        this.setState(function () {
            return { post: value };
        });
    };
    NewsItemEdit.prototype.handleCheckboxChange = function (event) {
        var _a = event.target, name = _a.name, checked = _a.checked;
        this.setState(function (prevState) {
            prevState[name] = checked;
            return { required: true };
        });
    };
    NewsItemEdit.prototype.redirect = function () {
        this.setState(function () {
            return { redirect: true };
        });
    };
    NewsItemEdit.prototype.render = function () {
        var _a = this, updateNewsItem = _a.updateNewsItem, onRichTextChange = _a.onRichTextChange, handleCheckboxChange = _a.handleCheckboxChange;
        var _b = this.state, redirect = _b.redirect, required = _b.required, post = _b.post, discontinued = _b.discontinued;
        var location = this.props.location;
        var _c = this.props.news.newsItem, _newsItemId = _c._newsItemId, createdUpdatedDateTime = _c.createdUpdatedDateTime;
        var admin = this.props.user.admin;
        if (redirect) {
            return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Redirect"], { to: '/news/item/' + _newsItemId }));
        }
        if (!admin) {
            return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Redirect"], { to: { pathname: '/login', state: { redirectPath: location.pathname } } }));
        }
        return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "news-item-edit-wrapper" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("form", { onSubmit: updateNewsItem },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h3", null, "EDIT ITEM"),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("label", null,
                    "Post",
                    required ? (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", { className: "errortext" }, "*")) : ''),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("br", null),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_rte__WEBPACK_IMPORTED_MODULE_1___default.a, { value: post, onChange: onRichTextChange }),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("br", null),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", { className: 'news-created-updated-date-time' }, createdUpdatedDateTime),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("label", null, "Discontinued"),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("br", null),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("input", { type: 'checkbox', checked: !!discontinued, name: "discontinued", onChange: handleCheckboxChange }),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("br", null),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("input", { type: 'submit', onClick: updateNewsItem, value: 'SAVE' }))));
    };
    return NewsItemEdit;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]));
;
/* harmony default export */ __webpack_exports__["default"] = (Object(_user_user_provider__WEBPACK_IMPORTED_MODULE_4__["userConsumer"])(Object(_news_provider__WEBPACK_IMPORTED_MODULE_3__["newsConsumer"])(NewsItemEdit)));


/***/ }),

/***/ "./client/src/components/news/news-item.tsx":
/*!**************************************************!*\
  !*** ./client/src/components/news/news-item.tsx ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_rte__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-rte */ "./node_modules/react-rte/dist/react-rte.js");
/* harmony import */ var react_rte__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_rte__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var _news_provider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./news-provider */ "./client/src/components/news/news-provider.tsx");
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





var NewsItem = /** @class */ (function (_super) {
    __extends(NewsItem, _super);
    function NewsItem(props) {
        return _super.call(this, props) || this;
    }
    NewsItem.prototype.componentDidMount = function () {
        this.props.news.getNewsItem(this.props.news.newsItem._newsItemId);
    };
    NewsItem.prototype.render = function () {
        return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "news-item-wrapper" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_rte__WEBPACK_IMPORTED_MODULE_1___default.a, { value: react_rte__WEBPACK_IMPORTED_MODULE_1___default.a.createValueFromString(this.props.news.newsItem.post, 'html'), readOnly: true }),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", { className: 'news-created-updated-date-time' }, this.props.news.newsItem.createdUpdatedDateTime),
            this.props.user.admin ? react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], { to: '/news/edit/' + this.props.news.newsItem._newsItemId }, "EDIT") : ''));
    };
    return NewsItem;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]));
;
/* harmony default export */ __webpack_exports__["default"] = (Object(_user_user_provider__WEBPACK_IMPORTED_MODULE_4__["userConsumer"])(Object(_news_provider__WEBPACK_IMPORTED_MODULE_3__["newsConsumer"])(NewsItem)));


/***/ }),

/***/ "./client/src/components/news/news-list-item.tsx":
/*!*******************************************************!*\
  !*** ./client/src/components/news/news-list-item.tsx ***!
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
/* harmony import */ var _news_provider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./news-provider */ "./client/src/components/news/news-provider.tsx");

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




var NewsListItem = /** @class */ (function (_super) {
    __extends(NewsListItem, _super);
    function NewsListItem(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {};
        return _this;
    }
    NewsListItem.prototype.componentDidMount = function () {
        this.props.news.getNewsItem(this.props._newsItemId);
    };
    NewsListItem.prototype.render = function () {
        var _a = this.props.news.newsItem, post = _a.post, createdUpdatedDateTime = _a.createdUpdatedDateTime;
        return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("li", { className: "news-list-item-wrapper" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], { className: "news-link", to: '/news/item/' + this.props._newsItemId },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_rte__WEBPACK_IMPORTED_MODULE_1___default.a, { value: react_rte__WEBPACK_IMPORTED_MODULE_1___default.a.createValueFromString(post, 'html'), readOnly: true })),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", { className: 'news-created-updated-date-time' }, createdUpdatedDateTime)));
    };
    return NewsListItem;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]));
;
/* harmony default export */ __webpack_exports__["default"] = (Object(_news_provider__WEBPACK_IMPORTED_MODULE_3__["newsConsumer"])(NewsListItem));


/***/ }),

/***/ "./client/src/components/news/news-list.tsx":
/*!**************************************************!*\
  !*** ./client/src/components/news/news-list.tsx ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var _news_list_item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./news-list-item */ "./client/src/components/news/news-list-item.tsx");
/* harmony import */ var _news_provider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./news-provider */ "./client/src/components/news/news-provider.tsx");
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





var NewsList = /** @class */ (function (_super) {
    __extends(NewsList, _super);
    function NewsList(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {};
        return _this;
    }
    NewsList.prototype.componentDidMount = function () {
        this.props.news.getNewsItems();
    };
    NewsList.prototype.componentDidUpdate = function (prevProps, prevState, snapshot) {
        var update = false;
        if (prevProps.discontinued != this.props.discontinued) {
            update = true;
        }
        if (prevProps.limit != this.props.limit) {
            update = true;
        }
        if (update) {
            var query = {
                discontinued: this.props.discontinued,
                limit: this.props.limit,
            };
            this.props.news.getNewsItems(query);
        }
    };
    NewsList.prototype.render = function () {
        var admin = this.props.user.admin;
        var NewsItemList = [];
        if (this.props.news.newsItems) {
            this.props.news.newsItems.forEach(function (newsItemKey) {
                NewsItemList.push(react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_news_list_item__WEBPACK_IMPORTED_MODULE_2__["default"], { key: newsItemKey, _newsItemId: newsItemKey }));
            });
        }
        return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "news-list-wrapper" },
            admin ? (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", null,
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], { to: "/news/newitem" }, "NEW ITEM"),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("br", null))) : '',
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("ul", { className: 'news-item-list' }, NewsItemList)));
    };
    NewsList.defualtProps = {
        discontinued: false,
        limit: 10,
    };
    return NewsList;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]));
;
/* harmony default export */ __webpack_exports__["default"] = (Object(_user_user_provider__WEBPACK_IMPORTED_MODULE_4__["userConsumer"])(Object(_news_provider__WEBPACK_IMPORTED_MODULE_3__["newsConsumer"])(NewsList)));


/***/ }),

/***/ "./client/src/components/news/news-new-item.tsx":
/*!******************************************************!*\
  !*** ./client/src/components/news/news-new-item.tsx ***!
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
/* harmony import */ var _news_provider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./news-provider */ "./client/src/components/news/news-provider.tsx");
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





var NewsNewItem = /** @class */ (function (_super) {
    __extends(NewsNewItem, _super);
    function NewsNewItem(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            post: react_rte__WEBPACK_IMPORTED_MODULE_1___default.a.createEmptyValue(),
            _newsItemId: false,
            required: false,
        };
        _this.addNewNewsItem = _this.addNewNewsItem.bind(_this);
        _this.addNewNewsItemResult = _this.addNewNewsItemResult.bind(_this);
        _this.onRichTextChange = _this.onRichTextChange.bind(_this);
        return _this;
    }
    NewsNewItem.prototype.addNewNewsItem = function (event) {
        event.preventDefault();
        var post = this.state.post;
        if (!post) {
            this.setState(function () {
                return { required: true };
            });
            return;
        }
        this.props.news.addNewsItem(post.toString('html'), this.addNewNewsItemResult);
        this.setState(function () {
            return { required: false };
        });
    };
    NewsNewItem.prototype.addNewNewsItemResult = function (error, _newsItemId) {
        if (error) {
            this.setState(function () {
                return { required: true };
            });
        }
        else {
            this.setState(function () {
                return { _newsItemId: _newsItemId };
            });
        }
    };
    NewsNewItem.prototype.onRichTextChange = function (value) {
        this.setState(function () {
            return { post: value };
        });
    };
    NewsNewItem.prototype.render = function () {
        if (this.state._newsItemId) {
            return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Redirect"], { to: '/news/item/' + this.state._newsItemId }));
        }
        if (!this.props.user.admin) {
            return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Redirect"], { to: { pathname: '/login', state: { redirectPath: this.props.location.pathname } } }));
        }
        return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "news-new-item-wrapper" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("form", { onSubmit: this.addNewNewsItem },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h3", null, "New Item"),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("label", null,
                    "Post",
                    this.state.required ? (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", { className: "errortext" }, "* Needs to have something in the text field below.")) : ''),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("br", null),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_rte__WEBPACK_IMPORTED_MODULE_1___default.a, { value: this.state.post, onChange: this.onRichTextChange }),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("input", { type: 'submit', onClick: this.addNewNewsItem, value: 'SAVE' }))));
    };
    return NewsNewItem;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]));
;
/* harmony default export */ __webpack_exports__["default"] = (Object(_user_user_provider__WEBPACK_IMPORTED_MODULE_4__["userConsumer"])(Object(_news_provider__WEBPACK_IMPORTED_MODULE_3__["newsConsumer"])(NewsNewItem)));


/***/ }),

/***/ "./client/src/components/news/news-page.tsx":
/*!**************************************************!*\
  !*** ./client/src/components/news/news-page.tsx ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _news_list__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./news-list */ "./client/src/components/news/news-list.tsx");
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



var NewsPage = /** @class */ (function (_super) {
    __extends(NewsPage, _super);
    function NewsPage(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            discontinued: false,
        };
        _this.handleCheckboxChange = _this.handleCheckboxChange.bind(_this);
        return _this;
    }
    NewsPage.prototype.handleCheckboxChange = function (event) {
        var _a = event.target, name = _a.name, checked = _a.checked;
        this.setState(function (prevState) {
            prevState[name] = checked;
            return prevState;
        });
    };
    NewsPage.prototype.render = function () {
        var adminOptions = this.props.user.admin ? (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", null,
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h5", null, "Admin Options"),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("label", null, "Discontinued"),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("input", { type: 'checkbox', checked: !!this.state.discontinued, name: "discontinued", onChange: this.handleCheckboxChange }))) : '';
        return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "news-wrapper" },
            adminOptions,
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_news_list__WEBPACK_IMPORTED_MODULE_1__["default"], { discontinued: this.state.discontinued })));
    };
    return NewsPage;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]));
;
/* harmony default export */ __webpack_exports__["default"] = (Object(_user_user_provider__WEBPACK_IMPORTED_MODULE_2__["userConsumer"])(NewsPage));


/***/ }),

/***/ "./client/src/components/news/news-switch.tsx":
/*!****************************************************!*\
  !*** ./client/src/components/news/news-switch.tsx ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router */ "./node_modules/react-router/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var _news_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./news-page */ "./client/src/components/news/news-page.tsx");
/* harmony import */ var _news_item__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./news-item */ "./client/src/components/news/news-item.tsx");
/* harmony import */ var _news_item_edit__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./news-item-edit */ "./client/src/components/news/news-item-edit.tsx");
/* harmony import */ var _news_new_item__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./news-new-item */ "./client/src/components/news/news-new-item.tsx");
/* harmony import */ var _no_match__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../no-match */ "./client/src/components/no-match.tsx");

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








var NewsSwitch = /** @class */ (function (_super) {
    __extends(NewsSwitch, _super);
    function NewsSwitch(props) {
        return _super.call(this, props) || this;
    }
    NewsSwitch.prototype.render = function () {
        return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "news-page-wrapper" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "container" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_2__["NavLink"], { exact: true, to: '/news', activeClassName: "selected" },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h2", null, "News")),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router__WEBPACK_IMPORTED_MODULE_1__["Switch"], null,
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router__WEBPACK_IMPORTED_MODULE_1__["Route"], { exact: true, path: "/news", component: _news_page__WEBPACK_IMPORTED_MODULE_3__["default"] }),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router__WEBPACK_IMPORTED_MODULE_1__["Route"], { path: "/news/newitem", component: _news_new_item__WEBPACK_IMPORTED_MODULE_6__["default"] }),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router__WEBPACK_IMPORTED_MODULE_1__["Route"], { path: "/news/item/:_newsItemId", component: _news_item__WEBPACK_IMPORTED_MODULE_4__["default"] }),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router__WEBPACK_IMPORTED_MODULE_1__["Route"], { path: "/news/edit/:_newsItemId", component: _news_item_edit__WEBPACK_IMPORTED_MODULE_5__["default"] }),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router__WEBPACK_IMPORTED_MODULE_1__["Route"], { component: _no_match__WEBPACK_IMPORTED_MODULE_7__["default"] })))));
    };
    return NewsSwitch;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]));
;
/* harmony default export */ __webpack_exports__["default"] = (NewsSwitch);


/***/ })

}]);
//# sourceMappingURL=9.index_bundle.js.map