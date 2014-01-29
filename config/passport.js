'use strict';

var mongoose			= require('mongoose'),
	User				= mongoose.model('User'),
	TwitterStrategy		= require('passport-twitter'),
	FacebookStrategy	= require('passport-facebook'),
	config				= require('./config');

module.exports = function(passport) {

	// Serialize user to push into the session
	passport.serializeUser(function(user, done) {
		done(null, user.id);
	});

	// Deserialize user based on pre-serialized token
	passport.deserializeUser(function(id, done) {
		User.findOne({
			_id: id
		}, function(err, user) {
			done(err, user);
		});
	});

	// Use Twitter Strategy
	passport.use(new TwitterStrategy({
		consumerKey		: config.twitter.clientID,
		consumerSecret	: config.twitter.clientSecret,
		callbackURL		: config.twitter.callbackURL
	}, function(token, tokenSecret, profile, done) {
		User.findOne({
			'twitter.id_str' : profile.id
		}, function(err, user) {
			if(err) {
				return done(err);
			}
			if(!user) {
				user = new User({
					name: profile.displayName,
					username: profile.username,
					provider: 'twitter',
					twitter: profile._json
				});
				user.save(function(err) {
					if(err) {
						console.log(err);
					}
					return done(err, user);
				});
			} else {
				return done(err, user);
			}
		});
	}));

	// Use Facebook Strategy
	passport.use(new FacebookStrategy({
		clientID		: config.facebook.clientID,
		clientSecret	: config.facebook.clientSecret,
		callbackURL		: config.facebook.callbackURL
	}, function(accessToken, refreshToken, profile, done) {
		User.findOne({
			'facebook.id' : profile.id
		}, function(err, user) {
			if(err) {
				return done(err);
			}
			if(!user) {
				user = new User({
					name: profile.displayName,
					email: profile.emails[0].value,
					username: profile.username,
					provider: 'facebook',
					facebook: profile._json
				});
				user.save(function(err) {
					if(err) {
						console.log(err);
					}
					return done(err, user);
				});
			} else {
				return done(err, user);
			}
		});
	}));

};