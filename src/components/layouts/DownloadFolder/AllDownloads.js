import React, { Component } from 'react';

export default class AllDownloads extends Component {
    constructor(props) {
        super(props)

        this.state = {
            curTime: new Date().toLocaleString()
        }

    }

    render() {
        return (
            <>
                <div className="p-5 ">
                    <div className="container-fluid " id="postview">
                        <h2 className="text-center py-2">All Resources</h2>
                        <div className="border-res">

                            <div className="w-100 bg-light border border-res  text-center" style={{ fontSize: 20 }}>
                                <div className="row">
                                    <div className="col-4 col-md-4">
                                        <p className="mb-0 text-primary fw-bold">Title</p>
                                    </div>
                                    <div className="col-2 col-md-2">
                                        <p className="mb-0 text-primary fw-bold">Type</p>
                                    </div>
                                    <div className="col-2 col-md-2">
                                        <p className="mb-0 text-primary fw-bold">Date</p>
                                    </div>
                                    <div className="col-2 col-md-2">
                                        <p className="mb-0 text-primary fw-bold">Venue</p>
                                    </div>
                                    <div className="col-2 col-md-2">
                                        <p className="mb-0 text-primary fw-bold">Preacher</p>
                                    </div>
                                </div>
                            </div>
                            <div className="container-fluid" id="showpost">
                                <div className="w-100  bg-white " style={{ fontSize: 20 }}>
                                    <div className="row p-2">
                                        <div className="col-4 col-md-4">
                                            <p className="mb-0  allpost">
                                                Ghost has a flexible organisational taxonomy called tags,
                                                which can be assigned from post settings menu.
                                    </p>
                                        </div>
                                        <div className="col-2 col-md-2">
                                            <p className="mb-0 text-center allpost">Audio</p>
                                        </div>
                                        <div className="col-2 col-md-2">
                                            <p className="mb-0 text-center  allpost">{this.state.curTime}</p>
                                        </div>
                                        <div className="col-2 col-md-2">
                                            <p className="mb-0 text-center allpost">Camp Young</p>
                                        </div>
                                        <div className="col-2 col-md-2">
                                            <p className="mb-0 text-center allpost">Pastor oluwaseun Ojo</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}
