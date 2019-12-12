import React from 'react';
import './App.css';
import Board from './Board.js';
import Header from './Header.js';
import Timer from './Timer.js';

class App extends React.Component {
  constructor(props) {
    super(props); {
      this.state = {
        width: 10,
        height: 10,
        mines: 10,
        openSquares: 0,
        flags: 10,
        status: 'off'
      }
    }
    this.handleFlag = this.handleFlag.bind(this);
    this.resetGame = this.resetGame.bind(this);
    this.removeFlag = this.removeFlag.bind(this);
    this.startGame = this.startGame.bind(this);
  }

  startGame () {
    this.setState({
      status: 'running'
    })
  }

  handleFlag() {
    this.setState({
      flags: this.state.flags - 1
    })
  }

  resetGame () {
    this.setState({
      flags: 10,
      status: 'off'
    }, () => {
      alert('Oops, you hit a mine... game over...')
    })
  }

  removeFlag(square) {
    this.setState({
      flags: this.state.flags + 1
    });
  }

  render() {
    return (
      <div>
        <div class="ml-5">Axel's MineSweeper</div>
        <div class="container">
        <Header 
        className="header-component" 
        flags={this.state.flags} 
        startGame={this.startGame}
        status={this.state.status}
        />
        <Board style={{border: '2px solid black'}} 
        rows={this.state.height} 
        columns={this.state.width} 
        mines={this.state.mines}
        openSquares={this.state.openSquares}
        flags={this.state.flags}
        updateFlags={this.handleFlag}
        resetGame={this.resetGame}
        status={this.state.status}
        removeFlag={this.removeFlag}
        />
      </div>
      </div>
    )
  }
}

export default App;
