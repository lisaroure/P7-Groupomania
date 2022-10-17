import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import home from "../../assets/home.svg"

import "./header.scss";

const Header = () => {
  return (
    <>
      <header className="public-header">
        <Link to="/">
          <img src={logo} alt="logo de Groupomania" width={130} height={130} />
          <img src={home} alt="logo home" width={20} height={20}/>
          </Link>
        <nav>
          <ul>
            <li>
              <Link to="accueil">Accueil</Link>
            </li>
            <li>
              <Link to="profil">Profil</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
