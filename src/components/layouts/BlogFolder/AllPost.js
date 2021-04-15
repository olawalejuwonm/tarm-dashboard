import React, {Component} from 'react';

export default class AllPost extends Component {
  render() {
    return (
      <>
        <div className="p-5 ">
          <div className="container-fluid " id="postview">
            <div className="w-100 bg-light  text-center" style={{fontSize: 20}}>
              <div className="row">
                <div className="col-12 col-md-3">
                  <p className="mb-0 text-primary fw-bold">Title</p>
                </div>
                <div className="col-3 col-md-3">
                  <p className="mb-0 text-primary fw-bold">Status</p>
                </div>
                <div className="col-12 col-md-3">
                  <p className="mb-0 text-primary fw-bold">Last Update</p>
                </div>
                <div className="col-12 col-md-3">
                  <p className="mb-0 text-primary fw-bold">Authors</p>
                </div>
              </div>
            </div>
          </div>
          <div className="container-fluid" id="showpost">
            <div className="w-100 bg-white " style={{fontSize: 20}}>
              <div className="row p-2">
                <div className="col-3 col-md-3">
                  <p className="mb-0 text-justify allpost">
                    Ghost has a flexible organisational taxonomy called tags,
                    which can be assigned from post settings menu within the
                    Ghost editor. 
                  </p>
                </div>
                <div className="col-3 col-md-3">
                  <p className="mb-0 text-center allpost">Pending</p>
                </div>
                <div className="col-3 col-md-3">
                  <p className="mb-0 text-center  allpost">8 minutes ago</p>
                </div>
                <div className="col-3 col-md-3">
                  <p className="mb-0 text-center allpost">Pastor oluwaseun Ojo</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
