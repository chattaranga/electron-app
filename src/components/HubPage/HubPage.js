import React from 'react';
import {Component} from 'react';
// import {PropTypes} from 'prop-types';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import {logOut} from '../../actions/user.actions';
import LanguageButtons from './LanguageButtons';
import Icons from './Icons';

class HubPage extends Component {
  constructor(props) {
    super(props);
    this.getTotalPoints = this.getTotalPoints.bind(this);
  }
  render() {
    const user = this.props.user;
    return (
      <div className='HubPage'>
        <div className='inline'>
          <h1>~</h1>
          <Icons
              chats={this.getTotalPoints(user, 'numOfChats')}
              smileys={user.smileys}
              talkTime={this.getTotalPoints(user, 'talkTime')}
              teacherPoints={this.getTotalPoints(user, 'teacherPoints')}
          />
        </div>
        <h2>{`¡Buenos días, ${user.name}!`}</h2>
        <h5>Which language are you training in today?</h5>
        <LanguageButtons 
            userLanguages={user.userLanguages}/>
        <span className='button-primary' onClick={this.props.logOut}><Link to='/' >Log out</Link></span>
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
    logOut: () => {
      dispatch(logOut());
    }
  };
}

function mapStateToProps(state) {
  return {
    user: state.user.user, 
    error: state.user.error, 
    loading: state.user.loading
  };
}

HubPage.PropTypes = {
};

export default connect(mapStateToProps, mapDispatchToProps)(HubPage);