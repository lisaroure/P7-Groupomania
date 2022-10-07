import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AdminRouter from './pages/Admin/AdminRouter';
import AuthRouter from './pages/Auth/AuthRouter';
import PublicRouter from './pages/Public/PublicRouter';

const App = () => {
    return (
        <div className='App'>
            <BrowserRouter>
                <Routes>
                    <Route path='/*' element={<PublicRouter />} />
                    <Route path='/admin/*' element={< AdminRouter />} />
                    <Route path='/auth/*' element={<AuthRouter />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default App;