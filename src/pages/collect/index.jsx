/*
  @Author: tcly861204
  @Email:  356671808@qq.com
  @Date:   2021/12/24 下午3:33:16
  @Last Modified by:   tcly861204
  @Last Modified time: 2022/1/6 上午12:12:03
  @Github: https://tcly861204.github.io
*/
import React, { memo, useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { getUserCollects } from '@/store/actions/collect'
import TopicsList from '@/components/Topics/TopicsList'
import { getParams } from '@/libs/utils'
import GoBack from '@/components/GoBack/index'
const Collect = memo(({ getUserCollects, topics }) => {
  const { search } = useLocation()
  useEffect(() => {
    const username = getParams(search, 'username')
    getUserCollects(username)
  }, [search])
  return (
    <>
      <GoBack />
      <TopicsList topics={topics} style={{ padding: '45px 0 0' }} />
    </>
  )
})

Collect.propTypes = {
  topics: PropTypes.array.isRequired,
  getUserCollects: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => ({
  topics: state.collects,
})

const mapDispatchToProps = {
  getUserCollects,
}

export default connect(mapStateToProps, mapDispatchToProps)(Collect)
