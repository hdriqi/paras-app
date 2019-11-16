import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension'

import auth from './reducers/auth'
import profile from './reducers/profile'
import theme from './reducers/theme'

const initialState = {}

const reducer = combineReducers({
  auth: auth,
  profile: profile,
  theme: theme
})

export const initializeStore = (preloadedState = initialState) => {
  return createStore(
    reducer,
    preloadedState,
    composeWithDevTools(applyMiddleware(thunk, logger))
  )
}