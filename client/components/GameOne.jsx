import React, { Component } from 'react'
import { connect } from 'react-redux'

export class GameOne extends Component {
  render () {
    return (
      <div className="GameBox">
        <p>Who created Javascript?</p> 
      </div>
    )
  }
}

export default connect()(GameOne)
