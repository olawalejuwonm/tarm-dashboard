import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Master from './components/layouts/Master';
// import Login from './components/layouts/LoginFolder/Login';

const App = () => {
  return (
    <>
    <Router>
      <Switch>
      <Master/>
      </Switch>
    </Router>
    

    </>
  );
}

export default App;
