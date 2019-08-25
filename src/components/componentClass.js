import React from 'react'

 const ComponentClass = (props)=>{
            return(
            <div className="container">
                
                <p>text: {props.text}</p>
                <p>completed: {props.completed}</p>
            </div>
        )
}

export default ComponentClass