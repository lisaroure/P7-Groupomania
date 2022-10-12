import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layout, Home } from '../../pages/Public';
import Error from '../../_utils/Error';
import Login from '../Auth/Login';
import Signup from '../Auth/Signup';

const PublicRouter = () => {
    return (
        <Routes>
            <Route element={<Layout />}>
                <Route index element={<Home />} />

                <Route path="home" element={<Home />} />
                <Route path="/auth/login" element={<Login />} />
                <Route path="/auth/signup" element={<Signup />} />
                <Route path="*" element={<Error />} />
            </Route>

        </Routes>
    );
};

export default PublicRouter;