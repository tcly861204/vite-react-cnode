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
