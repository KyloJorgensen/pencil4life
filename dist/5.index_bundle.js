(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[5],{

/***/ "./client/src/components/home/home-event.tsx":
/*!***************************************************!*\
  !*** ./client/src/components/home/home-event.tsx ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var _event_event_list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../event/event-list */ "./client/src/components/event/event-list.tsx");
/* harmony import */ var _event_event_provider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../event/event-provider */ "./client/src/components/event/event-provider.tsx");

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




var HomeEvent = /** @class */ (function (_super) {
    __extends(HomeEvent, _super);
    function HomeEvent(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {};
        return _this;
    }
    HomeEvent.prototype.render = function () {
        return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "event-wrapper col-md-4 p-2" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_1__["NavLink"], { exact: true, to: '/event', activeClassName: "selected" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h2", null, "Events")),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_event_event_list__WEBPACK_IMPORTED_MODULE_2__["default"], { limit: 4, displayDetails: false }),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_1__["NavLink"], { exact: true, to: '/event', activeClassName: "selected" }, "More Events")));
    };
    return HomeEvent;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]));
;
/* harmony default export */ __webpack_exports__["default"] = (Object(_event_event_provider__WEBPACK_IMPORTED_MODULE_3__["eventProvider"])(HomeEvent));


/***/ }),

/***/ "./client/src/components/home/home-news.tsx":
/*!**************************************************!*\
  !*** ./client/src/components/home/home-news.tsx ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var _news_news_list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../news/news-list */ "./client/src/components/news/news-list.tsx");

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



var HomeNews = /** @class */ (function (_super) {
    __extends(HomeNews, _super);
    function HomeNews(props) {
        return _super.call(this, props) || this;
    }
    HomeNews.prototype.render = function () {
        return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "news-wrapper p-2" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_1__["NavLink"], { exact: true, to: '/news', activeClassName: "selected" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h2", null, "News")),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_news_news_list__WEBPACK_IMPORTED_MODULE_2__["default"], { limit: 4 }),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_1__["NavLink"], { exact: true, to: '/news', activeClassName: "selected" }, "More News")));
    };
    return HomeNews;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]));
;
/* harmony default export */ __webpack_exports__["default"] = (HomeNews);


/***/ }),

/***/ "./client/src/components/home/home-twitch.tsx":
/*!****************************************************!*\
  !*** ./client/src/components/home/home-twitch.tsx ***!
  \****************************************************/
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

var TwitchIframe = /** @class */ (function (_super) {
    __extends(TwitchIframe, _super);
    function TwitchIframe(props) {
        var _this = _super.call(this, props) || this;
        _this.twitchIframeWrapperRef = react__WEBPACK_IMPORTED_MODULE_0__["createRef"]();
        _this.twitchIframeRef = react__WEBPACK_IMPORTED_MODULE_0__["createRef"]();
        _this.state = {
            twitchIframeHeight: 'auto',
            twitchIframeWidth: 'auto',
        };
        _this.twitchIframeLoaded = _this.twitchIframeLoaded.bind(_this);
        return _this;
    }
    TwitchIframe.prototype.componentDidMount = function () {
        window.addEventListener('resize', this.twitchIframeLoaded);
    };
    TwitchIframe.prototype.componentWillMount = function () {
        window.removeEventListener('resize', this.twitchIframeLoaded);
    };
    TwitchIframe.prototype.twitchIframeLoaded = function () {
        var maxWidth = this.twitchIframeWrapperRef.current.clientWidth;
        this.setState(function () {
            return {
                twitchIframeHeight: maxWidth * 378 / 620 + 'px',
                twitchIframeWidth: maxWidth + 'px',
            };
        });
    };
    TwitchIframe.prototype.render = function () {
        return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "twitch-iframe-wrapper col-md-8 p-0", ref: this.twitchIframeWrapperRef },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("iframe", { src: "https://player.twitch.tv/?channel=pencil4life", ref: this.twitchIframeRef, onLoad: this.twitchIframeLoaded, style: { height: this.state.twitchIframeHeight, width: this.state.twitchIframeWidth }, frameBorder: "0", allowFullScreen: true, scrolling: "no" })));
    };
    return TwitchIframe;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]));
;
/* harmony default export */ __webpack_exports__["default"] = (TwitchIframe);


/***/ }),

/***/ "./client/src/components/home/homepage.tsx":
/*!*************************************************!*\
  !*** ./client/src/components/home/homepage.tsx ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _home_twitch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home-twitch */ "./client/src/components/home/home-twitch.tsx");
/* harmony import */ var _home_event__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home-event */ "./client/src/components/home/home-event.tsx");
/* harmony import */ var _home_news__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home-news */ "./client/src/components/home/home-news.tsx");

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




var HomePage = /** @class */ (function (_super) {
    __extends(HomePage, _super);
    function HomePage(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {};
        return _this;
    }
    HomePage.prototype.render = function () {
        return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "home-page-wrapper" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "container" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "row" },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_home_twitch__WEBPACK_IMPORTED_MODULE_1__["default"], null),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_home_event__WEBPACK_IMPORTED_MODULE_2__["default"], null)),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_home_news__WEBPACK_IMPORTED_MODULE_3__["default"], null))));
    };
    return HomePage;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]));
;
/* harmony default export */ __webpack_exports__["default"] = (HomePage);


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


/***/ })

}]);
//# sourceMappingURL=5.index_bundle.js.map