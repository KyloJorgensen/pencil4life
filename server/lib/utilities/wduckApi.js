'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
var node_fetch_1 = require("node-fetch");
exports.fetchFromWDuckApi = function (endpoint, requestInit) {
    requestInit = requestInit || {};
    if ('method' in requestInit) {
        if (requestInit.method.toLocaleUpperCase() != "GET") {
            requestInit.headers = requestInit.headers || {};
            requestInit.headers['Content-Type'] = 'application/json';
        }
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
exports.getUserId = function (username) {
    return exports.fetchFromWDuckApi('/users')
        .then(function (users) {
        if (users.success) {
            var userindex = users.results.findIndex(function (user) {
                return user.username == username;
            });
            if (userindex != -1) {
                return users.results[userindex].id;
            }
            return null;
        }
        else {
            throw new Error('Failed to get users');
        }
    });
};
exports.newUser = function (username, newUserOptions) {
    return exports.fetchFromWDuckApi('/users', {
        method: 'POST',
        body: JSON.stringify(newUserOptions),
    })
        .then(function (user) {
        console.log(user);
        if (user.success == true) {
            return user.id;
        }
        else {
            throw new Error(user.error);
        }
    });
};
exports.submitMessage = function (submitMessageOptions, callback) {
    var username = 'noreply';
    return exports.getUserId(username)
        .then(function (userId) {
        if (userId) {
            return userId;
        }
        else {
            return exports.newUser(username, {
                name: username,
                password: false,
                receivedMax: 0,
            });
        }
    });
    // return fetchFromWDuckApi(`/users/${userId}/submit`, {
    //   method: 'POST',
    //   body: JSON.stringify(submitMessageOptions),
    // }).then((info) => {
    //   return info;
    // })
};
