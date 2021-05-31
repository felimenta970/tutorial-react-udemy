import React, { useEffect, useRef, useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'

function merge(string1, string2) {

    return [...string1].map(function(e, i) {
        return `${e}${string2[i] || ""}`
    }).join("")
    
}

const UseRef = (props) => {

    // Ex 01
    const [value1, setValue1] = useState("")
    
    const count = useRef(0)

    //count.current = count.current + 1

    useEffect(function() {
        count.current = count.current + 1
        myInput2.current.focus()
    }, [value1])

    // Ex 02
    const [value2, setValue2] = useState("")

    useEffect(function() {
        count.current = count.current + 1
        myInput1.current.focus()
    }, [value2])

    const myInput1 = useRef(null)
    const myInput2 = useRef(null)

    return (
        <div className="UseRef">
            <PageTitle
                title="Hook UseRef"
                subtitle="Retorna um objeto mutável com a propriedade .current!"
            />

            <SectionTitle title="Exercicio 01"></SectionTitle>
            <div className="center">

                <div>
                    <span className="text">Valor: </span>
                    <span className="text">{merge(value1, value2)} [</span>
                    <span className="text red">{count.current}</span>
                    <span className="text">]</span>
                </div>

                <input type="text" className="input" ref={myInput1} value={value1} onChange={e => setValue1(e.target.value)}/>
            </div>

            <SectionTitle title="Exercicio 01"></SectionTitle>
            <div className="center">

                <input type="text" className="input" ref={myInput2} value={value2} onChange={e => setValue2(e.target.value)}/>
            </div>
        </div>
        
    )
}

export default UseRef
