/*
  @Author: tcly861204
  @Email:  356671808@qq.com
  @Date:   2021/12/23 下午1:55:36
  @Last Modified by:   tcly861204
  @Last Modified time: 2022/1/6 下午7:41:43
  @Github: https://tcly861204.github.io
*/
import React from 'react'
import ReactDOM from 'react-dom'
import { persistStore } from 'redux-persist'
import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from 'react-redux'
import store from './store/index'
import App from './App'

const persistor = persistStore(store)
ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById('app')
)
