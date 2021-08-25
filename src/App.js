import logo from './logo.svg';
import './App.css';
import React from 'react';
import ClassCounter from './Components/ClassCounter';

class App extends React.Component {
  constructor() {
    super();
    this.state = { number: 0};
  }

  AddOne() {
    this.setState({
      number: this.state.number + 1 
    })
  }

  SubtractOne() {
    this.setState({
      number: this.state.number - 1 
    })
  }

 
  render() {
    return (
      <div>
        <h1>{this.state.number}</h1>
        <button onClick={() => this.AddOne()}>Add 1</button>
        <button onClick={() => this.SubtractOne()}>Sub 1</button>
       
      </div>
    );
  }
}




export default App;
