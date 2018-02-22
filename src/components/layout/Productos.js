import React, { Component } from 'react'
import {ProductContainer} from '../containers'
import style from './styles'
export default class Productos extends Component {
  constructor(){
    super()

  //TODO
  //usar un Card d bootstrap con el hint si pones <ca
  //ya t escribe mazo del tir'on

  }
  render() {
    return (
<<<<<<< HEAD
      <div className='container-fluid' id ='backgroundDiv'>
        <div className='container-fluid' id ='containerDiv' style ={style.universal.containerDiv}>
=======
      <div class='container-fluid' id ='backgroundDiv'>
        <div class='container-fluid' id ='containerDiv' style ={style.universal.containerDiv}>
>>>>>>> beef1cdb7be8214a7eb030961e76e474c8d189d0
          <ProductContainer/>
        </div>
      </div>
    )
  }
}
