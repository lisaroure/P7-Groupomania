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
  const [text, setText] = useState([]);
  const [image, setImage] = useState();
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

  const onChange = (e) => {
    setText(e.target.value);
  };

  const imageChange = (e) => {
    console.log(e.target.files);
    setImage(e.target.files[0]);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("imageUrl", image);
    formData.append("user", users);
    formData.append("post", text);
    userService
      .modifyUser(uid)
      .then(() => navigate(".."))
      .catch((err) => console.log(err));
  };


  const delUser = (userId) => {
    console.log(userId);
    userService.deleteUser(userId)
      .then(res => console.log(res.data))
      .catch(err => console.log(err))
  }

  return (
    <>
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
                className="delete-user"
                src={trash}
                alt="Supprimer"
                onClick={() => delUser(user._id)}
              />
            </div>

            <div className="profil-info">
              <span>Membre depuis le : {new Date(user.createdAt).toLocaleDateString("fr-FR")}</span>
            </div>
          </div>
        ))
        }
      </div>

      <div className="UserEdit">
        <form onSubmit={onSubmit}>
          <div className="group" >
            <label htmlFor="pseudo">Pseudo</label>
            <div defaultValue={users.pseudo} onChange={onChange}></div>
          </div>

          <div className="group">
            <label htmlFor="email">Email</label>
            <div defaultValue={users.email} onChange={onChange}></div>
          </div>
          <div className="user-post">
            <label htmlFor="post">Modifier votre post</label>
            <textarea defaultValue={users.text} name="post" onChange={onChange}></textarea>
          </div>
          <div className="group">
            <label htmlFor="image">Image</label>
            <input type="file" name="image" onChange={imageChange} />
          </div>
          <div className="group">
            <button>Modifier</button>
          </div>
        </form>
      </ div>
    </>
  );
};

export default Profil;
