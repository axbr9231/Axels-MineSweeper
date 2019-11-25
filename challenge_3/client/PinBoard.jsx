import React from 'react';
import PinSquare from './PinSquare.jsx';
import ScoreBoard from './ScoreBoard.jsx';

class PinBoard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            bowl1: 0,
            bowl2: 0,
            score: 0,
            frameScore: 0,
            frameRound: 1,
            firstClick: true,
            secondClick: false,
            nextRound: false,
            lastRoundScore: 0,
            gotStrike: false
        }
        this.updateScore = this.updateScore.bind(this);
        this.currentRound = 1;
    }


    updateScore(value) {

        if (this.state.gotStrike === true) {
            let strikeBonus = this.state.lastRoundScore;
            strikeBonus += value;
            let strikeScore = this.state.score;
            strikeScore += strikeBonus;
            this.setState({
                lastRoundScore: strikeBonus,
                score: strikeScore,
                nextRound: true
            });
        }
        
        if (this.state.nextRound === true) {
            if (this.state.bowl1 + this.state.bowl2 === 10) {
                let spareScore = this.state.lastRoundScore;
                spareScore += value;
                this.setState({
                    bowl1: 0,
                    bowl2: 0,
                    nextRound: false,
                    lastRoundScore: spareScore,
                    score: this.state.score + value
                })
                console.log('got a spare: ', this.state);
            } else {
                this.setState({
                    bowl1: 0,
                    bowl2: 0,
                    nextRound: false,
                })
            }
            this.currentRound = this.state.frameRound;
        } 
        

        if (this.state.firstClick === true) {
            console.log('first click: ', this.state);
            this.setState({
                bowl1: value,
                firstClick: false,
                secondClick: true,
                frameScore: value
            }, () => {
                if (value === 10) {
                    this.setState({
                        gotStrike: true,
                        firstClick: true,
                        secondClick: false,
                        nextRound: true
                    })
                    console.log('got strike: ', this.state);
                }
            });
        } else if (this.state.secondClick === true) {
            this.setState({
                bowl2: value,
                firstClick: true,
                secondClick: false,
                frameScore: this.state.bowl1 + value,
            }, () => {
                console.log('second click: ', this.state);
                let round = this.state.frameRound;
                round += 1;
                this.setState({
                    frameRound: round,
                    score: this.state.score + this.state.bowl1 + this.state.bowl2,
                    nextRound: true,
                    gotStrike: false,
                    lastRoundScore: this.state.bowl1 + this.state.bowl2
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
                <h5>Current Frame: {this.currentRound}</h5>
                <h6>First bowl: {this.state.bowl1}</h6>
                <h6>Second Bowl: {this.state.bowl2}</h6>
                <h4>Score: {this.state.score}</h4>
            </div>
            <ScoreBoard />
            </div>
        )
    }
}

export default PinBoard;

