import React, { useState } from "react";

class Counter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
    };
  }
  render() {
    const handleClick = () => {
      this.setState((currentState) => {
        return { counter: currentState.counter + 1 };
      });
    };
    return (
      <>
        <h1>{this.state.counter}</h1>
        <button onClick={handleClick}>Click</button>
      </>
    );
  }
}

export default Counter;
