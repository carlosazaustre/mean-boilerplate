'use strict';

// Login required
exports.requiresLogin = function(req, res, next) {
	if(!req.isAuthenticated()) {
		return res.send(401, 'User is not authorized');
	}
	next();
};