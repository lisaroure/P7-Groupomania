import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layout, Home, Login } from '../../pages/Public';
import Error from '../../_utils/Error';
import Signup from '../Auth/Signup';

const PublicRouter = () => {
    return (
        <Routes>
            <Route element={<Layout />}>
                <Route index element={<Home />} />

                <Route path="home" element={<Home />} />
                <Route path="login" element={<Login />} />
                <Route path="signup" element={<Signup />} />

                <Route path="*" element={<Error />} />
            </Route>

        </Routes>
    );
};

export default PublicRouter;