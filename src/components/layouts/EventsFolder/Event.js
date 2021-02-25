import React, { Component } from "react";
import ContentBox from "../../partials/ContentBox";
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
    const ContentData = [
      {
        linkURL: "/",
        title: "Home",
      },
      {
        linkURL: "/about",
        title: "About",
      },
      {
        linkURL: "/profile",
        title: "Profile",
      },
      {
        linkURL: "/contact",
        title: "Contact",
      },
    ];

    return (
      <div  id="content">
        <div>
          <ul className="d-flex my-4 mr-auto">
            {ContentData.length > 0 ? (
              ContentData.map((contents) => (
                <ContentBox linkURL={contents.linkURL} title={contents.title} />
              ))
            ) : (
              <>
                <div className="bg-warning d-flex justify-content-center display-4">
                  no feed to display
                </div>
              </>
            )}
          </ul>
        </div>
        <div className="container " id="profile">
          <div className="row col-12">
            <div
              id="proheads"
              className="col-md-4 bg-primary text-center  rounded-2 text-white py-2 shadow"
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
