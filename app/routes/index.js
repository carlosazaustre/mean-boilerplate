'use strict';

module.exports = function(app) {
	
	// Home Route
	var index = require('../controllers/index');
	app.get('/', index.render);

};

