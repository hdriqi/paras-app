if(process.env.NODE_ENV === 'production') {
	require('dotenv').config({
		path: './.env-build'
	})
}
else {
	require('dotenv').config({})
}

const withCSS = require('@zeit/next-css')

module.exports = withCSS({
	webpack(config) {
		config.module.rules.push({
			test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
			use: {
					loader: 'url-loader',
					options: {
						limit: 100000
					}
			}
		})
		return config
	},
	env: {
		APP_DOMAIN: process.env.APP_DOMAIN
	}
})