import React, { Component } from 'react'
import { NavLink} from 'react-router-dom'
import style from './styles'
export default class CarroProduct extends Component {

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

  render() {
    let name = this.props.propiedades.name
    let url = '/images/'+this.props.propiedades.name
    var precio = this.props.propiedades.precio * this.props.propiedades.unidades
    return (

      <div class = 'container-fluid' style= {style.foto.panel}>
        <div class = 'container-fluid col-xs-12 col-sm-6 col-md-5 col-lg-5' style= {style.foto.container}>
          <NavLink to='/Productos' onClick={this.handleClick.bind(this)}>
            <img role='presentation' src={url} class ='img-rounded'>
            </img>
          </NavLink>

        </div>
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
                <td>precio:</td>
                <td class = 'pull-right' style = {style.carroProduct.texto}>{precio} €</td>

              </tr>
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}

