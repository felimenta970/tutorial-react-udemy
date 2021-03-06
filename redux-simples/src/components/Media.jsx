import React from 'react' 
import { connect } from 'react-redux'

import './Intervalo.css'

import Card from './Card'

function Media(props) {

    const { min, max } = props

    return (
        <Card title = "Média dos números" green>
            <div>
                <span>
                    <span>Resultado: </span>
                    <strong>{(min + max) / 2}</strong>
                </span>
            </div>
            
        </Card>
    )
}

function mapStateToProps(state) {
    return {
        min: state.numeros.min,
        max: state.numeros.max
    }
}

export default connect(mapStateToProps)(Media)