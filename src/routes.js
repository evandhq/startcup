import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

// Import containers
import App from 'containers/App/App';

export default function getRoutes(store) {
  const history = syncHistoryWithStore(browserHistory, store);

  return (<Router history={history}>
    <Route path="/" component={App}>
    </Route>
  </Router>);
}
