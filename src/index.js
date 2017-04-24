const React = require('react');
const ReactDOM = require('react-dom');
const {Router, Route, IndexRoute, hashHistory} = require('react-router');

const App = require('./components/App');
const LoginPage = require('./components/LoginPage/LoginPage');
const ChatPage = require('./components/ChatPage/ChatPage');

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={LoginPage}/>
      <Route path='/login' component={LoginPage}/>
      <Route path='/chat' component={ChatPage}/>
    </Route>
  </Router>, 
  document.getElementById('root')
);