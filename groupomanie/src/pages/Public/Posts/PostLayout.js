import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../../../components/Public/Header';
import SideMenu from '../../../components/Public/SideMenu';

import './accueil.scss'

const PostLayout = () => {
    return (
        <div className='post-layout'>
            <Header />
            <div id='accueil'>
                <SideMenu />
            </div>
            <div id='post-body'>< Outlet /></div>
        </div>
    );
};

export default PostLayout;