import React, {useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';


const Navlayout = ({title, LinkUrl, SubMenutitle, SubMenulink}) => {
    const [dropdown, setdropdown] = useState(false)
    return (
        <>
            <div id="active">

                <Link to={LinkUrl ?LinkUrl: null} className=" py-2 btn-custom mt-2" >{title? title: 'insert title'}   </Link>
                {/* <div > <a href={SubMenulink?SubMenulink:null}> {SubMenutitle}  </a> </div> */}
                {/* <Link to={SubMenulink?SubMenulink: null} className=" py-2 btn-custom mt-2" > <div> {SubMenutitle} </div> </Link> */}
            </div>

            
        </>
    )
}

export default Navlayout;