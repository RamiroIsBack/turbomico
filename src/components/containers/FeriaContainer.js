import React, { Component } from 'react'
import actions from '../../actions'
import { connect } from 'react-redux'
import {Feria} from '../presentational'
import style from './styles'
import { NavLink} from 'react-router-dom'

class FeriaContainer extends Component {
  constructor(){
    super()
  }
  //componentWillMount is executed once before the initial rendering occurs.

  componentDidMount() {
    if (this.props.firebaseFerias.feriasLoaded == false){
      //en el reducer ya lo pone a true
      this.props.getFerias()
    }

    if (this.props.firebaseFerias.feriaSectionSelected != 'allFerias'){
      setTimeout(() => {
        this.focusDiv(this.props.firebaseFerias.feriaSectionSelected)
      }, 500)
    }else{
      //make it start at the top of the page every time
      window.scrollTo(0, 0)
    }
  }
  componentDidUpdate(){
    /*this.focusDiv('pendientes')*/
    if (this.props.firebaseFerias.feriaSectionSelected != 'allFerias'){
      setTimeout(() => {
        this.focusDiv(this.props.firebaseFerias.feriaSectionSelected)
      }, 500)
    }else{
      window.scrollTo(0, 0)
    }
  }

  focusDiv(feria){

    let feriaList = this.props.firebaseFerias.listaFerias
    for (var i=0; i < feriaList.length; i++) {
      if (feriaList[i].nombre == feria) {
        var theDiv = this[feriaList[i].id]
      }
    }
    if(theDiv){
      theDiv.scrollIntoView({block: 'start', behavior: 'smooth'})
    }
  }

  selectFeria(urlFeria){
    console.log('cacota ferial')
    window.open(urlFeria,'_blank')
  }

  render() {

    let feriaList = this.props.firebaseFerias.listaFerias
    const feriasComponents = feriaList.map((feria,i)=>{
      if (!feria.caducada){
        return(
          <div class='contianer-fluid' key ={i} ref={(el) => this[feria.id] = el}>

            <div class='contianer-fluid row'>


              {feria.enCurso&&
                <NavLink class ='container-fluid btn btn-block ' to='/Ferias' style={{cursor: 'default', padding: '0px',border: 'none',}}>
                  <img role='presentation' src='https://firebasestorage.googleapis.com/v0/b/mico-62a9a.appspot.com/o/contenidos%2FbubleMesage3.png?alt=media&token=5aba160b-bb68-4362-9582-8f9c6f29ebc2}'  class ='img-rounded' style ={{maxHeight: '200px', width : '100%',minHeight: '151px', display : 'block',
                    }} >
                  </img>
                  <div class = 'carousel-caption' style = {{color :'black',top: 30}}>
                    <h3  style = {{textAlign :'center',borderRadius:'4px', padding: '0px',marginTop : 0,marginBottom : 0, overflow: 'hidden'}}>estamos en {feria.nombre}</h3>
                    <h3  style = {{textAlign :'center',borderRadius:'4px', padding: '0px',marginTop : 5,marginBottom : 0, overflow: 'hidden'}} >!ven a visitarnos!</h3>
                  </div>
                </NavLink>

              }


              <Feria propiedades ={feria} whenClicked={this.selectFeria.bind(this)}/>

            </div>
          </div>
        )
      }
    })
    return (
      <div class ='contianer-fluid'>

        {feriasComponents}

      </div>
    )
  }
}
const dispatchToProps = (dispatch) =>{

  return{

    getFerias:()=>dispatch(actions.getFerias()),
  }
}
const stateToProps = (state) => {
  return{
    //en state.blabla dices de que reducer quieres info
    //y tu le asignas una key q quieras
    firebaseFerias:state.feria,
  }
}
//it would be null at d first argument cos i was not registering
//for listening d store, only dispatching actions but NOW I DO to get the
//creaciones from firebase data base
export default connect (stateToProps,dispatchToProps)(FeriaContainer)





