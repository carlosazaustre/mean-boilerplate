'use strict';

var home			= require('../controllers/home'),
	authorization	= require('./middlewares/authorization');

module.exports = function(app) {

	// App Home route (Login Required)
	app.get('/home', authorization.requiresLogin, home.main);
};