import React from 'react';
import ScoreCard from './ScoreCard.jsx';

class ScoreBoard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
        this.pixels = '100px 100px 100px 100px 100px 100px 100px 100px 100px 100px 100px'
    }

    renderSquare(value) {
        return (
            <ScoreCard value={value} />
        )
    }

    render() {
        return(
            <div>
                <div className="boardRow" style={cardStyle}>
                    {this.renderSquare(0)}
                    {this.renderSquare(0)}
                    {this.renderSquare(0)}
                    {this.renderSquare(0)}
                    {this.renderSquare(0)}
                    {this.renderSquare(0)}
                    {this.renderSquare(0)}
                    {this.renderSquare(0)}
                    {this.renderSquare(0)}
                    {this.renderSquare(0)}
                </div>
            </div>
        )
    }
}

const cardStyle = {
    display: 'grid', 
    border: '2px solid black', 
    'grid-template-columns': '100px 100px 100px 100px 100px 100px 100px 100px 100px 100px 100px', 
    width: '1100px',
    height: '90px'
}

export default ScoreBoard;