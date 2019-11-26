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
            <div>"
                <div class="row">
                {this.dimension.map((r, i) => {
                    let col = this.dimension.map((c, i) => {
                        return (<Square />)
                    })
                    return (
                    <div>
                    <Square />
                    {col}
                    </div>
                        )
                })}
                </div>
            </div>
        )
    }
}

const style = {
    // display: 'grid',
    border: '2px solid black', 
    // 'grid-template-columns': '100px 100px 100px 100px 100px 100px 100px 100px 100px 100px 100px', 
    width: '1100px',
    height: '90px'
}

export default Board;