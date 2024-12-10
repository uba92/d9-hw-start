import { combineReducers, configureStore } from '@reduxjs/toolkit'
import favouritesReducer from '../reducers/favouritesReducer'
import searchResultReducer from '../reducers/searchResultsReducer'

const mainReducer = combineReducers({
  favourites: favouritesReducer,
  jobs: searchResultReducer,
})

const myReduxStore = configureStore({
  reducer: mainReducer,
})

export default myReduxStore
