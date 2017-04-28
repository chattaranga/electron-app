import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';
import thunk from 'redux-thunk';
import {createLogger} from 'redux-logger';

import Main from './components/Main';
import Achievements from './components/AchievementsPage/AchievementsPage';
import LoginPage from './components/LoginPage/LoginPage';
import HubPage from './components/HubPage/HubPage';
import SignUpPage from './components/SignUpPage/SignUpPage';
import ChatPage from './components/ChatPage/ChatPage';

import '../src/styles/styles.scss';
import reducer from './reducer/index.reducer';

import 'font-awesome/scss/font-awesome.scss';

const logger = createLogger();
const store = createStore(reducer, applyMiddleware(thunk, logger));

ReactDOM.render((
  <Provider store={store}>
  <Router history={hashHistory}>
    <Route path='/' component={Main}>
      <IndexRoute component={LoginPage}/>
      <Route path='/login' component={LoginPage}/>
      <Route path='/signup' component={SignUpPage}/>
      <Route path='/hub' component={HubPage}/>
      <Route path='/achievements' component={Achievements}/>
      <Route path='/chat' component={ChatPage}/>
    </Route>
  </Router>
  </Provider>
), document.getElementById('root'));