import React, { Component } from 'react'
import TopNav from '../../partials/TopNav'
import Prayers from './Prayer'

export default class PrayerLayout extends Component {
    render() {
        return (
            <div id="LayoutBackground" className="d-flex">
                {/* <TopNav/> */}
                <Prayers/>
              
            </div>
        )
    }
}
