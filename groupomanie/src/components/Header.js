import React from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import { accountService } from "../_services/account.service";

import "./header.scss";
import deconnect from "../assets/logout.svg"

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
            <img className="logout"
              src={deconnect}
              alt="Se déconnecter"
              onClick={logout}>
            </img>
          </ul>
        </nav>

      </header>
    </>
  );
};

export default Header;
