const React = require('react');
const ReactDOM = require('react-dom');
const {Router, Route, IndexRoute, hashHistory} = require('react-router');

const Main = require('./components/Main');
const LoginPage = require('./components/LoginPage/LoginPage');
const ChatPage = require('./components/ChatPage/ChatPage');

require('../public/styles/css/styles.css');

ReactDOM.render((
  <Router history={hashHistory}>
    <Route path='/' component={Main}>
      <IndexRoute component={LoginPage}/>
      <Route path='/login' component={LoginPage}/>
      <Route path='/chat' component={ChatPage}/>
    </Route>
  </Router>
), document.getElementById('root'));