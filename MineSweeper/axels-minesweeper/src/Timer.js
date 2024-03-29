import React from 'react';


class Timer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            seconds: 0,
            minutes: 0
        }
        this.tick = this.tick.bind(this);
        this.timer = this.timer.bind(this);
        this.clock = this.clock.bind(this);
        this.baseState = this.state;
        this.reset = this.reset.bind(this);
    }

    

    timer() {
        if (this.state.minutes < 10 && this.state.seconds < 10) {
            return (
                <div>
                    <p>Time: {this.state.minutes} : {this.state.seconds}</p>
                </div>
            )
        } else if (this.props.status === 'off') {
            this.reset();
            return (
                <div>
                    <p>Time: 0 : 0</p>
                </div>
            )
        } else {
            return (
                <div>
                    <p>Time: {this.state.minutes} : {this.state.seconds}</p>
                </div>
            )
        }
    }

    tick() {
        if (this.props.status === 'running') {
            this.setState({
                seconds: this.state.seconds + 1
            })
        } 
    }

    clock() {
        if (this.props.status === 'running') {
            this.setState({
                minutes: this.state.minutes + 1,
                seconds: 0
            })
        } 
    }

    reset() {
        if (this.props.status === 'off') {
            this.setState(this.baseState)
        }
    }

    render() {
        let timer = this.timer();

        if (this.state.seconds === 60) {
            this.clock();
        } else {
            setTimeout(this.tick, 1000)
        }
        
        if (this.props.status === 'running') {
            return (
                <div id="timer">
                    {timer}
                </div>
            )
        } else if (this.props.status === 'off'){
            
            return (
                <div id="timer">
                    <div>
                        <p>Time: 0 : 0</p>
                    </div>
                </div>
            )
        }
    }
}


export default Timer;