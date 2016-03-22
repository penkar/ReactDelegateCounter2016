import { combineReducers } from 'redux'
import settings from './settings.js'
import redStateDelegates from './redStateDelegates.js'
import blueStateDelegates from './blueStateDelegates.js'

export const Counts = combineReducers({
  redStateDelegates,
  blueStateDelegates,
  settings
})

export default Counts
