/* eslint-disable import/no-anonymous-default-export */
import React, { useState } from 'react'
import './Input.css'

export default props => {

    const [valor, setValor] = useState('Inicial');

    function quandoMudar(e) {
        //amarro o valor do target com setValor e atualizo o valor.
        setValor(e.target.value);
    }

    return (
        <div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <label>Controlado:</label>
                <input className="Input" type="text" value={valor} onChange={quandoMudar} />
                <label>Read Only:</label>
                <input className="Input" type="text" value='Leitura' readOnly />
                <label>Não Controlado:</label>
                <input className="Input" type="text" value={undefined} />
            </div>

        </div>
    )
}