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
       this.handleKeyPress = this.handleKeyPress.bind(this);
    }
    

    handleKeyPress(e) {
        e.preventDefault();
        this.props.plantFlag(this.props.data);
        
        
    }
   

    renderSquare() {
        if (this.props.data.isShown && this.props.data.count !== 0) {
            return (
                <div className="shown-square" 
                onClick={() => {this.props.unveilSquare(this.props.data)}}
                onContextMenu={(e) => {this.handleKeyPress(e)}}
                >
                    {this.props.data.count}
                </div>
            ) 
        } else if (this.props.data.isShown) {
            return (
                <div className="shown-square" onClick={() => {this.props.unveilSquare(this.props.data)}} onContextMenu={(e) => {this.handleKeyPress(e)}}>
                    
                </div>
            ) 
        } else if (!this.props.data.isShown && this.props.data.hasFlag) {
            return (
                <div className="shown-square" onClick={() => {this.props.unveilSquare(this.props.data)}}>
                    <img src={require('./15051971031557740350-24.png')}></img>
                </div>
            )
        } else {
            return (
                <div className="square" onClick={() => {this.props.unveilSquare(this.props.data)}} onContextMenu={(e) => {this.handleKeyPress(e)}}>

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