import React, { Component } from 'react'
import TopNav from '../../partials/TopNav'
import Blog from './Blog'

export default class BlogLayout extends Component {
    render() {
        return (
            <div id="LayoutBackground" className="d-flex">
                {/* <TopNav/> */}
                <Blog/>
              
            </div>
        )
    }
}
