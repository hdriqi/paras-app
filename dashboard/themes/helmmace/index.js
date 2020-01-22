import React from 'react'

// powerbreeze theme
// author evius industri

const Home = ({ParasLink, data}) => {
  return (
	  <div className="min-h-screen">
      <nav className="flex max-w-4xl m-auto p-4">
        <div className="mr-8">
          <ParasLink path="/">Home</ParasLink>
        </div>
        <div className="">
          <ParasLink path="/blog">Blog</ParasLink>
        </div>
      </nav>
      <div className="flex flex-wrap max-w-4xl mt-20 m-auto">
        <div className="w-full md:w-2/6 p-4">
          <div className="flex items-center m-auto border-2 rounded-full h-48 w-48 lg:h-56 lg:w-56 " >
            <div style={{
              backgroundPosition: `center`,
              backgroundSize: `cover`,
              backgroundImage: `url(${data.avatarUrl})`
            }} className="h-40 w-40 lg:h-48 lg:w-48 shadow-lg rounded-full m-auto">

            </div>
          </div>
        </div>
        <div className="w-full md:w-4/6 p-4 lg:pl-8">
            <div>
              <p className="text-4xl uppercase tracking-wide text-center md:text-left">{data.name}</p>
            </div>
            <div className="mt-6">
              <p className="text-center md:text-left">{data.description}</p>
            </div>
            <div className="flex flex-wrap mt-6 justify-center md:justify-start">
              {
                data.accountList.map((account, idx) => {
                  return (
                    <div key={idx} className="flex items-center justify-center border-2 rounded-full w-10 h-10 mr-4">
                      <a target="_blank" href={account.url}>
                        <i className={`icofont-${account.service} text-2xl`}></i>
                      </a>
                    </div>
                  )
                })
              }
            </div>
        </div>
      </div>
	  </div>
  )
}

export default Home