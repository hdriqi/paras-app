import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import stringify from 'fast-json-stable-stringify'

import { saveProfileData } from '../actions/profile'

const Sidebar = ({ 
	style,
	name, setName, 
	description, setDescription, 
	avatarUrl, setAvatarUrl, 
	avatarFile, setAvatarFile, 
	accountList, setAccountList, 
	theme, setTheme,
	themeList, setThemeList,
	submit,
	submitState,
	showProfileSidebar,
	toggleProfileSidebar
}) => {
	const dispatch = useDispatch()
	const profile = useSelector(state => state.profile)
	const [showNestedSidebar, setShowNestedSidebar] = useState('')

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
		// else if data is changed, alert user to save or discard their change
		else {
			const x = confirm('There are some changed data that are not saved')
			if(x) {
				dispatch(saveProfileData(profile))
				setShowNestedSidebar(false)
			}
		}
	}

	const setUserAccount = (service, identifier) => {
		const idx = accountList.findIndex(acc => acc.service === service)
		// if identifier is an empty string remove idx
		if(identifier.length === 0) {
			const newAccountList = accountList.slice(0)
			newAccountList.splice(idx, 1)

			setAccountList(newAccountList)
		}
		else {
			// update the data is service already exist
			if(idx >= 0) {
				const newAccountList = accountList.slice(0)
				newAccountList[idx].identifier = identifier
	
				setAccountList(newAccountList)
			}
			// create the data is service not exist
			else {
				const newAccountList = accountList.slice(0)
				newAccountList.push({
					service: service,
					identifier: identifier
				})
	
				setAccountList(newAccountList)
			}
		}
	}

	const getAccount = (service) => {
		const idx = accountList.findIndex(acc => acc.service === service)
		if(idx >= 0) {
			return accountList[idx].identifier
		}
		return ''
	}

	const isSelectedTheme = (name) => {
		if(theme.name === name) {
			return true
		}
		return false
	}

	return (
		<React.Fragment>
			<style jsx>
				{
					`
					.lds-ring-container {
						display: flex;
					}
					.lds-ring {
						margin-left: auto;
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
						border: 2px solid #4299e1;
						border-radius: 50%;
						animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
						border-color: #4299e1 transparent transparent transparent;
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
			<div className="fixed top-0 right-0 bottom-0 w-10/12 md:w-4/12 lg:w-3/12 bg-white shadow-xl" style={{
				transform: `translate3d(${showProfileSidebar ? 0 : `100%`}, 0, 0)`,
				transition: `all .3s`
			}}>
				{
					showProfileSidebar && (
						<div className="absolute z-10 bg-black rounded-full p-2" onClick={() => toggleProfileSidebar()} style={{
							width: `32px`,
							height: `32px`,
							left: `-16px`,
							top: `16px`
						}} >
							<svg width="100%" height="100%" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path fillRule="evenodd" clipRule="evenodd" d="M16.0002 18.8285L7.41436 27.4142L4.58594 24.5858L13.1717 16L4.58594 7.41424L7.41436 4.58582L16.0002 13.1716L24.5859 4.58582L27.4144 7.41424L18.8286 16L27.4144 24.5858L24.5859 27.4142L16.0002 18.8285V18.8285Z" fill="white"/>
							</svg>
						</div>
					)
				}
				<div className="relative h-full w-full overflow-x-hidden">
					<div className="absolute top-0 right-0 bottom-0 w-full bg-white py-12 md:py-16 px-4" style={{
						transform: `translate3d(${!showNestedSidebar ? 0 : `-100%`}, 0, 0)`,
						transition: `all .3s`
					}}>
						<div className="flex items-center py-2">
							<p className="text-2xl text-gray-900 font-semibold">Edit Your Site</p>
						</div>
						<div className="py-2 max-h-full overflow-y-scroll">
							<div onClick={() => setShowNestedSidebar('profile')} className="cursor-pointer h-12 flex items-center justify-between border-solid border-b border-gray-300">
								<p className="text-lg text-gray-800 w-1/2 font-medium">Profile </p>
								<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path fill="#a0aec0" fillRule="evenodd" clipRule="evenodd" d="M9.58586 8.00001L4.29297 2.70712L5.70718 1.29291L12.4143 8.00001L5.70718 14.7071L4.29297 13.2929L9.58586 8.00001Z"/>
								</svg>
							</div>
							<div onClick={() => setShowNestedSidebar('social')}  className="cursor-pointer h-12 flex items-center justify-between border-solid border-b border-gray-300">
								<p className="text-lg text-gray-800 w-1/2 font-medium">Social</p>
								<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path fill="#a0aec0" fillRule="evenodd" clipRule="evenodd" d="M9.58586 8.00001L4.29297 2.70712L5.70718 1.29291L12.4143 8.00001L5.70718 14.7071L4.29297 13.2929L9.58586 8.00001Z"/>
								</svg>
							</div>
							<div onClick={() => setShowNestedSidebar('theme')}  className="cursor-pointer h-12 flex items-center justify-between border-solid border-b border-gray-300">
								<p className="text-lg text-gray-800 w-1/2 font-medium">Theme</p>
								<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path fill="#a0aec0" fillRule="evenodd" clipRule="evenodd" d="M9.58586 8.00001L4.29297 2.70712L5.70718 1.29291L12.4143 8.00001L5.70718 14.7071L4.29297 13.2929L9.58586 8.00001Z"/>
								</svg>
							</div>
						</div>
					</div>
					<div className="absolute top-0 right-0 bottom-0 w-full bg-white py-12 md:py-16 px-4" style={{
						transform: `translate3d(${showNestedSidebar ? 0 : `100%`}, 0, 0)`,
						transition: `all .3s`
					}}>
						<div className="flex items-center max-h-full overflow-y-scroll border-solid border-b border-gray-300 py-2">
							<div className="w-1/3" onClick={() => back()}>
								<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path fillRule="evenodd" clipRule="evenodd" d="M11.707 13.2929L10.2928 14.7071L3.58569 8.00001L10.2928 1.29291L11.707 2.70712L6.41412 8.00001L11.707 13.2929Z" fill="black"/>
								</svg>
							</div>
							<div className="w-1/3 text-center" >
								<p className="text-lg text-gray-800 font-semibold capitalize">{showNestedSidebar}</p>
							</div>
							<div className="w-1/3 text-right" onClick={(e) => submit(e)}>
								{ submitState === 'pending' && (
									<div className="lds-ring-container">
										<div className="lds-ring"><div></div><div></div><div></div><div></div></div>
									</div>
								)}
								{
									submitState === 'fulfilled' && (
										<p className="text-lg text-blue-500 font-medium capitalize">Saved</p>
									)
								}
								{
									submitState === '' && (
										<p className="text-lg text-blue-500 font-medium capitalize">Save</p>
									)
								}
							</div>
						</div>
						{
							showNestedSidebar === 'profile' && (
								<div className="py-2 max-h-full overflow-y-scroll">
									<div className="mb-4">
										<div className="relative">
											<label>Avatar</label>
											<input className="absolute inset-0 opacity-0 w-full" type="file" onChange={(e) => updateAvatarUrl(e.target.files)} />
											<div className="border-solid border rounded-sm border-gray-300" style={{
												height: `200px`,
												width: `100%`,
												backgroundSize: `cover`,
												backgroundPosition: `center`,
												backgroundImage: `url(${avatarUrl})`
											}}></div>
										</div>
									</div>
									<div className="mb-4">
										<div className="px-3 py-1 flex flex-col border-solid border rounded-sm border-gray-300">
											<label className="text-xs font-light text-gray-600">Name</label>
											<input placeholder="Your name" className="focus:outline-none" type="text" value={name} onChange={(e) => setName(e.target.value)} />
										</div>
									</div>
									<div className="mb-4">
										<div className="px-3 py-1 flex flex-col border-solid border rounded-sm border-gray-300">
											<label className="text-xs font-light text-gray-600">Description</label>
											<textarea placeholder="Tell the world about yourself" rows={8} className="focus:outline-none resize-none" value={description} onChange={(e) => setDescription(e.target.value)} />
										</div>
									</div>
								</div>
							)
						}
						{
							showNestedSidebar === 'social' && (
								<div className="py-2 max-h-full overflow-y-scroll">
									<div className="mb-4">
										<div className="px-3 py-1 flex flex-col border-solid border rounded-sm border-gray-300">
											<label className="text-xs font-light text-gray-600">facebook.com/</label>
											<input placeholder="username" className="focus:outline-none" type="text" value={getAccount('facebook')} onChange={(e) => setUserAccount('facebook', e.target.value)} />
										</div>
									</div>
									<div className="mb-4">
										<div className="px-3 py-1 flex flex-col border-solid border rounded-sm border-gray-300">
											<label className="text-xs font-light text-gray-600">twitter.com/</label>
											<input placeholder="username" className="focus:outline-none" type="text" value={getAccount('twitter')} onChange={(e) => setUserAccount('twitter', e.target.value)} />
										</div>
									</div>
									<div className="mb-4">
										<div className="px-3 py-1 flex flex-col border-solid border rounded-sm border-gray-300">
											<label className="text-xs font-light text-gray-600">instagram.com/</label>
											<input placeholder="username" className="focus:outline-none" type="text" value={getAccount('instagram')} onChange={(e) => setUserAccount('instagram', e.target.value)} />
										</div>
									</div>
								</div>
							)
						}
						{
							showNestedSidebar === 'theme' && (
								<div className="overflow-y-scroll max-h-full py-2 max-h-full overflow-y-scroll">
									{
										themeList.map(theme => {
											return (
												<div className="mb-4" key={theme.name}>
													{/* onclick change theme */}
													<div onClick={() => setTheme(theme)}>
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
							)
						}
					</div>
				</div>
			</div>
		</React.Fragment>
	)
}

export default Sidebar
			