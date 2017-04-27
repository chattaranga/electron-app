import React from 'react';
import {Component} from 'react';
// import {PropTypes} from 'prop-types';
// import {Link} from 'react-router';
import {connect} from 'react-redux';
import Statistics from './Statistics';
import Badges from './Badges';
import {fetchBadges} from '../../actions/badges.actions';

class AchievementsPage extends Component {
  constructor(props) {
    super(props);
    this.getTotalPoints = this.getTotalPoints.bind(this);
  }
  componentDidMount () {
    this.props.fetchBadges();
  }
  render() {
    return (
      <div className='achievements'>
          <h1>Statistics</h1>
          <Statistics
              chats={this.getTotalPoints(this.props.user, 'numOfChats')}
              smileys={this.props.user.smileys}
              talkTime={this.getTotalPoints(this.props.user, 'talkTime')}
              teacherPoints={this.getTotalPoints(this.props.user, 'teacherPoints')}
          />
          <h1>Badges</h1>
          <Badges badges={this.props.badges}/>
      </div>
    );
  }
  getTotalPoints (user, target) {
    return user.userLanguages.reduce((acc, el) => {
      return acc + el[target];
    }, 0);
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchBadges: () => {
      dispatch(fetchBadges());
    }
  };
}

function mapStateToProps(state) {
  return {
    user: state.user.user, 
    error: state.user.error, 
    loading: state.user.loading,
    badges: state.badges.badges
  };
}

AchievementsPage.PropTypes = {
};

export default connect(mapStateToProps, mapDispatchToProps)(AchievementsPage);