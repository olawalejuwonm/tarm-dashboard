import React from 'react';
import Layout from '../Layout';
import HomeContent from './HomeContent';
import Sidenav from '../../partials/Sidenav';
import TopNav from '../../partials/TopNav';


const HomeLayout = () => {
    return(
        <>
        <div id="LayoutBackground" className="d-flex" >

            {/* <Layout/> */}
            <Sidenav/>
            
            {/* <TopNav/> */}
                
                 
         
            

        </div>
            <HomeContent/>
        </>
    )
}

export default HomeLayout;