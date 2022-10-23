import Axios from "./caller.service";

let getAllPosts = () => {
  return Axios.get("/api/post");

};

let getPost = (_id) => {
  return Axios.get("/api/post/" + _id);

};

let createPost = (post) => {
  return Axios.post("/api/post", post);
};

let modifyPost = (post) => {
  return Axios.patch("/api/post", post);
};

let likePost = (id) => {
  return Axios.patch("/api/post/like/" + id)
}

let unlikePost = (_id) => {
  return Axios.patch("/api/post/unlike/" + _id)
}

export const postService = {
  getAllPosts,
  getPost,
  createPost,
  modifyPost,
  likePost,
  unlikePost
};
