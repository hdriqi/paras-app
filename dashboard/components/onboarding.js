import React, { useState, useEffect } from 'react'
import { blockstackAPI, IdentifierAPI } from '../api'

const Onboarding = ({ 
	style,
	identifier, setIdentifer,
	name, setName, 
	description, setDescription, 
	avatarUrl, setAvatarUrl, 
	avatarFile, setAvatarFile, 
	accountList, setAccountList, 
	theme, setTheme,
	themeList, setThemeList,
	submit,
	submitState,
	showOnboarding,
	setShowOnboarding,
	logout
}) => {
	const [onboardingState, setOnboardingState] = useState('identifier')
	const [identifierAvailability, setIdentifierAvailability] = useState(true)
	const [identifierValid, setIdenfierValid] = useState(true)

	useEffect(() => {
		const init = async () => {
			if(blockstackAPI.session.isUserSignedIn()) {
				const getAuthData = await blockstackAPI.session.loadUserData()
				// set default username
				const userIdentifier = getAuthData.username.split('.')[0]
				setIdentifer(userIdentifier)
				
				// set default avatar
				const avatarExist = getAuthData.profile.image && getAuthData.profile.image.find(img => img.name === 'avatar')
				const avatarUrl = avatarExist ? avatarExist.contentUrl : `${process.env.APP_DOMAIN}/proxy?url=https://evius-industri-public.s3-ap-southeast-1.amazonaws.com/paras-rounded.png`
				setAvatarUrl(avatarUrl)

				// set default name
				setName(getAuthData.profile.name || userIdentifier)

				// set default description
				setDescription(getAuthData.profile.description || `You would be amaze if you know me`)
			}
		}
		init()
	}, [])

	const checkAndSetIdentifier = async (e) => {
		e.preventDefault()

		const idExist = await IdentifierAPI.fetchList({
			identifier: identifier
		})

		if(idExist.length > 0) {
			setIdentifierAvailability(false)
			setTimeout(() => {
				setIdentifierAvailability(true)
			}, 1000)
		}
		else {
			setOnboardingState('name')
		}
	}
	
	const readFileAsUrl = (file) => {
		const temporaryFileReader = new FileReader()
	
		return new Promise((resolve, reject) => {
			temporaryFileReader.onload = () => {
				resolve(temporaryFileReader.result)
			}
			temporaryFileReader.readAsDataURL(file)
		})
	}

	const updateAvatarUrl = async (files) => {
    if(files.length > 0) {
      const imgUrl = await readFileAsUrl(files[0])
      setAvatarUrl(imgUrl)
      setAvatarFile(files[0])
		}
	}
	
	const submitOnboarding = (e) => {
		e.preventDefault()

		submit(e, true)
	}

	const isSelectedTheme = (name) => {
		if(theme.name === name) {
			return true
		}
		return false
	}

	useEffect(() => {
		const regex = /^[a-z0-9]{4,32}$/g
		if(regex.test(identifier)) {
			setIdenfierValid(true)
		}
		else {
			setIdenfierValid(false)
		}
	}, [identifier])

	useEffect(() => {
		if(submitState === 'fulfilled') {
			setShowOnboarding(false)
		}
	}, [submitState])

	return (
		<React.Fragment>
			<style jsx>
				{
					`
					.lds-ring-container {
						display: flex;
					}
					.lds-ring {
						margin: auto;
						display: inline-block;
						width: 1.125rem;
						height: 1.125rem;
					}
					.lds-ring div {
						box-sizing: border-box;
						display: block;
						position: absolute;
						width: 1rem;
						height: 1rem;
						margin: 2px;
						border: 2px solid white;
						border-radius: 50%;
						animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
						border-color: white transparent transparent transparent;
					}
					.lds-ring div:nth-child(1) {
						animation-delay: -0.45s;
					}
					.lds-ring div:nth-child(2) {
						animation-delay: -0.3s;
					}
					.lds-ring div:nth-child(3) {
						animation-delay: -0.15s;
					}
					@keyframes lds-ring {
						0% {
							transform: rotate(0deg);
						}
						100% {
							transform: rotate(360deg);
						}
					}					
					`
				}
			</style>
			<div className="fixed bg-white inset-0 z-30">
				<div className="max-w-xs md:max-w-md p-4 pt-16 mt-16 m-auto w-full">
					<div className="mx-2 md:mx-8">
						{
							onboardingState === 'identifier' && (
								<div>
									<div className="mb-4">
										<p className="text-lg text-gray-800 font-semibold">Let's create your personal site!</p>
									</div>
									<p className="mb-2 text-lg text-gray-900 font-semibold">Set your site address</p>
									<form onSubmit={(e) => checkAndSetIdentifier(e)}  >
										<div className="mb-4">
											<div className="mb-1 px-3 py-1 flex border-solid border rounded-sm border-gray-300 justify-between">
												<input placeholder="username" className="flex-grow focus:outline-none w-full" type="text" value={identifier} onChange={(e) => setIdentifer(e.target.value)} />
												<label className="text-gray-600">.paras.id</label>
											</div>
											<p className="text-xs italic text-gray-600">Alphanumeric with min. 4 chars & max. 32 chars</p>
										</div>
										<button disabled={!identifierValid} type="submit" className="w-full bg-gray-900 text-white border-solid border-2 rounded-lg border-gray-900 px-4 py-1 text-sm" style={{
											opacity: identifierValid ? `100%` : `30%`
										}}>
											{identifierAvailability ? 'Next' : 'Already Taken'}
										</button>
									</form>
								</div>
							)
						}
						{
							onboardingState === 'name' && (
								<div>
									<div className="mb-4">
										<div onClick={() => setOnboardingState('identifier')} className="inline-flex items-center cursor-pointer">
											<svg className="mr-4" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path fillRule="evenodd" clipRule="evenodd" d="M11.707 13.2929L10.2928 14.7071L3.58569 8.00001L10.2928 1.29291L11.707 2.70712L6.41412 8.00001L11.707 13.2929Z" fill="black"/>
											</svg>
											<p className="text-lg text-gray-800 font-semibold">Back</p>
										</div>
									</div>
									<p className="mb-2 text-lg text-gray-900 font-semibold">Tell us your name</p>
									<form onSubmit={(e) => {
										e.preventDefault()

										setOnboardingState('description')
									}} >
										<div className="mb-8">
											<div className="px-3 py-1 flex flex-col border-solid border rounded-sm border-gray-300">
												<label className="text-xs font-light text-gray-600">Name</label>
												<input placeholder="Your name" className="focus:outline-none" type="text" value={name} onChange={(e) => setName(e.target.value)} />
											</div>
										</div>
										<button type="submit" className="w-full bg-gray-900 text-white border-solid border-2 rounded-lg border-gray-900 px-4 py-1 text-sm">
											Next
										</button>
									</form>
								</div>
							)
						}
						{
							onboardingState === 'description' && (
								<div>
									<div className="mb-4">
										<div onClick={() => setOnboardingState('name')} className="inline-flex items-center cursor-pointer">
											<svg className="mr-4" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path fillRule="evenodd" clipRule="evenodd" d="M11.707 13.2929L10.2928 14.7071L3.58569 8.00001L10.2928 1.29291L11.707 2.70712L6.41412 8.00001L11.707 13.2929Z" fill="black"/>
											</svg>
											<p className="text-lg text-gray-800 font-semibold">Back</p>
										</div>
									</div>
									<p className="mb-2 text-lg text-gray-900 font-semibold">Tell the world about yourself</p>
									<form onSubmit={(e) => {
										e.preventDefault()

										setOnboardingState('avatar')
									}} >
										<div className="mb-4">
											<div className="px-3 py-1 flex flex-col border-solid border rounded-sm border-gray-300">
												<label className="text-xs font-light text-gray-600">Description</label>
												<textarea placeholder="Tell the world about yourself" rows={8} className="focus:outline-none resize-none" value={description} onChange={(e) => setDescription(e.target.value)} />
											</div>
										</div>
										<button type="submit" className="w-full bg-gray-900 text-white border-solid border-2 rounded-lg border-gray-900 px-4 py-1 text-sm">
											Next
										</button>
									</form>
								</div>
							)
						}
						{
							onboardingState === 'avatar' && (
								<div>
									<div className="mb-4">
										<div onClick={() => setOnboardingState('description')} className="inline-flex items-center cursor-pointer">
											<svg className="mr-4" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path fillRule="evenodd" clipRule="evenodd" d="M11.707 13.2929L10.2928 14.7071L3.58569 8.00001L10.2928 1.29291L11.707 2.70712L6.41412 8.00001L11.707 13.2929Z" fill="black"/>
											</svg>
											<p className="text-lg text-gray-800 font-semibold">Back</p>
										</div>
									</div>
									<p className="mb-2 text-lg text-gray-900 font-semibold">Select image that represent yourself</p>
									<form onSubmit={(e) => {
										e.preventDefault()

										setOnboardingState('theme')
									}} >
										<div className="mb-4">
											<div className="relative">
												<div className="border-solid border rounded-sm border-gray-300" style={{
													height: `200px`,
													width: `100%`,
													backgroundSize: `cover`,
													backgroundPosition: `center`,
													backgroundImage: `url(${avatarUrl})`
												}}>
													<div className="h-full w-full flex items-center justify-center" style={{
														backgroundColor: `rgba(0,0,0,0.5)`
													}}>
														<div className="relative">
														<svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
															<path fillRule="evenodd" clipRule="evenodd" d="M6.93702 5.84538C7.00787 5.74688 7.08656 5.62631 7.18689 5.46372C7.22356 5.40431 7.32355 5.23934 7.39799 5.11653L7.4818 4.97841C8.31079 3.62239 8.91339 3 10 3H15V5H10C9.91327 5 9.6405 5.28172 9.1882 6.02159L9.11542 6.14154L9.11524 6.14183C9.04019 6.26566 8.93096 6.44589 8.88887 6.51409C8.76592 6.71332 8.66375 6.86988 8.56061 7.01326C8.11237 7.63641 7.66434 8 7 8H4C3.44772 8 3 8.44772 3 9V18C3 18.5523 3.44772 19 4 19H20C20.5523 19 21 18.5523 21 18V12H23V18C23 19.6569 21.6569 21 20 21H4C2.34315 21 1 19.6569 1 18V9C1 7.34315 2.34315 6 4 6H6.8162C6.84949 5.96194 6.8903 5.91033 6.93702 5.84538ZM17 8V6H19V4H21V6H23V8H21V10H19V8H17ZM12 18C9.23858 18 7 15.7614 7 13C7 10.2386 9.23858 8 12 8C14.7614 8 17 10.2386 17 13C17 15.7614 14.7614 18 12 18ZM12 16C13.6569 16 15 14.6569 15 13C15 11.3431 13.6569 10 12 10C10.3431 10 9 11.3431 9 13C9 14.6569 10.3431 16 12 16Z" fill="white"/>
														</svg>
															<input className="absolute cursor-pointer inset-0 opacity-0 w-full" type="file" accept="image/*" onChange={(e) => updateAvatarUrl(e.target.files)} />
														</div>
													</div>
												</div>
											</div>
										</div>
										<button type="submit" className="w-full bg-gray-900 text-white border-solid border-2 rounded-lg border-gray-900 px-4 py-1 text-sm">
											Next
										</button>
									</form>
								</div>
							)
						}
						{
							onboardingState === 'theme' && (
								<div>
									<div className="mb-4">
										<div onClick={() => setOnboardingState('avatar')} className="inline-flex items-center cursor-pointer">
											<svg className="mr-4" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path fillRule="evenodd" clipRule="evenodd" d="M11.707 13.2929L10.2928 14.7071L3.58569 8.00001L10.2928 1.29291L11.707 2.70712L6.41412 8.00001L11.707 13.2929Z" fill="black"/>
											</svg>
											<p className="text-lg text-gray-800 font-semibold">Back</p>
										</div>
									</div>
									<p className="mb-2 text-lg text-gray-900 font-semibold">Select your theme</p>
									<form onSubmit={(e) => {
										e.preventDefault()

										setOnboardingState('done')
									}} >
										<div className="flex flex-no-wrap mb-4 overflow-x-scroll">
											{
												themeList.map(theme => {
													return (
														<div className="mr-4" key={theme.name} style={{
															minWidth: `200px`
														}}>
															{/* onclick change theme */}
															<div className="cursor-pointer" onClick={() => setTheme(theme)}>
																<label>{theme.name}</label>
																<div className="relative border-solid border rounded-sm border-gray-300" style={{
																	height: `200px`,
																	width: `100%`,
																	backgroundSize: `cover`,
																	backgroundPosition: `center`,
																	backgroundImage: `url(${theme.thumbnail})`
																}}>
																	{ isSelectedTheme(theme.name) && (
																		<div className="absolute inset-0 flex items-center justify-center" style={{
																			backgroundColor: `rgba(0,0,0,0.3)`,
																		}}>
																			<p className="text-gray-200">Selected</p>
																		</div>
																	)}
																</div>
															</div>
														</div>
													)
												})
											}
										</div>
										<button onClick={(e) => submitOnboarding(e)} disabled={!theme} type="submit" className="w-full bg-gray-900 text-white border-solid border-2 rounded-lg border-gray-900 px-4 py-1 text-sm"  style={{
											opacity: theme ? `100%` : `30%`
										}}>
											{ submitState === 'pending' && (
												<div className="inline-flex">
													<p className="text-sm mr-2">Saving</p>
													<div className="lds-ring-container">
														<div className="lds-ring"><div></div><div></div><div></div><div></div></div>
													</div>
												</div>
											)}
											{
												submitState === 'fulfilled' && (
													<p className="text-sm">Website successfully created</p>
												)
											}
											{
												submitState === '' && (
													<p className="text-sm">Create my website</p>
												)
											}
											{
												submitState === 'rejected' && (
													<p className="text-sm">Failed</p>
												)
											}
										</button>
									</form>
								</div>
							)
						}
					</div>
				</div>
			</div>
		</React.Fragment>
	)
}

export default Onboarding