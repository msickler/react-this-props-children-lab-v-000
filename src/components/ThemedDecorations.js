import React from 'react'
import PropTypes from 'prop-types'

export default class ThemedDecorations extends React.Component {
  render() {
    const childrenWithExtraProp = React.children.map(this.props.children, child=> {
      return React.cloneElement(child, {
        className: child.props.theme
      })
    })
  }
}
