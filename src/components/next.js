import React from 'react'
import {render} from 'react-dom'

class Footer extends React.Component{
	render(){
		return(
<div>
	<p style={FooterStyle}>It's Footer</p>
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