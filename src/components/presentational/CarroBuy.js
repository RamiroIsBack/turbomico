
import React, { Component } from 'react'
import style from './styles'
import arteLogo from '../../../assets/images/artesaniaDeGalicia-1.png'
export default class CarroBuy extends Component {
  render() {
    console.log ('subtotal: '+this.props.subTotal)
    return (
      <div class ='row container-fluid' style= {style.foto.container}>
        <div class='container-fluid col-xs-12 col-sm-12 col-md-6 col-lg-8' >
          <div class ='row '>
            <div class='container-fluid col-xs-6 col-sm-6 col-md-6 col-lg-8' style= {style.foto.container}>

              <h5>Precio: </h5>
              <h5>envio: </h5>
              <h5>Total: </h5>
            </div>
            <div class='container-fluid col-xs-6 col-sm-6 col-md-6 col-lg-4' style= {style.foto.container}>

              <h5>{this.props.subTotal} €</h5>
              <h5 class = 'text-muted'>gratis</h5>
              <h5 style = {style.carroProduct.texto}>{this.props.subTotal} €</h5>
            </div>
            <a class= 'btn btn-success' style= {style.carroProduct.btnPedido}> REALIZAR PEDIDO
              <h4  class = 'glyphicon glyphicon-ok-circle'></h4>
            </a>
          </div>
        </div>
        <div class='container-fluid col-xs-12 col-sm-12 col-md-6 col-lg-4'style= {style.foto.container}>
          <img role='presentation' src={arteLogo} class ='img-rounded'>
          </img>
          <hr/>
          <h3>this is a real bla bla bla for no reason but to make this line looooong</h3>
          <h5>laalaalaala</h5>
          <h7>yes a bla bla bla line is very apreciated </h7>
        </div>
      </div>
    )
  }
}


