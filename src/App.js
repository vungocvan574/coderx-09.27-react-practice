import React from 'react';

// import "./index.css";

import List from './components/List'
import Counter from './components/Counter'

const data = ["A", "B", "C"];

function App() {
  return (
    <div className="App">
      <List data = {data} render = {(item) => <div>{item}</div>}  />
      <List data = {data} render = {(item) => <div>- {item}</div>}  />
      <List data = {data} render = {(item) => <div>+ {item}</div>}  />
      <Counter />
    </div>
  );
}

export default App;
