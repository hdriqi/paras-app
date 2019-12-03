import Head from 'next/head'

const Layout = ({ children }) => (
  <div>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel='icon' href={`${process.env.APP_DOMAIN}/favicon.ico`} />
      <meta charSet="utf-8" />
			<link href="/tailwind.min.css" rel="stylesheet"></link>
    </Head>
    <style jsx global>
      {
        `
        @import url('/inter.css');
        html { font-family: 'Inter', sans-serif; }
        body { margin: 0; padding: 0; }
        input, textarea { font-family: 'Inter', sans-serif; }
        `
      }
    </style>
		{ children }
  </div>
)

export default Layout