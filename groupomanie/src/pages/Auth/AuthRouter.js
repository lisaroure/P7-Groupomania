import React from "react";
import { Route, Routes } from "react-router-dom";
import { LogAdmin } from "../Admin/Log/";
import Login from "./Login";
import Signup from "./Signup";
import Error from "../../_utils/Error";

const AuthRouter = () => {
  return (
    <Routes>
      <Route index element={<Login />} />
      <Route path="/logadmin" element={<LogAdmin />} />
      <Route path="login" element={<Login />} />
      <Route path="signup" element={<Signup />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
};

export default AuthRouter;
