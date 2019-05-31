import React from 'react'
import {render} from 'react-dom'
import "./index.css"
//import Artos from './components/artos'
import CoolHeader from './components/header'
import TodoItem from './components/todoItem'
import Apex from './components/apex'
import Footer from './components/footer'

function Article() {
  const body = <section>Content here:</section> 
 return(
      <div className="hello" style={{color:"red"}}>
        <section>bodyy</section> 
        { body }
        <h3 style={{color:"red"}}>
         "creation date : "{ (new Date()).toDateString()}
        </h3>
      </div>
    )
}

function App() {
 let todor = "Todor"
 return (
<div>
        <CoolHeader/>
        <h1>App {todor}</h1>
        <Apex/>
        <TodoItem/>
        <Footer/>
    </div>
  );
}

render(<App/> ,document.getElementById('root'))