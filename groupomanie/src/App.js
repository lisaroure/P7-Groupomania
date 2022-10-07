import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AdminRouter from './pages/Admin/AdminRouter';
import AuthRouter from './pages/Auth/AuthRouter';
import PublicRouter from './pages/Public/PublicRouter';
import AuthGuard from './_helpers/AuthGuard';

const App = () => {
    return (
        <div className='App'>
            <BrowserRouter>
                <Routes>
                    <Route path='/*' element={<PublicRouter />} />
                    <Route path='/admin/*' element={
                        <AuthGuard>
                            < AdminRouter />
                        </AuthGuard>
                    } />
                    <Route path='/auth/*' element={<AuthRouter />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default App;