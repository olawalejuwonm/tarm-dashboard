import React, { Component } from 'react'
import Sidenav from '../../partials/Sidenav'
import TopNav from '../../partials/TopNav'
import Downloads from './Prayer'

export default class DownloadLayout extends Component {
    render() {
        return (
            <div id="LayoutBackground" className="d-flex">
                <Sidenav/>
                {/* <TopNav/> */}
                <Downloads/>
              
            </div>
        )
    }
}
