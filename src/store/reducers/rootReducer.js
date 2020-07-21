import {combineReducers} from 'redux'
import beers from './beersReducer'
import breweries from './breweriesReducer'

export default combineReducers({
  beers,
  breweries
})