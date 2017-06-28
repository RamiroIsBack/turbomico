import React, { Component } from 'react'
import style from './styles'
export default class Login extends Component {

  render() {
    console.log ('caca')
    return (
      <div class='container-fluid' id ='backgroundDiv'>
        <div class='container-fluid' id ='containerDiv' style ={style.universal.containerDiv}>
          <h1>wild Login!</h1>
        </div>
      </div>
    )
  }
}
