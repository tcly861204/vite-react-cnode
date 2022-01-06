/*
  @Author: tcly861204
  @Email:  356671808@qq.com
  @Date:   2021/12/26 上午8:19:52
  @Last Modified by:   tcly861204
  @Last Modified time: 2021/12/27 下午6:07:27
  @Github: https://tcly861204.github.io
*/
import { COMMENT_DELETE, COMMENT_LIKE, DETAILS } from '../actionType'
import Ajax from '@/service'

const details = (data) => ({
  type: DETAILS,
  data,
})

const commentLike = (payload) => ({
  type: COMMENT_LIKE,
  payload,
})

const commentDelete = (payload) => ({
  type: COMMENT_DELETE,
  payload,
})

export const getDetails = (id) => (dispatch) => {
  Ajax.getDetails(id).then((res) => {
    dispatch(details(res.data))
  })
}

export const setOrCancelCommentLike = (params) => (dispatch) => {
  Ajax.ups(params).then(() => {
    dispatch(commentLike(params))
  })
}

export const setCommentDelete = (params) => (dispatch) => {
  dispatch(commentDelete(params))
}
