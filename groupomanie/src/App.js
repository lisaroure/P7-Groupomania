import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home, Layout } from "./pages";
import AuthGuard from "./_helpers/AuthGuard";
import Error from "./_utils/Error";
import AuthRouter from "./pages/Auth/AuthRouter";
import { Profil } from "./pages/User";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route element={<AuthGuard />}>
              <Route index element={<Home />} />
              <Route to="home" element={<Home />} />
              <Route to="profil" element={<Profil />} />
            </Route>

            <Route path="/auth/*" element={<AuthRouter />} />
            <Route path="*" element={<Error />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
