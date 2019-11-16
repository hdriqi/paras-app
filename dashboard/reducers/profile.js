import { SAVE_PROFILE_DATA } from '../actions/profile'

const initialState = {}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_PROFILE_DATA:
      return {
				...state,
				...action.profile
      }
    default:
      return state
  }
}

export default reducer