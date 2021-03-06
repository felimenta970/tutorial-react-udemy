import React from 'react' 

import './App.css';

import Media from './components/Media';
import Soma from './components/Soma';
import Sorteio from './components/Sorteio';
import Intervalo from './components/Intervalo'

function App() {

  return (
    <div className="App">
      <h1>Exercicios React - Redux (Simples)</h1>
      <div className="linha">
        <Intervalo title="Card 1" red></Intervalo>
        
      </div>
      <div className="linha">
        <Media></Media>
        <Soma></Soma>
        <Sorteio></Sorteio>
      </div>
      
    </div>
  );
}

export default App;
