/*
  @Author: tcly861204
  @Email:  356671808@qq.com
  @Date:   2021/12/24 下午4:53:44
  @Last Modified by:   tcly861204
  @Last Modified time: 2021/12/26 下午5:33:50
  @Github: https://tcly861204.github.io
*/
import { USERINFO } from '../actionType'

export const userInfo = (state = {}, action) => {
  switch (action.type) {
    case USERINFO:
      return action.data
    default:
      return state
  }
}
