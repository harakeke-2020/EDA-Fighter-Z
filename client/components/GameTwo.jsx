import React, { Component } from 'react'
import { connect } from 'react-redux'

export class GameTwo extends Component {
  render () {
    return (
      <div>
        <p> How long did Brendan Eich take to write the JavaScript programming language?</p>
      </div>
    )
  }
}

export default connect()(GameTwo)
