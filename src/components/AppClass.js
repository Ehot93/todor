import React from 'react'

class AppClass extends React.Component{
    consoleOut(){
        var temp = 'pop';
        return temp;
    }
    render(){
        const pop = this.consoleOut();
        return(
            <div className="container">
                <h1>code here</h1>
                <h2>{pop}</h2>
                <h3>{this.props.text}</h3>
            </div>
        )
    }
}
export default AppClass