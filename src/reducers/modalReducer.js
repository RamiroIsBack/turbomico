import constants from '../constants'
//the brogrammer i'm following calls copy to d text inside a webpage so do I now :P
var initialState = {
  registrarseShowing :false ,
}

export default (state = initialState, action) => {
  let newState = Object.assign({}, state)
  switch (action.type) {

  case constants.TOGGLE_MODAL:
    //closeRegistrarse///////////openRegistrarse
    if (action.data == 'closeRegistrarse'){
      newState['registrarseShowing'] = false
    }
    if (action.data == 'openRegistrarse'){
      newState['registrarseShowing'] = true
    }

    //desde
    console.log (' from reducer TOGGLE_MODAL: ' +JSON.stringify(action.data) + 'registrarseShowing: '+ newState.registrarseShowing)

    return newState

  /*case constants.MOVETO_CREACION_SECTION:
    newState['tipoSectionSelected'] = action.data
    console.log (' from reducer tipoSectionSelected:' +action.data)

    return newState
*/
  default:
    return state
  }
}

