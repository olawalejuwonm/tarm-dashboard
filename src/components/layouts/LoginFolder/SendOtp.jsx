import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';


const Otp = () => {
    return (
        <>
            <div className="container-fluid login-height">
                <div className="login-form">
                    <h2 className="text-white text-center my-4">Enter Otp ?</h2>
                    <p className="forgot-txt text-warning text-center pb-3">Enter the Otp tht was sent to your email now</p>
                    <div className="form-group">
                        <input className="form-control mb-3" placeholder="Enter Otp" type="text" />
                    </div>

                    <Link to="/new_password" className="btn btn-light mt-3 px-4 text-dark link fw-bold">Submit</Link>
                </div>
            </div>
        </>
    )
}

export default Otp;