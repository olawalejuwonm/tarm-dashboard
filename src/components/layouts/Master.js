import React, { Suspense } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import Content from "../partials/TopNav";
import Sidenav from "../partials/Sidenav";
// import HomeLayout from './HomeFolder/HomeLayout';
import ProfileLayout from "./ProfileFolder/ProfileLayout";
import BlogLayout from "./BlogFolder/BlogLayout";
import EventLayout from "./EventsFolder/EventLayout";
import ProjectLayout from "./ProjectFolder/ProjectLayout";
import DownloadLayout from "./DownloadFolder/DownloadLayout";
import PrayerLayout from "./PrayerFolder/PrayerLayout";
import Nav from "../partials/Nav";
import Login from "./LoginFolder/Login";
import Forgot from "./LoginFolder/Forgot";
import Feedback from "./FeedbackFolder/Feedback";
import Product from "./ProductFolder/Product";
import Transaction from "./TransactionFolder/Transaction";
import Testimonies from "./TestimonyFolder/Testimonies";
import LiveFeed from "./LiveFeedFolder/LiveFeed";
import ManageUser from './ManageUserFolder/Manage';
import { useSelector } from "react-redux";
import { Loader } from "../shared";
import HomeLayout from "./HomeFolder/HomeLayout";

const Master = () => {
  const login = useSelector((state) => state.login);
  const AuthAdmin = ({ component: Component, ...rest }) => (
    <Route
      {...rest}
      render={(props) =>
        login.loggedIn ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: props.location },
            }}
          />
        )
      }
    />
  );

  const Renderer = ({ Component }) => {
    return (
      <Suspense fallback={<Loader />}>
        <div>
          <Nav />
          <Component />
        </div>
      </Suspense>
    );
  };

  return (
    <>
      <Route path="/login" component={Login} exact />

      <div className="d-flex">
        {/* <Route path="/" component={HomeLayout} exact /> */}
        <AuthAdmin
          path="/forgot_password"
          component={() => <Renderer Component={Forgot} />}
          exact
        />
        <AuthAdmin
          path="/"
          component={() => <Renderer Component={HomeLayout} />}
          exact
        />
        <AuthAdmin
          path="/profile"
          component={() => <Renderer Component={ProfileLayout} />}
          exact
        />
        <AuthAdmin
          path="/blog"
          component={() => <Renderer Component={BlogLayout} />}
          exact
        />
        <AuthAdmin
          path="/events"
          component={() => <Renderer Component={EventLayout} />}
          exact
        />
        <AuthAdmin
          path="/projects"
          component={() => <Renderer Component={ProjectLayout} />}
          exact
        />
        <AuthAdmin
          path="/downloads"
          component={() => <Renderer Component={DownloadLayout} />}
          exact
        />
        <AuthAdmin
          path="/prayers"
          component={() => <Renderer Component={PrayerLayout} />}
          exact
        />
        <AuthAdmin
          path="/feedback"
          component={() => <Renderer Component={Feedback} />}
          exact
        />
        <AuthAdmin
          path="/products"
          component={() => <Renderer Component={Product} />}
          exact
        />
        <AuthAdmin
          path="/testimonies"
          component={() => <Renderer Component={Testimonies} />}
          exact
        />
        <AuthAdmin
          path="/online_transactions"
          component={() => <Renderer Component={Transaction} />}
          exact
        />
        <AuthAdmin
          path="/LiveFeed"
          component={() => <Renderer Component={LiveFeed} />}
          exact
        />
        <AuthAdmin
          path="/manage_users"
          component={() => <Renderer Component={ManageUser} />}
          exact
        />
      </div>
    </>
  );
};

export default Master;
