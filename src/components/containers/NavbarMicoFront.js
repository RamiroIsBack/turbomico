import React, { Component } from 'react'
import { NavLink} from 'react-router-dom'
import {connect} from 'react-redux'
import actions from '../../actions'
import style from './styles'
<<<<<<< HEAD
=======
const logo = require('../../../assets/images/nano-oval.png')
>>>>>>> beef1cdb7be8214a7eb030961e76e474c8d189d0

class NavbarMicoFront extends Component {
  constructor() {
    super()
<<<<<<< HEAD

  }
  componentWillMount() {
    if (this.props.storeContenidos.ContenidosLoaded == false){
      //en la accion ya lo pone a true
      this.props.getContenidos()
    }
  }


  //ya no colapso la navbar , solo los dialogos q hacen de dropdown
  gestionaColapso(event){
    console.log ('gestionaColapso: ' +JSON.stringify(event.target.id))
    //click en registrarse as'i q mostrar el dialogo modal xa registrarse
    if (event.target.id == 'xsMenu'){
      this.props.toggleModal('openMenuXs')
      // no hace nada con el resto xq los otros dialogos no pueden estar abiertos
    }
    //click en registrarse as'i q mostrar el dialogo modal xa registrarse
    if (event.target.id == 'registrarse'){
      this.props.toggleModal('openEntrar')
      this.props.toggleModal('closeRegistrarse')
      this.props.toggleModal('closeCreaciones')
      this.props.toggleModal('closeFerias')
    }
    else if(event.target.id === 'currentUser'){
      this.props.toggleModal('closeLogin')
      this.props.toggleModal('closeRegistrarse')
      this.props.toggleModal('closeCreaciones')
      this.props.toggleModal('closeFerias')

      this.props.navActive(event.target.id, 'navbarMicoFront')
      this.props.navActive('datos', 'amigoNav')
    }
    //de los dropdown
    else if (event.target.id == 'creaciones'){

      this.props.toggleModal('openCreaciones')
      this.props.toggleModal('closeFerias')
      this.props.toggleModal('closeLogin')
      this.props.moveToCreacionesSection(event.target.name)
      this.props.navActive(event.target.id, 'navbarMicoFront')
    }
    //
    // remember [else if] links them all and makes d last [else] apply to all
    // otherwise it would be d [else] of the las [if] ;)
    //
    else if (event.target.id == 'ferias'){
      //this.props.toggleModal('openFerias') //not using this now, client want it diferently
      this.props.toggleModal('closeCreaciones')
      this.props.toggleModal('closeLogin')
      this.props.moveToFeriasSection(event.target.name)
      this.props.navActive(event.target.id, 'navbarMicoFront')
      window.scrollTo(0, 0)
    }
    //viene de otro lado as'i q cierra los 2
    else if(event.target.id== 'carro'){
      this.props.toggleModal('closeCreaciones')
      this.props.toggleModal('closeFerias')
      this.props.toggleModal('closeLogin')
      this.props.navActive(event.target.id, 'navbarMicoFront')
    }
    else if(event.target.id== 'conocenos'){
      this.props.toggleModal('closeCreaciones')
      this.props.toggleModal('closeFerias')
      this.props.toggleModal('closeLogin')
      this.props.navActive(event.target.id, 'navbarMicoFront')
    }
    else if(event.target.id== 'home'){
      this.props.toggleModal('closeCreaciones')
      this.props.toggleModal('closeFerias')
      this.props.toggleModal('closeLogin')
      this.props.navActive('', 'navbarMicoFront')//no hay tab activa
    }
    else{
      this.props.toggleModal('closeCreaciones')
      this.props.toggleModal('closeFerias')
      this.props.toggleModal('closeLogin')
    }


=======
    this.state = {
      collapsed: true,
      creacionesColapsed: true,
      feriasColapsed: true,
    }
  }
  componentDidMount() {
    //cargo las 2 listas para que el dropdown menu sea dinamico
    if (this.props.storeCreaciones.CreacionesLoaded == false){
      //en la accion ya lo pone a true
      this.props.getCreaciones()
    }
    if (this.props.storeFerias.FeriasLoaded == false){
      //en el reducer ya lo pone a true
      this.props.getFerias()
    }

  }
  //lanza una accion a ferias o creaciones reducers para q pongan activo la seccion que ha sido seleccionada en el dropdown y as'i lo puede escuchar el fotocontainer y feria container para moverse dentro del layout
  innerMenuClickCreaciones(event){

    console.log('event.target.name: '+JSON.stringify(event.target.name))
    this.props.moveToCreacionesSection(event.target.name)
  }
  innerMenuClickFerias(event){

    this.props.moveToFeriasSection(event.target.name)


  }
  //gestionar el colapso del boton del navegador cuando está minimizado
  //solo hace cambiar de estado
  gestionaColapso(event){
    //click en registrarse as'i q mostrar el dialogo modal xa registrarse
    if (event.target.id == 'registrarse'){
      this.props.toggleModal('openRegistrarse')
    }
    //de los dropdown
    //console.log ('gestionaColapso: ' +JSON.stringify(event.target.id))
    if (event.target.id == 'creaciones'){
      const creacionesColapsed = !this.state.creacionesColapsed
      this.setState({creacionesColapsed: creacionesColapsed})
      if(event.target.name !=''){ //viene del dropdown
        this.props.moveToCreacionesSection(event.target.name)
      }else{
        this.setState({feriasColapsed: true})
        //si clican en dropdown para abrirlo, no colapsar toddo el menu
        if(!this.state.collapsed)
          return
      }
    }else{
      //console.log ('a ver a ver creacionesColapsed')
      this.setState({creacionesColapsed: true})
    }
    if (event.target.id == 'ferias'){
      const feriasColapsed = !this.state.feriasColapsed
      this.setState({feriasColapsed: feriasColapsed})
      if(event.target.name !=''){ //viene del dropdown
        this.props.moveToFeriasSection(event.target.name)
      }else{
        this.setState({creacionesColapsed: true})
        //si clican en dropdown para abrirlo, no colapsar toddo el menu
        if(!this.state.collapsed)
          return
      }
    }else{
      //console.log ('a ver a ver feriasColapsed')
      this.setState({feriasColapsed: true})
    }

    //del boton del menu minimizado
    const collapsed = !this.state.collapsed
    this.setState({collapsed: collapsed})
>>>>>>> beef1cdb7be8214a7eb030961e76e474c8d189d0
  }

  handleHoverOn(event){
    //console.log('im on ' + event.target.id)
    if(event.target.id == 'ferias'){
<<<<<<< HEAD
      //this.props.toggleModal('openFerias') //not using this now, client want it diferently
      this.props.toggleModal('closeCreaciones')
      this.props.toggleModal('closeLogin')
    }else if (event.target.id == 'creaciones'){
      this.props.toggleModal('openCreaciones')
      this.props.toggleModal('closeFerias')
      this.props.toggleModal('closeLogin')

    // no voy a sacar un dropdown para registrarse mejor
    }else if (event.target.id === 'x ahora nada'){
      this.props.toggleModal('openLogin')
      this.props.toggleModal('closeCreaciones')
      this.props.toggleModal('closeFerias')
      //solo xa cerrar loss dropdowns de los otros al pasar por ellos
    }else if (event.target.id === 'conocenos'){
      this.props.toggleModal('closeCreaciones')
      this.props.toggleModal('closeFerias')
    }else if (event.target.id === 'home'){
      this.props.toggleModal('closeCreaciones')
      this.props.toggleModal('closeFerias')
    }

  }

  render() {
    let registrarseShowing = this.props.storeModal.registrarseShowing
    let menuXsShowing = this.props.storeModal.menuXsShowing

    let logoMico = ''
    if (this.props.storeContenidos.listaContenidos.length !=0){
      for (let i = 0 ; i < this.props.storeContenidos.listaContenidos.length ; i++) {

        if (this.props.storeContenidos.listaContenidos[i].id == 'mico'){

          logoMico = this.props.storeContenidos.listaContenidos[i].logo.urlLogoMico
          break
        }

      }
    }

    //           menuIcon en firebase
    var xsMenuIcon = 'https://firebasestorage.googleapis.com/v0/b/micotextil-3f024.appspot.com/o/MenuIcon.png?alt=media&token=d9e28cfa-0514-44d3-b0ac-6fad9a2422e8'

    var loginIcon = 'https://firebasestorage.googleapis.com/v0/b/micotextil-3f024.appspot.com/o/loginIcon.png?alt=media&token=9df1a1ea-8b37-482b-919e-b0fb3be6b273'
    if (this.props.users.currentUser != null){
      if (this.props.users.currentUser.foto){
        if (this.props.users.currentUser.foto.photoURL){
          loginIcon = this.props.users.currentUser.foto.photoURL
        }
      }
    }
=======
      this.setState({feriasColapsed : false})
    }else if (event.target.id == 'creaciones'){
      this.setState({creacionesColapsed : false})
    }

  }
  //onMouseOut() Rocks!!
  handleHoverOff(event){

    this.setState({feriasColapsed : true,creacionesColapsed : true })
  }

  render() {

    let feriaDB = this.props.storeFerias.listaFerias
    let creacionDB =this.props.storeCreaciones.listaCreaciones
    let registrarseShowing = this.props.storeModal.registrarseShowing
    var creacionList =[]
    //TODO:
    //si lista.length > 3 hacer 2 filas con el conditional rendering
    //valorar hacer 2 componentes presentational
    let a =0
    for (var tipo in creacionDB) {
      if (creacionDB.hasOwnProperty(tipo)) {
        creacionList.push (
          <li key ={a}><NavLink id = 'creaciones' name= {tipo} onClick = {this.gestionaColapso.bind(this)} to = '/Diseños'>{tipo}</NavLink></li>
        )
        a++
      }

      //console.log('cacoa'+feria.nombre )
      var feriaList = feriaDB.map((feria,i)=>{
        let estilo = {}
        if (feria.enCurso){
          estilo = {backgroundColor: 'grey', color:'yellow'}
        }else{
          if(i==0){
            estilo ={fontWeight: 400 }
          }
        }
        if(!feria.caducada){
          return(
            <li key = {i}>
              <NavLink id='ferias' name= {feria.nombre} onClick = {this.gestionaColapso.bind(this)} to ='/Ferias' style ={estilo}>
                {feria.nombre} {feria.fecha}
              </NavLink>
            </li>
          )
        }
      })

    }
    const { collapsed } = this.state
    //si collapsed es true añade ' collapse' y si es false añade '' para abrirlo
    const colapsaClass = collapsed ? ' collapse' : ''
    //console.log(colapsaClass)

    const { creacionesColapsed } = this.state
    //si creacionesColapsed es true añade ' open' y si es false añade '' para cerrarlo
    const toggleCreacionesDropdown = creacionesColapsed ? '' : ' open'

    const { feriasColapsed } = this.state
    //si toggleFeriasDropdown es true añade ' open' y si es false añade '' para cerrarlo
    const toggleFeriasDropdown = feriasColapsed ? '' : ' open'

>>>>>>> beef1cdb7be8214a7eb030961e76e474c8d189d0
    //oscurecer un poco y no permitir clicks si se est'a mostrando el dialogo modal
    var noClicks ={
      pointerEvents:'none', //This makes it not clickable
      opacity:0.6,          //This grays it out to look disabled
      background: 'rgba(0,0,0,0.7)'
    }
    var navbarStilo
<<<<<<< HEAD
    if (!registrarseShowing || !menuXsShowing){
=======
    if (!registrarseShowing){
>>>>>>> beef1cdb7be8214a7eb030961e76e474c8d189d0
      navbarStilo = style.navbar.container
    }else {
      navbarStilo =noClicks
    }

<<<<<<< HEAD
    // donde ir dentro de currentUser segun la tab seleccionada
    let currentUserNavTab = '/Amigo/Datos'
    //para ver que pesta;a est'a activa
    let creacionesEstilo = {cursor: 'pointer', color:'white',backgroundColor:'transparent',textDecoration: 'none'}
    let feriasEstilo = {cursor: 'pointer', color:'white',backgroundColor:'transparent',textDecoration: 'none',}
    let conocenosEstilo ={cursor: 'pointer', color:'white',backgroundColor:'transparent',textDecoration: 'none',}
    let comprarButtonEstilo ={textDecoration: 'none', backgroundColor: 'black', borderRadius:'15px', border : 'none', margin: 0, }
    let currentUserEstilo= { cursor: 'pointer', color:'white',backgroundColor:'transparent',textDecoration: 'none',}

    if (this.props.navigation.navbarMicoFrontActive.creaciones){
      creacionesEstilo = {
        cursor: 'pointer', color:'white',backgroundColor:'transparent',textDecoration: 'none' ,borderBottom:'4px solid white'
      }
    }else if (this.props.navigation.navbarMicoFrontActive.ferias){
      feriasEstilo = {
        cursor: 'pointer', color:'white',backgroundColor:'transparent',textDecoration: 'none', borderBottom:'4px solid white'
      }

    }else if (this.props.navigation.navbarMicoFrontActive.conocenos){
      conocenosEstilo ={
        cursor: 'pointer', color:'white',backgroundColor:'transparent',textDecoration: 'none', borderBottom:'4px solid white'
      }
    }else if (this.props.navigation.navbarMicoFrontActive.carro){
      comprarButtonEstilo ={
        textDecoration: 'none', backgroundColor: 'black', borderRadius:'15px', border : 'none', margin: 0, borderBottom:'4px solid white'
      }

    }else if (this.props.navigation.navbarMicoFrontActive.currentUser){
      currentUserEstilo= {
        cursor: 'pointer', color:'white',backgroundColor:'transparent',textDecoration: 'none',  borderBottom:'4px solid white'
      }

    }
    //digo donde va el link al pinchar en current user, arriba lo tengo inicializado a datos, as'i q lo cambio si es pedidos
    if(this.props.navigation.amigoNavActive.pedidosActive){
      currentUserNavTab = '/Amigo/Pedidos'
    }

    return (
      <nav className='navbar navbar-inverse navbar-fixed-top' role='navigation' style= {navbarStilo}>




        <div className='container-fluid hidden-xs' style={{padding: 0}}>

          <ul className = 'nav nav-pills navbar-right fixed-top hide-while-loading' style = {style.navbar.comprarButtonContainer}>
            {this.props.users.currentUser === null &&
              <li id='registrarse' onMouseOver={this.handleHoverOn.bind(this)}>
                <a style = {{cursor: 'pointer', color:'white',backgroundColor:'transparent',textDecoration: 'none',padding: 0}}>
                  <img id='registrarse' alt='Registrarse' src={loginIcon}  style={{borderRadius : 40, paddingTop: 3, height:45}} onClick = {this.gestionaColapso.bind(this)}/>
                </a>
              </li>
            }

            {this.props.users.currentUser != null && this.props.users.currentUser.datosPersonales &&
              <li id='currentUser'  onMouseOver={this.handleHoverOn.bind(this)} style= {{paddingRight:4}}>
                <NavLink to={currentUserNavTab} style = {currentUserEstilo} onClick = {this.gestionaColapso.bind(this)} id='currentUser'>{this.props.users.currentUser.datosPersonales.nombre}</NavLink>

              </li>
            }
            {this.props.users.currentUser != null &&
              <li id='currentUser' onMouseOver={this.handleHoverOn.bind(this)}>
                <NavLink to={currentUserNavTab} style = {{cursor: 'pointer', color:'white',backgroundColor:'transparent',textDecoration: 'none',padding: 0,}}>
                  <img id='currentUser' src={loginIcon}  style={{ borderRadius : 30 ,paddingTop: 3 , height:45}} onClick = {this.gestionaColapso.bind(this)}/>
                </NavLink>
              </li>
            }
            <li style= {{marginTop: 4, }}><NavLink to='/Carro' type='button' className='btn navbar-btn' style = {comprarButtonEstilo} onClick = {this.gestionaColapso.bind(this)} id='carro'>
              <span style= {{color : 'white' }} id='carro' className='glyphicon glyphicon-shopping-cart'>
              </span>
              <span style= {{color : 'white' }} id='carro'>({this.props.countCart.numProducts})</span>
            </NavLink></li>
          </ul>

          <div className='container-fluid' style={{padding: 0}}>
            <ul className='nav nav-pills navbar-left fixed-top hide-while-loading' style={{float:'left',display: 'block', marginLeft: '10px',}}>
              <li id='home' onMouseOver={this.handleHoverOn.bind(this)}>
                <NavLink to='/' style = {{cursor: 'pointer', color:'white',backgroundColor:'transparent',textDecoration: 'none',padding: 0}}>
                  <img id='home' src={logoMico} style={{borderRadius: 15, paddingTop: 3, height:45}} onClick = {this.gestionaColapso.bind(this)}/>
                </NavLink>
              </li>
              <li id='creaciones' onMouseOver={this.handleHoverOn.bind(this)}>
                <NavLink  className='dropdown-toggle' data-toggle='dropdown' role='button' aria-haspopup='true' aria-expanded='false' style = {creacionesEstilo}
                  onClick = {this.gestionaColapso.bind(this)} id='creaciones' name ='allCreaciones' to='/Diseños'>Diseños <span className='caret'></span></NavLink>

              </li>
              <li  id='ferias' onMouseOver={this.handleHoverOn.bind(this)} >
                <NavLink style = {feriasEstilo} onClick = {this.gestionaColapso.bind(this)} id='ferias' name='allFerias' to='/Ferias'>Ferias </NavLink>

              </li>

              <li id='conocenos' onMouseOver={this.handleHoverOn.bind(this)}><NavLink to='/Conocenos' style = {conocenosEstilo} onClick = {this.gestionaColapso.bind(this)} id='conocenos' >Conocenos</NavLink></li>
            </ul>
          </div>
        </div>


        <div className = 'container-fluid row visible-xs-block hidden-sm hidden-md hidden-lg' id = 'xs' >
          <ul className = 'nav nav-pills navbar-right fixed-top hide-while-loading' style = {style.navbar.comprarButtonContainer}>
            {this.props.users.currentUser === null &&
              <li id='registrarse' onMouseOver={this.handleHoverOn.bind(this)}>
                <a style = {{cursor: 'pointer', color:'white',backgroundColor:'transparent',textDecoration: 'none',padding: 0}}>
                  <img id='registrarse' src={loginIcon}  style={{paddingTop: 3, height:45, borderRadius : 30}} onClick = {this.gestionaColapso.bind(this)}/>
                </a>
              </li>
            }

            {this.props.users.currentUser != null && this.props.users.currentUser.datosPersonales &&
              <li id='currentUser' onMouseOver={this.handleHoverOn.bind(this)}>
                <h6 style = {{cursor: 'pointer', color:'white',backgroundColor:'transparent',textDecoration: 'none',padding: 0, margin :0 ,marginTop: 2, marginBottom:1,}}>{this.props.users.currentUser.datosPersonales.nombre}</h6>
                <NavLink to='/Amigo/Datos' style = {{cursor: 'pointer', color:'white',backgroundColor:'transparent',textDecoration: 'none',padding: 0,}}>
                  <img id='currentUser' src={loginIcon}  style={{paddingTop: 3, height:30, borderRadius : 30}} onClick = {this.gestionaColapso.bind(this)}/>
                </NavLink>
              </li>
            }
            <li style ={{paddingTop:4}} ><NavLink to='/Carro' type='button' className='btn navbar-btn' style = {{textDecoration: 'none', backgroundColor: 'black', borderRadius:'15px', border : 'none', margin: 0, }} onClick = {this.gestionaColapso.bind(this)} id='carro'>
              <span style= {{color : 'white' }} id='carro' className='glyphicon glyphicon-shopping-cart'>
              </span>
              <span style= {{color : 'white' }} id='carro'>({this.props.countCart.numProducts})</span>
            </NavLink></li>
          </ul>
          <div className='container-fluid' style={{padding: 0}}>
            <ul className='nav nav-pills navbar-left fixed-top hide-while-loading' style={{float:'left',display: 'block', marginLeft: '10px',}}>
              <li >
                <NavLink to='/' style = {{cursor: 'pointer', color:'white',backgroundColor:'transparent',textDecoration: 'none',padding: 0}}>
                  <img id='xsMenu' src={xsMenuIcon}  style={{paddingTop: 3, height:45}} onClick = {this.gestionaColapso.bind(this)}/>
                </NavLink>
              </li>
              <li >
                <NavLink to='/' style = {{cursor: 'pointer', color:'white',backgroundColor:'transparent',textDecoration: 'none',padding: 0 , paddingLeft : 10}}>
                  <img id='home' src={logoMico}  style={{borderRadius: 15, paddingTop: 3, height:45}} onClick = {this.gestionaColapso.bind(this)}/>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>


=======
    return (
      <nav class='navbar navbar-inverse navbar-fixed-top sticky' role='navigation' style= {navbarStilo}>
        <div class='container-fluid'>

          <ul class = 'nav nav-pills navbar-right fixed-top hide-while-loading' style = {style.navbar.comprarButtonContainer}>
            <li><NavLink to='/Carro' type='button' class='btn btn-success navbar-btn' style = {style.navbar.comprarButtonStyle}>
              <span class='glyphicon glyphicon-shopping-cart'>
              </span>
              <span>({this.props.countCart.numProducts})</span>
            </NavLink></li>
          </ul>

          <div class= 'navbar-header'>
            <button type='button' class='pull-left navbar-toggle'
              onClick = {this.gestionaColapso.bind(this)}>
              <span class='sr-only'>Toggle navigation</span>
              <span class='icon-bar'></span>
              <span class='icon-bar'></span>
              <span class='icon-bar'></span>
            </button>
            <NavLink class='navbar-header navbar-brand' to='/' >
              <img alt='logo' className='logo' src={logo} style={style.navbar.logoStyle} onClick = {this.gestionaColapso.bind(this)} />
            </NavLink>

          </div>
          <div class={'navbar-collapse' + colapsaClass} id='myNavbar'>
            <ul class='nav navbar-nav hide-while-loading'>
              <li class ={'dropdown' + toggleCreacionesDropdown} id='creaciones' onMouseOver={this.handleHoverOn.bind(this)}
                onMouseLeave={this.handleHoverOff.bind(this)}>
                <NavLink  class='dropdown-toggle' data-toggle='dropdown' role='button' aria-haspopup='true' aria-expanded='false'
                  onClick = {this.gestionaColapso.bind(this)} id='creaciones' name ='allCreaciones' to='/Diseños' >Diseños <span class='caret'></span></NavLink>
                <ul class= 'dropdown-menu' onMouseOut={this.handleHoverOff.bind(this)}>

                  {creacionList}

                </ul>
              </li>
              <li class ={'dropdown' + toggleFeriasDropdown} id='ferias' onMouseOver={this.handleHoverOn.bind(this)}
                onMouseLeave={this.handleHoverOff.bind(this)} >
                <NavLink  class='dropdown-toggle' data-toggle='dropdown' role='button' aria-haspopup='true' aria-expanded='false'
                  onClick = {this.gestionaColapso.bind(this)} id='ferias' name='allFerias' to='/Ferias' >Ferias <span class='caret'></span></NavLink>
                <ul class= 'dropdown-menu' onMouseOut={this.handleHoverOff.bind(this)}>

                  {feriaList}

                </ul>
              </li>

              <li><NavLink to='/Conocenos'
                onClick = {this.gestionaColapso.bind(this)}>Conocenos</NavLink></li>
            </ul>
            <ul class = 'nav navbar-nav navbar-right hide-while-loading'>
              <li><NavLink to='/Contacto'
                onClick = {this.gestionaColapso.bind(this)} id = 'contacto'>Contacto</NavLink></li>
              <li><a style = {{cursor: 'pointer'}} onClick = {this.gestionaColapso.bind(this)} id = 'registrarse'>
              Registrarse
              </a></li>
            </ul>

          </div>


        </div>
>>>>>>> beef1cdb7be8214a7eb030961e76e474c8d189d0
      </nav>
    )
  }
}
const dispatchToProps = (dispatch) =>{

  return{
<<<<<<< HEAD
    moveToCreacionesSection:(creacionTipo)=>dispatch(actions.moveToCreacionesSection(creacionTipo)),
    moveToFeriasSection: (feriaName)=>dispatch(actions.moveToFeriasSection(feriaName)),
    getContenidos:()=>dispatch(actions.getContenidos()),
    toggleModal: (modalName) =>dispatch(actions.toggleModal(modalName)),
    navActive:(activeTab,params) => dispatch(actions.navActive(activeTab,params)),
=======
    getCreaciones:()=>dispatch(actions.getCreaciones()),
    getFerias:()=>dispatch(actions.getFerias()),

    moveToCreacionesSection:(creacionTipo)=>dispatch(actions.moveToCreacionesSection(creacionTipo)),
    moveToFeriasSection: (feriaName)=>dispatch(actions.moveToFeriasSection(feriaName)),

    toggleModal: (modalName) =>dispatch(actions.toggleModal(modalName))
>>>>>>> beef1cdb7be8214a7eb030961e76e474c8d189d0
  }
}
const stateToProps = (state) => {
  return{
    // state is d store in this case for convenction
    // cojo el producto d state(store) y lo paso a props xa cogerlo
    //en state.blabla dices de que reducer quieres info
    //y tu le asignas una key q quieras
    countCart:state.carro,
<<<<<<< HEAD
    storeContenidos: state.contenidos,
    users: state.user,
    storeModal:state.modal,
    navigation: state.navigation,
=======
    storeFerias:state.feria,
    storeCreaciones:state.creacion,
    storeModal:state.modal,
>>>>>>> beef1cdb7be8214a7eb030961e76e474c8d189d0
  }
}
//                                   ****
export default connect (stateToProps,dispatchToProps)(NavbarMicoFront)
