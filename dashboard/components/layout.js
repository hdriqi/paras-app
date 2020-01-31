import Head from 'next/head'

const Layout = ({ children }) => (
  <div>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel='icon' href={`${process.env.APP_DOMAIN}/favicon.ico`} />
      <meta charSet="utf-8" />
			<link href={`${process.env.APP_DOMAIN}/tailwind.min.css`} rel="stylesheet"></link>
      <link href={`${process.env.APP_DOMAIN}/croppie.css`} rel="stylesheet"></link>
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
    <script async src={`${process.env.APP_DOMAIN}/ackee.js`} data-ackee-server="https://stat.paras.id" data-ackee-domain-id="fef11e6a-3d7c-4ede-bb9d-64f7b6ef32dc"></script>
  </div>
)

export default Layout