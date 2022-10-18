import React from "react";
// import { Link } from "react-router-dom";
import { useQuery } from "react-query";
import { postService } from "../_services/post.service"
import { PEdit } from "../pages/Posts"
import "./home.scss";
import logo from "../assets/groupomania.jpg";

const Home = () => {
  const { isLoading, data } = useQuery('posts', postService.getAllPosts)
  const posts = data || []


  if (isLoading) {
    return <div>Ca charge...</div>
  }

  return (
    <>
      <div className="home-container">
        <h2>Bienvenue sur le réseau social de Groupomania !</h2>
        <img src={logo} alt="logo de groupomania" />
      </div>
      <div className="post-body">
        <h3>Post</h3>
        <h3>Créé le</h3>
        <div className="post">
          {posts.map((post) => (
            <div className="post-container" key={post._id}>
              <p>{post.post}</p>
              <p>{new Date(post.createdAt).toLocaleDateString('fr-FR')}</p>
            </div>
          ))}
          <div className="btn">
            <button onClick={<PEdit />}>Modifier</button>
          </div>
        </div>
      </div>
    </>
  )
};
export default Home;
