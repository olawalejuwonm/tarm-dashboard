import React, { Component, useEffect } from "react";
import AllPrayers from "./AllPrayers";
import Approved from "./Approved";
import Disapproved from "./Disapproved";
import Pending from "./Pending";
import Request from "./Request";
import Spam from "./Spam";

export default function Prayers () {

  const [state, setState] = React.useState({
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
  })

  useEffect(() => {

  })

  const changeContentHandlerUpdate = (a) => {
    let sc = state.showContent
    setState({ showContent:a  });
    console.log(a)
  };



    let stc = state.showContent 
    

    return (
      <div id="content">
        
        <div className="container " id="profile">
          <div className="row d-flex">
          
            <div
              id="proheads"
              className="col-md-2 col-2 bg-primary text-center  rounded-2 text-white py-2 shadow"
              onClick={()=>changeContentHandlerUpdate(1)}
            >
              {" "}
              Pending
            </div>
            <div
              id="proheads"
              className="col-md-2 col-2 bg-primary text-center rounded-2 text-white py-2  shadow"
              onClick={()=>changeContentHandlerUpdate(2)}
            >
              {" "}
              All Request
            </div>
            <div
              id="proheads"
              className="col-md-2 col-2 bg-primary text-center rounded-2 text-white py-2  shadow"
              onClick={()=>changeContentHandlerUpdate(3)}
            >
              {" "}
              Approved
            </div>
            <div
              id="proheads"
              className="col-md-2 col-2 bg-primary text-center rounded-2 text-white py-2  shadow"
              onClick={()=>changeContentHandlerUpdate(4)}
            >
              {" "}
              Disapproved
            </div>
            <div
              id="proheads"
              className="col-md-2 col-2 bg-primary text-center rounded-2 text-white py-2  shadow"
              onClick={()=>changeContentHandlerUpdate(5)}
            >
              {" "}
              Spam
            </div>

          </div>
        </div>
        <div id="cont" className="shadow-sm rounded-4">
          { stc == 1 ? <Pending/>:stc == 2 ? <Request/>  :stc == 3 ?  <Approved/>:stc == 4 ? <Disapproved/>: stc == 5 ? <Spam/>:''  }
        </div>
      </div>

    );
  }

