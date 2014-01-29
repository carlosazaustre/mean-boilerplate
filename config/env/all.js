'use strict';

module.exports = {
	port	: process.env.PORT || 3000,
	session : {
		key		: 'mean.sid',
		secret	: 'SESSION_SECRET'
	}
};