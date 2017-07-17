import React from 'react'

export default (props) => {
	const className = props.className || 'boxed boxed--border'

	return (
        <div className={className}>
            <h4>Modern Aesthetic</h4>
            <p>
                Build a beautifully performant site with Stacks vast collection of modular elements.
            </p>
            <a className="btn btn--primary" href="#">
                <span className="btn__text">
                    Build Now
                </span>
            </a>
        </div>
	)
}


/*
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Foto } from '../presentational'
import actions from '../../actions'
import { connect,PropTypes } from 'react-redux'
import history from '../../utils/history'

class FotoContainer extends Component {

    componentDidUpdate(){

      this.scrolly()
    }

    scrolly(){
        var t = this.theDiv;
        console.log (t);
        t.scrollIntoView();

        //text actually gets the focus but doesn't scroll either
        var text = this.textInput;
        text.focus();
        text.scrollIntoView();
    }

    componentDidMount() {
        this.scrolly();
    }

  render() {
        const totalList = [];
        for(let i = 0; i < 300; i += 1) {
            totalList.push(
                <div key={i}>{`hello ${i}`}</div>
            );
        }

      return (
          <div >
              <div ></div>
              {totalList}
              <div ref={(el) => this.theDiv = el}>this is the div I'm trying to scroll to</div>
              <input
                  type="text"
                  placeholder="this is an input I used to folow the facebook Docs on the topic "
                  ref={(input) => { this.textInput = input }} />
          </div>
      )

  };

}

const dispatchToProps = (dispatch) =>{

  return{

    selectFoto: (foto) =>dispatch(actions.selectedFoto(foto)),
    getCreaciones:()=>dispatch(actions.getCreaciones())
  }
}
const stateToProps = (state) => {
  return{
    //en state.blabla dices de que reducer quieres info
    //y tu le asignas una key q quieras
    firebaseCreaciones:state.creacion
  }
}
//it would be null at d first argument cos i was not registering
//for listening d store, only dispatching actions but NOW I DO to get the
//creaciones from firebase data base
export default connect (stateToProps,dispatchToProps)(FotoContainer)

*/
