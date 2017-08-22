import React, { Component } from 'react'

export default class ProductSpecification extends Component {
  render() {
    let caca = this.props.propiedades
    return (
      <div class ='container-fluid' style={{padding: 0}}>
        <table class="table-condensed table-responsive">
          <tbody>
            <tr>
              <th>{this.props.propiedades.name}</th>
              <th></th>
            </tr>

            <tr>
              <td>Existencias: </td>
              <td>{this.props.propiedades.disponibilidad} disponible</td>
            </tr>
            <tr>
              <td>precio:</td>
              <td>{this.props.propiedades.precio} €</td>

            </tr>
            <tr>
              <td>Materiales: </td>
              <td>
                {(this.props.propiedades.materiales) ? this.props.propiedades.materiales : 'no especificado'}
              </td>
            </tr>
          </tbody>
        </table>
        <hr/>
        <div class = 'container-fluid row col-xs-12 col-sm-12 col-md-12 col-lg-12'  >
          {this.props.contenido.headerFoto.relacionArtesania.split('\n').map((item, key) => {
            return <span key={key}>{item}<br/><br/></span>})}

        </div>
        <div class='container col-xs-8 col-sm-12 col-md-12 col-lg-12'  >
          <img role='presentation' src={this.props.contenido.logo.urlLogoArtesania} class ='img-rounded'>
          </img>
        </div>
      </div>
    )
  }
}

