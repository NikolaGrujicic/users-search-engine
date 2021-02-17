import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Settings from './components/Settings';
import Users from './components/Users';
import './styles/_main.scss';

const App = () => (
  <Router>
    <>
      <Header />
      <Switch>
        <Route path="/users" component={Users} />
        <Route path="/settings" component={Settings} />
      </Switch>
    </>
  </Router>
);

export default App;
