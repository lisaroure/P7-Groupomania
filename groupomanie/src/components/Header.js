import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

import "./header.scss";

const Header = () => {
  return (
    <>
      <header className="public-header">
        <Link to="/home">
          <img src={logo} alt="logo de Groupomania" width={130} height={130} />
        </Link>
        <nav>
          <ul>
            <li>
              <Link to="/home">Accueil</Link>
            </li>
            <li>
              <Link to="/profil">Profil</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
