import { useEffect, useReducer } from "react"
import { todoReducer } from "./todoReducer"

const init=()=>{
    return JSON.parse(localStorage.getItem('todos'))||[]
}
const initalState=[]

export const useTodos = () => {
    const [todos, dispatch] = useReducer(todoReducer, initalState,init)
    const todosCount=todos.length
    const pendingTodosCount=todos.filter(todo=>!todo.done).length

    useEffect(() => {
        localStorage.setItem('todos',JSON.stringify(todos))
    }, [todos])
    
    const onNewTodo=(todo)=>{
        const action={
            type:'[TODO] Add Todo',
            payload:todo
        }
        dispatch(action)

    }
    
    const handleDeleteTodo=(id)=>{ 
        dispatch(
            {type:'[TODO] Remove Todo',
            payload:id
        })
    }

    const handleToggleTodo=(id)=>{  
        dispatch({
            type:'[TODO] Toggle Todo',
            payload:id
        })  
         }
  
    return { 
        todos,
        onNewTodo,
        handleDeleteTodo,
        handleToggleTodo,
        todosCount,
        pendingTodosCount
    }
}
