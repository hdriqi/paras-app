let withBundleAnalyzer = null

if(process.env.NODE_ENV === 'production') {
	require('dotenv').config({
		path: './.env-build'
	})
	withBundleAnalyzer = require('@next/bundle-analyzer')({
		enabled: process.env.ANALYZE === 'true',
	})
}
else {
	require('dotenv').config({})
}

const withCSS = require('@zeit/next-css')

module.exports = withCSS({})
module.exports = {
	env: {
		APP_DOMAIN: process.env.APP_DOMAIN
	}
}
if(process.env.NODE_ENV === 'production') {
	module.exports = withBundleAnalyzer({})
}