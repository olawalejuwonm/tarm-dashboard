import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import image from '../assets/—Pngtree—user vector avatar_4830521.png';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as BiIcons from 'react-icons/bi';
import * as MdIcons from 'react-icons/md';
import * as BsIcons from 'react-icons/bs';
import * as IoIcons from 'react-icons/io';

// import MaterialIcon, { colorPalette } from 'material-icons-react';
import Navlayout from './Navlayout';

export const SidebarData = [
    {
        title: 'Home',
        path: '/login',
        icon: <AiIcons.AiFillHome/>,
        cName: 'nav-text'
    }, 
    {
        title: 'Blog',
        path: '/blog',
        icon: <BiIcons.BiCommentEdit/>,
        cName: 'nav-text'
    }, 
    {
        title: 'Resources',
        path: '/downloads',
        icon: <AiIcons.AiOutlinePlaySquare/>,
        cName: 'nav-text'
    }, 
    {
        title: 'Projects',
        path: '/projects',
        icon: <BiIcons.BiBuildingHouse/>,
        cName: 'nav-text'
    }, 

    
    
    
    {
        title: 'Transactions',
        path: '/online_transactions',
        icon: <BsIcons.BsCreditCard/>,
        cName: 'nav-text'
    }, 
    {
        title: 'Live Feed',
        path: '/live feeds',
        icon: <MdIcons.MdLiveTv/>,
        cName: 'nav-text'
    }, 
    // {
    //     title: 'Manage Centers',
    //     path: '/manage centers',
    //     icon: <IoIcons.IolosSettings/>,
    //     cName: 'nav-text'
    // }, 
    {
        title: 'Feedback',
        path: '/feedback',
        icon: <MdIcons.MdFeedback/>,
        cName: 'nav-text'
    },
    {
        title: 'Manage Users',
        path: '/manage_users',
        icon: <FaIcons.FaUserEdit/>,
        cName: 'nav-text'
    },
    {
        title: 'Account Settings',
        path: '/account_settings',
        icon: <BsIcons.BsGear/>,
        cName: 'nav-text'
    }
    


]