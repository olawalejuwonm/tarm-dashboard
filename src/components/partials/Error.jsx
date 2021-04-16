import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Nav from './Nav';

export default class Error extends Component {
    render() {
        return (
            <>
                <div className="container-fluid d-flex flex-column justify-content-center align-items-center error">
                    <h2 className="text-info display-4 fw-bold text-center">404</h2>
                    <p className="text-dark text-center">Requested route not found</p>
                    <Link to="/" className="text-center">Go Home</Link>
                </div>
            </>
        )
    }
}
