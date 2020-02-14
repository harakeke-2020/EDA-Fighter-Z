import React, { Component } from 'react'
import { connect } from 'react-redux'

export class Win2 extends Component {
  render () {
    return (
      <div className="Win">
        <button onClick={this.props.update}>Win</button>
      </div>
    )
  }
}

export default connect()(Win2)
