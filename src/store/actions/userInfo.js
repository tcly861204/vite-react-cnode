/*
  @Author: tcly861204
  @Email:  356671808@qq.com
  @Date:   2021/12/26 下午6:32:06
  @Last Modified by:   tcly861204
  @Last Modified time: 2021/12/28 下午5:51:19
  @Github: https://tcly861204.github.io
*/
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
