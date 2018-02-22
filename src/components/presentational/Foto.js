
import React, { Component } from 'react'
import style from './styles'
<<<<<<< HEAD
import { NavLink} from 'react-router-dom'
import {FotoGrid} from '../../utils'
=======
import taller from '../../../assets/images/foto-taller-1.jpg'
import { NavLink} from 'react-router-dom'
>>>>>>> beef1cdb7be8214a7eb030961e76e474c8d189d0

export default class Foto extends Component {
  constructor(args){
    super()
    this.state ={
      url2: false,
<<<<<<< HEAD
      movementObj:{
        minX :30,
        maxY :50,
        startX :0,
        startY :0,
        endX:0,
        endY:0,
      },
      fotoLoaded:false,
    }
  }

  handleClick(){
    this.props.whenClicked(this.props.creacion)
  }

  handlepic2(){
    this.setState ({url2 :true})
  }
  handlepic1(){
    this.setState ({url2 :false})
  }

  handleTouchStart(e){
    let newMovementObj = Object.assign({}, this.state.movementObj)
    let touch = e.touches[0]
    newMovementObj.startY = touch.screenY
    newMovementObj.startX = touch.screenX
    this.setState({movementObj : newMovementObj })
  }
  handleTouchMove(e){
    let newMovementObj = Object.assign({}, this.state.movementObj)
    let touch = e.touches[0]
    newMovementObj.endY = touch.screenY
    newMovementObj.endX = touch.screenX
    this.setState({movementObj : newMovementObj })
  }
  handleTouchEnd(){
    let xMove = this.state.movementObj.startX - this.state.movementObj.endX
    let yMove = this.state.movementObj.startY - this.state.movementObj.endY
    if(Math.abs(xMove) > this.state.movementObj.minX){
      if(Math.abs(yMove) < this.state.movementObj.maxY){
        this.setState ({url2 : !this.state.url2})
      }

    }
  }
  handleFotoLoaded(){
    this.setState({fotoLoaded:true})
    console.log ('foto loaded trueeeeee')
  }

  //TODO read about image preloading
  render() {
    let url = this.props.creacion.pic
    let numPic = '1/2'
    if(this.state.url2){
      url = this.props.creacion.pic2
      numPic = '2/2'
    }

    let nombre = this.props.creacion.nombre
    let precio =this.props.creacion.precio
    let imgLoaded = this.state.fotoLoaded
    return (

      <div  style= {{maxWidth: 300, minHeight: 175, padding: 5 ,}}>

        {!this.props.creacion.vendido &&
          <div  className='btn btn-block'  style= {style.foto.container}>
            {!imgLoaded &&
              <div className='loader'>Cargando...</div>
            }

            <img src= {url} className="img-responsive img-rounded" alt={nombre} draggable = 'false'
              style= {{opacity:1 ,maxWidth:'100%', maxHeight : '200px',cursor: 'pointer'}}
              onLoad= {this.handleFotoLoaded.bind(this)}
              onClick = {this.handleClick.bind(this)}
              onTouchStart={this.handleTouchStart.bind(this)}
              onTouchMove={this.handleTouchMove.bind(this)}
              onTouchEnd={this.handleTouchEnd.bind(this)}
              onMouseEnter={this.handlepic2.bind(this)}
              onMouseLeave={this.handlepic1.bind(this)}
            >
            </img>

            <h6  style = {{width : 25,opacity:0.5,border:'1px solid black' ,borderRadius:'25px', padding: '0px', overflow: 'hidden', margin:0}}>{numPic}</h6>
          </div>
        }
        {this.props.creacion.vendido &&
          <div style= {{position: 'relative', top: 0, left: 0}}>
            {!imgLoaded &&
              <div className='loader'>Cargando...</div>
            }
            <img src= {url} className="img-responsive img-rounded" alt={nombre} draggable = 'false'
              style= {{maxWidth:'100%', maxHeight : '200px',opacity: 0.6, position: 'relative', top: 0, left: 0}}
              onLoad= {this.handleFotoLoaded.bind(this)}
            >
            </img>
            <img src= {'https://firebasestorage.googleapis.com/v0/b/micotextil-3f024.appspot.com/o/vendido.png?alt=media&token=b31eafca-663d-4d89-95f5-ad93afe4aa8f'} className="img-responsive img-rounded" alt={nombre} draggable = 'false'
              style= {{maxWidth:'100%', maxHeight : '200px', position: 'absolute', top: 0, left: 0}}
            />
          </div>
        }

        <div className = 'row' style= {style.foto.container}>
          <div className = 'container-fluid col-xs-9 col-sm-9 col-md-9 col-lg-9' style = {{paddingRight: 0,}}>
            <h5 className='text-muted'  >{nombre}</h5>
          </div>
          <div className = 'container col-xs-3 col-sm-3 col-md-3 col-lg-3' style = {{paddingLeft :5, paddingRight: 5,textAlign:'center'}}>
            <h6 className = 'text-muted '>{precio}€</h6>
=======
    }
  }
  onComponentDidMount(){
    this.setState ({url :this.props.propiedades.pic, name: this.props.propiedades.nombre})
  }
  handleClick(event){
    //console.log ('foto func')
    //paso la info de vuelta al container para que la use
    // en el onClick y hacer router al layout productos
    this.props.whenClicked(this.props.propiedades)
  }
  handlepic2(){
    this.setState ({url2 :true})

  }
  handlepic1(){
    this.setState ({url2 :false})

  }
  //TODO read about image preloading
  render() {
    let url = this.props.propiedades.pic
    if(this.state.url2){
      url = this.props.propiedades.pic2
    }

    let nombre = this.props.propiedades.nombre
    let precio =this.props.propiedades.precio
    //console.log ('caca '+ url)
    return (

      <div class = 'container col-xs-6 col-sm-6 col-md-4 col-lg-4' style= {{width: 300, height: 275, }}>
        <div  class='btn btn-block' onClick = {this.handleClick.bind(this)} onMouseEnter={this.handlepic2.bind(this)} onMouseLeave={this.handlepic1.bind(this)} style= {style.foto.container}>
          <img src= {url} class="img-responsive" style= {style.foto.cover}  alt={nombre}>
          </img>
        </div>
        <div class = 'row' style= {style.foto.container}>
          <div class = 'container-fluid col-xs-9 col-sm-9 col-md-9 col-lg-9'>
            <h5 class='text-muted' style= {style.foto.footName}>{nombre}</h5>
          </div>
          <div class = 'container-fluid col-xs-3 col-sm-3 col-md-3 col-lg-3'>
            <h6 class = 'text-muted pull-right' style= {style.foto.footPrice}>{precio}€</h6>
>>>>>>> beef1cdb7be8214a7eb030961e76e474c8d189d0
          </div>
        </div>
      </div>
    )
  }
}
