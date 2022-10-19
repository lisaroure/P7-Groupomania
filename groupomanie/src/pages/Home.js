import React, { useState } from "react";
import { useQuery } from "react-query";
import { postService } from "../_services/post.service";
import { PAdd } from "./Posts";
import "./home.scss";
import logo from "../assets/groupomania.jpg";

const Home = () => {
  const [text, setText] = useState([]);
  const [image, setImage] = useState();
  const { isLoading, data } = useQuery("posts", postService.getAllPosts);

  const posts = data || [];

  if (isLoading) {
    return <div>Ca charge...</div>;
  }

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
    formData.append("post", text);
  };

  return (
    <>
      <div className="home-container">
        <h2>Bienvenue sur le réseau social de Groupomania !</h2>
        <img src={logo} alt="logo de groupomania" />
        <div className="create-post">
          <PAdd />
        </div>
        {posts.map((post) => (
          <form className="post-container" onSubmit={onSubmit} key={post._id}>
            <div className="group">

              <label htmlFor="post"></label>
              <textarea
                name="post"
                defaultValue={post.post}
                onChange={onChange}
              ></textarea>
            </div>
            <div className="group">
              <label htmlFor="image"></label>
              <input
                type="file"
                name="image"
                defaultValue={post.image}
                onChange={imageChange}
              />
            </div>
            <p>
              Posté le : {new Date(post.createdAt).toLocaleDateString("fr-FR")}
            </p>
            <button>Modifier</button>
          </form>
        ))}
      </div>
    </>
  );
};

export default Home;
