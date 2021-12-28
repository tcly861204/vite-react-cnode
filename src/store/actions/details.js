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
