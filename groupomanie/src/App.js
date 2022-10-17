import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AuthRouter from "./pages/Auth/AuthRouter";
import { Home } from "./pages";
import PublicRouter from "./pages/PublicRouter";
import PublicAuthGuard from "./_helpers/PublicAuthGuard";
import Error from "./_utils/Error";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route
            path="/home/*"
            element={
              <PublicAuthGuard>
                <PublicRouter />
              </PublicAuthGuard>
            }
          />

          <Route path="/auth/*" element={<AuthRouter />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
