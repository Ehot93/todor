import React from 'react'
import Joke from './Joke'
import JokesData from './jokesData'
//some text fpr commit
function App() {
  const jokeComponents = JokesData.map(joke => <Joke question={joke.question} punchLine={joke.punchLine}/>)
  
  return (
    <div>
    <h2>Memes</h2>
      {jokeComponents}
    </div>
  )
}

export default App;
