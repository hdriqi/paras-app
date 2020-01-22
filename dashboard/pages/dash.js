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

import { saveAuthData, saveUserId } from '../actions/auth'
import { saveProfileData } from '../actions/profile'
import { blockstackAPI, IdentifierAPI, themeAPI } from '../api'
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
	const [identifier, setIdentifier] = useState('')
	const [submitState, setSubmitState] = useState('')
	const [loadingState, setLoadingState] = useState(true)
	const [previewPath, setPreviewPath] = useState('/')
	const [previewData, setPreviewData] = useState({})

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
				avatarUrl: avatarUrl,
				accountList: accountList,
				theme: theme
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
			if(!profile.avatarUrl.includes('paras.id')) {
				profile.avatarUrl = `${process.env.APP_DOMAIN}/proxy?url=${profile.avatarUrl}`
			}
			setAvatarUrl(profile.avatarUrl)
		}
		if(profile.theme) {
			const cloneTheme = JSON.parse(JSON.stringify(profile.theme))
			setTheme(cloneTheme)
		}
	}, [profile])

	useEffect(() => {
		const currentData = JSON.parse(JSON.stringify({
			name: name,
			description: description,
			avatarUrl: avatarUrl,
			accountList: accountList,
			theme: theme.name && theme.name.toLowerCase()
		}))
		if(currentData.description) {
			currentData.description = anchorme(currentData.description, {
				attributes: [
					{
						name:"target",
						value:"_blank"
					}
				]
			})
		}
		setPreviewData(currentData)
	}, [theme, name, description, avatarUrl, accountList])

	const toggleProfileSidebar = () => {
		setShowProfileSidebar(!showProfileSidebar)
	}

	const ThemeHead = dynamic(() => import(`../themes/graydawn/head`))

	const Preview = () => {
		switch (previewPath) {
			case '/': 
				return <ParasHome preview={true} setPreviewPath={setPreviewPath} data={previewData} />
			case '/blog': 
				return <ParasBlog preview={true} setPreviewPath={setPreviewPath} data={previewData} />
			default: 
				return <ParasHome preview={true} setPreviewPath={setPreviewPath}/>
		}
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
				theme={theme}
				setTheme={setTheme}
				themeList={themeList}
				submit={submit}
				submitState={submitState}
				showProfileSidebar={showProfileSidebar}
				toggleProfileSidebar={toggleProfileSidebar}
				logout={logout}
			/>

			<Frame className="w-screen" head={<ThemeHead />} style={{
				height: `calc(100vh - 70px)`
			}}>
				<Preview />
			</Frame>
		</Layout>
	)
}

export default withRedux(Dashboard)