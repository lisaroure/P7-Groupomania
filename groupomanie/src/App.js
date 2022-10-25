import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home, Layout } from "./pages";
import AuthGuard from "./_helpers/AuthGuard";
import Error from "./_utils/Error";
import AuthRouter from "./pages/Auth/AuthRouter";
import PostAdd from "./pages/Posts/PostAdd";
import PostEdit from "./pages/Posts/PostEdit";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>

          <Route element={<Layout />}>
            <Route
              path="/*"
              element={
                <AuthGuard>
                  <Routes>
                    <Route index element={<Home />} />
                    <Route path="home" element={<Home />} />
                    <Route path="add" element={<PostAdd />} />
                    <Route path="edit-post/:pid" element={<PostEdit />} />
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
