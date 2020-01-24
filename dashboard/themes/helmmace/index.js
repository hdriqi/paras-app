import React from 'react'

// powerbreeze theme
// author evius industri

const Home = ({ParasLink, data}) => {
  return (
	  <div className="flex items-center min-h-screen w-full">
      {/* <nav className="flex max-w-4xl m-auto p-4">
        <div className="mr-8">
          <ParasLink path="/">Home</ParasLink>
        </div>
        <div className="">
          <ParasLink path="/blog">Blog</ParasLink>
        </div>
      </nav> */}
      <div className="flex flex-wrap w-full max-w-4xl py-24 m-auto">
        <div className="flex w-full md:w-2/6 p-4">
          <div style={{
            borderColor: data.profile.themeColor || '#111111'
          }} className="flex items-center m-auto border-2 rounded-full h-48 w-48 lg:h-56 lg:w-56 " >
            <div style={{
              backgroundPosition: `center`,
              backgroundSize: `cover`,
              backgroundImage: `url(${data.profile.avatarUrl})`
            }} className="h-40 w-40 lg:h-48 lg:w-48 shadow-lg rounded-full m-auto"></div>
          </div>
        </div>
        <div className="w-full md:w-4/6 p-4 lg:pl-8 flex items-center">
          <div className="w-full">
            <div>
              <p style={{
                color: data.profile.themeColor || '#111111'
              }} className="text-4xl uppercase tracking-wide text-center md:text-left">{data.profile.name}</p>
            </div>
            <div className="mt-4">
              <p className="text-lg text-center md:text-left text-gray-800">{data.profile.descriptionHtml}</p>
            </div>
            <div className="flex flex-wrap mt-8 justify-center md:justify-start">
              {
                data.profile.accountList.map((account, idx) => {
                  return (
                    <div style={{
                      borderColor: data.profile.themeColor || '#111111'
                    }} key={idx} className="flex items-center justify-center border-2 rounded-full w-10 h-10 mx-2 md:mr-4">
                      <a className="social border-0" target="_blank" href={`https://${account.service}.com/${account.identifier}`}>
                        <i style={{
                          color: data.profile.themeColor || '#111111'
                        }} className={`icofont-${account.service} text-2xl`}></i>
                      </a>
                    </div>
                  )
                })
              }
            </div>
          </div>
        </div>
      </div>
      <style>
        {
          `
          a::after {
            transition: all .2s;
          }
          
          a:not(.social) {
            position: relative;
          }
          
          a:not(.social)::after {
            content: "";
            position: absolute;
            width: 100%;
            height: 20%;
            left: 0;
            bottom: 0;
            background: ${data.profile.themeColor || `#111111`};
            opacity: 0.1;
            z-index: -1;
          }
          
          a:not(.social):hover::after {
            opacity: 0.3;
          }
          `
        }
      </style>
	  </div>
  )
}

export default Home