import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import randomUser from "../../assets/random-user.png";
import { userService } from "../../_services/user.service";

import "./profil.scss"

const Profil = () => {
  const [user, setUsers] = useState([])
  const flag = useRef(false)
  const { id } = useParams()

  useEffect(() => {

    if (flag.current === false) {
      userService.getUser(id)
        .then(res => {
          console.log(res.data)
          setUsers(res.data.data)
        })
        .catch(err => console.log(err))
    }

    return () => flag.current = true

  }, [])

  return (
    <div className="profil-container">

      <div className="profil-card">

        <h3>Votre profil {user.pseudo} ✨</h3>
        <img src={randomUser} alt="User pic" />
        {/* <button>Modifier la photo</button> */}
        <div className="profil-info">

          <span>Membre depuis le : {new Date(user.createdAt).toLocaleDateString("fr-FR")}</span>

        </div>
      </div>

    </div>
  );
};

export default Profil;
