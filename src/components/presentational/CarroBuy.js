
import React, { Component } from 'react'
import style from './styles'
import arteLogo from '../../../assets/images/artesaniaDeGalicia-1.png'
export default class CarroBuy extends Component {
  render() {
    console.log ('subtotal: '+this.props.subTotal)
    return (
      <div class ='row container-fluid' style={{padding :4, paddingRight:10,top: 0, bottom:142, position:'fixed',overflowY:'scroll', overflowX:'hidden' }}>
        <div class ='row container-fluid' style={{marginTop:'60px'}}>
          <div class='container-fluid col-xs-12 col-sm-12 col-md-12 col-lg-6' >
            <div class ='row '>
              <div class='container-fluid col-xs-6 col-sm-6 col-md-6 col-lg-8' style= {style.foto.container}>

                <h5>elementos: </h5>
                <h5>envio: </h5>
                <h5>Total: </h5>
              </div>
              <div class='container-fluid col-xs-6 col-sm-6 col-md-6 col-lg-4' style= {style.foto.container}>

                <h5>{this.props.carroPropiedades.numProducts}</h5>
                <h5 class = 'text-muted'>gratis</h5>
                <h5 style = {style.carroProduct.texto}>{this.props.carroPropiedades.precioSubTotal} €</h5>
              </div>
              <a class= 'btn btn-success' style= {style.carroProduct.btnPedido}> REALIZAR PEDIDO <h4  class = 'glyphicon glyphicon-ok-circle'></h4>
              </a>
            </div>
          </div>
          <br/>
          <div class=' clear-fix container-fluid col-xs-12 col-sm-12 col-md-12 col-lg-6' style={{paddingLeft: 0}} >

            <h4 style = {{whiteSpace: 'initial',paddingLeft: 0}}>{this.props.pedidoContenido.descripcion.pedidoTitulo}</h4>

            <br/>


            {this.props.pedidoContenido.descripcion.pedidoInfo.split('\n').map((item, key) => {
              return <span style = {{whiteSpace: 'initial',paddingLeft: 0}} key={key}>{item}<br/></span>})}

          </div>
        </div>
      </div>
    )
  }
}


