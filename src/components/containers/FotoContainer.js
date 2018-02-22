
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Foto } from '../presentational'
import actions from '../../actions'
import { connect } from 'react-redux'
import history from '../../utils/history'
import styles from './styles'
<<<<<<< HEAD
import {FotoGrid} from '../../utils'

class FotoContainer extends React.Component {

  //componentDidMount is executed once after the initial rendering.
  componentDidMount() {
    if (this.props.firebaseCreaciones.creacionesLoaded === false){
=======


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
  componentWillMount(){
    if (this.props.storeContenidos.ContenidosLoaded == false){
      //en la accion ya lo pone a true
      this.props.getContenidos()
    }
  }
  //componentDidMount is executed once after the initial rendering.
  componentDidMount() {
    if (this.props.firebaseCreaciones.creacionesLoaded == false){
>>>>>>> beef1cdb7be8214a7eb030961e76e474c8d189d0
      //en la accion ya lo pone a true
      this.props.getCreaciones()
    }

    //dont worry cuando le llegue 'all' se focalizar'a arriba
<<<<<<< HEAD
    if (this.props.firebaseCreaciones.tipoSectionSelected && this.props.firebaseCreaciones.tipoSectionSelected != 'allCreaciones'){
      setTimeout(() => {
        this.focusDiv(this.props.firebaseCreaciones.tipoSectionSelected)
      }, 200)
    }else if(this.props.firebaseCreaciones.tipoSectionSelected === 'allCreaciones'){
=======
    if (this.props.firebaseCreaciones.tipoSectionSelected != 'allCreaciones'){
      setTimeout(() => {
        this.focusDiv(this.props.firebaseCreaciones.tipoSectionSelected)
      }, 500)
    }else{
>>>>>>> beef1cdb7be8214a7eb030961e76e474c8d189d0
      //make it start at the top of the page
      window.scrollTo(0, 0)
    }
  }

  componentDidUpdate(){
    if (this.props.firebaseCreaciones.tipoSectionSelected != 'allCreaciones'){
      setTimeout(() => {
        this.focusDiv(this.props.firebaseCreaciones.tipoSectionSelected)
<<<<<<< HEAD
      }, 200)
=======
      }, 500)
    }else{
      window.scrollTo(0, 0)
>>>>>>> beef1cdb7be8214a7eb030961e76e474c8d189d0
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
<<<<<<< HEAD
    this.props.moveToCreacionesSection('allCreaciones')//lo pongo a allCreaciones xq si no me va a la seccion cada vez q hay un update
=======
>>>>>>> beef1cdb7be8214a7eb030961e76e474c8d189d0
  }

  selectFoto(foto){
    //console.log ('caca '+ JSON.stringify(foto))
    //this fires an action down below in this
    this.props.selectFoto(foto)
<<<<<<< HEAD
    window.scrollTo(0, 0)
=======

>>>>>>> beef1cdb7be8214a7eb030961e76e474c8d189d0
    //routing programatically, now i can prevent if there is an error
    history.push('/Productos')

  }
<<<<<<< HEAD
  cierraDialogosNavbar(event){
    this.props.toggleModal('closeDropdowns')
  }
=======
>>>>>>> beef1cdb7be8214a7eb030961e76e474c8d189d0

  render() {
    let creacionesContenido = {}

    for (let i = 0 ; i < this.props.storeContenidos.listaContenidos.length ; i++) {

      if (this.props.storeContenidos.listaContenidos[i].id == 'creaciones'){
        creacionesContenido = this.props.storeContenidos.listaContenidos[i]
        break
      }
    }
    //TODO
    //uso esta let g tb para numerar los ref q me sirven para encontrar las secciones q elijo desde el dropdown del navbar
    let g = 0
<<<<<<< HEAD
    let h = 1000
    var listItem ={}

=======
    var listItem ={}

    //var sorted = this.sortDlist()
>>>>>>> beef1cdb7be8214a7eb030961e76e474c8d189d0
    var sorted =this.props.firebaseCreaciones.listaCreaciones
    var totalList = []

    for (var tipo in sorted) {
      if (sorted.hasOwnProperty(tipo)) {

        listItem = sorted[tipo].map((foto,i)=>{
          return(
<<<<<<< HEAD
            <div className= 'container' style= {{maxWidth: 300}} key ={foto.id}>
              <Foto creacion ={foto} whenClicked={this.selectFoto.bind(this)}/>
=======
            <div key ={foto.id}>
              <Foto propiedades ={foto} whenClicked={this.selectFoto.bind(this)}/>
>>>>>>> beef1cdb7be8214a7eb030961e76e474c8d189d0
            </div>
          )
        })
      }
<<<<<<< HEAD
      if (tipo === 'undefined'){ tipo = 'varios'}
=======
      if (tipo == 'undefined'){ tipo = 'varios'}
>>>>>>> beef1cdb7be8214a7eb030961e76e474c8d189d0
      let ele = sorted[tipo][0].id
      //console.log ('la ref '+ele)
      //saco el contenido de cada tipo de lo que hay en la DB
      let tipoObj= creacionesContenido.tipo[tipo.toString()]
      totalList.push (
<<<<<<< HEAD
        <div className = 'container-fluid' key = {g} ref={(el) => this[ele] = el} >
          {g!=0 && <hr/>}
          <div className = 'container-fluid row' id ={tipo} style={{marginTop:40}}>

            <div className = ' text-center col-xs-12 col-sm-4 col-md-3 col-lg-3'>
              <h2 style ={{fontWeight: 'bolder'}}> {tipo}</h2>
            </div>
            { tipoObj &&
            <div className = 'container col-xs-12 col-sm-6 col-md-7 col-lg-7 text-center'>
              {tipoObj.descripcionTipo.split('\n').map((item, key) => {
                return <span key={key}>{item}<br/></span>})}
            </div>
            }
=======
        <div class = 'container-fluid' key = {g} ref={(el) => this[ele] = el} >
          <div class = 'container-fluid row' id ={tipo} >
            <div class = 'container-fluid row hidden-xs' id = 'backTipo' style = {styles.headerRow.container}>
              <div class = ' text-center col-xs-12 col-sm-4 col-md-3 col-lg-3'>
                <ul class='list-inline'>
                  <li >
                    <img role='presentation' src={tipoObj.urlIcon} class ='img-rounded' style = {{width:'50px', height:'50px'}}>
                    </img>
                  </li>
                  <li><h2 style ={styles.headerRow.headerText}> {tipo}</h2></li>
                </ul>
              </div>
              <div class = 'container col-xs-12 col-sm-6 col-md-7 col-lg-7 text-center'>
                {tipoObj.descripcionTipo.split('\n').map((item, key) => {
                  return <span key={key}>{item}<br/></span>})}
              </div>
            </div>
            <div class = 'container-fluid row visible-xs-block hidden-sm hidden-md hidden-lg' id = 'backTipo' >
              <div class = 'col-xs-12 col-sm-3 col-md-3 col-lg-3' style = {styles.headerRow.container}>
                <div class = 'col-xs-2'>

                  <img role='presentation' src={tipoObj.urlIcon} class ='img-rounded' style = {{width:'50px', height:'50px'}}>
                  </img>
                </div>
                <div class = 'col-xs-7'>
                  <h2 style ={styles.headerRow.headerText}> {tipo}</h2>
                </div>
              </div>
              <div class = 'container col-xs-12 col-sm-4 col-md-7 col-lg-7 text-center' style = {{paddingTop: 20}}>
                {tipoObj.descripcionTipo.split('\n').map((item, key) => {
                  return <span key={key}>{item}<br/></span>})}
              </div>
            </div>
>>>>>>> beef1cdb7be8214a7eb030961e76e474c8d189d0
          </div>
          <br/>
        </div>
      )
<<<<<<< HEAD
      totalList.push(
        <div className= 'foto__container' key = {h}>
          {listItem}
        </div>
      )
      g++
      h++
      totalList.push (
        <div className = 'container ' key = {g} style= {{padding: 0 }}><br/></div>
=======
      totalList.push(listItem)
      g++
      totalList.push (
        <div class = 'container row' key = {g}><br/></div>
>>>>>>> beef1cdb7be8214a7eb030961e76e474c8d189d0
      )
      //console.log ('caca '+ g +JSON.stringify(key))
      g++
    }

    return (
<<<<<<< HEAD
      <div className= 'container' onClick = {this.cierraDialogosNavbar.bind(this)} style={{padding: 0}}>
        <div className='clearfix visible-sm-block visible-md-block' style={{padding: 0}}></div>

=======
      <div class= 'container-fluid'>
        <div class='clearfix visible-sm-block visible-md-block'></div>
>>>>>>> beef1cdb7be8214a7eb030961e76e474c8d189d0
        {totalList}
      </div>
    )
  }
}

const dispatchToProps = (dispatch) =>{

  return{

    selectFoto: (foto) =>dispatch(actions.selectedFoto(foto)),
    getCreaciones:()=>dispatch(actions.getCreaciones()),
    getContenidos: () => dispatch(actions.getContenidos()),
<<<<<<< HEAD
    toggleModal: (modalName) =>dispatch(actions.toggleModal(modalName)),
    moveToCreacionesSection:(creacionTipo)=>dispatch(actions.moveToCreacionesSection(creacionTipo)),
=======
>>>>>>> beef1cdb7be8214a7eb030961e76e474c8d189d0
  }
}
const stateToProps = (state) => {
  return{
    //en state.blabla dices de que reducer quieres info
    //y tu le asignas una key q quieras
    firebaseCreaciones:state.creacion,
    storeContenidos: state.contenidos,
  }
}
//it would be null at d first argument cos i was not registering
//for listening d store, only dispatching actions but NOW I DO to get the
//creaciones from firebase data base
export default connect (stateToProps,dispatchToProps)(FotoContainer)
