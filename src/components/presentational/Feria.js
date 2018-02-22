import React from 'react'
import style from './styles'
export default class Feria extends React.Component {
  constructor(args) {
    super()
  // code
  }

  // methods
  handleClick(event){
<<<<<<< HEAD

    if (event.target.id == 'pic'){
      this.props.whenClicked(this.props.feria.urlFeria)
    }
  }

  render(){

    let mapsImg ='https://firebasestorage.googleapis.com/v0/b/micotextil-3f024.appspot.com/o/mapsPointer.jpeg?alt=media&token=4d2aee6c-56fb-466c-9285-0a49b5abc5fc'
    return(
      <div >
        <div className='container-fluid row' style = {{marginLeft:5}}>
          <div className = 'container col-xs-12 col-sm-4 col-md-4 col-lg-4' style = {{padding : 0}}>
            <h4 style = {{whiteSpace: 'initial'}}>
              {this.props.feria.nombre}
            </h4>
          </div>
          <div className = 'container col-xs-12 col-sm-8 col-md-8 col-lg-8' style = {{padding : 0}}>
            <div className = 'container col-xs-6 col-sm-6 col-md-6 col-lg-6' style = {{padding : 0}}>
              <div className = 'container col-xs-12 col-sm-12 col-md-12 col-lg-6 ' style = {{padding : 0}}>
                <h5 className = 'text-muted' style = {{whiteSpace: 'initial', paddingLeft: 4,marginTop:2, marginBottom:0}}>
                   desde {this.props.feria.fecha}
                </h5>
              </div>
              <div className = 'container col-xs-12 col-sm-12 col-md-12 col-lg-6' style = {{padding : 0}}>
                <h5 className = 'text-muted' style = {{whiteSpace: 'initial', marginBottom:0,marginTop:2,paddingLeft: 4 }}>
                   hasta {this.props.feria.fechaFinal}
                </h5>
              </div>
            </div>
            <div className = 'container col-xs-6 col-sm-6 col-md-6 col-lg-6' style = {{padding : 0}}>
              <h4 className = 'text-muted' style = {{whiteSpace: 'initial'}}>
                {this.props.feria.lugar}
              </h4>
=======
    if (event.target.id == 'mapsLink'){
      this.props.whenClicked(this.props.propiedades.mapsLink)

    }
    if (event.target.id == 'info'){
      this.props.whenClicked(this.props.propiedades.urlFeria)
    }
  }
  // my first and painfull conditional rendering!!
  condiInfo () {
    if (this.props.propiedades.urlFeria != 'desconocida') {
      return(
        <a onClick={this.handleClick.bind(this)} type='button' id='info' class='btn btn-success list-inline' style= {style.feria.btnlink} >
          <li class='glyphicon glyphicon-info-sign' id='info'>
          </li>
          <li ><h5 id='info'>Descubre mas sobre la feria</h5></li>
        </a>
      )
    }else {
      return
    }
  }


  render(){
    let url = this.props.propiedades.pic
    let mapsImg ='https://firebasestorage.googleapis.com/v0/b/mico-62a9a.appspot.com/o/ferias%2F1c9e15bc48db729a509c1c4d9382d180.jpeg?alt=media&token=1d8d39af-4e91-433b-a9db-3978624beb78'
    return(
      <div >
        <div class='container-fluid row' style = {style.feria.headlineContainer}>
          <div class = 'container col-xs-12 col-sm-4 col-md-4 col-lg-4' >
            <h3 style = {{overflow: 'hidden'}}>
              {this.props.propiedades.nombre}
            </h3>
          </div>
          <div class = 'container col-xs-12 col-sm-8 col-md-8 col-lg-8' >
            <div class = 'container col-xs-6 col-sm-6 col-md-6 col-lg-6' >
              <h3 class = 'text-muted' style = {{overflow: 'hidden'}}>
                {this.props.propiedades.fecha} ({this.props.propiedades.duracion} días)
              </h3>
            </div>
            <div class = 'container col-xs-6 col-sm-6 col-md-6 col-lg-6' >
              <h3 class = 'text-muted' style = {{overflow: 'hidden'}}>
                {this.props.propiedades.lugar}
              </h3>
>>>>>>> beef1cdb7be8214a7eb030961e76e474c8d189d0

            </div>
          </div>
        </div>
<<<<<<< HEAD
        <div className='container-fluid row'>
          <div className = 'container col-xs-12 col-sm-6 col-md-5 col-lg-5' >
            <a  style = {{cursor: 'pointer', color:'white',backgroundColor:'transparent',textDecoration: 'none',padding: 0}}>
              <img role='presentation' src={this.props.feria.pic} className ='img-rounded' alt='GMaps' id='pic' style = {{
                maxWidth: '100%'}} onClick={this.handleClick.bind(this)}>
              </img>
            </a>

          </div>
          <div className = 'container-fluid col-xs-12 col-sm-6 col-md-7 col-lg-7' style= {style.foto.container}>

            <div className='row container-fluid row col-xs-12 col-sm-12 col-md-12 col-lg-12' style ={style.feria.texto}>
              <p style = {{overflow: 'hidden'}}>{this.props.feria.descripcion}</p>
=======
        <div class='container-fluid row'>
          <div class = 'container col-xs-7 col-sm-6 col-md-5 col-lg-5' >
            <div class='container' style={style.foto.container} >
              <img role='presentation' src={url} class ='img-rounded'>
              </img>
            </div>
            <div class='container-fluid'>

              {this.condiInfo()}

            </div>
          </div>
          <div class = 'container-fluid col-xs-5 col-sm-6 col-md-7 col-lg-7' style= {style.foto.container}>
            <div class ='row btn' onClick={this.handleClick.bind(this)} type='button' id='mapsLink'
              style={{width : '100%',borderStyle:'dashed', borderTop:0, borderWidth : '5px'}}>

              <div class='container-fluid col-xs-4 col-sm-5 col-md-4 col-lg-3' >
                <img role='presentation' src={mapsImg} class ='img-rounded' alt='GMaps' id='mapsLink' style = {style.feria.mapsLink}>
                </img>
              </div>
              <div class='container-fluid col-xs-8 col-sm-7 col-md-8 col-lg-9'  >
                <p id='mapsLink' style = {{whiteSpace: 'initial',paddingTop:10, fontSize: 15}}>{this.props.propiedades.direccion}</p>
              </div>

            </div>
            <hr></hr>

            <div class='row container-fluid row col-xs-12 col-sm-12 col-md-12 col-lg-12' style ={style.feria.texto}>
              <p style = {{overflow: 'hidden'}}>{this.props.propiedades.descripcion}</p>
>>>>>>> beef1cdb7be8214a7eb030961e76e474c8d189d0
            </div>

          </div>
        </div>
      </div>
    )
  }

}
<<<<<<< HEAD
=======



>>>>>>> beef1cdb7be8214a7eb030961e76e474c8d189d0
