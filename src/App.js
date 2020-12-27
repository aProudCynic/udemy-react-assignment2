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
        <ValidationComponent textLength={this.state.text.length}/>
        {charArrayComponents}
      </div>
    );
  }

  outputText = (event) => {
    const inputValue = event.target.value;
    this.setState({text: inputValue});
  }

  deleteChar = (index) => {
    const newText = this.state.text.slice(0, index) + this.state.text.slice(index + 1);
    this.setState({text: newText});
  }

}

export default App;
