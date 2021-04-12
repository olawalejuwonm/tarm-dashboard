import React, { Component } from 'react'
import TopNav from '../../partials/TopNav'
import Profile from './Profile'

export default class ProfileLayout extends Component {
    render() {
        return (
            <div id="LayoutBackground" className="d-flex">
                {/* <TopNav/> */}
                <Profile/>
              
            </div>
        )
    }
}
