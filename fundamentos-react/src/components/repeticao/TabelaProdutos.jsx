import React from 'react'
import produtos from '../../data/Produtos'

export default props => {

    const lis = produtos.map(produto => {
        return (
            <tr key={produto.id}>
                <td>{produto.id}</td>
                <td>{produto.nome}</td>
                <td>{produto.preco}</td>
            </tr>
        )
    })

    return (
        <div>
            <table style={{width:'100%'}}>
                <tr>
                    <th>ID</th>
                    <th>Nome</th>
                    <th>Preço (R$)</th>     
                </tr>
                {lis}
            </table>
        </div>
    )
}