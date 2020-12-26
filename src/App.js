import React, { Component } from 'react';
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <input type="text" onChange={() => this.outputLength()}></input>
      </div>
    );
  }

  outputLength = () => {
    console.log('Oh hi!');
  }
}

export default App;
