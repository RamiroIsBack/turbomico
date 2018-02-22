import React, { Component } from 'react'
import { NavLink} from 'react-router-dom'
import style from './styles'
export default class CarroProduct extends Component {
<<<<<<< HEAD
  constructor(){
    super()
    this.state ={
      showDescripcion:false,
    }
  }
=======
>>>>>>> beef1cdb7be8214a7eb030961e76e474c8d189d0

  handleClick(){
    //aqui hay una inconsistencia xq va a la pagina desde el
    //navlink pero es atraves de una acci'on x lo que llegan
    //los datos al componente de destino, si x una razon no
    //llegan esos datos se renderizaria con null?
    this.props.whenClicked(this.props.propiedades)
  }
  handleErase(){
    this.props.whenErase(this.props.indice)
  }
  //el event se pasa siempre como ultimo arg
  handleqtty(qtty ,event){
    console.log ('event del qtty ' + qtty)
    /*var qtty = 1
    if (event.target.id == '-'){
      qtty = 0
    }*/
    this.props.changeQtty(this.props.indice ,qtty)
  }
<<<<<<< HEAD
  toogleDescripcion(e){
    this.setState({showDescripcion: !this.state.showDescripcion})
  }
  //<small>(x{this.props.propiedades.unidades})</small>
  render() {
    let name = this.props.propiedades.nombre
=======

  render() {
    let name = this.props.propiedades.name
>>>>>>> beef1cdb7be8214a7eb030961e76e474c8d189d0
    let url = this.props.propiedades.pic
    var precio = this.props.propiedades.precio * this.props.propiedades.unidades
    return (

<<<<<<< HEAD
      <div className = 'container-fluid' style= {{display : 'inline-block', padding: '0px', border: '1px solid #2C6549', borderRadius:'10px', width : '98%'}}>
        <div className = 'container-fluid col-xs-12 col-sm-6 col-md-5 col-lg-5' style= {style.foto.container}>
          <NavLink to='/Productos' onClick={this.handleClick.bind(this)}>
            <img role='presentation' src={url} className ='img-rounded' style= {{maxWidth:'100%', maxHeight: '125px'}}>
=======
      <div class = 'container-fluid' style= {style.foto.panel}>
        <div class = 'container-fluid col-xs-12 col-sm-6 col-md-5 col-lg-5' style= {style.foto.container}>
          <NavLink to='/Productos' onClick={this.handleClick.bind(this)}>
            <img role='presentation' src={url} class ='img-rounded'>
>>>>>>> beef1cdb7be8214a7eb030961e76e474c8d189d0
            </img>
          </NavLink>

        </div>
<<<<<<< HEAD
        <div className = 'container-fluid col-xs-12 col-sm-6 col-md-7 col-lg-7' style= {style.foto.container}>
          <table className="table-condensed table-responsive" style = {{width : '100%', border: 'none' ,marginBottom:0}}>
            <tbody>
              <tr>
                <th>{name}
                </th>
                <th>
                  <btn className = 'btn glyphicon glyphicon-remove pull-right' style= {style.foto.container} onClick = {this.handleErase.bind(this)}>
                  </btn>
                </th>
              </tr>

            </tbody>
          </table>
          <table className="table-condensed table-responsive" style = {{width : '100%', border: 'none' ,marginBottom:0}}>
            <tbody>
              {!this.state.showDescripcion &&
                <tr>
                  <td role='button' onClick = {this.toogleDescripcion.bind(this)}>mostrar descripcion:</td>
                  <td>
                    <small className = 'glyphicon glyphicon-chevron-down' role='button' onClick = {this.toogleDescripcion.bind(this)}>
                    </small>

                  </td>
                </tr>
              }
              {this.state.showDescripcion &&
                <tr>
                  <td role='button' onClick = {this.toogleDescripcion.bind(this)} >
                    {this.props.propiedades.descripcion}
                  </td>
                  <td className = 'glyphicon glyphicon-chevron-up' role='button' onClick = {this.toogleDescripcion.bind(this)}></td>
                </tr>
              }
              <tr>
                <td>precio:</td>
                <td className = 'pull-right' style = {style.carroProduct.texto}>{precio} €</td>
=======
        <div class = 'container-fluid col-xs-12 col-sm-6 col-md-7 col-lg-7' style= {style.foto.container}>
          <table class="table-condensed table-responsive">
            <tbody>
              <tr>
                <th>{this.props.propiedades.name}
                </th>
                <th>
                  <btn class = 'btn glyphicon glyphicon-remove pull-right' style= {style.foto.container} onClick = {this.handleErase.bind(this)}>
                  </btn>
                </th>
              </tr>
              <tr>
                <td>precio/unidad: </td>
                <td>{this.props.propiedades.precio}</td>
              </tr>
              <tr>
                <td>Existencias: </td>
                <td>{this.props.propiedades.disponibilidad} disponible</td>
              </tr>
              <tr>
                <td>Cantidad: </td>
                <td>
                  <tag style = {style.carroProduct.texto}>
                    {this.props.propiedades.unidades} </tag>
                  <div class="btn-group" role="group" aria-label="...">
                    <btn id = '+' class = 'btn glyphicon glyphicon-plus' style= {style.foto.container} onClick = {this.handleqtty.bind(this,1)}/>
                    <btn id = '-' class = 'btn glyphicon glyphicon-minus' style= {style.foto.container} onClick = {this.handleqtty.bind(this,0)}/>
                  </div>

                </td>
              </tr>
              <tr>
                <td>precio <small>(x{this.props.propiedades.unidades})</small>:</td>
                <td class = 'pull-right' style = {style.carroProduct.texto}>{precio} €</td>
>>>>>>> beef1cdb7be8214a7eb030961e76e474c8d189d0

              </tr>
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}

