import { useCounter } from "../hooks/useCounter";
import { useFetch } from "../hooks/useFetch"
import { LoadingQuote } from "./LoadingQuote";
import { Quote } from "./Quote";

export const MultipleCustomHooks = () => {
  
  //Inicializo contador en 1, permito usar función de incrementar
  const {counter, increment}=useCounter(1); 

  //Hook petición 
  const url='https://www.breakingbadapi.com/api/quotes/'
  const {data, isLoading, hasError} = useFetch(url+counter)


  //- !data si no existe esto daría true
  //- !!data si no existe esto daría false
  const{author,quote}=!!data&&data[0];
  return (
    <>
        <h1>BreakingBad Quotes</h1>
        <hr/>
        {
            (!hasError)      
              ?((isLoading)
                ? <LoadingQuote/>                           //Modulo Loading...
                : <Quote author={author} quote={quote} />)  //Módulo frase,author
              :<h5>Super error</h5>                         //Mensaje error  
        }
        <button 
            onClick={()=>increment(1)}  //Incrementar con el boton
            className="btn btn-primary"
            disabled={isLoading} > {/*Desabilito el botón mientras carga*/}      
            nextQuote
        </button>
    </>
  )
}
