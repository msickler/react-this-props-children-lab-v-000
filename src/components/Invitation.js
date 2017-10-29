import React from 'react'
import PropTypes from 'prop-types'

export default class Invitation extends React.Component {
  render() {
    return (
      <div>
        <h1>Youve been invited!</h1>
        {this.props.children}
      </div>
    )
  }
}
