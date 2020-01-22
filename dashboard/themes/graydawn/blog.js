import React from 'react'

const Blog = ({ParasLink, profile}) => {
  return (
	  <div>
      <ParasLink path="/">Home</ParasLink>
      <ParasLink path="/blog">Blog</ParasLink>
      {/* <a onClick={() => parasLink('/')}>Home</a>
			<a onClick={() => parasLink('/blog')}>Blog</a> */}
      <div>
        {/* {profile.name} */}
      </div>
	  </div>
  )
}

export default Blog