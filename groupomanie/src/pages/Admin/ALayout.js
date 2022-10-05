import React from 'react';
import { Outlet } from 'react-router-dom';

const ALayout = () => {
    return (
        <div className='admin-layout'>
            Layout Admin
            < Outlet />
        </div>
    );
};

export default ALayout;