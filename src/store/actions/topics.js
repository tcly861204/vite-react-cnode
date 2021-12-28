import { IS_SCROLL, TOPICS, TOPICS_PARAMS, SCROLLTOP } from '../actionType'
import Ajax from '@/service'
const topics = (payload) => ({
  type: TOPICS,
  payload,
})

const isScroll = (flag) => ({
  type: IS_SCROLL,
  flag,
})

const topicsParams = (params) => ({
  type: TOPICS_PARAMS,
  params: params,
})

const scrollTop = (value) => ({
  type: SCROLLTOP,
  value,
})

export const getAllTopics = () => (dispatch, getState) => {
  const state = getState()
  const params = state.topics.params
  const length = state.topics.datas.length
  const flag = state.topics.flag
  if (length && params.page === 1) {
    dispatch(
      topics({
        topics: [],
        flag: true,
        params,
      })
    )
  }
  if (flag) {
    dispatch(isScroll(false))
    Ajax.getTopics(params)
      .then((res) => {
        dispatch(isScroll(true))
        dispatch(
          topics({
            topics: res.data,
            flag: params.page === 1,
          })
        )
      })
      .catch(() => {
        dispatch(isScroll(true))
      })
  }
}

export const getTopicsParams = (params) => (dispatch) => {
  dispatch(topicsParams(params))
}

export const setScrollTop = (value) => (dispatch) => {
  dispatch(scrollTop(value))
}
