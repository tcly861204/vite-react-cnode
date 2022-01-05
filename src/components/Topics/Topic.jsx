/*
  @Author: tcly861204
  @Date:   2022/1/6 上午12:12:03
  @Last Modified by:   tcly861204
  @Last Modified time: 2022/1/6 上午12:12:03
  @Github: https://tcly861204.github.io
*/
import React, { memo, useMemo } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { timeAgo } from '@/libs/utils'
import Author from '@/components/Author'
const Topic = memo((props) => {
  const {
    id,
    author,
    title,
    reply_count,
    visit_count,
    last_reply_at,
    tab,
    good,
    top,
  } = props
  const getLabel = useMemo(() => {
    let str = ''
    if (good) {
      str = '精华'
    } else if (top) {
      str = '置顶'
    } else {
      switch (tab) {
        case 'share':
          str = '分享'
          break
        case 'ask':
          str = '问答'
          break
        case 'job':
          str = '招聘'
          break
        default:
          str = '暂无'
      }
    }
    return str
  }, [good, tab, top])
  return (
    <li className="cn-topics-item ui-border-b">
      {author && author.loginname && author.avatar_url ? (
        <Author author={author} id={id} className="cn-topics-item__hd">
          <p className="create-at">{timeAgo(last_reply_at)}</p>
        </Author>
      ) : null}
      <Link
        to={{
          pathname: '/details',
          search: `id=${id}`,
        }}
      >
        <div className="cn-topics-item__bd">
          {good || top || tab ? (
            <span className="put-top">{getLabel}</span>
          ) : null}
          {title}
        </div>
      </Link>
      {reply_count !== undefined && visit_count !== undefined ? (
        <div className="cn-topics-item__ft">
          <span>
            <i className="ued-mobile">&#xe666;</i>
            {reply_count}
          </span>
          <span>
            <i className="ued-mobile">&#xe637;</i>
            {visit_count}
          </span>
        </div>
      ) : null}
    </li>
  )
})

Topic.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.object.isRequired,
  reply_count: PropTypes.number.isRequired,
  visit_count: PropTypes.number.isRequired,
  last_reply_at: PropTypes.string.isRequired,
  tab: PropTypes.string,
  good: PropTypes.bool.isRequired,
  top: PropTypes.bool.isRequired,
}

export default Topic
