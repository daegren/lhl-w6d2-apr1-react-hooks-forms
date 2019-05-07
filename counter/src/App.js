import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
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

const Counter = ({ step = 1, onValueChanged = () => {} }) => {
  const [value, setValue] = useState(0);

  const changeValue = delta => {
    const newValue = value + delta;
    setValue(newValue);
    onValueChanged(newValue);
  };

  useEffect(() => {
    document.title = `The counter with ${step} updated to ${value}`;
  });

  return (
    <div>
      <button onClick={() => changeValue(-1 * step)}>-</button>
      <span>{value}</span>
      <button onClick={() => changeValue(step)}>+</button>
    </div>
  );
};

export default App;
