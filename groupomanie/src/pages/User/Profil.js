import React, { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import randomUser from "../../assets/random-user.png";
import { userService } from "../../_services/user.service";

import trash from "../../assets/trash.svg"
import update from "../../assets/pen-r.svg"
import "./profil.scss"

const Profil = () => {

  let { uid } = useParams()
  console.log(uid);
  let navigate = useNavigate()
  const [users, setUsers] = useState([])
  const flag = useRef(false)


  const handlePost = () => {
    navigate("/edit-post")
  }

  useEffect(() => {
    if (flag.current === false) {
      userService.getUser(uid)
        .then(res => {
          console.log(res.data.data)
          setUsers(res.data.data)
        })
        .catch(err => console.log(err))

    }
    return () => flag.current = true

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="profil-container">
      {users.map(user => (
        <div className="profil-card" key={user._id}>

          <h3>Votre profil {user.pseudo} ✨</h3>
          <img src={randomUser} alt="User pic" />
          {/* <button>Modifier la photo</button> */}
          <div className="post" post={user.post}>
            <img
              onClick={handlePost}
              src={update}
              alt="Modifier"
              post={user.post}
            />
            <img
              src={trash}
              alt="Supprimer"
            />
          </div>

          <div className="profil-info">
            <span>Membre depuis le : {new Date(user.createdAt).toLocaleDateString("fr-FR")}</span>
          </div>
        </div>
      ))
      }
    </div>
  );
};

export default Profil;
