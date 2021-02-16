import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const App = () = {
  return(
  <>
  <Switch>
    <Route path="/">

      <Layout />
    </Route>

  </Switch>
    </ >
  );
}

export default App;
