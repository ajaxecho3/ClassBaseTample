import React, { Component } from 'react'

export default class Expand extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width={this.props.size ?? '1em'} height={this.props.size ?? '1em'} viewBox="0 0 24 24">
        <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 9L4 4m0 0v4m0-4h4m7 5l5-5m0 0v4m0-4h-4M9 15l-5 5m0 0v-4m0 4h4m7-5l5 5m0 0v-4m0 4h-4"></path>
      </svg>
    )
  }
}
