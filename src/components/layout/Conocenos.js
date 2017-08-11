import React, { Component } from 'react'
import style from './styles'
import {ConocenosContainer} from '../containers'
export default class Conocenos extends Component {
  constructor(){
    super()

  }
  render() {
    return (
      <div class='container-fluid' id ='backgroundDiv'>
        <div class='container-fluid' id ='containerDiv' style ={style.universal.containerDiv}>
          <ConocenosContainer/>
        </div>
      </div>
    )
  }
}
