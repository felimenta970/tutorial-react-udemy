import React from 'react'
import DiretaFilho from './DiretaFilho'

export default props => {
    return (
        <div>
            <DiretaFilho nome="Filho 1" idade={20} bool={true} />
            <DiretaFilho nome="Filho 2" idade={17} bool={false} />
        </div>
    )
}