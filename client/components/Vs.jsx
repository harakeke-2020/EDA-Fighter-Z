import React, { Component } from 'react'
import { connect } from 'react-redux'

export class Vs extends Component {
  render () {
    return (
      <div className="Vs">
        <image src="Vs.png"></image>
      </div>
    )
  }
}

export default connect()(Vs)
