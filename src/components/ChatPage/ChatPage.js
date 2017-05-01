import React, {Component} from 'react';
import {fetchPrompts} from '../../actions/prompts.actions';
// import {PropTypes} from 'prop-types';
import {connect} from 'react-redux';
import RemoteVideo from './RemoteVideo';
import SideBar from './SideBar';
// import ChatEmitter from './chatEmitter.js';
// const chat = new ChatEmitter();

class ChatPage extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount () {
    this.props.fetchPrompts();
  }
  render() {
    return (
      <div className='chat-page'>
        <RemoteVideo />
        <SideBar />
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchPrompts: () => {
      dispatch(fetchPrompts());
    }
  };
}

function mapStateToProps(state) {
  return {
    user: state.user.user, 
    prompts: state.prompts.prompts, 
    loading: state.user.loading
  };
}

ChatPage.PropTypes = {
};

export default connect(mapStateToProps, mapDispatchToProps)(ChatPage);