import { useLayoutEffect, useRef, useState } from "react"

export const Quote = ({author,quote}) => {
  
  const pRef = useRef();
  const [boxSize, setBoxSize] = useState({width:0, height:0})

  useLayoutEffect(() => {
    //sacar el tamaño de la caja de la frase
    const {height, width}= pRef.current.getBoundingClientRect()
    setBoxSize({height, width})
  }, [quote])
  
  
  return (
    <>
        <blockquote className="blockquote text-end" style={{display:'flex'}}>
            {/*Defino referencia */}
            <p ref={pRef} className="mb-1">{quote}</p>
            <footer className="blockquote-footer">{author}</footer>
        </blockquote>
        <code>{JSON.stringify(boxSize)/* Muestro tamaño */}</code>
    </>
  )
}
