import React from 'react'

import Button from './button'

import { blockstackAPI } from '../api'

const loginWithBlockstack = () => {
	blockstackAPI.session.redirectToSignIn()
}

const Login = () => {
	return (
    <div>
			<div className="page">
				<div className="container">
					<div className="login">
						<Button onClick={() => loginWithBlockstack()} text="Login"/>
					</div>
				</div>
			</div>

			<style jsx>{`
				.page {
					background: #282828;
					height: 100vh;
				}
				.container {
					display: flex;
					height: 100%;
					align-items: center;
					justify-content: center;
				}
			`}</style>
		</div>
  )
}

export default Login