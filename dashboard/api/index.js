import { AppConfig, UserSession } from 'blockstack'
import { configure, Model } from 'radiks'
import axios from 'axios'

class Identifier extends Model {
	static className = 'Identifier'
	static schema = { 
		identifier: {
			type: String,
			decrypted: true
		},
		blockstackId: {
			type: String,
			decrypted: true
		},
		profile: {
			decrypted: true
		}
	}
}

class BlockstackAPI {
	constructor() {
		this.appConfig = new AppConfig(['email', 'store_write', 'publish_data'], process.env.APP_DOMAIN, '/login')
		this.session = new UserSession({
			appConfig: this.appConfig
		})
		this.radiks = configure({
			apiServer: process.env.APP_DOMAIN,
			userSession: this.session
		})
	}
}

class ThemeAPI {
	async fetch() {
		return await axios.get('/api/themes')
	}	
}

export const blockstackAPI = new BlockstackAPI()
export const themeAPI = new ThemeAPI()
export const IdentifierAPI = Identifier