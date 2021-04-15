import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Prayers from '../PrayerFolder/Prayer';
import Testimonies from '../TestimonyFolder/Testimonies';


export default class Feedback extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            showContent: true

        }
        
    
        
    }

    changeContentHandlerUpdate = () => {
        this.setState({ showContent: true });
      };
      changeContentHandlerHome = () => {
        this.setState({ showContent: false });
      };
    
    render() {
        return (
            <>
                 <div id="content">

<div className="container-fluid blog-profile w-100 " id="profile">
  <div className="d-flex w-50 justify-content-center">
    <div
      id="proheads"
      className="col-md-4  bg-primary text-center  rounded-2 text-white py-2 shadow"
      onClick={this.changeContentHandlerUpdate} 
    >
      {" "}
      Prayer
      
    </div>
    <div
      id="proheads"
      className="col-md-4  bg-primary text-center rounded-2 text-white py-2 w-25 shadow"
      onClick={this.changeContentHandlerHome} 
    >
      {" "}
      Testimonies
    </div>
  </div>
</div>
<div id="cont" className="shadow-sm rounded-4">
  {this.state.showContent ? <Prayers /> : <Testimonies />}
</div>
</div>
            </>
        )
    }
}
