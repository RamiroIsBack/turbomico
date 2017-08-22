
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

  }
  handlepic1(){
    this.setState ({url2 :false})

  }
  //TODO read about image preloading
  render() {
    let url = this.props.propiedades.pic
    if(this.state.url2){
      url = this.props.propiedades.pic2
    }

    let nombre = this.props.propiedades.nombre
    let precio =this.props.propiedades.precio
    //console.log ('caca '+ url)
    return (

      <div class = 'container col-xs-6 col-sm-6 col-md-4 col-lg-4' style= {{width: 300, height: 275, }}>
        <div  class='btn btn-block' onClick = {this.handleClick.bind(this)} onMouseEnter={this.handlepic2.bind(this)} onMouseLeave={this.handlepic1.bind(this)} style= {style.foto.container}>
          <img src= {url} class="img-responsive" style= {style.foto.cover}  alt={nombre}>
          </img>
        </div>
        <div class = 'row' style= {style.foto.container}>
          <div class = 'container-fluid col-xs-9 col-sm-9 col-md-9 col-lg-9'>
            <h5 class='text-muted' style= {style.foto.footName}>{nombre}</h5>
          </div>
          <div class = 'container-fluid col-xs-3 col-sm-3 col-md-3 col-lg-3'>
            <h6 class = 'text-muted pull-right' style= {style.foto.footPrice}>{precio}€</h6>
          </div>
        </div>
      </div>
    )
  }
}
