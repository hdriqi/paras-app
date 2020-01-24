import React from 'react'

const Head = () => {
  return (
	  <React.Fragment>
      <link href={`/tailwind.min.css`} rel="stylesheet"></link>
      <style>
        {
          `
          /* [0] */
          @font-face {
            font-family: 'Nanum Gothic Coding';
            font-style: normal;
            font-weight: 400;
            src: local('NanumGothicCoding'), url(/static/themes/graydawn/assets/fonts/NanumGothicCoding-Regular.ttf) format('truetype');
          }
          
          `
        }
      </style>
    </React.Fragment>
  )
}

export default Head