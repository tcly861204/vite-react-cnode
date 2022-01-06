/*
  @Author: tcly861204
  @Email:  356671808@qq.com
  @Date:   2021/12/27 下午6:14:31
  @Last Modified by:   tcly861204
  @Last Modified time: 2021/12/27 下午6:16:02
  @Github: https://tcly861204.github.io
*/
import { USER_CENTER } from '../actionType'
export const user = (state = {}, action) => {
  switch (action.type) {
    case USER_CENTER:
      return action.data
    default:
      return state
  }
}
