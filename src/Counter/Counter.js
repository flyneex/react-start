import React, {Component} from 'react';
import Aux from '../hoc/Auxiliary';
import Counter2 from '../Counter2/Counter2';

class Counter extends Component {
    constructor(props) {
        super(props)
        this.state = {
            counter: 0
        }
    }

    countInc = () => {
        this.setState((prevState) => {
            return {
                counter: prevState.counter + 1
            }
        })
        // this.setState({
        //     counter: this.state.counter + 1
        // })
    }

    countDec = () => {
        this.setState({
            counter: this.state.counter - 1
        })
    }
    
    render() {
        return (
            <Aux>
                <h1>Counter: {this.state.counter}</h1>
                <Counter2 />
                <button onClick={this.countInc}>+</button>
                <button onClick={this.countDec}>-</button>
            </Aux>
        )
    }
}

export default Counter