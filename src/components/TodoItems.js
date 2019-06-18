import React from 'react'

const TodoItems = (props)=>{
    return(
        <div className="products">
            <p>{props.text}</p>
            <form>
            <input type="checkbox" name="mycheck" checked={props.completed? "checked":""}></input>
            </form>
        </div>
    )
}

export default TodoItems