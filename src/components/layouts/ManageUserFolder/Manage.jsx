import React, { Component } from 'react';
import * as RiIcons from 'react-icons/ri';
import * as FiIcons from 'react-icons/fi';


export default class Manage extends Component {
    constructor(props) {
        super(props)

        this.state = {
            curTime: new Date().toLocaleString()
        }

    }

    render() {
        return (
            <>
                <div className="p-5 m-auto">
                    <div className="container-fluid  " id="postview">
                        <h2 className="text-center py-2 pb-4">Manage users</h2>
                        <div className="border-res">

                            <div className="w-100 bg-light border border-res px-4  text-center" style={{ fontSize: 20 }}>
                                <div className="row">
                                    <div className="col-4 col-md-4">
                                        <p className="mb-0 text-primary fw-bold px-2">Title</p>
                                    </div>
                                    <div className="col-2 col-md-2">
                                        <p className="mb-0 text-primary fw-bold">Type</p>
                                    </div>
                                    <div className="col-3 col-md-3">
                                        <p className="mb-0 text-primary fw-bold">Date</p>
                                    </div>
                                    <div className="col-2 col-md-2">
                                        <p className="mb-0 text-primary fw-bold text-danger">Delete</p>
                                    </div>
                                    <div className="col-1 col-md-1">
                                        <p className="mb-0 text-primary fw-bold text-warning">Update</p>
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
                                        <div className="col-3 col-md-3">
                                            <p className="mb-0 text-center  allpost">{this.state.curTime}</p>
                                        </div>
                                        <div className="col-2 col-md-2">
                                            <button className="mb-0  text-center text-danger allpost"  style={{border: 'none', background: 'none'}}><RiIcons.RiDeleteBin5Line/></button>
                                        </div>
                                        <div className="col-1 col-md-1">
                                            <button className="mb-0 text-center allpost text-warning" style={{border: 'none', background: 'none'}}><FiIcons.FiEdit/></button>
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
