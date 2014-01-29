'use strict';

exports.main = function(req, res) {
	res.render('home', {
		title: 'Home Page'
	});
};