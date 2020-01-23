import React, { useEffect, useState } from 'react'
import Head from 'next/head'

import ParasHome from '../../../components/parasHome'
import ParasHead from '../../../components/parasHead'

import axios from 'axios'

const Home = ({ data, query }) => {
  // console.log(data)
  // const [d, setD] = useState({})
  // const router = useRouter()
  // const { username } = router.query

  // fetch user data, render with parasHome component
  // useEffect(() => {
  //   const main = async () => {
  //     const response = await axios.get(`/api/users/${username}`)
  //     if(response.data.data) {
  //       setD(response.data.data.profile)
  //     }
  //   }

  //   main()
  // }, [])

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

Home.getInitialProps = async (context) => {
  const { username } = context.query
  const response = await axios.get(`${process.env.APP_DOMAIN}/api/users/${username}`)
  return {
    data: response.data.data
  }
}

export default Home