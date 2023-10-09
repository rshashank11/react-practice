import React from "react";

class ClassChild extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      age: 0,
    };
  }

  componentDidMount() {
    console.log("Hi");
    console.log("Render");
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("Render");
    if (
      prevState.name !== this.state.name ||
      prevState.age !== this.state.age
    ) {
      console.log(
        `My name is ${this.state.name} and I am ${this.state.age} years old.`
      );
    }

    if (prevState.name !== this.state.name) {
      if (this.timeOut != null) {
        clearTimeout(this.timeOut);
      }
      this.timeOut = setTimeout(() => {
        console.log(`My name is ${this.state.name}`);
      }, 1000);
    }
  }

  componentWillUnmount() {
    console.log("Bye");
  }

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.name}
          onChange={(e) =>
            this.setState(() => {
              return {
                name: e.target.value,
              };
            })
          }
        />
        <br />
        <br />
        <button
          onClick={(e) =>
            this.setState((currentState) => {
              return {
                age: currentState.age - 1,
              };
            })
          }
        >
          -
        </button>
        {this.state.age}
        <button
          onClick={(e) =>
            this.setState((currentState) => {
              return {
                age: currentState.age + 1,
              };
            })
          }
        >
          +
        </button>
        <br />
        <br />
        My name is {this.state.name} and I am {this.state.age} years old.
      </div>
    );
  }
}

export default ClassChild;
