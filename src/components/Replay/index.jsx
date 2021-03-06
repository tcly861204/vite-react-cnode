/*
  @Author: tcly861204
  @Email:  356671808@qq.com
  @Date:   2021/12/26 上午9:55:16
  @Last Modified by:   tcly861204
  @Last Modified time: 2022/1/6 上午12:12:03
  @Github: https://tcly861204.github.io
*/
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
