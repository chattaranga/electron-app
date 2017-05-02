import React, {Component} from 'react';
import {shuffle} from 'underscore';
import {fetchPrompts} from '../../actions/prompts.actions';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import RemoteVideo from './RemoteVideo';
import VideoChat from '../../lib/VideoChat';
import SideBar from './SideBar';

class ChatPage extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount () {
    const level = this.props.user.userLanguages.reduce((acc, userLanguage) => {
      return userLanguage.language === this.props.trainingLanguage ? userLanguage.level : acc;
    }, '');
    this.props.fetchPrompts(this.props.trainingLanguage, level);
  }
  render() {
    return (
      <div className='chat-page'>
        <RemoteVideo videoChat={new VideoChat()}/>
        <SideBar prompts={shuffle(this.props.prompts).slice(0, 5)}/>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchPrompts: (language, level) => {
      dispatch(fetchPrompts(language, level));
    }
  };
}

function mapStateToProps(state) {
  return {
    user: state.user.user,
    levels: state.levels.levels,
    languages: state.languages.languages,
    trainingLanguage: state.user.trainingLanguage,
    prompts: state.prompts.prompts
  };
}

// ChatPage.propTypes = {
//   user: PropTypes.any.isRequired,
//   trainingLanguage: PropTypes.string.isRequired,
//   prompts: PropTypes.any.isRequired,
//   route: PropTypes.object.isRequired,
//   fetchPrompts: PropTypes.func.isRequired
// };


export default connect(mapStateToProps, mapDispatchToProps)(ChatPage);