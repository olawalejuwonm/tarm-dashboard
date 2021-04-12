import React, { Component } from 'react'
import TopNav from '../../partials/TopNav'
import Project from './Project'

export default class ProjectLayout extends Component {
    render() {
        return (
            <div id="LayoutBackground" className="d-flex">
                {/* <TopNav/> */}
                <Project/>
              
            </div>
        )
    }
}
