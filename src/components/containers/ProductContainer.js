import React, { Component } from 'react'
import actions from '../../actions'
import {connect} from 'react-redux'
import {Product, ProductSpecification} from '../presentational'

class ProductContainer extends Component {
  compoenentDidMount(){
    //make it start at the top of the page every time
    window.scrollTo(0, 0)
  }
  compoenentDidUpdate(){
    //make it start at the top of the page every time
    window.scrollTo(0, 0)
  }

  selectProduct(selectedProduct){
    //console.log ('caca '+ JSON.stringify(selectedProduct))
    //this fires an action down below in this class
    this.props.selectFoto(selectedProduct)
  }

  render() {
    //selectedFoto es el key del valor del state en el store
    var product = this.props.productToshow.selectedFoto
    var material =''
    if(product.materiales != null){
      material = product.materiales
    }else{
      material = 'pelo'
    }
    return (
      <div>
        <div class='container-fluid col-xs-12 col-sm-8 col-md-8 col-lg-6'>
          <Product propiedades = {product} whenClicked={this.selectProduct.bind(this)}/>
        </div>
        <div class='container-fluid col-xs-12 col-sm-4 col-md-4 col-lg-6'>
          <ProductSpecification propiedades = {product}/>
        </div>
      </div>
    )
  }
}

const dispatchToProps = (dispatch) =>{

  return{

    selectFoto: (selectedProduct) =>dispatch(actions.productToCart(selectedProduct))
  }
}

//state is d store in this case for convenction
//cojo el producto d state(store) y lo paso a props xa cogerlo
const stateToProps = (state) => {
  return{
    //en state.blabla dices de que reducer quieres info
    //y tu le asignas una key q quieras
    productToshow:state.product
  }
}

export default connect (stateToProps,dispatchToProps)(ProductContainer)
