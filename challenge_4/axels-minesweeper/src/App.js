import React from 'react';
import './App.css';
import Board from './Board.js';
import Header from './Header.js';

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
        <div class="container">
        <Header className="header-component"/>
        <Board style={{border: '2px solid black'}}/>
      </div>
      </div>
    )
  }
}

export default App;
