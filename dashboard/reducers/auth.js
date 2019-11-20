import { SAVE_AUTH_DATA, SAVE_USER_SESSION, SAVE_USER_ID } from '../actions/auth'

const initialState = {}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_AUTH_DATA:
      return {
				...state,
				authData: action.authData
      }
    case SAVE_USER_SESSION:
      return {
        ...state,
        userSession: action.userSession
      }
    case SAVE_USER_ID:
      return {
        ...state,
        identifier: action.identifier
      }
    default:
      return state
  }
}

export default reducer