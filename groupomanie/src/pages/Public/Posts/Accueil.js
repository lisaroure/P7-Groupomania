import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { postService } from "../../../_services/post.service";
import "./accueil.scss";
import { accountService } from "../../../_services/account.service";

const Accueil = () => {
  const [posts, setPosts] = useState([]);
  const flag = useRef(false);
  let navigate = useNavigate();

  const logout = () => {
    accountService.logout();
    navigate("/home");
  };

  useEffect(() => {
    if (flag.current === false) {
      postService
        .getAllPosts()
        .then((res) => {
          console.log(res.data);
          setPosts(res.data.data);
        })
        .catch((err) => console.log(err));
    }
    // méthode pour éviter le double appel useEffect
    return () => (flag.current = true);
  }, []);

  return (
    <>
      <header className="home-header">
        <button onClick={logout}>Se déconnecter</button>
      </header>
      <div className="post" />
      <table>
        <thead>
          <tr>
            <th>Post</th>
            <th>Créé le</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((post) => (
            <tr key={post.id}>
              <td>
                <Link to={`../edit/${post._id}`}>jgbkjbghjvj</Link>
              </td>
              <td>{post.createdAt}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Accueil;
