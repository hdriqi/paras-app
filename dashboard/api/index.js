import * as blockstack from 'blockstack'
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
		this.default = blockstack
		this.appConfig = new blockstack.AppConfig(['email', 'store_write', 'publish_data'], 'http://localhost:4000', '/login')
		this.session = new blockstack.UserSession({
			appConfig: this.appConfig
		})
		this.radiks = configure({
			apiServer: 'http://localhost:4000',
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