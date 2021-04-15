import React, { Suspense } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Master from "./components/layouts/Master";
import { Loader } from "./components/shared";
// import Login from './components/layouts/LoginFolder/Login';

const App = () => {
  return (
    <React.Fragment>
      <Router>
        <Suspense fallback={<Loader />}>
          <Switch>
            <Master />
          </Switch>
        </Suspense>
      </Router>
    </React.Fragment>
  );
};

export default App;
