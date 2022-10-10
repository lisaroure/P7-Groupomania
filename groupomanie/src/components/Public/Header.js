import React from "react";
import { Link } from "react-router-dom";

import "./header.scss";

const Header = () => {
  return (
    <>
      <header className="public-header">
        <nav>
          <ul>
            <li>
              <Link to="home">Accueil</Link>
            </li>
            <li>
              <Link to="login">Connexion</Link>
            </li>
            <li>
              <Link to="signup">Inscription</Link>
            </li>
            <li>
              <Link to="admin">Admin</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
