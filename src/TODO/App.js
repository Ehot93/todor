import React from 'react'
//import todosData from '../components/todosData'
import TodoItem from './TodoItem'
import productsData from "./vschoolProducts"

const App = ()=>{
    const productComponents = productsData.map(item => <TodoItem key={item.id} productsData={item}/>)
    
    return (
        <div className="todo-list">
            {productComponents}
        </div>
    )
}
export default App