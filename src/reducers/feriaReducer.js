import constants from '../constants'

var initialState = {

  listaFerias: [],
  FeriasLoaded :false ,
  feriaSectionSelected : 'allFerias',
<<<<<<< HEAD
  idFeriaShowing : '',
  openYear: '',
=======
>>>>>>> beef1cdb7be8214a7eb030961e76e474c8d189d0
}

export default (state = initialState, action) => {
  let newState = Object.assign({}, state)
  switch (action.type) {

<<<<<<< HEAD
  case constants.TOGGLE_YEAR://action.data= id de feria selected

    newState['openYear'] = action.data
    return newState

  case constants.MARKER_CLICKED://action.data= id de feria selected
    for (let i =0 ;i<newState.listaFerias.length;i++){
      if(action.data === newState.listaFerias[i].id){
        newState.listaFerias[i].showInfo = true
        newState['idFeriaShowing'] = action.data
        let parts = newState.listaFerias[i].fecha.split('/')
        newState['openYear'] = parts[2]
      }else{
        newState.listaFerias[i].showInfo = false
      }
    }

    return newState

=======
>>>>>>> beef1cdb7be8214a7eb030961e76e474c8d189d0
  case constants.FERIAS_RECEIVED:

    newState['FeriasLoaded'] = true
    let list = action.data
    //sort it by date,by day, then month, then year (y esto funciona en serio??)
    //it did work
    for(let i=0;i<=2; i++){
      list.sort(function(a, b){

        a = a.fecha.split('/')
        b = b.fecha.split('/')

        return a[i]>b[i] ? 1 : a[i]<b[i] ? -1 : 0
      })
    }
<<<<<<< HEAD

    //lo paso a formato yyyy/mm/dd para poder operar con Date Object y miro a ver si est'a en curso o est'a caducada
    let firstNoCaducada = true //flag to set the idFeriaShowing

=======
    //las ferias mas nuevas abajo (si cambio el 1 y el -1 seria al reves)

    //lo paso a formato yyyy/mm/dd para poder operar con Date Object y miro a ver si est'a en curso o est'a caducada
>>>>>>> beef1cdb7be8214a7eb030961e76e474c8d189d0
    for (let i = 0; i < list.length; i++) {
      let date = list[i].fecha
      let parts = date.split('/')
      //                       year        month         day
      let feriaDate = new Date(parts[2], parts[1] - 1, parts[0])

<<<<<<< HEAD
      //ahora con la fecha final
      let parts2 = list[i].fechaFinal.split('/')
      //                             year        month         day
      let finalFeriaDate = new Date(parts2[2], parts2[1] - 1, parts2[0])

      let diaHoy = new Date()


      if (finalFeriaDate < diaHoy){
        list[i].caducada = true
      }else{
        list[i].caducada = false
        if(firstNoCaducada){//muestro la feria mas proxima y hago visible su agno
          firstNoCaducada = false
          newState['idFeriaShowing'] = list[i].id
          newState['openYear'] = parts[2]
          list[i].showInfo = true
        }
      }
=======
      //calculo el final de la feria segun sus dias d duracion
      let finalFeriaDate = feriaDate
      finalFeriaDate = new Date(feriaDate.getFullYear(),feriaDate.getMonth(),feriaDate.getDate()+list[i].duracion)
      list[i].fechaFinal = finalFeriaDate
      let diaHoy = new Date()

>>>>>>> beef1cdb7be8214a7eb030961e76e474c8d189d0
      if (feriaDate < diaHoy && diaHoy < list[i].fechaFinal){
        list[i].enCurso = true
      }else{
        list[i].enCurso = false
      }
<<<<<<< HEAD
=======
      if (finalFeriaDate < diaHoy){
        list[i].caducada = true
      }else{
        list[i].caducada = false
      }
>>>>>>> beef1cdb7be8214a7eb030961e76e474c8d189d0
    }

    newState['listaFerias'] = list
    return newState

  case constants.MOVETO_FERIA_SECTION:
<<<<<<< HEAD
    if(action.data){
      newState['feriaSectionSelected'] = action.data
    }
=======
    newState['feriaSectionSelected'] = action.data
>>>>>>> beef1cdb7be8214a7eb030961e76e474c8d189d0
    return newState

  default:
    return state
  }
}

