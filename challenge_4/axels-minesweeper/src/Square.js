import React from 'react';

class Square extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
                // x: this.props.data.x,
                // y: this.props.data.y,
                // hasMine: this.props.data.hasMine,
                // hasFlag: this.props.data.hasFlag,
                // isShown: this.props.data.isShown,
                // count: this.props.data.count

            
        }
        this.showSquare = this.showSquare.bind(this);
    }
    showSquare() {
        // this.props.unveilSquare(this.state)
        //     this.setState({
        //         isShown: true
        //     })
    }

    renderSquare() {
        if (this.props.data.isShown) {
            return (
                <div className="shown-square" onClick={() => {this.props.unveilSquare(this.props.data)}}>
                    {this.props.data.count}
                </div>
            ) 
        } else {
            return (
                <div className="square" onClick={() => {this.props.unveilSquare(this.props.data)}}>

                </div>
            )
        }
    }
    
    render() {
        let square = this.renderSquare();
        return (
            <div>
                {square}
            </div>
        )
    }
}

export default Square;