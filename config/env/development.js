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
	sessionStore: {
		host: REDISHOST,
		port: REDISPORT,
		auth: REDISAUTH
	},
	facebook: {
		clientID: 'APP_ID',
		clientSecret: 'APP_SECRET',
		callbackURL: 'http://localhost:3000/auth/facebook/callback'
	},
	twitter: {
		clientID: 'CONSUMER_KEY',
		clientSecret: 'CONSUMER_SECRET',
		callbackURL: 'http://localhost:3000/auth/twitter/callback'
	}
};
