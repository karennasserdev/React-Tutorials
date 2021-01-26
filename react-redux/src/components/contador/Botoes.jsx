/* eslint-disable import/no-anonymous-default-export */

import React from 'react'


export default props => {
    return (
        <div>
            <button onClick={props.setInc}>+</button>
            <button onClick={e => props.setDec(+e.target.value)}>-</button>
        </div>
    )
}