import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import stringify from 'fast-json-stable-stringify'
import { blockstackAPI, IdentifierAPI } from '../api'

import Modal from './modal'

import { saveProfileData } from '../actions/profile'

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
	const dispatch = useDispatch()
	const profile = useSelector(state => state.profile)
	const [onboardingState, setOnboardingState] = useState('identifier')
	const [identifierAvailability, setIdentifierAvailability] = useState(true)
	const [identifierValid, setIdenfierValid] = useState(true)

	useEffect(() => {
		const init = async () => {
			const getAuthData = await blockstackAPI.session.loadUserData()
			// set default username
			const userIdentifier = getAuthData.username.split('.')[0]
			setIdentifer(userIdentifier)
			
			// set default avatar
			const avatarExist = getAuthData.profile.image.find(img => img.name === 'avatar')
			const avatarUrl = avatarExist ? avatarExist.contentUrl : `data:image/jpeg;base64,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`
			setAvatarUrl(avatarUrl)

			// set default name
			setName(getAuthData.profile.name || userIdentifier)

			// set default description
			setDescription(getAuthData.profile.description || `You would be amaze if you know me`)

			// set default theme
			// setTheme()
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
		
		// const getAuthData = await blockstackAPI.session.loadUserData()
		// let userIdentifier = getAuthData.username.split('.')[0]
		// const idExist = await IdentifierAPI.fetchList({
		// 	name: userIdentifier
		// })
		// if(idExist.length > 0) {
		// 	userIdentifier = `${userIdentifier}${Math.floor(Math.random() * (99 - 1 + 1)) + 1}`
		// }
		const newData = {
			name: userIdentifier,
			blockstackId: getAuthData.username
		}
		const newId = new IdentifierAPI(newData)
		await newId.save()

		// // create new user profile
		// const avatarExist = getAuthData.profile.image.find(img => img.name === 'avatar') || {}
		
		// // set default data
		// let identifier = userIdentifier
		// let name = getAuthData.profile.name || userIdentifier
		// let description = getAuthData.profile.description || ''
		// let avatarUrl = avatarExist.contentUrl || ''
		// let theme = {

		// }
		
		// const newProfile = {
		// 	identifier: identifier,
		// 	name: name,
		// 	description: description,
		// 	avatarUrl: avatarUrl,
		// 	theme: theme,
		// 	accountList: [],
		// }
		// await blockstackAPI.session.putFile('profile.json', JSON.stringify(newProfile), {
		// 	encrypt: false
		// })

		// dispatch(saveProfileData(newProfile))
	}
	
	const submitOnboarding = (e) => {
		e.preventDefault()

		submit(e, true)
	}

	const back = () => {
		const newProfile = {
			name: name,
			description: description,
			avatarUrl: avatarUrl,
			accountList: accountList,
			theme: theme
		}
		// if data is not changed, allow user to navigate to main sidebar
		if(stringify(profile) === stringify(newProfile)) {
			setShowNestedSidebar(false)
		}
		// if data is changed, prompt confirmation window
		else {
			setShowConfirmModal(true)
		}
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
											<p className="text-xs italic text-gray-600">Minimal 4 characters & Maximum 32 characters</p>
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
															<input className="absolute cursor-pointer inset-0 opacity-0 w-full" type="file" onChange={(e) => updateAvatarUrl(e.target.files)} />
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
																	backgroundImage: `url(${avatarUrl})`
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