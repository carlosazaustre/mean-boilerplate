'use strict';

var mongoose	= require('mongoose'),
	Schema		= mongoose.Schema;

// User Schema
var UserSchema = new Schema({
	name: String,
	email: String,
	username: {
		type: String,
		unique: true
	},
	provider: String,
	facebook: {},
	twitter: {}
});

mongoose.model('User', UserSchema);