import React, { Component } from 'react'

export default class GreaterThan extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width={this.props.size ?? '1em'} height={this.props.size ?? '1em'} viewBox="0 0 24 24">
        <path fill="currentColor" fillRule="evenodd" d="m6.5 17.5l8.25-5.5L6.5 6.5l1-1.5L18 12L7.5 19z"></path>
      </svg>
    )
  }
}
