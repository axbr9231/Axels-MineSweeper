import React from 'react';
import PinBoard from './PinBoard.jsx';


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hello: true
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
