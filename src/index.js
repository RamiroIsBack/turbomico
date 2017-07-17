import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import history from './utils/history'
import store from './stores'
import { Provider } from 'react-redux'
import {Home,Alba,Carro,Diseños,Ferias,Contacto,Login,Productos} from './components/layout'
import {NavbarMicoFront} from './components/containers'

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
    //console.log('caca ' + NavbarMicoFront )
    return (

      <Provider store={store.configure(null)}>
        <Router history={history}>
          <div>
            <NavbarMicoFront/>
            <div>
              <Route exact path="/" component={Home}/>
              <Route path="/Diseños" component={Diseños}/>
              <Route path="/Login" component={Login}/>
              <Route path="/Carro" component={Carro}/>
              <Route path="/Contacto" component={Contacto}/>
              <Route path="/Ferias" component={Ferias}/>
              <Route path="/Alba" component={Alba}/>
              <Route path="/Productos" component={Productos}/>
            </div>
          </div>
        </Router>
      </Provider>

    )
  }
}

ReactDOM.render(<Turbomico/> , document.getElementById('root'))
