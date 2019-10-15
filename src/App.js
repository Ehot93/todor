import React from 'react'
import React, {Component} from 'react'
//import ContactCard from './ContactCard'
import productsData from './components/vschoolProducts.js'
import Products from './components/Products.js'
import todosData from './components/todosData.js';
import TodoItems from './components/TodoItems.js';
import AppClass from './components/AppClass.js'

// function App() {
//     const Product = productsData.map(prod=><Products key={prod.id} name={prod.name} price={prod.price} description={prod.description}/>);
//     const TodoIt = todosData.map(item=><TodoItems key={item.id} text={item.text} completed={item.completed}/>)
//     return (
//         <div className="container">
//             {TodoIt}
//             <hr></hr>
//             {Product}
//         </div>
//     )
// }
function App(){
    const classBlock = todosData.map(block=><AppClass text={block.text}/>)
    return(
        <div>
        {classBlock}
class App extends Component{
    constructor(){
        super()
        this.state = {
            isLoggedIn: true
        }
    }
    render(){
        return(
        <div>
            <h1>You are currently logged {this.state.isLoggedIn?'in':'out'}</h1>
        </div>
        )
    }
} 

export default App