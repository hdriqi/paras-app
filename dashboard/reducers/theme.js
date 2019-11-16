import { SET_THEME_DATA } from '../actions/theme'

const initialState = {}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_THEME_DATA:
      return {
				...state,
				...action.theme
      }
    default:
      return state
  }
}

export default reducer