//Este componente renderiza uma lista de componentes 
//É o componente que esta a ser renderizado pelo App.js
import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
    render() {
        //Object Destructuring para pegar as propriedades dos props que queremos usar
        const { onReset, counters, onDelete, onIncrement } = this.props;

        return (
            <div>
                <button className="btn btn-primary btn-sm m-2" onClick={onReset}>Reset</button>
                {counters.map(counter =>
                    //Passando atributo counter={counter} como props.
                    //Props children: quando quero passar um props dentro do objeto entre as tags de abertura e fechamento
                    //Key é usado internamente pelo react, por isso é melhor passar o objeto counter inteiro para qualquer adição de propriedade ser passada juntamente com todo o objeto
                    <Counter key={counter.id} onDelete={onDelete} onIncrement={onIncrement} counter={counter} />)}
            </div>
        );
    }
}

export default Counters;
