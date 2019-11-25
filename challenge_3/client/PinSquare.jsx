import React from 'react';

const PinSquare = (props) => {
    return (
        <button className="pinSquare">
            {props.value}
        </button>
    )
}

export default PinSquare;