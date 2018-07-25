(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[15],{

/***/ "./client/src/components/commission/commission-page.tsx":
/*!**************************************************************!*\
  !*** ./client/src/components/commission/commission-page.tsx ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_rte__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-rte */ "./node_modules/react-rte/dist/react-rte.js");
/* harmony import */ var react_rte__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_rte__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_datetime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-datetime */ "./node_modules/react-datetime/DateTime.js");
/* harmony import */ var react_datetime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_datetime__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
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





var CommissionPage = /** @class */ (function (_super) {
    __extends(CommissionPage, _super);
    function CommissionPage(props) {
        var _this = _super.call(this, props) || this;
        _this.onRichTextChangeDetails = function (value) {
            _this.setState(function () {
                return { details: value };
            });
        };
        _this.onRichTextChangeComment = function (value) {
            _this.setState(function () {
                return {
                    comment: value.toString('html'),
                    convertedComment: value
                };
            });
        };
        _this.requestorRef = react__WEBPACK_IMPORTED_MODULE_0__["createRef"]();
        _this.emailRef = react__WEBPACK_IMPORTED_MODULE_0__["createRef"]();
        _this.state = {
            accepting: false,
            limit: 0,
            start_date: moment__WEBPACK_IMPORTED_MODULE_3__(new Date()),
            end_date: moment__WEBPACK_IMPORTED_MODULE_3__(new Date()),
            comment: '',
            convertedComment: react_rte__WEBPACK_IMPORTED_MODULE_1___default.a.createValueFromString('<p><br></p>', 'html'),
            required: false,
            details: react_rte__WEBPACK_IMPORTED_MODULE_1___default.a.createValueFromString('<p><br></p>', 'html'),
            _commissionRequestId: null,
            edit: false,
        };
        _this.hitKey = _this.hitKey.bind(_this);
        _this.editField = _this.editField.bind(_this);
        _this.submitCommissionRequest = _this.submitCommissionRequest.bind(_this);
        _this.onRichTextChangeDetails = _this.onRichTextChangeDetails.bind(_this);
        _this.onRichTextChangeComment = _this.onRichTextChangeComment.bind(_this);
        _this.toggleEdit = _this.toggleEdit.bind(_this);
        _this.handleCheckboxChange = _this.handleCheckboxChange.bind(_this);
        _this.updateCommissionsToggle = _this.updateCommissionsToggle.bind(_this);
        _this.startDateChanged = _this.startDateChanged.bind(_this);
        _this.endDateChanged = _this.endDateChanged.bind(_this);
        return _this;
    }
    CommissionPage.prototype.startDateChanged = function (momentDateTime) {
        this.setState(function (prevState) {
            return { start_date: momentDateTime };
        });
    };
    CommissionPage.prototype.endDateChanged = function (momentDateTime) {
        this.setState(function (prevState) {
            return { end_date: momentDateTime };
        });
    };
    CommissionPage.prototype.editField = function (event) {
        var _a = event.target, name = _a.name, value = _a.value;
        this.setState(function (prevState) {
            prevState[name] = value;
            return prevState;
        });
    };
    CommissionPage.prototype.handleCheckboxChange = function (event) {
        var _a = event.target, name = _a.name, checked = _a.checked;
        this.setState(function (prevState) {
            prevState[name] = checked;
            return prevState;
        });
    };
    CommissionPage.prototype.hitKey = function (event) {
        if (event.key == 'Enter') {
            this.submitCommissionRequest(event);
        }
    };
    CommissionPage.prototype.toggleEdit = function () {
        this.setState(function (prevState) {
            return { edit: !prevState.edit };
        });
    };
    CommissionPage.prototype.submitCommissionRequest = function (event) {
        var _this = this;
        event.preventDefault();
        var requestor = this.requestorRef.current.value;
        var email = this.emailRef.current.value;
        var details = this.state.details;
        if (!requestor || !email || !details) {
            this.setState(function () {
                return { required: true };
            });
            return;
        }
        var commissionRequest = {
            requestor: requestor,
            email: email,
            details: details.toString('html'),
        };
        var request = new Request('/api/commissions', {
            method: 'POST',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify(commissionRequest)
        });
        this.setState(function () {
            return { required: false };
        });
        fetch(request)
            .then(function (response) {
            if (response.status < 200 || response.status >= 300) {
                var error = new Error(response.statusText);
                error.message = String(response);
                throw error;
            }
            return response.json();
        })
            .then(function (commissionRequestRes) {
            var request = new Request('/api/commissions/toggle', {
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
                return response.json();
            })
                .then(function (toggle) {
                _this.setState(function () {
                    return {
                        _commissionRequestId: commissionRequestRes.message.id,
                        accepting: toggle.accepting,
                        limit: toggle.limit,
                        start_date: moment__WEBPACK_IMPORTED_MODULE_3__(toggle.start_date),
                        end_date: moment__WEBPACK_IMPORTED_MODULE_3__(toggle.end_date),
                        comment: toggle.comment,
                        convertedComment: react_rte__WEBPACK_IMPORTED_MODULE_1___default.a.createValueFromString(toggle.comment, 'html')
                    };
                });
            })
                .catch(function (error) {
                console.error(error);
            });
        })
            .catch(function (error) {
            _this.setState(function () {
                return { required: true };
            });
            console.error(error);
        });
    };
    CommissionPage.prototype.updateCommissionsToggle = function (event) {
        var _this = this;
        event.preventDefault();
        var _a = this.state, convertedComment = _a.convertedComment, limit = _a.limit, accepting = _a.accepting, start_date = _a.start_date, end_date = _a.end_date;
        var commissionToggle = {
            accepting: accepting,
            limit: limit,
            comment: convertedComment.toString('html'),
            start_date: start_date,
            end_date: end_date,
        };
        var request = new Request('/api/commissions/toggle', {
            method: 'PUT',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify(commissionToggle),
        });
        fetch(request)
            .then(function (response) {
            if (response.status < 200 || response.status >= 300) {
                var error = new Error(response.statusText);
                error.message = String(response);
                throw error;
            }
            return response.json();
        })
            .then(function (toggle) {
            _this.setState(function () {
                return {
                    edit: false,
                    accepting: toggle.accepting,
                    limit: toggle.limit,
                    start_date: moment__WEBPACK_IMPORTED_MODULE_3__(toggle.start_date),
                    end_date: moment__WEBPACK_IMPORTED_MODULE_3__(toggle.end_date),
                    comment: toggle.comment,
                    convertedComment: react_rte__WEBPACK_IMPORTED_MODULE_1___default.a.createValueFromString(toggle.comment, 'html')
                };
            });
        })
            .catch(function (error) {
            console.error(error);
        });
    };
    CommissionPage.prototype.componentDidMount = function () {
        var _this = this;
        var request = new Request('/api/commissions/toggle', {
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
            return response.json();
        })
            .then(function (toggle) {
            _this.setState(function () {
                return {
                    accepting: toggle.accepting,
                    limit: toggle.limit,
                    start_date: moment__WEBPACK_IMPORTED_MODULE_3__(toggle.start_date),
                    end_date: moment__WEBPACK_IMPORTED_MODULE_3__(toggle.end_date),
                    comment: toggle.comment,
                    convertedComment: react_rte__WEBPACK_IMPORTED_MODULE_1___default.a.createValueFromString(toggle.comment, 'html')
                };
            });
        })
            .catch(function (error) {
            console.error(error);
        });
    };
    CommissionPage.prototype.render = function () {
        var _a = this, requestorRef = _a.requestorRef, emailRef = _a.emailRef, editField = _a.editField, hitKey = _a.hitKey, submitCommissionRequest = _a.submitCommissionRequest, onRichTextChangeDetails = _a.onRichTextChangeDetails, onRichTextChangeComment = _a.onRichTextChangeComment, toggleEdit = _a.toggleEdit, updateCommissionsToggle = _a.updateCommissionsToggle, handleCheckboxChange = _a.handleCheckboxChange, startDateChanged = _a.startDateChanged, endDateChanged = _a.endDateChanged;
        var admin = this.props.user.admin;
        var _b = this.state, accepting = _b.accepting, limit = _b.limit, start_date = _b.start_date, end_date = _b.end_date, comment = _b.comment, convertedComment = _b.convertedComment, required = _b.required, details = _b.details, _commissionRequestId = _b._commissionRequestId, edit = _b.edit;
        var displayMessage = (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", null,
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", null, "Not Accepting Commissions at this time")));
        var acceptingRequests = false;
        if (limit) {
            displayMessage = (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", null,
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", null, "Now accepting commission requests."),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", null,
                    "Accepting ",
                    limit,
                    " more Commission Request(s).")));
            acceptingRequests = true;
        }
        if (accepting) {
            displayMessage = (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", null,
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", null, "Now accepting commission requests.")));
            acceptingRequests = true;
        }
        var start = moment__WEBPACK_IMPORTED_MODULE_3__(start_date).format("MMM Do YYYY [at] h:mm a ");
        var end = moment__WEBPACK_IMPORTED_MODULE_3__(end_date).format("MMM Do YYYY [at] h:mm a ");
        if (end_date > new Date()) {
            if (start_date < new Date()) {
                displayMessage = (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", null,
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", null, "Now accepting commission requests."),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", null,
                        "Commission requests will be accepted until ",
                        end,
                        ".")));
                acceptingRequests = true;
            }
            else {
                displayMessage = (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", null,
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", null, "Not accepting commission requests currently."),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", null,
                        "Will be accepting commission requests on ",
                        start,
                        " until ",
                        end,
                        ".")));
            }
        }
        var commissionRequest;
        commissionRequest = acceptingRequests ? (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", null,
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h3", null, "Commission Request"),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("label", null,
                "Requestor",
                required ? (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", { className: "errortext" }, "*")) : ''),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("br", null),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("input", { type: 'text', onKeyPress: hitKey, placeholder: "Joe Smith", ref: requestorRef }),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("br", null),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("label", null,
                "Email",
                required ? (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", { className: "errortext" }, "*")) : ''),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("br", null),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("input", { type: 'text', onKeyPress: hitKey, placeholder: "Joe Smith", ref: emailRef }),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("br", null),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("label", null, "Details"),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("br", null),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_rte__WEBPACK_IMPORTED_MODULE_1___default.a, { value: details, onChange: onRichTextChangeDetails }),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("br", null),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("input", { type: 'submit', onClick: submitCommissionRequest, value: 'REQUEST' }))) : '';
        if (_commissionRequestId) {
            commissionRequest = (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", null,
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", null, "Commission Request Submitted")));
        }
        return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "commission-page-wrapper" },
            !edit && admin ? (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("button", { onClick: toggleEdit }, "EDIT")) : '',
            edit && admin ? (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", null,
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("label", null, "Accepting All: "),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("input", { type: 'checkbox', checked: accepting, name: "accepting", onChange: handleCheckboxChange }),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("br", null),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("label", null, "Limit: "),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("input", { type: "number", onKeyPress: hitKey, onChange: editField, name: "limit", min: 0, value: limit }),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("br", null),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("label", null,
                    "Start",
                    required ? (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", { className: "errortext" }, "*")) : ''),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("br", null),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_datetime__WEBPACK_IMPORTED_MODULE_2__, { dateFormat: "MMM Do YYYY [at] h:mm a", value: start_date, onChange: startDateChanged }),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("br", null),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("label", null,
                    "End",
                    required ? (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", { className: "errortext" }, "*")) : ''),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("br", null),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_datetime__WEBPACK_IMPORTED_MODULE_2__, { dateFormat: "MMM Do YYYY [at] h:mm a", value: end_date, onChange: endDateChanged }),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("br", null),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_rte__WEBPACK_IMPORTED_MODULE_1___default.a, { value: convertedComment, onChange: onRichTextChangeComment }),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("input", { type: 'submit', onClick: updateCommissionsToggle, value: 'REQUEST' }))) : '',
            displayMessage,
            comment != '<p><br></p>' ? react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_rte__WEBPACK_IMPORTED_MODULE_1___default.a, { value: convertedComment, readOnly: true }) : '',
            commissionRequest));
    };
    return CommissionPage;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]));
;
/* harmony default export */ __webpack_exports__["default"] = (Object(_user_user_provider__WEBPACK_IMPORTED_MODULE_4__["userConsumer"])(CommissionPage));


/***/ }),

/***/ "./client/src/components/commission/commission-switch.tsx":
/*!****************************************************************!*\
  !*** ./client/src/components/commission/commission-switch.tsx ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router */ "./node_modules/react-router/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var _commission_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./commission-page */ "./client/src/components/commission/commission-page.tsx");
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





var CommissionSwitch = /** @class */ (function (_super) {
    __extends(CommissionSwitch, _super);
    function CommissionSwitch(props) {
        return _super.call(this, props) || this;
    }
    CommissionSwitch.prototype.render = function () {
        return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "commission-switch-wrapper" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "container" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_2__["NavLink"], { exact: true, to: '/commission', activeClassName: "selected" },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h2", null, "Commission")),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router__WEBPACK_IMPORTED_MODULE_1__["Switch"], null,
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router__WEBPACK_IMPORTED_MODULE_1__["Route"], { exact: true, path: "/commission", component: _commission_page__WEBPACK_IMPORTED_MODULE_3__["default"] }),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router__WEBPACK_IMPORTED_MODULE_1__["Route"], { path: "/commission/commission", component: _no_match__WEBPACK_IMPORTED_MODULE_4__["default"] }),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router__WEBPACK_IMPORTED_MODULE_1__["Route"], { component: _no_match__WEBPACK_IMPORTED_MODULE_4__["default"] })))));
    };
    return CommissionSwitch;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]));
;
/* harmony default export */ __webpack_exports__["default"] = (CommissionSwitch);


/***/ })

}]);
//# sourceMappingURL=15.index_bundle.js.map