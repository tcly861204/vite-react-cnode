/*
  @Author: tcly861204
  @Email:  356671808@qq.com
  @Date:   2021/12/25 下午4:42:17
  @Last Modified by:   tcly861204
  @Last Modified time: 2022/1/6 上午12:17:07
  @Github: https://tcly861204.github.io
*/
import { useState, useEffect } from 'react'
import { debounce } from '@/libs/utils'

const useScrollLoad = () => {
  const [flag, setFlag] = useState(false)
  const [scrollTop, setScrollTop] = useState(0)

  const getScrollTop = () => {
    let _scrollTop = 0
    if (document.documentElement && document.documentElement.scrollTop) {
      _scrollTop = document.documentElement.scrollTop
    } else if (document.body) {
      _scrollTop = document.body.scrollTop
    }
    return _scrollTop
  }

  const getClientHeight = () => {
    let clientHeight = 0
    if (document.body.clientHeight && document.documentElement.clientHeight) {
      clientHeight = Math.min(
        document.body.clientHeight,
        document.documentElement.clientHeight
      )
    } else {
      clientHeight = Math.max(
        document.body.clientHeight,
        document.documentElement.clientHeight
      )
    }
    return clientHeight
  }

  const getScrollHeight = () =>
    Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)

  const scrollHandler = debounce(() => {
    setScrollTop(getScrollTop())
    if (getScrollTop() + getClientHeight() + 50 > getScrollHeight()) {
      setFlag(true)
    } else {
      setFlag(false)
    }
  })

  useEffect(() => {
    window.addEventListener('scroll', scrollHandler, false)
    return () => {
      window.removeEventListener('scroll', scrollHandler, false)
    }
  }, [])

  return {
    flag,
    scrollTop,
  }
}

export default useScrollLoad
