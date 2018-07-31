'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_html_email_1 = require("react-html-email");
// const emailHTML = renderEmail(
//   <Email title="Hello World!">
//     <Item align="center">
//       <Span fontSize={20}>
//         This is an example email made with:
//         <A href="https://github.com/chromakode/react-html-email">react-html-email</A>.
//       </Span>
//     </Item>
//   </Email>
// )
exports.resetPasswordEmailTemplate = react_html_email_1.renderEmail(React.createElement(react_html_email_1.Email, { title: "Pencil4life Password Reset" },
    React.createElement(react_html_email_1.Item, { align: "center" },
        React.createElement(react_html_email_1.Span, { fontSize: 20 },
            "This is an example email made with:",
            React.createElement(react_html_email_1.A, { href: "https://github.com/chromakode/react-html-email" }, "react-html-email"),
            "."))));
