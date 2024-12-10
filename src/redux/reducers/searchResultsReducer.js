import { GET_JOBS, GET_JOBS_ERROR } from '../actions'

const initialState = {
  results: [],
  isError: false,
}

const searchResultReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_JOBS:
      return {
        ...state,
        results: action.payload,
      }

    case GET_JOBS_ERROR:
      return {
        ...state,
        isError: true,
      }
    default:
      return state
  }
}
export default searchResultReducer
