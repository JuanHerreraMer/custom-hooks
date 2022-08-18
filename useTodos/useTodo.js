import { useEffect, useReducer, useState } from "react";
import { todoReducer } from "./todoReducer";


const initialState = [];

const init = () => {
    return JSON.parse( localStorage.getItem('todos')) || [];
}

export const useTodo = () => {

    const [ todos, dispatchTodo ] = useReducer( todoReducer, initialState, init )
    const [countTodo, setCountTodo] = useState(0);
    const [todoPendiente, setTodoPendiente] = useState(0);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify( todos ) );
        
        setCountTodo(todos.length);

        setTodoPendiente(todos.filter(todo => !todo.done).length)

    }, [todos])
    

    const handleNewTodo = (todo) => {
        const action = {
            type: '[TODO] Add Todo',
            payload: todo,
        }

        dispatchTodo( action );
    }

    const handleDeleteTodo = ( id ) => {
        dispatchTodo({
            type: '[TODO] Remove Todo',
            payload: id,
        })
    }

    const handleToggleTodo  = ( id ) => {
        dispatchTodo({
            type: '[TODO] Toggle Todo',
            payload: id,
        })
    }

    return {
        todos,
        handleNewTodo,
        handleDeleteTodo,
        handleToggleTodo,
        countTodo,
        todoPendiente,
    }
}