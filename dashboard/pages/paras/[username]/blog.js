import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'

import ParasBlog from '../../../components/parasBlog'
import ParasHead from '../../../components/parasHead'

import axios from 'axios'

const Blog = ({ data, query }) => {
  return (
    <div>
      <ParasHead data={data} />
      <ParasBlog data={data} />
    </div>
  )
}

Blog.getInitialProps = async (context) => {
  const { username } = context.query
  const response = await axios.get(`${process.env.APP_DOMAIN}/api/users/${username}`)
  return {
    data: response.data.data
  }
}

export default Blog