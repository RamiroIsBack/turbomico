import React from "react"
import Feria from "../presentational/Feria";

export default class FeriasContainer extends React.Component {
    constructor(args) {
        super()
        this.state ={
            list : [
                {name : "feria 1", lugar: "Coruña"},
                {name : "feria 2", lugar: "Vigo"},
                {name : "feria 3", lugar: "Madrid"},
                {name : "feria 4", lugar: "la luna"}
            ]
        }
        // code
    }
    render(){
        
        const listItem = this.state.list.map((feria,i)=>{
            return(
                <div key ={i}><Feria propiedades ={feria}/></div>
            )
        })
        return(
            <div>
                {listItem}
            </div>
        )
    }

    // methods
}   