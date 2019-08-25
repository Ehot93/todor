import React from 'react'

function TodoItem (props){
    return(
        <div className="todo-item">
            <input type="checkbox" />
            <p>{props.productsData.name}</p>
            <p>{props.productsData.price}</p>
            <p>{props.productsData.description}</p>
        </div>
    )
}
export default TodoItem