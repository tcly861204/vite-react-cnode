/*
  @Author: tcly861204
  @Email:  356671808@qq.com
  @Date:   2021/12/26 下午4:24:25
  @Last Modified by:   tcly861204
  @Last Modified time: 2022/1/6 下午7:26:15
  @Github: https://tcly861204.github.io
*/
import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import LazyLoad from 'react-lazyload'
const Author = function (props) {
  const {
    id,
    author: { avatar_url, loginname },
    className,
  } = props
  return (
    <Link
      to={{
        pathname: '/my',
        search: `username=${loginname}`,
      }}
    >
      <div className={className}>
        <div className="user-avatar">
          <LazyLoad key={id}>
            <img src={avatar_url} alt="头像" />
          </LazyLoad>
        </div>
        <div className="user-info">
          <span className="user-name">{loginname}</span>
          {props.children}
        </div>
      </div>
    </Link>
  )
}
Author.propTypes = {
  id: PropTypes.string.isRequired,
  author: PropTypes.shape({
    avatar_url: PropTypes.string.isRequired,
    loginname: PropTypes.string.isRequired,
  }).isRequired,
  className: PropTypes.string.isRequired,
}
export default Author
