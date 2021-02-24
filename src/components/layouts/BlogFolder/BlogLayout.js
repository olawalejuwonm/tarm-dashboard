import React, { Component } from 'react'
import Sidenav from '../../partials/Sidenav'
import TopNav from '../../partials/TopNav'
import Blog from './Blog'

export default class BlogLayout extends Component {
    render() {
        return (
            <div id="LayoutBackground" className="d-flex">
                <Sidenav/>
                {/* <TopNav/> */}
                <Blog/>
              
            </div>
        )
    }
}
