import React, { Component } from 'react'
import { connect } from 'react-redux'

class GameOne extends Component {
  render () {
    return (
      <div className="GameBox">
        <p>{this.props.question}</p>
      </div>
    )
  }
}

export default connect()(GameOne)
