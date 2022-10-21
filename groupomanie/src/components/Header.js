import React from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import { accountService } from "../_services/account.service";

import "./header.scss";

const Header = () => {

  let navigate = useNavigate()

  const logout = () => {
    accountService.logout()
    navigate("/auth/login")
  }

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
        <button onClick={logout}>Se déconnecter</button>
      </header>
    </>
  );
};

export default Header;
