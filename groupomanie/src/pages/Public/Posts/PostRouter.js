import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Error from '../../../_utils/Error';
import PostLayout from './PostLayout';
import Accueil from './Accueil';
import Login from '../../Auth/Login';
import Signup from '../../Auth/Signup';

const PublicRouter = () => {
    return (
        <Routes>
            <Route element={<PostLayout />}>
                <Route index element={<Accueil />} />
                <Route path='accueil' element={<Accueil />} />
                <Route path="auth/login" element={<Login />} />
                <Route path="auth/signup" element={<Signup />} />
                <Route path="*" element={<Error />} />
            </Route>
        </Routes>
    );
};

export default PublicRouter;