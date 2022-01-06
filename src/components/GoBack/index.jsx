/*
  @Author: tcly861204
  @Email:  356671808@qq.com
  @Date:   2021/12/26 上午9:05:15
  @Last Modified by:   tcly861204
  @Last Modified time: 2022/1/6 上午12:12:03
  @Github: https://tcly861204.github.io
*/
import React, { memo, useCallback } from 'react'
import './index.scss'
import { createBrowserHistory } from 'history'
const GoBack = memo(() => {
  const handleBack = useCallback(() => {
    const history = createBrowserHistory()
    history.back()
  }, [])
  return (
    <div className="cn-back">
      <span onClick={handleBack} className="cn-back__btn">
        返回
      </span>
    </div>
  )
})

export default GoBack
