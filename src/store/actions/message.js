/*
  @Author: tcly861204
  @Email:  356671808@qq.com
  @Date:   2021/12/26 下午9:09:34
  @Last Modified by:   tcly861204
  @Last Modified time: 2021/12/27 下午5:36:24
  @Github: https://tcly861204.github.io
*/
import { MESSAGES, MARK_ONE, IS_LOADED } from '../actionType'
import Ajax from '@/service'

const message = (data) => ({
  type: MESSAGES,
  data,
})

const markOne = (id) => ({
  type: MARK_ONE,
  id,
})

const setLoaded = (flag) => ({
  type: IS_LOADED,
  loaded: flag,
})

export const getMessages = () => (dispatch, getState) => {
  const state = getState()
  const params = {
    accesstoken: state.userInfo.token,
  }
  dispatch(setLoaded(true))
  Ajax.messages(params)
    .then((res) => {
      if (res.message) {
        dispatch(message(res.data))
      }
      dispatch(setLoaded(false))
    })
    .catch(() => {
      dispatch(setLoaded(false))
    })
}

export const getMarkOne = (id) => (dispatch, getState) => {
  const state = getState()
  const token = state.userInfo.token
  if (!token) return
  Ajax.markOne(id, {
    accesstoken: token,
  }).then((res) => {
    if (res.success) {
      dispatch(markOne(id))
    }
  })
}
