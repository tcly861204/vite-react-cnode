import { USERINFO } from '../actionType'
import Ajax from '@/service'
import { createBrowserHistory } from 'history'
const history = createBrowserHistory()
const userInfo = (data) => ({
  type: USERINFO,
  data,
})

export const getUserInfo = (token, pathname) => (dispatch) => {
  Ajax.login({
    accesstoken: token,
  }).then((res) => {
    if (res.success === true) {
      dispatch(
        userInfo({
          avatar_url: res.avatar_url,
          loginname: res.loginname,
          id: res.id,
          token: token,
        })
      )
      history.push({
        pathname,
      })
    }
  })
}

export const loginOut = () => (dispatch) => {
  dispatch(userInfo({}))
}
