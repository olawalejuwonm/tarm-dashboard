import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
impo

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/">

          <Layout />
        </Route>

      </Switch>
    </Router >
  );
}

export default App;
