import React from 'react';
import Row from './Row.js';

class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            width: 10,
            height: 10,
            mines: 10,
            flags: 10
        }
        this.renderBoard = this.renderBoard.bind(this);
    }

    renderBoard() {
        let board = [];
        for (let i = 0; i < this.state.width; i++) {
            board.push([]);

            for (let j = 0; j < this.state.height; j++) {
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
        
        for (let i = 0; i < this.state.mines; i++) {
            let randomX = Math.floor(Math.random() * this.state.height);
            let randomY = Math.floor(Math.random() * this.state.width);

            let randomSquare = board[randomY][randomX];

            if (randomSquare.hasMine === true) {
                i--;
            } else {
                randomSquare.hasMine = true;
            }
        }
        return board;
    }

    

    render() {
        let game = this.renderBoard().map((row, i) => {
            return (
                <Row squares={row} class="row"/>
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

// return (
//     <div id="board" class="ml-5">
//         <div class="row">
//         {this.dimension.map((r, i) => {
//             let col = this.dimension.map((c, i) => {
//                 return (<Square key={i}/>)
//             })
//             return (
//             <div>
//             <Square key={i}/>
//             {col}
//             </div>
//                 )
//         })}
//         </div>
//     </div>
// )