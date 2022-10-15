import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/logo.png";

import "./p-header.scss";

const PHeader = () => {
  return (
    <>
      <header className="public-header">
        <img src={logo} alt="logo de Groupomania" width={130} height={130} />
        <nav>
          <ul>
            <li>
              <Link to="auth/login">Connexion</Link>
            </li>
            <li>
              <Link to="auth/signup">Inscription</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default PHeader;
