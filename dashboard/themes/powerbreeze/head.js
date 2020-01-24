import React from 'react'

const Head = ({ themeColor }) => {
  return (
	  <React.Fragment>
      <link href={`/tailwind.min.css`} rel="stylesheet"></link>
      <link href={`/static/themes/powerbreeze/assets/icofont.css`} rel="stylesheet"></link>
      <link href={`/static/themes/powerbreeze/assets/font.css`} rel="stylesheet"></link>
    </React.Fragment>
  )
}

export default Head