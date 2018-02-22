import React, { Component } from 'react'
import { FotoContainer } from '../containers'
import style from './styles'
export default class Diseños extends Component {
  constructor(){
    super()

  }
  //TODO
  // sidebar to navigatebetween different product types
  render() {
    //console.log ('caca '+ FotoContainer)

    return (
<<<<<<< HEAD
      <div className='container-fluid' id ='backgroundDiv' style= {{padding: 0 }}>
        <div className='container-fluid' id ='containerDiv' style ={style.universal.containerDiv}>
=======
      <div class='container-fluid' id ='backgroundDiv'>
        <div class='container-fluid' id ='containerDiv' style ={style.universal.containerDiv}>
>>>>>>> beef1cdb7be8214a7eb030961e76e474c8d189d0
          <FotoContainer/>
        </div>
      </div>
    )
  }
}
