import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AuthRouter from "./pages/Auth/AuthRouter";
import { Home, Layout } from "./pages";
import PublicRouter from "./pages/PublicRouter";
import PublicAuthGuard from "./_helpers/PublicAuthGuard";
import Error from "./_utils/Error";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<Home />} />
            <Route
              path="/accueil/*"
              element={
                <PublicAuthGuard>
                  <PublicRouter />
                </PublicAuthGuard>
              }
            />
            <Route
              path="/profil/*"
              element={
                <PublicAuthGuard>
                  <PublicRouter />
                </PublicAuthGuard>
              }
            />
            <Route path="/auth/*" element={<AuthRouter />} />
            <Route path="*" element={<Error />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
