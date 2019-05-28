import React from 'react'
import {render} from 'react-dom'
import "./index.css"
import Artos from './components/artos'
import Footer from './components/footer'
import CoolHeader from './components/header'
import Flags from './components/flags'


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
    );
}

function App() {
 return (
<div>
    <CoolHeader/>
    
        <h1>App Todor</h1>
        <Flags/>
        <Artos/>
        <Article/>
        <Footer/>
    </div>
  );
}

render(<App/> ,document.getElementById('root'))