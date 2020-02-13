import React, { Component } from 'react'
import { connect } from 'react-redux'

export class Vs extends Component {
  render () {
    return (
      <div className="Vs">
        <img src="Vs.png"></img>
      </div>
    )
  }
}

export default connect()(Vs)
