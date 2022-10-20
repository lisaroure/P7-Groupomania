import React from "react";
import { useQuery } from "react-query";
import { postService } from "../_services/post.service";
import { PAdd } from "./Posts";
import "./home.scss";
import logo from "../assets/groupomania.jpg";

const Home = () => {

  const { isLoading, data } = useQuery("posts", () => postService.getAllPosts());

  const posts = data || [];

  if (isLoading) {
    <i className="fas fa-spinner fa-spin"></i>;
  }

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

        {posts.map((post) => (
          <div className="post-container" key={post._id}>

            <div className="group">
              {post.post}
            </div>


            <img src={post.image} alt="user-pic" />


            <p>
              Posté le : {new Date(post.createdAt).toLocaleDateString("fr-FR")}
            </p>

          </div>
        ))}

      </div>

    </>
  );
};

export default Home;
