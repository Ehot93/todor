import React, {Component} from 'react'
import todosData from './todosData'
import ComponentClass  from './componentClass'

class AppClassState extends Component{
    constructor(){
        super()
        this.state = {
            todos: todosData
        }
    }
    
    render(){
        const todoItem = this.state.todos.map(item => <ComponentClass key={item.id} text={item.text} completed={item.completed}/>)
        return(
            <div>
                {todoItem}
            </div>
        )
    }
}
export default AppClassState