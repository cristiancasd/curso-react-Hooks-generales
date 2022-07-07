import React, { useCallback } from 'react'
import { Hijo } from './Hijo'
import { useState } from 'react';

export const Padre = () => {
    
    const numeros = [2,4,6,8,10];
    const [valor, setValor] = useState(0);

    const increment=useCallback(
        //Cuando el módulo usa la función value = 5
        // c es el valor de counter
        (value) => {
            setValor((c)=>c+value);
        },[])

    return (
        <div>
            <h1>Padre</h1>
            <p> Total: { valor } </p>
            <hr /> 
            {
                numeros.map( n => (
                    <Hijo 
                        key={ n }
                        numero={ n }
                        incrementar={ increment }
                    />
                ))
            }
        </div>
    )
}
