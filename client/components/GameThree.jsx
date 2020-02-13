import React, { Component } from 'react'
import { connect } from 'react-redux'

export class GamesThree extends Component {
  render () {
    return (
      <div>
        <p> Is JavaScript dynamically typed or statically typed?</p>
      </div>
    )
  }
}

export default connect()(GamesThree)
