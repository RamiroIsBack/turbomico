import React, { Component } from 'react'
import { NavLink} from 'react-router-dom'
import style from './styles'
const logo = require('../../../assets/images/nano-oval.png')
export default class Nav extends Component {
  constructor() {
    super()
    this.state = {
      collapsed: true,
    }
  }
  //gestionar el colapso del boton del navegador cuando está minimizado
  //solo hace cambiar de estado
  gestionaColapso(){
    const collapsed = !this.state.collapsed
    this.setState({collapsed})
  }

  render() {


    const { collapsed } = this.state
    //si collapsed es true añade ' collapse' y si es false añade '' para abrirlo
    const colapsaClass = collapsed ? ' collapse' : ''
    //para ver lo que printeaba colapsaClass
    //console.log(colapsaClass)

    return (
      <nav class='navbar navbar-inverse navbar-fixed-top sticky' role='navigation' style= {style.navbar.container}>
        <div class='container-fluid'>

          <ul class = 'nav nav-pills navbar-right fixed-top hide-while-loading'
            style = {style.navbar.comprarButtonStyle}>
            <li><NavLink to='/Carro' type='button' class='btn btn-success navbar-btn'>
              <span class='glyphicon glyphicon-shopping-cart'>
              </span>
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
            <NavLink class='navbar-header navbar-brand' to='/'>
              <img alt="logo" className="logo" src={logo} />
            </NavLink>

          </div>
          <div class={'navbar-collapse' + colapsaClass} id='myNavbar'>
            <ul class='nav navbar-nav'>
              <li><NavLink to='/Diseños'
                onClick = {this.gestionaColapso.bind(this)} >Diseños</NavLink></li>
              <li><NavLink to='/Ferias'
                onClick = {this.gestionaColapso.bind(this)}>Ferias</NavLink></li>
              <li><NavLink to='/Contacto'
                onClick = {this.gestionaColapso.bind(this)}>Contacto</NavLink></li>
            </ul>
            <ul class = 'nav navbar-nav navbar-right hide-while-loading'>
              <li><NavLink to='/Login'
                onClick = {this.gestionaColapso.bind(this)}>Login</NavLink></li>
              <li><NavLink to='/Alba'
                onClick = {this.gestionaColapso.bind(this)}>Alba</NavLink></li>
            </ul>

          </div>


        </div>
      </nav>
    )
  }
}
