
import constants from '../constants'

var initialState = {

  listaEnlaces: [],
  enlacesLoaded :false ,

}

export default (state = initialState, action) => {
  let newState = Object.assign({}, state)
  switch (action.type) {

  case constants.ENLACES_RECEIVED:
<<<<<<< HEAD
    //console.log (' from reducer enlaces_RECEIVED: ' +JSON.stringify(action.data))
=======
    console.log (' from reducer enlaces_RECEIVED: ' +JSON.stringify(action.data))
>>>>>>> beef1cdb7be8214a7eb030961e76e474c8d189d0
    newState['enlacesLoaded'] = true
    let list = action.data

    newState['listaEnlaces'] = list
    return newState

<<<<<<< HEAD
=======
  /*case constants.MOVETO_FERIA_SECTION:
    newState['feriaSectionSelected'] = action.data
    return newState
*/
>>>>>>> beef1cdb7be8214a7eb030961e76e474c8d189d0
  default:
    return state
  }
}


