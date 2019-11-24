import React, { useEffect, useState } from 'react'
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

import { saveAuthData, saveUserId } from '../actions/auth'
import { saveProfileData } from '../actions/profile'
import { blockstackAPI, IdentifierAPI, themeAPI } from '../api'
import anchorme from 'anchorme'
import handlebars from 'handlebars'

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
  const [template, setTemplate] = useState('')
  const [submitState, setSubmitState] = useState('')
  const [loadingState, setLoadingState] = useState(true)

  const authData = useSelector(state => state.auth.authData)
  const profile = useSelector(state => state.profile)

  const [showProfileSidebar, setShowProfileSidebar] = useState(false)
  const [showOnboarding, setShowOnboarding] = useState(true)

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
        newProfile.avatarUrl = newAvatarUrl
      }

      if(onboarding) {
        const newData = {
          identifier: identifier,
          blockstackId: authData.username,
          profile: newProfile
        }
        const newId = new IdentifierAPI(newData)
        await newId.save()
        dispatch(saveUserId(identifier))
      }
      else {
        const newId = await IdentifierAPI.findOne({
          identifier: identifier
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
		const checkAuthData = async () => {
      if(blockstackAPI.session.isUserSignedIn()) {
        if(!authData) {
          const getAuthData = await blockstackAPI.session.loadUserData()
          dispatch(saveAuthData(getAuthData))
        }

        const id = await IdentifierAPI.findOne({
          identifier: identifier
        })
    
        if(id) {
          setShowOnboarding(false)
          dispatch(saveProfileData(id.attrs.profile))
          dispatch(saveUserId(id.attrs.identifier))
        }
        setTimeout(() => {
          setLoadingState(false)
        }, 500)
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
      accountList: accountList
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
  
    if(theme) {
      const path = 'index'
      const page = theme.templatePage.find(page => page.path === path)
      const compiled = handlebars.compile(page.template || '')(currentData)
      setTemplate(compiled)
    }
  }, [theme, name, description, avatarUrl, accountList])

  const toggleProfileSidebar = () => {
    setShowProfileSidebar(!showProfileSidebar)
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

      <Frame className="w-screen" style={{
        height: `calc(100vh - 2.5rem)`
      }}>
        <div dangerouslySetInnerHTML={{
          __html: template
        }}></div>
      </Frame>
    </Layout>
  )
}

export default withRedux(Dashboard)