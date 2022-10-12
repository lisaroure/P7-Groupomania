import React from "react";
import { useNavigate } from "react-router-dom";
import logo from '../../assets/logo.png'
import { accountService } from "../../_services/account.service";

import "./header.scss";

const Header = () => {
  let navigate = useNavigate()

  const logout = () => {
    accountService.logout()
    navigate('/home')
  }

  return (
    <>
      <header className="home-header">
        <img
          src={logo}
          alt='logo de Groupomania'
          width={130}
          height={130}
        />
        <button onClick={logout}>Se déconnecter</button>
      </header>
    </>
  );
};

export default Header;