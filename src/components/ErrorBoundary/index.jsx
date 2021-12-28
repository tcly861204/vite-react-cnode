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
