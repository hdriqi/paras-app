import React from 'react'

const Home = ({ParasLink, data}) => {
  return (
	  <div className="max-w-4xl m-auto py-8 px-4">
      {/* <nav className="flex max-w-md m-auto">
        <div className="w-1/2 text-center">
          <ParasLink path="/">Home</ParasLink>
        </div>
        <div className="w-1/2 text-center">
          <ParasLink path="/blog">Blog</ParasLink>
        </div>
      </nav> */}
      <div className="m-auto">
        <div className="mt-16 m-auto">
          <div className="m-auto" style={{
            height: `160px`,
            width: `160px`,
            backgroundImage: `url(${data.profile.avatarUrl})`,
            backgroundSize: `cover`,
            backgroundPosition: `center`,
            borderRadius: `50%`
          }}>
          </div>
          <div className="mt-8 text-center mw-4">
            <h2 className="text-3xl text-gray-900 font-bold">{data.profile.name}</h2>
            <h4 className="text-lg mt-1 text-gray-700">{data.profile.descriptionHtml}</h4>
          </div>
        </div>
        <div className="flex flex-wrap mt-32 max-w-sm m-auto">
          {
            data.profile.accountList.map((account, idx) => {
              return (
                <div key={idx} className="flex-1 w-1/3 text-center">
                  <h5 className="text-base">
                    <a className="font-bold" target="_blank" href={`https://${account.service}.com/${account.identifier}`}>
                      /{account.service}
                    </a>
                  </h5>
                </div>
              )
            })
          }
        </div>
      </div>
      <style>
        {
        ` body {
            background: white;
            font-family: Nanum Gothic Coding;
          }
          a {
            cursor: pointer;
            font-weight: 600;
            color: ${data.profile.themeColor || '#111111'};
            opacity: 0.8;
          }
          
          a:hover {
            font-weight: 600;
            color: ${data.profile.themeColor || '#111111'};
          }
        `
        }
      </style>
	  </div>
  )
}

export default Home