'use strict';

var index = require('../controllers/index');

module.exports = function(app) {
	
	// Home Route
	app.get('/', index.render);

};

