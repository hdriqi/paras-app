export const SET_THEME_DATA = 'SET_THEME_DATA'
export const setThemeData = (theme) => {
  return {
    type: SET_THEME_DATA,
    theme: theme
  }
}