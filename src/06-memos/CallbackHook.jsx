import { useCallback, useState } from "react"
import { ShowIncrement } from "./ShowIncrement"

export const CallbackHook = () => {
  
  const [counter, setCounter] = useState(10)
    
  const incrementF=useCallback(
    //Cuando el módulo usa la función value = 5
    // c es el valor de counter
    (value) => {
        setCounter((c)=>c+value);
    },[])

  return (
    <>
        <h1>useCallBack hook:{counter} </h1>
        <hr/>
        {/*le paso la función al componente*/}
        <ShowIncrement increment={incrementF} />
    </>
  )
}
