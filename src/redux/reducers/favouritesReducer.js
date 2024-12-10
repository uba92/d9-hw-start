import { ADD_TO_FAV, REMOVE_FROM_FAV } from '../actions'

const initialState = {
  content: [],
}

const favouritesReducers = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_FAV:
      return {
        ...state,
        content: state.content.includes(action.payload)
          ? [...state.content]
          : [...state.content, action.payload],
      }

    case REMOVE_FROM_FAV:
      return {
        ...state,
        content: state.content.filter((_, i) => {
          if (i === action.payload) {
            return false
          } else {
            return true
          }
        }),
      }
    default:
      return state
  }
}
export default favouritesReducers
