import React, {Component} from 'react';
import PropTypes from 'prop-types';

class CountdownTimer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      timeRemaining: 0
    };

    this.tick = this.tick.bind(this);
    this.generateClock = this.generateClock.bind(this);
    this.clickHandler = this.clickHandler.bind(this);
  }
  componentDidMount () {
    this.setState(() => {
      return {
        timeRemaining: 15
      };
    });
    
    this.interval = setInterval(this.tick, 1000);
  }
  tick () {
    this.setState(() => {
      return {
        timeRemaining: this.state.timeRemaining - 1
      };
    });
    
    if (this.state.timeRemaining <= 0) {
      clearInterval(this.interval);
      this.props.endCallHandler();
    }
  }
  generateClock (secsLeft) {
    let time = secsLeft / 60;
    let minutes = Math.floor(time);
    let seconds = Math.floor((time % 1) * 60);

    if (seconds < 10) {
      seconds = `0${seconds.toString()}`;
    }

    return (
      <div>{`0${minutes}:${seconds}`}</div>
    );
  }
  clickHandler () {
    let millisecondsLeft = this.state.timeRemaining * 60;
    this.props.endCallHandler(millisecondsLeft);
  }
  render () {
    return (
      <span style={{color: 'white'}}>
        {this.generateClock(this.state.timeRemaining)}
        <div className='end-call' onClick={this.clickHandler}>
          <img src='img/icons/red-phone.png' alt='end-call'/>
        </div>
      </span>
    );
  }
}

CountdownTimer.propTypes = {
  endCallHandler: PropTypes.func.isRequired
};

export default CountdownTimer;