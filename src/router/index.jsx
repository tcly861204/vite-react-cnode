import React, { lazy, Suspense } from 'react'
import {
  BrowserRouter,
  Route,
  Switch,
  Redirect,
  withRouter,
} from 'react-router-dom'
import ErrorBoundary from '@/components/ErrorBoundary/index'
import PrivateRoute from '@/components/PrivateRoute/index'
const routerList = [
  {
    name: 'home',
    private: false,
    component: lazy(() => import('../pages/home/index.jsx')),
    pathname: '/home',
  },
  {
    name: 'details',
    private: false,
    component: lazy(() => import('../pages/details/index.jsx')),
    pathname: '/details',
  },
  {
    name: 'my',
    private: false,
    component: lazy(() => import('../pages/my/index.jsx')),
    pathname: '/my',
  },
  {
    name: 'login',
    private: false,
    component: lazy(() => import('../pages/login/index.jsx')),
    pathname: '/login',
  },
  {
    name: 'myList',
    private: false,
    component: lazy(() => import('../pages/my-list/index.jsx')),
    pathname: '/my-list',
  },
  {
    name: 'collect',
    private: false,
    component: lazy(() => import('../pages/collect/index.jsx')),
    pathname: '/collect',
  },
  {
    name: 'message',
    private: true,
    component: lazy(() => import('../pages/message/index.jsx')),
    pathname: '/message',
  },
]

const Routers = withRouter((props) => {
  // useEffect(() => {
  //   props.history.listen((history) => {
  //     // console.log(history)
  //   })
  // }, [props])
  return (
    <ErrorBoundary>
      <Suspense fallback={<div></div>}>
        <Switch>
          {routerList.map((router, index) => {
            if (router.private) {
              return (
                <PrivateRoute
                  key={index}
                  path={router.pathname}
                  component={router.component}
                />
              )
            } else {
              return (
                <Route
                  key={index}
                  path={router.pathname}
                  component={router.component}
                />
              )
            }
          })}
          <Redirect to="/home" />
        </Switch>
      </Suspense>
    </ErrorBoundary>
  )
})

export default function () {
  return (
    <BrowserRouter>
      <Routers />
    </BrowserRouter>
  )
}
