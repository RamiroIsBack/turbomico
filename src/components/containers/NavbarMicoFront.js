import React, { Component } from 'react'
import { NavLink} from 'react-router-dom'
import {connect} from 'react-redux'
import actions from '../../actions'
import style from './styles'
const logo = require('../../../assets/images/nano-oval.png')

class NavbarMicoFront extends Component {
  constructor() {
    super()
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
  }

  handleHoverOn(event){
    //console.log('im on ' + event.target.id)
    if(event.target.id == 'ferias'){
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

    //oscurecer un poco y no permitir clicks si se est'a mostrando el dialogo modal
    var noClicks ={
      pointerEvents:'none', //This makes it not clickable
      opacity:0.6,          //This grays it out to look disabled
      background: 'rgba(0,0,0,0.7)'
    }
    var navbarStilo
    if (!registrarseShowing){
      navbarStilo = style.navbar.container
    }else {
      navbarStilo =noClicks
    }

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
      </nav>
    )
  }
}
const dispatchToProps = (dispatch) =>{

  return{
    getCreaciones:()=>dispatch(actions.getCreaciones()),
    getFerias:()=>dispatch(actions.getFerias()),

    moveToCreacionesSection:(creacionTipo)=>dispatch(actions.moveToCreacionesSection(creacionTipo)),
    moveToFeriasSection: (feriaName)=>dispatch(actions.moveToFeriasSection(feriaName)),

    toggleModal: (modalName) =>dispatch(actions.toggleModal(modalName))
  }
}
const stateToProps = (state) => {
  return{
    // state is d store in this case for convenction
    // cojo el producto d state(store) y lo paso a props xa cogerlo
    //en state.blabla dices de que reducer quieres info
    //y tu le asignas una key q quieras
    countCart:state.carro,
    storeFerias:state.feria,
    storeCreaciones:state.creacion,
    storeModal:state.modal,
  }
}
//                                   ****
export default connect (stateToProps,dispatchToProps)(NavbarMicoFront)
