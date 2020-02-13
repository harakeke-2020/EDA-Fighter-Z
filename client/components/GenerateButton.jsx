import React, { Component } from 'react'
import { connect } from 'react-redux'

export class GenerateButton extends Component {
  render () {
    return (
      <div className="Win">
        <button>Generate</button>
      </div>
    )
  }
}

export default connect()(GenerateButton)
