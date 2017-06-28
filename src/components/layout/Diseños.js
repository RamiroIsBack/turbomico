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
      <div class='container-fluid' id ='backgroundDiv'>
        <div class='container-fluid' id ='containerDiv' style ={style.universal.containerDiv}>
          <FotoContainer/>
        </div>
      </div>
    )
  }
}
