import React, {Component} from 'react'
import todosData from '../components/todosData'
import TodoItem from './TodoItem'

class App extends Component{
    constructor(){
        super()
        this.state = {
            todos: todosData
        }
    }
    ChangeIt(){
        alert('ye')
    }     
    render(){
        const todoItem = this.state.todos.map(item => <TodoItem key={item.id} text={item.text} completed={item.completed} checked={item.completed} onChange={this.onChange}/>)
        return(
            <div className="todo-list">
                {todoItem}
            </div>
        )
    }
}
export default App