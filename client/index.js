import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import LogIn from './component/login/logIn.js';
import App from 'app.js';
import Home from './component/Home/Home.js';
import Photos from './component/Photos/Photos.js';

ReactDOM.render((
  <div>
    <Router history={browserHistory} >
      <Route path='/' component={App}>
        <IndexRoute component={LogIn} />
        <Route path='Home' component={Home} />
      </Route>
    </Router>
  </div>


  ), 
document.getElementById('app'));