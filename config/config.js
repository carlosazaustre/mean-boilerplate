'use strict';

var _=		require('lodash'),
	path	= require('path');

module.exports = _.extend(

	require(path.join(__dirname, './env/all.js')),
	require((path.join(__dirname, './env/' + process.env.NODE_ENV + '.js')) || {})

);