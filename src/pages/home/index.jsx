/*
  @Author: tcly861204
  @Date:   2022/1/6 上午12:12:03
  @Last Modified by:   tcly861204
  @Last Modified time: 2022/1/6 上午12:12:03
  @Github: https://tcly861204.github.io
*/
import React, { useCallback, useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {
  getTopicsParams,
  getAllTopics,
  setScrollTop,
} from '@/store/actions/topics'
import Header from '@/components/Header/index'
import TopicsList from '@/components/Topics/TopicsList'
import Footer from '@/components/Footer/index'
import useScrollLoad from '@/hooks/useScrollLoad'

const Home = function ({
  topics,
  flag,
  params,
  scrollTop,
  getTopicsParams,
  getAllTopics,
  setScrollTop,
}) {
  const isScrollLoad = useScrollLoad()
  useEffect(() => {
    if (isScrollLoad.flag && flag) {
      getTopicsParams({
        ...params,
        page: params.page + 1,
      })
    }
  }, [isScrollLoad.flag])
  useEffect(() => {
    let timer = null
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      setScrollTop(isScrollLoad.scrollTop)
    }, 200)
    return () => {
      if (timer) {
        clearTimeout(timer)
      }
    }
  }, [isScrollLoad.scrollTop, setScrollTop])
  useEffect(() => {
    if (params.page === 1) {
      window.scrollTo(0, 0)
    }
    if (isScrollLoad.flag || params.page === 1) {
      getAllTopics(params)
    }
  }, [params])

  useEffect(() => {
    if (params.page !== 1) {
      window.scrollTo(0, scrollTop)
    }
  }, [])
  const tabChangeHandler = useCallback(
    (value) => {
      getTopicsParams({
        ...params,
        page: 1,
        tab: value,
      })
    },
    [params]
  )
  return (
    <>
      <Header tab={params.tab} tabChangeHandler={tabChangeHandler} />
      <TopicsList topics={topics} />
      <Footer path="/home" />
    </>
  )
}

Home.propTypes = {
  getAllTopics: PropTypes.func.isRequired,
  getTopicsParams: PropTypes.func.isRequired,
  setScrollTop: PropTypes.func.isRequired,
  topics: PropTypes.array.isRequired,
  flag: PropTypes.bool.isRequired,
  scrollTop: PropTypes.number.isRequired,
  params: PropTypes.shape({
    page: PropTypes.number.isRequired,
    tab: PropTypes.string.isRequired,
    limit: PropTypes.number.isRequired,
  }),
}

const mapStateToProps = (state) => {
  return {
    topics: state.topics.datas,
    flag: state.topics.flag,
    params: state.topics.params,
    scrollTop: state.topics.scrollTop,
  }
}

const mapDispatchToProps = {
  getTopicsParams,
  getAllTopics,
  setScrollTop,
}
export default connect(mapStateToProps, mapDispatchToProps)(Home)
