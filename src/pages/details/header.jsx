/*
  @Author: tcly861204
  @Email:  356671808@qq.com
  @Date:   2021/12/26 上午8:56:34
  @Last Modified by:   tcly861204
  @Last Modified time: 2022/1/6 上午12:12:03
  @Github: https://tcly861204.github.io
*/
import React, { memo } from 'react'
import { formatDate } from '@/libs/utils'
import PropTypes from 'prop-types'
const Header = memo(({ details }) => {
  const { title, reply_count, visit_count, last_reply_at } = details
  return (
    <div className="cn-details__hd ui-border-b">
      <h1 className="title">{title}</h1>
      <div className="info">
        <span>
          <i className="ued-mobile">&#xe666;</i>
          {reply_count}
        </span>
        <span>
          <i className="ued-mobile">&#xe637;</i>
          {visit_count}
        </span>
        <span>
          <i className="ued-mobile">&#xe78b;</i>
          {formatDate(new Date(last_reply_at), 'yyyy-MM-dd hh:ss:mm')}
        </span>
      </div>
    </div>
  )
})

Header.propTypes = {
  details: PropTypes.shape({
    title: PropTypes.string.isRequired,
    reply_count: PropTypes.number.isRequired,
    visit_count: PropTypes.number.isRequired,
    last_reply_at: PropTypes.string.isRequired,
  }).isRequired,
}

export default Header
