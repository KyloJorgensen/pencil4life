'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
var user_model_1 = require("./user.model");
var bcrypt = require("bcryptjs");
var wduckApi_1 = require("../../../utilities/wduckApi");
var variables_express_1 = require("../../../config/variables.express");
var user_email_templates_1 = require("./user-email-templates");
var sendUser = function (req, res, user) {
    req.session._userId = user._id;
    if (user.admin) {
        req.session._adminId = user._id;
    }
    res.status(200).json({
        email: user.email,
        username: user.username,
        firstname: user.firstname,
        lastname: user.lastname,
        admin: user.admin,
    });
};
// creates new user from email, password, and name. Attaches UserKey session.
exports.createUser = function (req, res, next) {
    // generates the salt for bcrypt to encrypt the passwordz
    bcrypt.genSalt(10, function (err, salt) {
        if (err) {
            return next(err);
        }
        // generates encrypted password
        bcrypt.hash(req.body.password, salt, function (err, hash) {
            if (err) {
                return next(err);
            }
            // creates user useing email, encrypted password (hash), name
            user_model_1.User.create({
                email: req.body.email,
                username: req.body.username,
                password: hash,
                firstname: req.body.firstname,
                lastname: req.body.lastname
            }).then(function (user) {
                sendUser(req, res, user);
            }).catch(function (error) {
                next(error);
            });
        });
    });
};
// one get returns users name
exports.getUser = function (req, res, next) {
    user_model_1.User.findOne({
        _id: req.session._userId
    }).then(function (user) {
        if (user) {
            sendUser(req, res, user);
        }
        else {
            var error = new Error('Not logged In.');
            error.name = 'LoginError';
            return next(error);
        }
    }).catch(function (error) {
        next(error);
    });
};
// Attaches UserKey if username and password are vaild.
exports.login = function (req, res, next) {
    var username = req.body.username;
    var password = req.body.password;
    user_model_1.User.findOne({ username: username })
        .then(function (user) {
        if (user == null) {
            var error = new Error('Invaild Username.');
            error.message = 'LoginError';
            throw error;
        }
        return user.validatePassword(password, user.password)
            .then(function (isVaild) {
            if (isVaild) {
                return user;
            }
            else {
                return null;
            }
        });
    })
        .then(function (user) {
        if (user) {
            sendUser(req, res, user);
        }
        else {
            var error = new Error('Invaild Password.');
            error.message = 'LoginError';
            return next(error);
        }
    })
        .catch(function (error) {
        next(error);
    });
};
// Log user out
exports.logout = function (req, res, next) {
    req.session.regenerate(function (err) {
        if (err) {
            return next(err);
        }
        res.status(200).end();
    });
};
exports.updateUser = function (req, res, next) {
    var changes;
    if ('body' in req) {
        if ('email' in req.body) {
            changes.email = req.body.email;
        }
        if ('username' in req.body) {
            changes.username = req.body.username;
        }
        if ('firstname' in req.body) {
            changes.firstname = req.body.firstname;
        }
        if ('lastname' in req.body) {
            changes.lastname = req.body.lastname;
        }
    }
    else {
        var error = new Error('missing Body');
        error.name = 'BadRequest';
        return next(error);
    }
    user_model_1.User.findOneAndUpdate({
        _id: req.session._userId
    }, {
        $set: changes
    }, {
        new: true
    })
        .then(function (user) {
        sendUser(req, res, user);
    })
        .catch(function (error) {
        next(error);
    });
};
exports.updateUserPassword = function (req, res, next) {
    var oldpassword;
    var newpassword;
    if ('body' in req) {
        if ('oldpassword' in req.body) {
            oldpassword = req.body.oldpassword;
        }
        if ('newpassword' in req.body) {
            newpassword = req.body.newpassword;
        }
    }
    else {
        var error = new Error('missing Body');
        error.name = 'BadRequest';
        return next(error);
    }
    user_model_1.User.findOne({
        _id: req.session._userId
    })
        .then(function (user) {
        if (user == null) {
            var error = new Error('Invaild User.');
            error.name = 'LoginError';
            return next(error);
        }
        return user.validatePassword(oldpassword, user.password)
            .then(function (isVaild) {
            if (isVaild) {
                return user;
            }
            return null;
        });
    })
        .then(function (user) {
        if (user) {
            var changes_1;
            bcrypt.genSalt(10, function (error, salt) {
                if (error) {
                    throw (error);
                }
                // generates encrypted password
                bcrypt.hash(newpassword, salt, function (error, hash) {
                    if (error) {
                        throw error;
                    }
                    changes_1.password = hash;
                });
            });
            return changes_1;
        }
        else {
            var error = new Error('Invaild Password.');
            error.name = 'LoginError';
            throw error;
        }
    })
        .then(function (changes) {
        return user_model_1.User.findOneAndUpdate({
            _id: req.session._userId
        }, {
            $set: changes
        }, {
            new: true
        });
    })
        .then(function (user) {
        sendUser(req, res, user);
    })
        .catch(function (error) {
        next(error);
    });
};
exports.forgotPassword = function (req, res, next) {
    var email;
    if ('body' in req) {
        if ('email' in req.body) {
            email = req.body.email;
        }
        else {
            var error = new Error('missing email');
            error.name = 'BadRequest';
            return next(error);
        }
    }
    else {
        var error = new Error('missing Body');
        error.name = 'BadRequest';
        return next(error);
    }
    user_model_1.User.findOne({ email: email })
        .then(function (user) {
        if (user == null) {
            var message = user_email_templates_1.invaildResetPasswordEmailTemplate();
            return wduckApi_1.submitMessage({
                from: {
                    name: 'Contacts Request',
                    address: variables_express_1.NM_NOREPLY_EMAIL
                },
                to: [{
                        name: user.username,
                        address: user.email,
                    }],
                subject: 'Pencil4life Account Password Reset',
                html: message,
            });
        }
        var code = function () {
            var text = "";
            var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
            for (var i = 0; i < 64; i++)
                text += possible.charAt(Math.floor(Math.random() * possible.length));
            return text;
        }();
        var changes = {
            reset_code: {
                code: code,
                date: new Date(),
                used: false,
            }
        };
        //add a day to the date
        changes.reset_code.date.setDate(changes.reset_code.date.getDate() + 1);
        return user_model_1.User.findOneAndUpdate({
            email: email
        }, {
            $set: changes
        }, {
            new: true
        })
            .then(function (user) {
            var message = user_email_templates_1.resetPasswordEmailTemplate({
                userId: user._id,
                username: user.username,
                code: changes.reset_code.code
            });
            return wduckApi_1.submitMessage({
                from: {
                    name: 'Contacts Request',
                    address: variables_express_1.NM_NOREPLY_EMAIL
                },
                to: [{
                        name: user.username,
                        address: user.email,
                    }],
                subject: 'Pencil4life Account Password Reset',
                html: message,
            });
        });
    })
        .then(function () {
        res.status(200).json({
            success: true
        });
    })
        .catch(function (error) {
        next(error);
    });
};
exports.check_reset_code = function (userId, reset_code) {
    return user_model_1.User.find({ _id: userId })
        .then(function (user) {
        if (!user) {
            return false;
        }
        if (!user[0].reset_code) {
            return false;
        }
        console.log(user[0].reset_code);
        if (!user[0].reset_code.used &&
            user[0].reset_code.code == reset_code &&
            user[0].reset_code.date > new Date()) {
            return user[0];
        }
        return false;
    }).catch(function (error) {
        // console.log(error)
        return false;
    });
};
exports.checkResetCode = function (req, res, next) {
    var _a = req.params, userId = _a.userId, reset_code = _a.reset_code;
    exports.check_reset_code(userId, reset_code)
        .then(function (vaild) {
        res.json({
            vaild: !!vaild,
        });
    })
        .catch(function (error) {
        next(error);
    });
};
exports.resetPassword = function (req, res, next) {
    var _a = req.params, userId = _a.userId, reset_code = _a.reset_code;
    var newpassword;
    if ('body' in req) {
        if ('newpassword' in req.body) {
            newpassword = req.body.newpassword;
        }
        else {
            var error = new Error('missing newpassword');
            error.name = 'BadRequest';
            return next(error);
        }
    }
    else {
        var error = new Error('missing Body');
        error.name = 'BadRequest';
        return next(error);
    }
    exports.check_reset_code(userId, reset_code)
        .then(function (user) {
        if (user) {
            return user;
        }
        else {
            res.json({
                vaild: false,
            });
        }
    })
        .then(function (user) {
        return new Promise(function (resolve, reject) {
            bcrypt.genSalt(10, function (error, salt) {
                if (error) {
                    reject(error);
                }
                // generates encrypted password
                bcrypt.hash(newpassword, salt, function (error, hash) {
                    if (error) {
                        reject(error);
                    }
                    console.log(hash);
                    resolve({
                        password: hash,
                        reset_code: {
                            code: user.reset_code.code,
                            date: user.reset_code.date,
                            used: true,
                        }
                    });
                });
            });
        });
    })
        .then(function (changes) {
        return user_model_1.User.findOneAndUpdate({
            _id: userId,
        }, {
            $set: changes,
        }, {
            new: true,
        });
    })
        .then(function (user) {
        console.log(user);
        res.json({
            vaild: true,
        });
    })
        .catch(function (error) {
        next(error);
    });
};
