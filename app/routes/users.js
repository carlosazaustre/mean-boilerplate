'use strict';

var users = require('../controllers/users');

module.exports = function(app, passport) {

	app.get('/logout', users.logout);
	app.get('/users/me', users.me);

	app.get('/auth/facebook', passport.authenticate('facebook', {
		scope: ['email', 'user_about_me'],
		failureRedirect: '/'
	}));

	app.get('/auth/facebook/callback', passport.authenticate('facebook', {
		failureRedirect: '/'
	}), users.authCallback);

	app.get('/auth/twitter', passport.authenticate('twitter', {
		failureRedirect: '/'
	}));

	app.get('/auth/twitter/callback', passport.authenticate('twitter', {
		failureRedirect: '/'
	}), users.authCallback);

};