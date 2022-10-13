import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { accountService } from "../../../_services/account.service";
import logo from "../../../assets/groupomania.jpg";

import "../../Auth/auth.scss";

const Login = () => {
  let navigate = useNavigate();

  // initialisation du state
  const [credentials, setCredentials] = useState({
    email: "test@admin.fr",
    password: "mdpadmin",
  });
  //passer par l'état précédent pour modifier les champs input
  const onChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };
  //déclenchement du formulaire
  const onSubmit = (e) => {
    e.preventDefault();
    accountService
      .login(credentials)
      .then((res) => {
        accountService.saveToken(res.data.token);
        navigate("/admin/index");
      })
      .catch((error) => console.log(error));
  };

  return (
    <form onSubmit={onSubmit}>
      <img src={logo} alt="logo de Groupomania" />
      <h3>Connexion</h3>
      <div className="group">
        <label htmlFor="email">Adresse e-mail</label>
        <input
          type="text"
          name="email"
          placeholder="Votre e-mail"
          value={credentials.email}
          onChange={onChange}
        />
      </div>
      <div className="group">
        <label htmlFor="password">Mot de passe</label>
        <input
          type="text"
          name="password"
          placeholder="Votre mot de passe"
          value={credentials.password}
          onChange={onChange}
        />
      </div>
      <div className="group">
        <button>Connexion</button>
      </div>
      <p>Pas de compte ?</p>
      <Link to="/auth/signup">Inscrivez vous !</Link>
    </form>
  );
};

export default Login;
