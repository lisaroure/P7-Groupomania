import React, { useEffect, useRef, useState } from "react";
import { postService } from "../_services/post.service";
import PostAdd from "../pages/Posts/PostAdd"
import LikeButton from "../components/LikeButton";
import "./home.scss";
import logo from "../assets/groupomania.jpg";
import globe from "../assets/globe.svg"
import { useNavigate } from "react-router-dom";

const Home = () => {
  let navigate = useNavigate()
  const flag = useRef(false)
  const [posts, setPosts] = useState([])
  const adminId = localStorage.getItem('adminId')

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
  }, [])

  const updatePost = () => {
    navigate("/edit-post")
  }

  const delPost = (postId) => {
    console.log(postId);
    postService.delPost(postId)
      .then(res => console.log(res.data))
      .catch(err => console.log(err))
  }

  return (
    <>
      <div className="home-container">

        <div className="bienvenue">
          <img src={logo} alt="logo de groupomania" />
          <h2>Bienvenue sur le réseau social de Groupomania !</h2>
        </div>

        <div className="create-post">
          <PostAdd />
        </div>

        <div className="fil">
          <img src={globe} alt="globe" />
          <h4>Fil d'actualité</h4>
        </div>

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
            {adminId && (
              <>
                <button onClick={updatePost}>Modifier ce post</button>
                <button onClick={() => delPost(post._id)}>Supprimer ce post</button>
              </>
            )}

            {post.posterId && (
              <>
                <button onClick={updatePost}>Modifier ce post</button>
                <button onClick={() => delPost(post._id)}>Supprimer ce post</button>
              </>
            )}
          </div>


        ))}

      </div>

    </>
  );
};

export default Home;
