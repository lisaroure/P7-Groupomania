import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header';
import Signup from './pages/Signup';
import Home from './pages/Home';
import Login from './pages/Login';

import AppContextProvider from './utils/context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <AppContextProvider>
      < Header />
      <Routes>
        <Route exact path='/signup' element={<Signup />} />
        <Route exact path='/login' element={<Login />} />
        <Route exact path='/home' element={<Home />} />
        <Route exact path='/' element={<Login />} />
      </Routes>
    </AppContextProvider>
  </BrowserRouter>
);