import React, { Component } from "react";
import { observer } from "mobx-react";

//observer - decorator, tells mobx this component's rendering can be derived from observables
@observer
class Counter extends Component {
  handleInc = () => {
    this.props.store.increment();
  };

  handleDec = () => {
    this.props.store.decrement();
  };

  render() {
    return (
      <div>
        Counter: {this.props.store.count}
        <button onClick={this.props.store.decrement}>-</button>
        <button onClick={this.props.store.increment}>+</button>
      </div>
    );
  }
}

export default Counter;
