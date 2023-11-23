import { Component } from "react";
import "./styles.css";

export class Home extends Component {
  state = {
    counter: 0,
  };

  handleContador = () => {
    this.setState(
      (prevState, prevProps) => {
        return { counter: prevState.counter + prevProps.skip };
      },
      () => {
        console.log((this.state.counter = this.state.counter));
      }
    );
  };

  render() {
    const handleContador = this.handleContador;
    const { counter } = this.state;
    return (
      <div>
        <h1>{counter}</h1>
        <button onClick={handleContador}>Increment</button>
      </div>
    );
  }
}
