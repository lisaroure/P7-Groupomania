import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './styles/index.css';
import Header from './components/Header';
import Signup from './Pages/SignUp';
import Home from './Pages/Home';
import Login from './Pages/Login';

import AppContextProvider from './components/AppContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <AppContextProvider>
      < Header />
      <Routes>
        <Route path='/signup' element={<Signup />} />
        <Route path='/' element={<Login />} />
        <Route path='/home' element={<Home />} />
        <Route path='*' element={<Login />} />
      </Routes>
    </AppContextProvider>
  </BrowserRouter>
);
