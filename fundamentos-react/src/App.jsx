import React from 'react'
import './App.css'

import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import Fragmento from './components/basicos/fragmento'
import RandomNumber from './components/basicos/RandomNumber'
import Card from './components/layout/Card'
import Familia from './components/basicos/Familia'
import FamiliaMembro from './components/basicos/FamiliaMembro'
import ListaAlunos from './components/repeticao/ListaAlunos'
import TabelaProdutos from './components/repeticao/TabelaProdutos'
import ParOuImpar from './components/condicional/ParOuImpar'
import UsuarioInfo from './components/condicional/UsuarioInfo'
import DiretaPai from "./components/comunicacao/DiretaPai"
import IndiretaPai from './components/comunicacao/IndiretaPai.jsx'
import Input from './components/formulario/Input'
import Contador from './components/contador/Contador'
import Mega from './components/mega/Mega'

export default () => {
    return (
        <div className="App">
            <h1>Fundamentos React</h1>
            <div className="Cards">

            <Card  titulo="Mega" color="#424242">
                <Mega></Mega>
            </Card>

            <Card  titulo="Contador" color="#424242">
                <Contador numeroInicial={10}></Contador>
            </Card>    

            <Card  titulo="Componente controlado" color="#E45F56">
                <Input />
            </Card>

            <Card  titulo="Comunicação Indireta" color="#8BAD39">
                <IndiretaPai />
            </Card>    

            <Card  titulo="Comunicação Direta" color="#59323C">
                <DiretaPai />
            </Card>    

            <Card  titulo="Renderização Condicional" color="#982395">
                <ParOuImpar numero={20}/>
                <UsuarioInfo usuario={{nome: 'Fernando'}}></UsuarioInfo>
                <UsuarioInfo usuario={{email: 'fer@nando.com'}}></UsuarioInfo>
            </Card>

            <Card  titulo="Repetição Produtos" color="#FF4C65">
                <TabelaProdutos></TabelaProdutos>
            </Card>

            <Card  titulo="Repetição" color="#FF4C65">
                <ListaAlunos></ListaAlunos>
            </Card>

            <Card  titulo="Componente com Filhos" color="#00C8F8">
                <Familia>
                    <FamiliaMembro nome="Pedro" sobrenome="Ferreira"/>
                    <FamiliaMembro nome="Ana" sobrenome="Ferreira"/>
                    <FamiliaMembro nome="Gustavo" sobrenome="Ferreira"/>
                </Familia>
            </Card>
                
                <Card  titulo="Desafio Aleatório" color="#FA6900">
                    <RandomNumber min={1} max={60} />
                </Card>

                <Card titulo="Fragmento" color="#E94C6F">
                    <Fragmento />
                </Card>

                <Card titulo="Com parâmetro" color="#E8B71A">
                    <ComParametro
                        titulo="Segundo Componente"
                        subtitulo="Muito legal!"
                    />
                </Card>

                <Card titulo="Com parâmetro" color="#588C73">
                    <Primeiro />
                </Card>
            </div>
        </div>
    )
}