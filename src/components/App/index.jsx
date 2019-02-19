import PropTypes from 'prop-types';
import React from 'react';
import PrivateRoute from 'react-private-route';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import NotFound from 'app-components/NotFound';
import Profile from 'app-components/Profile';
import Session from 'app-components/Session';
import Home from 'app-containers/Home';
import Login from 'app-containers/Login';

import './styles';

const App = ({ isAuthenticated }) => (
  <div id="app">
    <BrowserRouter>
      <Switch>
        { /* Public routes which don't require authentication. */ }
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />

        { /* Private routes which require authentication. */ }
        <PrivateRoute path="/session" isAuthenticated={isAuthenticated} component={Session} />
        <PrivateRoute path="/profile" isAuthenticated={isAuthenticated} component={Profile} />

        { /* Catch unmatched paths and serve 404 component. */ }
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  </div>
);

App.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
};

export default App;