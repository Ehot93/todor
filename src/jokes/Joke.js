import React from 'react'
import "./Joke.css"

const Joke = (props)=>{
	return(
		<div className="card">
		<p>{props.question}</p>
		<p>{props.punchLine}</p>
		</div>
		)
}
export default Joke