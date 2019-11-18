import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useDispatch, useSelector } from 'react-redux'
import Frame from 'react-frame-component'

import { withRedux } from '../lib/redux'
import Layout from '../components/layout'
import Meta from '../components/meta'
import Nav from '../components/nav'
import Sidebar from '../components/sidebar'
import LoggedIn from '../components/loggedIn'

import { saveAuthData } from '../actions/auth'
import { saveProfileData } from '../actions/profile'
import { blockstackAPI, IdentifierAPI } from '../api'
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
  const [template, setTemplate] = useState('')
  const [submitState, setSubmitState] = useState('')

  const authData = useSelector(state => state.auth.authData)
  const profile = useSelector(state => state.profile)

  const [showProfileSidebar, setShowProfileSidebar] = useState(false)

  const logout = async () => {
    await blockstackAPI.session.signUserOut()
    dispatch(saveAuthData(null))
  }

  const submit = async (e) => {
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
  
      await blockstackAPI.session.putFile('profile.json', JSON.stringify(newProfile), {
        encrypt: false
      })
  
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
      // await blockstackAPI.session.deleteFile('profile.json')
      if(blockstackAPI.session.isUserSignedIn()) {
        if(!authData) {
          const getAuthData = await blockstackAPI.session.loadUserData()
          dispatch(saveAuthData(getAuthData))
        }

        if(Object.keys(profile).length === 0) {
          const getProfile = await blockstackAPI.session.getFile('profile.json', {
            decrypt: false
          })

          if(getProfile) {
            const parsedProfile = JSON.parse(getProfile)
            dispatch(saveProfileData(parsedProfile))
          }
          else {
            const getAuthData = await blockstackAPI.session.loadUserData()
            // register new subdomain
            let userIdentifier = getAuthData.username.split('.')[0]
            const idExist = await IdentifierAPI.fetchList({
              name: userIdentifier
            })
            if(idExist.length > 0) {
              userIdentifier = `${userIdentifier}${Math.floor(Math.random() * (99 - 1 + 1)) + 1}`
            }
            const newData = {
              name: userIdentifier,
              blockstackId: getAuthData.username
            }
            const newId = new IdentifierAPI(newData)
            await newId.save()

            // create new user profile
            const avatarExist = getAuthData.profile.image.find(img => img.name === 'avatar') || {}
            
            // set default data
            let name = getAuthData.profile.name || ''
            let description = getAuthData.profile.description || ''
            let avatarUrl = avatarExist.contentUrl || ''
            let theme = {

            }
            
            const newProfile = {
              name: name,
              description: description,
              avatarUrl: avatarUrl,
              theme: theme,
              accountList: [],
            }
            await blockstackAPI.session.putFile('profile.json', JSON.stringify(newProfile), {
              encrypt: false
            })

            dispatch(saveProfileData(newProfile))
          }
        }
      }
      else {
        router.replace('/login')
      }
		}
    checkAuthData()
    
    const fetchThemeList = () => {
      setThemeList([{
        name: 'Esox',
        html: `
        <style>
          @import url("https://fonts.googleapis.com/css?family=Open+Sans&display=swap");
          body {
            margin: 0;
          }
          .container {
            min-width: 100vw;
            min-height: 100vh;
            font-family: "Open Sans", sans-serif;
            color: #282828;
            display: flex;
            background: #f8f8f8;
          }
          .content {
            display: flex;
            max-width: 768px;
            margin: auto;
            width: 100%;
          }
          .content-img {
            padding: 0 16px;
            align-items: center;
            justify-content: center;
            display: flex;
          }
          .content-text {
            padding: 0 16px;
            padding-left: 32px;
            justify-content: center;
            display: flex;
            flex-direction: column;
          }
          p.name {
            font-size: 36px;
            font-weight: 600;
            margin: 0;
            margin-bottom: 16px;
          }
          p.description {
            font-size: 16px;
            font-weight: 400;
            margin: 0;
            margin-bottom: 32px;
            white-space: pre-wrap;
            line-height: 1.5;
          }
          .avatar {
            border: solid 3px #282828;
            border-radius: 50%;
          }
          a {
            color: blue;
            text-decoration: none;
          }
          .social-list {
            display: flex;
          }
          .social {
            padding-right: 8px;
          }
        </style>
        <div class="container">
          <div class="content">
            <div class="content-img">
              <img class="avatar" height="200" width="200" src={{avatarUrl}} />
            </div>
            <div class="content-text">
              <p class="name">{{name}}</p>
              <p class="description">{{{description}}}</p>
              <div class="social-list">
                {{#each accountList}}
                  <a class="social" href="https://{{service}}.com/{{identifier}}" target="_blank">
                    {{service}}
                  </a>
                {{/each}}
              </div>
            </div>
          </div>
        </div>
        `
      }, {
        name: 'Test 2',
        html: `<html><body>{{name}} 2</body></html>`
      }, {
        name: 'Test 3',
        html: `<html><body>{{name}} 3</body></html>`
      }])
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
      const compiled = handlebars.compile(theme.html || '')(currentData)
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
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Meta />
      <LoggedIn />

      <Nav toggleProfileSidebar={toggleProfileSidebar} />

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