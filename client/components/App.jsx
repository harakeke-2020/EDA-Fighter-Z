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
import getPeople from '../api/people'
import getGame from '../api/game'
import updScore from '../api/upd'

export class App extends Component {
 state = {
   image1: '',
   image2: '',
   name1: '',
   name2: '',
   id1: 0,
   id2: 0,
   question: '',
   demo: true
 }

 componentDidMount () {
   this.buttonClicked()
 }

 buttonClicked = () => {
   getdbz()
     .then(data => data.body.resp.message)
     .then((data) => {
       this.setState({
         image1: data
       })
     })
   getdbz()
     .then(data => data.body.resp.message)
     .then((data) => {
       this.setState({
         image2: data
       })
     })
   getPeople()
     .then(data => {
       console.log(data.body)
       this.setState({
         id1: data.body[0].id,
         name1: data.body[0].name
       })
     })
     .then(getPeople()
       .then(data => {
         console.log(data.body)
         this.setState({
           id2: data.body[0].id,
           name2: data.body[0].name
         })
       }))
   getGame()
     .then(data => {
       this.setState({
         question: data.body[0].description
       })
     })
 }

  update = (id) => {
    updScore(id)
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
            <Fighter1 name={this.state.name1}/>
            <div className="Space"></div>
            <Fighter2 name={this.state.name2}/>
          </div>
          <div className="Section">
            <Picture1 pic={this.state.image1}/>
            <Vs />
            <Picture2 pic={this.state.image2}/>
          </div>
          <div className="Buttons">
            <Win1 update={this.update} id={this.state.id1}/>
            <GenerateButton buttonClicked={this.buttonClicked}/>
            <Win2 update={this.update} id={this.state.id2}/>
          </div>
          { this.state.demo
            ? <GameOne id="1" question={this.state.question}/>
            : <div><GameTwo id="2"/> <GameThree id="3"/></div>
          }

        </div>
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {

  }
}

export default connect(mapStateToProps)(App)
