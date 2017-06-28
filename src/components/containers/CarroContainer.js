import React, { Component } from 'react'
import actions from '../../actions'
import {connect} from 'react-redux'
import {CarroBuy, CarroProduct} from '../presentational'

class CarroContainer extends Component {
  constructor(){
    super()
    this.state = {
      cartList:[]
    }
    console.log ('cosntructor de carro')
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

  render() {
    //console.log ('carreta '+ JSON.stringify(this.state.cartList))

    const productList =
    this.props.productToCart.cartList.map((productInCart,i)=>{
      return(
        <div class ='container-fluid' key ={i}>
          <CarroProduct indice ={i} propiedades = {productInCart} whenClicked={this.goToProduct.bind(this)} whenErase={this.deleteProduct.bind(this)} changeQtty={this.QttyToggle.bind(this)} />
        </div>


      )
    })
    return (
      <div>
        <div class='container-fluid col-xs-8 col-sm-8 col-md-7 col-lg-6'>

          {productList}

        </div>
        <div class='container-fluid col-xs-4 col-sm-4 col-md-5 col-lg-6'>
          <CarroBuy subTotal = {this.props.productToCart.precioSubTotal}/>
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
  }
}


const stateToProps = (state) => {
  return{
    // state is d store in this case for convenction
    // cojo el producto d state(store) y lo paso a props xa cogerlo
    //en state.blabla dices de que reducer quieres info
    //y tu le asignas una key q quieras
    productToCart:state.carro
  }
}

export default connect (stateToProps,dispatchToProps)(CarroContainer)


