import React, { Component } from "react";
import AllDownloads from "./AllDownloads";
import CreateDownloads from "./CreateDownload";

export default class Downloads extends Component {
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
        
        <div className="container " id="profile">
          <div className="row col-12">
            <div
              id="proheads"
              className="col-md-4 bg-primary text-center  rounded-2 text-white py-2 shadow"
              onClick={this.changeContentHandlerUpdate}
            >
              {" "}
              Create Download
            </div>
            <div
              id="proheads"
              className="col-md-4 bg-primary text-center rounded-2 text-white py-2  shadow"
              onClick={this.changeContentHandlerHome}
            >
              {" "}
              List All Download
            </div>
          </div>
        </div>
        <div id="cont" className="shadow-sm rounded-4">
          {this.state.showContent ? <CreateDownloads/> : <AllDownloads />}
        </div>
      </div>

    );
  }
}
