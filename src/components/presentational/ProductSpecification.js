import React, { Component } from 'react'

export default class ProductSpecification extends Component {
  render() {
    return (
      <div class ='container-fluid'>
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
                {(this.props.propiedades.materiales) ? this.props.propiedades.materiales : 'tela galega'}
              </td>
            </tr>
          </tbody>
        </table>
        <h2>100%
          <small> Galego</small>
        </h2>
        <p >Aqui ir'a una descripci'on larga sobre que todo est'a hecho a mano, es producto artesano gallego
        </p>
        <p>Continuaci'on de la descripci'on larga sobre que todo est'a hecho a mano, es producto artesano gallego
        </p>
      </div>
    )
  }
}

