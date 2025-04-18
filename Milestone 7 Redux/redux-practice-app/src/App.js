import logo from './logo.svg';
import React from 'react';
import './App.css';
import Counter from './Counter';
import CounterStatus from './CounterStatus';

function App() {
  return (
    <div className="App">
      <h1>Redux Counter App</h1>
      <Counter />
      <CounterStatus />
    </div>
  );
}

export default App;
