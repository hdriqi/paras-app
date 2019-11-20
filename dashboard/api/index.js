import * as blockstack from 'blockstack'
import { configure, Model } from 'radiks'
import axios from 'axios'
import uuidv4 from 'uuid/v4'
import NodeRSA from 'node-rsa'
import stringify from 'fast-json-stable-stringify'
import sha256 from 'js-sha256'

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

class CredentialAPI {
	async create(credential, privateKey) {
		try {
			const signature = await _signCredential(credential, privateKey)

			const input = {
				version: 'degree/v1',
				uid: uuidv4(),
				credential: credential,
				signature: signature
			}

			const res = await axios.post('http://localhost:8080/v1/certificates', input)
			console.log(res.data)	
		} catch (err) {
			console.log(err)
		}
	}
}

export const blockstackAPI = new BlockstackAPI()
export const credentialAPI = new CredentialAPI()
export const IdentifierAPI = Identifier