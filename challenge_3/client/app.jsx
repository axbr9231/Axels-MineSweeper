import React from 'react';
import PinBoard from './PinBoard.jsx';
import ScoreBoard from './ScoreBoard.jsx';


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            score: 0,
            bowl1: 0,
            bowl2: 0
        };
    }

    render() {
        return (
            <div>
                <div>
                <p>Hello World</p>
                </div>
                <h5></h5>
                <PinBoard />
            </div>
        )
    }
}

// const App = () => {
//     return (<div>
//         <div>
//         <p>Hello World</p>
//         </div>
//     </div>)
// }

export default App;
