'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
var node_fetch_1 = require("node-fetch");
exports.fetchFromWDuckApi = function (endpoint, requestInit) {
    requestInit = requestInit || {};
    if (requestInit.method.toLocaleUpperCase() != "GET") {
        requestInit.headers['Content-Type'] = 'application/json';
    }
    var request = new node_fetch_1.Request("http://localhost:8080" + endpoint, requestInit);
    return node_fetch_1.default(request).then(function (response) {
        if (response.status < 200 || response.status >= 300) {
            var error = new Error(response.statusText);
            error.message = JSON.stringify(response);
            throw error;
        }
        return response.json();
    }).then(function (info) {
        return info;
    });
};
exports.submitMessage = function (submitMessageOptions, callback) {
    return exports.fetchFromWDuckApi('/users')
        .then(function (users) {
        console.log(users);
    });
    // return fetchFromWDuckApi(`/users/${userId}/submit`, {
    //   method: 'POST',
    //   body: JSON.stringify(submitMessageOptions),
    // }).then((info) => {
    //   return info;
    // })
};
