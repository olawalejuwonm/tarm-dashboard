import React from 'react';
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

const App = () = {
  return (
    <Router>
    <Switch>
    <Route  exact>

      <Layout/>
    </Route>

    </Switch>
    </Router>
  );
}

export default App;
