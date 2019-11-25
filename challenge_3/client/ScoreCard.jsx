import React from 'react';

const ScoreCard = (props) => {
    return (
        <div className="scoreCard" style={{border: '2px solid black'}}>
            {props.value}
        </div>
    )
}

export default ScoreCard;