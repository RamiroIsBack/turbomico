
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Foto } from '../presentational'
import actions from '../../actions'
import { connect } from 'react-redux'
import history from '../../utils/history'


class FotoContainer extends React.Component {
  /*static get propTypes() {
    return {
      history: PropTypes.object.isRequired
    }
  }*/
  constructor(args) {
    super()

  }
  //componentWillMount is executed once before the initial rendering occurs.
  //componentDidMount is executed once after the initial rendering.
  componentDidMount() {
    if (this.props.firebaseCreaciones.creacionesLoaded == false){
      //en la accion ya lo pone a true
      this.props.getCreaciones()
    }
    //make it start at the top of the page every time
    window.scrollTo(0, 0)
    //dont worry cuando le llegue 'all' se focalizar'a arriba
    if (this.props.firebaseCreaciones.tipoSectionSelected != 'allCreaciones'){
      setTimeout(() => {
        this.focusDiv(this.props.firebaseCreaciones.tipoSectionSelected)
      }, 500)
    }
  }

  componentDidUpdate(){
    if (this.props.firebaseCreaciones.tipoSectionSelected != 'allCreaciones'){
      setTimeout(() => {
        this.focusDiv(this.props.firebaseCreaciones.tipoSectionSelected)
      }, 500)
    }else{
      window.scrollTo(0, 0)
    }
  }

  focusDiv(tipo){

    let creacionList = this.props.firebaseCreaciones.listaCreaciones
    //he metido como ref el id del primer elemento de cada tipo
    let ref = creacionList[tipo][0].id
    var theDiv = this[ref]

    if(theDiv){
      theDiv.scrollIntoView({block: 'start', behavior: 'smooth'})
    }
  }

  selectFoto(foto){
    //console.log ('caca '+ JSON.stringify(foto))
    //this fires an action down below in this
    this.props.selectFoto(foto)

    //routing programatically, now i can prevent if there is an error
    history.push('/Productos')

  }

  render() {
    //TODO
    //uso esta let g tb para numerar los ref q me sirven para encontrar las secciones q elijo desde el dropdown del navbar
    let g = 0
    var listItem ={}

    //var sorted = this.sortDlist()
    var sorted =this.props.firebaseCreaciones.listaCreaciones
    var totalList = []

    for (var tipo in sorted) {
      if (sorted.hasOwnProperty(tipo)) {

        listItem = sorted[tipo].map((foto,i)=>{
          return(
            <div key ={foto.id}>
              <Foto propiedades ={foto} whenClicked={this.selectFoto.bind(this)}/>
            </div>
          )
        })
      }
      if (tipo == 'undefined'){ tipo = 'varios'}
      let ele = sorted[tipo][0].id
      //console.log ('la ref '+ele)
      totalList.push (
        <div class = 'container-fluid row' id ={tipo} key = {g} ref={(el) => this[ele] = el}>
          <br/>
          <div class = ' text-center col-xs-12 col-sm-4 col-md-3 col-lg-3'>
            <ul class='list-inline'>
              <li><h6 class='glyphicon glyphicon-scissors'/></li>
              <li><h3> {tipo}</h3></li>
            </ul>
          </div>
          <div class = 'col-xs-12 col-sm-8 col-md-9 col-lg-9'>
            <p>Aqui digo algo sobre l@s {tipo} que ya meteremos desde la rest API en su momento</p>
            <p class = 'text-muted'>Incluso puede que diga 2 p'arrafos sobre l@s {tipo}</p>
          </div>
        </div>
      )
      totalList.push(listItem)
      g++
      totalList.push (
        <div class = 'container row' key = {g}><hr/></div>
      )
      //console.log ('caca '+ g +JSON.stringify(key))
      g++
    }

    return (
      <div class= 'container-fluid'>
        <div class='clearfix '></div>
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
