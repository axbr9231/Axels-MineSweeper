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
    }

    timer() {
        if (this.state.minutes < 10 && this.state.seconds < 10) {
            return (
                <div>
                    <p>Time: {this.state.minutes} : {this.state.seconds}</p>
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
        this.setState({
            seconds: this.state.seconds + 1
        })
    }

    clock() {
        this.setState({
            minutes: this.state.minutes + 1,
            seconds: 0
        })
    }

    render() {
        let timer = this.timer();

        if (this.state.seconds === 60) {
            this.clock();
        } else {
            setTimeout(this.tick, 1000)
        }

        return (
            <div id="timer">
                {timer}
            </div>
        )
    }
}


export default Timer;