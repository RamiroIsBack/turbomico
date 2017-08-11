import React, { Component } from 'react'
import {ModalRegistrarse} from '../presentational'

import {connect} from 'react-redux'
import actions from '../../actions'


class ModalRegistrarseContainer extends Component {

  componentDidMount() {

    if (this.props.storeContenidos.ContenidosLoaded == false){
      //en la accion ya lo pone a true
      this.props.getContenidos()
    }
  }

  subirNuevoAmigo(amigo ){
    //TODO: log this new amigo to d DB
    console.log('soy tu nuevo amigo!!!!!!!'+JSON.stringify(amigo))
  }

  toggleModal(){
    this.props.toggleModal('closeRegistrarse')
  }
  render(){
    var registrarseShowing = false
    var RegistrarseContenido = {}

    if (this.props.storeModal){
      registrarseShowing = this.props.storeModal.registrarseShowing
    }
    // Render nothing if the "show" prop is false
    if (!registrarseShowing){
      return null
    }
    for (let i = 0 ; i < this.props.storeContenidos.listaContenidos.length ; i++) {

      if (this.props.storeContenidos.listaContenidos[i].id == 'registrarse'){
        RegistrarseContenido = this.props.storeContenidos.listaContenidos[i]
        break
      }
    }



    return (

      <div>
        <ModalRegistrarse show={registrarseShowing} subirNuevoAmigo={this.subirNuevoAmigo.bind(this)} onClose={this.toggleModal.bind(this)} contenido = {RegistrarseContenido}>
        </ModalRegistrarse>


      </div>



    )
  }
}
const dispatchToProps = (dispatch) =>{

  return{
    getContenidos: () => dispatch(actions.getContenidos()),
    toggleModal: (modalName) =>dispatch(actions.toggleModal(modalName)),
  }
}


const stateToProps = (state) => {
  return{
    // state is d store in this case for convenction
    // cojo el producto d state(store) y lo paso a props xa cogerlo
    //en state.blabla dices de que reducer quieres info
    //y tu le asignas una key q quieras
    storeContenidos: state.contenidos,
    storeModal:state.modal,

  }
}
//                                   ****
export default connect (stateToProps,dispatchToProps)(ModalRegistrarseContainer)
