import React, { Component } from 'react'
import ProfileHomeSection from './ProfileHomeSection'
import ProfileUpdate from './ProfileUpdate'



export default class Profile extends Component {

constructor(props) {
    super(props)

    this.state = {
         showContent: true
    }
}


changeContentHandlerUpdate=()=>{
    this.setState({showContent:true})
}
changeContentHandlerHome=()=>{
    this.setState({showContent:false})
}

    render() {
        return (
            <div className="container " id="profile">
            <div className="row col-12"> 
            <div id="proheads" className="col-md-4 bg-primary text-center  rounded-2 text-white py-2" onClick={this.changeContentHandlerUpdate}> My Profile</div>
            <div id="proheads" className="col-md-4 bg-primary text-center rounded-2 text-white py-2" onClick={this.changeContentHandlerHome}> Update Profile</div>

            </div>


{this.state.showContent? <ProfileHomeSection/>: <ProfileUpdate/>  }


            
            </div>
        )
    }
}
