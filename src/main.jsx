import React from 'react'
import ReactDOM from 'react-dom/client'
import { CounterApp }            from './01-useState/CounterApp'
import { CounterWithCustomHook } from './01-useState/CounterWithCustomHook'
import { FormWithCustomHook } from './02-useEffect/FormWithCustomHook'
import { SimpleForm } from './02-useEffect/SimpleForm'
import { MultipleCustomHooks } from './03-examples/MultipleCustomHooks'
import { FocusScreen } from './04-useReft/FocusScreen'
import { Layout } from './05-useLayouEffect/Layout'
import { CallbackHook } from './06-memos/CallbackHook'
import { MemorizeHook } from './06-memos/MemorizeHook'
import { Padre } from './07-tarea-memo/Padre'
import { HooksApp } from './HooksApp'
import './index.css'

import {  } from './08-useReducer/intro-reducer'
import { TodoApp } from './08-useReducer/TodoApp'



ReactDOM.createRoot(document.getElementById('root')).render(
 
  //<React.StrictMode>
    <TodoApp/>
 // </React.StrictMode>
)
