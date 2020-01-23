import React from 'react'
import dynamic from 'next/dynamic'

import ParasLink from './parasLink'

const Home = React.memo(({data, preview, setPreviewPath}) => {
  // check user theme

  if(!data.profile.theme) {
    data.profile.theme = 'powerbreeze'
  }
  if(!data.profile.accountList) {
    data.profile.accountList = []
  }
  const Theme = dynamic(() => import(`../themes/${data.profile.theme}`))

  return (
	  <div>
      <Theme ParasLink={ParasLink({ 
        preview: preview,
        setPreviewPath: setPreviewPath,
        data: data
       })} data={data} />
	  </div>
  )
})

export default Home