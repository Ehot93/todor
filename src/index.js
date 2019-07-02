import React, {Component} from 'react'
import ReactDOM, {render}  from 'react-dom'
import "./index.css"
import Artos from './components/artos'
import CoolHeader from './components/header'
import TodoItem from './components/todoItem'
import Apex from './components/apex'
import Footer from './components/footer'
import Apl from './components/apl'
import App from './App'
import AppClassState from './components/AppClassState'
import App30 from './components/App30'
//import App from './jokes/App'

// class App extends React.Component{
//   render(){
//     return(
//       <div>
//           <Header username="Max"/>
//           <Greeting />
//       </div>
//     )
//   }
// }
// class Header extends React.Component{
//   render(){
//     return(
//       <header>
//           <p>Welcome, {this.props.username}!</p>
//       </header>
//     )
//   }
// }
// class Greeting extends React.Component{
//   render(){
//     const date = new Date(),
//     hours = date.getHours();
//     let timeOfDay;
    
//     if (hours < 12) {
//         timeOfDay = "morning"
//     } else if (hours >= 12 && hours < 17) {
//         timeOfDay = "afternoon"
//     } else {
//         timeOfDay = "night"
//     }
//     return(
//       <h1>Good {timeOfDay} to you, sir or madam!</h1>
//     )
//   }
// }


render(<App30/> ,document.getElementById('root'))