'use strict';
let User = require('./user.model.js');

function badAuthentication(next) {
	let error = new Error('Bad Authentication');
	error.name = 'AuthenticationError';
	next(error);
}

// next if userId is vaild.
exports.userAuth = function(req, res, next) {
	if (req.session._userId) {
		return next();
	}
	badAuthentication(next);
};

// next if adminIs is vaild.
exports.adminAuth = function(req, res, next) {
	if (req.session._adminId && req.session._adminId == req.session._userId) {
		let query = User.findOne({_id: req.session._userId});
		return query.then(function(user) {
			if (user.admin && !user.discontinued) {
				return next();
			}
			badAuthentication(next);
		}).catch(function(error) {
			next(error);
		});	
	}
	badAuthentication(next);
};