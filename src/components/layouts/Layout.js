import React from 'react';
import TopNav from '../partials/TopNav';
import Sidenav from '../partials/Sidenav';


const Layout = () => {
    return(
        <>
        <div className="d-flex">

            <Sidenav/>
            <TopNav/>
        </div>
        </>
    )
}

export default Layout;