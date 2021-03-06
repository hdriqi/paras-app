import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import Head from 'next/head'
import { useRouter } from 'next/router'

import { withRedux } from '../lib/redux'
import { saveAuthData } from '../actions/auth'
import { blockstackAPI } from '../api'
import { User } from 'radiks'

import Layout from '../components/layout'
import Login from '../components/login'
import LandingNav from '../components/landingNav'

const LoginPage = () => {
  const dispatch = useDispatch()
  const router = useRouter()
  const [loginState, setLoginState] = useState('')
	
	useEffect(() => {
		const checkAuthData = async () => {
      if(blockstackAPI.session.isUserSignedIn()) {
        setLoginState('pending')
        const authData = blockstackAPI.session.loadUserData()
        if(authData.username) {
          await User.createWithCurrentUser()
          dispatch(saveAuthData(authData))
          router.push('/dash') 
        }
        else {
          alert('Please setup your username on https://browser.blockstack.org/profiles')
          await blockstackAPI.session.signUserOut()
          setLoginState('')
        }
      }
			else if(blockstackAPI.session.isSignInPending()) {
        setLoginState('pending')
        const authData = await blockstackAPI.session.handlePendingSignIn()
        if(authData.username) {
          await User.createWithCurrentUser()
          dispatch(saveAuthData(authData))
          router.push('/dash') 
        }
        else {
          alert('Please setup your username on https://browser.blockstack.org/profiles')
          await blockstackAPI.session.signUserOut()
          setLoginState('')
        }
			}
		}
		checkAuthData()
  }, [])
  
  return (
    <Layout>
      <Head>
        <title>Login | Paras</title>
      </Head>

      <LandingNav />
      <Login loginState={loginState} />
    </Layout>
  )
}

export default withRedux(LoginPage)
