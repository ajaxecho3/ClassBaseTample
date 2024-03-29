import React, { Component } from 'react'

export class LessThan extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width={this.props.size ?? '1em'} height={this.props.size ?? '1em'} viewBox="0 0 24 24">
        <path fill="currentColor" fillRule="evenodd" d="M17.5 17.5L9.25 12l8.25-5.5l-1-1.5L6 12l10.5 7z"></path>
      </svg>
    )
  }
}

export default LessThan 
