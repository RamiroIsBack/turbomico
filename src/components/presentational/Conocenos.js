import React, { Component } from 'react'
import style from './styles'

class Conocenos extends Component {
  handleClick(event){
    this.props.whenClicked()
  }
  render() {
<<<<<<< HEAD
    //el conocenos primero deberia ser algo mas corto en xs
    return (
      <div>
        <div className = 'container text-center'>
          <h2>{this.props.conocenosContenido.headerFoto.headerConocenos}</h2>
          <hr/>
        </div>
        <div className = 'col-xs-12 col-sm-6 col-md-6 col-lg-6'  >
=======
    return (
      <div>
        <div class = 'container text-center'>
          <h2>{this.props.conocenosContenido.headerFoto.headerConocenos}</h2>
          <hr/>
        </div>
        <div class = 'col-xs-12 col-sm-6 col-md-6 col-lg-6'  >
>>>>>>> beef1cdb7be8214a7eb030961e76e474c8d189d0
          {this.props.conocenosContenido.descripcion.descripcionConocenos.split('\n').map((item, key) => {
            return <span key={key}>{item}<br/></span>})}

        </div>
<<<<<<< HEAD
        <div className = 'col-xs-12 col-sm-6 col-md-6 col-lg-6'  >
          <div className='container col-xs-8 col-sm-12 col-md-12 col-lg-12' style={style.foto.container} >
            <img role='presentation' src={this.props.conocenosContenido.headerFoto.urlPicConocenos} className ='img-rounded' style={{maxWidth :'100%'}}>
            </img>
          </div>
          <div className = 'container col-xs-12 col-sm-12 col-md-12 col-lg-12' style = {{marginTop:10, marginBottom: 20}}>
            {this.props.artesaniaContenido.headerFoto.relacionArtesania.split('\n').map((item, key) => {
              return <span key={key}>{item}<br/></span>})}
          </div>
          <div className='container col-xs-12 col-sm-offset-2 col-sm-8 col-md-8 col-lg-8' style={style.foto.container} >
            <a onClick={this.handleClick.bind(this)} style = {{cursor: 'pointer',}}>
              <h4 className = 'text-center'>Artesanía de Galicia</h4>
              <img role='presentation' src={this.props.artesaniaContenido.headerFoto.urlPicArtesania} className ='img-rounded' style={{maxWidth :'100%'}}>
=======
        <div class = 'col-xs-12 col-sm-6 col-md-6 col-lg-6'  >
          <div class='container col-xs-8 col-sm-12 col-md-12 col-lg-12' style={style.foto.container} >
            <img role='presentation' src={this.props.conocenosContenido.headerFoto.urlPicConocenos} class ='img-rounded'>
            </img>
          </div>
          <div class = 'container col-xs-6 col-sm-12 col-md-12 col-lg-12' style = {{marginTop:10, marginBottom: 20}}>
            {this.props.artesaniaContenido.headerFoto.relacionArtesania.split('\n').map((item, key) => {
              return <span key={key}>{item}<br/></span>})}
          </div>
          <div class='container col-xs-offset-1 col-xs-5 col-sm-offset-2 col-sm-8 col-md-8 col-lg-8' style={style.foto.container} >
            <a onClick={this.handleClick.bind(this)} style = {{cursor: 'pointer',}}>
              <h4 class = 'text-center'>Artesanía de Galicia</h4>
              <img role='presentation' src={this.props.artesaniaContenido.headerFoto.urlPicArtesania} class ='img-rounded'>
>>>>>>> beef1cdb7be8214a7eb030961e76e474c8d189d0
              </img>
            </a>
          </div>
        </div>
      </div>
    )
  }
}

export default Conocenos



/*
Para separar con los /n (linebreacks)
https://medium.com/@kevinsimper/react-newline-to-break-nl2br-a1c240ba746


{this.props.text.split('\n').map(function(item, key) {
  return (
    <span key={key}>
      {item}
      <br/>
    </span>
  )
})}

Now we're wrapping each line-break in a span, and that works fine because span’s has display inline. Now we got a working nl2br line-break solution.
And ES6 version
{this.props.text.split('\n').map((item, key) => {
  return <span key={key}>{item}<br/></span>
})}*/
