import React, { Component } from 'react'
import style from './styles'
export default class Ferias extends Component {

  constructor(){
    super()

  }
  render() {
    return (
      <div class='container-fluid' id ='backgroundDiv'>
        <div class='container-fluid' id ='containerDiv' style ={style.universal.containerDiv}>
          vamos d feria
        </div>
      </div>
    )
  }
}
