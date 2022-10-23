import React, { useEffect, useRef, useState } from "react";
import { postService } from "../_services/post.service";
import { PAdd } from "./Posts";
import "./home.scss";
import logo from "../assets/groupomania.jpg";
import globe from "../assets/globe.svg"

const Home = () => {
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
  }, [])

  return (
    <>
      <div className="home-container">

        <div className="bienvenue">
          <img src={logo} alt="logo de groupomania" />
          <h2>Bienvenue sur le réseau social de Groupomania !</h2>
        </div>

        <div className="create-post">
          <PAdd />
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


            <img src={post.image} alt="user-pic" />

            <div className="post-infos">
              <p>
                Posté le : {new Date(post.createdAt).toLocaleDateString("fr-FR")}
              </p>

            </div>


          </div>
        ))}

      </div>

    </>
  );
};

export default Home;
