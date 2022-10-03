import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './components/Header';
import Signup from './Pages/Signup';
import Home from './Pages/Home';
import Login from './Pages/Login';

import PseudoProvider from './utils/context';
import { createGlobalStyle } from 'styled-components';

// Style Global du site importé grâce à styled-components
const GlobalStyle = createGlobalStyle`
div {
  font-family: 'Lato', sans-serif;
}
`
// Router
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <PseudoProvider>
        <GlobalStyle />
        < Header />
        <Routes>
          <Route exact path='/signup' element={<Signup />} />
          <Route exact path='/login' element={<Login />} />
          <Route exact path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
        </Routes>
      </PseudoProvider>
    </Router>
  </React.StrictMode>
);
