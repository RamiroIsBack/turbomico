import constants from '../constants'

var initialState = {

  listaCreaciones: [],
  CreacionesLoaded :false ,
}

export default (state = initialState, action) => {
  let newState = Object.assign({}, state)
  switch (action.type) {

  case constants.CREACIONES_RECEIVED:
  //desde
    console.log (' from reducer CREACIONES_RECEIVED: ' +JSON.stringify(action.data))

    newState['CreacionesLoaded'] = true

    //hago un objeto que contiene las listas segun su tipo
    var sorted = {}
    let list = action.data
    for( var i = 0, max = list.length; i < max ; i++ ){
      if( sorted[list[i].tipo] == undefined ){
        sorted[list[i].tipo] = []
      }
      sorted[list[i].tipo].push(list[i])
    }
    newState['listaCreaciones'] = sorted
    return newState

  default:
    return state
  }
}

//queria hacer el sort d list aqui pero me da error
/*case constants.CREACIONES_RECEIVED:
  //hago un objeto que contiene las listas segun su tipo
  for( var i = 0, max = action.data.length; i < max ; i++ ){
    if( newState['listaCreaciones'][action.data[i].tipo] == undefined ){
      newState['listaCreaciones'][action.data[i].tipo] = []
    }
    newState['listaCreaciones'][action.data[i].tipo].push(action.data[i])
  }

  return newState*/
