import React from 'react'
import Link from 'next/link'

const Nav = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-20 bg-white border-solid border-b border-gray-300">
			<div className="bg-gray-900">
				<div className="md:max-w-4xl xl:max-w-6xl m-auto text-center px-2 py-1">
					<p className="text-white">We are launching new concept of Paras. <br className="md:hidden"/> <a href="https://landing.paras.id" className="underline" target="_blank" >Learn more</a></p>
				</div>
			</div>
			<div className="md:max-w-4xl xl:max-w-6xl m-auto">
				<div className="flex items-center justify-between">
					<Link href="/">
						<a className="px-4 py-2 flex items-center">
							<div className="h-5 mr-2">
							<svg height="100%" viewBox="0 0 132 88" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M21.7826 88H9.42857L0 0L34.4718 9.42857C46.0288 12.3095 66 21.45 66 34.9643V54.4107C59.7143 66.5107 31.8075 65.7381 18.6398 63.8393L21.7826 88Z" fill="black"/>
<path d="M110.217 88H122.571L132 0L97.5282 9.42857C85.9712 12.3095 66 21.45 66 34.9643V54.4107C72.2857 66.5107 100.193 65.7381 113.36 63.8393L110.217 88Z" fill="black"/>
<path d="M69.1431 46.1428C75.4289 26.0286 102.143 14.7143 114.715 11.5714C115.417 14.2815 117.857 55.5714 100.571 55.5714C92.7146 55.5714 76.6863 57.4571 69.1431 46.1428Z" fill="white" stroke="black"/>
<path d="M62.8569 46.1428C56.5711 26.0286 29.8569 14.7143 17.2854 11.5714C16.5829 14.2815 14.1429 55.5714 31.4286 55.5714C39.2854 55.5714 55.3137 57.4571 62.8569 46.1428Z" fill="white" stroke="black"/>
</svg>

							</div>
							<p className="text-2xl text-gray-900 font-semibold" >
								Paras
							</p>
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