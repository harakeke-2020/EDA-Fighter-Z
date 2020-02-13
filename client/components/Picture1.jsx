import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getdbz } from '../api/dbz'

const randomNumber = Math.floor(Math.random() * Math.floor(18))

export class Picture1 extends Component {

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

  render () {
    return (
      <div className="PictureBox">
        <div className="Picture">
          <img src={this.props.image} />
        </div>
      </div>
    )
  }
}

function mapStateToProps (store) {
  return { image: store.image1 }
}

export default connect(mapStateToProps)(Picture1)
