import React from 'react'

const Text = (props) => {
	const { type, children, style } = props

	switch(type) {
		case 'h1':
			return (
				<React.Fragment>
					<h1 style={style}>{children}</h1>

					<style jsx>{`
						h1 {
							margin: 0;
							padding: 0;
							font-style: normal;
							font-weight: normal;
							font-size: 80px;
							line-height: 112px;
						}
					`}</style>
				</React.Fragment>
			)
		case 'h2':
			return (
				<React.Fragment>
					<h2 style={style}>{children}</h2>
					
					<style jsx>{`
						h2 {
							margin: 0;
							padding: 0;
							font-style: normal;
							font-weight: normal;
							font-size: 40px;
							line-height: 56px;
						}
					`}</style>
				</React.Fragment>
			)
		case 'h3':
			return (
				<React.Fragment>
					<h3 style={style}>{children}</h3>
					
					<style jsx>{`
						h3 {
							margin: 0;
							padding: 0;
							font-style: normal;
							font-weight: normal;
							font-size: 30px;
							line-height: 42px;
						}
					`}</style>
				</React.Fragment>
			)
		case 'h4':
			return (
				<React.Fragment>
					<h4 style={style}>{children}</h4>
					
					<style jsx>{`
						h4 {
							margin: 0;
							padding: 0;
							font-style: normal;
							font-weight: normal;
							font-size: 24px;
							line-height: 34px;
						}
					`}</style>
				</React.Fragment>
			)
		case 'h5':
			return (
				<React.Fragment>
					<h5 style={style}>{children}</h5>
					
					<style jsx>{`
						h5 {
							margin: 0;
							padding: 0;
							font-style: normal;
							font-weight: normal;
							font-size: 20px;
							line-height: 28px;
						}
					`}</style>
				</React.Fragment>
			)
		case 'p1':
			return (
				<React.Fragment>
					<p style={style}>{children}</p>
					
					<style jsx>{`
						p {
							margin: 0;
							padding: 0;
							font-style: normal;
							font-weight: normal;
							font-size: 16px;
							line-height: 22px;
							letter-spacing: -0.0001em;
						}
					`}</style>
				</React.Fragment>
			)
		case 'p2':
			return (
				<React.Fragment>
					<p style={style}>{children}</p>
					
					<style jsx>{`
						p {
							margin: 0;
							padding: 0;
							font-style: normal;
							font-weight: normal;
							font-size: 14px;
							line-height: 20px;
						}
					`}</style>
				</React.Fragment>
			)
		case 'p3':
			return (
				<React.Fragment>
					<p style={style}>{children}</p>
					
					<style jsx>{`
						p {
							margin: 0;
							padding: 0;
							font-style: normal;
							font-weight: normal;
							font-size: 12px;
							line-height: 17px;
						}
					`}</style>
				</React.Fragment>
			)
		case 'p4':
			return (
				<React.Fragment>
					<p style={style}>{children}</p>
					
					<style jsx>{`
						p {
							margin: 0;
							padding: 0;
							font-style: normal;
							font-weight: normal;
							font-size: 10px;
							line-height: 14px;
						}
					`}</style>
				</React.Fragment>
			)
		default:
			return (
				<React.Fragment>
					<p style={style}>{children}</p>
					
					<style jsx>{`
						p {
							margin: 0;
							padding: 0;
							font-style: normal;
							font-weight: normal;
							font-size: 16px;
							line-height: 22px;
							letter-spacing: -0.0001em;
						}
					`}</style>
				</React.Fragment>
			)
	}

	// return (
	// 	<button 
	// 		className="button" 
	// 		{...props}
	// 	>
	// 		{props.text}
			
	// 		<style jsx>{`
	// 			.button {
	// 				margin: 0;
	// 				border: 0;
	// 				padding: 8px 16px;
	// 				min-width: 160px;
	// 				color: white;
	// 				background-color: #1A494F;
	// 				border-radius: 4px;
	// 			}
	// 		`}</style>
	// 	</button>
	// )
}

export default Text