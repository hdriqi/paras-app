import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import Head from 'next/head'
import { useRouter } from 'next/router'


import { withRedux } from '../lib/redux'
import { saveAuthData } from '../actions/auth'
import { blockstackAPI } from '../api'
import { User } from 'radiks'

import Meta from '../components/meta'
import Layout from '../components/Layout'
import Login from '../components/login'

const LoginPage = () => {
  const dispatch = useDispatch()
  const router = useRouter()
  const [loginState, setLoginState] = useState('')
	
	useEffect(() => {
		const checkAuthData = async () => {
      if(blockstackAPI.session.isUserSignedIn()) {
        setLoginState('pending')
        const authData = blockstackAPI.session.loadUserData()
        await User.createWithCurrentUser()
        dispatch(saveAuthData(authData))
        router.push('/dash')
      }
			else if(blockstackAPI.session.isSignInPending()) {
        setLoginState('pending')
        const authData = await blockstackAPI.session.handlePendingSignIn()
        await User.createWithCurrentUser()
        dispatch(saveAuthData(authData))
        router.push('/dash')
			}
		}
		checkAuthData()
  }, [])
  
  return (
    <Layout>
      <Head>
        <title>Login | Paras</title>
      </Head>
      <Meta />

      <Login loginState={loginState} />
    </Layout>
  )
}

export default withRedux(LoginPage)
