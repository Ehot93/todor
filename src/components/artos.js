import React from 'react'

const H1 = () =>{
  return(<h1 style={{color:'blue'}}>Vlad</h1>)
}
const AboutMe = () => {
  return(<p style={AboutMeCss}>Some text about me, i like food</p>)
}
const AboutMeCss = {
  fontSize:"26px",
  color: "#2EA8DB",
  fontWeight: "600"
}
const Travel = () => {
  return(
  <ol>
  <li>Europe</li>
  <li>USA</li>
  <li>Japan</li>
  </ol>
  )
}

const Artos = () => {
  return(
	<div>
   <H1/>
   <AboutMe/>
   <Travel/>
  </div>
  	)
}

export default Artos