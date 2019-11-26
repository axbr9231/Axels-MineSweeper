import React from 'react';

class Square extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    
    render() {
        return (
            <div style={{border: '2px bold black'}}>
                <button value={this.props.value}>0</button>
            </div>
        )
    }
}

export default Square;