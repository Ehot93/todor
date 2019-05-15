import React from 'react'
import {render} from 'react-dom'
import Artos from './components/artos.js'


function Article() {
  const body = <section>Footer</section> 
 return(
      <div className="hello" style={{color:"red"}}>
        <h2>title</h2>
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
        <h1>App Todor</h1>
        <Artos/>
        <Article/>
    </div>
  );
}

render(<App/> ,document.getElementById('root'))