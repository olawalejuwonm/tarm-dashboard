import React from 'react';
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

const App = () = {
  return (
    <Router>
    <Switch>
    <Route  path="/ho">

      <Layout/>
    </Route>

    </Switch>
    </Router>
  );
}

export default App;
