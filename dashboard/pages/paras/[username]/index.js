import React, { useEffect, useState } from 'react'
import Head from 'next/head'

import ParasHome from '../../../components/parasHome'
import ParasHead from '../../../components/parasHead'

import axios from 'axios'

const Home = ({ data }) => {
  return (
    <div>
      <ParasHead data={data} />
      <Head>
        <meta charset="utf-8" />
        <meta name="viewport" content="initial-scale=1, maximum-scale=1" />
        
        <meta property="og:type" content="website" />
        <meta property="og:title" content={ data.profile.name } />
        <meta property="og:description" content={ data.profile.description } />
        <meta property="og:image" content={ data.profile.avatarUrl } />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" value={ data.profile.name } />
        <meta name="twitter:description" value={ data.profile.description } />
        <meta name="twitter:image" content={ data.profile.avatarUrl } />

        <title>{ data.profile.name }</title>
        <meta name="description" content={ data.profile.description }></meta>
      </Head>
      <ParasHome data={data} />
    </div>
  )
}

Home.getInitialProps = async ({ req, query }) => {
  const { username } = query
  var host = (req ? req.headers.host : window.location.host)
  var protocol = /^localhost(:\d+)?$/.test(host) ? 'http:' : 'https:'
  const origin = protocol + '//' + host
  const response = await axios.get(`${process.env.APP_DOMAIN}/api/users/${username}`)
  const data = response.data.data
  if(!data.profile.avatarUrl.includes(origin)) {
    data.profile.avatarUrl = `${origin}/proxy?url=${data.profile.avatarUrl}`
  }
  return {
    data: data
  }
}

export default Home