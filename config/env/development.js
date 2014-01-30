'use strict';

var url			= require('url'),
	MONGO_URL	= (process.env.MONGOHQ_URL || 'mongodb://localhost:27017/mean-dev'),
	REDISTOGO	= url.parse(process.env.REDISTOGO_URL || 'http://localhost:6379'),
	REDISHOST	= REDISTOGO.hostname,
	REDISPORT	= REDISTOGO.port,
	REDISAUTH	= (process.env.REDISTOGO_URL ? REDISTOGO.auth.split(':')[1] : undefined);

module.exports = {
	db		: MONGO_URL,
	app		: {
		name: 'MEAN - Development'
	},
	session: {
		key		: 'mean.sid',
		secret	: 'SESSION_SECRET'
	},
	sessionStore: {
		host: REDISHOST,
		port: REDISPORT,
		auth: REDISAUTH
	},
	facebook: {
		clientID	: '270256826466905',
		clientSecret: '44c8e9cce041ff954e5caaab5381b8de',
		callbackURL	: 'http://localhost:3000/auth/facebook/callback'
	},
	twitter: {
		clientID	: 'JAtko0DfHOsifSBQC8vBw',
		clientSecret: '5n9KZZI1leyJkJVrjZptBdG82mpd3gs2UOOg89gdI',
		callbackURL	: 'http://localhost:3000/auth/twitter/callback'
	}
};
