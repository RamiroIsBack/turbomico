import React, { Component } from 'react'
import { Foto } from '../presentational'
import actions from '../../actions'
import { connect } from 'react-redux'

class FotoContainer extends Component {
  constructor(args) {
    super()

  }
  //componentWillMount is executed once before the initial rendering occurs.
  //componentDidMount is executed once after the initial rendering.
  componentDidMount() {
    if (this.props.firebaseCreaciones.CreacionesLoaded == false){
      //en la accion ya lo pone a true
      this.props.getCreaciones()
    }
  }

  selectFoto(foto){
    console.log ('caca '+ JSON.stringify(foto))
    //this fires an action down below in this
    this.props.selectFoto(foto)
    //esto he encontrado x ahi para hacer route
    //programatically
    //https://github.com/ReactTraining/react-router/issues/4220
    //const { router } = this.context
    //router.transitionTo(path="/Productos")

    //another thing I saw
    //this.context.router.push(this.props.myroute)

  }

  render() {
    //TODO
    //uso esta let para
    let g = 10000
    var listItem ={}

    //var sorted = this.sortDlist()
    var sorted =this.props.firebaseCreaciones.listaCreaciones
    var totalList = []
    //let size = Object.keys(sorted).length
    console.log ('caca '+ JSON.stringify(sorted))
    //console.log ('caca '+ size)
    for (var tipo in sorted) {
      if (sorted.hasOwnProperty(tipo)) {

        listItem = sorted[tipo].map((foto,i)=>{
          return(
            <div key ={i}>
              <Foto propiedades ={foto} whenClicked={this.selectFoto.bind(this)}/>
            </div>
          )
        })
      }
      if (tipo == 'undefined'){ tipo = 'varios'}
      totalList.push (
        <div class = 'container-fluid col-xs-12 col-sm-12 col-md-12 col-lg-12' id ={tipo} key = {g}>
          <div class = ' text-center col-xs-6 col-sm-4 col-md-3 col-lg-3'>
            <ul class="list-inline">
              <li><h6 class='glyphicon glyphicon-scissors'/></li>
              <li><h3> {tipo}</h3></li>
            </ul>
          </div>
          <div class = 'col-xs-6 col-sm-8 col-md-9 col-lg-9'>
            <p>Aqui digo algo sobre l@s {tipo} que ya meteremos desde la rest API en su momento</p>
            <p class = 'text-muted'>Incluso puede que diga 2 p'arrafos sobre l@s {tipo}</p>
          </div>
        </div>
      )
      totalList.push(listItem)
      g++
      totalList.push (
        <div class = 'container-fluid col-xs-12 col-sm-12 col-md-12 col-lg-12' key = {g}><hr/></div>
      )
      //console.log ('caca '+ g +JSON.stringify(key))
      g++
    }

    return (
      <div class= 'container-fluid'>
        {totalList}

      </div>
    )
  }
}

const dispatchToProps = (dispatch) =>{

  return{

    selectFoto: (foto) =>dispatch(actions.selectedFoto(foto)),
    getCreaciones:()=>dispatch(actions.getCreaciones())
  }
}
const stateToProps = (state) => {
  return{
    //en state.blabla dices de que reducer quieres info
    //y tu le asignas una key q quieras
    firebaseCreaciones:state.creacion
  }
}
//it would be null at d first argument cos i was not registering
//for listening d store, only dispatching actions but NOW I DO to get the
//creaciones from firebase data base
export default connect (stateToProps,dispatchToProps)(FotoContainer)
