import React, { Component } from 'react';
import './App.css';
import ValidationComponent from './components/validation/ValidationComponent';
import CharComponent from './components/char/CharComponent'

class App extends Component {

  state = {
    text: ''
  }

  render() {
    const charArray = this.state.text.split('');
    const charArrayComponents = charArray.map((character, index) => 
    <CharComponent key={index} character={character} clicked={() => this.deleteChar(index)}/>);
    return (
      <div className="App">
        <input type="text" onChange={this.outputText} value={this.state.text}></input>
        <p>Input length: {this.state.text.length}</p>
        {charArrayComponents}
      </div>
    );
  }

  outputText = (event) => {
    const inputValue = event.target.value;
    this.setState({text: inputValue});
  }

  deleteChar = (index) => {
    console.log(index);
  }

}

export default App;
