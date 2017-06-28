
import React, { Component } from 'react'
import style from './styles'
import taller from '../../../assets/images/foto-taller-1.jpg'
import { NavLink} from 'react-router-dom'

export default class Foto extends Component {
  handleClick(event){
    console.log ('foto func')
    //paso la info de vuelta al container para que la use
    // en el onClick y hacer router al layout productos
    this.props.whenClicked(this.props.propiedades)
  }
  //TODO read about image preloading
  render() {
    let name = this.props.propiedades.name
    let url = '/images/'+this.props.propiedades.name
    console.log ('caca '+ url)
    return (
      <div class = 'container-fluid col-xs-12 col-sm-6 col-md-4 col-lg-4' style= {style.foto.container}>
        <NavLink to='/Productos' class='btn btn-block' onClick = {this.handleClick.bind(this)} style= {style.foto.container}>
          <img src= {url} class="img-responsive" style= {style.foto.cover}  alt={name}>
          </img>
        </NavLink>

      </div>
    )
  }
}
