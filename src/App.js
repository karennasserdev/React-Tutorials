//A reponsabilidade deste componente é dar o conteúdo (counters) e trabalhar com funções em cima dele.
import React, { Component } from 'react';
import './App.css';
import Counters from './components/counters';
import NavBar from './components/navbar';
class App extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ]

  };

  //Métodos para mutar ou transformar o state:
  handleIncrement = counter => {
    //clonar o array counter para um novo array de counters
    const counters = [...this.state.counters];
    //precisa achar o index do counter que estamos a receber pelo argumento
    const index = counters.indexOf(counter);
    //novo objeto para clonar o counter que recebemos de argumento e não modificar o state original.
    counters[index] = { ...counter };
    counters[index].value++;
    //update do state com o novo array counters
    this.setState({ counters });
  }

  //O componente counter.jsx lança o evento e este componente lida com o evento (onDelete).
  handleDelete = counterId => {
    //criar uma nova array através do filter pra substituir o objeto counters antigo, agora sem o item que foi deletado.
    const counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({ counters });
  }

  handleReset = () => {
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  }

  render() {
    return (
      <React.Fragment>
        {/* mostrar o total de counters no navbar através do filtro de counters diferentes de zero e length para o número total de counters. */}
        <NavBar totalCounters={this.state.counters.filter(c => c.value > 0).length} />
        <main className="container">
          <Counters counters={this.state.counters} onReset={this.handleReset} onIncrement={this.handleIncrement} onDelete={this.handleDelete} />
        </main>
      </React.Fragment>
    );
  }
}

export default App;


//ComponentDidMount() é lifecycle hook, é chamado depois do compontente ser renderizado no DOM e é ideal para fazer chamadas AJAX e buscar dados do servidor.
//Lifecycle hooks é usado apenas em componentes classe