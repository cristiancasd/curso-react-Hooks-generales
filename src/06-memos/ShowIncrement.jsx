import React from 'react';

//React.memo memoriza está función para que se ejecuté solo una vez
export const ShowIncrement = React.memo(({increment}) => {
    
    //Este mensaje solo se mostrará una vez, así se vuelva a usar el módulo
    console.log('me volví a generar')
    const vIncrement=5
    return (
    <button
        className="btn btn-primary"
        onClick={
            () =>{increment(vIncrement)}
        }>
        Incrementar +{vIncrement} </button>
  )
})
