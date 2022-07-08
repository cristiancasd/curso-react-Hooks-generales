import { useEffect, useReducer } from "react"
import { TodoAdd } from "./TodoAdd"
import { TodoList } from "./TodoList"
import { todoReducer } from "./todoReducer"


//Función retorna lo que está el localStorage o un arreglo vacío
const init=()=>{
    return JSON.parse(localStorage.getItem('todos'))|| []
}

export const TodoApp=()=>{
    
    // Controlar los estados de todos (objeto con los datos de cada tarea)
    // Dispatch(action) envío a todoReducer lo que quiero hacer, el estado retornado se actualiza en "todos"
    const [todos, dispatch] = useReducer(todoReducer, init)
    
    //Guardamos en el localStorage cuando cambie el estado de todos
    useEffect(() => {
      localStorage.setItem('todos',JSON.stringify(todos))
    }, [todos])   


    //-todoReducer agregar nueva tarea X al arreglo
    const handleNewTodo = (todo) => {
        const action = {
            type: '[TODO] Add Todo',
            payload: todo
        }
        dispatch (action);
    }

    //-todoReducer borrar una tarea con el id X
    const handleDeleteTodo = (id) => {
        const action = {
            type: '[TODO] Remove Todo',
            payload: id
        }
        dispatch (action);
    }

    //-todoReducer cambia toggle el estado done de la tarea con X id
    const handleToggleTodo = (id) => {
        const action = {
            type: '[TODO] Toggle Todo',
            payload: id
        }
        dispatch (action);
    }
    
    return(
        <>
        <h1>TodoApp, <small> Pendientes: </small></h1> 
            <hr/>
            <div className="row">            
                <div className="col-7">
                    {/*Le envío al componente el arreglo, y funciones */}
                    <TodoList 
                    todos={todos} 
                    onDeleteTodo={handleDeleteTodo} 
                    onToggleTodo={handleToggleTodo}/>
                </div>

                <div className="col-5">
                    <h4> Agregar TODO </h4>  
                    <hr/>
                     {/*Envio la función handleNewTodo al componente TodoAdd*/}
                      <TodoAdd 
                        onNewTodo={handleNewTodo}/>
                    
                </div>
            </div>

        </>
    )
}