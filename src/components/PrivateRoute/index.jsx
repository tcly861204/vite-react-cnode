import React, { memo } from 'react'
import { Route, Redirect, useLocation } from 'react-router-dom'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

const PrivateRouter = memo((props) => {
  const location = useLocation()
  const { isLogin, component: Component, ...rest } = props
  return (
    <Route
      {...rest}
      render={() =>
        isLogin ? (
          <Component {...rest} />
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: location.pathname,
            }}
          />
        )
      }
    ></Route>
  )
})

PrivateRouter.propTypes = {
  isLogin: PropTypes.bool.isRequired,
}

const userInfo = (state) => {
  return {
    isLogin: !!state.userInfo.token,
  }
}

export default connect(userInfo)(PrivateRouter)
