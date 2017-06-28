import constants from '../constants'

var initialState = {
  cartList:[],
  numProducts: 0,
  precioSubTotal : 0,
  envio : 0,
}

export default (state = initialState, action) => {
  let newState = Object.assign({}, state)
  let unidadesTotales = 0
  let precioSubTotal = 0
  switch (action.type) {

  case constants.PRODCUT_TO_CART:

    newState['cartList'].push(action.data)
    //saco el numero total de elementos de cada '.unidades'
    newState['cartList'].forEach((value,index)=>{
      unidadesTotales += value.unidades
      precioSubTotal += value.precio * value.unidades
    })
    newState['numProducts'] = unidadesTotales
    newState['SubTotal'] = precioSubTotal
    console.log (' from reducer PRODCUT_TO_CART: ' +JSON.stringify(newState))
    return newState

  case constants.ERASE_PRODUCT :
    //'splice' actualiza el array 'delete' meteria un undefined
    //splice (a partir de este , quita '1')
    newState['cartList'].splice(action.data,1)
    //saco el numero total de elementos de cada '.unidades'
    newState['cartList'].forEach((value,index)=>
      unidadesTotales += value.unidades
    )
    newState['numProducts'] = unidadesTotales
    return newState

  case constants.CHANGE_QTTY:

    if(action.data.qtty == 1){
      newState['cartList'][action.data.indice].unidades += 1

    }else{
      if(newState['cartList'][action.data.indice].unidades > 1){
        newState['cartList'][action.data.indice].unidades -= 1
      }
    }
    //saco el numero total de elementos de cada '.unidades'
    newState['cartList'].forEach((value,index)=>
      unidadesTotales += value.unidades
    )
    newState['numProducts'] = unidadesTotales

    console.log (' from reducer PRODCUT_TO_CART: ' +JSON.stringify(newState['cartList'][action.data.indice]))
    return newState

  default:
    return state
  }
}
