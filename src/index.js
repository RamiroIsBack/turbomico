import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import history from './utils/history'
import store from './stores'
import { Provider } from 'react-redux'
import {Home,Contacto,Carro,Diseños,Ferias,Conocenos,Registrarse,Productos} from './components/layout'
import {ModalRegistrarseContainer , NavbarMicoFront,FooterContainer} from './components/containers'

import {
  Router as Router,
  Route,
  Link,
} from 'react-router-dom'

/* The Elements components is a summary of basic presentation componets
 * available for use in this theme
 */

class Turbomico extends Component {


  render(){

    return (

      <Provider store={store.configure(null)}>
        <Router history={history}>
          <div>
            <ModalRegistrarseContainer/>
            <NavbarMicoFront/>
            <div>
              <Route exact path="/" component={Home}/>
              <Route path="/Diseños" component={Diseños}/>
              <Route path="/Registrarse" component={Registrarse}/>
              <Route path="/Carro" component={Carro}/>
              <Route path="/Contacto" component={Contacto}/>
              <Route path="/Ferias" component={Ferias}/>
              <Route path="/Conocenos" component={Conocenos}/>
              <Route path="/Productos" component={Productos}/>
            </div>
            <FooterContainer/>
          </div>
        </Router>
      </Provider>

    )
  }
}

ReactDOM.render(<Turbomico/> , document.getElementById('root'))
