import React, {Component} from 'react'
//import ContactCard from './ContactCard'
import productsData from './components/vschoolProducts.js'
import Products from './components/Products.js'
import todosData from './components/todosData.js';
import TodoItems from './components/TodoItems.js';
import AppClass from './components/AppClass.js'

// class App extends Component{
//     constructor(){
//     super()
//     this.state = {
//         name: "Max",
//         age: 19
//     }
//     }
//     render(){
//     return (
//         <div>
//             <h1> {this.state.name} </h1>
//             <h3><font color="#3AC1EF">{this.state.age} years old</font></h3>
//         </div>
//     )
//     }
 
// }
class App extends Component{
    constructor(){
        super()
        this.state = {
            isLoggedIn: true
        }
    }
    render(){
        let bob;
        if(this.state.isLoggedIn)
        {
            bob = "You are currently logged in"
        }
        else bob = "You are currently logged out"
        return(
        <div>
            <h1>{bob}</h1>
        </div>
        )
    }
} 

export default App