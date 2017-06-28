import constants from '../constants'
import { TurboClient } from '../utils'

export default {

  //info interesante -> https://github.com/reactjs/redux/issues/291
  // Another simple pure action creator
  selectedFoto: (foto) => {
    // key 'type' is mandatory after that, u can send whatever
    console.log ('selectedfoto action' + JSON.stringify(foto))
    return {
      type: constants.SELECT_FOTO,
      data: foto
    }

  },
  eraseProduct: (indice) => {
    // key 'type' is mandatory after that, u can send whatever
    console.log ('erasing from cart ' + JSON.stringify(indice))
    return {
      type: constants.ERASE_PRODUCT,
      data: indice
    }

  },
  changeQtty: (indice,qtty) => {
    // key 'type' is mandatory after that, u can send whatever
    var data = {indice: indice, qtty: qtty}
    console.log ('changing qtty ' + JSON.stringify(data))
    return {
      type: constants.CHANGE_QTTY,
      data: data
    }

  },
  productToCart: (product) => {
    // key 'type' is mandatory after that, u can send whatever
    console.log ('PRODCUT_TO_CART action' + JSON.stringify(product))
    return {
      type: constants.PRODCUT_TO_CART,
      data: product
    }

  },

  fetchUsers: (params) => {
    return dispatch => {
      return dispatch(TurboClient.getRequest('user', params, constants.USERS_RECEIVED))
    }
  },

  addUser: (params) => {
    return dispatch => {
      return dispatch(TurboClient.postRequest('user', params, constants.USER_CREATED))
    }
  },

  loginUser: (credentials) => {
    return dispatch => {
      return dispatch(TurboClient.login(credentials, constants.CURRENT_USER_RECEIVED))
    }
  },

  currentUser: () => {
    return dispatch => {
      return dispatch(TurboClient.currentUser(constants.CURRENT_USER_RECEIVED))
    }
  }

}
