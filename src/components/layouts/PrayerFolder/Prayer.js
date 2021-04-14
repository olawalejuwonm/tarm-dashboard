import React, { Component } from "react";
import AllPrayers from "./AllPrayers";
import Approved from "./Approved";
import Disapproved from "./Disapproved";
import Pending from "./Pending";
import Spam from "./Spam";

export default class Prayers extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showContent: [  {
        id:1, header:"Pending"
      },
      {
        id:2, header:"All Request"
      },
      {
        id:3, header:"Approved"
      },
      {
        id:4, header:"Disapproved"
      },
      {
        id:5, header:"Spam"
      }
    
    ]
    };
  }

componentDidMount=()=>{
  this.changeContentHandlerUpdate = (a) => {
    let sc = this.state.showContent
    this.setState({ showContent:a  });
    console.log(a)
  };
}




  render() {
    let stc = this.state.showContent 
    

    return (
      <div id="content">
        
        <div className="container " id="profile">
          <div className="row d-flex">
          
            <div
              id="proheads"
              className="col-md-2 col-2 bg-primary text-center  rounded-2 text-white py-2 shadow"
              onClick={()=>this.changeContentHandlerUpdate(1)}
            >
              {" "}
              Pending
            </div>
            <div
              id="proheads"
              className="col-md-2 col-2 bg-primary text-center rounded-2 text-white py-2  shadow"
              onClick={()=>this.changeContentHandlerUpdate(2)}
            >
              {" "}
              All Request
            </div>
            <div
              id="proheads"
              className="col-md-2 col-2 bg-primary text-center rounded-2 text-white py-2  shadow"
              onClick={()=>this.changeContentHandlerUpdate(3)}
            >
              {" "}
              Approved
            </div>
            <div
              id="proheads"
              className="col-md-2 col-2 bg-primary text-center rounded-2 text-white py-2  shadow"
              onClick={()=>this.changeContentHandlerUpdate(4)}
            >
              {" "}
              Disapproved
            </div>
            <div
              id="proheads"
              className="col-md-2 col-2 bg-primary text-center rounded-2 text-white py-2  shadow"
              onClick={()=>this.changeContentHandlerUpdate(5)}
            >
              {" "}
              Spam
            </div>

          </div>
        </div>
        <div id="cont" className="shadow-sm rounded-4">
          { stc == 1 ? <Pending/> :  stc == 2 ? <AllPrayers/> :stc == 3 ?  <Approved/>:stc == 4 ? <Disapproved/>: stc == 5 ? <Spam/>:''  }
        </div>
      </div>

    );
  }
}
