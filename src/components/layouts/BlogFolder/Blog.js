import React, { Component } from "react";
import AllPost from "./AllPost";
import CreatePost from "./CreatePost";

export default class Blog extends Component {
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
      <div id="content">
        
        <div className="container blog-profile w-75 " id="profile">
          <div className="d-flex justify-content-center">
            <button
              id="proheads"
              className="col-md-4 w-100 bg-primary text-center blog-post  rounded-2 text-white py-1 "
              onClick={this.changeContentHandlerUpdate}
            >
              {" "}
              Create Post
            </button>
            <button
              id="proheads"
              className="col-md-4 bg-primary text-center w-100 blog-post rounded-2 text-white py-1  "
              onClick={this.changeContentHandlerHome}
            >
              {" "}
              All Post
            </button>
          </div>
        </div>
        <div id="cont" className=" rounded-4">
          {this.state.showContent ? <CreatePost /> : <AllPost />}
        </div>
      </div>
    );
  }
}
