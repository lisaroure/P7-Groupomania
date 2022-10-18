import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home, Layout } from "./pages";
import AuthGuard from "./_helpers/AuthGuard";
import Error from "./_utils/Error";
import { Profil } from "./pages/User";
import Login from "./pages/Auth/Login";
import Signup from "./pages/Auth/Signup";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route element={<AuthGuard />}>
              <Route index element={<Home />} />
              <Route to="/home" element={<Home />} />
              <Route to="/profil" element={<Profil />} />
            </Route>
            <Route to="/login" element={<Login />} />
            <Route to="/signup" element={<Signup />} />
            <Route path="*" element={<Error />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
