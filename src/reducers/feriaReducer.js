import constants from '../constants'

var initialState = {

  listaFerias: [],
  FeriasLoaded :false ,
  feriaSectionSelected : 'allFerias',
}

export default (state = initialState, action) => {
  let newState = Object.assign({}, state)
  switch (action.type) {

  case constants.FERIAS_RECEIVED:

    newState['FeriasLoaded'] = true
    let list = action.data
    //sort it by date,by day, then month, then year (y esto funciona en serio??)
    //it did work
    for(let i=0;i<=2; i++){
      list.sort(function(a, b){

        a = a.fecha.split('/')
        b = b.fecha.split('/')

        return a[i]>b[i] ? -1 : a[i]<b[i] ? 1 : 0
      })
    }
    console.log (' from reducer FERIAS_RECEIVED: ' +JSON.stringify(list))
    //las ferias mas nuevas arriba
    newState['listaFerias'] = list
    return newState

  case constants.MOVETO_FERIA_SECTION:
    newState['feriaSectionSelected'] = action.data
    console.log (' from reducer feriaSectionSelected: ' +action.data)
    return newState

  default:
    return state
  }
}

