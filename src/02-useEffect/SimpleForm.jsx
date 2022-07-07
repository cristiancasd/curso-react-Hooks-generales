import { useEffect, useState } from "react"
import { Message } from "./Message";

export const SimpleForm = () => {

  const [formState, setFormState] = useState({
    username: 'strider',
    email:    'fer@hotmail.com'
  });

  const {username, email}=formState;

  const onInputChange=({target})=>{
    setFormState({
      ...formState,
      //actualizar nombre y email
      [target.name]:target.value
    })
  };


  //Se dispara cuando email cambia
  useEffect(() => {
    console.log('email called')
  }, [email])
  

  return (
    <>
        <h1>Formulario Simple</h1>
        <hr/>
        <input
            type="text"
            className="form-control"
            placeholder="Username"
            name="username"
            value={username} 
            onChange={onInputChange} />
          <input
            type="email"
            className="form-control mt-2"
            placeholder="algo@algo.com"
            name="email"
            value={email}
            onChange={onInputChange} />
            {
              //Llamo módulo del mensaje solo 'strider'
              (username==='strider') && <Message/>
            }
      
    </>
  )
}
