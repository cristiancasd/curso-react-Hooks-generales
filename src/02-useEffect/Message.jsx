import React, { useEffect, useState } from "react";

export const Message = () => {
    const [coords, setCoords] = useState({x:0,y:0})
    useEffect(() => {
        //Siempre que se llama el módulo actualizo coordenadas 
        const onMouseMove=({x,y})=>{setCoords({x,y})}
        window.addEventListener('mousemove',onMouseMove);
        return () => {  //Remuevo el evento            
            window.removeEventListener('mousemove',onMouseMove)}
    }, [])   

  return (
    <>
      <h3>Usuario existe</h3>
      {JSON.stringify(coords)}
    </>
  )
}
