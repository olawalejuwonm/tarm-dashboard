import React, { Component } from 'react'
import Sidenav from '../../partials/Sidenav'
import TopNav from '../../partials/TopNav'
import Prayers from './Prayer'

export default class PrayerLayout extends Component {
    render() {
        return (
            <div id="LayoutBackground" className="d-flex">
                <Sidenav/>
                {/* <TopNav/> */}
                <Prayers/>
              
            </div>
        )
    }
}
