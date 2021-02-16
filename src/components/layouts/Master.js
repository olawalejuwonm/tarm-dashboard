import React from 'react';
import Content from '../partials/Content';
import Sidenav from '../partials/Sidenav';


const Master = () => {
    return(
        <>
        <div className="d-flex">

            <Sidenav/>
            <Content/>
        </div>
        </>
    )
}

export default Master;