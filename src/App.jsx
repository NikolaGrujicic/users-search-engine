import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Users from './components/Users';
import './styles/_main.scss';

const App = () => (
  <Router>
    <>
      <Header />
      <Users />
      <Switch>
        <Route path="/users" />
      </Switch>
    </>
  </Router>
);

export default App;
