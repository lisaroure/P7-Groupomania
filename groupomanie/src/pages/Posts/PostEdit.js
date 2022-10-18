import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { postService } from "../../_services/post.service";

const PostEdit = () => {
  const [text, setText] = useState([]);
  const [image, setImage] = useState();
  let navigate = useNavigate();

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
      <form onSubmit={onSubmit}>
        <div className="group">
          <label htmlFor="post">Votre texte</label>
          <textarea name="post" onChange={onChange}></textarea>
        </div>
        <div className="group">
          <label htmlFor="image">Image</label>
          <input type="file" name="image" onChange={imageChange} />
        </div>
        <div className="group">
          <button>Modifier</button>
        </div>
      </form>
    </>
  );
};

export default PostEdit;
