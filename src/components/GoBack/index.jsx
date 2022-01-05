/*
  @Author: tcly861204
  @Date:   2022/1/6 上午12:12:03
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
