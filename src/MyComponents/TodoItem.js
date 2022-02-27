import React from 'react';
import './TodoItem.css';

export const TodoItem = ({ todo, onDelete }) => {
    return (
        <div>
            <h2>{todo.title}</h2>
            <p>{todo.desc}</p>
            <button className='btn btn-red' onClick={()=>onDelete(todo)}>Delete</button>
            <hr />
        </div>
    )
};
