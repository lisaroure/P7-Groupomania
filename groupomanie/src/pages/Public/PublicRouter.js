import React from "react";
import { Route, Routes } from "react-router-dom";
import { Layout, Home } from "../../pages/Public";
import Error from "../../_utils/Error";
import Accueil from "./Posts/Accueil";
import { Profil, User } from "./User";

const PublicRouter = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element="/" />
        <Route path="home" element={<Home />} />
        <Route path="accueil" element={<Accueil/>} />
        <Route path="user">
          <Route path="index" element={<User />} />
          <Route path="profil" element={<Profil />} />
        </Route>

        <Route path="*" element={<Error />} />
      </Route>
    </Routes>
  );
};

export default PublicRouter;
