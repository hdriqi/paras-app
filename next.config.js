require('dotenv').config()
const withCSS = require('@zeit/next-css')

module.exports = withCSS({})
module.exports = {
	env: {
		APP_DOMAIN: process.env.APP_DOMAIN
	}
}