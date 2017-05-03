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
        timeStart: 300,
        timeRemaining: 300
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
  generateClock () {
    let secsLeft = this.state.timeRemaining;
    let secsStarted = this.state.timeStart;

    let percentageLeft = (secsLeft * 100) / secsStarted;

    return (
      <div className="progress-bar">
        <div style={{width: `${percentageLeft}%`}} className="dynamic-bar"></div>
      </div>
    );
  }
  clickHandler () {
    let millisecondsLeft = this.state.timeRemaining * 60;
    this.props.endCallHandler(millisecondsLeft);
  }
  render () {
    return (
      <div className="chat-buttons">
        <div className="end-call" onClick={this.clickHandler}>
          <img src="img/icons/red-phone.png" alt="end-call"/>
        </div>
        {this.generateClock()}
      </div>
    );
  }
}

CountdownTimer.propTypes = {
  endCallHandler: PropTypes.func.isRequired
};

export default CountdownTimer;