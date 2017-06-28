import React, { Component } from 'react'
import { NavLink} from 'react-router-dom'
import {Sidebar} from '../presentational'
import style from './styles'
// images: se cargan como background en styles

//class para cuando quiera ocultar algo x tama;o
//hidden-xs
export default class Home extends Component {
  selectElement(){}

  render() {


    return (
      <div class ='container-fluid'>
        <NavLink class ='btn btn-block' to='/Diseños' style={style.home.navlinkBtn}>
          <section class = 'hide-while-loading full-width' style ={style.home.imageContainerDesign}>
            <div class = 'hide-while-loading  pull-right'>
              <h1 >Diseños exclusivos</h1>
            </div>
          </section>
        </NavLink>
        <hr/>
        <div class ='container-fluid row'>
          <div class = 'container-fluid col-xs-4 col-sm-4 col-md-4' >
            <h1>Mico Creaciones</h1>
          </div>
          <div class = 'container-fluid col-xs-8 col-sm-8 col-md-8'>
            <h3>I'm hardcoding this on porpose to work on it later on</h3>
            <p>Aqui diremos cosas sobre Mico xo x ahora solo son palabras vacias xa rellenar hueco y que quede un poco como deberia estar asdfkljsddf oijsdf sdflkjsdflkjsdfsddfg fdg  fdgart wetwer wertqrwt etf</p>
          </div>
        </div>
        <hr/>
        <div class ='container-fluid btn-group  btn-block '>
          <div class = 'container-fluid col-xs-12 col-sm-6 col-md-6 col-lg-6' >
            <NavLink class ='container-fluid btn btn-block ' to='/Diseños' style={style.home.navlinkBtn}>
              <section style ={style.home.imageContainerFeria}>
              </section>
            </NavLink>
          </div>

          <div class = 'container-fluid col-xs-12 col-sm-6 col-md-6 col-lg-6'  >
            <NavLink class ='container-fluid btn btn-block' to='/Diseños' style={style.home.navlinkBtn}>
              <section style ={style.home.imageContainerDesign}>
              </section>
            </NavLink>
          </div>
        </div>
        <hr/>
      </div>


    )
  }
}
