import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './styles/index.css';
import Header from './components/Header';
import Signup from './Pages/Signup';
import Home from './Pages/Home';
import Login from './Pages/Login';

import AppContextProvider from './components/AppContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <AppContextProvider>
        < Header />
        <Routes>
          <Route exact path='/signup' element={<Signup />} />
          <Route exact path='/' element={<Login />} />
          <Route exact path='/home' element={<Home />} />
        </Routes>
      </AppContextProvider>
    </Router>
  </React.StrictMode>
);
