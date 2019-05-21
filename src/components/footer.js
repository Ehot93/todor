import React from 'react'

class Footer extends React.Component{
	render(){
		return(
<div style={FooterStyle}>
	<p>It's Footer</p>
	<p>And you like it</p>
</div>
			)
	}
}
const FooterStyle = {
	background: "#CDCAD5",
	textAlign: 'center',
	width:"100%"
}

export default Footer