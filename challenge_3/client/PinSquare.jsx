import React from 'react';

const PinSquare = (props) => {
    return (
        <button className="pinSquare" onClick={() => {props.onClick(props.value)}}>
            {props.value}
        </button>
    )
}

export default PinSquare;