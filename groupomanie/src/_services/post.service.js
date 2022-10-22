import Axios from "./caller.service";

let getAllPosts = () => {
  return Axios.get("/api/post");

};

let getPost = (uid) => {
  return Axios.get("/api/post/" + uid);

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
