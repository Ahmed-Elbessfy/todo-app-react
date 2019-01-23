import React, { Component } from 'react';
import './App.css';

import Header from './components/layout/Header';
import Todos from './components/todos/Todos';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Todos />
      </div>
    );
  }
}

export default App;
