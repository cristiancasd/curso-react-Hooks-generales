import { useEffect, useMemo, useState } from "react";
import { useCounter } from "../hooks/useCounter";


//Función encargada del for y retornar el valor
const heavyStuff = (iterationNumber=10)=>{
  let a=0;
  for(let i=0; i<iterationNumber; i++ ){
    a=(a+2);
    console.log('con toda');
  }
  return 'iteracciones realizadas '+a
}

export const MemorizeHook = () => {

  const {counter, increment} = useCounter(100)
  const [show, setshow]      = useState(true)
  
  //useMemo para almacenar la variable recibida
  const memorizedValue=useMemo(() => heavyStuff(counter),[counter])  
  
  //puede ejecutar el proceso si no hay un return en la función heavyStuff
  //const memorizedValue2=useEffect(() => heavyStuff(counter), [counter]) 

  return (
    <>
      <h1> Counter: <small/>{counter}  </h1>
      <hr/>
      <button
        className="btn btn-primary"
        onClick={()=>increment()}>
        +1
        </button>

        <button 
          className="btn btn-outline-primary"
          onClick={()=>setshow(!show)}>
        
        Show/hiden {JSON.stringify(show)} </button>
        
        <h5>{memorizedValue}</h5>
    </>
  )
}
