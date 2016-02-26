import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router';

import ProjectList from './ProjectList';
import Project from './Project';

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={ProjectList} />
      <Route path="/project/:projectId" component={Project}/>
    </Route>
  </Router>

), document.getElementById('root'));
