import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header';
import Signup from './Pages/Signup';
import Home from './Pages/Home';
import Login from './Pages/Login';

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