import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import image from '../assets/images/—Pngtr';
import MaterialIcon, { colorPalette } from 'material-icons-react';
import Navlayout from './Navlayout';



const Sidenav = () => {

    const LinkData = [
        {
            title: 'blog',
            LinkUrl: '/blog'
        },
        {
            title: 'events',
            LinkUrl: '/events'
        },
        {
            title: 'project',
            LinkUrl: '/projects'
        },
        {
            title: 'downloads',
            LinkUrl: '/downloads'
        },
        {
            title: 'prayers',
            LinkUrl: '/prayers'
        },
        {
            title: 'testimonies',
            LinkUrl: '/testimonies'
        },
        {
            title: 'products',
            LinkUrl: '/products'
        },
        {
            title: 'online transaction',
            LinkUrl: '/online transaction'
        },
        {
            title: 'live feeds',
            LinkUrl: '/live feeds'
        },
        {
            title: 'manage centers',
            LinkUrl: '/manage centers'
        },
        {
            title: 'feedback',
            LinkUrl: '/feedback'
        }
    ]

    const [addActive, changeActive] = useState('.active')
    return (
        <>
            <div className="side-adjust">
                <div className="container-fluid sidenav-adjust">
                    <div id="sidenav" className="container-fluid px-3">
                        {/* <Link to="/" className=" py-2" className="close fw-bold text-white">&times;</Link> */}

                        <img src={image} alt="username" className="mt-3" />
                        <h5 className="user-name py-3">username</h5>

                        

                        { LinkData.length > 0? 
                            LinkData.map((link) => 
                                <Navlayout 
                                    title={link.title}
                                    LinkUrl={link.LinkData}
                                />
                            ): <><div>include details</div></>
                         }
                        

                        {/* <Link to="/" className=" py-2 active mt-4" >blog</Link>
                        <Link to="/events" className=" py-2 btn-custom  border-rounded-5 btn mt-2" >events</Link>
                        <Link to="/projects" className=" py-2 btn-custom  border-rounded-5 btn mt-2" >projects</Link>
                        <Link to="/downloads" className=" py-2 btn-custom  border-rounded-5 btn mt-2" >downloads</Link>
                        <Link to="/prayers" className=" py-2 btn-custom  border-rounded-5 btn mt-2" >prayers</Link>
                        <Link to="/testimonies" className=" py-2 btn-custom  border-rounded-5 btn mt-2" >testimonies</Link>
                        <Link to="/products" className=" py-2 btn-custom  border-rounded-5 btn mt-2" >products</Link>
                        <Link to="/online transaction" className=" py-2 btn-custom  border-rounded-5 btn mt-2" >online transactions</Link>
                        <Link to="/live feeds" className=" py-2 btn-custom  border-rounded-5 btn mt-2" >live feeds</Link>
                        <Link to="/manage centers" className=" py-2 btn-custom  border-rounded-5 btn mt-2" >manage centers</Link>
                        <Link to="/feedback" className=" py-2 btn-custom  border-rounded-5 btn mt-2" >feedback</Link> */}
                    </div>
                </div>
            </div>

        </>
    )

}


export default Sidenav;