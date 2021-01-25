/* eslint-disable import/no-anonymous-default-export */
import React, { Children, cloneElement } from 'react';


export default (props) => {
    return (
        <div>
            {/* Método para clonar 1 elemento */}
            {/* {cloneElement(props.children, { ...props })} */}

            {/* Método para clonar + que 1 elemento */}
            {
                // React.Children.map(props.children, (el) => {
                //     return cloneElement(el, props)
                // }) OU 
            }

            {/* Método para clonar + que 1 elemento */}
            {props.children.map((child, i) => {
                return cloneElement(child, { ...props, key: i });
            })}

        </div>
    )
}