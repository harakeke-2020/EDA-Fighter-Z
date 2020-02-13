import React, { Component } from 'react'
import { connect } from 'react-redux'
import getPeople from './api'

const randomID = Math.floor(Math.random() * Math.floor(12) + 1)

export class Fighter2 extends Component {
  state = {
    name: '',
    score: null
  }

  componentDidMount () {
    getPeople()
      .then(response => {
        this.setState({
          name: response.body[randomID].name,
          score: response.body[0].score
        })
      })
  }

  render () {
    return (
      <div className="Name">
        <h2>{this.state.name}eta</h2>
      </div>
    )
  }
}

export default connect()(Fighter2)
