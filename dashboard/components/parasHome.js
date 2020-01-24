import React from 'react'
import dynamic from 'next/dynamic'
import ReactHtmlParser from 'react-html-parser'

import ParasLink from './parasLink'

const Home = React.memo(({data, preview, setPreviewPath}) => {
  // check user theme
  if(!data.profile.theme) {
    data.profile.theme = 'powerbreeze'
  }
  if(!data.profile.descriptionHtml) {
    data.profile.descriptionHtml = data.profile.description
  }
  if(typeof window != 'undefined' && data.profile.descriptionHtml && typeof data.profile.descriptionHtml === 'string') {
    data.profile.descriptionHtml = ReactHtmlParser(data.profile.descriptionHtml)
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