
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import history from '../utils/history'
import {general_css} from '../utils'
import {Home,Carro,Diseños,Ferias,Conocenos,Registrarse,Productos, Amigo} from './layout'
import {AmigoPedidosContainer, AmigoDatosContainer, ModalLoginContainer,ModalWarningContainer,ModalMenuXsContainer,ModalCreacionesContainer,ModalFeriasContainer,ModalRegistrarseContainer, ModalEntrarContainer , NavbarMicoFront,FooterContainer, ModalRealizarCompraContainer} from './containers'
import {
  Router as Router,
  Route,
  Link,
} from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker'

class ReactMico extends Component {


  render(){
    let ready = true
    let picConstruccion = 'https://firebasestorage.googleapis.com/v0/b/micotextil-3f024.appspot.com/o/micEnConstruccion-mobile2.png?alt=media&token=4cba7d9f-8a8f-4cad-a379-1dbabcbfea0a'

    let settingMinHigthToScreen = {

      minHeight: window.innerHeight+20,
    }
    if(!ready){
      return(

        <Router history={history}>
          <div>
            <div className='bell__container'>
              <img className="bellImg" src='https://firebasestorage.googleapis.com/v0/b/micotextil-3f024.appspot.com/o/mico%20poster%20bigger.png?alt=media&token=28883b94-a403-4a8d-87aa-07fe19a027eb'>
              </img>
            </div>
            <div className = 'general__container' style = {settingMinHigthToScreen} >

              <div className = 'main__container visible-xs-block hidden-sm hidden-md hidden-lg' >
                <div className = 'col-xs-12' >
                  <img id='foto' src={picConstruccion}  style={{height:420,width:300}} />
                </div>
                <div className = 'col-xs-11'>
                  <h4>Hola!,</h4>
                  <h5>Estamos dando los últimos retoques a la pagina.</h5>
                  <p>Dentro de muy poco tendrás una guía con todas las ferias para que puedas ir a verme y una tienda online donde podrás comprar mis productos desde casa si lo prefieres </p>
                  <p>hasta entonces, sígueme en las redes sociales o contacta conmigo cuando quieras :) </p>
                </div>
              </div>
              <div className = 'main__container hidden-xs' >
                <div className = 'col-xs-12 col-sm-6 col-md-6 col-lg-4'>
                  <img id='foto' src={picConstruccion}  style={{height:420,width:300}} />
                </div>
                <div className = 'col-xs-12 col-sm-6 col-md-6 col-lg-6'>
                  <h1>Hola!,</h1>
                  <h2>Estamos dando los últimos retoques a la pagina.</h2>
                  <h3>Dentro de muy poco tendrás una guía con todas las ferias para que puedas ir a verme y una tienda online donde podrás comprar mis productos desde casa si lo prefieres </h3>
                  <br/>
                  <br/>
                  <h4>hasta entonces, sígueme en las redes sociales o contacta conmigo cuando quieras :) </h4>
                </div>
              </div>
              <div className = 'footer__container'>
                <FooterContainer/>
              </div>
            </div>
          </div>
        </Router>

      )
    }
    return (
      <Router history={history}>
        <div className = 'general__container' style = {settingMinHigthToScreen} >
          <ModalRealizarCompraContainer/>
          <ModalRegistrarseContainer/>
          <ModalMenuXsContainer/>
          <ModalCreacionesContainer/>
          <ModalFeriasContainer/>
          <ModalWarningContainer/>
          <ModalLoginContainer/>
          <ModalEntrarContainer/>

          <NavbarMicoFront/>

          <div className = 'main__container'  >
            <Route exact path='/' component={Home}/>
            <Route path='/Diseños' component={Diseños}/>
            <Route path='/Registrarse' component={Registrarse}/>
            <Route path='/Carro' component={Carro}/>
            <Route path='/Ferias' component={Ferias}/>
            <Route path='/Conocenos' component={Conocenos}/>
            <Route path='/Productos' component={Productos}/>
            <Route path='/Amigo' component = {Amigo}/>
            <Route path='/Amigo/Datos' component = {AmigoDatosContainer}/>
            <Route path='/Amigo/Pedidos' component = {AmigoPedidosContainer}/>

          </div>
          <div className = 'footer__container'>
            <FooterContainer/>
          </div>
        </div>
      </Router>
    )
  }
}
export default ReactMico
registerServiceWorker()
