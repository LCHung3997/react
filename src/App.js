import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      num1: 0,
      num2: 0,
      result: 0,
    }
    // this.state.result = this.state.num1 + this.state.num2    
  }


  onHandleChange1 = (e) => {
    
    this.setState({
      num1: e.target.value,
    })
  };
  onHandleChange2 = (e) => {
    this.setState({
      num2: e.target.value
    })
  };

  render() {
    return (
      <div className="App">
        <h3>TÍNH TỔNG 2 SỐ</h3>
        <input value={this.state.num1} type="number" onChange={this.onHandleChange1} placeholder="Enter a number"></input>
        <label>+</label>
        <input value={this.state.num2} type="number" onChange={this.onHandleChange2} placeholder="Enter a number"></input>
        <label>=</label>
        <input value={parseInt(this.state.num1) + parseInt(this.state.num2)} placeholder="Result"></input>
      </div>
    );
  }

}



export default App;
