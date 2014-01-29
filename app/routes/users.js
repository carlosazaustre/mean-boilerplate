'use strict';

var users = require('../controllers/users');

module.exports = function(app, passport) {

	app.get('/auth', users.login);
	app.get('/logout', users.logout);
	app.get('/users/me', users.me);

	app.get('/auth/facebook', passport.authenticate('facebook', {
		scope: ['email', 'user_about_me'],
		failureRedirect: '/login'
	}), users.login);

	app.get('/auth/facebook/callback', passport.authenticate('facebook', {
		failureRedirect: '/login'
	}), users.authCallback);

	app.get('/auth/twitter', passport.authenticate('twitter', {
		failureRedirect: '/login'
	}), users.login);

	app.get('/auth/twitter/callback', passport.authenticate('twitter', {
		failureRedirect: '/login'
	}), users.authCallback);

};