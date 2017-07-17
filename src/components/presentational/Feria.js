import React from 'react'
import style from './styles'
export default class Feria extends React.Component {
  constructor(args) {
    super()
  // code
  }

  // methods
  handleClick(event){
    this.props.whenClicked(this.props.propiedades.urlFeria)
  }
  // my first and painfull conditional rendering!!
  condiInfo () {
    if (this.props.propiedades.urlFeria != 'desconocida') {
      return(
        <a onClick={this.handleClick.bind(this)} type='button' id='info' class='btn btn-success list-inline' style= {style.feria.btnlink} >
          <li class='glyphicon glyphicon-info-sign'>
          </li>
          <li><h5>Descubre mas sobre la feria</h5></li>
        </a>
      )
    }else {
      return
    }
  }


  render(){
    let url = this.props.propiedades.pic

    return(
      <div style = {style.feria.container}>
        <div class='container-fluid row'>
          <div class = 'container col-xs-12 col-sm-4 col-md-4 col-lg-4' >
            <h3>
              {this.props.propiedades.nombre}
            </h3>
          </div>
          <div class = 'container col-xs-12 col-sm-8 col-md-8 col-lg-8' >
            <div class = 'container col-xs-6 col-sm-6 col-md-6 col-lg-6' >
              <h3 class = 'text-muted'>
                {this.props.propiedades.fecha}
              </h3>
            </div>
            <div class = 'container col-xs-6 col-sm-6 col-md-6 col-lg-6' >
              <h3 class = 'text-muted'>
                {this.props.propiedades.lugar}
              </h3>

            </div>
          </div>
        </div>
        <div class='container-fluid row'>
          <div class = 'container col-xs-12 col-sm-6 col-md-5 col-lg-5' >
            <div class='container' style={style.foto.container} >
              <img role='presentation' src={url} class ='img-rounded'>
              </img>
            </div>
            <div class='container-fluid'>

              {this.condiInfo()}

            </div>
          </div>
          <div class = 'container-fluid col-xs-12 col-sm-6 col-md-7 col-lg-7' style= {style.foto.container}>

            <div class='container-fluid row' >
              {this.props.propiedades.direccion}
            </div>
            <div class='container-fluid row' style ={style.feria.texto}>
              {this.props.propiedades.urlFeria}
            </div>

            <div class='container-fluid row' style ={style.feria.texto}>
              {this.props.propiedades.descripcion}
            </div>



          </div>
        </div>
      </div>
    )
  }

}



