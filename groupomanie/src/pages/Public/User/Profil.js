import React, { useEffect, useRef, useState } from "react";
import randomUser from "../../../assets/random-user.png";
import { userService } from "../../../_services/user.service";

const Profil = () => {
  const [users, setUsers] = useState([]);
  const flag = useRef(false);

  useEffect(() => {
    if (flag.current === false) {
      userService
        .getUser()
        .then((res) => {
          setUsers(res.data.data);
        })
        .catch((err) => console.log(err));
    }
    return () => (flag.current = true);
  }, []);

  return (
    <div className="profil-card">
      {users.map((user) => (
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
