import React from 'react';
import Row from './Row.js';

class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            width: 10,
            height: 10,
            mines: 10,
            flags: 10,
            rows: this.renderBoard()
        }
        this.renderBoard = this.renderBoard.bind(this);
        this.unveilSquare = this.unveilSquare.bind(this);
        this.checkSuroundingSquares = this.checkSuroundingSquares.bind(this);
        this.plantFlag = this.plantFlag.bind(this);
    }

    renderBoard() {
        let board = [];
        for (let i = 0; i < this.props.columns; i++) {
            board.push([]);

            for (let j = 0; j < this.props.rows; j++) {
                board[i].push({
                    x: j,
                    y: i,
                    hasMine: false,
                    hasFlag: false,
                    isShown: false,
                    count: 0

                });
            }
        }
        
        for (let i = 0; i < this.props.mines; i++) {
            let randomX = Math.floor(Math.random() * this.props.rows);
            let randomY = Math.floor(Math.random() * this.props.columns);

            let randomSquare = board[randomY][randomX];

            if (randomSquare.hasMine === true) {
                i--;
            } else {
                randomSquare.hasMine = true;
            }
        }
        return board;
    }

    unveilSquare(square) {
        if (this.props.status === 'running') {
            let countMines = new Promise(resolve => {
                let mines = this.checkSuroundingSquares(square);
                resolve(mines);
            })        
    
            countMines.then(mineCount => {
                
                let rows = this.state.rows;
        
                let currentSquare = rows[square.y][square.x];
        
                if (currentSquare.hasMine && this.props.openSquares === 0) {
                    let newRows = this.renderBoard(this.props);
                    this.props.resetGame();
                    this.setState({
                        rows: newRows
                    }, () => {
                        this.unveilSquare(square)
                    })
                } else {
                    if (!square.hasFlag && !currentSquare.isShown) {
                        square.isShown = true;
                        square.count = mineCount;
                        this.setState({ rows: rows }, () => {console.log(square)});
                    }
                    if (!square.hasMine && mineCount === 0) {
                        this.unveilSurroundingSquares(square);
                    }
                }
            })

        }

         
    }

    checkSuroundingSquares(square) {
        let minesCloseBy = 0;
        for (let row = -1; row <= 1; row++) {
            for (let col = -1; col <= 1; col++) {
                if (square.y + row >= 0 && square.x + col >= 0) {
                    if (square.y + row < this.state.rows.length && square.x + col < this.state.rows[0].length) {
                        if (this.state.rows[square.y + row][square.x + col].hasMine && !(row === 0 && col === 0)) {
                            minesCloseBy++;
                        }
                    }
                }
            }
        } 
        return minesCloseBy;
    }

    unveilSurroundingSquares(square) {
        let rows = this.state.rows

        for (let row = -1; row <= 1; row++) {
            for (let col = -1; col <= 1; col++) {
                if (square.y + row >= 0 && square.x + col >= 0) {
                    if (square.y + row < this.state.rows.length && square.x + col < this.state.rows[0].length) {
                        if (!this.state.rows[square.y + row][square.x + col].hasMine && !rows[square.y + row][square.x + col].isShown) {
                            this.unveilSquare(rows[square.y + row][square.x + col])
                        }
                    }
                }
            }
        }
    }

    plantFlag(square) {
        let rows = this.state.rows

        if (!square.hasFlag && !square.isShown) {
            square.hasFlag = true;
            this.setState({
                flags: this.state.flags - 1,
                rows: rows
            }, () => {this.props.updateFlags()});
        }
        
        if (this.state.flags === 0) {
            alert('Good Job! You won!');
        }
    }

    removeFlag(square) {
        let rows = this.state.rows
    
        if(square.hasFlag && !square.isShown) {
            square.hasFlag = false;
            this.setState({
                flags: this.state.flags + 1,
                rows: rows
            }, () => {
                this.props.removeFlag();
            })
        }
    }

    

    render() {
        let game = this.state.rows.map((row, i) => {
            return (
                <Row 
                squares={row} 
                class="row" 
                unveilSquare={this.unveilSquare} 
                plantFlag={this.plantFlag}
                removeFlag={this.removeFlag.bind(this)}
                />
            )
        })
        
        return (
            <div id="board" class="ml-5">
                {game}
            </div>
        )
    }
}



export default Board;

