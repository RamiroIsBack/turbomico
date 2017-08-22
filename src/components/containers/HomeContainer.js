import React, { Component } from 'react'
import style from './styles'
import { NavLink} from 'react-router-dom'
import {connect} from 'react-redux'
import actions from '../../actions'


class HomeContainer extends Component {

  componentWillMount() {
    if (this.props.storeContenidos.ContenidosLoaded == false){
      //en la accion ya lo pone a true
      this.props.getContenidos()
    }
  }

  dameEstilo( url){
    var estiloYBackgroundCreaciones = {
      padding: '0px',
      border: 'none',
      borderRadius:'10px',
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundImage: 'url(' + url + ')',
      height: '500px',

    }
    return estiloYBackgroundCreaciones
  }
  render() {
    var conocenosContenido = {}
    let urlPicConocenos = ''
    let headerConocenos = ''

    var feriasContenido = {}
    let urlPicFerias = ''
    let headerFerias = ''

    var creacionesContenido = {}
    let urlPicCreaciones = ''
    let headerCreaciones = ''

    var micoContenido = {}
    let headlineMico = ''
    let desarrolloMico = ''

    if (this.props.storeContenidos.listaContenidos.length !=0){
      for (let i = 0 ; i < this.props.storeContenidos.listaContenidos.length ; i++) {

        if (this.props.storeContenidos.listaContenidos[i].id == 'creaciones'){
          creacionesContenido = this.props.storeContenidos.listaContenidos[i]
          urlPicCreaciones = creacionesContenido.headerFoto.urlPicCreaciones
          headerCreaciones=creacionesContenido.headerFoto.headerCreaciones

        }
        if (this.props.storeContenidos.listaContenidos[i].id == 'ferias'){
          feriasContenido = this.props.storeContenidos.listaContenidos[i]
          urlPicFerias = feriasContenido.headerFoto.urlPicFerias
          headerFerias=feriasContenido.headerFoto.headerFerias

        }
        if (this.props.storeContenidos.listaContenidos[i].id == 'mico'){
          micoContenido = this.props.storeContenidos.listaContenidos[i]
          headlineMico = micoContenido.descripcion.headlineMico
          desarrolloMico=micoContenido.descripcion.desarrolloMico

        }
        if (this.props.storeContenidos.listaContenidos[i].id == 'conocenos'){
          conocenosContenido = this.props.storeContenidos.listaContenidos[i]
          urlPicConocenos = conocenosContenido.headerFoto.urlPicConocenos
          headerConocenos=conocenosContenido.headerFoto.headerConocenos

        }

      }
      //estiloYBackgroundConocenos = this.dameEstilo(conocenosContenido.headerFoto.urlPicConocenos)
    }


    return (
      <div class ='container-fluid' >
        <NavLink class ='btn btn-block' to='/Diseños' style={style.home.navlinkBtn}>
          <img role='presentation' src={urlPicCreaciones}  class ='img-rounded' >
          </img>
          <div class = 'col-xs-offset-2 col-xs-8 col-sm-offset-2 col-sm-7 col-md-offset-2 col-md-7 col-lg-offset-2 col-lg-7 carousel-caption' style = {{padding: '0px', top: 60 , }}>
            <h3  style = {{backgroundColor: 'black' ,borderRadius:'4px', padding: '0px',marginTop : 5,overflow: 'hidden'}}>{headerCreaciones}</h3>
          </div>
        </NavLink>
        <hr/>
        <div class ='container-fluid row'>
          <div class = 'container-fluid col-xs-12 col-sm-4 col-md-4' >
            <h1>Mico Creaciones</h1>
          </div>
          <div class = 'container-fluid col-xs-12 col-sm-8 col-md-8'>
            <h3>{headlineMico}</h3>
            <p>{desarrolloMico}</p>
          </div>
        </div>
        <hr/>
        <div class ='container-fluid btn-group  btn-block ' style={style.home.navlinkBtn}>
          <div class = 'container-fluid col-xs-12 col-sm-12 col-md-6 col-lg-6' style={style.home.navlinkBtn}>
            <NavLink class ='container-fluid btn btn-block ' to='/Ferias' style={style.home.navlinkBtn}>
              <img role='presentation' src={urlPicFerias}  class ='img-rounded' >
              </img>
              <div class = 'carousel-caption ' style = {{padding: '0px', top: 0, left: 10, right: 10}}>
                <h3  style = {{backgroundColor: 'black' ,borderRadius:'4px', padding: '0px',marginTop : 5, overflow: 'hidden'}}>{headerFerias}</h3>
              </div>
            </NavLink>
          </div>
          <div class = 'container-fluid col-xs-12 col-sm-12 col-md-6 col-lg-6'  >
            <NavLink class ='container-fluid btn btn-block' to='/Conocenos' style={style.home.navlinkBtn}>
              <img role='presentation' src={urlPicConocenos}  class ='img-rounded' >
              </img>
              <div class = 'carousel-caption ' style = {{padding: '0px', top: 0, left: 10, right: 10}}>
                <h3  style = {{backgroundColor: 'black' ,borderRadius:'4px', padding: '0px',marginTop : 5, overflow: 'hidden'}}>{headerConocenos}</h3>
              </div>
            </NavLink>
          </div>
        </div>
        <hr/>
      </div>
    )
  }
}

const dispatchToProps = (dispatch) =>{

  return{
    getContenidos:()=>dispatch(actions.getContenidos()),
  }
}

const stateToProps = (state) => {
  return{
    // state is d store in this case for convenction
    // cojo el producto d state(store) y lo paso a props xa cogerlo
    //en state.blabla dices de que reducer quieres info
    //y tu le asignas una key q quieras

    storeContenidos:state.contenidos,
    // TODO::  aqui meter tb el storeModal

  }
}
//                                   ****dispatchToProps
export default connect (stateToProps,dispatchToProps)(HomeContainer)

