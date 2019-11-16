import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useDispatch, useSelector } from 'react-redux'

import { withRedux } from '../lib/redux'
import Meta from '../components/meta'
import { blockstackAPI } from '../api'
import axios from 'axios'
import anchorme from 'anchorme'
import handlebars from 'handlebars'

const Home = ({ profile }) => {
	profile.description = anchorme(profile.description, {
		attributes: [
			{
				name:"target",
				value:"_blank"
			}
		]
	})

  return (
    <div>
      <Head>
        <title>{profile.name}</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Meta />
			
			<div dangerouslySetInnerHTML={{
				__html: handlebars.compile(profile.theme.html)(profile)
			}}></div>
    </div>
  )
}

Home.getInitialProps = async ({ reduxStore }) => {
	const profileUrl = await blockstackAPI.default.getUserAppFileUrl('profile.json', 'albariqi.id.blockstack', 'http://localhost:4000')
	let profileData = {}
	try {
		profileData = await axios.get(profileUrl)
		console.log('Registered')
	} catch (err) {
		console.log('Not registered')
	}
	
	return {
		profile: profileData.data
	}
}

export default withRedux(Home)
