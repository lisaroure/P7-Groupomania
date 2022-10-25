import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { postService } from "../_services/post.service";
import { accountService } from "../_services/account.service";
import PostAdd from "../pages/Posts/PostAdd";
import LikeButton from "../components/LikeButton";

import "./home.scss";
import trash from "../assets/trash.svg";
import update from "../assets/update.svg";
import logo from "../assets/groupomania.jpg";

const Home = () => {
  let navigate = useNavigate()
  const flag = useRef(false)
  const [posts, setPosts] = useState([])

  useEffect(() => {
    if (flag.current === false) {
      postService.getAllPosts()
        .then(res => {
          console.log(res.data)
          setPosts(res.data)
        })
        .catch(err => console.log(err))

    }
    return () => flag.current = true
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const updatePost = (postId) => {
    navigate("/edit-post/" + postId)
  }

  const delPost = (postId) => {
    console.log(postId);
    postService.delPost(postId)
      .then(res => setPosts(current => current.filter(post => post._id !== postId)))
      .catch(err => console.log(err))
  }

  return (
    <>
      <div className="home-container">

        <div className="bienvenue">
          <img src={logo} alt="logo de groupomania" />
          <h1>Bienvenue sur le réseau social de Groupomania !</h1>
        </div>
        <h4 className="news">Fil d'actualité</h4>

        <div className="fil">

          {posts.map((post) => (
            <div className="post-container" key={post._id}>

              <div className="group">
                {post.post}
              </div>

              <img
                src={post.imageUrl}
                alt="user-pic"
              />

              <div className="post-infos">

                <LikeButton post={post} />

                <p className="pinfos">
                  Posté le : {new Date(post.createdAt).toLocaleDateString("fr-FR")}
                </p>

              </div>

              {post.posterId === accountService.getInfo().userId || accountService.getInfo().userId === accountService.getAdmin() ? (
                <div className="updating">

                  <img onClick={() => updatePost(post._id)}
                    src={update}
                    alt="Modifier"
                  ></img>

                  <img onClick={() => {
                    if (window.confirm('Êtes vous sûr.e de vouloir supprimer ce post ?'))
                      delPost(post._id)
                  }}
                    src={trash}
                    alt="Supprimer"
                  ></img>

                </div>

              ) : ''}
            </div>


          ))}
        </div>

        <h4 className="news">Quelles sont vos news ?</h4>
        <div className="create-post">
          <PostAdd marcel={setPosts} />
        </div>

      </div>

    </>
  );
};

export default Home;
