import React, { Component } from 'react'
import actions from '../../actions'
import {connect} from 'react-redux'
<<<<<<< HEAD
import {MagnifyingProduct, Product, ProductSpecification} from '../presentational'
import history from '../../utils/history'


class ProductContainer extends Component {
  componentWillMount() {

  }
=======
import {Product, ProductSpecification} from '../presentational'

class ProductContainer extends Component {
>>>>>>> beef1cdb7be8214a7eb030961e76e474c8d189d0
  compoenentDidMount(){
    //make it start at the top of the page every time
    window.scrollTo(0, 0)
  }
  compoenentDidUpdate(){
    //make it start at the top of the page every time
    window.scrollTo(0, 0)
  }

  selectProduct(selectedProduct){
<<<<<<< HEAD
    this.props.navActive('carro', 'navbarMicoFront')
    this.props.productToCart(selectedProduct)

  }

  cierraDialogosNavbar(event){
    this.props.toggleModal('closeDropdowns')
=======
    //console.log ('caca '+ JSON.stringify(selectedProduct))
    //this fires an action down below in this class
    this.props.selectFoto(selectedProduct)
>>>>>>> beef1cdb7be8214a7eb030961e76e474c8d189d0
  }

  render() {
    let artesania = {}
<<<<<<< HEAD
    //selectedFoto es el key del valor del state en el store
    var product = this.props.productToshow.selectedFoto
    if (product === null){
      //routing programatically, now i can prevent if there is an error
      //history.push('/Productos')
      return null
    }
    if (this.props.storeContenidos.listaContenidos.length !=0){
      for (let i = 0 ; i < this.props.storeContenidos.listaContenidos.length ; i++) {

        if (this.props.storeContenidos.listaContenidos[i].id == 'artesania'){
          artesania = this.props.storeContenidos.listaContenidos[i]
          break
        }
      }
    }
    //<div onClick = {this.cierraDialogosNavbar.bind(this)}>
    //  <div className='container-fluid col-xs-12 col-sm-8 col-md-8 col-lg-6'>
    //    <Product propiedades = {product} whenClicked={this.selectProduct.bind(this)}/>
    //  </div>
    //  {artesania.headerFoto &&
    //    <div className='container-fluid col-xs-12 col-sm-4 col-md-4 col-lg-6'>
    //      <ProductSpecification propiedades = {product} contenido = {artesania}/>
    //    </div>
    //  }
    //</div>
    return (
      <div onClick = {this.cierraDialogosNavbar.bind(this)}>
        <div className='container-fluid col-xs-12 col-sm-6 col-md-6 col-lg-6'>
          <MagnifyingProduct propiedades = {product} whenClicked={this.selectProduct.bind(this)}/>
        </div>
        {artesania.headerFoto &&
          <div className='container-fluid col-xs-12 col-sm-6 col-md-6 col-lg-6'>
            <ProductSpecification propiedades = {product} contenido = {artesania}/>
          </div>
        }
      </div>

=======

    for (let i = 0 ; i < this.props.storeContenidos.listaContenidos.length ; i++) {

      if (this.props.storeContenidos.listaContenidos[i].id == 'artesania'){
        artesania = this.props.storeContenidos.listaContenidos[i]
        break
      }
    }
    //selectedFoto es el key del valor del state en el store
    var product = this.props.productToshow.selectedFoto

    return (
      <div>
        <div class='container-fluid col-xs-12 col-sm-8 col-md-8 col-lg-6'>
          <Product propiedades = {product} whenClicked={this.selectProduct.bind(this)}/>
        </div>
        <div class='container-fluid col-xs-12 col-sm-4 col-md-4 col-lg-6'>
          <ProductSpecification propiedades = {product} contenido = {artesania}/>
        </div>
      </div>
>>>>>>> beef1cdb7be8214a7eb030961e76e474c8d189d0
    )
  }
}

const dispatchToProps = (dispatch) =>{

  return{
<<<<<<< HEAD
    getContenidos:()=>dispatch(actions.getContenidos()),
    productToCart: (selectedProduct) =>dispatch(actions.productToCart(selectedProduct)),
    toggleModal: (modalName) =>dispatch(actions.toggleModal(modalName)),
    navActive:(activeTab,params) => dispatch(actions.navActive(activeTab,params)),
=======

    selectFoto: (selectedProduct) =>dispatch(actions.productToCart(selectedProduct))
>>>>>>> beef1cdb7be8214a7eb030961e76e474c8d189d0
  }
}

//state is d store in this case for convenction
//cojo el producto d state(store) y lo paso a props xa cogerlo
const stateToProps = (state) => {
  return{
    //en state.blabla dices de que reducer quieres info
    //y tu le asignas una key q quieras
    productToshow:state.product,
    storeContenidos: state.contenidos,
<<<<<<< HEAD
    users: state.user,
=======
>>>>>>> beef1cdb7be8214a7eb030961e76e474c8d189d0
  }
}

export default connect (stateToProps,dispatchToProps)(ProductContainer)
