import {
  COMMENT_DELETE,
  COMMENT_LIKE,
  DETAILS,
  SET_COLLECT,
} from '../actionType'
import { Toast } from 'antd-mobile'

export const details = (state = {}, action) => {
  const comments = state.replies
  let replayIndex = -1
  let deleteIndex = -1
  switch (action.type) {
    case DETAILS:
      return action.data
    case COMMENT_LIKE:
      replayIndex = comments.findIndex(
        (item) => item.id === action.payload.replayId
      )
      // 判断传入的id是否存在
      if (replayIndex >= 0) {
        const comment = comments[replayIndex]
        const ups = comment.ups
        const index = ups.findIndex((item) => {
          return item === action.payload.userId
        })
        // 如果找到index则是取消点赞，否则就是点赞
        if (index >= 0) {
          Toast.success('取消点赞成功', 1.5)
          ups.splice(index, 1)
        } else {
          Toast.success('点赞成功', 1.5)
          ups.push(action.payload.userId)
        }
      }
      return {
        ...state,
        replies: [...comments],
      }
    case COMMENT_DELETE:
      // 找到需要删除ID的下标
      deleteIndex = comments.findIndex((item) => {
        return item.id === action.payload.replayId
      })
      if (deleteIndex >= 0) {
        comments.splice(deleteIndex, 1)
        Toast.success('删除成功', 1.5)
      }
      return {
        ...state,
        replies: [...comments],
      }
    case SET_COLLECT:
      return {
        ...state,
        is_collect: action.flag,
      }
    default:
      return state
  }
}
