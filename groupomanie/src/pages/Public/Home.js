import React from "react";
import "./home.scss";
import logo from "../../assets/groupomania.jpg";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home-container">
      <div>
        <h2>Bienvenue sur le réseau social de Groupomania !</h2>
        <p>Cliquez sur le logo pour accéder au site !</p>
      </div>

      <Link to="auth/login">
        <img src={logo} alt="logo de groupomania" width={270} />
      </Link>
    </div>
  );
};

export default Home;
