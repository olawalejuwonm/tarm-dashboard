import React, { Component } from 'react'
// import Sidenav from '../../partials/Sidenav'
import TopNav from '../../partials/TopNav'
import Event from './Event'

export default class BlogLayout extends Component {
    render() {
        return (
            <div id="LayoutBackground" className="d-flex">
                {/* <Sidenav/> */}
                {/* <TopNav/> */}
                <Event/>
              
            </div>
        )
    }
}
