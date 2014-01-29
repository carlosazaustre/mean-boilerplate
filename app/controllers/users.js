'use strict';

var mongoose	= require('mongoose'),
	User		= mongoose.model('User');

exports.authCallback = function(req, res) {
	res.redirect('/home');
};

exports.logout = function(req, res) {
	req.logout();
	res.redirect('/');
};

exports.session = function(req, res) {
	res.redirect('/home');
};

exports.me = function(req, res) {
	res.jsonp(req.user || null);
};

exports.user = function(req, res, next, id) {
	User
		.findOne({
			_id: id
		})
		.exec(function(err, user) {
			if(err) {
				return next(err);
			}
			if(!user) {
				return next(new Error('Failed to load user ' + id));
			}
			req.profile = user;
			next();
		});
};