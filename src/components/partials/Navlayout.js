import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';


const Navlayout = ({title, LinkUrl}) => {
    return (
        <>
            <div id="active">

                <Link to={LinkUrl? LinkUrl: null} className=" py-2 btn-custom mt-2" >{title? title: 'insert title'}</Link>
            </div>

            
        </>
    )
}

export default Navlayout;