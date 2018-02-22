import constants from '../constants'

var initialState = {
<<<<<<< HEAD
  listaCreacionesSinOrdenar: [],
  listaCreaciones: {},
  creacionesLoaded :false ,
  tipoSectionSelected :'allCreaciones',
  carousellItem:{
    tipo:'',
    vendido:'',
    pic:'',
  },

=======

  listaCreaciones: [],
  CreacionesLoaded :false ,
  tipoSectionSelected :'allCreaciones',
>>>>>>> beef1cdb7be8214a7eb030961e76e474c8d189d0
}

export default (state = initialState, action) => {
  let newState = Object.assign({}, state)
<<<<<<< HEAD

=======
>>>>>>> beef1cdb7be8214a7eb030961e76e474c8d189d0
  switch (action.type) {

  case constants.CREACIONES_RECEIVED:
  //desde
    //console.log (' from reducer CREACIONES_RECEIVED: ' +JSON.stringify(action.data))

<<<<<<< HEAD
    newState['creacionesLoaded'] = true
=======
    newState['CreacionesLoaded'] = true
>>>>>>> beef1cdb7be8214a7eb030961e76e474c8d189d0

    //hago un objeto que contiene las listas segun su tipo
    var sorted = {}
    let list = action.data
    for( var i = 0, max = list.length; i < max ; i++ ){
<<<<<<< HEAD
      if( sorted[list[i].tipo] === undefined ){
=======
      if( sorted[list[i].tipo] == undefined ){
>>>>>>> beef1cdb7be8214a7eb030961e76e474c8d189d0
        sorted[list[i].tipo] = []
      }
      sorted[list[i].tipo].push(list[i])
    }
<<<<<<< HEAD
    newState['listaCreacionesSinOrdenar'] = list
=======
    console.log('from creacines reducer')
>>>>>>> beef1cdb7be8214a7eb030961e76e474c8d189d0
    newState['listaCreaciones'] = sorted
    return newState

  case constants.MOVETO_CREACION_SECTION:
<<<<<<< HEAD
    if(action.data){
      newState['tipoSectionSelected'] = action.data
    }
=======
    newState['tipoSectionSelected'] = action.data
>>>>>>> beef1cdb7be8214a7eb030961e76e474c8d189d0
    console.log (' from reducer tipoSectionSelected:' +action.data)

    return newState

<<<<<<< HEAD
  case constants.MOVE_CAROUSELL:
    if (newState.listaCreacionesSinOrdenar.length!=0){
      newState['carousellItem'] =
        {
          tipo:newState.listaCreacionesSinOrdenar[action.data].tipo,
          vendido:newState.listaCreacionesSinOrdenar[action.data].vendido,
          pic:newState.listaCreacionesSinOrdenar[action.data].pic

        }
    }
    return newState

=======
>>>>>>> beef1cdb7be8214a7eb030961e76e474c8d189d0
  default:
    return state
  }
}

