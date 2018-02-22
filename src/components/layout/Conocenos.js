import React, { Component } from 'react'
import style from './styles'
import {ConocenosContainer} from '../containers'
export default class Conocenos extends Component {
  constructor(){
    super()

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
          <ConocenosContainer/>
        </div>
      </div>
    )
  }
}
