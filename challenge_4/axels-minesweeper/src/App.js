import React from 'react';
import './App.css';
import Board from './Board.js';

class App extends React.Component {
  constructor(props) {
    super(props); {
      this.state = {

      }
    }
  }

  render() {
    return (
      <div>
        <div>Hello World</div>
        <Board />
      </div>
    )
  }
}

export default App;
