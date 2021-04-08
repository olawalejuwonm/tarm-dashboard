import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";



const ContentBox = ({linkURL, title}) => {
    return(
        <>
            <div className="d-flex justify-content-center align-items-center">

            <li><Link to={linkURL ? linkURL : null}>{title ? title : 'No title'}</Link></li>
            </div>
        </>
    )
}

export default ContentBox;