import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import dynamic from 'next/dynamic'

import ParasLink from './parasLink'

const Home = ({data, preview, setPreviewPath}) => {
  // check user theme
  const Theme = dynamic(() => import(`../themes/helmmace`))

  return (
	  <div>
      <Theme ParasLink={ParasLink({ 
        preview: preview,
        setPreviewPath: setPreviewPath,
        data: data
       })} data={data} />
	  </div>
  )
}

export default Home