import React, { Component } from 'react'
import { NavLink} from 'react-router-dom'
import style from './styles'

export default class Product extends Component {

  handleClick(){
    this.props.whenClicked(this.props.propiedades)
  }

  render() {
    let url = '/images/'+this.props.propiedades.name

    return (
      <div class='card '>
        <NavLink to='/Carro' onClick={this.handleClick.bind(this)}>
          <img class='card-img-top' src={url} alt='Card image cap' style={style.product}/>
        </NavLink>
        <div class='card-block'>
          <h4 class='card-title'>Card title</h4>
          <p class='card-text'>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <NavLink to='/Carro' type='button' class='btn btn-success list-inline' style= {style.carroProduct.btnPedido} onClick={this.handleClick.bind(this)}>
              <li class='glyphicon glyphicon-shopping-cart'>
              </li>
              <li><h4>Añadir al carro</h4></li>
          </NavLink>
        </div>
      </div>
    )
  }
}
