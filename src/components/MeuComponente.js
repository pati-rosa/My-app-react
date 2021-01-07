import React, { Component } from 'react';


// function App() {
//   return (
//       <h1> Treina Web </h1>

//   );
// }

// const App = () => {
//   <h1>Treina web</h1>
// }

class MeuComponente extends Component{
  render(){
    return <h1>Treina web</h1>
  }
}

export const MeusComponentes = {
    Treinaweb: function(){
        return <h1>Treina web</h1>;
    }

}; // guardando componente dentro de um objeto

export default MeuComponente;
