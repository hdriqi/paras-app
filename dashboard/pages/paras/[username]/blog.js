import React from 'react'

const Blog = (data) => {
  // if preview then change link to setState
  return (
	  <div>
      <a href="/">Home</a>
			<a href="/blog" style={{
        color: 'red'
      }}>Blog</a>
      {/* <div>
        {data.profile.name}
      </div> */}
	  </div>
  )
}

export default Blog