import React from 'react';
import PinSquare from './PinSquare.jsx';

class PinBoard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    renderSquare(i) {
        return (
            <PinSquare value={i} />
        )
    }
    render() {
        return (
            <div>
            <div className="numRow">
                {this.renderSquare(0)}
                {this.renderSquare(1)}
                {this.renderSquare(2)}
            </div>
            <div className="numRow">
                {this.renderSquare(3)}
                {this.renderSquare(4)}
                {this.renderSquare(5)}
            </div>
            <div className="numRow">
                {this.renderSquare(6)}
                {this.renderSquare(7)}
                {this.renderSquare(8)}
            </div>
            <div className="numRow">
                {this.renderSquare(9)}
                {this.renderSquare(10)}
                {this.renderSquare('#')}
            </div>
            </div>
        )
    }
}

export default PinBoard;