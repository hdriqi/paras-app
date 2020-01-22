if(process.env.NODE_ENV === 'production') {
	require('dotenv').config({
		path: './.env-build'
	})
}
else {
	require('dotenv').config({})
}

const withCSS = require('@zeit/next-css')
const withTM = require('next-transpile-modules')(['themes'])
 
module.exports = withTM()
module.exports = withCSS({})
module.exports = {
	env: {
		APP_DOMAIN: process.env.APP_DOMAIN
	}
}