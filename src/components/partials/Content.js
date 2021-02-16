import React from 'react'
import ContentBox from './ContentBox';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


const Content = () => {
    const ContentData = [{
        linkURL: "/",
        title: 'Home'
    },
    {
        linkURL: "/about",
        title: 'About'
    },
    {
        linkURL: "/profile",
        title: 'Profile'
    },
    {
        linkURL: "/contact",
        title: 'Contact'
    }]
    return (
        <>
            <div id="content" className="d-flex">
                <ul className="d-flex my-4 mr-auto">
                    {ContentData.length > 0 ?
                        ContentData.map((contents) =>
                            <ContentBox linkURL={contents.linkURL}
                                title={contents.title} />) : <><div className="bg-warning d-flex justify-content-center display-4">no feed to dispaly</div></>}
                </ul>
            </div>
        </>
    )
}

export default Content;
