import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Sidenav from './components/partials/Sidenav';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/">

          <Sidenav/>
        </Route>

      </Switch>
    </Router >
  );
}

export default App;
