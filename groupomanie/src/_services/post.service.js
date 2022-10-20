import Axios from "./caller.service";

let getAllPosts = async () => {
  const { data } = await Axios.get("/api/post");

  return data;
};

let getPost = async (uid) => {
  const { data } = await Axios.get("/api/post/" + uid);
  return data
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
