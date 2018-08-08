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
/* harmony import */ var _utilities_styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utilities/styled.components */ "./client/src/components/utilities/styled.components.tsx");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");

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



var TwitchStreamFailed = Object(_utilities_styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])('div')(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\tbackground-color: ", ";\n\twidth: ", ";\n\t/* height: ", "; */\n\tpadding: 1em 0.5em;\n\timg {\n\t\twidth: 100%;\n\t\tmargin-bottom: 2em;\n\t}\n\th2 {\n\t\ttext-align: center;\n\t\tcolor: white;\n\t\tfont-size: 1rem;\n\t\ta {\n\t\t\tcolor: #ffffff;\n\t\t\tbackground: #ff0000;\n\t\t\tpadding: 3px 10px;\n\t\t\tborder-radius: 8px;\n     \t\tline-height: 24px;\n\t\t}\n\t}\n\n\t\n\t@media (min-width: 1000px) {\n\t\th2 {\n\t\t\tfont-size: 2rem;\n\t\t\ta {\n\t\t\t\tline-height: 48px;\n\t\t\t}\n\t\t}\n\t}\n\t\n\t@media (min-width: 1200px) {\n\t\tpadding: 1em 3em;\n\t}\n"], ["\n\tbackground-color: ", ";\n\twidth: ", ";\n\t/* height: ", "; */\n\tpadding: 1em 0.5em;\n\timg {\n\t\twidth: 100%;\n\t\tmargin-bottom: 2em;\n\t}\n\th2 {\n\t\ttext-align: center;\n\t\tcolor: white;\n\t\tfont-size: 1rem;\n\t\ta {\n\t\t\tcolor: #ffffff;\n\t\t\tbackground: #ff0000;\n\t\t\tpadding: 3px 10px;\n\t\t\tborder-radius: 8px;\n     \t\tline-height: 24px;\n\t\t}\n\t}\n\n\t\n\t@media (min-width: 1000px) {\n\t\th2 {\n\t\t\tfont-size: 2rem;\n\t\t\ta {\n\t\t\t\tline-height: 48px;\n\t\t\t}\n\t\t}\n\t}\n\t\n\t@media (min-width: 1200px) {\n\t\tpadding: 1em 3em;\n\t}\n"])), function (props) { return props.theme.darkblue; }, function (props) { return props.width; }, function (props) { return props.height; });
var TwitchIframe = /** @class */ (function (_super) {
    __extends(TwitchIframe, _super);
    function TwitchIframe(props) {
        var _this = _super.call(this, props) || this;
        _this.twitchIframeWrapperRef = react__WEBPACK_IMPORTED_MODULE_0__["createRef"]();
        _this.state = {
            twitchIframeHeight: 'auto',
            twitchIframeWidth: 'auto',
            twitchStreaming: false,
        };
        _this.twitchIframeLoaded = _this.twitchIframeLoaded.bind(_this);
        _this.checkTwitchStream = _this.checkTwitchStream.bind(_this);
        return _this;
    }
    TwitchIframe.prototype.checkTwitchStream = function () {
        var _this = this;
        if (this.state.twitchStreaming) {
            return;
        }
        fetch('https://api.twitch.tv/kraken/streams/pencil4life', {
            headers: {
                'client-id': 'jzkbprff40iqj646a697cyrvl0zt2m6',
            }
        })
            .then(function (response) {
            if (response.status < 200) {
                var error = new Error('Not available');
                error.message = 'Not available';
                throw error;
            }
            return response.json();
        })
            .then(function (body) {
            _this.setState(function () {
                if (body.stream != null) {
                    return {
                        twitchStreaming: true,
                    };
                }
                return {
                    twitchStreaming: false,
                };
            });
        })
            .catch(function (error) {
            // console.error(error);
            _this.setState(function () {
                return {
                    twitchStreaming: false,
                };
            });
        });
    };
    TwitchIframe.prototype.componentDidMount = function () {
        window.addEventListener('resize', this.twitchIframeLoaded);
        this.checkTwitchStream();
        this.twitchIframeLoaded();
    };
    TwitchIframe.prototype.componentWillMount = function () {
        window.removeEventListener('resize', this.twitchIframeLoaded);
    };
    TwitchIframe.prototype.twitchIframeLoaded = function () {
        var ref = this.twitchIframeWrapperRef.current || { clientWidth: 100 };
        var maxWidth = ref.clientWidth;
        this.setState(function () {
            return {
                twitchIframeHeight: maxWidth * 378 / 620 + 'px',
                twitchIframeWidth: maxWidth + 'px',
            };
        });
    };
    TwitchIframe.prototype.render = function () {
        if (!this.state.twitchStreaming) {
            return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "twitch-iframe-wrapper col-md-8 p-0", ref: this.twitchIframeWrapperRef },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](TwitchStreamFailed, { height: this.state.twitchIframeHeight, width: this.state.twitchIframeWidth, theme: _utilities_styled_components__WEBPACK_IMPORTED_MODULE_1__["defaultTheme"] },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("a", { href: "https://www.twitch.tv/pencil4life" },
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("img", { src: "/images/livetwitch.png", alt: "Pencil4Life live on Twitch" })),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h2", null, "Not streaming at the moment"),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h2", null,
                        "Check ",
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], { to: "event" }, "Events"),
                        " for next stream"),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h2", null,
                        "Visit my ",
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("a", { href: "https://www.youtube.com/user/shadowshand", target: "_blank" }, "YouTube"),
                        " channel"))));
        }
        return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "twitch-iframe-wrapper col-md-8 p-0", ref: this.twitchIframeWrapperRef },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("iframe", { src: "https://player.twitch.tv/?channel=pencil4life", height: this.state.twitchIframeHeight, width: this.state.twitchIframeWidth, onLoad: this.twitchIframeLoaded, frameBorder: "0", allowFullScreen: true, scrolling: "no" })));
    };
    return TwitchIframe;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]));
;
/* harmony default export */ __webpack_exports__["default"] = (TwitchIframe);
var templateObject_1;


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


/***/ }),

/***/ "./client/src/components/utilities/styled.components.tsx":
/*!***************************************************************!*\
  !*** ./client/src/components/utilities/styled.components.tsx ***!
  \***************************************************************/
/*! exports provided: css, injectGlobal, keyframes, ThemeProvider, default, defaultTheme, Popout, LoadingSpinner */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "css", function() { return css; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "injectGlobal", function() { return injectGlobal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "keyframes", function() { return keyframes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemeProvider", function() { return ThemeProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultTheme", function() { return defaultTheme; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Popout", function() { return Popout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingSpinner", function() { return LoadingSpinner; });
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
var Popout = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\tcolor: white;\n\tposition: fixed;\n\ttop: 0;\n\tbottom: 0;\n\tleft: 0;\n\tright: 0;\n\tbackground: rgba(0, 0, 0, 0.85);\n\tz-index: 10000;\n\t> * {\n\t\tposition: relative;\n\t\ttop: 50%;\n\t\tleft: 50%;\n\t\ttransform: translate(-50%, -50%);\n\t\tmargin: 0;\n\t\toverflow: auto;    \n\t\tmax-height: 100%;\n\t\tpadding: 2em 0;\n\t}\n\t\n"], ["\n\tcolor: white;\n\tposition: fixed;\n\ttop: 0;\n\tbottom: 0;\n\tleft: 0;\n\tright: 0;\n\tbackground: rgba(0, 0, 0, 0.85);\n\tz-index: 10000;\n\t> * {\n\t\tposition: relative;\n\t\ttop: 50%;\n\t\tleft: 50%;\n\t\ttransform: translate(-50%, -50%);\n\t\tmargin: 0;\n\t\toverflow: auto;    \n\t\tmax-height: 100%;\n\t\tpadding: 2em 0;\n\t}\n\t\n"])));
var LoadingSpinner = styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  color: #ffffff;\n  font-size: 90px;\n  text-indent: -9999em;\n  overflow: hidden;\n  width: 1em;\n  height: 1em;\n  border-radius: 50%;\n  margin: 72px auto;\n  position: relative;\n  -webkit-transform: translateZ(0);\n  -ms-transform: translateZ(0);\n  transform: translateZ(0);\n  -webkit-animation: load6 1.7s infinite ease, round 1.7s infinite ease;\n  animation: load6 1.7s infinite ease, round 1.7s infinite ease;\n\t\n\t@-webkit-keyframes load6 {\n\t\t0% {\n\t\t\tbox-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em, 0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;\n\t\t}\n\t\t5%,\n\t\t95% {\n\t\t\tbox-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em, 0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;\n\t\t}\n\t\t10%,\n\t\t59% {\n\t\t\tbox-shadow: 0 -0.83em 0 -0.4em, -0.087em -0.825em 0 -0.42em, -0.173em -0.812em 0 -0.44em, -0.256em -0.789em 0 -0.46em, -0.297em -0.775em 0 -0.477em;\n\t\t}\n\t\t20% {\n\t\t\tbox-shadow: 0 -0.83em 0 -0.4em, -0.338em -0.758em 0 -0.42em, -0.555em -0.617em 0 -0.44em, -0.671em -0.488em 0 -0.46em, -0.749em -0.34em 0 -0.477em;\n\t\t}\n\t\t38% {\n\t\t\tbox-shadow: 0 -0.83em 0 -0.4em, -0.377em -0.74em 0 -0.42em, -0.645em -0.522em 0 -0.44em, -0.775em -0.297em 0 -0.46em, -0.82em -0.09em 0 -0.477em;\n\t\t}\n\t\t100% {\n\t\t\tbox-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em, 0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;\n\t\t}\n\t}\n\t@keyframes load6 {\n\t\t0% {\n\t\t\tbox-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em, 0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;\n\t\t}\n\t\t5%,\n\t\t95% {\n\t\t\tbox-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em, 0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;\n\t\t}\n\t\t10%,\n\t\t59% {\n\t\t\tbox-shadow: 0 -0.83em 0 -0.4em, -0.087em -0.825em 0 -0.42em, -0.173em -0.812em 0 -0.44em, -0.256em -0.789em 0 -0.46em, -0.297em -0.775em 0 -0.477em;\n\t\t}\n\t\t20% {\n\t\t\tbox-shadow: 0 -0.83em 0 -0.4em, -0.338em -0.758em 0 -0.42em, -0.555em -0.617em 0 -0.44em, -0.671em -0.488em 0 -0.46em, -0.749em -0.34em 0 -0.477em;\n\t\t}\n\t\t38% {\n\t\t\tbox-shadow: 0 -0.83em 0 -0.4em, -0.377em -0.74em 0 -0.42em, -0.645em -0.522em 0 -0.44em, -0.775em -0.297em 0 -0.46em, -0.82em -0.09em 0 -0.477em;\n\t\t}\n\t\t100% {\n\t\t\tbox-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em, 0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;\n\t\t}\n\t}\n\t@-webkit-keyframes round {\n\t\t0% {\n\t\t\t-webkit-transform: rotate(0deg);\n\t\t\ttransform: rotate(0deg);\n\t\t}\n\t\t100% {\n\t\t\t-webkit-transform: rotate(360deg);\n\t\t\ttransform: rotate(360deg);\n\t\t}\n\t\t}\n\t\t@keyframes round {\n\t\t0% {\n\t\t\t-webkit-transform: rotate(0deg);\n\t\t\ttransform: rotate(0deg);\n\t\t}\n\t\t100% {\n\t\t\t-webkit-transform: rotate(360deg);\n\t\t\ttransform: rotate(360deg);\n\t\t}\n\t}\n"], ["\n  color: #ffffff;\n  font-size: 90px;\n  text-indent: -9999em;\n  overflow: hidden;\n  width: 1em;\n  height: 1em;\n  border-radius: 50%;\n  margin: 72px auto;\n  position: relative;\n  -webkit-transform: translateZ(0);\n  -ms-transform: translateZ(0);\n  transform: translateZ(0);\n  -webkit-animation: load6 1.7s infinite ease, round 1.7s infinite ease;\n  animation: load6 1.7s infinite ease, round 1.7s infinite ease;\n\t\n\t@-webkit-keyframes load6 {\n\t\t0% {\n\t\t\tbox-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em, 0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;\n\t\t}\n\t\t5%,\n\t\t95% {\n\t\t\tbox-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em, 0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;\n\t\t}\n\t\t10%,\n\t\t59% {\n\t\t\tbox-shadow: 0 -0.83em 0 -0.4em, -0.087em -0.825em 0 -0.42em, -0.173em -0.812em 0 -0.44em, -0.256em -0.789em 0 -0.46em, -0.297em -0.775em 0 -0.477em;\n\t\t}\n\t\t20% {\n\t\t\tbox-shadow: 0 -0.83em 0 -0.4em, -0.338em -0.758em 0 -0.42em, -0.555em -0.617em 0 -0.44em, -0.671em -0.488em 0 -0.46em, -0.749em -0.34em 0 -0.477em;\n\t\t}\n\t\t38% {\n\t\t\tbox-shadow: 0 -0.83em 0 -0.4em, -0.377em -0.74em 0 -0.42em, -0.645em -0.522em 0 -0.44em, -0.775em -0.297em 0 -0.46em, -0.82em -0.09em 0 -0.477em;\n\t\t}\n\t\t100% {\n\t\t\tbox-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em, 0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;\n\t\t}\n\t}\n\t@keyframes load6 {\n\t\t0% {\n\t\t\tbox-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em, 0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;\n\t\t}\n\t\t5%,\n\t\t95% {\n\t\t\tbox-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em, 0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;\n\t\t}\n\t\t10%,\n\t\t59% {\n\t\t\tbox-shadow: 0 -0.83em 0 -0.4em, -0.087em -0.825em 0 -0.42em, -0.173em -0.812em 0 -0.44em, -0.256em -0.789em 0 -0.46em, -0.297em -0.775em 0 -0.477em;\n\t\t}\n\t\t20% {\n\t\t\tbox-shadow: 0 -0.83em 0 -0.4em, -0.338em -0.758em 0 -0.42em, -0.555em -0.617em 0 -0.44em, -0.671em -0.488em 0 -0.46em, -0.749em -0.34em 0 -0.477em;\n\t\t}\n\t\t38% {\n\t\t\tbox-shadow: 0 -0.83em 0 -0.4em, -0.377em -0.74em 0 -0.42em, -0.645em -0.522em 0 -0.44em, -0.775em -0.297em 0 -0.46em, -0.82em -0.09em 0 -0.477em;\n\t\t}\n\t\t100% {\n\t\t\tbox-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em, 0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;\n\t\t}\n\t}\n\t@-webkit-keyframes round {\n\t\t0% {\n\t\t\t-webkit-transform: rotate(0deg);\n\t\t\ttransform: rotate(0deg);\n\t\t}\n\t\t100% {\n\t\t\t-webkit-transform: rotate(360deg);\n\t\t\ttransform: rotate(360deg);\n\t\t}\n\t\t}\n\t\t@keyframes round {\n\t\t0% {\n\t\t\t-webkit-transform: rotate(0deg);\n\t\t\ttransform: rotate(0deg);\n\t\t}\n\t\t100% {\n\t\t\t-webkit-transform: rotate(360deg);\n\t\t\ttransform: rotate(360deg);\n\t\t}\n\t}\n"])));
var templateObject_1, templateObject_2;


/***/ })

}]);
//# sourceMappingURL=5.index_bundle.js.map