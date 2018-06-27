import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { range } from 'ramda';


class App extends Component {
  constructor() {
    super()
    this.state = {
      numbers: []
    }
  }
  componentDidMount() {
    if(this.state.numbers.length === 0) {
      var rand = (high, low) => { return (Math.random() * (high - low) + low)};
      var x_max = 400;
      var y_max = 400;
      var randomPoints = range(0, 100).map(_ => ({
        x: rand(0, x_max),
        y: rand(0, y_max)
      }))
      this.setState({
        numbers: randomPoints
      })
    }

  }

  team(point) {
    if(point)
  }
  render() {

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          <svg width="450" height="450">
           {
             this.state.numbers.map((point, i) => {
               return <circle
                 cx={point.x}
                 cy={point.y}
                 r="5"
                 key={i}
                 />
             })
           }
           <line x1="0" x2="450" y1="0" y2="450" stroke="purple"></line>
          </svg>
        </p>
      </div>
    );
  }
}

export default App;
