import React from 'react'
import Link from 'next/link'

const Nav = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-20 bg-white border-solid border-b border-gray-300">
			<div className="md:max-w-4xl xl:max-w-6xl m-auto">
				<div className="flex items-center justify-between">
					<Link href="/">
						<a href="#home" className="px-4 py-4">
							Paras
						</a>
					</Link>
					<div className="flex">
						{/* <a className="hidden md:inline-block mr-4 py-2" href="#features">
							Features
						</a>
						<a className="hidden md:inline-block mr-4 py-2" href="#discover">
							Discover
						</a> */}
						<Link href="/login">
							<p className="cursor-pointer font-medium px-4 py-4 bg-gray-900 text-white">
								Create your site
							</p>
						</Link>
					</div>
				</div>
			</div>
		</nav>
  )
}

export default Nav