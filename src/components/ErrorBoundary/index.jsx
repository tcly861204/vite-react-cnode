/*
  @Author: tcly861204
  @Date:   2022/1/6 上午12:12:03
  @Last Modified by:   tcly861204
  @Last Modified time: 2022/1/6 上午12:12:03
  @Github: https://tcly861204.github.io
*/
import React, { Component } from 'react'

class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = {
      flag: false,
    }
  }

  static getDerivedStateFromError() {
    return { flag: true }
  }

  render() {
    if (this.state.flag) {
      return <h1>Something went wrong.</h1>
    }
    return this.props.children
  }
}

export default ErrorBoundary
