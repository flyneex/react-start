import React, {Component} from 'react';

class Counter extends Component {
    constructor(props) {
        super(props)
        this.state = {
            counter: 0
        }
    }

    countInc = () => {
        this.setState({
            counter: this.state.counter + 1
        })
    }

    countDec = () => {
        this.setState({
            counter: this.state.counter - 1
        })
    }
    
    render() {
        return (
            <div>
                <h1>Counter: {this.state.counter}</h1>
                <button onClick={this.countInc}>+</button>
                <button onClick={this.countDec}>-</button>
            </div>
        )
    }
}

export default Counter