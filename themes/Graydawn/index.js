import React from 'react'

const Home = ({ParasLink, data}) => {
  console.log(data)
  return (
	  <div className="py-8 px-4">
      <nav className="flex max-w-md m-auto">
        <div className="w-1/2 text-center">
          <ParasLink path="/">Home</ParasLink>
        </div>
        <div className="w-1/2 text-center">
          <ParasLink path="/blog">Blog</ParasLink>
        </div>
      </nav>
      <div className="m-auto">
        <div className="mt-16 m-auto">
          <div className="m-auto" style={{
            height: `160px`,
            width: `160px`,
            backgroundImage: `url(${data.avatarUrl})`,
            backgroundSize: `cover`,
            backgroundPosition: `center`,
            borderRadius: `50%`
          }}>
          </div>
          <div className="mt-3 text-center mw-4">
            <h2>{data.name}</h2>
            <h4 className="mt-1">{data.description}</h4>
          </div>
        </div>
        <div className="flex flex-wrap mt-32 max-w-sm m-auto">
          {
            data.accountList.map((account) => {
              return (
                <div className="flex-1 w-1/3 text-center">
                  <h5><a target="_blank" href={account.url}>/{account.service}</a></h5>
                </div>
              )
            })
          }
        </div>
      </div>
      {/* <div style="margin: 0 1.5rem"></div> */}
        {/* <div class="footer text-center">
          <div class="margin-auto mw-small">
            <div class="flex mt-2">
              {{#each accountList}}
                <div class="flex-child w-third">
                  <h5><a target="_blank" href="https://{{service}}.com/{{identifier}}">/{{service}}</a></h5>
                </div>  
              {{/each}}
            </div>
            <div class="mt-2 mb-3">
              <h5>(c) {{name}};</h5>
            </div>
          </div>
        </div> */}
      {/* </div> */}
	  </div>
  )
}

export default Home