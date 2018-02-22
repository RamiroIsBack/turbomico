import React, { Component } from 'react'
import style from './styles'
import { CarroContainer } from '../containers'

export default class Carro extends Component {
<<<<<<< HEAD

  render() {
    return (

      <div className='container-fluid' id ='containerDiv' style ={style.universal.containerDiv}>
=======
  constructor(){
    super()

  }
  render() {
    return (

      <div class='container-fluid' id ='containerDiv' style ={style.universal.containerDiv}>
>>>>>>> beef1cdb7be8214a7eb030961e76e474c8d189d0
        <CarroContainer/>
      </div>

    )
  }
}
