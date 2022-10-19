import React, { useState } from "react";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import { postService } from "../../_services/post.service";

const PostEdit = () => {
  let navigate = useNavigate();
  const [text, setText] = useState([]);
  const [image, setImage] = useState();

  const { isLoading, data } = useQuery('posts', postService.getAllPosts, { onSuccess: setImage, setText })
  const posts = data || []

  if (isLoading) {
    return <i className="fas fa-spinner fa-spin"></i>;
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

    postService
      .modifyPost(formData)
      .then(() => navigate(".."))
      .catch((err) => console.log(err));
  };

  return (
    <>
      {posts.map((post) => (

        <form onSubmit={onSubmit} key={post._id}>

          <div className="group" >
            <label htmlFor="post">Votre texte</label>
            <textarea name="post" defaultValue={post.post} onChange={onChange}></textarea>
          </div>

          <div className="group">
            <label htmlFor="image">Image</label>
            <input type="file" name="image" onChange={imageChange} />
          </div>
          <div className="group">
            <button>Modifier</button>
          </div>

        </form>
      ))
      }
    </>
  );
};

export default PostEdit;
