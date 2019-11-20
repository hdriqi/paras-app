import React from 'react'

import { blockstackAPI } from '../api'

const loginWithBlockstack = () => {
	blockstackAPI.session.redirectToSignIn()
}

const Login = ({ loginState }) => {
	const loginText = () => {
		switch(loginState) {
			case 'pending':
				return 'Logging in...'
			default:
				return 'Login with Blockstack'
		}
	}
	
	return (
    <div className="w-screen h-screen p-2">
			<div className="flex w-full h-full items-center justify-center">
				<div className="login text-center">
					<div className="mb-16">
						<p className="text-3xl text-gray-900 font-semibold">Paras</p>
						<p className="text-lg text-gray-600 font-medium">Get your own personal website in a minute</p>
					</div>
	<button className="bg-gray-900 text-white border-solid border-2 rounded-lg border-gray-900 px-4 py-1" onClick={() => loginWithBlockstack()}>{loginText()}</button>
				</div>
			</div>
		</div>
  )
}

export default Login