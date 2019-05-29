import React from 'react'
const Apex = ()=>{
	const date = new Date();
	return(
	<h1>It is currently about {date.getHours() % 12} o'clock!</h1>
		)
}
export default Apex
