import React, { Component } from 'react'
import actions from '../../actions'
import {connect} from 'react-redux'
import {Conocenos} from '../presentational'


class ConocenosContainer extends Component {
<<<<<<< HEAD
  componentWillMount() {

=======
  componentDidMount() {

    if (this.props.storeContenidos.ContenidosLoaded == false){
      //en la accion ya lo pone a true
      this.props.getContenidos()
    }
>>>>>>> beef1cdb7be8214a7eb030961e76e474c8d189d0
    //make it start at the top of the page every time
    window.scrollTo(0, 0)
  }
  compomentDidUpdate(){
    //make it start at the top of the page every time
    window.scrollTo(0, 0)
  }

  goArtesania(){
    window.open('http://artesaniadegalicia.xunta.gal/es/fundacion/la-marca','_blank')
  }

<<<<<<< HEAD
  cierraDialogosNavbar(event){
    this.props.toggleModal('closeDropdowns')

  }
=======
>>>>>>> beef1cdb7be8214a7eb030961e76e474c8d189d0

  render() {
    let conocenosContenido = {}
    let artesaniaContenido = {}
<<<<<<< HEAD
    if (this.props.storeContenidos.listaContenidos.length !=0){
      for (let i = 0 ; i < this.props.storeContenidos.listaContenidos.length ; i++) {

        if (this.props.storeContenidos.listaContenidos[i].id == 'conocenos'){
          conocenosContenido = this.props.storeContenidos.listaContenidos[i]
          break
        }
      }
      for (let i = 0 ; i < this.props.storeContenidos.listaContenidos.length ; i++) {

        if (this.props.storeContenidos.listaContenidos[i].id == 'artesania'){
          artesaniaContenido = this.props.storeContenidos.listaContenidos[i]
          break
        }
=======
    for (let i = 0 ; i < this.props.storeContenidos.listaContenidos.length ; i++) {

      if (this.props.storeContenidos.listaContenidos[i].id == 'conocenos'){
        conocenosContenido = this.props.storeContenidos.listaContenidos[i]
        break
      }
    }
    for (let i = 0 ; i < this.props.storeContenidos.listaContenidos.length ; i++) {

      if (this.props.storeContenidos.listaContenidos[i].id == 'artesania'){
        artesaniaContenido = this.props.storeContenidos.listaContenidos[i]
        break
>>>>>>> beef1cdb7be8214a7eb030961e76e474c8d189d0
      }
    }

    return (
<<<<<<< HEAD
      <div onClick = {this.cierraDialogosNavbar.bind(this)}>
        {conocenosContenido.headerFoto &&
          <Conocenos conocenosContenido = {conocenosContenido} artesaniaContenido = {artesaniaContenido}
            whenClicked={this.goArtesania.bind(this)}/>
        }

=======
      <div>
        <Conocenos conocenosContenido = {conocenosContenido} artesaniaContenido = {artesaniaContenido}
          whenClicked={this.goArtesania.bind(this)}/>
>>>>>>> beef1cdb7be8214a7eb030961e76e474c8d189d0
      </div>
    )
  }
}

const dispatchToProps = (dispatch) =>{

  return{
    getContenidos: () => dispatch(actions.getContenidos()),
<<<<<<< HEAD
    toggleModal: (modalName) =>dispatch(actions.toggleModal(modalName)),
=======
>>>>>>> beef1cdb7be8214a7eb030961e76e474c8d189d0
  }
}


const stateToProps = (state) => {
  return{
    // state is d store in this case for convenction
    // cojo el producto d state(store) y lo paso a props xa cogerlo
    //en state.blabla dices de que reducer quieres info
    //y tu le asignas una key q quieras
    storeContenidos: state.contenidos,
    // TODO::  aqui meter tb el storeModal

  }
}

export default connect (stateToProps,dispatchToProps)(ConocenosContainer)

