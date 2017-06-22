import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import store from './stores'
import { Provider } from 'react-redux'
import {Home,Carro,Creaciones,Ferias,Productos,Login} from './components/layout'
import {TopNavbar} from './components/presentation'
//yo lets use routinggg
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

const app = (

  <Provider store={store.configure(null)}>
    <Router>
      <div>
        <TopNavbar/>
        <div>
          <ul>
            <li><Link to="/">Home</Link></li>

            <li><Link to="/Creaciones">Creaciones</Link></li>

            <li><Link to="/Login">Login</Link></li>
          </ul>

          <hr/>

          <Route exact path="/" component={Home}/>
          <Route path="/Login" component={Login}/>
          <Route path="/Creaciones" component={Creaciones}/>
        </div>
      </div>
    </Router>
  </Provider>
)

ReactDOM.render(app, document.getElementById('root'))
