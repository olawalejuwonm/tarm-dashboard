import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Sidenav from './components/partials'

const App = () => {
  return (
    <Router>
      <Switch>
      <Route path="/" component={Sidenav} exact />


      </Switch>
    </Router >
  );
}

export default App;
