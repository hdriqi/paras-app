import { SAVE_AUTH_DATA, SAVE_USER_SESSION } from '../actions/auth'

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
    default:
      return state
  }
}

export default reducer