import React, { Component } from 'react'
import actions from '../../actions'
import { connect } from 'react-redux'
import {Feria} from '../presentational'
import styles from './styles'

class FeriaContainer extends Component {
  constructor(){
    super()
  }
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
            <hr/>
            <div class='contianer-fluid row' style = {styles.headerRowFerias.container}>
              {feria.enCurso&&
                <h3 style = {{backgroundColor: 'grey', color:'yellow',textAlign :'center'}}>estamos en {feria.nombre}, ven a visitarnos! </h3>

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
    firebaseFerias:state.feria
  }
}
//it would be null at d first argument cos i was not registering
//for listening d store, only dispatching actions but NOW I DO to get the
//creaciones from firebase data base
export default connect (stateToProps,dispatchToProps)(FeriaContainer)





