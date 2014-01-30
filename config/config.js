'use strict';

var url			= require('url'),
	MONGO_URL	= (process.env.MONGOHQ_URL || 'mongodb://localhost:27017/mean-dev'),
	REDISTOGO	= url.parse(process.env.REDISTOGO_URL || 'http://localhost:6379'),
	REDISHOST	= REDISTOGO.hostname,
	REDISPORT	= REDISTOGO.port,
	REDISAUTH	= (process.env.REDISTOGO_URL ? REDISTOGO.auth.split(':')[1] : undefined);

module.exports = {
	port	: process.env.PORT || 3000,
	db		: MONGO_URL,
	app		: {
		name: 'MEAN'
	},
	session: {
		key		: ('SESSION_KEY' || process.env.SESSION_KEY),
		secret	: ('SESSION_SECRET' || process.env.SESSION_SECRET),
	},
	sessionStore: {
		host: REDISHOST,
		port: REDISPORT,
		auth: REDISAUTH
	},
	facebook: {
		clientID	: ('270256826466905' || process.env.FACEBOOK_CLIENT_ID),
		clientSecret: ('44c8e9cce041ff954e5caaab5381b8de' || process.env.FACEBOOK_CLIENT_SECRET),
		callbackURL	: ('http://localhost:3000/auth/facebook/callback' || process.env.FACEBOOK_CALLBACK)
	},
	twitter: {
		clientID	: ('JAtko0DfHOsifSBQC8vBw' || process.env.TWITTER_CLIENT_ID),
		clientSecret: ('5n9KZZI1leyJkJVrjZptBdG82mpd3gs2UOOg89gdI' || process.env.TWITTER_CLIENT_SECRET),
		callbackURL	: ('http://localhost:3000/auth/twitter/callback' || process.env.TWITTER_CALLBACK)
	}
};