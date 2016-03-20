import { combineReducers } from 'redux'
import republicanDelegates from './republicanDelegates.js'
import democratDelegates from './democratDelegates.js'
import redStateDelegates from './redStateDelegates.js'
import blueStateDelegates from './blueStateDelegates.js'

export const Counts = combineReducers({
  redStateDelegates,
  blueStateDelegates,
  republicanDelegates,
  democratDelegates
})

export default Counts
