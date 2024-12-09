const initialState = {
  favourites: {
    content: [],
  },
}

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TO_FAV':
      return {
        ...state,
        favourites: {
          ...state.favourites,
          content: state.favourites.content.includes(action.payload)
            ? [...state.favourites.content]
            : [...state.favourites.content, action.payload],
        },
      }
    case 'REMOVE_FROM_FAV':
      return {
        ...state,
        favourites: {
          ...state.favourites,
          content: state.favourites.content.filter((fav, i) => {
            if (i === action.payload) {
              return false
            } else {
              return true
            }
          }),
        },
      }
    default:
      return state
  }
}

export default mainReducer
