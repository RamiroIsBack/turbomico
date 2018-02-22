import React, { Component } from 'react'
import style from './styles'
import { NavLink} from 'react-router-dom'
import {connect} from 'react-redux'
import actions from '../../actions'
<<<<<<< HEAD
import history from '../../utils/history'
import {FotoGrid} from '../../utils'

class HomeContainer extends Component {
  constructor(){
    super()
    this.state={
      loading:true,
    }
  }

  componentDidMount(){
    window.addEventListener('beforeunload', this.handleLeavingApp.bind(this))
    window.addEventListener('popstate',this.handleBackButton.bind(this))

  }
  handleLeavingApp(event){
    console.log('back button pressed')//this triggers in the browser just when leaving the page!!
  }
  handleBackButton(event){
    if (event){
      var isMobile = false
      if (/Mobile|mobile|Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {

        isMobile = true
      }

      if (isMobile){
        //doesnt work good cos triggers many times and ruins the backbutton functionality
        //window.scrollTo(0, 0)
        //history.push('/')
      }else{
        this.props.navActive('', 'navbarMicoFront') //only gets selected for desktop
      }
=======


class HomeContainer extends Component {

  componentWillMount() {
    if (this.props.storeContenidos.ContenidosLoaded == false){
      //en la accion ya lo pone a true
      this.props.getContenidos()
>>>>>>> beef1cdb7be8214a7eb030961e76e474c8d189d0
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
<<<<<<< HEAD

  cierraDialogosNavbar(event){
    this.props.toggleModal('closeDropdowns')
  }
  handleClick(event){
    if (event.target.id ==='creaciones'){
      this.props.navActive(event.target.id, 'navbarMicoFront')
    }else if (event.target.id ==='ferias'){
      this.props.navActive(event.target.id, 'navbarMicoFront')
    }else if (event.target.id ==='conocenos'){
      this.props.navActive(event.target.id, 'navbarMicoFront')
    }
  }
  handleImageLoaded(){

    this.setState({loading:false})
    if (this.props.storeContenidos){
      if(!this.props.storeContenidos.stopHomeOpacity){
        this.props.incriseOpacityWithTimeOut(0)
      }

    }
    if (!this.props.creacion.creacionesLoaded){
      //en la accion ya lo pone a true
      this.props.getCreaciones()
        .then(response =>{
          this.props.startCarousellWithTimeOut(0,this.props.creacion.listaCreacionesSinOrdenar.length)
          console.log('starting carousell')
        })
        .catch(err=>{
          console.log(err.message+ 'fallo en getCreaciones()')
        })
    }else if(this.props.creacion.carousellItem.pic === ''){
      this.props.startCarousellWithTimeOut(0,this.props.creacion.listaCreacionesSinOrdenar.length)
    }
}

  render() {

=======
  render() {
>>>>>>> beef1cdb7be8214a7eb030961e76e474c8d189d0
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

<<<<<<< HEAD
    let opacity=0
    let stiloOpacity = {}

    let carousellItem = {}

=======
>>>>>>> beef1cdb7be8214a7eb030961e76e474c8d189d0
    if (this.props.storeContenidos.listaContenidos.length !=0){
      for (let i = 0 ; i < this.props.storeContenidos.listaContenidos.length ; i++) {

        if (this.props.storeContenidos.listaContenidos[i].id == 'creaciones'){
          creacionesContenido = this.props.storeContenidos.listaContenidos[i]
<<<<<<< HEAD
          if(creacionesContenido.headerFoto){
            urlPicCreaciones = creacionesContenido.headerFoto.urlPicCreaciones
            headerCreaciones=creacionesContenido.headerFoto.headerCreaciones

          }
=======
          urlPicCreaciones = creacionesContenido.headerFoto.urlPicCreaciones
          headerCreaciones=creacionesContenido.headerFoto.headerCreaciones
>>>>>>> beef1cdb7be8214a7eb030961e76e474c8d189d0

        }
        if (this.props.storeContenidos.listaContenidos[i].id == 'ferias'){
          feriasContenido = this.props.storeContenidos.listaContenidos[i]
<<<<<<< HEAD
          if(feriasContenido.headerFoto){
            urlPicFerias = feriasContenido.headerFoto.urlPicFerias
            headerFerias=feriasContenido.headerFoto.headerFerias
          }
=======
          urlPicFerias = feriasContenido.headerFoto.urlPicFerias
          headerFerias=feriasContenido.headerFoto.headerFerias
>>>>>>> beef1cdb7be8214a7eb030961e76e474c8d189d0

        }
        if (this.props.storeContenidos.listaContenidos[i].id == 'mico'){
          micoContenido = this.props.storeContenidos.listaContenidos[i]
<<<<<<< HEAD
          if(micoContenido.descripcion){
            headlineMico = micoContenido.descripcion.headlineMico
            desarrolloMico=micoContenido.descripcion.desarrolloMico
          }
=======
          headlineMico = micoContenido.descripcion.headlineMico
          desarrolloMico=micoContenido.descripcion.desarrolloMico
>>>>>>> beef1cdb7be8214a7eb030961e76e474c8d189d0

        }
        if (this.props.storeContenidos.listaContenidos[i].id == 'conocenos'){
          conocenosContenido = this.props.storeContenidos.listaContenidos[i]
<<<<<<< HEAD
          if(conocenosContenido.headerFoto){
            urlPicConocenos = conocenosContenido.headerFoto.urlPicConocenos
            headerConocenos=conocenosContenido.headerFoto.headerConocenos
          }

        }

        opacity = this.props.storeContenidos.homeOpacity
        stiloOpacity = {
          opacity: opacity,

        }
      }

    }
    carousellItem = this.props.creacion.carousellItem


    return (
      <div className ='container-fluid' onClick = {this.cierraDialogosNavbar.bind(this)}>
        <div className ='container-fluid row'>
          <div className = 'container-fluid col-xs-12 col-sm-4 col-md-4' >
            <h1>Mico diseño textil</h1>
          </div>
          <div className = 'container-fluid col-xs-12 col-sm-8 col-md-8'>
=======
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
>>>>>>> beef1cdb7be8214a7eb030961e76e474c8d189d0
            <h3>{headlineMico}</h3>
            <p>{desarrolloMico}</p>
          </div>
        </div>
        <hr/>
<<<<<<< HEAD
        {this.state.loading &&
          <div style= {{textAlign:'center',}}>
            <img id='faviconFliping' src='/images/favicon.ico' style= {{maxHeight :'250px',maxWidth :'250px'}}/>
          </div>
        }
        {this.props.storeContenidos.startHomeOpacity &&
          <div style= {stiloOpacity} >
            <div className = 'container-fluid visible-xs-block hidden-sm hidden-md hidden-lg btn-group btn btn-block'
              style={style.home.navlinkBtn}>
              <NavLink className ='btn-group btn btn-block' to='/Diseños' id= 'creaciones' onClick = {this.handleClick.bind(this)} style={style.home.navlinkBtn}>
                <div style= {{position: 'relative', top: 0, left: 0}}>
                  <img role='presentation' src={urlPicCreaciones} id= 'creaciones' className ='img-rounded' style= {{maxWidth: '100%',minHeight : '200px',maxHeight : '300px', position: 'relative', top: 0, left: 0}}
                    onLoad={this.handleImageLoaded.bind(this)}>
                  </img>

                  { this.props.creacion.carousellItem.pic != '' &&
                    <img src= {carousellItem.pic} className="img-responsive " alt='creacion' draggable = 'false'
                      style= {{maxWidth:'100%', maxHeight : '75px', position: 'absolute', bottom: 2, left: '35%', borderRadius:'50px'}}
                    />
                  }

                  <div className = 'carousel-caption' id= 'creaciones' style = {{padding: '0px', top: 0, left: 10, right: 10}}>
                    <h3  style = {{backgroundColor: 'rgba(0, 0, 0, 0.6)' ,borderRadius:'4px', padding: '0px',marginTop : 5,whiteSpace: 'initial', display: 'inline-block'}} >{headerCreaciones}</h3>
                  </div>
                </div>
              </NavLink>
            </div>
            <div className = 'container-fluid hidden-xs btn-group btn btn-block '  style={style.home.navlinkBtn} >
              <NavLink className ='btn-group btn btn-block' to='/Diseños' id= 'creaciones' onClick = {this.handleClick.bind(this)} style={style.home.navlinkBtn}>
                <div style= {{position: 'relative', top: 0, left: 0}}>
                  <img role='presentation' src={urlPicCreaciones}  className ='img-rounded'  id= 'creaciones' style= {{maxWidth: '100%',minHeight : '200px', maxHeight : '300px', position: 'relative', top: 0, left: 0}}>
                  </img>

                  { this.props.creacion.carousellItem.pic != '' &&
                    <img src= {carousellItem.pic} className="img-responsive " alt='creacion' draggable = 'false'
                      style= {{maxWidth:'100%', maxHeight : '100px', position: 'absolute', bottom: 4, left: '44%', borderRadius:'50px'}}
                    />
                  }

                  <div className = 'carousel-caption' id= 'creaciones' style = {{padding: '0px', top: 0, left:'25%', right: '25%'}}>
                    <h3  style = {{backgroundColor: 'rgba(0, 0, 0, 0.6)' ,borderRadius:'4px', padding: '0px',marginTop : 5,whiteSpace: 'initial', display: 'inline-block' }} >{headerCreaciones} </h3>
                  </div>
                </div>
              </NavLink>
            </div>
            <hr/>
            <div className ='container-fluid btn-group  btn-block ' style={style.home.navlinkBtn}>
              <div className = 'container-fluid col-xs-12 col-sm-6 col-md-6 col-lg-6' style={style.home.navlinkBtn}>
                <NavLink className ='container-fluid btn btn-block ' to='/Ferias' id= 'ferias' onClick = {this.handleClick.bind(this)} style={style.home.navlinkBtn}>
                  <img role='presentation' src={urlPicFerias}  className ='img-rounded' id= 'ferias' style= {{maxHeight : '300px', maxWidth: '100%'}}>
                  </img>
                  <div className = 'carousel-caption ' id= 'ferias' style = {{padding: '0px', top: 0, left: 10, right: 10}}>
                    <h3  style = {{backgroundColor: 'rgba(0, 0, 0, 0.6)' ,borderRadius:'4px', padding: '0px',marginTop : 5, overflow: 'hidden', display: 'inline-block'}}>{headerFerias}</h3>
                  </div>
                </NavLink>
                <br/>
              </div>
              <div className = 'container-fluid col-xs-12 col-sm-6 col-md-6 col-lg-6'  >
                <NavLink className ='container-fluid btn btn-block' to='/Conocenos' id= 'conocenos' onClick = {this.handleClick.bind(this)} style={style.home.navlinkBtn}>
                  <img role='presentation' src={urlPicConocenos} id= 'conocenos'  className ='img-rounded' style= {{maxHeight : '300px', maxWidth: '100%'}}>
                  </img>
                  <div className = 'carousel-caption ' id= 'conocenos' style = {{padding: '0px', top: 0, left: 10, right: 10}}>
                    <h3  style = {{backgroundColor: 'rgba(0, 0, 0, 0.6)' ,borderRadius:'4px', padding: '0px',marginTop : 5, overflow: 'hidden', display: 'inline-block'}}>{headerConocenos}</h3>
                  </div>
                </NavLink>
              </div>
            </div>
            <hr/>
          </div>
        }
=======
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
>>>>>>> beef1cdb7be8214a7eb030961e76e474c8d189d0
      </div>
    )
  }
}

const dispatchToProps = (dispatch) =>{

  return{
<<<<<<< HEAD
    getCreaciones:()=>dispatch (actions.getCreaciones()),
    getContenidos:()=>dispatch(actions.getContenidos()),
    toggleModal: (modalName) =>dispatch(actions.toggleModal(modalName)),
    incriseOpacityWithTimeOut:(num) => dispatch(actions.incriseOpacityWithTimeOut(num)),
    startCarousellWithTimeOut:(pic,length) => dispatch(actions.startCarousellWithTimeOut(pic,length)),
    navActive:(activeTab,params) => dispatch(actions.navActive(activeTab,params)),
=======
    getContenidos:()=>dispatch(actions.getContenidos()),
>>>>>>> beef1cdb7be8214a7eb030961e76e474c8d189d0
  }
}

const stateToProps = (state) => {
  return{
    // state is d store in this case for convenction
    // cojo el producto d state(store) y lo paso a props xa cogerlo
    //en state.blabla dices de que reducer quieres info
    //y tu le asignas una key q quieras
<<<<<<< HEAD
    creacion:state.creacion,
    storeContenidos:state.contenidos,

=======

    storeContenidos:state.contenidos,
    // TODO::  aqui meter tb el storeModal
>>>>>>> beef1cdb7be8214a7eb030961e76e474c8d189d0

  }
}
//                                   ****dispatchToProps
export default connect (stateToProps,dispatchToProps)(HomeContainer)
<<<<<<< HEAD
=======

>>>>>>> beef1cdb7be8214a7eb030961e76e474c8d189d0
