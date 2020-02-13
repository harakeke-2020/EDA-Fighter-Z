import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getdbz } from '../api/dbz'

// const randomNumber = Math.floor(Math.random() * Math.floor(18))

export function Picture1 (props) {
  // componentDidMount () {
  //   getdbz()
  //     .then(response => response.body)
  //     .then(data => {
  //       const skratata = data.resp[randomNumber].image
  //       console.log(data.resp[randomNumber].image)
  //       this.setState({
  //         image: skratata
  //       })
  //     })
  // }

  return (
    <div className="PictureBox">
      <div className="Picture">
        <img src={props.pic} height="350px"/>
      </div>
    </div>
  )
}

// function mapStateToProps (store) {
//   return { image: store.image1 }
// }

export default Picture1
