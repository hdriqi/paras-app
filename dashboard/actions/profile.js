export const SAVE_PROFILE_DATA = 'SAVE_PROFILE_DATA'
export const saveProfileData = (profile) => {
  return {
    type: SAVE_PROFILE_DATA,
    profile: profile
  }
}