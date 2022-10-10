import React from "react";
import { Link } from "react-router-dom";

import "./header.scss";

const Header = () => {
  return (
    <>
      <header className="public-header">
        <ul>
          <li>
            <Link to="/home"></Link>Accueil
          </li>
          <li>
            <Link to="/login"></Link>Connexion
          </li>
          <li>
            <Link to="/signup"></Link>Inscription
          </li>
          <li>
            <Link to="/admin"></Link>Admin
          </li>
        </ul>
      </header>
    </>
  );
};

export default Header;
