/* eslint-disable import/no-anonymous-default-export */
import React from 'react';

export default props => {
    //ler atributos de dentro de um objeto : destructuring
    const { min, max } = props;

    //const [a,b] = [1,2] mesma coisa que a = 1 e b = 2
    //const {c,d, x} = {c: 12, d: 45, x:'teste'} mesma coisa que c = 12, d = 45 e x = teste

    const aleatorio = parseInt(Math.random() * (props.max - props.min) + props.max)
    return (
        <div>
            <h2>Valor Aleatório</h2>
            <p><strong>Valor Mínimo:</strong>{min}</p>
            <p><strong>Valor Máximo:</strong>{max}</p>
            <p><strong>Valor Escolhido:</strong>{aleatorio}</p>
        </div>
    )
}