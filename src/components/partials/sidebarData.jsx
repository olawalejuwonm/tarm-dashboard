import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import image from '../assets/—Pngtree—user vector avatar_4830521.png';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as MdIcons from 'react-icons/md';
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
        icon: <FaIcons.FaBlogger/>,
        cName: 'nav-text'
    }, 
    {
        title: 'Resources',
        path: '/resources',
        icon: <AiIcons.AiFillDatabase/>,
        cName: 'nav-text'
    }, 
    {
        title: 'Projects',
        path: '/projects',
        icon: <AiIcons.AiFillProject/>,
        cName: 'nav-text'
    }, 
    // {
    //     title: 'Download',
    //     path: '/downloads',
    //     icon: <IoIcons.IoDownloadSharp/>,
    //     cName: 'nav-text'
    // }, 
    {
        title: 'Prayer',
        path: '/prayers',
        icon: <FaIcons.FaPrayingHands/>,
        cName: 'nav-text'
    }, 
    {
        title: 'Testimonies',
        path: '/testimonies',
        icon: <AiIcons.AiFillHome/>,
        cName: 'nav-text'
    }, 
    {
        title: 'Products',
        path: '/products',
        icon: <FaIcons.FaProductHunt/>,
        cName: 'nav-text'
    }, 
    {
        title: 'Transaction',
        path: '/online_transactions',
        icon: <AiIcons.AiOutlineTransaction/>,
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
    }
    


]