import React from 'react'
import { useForm } from "../hooks/useForm";


//onNewTodo es lo que voy a emitir
export const TodoAdd = ({onNewTodo}) => {

    //Ya tengo un hook para manejar formulario, usemoslo
    //Datos y funciones del useForm
    const {description, onInputChange, onResetForm} = useForm({
        description:''
    });

    const onFormSubmit = (event) =>{
        event.preventDefault(); //evito reinicio
        
        if(description.length<=1) return;
        
        const newTodo={
            id:   new Date().getTime(),
            done: false,
            description: description
        }
        // Ya tengo mi nuevo To do, ahora debo emitirlo
        // ejecuto la función que recibo desde el padre
        onNewTodo(newTodo);
        onResetForm();
    }
  
    return (
    <form onSubmit={onFormSubmit} >
        <input 
            type="text"
            placeholder="por hacer"
            className="form-control" 
            name='description'
            value={description}
            onChange={onInputChange}
            />
                        
        <button
            type="submit"
            className="btn btn-outline-primary mt-1">
            agregar
        </button>
    </form>
  )
}
