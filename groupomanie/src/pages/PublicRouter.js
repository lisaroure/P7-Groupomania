import React from "react";
import { Route, Routes } from "react-router-dom";
import Error from "../_utils/Error";
import { Profil, User } from "./User";
import Home from "./Home";
import Accueil from "./Posts/Accueil";

const PublicRouter = () => {
  return (
    <Routes>
      <Route index element="/" />
      <Route path="home" element={<Home />} />
      <Route path="accueil" element={<Accueil />} />
      <Route path="profil" element={<Profil />}>
        <Route path="user" element={<User />} />
      </Route>

      <Route path="*" element={<Error />} />
    </Routes>
  );
};

export default PublicRouter;
