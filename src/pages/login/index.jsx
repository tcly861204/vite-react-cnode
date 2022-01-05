/*
  @Author: tcly861204
  @Date:   2022/1/6 上午12:12:03
  @Last Modified by:   tcly861204
  @Last Modified time: 2022/1/6 上午12:12:03
  @Github: https://tcly861204.github.io
*/
import React, { memo, useEffect, useState, useCallback } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { useLocation } from 'react-router-dom'
import { getUserInfo } from '@/store/actions/userInfo'
import { createBrowserHistory } from 'history'
import { Toast } from 'antd-mobile'
import './index.scss'
const history = createBrowserHistory()
const Login = memo(({ accessToken, getUserInfo }) => {
  const location = useLocation()
  const [token, setToken] = useState('')
  useEffect(() => {
    if (accessToken) {
      history.push({
        pathname: location.state ? location.state : '/home',
      })
    }
  }, [accessToken])
  const getToken = useCallback((e) => {
    setToken(e.target.value)
  }, [])
  const handleSubmit = useCallback(() => {
    if (token) {
      getUserInfo(
        token,
        location.state && location.state.from ? location.state.from : '/home'
      )
    } else {
      Toast.info('请输入token', 2)
    }
  }, [token])
  return (
    <div className="cn-login">
      <div className="cn-login__wrapper">
        <h1 className="title">欢迎来到CNODE社区</h1>
        <div className="cn-login__form">
          <div
            className="cn-login__item ui-border-radius"
            style={{ background: '#fff' }}
          >
            <input
              autoFocus
              type="text"
              value={token}
              onChange={getToken}
              placeholder="请输入accessToken"
            />
          </div>
          <div className="cn-login__item">
            <button onClick={handleSubmit}>登录</button>
          </div>
        </div>
      </div>
    </div>
  )
})

Login.propTypes = {
  accessToken: PropTypes.string,
  getUserInfo: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => {
  return {
    accessToken: state.userInfo.token,
  }
}
const mapDispatchToProps = {
  getUserInfo,
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
