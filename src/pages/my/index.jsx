import React, { useEffect, memo } from 'react'
import Footer from '@/components/Footer'
import './index.scss'
import { connect } from 'react-redux'
import { useLocation, Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { getParams } from '@/libs/utils'
import { getUserCenterInfo } from '@/store/actions/my'
import { loginOut } from '@/store/actions/userInfo'

const My = memo(({ user, getUserCenterInfo, userInfo, loginOut }) => {
  const { loginname, avatar_url, score, recent_replies, recent_topics } = user
  const { search } = useLocation()
  useEffect(() => {
    const username = getParams(search, 'username')
    getUserCenterInfo(username)
  }, [search])
  return (
    <>
      <div className="cn-my">
        <div className="cn-my__hd ui-border-b">
          <div className="user-avatar">
            <img src={avatar_url} alt={loginname} />
          </div>
          <div className="user-info">
            {loginname ? (
              <>
                <p className="user-name">{loginname}</p>
                <p className="integral">积分{score || 0}</p>
              </>
            ) : (
              <Link
                className="user-name"
                to={{
                  pathname: '/login',
                  state: { from: '/my' },
                }}
              >
                登录
              </Link>
            )}
          </div>
        </div>
        {loginname ? (
          <ul className="cn-my__bd ui-border-t">
            <li className="cn-my__item ui-border-b">
              <Link
                to={{
                  pathname: '/my-list',
                  state: {
                    data: recent_replies,
                  },
                }}
              >
                最新创建的话题
              </Link>
            </li>
            <li className="cn-my__item ui-border-b">
              <Link
                to={{
                  pathname: '/my-list',
                  state: {
                    data: recent_topics,
                  },
                }}
              >
                最近参与的话题
              </Link>
            </li>
            <li className="cn-my__item ui-border-b">
              <Link
                to={{
                  pathname: '/collect',
                  search: `username=${loginname}`,
                }}
              >
                收藏的
              </Link>
            </li>
          </ul>
        ) : null}
        {!!userInfo.loginname && loginname === userInfo.loginname ? (
          <>
            <div className="cn-my__ft ui-border-tb" onClick={() => loginOut()}>
              退出登录
            </div>
          </>
        ) : null}
      </div>
      {!!userInfo.loginname && loginname === userInfo.loginname ? (
        <Footer path="/my" />
      ) : null}
    </>
  )
})
My.propTypes = {
  user: PropTypes.object.isRequired,
  userInfo: PropTypes.object.isRequired,
  getUserCenterInfo: PropTypes.func.isRequired,
  loginOut: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => ({
  user: state.user,
  userInfo: state.userInfo,
})

const mapDispatchToProps = {
  getUserCenterInfo,
  loginOut,
}

export default connect(mapStateToProps, mapDispatchToProps)(My)
