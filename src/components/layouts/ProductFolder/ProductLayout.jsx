import React, { Component } from 'react'
import TopNav from '../../partials/TopNav'
import Products from './Product'

export default class PrayerLayout extends Component {
    render() {
        return (
            <div id="LayoutBackground" className="d-flex">
                {/* <TopNav/> */}
                <Products/>
              
            </div>
        )
    }
}
