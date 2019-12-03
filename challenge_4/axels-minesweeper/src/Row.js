import React from 'react';
import Square from './Square.js';

const Row = (props) => {
let row = props.squares.map((data, i) => {
    
    return (
        <Square 
        data={data} 
        key={i} 
        className="square" 
        unveilSquare={props.unveilSquare}
        plantFlag={props.plantFlag}
        />
    )
})

    return (
        <div class="row">
            {row}
        </div>
    )
}

export default Row;