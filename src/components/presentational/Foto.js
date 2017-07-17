
import React, { Component } from 'react'
import style from './styles'
import taller from '../../../assets/images/foto-taller-1.jpg'
import { NavLink} from 'react-router-dom'

export default class Foto extends Component {
  constructor(args){
    super()
    this.state ={
      url2: false,
    }
  }
  onComponentDidMount(){
    this.setState ({url :this.props.propiedades.pic, name: this.props.propiedades.nombre})
  }
  handleClick(event){
    //console.log ('foto func')
    //paso la info de vuelta al container para que la use
    // en el onClick y hacer router al layout productos
    this.props.whenClicked(this.props.propiedades)
  }
  handlepic2(){
    this.setState ({url2 :true})
    console.log('paso al pic 2')
  }
  handlepic1(){
    this.setState ({url2 :false})
    console.log('paso al pic 1')
  }
  //TODO read about image preloading
  render() {
    let url = this.props.propiedades.pic
    if(this.state.url2){
      url = this.props.propiedades.pic2
    }

    let nombre = this.props.propiedades.nombre
    //console.log ('caca '+ url)
    return (

      <div class = 'container-fluid col-xs-12 col-sm-6 col-md-4 col-lg-4' style= {style.foto.container}>
        <div  class='btn btn-block' onClick = {this.handleClick.bind(this)} onMouseEnter={this.handlepic2.bind(this)} onMouseLeave={this.handlepic1.bind(this)} style= {style.foto.container}>
          <img src= {url} class="img-responsive" style= {style.foto.cover}  alt={nombre}>
          </img>
        </div>

      </div>
    )
  }
}
