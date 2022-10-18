import Axios from "./caller.service";

let getAllPosts = async () => {
  const { data } = await Axios.get("/api/post");
  console.log(data);
  return data;
};

let getPost = (id) => {
  return Axios.get("/api/post/" + id);
};

let createPost = (post) => {
  return Axios.post("/api/post", post);
};

let modifyPost = (post) => {
  return Axios.patch("/api/post", post);
};

export const postService = {
  getAllPosts,
  getPost,
  createPost,
  modifyPost,
};
