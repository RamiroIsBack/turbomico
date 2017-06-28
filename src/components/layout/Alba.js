import React,{Component} from 'react'
import style from './styles'

export default class Alba extends Component{


  render(){
    return (
      <div class='container-fluid' id ='backgroundDiv' style ={style.universal.backgroundDiv}>
        <div class='container-fluid' id ='containerDiv' style ={style.universal.containerDiv}>
          Aqui es donde Alba meter'a los datos
        </div>
      </div>
    )
  }

}
