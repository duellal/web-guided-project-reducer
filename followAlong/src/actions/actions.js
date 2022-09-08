export const TOGGLE_EDIT = "TOGGLE_EDIT"
export const SET_TITLE_TEXT = "SET_TITLE_TEXT"
export const SET_TITLE = "SET_TITLE"

export const toggleEdit = () => {
   return ({ type: TOGGLE_EDIT })
}

export const setTitleText = (inputTitleText) => {
   return ({ type: SET_TITLE_TEXT, payload: inputTitleText })
}

export const setTitle = () => {
   return ({ type: SET_TITLE })
}