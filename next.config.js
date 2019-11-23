if(process.env.NODE_ENV === 'production') {
	require('dotenv').config({
		path: './.env-build'
	})
}
else {
	require('dotenv').config({})
}

const withCSS = require('@zeit/next-css')
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})
module.exports = withCSS({})
module.exports = {
	env: {
		APP_DOMAIN: process.env.APP_DOMAIN
	}
}
module.exports = withBundleAnalyzer({})