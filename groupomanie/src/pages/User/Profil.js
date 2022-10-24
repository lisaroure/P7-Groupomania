import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import randomUser from "../../assets/random-user.png";
import { userService } from "../../_services/user.service";

import "./profil.scss"

const Profil = (users) => {
  let { uid } = useParams()

  const { isLoading, data } = useQuery('users', () => userService.getUser(uid.users))
  const user = data || []

  if (isLoading) {
    return <div>Loading...</div>
  }
  // const [users, setUsers] = useState([])
  // const [load, setLoad] = useState(false)
  // const flag = useRef(false)

  // console.log(uid);

  // useEffect(() => {
  //   if (flag.current === false) {
  //     if (users.includes(users._id, users.pseudo)) setUsers(true)
  //     userService.getUser(users._id)
  //       .then(res => {
  //         console.log(res.data.data)
  //         setLoad(true)
  //       })
  //       .catch(err => console.log(err))

  //   }
  //   return () => flag.current = true


  // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [])

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
