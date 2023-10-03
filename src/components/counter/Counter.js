import React from "react";
import './Counter.css';

class Counter extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            counter: 0,
        }
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
    }

    increment() {
        this.setState(prevVal => ({
            counter: prevVal.counter + 1,
        }));
    }

    decrement() {
        this.setState(previousValue => ({
            counter: previousValue.counter - 1,
        }));
    }

    disabled() {
        return this.state.counter === 0;
    }

    render() {
        return (
            <div className="containerCounter">
                <h1 data-cy='valuecounter' data-testid='valuecounter'>{this.state.counter}</h1>
                <button data-testid='decrement' onClick={this.decrement} disabled={this.disabled()}>-</button>
                <button data-testid='increment' onClick={this.increment}>+</button>
            </div>
        );
    }
}

export default Counter;
