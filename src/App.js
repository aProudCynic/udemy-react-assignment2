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
    const charArrayComponents = charArray.map(character => <CharComponent character={character}/>);
    return (
      <div className="App">
        <input type="text" onChange={this.outputLength}></input>
        <p>Input length: {this.state.text.length}</p>
        {charArrayComponents}
      </div>
    );
  }

  outputLength = (event) => {
    const inputValue = event.target.value;
    this.setState({text: inputValue});
    console.log(inputValue.length);
  }
}

export default App;
