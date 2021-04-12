import React, { Component } from "react";
import AllEvents from "./AllEvents";
import CreateEvents from "./CreateEvents";

export default class Event extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showContent: true
    };
  }

  changeContentHandlerUpdate = () => {
    this.setState({ showContent: true });
  };
  changeContentHandlerHome = () => {
    this.setState({ showContent: false });
  };

  render() {
    
    return (
      <div  id="content">
        
        <div className="container " id="profile">
          <div className="row col-12" style={{marginLeft:"20%"}}>
            <div
              id="proheads"
              className="col-md-4 bg-primary text-center  rounded-2 text-white py-2 shadow " 
              onClick={this.changeContentHandlerUpdate}
            >
              {" "}
              Create Event
            </div>
            <div
              id="proheads"
              className="col-md-4 bg-primary text-center rounded-2 text-white py-2  shadow"
              onClick={this.changeContentHandlerHome}
            >
              {" "}
              List All Events
            </div>
          </div>
        </div>
<div id="cont" className="shadow-sm rounded-4"> 
        {this.state.showContent ? <CreateEvents/> : <AllEvents/>}
        </div>
      </div>
    );
  }
}
