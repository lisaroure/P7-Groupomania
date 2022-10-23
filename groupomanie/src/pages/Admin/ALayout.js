import React from 'react';
import { Outlet } from 'react-router-dom';

const Layout = () => {
    return (
        <div className='admin-layout'>
            Layout Admin
            < Outlet />
        </div>
    );
};

export default Layout;