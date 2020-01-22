import React from 'react'

// powerbreeze theme
// author evius industri

const Home = ({ParasLink, data}) => {
  return (
	  <div className="px-4 min-h-screen">
      <nav className="flex max-w-3xl m-auto p-4">
        <div className="mr-8">
          <ParasLink path="/">Home</ParasLink>
        </div>
        <div className="">
          <ParasLink path="/blog">Blog</ParasLink>
        </div>
      </nav>
      <div className="flex items-center max-w-3xl mt-20 m-auto">
        <div className="flex flex-wrap w-full m-auto">
          <div className="w-full md:w-1/2 p-4">
            <div>
              ABOUT ME
            </div>
            <div>
              <p className="text-4xl uppercase tracking-wide">Hello,</p>
              <p className="text-4xl uppercase tracking-wide">I'm {data.name}</p>
            </div>
          </div>
          <div className="w-full md:w-1/2 p-4">
            <div>
              <div style={{
                width: `160px`,
                height: `160px`,
                backgroundPosition: `center`,
                backgroundSize: `cover`,
                backgroundImage: `url(${data.avatarUrl})`
              }}></div>
              <div className="mt-4">
                <p>{data.description}</p>
              </div>
              <div className="flex flex-wrap mt-4">
                {
                  data.accountList.map((account, idx) => {
                    return (
                      <div key={idx} className="">
                        <a target="_blank" href={account.url}>
                          <i className={`icofont-${account.service} text-2xl mr-4 `}></i>
                        </a>
                      </div>
                    )
                  })
                }
              </div>
            </div>
          </div>
        </div>
      </div>
	  </div>
  )
}

export default Home