import React from "react";
import { useQuery } from "react-query";
import randomUser from "../../../assets/random-user.png";
import { userService } from "../../../_services/user.service";

const Profil = () => {
  const { isLoading, data } = useQuery('user', userService.getUser)
  const user = data || { "data": [] }

  if (isLoading) {
    return <div>Ca charge...</div>
  }

  return (
    <div className="profil-card">
      {user.data.map((user) => (
        <div key={user.pseudo}>
          <h3>Votre profil {user.pseudo}</h3>
          <img src={randomUser} alt="User pic" />

          <span>Membre depuis :{user.createdAt}</span>
        </div>
      ))}
    </div>
  );
};

export default Profil;
