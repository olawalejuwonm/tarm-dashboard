import React, {Component, useState} from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Prayers from '../PrayerFolder/Prayer';
import Testimonies from '../TestimonyFolder/Testimonies';

export default function Feedback() {
  const [state, setState] = useState({showContent: false});
  const changeContentHandlerUpdate = () => {
    setState({showContent: true});
  };
  const changeContentHandlerHome = () => {
    setState({showContent: false});
  };

  return (
    <>
      <div id="content">
        <div className="container-fluid blog-profile w-100 " id="profile">
          <div className="d-flex w-50 justify-content-center">
            <div
              id="proheads"
              className="col-md-4  bg-primary text-center  rounded-2 text-white py-2 shadow"
              onClick={changeContentHandlerUpdate}
            >
              {' '}
              Prayer
            </div>
            <div
              id="proheads"
              className="col-md-4  bg-primary text-center rounded-2 text-white py-2 w-25 shadow"
              onClick={changeContentHandlerHome}
            >
              {' '}
              Testimonies
            </div>
          </div>
        </div>
        <div id="cont" className="shadow-sm rounded-4">
          {state.showContent ? <Prayers /> : <Testimonies />}
        </div>
      </div>
    </>
  );
}
