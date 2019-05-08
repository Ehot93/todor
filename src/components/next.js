import React from 'react'
import {render} from 'react-dom'

function ComponentUl(){
	const ul_list = <div>This ul by react</div>
	return(
	<ul>
	<li>one</li>
	<li>two</li>
	<li>three</li>
	</ul>
	)
}
function GoApp(){
	return(<h3>Render here:</h3>
	<ComponentUl/>
	;)
}

render(<GoApp/,document.getElementById('root'))