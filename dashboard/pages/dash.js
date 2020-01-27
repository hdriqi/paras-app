import React, { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useDispatch, useSelector } from 'react-redux'
import Frame from 'react-frame-component'

import { withRedux } from '../lib/redux'
import Layout from '../components/layout'
import Nav from '../components/nav'
import Sidebar from '../components/sidebar'
import LoggedIn from '../components/loggedIn'
import Onboarding from '../components/onboarding'
import Loading from '../components/loading'
import ParasHome from '../components/parasHome'
import ParasBlog from '../components/parasBlog'
import Modal from '../components/modal'

import { saveAuthData, saveUserId } from '../actions/auth'
import { saveProfileData } from '../actions/profile'
import { blockstackAPI, IdentifierAPI, themeAPI } from '../api'
import { User } from 'radiks'
import anchorme from 'anchorme'

const readFileAsBuffer = (file) => {
	const temporaryFileReader = new FileReader()

	return new Promise((resolve, reject) => {
		temporaryFileReader.onload = () => {
			resolve(temporaryFileReader.result)
		}
		temporaryFileReader.readAsArrayBuffer(file)
	})
}



const PreviewHead = React.memo(({ theme }) => {
	const ThemeHead = dynamic(() => import(`../themes/${theme || 'powerbreeze'}/head`))
	return (
		<ThemeHead />
	)
})

const Preview = React.memo(({ previewPath, setPreviewPath, previewData }) => {
	switch (previewPath) {
		case '/': 
			return (
				<React.Fragment>
					<PreviewHead theme={previewData.profile.theme} />
					<ParasHome preview={true} setPreviewPath={setPreviewPath} data={previewData} />
				</React.Fragment>
			)
		case '/blog': 
			return (
				<React.Fragment>
					<ParasBlog preview={true} setPreviewPath={setPreviewPath} data={previewData} />
				</React.Fragment>
			)
		default: 
			return (
				<React.Fragment>
					<ParasHome preview={true} setPreviewPath={setPreviewPath} data={previewData} />
				</React.Fragment>
			)
	}
})

const Dashboard = () => {
	const dispatch = useDispatch()
	const router = useRouter()
	const [name, setName] = useState('')
	const [description, setDescription] = useState('')
	const [avatarUrl, setAvatarUrl] = useState('')
	const [avatarFile, setAvatarFile] = useState('')
	const [accountList, setAccountList] = useState([])
	const [themeList, setThemeList] = useState([])
	const [theme, setTheme] = useState('')
	const [themeColor, setThemeColor] = useState('')
	const [identifier, setIdentifier] = useState('')
	const [submitState, setSubmitState] = useState('')
	const [loadingState, setLoadingState] = useState(true)
	const [previewPath, setPreviewPath] = useState('/')
	const [previewData, setPreviewData] = useState({
		profile: {},
		posts: []
	})

	const [avatarCropUrl, setAvatarCropUrl] = useState('')
	const [showAvatarCropModal, setShowAvatarCropModal] = useState(false)

	const authData = useSelector(state => state.auth.authData)
	const parasUrl = useSelector(state => state.auth.identifier) 
	const profile = useSelector(state => state.profile)

	const [showProfileSidebar, setShowProfileSidebar] = useState(false)
	const [showOnboarding, setShowOnboarding] = useState(false)

	const logout = async () => {
		await blockstackAPI.session.signUserOut()
		dispatch(saveAuthData(null))
	}

	const submit = async (e, onboarding) => {
		e.preventDefault()

		setSubmitState('pending')

		try {
			const newProfile = {
				name: name,
				description: description,
				descriptionHtml: anchorme(description, {
					attributes: [
						{
							name:"target",
							value:"_blank"
						}
					]
				}),
				avatarUrl: avatarUrl,
				accountList: accountList,
				theme: theme,
				themeColor: themeColor || `#111111`
			}
			if(avatarFile) {
				const buff = await readFileAsBuffer(avatarFile)
				const newAvatarUrl = await blockstackAPI.session.putFile('avatar.png', buff, {
					encrypt: false
				})
				newProfile.avatarUrl = `${process.env.APP_DOMAIN}/proxy?url=${newAvatarUrl}`
			}

			if(onboarding) {
				const newData = {
					identifier: identifier,
					identityAddress: authData.identityAddress,
					profile: newProfile
				}
				const newId = new IdentifierAPI(newData)
				await User.createWithCurrentUser()
				await newId.save()
				dispatch(saveUserId(identifier))
			}
			else {
				const newId = await IdentifierAPI.findOne({
					identifier: parasUrl
				})
				newId.update({
					profile: newProfile
				})
				await User.createWithCurrentUser()
				await newId.save()	
			}
	
			dispatch(saveProfileData(newProfile))
			setSubmitState('fulfilled')
		} catch (err) {
			setSubmitState('rejected')
		}
		setTimeout(() => {
			setSubmitState('')
		}, 1000)
	}

	useEffect(() => {
		const getInitialData = async () => {
			let id = null
			if(authData && authData.identityAddress) {
				id = await IdentifierAPI.findOne({
					identityAddress: authData.identityAddress
				})
			}

			if(id) {
				setShowOnboarding(false)
				dispatch(saveProfileData(id.attrs.profile))
				dispatch(saveUserId(id.attrs.identifier))
			}
			else {
				setShowOnboarding(true)
			}
	
			setTimeout(() => {
				setLoadingState(false)
			}, 1000)
		}
		
		getInitialData()
	}, [authData])

	useEffect(() => {
		const checkAuthData = async () => {
			if(blockstackAPI.session.isUserSignedIn()) {
				let getAuthData = null
				if(!authData) {
					getAuthData = await blockstackAPI.session.loadUserData()
					dispatch(saveAuthData(getAuthData))
				}
			}
			else {
				router.replace('/login')
			}
		}
		checkAuthData()
		
		const fetchThemeList = async () => {
			const response = await themeAPI.fetch()
			setThemeList(response.data.data)
		}
		fetchThemeList()
	}, [])

	useEffect(() => {
		if(profile.name) {
			setName(profile.name)
		}
		if(profile.description) {
			setDescription(profile.description)
		}
		if(Array.isArray(profile.accountList)) {
			const cloneAccountList = JSON.parse(JSON.stringify(profile.accountList))
			setAccountList(cloneAccountList)
		}
		if(profile.avatarUrl) {
			if(!profile.avatarUrl.includes(process.env.APP_DOMAIN)) {
				profile.avatarUrl = `${process.env.APP_DOMAIN}/proxy?url=${profile.avatarUrl}`
			}
			setAvatarUrl(profile.avatarUrl)
		}
		if(profile.themeColor) {
			setThemeColor(profile.themeColor || '#111111')
		}
		if(profile.theme) {
			const cloneTheme = JSON.parse(JSON.stringify(profile.theme))
			if(themeList.indexOf(cloneTheme) === -1) {
				setTheme('powerbreeze')
			}
			else {
				setTheme(cloneTheme)
			}
		}
	}, [profile])

	useEffect(() => {
		const currentData = JSON.parse(JSON.stringify({
			name: name,
			description: description,
			avatarUrl: avatarUrl,
			accountList: accountList,
			theme: theme,
			themeColor: themeColor
		}))
		if(currentData.description) {
			currentData.descriptionHtml = anchorme(currentData.description, {
				attributes: [
					{
						name:"target",
						value:"_blank"
					}
				]
			})
		}

		setPreviewData({
			profile: currentData
		})
	}, [theme, themeColor, name, description, avatarUrl, accountList])

	const toggleProfileSidebar = () => {
		setShowProfileSidebar(!showProfileSidebar)
	}

	let cropper = null
	useEffect(() => {
		if(typeof window !== 'undefined' && showAvatarCropModal === true) {
			const Croppie  = require('croppie')
			cropper = new Croppie(document.getElementById('sidebar-avatar'), {
				boundary: { width: `100%`, height: 256 },
				viewport: { width: 200, height: 200, type: 'square' }
			})
		}
	}, [showAvatarCropModal])

	const readFileAsUrl = (file) => {
		const temporaryFileReader = new FileReader()
	
		return new Promise((resolve, reject) => {
			temporaryFileReader.onload = () => {
				resolve(temporaryFileReader.result)
			}
			temporaryFileReader.readAsDataURL(file)
		})
	}

	const updateAvatar = async () => {
		const result = await cropper.result({ 
			type: 'blob',
			size: {
				width: 512,
				height: 512
			}
		})
		result.lastModifiedDate = new Date()
		result.name = `avatar.png`
		const imgUrl = await readFileAsUrl(result)
		setAvatarUrl(imgUrl)
		setAvatarFile(result)
		setShowAvatarCropModal(false)
	}

	const closeAvatarCropModal = () => {
		setShowAvatarCropModal(false)
	}

	return (
		<Layout>
			<Head>
				<title>Dashboard | Paras</title>
			</Head>

			<LoggedIn />
			{
				loadingState && (
					<Loading />
				)
			}

			<Nav toggleProfileSidebar={toggleProfileSidebar} />

			{
				showOnboarding && (
					<Onboarding
						identifier={identifier}
						setIdentifer={setIdentifier}
						name={name}
						setName={setName} 
						description={description}
						setDescription={setDescription} 
						accountList={accountList}
						setAccountList={setAccountList}
						avatarUrl={avatarUrl}
						setAvatarUrl={setAvatarUrl}
						avatarFile={avatarFile}
						setAvatarFile={setAvatarFile}  
						setAvatarCropUrl={setAvatarCropUrl}
						setShowAvatarCropModal={setShowAvatarCropModal}
						theme={theme}
						setTheme={setTheme}
						themeList={themeList}
						submit={submit}
						submitState={submitState}
						showOnboarding={showOnboarding}
						setShowOnboarding={setShowOnboarding}
					/>
				)
			}

			<Sidebar 
				name={name}
				setName={setName} 
				description={description}
				setDescription={setDescription} 
				accountList={accountList}
				setAccountList={setAccountList}
				avatarUrl={avatarUrl}
				setAvatarUrl={setAvatarUrl}
				avatarFile={avatarFile}
				setAvatarFile={setAvatarFile} 
				setAvatarCropUrl={setAvatarCropUrl}
				setShowAvatarCropModal={setShowAvatarCropModal}
				theme={theme}
				setTheme={setTheme}
				themeColor={themeColor}
				setThemeColor={setThemeColor}
				themeList={themeList}
				submit={submit}
				submitState={submitState}
				showProfileSidebar={showProfileSidebar}
				toggleProfileSidebar={toggleProfileSidebar}
				logout={logout}
			/>

			<Frame sandbox="allow-scripts allow-same-origin allow-forms"  className="w-screen" style={{
				height: `calc(100vh - 70px)`
			}}>
				<Preview previewPath={previewPath} setPreviewPath={setPreviewPath} previewData={previewData} />
			</Frame>
			{
				showAvatarCropModal && (
					<Modal closeModal={() => closeAvatarCropModal(false)}>
						<div className="max-w-xs md:max-w-md p-4 pt-16 m-auto w-full">
							<div className="bg-white p-4 rounded-lg">
								<div className="flex flex-col">
									<div className="w-full">
										<img id="sidebar-avatar" style={{
											width: `200px`,
											height: `200px`
										}} src={avatarCropUrl} />
									</div>
									<div className="w-full flex  justify-end">
										<button className="font-semibold mr-4 border-solid border-2 rounded-lg border-gray-900 px-4 py-1 text-sm" onClick={() => closeAvatarCropModal(false)}>Cancel</button>
										<button className="bg-gray-900 text-white border-solid border-2 rounded-lg border-gray-900 px-4 py-1 text-sm" onClick={() => { updateAvatar() }}>Save</button>
									</div>
								</div>
							</div>
						</div>
					</Modal>
				)
			}
		</Layout>
	)
}

export default withRedux(Dashboard)