/*
  @Author: tcly861204
  @Date:   2022/1/6 上午12:12:03
  @Last Modified by:   tcly861204
  @Last Modified time: 2022/1/6 上午12:12:03
  @Github: https://tcly861204.github.io
*/
import React, { useCallback } from 'react'
import PropTypes from 'prop-types'
import Author from '@/components/Author'
import { timeAgo } from '@/libs/utils'
import { Toast } from 'antd-mobile'

const Replay = (props) => {
  const {
    id,
    number,
    content,
    ups,
    author,
    create_at,
    userInfo,
    setOrCancelCommentLike,
    setCommentDelete,
  } = props
  const handlerOperation = useCallback((type) => {
    switch (type) {
      case 'delete':
        setCommentDelete({
          accesstoken: userInfo.token,
          userId: userInfo.id,
          replayId: id,
        })
        break
      case 'edit':
        break
      case 'like':
        if (userInfo.loginname === author.loginname) {
          return Toast.info('呵呵，不能帮自己点赞。', 2)
        }
        setOrCancelCommentLike({
          accesstoken: userInfo.token,
          userId: userInfo.id,
          replayId: id,
        })
        break
      case 'reply':
        break
    }
  }, [])
  return (
    <li className="cn-replay__item ui-border-b">
      <Author {...props} className="author_content">
        <span className="reply-time">
          {number}楼•{timeAgo(create_at)}
        </span>
      </Author>
      <div
        className="content"
        dangerouslySetInnerHTML={{ __html: `${content}` }}
      ></div>
      {userInfo.id && userInfo.token && (
        <div className="operation">
          {author &&
          author.loginname === userInfo.loginname &&
          userInfo.token ? (
            <>
              <span onClick={() => handlerOperation('delete')}>
                <i className="ued-mobile">&#xe78c;</i>
                删除
              </span>
              <span onClick={() => handlerOperation('edit')}>
                <i className="ued-mobile">&#xe6b9;</i>
                编辑
              </span>
            </>
          ) : null}
          <span onClick={() => handlerOperation('like')}>
            <i className="ued-mobile">&#xe643;</i>
            点赞({ups.length})
          </span>
          <span onClick={() => handlerOperation('reply')}>
            <i className="ued-mobile">&#xe6f9;</i>
            回复
          </span>
        </div>
      )}
    </li>
  )
}

Replay.propTypes = {
  id: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired,
  create_at: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  author: PropTypes.shape({
    loginname: PropTypes.string.isRequired,
  }).isRequired,
  ups: PropTypes.array.isRequired,
  userInfo: PropTypes.object,
  setOrCancelCommentLike: PropTypes.func.isRequired,
  setCommentDelete: PropTypes.func.isRequired,
}

export default Replay
