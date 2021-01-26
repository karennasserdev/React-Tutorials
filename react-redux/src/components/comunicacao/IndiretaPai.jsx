/* eslint-disable import/no-anonymous-default-export */
import React, { useState } from 'react'
import IndiretaFilho from './IndiretaFilho'

//Passar uma funcao via props do pai pro filho e quando o filho chamar atraves de algum evento passar essas informações pro pai

export default props => {
    //useState retorna um array com 2 posições, a primeira é o valor em si e a segunda é uma função(com qualquer nome) usada para alterar esse valor
    const [nome, setNome] = useState('?')
    const [idade, setIdade] = useState(0)
    const [nerd, setNerd] = useState(false)

    function fornecerInformacoes(nome, idade, nerd) {
        setNome(nome)
        setIdade(idade)
        setNerd(nerd)
    }


    return (
        <div>
            <div>
                <span>{nome} </span>
                <span><strong>{idade}</strong></span>
                <span> {nerd ? 'Verdadeiro' : 'Falso'}</span>
            </div>
            <IndiretaFilho quandoClicar={fornecerInformacoes}></IndiretaFilho>
        </div>
    )
}