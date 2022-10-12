import React from 'react';
import { Outlet } from 'react-router-dom';
import PHeader from '../../components/Public/Home/PHeader';

const Layout = () => {
    return (
        <div className='layout'>
            <PHeader />
            <Outlet />
        </div>
    );
};

export default Layout;