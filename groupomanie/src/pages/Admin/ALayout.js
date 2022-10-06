import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../../components/Admin/Header';
import SideMenu from '../../components/Admin/SideMenu';
import './admin.css';

const ALayout = () => {
    return (
        <div className='admin-layout'>
            <Header />
            <div id='admin'>
                <SideMenu />
            </div>
            <div id='admin-body'>< Outlet /></div>
        </div>
    );
};

export default ALayout;