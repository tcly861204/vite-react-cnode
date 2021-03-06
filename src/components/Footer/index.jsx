/*
  @Author: tcly861204
  @Email:  356671808@qq.com
  @Date:   2021/12/24 下午9:52:54
  @Last Modified by:   tcly861204
  @Last Modified time: 2022/1/6 上午12:12:03
  @Github: https://tcly861204.github.io
*/
import React, { memo, useState } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import './index.scss'

const Footer = memo(({ path }) => {
  const [navList] = useState([
    {
      icon: '&#xe729;',
      name: '首页',
      path: '/home',
    },
    {
      icon: '&#xe68a;',
      name: '消息',
      path: '/message',
    },
    {
      icon: '&#xe6a1;',
      name: '我的',
      path: '/my',
    },
  ])
  return (
    <div className="cn-footer">
      <ul className="cn-nav">
        {navList.map((item, index) => {
          return (
            <li
              className={[
                'cn-nav__item',
                path.indexOf(item.path) !== -1 ? 'is-active' : '',
              ].join(' ')}
              key={index}
            >
              <Link to={{ pathname: item.path }}>
                <span
                  dangerouslySetInnerHTML={{ __html: `${item.icon}` }}
                  className="ued-mobile"
                ></span>
                <span className="text">{item.name}</span>
              </Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
})

Footer.propTypes = {
  path: PropTypes.string.isRequired,
}

export default Footer
