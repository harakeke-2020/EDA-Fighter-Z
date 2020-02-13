import React, { Component } from 'react'
import { connect } from 'react-redux'

export class Fighter2 extends Component {
  render () {
    return (
      <div className="Name">
        <h2>han</h2>
      </div>
    )
  }
}

export default connect()(Fighter2)
