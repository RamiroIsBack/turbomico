import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
<<<<<<< HEAD
import {pedidosReducer, navReducer, userReducer, productReducer,carroReducer, creacionReducer, feriaReducer, contenidosReducer, modalReducer, enlacesReducer,} from '../reducers'
=======
import { userReducer, productReducer,carroReducer, creacionReducer, feriaReducer, contenidosReducer, modalReducer, enlacesReducer} from '../reducers'
>>>>>>> beef1cdb7be8214a7eb030961e76e474c8d189d0


var store
export default {

  configure: (initialState) => { // initialState can be null

    const reducers = combineReducers({ // insert reducers here
      user: userReducer,
      product: productReducer,
      carro: carroReducer,
      creacion: creacionReducer,
      feria: feriaReducer,
      contenidos: contenidosReducer,
      modal: modalReducer,
      enlaces:enlacesReducer,
<<<<<<< HEAD
      navigation:navReducer,
      pedidos:pedidosReducer,

=======
>>>>>>> beef1cdb7be8214a7eb030961e76e474c8d189d0
    })

    if (initialState){
      store = createStore(
        reducers,
        initialState,
        applyMiddleware(thunk)
      )

      return store
    }

    store = createStore(
      reducers,
      applyMiddleware(thunk)
    )

    return store
  },

  currentStore: () => {
    return store
  }
}
