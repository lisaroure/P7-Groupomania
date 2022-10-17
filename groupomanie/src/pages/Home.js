import React from "react";
import "./home.scss";
import logo from "../assets/groupomania.jpg";
import Accueil from "./Posts/Accueil";

const Home = () => {
  return (
    <div className="home-container">
      <h2>Bienvenue sur le réseau social de Groupomania !</h2>
      <img src={logo} alt="logo de groupomania" />
      <Accueil />
    </div>
  );
};

export default Home;
