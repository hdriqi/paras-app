import * as blockstack from 'blockstack'
import axios from 'axios'
import uuidv4 from 'uuid/v4'
import NodeRSA from 'node-rsa'
import stringify from 'fast-json-stable-stringify'
import sha256 from 'js-sha256'

class BlockstackAPI {
	constructor() {
		this.appConfig = new blockstack.AppConfig(['email', 'store_write', 'publish_data'], 'http://localhost:4000', '/login')
		this.default = blockstack
		this.session = new blockstack.UserSession({
			appConfig: this.appConfig
		})
	}
}

const _signCredential = async (message, privateKey) => {
	const msg = stringify(message)
	const hashedMsg = sha256(msg)

	const key = new NodeRSA(privateKey)
	const signedMsg = key.sign(hashedMsg, 'hex', 'utf8')
	const splitSignedMsg = signedMsg.length/2
	const leftSignedMsg = signedMsg.substring(0, splitSignedMsg)
	const rightSignedMsg = signedMsg.substring(splitSignedMsg)
	
	return {
		left: {
			hash: leftSignedMsg
		},
		right: {
			hash: rightSignedMsg
		}
	}

	// const publicKey = new NodeRSA(currentOrg.publicKey)
	// const verify = publicKey.verify(hashedMsg, leftSignedMsg + rightSignedMsg, 'utf8', 'hex')
	// console.log(verify)
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