import React from 'react'
import Head from 'next/head'

import Layout from '../components/layout'

const NotFoundPage = () => {
  return (
    <Layout>
      <Head>
        <title>404 Not Found | Paras</title>
      </Head>
			<div className="w-screen h-screen p-4 bg-gray-900">
				<div className="flex w-full h-full items-center justify-center">
					<div className="login text-center">
						<div className="mb-16">
							<div className="w-24 mb-4 m-auto">
							<svg width="100%" height="100%" viewBox="0 0 132 88" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path fillRule="evenodd" clipRule="evenodd" d="M9.42857 88H21.7826L18.6398 63.8393C31.8075 65.7381 59.7143 66.5107 66 54.4107C72.2857 66.5107 100.193 65.7381 113.36 63.8393L110.217 88H122.571L132 0L97.5282 9.42857C85.9712 12.3095 66 21.45 66 34.9643C66 21.45 46.0288 12.3095 34.4718 9.42857L0 0L9.42857 88ZM17.2855 11.5714C29.8569 14.7143 56.5712 26.0286 62.8569 46.1428C56.1796 56.1584 42.8534 55.8304 34.4321 55.6231C33.34 55.5963 32.3305 55.5714 31.4286 55.5714C14.1429 55.5714 16.5829 14.2815 17.2855 11.5714ZM114.715 11.5714C102.143 14.7143 75.4289 26.0286 69.1432 46.1428C75.8204 56.1584 89.1467 55.8304 97.568 55.6231C98.66 55.5963 99.6695 55.5714 100.571 55.5714C117.857 55.5714 115.417 14.2815 114.715 11.5714Z" fill="white"/>
							</svg>
							</div>
							<p className="text-3xl text-white font-semibold">Page not Found</p>
						</div>
						<a className="text-lg font-medium text-white" href={`${process.env.APP_DOMAIN}`}>
							Back to Paras
						</a>
					</div>
				</div>
			</div>
    </Layout>
  )
}

export default NotFoundPage