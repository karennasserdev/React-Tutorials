import React, { Component } from 'react'
import Botoes from './Botoes'
import './Contador.css'
import Display from './Display'
import PassoForm from './PassoForm'

export default class Contador extends Component {
    //podes usar ou não o construtor
    // constructor(props) {
    //     super(props)

    //     this.state = {
    //         numero: this.props.numeroInicial,
    //     }

    //     this.inc = this.inc.bind(this);
    // }


    state = {
        numero: this.props.numeroInicial || 0,
        passo: this.props.passoInicial || 5
    }

    inc = () => {
        this.setState({ numero: this.state.numero + this.state.passo })
    }

    dec = () => {
        this.setState({ numero: this.state.numero - 1 })
    }

    setPasso = (novoPasso) => {
        this.setState({ passo: +novoPasso.target.value })
    }

    render() {
        return (
            <div className='Contador'>
                <h2>Contador</h2>
                <Display numero={this.state.numero}></Display>
                <PassoForm passo={this.state.passo} setPasso={this.setPasso}></PassoForm>
                <Botoes setInc={this.inc} setDec={this.dec}></Botoes>
            </div>
        )
    }
}