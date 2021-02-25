import React, { Component } from "react";
import ContentBox from "../../partials/ContentBox";
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
      <div id="content">
        <div>
          <ul className="d-flex my-4">
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
