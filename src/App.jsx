import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import PageNotFound from './components/PageNotFound';
import Settings from './components/Settings';
import Users from './components/Users';
import './styles/_main.scss';

const App = () => (
  <Router>
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={Users} />
        <Route path="/settings" component={Settings} />
        <Route component={PageNotFound} />
      </Switch>
    </>
  </Router>
);

export default App;
