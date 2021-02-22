import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Content from '../partials/TopNav';
import Sidenav from '../partials/Sidenav';
import HomeLayout from './HomeFolder/HomeLayout';
import ProfileLayout from './ProfileFolder/ProfileLayout';


const Master = () => {

    return(
        <>
        <div className="d-fl">

          
      <Route path="/" component={HomeLayout} exact />
      <Route path="/profile" component={ProfileLayout} exact />

    

        </div>
        </>
    )
}

export default Master;