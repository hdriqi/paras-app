import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'

import Layout from '../components/layout'
import LandingNav from '../components/landingNav'

const Home = () => {
	const [timeElapsed, setTimeElapsed] = useState(0)

	useEffect(() => {
		setTimeout(() => {
			setTimeElapsed(timeElapsed+1)
		}, 1000)
	}, [timeElapsed])

  return (
    <div>
      <Head>
        <title>Paras | Decentralized Personal Website</title>
				<meta name="description" content="Create your own personal website in a minute. Zero config. Zero fee. Zero headache."/>
      </Head>
			
			<Layout>
				<LandingNav />
				<div>
					<div id="home" className="flex flex-col md:flex-row items-center mb-24 md:max-w-4xl xl:max-w-6xl m-auto px-4" style={{
						minHeight: '90vh'
					}}>
						<div className="w-full pb-2 pt-24 text-center md:text-left md:pt-0 md:w-1/2">
							<p className="text-3xl text-gray-900 font-semibold mb-2">Your Decentralized Personal Website</p>
							<p className="text-xl text-gray-600">Create your own personal website in a minute.</p>
							<p className="text-xl text-gray-600 mb-8">Zero config. Zero fee. Zero headache.</p>
							<Link href="/login">
								<button className="bg-gray-900 text-white text-lg border-solid border-2 rounded-lg border-gray-900 px-4 py-1 font-medium">
									Create now
								</button>
							</Link>
						</div>
						<div className="w-full md:w-1/2 md:p-0">
							<img className="w-full" src="/hero2.png" />
						</div>
					</div>
					<div className="py-8 bg-gray-100 relative">
						<div className="absolute bg-gray-100" style={{
							transform: `skew(0, -3deg)`,
							height: `150px`,
							width: `100%`,
							zIndex: `-1`,
							top: `-75px`
						}}></div>
						<div className="max-w-2xl m-auto px-4">
							<p className="text-center text-lg text-gray-800 font-medium">
								Paras helps you to create personal landing page in just a minute, super fast without hassle. We strip out the complicated part of website builder, leaving only a few important options for you to set up your personal site.
							</p>
						</div>
						<div className="absolute bg-gray-100" style={{
							transform: `skew(0, -3deg)`,
							height: `150px`,
							width: `100%`,
							zIndex: `-1`,
							bottom: `-75px`
						}}></div>
					</div>
					<div id="features" className="py-32">
						<div>
							<div className="max-w-2xl m-auto flex flex-wrap items-center md:flex-row-reverse pb-8 px-4">
								<div className="w-full md:w-2/5 pb-4">
									<img src="/beauty.jpg" className="m-auto h-64"/>
								</div>
								<div className="w-full md:w-3/5">
									<p className="text-lg text-gray-900 font-semibold mb-2">Beauty by Default</p>
									<p className="text-lg text-gray-600">
										Website built on Paras guarantee to be modern, eye-catching and fully responsive.
										{/* Every theme built on Paras is modern, eye-catching and fully responsive. Means that no matter which device open your website, it will automatically adapts to the screen and present your beautiful website. */}
									</p>
								</div>
							</div>
							<div className="max-w-2xl m-auto flex flex-wrap items-center pb-8 px-4">
								<div className="w-full md:w-2/5 pb-4">
									<img src="/fast.jpg" className="m-auto h-64"/>
								</div>
								<div className="w-full md:w-3/5">
									<p className="text-lg text-gray-900 font-semibold mb-2">Fast at Everything</p>
									<p className="text-lg text-gray-600">
										Get your personal landing page in just a few seconds. It also load really fast!
										{/* Create your own personal landing page in just a minute, zero configuration needed! But that’s not the only thing we excel at, your website load will also be blazingly fast and SEO friendly. */}
									</p>
								</div>
							</div>
							<div className="max-w-2xl m-auto flex flex-wrap items-center md:flex-row-reverse pb-8 px-4">
								<div className="w-full md:w-2/5 pb-4">
									<img src="/secure.jpg" className="m-auto h-64"/>
								</div>
								<div className="w-full md:w-3/5">
									<p className="text-lg text-gray-900 font-semibold mb-2">Decentralized Data Ownership</p>
									<p className="text-lg text-gray-600">
										Paras leverage decentralized tech so you can totally own your website data.
										{/* By leveraging decentralized data storage by Blockstack, your website will be stored in decentralized manner which means you fully own your data and your website can work even without our service. */}
									</p>
								</div>
							</div>
						</div>
					</div>
					<div className="pt-16 bg-gray-900 relative">
						<div className="absolute bg-gray-900" style={{
							transform: `skew(0, -3deg)`,
							height: `200px`,
							width: `100%`,
							zIndex: `-1`,
							top: `-100px`
						}}></div>
						<div className="max-w-2xl m-auto px-4">
							<p className="text-lg text-white font-medium mb-8 text-center">
								Alright you already spend {timeElapsed} secs on this page, in the next 60 secs we better use it to create your own personal website. Only a minute and we’re done.
							</p>
							<div className="text-center">
								<Link href="/login">
									<button className="text-lg bg-white text-gray-900 border-solid border-2 rounded-lg border-white px-4 py-1 font-semibold">
										Let's Get It Done!
									</button>
								</Link>
							</div>
						</div>
						<div className="md:max-w-4xl xl:max-w-6xl m-auto px-4 py-4 mt-32">
							<div>
								<p className="text-center text-lg text-gray-400 font-medium mb-4">Paras © 2019</p>
							</div>
						</div>
					</div>
				</div>
			</Layout>
    </div>
  )
}

export default Home
