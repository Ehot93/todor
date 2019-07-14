import React from 'react'
import { Module } from 'module';

function TodoItem (props){
    return(
        <div className="todo-item">
            <input type="checkbox" checked={props.checked} />
            <p>{props.text}</p>
            <p></p>
        </div>
    )
}
export default TodoItem