import React, { memo, useEffect, useCallback } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { getParams } from '@/libs/utils'
import {
  getDetails,
  setOrCancelCommentLike,
  setCommentDelete,
} from '@/store/actions/details'
import { setOrCancelCollect } from '@/store/actions/collect'
import SkeletonDetails from '@/components/Skeleton/Details'
import GoBack from '@/components/GoBack/index'
import Header from './header'
import ReplayWrapper from '@/components/Replay'
import './index.scss'
const Details = memo(
  ({
    details,
    userInfo,
    getDetails,
    setOrCancelCommentLike,
    setCommentDelete,
    setOrCancelCollect,
  }) => {
    const { search } = useLocation()
    useEffect(() => {
      const id = getParams(search, 'id')
      getDetails(id)
    }, [search])
    const handleOperation = useCallback(
      (type) => {
        switch (type) {
          case 'comments':
            break
          case 'collection':
            setOrCancelCollect({
              accesstoken: userInfo.token,
              topic_id: details.id,
            })
            break
        }
      },
      [userInfo, details]
    )
    return (
      <>
        {Object.keys(details).length ? (
          <div className="cn-details">
            <GoBack />
            <Header details={details} />
            <div
              className="cn-details__bd"
              dangerouslySetInnerHTML={{ __html: `${details.content}` }}
            ></div>
            {details.replies && details.replies.length && (
              <ReplayWrapper
                setCommentDelete={setCommentDelete}
                setOrCancelCommentLike={setOrCancelCommentLike}
                list={details.replies}
                userInfo={userInfo}
              ></ReplayWrapper>
            )}
            {userInfo.token && userInfo.id ? (
              <div className="cn-details__ft">
                <span
                  className="comments"
                  onClick={() => handleOperation('comments')}
                >
                  评论
                </span>
                <span
                  className="collection"
                  onClick={() => handleOperation('collection')}
                >
                  {details.is_collect ? '取消' : ''}收藏
                </span>
              </div>
            ) : null}
          </div>
        ) : (
          <SkeletonDetails />
        )}
      </>
    )
  }
)
const mapStateToProps = (state) => {
  return {
    details: state.details,
    userInfo: state.userInfo,
  }
}
const mapDispatchToProps = {
  getDetails,
  setOrCancelCommentLike,
  setCommentDelete,
  setOrCancelCollect,
}

Details.propTypes = {
  details: PropTypes.object.isRequired,
  getDetails: PropTypes.func.isRequired,
  userInfo: PropTypes.object.isRequired,
  setOrCancelCommentLike: PropTypes.func.isRequired,
  setCommentDelete: PropTypes.func.isRequired,
  setOrCancelCollect: PropTypes.func.isRequired,
}

export default connect(mapStateToProps, mapDispatchToProps)(Details)
