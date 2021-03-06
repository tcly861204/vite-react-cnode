/*
  @Author: tcly861204
  @Email:  356671808@qq.com
  @Date:   2021/12/23 下午1:55:36
  @Last Modified by:   tcly861204
  @Last Modified time: 2021/12/26 下午6:39:42
  @Github: https://tcly861204.github.io
*/
import { createStore, applyMiddleware } from 'redux'
// 数据持久化工具
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage/session'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import reducers from './reducers'
const isDev = import.meta.env.MODE === 'development'
const middleware = [thunk]
// 判断是否是正式环境
if (isDev) {
  middleware.push(logger)
}
const persistConfig = {
  // 存储的名称
  key: 'root',
  // 存储方式
  storage: storage,
  // 某个reducer,不持久化
  // blacklist: ['counter'],
  // 需要持久化的模块
  // whitelist: ['userInfo', 'topics']
  whitelist: isDev ? ['userInfo'] : ['userInfo', 'topics'],
}
const persistedReducer = persistReducer(persistConfig, reducers)
export default createStore(persistedReducer, applyMiddleware(...middleware))
