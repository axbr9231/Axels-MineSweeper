import React from 'react';
import PinSquare from './PinSquare.jsx';

class PinBoard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            bowl1: 0,
            bowl2: 0,
            score: 0,
            frameScore: 0,
            firstClick: true,
            secondClick: false
        }
        this.updateScore = this.updateScore.bind(this);
    }
    updateScore(value) {
        if (this.state.firstClick === true) {
            this.setState({
                bowl1: value,
                firstClick: false,
                secondClick: true,
                frameScore: value
            }, () => {console.log(this.state)});
        } else if (this.state.secondClick === true) {
            this.setState({
                bowl2: value,
                firstClick: true,
                secondClick: false,
                frameScore: this.state.bowl1 + value
            }, () => {
                this.setState({
                    frameScore: 0,
                    score: this.state.score + this.state.bowl1 + this.state.bowl2
                })
            })
        }
        
    }

    renderSquare(i) {
        return (
            <PinSquare value={i} onClick={this.updateScore}/>
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
            <div>
                <h5>Current Frame: {this.state.frameScore}</h5>
                <h4>Score: {this.state.score}</h4>
            </div>
            </div>
        )
    }
}

export default PinBoard;

// () => {
    //     this.setState({
    //         frameScore: this.state.bowl1 + this.state.bowl2
    //     }, () => {
    //         this.setState({
    //             score: this.state.score + this.state.frameScore,
    //             frameScore: 0
    //         })
    //     });
    // })