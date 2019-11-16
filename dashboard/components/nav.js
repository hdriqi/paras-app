import React from 'react'
import { useSelector } from 'react-redux'

let identifier = ''

const Nav = ({ toggleProfileSidebar }) => {
  const authData = useSelector(state => state.auth.authData)
  if(authData) {
    identifier = authData.username.split('.')[0]
  }

  return (
    <nav className="h-10 border-bottom">
      <div className="h-full w-full max-w-6xl relative mx-auto px-4">
        <ul className="h-full flex items-center justify-between">
          <li>
            <a className="text-blue-500 hover:text-blue-800">{identifier}.paras.id</a>
          </li>
          <li>
            <a onClick={() => toggleProfileSidebar()} className="text-blue-500 hover:text-blue-800">
            <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect y="9" width="20" height="2" fill="black"/>
            <rect width="16.6667" height="2" fill="black"/>
            <rect y="18.1177" width="13.3333" height="2" fill="black"/>
            </svg>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Nav
