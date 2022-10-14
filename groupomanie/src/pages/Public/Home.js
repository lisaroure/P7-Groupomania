import React from "react";
import "./home.scss";
import logo from "../../assets/groupomania.jpg";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home-container">
      <h2>Bienvenue sur le réseau social de Groupomania !</h2>
      <p>Accéder à <Link to="/accueil">mon compte</Link></p>
      <img src={logo} alt="logo de groupomania" />
    </div>
  );
};

export default Home;
