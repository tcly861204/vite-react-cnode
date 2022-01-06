/*
  @Author: tcly861204
  @Email:  356671808@qq.com
  @Date:   2021/12/26 下午7:59:48
  @Last Modified by:   tcly861204
  @Last Modified time: 2021/12/26 下午8:01:15
  @Github: https://tcly861204.github.io
*/
import { COLLECT_LIST } from '../actionType'

export const collects = (state = [], action) => {
  switch (action.type) {
    case COLLECT_LIST:
      return action.data
    default:
      return state
  }
}
