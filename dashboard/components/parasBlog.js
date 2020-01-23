import React from 'react'
import dynamic from 'next/dynamic'

import ParasLink from './parasLink'

const Blog = ({data, preview, setPreviewPath}) => {
  if(!data.profile.theme) {
    data.profile.theme = 'powerbreeze'
  }
  const Theme = dynamic(() => import(`../themes/${data.profile.theme}/blog`))

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