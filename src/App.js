import React, { Component } from 'react';
import './App.css';

class App extends Component {

  state = {
    length: 0
  }

  render() {
    return (
      <div className="App">
        <input type="text" onChange={this.outputLength}></input>
        <p>Input length: {this.state.length}</p>
      </div>
    );
  }

  outputLength = (event) => {
    const inputValue = event.target.value;
    this.setState({length: inputValue.length});
    console.log(inputValue.length);
  }
}

export default App;
