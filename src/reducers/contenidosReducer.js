import constants from '../constants'

var initialState = {

  listaContenidos: [],
  ContenidosLoaded :false ,

}

export default (state = initialState, action) => {
  let newState = Object.assign({}, state)
  switch (action.type) {

  case constants.CONTENIDOS_RECEIVED:
    console.log (' from reducer Contenidos_RECEIVED: ' +JSON.stringify(action.data))
    newState['ContenidosLoaded'] = true
    let list = action.data

    newState['listaContenidos'] = list
    return newState

  /*case constants.MOVETO_FERIA_SECTION:
    newState['feriaSectionSelected'] = action.data
    return newState
*/
  default:
    return state
  }
}


