import React, { Component } from 'react'
import style from './styles'
import {FeriaContainer,ContenidoFeriaContainer} from '../containers'
export default class Ferias extends Component {

  constructor(){
    super()

  }
  render() {
    return (
      <div class='container-fluid' id ='backgroundDiv'>
        <div class='container-fluid' id ='containerDiv' >
          <div style = {style.feria.headerFerias}>    </div>
          <br/>
          <ContenidoFeriaContainer/>
          <FeriaContainer/>
        </div>
      </div>
    )
  }
}
