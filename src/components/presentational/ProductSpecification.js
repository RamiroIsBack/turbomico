import React, { Component } from 'react'

export default class ProductSpecification extends Component {
  render() {
<<<<<<< HEAD

    return (
      <div className ='container-fluid' style={{padding: 0}}>
        <table className="table-condensed table-responsive">
          <tbody>
            <tr>
              <th>
                <h4 >{this.props.propiedades.nombre}</h4>
              </th>
            </tr>
            <tr>
              <td>

                <p >{this.props.propiedades.descripcion}</p>
              </td>
            </tr>
          </tbody>
        </table>
        <table className="table-condensed table-responsive">
          <tbody>
=======
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
>>>>>>> beef1cdb7be8214a7eb030961e76e474c8d189d0
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
<<<<<<< HEAD
        <div className = 'container-fluid row col-xs-12 col-sm-12 col-md-12 col-lg-12'  >
=======
        <div class = 'container-fluid row col-xs-12 col-sm-12 col-md-12 col-lg-12'  >
>>>>>>> beef1cdb7be8214a7eb030961e76e474c8d189d0
          {this.props.contenido.headerFoto.relacionArtesania.split('\n').map((item, key) => {
            return <span key={key}>{item}<br/><br/></span>})}

        </div>
<<<<<<< HEAD
        <div className='container col-xs-8 col-sm-12 col-md-12 col-lg-12'  >
          <img role='presentation' src={this.props.contenido.logo.urlLogoArtesania} className ='img-rounded' style={{maxWidth: '100%'}}>
=======
        <div class='container col-xs-8 col-sm-12 col-md-12 col-lg-12'  >
          <img role='presentation' src={this.props.contenido.logo.urlLogoArtesania} class ='img-rounded'>
>>>>>>> beef1cdb7be8214a7eb030961e76e474c8d189d0
          </img>
        </div>
      </div>
    )
  }
}

