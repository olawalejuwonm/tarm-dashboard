import React, { Component } from 'react'
import Sidenav from '../../partials/Sidenav'
import TopNav from '../../partials/TopNav'
import Profile from './Profile'

export default class ProfileLayout extends Component {
    render() {
        return (
            <div id="LayoutBackground" className="d-flex">
                <Sidenav/>
                <TopNav/>
                <Profile/>
              
            </div>
        )
    }
}
