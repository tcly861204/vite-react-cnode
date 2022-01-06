/*
  @Author: tcly861204
  @Email:  356671808@qq.com
  @Date:   2021/12/24 下午3:37:54
  @Last Modified by:   tcly861204
  @Last Modified time: 2022/1/6 上午12:12:03
  @Github: https://tcly861204.github.io
*/
import React, { memo, useEffect } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Footer from '@/components/Footer'
import SkeletonList from '@/components/Skeleton/List'
import NoData from '@/components/NoData'
import { getMessages, getMarkOne } from '@/store/actions/message'
import { Link } from 'react-router-dom'
import './index.scss'
const Message = memo(({ messages, getMessages }) => {
  useEffect(() => {
    getMessages()
  }, [])
  const { list = [], isLoaded } = messages
  return (
    <>
      <div className="cn-message">
        {isLoaded ? (
          <SkeletonList style={{ padding: '15px 15px 0 15px' }} />
        ) : list.length ? (
          list.map((item) => {
            return (
              <div
                key={item.id}
                className={
                  'cn-message__item ui-border-b ' +
                  (!item.has_read ? 'is-notread' : '')
                }
              >
                <Link
                  to={{
                    pathname: '/my',
                    search: `username=${item.author.loginname}`,
                  }}
                >
                  {item.author.loginname}
                </Link>
                回复了您的话题
                <Link
                  to={{
                    pathname: '/details',
                    search: `id=${item.topic.id}`,
                  }}
                >
                  {item.topic.title}
                </Link>
              </div>
            )
          })
        ) : (
          <NoData />
        )}
      </div>
      <Footer path="/message" />
    </>
  )
})

const mapStateToProps = (state) => ({
  messages: state.messages,
})

const mapDispatchToProps = {
  getMessages,
  getMarkOne,
}

Message.propTypes = {
  messages: PropTypes.shape({
    isLoaded: PropTypes.bool.isRequired,
    list: PropTypes.array.isRequired,
  }).isRequired,
  getMessages: PropTypes.func.isRequired,
  getMarkOne: PropTypes.func.isRequired,
}

export default connect(mapStateToProps, mapDispatchToProps)(Message)
