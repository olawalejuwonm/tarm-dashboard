import React, {Component} from 'react';
import AllProjects from './AllProject';
import CreateProject from './CreateProject';

export default class Project extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showContent: true,
    };
  }

  changeContentHandlerUpdate = () => {
    this.setState({showContent: true});
  };
  changeContentHandlerHome = () => {
    this.setState({showContent: false});
  };

  render() {
    return (
      <div id="content">

        <div className="container-fluid blog-profile w-100 " id="profile">
          <div className="d-flex w-50 justify-content-center">
            <div
              id="proheads"
              className="col-md-4  bg-primary text-center  rounded-2 text-white py-2 shadow"
              onClick={this.changeContentHandlerUpdate} 
            >
              {" "}
              Create Project
              
            </div>
            <select
              id="proheads"
              className="col-md-4 form-select bg-primary text-center rounded-2 text-white py-2 w-25 shadow"
              onClick={this.changeContentHandlerHome} aria-label="Default select example"
            >
              {" "}
              All Project
              <option selected className="text-white">Resource Type</option>
              <option value="1">Video</option>
              <option value="2">Audio</option>
              <option value="3">Three</option>
            </select>
          </div>
        </div>
        <div id="cont" className="shadow-sm rounded-4">
          {this.state.showContent ? <CreateProject /> : <AllProjects />}
        </div>
      </div>
    );
  }
}
