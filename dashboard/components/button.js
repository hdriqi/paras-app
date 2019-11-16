const Button = (props) => (
	<button 
		className="button" 
		{...props}
	>
		{props.text}
    
		<style jsx>{`
      .button {
				margin: 0;
				border: 0;
				padding: 8px 16px;
				min-width: 160px;
				color: white;
				background-color: #1A494F;
				border-radius: 4px;
			}
    `}</style>
  </button>
)

export default Button