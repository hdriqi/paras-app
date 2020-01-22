import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import dynamic from 'next/dynamic'

import ParasLink from './parasLink'

const Blog = ({data, preview, setPreviewPath}) => {
  const router = useRouter()

  const Theme = dynamic(() => import(`../themes/graydawn/blog`))

  return (
	  <div>
      <Theme ParasLink={ParasLink({ 
        preview: preview,
        setPreviewPath: setPreviewPath
       })} data={data} />
	  </div>
  )
}

export default Blog