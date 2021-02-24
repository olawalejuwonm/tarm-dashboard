import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Content from '../partials/TopNav';
import Sidenav from '../partials/Sidenav';
import HomeLayout from './HomeFolder/HomeLayout';
import ProfileLayout from './ProfileFolder/ProfileLayout';
import BlogLayout from './BlogFolder/BlogLayout';


const Master = () => {

    return(
        <>
        <div className="d-fl">

          
      <Route path="/" component={HomeLayout} exact />
      <Route path="/profile" component={ProfileLayout} exact />
      <Route path="/blog" component={BlogLayout} exact />


    

        </div>
        </>
    )
}

export default Master;