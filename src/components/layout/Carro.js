import React, { Component } from 'react'
import style from './styles'
import { CarroContainer } from '../containers'

export default class Carro extends Component {
  constructor(){
    super()

  }
  render() {
    return (
      <div class='container-fluid' id ='backgroundDiv'>
        <div class='container-fluid' id ='containerDiv' style ={style.universal.containerDiv}>
          mi carro me lo robaaaaron
          <CarroContainer/>
        </div>
      </div>
    )
  }
}
