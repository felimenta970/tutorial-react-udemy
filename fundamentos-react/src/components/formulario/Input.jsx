import './Input.css'
import React, { useState } from 'react'

export default props => {

    const [valor, setValor] = useState('Inicial')

    function quandoMudar(e) {
        setValor(e.target.value)
    }

    return (
        <div>
            <input value={valor} onChange={quandoMudar}/>
        </div>
    )
}