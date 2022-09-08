import { TOGGLE_EDIT, SET_TOGGLE_EDIT, SET_TITLE, SET_TITLE_TEXT } from "../actions/actions";

export const initialState = {
   title: 'Hello earthlings!',
   editing: false,
   newTitleText: ''
}

export function reducer(state, action) {
   switch (action.type) {
      case SET_TITLE_TEXT:
         return ({ ...state, newTitleText: action.payload });
      case SET_TITLE:
         return ({ ...state, title: state.newTitleText });
      case TOGGLE_EDIT:
         return ({ ...state, editing: !state.editing });
      case defualt:
         return state;
   }
}