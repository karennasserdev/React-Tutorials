/* eslint-disable import/no-anonymous-default-export */

import React from 'react'


export default props => {
    return (
        <div>
            <div>
                <label htmlFor="passoInput">Passo:</label>
                <input type="num" id="passoInput" value={props.passo} onChange={props.setPasso} />
            </div>
        </div>
    )
}