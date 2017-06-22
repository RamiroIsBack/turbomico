import React from "react"
import styles from "./styles"
export default class Feria extends React.Component {
    constructor(args) {
        super()
        // code
    }

    // methods

    render(){
        const estiloferia = styles.feria
        return(
            <div style = {estiloferia.container}>
                <h3 style ={estiloferia.header}>
                    <a style = {estiloferia.title}>
                        feria: {this.props.propiedades.name}
                    </a>
                </h3>
                <span >
                    {this.props.propiedades.lugar}
                </span>
                <br/>
                <span style ={estiloferia.texto}>
                    esto es una explicacion de la feria
                </span>
                <br/>
                <span style ={estiloferia.texto}>
                    esto es una explicacion de la feria
                </span>
                <br/>
                <p style ={estiloferia.textoSecundario}>
                    pelo pelito peloxxxxxxxxxxxxxxxxxxxcxxc
                    la ceta no va ni pa atrászzzzzzzzzzzzzzzzzz
                    a aveces si a veces nozzz
                </p>
            </div>


        )
    }
}