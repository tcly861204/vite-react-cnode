/*
  @Author: tcly861204
  @Date:   2022/1/6 上午12:12:03
  @Last Modified by:   tcly861204
  @Last Modified time: 2022/1/6 上午12:12:03
  @Github: https://tcly861204.github.io
*/

export const formatDate = (date, fmt) => {
  const o = {
    'M+': date.getMonth() + 1,
    'd+': date.getDate(),
    'h+': date.getHours(),
    'm+': date.getMinutes(),
    's+': date.getSeconds(),
    'q+': Math.floor((date.getMonth() + 3) / 3),
    S: date.getMilliseconds(),
  }
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(
      RegExp.$1,
      (date.getFullYear() + '').substr(4 - RegExp.$1.length)
    )
  }
  for (const k in o) {
    if (new RegExp('(' + k + ')').test(fmt)) {
      fmt = fmt.replace(
        RegExp.$1,
        RegExp.$1.length === 1 ? o[k] : ('00' + o[k]).substr(('' + o[k]).length)
      )
    }
  }
  return fmt
}

export const timeAgo = function (str) {
  if (!str) return ''
  const date = new Date(str)
  const time = new Date().getTime() - date.getTime()
  if (time < 0) {
    return ''
  } else if (time / 1000 < 30) {
    return '刚刚'
  } else if (time / 1000 < 60) {
    return parseInt(time / 1000) + '秒前'
  } else if (time / 60000 < 60) {
    return parseInt(time / 60000) + '分钟前'
  } else if (time / 3600000 < 24) {
    return parseInt(time / 3600000) + '小时前'
  } else if (time / 86400000 < 31) {
    return parseInt(time / 86400000) + '天前'
  } else if (time / 2592000000 < 12) {
    return parseInt(time / 2592000000) + '月前'
  } else {
    return parseInt(time / 31536000000) + '年前'
  }
}

export const debounce = function (fn, delay = 100) {
  let timer = null
  return function () {
    clearTimeout(timer)
    timer = setTimeout(() => {
      fn.apply(this, arguments)
    }, delay)
  }
}

export const getParams = function (search, key) {
  if (!search) {
    return ''
  }
  const params = search
    .replace(/^\?/, '')
    .split('&')
    .reduce((pre, item) => {
      const [k, v] = item.split('=')
      pre[k] = v
      return pre
    }, {})
  return params[key]
}
