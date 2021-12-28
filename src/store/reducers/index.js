import { combineReducers } from 'redux'
import { topics } from './topics'
import { details } from './details'
import { userInfo } from './userInfo'
import { collects } from './collect'
import { messages } from './message'
import { user } from './my'
export default combineReducers({
  topics,
  user,
  details,
  userInfo,
  collects,
  messages,
})
