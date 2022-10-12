import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Error from '../../../_utils/Error';
import PostLayout from './PostLayout';
import Accueil from './Accueil';
import Profil from '../User/Profil';
import { Add, UEdit, User } from '../../Admin/User';
import { PEdit, Post } from '../../Admin/Post';

const PublicRouter = () => {
    return (
        <Routes>
            <Route element={<PostLayout />}>
                <Route index element={<Accueil />} />
                <Route path='/accueil' element={<Accueil />} />
                <Route path='profil' element={<Profil />} />
                <Route path="user">
                    <Route path="index" element={<User />} />
                    <Route path="edit/:uid" element={<UEdit />} />
                    <Route path="add" element={<Add />} />
                </Route>
                <Route path="post">
                    <Route path="index" element={<Post />} />
                    <Route path="edit" element={<PEdit />} />
                </Route>

                <Route path="*" element={<Error />} />
            </Route>
        </Routes>
    );
};

export default PublicRouter;