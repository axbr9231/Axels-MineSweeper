import React from 'react';
import './App.css';
import Board from './Board.js';
import Header from './Header.js';

class App extends React.Component {
  constructor(props) {
    super(props); {
      this.state = {
        width: 10,
        height: 10,
        mines: 10,
        openSquares: 0,
        flags: 10
      }
    }
    this.handleFlag = this.handleFlag.bind(this);
  }

  handleFlag() {
    this.setState({
      flags: this.state.flags - 1
    })
  }

  render() {
    return (
      <div>
        <div>Hello World</div>
        <div class="container">
        <Header className="header-component" flags={this.state.flags}/>
        <Board style={{border: '2px solid black'}} 
        rows={this.state.height} 
        columns={this.state.width} 
        mines={this.state.mines}
        openSquares={this.state.openSquares}
        flags={this.state.flags}
        updateFlags={this.handleFlag}
        />
      </div>
      </div>
    )
  }
}

export default App;
