import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Profil } from '../User/Profil';
import Error from '../../_utils/Error';

const UserRouter = () => {
    return (
        <Routes>
            <Route index element={<Profil />} />
            <Route path='profil' element={<Profil />} />
            <Route path="*" element={<Error />} />
        </Routes>
    );
};

export default UserRouter;