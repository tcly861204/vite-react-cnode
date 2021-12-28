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
