import React, { Component } from 'react'
import actions from '../../actions'
import {connect} from 'react-redux'
import {CarroBuy, CarroProduct} from '../presentational'
import style from './styles'
import { NavLink} from 'react-router-dom'


class CarroContainer extends Component {
  constructor(){
    super()
    this.state = {
      cartList:[]
    }
  }
  componentWillMount(){
    if (this.props.storeContenidos.ContenidosLoaded == false){
      //en la accion ya lo pone a true
      this.props.getContenidos()
    }
  }
  componentDidMount() {
    //we'll have to fill d list from API here?
    // I read is better to do it in the action
  }

  goToProduct(foto){
    this.props.selectFoto(foto)
  }
  deleteProduct(indice){
    this.props.eraseProduct(indice)
  }
  QttyToggle(indice,qtty){
    this.props.changeQtty(indice,qtty)
  }
  goToCreaciones(event){
    let tipo = this.props.productToCart.cartList[this.props.productToCart.cartList.length-1].tipo
    this.props.moveToCreacionesSection(tipo)
  }

  render() {
    //console.log ('carreta '+ JSON.stringify(this.state.cartList))
    let pedidoContenido = {}
    let postVentaContenido = {}
    for (let i = 0 ; i < this.props.storeContenidos.listaContenidos.length ; i++) {

      if (this.props.storeContenidos.listaContenidos[i].id == 'pedido'){
        pedidoContenido = this.props.storeContenidos.listaContenidos[i]
        break
      }
    }
    for (let i = 0 ; i < this.props.storeContenidos.listaContenidos.length ; i++) {

      if (this.props.storeContenidos.listaContenidos[i].id == 'postVenta'){
        postVentaContenido = this.props.storeContenidos.listaContenidos[i]
        break
      }
    }

    const productList =
    this.props.productToCart.cartList.map((productInCart,i)=>{
      return(
        <div class ='container-fluid' style={{padding: 0}} key ={i}>
          <CarroProduct indice ={i} propiedades = {productInCart} whenClicked={this.goToProduct.bind(this)} whenErase={this.deleteProduct.bind(this)} changeQtty={this.QttyToggle.bind(this)} />
        </div>


      )
    })
    return (
      <div>
        <div class='container-fluid col-xs-7 col-sm-8 col-md-7 col-lg-6' style={{padding: 0}}>

          {productList}
          <NavLink onClick ={this.goToCreaciones.bind(this)} to='/Diseños' class= 'btn center-block' style= {style.carroContainer.btnSeguirComprando}> seguir comprando  <h4  class = 'glyphicon glyphicon-hand-left'></h4>
          </NavLink>
        </div>
        <div class=' col-xs-5 col-sm-4 col-md-5 col-lg-6'>
          <CarroBuy carroPropiedades = {this.props.productToCart} postVentaContenido={postVentaContenido} pedidoContenido ={pedidoContenido}/>
        </div>
      </div>
    )
  }
}

const dispatchToProps = (dispatch) =>{

  return{
    //TODO el pay, order, recoger en feria
    //pay: (cartList) =>dispatch(actions.pay(cartList))
    selectFoto: (foto) =>dispatch(actions.selectedFoto(foto)),
    eraseProduct: (indice) =>dispatch(actions.eraseProduct(indice)),
    changeQtty: (indice, qtty) =>dispatch(actions.changeQtty(indice,qtty)),
    moveToCreacionesSection:(creacionTipo)=>dispatch(actions.moveToCreacionesSection(creacionTipo)),
  }
}


const stateToProps = (state) => {
  return{
    // state is d store in this case for convenction
    // cojo el producto d state(store) y lo paso a props xa cogerlo
    //en state.blabla dices de que reducer quieres info
    //y tu le asignas una key q quieras
    storeContenidos: state.contenidos,
    productToCart:state.carro
  }
}

export default connect (stateToProps,dispatchToProps)(CarroContainer)


