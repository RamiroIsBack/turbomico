import React, { Component } from 'react'
import { Foto } from '../presentational'

export default class FotoContainer extends Component {
  constructor(args) {
    super()
    //hardcoding a list of fotos until i get the info from API
    this.state = {
      list:[
        {name: 'agendas.jpg', tipo: 'libretas', disponibilidad:'proximamente', },
        {name: 'bolso.jpg', tipo: 'bolsos', disponibilidad:'si', },
        {name: 'cartera.jpg', tipo: 'monederos', disponibilidad:'si', },
        {name: 'falda-1.jpg', tipo: 'faldas', disponibilidad:'proximamente', },
        {name: 'falda-3.jpg', tipo: 'faldas', disponibilidad:'si', },
        {name: 'falda-5.jpg', tipo: 'faldas', disponibilidad:'si', },
        {name: 'falda-4.jpg', tipo: 'faldas', disponibilidad:'si', },
        {name: 'libreta-1.png', tipo: 'libretas', disponibilidad:'si', },
        {name: 'libretas-5.png', tipo: 'libretas', disponibilidad:'si', },
        {name: 'libretas-8.png', tipo: 'libretas', disponibilidad:'si', },
        {name: 'blog-2.jpg', disponibilidad:'si', },
        {name: 'blog-1.jpg', disponibilidad:'no', }


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
  handleClick(info){
    console.log ('caca '+ JSON.stringify(info))
  }

  render() {
    //TODO
    //uso esta let para
    let g = 10000
    var listItem ={}
    var totalList = []
    var sorted = this.sortDlist()
    let size = Object.keys(sorted).length
    //console.log ('caca '+ JSON.stringify(sorted))
    //console.log ('caca '+ size)
    for (var key in sorted) {
      if (sorted.hasOwnProperty(key)) {

        listItem = sorted[key].map((foto,i)=>{
          return(
            <div key ={i}><Foto propiedades ={foto} whenClicked={this.handleClick.bind(this)}/></div>
          )
        })
      }
      if (key == 'undefined'){ key = 'varios'}
      totalList.push (
        <div class = 'container-fluid col-xs-12 col-sm-12 col-md-12 col-lg-12' id ={key} key = {g}>
          <div class = 'col-xs-6 col-sm-4 col-md-3 col-lg-3'>
            <h2>{key}</h2>
          </div>
          <div class = 'col-xs-6 col-sm-8 col-md-9 col-lg-9'>
            <p>Aqui digo algo sobre l@s {key} que ya meteremos desde la rest API en su momento</p>
            <p>Incluso puede que diga 2 p'arrafos sobre l@s {key}</p>
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
