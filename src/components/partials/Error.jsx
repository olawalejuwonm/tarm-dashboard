import React, { Component } from 'react';
import Nav from './Nav';

export default class Error extends Component {
    render() {
        return (
            <>
            <Nav/>
                <div className="container-fluid d-flex flex-column justify-content-center align-items-center error">
                    <h2 className="text-info display-4 fw-bold text-center">404</h2>
                    <p className="text-dark text-center">Requested route not found</p>
                </div>
            </>
        )
    }
}
