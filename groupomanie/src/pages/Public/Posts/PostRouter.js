import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Signup from '../../Auth/Signup';
import Error from '../../_utils/Error';
import Login from '../Login';
import PostLayout from './PostLayout';
import Accueil from './Posts/Accueil';

const PublicRouter = () => {
    return (
        <Routes>
            <Route element={<PostLayout />}>
                <Route index element={<Accueil />} />
                <Route path="login" element={<Login />} />
                <Route path="signup" element={<Signup />} />
                <Route path='accueil' element={<Accueil />} />
                <Route path="*" element={<Error />} />
            </Route>
        </Routes>
    );
};

export default PublicRouter;