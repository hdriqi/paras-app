import React from 'react'

// powerbreeze theme
// author evius industri

const Home = ({ParasLink, data}) => {
  return (
	  <div className="flex items-center min-h-screen w-full">
      {/* <nav className="flex max-w-3xl m-auto p-4">
        <div className="mr-8">
          <ParasLink path="/">Home</ParasLink>
        </div>
        <div className="">
          <ParasLink path="/blog">Blog</ParasLink>
        </div>
      </nav> */}
      <div className="flex items-center max-w-3xl m-auto">
        <div className="flex flex-wrap w-full m-auto md:my-32 flex-col-reverse md:flex-row">
          <div className="w-full md:w-2/3 p-8 flex items-center">
            <div>
              <div className="relative">
                <div>
                  <h2 className="absolute heading z-0 text-5xl text-gray-200 font-bold" style={{
                    top: `-2rem`,
                    left: `-1rem`,
                    opacity: 0.6
                  }}>ABOUT ME</h2>
                  <h2 className="relative heading z-10 text-4xl uppercase tracking-wide font-bold">Hello,</h2>
                </div>
              </div>
              <h2 className="text-4xl heading uppercase tracking-wide font-bold">I'm {data.profile.name}</h2>
              <p className="text-gray-900">{data.profile.description}</p>
              <div className="flex flex-wrap mt-8 md:px-0">
                {
                  data.profile.accountList.map((account, idx) => {
                    return (
                      <div key={idx} className="">
                        <a target="_blank" href={`https://${account.service}.com/${account.identifier}`}>
                          <i className={`icofont-${account.service} text-2xl mr-4 text-white bg-gray-900 p-2 `}></i>
                        </a>
                      </div>
                    )
                  })
                }
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/3 pb-6">
            <div className="flex items-center justify-center">
              <div className="block md:hidden" style={{
                width: `100vw`,
                height: `100vw`,
                backgroundPosition: `center`,
                backgroundSize: `cover`,
                backgroundImage: `url(${data.profile.avatarUrl})`
              }}></div>
              <div className="hidden md:block" style={{
                width: `200px`,
                height: `200px`,
                backgroundPosition: `center`,
                backgroundSize: `cover`,
                backgroundImage: `url(${data.profile.avatarUrl})`
              }}></div>
            </div>
          </div>
        </div>
      </div>
	  </div>
  )
}

export default Home