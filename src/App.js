import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

// My components
import Button from './components/Button';



const App = () => {
  
    const [ count, setCount ] = useState(0);
    
    const incrementCount = increment => {
      setCount(count + increment);
    }

    return (
      <div className="App">
        <header>
          <img src={logo} className="App-logo" alt="logo" />
          <h1>React Project</h1>
        </header>
        <Button increment={1} onClickFunction={incrementCount} />
        <Button increment={10} onClickFunction={incrementCount} />
        <Button increment={100} onClickFunction={incrementCount} />
        <Button increment={1000} onClickFunction={incrementCount} />
        <span>{count}</span>
      </div>
    );
  
}

export default App;