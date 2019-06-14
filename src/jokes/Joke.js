import React from 'react'
import "./Joke.css"

const Joke = (props)=>{
	return(
		<div className="card">
		<p>{props.info.question}</p>
		<p>{props.info.punchLine}</p>
		</div>
		)
}
export default Joke