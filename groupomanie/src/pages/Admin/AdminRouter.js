import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Error from '../../_utils/Error';
import { ALayout, Dashboard } from '../Admin'

const AdminRouter = () => {
    return (
        <Routes>
            <Route element={<ALayout />}>
                <Route path="dashboard" element={<Dashboard />} />
            </Route>
            <Route path='*' element={<Error />} />
        </Routes>
    );
};

export default AdminRouter;