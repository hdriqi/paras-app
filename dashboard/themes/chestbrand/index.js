import React from 'react'

// powerbreeze theme
// author evius industri

const Home = ({ParasLink, data}) => {
  return (
	  <div className="flex items-center min-h-screen w-full">
      <div className="flex items-center w-full max-w-4xl m-auto">
        <div className="flex flex-wrap w-full m-auto">
          <div className="w-full md:w-1/2">
            <div className="flex items-center justify-center relative">
              <div className="absolute bottom-0 left-0 right-0 h-12">
                <div className="flex h-full items-center md:px-0">
                  <div className="flex flex-wrap m-auto">
                    {
                      data.profile.accountList.map((account, idx) => {
                        return (
                          <div key={idx} className="">
                            <a className="border-0" target="_blank" href={`https://${account.service}.com/${account.identifier}`}>
                              <i className={`icofont-${account.service} text-lg m-2 md:mr-4 bg-white border-1 p-2 rounded-full `}></i>
                            </a>
                          </div>
                        )
                      })
                    }
                  </div>
                </div>
              </div>
              <div className="block md:hidden" style={{
                width: `100vw`,
                height: `100vh`,
                backgroundPosition: `center`,
                backgroundSize: `cover`,
                backgroundImage: `url(${data.profile.avatarUrl})`
              }}></div>
              <div className="hidden md:block" style={{
                width: `100%`,
                height: `100vh`,
                backgroundPosition: `center`,
                backgroundSize: `cover`,
                backgroundImage: `url(${data.profile.avatarUrl})`
              }}></div>
            </div>
          </div>
          <div className="w-full md:w-1/2 p-8 flex items-center">
            <div className=" text-center md:text-left">
              <h2 className="text-4xl heading tracking-wide font-bold">{data.profile.name}</h2>
              <p className="mt-2 text-gray-900">{data.profile.descriptionHtml}</p>
            </div>
          </div>
        </div>
      </div>
	  </div>
  )
}

export default Home