import React from "react";
import { Route, Routes } from "react-router-dom";
import { Layout, Home } from "../../pages/Public";
import { Login, Signup } from "../Auth";
import Error from "../../_utils/Error";

const PublicRouter = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="*" element={<Error />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
      </Route>
    </Routes>
  );
};

export default PublicRouter;
