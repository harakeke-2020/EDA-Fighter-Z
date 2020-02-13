import React, { Component } from 'react'
import { connect } from 'react-redux'

export class Fighter1 extends Component {



  render () {
    return (
      <div className="Name">
        <h2>ku</h2>
      </div>
    )
  }
}

export default connect()(Fighter1)
