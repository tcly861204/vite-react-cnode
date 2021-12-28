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
