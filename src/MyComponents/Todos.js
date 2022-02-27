import React from 'react';
import {TodoItem} from "./TodoItem";
import './Todos.css';

export const Todos = (props) => {
    return (
        <div className='container'>
            {props.todos.length===0 ? "Nothing to show":
            props.todos.map((todo)=>{
                return <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete}/>
            }) 
            }
            
        </div>)
};
