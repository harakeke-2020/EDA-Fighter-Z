import React, { Component } from 'react'
import { connect } from 'react-redux'

import Fighter1 from './Fighter1'
import Fighter2 from './Fighter2'
import Picture1 from './Picture1'
import Picture2 from './Picture2'
import Vs from './Vs'
import GenerateButton from './GenerateButton'
import GameOne from './GameOne'
import GameTwo from './GameTwo'
import GameThree from './GameThree'
import Win1 from './Win1'
import Win2 from './Win2'

import { getdbz } from '../api/dbz'
import { addImage1, addImage2 } from '../actions'

export class App extends Component {
  state = {
    demo: true
  }

  componentDidMount () {
    getdbz()
      .then(data => this.props.dipatch.addImage1(data))
    getdbz()
      .then(data => this.props.dipatch.addImage2(data))
  }

  render () {
    return (
      <div className="Display">
        <div className="Header">
          <h1>EDA FIGHTER Z</h1>
          <p>Test your strength</p>
        </div>
        <div className="Arena">
          <div className="Fighters">
            <Fighter1 />
            <div className="Space"></div>
            <Fighter2 />
          </div>
          <div className="Section">
            <Picture1 />
            <Vs />
            <Picture2 />
          </div>
          <div className="Buttons">
            <Win1 />
            <GenerateButton />
            <Win2 />
            { this.state.demo
              ? <GameOne id="1"/>
              : <div><GameTwo id="2"/> <GameThree id="3"/></div>
            }
          </div>
        </div>
      </div>
    )
  }
}

export default connect()(App)
