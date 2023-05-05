export const SET_CURRENT_USER = "SET_CURRENT_USER"
export const TOGGLE_HIDDEN_MENU = "TOGGLE_HIDDEN_MENU"

export const setCurrentUser = user => ({
type: SET_CURRENT_USER,
payload: user,
})

export const toggleMenuUser = () => ({
type:TOGGLE_HIDDEN_MENU,
})