import React, { Component } from 'react'
import { Foto } from '../presentational'
import actions from '../../actions'
import { connect } from 'react-redux'

class FotoContainer extends Component {
  constructor(args) {
    super()
    //hardcoding a list of fotos until i get the info from API
    this.state = {
      list:[
        {name: 'agendas.jpg', tipo: 'libretas', disponibilidad:'proximamente',precio : 50, unidades: 1,},
        {name: 'bolso.jpg', tipo: 'bolsos', disponibilidad:'si', precio : 50, materiales: 'piel de cabra', unidades: 1, },
        {name: 'cartera.jpg', tipo: 'monederos', disponibilidad:'si',precio : 20, unidades: 1, },
        {name: 'falda-1.jpg', tipo: 'faldas', disponibilidad:'proximamente', precio : 70, unidades: 1, },
        {name: 'falda-3.jpg', tipo: 'faldas', disponibilidad:'si', precio : 75, unidades: 1, },
        {name: 'falda-5.jpg', tipo: 'faldas', disponibilidad:'si', precio : 45, unidades: 1, },
        {name: 'falda-4.jpg', tipo: 'faldas', disponibilidad:'si', precio : 45, unidades: 1, },
        {name: 'libreta-1.png', tipo: 'libretas', disponibilidad:'si', precio : 30, unidades: 1, },
        {name: 'libretas-5.png', tipo: 'libretas', disponibilidad:'si', precio : 30, unidades: 1, },
        {name: 'libretas-8.png', tipo: 'libretas', disponibilidad:'si', precio : 35, unidades: 1, },
        {name: 'blog-2.jpg', disponibilidad:'si', precio : 500, unidades: 1, },
        {name: 'blog-1.jpg', disponibilidad:'no', precio : 500, unidades: 1, }


      ]
    }
  }
  componentDidMount() {

  }
  sortDlist(){
    //hago un objeto que contiene las listas segun su tipo
    var sorted = {}
    for( var i = 0, max = this.state.list.length; i < max ; i++ ){
      if( sorted[this.state.list[i].tipo] == undefined ){
        sorted[this.state.list[i].tipo] = []
      }
      sorted[this.state.list[i].tipo].push(this.state.list[i])
    }
    return sorted
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

    var sorted = this.sortDlist()
    var totalList = []
    let size = Object.keys(sorted).length
    //console.log ('caca '+ JSON.stringify(sorted))
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

    selectFoto: (foto) =>dispatch(actions.selectedFoto(foto))
  }
}
//null at d first argument is cos i'm not registering
//for listening d store, only dispatching actions
export default connect (null,dispatchToProps)(FotoContainer)
