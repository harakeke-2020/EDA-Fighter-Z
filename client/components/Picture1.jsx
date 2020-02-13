import React, { Component } from 'react'
import { connect } from 'react-redux'

export class Picture1 extends Component {
  render () {
    return (
      <div className="PictureBox">
        <div className="Picture">
        </div>
      </div>
    )
  }
}

export default connect()(Picture1)
