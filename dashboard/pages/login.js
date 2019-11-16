import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import Head from 'next/head'
import { useRouter } from 'next/router'

import { withRedux } from '../lib/redux'
import { saveAuthData } from '../actions/auth'
import { blockstackAPI } from '../api'

import Meta from '../components/meta'
import Login from '../components/login'

const LoginPage = () => {
  const dispatch = useDispatch()
  const router = useRouter()
	
	useEffect(() => {
    console.log('hmm')
    router.replace('/dash')
    router.push('/dash')

		// const checkAuthData = async () => {
    //   if(blockstackAPI.session.isUserSignedIn()) {
    //     const authData = blockstackAPI.session.loadUserData()
    //     dispatch(saveAuthData(authData))
    //     router.push('/dash')
    //   }
		// 	else if(blockstackAPI.session.isSignInPending()) {
    //     const authData = await blockstackAPI.session.handlePendingSignIn()
    //     dispatch(saveAuthData(authData))
    //     router.push('/dash')
		// 	}
		// }
		// checkAuthData()
  }, [])
  
  return (
    <div>
      <Head>
        <title>Login | Degree</title>
      </Head>
      <Meta />

      <Login />
    </div>
  )
}

export default withRedux(LoginPage)
