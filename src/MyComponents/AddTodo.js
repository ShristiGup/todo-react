import React from 'react';
import './AddTodo.css';
import './TodoItem.css';
import { useState } from 'react';

export const AddTodo = (props) => {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");

    const submit = (e) => {
        //console.log('submit');
        e.preventDefault();
        if(!title || !desc){
            alert('Either Title or Description is not entered!')
        }
        else{
            props.addTodo(title,desc);
            setTitle('');
            setDesc('');
        }
    }

    return (
        <div className='container'>
            <h1>Welcome to Todo Applcation</h1>
            <form onSubmit={submit}>
                <h3>Enter your task here...</h3>
                <div className='mb-2'>
                    <label htmlFor="title">Task Title</label>
                    <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} id="title" />
                </div>
                <div className='mb-2'>
                    <label htmlFor="desc">Task Description</label>
                    <input type="text" value={desc} onChange={(e) => setDesc(e.target.value)} id="desc" />
                </div>
                <button type="submit" className='btn btn-green add'>Add Task</button>
            </form>
            <hr />
        </div>
    )
};
