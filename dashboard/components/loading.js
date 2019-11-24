const Loading = () => {
	return (
		<div className="fixed inset-0 z-50 bg-white">
			<div className="flex h-full w-full items-center justify-center">
				<div>
					<div className="w-24 mb-4 m-auto">
						<svg style={{
							animation: `spin 2.5s ease-in-out infinite`
						}} width="100%" height="100%" viewBox="0 0 200 133" fill="black" xmlns="http://www.w3.org/2000/svg">
							<path fillRule="evenodd" clipRule="evenodd" d="M14.2857 133.333H33.004L28.2421 96.7262C48.1931 99.6032 90.4762 100.774 100 82.4405C109.524 100.774 151.807 99.6032 171.758 96.7262L166.996 133.333H185.714L200 0L147.77 14.2857C130.259 18.6508 100 32.5 100 52.9762C100 32.5 69.7406 18.6508 52.23 14.2857L0 0L14.2857 133.333ZM26.1901 17.5324C45.2377 22.2943 85.7139 39.4372 95.2377 69.9134C85.1207 85.0885 64.9293 84.5915 52.1698 84.2775C50.5152 84.2368 48.9856 84.1991 47.6192 84.1991C21.4286 84.1991 25.1256 21.6386 26.1901 17.5324ZM173.81 17.5325C154.762 22.2944 114.286 39.4372 104.762 69.9134C114.879 85.0885 135.071 84.5915 147.83 84.2775C149.485 84.2368 151.014 84.1991 152.381 84.1991C178.571 84.1991 174.874 21.6386 173.81 17.5325Z" />
						</svg>
					</div>
				</div>
			</div>
			<style>
				{
					`
					@keyframes spin { 
						0% { 
							-webkit-transform: rotateY(360deg); 
							transform:rotateY(360deg); 
						} 
					}
					`
				}
			</style>
		</div>
	)
}

export default Loading