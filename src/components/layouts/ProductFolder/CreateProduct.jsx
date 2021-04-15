import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { AccessAlarm, ThreeDRotation } from '@material-ui/icons';
import CloudDownloadIcon from '@material-ui/icons/CloudDownload';

export default class CreatePost extends Component {
    render() {
        return (
            <>
                <div className="container p-5">
                    <div className="row d-flex">
                        <div className="col-12 col-md-5">

                            <form action="/" className="create-form product-form m-auto">
                                <div className="form-group">
                                    <label htmlFor="fname">Product Title<span className="text-danger"> *</span></label>
                                    <input type="text" className="form-control" id="email" />

                                </div>

                                <div className="form-group">
                                    <label htmlFor="fname">Product Description<span className="text-danger"> *</span></label>
                                    <input type="text" className="form-control" id="email" />
                                </div>
                                <div id="kudi" className="input-group mb-3">
                                    <div className="input-group-prepend" aria-label="Default select example">
                                        <select className="form-select" name="currency">
                                            <option value="NGN" style={{ textDecoration: 'line-through !important', textDecorationStyle: 'double' }} type="number">₦</option>
                                        </select>
                                    </div>
                                    <input type="text" class="form-control" value="0" name="shipping_cost" id="shipping_cost"></input>
                                </div>

                

                                <div className="form-group">
                                    <label htmlFor="fname">Start Date<span className="text-danger"> *</span></label>
                                    <input type="Date" className="form-control" id="email" />

                                </div>


                                <div className="form-group">
                                    <label htmlFor="edate">Due Date<span className="text-danger"> *</span></label>
                                    <input type="Date" className="form-control" id="edate" />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="fname">Product Estimated Cost<span className="text-danger"> *</span></label>
                                    <input type="text" className="form-control" id="email" />
                                </div>




                                <div className="form-group">
                                    <label htmlFor="fname"> Product Category<span className="text-danger"> *</span></label>
                                    <select id='select' className="form-control">
                                        <option value="Building"> Building</option>
                                        <option value="Procurement"> Procurement</option>
                                        <option value="Outreach"> Outreach</option>
                                        <option value="Others"> Others</option>

                                    </select>
                                </div>



                                <button type="submit" className="btn btn-primary mt-4">Submit</button>
                            </form>
                        </div>
                        <div className="col-10 col-md-5 createPost-icon">
                            <Link to="/" className="btn text-dark d-block" type="file"><CloudDownloadIcon style={{ color: "secondary", fontSize: 170 }}></CloudDownloadIcon></Link>
                            <Link to="/" className="btn text-white  btn-primary w-100  text-center rounded-0">Add feature image </Link>

                        </div>
                    </div>

                </div>
            </>


        )
    }
}

