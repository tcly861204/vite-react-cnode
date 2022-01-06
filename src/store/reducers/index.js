/*
  @Author: tcly861204
  @Email:  356671808@qq.com
  @Date:   2021/12/24 下午4:52:24
  @Last Modified by:   tcly861204
  @Last Modified time: 2021/12/27 下午6:16:33
  @Github: https://tcly861204.github.io
*/
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
