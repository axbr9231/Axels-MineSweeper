import React from 'react';

class Square extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
                x: this.props.data.x,
                y: this.props.data.y,
                hasMine: this.props.data.hasMine,
                hasFlag: this.props.data.hasFlag,
                isShown: this.props.data.isShown,
                count: this.props.data.count

            
        }
    }
    renderSquare() {
        if (this.state.isShown) {
            return (
                <div className="shown-square">

                </div>
            ) 
        } else {
            return (
                <div className="square">

                </div>
            )
        }
    }
    
    render() {
        return (
            <div className="square">
                
            </div>
        )
    }
}

export default Square;