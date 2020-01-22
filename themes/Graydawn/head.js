import React from 'react'

const Head = () => {
  return (
	  <head>
      <link href={`${process.env.APP_DOMAIN}/tailwind.min.css`} rel="stylesheet"></link>
      <style>
        {
          `
          /* [0] */
          @font-face {
            font-family: 'Nanum Gothic Coding';
            font-style: normal;
            font-weight: 400;
            src: local('NanumGothicCoding'), url(../assets/NanumGothicCoding-Regular.ttf) format('ttf');
            unicode-range: U+f9ca-fa0b, U+ff03-ff05, U+ff07, U+ff0a-ff0b, U+ff0d-ff19, U+ff1b, U+ff1d, U+ff20-ff5b, U+ff5d, U+ffe0-ffe3, U+ffe5-ffe6;
          }
          
          `
        }
      </style>
      <style>
        {
        ` body {
            background: white;
            font-family: Nanum Gothic Coding;
          }
          a {
            cursor: pointer;
          }
        `
        }
      </style>
    </head>
  )
}

export default Head