/*
  @Author: tcly861204
  @Email:  356671808@qq.com
  @Date:   2021/12/24 下午4:53:37
  @Last Modified by:   tcly861204
  @Last Modified time: 2021/12/25 下午10:43:45
  @Github: https://tcly861204.github.io
*/
import { TOPICS, TOPICS_PARAMS, IS_SCROLL, SCROLLTOP } from '../actionType'
const initialState = {
  // 列表数据
  datas: [],
  // 是否请求接口
  flag: true,
  params: {
    page: 1,
    tab: '',
    limit: 10,
  },
  scrollTop: 0,
}
export const topics = (state = initialState, action) => {
  switch (action.type) {
    case TOPICS:
      // 如果flag为真，意思就是currentPage=1
      if (action.payload.flag) {
        return {
          ...state,
          datas: action.payload.topics,
        }
      }
      return {
        ...state,
        datas: [...state.datas, ...action.payload.topics],
      }
    case TOPICS_PARAMS:
      return {
        ...state,
        params: action.params,
      }
    case IS_SCROLL:
      return {
        ...state,
        flag: action.flag,
      }
    case SCROLLTOP:
      return {
        ...state,
        screenTop: action.value,
      }
    default:
      return state
  }
}
