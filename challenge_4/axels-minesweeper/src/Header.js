import React from 'react';


class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
    }

    render() {
        return (
            
            <div class="row" id="header">
                <div id="bombs-left" class="col-md-4 justify-content-start">{this.props.flags}</div>
                <div class="col-md-6 justify-content-center">
                    <button onClick={this.props.startGame()}>start</button>
                </div>
                <div>Timer</div>
            </div>
        )
    }
}

export default Header;