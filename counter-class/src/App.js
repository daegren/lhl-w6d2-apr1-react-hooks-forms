import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Counter />
      <Counter step={2} />
      <Counter step={5} />
      <Counter
        step={10}
        onValueChanged={v => console.log("Value Changed", v)}
      />
    </div>
  );
}

class Counter extends React.Component {
  constructor() {
    super();

    this.state = {
      value: ""
    };
  }

  static defaultProps = {
    step: 1,
    onValueChanged: () => {}
  };

  componentDidMount() {
    document.title = `The counter with ${this.props.step} updated to ${
      this.state.value
    }`;
  }
  componentDidUpdate() {
    document.title = `The counter with ${this.props.step} updated to ${
      this.state.value
    }`;
  }

  render() {
    const { step } = this.props;
    const { value } = this.state;

    return (
      <div>
        <button onClick={this._changeValue(-1 * step)}>-</button>
        <span>{value}</span>
        <button onClick={this._changeValue(step)}>+</button>
      </div>
    );
  }

  // Note the first function returns a second function
  // This is so that when we call _changeValue from render
  // it returns a function which will get executed by the event, which will
  // then have the `delta` value closured in.
  _changeValue = delta => () => {
    const { value } = this.state;
    const { onValueChanged } = this.props;

    const newValue = value + delta;
    this.setState({ value: newValue });
    // Need to send newValue here instead of this.state.value as it hasn't been
    // updated yet.
    onValueChanged(newValue);
  };
}

export default App;
