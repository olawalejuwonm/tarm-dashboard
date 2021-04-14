import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

const Forgot = () => {
    return (
        <>
            <div className="container-fluid login-height">
                <div className="login-form">
                    <h2 className="text-white text-center mb-4">Forgot Password ?</h2>
                    <p className="forgot-txt text-warning text-center pb-3">Enter your email to get an Otp sent to you</p>
                    <div className="form-group">
                        <label className="label">Email<span className="text-danger span">*</span> </label>
                        <input className="form-control mb-3" placeholder="Enter email" type="email" />
                    </div>

                    <Link to="/send_otp" className="btn btn-light mt-3 px-4 text-dark link fw-bold">Submit</Link>
                </div>


            </div>


       
        </>
    )
}

export default Forgot;