import React from 'react';
import Timer from './Timer.js';


class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            minutes: 0,
            seconds: 0
        }
    }

    render() {
        return (
            
            <div class="row" id="header">
                <div id="bombs-left"  >Flags: {this.props.flags}</div>
                    <button >start</button>
                <div>
                <Timer />
                </div>
            </div>
            
        )
    }
}

export default Header;