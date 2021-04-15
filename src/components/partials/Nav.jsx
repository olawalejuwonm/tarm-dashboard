import React,  {  useState  } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import image from '../assets/—Pngtree—user vector avatar_4830521.png';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/ai';
// import MaterialIcon, { colorPalette } from 'material-icons-react';
import Navlayout from './Navlayout';
import { SidebarData } from './sidebarData'

const Nav = () => {

    const [sidebar, setSidebar] = useState(true);

    const showSidebar = () => setSidebar(!sidebar);

    return (
        <>
            <div className="navbar">
                <Link to="#" className="menu-bars">
                    <FaIcons.FaBars  onClick={showSidebar}/>
                </Link>
            </div>
            <nav className={sidebar? 'nav-menu active': 'nav-menu'}>
                <ul className="nav-menu-items">
                    <li className="navbar-toggle">
                        <Link to="#" className="menu-bars">
                            <AiIcons.AiOutlineClose/>
                        </Link>
                    </li>
                    {SidebarData.map((item, index) => {
                        return(
                            <li key={index} className={item.cName}>
                                <Link to={item.path}>
                                    {item.icon}
                                    <span>{item.title}</span>
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </nav>


        </>
    )

}

export default Nav;