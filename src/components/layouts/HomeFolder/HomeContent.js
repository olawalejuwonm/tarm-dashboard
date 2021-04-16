import React from 'react';
import { useSelector } from 'react-redux';
import Donut from './donutChart';
import Chart1 from './LineChart';

const HomeContent = () => {

  const user= useSelector(state => state.login.user)

  const ContentData = [
    {
      linkURL: '/',
      title: 'Home',
    },
    {
      linkURL: '/about',
      title: 'About',
    },
    {
      linkURL: '/profile',
      title: 'Profile',
    },
    {
      linkURL: '/contact',
      title: 'Contact',
    },
  ];

  return (
    <div id="content">

      <div className="container ">
        <div className="row">
        <h1  className="text-center  text-success">Welcome {user.firstName + " " + user.lastName}</h1>
          <div className="col-sm-3 bg-info mr-4 my-2 d-flex con1 rounded-3 mx-2 text-white shadow-lg justify-content-center align-items-center">
            <h3> <i className="fa fa-cloud-upload p-4" /> </h3>

            All Post <span style={{color: 'red'}} className="m-lg-4"> 50 </span>
          </div>
          <div className="col-sm-3 bg-primary my-2 bg-gradient mr-4 d-flex con1 rounded-3 mx-2 text-white shadow-lg justify-content-center align-items-center">
            <h3> <i className="fa fa-calendar p-4" /> </h3>

            All Events
            {' '}
            <span style={{color: 'red'}} className="m-lg-4"> 50 </span>
          </div>
          <div className="col-sm-3 bg-warning my-2 mr-4 d-flex con1 rounded-3 mx-2 text-white shadow-lg justify-content-center align-items-center">
            <h3> <i className="fa fa-credit-card-alt p-4" /> </h3>

            Sales <span style={{color: 'yellow'}} className="m-lg-4"> 50 </span>
          </div>
        </div>
      </div>
      <div className="row">

        <div className="col-sm-4 m-4 my-4">
          {/* <Chart1 /> */}

        </div>

        {/* <div className="col-sm-4 m-4 my-4">  <Donut /> </div> */}

      </div>

    </div>
  );
};

export default HomeContent;
