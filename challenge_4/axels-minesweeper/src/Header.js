import React from 'react';
import Timer from './Timer.js';


class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            
            <div class="row" id="header">
                <div id="bombs-left"  >Flags: {this.props.flags}</div>
                    <button onClick={() => {this.props.startGame()}}>start</button>
                <div>
                <Timer status={this.props.status}/>
                </div>
            </div>
            
        )
    }
}

export default Header;