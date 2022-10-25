import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../../components/Admin/AHeader';
import SideMenu from '../../components/Admin/SideMenu';
import './admin.scss';

const ALayout = () => {
    return (
        <div className='admin-layout'>
            Layout Admin
            < Outlet />
            <Header />
            <div id='admin'>
                <SideMenu />
            </div>
            <div id='admin-body'>< Outlet /></div>
        </div>
    );
};
export default ALayout;