(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[8],{

/***/ "./client/src/components/event/event-item-edit.tsx":
/*!*********************************************************!*\
  !*** ./client/src/components/event/event-item-edit.tsx ***!
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
/* harmony import */ var react_datetime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-datetime */ "./node_modules/react-datetime/DateTime.js");
/* harmony import */ var react_datetime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_datetime__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _event_provider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./event-provider */ "./client/src/components/event/event-provider.tsx");
/* harmony import */ var _user_user_provider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../user/user-provider */ "./client/src/components/user/user-provider.tsx");

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







var EventItemEdit = /** @class */ (function (_super) {
    __extends(EventItemEdit, _super);
    function EventItemEdit(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            redirect: false,
            required: false,
            title: null,
            start_date: null,
            end_date: null,
            details: react_rte__WEBPACK_IMPORTED_MODULE_1___default.a.createEmptyValue(),
            discontinued: false,
        };
        _this.hitKey = _this.hitKey.bind(_this);
        _this.editField = _this.editField.bind(_this);
        _this.handleCheckboxChange = _this.handleCheckboxChange.bind(_this);
        _this.startDateChanged = _this.startDateChanged.bind(_this);
        _this.endDateChanged = _this.endDateChanged.bind(_this);
        _this.updateEventItem = _this.updateEventItem.bind(_this);
        _this.updateEventItemResult = _this.updateEventItemResult.bind(_this);
        _this.onRichTextChange = _this.onRichTextChange.bind(_this);
        _this.redirect = _this.redirect.bind(_this);
        return _this;
    }
    EventItemEdit.prototype.componentWillMount = function () {
        var _this = this;
        this.setState(function () {
            return {
                title: _this.props.event.eventItem.title,
                start_date: moment__WEBPACK_IMPORTED_MODULE_4__(_this.props.event.eventItem.start_date),
                end_date: moment__WEBPACK_IMPORTED_MODULE_4__(_this.props.event.eventItem.end_date),
                details: react_rte__WEBPACK_IMPORTED_MODULE_1___default.a.createValueFromString(_this.props.event.eventItem.details, 'html'),
                discontinued: _this.props.event.eventItem.discontinued,
            };
        });
    };
    EventItemEdit.prototype.componentDidUpdate = function (prevProps, prevState, snapshot) {
        var _this = this;
        var propsToCheck = ['title', 'start_date', 'end_date', 'details', 'discontinued'];
        var _state = null;
        propsToCheck.forEach(function (propToCheck) {
            if (prevProps.event.eventItem[propToCheck] !== _this.props.event.eventItem[propToCheck]) {
                _state = _state == null ? {} : _state;
                _state[propToCheck] = _this.props.event.eventItem[propToCheck];
                if (propToCheck == 'details') {
                    _state[propToCheck] = react_rte__WEBPACK_IMPORTED_MODULE_1___default.a.createValueFromString(_this.props.event.eventItem[propToCheck], 'html');
                }
            }
        });
        if (_state) {
            this.setState(function () {
                return _state;
            });
        }
    };
    EventItemEdit.prototype.componentDidMount = function () {
        this.props.event.getEventItem(this.props.event.eventItem._eventItemId);
    };
    EventItemEdit.prototype.editField = function (event) {
        var _a = event.target, name = _a.name, value = _a.value;
        this.setState(function (prevState) {
            prevState[name] = value;
            return prevState;
        });
    };
    EventItemEdit.prototype.handleCheckboxChange = function (event) {
        var _a = event.target, name = _a.name, checked = _a.checked;
        this.setState(function (prevState) {
            prevState[name] = checked;
            return prevState;
        });
    };
    EventItemEdit.prototype.startDateChanged = function (momentDateTime) {
        this.setState(function () {
            return { start_date: momentDateTime };
        });
    };
    EventItemEdit.prototype.endDateChanged = function (momentDateTime) {
        this.setState(function () {
            return { end_date: momentDateTime };
        });
    };
    EventItemEdit.prototype.hitKey = function (event) {
        if (event.key == 'Enter') {
            this.updateEventItem(event);
        }
    };
    EventItemEdit.prototype.updateEventItem = function (event) {
        event.preventDefault();
        var _a = this.state, title = _a.title, start_date = _a.start_date, end_date = _a.end_date, details = _a.details, discontinued = _a.discontinued;
        if (!title || !start_date || !end_date || start_date > end_date) {
            this.setState(function () {
                return { required: true };
            });
            return;
        }
        var changes = {
            title: title,
            start_date: start_date,
            end_date: end_date,
            details: details.toString('html'),
            discontinued: discontinued,
        };
        var payload = { _id: this.props.event.eventItem._eventItemId };
        var vaildKeys = ['title', 'start_date', 'end_date', 'details', 'discontinued'];
        for (var i = 0; i < vaildKeys.length; i++) {
            if (changes[vaildKeys[i]] != this.props[vaildKeys[i]]) {
                payload[vaildKeys[i]] = changes[vaildKeys[i]];
            }
        }
        this.props.event.updateEventItem(payload, this.updateEventItemResult);
    };
    EventItemEdit.prototype.updateEventItemResult = function (error) {
        if (error) {
            this.setState(function () {
                return { required: true };
            });
        }
        else {
            this.redirect();
        }
    };
    EventItemEdit.prototype.onRichTextChange = function (value) {
        this.setState(function () {
            return { details: value };
        });
    };
    EventItemEdit.prototype.redirect = function () {
        this.setState(function () {
            return { redirect: true };
        });
    };
    EventItemEdit.prototype.render = function () {
        var _a = this, hitKey = _a.hitKey, editField = _a.editField, startDateChanged = _a.startDateChanged, endDateChanged = _a.endDateChanged, updateEventItem = _a.updateEventItem, onRichTextChange = _a.onRichTextChange, handleCheckboxChange = _a.handleCheckboxChange;
        var _b = this.state, redirect = _b.redirect, required = _b.required, title = _b.title, start_date = _b.start_date, end_date = _b.end_date, details = _b.details, discontinued = _b.discontinued;
        var location = this.props.location;
        var admin = this.props.user.admin;
        var _c = this.props.event.eventItem, _eventItemId = _c._eventItemId, createdUpdatedDateTime = _c.createdUpdatedDateTime;
        if (redirect) {
            return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Redirect"], { to: '/event/item/' + _eventItemId }));
        }
        if (!admin) {
            return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Redirect"], { to: { pathname: '/login', state: { redirectPath: location.pathname } } }));
        }
        return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "event-item-edit-wrapper" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("form", { onSubmit: updateEventItem },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h3", null, "EDIT ITEM"),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("label", null,
                    "Title",
                    required ? (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", { className: "errortext" }, "*")) : ''),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("br", null),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("input", { type: 'text', onKeyPress: hitKey, placeholder: "Great Event", onChange: editField, name: 'title', value: title }),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("br", null),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("label", null,
                    "Start",
                    required ? (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", { className: "errortext" }, "*")) : ''),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("br", null),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_datetime__WEBPACK_IMPORTED_MODULE_3__, { value: start_date, onChange: startDateChanged }),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("br", null),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("label", null,
                    "End",
                    required ? (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", { className: "errortext" }, "* End needs to be at or after Start")) : ''),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("br", null),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_datetime__WEBPACK_IMPORTED_MODULE_3__, { value: end_date, onChange: endDateChanged }),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("br", null),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("label", null, "Details"),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("br", null),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_rte__WEBPACK_IMPORTED_MODULE_1___default.a, { value: details, onChange: onRichTextChange }),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", { className: 'news-created-updated-date-time' }, createdUpdatedDateTime),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("br", null),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("label", null, "Discontinued"),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("br", null),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("input", { type: 'checkbox', checked: !!discontinued, name: "discontinued", onChange: handleCheckboxChange }),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("br", null),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("input", { type: 'submit', onClick: updateEventItem, value: 'SAVE' }))));
    };
    return EventItemEdit;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]));
;
/* harmony default export */ __webpack_exports__["default"] = (Object(_user_user_provider__WEBPACK_IMPORTED_MODULE_6__["userConsumer"])(Object(_event_provider__WEBPACK_IMPORTED_MODULE_5__["eventConsumer"])(EventItemEdit)));


/***/ }),

/***/ "./client/src/components/event/event-item.tsx":
/*!****************************************************!*\
  !*** ./client/src/components/event/event-item.tsx ***!
  \****************************************************/
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
/* harmony import */ var _user_user_provider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../user/user-provider */ "./client/src/components/user/user-provider.tsx");

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






var EventItem = /** @class */ (function (_super) {
    __extends(EventItem, _super);
    function EventItem(props) {
        return _super.call(this, props) || this;
    }
    EventItem.prototype.componentDidMount = function () {
        this.props.event.getEventItem(this.props.event.eventItem._eventItemId);
    };
    EventItem.prototype.render = function () {
        var _a = this.props;
        var admin = this.props.user.admin;
        var _b = this.props.event.eventItem, _eventItemId = _b._eventItemId, title = _b.title, start_date = _b.start_date, end_date = _b.end_date, details = _b.details, createdUpdatedDateTime = _b.createdUpdatedDateTime;
        var startDateTime = moment__WEBPACK_IMPORTED_MODULE_3__(start_date);
        var endDateTime = moment__WEBPACK_IMPORTED_MODULE_3__(end_date);
        var daymessage = {
            sameDay: '[Today]',
            nextDay: '[Tomorrow]',
            nextWeek: 'dddd',
            lastDay: '[Yesterday]',
            lastWeek: '[Last] dddd',
            sameElse: 'MM/DD/YYYY',
        };
        var startDay = startDateTime.calendar(null, daymessage);
        var endDay = endDateTime.calendar(null, daymessage);
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
        var content = '<h5>' + title + '</h5>' + '<p className="event-date-time">' + dateTime + '</p>' + details;
        return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "event-item-wrapper" },
            admin ? react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", { className: "text-right" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], { to: '/event/edit/' + _eventItemId }, "EDIT")) : '',
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_rte__WEBPACK_IMPORTED_MODULE_1___default.a, { value: react_rte__WEBPACK_IMPORTED_MODULE_1___default.a.createValueFromString(content, 'html'), readOnly: true }),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", { className: 'news-created-updated-date-time' }, createdUpdatedDateTime)));
    };
    return EventItem;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]));
;
/* harmony default export */ __webpack_exports__["default"] = (Object(_user_user_provider__WEBPACK_IMPORTED_MODULE_5__["userConsumer"])(Object(_event_provider__WEBPACK_IMPORTED_MODULE_4__["eventConsumer"])(EventItem)));


/***/ }),

/***/ "./client/src/components/event/event-new-item.tsx":
/*!********************************************************!*\
  !*** ./client/src/components/event/event-new-item.tsx ***!
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
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _user_user_provider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../user/user-provider */ "./client/src/components/user/user-provider.tsx");
/* harmony import */ var _event_provider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./event-provider */ "./client/src/components/event/event-provider.tsx");

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







var EventNewItem = /** @class */ (function (_super) {
    __extends(EventNewItem, _super);
    function EventNewItem(props) {
        var _this = _super.call(this, props) || this;
        _this.titleRef = react__WEBPACK_IMPORTED_MODULE_0__["createRef"]();
        _this.state = {
            _eventItemId: false,
            required: false,
            title: null,
            start_date: moment__WEBPACK_IMPORTED_MODULE_4__(Date.now()),
            end_date: moment__WEBPACK_IMPORTED_MODULE_4__(Date.now()),
            details: react_rte__WEBPACK_IMPORTED_MODULE_1___default.a.createEmptyValue(),
        };
        _this.hitKey = _this.hitKey.bind(_this);
        _this.startDateChanged = _this.startDateChanged.bind(_this);
        _this.endDateChanged = _this.endDateChanged.bind(_this);
        _this.addNewEventItem = _this.addNewEventItem.bind(_this);
        _this.addNewEventItemResult = _this.addNewEventItemResult.bind(_this);
        _this.onRichTextChange = _this.onRichTextChange.bind(_this);
        return _this;
    }
    EventNewItem.prototype.hitKey = function (event) {
        if (event.key == 'Enter') {
            this.addNewEventItem(event);
        }
    };
    EventNewItem.prototype.startDateChanged = function (momentDateTime) {
        this.setState(function () {
            return { start_date: momentDateTime };
        });
    };
    EventNewItem.prototype.endDateChanged = function (momentDateTime) {
        this.setState(function () {
            return { end_date: momentDateTime };
        });
    };
    EventNewItem.prototype.addNewEventItem = function (event) {
        event.preventDefault();
        var title = this.titleRef.current.value;
        var start_date = this.state.start_date;
        var end_date = this.state.end_date;
        var details = this.state.details;
        if (!title || !start_date || !end_date) {
            this.setState(function () {
                return { required: true };
            });
            return;
        }
        if (start_date > end_date) {
            this.setState(function () {
                return { required: true };
            });
            return;
        }
        var params = {
            title: title,
            start_date: start_date,
            end_date: end_date,
            details: details.toString('html'),
        };
        this.props.event.addEventItem(params, this.addNewEventItemResult);
        this.setState(function () {
            return { required: false };
        });
    };
    EventNewItem.prototype.addNewEventItemResult = function (error, _eventItemId) {
        if (error) {
            this.setState(function () {
                return { required: true };
            });
        }
        else {
            this.setState(function () {
                return { _eventItemId: _eventItemId };
            });
        }
    };
    EventNewItem.prototype.onRichTextChange = function (value) {
        this.setState(function () {
            return { details: value };
        });
    };
    EventNewItem.prototype.render = function () {
        var _a = this, hitKey = _a.hitKey, addNewEventItem = _a.addNewEventItem;
        var _b = this.state, _eventItemId = _b._eventItemId, start_date = _b.start_date, end_date = _b.end_date;
        var location = this.props.location;
        if (_eventItemId) {
            return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Redirect"], { to: '/event/item/' + this.state._eventItemId }));
        }
        if (!this.props.user.admin) {
            return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Redirect"], { to: { pathname: '/login', state: { redirectPath: location.pathname } } }));
        }
        return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "event-new-item-wrapper" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("form", { onSubmit: addNewEventItem },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h3", null, "New Event"),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("label", null,
                    "Title",
                    this.state.required ? (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", { className: "errortext" }, "*")) : ''),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("br", null),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("input", { type: 'text', onKeyPress: hitKey, placeholder: "Great Event", ref: this.titleRef }),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("br", null),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("label", null,
                    "Start",
                    this.state.required ? (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", { className: "errortext" }, "*")) : ''),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("br", null),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_datetime__WEBPACK_IMPORTED_MODULE_3__, { onChange: this.startDateChanged, value: start_date }),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("br", null),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("label", null,
                    "End",
                    this.state.required ? (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", { className: "errortext" }, "*End needs to be at or after Start")) : ''),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("br", null),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_datetime__WEBPACK_IMPORTED_MODULE_3__, { onChange: this.endDateChanged, value: end_date }),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("br", null),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("label", null, "Details"),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("br", null),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_rte__WEBPACK_IMPORTED_MODULE_1___default.a, { value: this.state.details, onChange: this.onRichTextChange }),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("br", null),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("input", { type: 'submit', onClick: this.addNewEventItem, value: 'SAVE' }))));
    };
    return EventNewItem;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]));
;
/* harmony default export */ __webpack_exports__["default"] = (Object(_user_user_provider__WEBPACK_IMPORTED_MODULE_5__["userConsumer"])(Object(_event_provider__WEBPACK_IMPORTED_MODULE_6__["eventConsumer"])(Object(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["withRouter"])(EventNewItem))));


/***/ }),

/***/ "./client/src/components/event/event-page.tsx":
/*!****************************************************!*\
  !*** ./client/src/components/event/event-page.tsx ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _event_list__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./event-list */ "./client/src/components/event/event-list.tsx");
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



var EventPage = /** @class */ (function (_super) {
    __extends(EventPage, _super);
    function EventPage(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            discontinued: false,
        };
        _this.handleCheckboxChange = _this.handleCheckboxChange.bind(_this);
        return _this;
    }
    EventPage.prototype.handleCheckboxChange = function (event) {
        var _a = event.target, name = _a.name, checked = _a.checked;
        this.setState(function (prevState) {
            prevState[name] = checked;
            return prevState;
        });
    };
    EventPage.prototype.render = function () {
        var handleCheckboxChange = this.handleCheckboxChange;
        var discontinued = this.state.discontinued;
        var admin = this.props.user.admin;
        var adminOptions = admin ? (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", null,
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h5", null, "Admin Options"),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("label", null, "Discontinued"),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("input", { type: 'checkbox', checked: !!discontinued, name: "discontinued", onChange: handleCheckboxChange }))) : '';
        return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "event-wrapper" },
            adminOptions,
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_event_list__WEBPACK_IMPORTED_MODULE_1__["default"], { discontinued: discontinued })));
    };
    return EventPage;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]));
;
/* harmony default export */ __webpack_exports__["default"] = (Object(_user_user_provider__WEBPACK_IMPORTED_MODULE_2__["userConsumer"])(EventPage));


/***/ }),

/***/ "./client/src/components/event/event-switch.tsx":
/*!******************************************************!*\
  !*** ./client/src/components/event/event-switch.tsx ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router */ "./node_modules/react-router/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var _event_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./event-page */ "./client/src/components/event/event-page.tsx");
/* harmony import */ var _event_item__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./event-item */ "./client/src/components/event/event-item.tsx");
/* harmony import */ var _event_item_edit__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./event-item-edit */ "./client/src/components/event/event-item-edit.tsx");
/* harmony import */ var _event_new_item__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./event-new-item */ "./client/src/components/event/event-new-item.tsx");
/* harmony import */ var _no_match__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../no-match */ "./client/src/components/no-match.tsx");
/* harmony import */ var _event_provider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./event-provider */ "./client/src/components/event/event-provider.tsx");

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









var EventSwitch = /** @class */ (function (_super) {
    __extends(EventSwitch, _super);
    function EventSwitch(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {};
        return _this;
    }
    EventSwitch.prototype.render = function () {
        return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "event-page-wrapper" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "container" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_2__["NavLink"], { exact: true, to: '/event', activeClassName: "selected" },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h2", null, "Events")),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router__WEBPACK_IMPORTED_MODULE_1__["Switch"], null,
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router__WEBPACK_IMPORTED_MODULE_1__["Route"], { exact: true, path: "/event", component: _event_page__WEBPACK_IMPORTED_MODULE_3__["default"] }),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router__WEBPACK_IMPORTED_MODULE_1__["Route"], { path: "/event/newitem", component: _event_new_item__WEBPACK_IMPORTED_MODULE_6__["default"] }),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router__WEBPACK_IMPORTED_MODULE_1__["Route"], { path: "/event/item/:_eventItemId", component: _event_item__WEBPACK_IMPORTED_MODULE_4__["default"] }),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router__WEBPACK_IMPORTED_MODULE_1__["Route"], { path: "/event/edit/:_eventItemId", component: _event_item_edit__WEBPACK_IMPORTED_MODULE_5__["default"] }),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router__WEBPACK_IMPORTED_MODULE_1__["Route"], { component: _no_match__WEBPACK_IMPORTED_MODULE_7__["default"] })))));
    };
    return EventSwitch;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]));
;
/* harmony default export */ __webpack_exports__["default"] = (Object(_event_provider__WEBPACK_IMPORTED_MODULE_8__["eventProvider"])(EventSwitch));


/***/ })

}]);
//# sourceMappingURL=8.index_bundle.js.map