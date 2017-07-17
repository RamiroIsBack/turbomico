import React, { Component } from 'react'
import style from './styles'
import {FeriaContainer} from '../containers'
export default class Ferias extends Component {

  constructor(){
    super()

  }
  render() {
    return (
      <div class='container-fluid' id ='backgroundDiv'>
        <div class='container-fluid' id ='containerDiv' style ={style.universal.containerDiv}>
          <FeriaContainer/>
        </div>
      </div>
    )
  }
}
