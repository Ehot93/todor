import React from 'react'

const Mop = ()=>{console.log('clicked')}
const Iop = ()=>{console.log('iop')}

const App30 = ()=>{
    return(
        <div>
             <img onMouseOver={Iop} src="https://www.fillmurray.com/200/100"/>
            <br />
            <br />
            <p></p>
            <button onClick={Mop}>Click me</button>
        </div>
    )
}

export default App30