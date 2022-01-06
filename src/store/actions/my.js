/*
  @Author: tcly861204
  @Email:  356671808@qq.com
  @Date:   2021/12/27 下午6:17:03
  @Last Modified by:   tcly861204
  @Last Modified time: 2021/12/27 下午6:21:54
  @Github: https://tcly861204.github.io
*/
import { USER_CENTER } from '../actionType'
import Ajax from '@/service'

const userCenter = (data) => ({
  type: USER_CENTER,
  data,
})

export const getUserCenterInfo = (username) => (dispatch, getState) => {
  const state = getState()
  if (!username && !state.userInfo.loginname) {
    return dispatch(userCenter({}))
  }
  if (!username) {
    username = state.userInfo.loginname
  }
  Ajax.user(username).then((res) => {
    if (res.success) {
      dispatch(userCenter(res.data))
    }
  })
}
