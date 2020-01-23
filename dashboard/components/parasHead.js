import React from 'react'
import dynamic from 'next/dynamic'

const Head = ({ data }) => {
  // check user theme
  if(!data.profile.theme) {
    data.profile.theme = 'powerbreeze'
  }
  const Theme = dynamic(() => import(`../themes/${data.profile.theme}/head`))

  return (
	  <Theme />
  )
}

export default Head