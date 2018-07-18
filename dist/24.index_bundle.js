(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[24],{

/***/ "./client/src/components/event/event-list-item.tsx":
/*!*********************************************************!*\
  !*** ./client/src/components/event/event-list-item.tsx ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_rte__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-rte */ "./node_modules/react-rte/dist/react-rte.js");
/* harmony import */ var react_rte__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_rte__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _event_provider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./event-provider */ "./client/src/components/event/event-provider.tsx");

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





var EventListItem = /** @class */ (function (_super) {
    __extends(EventListItem, _super);
    function EventListItem(props) {
        return _super.call(this, props) || this;
    }
    EventListItem.prototype.componentDidMount = function () {
        this.props.event.getEventItem(this.props._eventItemId);
    };
    EventListItem.prototype.render = function () {
        var _a = this.props, displayDetails = _a.displayDetails, _eventItemId = _a._eventItemId;
        var _b = this.props.event.eventItem, title = _b.title, start_date = _b.start_date, end_date = _b.end_date, details = _b.details, createdUpdatedDateTime = _b.createdUpdatedDateTime;
        var startDateTime = moment__WEBPACK_IMPORTED_MODULE_3__(start_date);
        var endDateTime = moment__WEBPACK_IMPORTED_MODULE_3__(end_date);
        var startDay = startDateTime.calendar(null, {
            sameDay: '[Today]',
            nextDay: '[Tomorrow]',
            nextWeek: 'dddd',
            lastDay: '[Yesterday]',
            lastWeek: '[Last] dddd',
            sameElse: 'MM/DD/YYYY',
        });
        var endDay = endDateTime.calendar(null, {
            sameDay: '[Today]',
            nextDay: '[Tomorrow]',
            nextWeek: 'dddd',
            lastDay: '[Yesterday]',
            lastWeek: '[Last] dddd',
            sameElse: 'MM/DD/YYYY',
        });
        var startTime = startDateTime.format("h:mm a");
        var endTime = endDateTime.format("h:mm a");
        var dateTime = startDay + ' at ' + startTime;
        if (moment__WEBPACK_IMPORTED_MODULE_3__() >= startDateTime) {
            dateTime = 'Now';
        }
        if (startDay !== endDay) {
            dateTime += ' to ' + endDay + ' at ' + endTime;
        }
        else if (startTime !== endTime) {
            dateTime += ' until ' + endTime;
        }
        var content = '<h5>' + title + '</h5>' + '<p className="event-date-time">' + dateTime + '</p>' + (displayDetails ? details : '');
        var createdDetails = displayDetails ? (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", { className: 'event-created-updated-date-time' }, createdUpdatedDateTime)) : '';
        return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "event-list-item-wrapper" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], { className: "event-link", to: '/event/item/' + _eventItemId },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_rte__WEBPACK_IMPORTED_MODULE_1___default.a, { value: react_rte__WEBPACK_IMPORTED_MODULE_1___default.a.createValueFromString(content, 'html'), readOnly: true })),
            createdDetails));
    };
    return EventListItem;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]));
;
/* harmony default export */ __webpack_exports__["default"] = (Object(_event_provider__WEBPACK_IMPORTED_MODULE_4__["eventConsumer"])(EventListItem));


/***/ }),

/***/ "./client/src/components/event/event-list.tsx":
/*!****************************************************!*\
  !*** ./client/src/components/event/event-list.tsx ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var _event_list_item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./event-list-item */ "./client/src/components/event/event-list-item.tsx");
/* harmony import */ var _user_user_provider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../user/user-provider */ "./client/src/components/user/user-provider.tsx");
/* harmony import */ var _event_provider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./event-provider */ "./client/src/components/event/event-provider.tsx");

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





var EventList = /** @class */ (function (_super) {
    __extends(EventList, _super);
    function EventList(props) {
        return _super.call(this, props) || this;
    }
    EventList.prototype.componentDidMount = function () {
        var query = {
            limit: this.props.limit,
        };
        this.props.event.getEventItems(query);
    };
    EventList.prototype.componentDidUpdate = function (prevProps, prevState, snapshot) {
        var update = false;
        var prevDiscontinued = prevProps.discontinued;
        var currentDiscontinued = this.props.discontinued;
        if (prevDiscontinued != currentDiscontinued) {
            update = true;
        }
        if (update) {
            var query = {
                discontinued: this.props.discontinued,
                limit: this.props.limit || 10,
            };
            this.props.event.getEventItems(query);
        }
    };
    EventList.prototype.render = function () {
        var displayDetails = this.props.displayDetails;
        var eventItems = this.props.event.eventItems;
        var admin = this.props.user.admin;
        var EventItemList = [];
        if (eventItems) {
            eventItems.forEach(function (eventItemKey) {
                EventItemList.push(react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_event_list_item__WEBPACK_IMPORTED_MODULE_2__["default"], { key: eventItemKey, _eventItemId: eventItemKey, displayDetails: displayDetails }));
            });
        }
        return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "event-list-wrapper" },
            admin ? (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", null,
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], { to: "/event/newitem" }, "NEW EVENT"),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("br", null))) : '',
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("ul", { className: 'event-item-list' }, EventItemList)));
    };
    EventList.defaultProps = {
        limit: 3,
        discontinued: false,
        displayDetails: true,
    };
    return EventList;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]));
;
/* harmony default export */ __webpack_exports__["default"] = (Object(_user_user_provider__WEBPACK_IMPORTED_MODULE_3__["userConsumer"])(Object(_event_provider__WEBPACK_IMPORTED_MODULE_4__["eventConsumer"])(Object(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["withRouter"])(EventList))));


/***/ }),

/***/ "./client/src/components/event/event-provider.tsx":
/*!********************************************************!*\
  !*** ./client/src/components/event/event-provider.tsx ***!
  \********************************************************/
/*! exports provided: EventContext, EventWrapper, default, eventProvider, eventConsumer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventContext", function() { return EventContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventWrapper", function() { return EventWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "eventProvider", function() { return eventProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "eventConsumer", function() { return eventConsumer; });
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
    getEventItems: function (query) {
        console.error('Error: Cannot getEventItems no EventContext.Provider element in parents');
    },
    getEventItem: function (_eventItemId) {
        console.log('Error: Cannot getEventItem no EventContext.Provider element in parents');
    },
    addEventItem: function (params, callback) {
        console.log('Error: Cannot addEventItem no EventContext.Provider element in parents');
    },
    updateEventItem: function (params, callback) {
        console.log('Error: Cannot updateEventItemParams no EventContext.Provider element in parents');
    },
    eventItemList: {},
    eventItems: [],
    page: 0,
    totalPages: 0,
    limit: 0,
    total: 0,
    pageTotal: 0,
};
var EventContext = react__WEBPACK_IMPORTED_MODULE_0__["createContext"](Context);
var EventWrapper = /** @class */ (function (_super) {
    __extends(EventWrapper, _super);
    function EventWrapper(props) {
        var _this = _super.call(this, props) || this;
        _this.state = _this.props.initialState;
        _this.getEventItems = _this.getEventItems.bind(_this);
        _this.getEventItem = _this.getEventItem.bind(_this);
        _this.addEventItem = _this.addEventItem.bind(_this);
        _this.updateEventItem = _this.updateEventItem.bind(_this);
        return _this;
    }
    EventWrapper.prototype.getEventItems = function (query) {
        var _this = this;
        var querydefaults = {
            limit: 100,
            format: 'json',
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
        var request = new Request('/api/event/' + _query, {
            method: 'GET',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
        });
        fetch(request)
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
                    eventItems: body.eventItems,
                };
            });
        })
            .catch(function (error) {
            _this.setState(function () {
                return {
                    eventItems: null,
                    page: null,
                    totalPages: null,
                    limit: null,
                    total: null,
                    pageTotal: null,
                };
            });
        });
    };
    EventWrapper.prototype.getEventItem = function (_eventItemId) {
        var _this = this;
        var query = querystring__WEBPACK_IMPORTED_MODULE_1__["stringify"]({
            field: [
                '_id',
                'title',
                'start_date',
                'end_date',
                'details',
                'discontinued',
            ],
            format: 'json',
        });
        query = query ? '?' + query : '';
        var request = new Request('/api/event/' + _eventItemId + query, {
            method: 'GET',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
        });
        fetch(request).then(function (response) {
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
            var _id = body._id, title = body.title, start_date = body.start_date, end_date = body.end_date, details = body.details, createdAt = body.createdAt, updatedAt = body.updatedAt, discontinued = body.discontinued;
            _this.setState(function (preState) {
                var eventItemList = preState.eventItemList;
                var createDateTime = moment__WEBPACK_IMPORTED_MODULE_2__(createdAt);
                var updatedDateTime = moment__WEBPACK_IMPORTED_MODULE_2__(updatedAt);
                var daymessages = {
                    sameDay: '[today]',
                    nextDay: '[tomorrow]',
                    nextWeek: 'dddd',
                    lastDay: '[yesterday]',
                    lastWeek: '[last] dddd',
                    sameElse: 'MM/DD/YYYY',
                };
                var createdDay = createDateTime.calendar(null, daymessages);
                var updatedDay = updatedDateTime.calendar(null, daymessages);
                var createdTime = createDateTime.format("h:mm a");
                var updatedTime = updatedDateTime.format("h:mm a");
                var createdUpdatedDateTime = 'Created ';
                if (createdDay !== 'today' && createdDay !== 'yesterday') {
                    createdUpdatedDateTime += 'on ';
                }
                createdUpdatedDateTime += createdDay + ' at ' + createdTime;
                if (createdDay !== updatedDay) {
                    createdUpdatedDateTime += ' updated ';
                    if (updatedDay !== 'today' && updatedDay !== 'yesterday') {
                        createdUpdatedDateTime += 'on ';
                    }
                    createdUpdatedDateTime += updatedDay + ' at ' + updatedTime;
                }
                else if (createdTime !== updatedTime) {
                    createdUpdatedDateTime += ' updated at ' + updatedTime;
                }
                createdUpdatedDateTime += '.';
                eventItemList[_id] = {
                    _eventItemId: _id,
                    title: title,
                    start_date: start_date,
                    end_date: end_date,
                    details: details,
                    createdUpdatedDateTime: createdUpdatedDateTime,
                    discontinued: discontinued,
                };
                return { eventItemList: eventItemList };
            });
        })
            .catch(function (error) {
            console.log(error);
        });
    };
    ;
    EventWrapper.prototype.addEventItem = function (params, callback) {
        var payload = {
            _id: params._id,
            title: params.title,
            start_date: params.start_date,
            end_date: params.end_date,
            details: params.details,
        };
        var url = '/api/event';
        var request = new Request('/api/event/', {
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
    EventWrapper.prototype.updateEventItem = function (params, callback) {
        var payload = {
            _id: params._id
        };
        if ('title' in params) {
            payload.title = params.title;
        }
        if ('start_date' in params) {
            payload.start_date = params.start_date;
        }
        if ('end_date' in params) {
            payload.end_date = params.end_date;
        }
        if ('details' in params) {
            payload.details = params.details;
        }
        if ('discontinued' in params) {
            payload.discontinued = params.discontinued;
        }
        var request = new Request('/api/event', {
            method: 'PUT',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify(payload),
        });
        return fetch(request)
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
            console.log(error);
        });
    };
    EventWrapper.prototype.render = function () {
        var _a = this, getEventItems = _a.getEventItems, getEventItem = _a.getEventItem, addEventItem = _a.addEventItem, updateEventItem = _a.updateEventItem;
        var _b = this.state, eventItems = _b.eventItems, page = _b.page, pageTotal = _b.pageTotal, totalPages = _b.totalPages, limit = _b.limit, total = _b.total, eventItemList = _b.eventItemList;
        var context = {
            eventItems: eventItems,
            eventItemList: eventItemList,
            page: page,
            pageTotal: pageTotal,
            totalPages: totalPages,
            limit: limit,
            total: total,
            getEventItems: getEventItems,
            getEventItem: getEventItem,
            addEventItem: addEventItem,
            updateEventItem: updateEventItem,
        };
        return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](EventContext.Provider, { value: context }, this.props.children));
    };
    EventWrapper.defaultProps = {
        initialState: {
            eventItemList: {},
            eventItems: [],
            page: 0,
            totalPages: 0,
            limit: 0,
            total: 0,
            pageTotal: 0,
        }
    };
    return EventWrapper;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]));

/* harmony default export */ __webpack_exports__["default"] = (EventWrapper);
var eventProvider = function (Component, options) {
    var EventProvider = /** @class */ (function (_super) {
        __extends(EventProvider, _super);
        function EventProvider() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        EventProvider.prototype.render = function () {
            var eventWrapperProps = {};
            if (options) {
                if ('props' in options) {
                    eventWrapperProps = options.props;
                }
            }
            return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](EventWrapper, __assign({}, eventWrapperProps),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Component, __assign({}, this.props))));
        };
        return EventProvider;
    }(react__WEBPACK_IMPORTED_MODULE_0__["Component"]));
    return EventProvider;
};
var eventConsumer = function (Component) {
    var EventConsumer = /** @class */ (function (_super) {
        __extends(EventConsumer, _super);
        function EventConsumer() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        EventConsumer.prototype.render = function () {
            var _this = this;
            var _eventItemId = this.props._eventItemId;
            if ('match' in this.props) {
                if ('_eventItemId' in this.props.match.params) {
                    _eventItemId = this.props.match.params._eventItemId;
                }
            }
            return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](EventContext.Consumer, null, function (context) {
                if (_eventItemId) {
                    context.eventItem = {
                        _eventItemId: _eventItemId,
                        title: '',
                        start_date: '',
                        end_date: '',
                        details: '',
                        createdUpdatedDateTime: '',
                        discontinued: false,
                    };
                    if (_eventItemId in context.eventItemList) {
                        context.eventItem = {
                            _eventItemId: _eventItemId,
                            title: 'title' in context.eventItemList[_eventItemId] ? context.eventItemList[_eventItemId].title : '',
                            start_date: 'start_date' in context.eventItemList[_eventItemId] ? context.eventItemList[_eventItemId].start_date : '',
                            end_date: 'end_date' in context.eventItemList[_eventItemId] ? context.eventItemList[_eventItemId].end_date : '',
                            details: 'details' in context.eventItemList[_eventItemId] ? context.eventItemList[_eventItemId].details : '',
                            createdUpdatedDateTime: 'createdUpdatedDateTime' in context.eventItemList[_eventItemId] ? context.eventItemList[_eventItemId].createdUpdatedDateTime : '',
                            discontinued: 'discontinued' in context.eventItemList[_eventItemId] ? context.eventItemList[_eventItemId].discontinued : false,
                        };
                    }
                }
                return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Component, __assign({}, _this.props, { event: context })));
            }));
        };
        return EventConsumer;
    }(react__WEBPACK_IMPORTED_MODULE_0__["Component"]));
    return EventConsumer;
};


/***/ })

}]);
//# sourceMappingURL=24.index_bundle.js.map