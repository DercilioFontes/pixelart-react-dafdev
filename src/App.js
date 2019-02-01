import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

// My components
import Button from "./components/Button";

const App = () => {
  const [count, setCount] = useState(0);

  const incrementCount = increment => {
    setCount(count + increment);
  };

  return (
    <div className="App">
      <header>
        <img src={logo} className="App-logo" alt="logo" />
        <h1>React Counter App</h1>
      </header>
      <div className="App-buttons">
        <Button increment={1} onClickFunction={incrementCount} />
        <Button increment={10} onClickFunction={incrementCount} />
        <Button increment={100} onClickFunction={incrementCount} />
        <Button increment={1000} onClickFunction={incrementCount} />
      </div>
      <h1>
        <span>{count}</span>
      </h1>
    </div>
  );
};

export default App;
