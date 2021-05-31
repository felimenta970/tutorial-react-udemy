import React from 'react'

export default function RandomNumber(props) {
    const result = Math.round(Math.random() * (props.max - props.min) + props.min);

    return (
        <h3>O valor é { result }</h3>
    )

}