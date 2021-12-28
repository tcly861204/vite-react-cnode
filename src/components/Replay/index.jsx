import React, { memo } from 'react'
import PropTypes from 'prop-types'
import './index.scss'
import ReplayList from './ReplayList'
const ReplayWrapper = memo((props) => {
  const { list } = props
  return (
    <div className="cn-replay">
      <div className="cn-replay__hd ui-border-tb">共{list.length}条回复</div>
      <div className="cn-replay__bd">
        <ReplayList {...props} />
      </div>
    </div>
  )
})
ReplayWrapper.propTypes = {
  list: PropTypes.array.isRequired,
}
export default ReplayWrapper
