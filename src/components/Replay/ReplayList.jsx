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
