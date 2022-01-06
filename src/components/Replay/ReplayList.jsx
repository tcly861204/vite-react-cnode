/*
  @Author: tcly861204
  @Email:  356671808@qq.com
  @Date:   2021/12/26 上午9:59:45
  @Last Modified by:   tcly861204
  @Last Modified time: 2022/1/6 上午12:12:03
  @Github: https://tcly861204.github.io
*/
import React, { memo } from 'react'
import PropTypes from 'prop-types'
import Replay from './Replay'
const ReplayList = memo((props) => {
  const { list, userInfo, setOrCancelCommentLike, setCommentDelete } = props
  return (
    <div className="cn-replay__list">
      {list.map((item, index) => {
        return (
          <Replay
            userInfo={userInfo}
            setOrCancelCommentLike={setOrCancelCommentLike}
            setCommentDelete={setCommentDelete}
            key={item.id}
            number={index}
            {...item}
          />
        )
      })}
    </div>
  )
})
ReplayList.propTypes = {
  list: PropTypes.array.isRequired,
  userInfo: PropTypes.object,
  setOrCancelCommentLike: PropTypes.func.isRequired,
  setCommentDelete: PropTypes.func.isRequired,
}

export default ReplayList
