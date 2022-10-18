import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home, Layout } from "./pages";
import AuthGuard from "./_helpers/AuthGuard";
import Error from "./_utils/Error";
import AuthRouter from "./pages/Auth/AuthRouter";
import { Profil } from "./pages/User";
import PostAdd from "./pages/Posts/PostAdd";
import PostEdit from "./pages/Posts/PostEdit";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />

          <Route element={<Layout />}>
            <Route
              path="/*"
              element={
                <AuthGuard>
                  <Routes>
                    <Route path="home" element={<Home />} />
                    <Route path="profil" element={<Profil />} />
                    <Route path="add" element={<PostAdd />} />
                    <Route path="edit-post" element={<PostEdit />} />
                  </Routes>
                </AuthGuard>
              }
            />
          </Route>

          <Route path="/auth/*" element={<AuthRouter />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
