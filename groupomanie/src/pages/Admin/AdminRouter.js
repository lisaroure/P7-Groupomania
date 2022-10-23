import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Error from '../../_utils/Error';
import { ALayout, Dashboard } from '../Admin'
import AdminAuth from './AdminAuth';

const AdminRouter = () => {
    return (
        <Routes>
            <Route element={<ALayout />}>
                <Route path="dashboard" element={<Dashboard />} />
                <Route path='auth' element={<AdminAuth />} />
            </Route>
            <Route path='*' element={<Error />} />
        </Routes>
    );
};

export default AdminRouter;