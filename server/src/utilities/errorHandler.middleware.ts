'use strict';

import { serialize } from 'cookie';

export default (router) => {
	router.use(function(error, req, res, next) {
		if (error) {
			next(error);
		} else {
			res.status(500).json('missing error');
		}
	});
	interface IError extends Error {
		code: number;
	}	
	router.use(function(error: IError, req, res, next) {

		if (res.headerSent) {
			return next(error);
		}

		if (error.name == 'AuthenticationError') {
			return res.status(401).json(error.message);
		}

		if (error.name == 'MongoError') {
			if (error.code == 11000) {
				return res.status(400).json(error.message);
			}			
		}

		if (error.name == 'LoginError') {
			res.setHeader('Set-Cookie', serialize('UserKey', null, {
	      		httpOnly: false,
	      		maxAge: 60 * 60 * 24 * 7 // 1 week 
	    	}));
			return res.status(401).end();
		}

		if (error.name == 'BadRequestError') {
			console.log(error);
			return res.status(400).json(error.message);
		}

		res.status(500);
		console.log(error);
		if (error) {
			return res.json(error);
		} else {
			return res.json('missing message');
		}

		next(error);
	});
	router.use(function(error, req, res, next) {
		console.log('CRITICAL ERROR: ', error);
	})
};