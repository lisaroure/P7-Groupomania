import React from "react";
import { Link } from "react-router-dom";
import { useQuery } from "react-query";
import { postService } from "../_services/post.service"
import "./home.scss";
import logo from "../assets/groupomania.jpg";

const Home = () => {
  const { isLoading, data } = useQuery('posts', postService.getAllPosts)
  const posts = data || { "data": [] }

  if (isLoading) {
    return <div>Ca charge...</div>
  }

  return (
    <>
      <div className="home-container">
        <h2>Bienvenue sur le réseau social de Groupomania !</h2>
        <img src={logo} alt="logo de groupomania" />
        <p></p>
      </div>
      <div className="post-body">
        <table>
          <thead>
            <tr>
              <th>Post</th>
              <th>Créé le</th>
            </tr>
          </thead>
          <tbody>
            {posts.data.map((post) => (
              <tr key={post.id}>
                <td>
                  <Link to={`../edit/${post._id}`}></Link>
                </td>
                <td>{post.createdAt}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Home;
