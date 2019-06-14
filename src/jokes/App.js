import React from 'react'
import Joke from './Joke.js'

function App() {
  return (
    <div>
    <h1>MemEss</h1>
    <Joke info={{
      question:"Who r u ?",
      punchLine:"Idk"
    }} />
    <Joke info={{
      question:"Who r u ?",
      punchLine:"Idk"
    }}/>
    <Joke info={{
      question:"Who r u ?",
      punchLine:"Idk"
    }}/>
    <Joke info={{
      question:"Who r u ?",
      punchLine:"Idk"
    }}/>
    <Joke info={{
      question:"Who r u ?",
      punchLine:"Idk"
    }}/>
    </div>
  )
}

export default App;
