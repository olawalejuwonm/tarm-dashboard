import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Content from '../partials/TopNav';
import Sidenav from '../partials/Sidenav';
// import HomeLayout from './HomeFolder/HomeLayout';
import ProfileLayout from './ProfileFolder/ProfileLayout';
import BlogLayout from './BlogFolder/BlogLayout';
import EventLayout from './EventsFolder/EventLayout';
import ProjectLayout from './ProjectFolder/ProjectLayout';
import DownloadLayout from './DownloadFolder/DownloadLayout';
import PrayerLayout from './PrayerFolder/PrayerLayout';
import Nav from '../partials/Nav';
import Login from './LoginFolder/Login';
import Forgot from './LoginFolder/Forgot';
import Feedback from './FeedbackFolder/Feedback';
import Product from './ProductFolder/Product';
import Transaction from './TransactionFolder/Transaction';
import Testimonies from './TestimonyFolder/Testimonies';
import LiveFeed from './LiveFeedFolder/LiveFeed';
import Manage from './ManageUserFolder/Manage';

const Master = () => {
  return (
    <>
      <Nav />

      <div className="d-flex">
        {/* <Route path="/" component={HomeLayout} exact /> */}
        <Route path="/login" component={Login} exact />
        <Route path="/forgot_password" component={Forgot} exact />
        <Route path="/profile" component={ProfileLayout} exact />
        <Route path="/blog" component={BlogLayout} exact />
        <Route path="/events" component={EventLayout} exact />
        <Route path="/projects" component={ProjectLayout} exact />
        <Route path="/downloads" component={DownloadLayout} exact />
        <Route path="/prayers" component={PrayerLayout} exact />
        <Route path="/feedback" component={Feedback} exact />
        <Route path="/products" component={Product} exact />
        <Route path="/testimonies" component={Testimonies} exact />
        <Route path="/online_transactions" component={Transaction} exact />
        <Route path="/LiveFeed" component={LiveFeed} exact />
        <Route path="/manage_users" component={Manage} exact />


      </div>
    </>
  );
};

export default Master;
