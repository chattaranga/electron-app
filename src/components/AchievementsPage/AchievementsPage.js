import React from 'react';
import {Component} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import Statistics from './Statistics';
import Badges from './Badges';
import Loading from '../Loading';
import {fetchBadges} from '../../actions/badges.actions';
import _ from 'underscore';

class AchievementsPage extends Component {
  constructor(props) {
    super(props);
    this.getTotalPoints = this.getTotalPoints.bind(this);
    this.getBadges = this.getBadges.bind(this);
  }
  componentDidMount () {
    if (!this.props.badges) this.props.fetchBadges();
  }
  render() {
    if (this.props.loading) return (
      <div className='loading-div'>
        <Loading/>
      </div>
    );
    return (
      <div className='achievements'>
          <div className='top'>
              <Link className='link' to='/hub'><h3 className='button-linking'>Back</h3></Link>
          </div>
          <h1>Statistics</h1>
          <Statistics
              chats={this.getTotalPoints(this.props.user, 'numOfChats')}
              smileys={this.props.user.smileys}
              talkTime={this.getTotalPoints(this.props.user, 'talkTime')}
              teacherPoints={this.getTotalPoints(this.props.user, 'teacherPoints')}
          />
          <h1>Badges</h1>
          <Badges badges={this.getBadges()}/>
      </div>
    );
  }
  getTotalPoints (user, target) {
    return user.userLanguages.reduce((acc, el) => {
      return acc + el[target];
    }, 0);
  }
  getBadges () {
    if (!this.props.badges) return [];

    const earnedBadges = this.props.badges.filter(badge => {

      switch (badge.name) {
        case 'first-chatta-smile':
          return this.props.user.smileys >= 1;
        case '5-chatta-smiles':
          return this.props.user.smileys >= 5;
        case '20-chatta-smiles':
          return this.props.user.smileys >= 20;
        case '50-chatta-smiles':
          return this.props.user.smileys >= 50;

        case 'first-chatta-coach':
          return this.getTotalPoints(this.props.user, 'teacherPoints') >= 1;
        case '5-chatta-coaches':
          return this.getTotalPoints(this.props.user, 'teacherPoints') >= 5;
        case '20-chatta-coaches':
          return this.getTotalPoints(this.props.user, 'teacherPoints') >= 20;
        case '50-chatta-coaches':
          return this.getTotalPoints(this.props.user, 'teacherPoints') >= 50;

        case '10-chat-sessions':
          return this.getTotalPoints(this.props.user, 'numOfChats') >= 10;
        case '20-chat-sessions':
          return this.getTotalPoints(this.props.user, 'numOfChats') >= 20;
        case '50-chat-sessions':
          return this.getTotalPoints(this.props.user, 'numOfChats') >= 50;
        case '100-chat-sessions':
          return this.getTotalPoints(this.props.user, 'numOfChats') >= 100;

        case '10-min-talk':
          return this.getTotalPoints(this.props.user, 'talkTime') >= 10 * 1000 * 60;
        case '1-hour-talk':
          return this.getTotalPoints(this.props.user, 'talkTime') >= 1 * 1000 * 60 * 60;
        case '5-hour-talk':
          return this.getTotalPoints(this.props.user, 'talkTime') >= 5 * 1000 * 60 * 60;
        case '10-hour-talk':
          return this.getTotalPoints(this.props.user, 'talkTime') >= 10 * 1000 * 60 * 60;

        case 'first-conv-sp':
          if (!_.findWhere(this.props.user.userLanguages, {language: 'spanish'})) return false;
          return _.findWhere(this.props.user.userLanguages, {language: 'spanish'}).numOfChats >= 1;
        case 'first-conv-fr':
          if (!_.findWhere(this.props.user.userLanguages, {language: 'french'})) return false;
          return _.findWhere(this.props.user.userLanguages, {language: 'french'}).numOfChats >= 1;
        case 'first-conv-it':
          if (!_.findWhere(this.props.user.userLanguages, {language: 'italian'})) return false;
          return _.findWhere(this.props.user.userLanguages, {language: 'italian'}).numOfChats >= 1;

        default:
          return false;
      } 
    });

    if (
        _.findWhere(earnedBadges, {name: 'first-conv-sp'}) &&
        _.findWhere(earnedBadges, {name: 'first-conv-fr'}) &&
        _.findWhere(earnedBadges, {name: 'first-conv-it'})) {
      earnedBadges.push(_.findWhere(this.props.badges, {name: 'fast-parrot-master'}));
    }

    if (earnedBadges.length === this.props.badges.length - 1) {
      earnedBadges.push(_.findWhere(this.props.badges, {name: 'ulitmate-fast-parrot-demigod'}));
    }

    return earnedBadges;
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
    error: state.badges.error, 
    loading: state.badges.loading,
    badges: state.badges.badges
  };
}

AchievementsPage.propTypes = {
  user: PropTypes.object,
  badges: PropTypes.arrayOf(PropTypes.object),
  loading: PropTypes.bool.isRequired,
  fetchBadges: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(AchievementsPage);