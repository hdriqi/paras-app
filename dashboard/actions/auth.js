export const SAVE_AUTH_DATA = 'SAVE_AUTH_DATA'
export const saveAuthData = (authData) => {
  return {
    type: SAVE_AUTH_DATA,
    authData: authData
  }
}

export const SAVE_USER_SESSION = 'SAVE_USER_SESSION'
export const saveUserSession = (userSession) => {
  return {
    type: SAVE_AUTH_DATA,
    userSession: userSession
  }
}

export const SAVE_USER_ID = 'SAVE_USER_ID'
export const saveUserId = (identifier) => {
  return {
    type: SAVE_USER_ID,
    identifier: identifier
  }
}