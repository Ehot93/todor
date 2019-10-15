import React, {Component} from 'react'

class App32 extends React.Component {
    constructor() {
        super()
        this.state = {
            count: 0
        }
        this.Clac = this.Clac.bind(this)
    }
    Clac(){
        this.setState(prevState => {
            return{ count:prevState.count + 1}
        })
    }
    render() {
        return (
            <div>
                <h1>{this.state.count}</h1>
                <button onClick={this.Clac}>Change!</button>
            </div>
        )
    }
}

export default App32