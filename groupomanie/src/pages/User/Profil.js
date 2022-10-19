import React from "react";
import { useQuery } from "react-query";
import randomUser from "../../assets/random-user.png";
import { userService } from "../../_services/user.service";

import "./profil.scss"

const Profil = () => {
  const { isLoading, data } = useQuery('users', userService.getAllUsers)
  const users = data || { "data": [] }

  if (isLoading) {
    <i className="fas fa-spinner fa-spin"></i>;
  }
  return (
    <div className="profil-container">
      {users.data.map((user) => (
        <div className="profil-card" key={user._id}>
          <h3>Votre profil {user.pseudo} ✨</h3>
          <img src={randomUser} alt="User pic" />
          <div className="profil-info">
            <span>Membre depuis le : {new Date(user.createdAt).toLocaleDateString("fr-FR")}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Profil;
