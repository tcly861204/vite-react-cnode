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
