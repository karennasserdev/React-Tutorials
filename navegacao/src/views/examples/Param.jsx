import React from 'react';
import { useParams } from 'react-router-dom';

const Param = props => {
    //o parametro tem que ter o mesmo nome do path do Route, ou seja, id nesse caso
    const { id } = useParams()
    return (
        <div className="Param">
            <h1>Param</h1>
            <h2>Route:/param/{id}</h2>
        </div>
    )
}


export default Param