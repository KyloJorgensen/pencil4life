'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_html_email_1 = require("react-html-email");
var variables_express_1 = require("../../../config/variables.express");
exports.resetPasswordEmailTemplate = function (user, code) { return react_html_email_1.renderEmail(React.createElement(react_html_email_1.Email, { style: { padding: "2em 0.5em" }, title: "Pencil4life Password Reset" },
    React.createElement(react_html_email_1.Item, null,
        React.createElement(react_html_email_1.Span, { fontSize: 20 },
            "Hello ",
            user.username,
            ",")),
    React.createElement(react_html_email_1.Item, null,
        React.createElement(react_html_email_1.Span, { fontSize: 12 }, "You recently requested to reset your password for your Pencil4Life Account. Use the button below to reset it."),
        React.createElement(react_html_email_1.Span, { fontWeight: 'bold' }, "This password reset is only vaild for the next 24 hours.")),
    React.createElement(react_html_email_1.Item, { align: "center" },
        React.createElement(react_html_email_1.Span, { fontSize: 12 },
            React.createElement(react_html_email_1.A, { href: "https://" + (variables_express_1.NODE_ENV == 'development' ? 'dev' : 'www') + ".pencil4life.com/#/resetpassword/" + user._id + "/" + code }, "Click Here"),
            " to reset your password.")))); };
