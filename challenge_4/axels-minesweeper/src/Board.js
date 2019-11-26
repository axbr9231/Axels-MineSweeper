import React from 'react';
import Square from './Square.js';

class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
        this.dimension = [...Array(10)];
        this.loop = this.loop.bind(this);
    }

    renderSquare(i) {
        return (
            <Square value={i}/>
        )
    }

    loop(cb) {
        for (let i = 0; i <= 10; i++) {
            cb()
        }
    }

    render() {
        return (
            <div id="board" class="ml-5">
                <div class="row">
                {this.dimension.map((r, i) => {
                    let col = this.dimension.map((c, i) => {
                        return (<Square key={i}/>)
                    })
                    return (
                    <div>
                    <Square key={i}/>
                    {col}
                    </div>
                        )
                })}
                </div>
            </div>
        )
    }
}



export default Board;