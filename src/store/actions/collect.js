/*
  @Author: tcly861204
  @Email:  356671808@qq.com
  @Date:   2021/12/26 下午8:15:00
  @Last Modified by:   tcly861204
  @Last Modified time: 2021/12/26 下午8:21:02
  @Github: https://tcly861204.github.io
*/
import { SET_COLLECT, COLLECT_LIST } from '../actionType'
import Ajax from '@/service'
import { Toast } from 'antd-mobile'

const setCollect = (flag) => ({
  type: SET_COLLECT,
  flag,
})

const collectList = (data) => ({
  type: COLLECT_LIST,
  data,
})

export const setOrCancelCollect = (params) => (dispatch, getState) => {
  const state = getState()
  if (state.details.is_collect) {
    Ajax.de_collect(params).then(() => {
      dispatch(setCollect(false))
      Toast.success('取消收藏成功', 1.5)
    })
  } else {
    Ajax.collect(params).then(() => {
      dispatch(setCollect(true))
      Toast.success('收藏成功', 1.5)
    })
  }
}

export const getUserCollects = (username) => (dispatch) => {
  Ajax.myCollect(username).then((res) => {
    if (res.success) {
      dispatch(collectList(res.data))
    }
  })
}
