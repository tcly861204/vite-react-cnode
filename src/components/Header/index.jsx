/*
  @Author: tcly861204
  @Date:   2022/1/6 上午12:12:03
  @Last Modified by:   tcly861204
  @Last Modified time: 2022/1/6 上午12:12:03
  @Github: https://tcly861204.github.io
*/
import React, { memo, useState } from 'react'
import PropTypes from 'prop-types'
import './index.scss'

const Header = memo(({ tabChangeHandler, tab }) => {
  const [tabs] = useState([
    {
      name: '全部',
      value: '',
    },
    {
      name: '精华',
      value: 'good',
    },
    {
      name: '分享',
      value: 'share',
    },
    {
      name: '问答',
      value: 'ask',
    },
    {
      name: '招聘',
      value: 'job',
    },
    {
      name: '客户端',
      value: 'dev',
    },
  ])
  return (
    <header className="cn-header">
      <ul className="cn-tabs__list">
        {tabs.map((item, index) => (
          <li
            key={index}
            className={[
              'cn-tabs__item',
              tab === item.value ? 'is-active' : '',
            ].join(' ')}
            onClick={() => tabChangeHandler(item.value)}
          >
            {item.name}
          </li>
        ))}
      </ul>
    </header>
  )
})
Header.propTypes = {
  tab: PropTypes.string.isRequired,
  tabChangeHandler: PropTypes.func.isRequired,
}
export default Header
