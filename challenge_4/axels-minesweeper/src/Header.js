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
                <div id="bombs-left" class="col-md-4 justify-content-start">10</div>
                <div class="col-md-6 justify-content-center">
                    <button>start</button>
                </div>
                <div>Timer</div>
            </div>
        )
    }
}

export default Header;