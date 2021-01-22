//Este componente renderiza botões e notifica mudanças
//Este componente vai lançar eventos e o componente App.js vai fazer o handle do evento
import React, { Component } from 'react';

class Counter extends Component {

    //Este componente não possui state e ele passa a ser um componente controlado pelo componente pai. Ele recebe todos os dadaos por props e chama eventos quando os dados precisarem ser modificados.
    //Ele é completamente controlado pelo componente pai (App.js)
    // state ={ value: this.props.counter.value};

    formatCount() {
        //se value for igual a 0 o número é substituido pela string 'Zero'
        const { value } = this.props.counter;
        return value === 0 ? 'Zero' : value;
    }

    getBadgeClasses() {
        //determina a clase do span
        let classes = "badge m-2 badge-";
        classes += this.props.counter.value === 0 ? "warning" : "primary";
        return classes;
    }

    render() {
        return (
            //ao invés de colocar div e ficarmos com 2 divs no html, podemos usar o React.Fragment no lugar de <div><div/>
            <div>
                <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button onClick={() => this.props.onIncrement(this.props.counter)} className="btn btn-secondary btn-sm">Increment</button>
                {/*para passar um atributo a uma função deve usar arrow functions */}
                <button onClick={() => this.props.onDelete(this.props.counter.id)} className="btn btn-danger btn-sm m-2">Delete</button>
            </div>
        )
    }
}

export default Counter;


