import React, { Component } from 'react'
import { connect } from 'react-redux'

export class GameOne extends Component {
  render () {
    return (
      <div className="GameBox">
        <p>
Lorem ipsum dolor sit amet, consectetur adipiscing elit.
Fusce eu pharetra nisl. Lorem ipsum dolor sit amet,
consectetur adipiscing elit.
Suspendisse non odio non velit bibendum ornare.
        </p>
      </div>
    )
  }
}

export default connect()(GameOne)
