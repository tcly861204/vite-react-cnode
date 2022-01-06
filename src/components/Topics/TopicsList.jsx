/*
  @Author: tcly861204
  @Email:  356671808@qq.com
  @Date:   2021/12/25 上午6:39:05
  @Last Modified by:   tcly861204
  @Last Modified time: 2022/1/6 上午12:12:03
  @Github: https://tcly861204.github.io
*/
import React, { memo } from 'react'
import PropTypes from 'prop-types'
import Topic from './Topic'
import SkeletonList from '../Skeleton/List'
import './index.scss'

const TopicsList = memo(({ topics, style }) => {
  return (
    <>
      {topics.length ? (
        <ul className="cn-topics-list" style={style}>
          {topics.map((item) => (
            <Topic key={item.id} {...item} />
          ))}
        </ul>
      ) : (
        <SkeletonList
          style={{
            padding: '15px 15px 0 15px',
          }}
        />
      )}
    </>
  )
})

TopicsList.propTypes = {
  topics: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      author: PropTypes.object.isRequired,
      reply_count: PropTypes.number.isRequired,
      visit_count: PropTypes.number.isRequired,
      last_reply_at: PropTypes.string.isRequired,
    })
  ).isRequired,
  style: PropTypes.object,
}

export default TopicsList
